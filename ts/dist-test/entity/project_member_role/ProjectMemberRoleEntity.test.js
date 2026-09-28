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
(0, node_test_1.describe)('ProjectMemberRoleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.ProjectMemberRole();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'project_member_role.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "credential_rotation_recommended": { "a": true, "h": "Credential Rotation Recommended", "n": "credential_rotation_recommended", "r": false, "sh": "Hint that database credentials may need rotation after the role change.", "t": "`$BOOLEAN`", "key$": "credential_rotation_recommended", "index$": 0 }, "effective_project_permission": { "a": true, "h": "Effective Project Permission", "n": "effective_project_permission", "r": false, "sh": "The caller's effective permission for a project when per-project permissions are enabled.", "t": "`$STRING`", "key$": "effective_project_permission", "index$": 1 }, "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": false, "sh": "Email address of the user who has been granted access to the project.", "t": "`$STRING`", "key$": "email", "index$": 2 }, "explicit_project_permission": { "a": true, "h": "Explicit Project Permission", "n": "explicit_project_permission", "r": false, "sh": "The caller's effective permission for a project when per-project permissions are enabled.", "t": "`$STRING`", "key$": "explicit_project_permission", "index$": 3 }, "member_id": { "a": true, "fo": "uuid", "h": "Member Id", "n": "member_id", "r": true, "t": "`$STRING`", "key$": "member_id", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The user's display name.", "t": "`$STRING`", "key$": "name", "index$": 5 }, "org_api_key_rotation_recommended": { "a": true, "h": "Org Api Key Rotation Recommended", "n": "org_api_key_rotation_recommended", "r": false, "sh": "Hint that project-scoped org API keys created by the target user may need rotation.", "t": "`$BOOLEAN`", "key$": "org_api_key_rotation_recommended", "index$": 6 }, "org_default_project_permission": { "a": true, "h": "Org Default Project Permission", "n": "org_default_project_permission", "r": false, "sh": "The caller's effective permission for a project when per-project permissions are enabled.", "t": "`$STRING`", "key$": "org_default_project_permission", "index$": 7 }, "org_role": { "a": true, "h": "Org Role", "n": "org_role", "r": true, "sh": "Organization-level role used by project member role management.", "t": "`$STRING`", "key$": "org_role", "index$": 8 }, "project_id": { "a": true, "h": "Project Id", "n": "project_id", "r": true, "t": "`$STRING`", "key$": "project_id", "index$": 9 }, "project_role": { "a": true, "h": "Project Role", "n": "project_role", "r": false, "sh": "The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback.", "t": "`$STRING`", "key$": "project_role", "index$": 10 }, "role": { "a": true, "h": "Role", "n": "role", "r": true, "sh": "Per-project role.", "t": "`$STRING`", "key$": "role", "index$": 11 }, "user_id": { "a": true, "fo": "uuid", "h": "User Id", "n": "user_id", "r": true, "t": "`$STRING`", "key$": "user_id", "index$": 12 } }, "name": "project_member_role", "op": { "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /projects/{project_id}/members/{member_id}/role", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "member_id", "or": "member_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "confirm_self_lockout", "or": "confirm_self_lockout", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/projects/{project_id}/members/{member_id}/role", "q": { "exist": ["confirm_self_lockout", "member_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "members" }, { "var": "member_id" }, { "lit": "role" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /projects/{project_id}/members/{member_id}/role", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "member_id", "or": "member_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "confirm_self_demotion", "or": "confirm_self_demotion", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/projects/{project_id}/members/{member_id}/role", "q": { "exist": ["confirm_self_demotion", "member_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "members" }, { "var": "member_id" }, { "lit": "role" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.member"]] }, "key$": "project_member_role", "name__orig": "project_member_role", "Name": "ProjectMemberRole", "name_": "project_member_role", "name-": "project-member-role", "NAME": "PROJECT_MEMBER_ROLE", "index$": 61 }, { "active": true, "entity": "project_member_role", "key$": "BasicProjectMemberRoleFlow", "kind": "basic", "name": "BasicProjectMemberRoleFlow", "param": {}, "step": [{ "a": true, "d": { "project_id": "project01" }, "i": { "ref": "project_member_role_ref01", "srcdatavar": "project_member_role_ref01_data", "suffix": "_up0", "textfield": "effective_project_permission" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-project_member_role_ref01" } }], "v": [], "index$": 0 }] }, 'ProjectMemberRole', { "DELETE /projects/{project_id}/members/{member_id}/role": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "member_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }, { "name": "confirm_self_lockout", "in": "query", "required": false, "schema": { "type": "boolean" }, "index$": 2 }] }, "PUT /projects/{project_id}/members/{member_id}/role": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["role"], "properties": { "role": { "type": "string", "enum": ["viewer", "editor", "admin"], "description": "Per-project role. `viewer` maps to `VIEWER`, `editor` maps to `EDITOR`,\nand `admin` maps to `ADMIN`.\n", "x-ref": "#/components/schemas/ProjectRole", "key$": "role" } }, "x-ref": "#/components/schemas/SetProjectMemberRoleRequest", "index$": 1 } } } }, "parameters": [{ "name": "project_id", "in": "path", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "member_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "index$": 1 }, { "name": "confirm_self_demotion", "in": "query", "required": false, "schema": { "type": "boolean" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let project_member_role_ref01_data = Object.values(setup.data.existing.project_member_role)[0];
        // UPDATE
        const project_member_role_ref01_ent = client.ProjectMemberRole();
        const project_member_role_ref01_data_up0 = {};
        project_member_role_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const project_member_role_ref01_markdef_up0 = { name: 'effective_project_permission', value: 'Mark01-project_member_role_ref01_' + setup.now };
        project_member_role_ref01_data_up0[project_member_role_ref01_markdef_up0.name] = project_member_role_ref01_markdef_up0.value;
        const project_member_role_ref01_resdata_up0 = (await project_member_role_ref01_ent.update(project_member_role_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != project_member_role_ref01_resdata_up0);
        (0, node_assert_1.default)(project_member_role_ref01_resdata_up0[project_member_role_ref01_markdef_up0.name] === project_member_role_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/project_member_role/ProjectMemberRoleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['project_member_role01', 'project_member_role02', 'project_member_role03', 'project01', 'project02', 'project03', 'member01', 'member02', 'member03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_PROJECT_MEMBER_ROLE_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_PROJECT_MEMBER_ROLE_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_PROJECT_MEMBER_ROLE_ENTID'];
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
//# sourceMappingURL=ProjectMemberRoleEntity.test.js.map