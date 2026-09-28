# Neon SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'Neon_types'


class NeonSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = NeonUtility.new
    @_utility = utility

    config = NeonConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = NeonHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = NeonHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, NeonFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    NeonUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = NeonHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = NeonHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = NeonHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = NeonSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => NeonError.new(
        "#{op}_allow",
        "NeonSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue NeonError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = NeonHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = NeonHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = NeonError.new(
        "graphql_error", "NeonSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.Anonymize.list / client.Anonymize.load({ "id" => ... })
  def Anonymize(data = nil)
    require_relative 'entity/anonymize_entity'
    AnonymizeEntity.new(self, data)
  end


  # Canonical facade: client.AnonymizedBranchStatus.list / client.AnonymizedBranchStatus.load({ "id" => ... })
  def AnonymizedBranchStatus(data = nil)
    require_relative 'entity/anonymized_branch_status_entity'
    AnonymizedBranchStatusEntity.new(self, data)
  end


  # Canonical facade: client.ApiKey.list / client.ApiKey.load({ "id" => ... })
  def ApiKey(data = nil)
    require_relative 'entity/api_key_entity'
    ApiKeyEntity.new(self, data)
  end


  # Canonical facade: client.Auth.list / client.Auth.load({ "id" => ... })
  def Auth(data = nil)
    require_relative 'entity/auth_entity'
    AuthEntity.new(self, data)
  end


  # Canonical facade: client.AuthLegacy.list / client.AuthLegacy.load({ "id" => ... })
  def AuthLegacy(data = nil)
    require_relative 'entity/auth_legacy_entity'
    AuthLegacyEntity.new(self, data)
  end


  # Canonical facade: client.AvailablePreloadLibrary.list / client.AvailablePreloadLibrary.load({ "id" => ... })
  def AvailablePreloadLibrary(data = nil)
    require_relative 'entity/available_preload_library_entity'
    AvailablePreloadLibraryEntity.new(self, data)
  end


  # Canonical facade: client.BackupSchedule.list / client.BackupSchedule.load({ "id" => ... })
  def BackupSchedule(data = nil)
    require_relative 'entity/backup_schedule_entity'
    BackupScheduleEntity.new(self, data)
  end


  # Canonical facade: client.Branch.list / client.Branch.load({ "id" => ... })
  def Branch(data = nil)
    require_relative 'entity/branch_entity'
    BranchEntity.new(self, data)
  end


  # Canonical facade: client.BranchAiGateway.list / client.BranchAiGateway.load({ "id" => ... })
  def BranchAiGateway(data = nil)
    require_relative 'entity/branch_ai_gateway_entity'
    BranchAiGatewayEntity.new(self, data)
  end


  # Canonical facade: client.BranchOperation.list / client.BranchOperation.load({ "id" => ... })
  def BranchOperation(data = nil)
    require_relative 'entity/branch_operation_entity'
    BranchOperationEntity.new(self, data)
  end


  # Canonical facade: client.BranchSchema.list / client.BranchSchema.load({ "id" => ... })
  def BranchSchema(data = nil)
    require_relative 'entity/branch_schema_entity'
    BranchSchemaEntity.new(self, data)
  end


  # Canonical facade: client.BranchSchemaCompare.list / client.BranchSchemaCompare.load({ "id" => ... })
  def BranchSchemaCompare(data = nil)
    require_relative 'entity/branch_schema_compare_entity'
    BranchSchemaCompareEntity.new(self, data)
  end


  # Canonical facade: client.BranchStorage.list / client.BranchStorage.load({ "id" => ... })
  def BranchStorage(data = nil)
    require_relative 'entity/branch_storage_entity'
    BranchStorageEntity.new(self, data)
  end


  # Canonical facade: client.Bucket.list / client.Bucket.load({ "id" => ... })
  def Bucket(data = nil)
    require_relative 'entity/bucket_entity'
    BucketEntity.new(self, data)
  end


  # Canonical facade: client.BucketObjectsList.list / client.BucketObjectsList.load({ "id" => ... })
  def BucketObjectsList(data = nil)
    require_relative 'entity/bucket_objects_list_entity'
    BucketObjectsListEntity.new(self, data)
  end


  # Canonical facade: client.ConnectionUri.list / client.ConnectionUri.load({ "id" => ... })
  def ConnectionUri(data = nil)
    require_relative 'entity/connection_uri_entity'
    ConnectionUriEntity.new(self, data)
  end


  # Canonical facade: client.Consumption.list / client.Consumption.load({ "id" => ... })
  def Consumption(data = nil)
    require_relative 'entity/consumption_entity'
    ConsumptionEntity.new(self, data)
  end


  # Canonical facade: client.CreateCredential.list / client.CreateCredential.load({ "id" => ... })
  def CreateCredential(data = nil)
    require_relative 'entity/create_credential_entity'
    CreateCredentialEntity.new(self, data)
  end


  # Canonical facade: client.Credential.list / client.Credential.load({ "id" => ... })
  def Credential(data = nil)
    require_relative 'entity/credential_entity'
    CredentialEntity.new(self, data)
  end


  # Canonical facade: client.CurrentUserInfo.list / client.CurrentUserInfo.load({ "id" => ... })
  def CurrentUserInfo(data = nil)
    require_relative 'entity/current_user_info_entity'
    CurrentUserInfoEntity.new(self, data)
  end


  # Canonical facade: client.CustomDomain.list / client.CustomDomain.load({ "id" => ... })
  def CustomDomain(data = nil)
    require_relative 'entity/custom_domain_entity'
    CustomDomainEntity.new(self, data)
  end


  # Canonical facade: client.DataApi.list / client.DataApi.load({ "id" => ... })
  def DataApi(data = nil)
    require_relative 'entity/data_api_entity'
    DataApiEntity.new(self, data)
  end


  # Canonical facade: client.Database.list / client.Database.load({ "id" => ... })
  def Database(data = nil)
    require_relative 'entity/database_entity'
    DatabaseEntity.new(self, data)
  end


  # Canonical facade: client.EmailProvider.list / client.EmailProvider.load({ "id" => ... })
  def EmailProvider(data = nil)
    require_relative 'entity/email_provider_entity'
    EmailProviderEntity.new(self, data)
  end


  # Canonical facade: client.EmailServer.list / client.EmailServer.load({ "id" => ... })
  def EmailServer(data = nil)
    require_relative 'entity/email_server_entity'
    EmailServerEntity.new(self, data)
  end


  # Canonical facade: client.Empty.list / client.Empty.load({ "id" => ... })
  def Empty(data = nil)
    require_relative 'entity/empty_entity'
    EmptyEntity.new(self, data)
  end


  # Canonical facade: client.Endpoint.list / client.Endpoint.load({ "id" => ... })
  def Endpoint(data = nil)
    require_relative 'entity/endpoint_entity'
    EndpointEntity.new(self, data)
  end


  # Canonical facade: client.EndpointOperation.list / client.EndpointOperation.load({ "id" => ... })
  def EndpointOperation(data = nil)
    require_relative 'entity/endpoint_operation_entity'
    EndpointOperationEntity.new(self, data)
  end


  # Canonical facade: client.Function.list / client.Function.load({ "id" => ... })
  def Function(data = nil)
    require_relative 'entity/function_entity'
    FunctionEntity.new(self, data)
  end


  # Canonical facade: client.Jwk.list / client.Jwk.load({ "id" => ... })
  def Jwk(data = nil)
    require_relative 'entity/jwk_entity'
    JwkEntity.new(self, data)
  end


  # Canonical facade: client.MaskingRule.list / client.MaskingRule.load({ "id" => ... })
  def MaskingRule(data = nil)
    require_relative 'entity/masking_rule_entity'
    MaskingRuleEntity.new(self, data)
  end


  # Canonical facade: client.Member.list / client.Member.load({ "id" => ... })
  def Member(data = nil)
    require_relative 'entity/member_entity'
    MemberEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthAllowLocalhost.list / client.NeonAuthAllowLocalhost.load({ "id" => ... })
  def NeonAuthAllowLocalhost(data = nil)
    require_relative 'entity/neon_auth_allow_localhost_entity'
    NeonAuthAllowLocalhostEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthConfig.list / client.NeonAuthConfig.load({ "id" => ... })
  def NeonAuthConfig(data = nil)
    require_relative 'entity/neon_auth_config_entity'
    NeonAuthConfigEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthCreateIntegration.list / client.NeonAuthCreateIntegration.load({ "id" => ... })
  def NeonAuthCreateIntegration(data = nil)
    require_relative 'entity/neon_auth_create_integration_entity'
    NeonAuthCreateIntegrationEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthCreateNewUser.list / client.NeonAuthCreateNewUser.load({ "id" => ... })
  def NeonAuthCreateNewUser(data = nil)
    require_relative 'entity/neon_auth_create_new_user_entity'
    NeonAuthCreateNewUserEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthEmailAndPasswordConfig.list / client.NeonAuthEmailAndPasswordConfig.load({ "id" => ... })
  def NeonAuthEmailAndPasswordConfig(data = nil)
    require_relative 'entity/neon_auth_email_and_password_config_entity'
    NeonAuthEmailAndPasswordConfigEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthEmailServerConfig.list / client.NeonAuthEmailServerConfig.load({ "id" => ... })
  def NeonAuthEmailServerConfig(data = nil)
    require_relative 'entity/neon_auth_email_server_config_entity'
    NeonAuthEmailServerConfigEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthIntegration.list / client.NeonAuthIntegration.load({ "id" => ... })
  def NeonAuthIntegration(data = nil)
    require_relative 'entity/neon_auth_integration_entity'
    NeonAuthIntegrationEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthMagicLinkConfig.list / client.NeonAuthMagicLinkConfig.load({ "id" => ... })
  def NeonAuthMagicLinkConfig(data = nil)
    require_relative 'entity/neon_auth_magic_link_config_entity'
    NeonAuthMagicLinkConfigEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthOauthProvider.list / client.NeonAuthOauthProvider.load({ "id" => ... })
  def NeonAuthOauthProvider(data = nil)
    require_relative 'entity/neon_auth_oauth_provider_entity'
    NeonAuthOauthProviderEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthOrganizationConfig.list / client.NeonAuthOrganizationConfig.load({ "id" => ... })
  def NeonAuthOrganizationConfig(data = nil)
    require_relative 'entity/neon_auth_organization_config_entity'
    NeonAuthOrganizationConfigEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthPhoneNumberConfig.list / client.NeonAuthPhoneNumberConfig.load({ "id" => ... })
  def NeonAuthPhoneNumberConfig(data = nil)
    require_relative 'entity/neon_auth_phone_number_config_entity'
    NeonAuthPhoneNumberConfigEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthPluginConfig.list / client.NeonAuthPluginConfig.load({ "id" => ... })
  def NeonAuthPluginConfig(data = nil)
    require_relative 'entity/neon_auth_plugin_config_entity'
    NeonAuthPluginConfigEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthRedirectUriWhitelistDomain.list / client.NeonAuthRedirectUriWhitelistDomain.load({ "id" => ... })
  def NeonAuthRedirectUriWhitelistDomain(data = nil)
    require_relative 'entity/neon_auth_redirect_uri_whitelist_domain_entity'
    NeonAuthRedirectUriWhitelistDomainEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthTransferAuthProviderProject.list / client.NeonAuthTransferAuthProviderProject.load({ "id" => ... })
  def NeonAuthTransferAuthProviderProject(data = nil)
    require_relative 'entity/neon_auth_transfer_auth_provider_project_entity'
    NeonAuthTransferAuthProviderProjectEntity.new(self, data)
  end


  # Canonical facade: client.NeonAuthWebhookConfig.list / client.NeonAuthWebhookConfig.load({ "id" => ... })
  def NeonAuthWebhookConfig(data = nil)
    require_relative 'entity/neon_auth_webhook_config_entity'
    NeonAuthWebhookConfigEntity.new(self, data)
  end


  # Canonical facade: client.NeonFunction.list / client.NeonFunction.load({ "id" => ... })
  def NeonFunction(data = nil)
    require_relative 'entity/neon_function_entity'
    NeonFunctionEntity.new(self, data)
  end


  # Canonical facade: client.NeonFunctionDeployment.list / client.NeonFunctionDeployment.load({ "id" => ... })
  def NeonFunctionDeployment(data = nil)
    require_relative 'entity/neon_function_deployment_entity'
    NeonFunctionDeploymentEntity.new(self, data)
  end


  # Canonical facade: client.Operation.list / client.Operation.load({ "id" => ... })
  def Operation(data = nil)
    require_relative 'entity/operation_entity'
    OperationEntity.new(self, data)
  end


  # Canonical facade: client.OrgApiKeyCreate.list / client.OrgApiKeyCreate.load({ "id" => ... })
  def OrgApiKeyCreate(data = nil)
    require_relative 'entity/org_api_key_create_entity'
    OrgApiKeyCreateEntity.new(self, data)
  end


  # Canonical facade: client.OrgApiKeyRevoke.list / client.OrgApiKeyRevoke.load({ "id" => ... })
  def OrgApiKeyRevoke(data = nil)
    require_relative 'entity/org_api_key_revoke_entity'
    OrgApiKeyRevokeEntity.new(self, data)
  end


  # Canonical facade: client.OrgApiKeysListResponseItem.list / client.OrgApiKeysListResponseItem.load({ "id" => ... })
  def OrgApiKeysListResponseItem(data = nil)
    require_relative 'entity/org_api_keys_list_response_item_entity'
    OrgApiKeysListResponseItemEntity.new(self, data)
  end


  # Canonical facade: client.Organization.list / client.Organization.load({ "id" => ... })
  def Organization(data = nil)
    require_relative 'entity/organization_entity'
    OrganizationEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationInvitation.list / client.OrganizationInvitation.load({ "id" => ... })
  def OrganizationInvitation(data = nil)
    require_relative 'entity/organization_invitation_entity'
    OrganizationInvitationEntity.new(self, data)
  end


  # Canonical facade: client.Presign.list / client.Presign.load({ "id" => ... })
  def Presign(data = nil)
    require_relative 'entity/presign_entity'
    PresignEntity.new(self, data)
  end


  # Canonical facade: client.Project.list / client.Project.load({ "id" => ... })
  def Project(data = nil)
    require_relative 'entity/project_entity'
    ProjectEntity.new(self, data)
  end


  # Canonical facade: client.ProjectBranchLogField.list / client.ProjectBranchLogField.load({ "id" => ... })
  def ProjectBranchLogField(data = nil)
    require_relative 'entity/project_branch_log_field_entity'
    ProjectBranchLogFieldEntity.new(self, data)
  end


  # Canonical facade: client.ProjectBranchLogFieldValue.list / client.ProjectBranchLogFieldValue.load({ "id" => ... })
  def ProjectBranchLogFieldValue(data = nil)
    require_relative 'entity/project_branch_log_field_value_entity'
    ProjectBranchLogFieldValueEntity.new(self, data)
  end


  # Canonical facade: client.ProjectBranchLogsQuery.list / client.ProjectBranchLogsQuery.load({ "id" => ... })
  def ProjectBranchLogsQuery(data = nil)
    require_relative 'entity/project_branch_logs_query_entity'
    ProjectBranchLogsQueryEntity.new(self, data)
  end


  # Canonical facade: client.ProjectMember.list / client.ProjectMember.load({ "id" => ... })
  def ProjectMember(data = nil)
    require_relative 'entity/project_member_entity'
    ProjectMemberEntity.new(self, data)
  end


  # Canonical facade: client.ProjectMemberRole.list / client.ProjectMemberRole.load({ "id" => ... })
  def ProjectMemberRole(data = nil)
    require_relative 'entity/project_member_role_entity'
    ProjectMemberRoleEntity.new(self, data)
  end


  # Canonical facade: client.ProjectPermission.list / client.ProjectPermission.load({ "id" => ... })
  def ProjectPermission(data = nil)
    require_relative 'entity/project_permission_entity'
    ProjectPermissionEntity.new(self, data)
  end


  # Canonical facade: client.ProjectRecover.list / client.ProjectRecover.load({ "id" => ... })
  def ProjectRecover(data = nil)
    require_relative 'entity/project_recover_entity'
    ProjectRecoverEntity.new(self, data)
  end


  # Canonical facade: client.ProjectTransferRequest.list / client.ProjectTransferRequest.load({ "id" => ... })
  def ProjectTransferRequest(data = nil)
    require_relative 'entity/project_transfer_request_entity'
    ProjectTransferRequestEntity.new(self, data)
  end


  # Canonical facade: client.Region.list / client.Region.load({ "id" => ... })
  def Region(data = nil)
    require_relative 'entity/region_entity'
    RegionEntity.new(self, data)
  end


  # Canonical facade: client.Role.list / client.Role.load({ "id" => ... })
  def Role(data = nil)
    require_relative 'entity/role_entity'
    RoleEntity.new(self, data)
  end


  # Canonical facade: client.RoleOperation.list / client.RoleOperation.load({ "id" => ... })
  def RoleOperation(data = nil)
    require_relative 'entity/role_operation_entity'
    RoleOperationEntity.new(self, data)
  end


  # Canonical facade: client.RolePassword.list / client.RolePassword.load({ "id" => ... })
  def RolePassword(data = nil)
    require_relative 'entity/role_password_entity'
    RolePasswordEntity.new(self, data)
  end


  # Canonical facade: client.SendNeonAuthTestEmail.list / client.SendNeonAuthTestEmail.load({ "id" => ... })
  def SendNeonAuthTestEmail(data = nil)
    require_relative 'entity/send_neon_auth_test_email_entity'
    SendNeonAuthTestEmailEntity.new(self, data)
  end


  # Canonical facade: client.Snapshot.list / client.Snapshot.load({ "id" => ... })
  def Snapshot(data = nil)
    require_relative 'entity/snapshot_entity'
    SnapshotEntity.new(self, data)
  end


  # Canonical facade: client.SpendingLimit.list / client.SpendingLimit.load({ "id" => ... })
  def SpendingLimit(data = nil)
    require_relative 'entity/spending_limit_entity'
    SpendingLimitEntity.new(self, data)
  end


  # Canonical facade: client.Trigger.list / client.Trigger.load({ "id" => ... })
  def Trigger(data = nil)
    require_relative 'entity/trigger_entity'
    TriggerEntity.new(self, data)
  end


  # Canonical facade: client.UpdateNeonAuthUserRole.list / client.UpdateNeonAuthUserRole.load({ "id" => ... })
  def UpdateNeonAuthUserRole(data = nil)
    require_relative 'entity/update_neon_auth_user_role_entity'
    UpdateNeonAuthUserRoleEntity.new(self, data)
  end


  # Canonical facade: client.VpcEndpoint.list / client.VpcEndpoint.load({ "id" => ... })
  def VpcEndpoint(data = nil)
    require_relative 'entity/vpc_endpoint_entity'
    VpcEndpointEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = NeonSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
