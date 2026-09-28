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
(0, node_test_1.describe)('ProjectPermissionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.ProjectPermission();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create', 'list', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'project_permission.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": true, "sh": "Email address of the user to grant project access to.", "t": "`$STRING`", "key$": "email", "index$": 0 }, "granted_at": { "a": true, "fo": "date-time", "h": "Granted At", "n": "granted_at", "r": true, "sh": "Timestamp when the permission was granted.", "t": "`$STRING`", "key$": "granted_at", "index$": 1 }, "granted_to_email": { "a": true, "fo": "email", "h": "Granted To Email", "n": "granted_to_email", "r": true, "sh": "Email address of the user who has been granted access to the project.", "t": "`$STRING`", "key$": "granted_to_email", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The project permission's ID.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "revoked_at": { "a": true, "fo": "date-time", "h": "Revoked At", "n": "revoked_at", "r": false, "sh": "Timestamp when the permission was revoked.", "t": "`$STRING`", "key$": "revoked_at", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "project_permission", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /projects/{project_id}/permissions", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/permissions", "q": { "exist": ["id"] }, "r": { "param": { "project_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "id" }, { "lit": "permissions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/permissions", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/permissions", "q": { "exist": ["id"] }, "r": { "param": { "project_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "id" }, { "lit": "permissions" }], "t": { "req": "`reqdata`", "res": "`body.project_permissions`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /projects/{project_id}/permissions/{permission_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "permission_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/projects/{project_id}/permissions/{permission_id}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "permission_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "permissions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "project_permission", "name__orig": "project_permission", "Name": "ProjectPermission", "name_": "project_permission", "name-": "project-permission", "NAME": "PROJECT_PERMISSION", "index$": 62 }, { "active": true, "entity": "project_permission", "key$": "BasicProjectPermissionFlow", "kind": "basic", "name": "BasicProjectPermissionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "project_permission_ref01" }, "m": { "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "project_permission_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "project_permission_ref01", "suffix": "_rm0" }, "m": { "id": "project_permission01", "project_id": "project01" }, "o": "remove", "s": [], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "project_permission_ref01" } }], "index$": 3 }] }, 'ProjectPermission', { "POST /projects/{project_id}/permissions": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["email"], "x-sensitive": ["email"], "properties": { "email": { "description": "Email address of the user to grant project access to.", "type": "string", "format": "email", "minLength": 1, "maxLength": 256, "key$": "email" } }, "x-ref": "#/components/schemas/GrantPermissionToProjectRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] }, "GET /projects/{project_id}/permissions": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] }, "DELETE /projects/{project_id}/permissions/{permission_id}": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "permission_id", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const project_permission_ref01_ent = client.ProjectPermission();
        let project_permission_ref01_data = setup.data.new.project_permission['project_permission_ref01'];
        project_permission_ref01_data['project_id'] = setup.idmap['project01'];
        project_permission_ref01_data = (await project_permission_ref01_ent.create(project_permission_ref01_data)).data();
        (0, node_assert_1.default)(null != project_permission_ref01_data.id);
        // LIST
        const project_permission_ref01_match = {};
        project_permission_ref01_match['project_id'] = setup.idmap['project01'];
        const project_permission_ref01_list = (await project_permission_ref01_ent.list(project_permission_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(project_permission_ref01_list, { id: project_permission_ref01_data.id })));
        // REMOVE
        const project_permission_ref01_match_rm0 = { id: project_permission_ref01_data.id };
        await project_permission_ref01_ent.remove(project_permission_ref01_match_rm0);
        // LIST
        const project_permission_ref01_match_rt0 = {};
        project_permission_ref01_match_rt0['project_id'] = setup.idmap['project01'];
        const project_permission_ref01_list_rt0 = (await project_permission_ref01_ent.list(project_permission_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(project_permission_ref01_list_rt0, { id: project_permission_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/project_permission/ProjectPermissionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['project_permission01', 'project_permission02', 'project_permission03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_PROJECT_PERMISSION_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_PROJECT_PERMISSION_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_PROJECT_PERMISSION_ENTID'];
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
//# sourceMappingURL=ProjectPermissionEntity.test.js.map