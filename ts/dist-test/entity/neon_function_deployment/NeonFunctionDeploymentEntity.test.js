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
(0, node_test_1.describe)('NeonFunctionDeploymentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.NeonFunctionDeployment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'neon_function_deployment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "neon_function_deployment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /projects/{project_id}/branches/{branch_id}/functions/{slug}/deployments", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "slug", "or": "slug", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/branches/{branch_id}/functions/{slug}/deployments", "q": { "exist": ["branch_id", "project_id", "slug"] }, "r": {}, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "functions" }, { "var": "slug" }, { "lit": "deployments" }], "t": { "req": "`reqdata`", "res": "`body.deployment`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.branch", "$.main.kit.entity.function"]] }, "key$": "neon_function_deployment", "name__orig": "neon_function_deployment", "Name": "NeonFunctionDeployment", "name_": "neon_function_deployment", "name-": "neon-function-deployment", "NAME": "NEON_FUNCTION_DEPLOYMENT", "index$": 48 }, { "active": true, "entity": "neon_function_deployment", "key$": "BasicNeonFunctionDeploymentFlow", "kind": "basic", "name": "BasicNeonFunctionDeploymentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "neon_function_deployment_ref01" }, "m": { "branch_id": "branch01", "project_id": "project01", "slug": "slug01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'NeonFunctionDeployment', { "POST /projects/{project_id}/branches/{branch_id}/functions/{slug}/deployments": { "protocol": "http", "requestBody": { "required": true, "content": { "multipart/form-data": { "schema": { "type": "object", "properties": { "zip": { "type": "string", "format": "binary", "description": "Optional ZIP archive of the function source code. Omit to reuse the\nlatest version's bundle (a config-only change). Required for the\nfirst deployment of a function.\n" }, "runtime": { "type": "string", "enum": ["nodejs24"] }, "environment": { "type": "string", "description": "Optional JSON object (a string-to-string map) of environment\nvariables for the deployment, e.g. {\"KEY\":\"VALUE\"}. Carried as a\nJSON-encoded string because multipart form data does not support\ntyped object parts.\n\nValues are write-only: they are encrypted at rest, and responses\ncarry only the variable names (the `environment` array), never the\nvalues.\n" } }, "x-ref": "#/components/schemas/FunctionDeployRequest" } } } }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "slug", "in": "path", "description": "The function slug", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9]{1,20}$" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const neon_function_deployment_ref01_ent = client.NeonFunctionDeployment();
        let neon_function_deployment_ref01_data = setup.data.new.neon_function_deployment['neon_function_deployment_ref01'];
        neon_function_deployment_ref01_data['branch_id'] = setup.idmap['branch01'];
        neon_function_deployment_ref01_data['project_id'] = setup.idmap['project01'];
        neon_function_deployment_ref01_data['slug'] = setup.idmap['slug01'];
        neon_function_deployment_ref01_data = (await neon_function_deployment_ref01_ent.create(neon_function_deployment_ref01_data)).data();
        (0, node_assert_1.default)(null != neon_function_deployment_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/neon_function_deployment/NeonFunctionDeploymentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['neon_function_deployment01', 'neon_function_deployment02', 'neon_function_deployment03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03', 'function01', 'function02', 'function03', 'slug01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_NEON_FUNCTION_DEPLOYMENT_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_NEON_FUNCTION_DEPLOYMENT_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_NEON_FUNCTION_DEPLOYMENT_ENTID'];
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
//# sourceMappingURL=NeonFunctionDeploymentEntity.test.js.map