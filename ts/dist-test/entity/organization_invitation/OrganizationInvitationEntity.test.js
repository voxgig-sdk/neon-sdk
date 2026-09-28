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
(0, node_test_1.describe)('OrganizationInvitationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeonSDK.test();
        const ent = testsdk.OrganizationInvitation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEON_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization_invitation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": true, "sh": "Email of the invited user", "t": "`$STRING`", "key$": "email", "index$": 0 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": true, "sh": "The invitation ID.", "t": "`$STRING`", "key$": "id", "index$": 1 }, "invitations": { "a": true, "h": "Invitations", "n": "invitations", "r": true, "sh": "List of pending invitations for the organization.", "t": "`$ARRAY`", "key$": "invitations", "index$": 2 }, "invited_at": { "a": true, "fo": "date-time", "h": "Invited At", "n": "invited_at", "r": true, "sh": "Timestamp when the invitation was created", "t": "`$STRING`", "key$": "invited_at", "index$": 3 }, "invited_by": { "a": true, "fo": "uuid", "h": "Invited By", "n": "invited_by", "r": true, "sh": "UUID for the user_id who extended the invitation", "t": "`$STRING`", "key$": "invited_by", "index$": 4 }, "org_id": { "a": true, "h": "Org Id", "n": "org_id", "r": true, "sh": "Organization id as it is stored in Neon", "t": "`$STRING`", "key$": "org_id", "index$": 5 }, "role": { "a": true, "h": "Role", "n": "role", "r": true, "sh": "Organization member's role.", "t": "`$STRING`", "key$": "role", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "organization_invitation", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /organizations/{org_id}/invitations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "org_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/organizations/{org_id}/invitations", "q": { "exist": ["id"] }, "r": { "param": { "org_id": "id" } }, "s": [{ "lit": "organizations" }, { "var": "id" }, { "lit": "invitations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /organizations/{org_id}/invitations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "org_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/organizations/{org_id}/invitations", "q": { "exist": ["id"] }, "r": { "param": { "org_id": "id" } }, "s": [{ "lit": "organizations" }, { "var": "id" }, { "lit": "invitations" }], "t": { "req": "`reqdata`", "res": "`body.invitations`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "organization_invitation", "name__orig": "organization_invitation", "Name": "OrganizationInvitation", "name_": "organization_invitation", "name-": "organization-invitation", "NAME": "ORGANIZATION_INVITATION", "index$": 54 }, { "active": true, "entity": "organization_invitation", "key$": "BasicOrganizationInvitationFlow", "kind": "basic", "name": "BasicOrganizationInvitationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "organization_invitation_ref01" }, "m": { "org_id": "org01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "org_id": "org01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "organization_invitation_ref01" } }], "index$": 1 }] }, 'OrganizationInvitation', { "POST /organizations/{org_id}/invitations": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["invitations"], "properties": { "invitations": { "type": "array", "items": { "type": "object", "required": ["email", "role"], "x-sensitive": ["email"], "properties": { "email": { "description": "Email address of the person to invite to the organization.", "type": "string", "format": "email", "minLength": 1, "maxLength": 256 }, "role": { "description": "Organization member's role. `admin`: full administrative access. `editor` (and its legacy alias `member`): standard access governed by project permissions. `viewer` and `collaborator`: additional scoped project roles. Some values may not be available for all organizations.", "type": "string", "enum": [], "x-ref": "#/components/schemas/MemberRole" } }, "x-ref": "#/components/schemas/OrganizationInviteCreateRequest" }, "description": "Invitations to create for the organization.", "key$": "invitations" } }, "x-ref": "#/components/schemas/OrganizationInvitesCreateRequest", "index$": 1 }, "example": { "invitations": [{ "email": "invited-user@email.com", "role": "member" }] } } } }, "parameters": [{ "name": "org_id", "in": "path", "description": "The Neon organization ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] }, "GET /organizations/{org_id}/invitations": { "protocol": "http", "parameters": [{ "name": "org_id", "in": "path", "description": "The Neon organization ID", "required": true, "schema": { "type": "string", "pattern": "^[a-z0-9-]{1,60}$" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const organization_invitation_ref01_ent = client.OrganizationInvitation();
        let organization_invitation_ref01_data = setup.data.new.organization_invitation['organization_invitation_ref01'];
        organization_invitation_ref01_data['org_id'] = setup.idmap['org01'];
        organization_invitation_ref01_data = (await organization_invitation_ref01_ent.create(organization_invitation_ref01_data)).data();
        (0, node_assert_1.default)(null != organization_invitation_ref01_data.id);
        // LIST
        const organization_invitation_ref01_match = {};
        organization_invitation_ref01_match['org_id'] = setup.idmap['org01'];
        const organization_invitation_ref01_list = (await organization_invitation_ref01_ent.list(organization_invitation_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(organization_invitation_ref01_list, { id: organization_invitation_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization_invitation/OrganizationInvitationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization_invitation01', 'organization_invitation02', 'organization_invitation03', 'org01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEON_TEST_ORGANIZATION_INVITATION_ENTID': idmap,
        'NEON_TEST_LIVE': 'FALSE',
        'NEON_TEST_EXPLAIN': 'FALSE',
        'NEON_APIKEY': '',
    });
    idmap = env['NEON_TEST_ORGANIZATION_INVITATION_ENTID'];
    const live = 'TRUE' === env.NEON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEON_TEST_ORGANIZATION_INVITATION_ENTID'];
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
//# sourceMappingURL=OrganizationInvitationEntity.test.js.map