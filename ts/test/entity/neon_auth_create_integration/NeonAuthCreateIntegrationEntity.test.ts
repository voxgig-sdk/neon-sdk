

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NeonSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('NeonAuthCreateIntegrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.NeonAuthCreateIntegration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'neon_auth_create_integration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"auth_provider":{"a":true,"h":"Auth Provider","n":"auth_provider","r":true,"sh":"Authentication provider integrated with this Neon Auth configuration.","t":"`$STRING`","key$":"auth_provider","index$":0},"branch_id":{"a":true,"h":"Branch Id","n":"branch_id","r":true,"sh":"The Neon branch ID.","t":"`$STRING`","key$":"branch_id","index$":1},"database_name":{"a":true,"h":"Database Name","n":"database_name","r":false,"sh":"Name of the database to enable Neon Auth on.","t":"`$STRING`","key$":"database_name","index$":2},"project_id":{"a":true,"h":"Project Id","n":"project_id","r":true,"sh":"The Neon project ID.","t":"`$STRING`","key$":"project_id","index$":3},"role_name":{"a":true,"de":true,"h":"Role Name","n":"role_name","r":false,"sh":"Deprecated.","t":"`$STRING`","key$":"role_name","index$":4}},"name":"neon_auth_create_integration","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/auth","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/auth","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /projects/auth/create","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/projects/auth/create","q":{},"r":{},"s":[{"lit":"projects"},{"lit":"auth"},{"lit":"create"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /projects/auth/keys","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/projects/auth/keys","q":{},"r":{},"s":[{"lit":"projects"},{"lit":"auth"},{"lit":"keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"neon_auth_create_integration","name__orig":"neon_auth_create_integration","Name":"NeonAuthCreateIntegration","name_":"neon_auth_create_integration","name-":"neon-auth-create-integration","NAME":"NEON_AUTH_CREATE_INTEGRATION","index$":34}, {"active":true,"entity":"neon_auth_create_integration","key$":"BasicNeonAuthCreateIntegrationFlow","kind":"basic","name":"BasicNeonAuthCreateIntegrationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"neon_auth_create_integration_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'NeonAuthCreateIntegration', {"POST /projects/{project_id}/branches/{branch_id}/auth":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["auth_provider"],"x-sensitive":["database_name"],"properties":{"auth_provider":{"description":"Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.","type":"string","enum":["mock","stack","better_auth"],"x-ref":"#/components/schemas/NeonAuthSupportedAuthProvider","key$":"auth_provider"},"database_name":{"type":"string","description":"Name of the database to enable Neon Auth on. When omitted, the integration uses the project's default database.","key$":"database_name"}},"x-ref":"#/components/schemas/EnableNeonAuthIntegrationRequest","index$":1}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"POST /projects/auth/create":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["auth_provider","project_id","branch_id"],"x-sensitive":["database_name"],"properties":{"auth_provider":{"description":"Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.","type":"string","enum":["mock","stack","better_auth"],"x-ref":"#/components/schemas/NeonAuthSupportedAuthProvider","key$":"auth_provider"},"project_id":{"description":"The Neon project ID. Returned as `id` from `GET /projects`.","example":"wispy-forest-12345678","type":"string","pattern":"^[a-z0-9-]{1,60}$","key$":"project_id"},"branch_id":{"description":"The Neon branch ID. Returned as `id` from `GET /projects/{project_id}/branches`.","example":"br-cool-darkness-12345678","type":"string","pattern":"^[a-z0-9-]{1,60}$","key$":"branch_id"},"database_name":{"type":"string","description":"Name of the database to associate with the Neon Auth integration. When omitted, the integration uses the project's default database.","key$":"database_name"},"role_name":{"type":"string","deprecated":true,"description":"Deprecated. The database role for the auth integration. Omit this field; it is ignored.","key$":"role_name"}},"x-ref":"#/components/schemas/NeonAuthCreateIntegrationRequest","index$":1}}},"required":true},"parameters":[]},"POST /projects/auth/keys":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["project_id","auth_provider"],"properties":{"project_id":{"description":"The Neon project ID. Returned as `id` from `GET /projects`.","example":"wispy-forest-12345678","type":"string","pattern":"^[a-z0-9-]{1,60}$","key$":"project_id"},"auth_provider":{"description":"Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.","type":"string","enum":["mock","stack","better_auth"],"x-ref":"#/components/schemas/NeonAuthSupportedAuthProvider","key$":"auth_provider"}},"x-ref":"#/components/schemas/NeonAuthCreateAuthProviderSDKKeysRequest","index$":1}}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const neon_auth_create_integration_ref01_ent = client.NeonAuthCreateIntegration()
    let neon_auth_create_integration_ref01_data = setup.data.new.neon_auth_create_integration['neon_auth_create_integration_ref01']

    neon_auth_create_integration_ref01_data = (await neon_auth_create_integration_ref01_ent.create(neon_auth_create_integration_ref01_data)).data()
    assert(null != neon_auth_create_integration_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/neon_auth_create_integration/NeonAuthCreateIntegrationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = NeonSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['neon_auth_create_integration01','neon_auth_create_integration02','neon_auth_create_integration03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_NEON_AUTH_CREATE_INTEGRATION_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_NEON_AUTH_CREATE_INTEGRATION_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_NEON_AUTH_CREATE_INTEGRATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new NeonSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
