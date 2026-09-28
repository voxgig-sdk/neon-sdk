# Neon SDK

from neon_sdk.utility.voxgig_struct import voxgig_struct as vs
from neon_sdk.core.utility_type import NeonUtility
from neon_sdk.core.spec import NeonSpec
from neon_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from neon_sdk.utility import register

# Load features
from neon_sdk.feature.base_feature import NeonBaseFeature
from neon_sdk.features import _has_feature, _make_feature


class NeonSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = NeonUtility()
        self._utility = utility

        from neon_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return NeonUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = NeonSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "NeonSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("NeonSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Anonymize(self, data=None) -> "AnonymizeEntity":
        """Entity factory: client.Anonymize().list() / client.Anonymize().load({"id": ...})."""
        from neon_sdk.entity.anonymize_entity import AnonymizeEntity
        return AnonymizeEntity(self, data)


    def AnonymizedBranchStatus(self, data=None) -> "AnonymizedBranchStatusEntity":
        """Entity factory: client.AnonymizedBranchStatus().list() / client.AnonymizedBranchStatus().load({"id": ...})."""
        from neon_sdk.entity.anonymized_branch_status_entity import AnonymizedBranchStatusEntity
        return AnonymizedBranchStatusEntity(self, data)


    def ApiKey(self, data=None) -> "ApiKeyEntity":
        """Entity factory: client.ApiKey().list() / client.ApiKey().load({"id": ...})."""
        from neon_sdk.entity.api_key_entity import ApiKeyEntity
        return ApiKeyEntity(self, data)


    def Auth(self, data=None) -> "AuthEntity":
        """Entity factory: client.Auth().list() / client.Auth().load({"id": ...})."""
        from neon_sdk.entity.auth_entity import AuthEntity
        return AuthEntity(self, data)


    def AuthLegacy(self, data=None) -> "AuthLegacyEntity":
        """Entity factory: client.AuthLegacy().list() / client.AuthLegacy().load({"id": ...})."""
        from neon_sdk.entity.auth_legacy_entity import AuthLegacyEntity
        return AuthLegacyEntity(self, data)


    def AvailablePreloadLibrary(self, data=None) -> "AvailablePreloadLibraryEntity":
        """Entity factory: client.AvailablePreloadLibrary().list() / client.AvailablePreloadLibrary().load({"id": ...})."""
        from neon_sdk.entity.available_preload_library_entity import AvailablePreloadLibraryEntity
        return AvailablePreloadLibraryEntity(self, data)


    def BackupSchedule(self, data=None) -> "BackupScheduleEntity":
        """Entity factory: client.BackupSchedule().list() / client.BackupSchedule().load({"id": ...})."""
        from neon_sdk.entity.backup_schedule_entity import BackupScheduleEntity
        return BackupScheduleEntity(self, data)


    def Branch(self, data=None) -> "BranchEntity":
        """Entity factory: client.Branch().list() / client.Branch().load({"id": ...})."""
        from neon_sdk.entity.branch_entity import BranchEntity
        return BranchEntity(self, data)


    def BranchAiGateway(self, data=None) -> "BranchAiGatewayEntity":
        """Entity factory: client.BranchAiGateway().list() / client.BranchAiGateway().load({"id": ...})."""
        from neon_sdk.entity.branch_ai_gateway_entity import BranchAiGatewayEntity
        return BranchAiGatewayEntity(self, data)


    def BranchOperation(self, data=None) -> "BranchOperationEntity":
        """Entity factory: client.BranchOperation().list() / client.BranchOperation().load({"id": ...})."""
        from neon_sdk.entity.branch_operation_entity import BranchOperationEntity
        return BranchOperationEntity(self, data)


    def BranchSchema(self, data=None) -> "BranchSchemaEntity":
        """Entity factory: client.BranchSchema().list() / client.BranchSchema().load({"id": ...})."""
        from neon_sdk.entity.branch_schema_entity import BranchSchemaEntity
        return BranchSchemaEntity(self, data)


    def BranchSchemaCompare(self, data=None) -> "BranchSchemaCompareEntity":
        """Entity factory: client.BranchSchemaCompare().list() / client.BranchSchemaCompare().load({"id": ...})."""
        from neon_sdk.entity.branch_schema_compare_entity import BranchSchemaCompareEntity
        return BranchSchemaCompareEntity(self, data)


    def BranchStorage(self, data=None) -> "BranchStorageEntity":
        """Entity factory: client.BranchStorage().list() / client.BranchStorage().load({"id": ...})."""
        from neon_sdk.entity.branch_storage_entity import BranchStorageEntity
        return BranchStorageEntity(self, data)


    def Bucket(self, data=None) -> "BucketEntity":
        """Entity factory: client.Bucket().list() / client.Bucket().load({"id": ...})."""
        from neon_sdk.entity.bucket_entity import BucketEntity
        return BucketEntity(self, data)


    def BucketObjectsList(self, data=None) -> "BucketObjectsListEntity":
        """Entity factory: client.BucketObjectsList().list() / client.BucketObjectsList().load({"id": ...})."""
        from neon_sdk.entity.bucket_objects_list_entity import BucketObjectsListEntity
        return BucketObjectsListEntity(self, data)


    def ConnectionUri(self, data=None) -> "ConnectionUriEntity":
        """Entity factory: client.ConnectionUri().list() / client.ConnectionUri().load({"id": ...})."""
        from neon_sdk.entity.connection_uri_entity import ConnectionUriEntity
        return ConnectionUriEntity(self, data)


    def Consumption(self, data=None) -> "ConsumptionEntity":
        """Entity factory: client.Consumption().list() / client.Consumption().load({"id": ...})."""
        from neon_sdk.entity.consumption_entity import ConsumptionEntity
        return ConsumptionEntity(self, data)


    def CreateCredential(self, data=None) -> "CreateCredentialEntity":
        """Entity factory: client.CreateCredential().list() / client.CreateCredential().load({"id": ...})."""
        from neon_sdk.entity.create_credential_entity import CreateCredentialEntity
        return CreateCredentialEntity(self, data)


    def Credential(self, data=None) -> "CredentialEntity":
        """Entity factory: client.Credential().list() / client.Credential().load({"id": ...})."""
        from neon_sdk.entity.credential_entity import CredentialEntity
        return CredentialEntity(self, data)


    def CurrentUserInfo(self, data=None) -> "CurrentUserInfoEntity":
        """Entity factory: client.CurrentUserInfo().list() / client.CurrentUserInfo().load({"id": ...})."""
        from neon_sdk.entity.current_user_info_entity import CurrentUserInfoEntity
        return CurrentUserInfoEntity(self, data)


    def CustomDomain(self, data=None) -> "CustomDomainEntity":
        """Entity factory: client.CustomDomain().list() / client.CustomDomain().load({"id": ...})."""
        from neon_sdk.entity.custom_domain_entity import CustomDomainEntity
        return CustomDomainEntity(self, data)


    def DataApi(self, data=None) -> "DataApiEntity":
        """Entity factory: client.DataApi().list() / client.DataApi().load({"id": ...})."""
        from neon_sdk.entity.data_api_entity import DataApiEntity
        return DataApiEntity(self, data)


    def Database(self, data=None) -> "DatabaseEntity":
        """Entity factory: client.Database().list() / client.Database().load({"id": ...})."""
        from neon_sdk.entity.database_entity import DatabaseEntity
        return DatabaseEntity(self, data)


    def EmailProvider(self, data=None) -> "EmailProviderEntity":
        """Entity factory: client.EmailProvider().list() / client.EmailProvider().load({"id": ...})."""
        from neon_sdk.entity.email_provider_entity import EmailProviderEntity
        return EmailProviderEntity(self, data)


    def EmailServer(self, data=None) -> "EmailServerEntity":
        """Entity factory: client.EmailServer().list() / client.EmailServer().load({"id": ...})."""
        from neon_sdk.entity.email_server_entity import EmailServerEntity
        return EmailServerEntity(self, data)


    def Empty(self, data=None) -> "EmptyEntity":
        """Entity factory: client.Empty().list() / client.Empty().load({"id": ...})."""
        from neon_sdk.entity.empty_entity import EmptyEntity
        return EmptyEntity(self, data)


    def Endpoint(self, data=None) -> "EndpointEntity":
        """Entity factory: client.Endpoint().list() / client.Endpoint().load({"id": ...})."""
        from neon_sdk.entity.endpoint_entity import EndpointEntity
        return EndpointEntity(self, data)


    def EndpointOperation(self, data=None) -> "EndpointOperationEntity":
        """Entity factory: client.EndpointOperation().list() / client.EndpointOperation().load({"id": ...})."""
        from neon_sdk.entity.endpoint_operation_entity import EndpointOperationEntity
        return EndpointOperationEntity(self, data)


    def Function(self, data=None) -> "FunctionEntity":
        """Entity factory: client.Function().list() / client.Function().load({"id": ...})."""
        from neon_sdk.entity.function_entity import FunctionEntity
        return FunctionEntity(self, data)


    def Jwk(self, data=None) -> "JwkEntity":
        """Entity factory: client.Jwk().list() / client.Jwk().load({"id": ...})."""
        from neon_sdk.entity.jwk_entity import JwkEntity
        return JwkEntity(self, data)


    def MaskingRule(self, data=None) -> "MaskingRuleEntity":
        """Entity factory: client.MaskingRule().list() / client.MaskingRule().load({"id": ...})."""
        from neon_sdk.entity.masking_rule_entity import MaskingRuleEntity
        return MaskingRuleEntity(self, data)


    def Member(self, data=None) -> "MemberEntity":
        """Entity factory: client.Member().list() / client.Member().load({"id": ...})."""
        from neon_sdk.entity.member_entity import MemberEntity
        return MemberEntity(self, data)


    def NeonAuthAllowLocalhost(self, data=None) -> "NeonAuthAllowLocalhostEntity":
        """Entity factory: client.NeonAuthAllowLocalhost().list() / client.NeonAuthAllowLocalhost().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_allow_localhost_entity import NeonAuthAllowLocalhostEntity
        return NeonAuthAllowLocalhostEntity(self, data)


    def NeonAuthConfig(self, data=None) -> "NeonAuthConfigEntity":
        """Entity factory: client.NeonAuthConfig().list() / client.NeonAuthConfig().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_config_entity import NeonAuthConfigEntity
        return NeonAuthConfigEntity(self, data)


    def NeonAuthCreateIntegration(self, data=None) -> "NeonAuthCreateIntegrationEntity":
        """Entity factory: client.NeonAuthCreateIntegration().list() / client.NeonAuthCreateIntegration().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_create_integration_entity import NeonAuthCreateIntegrationEntity
        return NeonAuthCreateIntegrationEntity(self, data)


    def NeonAuthCreateNewUser(self, data=None) -> "NeonAuthCreateNewUserEntity":
        """Entity factory: client.NeonAuthCreateNewUser().list() / client.NeonAuthCreateNewUser().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_create_new_user_entity import NeonAuthCreateNewUserEntity
        return NeonAuthCreateNewUserEntity(self, data)


    def NeonAuthEmailAndPasswordConfig(self, data=None) -> "NeonAuthEmailAndPasswordConfigEntity":
        """Entity factory: client.NeonAuthEmailAndPasswordConfig().list() / client.NeonAuthEmailAndPasswordConfig().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_email_and_password_config_entity import NeonAuthEmailAndPasswordConfigEntity
        return NeonAuthEmailAndPasswordConfigEntity(self, data)


    def NeonAuthEmailServerConfig(self, data=None) -> "NeonAuthEmailServerConfigEntity":
        """Entity factory: client.NeonAuthEmailServerConfig().list() / client.NeonAuthEmailServerConfig().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_email_server_config_entity import NeonAuthEmailServerConfigEntity
        return NeonAuthEmailServerConfigEntity(self, data)


    def NeonAuthIntegration(self, data=None) -> "NeonAuthIntegrationEntity":
        """Entity factory: client.NeonAuthIntegration().list() / client.NeonAuthIntegration().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_integration_entity import NeonAuthIntegrationEntity
        return NeonAuthIntegrationEntity(self, data)


    def NeonAuthMagicLinkConfig(self, data=None) -> "NeonAuthMagicLinkConfigEntity":
        """Entity factory: client.NeonAuthMagicLinkConfig().list() / client.NeonAuthMagicLinkConfig().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_magic_link_config_entity import NeonAuthMagicLinkConfigEntity
        return NeonAuthMagicLinkConfigEntity(self, data)


    def NeonAuthOauthProvider(self, data=None) -> "NeonAuthOauthProviderEntity":
        """Entity factory: client.NeonAuthOauthProvider().list() / client.NeonAuthOauthProvider().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_oauth_provider_entity import NeonAuthOauthProviderEntity
        return NeonAuthOauthProviderEntity(self, data)


    def NeonAuthOrganizationConfig(self, data=None) -> "NeonAuthOrganizationConfigEntity":
        """Entity factory: client.NeonAuthOrganizationConfig().list() / client.NeonAuthOrganizationConfig().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_organization_config_entity import NeonAuthOrganizationConfigEntity
        return NeonAuthOrganizationConfigEntity(self, data)


    def NeonAuthPhoneNumberConfig(self, data=None) -> "NeonAuthPhoneNumberConfigEntity":
        """Entity factory: client.NeonAuthPhoneNumberConfig().list() / client.NeonAuthPhoneNumberConfig().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_phone_number_config_entity import NeonAuthPhoneNumberConfigEntity
        return NeonAuthPhoneNumberConfigEntity(self, data)


    def NeonAuthPluginConfig(self, data=None) -> "NeonAuthPluginConfigEntity":
        """Entity factory: client.NeonAuthPluginConfig().list() / client.NeonAuthPluginConfig().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_plugin_config_entity import NeonAuthPluginConfigEntity
        return NeonAuthPluginConfigEntity(self, data)


    def NeonAuthRedirectUriWhitelistDomain(self, data=None) -> "NeonAuthRedirectUriWhitelistDomainEntity":
        """Entity factory: client.NeonAuthRedirectUriWhitelistDomain().list() / client.NeonAuthRedirectUriWhitelistDomain().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_redirect_uri_whitelist_domain_entity import NeonAuthRedirectUriWhitelistDomainEntity
        return NeonAuthRedirectUriWhitelistDomainEntity(self, data)


    def NeonAuthTransferAuthProviderProject(self, data=None) -> "NeonAuthTransferAuthProviderProjectEntity":
        """Entity factory: client.NeonAuthTransferAuthProviderProject().list() / client.NeonAuthTransferAuthProviderProject().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_transfer_auth_provider_project_entity import NeonAuthTransferAuthProviderProjectEntity
        return NeonAuthTransferAuthProviderProjectEntity(self, data)


    def NeonAuthWebhookConfig(self, data=None) -> "NeonAuthWebhookConfigEntity":
        """Entity factory: client.NeonAuthWebhookConfig().list() / client.NeonAuthWebhookConfig().load({"id": ...})."""
        from neon_sdk.entity.neon_auth_webhook_config_entity import NeonAuthWebhookConfigEntity
        return NeonAuthWebhookConfigEntity(self, data)


    def NeonFunction(self, data=None) -> "NeonFunctionEntity":
        """Entity factory: client.NeonFunction().list() / client.NeonFunction().load({"id": ...})."""
        from neon_sdk.entity.neon_function_entity import NeonFunctionEntity
        return NeonFunctionEntity(self, data)


    def NeonFunctionDeployment(self, data=None) -> "NeonFunctionDeploymentEntity":
        """Entity factory: client.NeonFunctionDeployment().list() / client.NeonFunctionDeployment().load({"id": ...})."""
        from neon_sdk.entity.neon_function_deployment_entity import NeonFunctionDeploymentEntity
        return NeonFunctionDeploymentEntity(self, data)


    def Operation(self, data=None) -> "OperationEntity":
        """Entity factory: client.Operation().list() / client.Operation().load({"id": ...})."""
        from neon_sdk.entity.operation_entity import OperationEntity
        return OperationEntity(self, data)


    def OrgApiKeyCreate(self, data=None) -> "OrgApiKeyCreateEntity":
        """Entity factory: client.OrgApiKeyCreate().list() / client.OrgApiKeyCreate().load({"id": ...})."""
        from neon_sdk.entity.org_api_key_create_entity import OrgApiKeyCreateEntity
        return OrgApiKeyCreateEntity(self, data)


    def OrgApiKeyRevoke(self, data=None) -> "OrgApiKeyRevokeEntity":
        """Entity factory: client.OrgApiKeyRevoke().list() / client.OrgApiKeyRevoke().load({"id": ...})."""
        from neon_sdk.entity.org_api_key_revoke_entity import OrgApiKeyRevokeEntity
        return OrgApiKeyRevokeEntity(self, data)


    def OrgApiKeysListResponseItem(self, data=None) -> "OrgApiKeysListResponseItemEntity":
        """Entity factory: client.OrgApiKeysListResponseItem().list() / client.OrgApiKeysListResponseItem().load({"id": ...})."""
        from neon_sdk.entity.org_api_keys_list_response_item_entity import OrgApiKeysListResponseItemEntity
        return OrgApiKeysListResponseItemEntity(self, data)


    def Organization(self, data=None) -> "OrganizationEntity":
        """Entity factory: client.Organization().list() / client.Organization().load({"id": ...})."""
        from neon_sdk.entity.organization_entity import OrganizationEntity
        return OrganizationEntity(self, data)


    def OrganizationInvitation(self, data=None) -> "OrganizationInvitationEntity":
        """Entity factory: client.OrganizationInvitation().list() / client.OrganizationInvitation().load({"id": ...})."""
        from neon_sdk.entity.organization_invitation_entity import OrganizationInvitationEntity
        return OrganizationInvitationEntity(self, data)


    def Presign(self, data=None) -> "PresignEntity":
        """Entity factory: client.Presign().list() / client.Presign().load({"id": ...})."""
        from neon_sdk.entity.presign_entity import PresignEntity
        return PresignEntity(self, data)


    def Project(self, data=None) -> "ProjectEntity":
        """Entity factory: client.Project().list() / client.Project().load({"id": ...})."""
        from neon_sdk.entity.project_entity import ProjectEntity
        return ProjectEntity(self, data)


    def ProjectBranchLogField(self, data=None) -> "ProjectBranchLogFieldEntity":
        """Entity factory: client.ProjectBranchLogField().list() / client.ProjectBranchLogField().load({"id": ...})."""
        from neon_sdk.entity.project_branch_log_field_entity import ProjectBranchLogFieldEntity
        return ProjectBranchLogFieldEntity(self, data)


    def ProjectBranchLogFieldValue(self, data=None) -> "ProjectBranchLogFieldValueEntity":
        """Entity factory: client.ProjectBranchLogFieldValue().list() / client.ProjectBranchLogFieldValue().load({"id": ...})."""
        from neon_sdk.entity.project_branch_log_field_value_entity import ProjectBranchLogFieldValueEntity
        return ProjectBranchLogFieldValueEntity(self, data)


    def ProjectBranchLogsQuery(self, data=None) -> "ProjectBranchLogsQueryEntity":
        """Entity factory: client.ProjectBranchLogsQuery().list() / client.ProjectBranchLogsQuery().load({"id": ...})."""
        from neon_sdk.entity.project_branch_logs_query_entity import ProjectBranchLogsQueryEntity
        return ProjectBranchLogsQueryEntity(self, data)


    def ProjectMember(self, data=None) -> "ProjectMemberEntity":
        """Entity factory: client.ProjectMember().list() / client.ProjectMember().load({"id": ...})."""
        from neon_sdk.entity.project_member_entity import ProjectMemberEntity
        return ProjectMemberEntity(self, data)


    def ProjectMemberRole(self, data=None) -> "ProjectMemberRoleEntity":
        """Entity factory: client.ProjectMemberRole().list() / client.ProjectMemberRole().load({"id": ...})."""
        from neon_sdk.entity.project_member_role_entity import ProjectMemberRoleEntity
        return ProjectMemberRoleEntity(self, data)


    def ProjectPermission(self, data=None) -> "ProjectPermissionEntity":
        """Entity factory: client.ProjectPermission().list() / client.ProjectPermission().load({"id": ...})."""
        from neon_sdk.entity.project_permission_entity import ProjectPermissionEntity
        return ProjectPermissionEntity(self, data)


    def ProjectRecover(self, data=None) -> "ProjectRecoverEntity":
        """Entity factory: client.ProjectRecover().list() / client.ProjectRecover().load({"id": ...})."""
        from neon_sdk.entity.project_recover_entity import ProjectRecoverEntity
        return ProjectRecoverEntity(self, data)


    def ProjectTransferRequest(self, data=None) -> "ProjectTransferRequestEntity":
        """Entity factory: client.ProjectTransferRequest().list() / client.ProjectTransferRequest().load({"id": ...})."""
        from neon_sdk.entity.project_transfer_request_entity import ProjectTransferRequestEntity
        return ProjectTransferRequestEntity(self, data)


    def Region(self, data=None) -> "RegionEntity":
        """Entity factory: client.Region().list() / client.Region().load({"id": ...})."""
        from neon_sdk.entity.region_entity import RegionEntity
        return RegionEntity(self, data)


    def Role(self, data=None) -> "RoleEntity":
        """Entity factory: client.Role().list() / client.Role().load({"id": ...})."""
        from neon_sdk.entity.role_entity import RoleEntity
        return RoleEntity(self, data)


    def RoleOperation(self, data=None) -> "RoleOperationEntity":
        """Entity factory: client.RoleOperation().list() / client.RoleOperation().load({"id": ...})."""
        from neon_sdk.entity.role_operation_entity import RoleOperationEntity
        return RoleOperationEntity(self, data)


    def RolePassword(self, data=None) -> "RolePasswordEntity":
        """Entity factory: client.RolePassword().list() / client.RolePassword().load({"id": ...})."""
        from neon_sdk.entity.role_password_entity import RolePasswordEntity
        return RolePasswordEntity(self, data)


    def SendNeonAuthTestEmail(self, data=None) -> "SendNeonAuthTestEmailEntity":
        """Entity factory: client.SendNeonAuthTestEmail().list() / client.SendNeonAuthTestEmail().load({"id": ...})."""
        from neon_sdk.entity.send_neon_auth_test_email_entity import SendNeonAuthTestEmailEntity
        return SendNeonAuthTestEmailEntity(self, data)


    def Snapshot(self, data=None) -> "SnapshotEntity":
        """Entity factory: client.Snapshot().list() / client.Snapshot().load({"id": ...})."""
        from neon_sdk.entity.snapshot_entity import SnapshotEntity
        return SnapshotEntity(self, data)


    def SpendingLimit(self, data=None) -> "SpendingLimitEntity":
        """Entity factory: client.SpendingLimit().list() / client.SpendingLimit().load({"id": ...})."""
        from neon_sdk.entity.spending_limit_entity import SpendingLimitEntity
        return SpendingLimitEntity(self, data)


    def Trigger(self, data=None) -> "TriggerEntity":
        """Entity factory: client.Trigger().list() / client.Trigger().load({"id": ...})."""
        from neon_sdk.entity.trigger_entity import TriggerEntity
        return TriggerEntity(self, data)


    def UpdateNeonAuthUserRole(self, data=None) -> "UpdateNeonAuthUserRoleEntity":
        """Entity factory: client.UpdateNeonAuthUserRole().list() / client.UpdateNeonAuthUserRole().load({"id": ...})."""
        from neon_sdk.entity.update_neon_auth_user_role_entity import UpdateNeonAuthUserRoleEntity
        return UpdateNeonAuthUserRoleEntity(self, data)


    def VpcEndpoint(self, data=None) -> "VpcEndpointEntity":
        """Entity factory: client.VpcEndpoint().list() / client.VpcEndpoint().load({"id": ...})."""
        from neon_sdk.entity.vpc_endpoint_entity import VpcEndpointEntity
        return VpcEndpointEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "NeonSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from neon_sdk.entity.anonymize_entity import AnonymizeEntity
    from neon_sdk.entity.anonymized_branch_status_entity import AnonymizedBranchStatusEntity
    from neon_sdk.entity.api_key_entity import ApiKeyEntity
    from neon_sdk.entity.auth_entity import AuthEntity
    from neon_sdk.entity.auth_legacy_entity import AuthLegacyEntity
    from neon_sdk.entity.available_preload_library_entity import AvailablePreloadLibraryEntity
    from neon_sdk.entity.backup_schedule_entity import BackupScheduleEntity
    from neon_sdk.entity.branch_entity import BranchEntity
    from neon_sdk.entity.branch_ai_gateway_entity import BranchAiGatewayEntity
    from neon_sdk.entity.branch_operation_entity import BranchOperationEntity
    from neon_sdk.entity.branch_schema_entity import BranchSchemaEntity
    from neon_sdk.entity.branch_schema_compare_entity import BranchSchemaCompareEntity
    from neon_sdk.entity.branch_storage_entity import BranchStorageEntity
    from neon_sdk.entity.bucket_entity import BucketEntity
    from neon_sdk.entity.bucket_objects_list_entity import BucketObjectsListEntity
    from neon_sdk.entity.connection_uri_entity import ConnectionUriEntity
    from neon_sdk.entity.consumption_entity import ConsumptionEntity
    from neon_sdk.entity.create_credential_entity import CreateCredentialEntity
    from neon_sdk.entity.credential_entity import CredentialEntity
    from neon_sdk.entity.current_user_info_entity import CurrentUserInfoEntity
    from neon_sdk.entity.custom_domain_entity import CustomDomainEntity
    from neon_sdk.entity.data_api_entity import DataApiEntity
    from neon_sdk.entity.database_entity import DatabaseEntity
    from neon_sdk.entity.email_provider_entity import EmailProviderEntity
    from neon_sdk.entity.email_server_entity import EmailServerEntity
    from neon_sdk.entity.empty_entity import EmptyEntity
    from neon_sdk.entity.endpoint_entity import EndpointEntity
    from neon_sdk.entity.endpoint_operation_entity import EndpointOperationEntity
    from neon_sdk.entity.function_entity import FunctionEntity
    from neon_sdk.entity.jwk_entity import JwkEntity
    from neon_sdk.entity.masking_rule_entity import MaskingRuleEntity
    from neon_sdk.entity.member_entity import MemberEntity
    from neon_sdk.entity.neon_auth_allow_localhost_entity import NeonAuthAllowLocalhostEntity
    from neon_sdk.entity.neon_auth_config_entity import NeonAuthConfigEntity
    from neon_sdk.entity.neon_auth_create_integration_entity import NeonAuthCreateIntegrationEntity
    from neon_sdk.entity.neon_auth_create_new_user_entity import NeonAuthCreateNewUserEntity
    from neon_sdk.entity.neon_auth_email_and_password_config_entity import NeonAuthEmailAndPasswordConfigEntity
    from neon_sdk.entity.neon_auth_email_server_config_entity import NeonAuthEmailServerConfigEntity
    from neon_sdk.entity.neon_auth_integration_entity import NeonAuthIntegrationEntity
    from neon_sdk.entity.neon_auth_magic_link_config_entity import NeonAuthMagicLinkConfigEntity
    from neon_sdk.entity.neon_auth_oauth_provider_entity import NeonAuthOauthProviderEntity
    from neon_sdk.entity.neon_auth_organization_config_entity import NeonAuthOrganizationConfigEntity
    from neon_sdk.entity.neon_auth_phone_number_config_entity import NeonAuthPhoneNumberConfigEntity
    from neon_sdk.entity.neon_auth_plugin_config_entity import NeonAuthPluginConfigEntity
    from neon_sdk.entity.neon_auth_redirect_uri_whitelist_domain_entity import NeonAuthRedirectUriWhitelistDomainEntity
    from neon_sdk.entity.neon_auth_transfer_auth_provider_project_entity import NeonAuthTransferAuthProviderProjectEntity
    from neon_sdk.entity.neon_auth_webhook_config_entity import NeonAuthWebhookConfigEntity
    from neon_sdk.entity.neon_function_entity import NeonFunctionEntity
    from neon_sdk.entity.neon_function_deployment_entity import NeonFunctionDeploymentEntity
    from neon_sdk.entity.operation_entity import OperationEntity
    from neon_sdk.entity.org_api_key_create_entity import OrgApiKeyCreateEntity
    from neon_sdk.entity.org_api_key_revoke_entity import OrgApiKeyRevokeEntity
    from neon_sdk.entity.org_api_keys_list_response_item_entity import OrgApiKeysListResponseItemEntity
    from neon_sdk.entity.organization_entity import OrganizationEntity
    from neon_sdk.entity.organization_invitation_entity import OrganizationInvitationEntity
    from neon_sdk.entity.presign_entity import PresignEntity
    from neon_sdk.entity.project_entity import ProjectEntity
    from neon_sdk.entity.project_branch_log_field_entity import ProjectBranchLogFieldEntity
    from neon_sdk.entity.project_branch_log_field_value_entity import ProjectBranchLogFieldValueEntity
    from neon_sdk.entity.project_branch_logs_query_entity import ProjectBranchLogsQueryEntity
    from neon_sdk.entity.project_member_entity import ProjectMemberEntity
    from neon_sdk.entity.project_member_role_entity import ProjectMemberRoleEntity
    from neon_sdk.entity.project_permission_entity import ProjectPermissionEntity
    from neon_sdk.entity.project_recover_entity import ProjectRecoverEntity
    from neon_sdk.entity.project_transfer_request_entity import ProjectTransferRequestEntity
    from neon_sdk.entity.region_entity import RegionEntity
    from neon_sdk.entity.role_entity import RoleEntity
    from neon_sdk.entity.role_operation_entity import RoleOperationEntity
    from neon_sdk.entity.role_password_entity import RolePasswordEntity
    from neon_sdk.entity.send_neon_auth_test_email_entity import SendNeonAuthTestEmailEntity
    from neon_sdk.entity.snapshot_entity import SnapshotEntity
    from neon_sdk.entity.spending_limit_entity import SpendingLimitEntity
    from neon_sdk.entity.trigger_entity import TriggerEntity
    from neon_sdk.entity.update_neon_auth_user_role_entity import UpdateNeonAuthUserRoleEntity
    from neon_sdk.entity.vpc_endpoint_entity import VpcEndpointEntity
