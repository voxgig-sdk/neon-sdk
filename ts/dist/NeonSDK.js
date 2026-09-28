"use strict";
// Neon Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.NeonSDK = exports.NeonEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AnonymizeEntity_1 = require("./entity/AnonymizeEntity");
const AnonymizedBranchStatusEntity_1 = require("./entity/AnonymizedBranchStatusEntity");
const ApiKeyEntity_1 = require("./entity/ApiKeyEntity");
const AuthEntity_1 = require("./entity/AuthEntity");
const AuthLegacyEntity_1 = require("./entity/AuthLegacyEntity");
const AvailablePreloadLibraryEntity_1 = require("./entity/AvailablePreloadLibraryEntity");
const BackupScheduleEntity_1 = require("./entity/BackupScheduleEntity");
const BranchEntity_1 = require("./entity/BranchEntity");
const BranchAiGatewayEntity_1 = require("./entity/BranchAiGatewayEntity");
const BranchOperationEntity_1 = require("./entity/BranchOperationEntity");
const BranchSchemaEntity_1 = require("./entity/BranchSchemaEntity");
const BranchSchemaCompareEntity_1 = require("./entity/BranchSchemaCompareEntity");
const BranchStorageEntity_1 = require("./entity/BranchStorageEntity");
const BucketEntity_1 = require("./entity/BucketEntity");
const BucketObjectsListEntity_1 = require("./entity/BucketObjectsListEntity");
const ConnectionUriEntity_1 = require("./entity/ConnectionUriEntity");
const ConsumptionEntity_1 = require("./entity/ConsumptionEntity");
const CreateCredentialEntity_1 = require("./entity/CreateCredentialEntity");
const CredentialEntity_1 = require("./entity/CredentialEntity");
const CurrentUserInfoEntity_1 = require("./entity/CurrentUserInfoEntity");
const CustomDomainEntity_1 = require("./entity/CustomDomainEntity");
const DataApiEntity_1 = require("./entity/DataApiEntity");
const DatabaseEntity_1 = require("./entity/DatabaseEntity");
const EmailProviderEntity_1 = require("./entity/EmailProviderEntity");
const EmailServerEntity_1 = require("./entity/EmailServerEntity");
const EmptyEntity_1 = require("./entity/EmptyEntity");
const EndpointEntity_1 = require("./entity/EndpointEntity");
const EndpointOperationEntity_1 = require("./entity/EndpointOperationEntity");
const FunctionEntity_1 = require("./entity/FunctionEntity");
const JwkEntity_1 = require("./entity/JwkEntity");
const MaskingRuleEntity_1 = require("./entity/MaskingRuleEntity");
const MemberEntity_1 = require("./entity/MemberEntity");
const NeonAuthAllowLocalhostEntity_1 = require("./entity/NeonAuthAllowLocalhostEntity");
const NeonAuthConfigEntity_1 = require("./entity/NeonAuthConfigEntity");
const NeonAuthCreateIntegrationEntity_1 = require("./entity/NeonAuthCreateIntegrationEntity");
const NeonAuthCreateNewUserEntity_1 = require("./entity/NeonAuthCreateNewUserEntity");
const NeonAuthEmailAndPasswordConfigEntity_1 = require("./entity/NeonAuthEmailAndPasswordConfigEntity");
const NeonAuthEmailServerConfigEntity_1 = require("./entity/NeonAuthEmailServerConfigEntity");
const NeonAuthIntegrationEntity_1 = require("./entity/NeonAuthIntegrationEntity");
const NeonAuthMagicLinkConfigEntity_1 = require("./entity/NeonAuthMagicLinkConfigEntity");
const NeonAuthOauthProviderEntity_1 = require("./entity/NeonAuthOauthProviderEntity");
const NeonAuthOrganizationConfigEntity_1 = require("./entity/NeonAuthOrganizationConfigEntity");
const NeonAuthPhoneNumberConfigEntity_1 = require("./entity/NeonAuthPhoneNumberConfigEntity");
const NeonAuthPluginConfigEntity_1 = require("./entity/NeonAuthPluginConfigEntity");
const NeonAuthRedirectUriWhitelistDomainEntity_1 = require("./entity/NeonAuthRedirectUriWhitelistDomainEntity");
const NeonAuthTransferAuthProviderProjectEntity_1 = require("./entity/NeonAuthTransferAuthProviderProjectEntity");
const NeonAuthWebhookConfigEntity_1 = require("./entity/NeonAuthWebhookConfigEntity");
const NeonFunctionEntity_1 = require("./entity/NeonFunctionEntity");
const NeonFunctionDeploymentEntity_1 = require("./entity/NeonFunctionDeploymentEntity");
const OperationEntity_1 = require("./entity/OperationEntity");
const OrgApiKeyCreateEntity_1 = require("./entity/OrgApiKeyCreateEntity");
const OrgApiKeyRevokeEntity_1 = require("./entity/OrgApiKeyRevokeEntity");
const OrgApiKeysListResponseItemEntity_1 = require("./entity/OrgApiKeysListResponseItemEntity");
const OrganizationEntity_1 = require("./entity/OrganizationEntity");
const OrganizationInvitationEntity_1 = require("./entity/OrganizationInvitationEntity");
const PresignEntity_1 = require("./entity/PresignEntity");
const ProjectEntity_1 = require("./entity/ProjectEntity");
const ProjectBranchLogFieldEntity_1 = require("./entity/ProjectBranchLogFieldEntity");
const ProjectBranchLogFieldValueEntity_1 = require("./entity/ProjectBranchLogFieldValueEntity");
const ProjectBranchLogsQueryEntity_1 = require("./entity/ProjectBranchLogsQueryEntity");
const ProjectMemberEntity_1 = require("./entity/ProjectMemberEntity");
const ProjectMemberRoleEntity_1 = require("./entity/ProjectMemberRoleEntity");
const ProjectPermissionEntity_1 = require("./entity/ProjectPermissionEntity");
const ProjectRecoverEntity_1 = require("./entity/ProjectRecoverEntity");
const ProjectTransferRequestEntity_1 = require("./entity/ProjectTransferRequestEntity");
const RegionEntity_1 = require("./entity/RegionEntity");
const RoleEntity_1 = require("./entity/RoleEntity");
const RoleOperationEntity_1 = require("./entity/RoleOperationEntity");
const RolePasswordEntity_1 = require("./entity/RolePasswordEntity");
const SendNeonAuthTestEmailEntity_1 = require("./entity/SendNeonAuthTestEmailEntity");
const SnapshotEntity_1 = require("./entity/SnapshotEntity");
const SpendingLimitEntity_1 = require("./entity/SpendingLimitEntity");
const TriggerEntity_1 = require("./entity/TriggerEntity");
const UpdateNeonAuthUserRoleEntity_1 = require("./entity/UpdateNeonAuthUserRoleEntity");
const VpcEndpointEntity_1 = require("./entity/VpcEndpointEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const NeonEntityBase_1 = require("./NeonEntityBase");
Object.defineProperty(exports, "NeonEntityBase", { enumerable: true, get: function () { return NeonEntityBase_1.NeonEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class NeonSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
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
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('NeonSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('NeonSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('NeonSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Anonymize().list()` / `client.Anonymize().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Anonymize(entopts) {
        const self = this;
        return new AnonymizeEntity_1.AnonymizeEntity(self, entopts);
    }
    // Entity access: `client.AnonymizedBranchStatus().list()` / `client.AnonymizedBranchStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnonymizedBranchStatus(entopts) {
        const self = this;
        return new AnonymizedBranchStatusEntity_1.AnonymizedBranchStatusEntity(self, entopts);
    }
    // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiKey(entopts) {
        const self = this;
        return new ApiKeyEntity_1.ApiKeyEntity(self, entopts);
    }
    // Entity access: `client.Auth().list()` / `client.Auth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Auth(entopts) {
        const self = this;
        return new AuthEntity_1.AuthEntity(self, entopts);
    }
    // Entity access: `client.AuthLegacy().list()` / `client.AuthLegacy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AuthLegacy(entopts) {
        const self = this;
        return new AuthLegacyEntity_1.AuthLegacyEntity(self, entopts);
    }
    // Entity access: `client.AvailablePreloadLibrary().list()` / `client.AvailablePreloadLibrary().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AvailablePreloadLibrary(entopts) {
        const self = this;
        return new AvailablePreloadLibraryEntity_1.AvailablePreloadLibraryEntity(self, entopts);
    }
    // Entity access: `client.BackupSchedule().list()` / `client.BackupSchedule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BackupSchedule(entopts) {
        const self = this;
        return new BackupScheduleEntity_1.BackupScheduleEntity(self, entopts);
    }
    // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Branch(entopts) {
        const self = this;
        return new BranchEntity_1.BranchEntity(self, entopts);
    }
    // Entity access: `client.BranchAiGateway().list()` / `client.BranchAiGateway().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchAiGateway(entopts) {
        const self = this;
        return new BranchAiGatewayEntity_1.BranchAiGatewayEntity(self, entopts);
    }
    // Entity access: `client.BranchOperation().list()` / `client.BranchOperation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchOperation(entopts) {
        const self = this;
        return new BranchOperationEntity_1.BranchOperationEntity(self, entopts);
    }
    // Entity access: `client.BranchSchema().list()` / `client.BranchSchema().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchSchema(entopts) {
        const self = this;
        return new BranchSchemaEntity_1.BranchSchemaEntity(self, entopts);
    }
    // Entity access: `client.BranchSchemaCompare().list()` / `client.BranchSchemaCompare().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchSchemaCompare(entopts) {
        const self = this;
        return new BranchSchemaCompareEntity_1.BranchSchemaCompareEntity(self, entopts);
    }
    // Entity access: `client.BranchStorage().list()` / `client.BranchStorage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchStorage(entopts) {
        const self = this;
        return new BranchStorageEntity_1.BranchStorageEntity(self, entopts);
    }
    // Entity access: `client.Bucket().list()` / `client.Bucket().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Bucket(entopts) {
        const self = this;
        return new BucketEntity_1.BucketEntity(self, entopts);
    }
    // Entity access: `client.BucketObjectsList().list()` / `client.BucketObjectsList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BucketObjectsList(entopts) {
        const self = this;
        return new BucketObjectsListEntity_1.BucketObjectsListEntity(self, entopts);
    }
    // Entity access: `client.ConnectionUri().list()` / `client.ConnectionUri().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ConnectionUri(entopts) {
        const self = this;
        return new ConnectionUriEntity_1.ConnectionUriEntity(self, entopts);
    }
    // Entity access: `client.Consumption().list()` / `client.Consumption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Consumption(entopts) {
        const self = this;
        return new ConsumptionEntity_1.ConsumptionEntity(self, entopts);
    }
    // Entity access: `client.CreateCredential().list()` / `client.CreateCredential().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateCredential(entopts) {
        const self = this;
        return new CreateCredentialEntity_1.CreateCredentialEntity(self, entopts);
    }
    // Entity access: `client.Credential().list()` / `client.Credential().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Credential(entopts) {
        const self = this;
        return new CredentialEntity_1.CredentialEntity(self, entopts);
    }
    // Entity access: `client.CurrentUserInfo().list()` / `client.CurrentUserInfo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CurrentUserInfo(entopts) {
        const self = this;
        return new CurrentUserInfoEntity_1.CurrentUserInfoEntity(self, entopts);
    }
    // Entity access: `client.CustomDomain().list()` / `client.CustomDomain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomDomain(entopts) {
        const self = this;
        return new CustomDomainEntity_1.CustomDomainEntity(self, entopts);
    }
    // Entity access: `client.DataApi().list()` / `client.DataApi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DataApi(entopts) {
        const self = this;
        return new DataApiEntity_1.DataApiEntity(self, entopts);
    }
    // Entity access: `client.Database().list()` / `client.Database().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Database(entopts) {
        const self = this;
        return new DatabaseEntity_1.DatabaseEntity(self, entopts);
    }
    // Entity access: `client.EmailProvider().list()` / `client.EmailProvider().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmailProvider(entopts) {
        const self = this;
        return new EmailProviderEntity_1.EmailProviderEntity(self, entopts);
    }
    // Entity access: `client.EmailServer().list()` / `client.EmailServer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmailServer(entopts) {
        const self = this;
        return new EmailServerEntity_1.EmailServerEntity(self, entopts);
    }
    // Entity access: `client.Empty().list()` / `client.Empty().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Empty(entopts) {
        const self = this;
        return new EmptyEntity_1.EmptyEntity(self, entopts);
    }
    // Entity access: `client.Endpoint().list()` / `client.Endpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Endpoint(entopts) {
        const self = this;
        return new EndpointEntity_1.EndpointEntity(self, entopts);
    }
    // Entity access: `client.EndpointOperation().list()` / `client.EndpointOperation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EndpointOperation(entopts) {
        const self = this;
        return new EndpointOperationEntity_1.EndpointOperationEntity(self, entopts);
    }
    // Entity access: `client.Function().list()` / `client.Function().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Function(entopts) {
        const self = this;
        return new FunctionEntity_1.FunctionEntity(self, entopts);
    }
    // Entity access: `client.Jwk().list()` / `client.Jwk().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Jwk(entopts) {
        const self = this;
        return new JwkEntity_1.JwkEntity(self, entopts);
    }
    // Entity access: `client.MaskingRule().list()` / `client.MaskingRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MaskingRule(entopts) {
        const self = this;
        return new MaskingRuleEntity_1.MaskingRuleEntity(self, entopts);
    }
    // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Member(entopts) {
        const self = this;
        return new MemberEntity_1.MemberEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthAllowLocalhost().list()` / `client.NeonAuthAllowLocalhost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthAllowLocalhost(entopts) {
        const self = this;
        return new NeonAuthAllowLocalhostEntity_1.NeonAuthAllowLocalhostEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthConfig().list()` / `client.NeonAuthConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthConfig(entopts) {
        const self = this;
        return new NeonAuthConfigEntity_1.NeonAuthConfigEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthCreateIntegration().list()` / `client.NeonAuthCreateIntegration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthCreateIntegration(entopts) {
        const self = this;
        return new NeonAuthCreateIntegrationEntity_1.NeonAuthCreateIntegrationEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthCreateNewUser().list()` / `client.NeonAuthCreateNewUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthCreateNewUser(entopts) {
        const self = this;
        return new NeonAuthCreateNewUserEntity_1.NeonAuthCreateNewUserEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthEmailAndPasswordConfig().list()` / `client.NeonAuthEmailAndPasswordConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthEmailAndPasswordConfig(entopts) {
        const self = this;
        return new NeonAuthEmailAndPasswordConfigEntity_1.NeonAuthEmailAndPasswordConfigEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthEmailServerConfig().list()` / `client.NeonAuthEmailServerConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthEmailServerConfig(entopts) {
        const self = this;
        return new NeonAuthEmailServerConfigEntity_1.NeonAuthEmailServerConfigEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthIntegration().list()` / `client.NeonAuthIntegration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthIntegration(entopts) {
        const self = this;
        return new NeonAuthIntegrationEntity_1.NeonAuthIntegrationEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthMagicLinkConfig().list()` / `client.NeonAuthMagicLinkConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthMagicLinkConfig(entopts) {
        const self = this;
        return new NeonAuthMagicLinkConfigEntity_1.NeonAuthMagicLinkConfigEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthOauthProvider().list()` / `client.NeonAuthOauthProvider().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthOauthProvider(entopts) {
        const self = this;
        return new NeonAuthOauthProviderEntity_1.NeonAuthOauthProviderEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthOrganizationConfig().list()` / `client.NeonAuthOrganizationConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthOrganizationConfig(entopts) {
        const self = this;
        return new NeonAuthOrganizationConfigEntity_1.NeonAuthOrganizationConfigEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthPhoneNumberConfig().list()` / `client.NeonAuthPhoneNumberConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthPhoneNumberConfig(entopts) {
        const self = this;
        return new NeonAuthPhoneNumberConfigEntity_1.NeonAuthPhoneNumberConfigEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthPluginConfig().list()` / `client.NeonAuthPluginConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthPluginConfig(entopts) {
        const self = this;
        return new NeonAuthPluginConfigEntity_1.NeonAuthPluginConfigEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthRedirectUriWhitelistDomain().list()` / `client.NeonAuthRedirectUriWhitelistDomain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthRedirectUriWhitelistDomain(entopts) {
        const self = this;
        return new NeonAuthRedirectUriWhitelistDomainEntity_1.NeonAuthRedirectUriWhitelistDomainEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthTransferAuthProviderProject().list()` / `client.NeonAuthTransferAuthProviderProject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthTransferAuthProviderProject(entopts) {
        const self = this;
        return new NeonAuthTransferAuthProviderProjectEntity_1.NeonAuthTransferAuthProviderProjectEntity(self, entopts);
    }
    // Entity access: `client.NeonAuthWebhookConfig().list()` / `client.NeonAuthWebhookConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonAuthWebhookConfig(entopts) {
        const self = this;
        return new NeonAuthWebhookConfigEntity_1.NeonAuthWebhookConfigEntity(self, entopts);
    }
    // Entity access: `client.NeonFunction().list()` / `client.NeonFunction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonFunction(entopts) {
        const self = this;
        return new NeonFunctionEntity_1.NeonFunctionEntity(self, entopts);
    }
    // Entity access: `client.NeonFunctionDeployment().list()` / `client.NeonFunctionDeployment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NeonFunctionDeployment(entopts) {
        const self = this;
        return new NeonFunctionDeploymentEntity_1.NeonFunctionDeploymentEntity(self, entopts);
    }
    // Entity access: `client.Operation().list()` / `client.Operation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Operation(entopts) {
        const self = this;
        return new OperationEntity_1.OperationEntity(self, entopts);
    }
    // Entity access: `client.OrgApiKeyCreate().list()` / `client.OrgApiKeyCreate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrgApiKeyCreate(entopts) {
        const self = this;
        return new OrgApiKeyCreateEntity_1.OrgApiKeyCreateEntity(self, entopts);
    }
    // Entity access: `client.OrgApiKeyRevoke().list()` / `client.OrgApiKeyRevoke().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrgApiKeyRevoke(entopts) {
        const self = this;
        return new OrgApiKeyRevokeEntity_1.OrgApiKeyRevokeEntity(self, entopts);
    }
    // Entity access: `client.OrgApiKeysListResponseItem().list()` / `client.OrgApiKeysListResponseItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrgApiKeysListResponseItem(entopts) {
        const self = this;
        return new OrgApiKeysListResponseItemEntity_1.OrgApiKeysListResponseItemEntity(self, entopts);
    }
    // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Organization(entopts) {
        const self = this;
        return new OrganizationEntity_1.OrganizationEntity(self, entopts);
    }
    // Entity access: `client.OrganizationInvitation().list()` / `client.OrganizationInvitation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationInvitation(entopts) {
        const self = this;
        return new OrganizationInvitationEntity_1.OrganizationInvitationEntity(self, entopts);
    }
    // Entity access: `client.Presign().list()` / `client.Presign().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Presign(entopts) {
        const self = this;
        return new PresignEntity_1.PresignEntity(self, entopts);
    }
    // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Project(entopts) {
        const self = this;
        return new ProjectEntity_1.ProjectEntity(self, entopts);
    }
    // Entity access: `client.ProjectBranchLogField().list()` / `client.ProjectBranchLogField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectBranchLogField(entopts) {
        const self = this;
        return new ProjectBranchLogFieldEntity_1.ProjectBranchLogFieldEntity(self, entopts);
    }
    // Entity access: `client.ProjectBranchLogFieldValue().list()` / `client.ProjectBranchLogFieldValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectBranchLogFieldValue(entopts) {
        const self = this;
        return new ProjectBranchLogFieldValueEntity_1.ProjectBranchLogFieldValueEntity(self, entopts);
    }
    // Entity access: `client.ProjectBranchLogsQuery().list()` / `client.ProjectBranchLogsQuery().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectBranchLogsQuery(entopts) {
        const self = this;
        return new ProjectBranchLogsQueryEntity_1.ProjectBranchLogsQueryEntity(self, entopts);
    }
    // Entity access: `client.ProjectMember().list()` / `client.ProjectMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectMember(entopts) {
        const self = this;
        return new ProjectMemberEntity_1.ProjectMemberEntity(self, entopts);
    }
    // Entity access: `client.ProjectMemberRole().list()` / `client.ProjectMemberRole().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectMemberRole(entopts) {
        const self = this;
        return new ProjectMemberRoleEntity_1.ProjectMemberRoleEntity(self, entopts);
    }
    // Entity access: `client.ProjectPermission().list()` / `client.ProjectPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectPermission(entopts) {
        const self = this;
        return new ProjectPermissionEntity_1.ProjectPermissionEntity(self, entopts);
    }
    // Entity access: `client.ProjectRecover().list()` / `client.ProjectRecover().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectRecover(entopts) {
        const self = this;
        return new ProjectRecoverEntity_1.ProjectRecoverEntity(self, entopts);
    }
    // Entity access: `client.ProjectTransferRequest().list()` / `client.ProjectTransferRequest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectTransferRequest(entopts) {
        const self = this;
        return new ProjectTransferRequestEntity_1.ProjectTransferRequestEntity(self, entopts);
    }
    // Entity access: `client.Region().list()` / `client.Region().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Region(entopts) {
        const self = this;
        return new RegionEntity_1.RegionEntity(self, entopts);
    }
    // Entity access: `client.Role().list()` / `client.Role().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Role(entopts) {
        const self = this;
        return new RoleEntity_1.RoleEntity(self, entopts);
    }
    // Entity access: `client.RoleOperation().list()` / `client.RoleOperation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RoleOperation(entopts) {
        const self = this;
        return new RoleOperationEntity_1.RoleOperationEntity(self, entopts);
    }
    // Entity access: `client.RolePassword().list()` / `client.RolePassword().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RolePassword(entopts) {
        const self = this;
        return new RolePasswordEntity_1.RolePasswordEntity(self, entopts);
    }
    // Entity access: `client.SendNeonAuthTestEmail().list()` / `client.SendNeonAuthTestEmail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SendNeonAuthTestEmail(entopts) {
        const self = this;
        return new SendNeonAuthTestEmailEntity_1.SendNeonAuthTestEmailEntity(self, entopts);
    }
    // Entity access: `client.Snapshot().list()` / `client.Snapshot().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Snapshot(entopts) {
        const self = this;
        return new SnapshotEntity_1.SnapshotEntity(self, entopts);
    }
    // Entity access: `client.SpendingLimit().list()` / `client.SpendingLimit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SpendingLimit(entopts) {
        const self = this;
        return new SpendingLimitEntity_1.SpendingLimitEntity(self, entopts);
    }
    // Entity access: `client.Trigger().list()` / `client.Trigger().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Trigger(entopts) {
        const self = this;
        return new TriggerEntity_1.TriggerEntity(self, entopts);
    }
    // Entity access: `client.UpdateNeonAuthUserRole().list()` / `client.UpdateNeonAuthUserRole().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateNeonAuthUserRole(entopts) {
        const self = this;
        return new UpdateNeonAuthUserRoleEntity_1.UpdateNeonAuthUserRoleEntity(self, entopts);
    }
    // Entity access: `client.VpcEndpoint().list()` / `client.VpcEndpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VpcEndpoint(entopts) {
        const self = this;
        return new VpcEndpointEntity_1.VpcEndpointEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new NeonSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return NeonSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Neon' };
    }
    toString() {
        return 'Neon ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.NeonSDK = NeonSDK;
const SDK = NeonSDK;
exports.SDK = SDK;
//# sourceMappingURL=NeonSDK.js.map