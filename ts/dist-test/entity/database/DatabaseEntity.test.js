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
(0, node_test_1.describe)('DatabaseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.Database();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'database.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "branch_id": { "a": true, "h": "Branch Id", "n": "branch_id", "r": true, "sh": "The ID of the branch this database belongs to.", "t": "`$STRING`", "key$": "branch_id", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "A timestamp indicating when the database was created", "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "database": { "a": true, "h": "Database", "n": "database", "r": true, "sh": "Configuration for the new Postgres database.", "t": "`$OBJECT`", "key$": "database", "index$": 2 }, "id": { "a": true, "fo": "int64", "h": "Id", "n": "id", "r": true, "sh": "The database ID", "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The database name", "t": "`$STRING`", "key$": "name", "index$": 4 }, "owner_name": { "a": true, "h": "Owner Name", "n": "owner_name", "r": true, "sh": "The name of role that owns the database", "t": "`$STRING`", "key$": "owner_name", "index$": 5 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "A timestamp indicating when the database was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "database", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /projects/{project_id}/branches/{branch_id}/databases", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/branches/{branch_id}/databases", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "databases" }], "t": { "req": { "database": "`reqdata`" }, "res": "`body.database`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/branches/{branch_id}/databases", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/branches/{branch_id}/databases", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "databases" }], "t": { "req": "`reqdata`", "res": "`body.databases`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/branches/{branch_id}/databases/{database_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "database_name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}", "q": { "exist": ["branch_id", "id", "project_id"] }, "r": { "param": { "database_name": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "databases" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.database`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /projects/{project_id}/branches/{branch_id}/databases/{database_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "database_name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}", "q": { "exist": ["branch_id", "id", "project_id"] }, "r": { "param": { "database_name": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "databases" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.database`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /projects/{project_id}/branches/{branch_id}/databases/{database_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "database_name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PATCH", "o": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}", "q": { "exist": ["branch_id", "id", "project_id"] }, "r": { "param": { "database_name": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "databases" }, { "var": "id" }], "t": { "req": { "database": "`reqdata`" }, "res": "`body.database`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.branch"]] }, "key$": "database", "name__orig": "database", "Name": "Database", "name_": "database", "name-": "database", "NAME": "DATABASE", "index$": 22 }, { "active": true, "entity": "database", "key$": "BasicDatabaseFlow", "kind": "basic", "name": "BasicDatabaseFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "database_ref01" }, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "database_ref01" } }], "index$": 1 }, { "a": true, "d": { "branch_id": "branch01", "project_id": "project01" }, "i": { "ref": "database_ref01", "srcdatavar": "database_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-database_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "database_ref01", "srcdatavar": "database_ref01_data", "suffix": "_dt0" }, "m": { "branch_id": "branch01", "id": "database01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-database_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "database_ref01", "suffix": "_rm0" }, "m": { "branch_id": "branch01", "id": "database01", "project_id": "project01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "database_ref01" } }], "index$": 5 }] }, 'Database', { "POST /projects/{project_id}/branches/{branch_id}/databases": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["database"], "x-sensitive": ["database"], "properties": { "database": { "type": "object", "description": "Configuration for the new Postgres database.", "required": ["name", "owner_name"], "properties": { "name": { "description": "Name of the database to create.\n", "type": "string" }, "owner_name": { "description": "The name of the role that owns the database\n", "type": "string" } }, "key$": "database" } }, "x-ref": "#/components/schemas/DatabaseCreateRequest", "index$": 1 }, "example": { "database": { "name": "mydb", "owner_name": "casey" } } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "GET /projects/{project_id}/branches/{branch_id}/databases": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "GET /projects/{project_id}/branches/{branch_id}/databases/{database_name}": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "database_name", "in": "path", "description": "The database name", "required": true, "schema": { "type": "string" }, "index$": 2 }] }, "DELETE /projects/{project_id}/branches/{branch_id}/databases/{database_name}": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "database_name", "in": "path", "description": "The database name", "required": true, "schema": { "type": "string" }, "index$": 2 }] }, "PATCH /projects/{project_id}/branches/{branch_id}/databases/{database_name}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["database"], "x-sensitive": ["database"], "properties": { "database": { "type": "object", "description": "Properties to update on the database.", "properties": { "name": { "description": "Name of the database to update.\n", "type": "string" }, "owner_name": { "description": "The name of the role that owns the database\n", "type": "string" } }, "key$": "database" } }, "x-ref": "#/components/schemas/DatabaseUpdateRequest", "index$": 1 }, "example": { "database": { "name": "mydb", "owner_name": "sally" } } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "database_name", "in": "path", "description": "The database name", "required": true, "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const database_ref01_ent = client.Database();
        let database_ref01_data = setup.data.new.database['database_ref01'];
        database_ref01_data['branch_id'] = setup.idmap['branch01'];
        database_ref01_data['project_id'] = setup.idmap['project01'];
        database_ref01_data = (await database_ref01_ent.create(database_ref01_data)).data();
        (0, node_assert_1.default)(null != database_ref01_data.id);
        // LIST
        const database_ref01_match = {};
        database_ref01_match['branch_id'] = setup.idmap['branch01'];
        database_ref01_match['project_id'] = setup.idmap['project01'];
        const database_ref01_list = (await database_ref01_ent.list(database_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(database_ref01_list, { id: database_ref01_data.id })));
        // UPDATE
        const database_ref01_data_up0 = {};
        database_ref01_data_up0.id = database_ref01_data.id;
        database_ref01_data_up0['branch_id'] = setup.idmap['branch_id'];
        database_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const database_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-database_ref01_' + setup.now };
        database_ref01_data_up0[database_ref01_markdef_up0.name] = database_ref01_markdef_up0.value;
        const database_ref01_resdata_up0 = (await database_ref01_ent.update(database_ref01_data_up0)).data();
        (0, node_assert_1.default)(database_ref01_resdata_up0.id === database_ref01_data_up0.id);
        (0, node_assert_1.default)(database_ref01_resdata_up0[database_ref01_markdef_up0.name] === database_ref01_markdef_up0.value);
        // LOAD
        const database_ref01_match_dt0 = {};
        database_ref01_match_dt0.id = database_ref01_data.id;
        const database_ref01_data_dt0 = (await database_ref01_ent.load(database_ref01_match_dt0)).data();
        (0, node_assert_1.default)(database_ref01_data_dt0.id === database_ref01_data.id);
        // REMOVE
        const database_ref01_match_rm0 = { id: database_ref01_data.id };
        await database_ref01_ent.remove(database_ref01_match_rm0);
        // LIST
        const database_ref01_match_rt0 = {};
        database_ref01_match_rt0['branch_id'] = setup.idmap['branch01'];
        database_ref01_match_rt0['project_id'] = setup.idmap['project01'];
        const database_ref01_list_rt0 = (await database_ref01_ent.list(database_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(database_ref01_list_rt0, { id: database_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/database/DatabaseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['database01', 'database02', 'database03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_DATABASE_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_DATABASE_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_DATABASE_ENTID'];
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
//# sourceMappingURL=DatabaseEntity.test.js.map