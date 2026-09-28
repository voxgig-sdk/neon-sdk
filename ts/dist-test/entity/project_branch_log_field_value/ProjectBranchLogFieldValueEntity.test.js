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
(0, node_test_1.describe)('ProjectBranchLogFieldValueEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.ProjectBranchLogFieldValue();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'project_branch_log_field_value.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "is_truncated": { "a": true, "h": "Is Truncated", "n": "is_truncated", "r": true, "sh": "True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached.", "t": "`$BOOLEAN`", "key$": "is_truncated", "index$": 0 }, "values": { "a": true, "h": "Values", "n": "values", "r": true, "t": "`$ARRAY`", "key$": "values", "index$": 1 } }, "name": "project_branch_log_field_value", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/branches/{branch_id}/logs/fields/{field_name}/values", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "field_name", "or": "field_name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "end_time", "or": "end_time", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 100, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": "1h", "k": "query", "n": "since", "or": "since", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "source", "or": "source", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "start_time", "or": "start_time", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/branches/{branch_id}/logs/fields/{field_name}/values", "q": { "exist": ["branch_id", "end_time", "field_name", "limit", "project_id", "since", "source", "start_time"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "logs" }, { "lit": "fields" }, { "var": "field_name" }, { "lit": "values" }], "t": { "req": "`reqdata`", "res": "`body.values`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.branch"]] }, "key$": "project_branch_log_field_value", "name__orig": "project_branch_log_field_value", "Name": "ProjectBranchLogFieldValue", "name_": "project_branch_log_field_value", "name-": "project-branch-log-field-value", "NAME": "PROJECT_BRANCH_LOG_FIELD_VALUE", "index$": 58 }, { "active": true, "entity": "project_branch_log_field_value", "key$": "BasicProjectBranchLogFieldValueFlow", "kind": "basic", "name": "BasicProjectBranchLogFieldValueFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "branch_id": "branch01", "field_name": "field_name01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "project_branch_log_field_value_ref01" } }], "index$": 0 }] }, 'ProjectBranchLogFieldValue', { "GET /projects/{project_id}/branches/{branch_id}/logs/fields/{field_name}/values": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "field_name", "in": "path", "description": "The log field whose distinct values should be returned. Must be one of\nthe names returned by the log fields endpoint for this branch.\n", "required": true, "schema": { "type": "string", "minLength": 1 }, "index$": 2 }, { "name": "since", "description": "Length of the lookup window, ending at `end_time` or at the current\ntime when `end_time` is omitted. Mutually exclusive with\n`start_time`. Defaults to six hours.\n", "in": "query", "schema": { "type": "string", "pattern": "^[0-9]{1,6}(ms|s|m|h|d)$", "description": "A length of time as a count and a unit, for example `30m`, `6h`, or\n`7d`. Valid units are `ms`, `s`, `m`, `h`, and `d`.\n", "example": "1h", "x-ref": "#/components/schemas/ProjectBranchLogDuration" }, "index$": 3 }, { "name": "start_time", "description": "Inclusive beginning of the lookup window. Mutually exclusive with\n`since`.\n", "in": "query", "schema": { "type": "string", "format": "date-time" }, "index$": 4 }, { "name": "end_time", "description": "Exclusive end of the lookup window. Defaults to the current time.", "in": "query", "schema": { "type": "string", "format": "date-time" }, "index$": 5 }, { "name": "source", "description": "Only consider records emitted by this Neon service.", "in": "query", "schema": { "type": "string", "description": "The Neon service that emitted the log record.", "enum": ["function", "storage", "pg_endpoint"], "x-ref": "#/components/schemas/ProjectBranchLogSource" }, "index$": 6 }, { "name": "limit", "description": "Maximum number of distinct values to return. The response sets\n`is_truncated` when this bound, or the server's own scan cap, cut the\nlist short.\n", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 1000, "default": 100 }, "index$": 7 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let project_branch_log_field_value_ref01_data = Object.values(setup.data.existing.project_branch_log_field_value)[0];
        // LIST
        const project_branch_log_field_value_ref01_ent = client.ProjectBranchLogFieldValue();
        const project_branch_log_field_value_ref01_match = {};
        project_branch_log_field_value_ref01_match['branch_id'] = setup.idmap['branch01'];
        project_branch_log_field_value_ref01_match['field_name'] = setup.idmap['field_name01'];
        project_branch_log_field_value_ref01_match['project_id'] = setup.idmap['project01'];
        const project_branch_log_field_value_ref01_list = (await project_branch_log_field_value_ref01_ent.list(project_branch_log_field_value_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/project_branch_log_field_value/ProjectBranchLogFieldValueTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['project_branch_log_field_value01', 'project_branch_log_field_value02', 'project_branch_log_field_value03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03', 'field_name01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_PROJECT_BRANCH_LOG_FIELD_VALUE_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_PROJECT_BRANCH_LOG_FIELD_VALUE_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_PROJECT_BRANCH_LOG_FIELD_VALUE_ENTID'];
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
//# sourceMappingURL=ProjectBranchLogFieldValueEntity.test.js.map