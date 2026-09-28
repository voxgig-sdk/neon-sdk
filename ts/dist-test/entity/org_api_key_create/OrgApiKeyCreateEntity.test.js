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
(0, node_test_1.describe)('OrgApiKeyCreateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.OrgApiKeyCreate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'org_api_key_create.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "created_by": { "a": true, "h": "Created By", "n": "created_by", "r": false, "t": "`$STRING`", "key$": "created_by", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 2 }, "key": { "a": true, "h": "Key", "n": "key", "r": false, "t": "`$STRING`", "key$": "key", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "org_api_key_create", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /organizations/{org_id}/api_keys", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "organization_id", "or": "org_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/organizations/{org_id}/api_keys", "q": { "exist": ["organization_id"] }, "r": { "param": { "org_id": "organization_id" } }, "s": [{ "lit": "organizations" }, { "var": "organization_id" }, { "lit": "api_keys" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.organization"]] }, "key$": "org_api_key_create", "name__orig": "org_api_key_create", "Name": "OrgApiKeyCreate", "name_": "org_api_key_create", "name-": "org-api-key-create", "NAME": "ORG_API_KEY_CREATE", "index$": 50 }, { "active": true, "entity": "org_api_key_create", "key$": "BasicOrgApiKeyCreateFlow", "kind": "basic", "name": "BasicOrgApiKeyCreateFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "org_api_key_create_ref01" }, "m": { "organization_id": "organization01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'OrgApiKeyCreate', { "POST /organizations/{org_id}/api_keys": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "allOf": [{ "type": "object", "required": ["key_name"], "properties": { "key_name": { "type": "string", "description": "A user-specified API key name. This value is required when creating an API key.", "maxLength": 64, "key$": "key_name" } }, "x-ref": "#/components/schemas/ApiKeyCreateRequest" }, { "type": "object", "properties": { "project_id": { "description": "If set, the API key can access only this project", "type": "string", "pattern": "^[a-z0-9-]{1,60}$" } } }], "x-ref": "#/components/schemas/OrgApiKeyCreateRequest", "index$": 1 }, "example": { "key_name": "orgkey" } } }, "required": true }, "parameters": [{ "name": "org_id", "in": "path", "description": "The Neon organization ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const org_api_key_create_ref01_ent = client.OrgApiKeyCreate();
        let org_api_key_create_ref01_data = setup.data.new.org_api_key_create['org_api_key_create_ref01'];
        org_api_key_create_ref01_data['organization_id'] = setup.idmap['organization01'];
        org_api_key_create_ref01_data = (await org_api_key_create_ref01_ent.create(org_api_key_create_ref01_data)).data();
        (0, node_assert_1.default)(null != org_api_key_create_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/org_api_key_create/OrgApiKeyCreateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['org_api_key_create01', 'org_api_key_create02', 'org_api_key_create03', 'organization01', 'organization02', 'organization03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_ORG_API_KEY_CREATE_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_ORG_API_KEY_CREATE_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_ORG_API_KEY_CREATE_ENTID'];
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
//# sourceMappingURL=OrgApiKeyCreateEntity.test.js.map