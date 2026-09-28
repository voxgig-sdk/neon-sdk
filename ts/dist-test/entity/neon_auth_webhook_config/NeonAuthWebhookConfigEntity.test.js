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
(0, node_test_1.describe)('NeonAuthWebhookConfigEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.NeonAuthWebhookConfig();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'neon_auth_webhook_config.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "sh": "Whether the webhook is active.", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 0 }, "enabled_events": { "a": true, "h": "Enabled Events", "n": "enabled_events", "r": false, "sh": "Event types that trigger this webhook.", "t": "`$ARRAY`", "key$": "enabled_events", "index$": 1 }, "timeout_seconds": { "a": true, "h": "Timeout Seconds", "n": "timeout_seconds", "r": false, "sh": "Maximum time, in seconds, to wait for a response from the webhook endpoint.", "t": "`$INTEGER`", "key$": "timeout_seconds", "index$": 2 }, "webhook_url": { "a": true, "h": "Webhook Url", "n": "webhook_url", "r": false, "sh": "Destination URL that receives webhook event payloads.", "t": "`$STRING`", "key$": "webhook_url", "index$": 3 } }, "name": "neon_auth_webhook_config", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/branches/{branch_id}/auth/webhooks", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/branches/{branch_id}/auth/webhooks", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "auth" }, { "lit": "webhooks" }], "t": { "req": "`reqdata`", "res": "`body.enabled_events`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /projects/{project_id}/branches/{branch_id}/auth/webhooks", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/projects/{project_id}/branches/{branch_id}/auth/webhooks", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "auth" }, { "lit": "webhooks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.branch"]] }, "key$": "neon_auth_webhook_config", "name__orig": "neon_auth_webhook_config", "Name": "NeonAuthWebhookConfig", "name_": "neon_auth_webhook_config", "name-": "neon-auth-webhook-config", "NAME": "NEON_AUTH_WEBHOOK_CONFIG", "index$": 46 }, { "active": true, "entity": "neon_auth_webhook_config", "key$": "BasicNeonAuthWebhookConfigFlow", "kind": "basic", "name": "BasicNeonAuthWebhookConfigFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "neon_auth_webhook_config_ref01" } }], "index$": 0 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "neon_auth_webhook_config_ref01", "srcdatavar": "neon_auth_webhook_config_ref01_data", "suffix": "_up0", "textfield": "webhook_url" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-neon_auth_webhook_config_ref01" } }], "v": [], "index$": 1 }] }, 'NeonAuthWebhookConfig', { "GET /projects/{project_id}/branches/{branch_id}/auth/webhooks": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "PUT /projects/{project_id}/branches/{branch_id}/auth/webhooks": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["enabled"], "properties": { "enabled": { "description": "Whether the webhook is active.", "key$": "enabled", "type": "boolean" }, "webhook_url": { "description": "Destination URL that receives webhook event payloads.", "key$": "webhook_url", "type": "string" }, "enabled_events": { "description": "Event types that trigger this webhook. Covers user lifecycle, email/OTP delivery, organization invitations, and phone verification events; see the enum for exact values.", "items": { "enum": ["user.before_create", "user.created", "send.otp", "send.magic_link", "organization.invitation.created", "organization.invitation.accepted", "phone_number.verified"], "type": "string" }, "key$": "enabled_events", "type": "array" }, "timeout_seconds": { "default": 5, "description": "Maximum time, in seconds, to wait for a response from the webhook endpoint.", "key$": "timeout_seconds", "maximum": 10, "minimum": 1, "type": "integer" } }, "x-ref": "#/components/schemas/NeonAuthWebhookConfig", "index$": 1 } } } }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let neon_auth_webhook_config_ref01_data = Object.values(setup.data.existing.neon_auth_webhook_config)[0];
        // LIST
        const neon_auth_webhook_config_ref01_ent = client.NeonAuthWebhookConfig();
        const neon_auth_webhook_config_ref01_match = {};
        neon_auth_webhook_config_ref01_match['branch_id'] = setup.idmap['branch01'];
        neon_auth_webhook_config_ref01_match['project_id'] = setup.idmap['project01'];
        const neon_auth_webhook_config_ref01_list = (await neon_auth_webhook_config_ref01_ent.list(neon_auth_webhook_config_ref01_match)).map((e) => e.data());
        // UPDATE
        const neon_auth_webhook_config_ref01_data_up0 = {};
        neon_auth_webhook_config_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const neon_auth_webhook_config_ref01_markdef_up0 = { name: 'webhook_url', value: 'Mark01-neon_auth_webhook_config_ref01_' + setup.now };
        neon_auth_webhook_config_ref01_data_up0[neon_auth_webhook_config_ref01_markdef_up0.name] = neon_auth_webhook_config_ref01_markdef_up0.value;
        const neon_auth_webhook_config_ref01_resdata_up0 = (await neon_auth_webhook_config_ref01_ent.update(neon_auth_webhook_config_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != neon_auth_webhook_config_ref01_resdata_up0);
        (0, node_assert_1.default)(neon_auth_webhook_config_ref01_resdata_up0[neon_auth_webhook_config_ref01_markdef_up0.name] === neon_auth_webhook_config_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/neon_auth_webhook_config/NeonAuthWebhookConfigTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['neon_auth_webhook_config01', 'neon_auth_webhook_config02', 'neon_auth_webhook_config03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_NEON_AUTH_WEBHOOK_CONFIG_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_NEON_AUTH_WEBHOOK_CONFIG_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_NEON_AUTH_WEBHOOK_CONFIG_ENTID'];
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
//# sourceMappingURL=NeonAuthWebhookConfigEntity.test.js.map