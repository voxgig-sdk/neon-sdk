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
(0, node_test_1.describe)('PresignEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.Presign();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'presign.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "content_type": { "a": true, "h": "Content Type", "n": "content_type", "r": false, "sh": "The `Content-Type` to bind into the signed request.", "t": "`$STRING`", "key$": "content_type", "index$": 0 }, "expires_at": { "a": true, "fo": "date-time", "h": "Expires At", "n": "expires_at", "r": true, "sh": "When the presigned URL stops being valid.", "t": "`$STRING`", "key$": "expires_at", "index$": 1 }, "expires_in_seconds": { "a": true, "fo": "int64", "h": "Expires In Seconds", "n": "expires_in_seconds", "r": false, "sh": "How long the presigned URL stays valid, in seconds.", "t": "`$INTEGER`", "key$": "expires_in_seconds", "index$": 2 }, "headers": { "a": true, "h": "Headers", "n": "headers", "r": true, "sh": "Headers the caller MUST send verbatim on the request (e.g.", "t": "`$OBJECT`", "key$": "headers", "index$": 3 }, "method": { "a": true, "h": "Method", "n": "method", "r": true, "sh": "The HTTP method to use against `url`: `PUT` for an upload, `GET` for a download.", "t": "`$STRING`", "key$": "method", "index$": 4 }, "operation": { "a": true, "h": "Operation", "n": "operation", "r": true, "sh": "The transfer direction.", "t": "`$STRING`", "key$": "operation", "index$": 5 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "The presigned URL.", "t": "`$STRING`", "key$": "url", "index$": 6 } }, "name": "presign", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/presign", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "branch_id", "or": "branch_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "bucket_id", "or": "bucket_name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "object_key", "or": "object_key", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "POST", "o": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/presign", "q": { "exist": ["branch_id", "bucket_id", "object_key", "project_id"] }, "r": { "param": { "bucket_name": "bucket_id" } }, "s": [{ "lit": "projects" }, { "var": "project_id" }, { "lit": "branches" }, { "var": "branch_id" }, { "lit": "buckets" }, { "var": "bucket_id" }, { "lit": "objects" }, { "var": "object_key" }, { "lit": "presign" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.branch", "$.main.kit.entity.bucket"]] }, "key$": "presign", "name__orig": "presign", "Name": "Presign", "name_": "presign", "name-": "presign", "NAME": "PRESIGN", "index$": 55 }, { "active": true, "entity": "presign", "key$": "BasicPresignFlow", "kind": "basic", "name": "BasicPresignFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "presign_ref01" }, "m": { "branch_id": "branch01", "bucket_id": "bucket01", "object_key": "object_key01", "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Presign', { "POST /projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/presign": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["operation"], "description": "Options for the presigned URL. The `operation` selects upload (`PUT`)\nor download (`GET`); the remaining fields are optional.\n", "properties": { "operation": { "type": "string", "enum": ["upload", "download"], "description": "The transfer direction. `upload` returns a presigned `PUT` URL;\n`download` returns a presigned `GET` URL.\n", "key$": "operation" }, "content_type": { "type": "string", "description": "The `Content-Type` to bind into the signed request. Only meaningful\nfor `upload`: when set, the caller MUST send the same `Content-Type`\nheader on the `PUT`, and the value is echoed back in the response\n`headers`. Ignored for `download`.\n", "key$": "content_type" }, "expires_in_seconds": { "type": "integer", "format": "int64", "minimum": 1, "maximum": 604800, "default": 900, "description": "How long the presigned URL stays valid, in seconds. Defaults to 900\n(15 minutes); capped at 604800 (7 days).\n", "key$": "expires_in_seconds" } }, "x-ref": "#/components/schemas/PresignRequest", "index$": 1 } } } }, "parameters": [{ "name": "project_id", "in": "path", "description": "The Neon project ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "branch_id", "in": "path", "description": "The Neon branch ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 1 }, { "name": "bucket_name", "in": "path", "description": "The bucket name", "required": true, "schema": { "type": "string", "minLength": 1, "maxLength": 255 }, "index$": 2 }, { "name": "object_key", "in": "path", "description": "The object key. Keys may contain `/`; the `/` characters of nested\nkeys must be percent-encoded (`%2F`) in the path segment.\n", "required": true, "schema": { "type": "string", "minLength": 1, "maxLength": 1024 }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const presign_ref01_ent = client.Presign();
        let presign_ref01_data = setup.data.new.presign['presign_ref01'];
        presign_ref01_data['branch_id'] = setup.idmap['branch01'];
        presign_ref01_data['bucket_id'] = setup.idmap['bucket01'];
        presign_ref01_data['object_key'] = setup.idmap['object_key01'];
        presign_ref01_data['project_id'] = setup.idmap['project01'];
        presign_ref01_data = (await presign_ref01_ent.create(presign_ref01_data)).data();
        (0, node_assert_1.default)(null != presign_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/presign/PresignTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['presign01', 'presign02', 'presign03', 'project01', 'project02', 'project03', 'branch01', 'branch02', 'branch03', 'bucket01', 'bucket02', 'bucket03', 'object_key01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_PRESIGN_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_PRESIGN_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_PRESIGN_ENTID'];
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
//# sourceMappingURL=PresignEntity.test.js.map