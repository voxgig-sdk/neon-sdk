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
(0, node_test_1.describe)('OrganizationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.Organization();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allow_hipaa_projects": { "a": true, "h": "Allow Hipaa Projects", "n": "allow_hipaa_projects", "r": false, "sh": "If true, allow account to mark projects as HIPAA", "t": "`$BOOLEAN`", "key$": "allow_hipaa_projects", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "A timestamp indicting when the organization was created", "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "handle": { "a": true, "h": "Handle", "n": "handle", "r": true, "sh": "URL-safe identifier for the organization, used in API paths.", "t": "`$STRING`", "key$": "handle", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The Neon organization ID.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "label": { "a": true, "h": "Label", "n": "label", "r": true, "sh": "Human-readable name for the VPC endpoint assignment, used to identify it within the organization.", "t": "`$STRING`", "key$": "label", "index$": 4 }, "managed_by": { "a": true, "h": "Managed By", "n": "managed_by", "r": true, "sh": "Organizations created via the Console or the API are managed by `console`.", "t": "`$STRING`", "key$": "managed_by", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Human-readable display name of the organization.", "t": "`$STRING`", "key$": "name", "index$": 6 }, "plan": { "a": true, "h": "Plan", "n": "plan", "r": true, "sh": "Billing plan for the organization, for example `free`, `launch`, or `scale`.", "t": "`$STRING`", "key$": "plan", "index$": 7 }, "require_mfa": { "a": true, "h": "Require Mfa", "n": "require_mfa", "r": false, "sh": "If true, all members must have MFA enabled to access this organization", "t": "`$BOOLEAN`", "key$": "require_mfa", "index$": 8 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "A timestamp indicating when the organization was updated", "t": "`$STRING`", "key$": "updated_at", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "organization", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "org_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "region_id", "or": "region_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "vpc_endpoint_id", "or": "vpc_endpoint_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}", "q": { "exist": ["id", "region_id", "vpc_endpoint_id"] }, "r": { "param": { "org_id": "id" } }, "s": [{ "lit": "organizations" }, { "var": "id" }, { "lit": "vpc" }, { "lit": "region" }, { "var": "region_id" }, { "lit": "vpc_endpoints" }, { "var": "vpc_endpoint_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /organizations/{org_id}/members", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "org_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": "joined_at", "k": "query", "n": "sort_by", "or": "sort_by", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "desc", "k": "query", "n": "sort_order", "or": "sort_order", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/organizations/{org_id}/members", "q": { "$action": "member", "exist": ["cursor", "id", "limit", "sort_by", "sort_order"] }, "r": { "param": { "org_id": "id" } }, "s": [{ "lit": "organizations" }, { "var": "id" }, { "lit": "members" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /users/me/organizations", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/users/me/organizations", "q": {}, "r": {}, "s": [{ "lit": "users" }, { "lit": "me" }, { "lit": "organizations" }], "t": { "req": "`reqdata`", "res": "`body.organizations`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /organizations/{org_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "org_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/organizations/{org_id}", "q": { "exist": ["id"] }, "r": { "param": { "org_id": "id" } }, "s": [{ "lit": "organizations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "org_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "region_id", "or": "region_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "vpc_endpoint_id", "or": "vpc_endpoint_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}", "q": { "exist": ["id", "region_id", "vpc_endpoint_id"] }, "r": { "param": { "org_id": "id" } }, "s": [{ "lit": "organizations" }, { "var": "id" }, { "lit": "vpc" }, { "lit": "region" }, { "var": "region_id" }, { "lit": "vpc_endpoints" }, { "var": "vpc_endpoint_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.region", "$.main.kit.entity.vpc_endpoint"]] }, "key$": "organization", "name__orig": "organization", "Name": "Organization", "name_": "organization", "name-": "organization", "NAME": "ORGANIZATION", "index$": 53 }, { "active": true, "entity": "organization", "key$": "BasicOrganizationFlow", "kind": "basic", "name": "BasicOrganizationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "organization_ref01" }, "m": { "org_id": "org01", "region_id": "region01", "vpc_endpoint_id": "vpc_endpoint01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "organization_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "organization_ref01", "srcdatavar": "organization_ref01_data", "suffix": "_dt0" }, "m": { "id": "organization01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "organization_ref01", "suffix": "_rm0" }, "m": { "id": "organization01", "region_id": "region01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "organization_ref01" } }], "index$": 4 }] }, 'Organization', { "POST /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["label"], "properties": { "label": { "type": "string", "description": "Human-readable name for the VPC endpoint assignment, used to identify it within the organization.", "key$": "label" } }, "x-ref": "#/components/schemas/VPCEndpointAssignment", "index$": 1 } } }, "required": true }, "parameters": [{ "name": "org_id", "in": "path", "description": "The Neon organization ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "region_id", "in": "path", "description": "The Neon region ID.\nAzure regions are currently not supported.\n", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "vpc_endpoint_id", "in": "path", "description": "The VPC endpoint ID", "required": true, "schema": { "type": "string" }, "index$": 2 }] }, "GET /organizations/{org_id}/members": { "protocol": "http", "parameters": [{ "name": "org_id", "in": "path", "description": "The Neon organization ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "sort_by", "description": "Sort the members by the specified field. Defaults to `joined_at`.", "in": "query", "schema": { "type": "string", "default": "joined_at", "enum": ["email", "role", "joined_at"] }, "index$": 1 }, { "name": "cursor", "description": "A cursor to use in pagination. A cursor defines your place in the data list. Include `response.pagination.next` in subsequent API calls to fetch next page of the list.", "in": "query", "schema": { "type": "string" }, "x-ref": "#/components/parameters/CursorParam", "index$": 2 }, { "name": "sort_order", "description": "Defines the sorting order of entities.", "in": "query", "schema": { "type": "string", "default": "desc", "enum": ["asc", "desc"] }, "x-ref": "#/components/parameters/SortOrderParam", "index$": 3 }, { "name": "limit", "description": "The maximum number of members to return in the response", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 500 }, "index$": 4 }] }, "GET /users/me/organizations": { "protocol": "http", "parameters": [] }, "GET /organizations/{org_id}": { "protocol": "http", "parameters": [{ "name": "org_id", "in": "path", "description": "The Neon organization ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] }, "DELETE /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}": { "protocol": "http", "parameters": [{ "name": "org_id", "in": "path", "description": "The Neon organization ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }, { "name": "region_id", "in": "path", "description": "The Neon region ID.\nAzure regions are currently not supported.\n", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "vpc_endpoint_id", "in": "path", "description": "The VPC endpoint ID", "required": true, "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const organization_ref01_ent = client.Organization();
        let organization_ref01_data = setup.data.new.organization['organization_ref01'];
        organization_ref01_data['org_id'] = setup.idmap['org01'];
        organization_ref01_data['region_id'] = setup.idmap['region01'];
        organization_ref01_data['vpc_endpoint_id'] = setup.idmap['vpc_endpoint01'];
        organization_ref01_data = (await organization_ref01_ent.create(organization_ref01_data)).data();
        (0, node_assert_1.default)(null != organization_ref01_data.id);
        // LIST
        const organization_ref01_match = {};
        const organization_ref01_list = (await organization_ref01_ent.list(organization_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(organization_ref01_list, { id: organization_ref01_data.id })));
        // LOAD
        const organization_ref01_match_dt0 = {};
        organization_ref01_match_dt0.id = organization_ref01_data.id;
        const organization_ref01_data_dt0 = (await organization_ref01_ent.load(organization_ref01_match_dt0)).data();
        (0, node_assert_1.default)(organization_ref01_data_dt0.id === organization_ref01_data.id);
        // REMOVE
        const organization_ref01_match_rm0 = { id: organization_ref01_data.id };
        await organization_ref01_ent.remove(organization_ref01_match_rm0);
        // LIST
        const organization_ref01_match_rt0 = {};
        const organization_ref01_list_rt0 = (await organization_ref01_ent.list(organization_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(organization_ref01_list_rt0, { id: organization_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization/OrganizationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization01', 'organization02', 'organization03', 'region01', 'region02', 'region03', 'vpc_endpoint01', 'vpc_endpoint02', 'vpc_endpoint03', 'org01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_ORGANIZATION_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_ORGANIZATION_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_ORGANIZATION_ENTID'];
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
//# sourceMappingURL=OrganizationEntity.test.js.map