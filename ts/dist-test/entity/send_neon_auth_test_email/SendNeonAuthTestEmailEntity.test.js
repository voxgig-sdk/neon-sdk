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
(0, node_test_1.describe)('SendNeonAuthTestEmailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.SendNeonAuthTestEmail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'send_neon_auth_test_email.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "error_message": { "a": true, "h": "Error Message", "n": "error_message", "r": false, "sh": "The error message from the email server.", "t": "`$STRING`", "key$": "error_message", "index$": 0 }, "host": { "a": true, "h": "Host", "n": "host", "r": true, "sh": "Hostname of the email server.", "t": "`$STRING`", "key$": "host", "index$": 1 }, "password": { "a": true, "h": "Password", "n": "password", "r": true, "sh": "Password for authenticating with the SMTP server.", "t": "`$STRING`", "key$": "password", "index$": 2 }, "port": { "a": true, "h": "Port", "n": "port", "r": true, "sh": "TCP port of the SMTP server.", "t": "`$INTEGER`", "key$": "port", "index$": 3 }, "recipient_email": { "a": true, "fo": "email", "h": "Recipient Email", "n": "recipient_email", "r": true, "sh": "The email address to send the test email to.", "t": "`$STRING`", "key$": "recipient_email", "index$": 4 }, "sender_email": { "a": true, "h": "Sender Email", "n": "sender_email", "r": true, "sh": "Email address used as the From address on outgoing auth emails.", "t": "`$STRING`", "key$": "sender_email", "index$": 5 }, "sender_name": { "a": true, "h": "Sender Name", "n": "sender_name", "r": true, "sh": "Display name shown as the sender in outgoing emails.", "t": "`$STRING`", "key$": "sender_name", "index$": 6 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the test email was sent successfully.", "t": "`$BOOLEAN`", "key$": "success", "index$": 7 }, "username": { "a": true, "h": "Username", "n": "username", "r": true, "sh": "Username for authenticating with the SMTP server.", "t": "`$STRING`", "key$": "username", "index$": 8 } }, "name": "send_neon_auth_test_email", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /projects/{project_id}/branches/{branch_id}/auth/email_provider/test", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/branches/{branch_id}/auth/email_provider/test", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "auth" }, { "lit": "email_provider" }, { "lit": "test" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /projects/{project_id}/branches/{branch_id}/auth/send_test_email", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/branches/{branch_id}/auth/send_test_email", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "auth" }, { "lit": "send_test_email" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.branch"]] }, "key$": "send_neon_auth_test_email", "name__orig": "send_neon_auth_test_email", "Name": "SendNeonAuthTestEmail", "name_": "send_neon_auth_test_email", "name-": "send-neon-auth-test-email", "NAME": "SEND_NEON_AUTH_TEST_EMAIL", "index$": 69 }, { "active": true, "entity": "send_neon_auth_test_email", "key$": "BasicSendNeonAuthTestEmailFlow", "kind": "basic", "name": "BasicSendNeonAuthTestEmailFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "send_neon_auth_test_email_ref01" }, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'SendNeonAuthTestEmail', { "POST /projects/{project_id}/branches/{branch_id}/auth/email_provider/test": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "description": "Request to test the branch's saved email provider. Only the recipient is supplied; the stored\nSMTP settings and password are used server-side.\n", "required": ["recipient_email"], "properties": { "recipient_email": { "description": "The email address to send the test email to.", "type": "string", "format": "email", "minLength": 1, "maxLength": 256, "key$": "recipient_email" } }, "x-ref": "#/components/schemas/SendNeonAuthEmailProviderTestRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "POST /projects/{project_id}/branches/{branch_id}/auth/send_test_email": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["host", "port", "username", "password", "sender_email", "sender_name", "recipient_email"], "x-sensitive": ["host", "password", "username"], "properties": { "host": { "type": "string", "description": "Hostname of the email server.", "key$": "host" }, "port": { "type": "integer", "description": "TCP port of the SMTP server. Common values: 25 (SMTP), 465 (SMTPS), 587 (submission).", "key$": "port" }, "username": { "type": "string", "description": "Username for authenticating with the SMTP server.", "key$": "username" }, "password": { "type": "string", "description": "Password for authenticating with the SMTP server.", "key$": "password" }, "sender_email": { "type": "string", "description": "Email address used as the From address on outgoing auth emails.", "key$": "sender_email" }, "sender_name": { "type": "string", "description": "Display name shown as the sender in outgoing emails.", "key$": "sender_name" }, "recipient_email": { "description": "The email address to send the test email to.", "type": "string", "format": "email", "minLength": 1, "maxLength": 256, "key$": "recipient_email" } }, "x-ref": "#/components/schemas/SendNeonAuthTestEmailRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const send_neon_auth_test_email_ref01_ent = client.SendNeonAuthTestEmail();
        let send_neon_auth_test_email_ref01_data = setup.data.new.send_neon_auth_test_email['send_neon_auth_test_email_ref01'];
        send_neon_auth_test_email_ref01_data['branch_id'] = setup.idmap['branch01'];
        send_neon_auth_test_email_ref01_data['project_id'] = setup.idmap['project01'];
        send_neon_auth_test_email_ref01_data = (await send_neon_auth_test_email_ref01_ent.create(send_neon_auth_test_email_ref01_data)).data();
        (0, node_assert_1.default)(null != send_neon_auth_test_email_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/send_neon_auth_test_email/SendNeonAuthTestEmailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['send_neon_auth_test_email01', 'send_neon_auth_test_email02', 'send_neon_auth_test_email03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_SEND_NEON_AUTH_TEST_EMAIL_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_SEND_NEON_AUTH_TEST_EMAIL_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_SEND_NEON_AUTH_TEST_EMAIL_ENTID'];
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
//# sourceMappingURL=SendNeonAuthTestEmailEntity.test.js.map