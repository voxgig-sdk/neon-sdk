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
(0, node_test_1.describe)('AuthLegacyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.AuthLegacy();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'auth_legacy.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "auth_provider": { "a": true, "h": "Auth Provider", "n": "auth_provider", "r": true, "sh": "Authentication provider integrated with this Neon Auth configuration.", "t": "`$STRING`", "key$": "auth_provider", "index$": 0 }, "domain": { "a": true, "fo": "uri", "h": "Domain", "n": "domain", "r": true, "sh": "URI to add to the redirect URI allowlist for the auth provider.", "t": "`$STRING`", "key$": "domain", "index$": 1 } }, "name": "auth_legacy", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /projects/{project_id}/auth/domains", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/auth/domains", "q": { "exist": ["project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "auth" }, { "lit": "domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /projects/{project_id}/auth/integration/{auth_provider}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "auth_provider", "or": "auth_provider", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/projects/{project_id}/auth/integration/{auth_provider}", "q": { "exist": ["auth_provider", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "auth" }, { "lit": "integration" }, { "var": "auth_provider" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /projects/{project_id}/auth/users/{auth_user_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "auth_user_id", "or": "auth_user_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/projects/{project_id}/auth/users/{auth_user_id}", "q": { "exist": ["auth_user_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "auth" }, { "lit": "users" }, { "var": "auth_user_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "DELETE /projects/{project_id}/auth/oauth_providers/{oauth_provider_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "oauth_provider_id", "or": "oauth_provider_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/projects/{project_id}/auth/oauth_providers/{oauth_provider_id}", "q": { "exist": ["oauth_provider_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "auth" }, { "lit": "oauth_providers" }, { "var": "oauth_provider_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "DELETE /projects/{project_id}/auth/domains", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/projects/{project_id}/auth/domains", "q": { "exist": ["project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "auth" }, { "lit": "domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project"], ["$.main.kit.entity.project"], ["$.main.kit.entity.project"]] }, "key$": "auth_legacy", "name__orig": "auth_legacy", "Name": "AuthLegacy", "name_": "auth_legacy", "name-": "auth-legacy", "NAME": "AUTH_LEGACY", "index$": 4 }, { "active": true, "entity": "auth_legacy", "key$": "BasicAuthLegacyFlow", "kind": "basic", "name": "BasicAuthLegacyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "auth_legacy_ref01" }, "m": { "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "auth_legacy_ref01", "suffix": "_rm0" }, "m": { "id": "auth_legacy01" }, "o": "remove", "s": [], "v": [], "index$": 1 }] }, 'AuthLegacy', { "POST /projects/{project_id}/auth/domains": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["domain", "auth_provider"], "properties": { "domain": { "type": "string", "format": "uri", "description": "URI to add to the redirect URI allowlist for the auth provider.", "key$": "domain" }, "auth_provider": { "description": "Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.", "type": "string", "enum": ["mock", "stack", "better_auth"], "x-ref": "#/components/schemas/NeonAuthSupportedAuthProvider", "key$": "auth_provider" } }, "x-ref": "#/components/schemas/NeonAuthAddDomainToRedirectURIWhitelistRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] }, "DELETE /projects/{project_id}/auth/integration/{auth_provider}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "delete_data": { "type": "boolean", "description": "If true, deletes the `neon_auth` schema from the database", "default": false } } } } } }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "auth_provider", "in": "path", "description": "The authentication provider name", "required": true, "schema": { "description": "Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.", "type": "string", "enum": ["mock", "stack", "better_auth"], "x-ref": "#/components/schemas/NeonAuthSupportedAuthProvider" }, "index$": 1 }] }, "DELETE /projects/{project_id}/auth/users/{auth_user_id}": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "auth_user_id", "in": "path", "description": "The Neon user ID", "required": true, "schema": { "type": "string" }, "index$": 1 }] }, "DELETE /projects/{project_id}/auth/oauth_providers/{oauth_provider_id}": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "oauth_provider_id", "in": "path", "description": "The OAuth provider ID", "required": true, "schema": { "type": "string", "enum": ["google", "github", "microsoft", "vercel"], "x-ref": "#/components/schemas/NeonAuthOauthProviderId" }, "index$": 1 }] }, "DELETE /projects/{project_id}/auth/domains": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["domains", "auth_provider"], "properties": { "auth_provider": { "description": "Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.", "type": "string", "enum": ["mock", "stack", "better_auth"], "x-ref": "#/components/schemas/NeonAuthSupportedAuthProvider" }, "domains": { "type": "array", "items": { "type": "object", "required": ["domain"], "properties": { "domain": { "type": "string", "format": "uri", "description": "URI to remove from the redirect URI whitelist." } }, "x-ref": "#/components/schemas/NeonAuthDeleteDomainFromRedirectURIWhitelistItem" }, "description": "Domain names to remove from the redirect URI whitelist for the specified auth provider." } }, "x-ref": "#/components/schemas/NeonAuthDeleteDomainFromRedirectURIWhitelistRequest" } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const auth_legacy_ref01_ent = client.AuthLegacy();
        let auth_legacy_ref01_data = setup.data.new.auth_legacy['auth_legacy_ref01'];
        auth_legacy_ref01_data['project_id'] = setup.idmap['project01'];
        auth_legacy_ref01_data = (await auth_legacy_ref01_ent.create(auth_legacy_ref01_data)).data();
        (0, node_assert_1.default)(null != auth_legacy_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/auth_legacy/AuthLegacyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['auth_legacy01', 'auth_legacy02', 'auth_legacy03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_AUTH_LEGACY_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_AUTH_LEGACY_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_AUTH_LEGACY_ENTID'];
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
//# sourceMappingURL=AuthLegacyEntity.test.js.map