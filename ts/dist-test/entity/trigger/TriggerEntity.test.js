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
(0, node_test_1.describe)('TriggerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.Trigger();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'trigger.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "triggers": { "a": true, "h": "Triggers", "n": "triggers", "r": true, "t": "`$ARRAY`", "key$": "triggers", "index$": 1 } }, "id": { "field": "id", "name": "id" }, "name": "trigger", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /projects/{project_id}/branches/{branch_id}/triggers", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/branches/{branch_id}/triggers", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "triggers" }], "t": { "req": "`reqdata`", "res": "`body.trigger`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/branches/{branch_id}/triggers", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/branches/{branch_id}/triggers", "q": { "exist": ["branch_id", "project_id"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "triggers" }], "t": { "req": "`reqdata`", "res": "`body.triggers`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "trigger_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}", "q": { "exist": ["branch_id", "id", "project_id"] }, "r": { "param": { "trigger_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "triggers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.trigger`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "trigger_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PATCH", "o": "/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}", "q": { "exist": ["branch_id", "id", "project_id"] }, "r": { "param": { "trigger_id": "id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "triggers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.trigger`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.branch"]] }, "key$": "trigger", "name__orig": "trigger", "Name": "Trigger", "name_": "trigger", "name-": "trigger", "NAME": "TRIGGER", "index$": 72 }, { "active": true, "entity": "trigger", "key$": "BasicTriggerFlow", "kind": "basic", "name": "BasicTriggerFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "trigger_ref01" }, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "branch_id": "branch01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "trigger_ref01" } }], "index$": 1 }, { "a": true, "d": { "branch_id": "branch01", "project_id": "project01" }, "i": { "ref": "trigger_ref01", "srcdatavar": "trigger_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-trigger_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "trigger_ref01", "srcdatavar": "trigger_ref01_data", "suffix": "_dt0" }, "m": { "branch_id": "branch01", "id": "trigger01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-trigger_ref01" } }], "index$": 3 }] }, 'Trigger', { "POST /projects/{project_id}/branches/{branch_id}/triggers": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "Trigger creation payload discriminated by `type`. The supported trigger\ntypes are `schedule` and `storage_object_created`.\n", "discriminator": { "propertyName": "type", "mapping": { "schedule": "#/components/schemas/ScheduleTriggerCreateRequest", "storage_object_created": "#/components/schemas/StorageObjectCreatedTriggerCreateRequest" } }, "oneOf": [{ "type": "object", "required": ["type", "function_slug", "name", "schedule"], "properties": { "type": { "type": "string", "enum": ["schedule"], "description": "Trigger type discriminator." }, "function_slug": { "type": "string", "pattern": "^[a-z0-9]{1,20}$", "description": "The branch-local Function slug to invoke." }, "name": { "type": "string", "minLength": 1, "maxLength": 256, "description": "Human-readable name, unique among triggers visible on the branch." }, "function_path": { "type": "string", "minLength": 1, "maxLength": 2048, "default": "/", "description": "Path passed to the target Function. Defaults to `/`." }, "schedule": { "type": "object", "description": "A numeric five-field cron schedule interpreted in UTC.", "required": ["cron"], "properties": { "cron": {} }, "additionalProperties": false, "x-ref": "#/components/schemas/FunctionTriggerSchedule" }, "enabled": { "type": "boolean", "default": true, "description": "Whether future occurrences should be scheduled." } }, "additionalProperties": false, "x-ref": "#/components/schemas/ScheduleTriggerCreateRequest" }, { "type": "object", "required": ["type", "function_slug", "name", "storage_object_created"], "properties": { "type": { "type": "string", "enum": ["storage_object_created"], "description": "Trigger type discriminator." }, "function_slug": { "type": "string", "pattern": "^[a-z0-9]{1,20}$", "description": "The branch-local Function slug to invoke." }, "name": { "type": "string", "minLength": 1, "maxLength": 256, "description": "Human-readable name, unique among triggers visible on the branch." }, "function_path": { "type": "string", "minLength": 1, "maxLength": 2048, "default": "/", "description": "Path passed to the target Function. Defaults to `/`." }, "storage_object_created": { "type": "object", "description": "Matches successful uploads to one exact bucket and, when configured, an\nobject-key prefix. The Function receives a JSON request body with\n`type` set to `storage_object_created` and a `data` object containing\nexactly `bucket_name` and `object_key`.\n", "required": ["bucket_name"], "properties": { "bucket_name": {}, "prefix": {} }, "additionalProperties": false, "x-ref": "#/components/schemas/FunctionTriggerStorageObjectCreated" }, "enabled": { "type": "boolean", "default": true, "description": "Whether successful matching uploads should invoke the Function." } }, "additionalProperties": false, "x-ref": "#/components/schemas/StorageObjectCreatedTriggerCreateRequest" }], "x-ref": "#/components/schemas/TriggerCreateRequest", "index$": 1 } } } }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "GET /projects/{project_id}/branches/{branch_id}/triggers": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }] }, "GET /projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}": { "protocol": "http", "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "trigger_id", "in": "path", "description": "The opaque, project-wide trigger ID", "required": true, "schema": { "type": "string", "pattern": "^[A-Za-z0-9][A-Za-z0-9_.\\-]{0,127}$", "minLength": 1, "maxLength": 128, "description": "Opaque, server-minted project-wide trigger identifier.", "x-ref": "#/components/schemas/TriggerID" }, "index$": 2 }] }, "PATCH /projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "Partial trigger update discriminated by `type`. The supported trigger\ntypes are `schedule` and `storage_object_created`.\n", "discriminator": { "propertyName": "type", "mapping": { "schedule": "#/components/schemas/ScheduleTriggerUpdateRequest", "storage_object_created": "#/components/schemas/StorageObjectCreatedTriggerUpdateRequest" } }, "oneOf": [{ "type": "object", "required": ["type"], "minProperties": 2, "properties": { "type": { "type": "string", "enum": ["schedule"], "description": "Trigger type discriminator; it does not change the trigger type." }, "function_slug": { "type": "string", "pattern": "^[a-z0-9]{1,20}$", "description": "Replacement branch-local Function slug." }, "name": { "type": "string", "minLength": 1, "maxLength": 256 }, "function_path": { "type": "string", "minLength": 1, "maxLength": 2048 }, "schedule": { "type": "object", "description": "A numeric five-field cron schedule interpreted in UTC.", "required": ["cron"], "properties": { "cron": {} }, "additionalProperties": false, "x-ref": "#/components/schemas/FunctionTriggerSchedule" }, "enabled": { "type": "boolean", "description": "True enables and false disables future scheduling." } }, "additionalProperties": false, "x-ref": "#/components/schemas/ScheduleTriggerUpdateRequest" }, { "type": "object", "required": ["type"], "minProperties": 2, "properties": { "type": { "type": "string", "enum": ["storage_object_created"], "description": "Trigger type discriminator; it does not change the trigger type." }, "function_slug": { "type": "string", "pattern": "^[a-z0-9]{1,20}$", "description": "Replacement branch-local Function slug." }, "name": { "type": "string", "minLength": 1, "maxLength": 256 }, "function_path": { "type": "string", "minLength": 1, "maxLength": 2048 }, "storage_object_created": { "type": "object", "description": "Matches successful uploads to one exact bucket and, when configured, an\nobject-key prefix. The Function receives a JSON request body with\n`type` set to `storage_object_created` and a `data` object containing\nexactly `bucket_name` and `object_key`.\n", "required": ["bucket_name"], "properties": { "bucket_name": {}, "prefix": {} }, "additionalProperties": false, "x-ref": "#/components/schemas/FunctionTriggerStorageObjectCreated" }, "enabled": { "type": "boolean", "description": "True enables and false disables future matching uploads." } }, "additionalProperties": false, "x-ref": "#/components/schemas/StorageObjectCreatedTriggerUpdateRequest" }], "x-ref": "#/components/schemas/TriggerUpdateRequest", "index$": 1 } } } }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "trigger_id", "in": "path", "description": "The opaque, project-wide trigger ID", "required": true, "schema": { "type": "string", "pattern": "^[A-Za-z0-9][A-Za-z0-9_.\\-]{0,127}$", "minLength": 1, "maxLength": 128, "description": "Opaque, server-minted project-wide trigger identifier.", "x-ref": "#/components/schemas/TriggerID" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const trigger_ref01_ent = client.Trigger();
        let trigger_ref01_data = setup.data.new.trigger['trigger_ref01'];
        trigger_ref01_data['branch_id'] = setup.idmap['branch01'];
        trigger_ref01_data['project_id'] = setup.idmap['project01'];
        trigger_ref01_data = (await trigger_ref01_ent.create(trigger_ref01_data)).data();
        (0, node_assert_1.default)(null != trigger_ref01_data.id);
        // LIST
        const trigger_ref01_match = {};
        trigger_ref01_match['branch_id'] = setup.idmap['branch01'];
        trigger_ref01_match['project_id'] = setup.idmap['project01'];
        const trigger_ref01_list = (await trigger_ref01_ent.list(trigger_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(trigger_ref01_list, { id: trigger_ref01_data.id })));
        // UPDATE
        const trigger_ref01_data_up0 = {};
        trigger_ref01_data_up0.id = trigger_ref01_data.id;
        trigger_ref01_data_up0['branch_id'] = setup.idmap['branch_id'];
        trigger_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const trigger_ref01_resdata_up0 = (await trigger_ref01_ent.update(trigger_ref01_data_up0)).data();
        (0, node_assert_1.default)(trigger_ref01_resdata_up0.id === trigger_ref01_data_up0.id);
        // LOAD
        const trigger_ref01_match_dt0 = {};
        trigger_ref01_match_dt0.id = trigger_ref01_data.id;
        const trigger_ref01_data_dt0 = (await trigger_ref01_ent.load(trigger_ref01_match_dt0)).data();
        (0, node_assert_1.default)(trigger_ref01_data_dt0.id === trigger_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/trigger/TriggerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['trigger01', 'trigger02', 'trigger03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_TRIGGER_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_TRIGGER_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_TRIGGER_ENTID'];
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
//# sourceMappingURL=TriggerEntity.test.js.map