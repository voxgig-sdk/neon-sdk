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
(0, node_test_1.describe)('MaskingRuleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.MaskingRule();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'masking_rule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "column_name": { "a": true, "h": "Column Name", "n": "column_name", "r": true, "sh": "The name of the column to be masked", "t": "`$STRING`", "key$": "column_name", "index$": 0 }, "database_name": { "a": true, "h": "Database Name", "n": "database_name", "r": true, "sh": "The name of the database containing the table to be masked", "t": "`$STRING`", "key$": "database_name", "index$": 1 }, "masking_function": { "a": true, "h": "Masking Function", "n": "masking_function", "r": false, "sh": "The PostgreSQL Anonymizer masking function to apply.", "t": "`$STRING`", "key$": "masking_function", "index$": 2 }, "masking_rules": { "a": true, "h": "Masking Rules", "n": "masking_rules", "r": true, "sh": "List of masking rules for the branch", "t": "`$ARRAY`", "key$": "masking_rules", "index$": 3 }, "masking_value": { "a": true, "h": "Masking Value", "n": "masking_value", "r": false, "sh": "A literal value to set on the column when masking.", "t": "`$STRING`", "key$": "masking_value", "index$": 4 }, "schema_name": { "a": true, "h": "Schema Name", "n": "schema_name", "r": true, "sh": "The name of the schema containing the table to be masked", "t": "`$STRING`", "key$": "schema_name", "index$": 5 }, "table_name": { "a": true, "h": "Table Name", "n": "table_name", "r": true, "sh": "The name of the table containing the column to be masked", "t": "`$STRING`", "key$": "table_name", "index$": 6 } }, "name": "masking_rule", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/branches/{branch_id}/masking_rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/branches/{branch_id}/masking_rules", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "masking_rules" }], "t": { "req": "`reqdata`", "res": "`body.masking_rules`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /projects/{project_id}/branches/{branch_id}/masking_rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/projects/{project_id}/branches/{branch_id}/masking_rules", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "masking_rules" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.branch"]] }, "key$": "masking_rule", "name__orig": "masking_rule", "Name": "MaskingRule", "name_": "masking_rule", "name-": "masking-rule", "NAME": "MASKING_RULE", "index$": 30 }, { "active": true, "entity": "masking_rule", "key$": "BasicMaskingRuleFlow", "kind": "basic", "name": "BasicMaskingRuleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "masking_rule_ref01" } }], "index$": 0 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "masking_rule_ref01", "srcdatavar": "masking_rule_ref01_data", "suffix": "_up0", "textfield": "column_name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-masking_rule_ref01" } }], "v": [], "index$": 1 }] }, 'MaskingRule', { "GET /projects/{project_id}/branches/{branch_id}/masking_rules": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "PATCH /projects/{project_id}/branches/{branch_id}/masking_rules": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["masking_rules"], "properties": { "masking_rules": { "type": "array", "items": { "type": "object", "required": ["database_name", "schema_name", "table_name", "column_name"], "x-sensitive": ["database_name", "schema_name", "table_name", "column_name", "masking_function", "masking_value"], "properties": { "database_name": { "description": "The name of the database containing the table to be masked\n", "type": "string" }, "schema_name": { "description": "The name of the schema containing the table to be masked\n", "type": "string" }, "table_name": { "description": "The name of the table containing the column to be masked\n", "type": "string" }, "column_name": { "description": "The name of the column to be masked\n", "type": "string" }, "masking_function": { "description": "The PostgreSQL Anonymizer masking function to apply.\nCan be a predefined function (e.g., 'anon.random_string(10)', 'anon.fake_email()')\nor a custom function definition (e.g., 'anon.hash(column_name)')\n", "type": "string" }, "masking_value": { "description": "A literal value to set on the column when masking.\n", "type": "string" } }, "example": { "database_name": "neondb", "schema_name": "public", "table_name": "users", "column_name": "email", "masking_function": "anon.fake_email()" }, "x-ref": "#/components/schemas/MaskingRule" }, "description": "List of masking rules to apply to the branch.\nThis will replace all existing masking rules for the branch.\n", "key$": "masking_rules" } }, "x-ref": "#/components/schemas/MaskingRulesUpdateRequest", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let masking_rule_ref01_data = Object.values(setup.data.existing.masking_rule)[0];
        // LIST
        const masking_rule_ref01_ent = client.MaskingRule();
        const masking_rule_ref01_match = {};
        masking_rule_ref01_match['branch_id'] = setup.idmap['branch01'];
        masking_rule_ref01_match['project_id'] = setup.idmap['project01'];
        const masking_rule_ref01_list = (await masking_rule_ref01_ent.list(masking_rule_ref01_match)).map((e) => e.data());
        // UPDATE
        const masking_rule_ref01_data_up0 = {};
        masking_rule_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const masking_rule_ref01_markdef_up0 = { name: 'column_name', value: 'Mark01-masking_rule_ref01_' + setup.now };
        masking_rule_ref01_data_up0[masking_rule_ref01_markdef_up0.name] = masking_rule_ref01_markdef_up0.value;
        const masking_rule_ref01_resdata_up0 = (await masking_rule_ref01_ent.update(masking_rule_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != masking_rule_ref01_resdata_up0);
        (0, node_assert_1.default)(masking_rule_ref01_resdata_up0[masking_rule_ref01_markdef_up0.name] === masking_rule_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/masking_rule/MaskingRuleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['masking_rule01', 'masking_rule02', 'masking_rule03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_MASKING_RULE_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_MASKING_RULE_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_MASKING_RULE_ENTID'];
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
//# sourceMappingURL=MaskingRuleEntity.test.js.map