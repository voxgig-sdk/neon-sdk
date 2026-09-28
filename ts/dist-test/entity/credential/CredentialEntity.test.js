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
(0, node_test_1.describe)('CredentialEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.Credential();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create', 'list', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'credential.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "branch_id": { "a": true, "h": "Branch Id", "n": "branch_id", "r": false, "t": "`$STRING`", "key$": "branch_id", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "expires_at": { "a": true, "fo": "date-time", "h": "Expires At", "n": "expires_at", "r": false, "sh": "When the credential expires; absent means never expires.", "t": "`$STRING`", "key$": "expires_at", "index$": 2 }, "function_id": { "a": true, "h": "Function Id", "n": "function_id", "r": false, "t": "`$STRING`", "key$": "function_id", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "last_used_at": { "a": true, "fo": "date-time", "h": "Last Used At", "n": "last_used_at", "r": false, "t": "`$STRING`", "key$": "last_used_at", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Customer-supplied label; absent when not provided at issuance.", "t": "`$STRING`", "key$": "name", "index$": 6 }, "principal_type": { "a": true, "h": "Principal Type", "n": "principal_type", "r": true, "t": "`$STRING`", "key$": "principal_type", "index$": 7 }, "revoked_at": { "a": true, "fo": "date-time", "h": "Revoked At", "n": "revoked_at", "r": false, "t": "`$STRING`", "key$": "revoked_at", "index$": 8 }, "scopes": { "a": true, "h": "Scopes", "n": "scopes", "r": true, "t": "`$ARRAY`", "key$": "scopes", "index$": 9 }, "token_id": { "a": true, "h": "Token Id", "n": "token_id", "r": true, "sh": "Opaque credential id (e.g.", "t": "`$STRING`", "key$": "token_id", "index$": 10 }, "token_id_short": { "a": true, "h": "Token Id Short", "n": "token_id_short", "r": true, "t": "`$STRING`", "key$": "token_id_short", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "credential", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /projects/{project_id}/branches/{branch_id}/credentials/{token_id}/reveal", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "token_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/reveal", "q": { "$action": "reveal", "exist": ["branch_id", "id", "project_id"] }, "r": { "param": { "token_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "credentials" }, { "var": "id" }, { "lit": "reveal" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /projects/{project_id}/branches/{branch_id}/credentials/{token_id}/rotate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "token_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/rotate", "q": { "$action": "rotate", "exist": ["branch_id", "id", "project_id"] }, "r": { "param": { "token_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "credentials" }, { "var": "id" }, { "lit": "rotate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/branches/{branch_id}/credentials", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/branches/{branch_id}/credentials", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "credentials" }], "t": { "req": "`reqdata`", "res": "`body.credentials`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /projects/{project_id}/branches/{branch_id}/credentials/{token_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "token_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}", "q": { "exist": ["branch_id", "id", "project_id"] }, "r": { "param": { "token_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "credentials" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.branch"]] }, "key$": "credential", "name__orig": "credential", "Name": "Credential", "name_": "credential", "name-": "credential", "NAME": "CREDENTIAL", "index$": 18 }, { "active": true, "entity": "credential", "key$": "BasicCredentialFlow", "kind": "basic", "name": "BasicCredentialFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "credential_ref01" }, "m": { "branch_id": "branch01", "project_id": "project01", "token_id": "token01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "credential_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "credential_ref01", "suffix": "_rm0" }, "m": { "branch_id": "branch01", "id": "credential01", "project_id": "project01" }, "o": "remove", "s": [], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "credential_ref01" } }], "index$": 3 }] }, 'Credential', { "POST /projects/{project_id}/branches/{branch_id}/credentials/{token_id}/reveal": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "token_id", "in": "path", "description": "The opaque credential id (e.g. nak_live_<32hex>).", "required": true, "schema": { "type": "string" }, "index$": 2 }] }, "POST /projects/{project_id}/branches/{branch_id}/credentials/{token_id}/rotate": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "token_id", "in": "path", "description": "The opaque credential id (e.g. nak_live_<32hex>).", "required": true, "schema": { "type": "string" }, "index$": 2 }] }, "GET /projects/{project_id}/branches/{branch_id}/credentials": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "DELETE /projects/{project_id}/branches/{branch_id}/credentials/{token_id}": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "token_id", "in": "path", "description": "The opaque credential id (e.g. nak_live_<32hex>).", "required": true, "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const credential_ref01_ent = client.Credential();
        let credential_ref01_data = setup.data.new.credential['credential_ref01'];
        credential_ref01_data['branch_id'] = setup.idmap['branch01'];
        credential_ref01_data['project_id'] = setup.idmap['project01'];
        credential_ref01_data['token_id'] = setup.idmap['token01'];
        credential_ref01_data = (await credential_ref01_ent.create(credential_ref01_data)).data();
        (0, node_assert_1.default)(null != credential_ref01_data.id);
        // LIST
        const credential_ref01_match = {};
        credential_ref01_match['branch_id'] = setup.idmap['branch01'];
        credential_ref01_match['project_id'] = setup.idmap['project01'];
        const credential_ref01_list = (await credential_ref01_ent.list(credential_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(credential_ref01_list, { id: credential_ref01_data.id })));
        // REMOVE
        const credential_ref01_match_rm0 = { id: credential_ref01_data.id };
        await credential_ref01_ent.remove(credential_ref01_match_rm0);
        // LIST
        const credential_ref01_match_rt0 = {};
        credential_ref01_match_rt0['branch_id'] = setup.idmap['branch01'];
        credential_ref01_match_rt0['project_id'] = setup.idmap['project01'];
        const credential_ref01_list_rt0 = (await credential_ref01_ent.list(credential_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(credential_ref01_list_rt0, { id: credential_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/credential/CredentialTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['credential01', 'credential02', 'credential03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03', 'token01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_CREDENTIAL_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_CREDENTIAL_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_CREDENTIAL_ENTID'];
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
//# sourceMappingURL=CredentialEntity.test.js.map