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
(0, node_test_1.describe)('NeonAuthIntegrationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.NeonAuthIntegration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'neon_auth_integration.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "auth_provider": { "a": true, "h": "Auth Provider", "n": "auth_provider", "r": true, "sh": "Authentication provider integrated with this Neon Auth configuration.", "t": "`$STRING`", "key$": "auth_provider", "index$": 0 }, "auth_provider_project_id": { "a": true, "h": "Auth Provider Project Id", "n": "auth_provider_project_id", "r": true, "sh": "Project identifier assigned by the auth provider for this integration.", "t": "`$STRING`", "key$": "auth_provider_project_id", "index$": 1 }, "base_url": { "a": true, "h": "Base Url", "n": "base_url", "r": false, "sh": "Base URL of the Neon Auth service endpoint for this integration.", "t": "`$STRING`", "key$": "base_url", "index$": 2 }, "branch_id": { "a": true, "h": "Branch Id", "n": "branch_id", "r": true, "sh": "The Neon branch ID.", "t": "`$STRING`", "key$": "branch_id", "index$": 3 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "Timestamp when the Neon Auth integration was created, in RFC 3339 format (UTC).", "t": "`$STRING`", "key$": "created_at", "index$": 4 }, "db_name": { "a": true, "h": "Db Name", "n": "db_name", "r": true, "sh": "Name of the database used by the Neon Auth integration.", "t": "`$STRING`", "key$": "db_name", "index$": 5 }, "jwks_url": { "a": true, "h": "Jwks Url", "n": "jwks_url", "r": true, "sh": "URL of the provider's JWKS endpoint used to verify JWTs.", "t": "`$STRING`", "key$": "jwks_url", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Application name shown in auth emails and communications.", "t": "`$STRING`", "key$": "name", "index$": 7 }, "owned_by": { "a": true, "h": "Owned By", "n": "owned_by", "r": true, "sh": "Owner of the auth provider project.", "t": "`$STRING`", "key$": "owned_by", "index$": 8 }, "transfer_status": { "a": true, "h": "Transfer Status", "n": "transfer_status", "r": false, "sh": "Ownership transfer state for the auth provider project.", "t": "`$STRING`", "key$": "transfer_status", "index$": 9 } }, "name": "neon_auth_integration", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/auth/integrations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/auth/integrations", "q": { "exist": ["project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "auth" }, { "lit": "integrations" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/branches/{branch_id}/auth", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/branches/{branch_id}/auth", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "auth" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.branch"]] }, "key$": "neon_auth_integration", "name__orig": "neon_auth_integration", "Name": "NeonAuthIntegration", "name_": "neon_auth_integration", "name-": "neon-auth-integration", "NAME": "NEON_AUTH_INTEGRATION", "index$": 38 }, { "active": true, "entity": "neon_auth_integration", "key$": "BasicNeonAuthIntegrationFlow", "kind": "basic", "name": "BasicNeonAuthIntegrationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "neon_auth_integration_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "neon_auth_integration_ref01", "srcdatavar": "neon_auth_integration_ref01_data", "suffix": "_dt0" }, "m": { "id": "neon_auth_integration01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-neon_auth_integration_ref01" } }], "index$": 1 }] }, 'NeonAuthIntegration', { "GET /projects/{project_id}/auth/integrations": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] }, "GET /projects/{project_id}/branches/{branch_id}/auth": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let neon_auth_integration_ref01_data = Object.values(setup.data.existing.neon_auth_integration)[0];
        // LIST
        const neon_auth_integration_ref01_ent = client.NeonAuthIntegration();
        const neon_auth_integration_ref01_match = {};
        neon_auth_integration_ref01_match['project_id'] = setup.idmap['project01'];
        const neon_auth_integration_ref01_list = (await neon_auth_integration_ref01_ent.list(neon_auth_integration_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/neon_auth_integration/NeonAuthIntegrationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['neon_auth_integration01', 'neon_auth_integration02', 'neon_auth_integration03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_NEON_AUTH_INTEGRATION_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_NEON_AUTH_INTEGRATION_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_NEON_AUTH_INTEGRATION_ENTID'];
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
//# sourceMappingURL=NeonAuthIntegrationEntity.test.js.map