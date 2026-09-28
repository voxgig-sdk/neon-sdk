// Neon Ts SDK

import { AnonymizeEntity } from './entity/AnonymizeEntity'
import { AnonymizedBranchStatusEntity } from './entity/AnonymizedBranchStatusEntity'
import { ApiKeyEntity } from './entity/ApiKeyEntity'
import { AuthEntity } from './entity/AuthEntity'
import { AuthLegacyEntity } from './entity/AuthLegacyEntity'
import { AvailablePreloadLibraryEntity } from './entity/AvailablePreloadLibraryEntity'
import { BackupScheduleEntity } from './entity/BackupScheduleEntity'
import { BranchEntity } from './entity/BranchEntity'
import { BranchAiGatewayEntity } from './entity/BranchAiGatewayEntity'
import { BranchOperationEntity } from './entity/BranchOperationEntity'
import { BranchSchemaEntity } from './entity/BranchSchemaEntity'
import { BranchSchemaCompareEntity } from './entity/BranchSchemaCompareEntity'
import { BranchStorageEntity } from './entity/BranchStorageEntity'
import { BucketEntity } from './entity/BucketEntity'
import { BucketObjectsListEntity } from './entity/BucketObjectsListEntity'
import { ConnectionUriEntity } from './entity/ConnectionUriEntity'
import { ConsumptionEntity } from './entity/ConsumptionEntity'
import { CreateCredentialEntity } from './entity/CreateCredentialEntity'
import { CredentialEntity } from './entity/CredentialEntity'
import { CurrentUserInfoEntity } from './entity/CurrentUserInfoEntity'
import { CustomDomainEntity } from './entity/CustomDomainEntity'
import { DataApiEntity } from './entity/DataApiEntity'
import { DatabaseEntity } from './entity/DatabaseEntity'
import { EmailProviderEntity } from './entity/EmailProviderEntity'
import { EmailServerEntity } from './entity/EmailServerEntity'
import { EmptyEntity } from './entity/EmptyEntity'
import { EndpointEntity } from './entity/EndpointEntity'
import { EndpointOperationEntity } from './entity/EndpointOperationEntity'
import { FunctionEntity } from './entity/FunctionEntity'
import { JwkEntity } from './entity/JwkEntity'
import { MaskingRuleEntity } from './entity/MaskingRuleEntity'
import { MemberEntity } from './entity/MemberEntity'
import { NeonAuthAllowLocalhostEntity } from './entity/NeonAuthAllowLocalhostEntity'
import { NeonAuthConfigEntity } from './entity/NeonAuthConfigEntity'
import { NeonAuthCreateIntegrationEntity } from './entity/NeonAuthCreateIntegrationEntity'
import { NeonAuthCreateNewUserEntity } from './entity/NeonAuthCreateNewUserEntity'
import { NeonAuthEmailAndPasswordConfigEntity } from './entity/NeonAuthEmailAndPasswordConfigEntity'
import { NeonAuthEmailServerConfigEntity } from './entity/NeonAuthEmailServerConfigEntity'
import { NeonAuthIntegrationEntity } from './entity/NeonAuthIntegrationEntity'
import { NeonAuthMagicLinkConfigEntity } from './entity/NeonAuthMagicLinkConfigEntity'
import { NeonAuthOauthProviderEntity } from './entity/NeonAuthOauthProviderEntity'
import { NeonAuthOrganizationConfigEntity } from './entity/NeonAuthOrganizationConfigEntity'
import { NeonAuthPhoneNumberConfigEntity } from './entity/NeonAuthPhoneNumberConfigEntity'
import { NeonAuthPluginConfigEntity } from './entity/NeonAuthPluginConfigEntity'
import { NeonAuthRedirectUriWhitelistDomainEntity } from './entity/NeonAuthRedirectUriWhitelistDomainEntity'
import { NeonAuthTransferAuthProviderProjectEntity } from './entity/NeonAuthTransferAuthProviderProjectEntity'
import { NeonAuthWebhookConfigEntity } from './entity/NeonAuthWebhookConfigEntity'
import { NeonFunctionEntity } from './entity/NeonFunctionEntity'
import { NeonFunctionDeploymentEntity } from './entity/NeonFunctionDeploymentEntity'
import { OperationEntity } from './entity/OperationEntity'
import { OrgApiKeyCreateEntity } from './entity/OrgApiKeyCreateEntity'
import { OrgApiKeyRevokeEntity } from './entity/OrgApiKeyRevokeEntity'
import { OrgApiKeysListResponseItemEntity } from './entity/OrgApiKeysListResponseItemEntity'
import { OrganizationEntity } from './entity/OrganizationEntity'
import { OrganizationInvitationEntity } from './entity/OrganizationInvitationEntity'
import { PresignEntity } from './entity/PresignEntity'
import { ProjectEntity } from './entity/ProjectEntity'
import { ProjectBranchLogFieldEntity } from './entity/ProjectBranchLogFieldEntity'
import { ProjectBranchLogFieldValueEntity } from './entity/ProjectBranchLogFieldValueEntity'
import { ProjectBranchLogsQueryEntity } from './entity/ProjectBranchLogsQueryEntity'
import { ProjectMemberEntity } from './entity/ProjectMemberEntity'
import { ProjectMemberRoleEntity } from './entity/ProjectMemberRoleEntity'
import { ProjectPermissionEntity } from './entity/ProjectPermissionEntity'
import { ProjectRecoverEntity } from './entity/ProjectRecoverEntity'
import { ProjectTransferRequestEntity } from './entity/ProjectTransferRequestEntity'
import { RegionEntity } from './entity/RegionEntity'
import { RoleEntity } from './entity/RoleEntity'
import { RoleOperationEntity } from './entity/RoleOperationEntity'
import { RolePasswordEntity } from './entity/RolePasswordEntity'
import { SendNeonAuthTestEmailEntity } from './entity/SendNeonAuthTestEmailEntity'
import { SnapshotEntity } from './entity/SnapshotEntity'
import { SpendingLimitEntity } from './entity/SpendingLimitEntity'
import { TriggerEntity } from './entity/TriggerEntity'
import { UpdateNeonAuthUserRoleEntity } from './entity/UpdateNeonAuthUserRoleEntity'
import { VpcEndpointEntity } from './entity/VpcEndpointEntity'

