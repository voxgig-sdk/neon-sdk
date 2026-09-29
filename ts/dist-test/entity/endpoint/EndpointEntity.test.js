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
(0, node_test_1.describe)('EndpointEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.Endpoint();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'endpoint.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "autoscaling_limit_max_cu": { "a": true, "h": "Autoscaling Limit Max Cu", "n": "autoscaling_limit_max_cu", "r": true, "sh": "The maximum number of Compute Units", "t": "`$NUMBER`", "key$": "autoscaling_limit_max_cu", "index$": 0 }, "autoscaling_limit_min_cu": { "a": true, "h": "Autoscaling Limit Min Cu", "n": "autoscaling_limit_min_cu", "r": true, "sh": "The minimum number of Compute Units", "t": "`$NUMBER`", "key$": "autoscaling_limit_min_cu", "index$": 1 }, "branch_id": { "a": true, "h": "Branch Id", "n": "branch_id", "r": true, "sh": "The ID of the branch this compute endpoint belongs to.", "t": "`$STRING`", "key$": "branch_id", "index$": 2 }, "compute_release_version": { "a": true, "h": "Compute Release Version", "n": "compute_release_version", "r": false, "sh": "Attached compute's release version number.", "t": "`$STRING`", "key$": "compute_release_version", "index$": 3 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "A timestamp indicating when the compute endpoint was created", "t": "`$STRING`", "key$": "created_at", "index$": 4 }, "creation_source": { "a": true, "h": "Creation Source", "n": "creation_source", "r": true, "sh": "The compute endpoint creation source", "t": "`$STRING`", "key$": "creation_source", "index$": 5 }, "current_state": { "a": true, "h": "Current State", "n": "current_state", "r": true, "sh": "Lifecycle state of the compute endpoint.", "t": "`$STRING`", "key$": "current_state", "index$": 6 }, "disabled": { "a": true, "h": "Disabled", "n": "disabled", "r": true, "sh": "Whether to restrict connections to the compute endpoint.", "t": "`$BOOLEAN`", "key$": "disabled", "index$": 7 }, "endpoint": { "a": true, "h": "Endpoint", "n": "endpoint", "r": true, "sh": "Configuration for the compute endpoint to create.", "t": "`$OBJECT`", "key$": "endpoint", "index$": 8 }, "host": { "a": true, "h": "Host", "n": "host", "r": true, "sh": "The hostname of the compute endpoint.", "t": "`$STRING`", "key$": "host", "index$": 9 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The compute endpoint ID.", "t": "`$STRING`", "key$": "id", "index$": 10 }, "last_active": { "a": true, "fo": "date-time", "h": "Last Active", "n": "last_active", "r": false, "sh": "A timestamp indicating when the compute endpoint was last active", "t": "`$STRING`", "key$": "last_active", "index$": 11 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Optional name of the compute endpoint", "t": "`$STRING`", "key$": "name", "index$": 12 }, "passwordless_access": { "a": true, "h": "Passwordless Access", "n": "passwordless_access", "r": true, "sh": "Whether to permit passwordless access to the compute endpoint", "t": "`$BOOLEAN`", "key$": "passwordless_access", "index$": 13 }, "pending_state": { "a": true, "h": "Pending State", "n": "pending_state", "r": false, "sh": "Target state the compute endpoint is transitioning to.", "t": "`$STRING`", "key$": "pending_state", "index$": 14 }, "pooler_enabled": { "a": true, "de": true, "h": "Pooler Enabled", "n": "pooler_enabled", "r": true, "sh": "Deprecated.", "t": "`$BOOLEAN`", "key$": "pooler_enabled", "index$": 15 }, "pooler_mode": { "a": true, "de": true, "h": "Pooler Mode", "n": "pooler_mode", "r": true, "sh": "Deprecated.", "t": "`$STRING`", "key$": "pooler_mode", "index$": 16 }, "project_id": { "a": true, "h": "Project Id", "n": "project_id", "r": true, "sh": "The ID of the project this compute endpoint belongs to.", "t": "`$STRING`", "key$": "project_id", "index$": 17 }, "provisioner": { "a": true, "h": "Provisioner", "n": "provisioner", "r": true, "sh": "Compute provisioner.", "t": "`$STRING`", "key$": "provisioner", "index$": 18 }, "proxy_host": { "a": true, "h": "Proxy Host", "n": "proxy_host", "r": true, "sh": "Deprecated.", "t": "`$STRING`", "key$": "proxy_host", "index$": 19 }, "region_id": { "a": true, "h": "Region Id", "n": "region_id", "r": true, "sh": "Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`).", "t": "`$STRING`", "key$": "region_id", "index$": 20 }, "settings": { "a": true, "h": "Settings", "n": "settings", "r": true, "sh": "A collection of settings for a compute endpoint", "t": "`$OBJECT`", "key$": "settings", "index$": 21 }, "started_at": { "a": true, "fo": "date-time", "h": "Started At", "n": "started_at", "r": false, "sh": "A timestamp indicating when the compute endpoint was last started", "t": "`$STRING`", "key$": "started_at", "index$": 22 }, "suspend_timeout_seconds": { "a": true, "fo": "int64", "h": "Suspend Timeout Seconds", "n": "suspend_timeout_seconds", "r": true, "sh": "Scale-to-zero idle timeout, in seconds, before the compute suspends.", "t": "`$INTEGER`", "key$": "suspend_timeout_seconds", "index$": 23 }, "suspended_at": { "a": true, "fo": "date-time", "h": "Suspended At", "n": "suspended_at", "r": false, "sh": "A timestamp indicating when the compute endpoint was last suspended", "t": "`$STRING`", "key$": "suspended_at", "index$": 24 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Compute endpoint type.", "t": "`$STRING`", "key$": "type", "index$": 25 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "A timestamp indicating when the compute endpoint was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 26 } }, "id": { "field": "id", "name": "id" }, "name": "endpoint", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /projects/{project_id}/endpoints", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/endpoints", "q": { "exist": ["project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "endpoints" }], "t": { "req": { "endpoint": "`reqdata`" }, "res": "`body.endpoint`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/branches/{branch_id}/endpoints", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/branches/{branch_id}/endpoints", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "endpoints" }], "t": { "req": "`reqdata`", "res": "`body.endpoints`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /projects/{project_id}/endpoints", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/endpoints", "q": { "exist": ["project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "endpoints" }], "t": { "req": "`reqdata`", "res": "`body.endpoints`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/endpoints/{endpoint_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "endpoint_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/endpoints/{endpoint_id}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "endpoint_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "endpoints" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.endpoint`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /projects/{project_id}/endpoints/{endpoint_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "endpoint_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/projects/{project_id}/endpoints/{endpoint_id}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "endpoint_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "endpoints" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.endpoint`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /projects/{project_id}/endpoints/{endpoint_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "endpoint_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/projects/{project_id}/endpoints/{endpoint_id}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "endpoint_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "endpoints" }, { "var": "id" }], "t": { "req": { "endpoint": "`reqdata`" }, "res": "`body.endpoint`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.branch"]] }, "key$": "endpoint", "name__orig": "endpoint", "Name": "Endpoint", "name_": "endpoint", "name-": "endpoint", "NAME": "ENDPOINT", "index$": 26 }, { "active": true, "entity": "endpoint", "key$": "BasicEndpointFlow", "kind": "basic", "name": "BasicEndpointFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "endpoint_ref01" }, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "endpoint_ref01" } }], "index$": 1 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "endpoint_ref01", "srcdatavar": "endpoint_ref01_data", "suffix": "_up0", "textfield": "branch_id" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-endpoint_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "endpoint_ref01", "srcdatavar": "endpoint_ref01_data", "suffix": "_dt0" }, "m": { "id": "endpoint01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-endpoint_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "endpoint_ref01", "suffix": "_rm0" }, "m": { "id": "endpoint01", "project_id": "project01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "endpoint_ref01" } }], "index$": 5 }] }, 'Endpoint', { "POST /projects/{project_id}/endpoints": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["endpoint"], "properties": { "endpoint": { "type": "object", "description": "Configuration for the compute endpoint to create.", "required": ["branch_id", "type"], "properties": { "branch_id": { "description": "The ID of the branch the compute endpoint will be associated with\n", "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "region_id": { "description": "The region where the compute endpoint will be created. Only the project's `region_id` is permitted.\n", "type": "string" }, "type": { "description": "Compute endpoint type. `read_write`: the primary read-write endpoint (one per branch). `read_only`: a read replica endpoint (multiple allowed per branch).", "type": "string", "enum": ["read_only", "read_write"], "x-ref": "#/components/schemas/EndpointType" }, "settings": { "type": "object", "description": "A collection of settings for a compute endpoint", "properties": { "pg_settings": {}, "pgbouncer_settings": {}, "preload_libraries": {} }, "x-ref": "#/components/schemas/EndpointSettingsData" }, "autoscaling_limit_min_cu": { "type": "number", "minimum": 0.25, "description": "The minimum number of Compute Units. The minimum value is `0.25`.\nSee [Compute size and Autoscaling configuration](https://neon.com/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n", "x-ref": "#/components/schemas/ComputeUnit" }, "autoscaling_limit_max_cu": { "type": "number", "minimum": 0.25, "description": "The maximum number of Compute Units.\nSee [Compute size and Autoscaling configuration](https://neon.com/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n", "x-ref": "#/components/schemas/ComputeUnit" }, "provisioner": { "type": "string", "description": "Compute provisioner. `k8s-neonvm` (default) supports Autoscaling; `k8s-pod` is fixed-size compute. Also `docker` and `serverless-platform`.", "example": "k8s-neonvm", "x-ref": "#/components/schemas/Provisioner" }, "pooler_enabled": { "deprecated": true, "description": "Deprecated. To enable connection pooling, append `-pooler` to the endpoint ID in the connection string.\nSee [How to use connection pooling](https://neon.com/docs/connect/connection-pooling#how-to-use-connection-pooling)\n", "type": "boolean" }, "pooler_mode": { "deprecated": true, "x-sunset": "2026-06-20", "description": "Deprecated. The connection pooler mode. Removal scheduled for June 20, 2026.\n", "type": "string", "enum": ["transaction"], "x-ref": "#/components/schemas/EndpointPoolerMode" }, "disabled": { "type": "boolean", "description": "Whether to restrict connections to the compute endpoint.\nEnabling this option schedules a suspend compute operation.\nA disabled compute endpoint cannot be enabled by a connection or\nconsole action. However, the compute endpoint is periodically\nenabled by check_availability operations.\n" }, "passwordless_access": { "type": "boolean", "description": "NOT YET IMPLEMENTED. Whether to permit passwordless access to the compute endpoint.\n" }, "suspend_timeout_seconds": { "description": "Scale-to-zero idle timeout, in seconds, before the compute suspends. `0` uses the plan default; `-1` disables scale-to-zero (never suspends). Minimum is plan-dependent (Scale: 60); maximum 604800 (one week). Free cannot change it; Launch can only enable or disable; Scale can set any value.", "type": "integer", "format": "int64", "minimum": -1, "maximum": 604800, "x-ref": "#/components/schemas/SuspendTimeoutSeconds" }, "name": { "type": "string", "minLength": 1, "maxLength": 64, "description": "Optional name of the compute endpoint\n" } }, "key$": "endpoint" } }, "x-ref": "#/components/schemas/EndpointCreateRequest", "index$": 1 }, "examples": { "required_attributes_only": { "summary": "Required attributes only", "value": { "endpoint": { "branch_id": "br-floral-mountain-251143", "type": "read_write" } } }, "with_region_attribute": { "summary": "With region attribute", "value": { "endpoint": { "branch_id": "br-floral-mountain-251143", "type": "read_write", "region_id": "aws-us-east-2" } } }, "with_pooler_attribute": { "summary": "With pooler attribute", "value": { "endpoint": { "branch_id": "br-floral-mountain-251143", "type": "read_write", "pooler_enabled": true } } } } } }, "required": true }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] }, "GET /projects/{project_id}/branches/{branch_id}/endpoints": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "GET /projects/{project_id}/endpoints": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] }, "GET /projects/{project_id}/endpoints/{endpoint_id}": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "endpoint_id", "in": "path", "description": "The endpoint ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "DELETE /projects/{project_id}/endpoints/{endpoint_id}": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "endpoint_id", "in": "path", "description": "The endpoint ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "PATCH /projects/{project_id}/endpoints/{endpoint_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["endpoint"], "properties": { "endpoint": { "type": "object", "description": "Parameters for the compute endpoint update.", "properties": { "branch_id": { "deprecated": true, "description": "Deprecated. The destination branch ID; must not have an existing read-write endpoint.\n", "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "autoscaling_limit_min_cu": { "type": "number", "minimum": 0.25, "description": "The minimum number of Compute Units. The minimum value is `0.25`.\nSee [Compute size and Autoscaling configuration](https://neon.com/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n", "x-ref": "#/components/schemas/ComputeUnit" }, "autoscaling_limit_max_cu": { "type": "number", "minimum": 0.25, "description": "The maximum number of Compute Units.\nSee [Compute size and Autoscaling configuration](https://neon.com/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n", "x-ref": "#/components/schemas/ComputeUnit" }, "provisioner": { "type": "string", "description": "Compute provisioner. `k8s-neonvm` (default) supports Autoscaling; `k8s-pod` is fixed-size compute. Also `docker` and `serverless-platform`.", "example": "k8s-neonvm", "x-ref": "#/components/schemas/Provisioner" }, "settings": { "type": "object", "description": "A collection of settings for a compute endpoint", "properties": { "pg_settings": {}, "pgbouncer_settings": {}, "preload_libraries": {} }, "x-ref": "#/components/schemas/EndpointSettingsData" }, "pooler_enabled": { "deprecated": true, "description": "Deprecated. To enable connection pooling, append `-pooler` to the endpoint ID in the connection string.\nSee [How to use connection pooling](https://neon.com/docs/connect/connection-pooling#how-to-use-connection-pooling)\n", "type": "boolean" }, "pooler_mode": { "deprecated": true, "x-sunset": "2026-06-20", "description": "Deprecated. The connection pooler mode. Removal scheduled for June 20, 2026.\n", "type": "string", "enum": ["transaction"], "x-ref": "#/components/schemas/EndpointPoolerMode" }, "disabled": { "description": "Whether to restrict connections to the compute endpoint.\nEnabling this option schedules a suspend compute operation.\nA disabled compute endpoint cannot be enabled by a connection or\nconsole action. However, the compute endpoint is periodically\nenabled by check_availability operations.\n", "type": "boolean" }, "passwordless_access": { "description": "NOT YET IMPLEMENTED. Whether to permit passwordless access to the compute endpoint.\n", "type": "boolean" }, "suspend_timeout_seconds": { "description": "Scale-to-zero idle timeout, in seconds, before the compute suspends. `0` uses the plan default; `-1` disables scale-to-zero (never suspends). Minimum is plan-dependent (Scale: 60); maximum 604800 (one week). Free cannot change it; Launch can only enable or disable; Scale can set any value.", "type": "integer", "format": "int64", "minimum": -1, "maximum": 604800, "x-ref": "#/components/schemas/SuspendTimeoutSeconds" }, "name": { "type": "string", "minLength": 1, "maxLength": 64, "description": "Optional name of the compute endpoint\n" } }, "key$": "endpoint" } }, "x-ref": "#/components/schemas/EndpointUpdateRequest", "index$": 1 }, "example": { "endpoint": { "suspend_timeout_seconds": 300 } } } } }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "endpoint_id", "in": "path", "description": "The endpoint ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const endpoint_ref01_ent = client.Endpoint();
        let endpoint_ref01_data = setup.data.new.endpoint['endpoint_ref01'];
        endpoint_ref01_data['branch_id'] = setup.idmap['branch01'];
        endpoint_ref01_data['project_id'] = setup.idmap['project01'];
        endpoint_ref01_data = (await endpoint_ref01_ent.create(endpoint_ref01_data)).data();
        (0, node_assert_1.default)(null != endpoint_ref01_data.id);
        // LIST
        const endpoint_ref01_match = {};
        endpoint_ref01_match['project_id'] = setup.idmap['project01'];
        const endpoint_ref01_list = (await endpoint_ref01_ent.list(endpoint_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(endpoint_ref01_list, { id: endpoint_ref01_data.id })));
        // UPDATE
        const endpoint_ref01_data_up0 = {};
        endpoint_ref01_data_up0.id = endpoint_ref01_data.id;
        endpoint_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const endpoint_ref01_markdef_up0 = { name: 'branch_id', value: 'Mark01-endpoint_ref01_' + setup.now };
        endpoint_ref01_data_up0[endpoint_ref01_markdef_up0.name] = endpoint_ref01_markdef_up0.value;
        const endpoint_ref01_resdata_up0 = (await endpoint_ref01_ent.update(endpoint_ref01_data_up0)).data();
        (0, node_assert_1.default)(endpoint_ref01_resdata_up0.id === endpoint_ref01_data_up0.id);
        (0, node_assert_1.default)(endpoint_ref01_resdata_up0[endpoint_ref01_markdef_up0.name] === endpoint_ref01_markdef_up0.value);
        // LOAD
        const endpoint_ref01_match_dt0 = {};
        endpoint_ref01_match_dt0.id = endpoint_ref01_data.id;
        const endpoint_ref01_data_dt0 = (await endpoint_ref01_ent.load(endpoint_ref01_match_dt0)).data();
        (0, node_assert_1.default)(endpoint_ref01_data_dt0.id === endpoint_ref01_data.id);
        // REMOVE
        const endpoint_ref01_match_rm0 = { id: endpoint_ref01_data.id };
        await endpoint_ref01_ent.remove(endpoint_ref01_match_rm0);
        // LIST
        const endpoint_ref01_match_rt0 = {};
        endpoint_ref01_match_rt0['project_id'] = setup.idmap['project01'];
        const endpoint_ref01_list_rt0 = (await endpoint_ref01_ent.list(endpoint_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(endpoint_ref01_list_rt0, { id: endpoint_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/endpoint/EndpointTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['endpoint01', 'endpoint02', 'endpoint03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_ENDPOINT_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_ENDPOINT_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_ENDPOINT_ENTID'];
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
//# sourceMappingURL=EndpointEntity.test.js.map