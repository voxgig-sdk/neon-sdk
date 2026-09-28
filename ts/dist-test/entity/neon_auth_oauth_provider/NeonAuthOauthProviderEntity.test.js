"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('NeonAuthOauthProviderEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.NeonAuthOauthProvider();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create', 'list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'neon_auth_oauth_provider.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "client_id": { "a": true, "h": "Client Id", "n": "client_id", "r": false, "sh": "Public identifier for the OAuth application, issued by the provider when the application is registered.", "t": "`$STRING`", "key$": "client_id", "index$": 0 }, "client_secret": { "a": true, "h": "Client Secret", "n": "client_secret", "r": false, "sh": "OAuth client secret for the provider.", "t": "`$STRING`", "key$": "client_secret", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The OAuth provider's ID.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "microsoft_tenant_id": { "a": true, "h": "Microsoft Tenant Id", "n": "microsoft_tenant_id", "r": false, "sh": "Tenant ID for the Microsoft OAuth provider.", "t": "`$STRING`", "key$": "microsoft_tenant_id", "index$": 3 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "OAuth provider key type.", "t": "`$STRING`", "key$": "type", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "neon_auth_oauth_provider", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /projects/{project_id}/branches/{branch_id}/auth/oauth_providers", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "auth" }, { "lit": "oauth_providers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /projects/{project_id}/auth/oauth_providers", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/auth/oauth_providers", "q": { "exist": ["project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "auth" }, { "lit": "oauth_providers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/branches/{branch_id}/auth/oauth_providers", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "auth" }, { "lit": "oauth_providers" }], "t": { "req": "`reqdata`", "res": "`body.providers`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /projects/{project_id}/auth/oauth_providers", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/auth/oauth_providers", "q": { "exist": ["project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "auth" }, { "lit": "oauth_providers" }], "t": { "req": "`reqdata`", "res": "`body.providers`" }, "index$": 1 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "oauth_provider_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PATCH", "o": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}", "q": { "exist": ["branch_id", "id", "project_id"] }, "r": { "param": { "oauth_provider_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "auth" }, { "lit": "oauth_providers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PATCH /projects/{project_id}/auth/oauth_providers/{oauth_provider_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "oauth_provider_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/projects/{project_id}/auth/oauth_providers/{oauth_provider_id}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "oauth_provider_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "auth" }, { "lit": "oauth_providers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.branch"]] }, "key$": "neon_auth_oauth_provider", "name__orig": "neon_auth_oauth_provider", "Name": "NeonAuthOauthProvider", "name_": "neon_auth_oauth_provider", "name-": "neon-auth-oauth-provider", "NAME": "NEON_AUTH_OAUTH_PROVIDER", "index$": 40 }, { "active": true, "entity": "neon_auth_oauth_provider", "key$": "BasicNeonAuthOauthProviderFlow", "kind": "basic", "name": "BasicNeonAuthOauthProviderFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "neon_auth_oauth_provider_ref01" }, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "neon_auth_oauth_provider_ref01" } }], "index$": 1 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "neon_auth_oauth_provider_ref01", "srcdatavar": "neon_auth_oauth_provider_ref01_data", "suffix": "_up0", "textfield": "client_id" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-neon_auth_oauth_provider_ref01" } }], "v": [], "index$": 2 }] }, 'NeonAuthOauthProvider', { "POST /projects/{project_id}/branches/{branch_id}/auth/oauth_providers": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["id"], "x-sensitive": ["client_secret"], "properties": { "id": { "type": "string", "enum": ["google", "github", "microsoft", "vercel"], "description": "OAuth provider to configure for Neon Auth. Known values: `google`, `github`, `microsoft`, `vercel`.\n", "x-ref": "#/components/schemas/NeonAuthOauthProviderId", "key$": "id" }, "client_id": { "type": "string", "description": "The client ID issued by the OAuth provider for your application. Used to identify the application during the OAuth flow.", "key$": "client_id" }, "client_secret": { "type": "string", "description": "OAuth client secret for the provider.", "key$": "client_secret" }, "microsoft_tenant_id": { "type": "string", "description": "Tenant ID for the Microsoft OAuth provider. Only relevant when the OAuth provider is Microsoft; omit or leave blank for other providers.", "key$": "microsoft_tenant_id" } }, "x-ref": "#/components/schemas/NeonAuthAddOAuthProviderRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "POST /projects/{project_id}/auth/oauth_providers": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["id"], "x-sensitive": ["client_secret"], "properties": { "id": { "type": "string", "enum": ["google", "github", "microsoft", "vercel"], "description": "OAuth provider to configure for Neon Auth. Known values: `google`, `github`, `microsoft`, `vercel`.\n", "x-ref": "#/components/schemas/NeonAuthOauthProviderId", "key$": "id" }, "client_id": { "type": "string", "description": "The client ID issued by the OAuth provider for your application. Used to identify the application during the OAuth flow.", "key$": "client_id" }, "client_secret": { "type": "string", "description": "OAuth client secret for the provider.", "key$": "client_secret" }, "microsoft_tenant_id": { "type": "string", "description": "Tenant ID for the Microsoft OAuth provider. Only relevant when the OAuth provider is Microsoft; omit or leave blank for other providers.", "key$": "microsoft_tenant_id" } }, "x-ref": "#/components/schemas/NeonAuthAddOAuthProviderRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] }, "GET /projects/{project_id}/branches/{branch_id}/auth/oauth_providers": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "GET /projects/{project_id}/auth/oauth_providers": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] }, "PATCH /projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "x-sensitive": ["client_secret"], "properties": { "client_id": { "type": "string", "description": "The OAuth client ID registered with the provider. Omit to keep the currently configured value.", "key$": "client_id" }, "client_secret": { "type": "string", "description": "OAuth client secret for the provider. Omit to leave the existing secret unchanged.", "key$": "client_secret" }, "microsoft_tenant_id": { "type": "string", "description": "The tenant ID scoping the Microsoft OAuth provider. Supply this field when the provider type is microsoft; it has no effect for other provider types.", "key$": "microsoft_tenant_id" } }, "x-ref": "#/components/schemas/NeonAuthUpdateOAuthProviderRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "oauth_provider_id", "in": "path", "description": "The OAuth provider ID", "required": true, "schema": { "type": "string", "enum": ["google", "github", "microsoft", "vercel"], "x-ref": "#/components/schemas/NeonAuthOauthProviderId" }, "index$": 2 }] }, "PATCH /projects/{project_id}/auth/oauth_providers/{oauth_provider_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "x-sensitive": ["client_secret"], "properties": { "client_id": { "type": "string", "description": "The OAuth client ID registered with the provider. Omit to keep the currently configured value.", "key$": "client_id" }, "client_secret": { "type": "string", "description": "OAuth client secret for the provider. Omit to leave the existing secret unchanged.", "key$": "client_secret" }, "microsoft_tenant_id": { "type": "string", "description": "The tenant ID scoping the Microsoft OAuth provider. Supply this field when the provider type is microsoft; it has no effect for other provider types.", "key$": "microsoft_tenant_id" } }, "x-ref": "#/components/schemas/NeonAuthUpdateOAuthProviderRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "oauth_provider_id", "in": "path", "description": "The OAuth provider ID", "required": true, "schema": { "type": "string", "enum": ["google", "github", "microsoft", "vercel"], "x-ref": "#/components/schemas/NeonAuthOauthProviderId" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const neon_auth_oauth_provider_ref01_ent = client.NeonAuthOauthProvider();
        let neon_auth_oauth_provider_ref01_data = setup.data.new.neon_auth_oauth_provider['neon_auth_oauth_provider_ref01'];
        neon_auth_oauth_provider_ref01_data['branch_id'] = setup.idmap['branch01'];
        neon_auth_oauth_provider_ref01_data['project_id'] = setup.idmap['project01'];
        neon_auth_oauth_provider_ref01_data = (await neon_auth_oauth_provider_ref01_ent.create(neon_auth_oauth_provider_ref01_data)).data();
        (0, node_assert_1.default)(null != neon_auth_oauth_provider_ref01_data.id);
        // LIST
        const neon_auth_oauth_provider_ref01_match = {};
        neon_auth_oauth_provider_ref01_match['project_id'] = setup.idmap['project01'];
        const neon_auth_oauth_provider_ref01_list = (await neon_auth_oauth_provider_ref01_ent.list(neon_auth_oauth_provider_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(neon_auth_oauth_provider_ref01_list, { id: neon_auth_oauth_provider_ref01_data.id })));
        // UPDATE
        const neon_auth_oauth_provider_ref01_data_up0 = {};
        neon_auth_oauth_provider_ref01_data_up0.id = neon_auth_oauth_provider_ref01_data.id;
        neon_auth_oauth_provider_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const neon_auth_oauth_provider_ref01_markdef_up0 = { name: 'client_id', value: 'Mark01-neon_auth_oauth_provider_ref01_' + setup.now };
        neon_auth_oauth_provider_ref01_data_up0[neon_auth_oauth_provider_ref01_markdef_up0.name] = neon_auth_oauth_provider_ref01_markdef_up0.value;
        const neon_auth_oauth_provider_ref01_resdata_up0 = (await neon_auth_oauth_provider_ref01_ent.update(neon_auth_oauth_provider_ref01_data_up0)).data();
        (0, node_assert_1.default)(neon_auth_oauth_provider_ref01_resdata_up0.id === neon_auth_oauth_provider_ref01_data_up0.id);
        (0, node_assert_1.default)(neon_auth_oauth_provider_ref01_resdata_up0[neon_auth_oauth_provider_ref01_markdef_up0.name] === neon_auth_oauth_provider_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/neon_auth_oauth_provider/NeonAuthOauthProviderTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['neon_auth_oauth_provider01', 'neon_auth_oauth_provider02', 'neon_auth_oauth_provider03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_NEON_AUTH_OAUTH_PROVIDER_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_NEON_AUTH_OAUTH_PROVIDER_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_NEON_AUTH_OAUTH_PROVIDER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.NeonSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.NEON_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.NEON_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=NeonAuthOauthProviderEntity.test.js.map