export type * from './NeonTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { NeonEntityBase } from './NeonEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class NeonSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('NeonSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('NeonSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('NeonSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Anonymize().list()` / `client.Anonymize().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Anonymize(entopts?: Record<string, any>) {
    const self = this
    return new AnonymizeEntity(self, entopts)
  }


  // Entity access: `client.AnonymizedBranchStatus().list()` / `client.AnonymizedBranchStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnonymizedBranchStatus(entopts?: Record<string, any>) {
    const self = this
    return new AnonymizedBranchStatusEntity(self, entopts)
  }


  // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiKey(entopts?: Record<string, any>) {
    const self = this
    return new ApiKeyEntity(self, entopts)
  }


  // Entity access: `client.Auth().list()` / `client.Auth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Auth(entopts?: Record<string, any>) {
    const self = this
    return new AuthEntity(self, entopts)
  }


  // Entity access: `client.AuthLegacy().list()` / `client.AuthLegacy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AuthLegacy(entopts?: Record<string, any>) {
    const self = this
    return new AuthLegacyEntity(self, entopts)
  }


  // Entity access: `client.AvailablePreloadLibrary().list()` / `client.AvailablePreloadLibrary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AvailablePreloadLibrary(entopts?: Record<string, any>) {
    const self = this
    return new AvailablePreloadLibraryEntity(self, entopts)
  }


  // Entity access: `client.BackupSchedule().list()` / `client.BackupSchedule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BackupSchedule(entopts?: Record<string, any>) {
    const self = this
    return new BackupScheduleEntity(self, entopts)
  }


  // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Branch(entopts?: Record<string, any>) {
    const self = this
    return new BranchEntity(self, entopts)
  }


  // Entity access: `client.BranchAiGateway().list()` / `client.BranchAiGateway().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchAiGateway(entopts?: Record<string, any>) {
    const self = this
    return new BranchAiGatewayEntity(self, entopts)
  }


  // Entity access: `client.BranchOperation().list()` / `client.BranchOperation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchOperation(entopts?: Record<string, any>) {
    const self = this
    return new BranchOperationEntity(self, entopts)
  }


  // Entity access: `client.BranchSchema().list()` / `client.BranchSchema().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchSchema(entopts?: Record<string, any>) {
    const self = this
    return new BranchSchemaEntity(self, entopts)
  }


  // Entity access: `client.BranchSchemaCompare().list()` / `client.BranchSchemaCompare().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchSchemaCompare(entopts?: Record<string, any>) {
    const self = this
    return new BranchSchemaCompareEntity(self, entopts)
  }


  // Entity access: `client.BranchStorage().list()` / `client.BranchStorage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchStorage(entopts?: Record<string, any>) {
    const self = this
    return new BranchStorageEntity(self, entopts)
  }


  // Entity access: `client.Bucket().list()` / `client.Bucket().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Bucket(entopts?: Record<string, any>) {
    const self = this
    return new BucketEntity(self, entopts)
  }


  // Entity access: `client.BucketObjectsList().list()` / `client.BucketObjectsList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BucketObjectsList(entopts?: Record<string, any>) {
    const self = this
    return new BucketObjectsListEntity(self, entopts)
  }


  // Entity access: `client.ConnectionUri().list()` / `client.ConnectionUri().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConnectionUri(entopts?: Record<string, any>) {
    const self = this
    return new ConnectionUriEntity(self, entopts)
  }


  // Entity access: `client.Consumption().list()` / `client.Consumption().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Consumption(entopts?: Record<string, any>) {
    const self = this
    return new ConsumptionEntity(self, entopts)
  }


  // Entity access: `client.CreateCredential().list()` / `client.CreateCredential().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateCredential(entopts?: Record<string, any>) {
    const self = this
    return new CreateCredentialEntity(self, entopts)
  }


  // Entity access: `client.Credential().list()` / `client.Credential().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Credential(entopts?: Record<string, any>) {
    const self = this
    return new CredentialEntity(self, entopts)
  }


  // Entity access: `client.CurrentUserInfo().list()` / `client.CurrentUserInfo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CurrentUserInfo(entopts?: Record<string, any>) {
    const self = this
    return new CurrentUserInfoEntity(self, entopts)
  }


  // Entity access: `client.CustomDomain().list()` / `client.CustomDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomDomain(entopts?: Record<string, any>) {
    const self = this
    return new CustomDomainEntity(self, entopts)
  }


  // Entity access: `client.DataApi().list()` / `client.DataApi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DataApi(entopts?: Record<string, any>) {
    const self = this
    return new DataApiEntity(self, entopts)
  }


  // Entity access: `client.Database().list()` / `client.Database().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Database(entopts?: Record<string, any>) {
    const self = this
    return new DatabaseEntity(self, entopts)
  }


  // Entity access: `client.EmailProvider().list()` / `client.EmailProvider().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmailProvider(entopts?: Record<string, any>) {
    const self = this
    return new EmailProviderEntity(self, entopts)
  }


  // Entity access: `client.EmailServer().list()` / `client.EmailServer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmailServer(entopts?: Record<string, any>) {
    const self = this
    return new EmailServerEntity(self, entopts)
  }


  // Entity access: `client.Empty().list()` / `client.Empty().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Empty(entopts?: Record<string, any>) {
    const self = this
    return new EmptyEntity(self, entopts)
  }


  // Entity access: `client.Endpoint().list()` / `client.Endpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Endpoint(entopts?: Record<string, any>) {
    const self = this
    return new EndpointEntity(self, entopts)
  }


  // Entity access: `client.EndpointOperation().list()` / `client.EndpointOperation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EndpointOperation(entopts?: Record<string, any>) {
    const self = this
    return new EndpointOperationEntity(self, entopts)
  }


  // Entity access: `client.Function().list()` / `client.Function().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Function(entopts?: Record<string, any>) {
    const self = this
    return new FunctionEntity(self, entopts)
  }


  // Entity access: `client.Jwk().list()` / `client.Jwk().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Jwk(entopts?: Record<string, any>) {
    const self = this
    return new JwkEntity(self, entopts)
  }


  // Entity access: `client.MaskingRule().list()` / `client.MaskingRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MaskingRule(entopts?: Record<string, any>) {
    const self = this
    return new MaskingRuleEntity(self, entopts)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Member(entopts?: Record<string, any>) {
    const self = this
    return new MemberEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthAllowLocalhost().list()` / `client.NeonAuthAllowLocalhost().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthAllowLocalhost(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthAllowLocalhostEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthConfig().list()` / `client.NeonAuthConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthConfig(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthConfigEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthCreateIntegration().list()` / `client.NeonAuthCreateIntegration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthCreateIntegration(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthCreateIntegrationEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthCreateNewUser().list()` / `client.NeonAuthCreateNewUser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthCreateNewUser(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthCreateNewUserEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthEmailAndPasswordConfig().list()` / `client.NeonAuthEmailAndPasswordConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthEmailAndPasswordConfig(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthEmailAndPasswordConfigEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthEmailServerConfig().list()` / `client.NeonAuthEmailServerConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthEmailServerConfig(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthEmailServerConfigEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthIntegration().list()` / `client.NeonAuthIntegration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthIntegration(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthIntegrationEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthMagicLinkConfig().list()` / `client.NeonAuthMagicLinkConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthMagicLinkConfig(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthMagicLinkConfigEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthOauthProvider().list()` / `client.NeonAuthOauthProvider().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthOauthProvider(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthOauthProviderEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthOrganizationConfig().list()` / `client.NeonAuthOrganizationConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthOrganizationConfig(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthOrganizationConfigEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthPhoneNumberConfig().list()` / `client.NeonAuthPhoneNumberConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthPhoneNumberConfig(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthPhoneNumberConfigEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthPluginConfig().list()` / `client.NeonAuthPluginConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthPluginConfig(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthPluginConfigEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthRedirectUriWhitelistDomain().list()` / `client.NeonAuthRedirectUriWhitelistDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthRedirectUriWhitelistDomain(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthRedirectUriWhitelistDomainEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthTransferAuthProviderProject().list()` / `client.NeonAuthTransferAuthProviderProject().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthTransferAuthProviderProject(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthTransferAuthProviderProjectEntity(self, entopts)
  }


  // Entity access: `client.NeonAuthWebhookConfig().list()` / `client.NeonAuthWebhookConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonAuthWebhookConfig(entopts?: Record<string, any>) {
    const self = this
    return new NeonAuthWebhookConfigEntity(self, entopts)
  }


  // Entity access: `client.NeonFunction().list()` / `client.NeonFunction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonFunction(entopts?: Record<string, any>) {
    const self = this
    return new NeonFunctionEntity(self, entopts)
  }


  // Entity access: `client.NeonFunctionDeployment().list()` / `client.NeonFunctionDeployment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NeonFunctionDeployment(entopts?: Record<string, any>) {
    const self = this
    return new NeonFunctionDeploymentEntity(self, entopts)
  }


  // Entity access: `client.Operation().list()` / `client.Operation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Operation(entopts?: Record<string, any>) {
    const self = this
    return new OperationEntity(self, entopts)
  }


  // Entity access: `client.OrgApiKeyCreate().list()` / `client.OrgApiKeyCreate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgApiKeyCreate(entopts?: Record<string, any>) {
    const self = this
    return new OrgApiKeyCreateEntity(self, entopts)
  }


  // Entity access: `client.OrgApiKeyRevoke().list()` / `client.OrgApiKeyRevoke().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgApiKeyRevoke(entopts?: Record<string, any>) {
    const self = this
    return new OrgApiKeyRevokeEntity(self, entopts)
  }


  // Entity access: `client.OrgApiKeysListResponseItem().list()` / `client.OrgApiKeysListResponseItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgApiKeysListResponseItem(entopts?: Record<string, any>) {
    const self = this
    return new OrgApiKeysListResponseItemEntity(self, entopts)
  }


  // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Organization(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationEntity(self, entopts)
  }


  // Entity access: `client.OrganizationInvitation().list()` / `client.OrganizationInvitation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationInvitation(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationInvitationEntity(self, entopts)
  }


  // Entity access: `client.Presign().list()` / `client.Presign().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Presign(entopts?: Record<string, any>) {
    const self = this
    return new PresignEntity(self, entopts)
  }


  // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Project(entopts?: Record<string, any>) {
    const self = this
    return new ProjectEntity(self, entopts)
  }


  // Entity access: `client.ProjectBranchLogField().list()` / `client.ProjectBranchLogField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectBranchLogField(entopts?: Record<string, any>) {
    const self = this
    return new ProjectBranchLogFieldEntity(self, entopts)
  }


  // Entity access: `client.ProjectBranchLogFieldValue().list()` / `client.ProjectBranchLogFieldValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectBranchLogFieldValue(entopts?: Record<string, any>) {
    const self = this
    return new ProjectBranchLogFieldValueEntity(self, entopts)
  }


  // Entity access: `client.ProjectBranchLogsQuery().list()` / `client.ProjectBranchLogsQuery().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectBranchLogsQuery(entopts?: Record<string, any>) {
    const self = this
    return new ProjectBranchLogsQueryEntity(self, entopts)
  }


  // Entity access: `client.ProjectMember().list()` / `client.ProjectMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectMember(entopts?: Record<string, any>) {
    const self = this
    return new ProjectMemberEntity(self, entopts)
  }


  // Entity access: `client.ProjectMemberRole().list()` / `client.ProjectMemberRole().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectMemberRole(entopts?: Record<string, any>) {
    const self = this
    return new ProjectMemberRoleEntity(self, entopts)
  }


  // Entity access: `client.ProjectPermission().list()` / `client.ProjectPermission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectPermission(entopts?: Record<string, any>) {
    const self = this
    return new ProjectPermissionEntity(self, entopts)
  }


  // Entity access: `client.ProjectRecover().list()` / `client.ProjectRecover().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectRecover(entopts?: Record<string, any>) {
    const self = this
    return new ProjectRecoverEntity(self, entopts)
  }


  // Entity access: `client.ProjectTransferRequest().list()` / `client.ProjectTransferRequest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectTransferRequest(entopts?: Record<string, any>) {
    const self = this
    return new ProjectTransferRequestEntity(self, entopts)
  }


  // Entity access: `client.Region().list()` / `client.Region().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Region(entopts?: Record<string, any>) {
    const self = this
    return new RegionEntity(self, entopts)
  }


  // Entity access: `client.Role().list()` / `client.Role().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Role(entopts?: Record<string, any>) {
    const self = this
    return new RoleEntity(self, entopts)
  }


  // Entity access: `client.RoleOperation().list()` / `client.RoleOperation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RoleOperation(entopts?: Record<string, any>) {
    const self = this
    return new RoleOperationEntity(self, entopts)
  }


  // Entity access: `client.RolePassword().list()` / `client.RolePassword().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RolePassword(entopts?: Record<string, any>) {
    const self = this
    return new RolePasswordEntity(self, entopts)
  }


  // Entity access: `client.SendNeonAuthTestEmail().list()` / `client.SendNeonAuthTestEmail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SendNeonAuthTestEmail(entopts?: Record<string, any>) {
    const self = this
    return new SendNeonAuthTestEmailEntity(self, entopts)
  }


  // Entity access: `client.Snapshot().list()` / `client.Snapshot().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Snapshot(entopts?: Record<string, any>) {
    const self = this
    return new SnapshotEntity(self, entopts)
  }


  // Entity access: `client.SpendingLimit().list()` / `client.SpendingLimit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SpendingLimit(entopts?: Record<string, any>) {
    const self = this
    return new SpendingLimitEntity(self, entopts)
  }


  // Entity access: `client.Trigger().list()` / `client.Trigger().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Trigger(entopts?: Record<string, any>) {
    const self = this
    return new TriggerEntity(self, entopts)
  }


  // Entity access: `client.UpdateNeonAuthUserRole().list()` / `client.UpdateNeonAuthUserRole().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateNeonAuthUserRole(entopts?: Record<string, any>) {
    const self = this
    return new UpdateNeonAuthUserRoleEntity(self, entopts)
  }


  // Entity access: `client.VpcEndpoint().list()` / `client.VpcEndpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VpcEndpoint(entopts?: Record<string, any>) {
    const self = this
    return new VpcEndpointEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new NeonSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return NeonSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Neon' }
  }

  toString() {
    return 'Neon ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = NeonSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  NeonEntityBase,

  NeonSDK,
  SDK,
}


