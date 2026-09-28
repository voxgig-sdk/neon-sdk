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
(0, node_test_1.describe)('ConsumptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.Consumption();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'consumption.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "branches": { "a": true, "h": "Branches", "n": "branches", "r": true, "sh": "Per-branch consumption history records returned for the requested time range.", "t": "`$ARRAY`", "key$": "branches", "index$": 0 }, "pagination": { "a": true, "h": "Pagination", "n": "pagination", "r": true, "sh": "Cursor-based pagination.", "t": "`$OBJECT`", "key$": "pagination", "index$": 1 }, "projects": { "a": true, "h": "Projects", "n": "projects", "r": true, "sh": "Per-project consumption history records included in the response.", "t": "`$ARRAY`", "key$": "projects", "index$": 2 } }, "name": "consumption", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /consumption_history/v2/branches", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "branch_id", "or": "branch_id", "r": false, "t": "`$ARRAY`", "index$": 0 }, { "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "from", "or": "from", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "granularity", "or": "granularity", "r": true, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": 100, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "metric", "or": "metric", "r": true, "t": "`$ARRAY`", "index$": 5 }, { "a": true, "k": "query", "n": "org_id", "or": "org_id", "r": true, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "project_id", "or": "project_id", "r": true, "t": "`$ARRAY`", "index$": 7 }, { "a": true, "k": "query", "n": "to", "or": "to", "r": true, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/consumption_history/v2/branches", "q": { "exist": ["branch_id", "cursor", "from", "granularity", "limit", "metric", "org_id", "project_id", "to"] }, "r": {}, "s": [{ "lit": "consumption_history" }, { "lit": "v2" }, { "lit": "branches" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /consumption_history/projects", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "from", "or": "from", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "granularity", "or": "granularity", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "include_v1_metric", "or": "include_v1_metric", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "metric", "or": "metric", "r": false, "t": "`$ARRAY`", "index$": 5 }, { "a": true, "k": "query", "n": "org_id", "or": "org_id", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "project_id", "or": "project_id", "r": false, "t": "`$ARRAY`", "index$": 7 }, { "a": true, "k": "query", "n": "to", "or": "to", "r": true, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/consumption_history/projects", "q": { "exist": ["cursor", "from", "granularity", "include_v1_metric", "limit", "metric", "org_id", "project_id", "to"] }, "r": {}, "s": [{ "lit": "consumption_history" }, { "lit": "projects" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /consumption_history/v2/projects", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "from", "or": "from", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "granularity", "or": "granularity", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "metric", "or": "metric", "r": true, "t": "`$ARRAY`", "index$": 4 }, { "a": true, "k": "query", "n": "org_id", "or": "org_id", "r": true, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "project_id", "or": "project_id", "r": false, "t": "`$ARRAY`", "index$": 6 }, { "a": true, "k": "query", "n": "to", "or": "to", "r": true, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/consumption_history/v2/projects", "q": { "exist": ["cursor", "from", "granularity", "limit", "metric", "org_id", "project_id", "to"] }, "r": {}, "s": [{ "lit": "consumption_history" }, { "lit": "v2" }, { "lit": "projects" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "consumption", "name__orig": "consumption", "Name": "Consumption", "name_": "consumption", "name-": "consumption", "NAME": "CONSUMPTION", "index$": 16 }, { "active": true, "entity": "consumption", "key$": "BasicConsumptionFlow", "kind": "basic", "name": "BasicConsumptionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "consumption_ref01" } }], "index$": 0 }] }, 'Consumption', { "GET /consumption_history/v2/branches": { "protocol": "http", "parameters": [{ "name": "cursor", "description": "Cursor from the previous response (`pagination.cursor`). Pass it to fetch the next page\nof branches. Pages are ordered by project ID, then branch ID.\n", "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "limit", "description": "Maximum number of branches per page. Allowed range: 1 to 1000. Default: 100.\n", "in": "query", "schema": { "type": "integer", "minimum": 1, "default": 100, "maximum": 1000 }, "index$": 1 }, { "name": "project_ids", "description": "Project IDs to include (required, 1 to 100). Returns metrics for branches in these projects.\n\nPass multiple IDs as repeated query parameters or a comma-separated list:\n- `project_ids=cold-poetry-09157238&project_ids=quiet-snow-71788278`\n- `project_ids=cold-poetry-09157238,quiet-snow-71788278`\n", "in": "query", "required": true, "schema": { "type": "array", "items": { "pattern": "^([a-z0-9-]{1,60}(,[a-z0-9-]{1,60}){0,99})?$", "type": "string" }, "minItems": 1, "maxItems": 100 }, "index$": 2 }, { "name": "branch_ids", "description": "Optional branch IDs to filter the response (up to 100). If omitted, all branches in the\nlisted projects are included.\n\nPass multiple IDs as repeated query parameters or a comma-separated list:\n- `branch_ids=br-aged-salad-637688&branch_ids=br-sweet-breeze-497520`\n- `branch_ids=br-aged-salad-637688,br-sweet-breeze-497520`\n", "in": "query", "schema": { "type": "array", "items": { "pattern": "^([a-z0-9-]{1,60}(,[a-z0-9-]{1,60}){0,99})?$", "type": "string" }, "minItems": 0, "maxItems": 100 }, "index$": 3 }, { "name": "from", "description": "Specify the start `date-time` for the consumption period.\nThe `date-time` value is rounded according to the specified `granularity`.\nFor example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.\nThe specified `date-time` value must respect the specified `granularity`:\n- For `hourly`, consumption metrics are limited to the last 168 hours.\n- For `daily`, consumption metrics are limited to the last 60 days.\n- For `monthly`, consumption metrics are limited to the last year.\n\nBranch-level metrics are returned from when the account first ingests branch-level\nconsumption data. Periods before that time contain no branch metrics.\n", "in": "query", "schema": { "type": "string", "format": "date-time" }, "required": true, "index$": 4 }, { "name": "to", "description": "Specify the end `date-time` for the consumption period.\nThe `date-time` value is rounded according to the specified `granularity`.\nFor example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.\nThe specified `date-time` value must respect the specified `granularity`:\n- For `hourly`, consumption metrics are limited to the last 168 hours.\n- For `daily`, consumption metrics are limited to the last 60 days.\n- For `monthly`, consumption metrics are limited to the last year.\n", "in": "query", "schema": { "type": "string", "format": "date-time" }, "required": true, "index$": 5 }, { "name": "granularity", "description": "Specify the granularity of consumption metrics.\nHourly, daily, and monthly metrics are available for the last 168 hours, 60 days,\nand 1 year, respectively.\n", "in": "query", "schema": { "type": "string", "enum": ["hourly", "daily", "monthly"], "x-ref": "#/components/schemas/ConsumptionHistoryGranularity" }, "required": true, "index$": 6 }, { "name": "org_id", "description": "Organization ID. Metrics are returned for projects in this organization.\n", "in": "query", "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "required": true, "index$": 7 }, { "name": "metrics", "required": true, "description": "Required. List the metrics to return. Only these values are supported:\n- `compute_unit_seconds`\n- `root_branch_bytes_month`\n- `child_branch_bytes_month`\n- `instant_restore_bytes_month`\n- `public_network_transfer_bytes`\n- `private_network_transfer_bytes`\n\nNot supported on this endpoint: `extra_branches_month`, `snapshot_storage_bytes_month`.\nUse `GET /consumption_history/v2/projects` for those.\n\nPass multiple values as repeated query parameters or a comma-separated list:\n- `metrics=compute_unit_seconds&metrics=public_network_transfer_bytes`\n- `metrics=compute_unit_seconds,public_network_transfer_bytes`\n", "in": "query", "schema": { "type": "array", "items": { "type": "string" }, "x-ref": "#/components/schemas/ConsumptionHistoryQueryMetrics" }, "index$": 8 }] }, "GET /consumption_history/projects": { "protocol": "http", "parameters": [{ "name": "cursor", "description": "Specify the cursor value from the previous response to get the next batch of projects.", "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "limit", "description": "Specify a value from 1 to 100 to limit number of projects in the response.", "in": "query", "schema": { "type": "integer", "minimum": 1, "default": 10, "maximum": 100 }, "index$": 1 }, { "name": "project_ids", "description": "Specify a list of project IDs to filter the response.\nIf omitted, the response will contain all projects.\nA list of project IDs can be specified as an array of parameter values or as a comma-separated list in a single parameter value.\n- As an array of parameter values: `project_ids=cold-poetry-09157238%20&project_ids=quiet-snow-71788278`\n- As a comma-separated list in a single parameter value: `project_ids=cold-poetry-09157238,quiet-snow-71788278`\n", "in": "query", "schema": { "type": "array", "items": { "pattern": "^([a-z0-9-]{1,60}(,[a-z0-9-]{1,60}){0,99})?$", "type": "string" }, "minItems": 0, "maxItems": 100 }, "index$": 2 }, { "name": "from", "description": "Specify the start `date-time` for the consumption period.\nThe `date-time` value is rounded according to the specified `granularity`.\nFor example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.\nThe specified `date-time` value must respect the specified `granularity`:\n- For `hourly`, consumption metrics are limited to the last 168 hours.\n- For `daily`, consumption metrics are limited to the last 60 days.\n- For `monthly`, consumption metrics are limited to the last year.\n\nThe consumption history is available starting from `March 1, 2024, at 00:00:00 UTC`.\n", "in": "query", "schema": { "type": "string", "format": "date-time" }, "required": true, "index$": 3 }, { "name": "to", "description": "Specify the end `date-time` for the consumption period.\nThe `date-time` value is rounded according to the specified granularity.\nFor example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.\nThe specified `date-time` value must respect the specified `granularity`:\n- For `hourly`, consumption metrics are limited to the last 168 hours.\n- For `daily`, consumption metrics are limited to the last 60 days.\n- For `monthly`, consumption metrics are limited to the last year.\n", "in": "query", "schema": { "type": "string", "format": "date-time" }, "required": true, "index$": 4 }, { "name": "granularity", "description": "Specify the granularity of consumption metrics.\nHourly, daily, and monthly metrics are available for the last 168 hours, 60 days,\nand 1 year, respectively.\n", "in": "query", "schema": { "type": "string", "enum": ["hourly", "daily", "monthly"], "x-ref": "#/components/schemas/ConsumptionHistoryGranularity" }, "required": true, "index$": 5 }, { "name": "org_id", "description": "Specify the organization for which the project consumption metrics should be returned.\nIf this parameter is not provided, the endpoint will return the metrics for the\nauthenticated user's projects.\n", "in": "query", "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 6 }, { "name": "include_v1_metrics", "description": "The field is deprecated. Please use `metrics` instead.\nIf `metrics` is specified, this field is ignored.\nInclude metrics utilized in previous pricing models.\n- **data_storage_bytes_hour**: The sum of the maximum observed storage values for each hour,\n  which never decreases.\n", "in": "query", "deprecated": true, "schema": { "type": "boolean" }, "index$": 7 }, { "name": "metrics", "description": "Specify a list of metrics to include in the response.\nIf omitted, active_time, compute_time, written_data are returned.\nPossible values:\n- `active_time_seconds`\n- `compute_time_seconds`\n- `written_data_bytes`\n- `synthetic_storage_size_bytes` (deprecated: always returns 0; use the consumption history v2 endpoints instead)\n- `data_storage_bytes_hour`\n- `logical_size_bytes`\n- `logical_size_bytes_hour`\n\nA list of metrics can be specified as an array of parameter values or as a comma-separated list in a single parameter value.\n- As an array of parameter values: `metrics=cpu_seconds&metrics=ram_bytes`\n- As a comma-separated list in a single parameter value: `metrics=cpu_seconds,ram_bytes`\n", "in": "query", "schema": { "type": "array", "items": { "type": "string" }, "x-ref": "#/components/schemas/ConsumptionHistoryQueryMetrics" }, "index$": 8 }] }, "GET /consumption_history/v2/projects": { "protocol": "http", "parameters": [{ "name": "cursor", "description": "Cursor from the previous response (`pagination.cursor`). Pass it to fetch the next page\nof projects. Pages are ordered by project creation order (newest first).\n", "in": "query", "schema": { "type": "string" }, "index$": 0 }, { "name": "limit", "description": "Maximum number of projects per page. Allowed range: 1 to 100. Default: 10.\n", "in": "query", "schema": { "type": "integer", "minimum": 1, "default": 10, "maximum": 100 }, "index$": 1 }, { "name": "project_ids", "description": "Optional project IDs to filter the response (up to 100). If omitted, projects in the\norganization are included across pages (use `cursor` and `limit`).\n\nPass multiple IDs as repeated query parameters or a comma-separated list:\n- `project_ids=cold-poetry-09157238&project_ids=quiet-snow-71788278`\n- `project_ids=cold-poetry-09157238,quiet-snow-71788278`\n", "in": "query", "schema": { "type": "array", "items": { "pattern": "^([a-z0-9-]{1,60}(,[a-z0-9-]{1,60}){0,99})?$", "type": "string" }, "minItems": 0, "maxItems": 100 }, "index$": 2 }, { "name": "from", "description": "Specify the start `date-time` for the consumption period.\nThe `date-time` value is rounded according to the specified `granularity`.\nFor example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.\nThe specified `date-time` value must respect the specified `granularity`:\n- For `hourly`, consumption metrics are limited to the last 168 hours.\n- For `daily`, consumption metrics are limited to the last 60 days.\n- For `monthly`, consumption metrics are limited to the last year.\n\nThe earliest allowed `from` value is `March 1, 2024, at 00:00:00 UTC`.\nMetrics are returned from when the account upgraded to an eligible plan, which may be\nlater than that date.\n", "in": "query", "schema": { "type": "string", "format": "date-time" }, "required": true, "index$": 3 }, { "name": "to", "description": "Specify the end `date-time` for the consumption period.\nThe `date-time` value is rounded according to the specified `granularity`.\nFor example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.\nThe specified `date-time` value must respect the specified `granularity`:\n- For `hourly`, consumption metrics are limited to the last 168 hours.\n- For `daily`, consumption metrics are limited to the last 60 days.\n- For `monthly`, consumption metrics are limited to the last year.\n", "in": "query", "schema": { "type": "string", "format": "date-time" }, "required": true, "index$": 4 }, { "name": "granularity", "description": "Specify the granularity of consumption metrics.\nHourly, daily, and monthly metrics are available for the last 168 hours, 60 days,\nand 1 year, respectively.\n", "in": "query", "schema": { "type": "string", "enum": ["hourly", "daily", "monthly"], "x-ref": "#/components/schemas/ConsumptionHistoryGranularity" }, "required": true, "index$": 5 }, { "name": "org_id", "description": "Organization ID. Metrics are returned for projects in this organization.\n", "in": "query", "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "required": true, "index$": 6 }, { "name": "metrics", "required": true, "description": "Required. List the metrics to return. Supported values:\n- `compute_unit_seconds`\n- `root_branch_bytes_month`\n- `child_branch_bytes_month`\n- `instant_restore_bytes_month`\n- `public_network_transfer_bytes`\n- `private_network_transfer_bytes`\n- `extra_branches_month`\n- `snapshot_storage_bytes_month`\n\nPass multiple values as repeated query parameters or a comma-separated list:\n- `metrics=compute_unit_seconds&metrics=extra_branches_month`\n- `metrics=compute_unit_seconds,extra_branches_month`\n", "in": "query", "schema": { "type": "array", "items": { "type": "string" }, "x-ref": "#/components/schemas/ConsumptionHistoryQueryMetrics" }, "index$": 7 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let consumption_ref01_data = Object.values(setup.data.existing.consumption)[0];
        // LIST
        const consumption_ref01_ent = client.Consumption();
        const consumption_ref01_match = {};
        const consumption_ref01_list = (await consumption_ref01_ent.list(consumption_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/consumption/ConsumptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['consumption01', 'consumption02', 'consumption03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_CONSUMPTION_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_CONSUMPTION_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_CONSUMPTION_ENTID'];
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
//# sourceMappingURL=ConsumptionEntity.test.js.map