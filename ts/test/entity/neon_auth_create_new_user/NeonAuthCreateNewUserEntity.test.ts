

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


describe('NeonAuthCreateNewUserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.NeonAuthCreateNewUser()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'neon_auth_create_new_user.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"auth_provider":{"a":true,"h":"Auth Provider","n":"auth_provider","r":true,"sh":"Authentication provider integrated with this Neon Auth configuration.","t":"`$STRING`","key$":"auth_provider","index$":0},"email":{"a":true,"fo":"email","h":"Email","n":"email","r":true,"sh":"Email address of the new Neon Auth user to create.","t":"`$STRING`","key$":"email","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Display name for the new user.","t":"`$STRING`","key$":"name","index$":2},"project_id":{"a":true,"h":"Project Id","n":"project_id","r":true,"sh":"The Neon project ID.","t":"`$STRING`","key$":"project_id","index$":3}},"name":"neon_auth_create_new_user","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/auth/users","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/auth/users","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"users"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /projects/auth/user","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/projects/auth/user","q":{},"r":{},"s":[{"lit":"projects"},{"lit":"auth"},{"lit":"user"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"neon_auth_create_new_user","name__orig":"neon_auth_create_new_user","Name":"NeonAuthCreateNewUser","name_":"neon_auth_create_new_user","name-":"neon-auth-create-new-user","NAME":"NEON_AUTH_CREATE_NEW_USER","index$":35}, {"active":true,"entity":"neon_auth_create_new_user","key$":"BasicNeonAuthCreateNewUserFlow","kind":"basic","name":"BasicNeonAuthCreateNewUserFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"neon_auth_create_new_user_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'NeonAuthCreateNewUser', {"POST /projects/{project_id}/branches/{branch_id}/auth/users":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["email"],"x-sensitive":["email","name"],"properties":{"email":{"description":"Email address of the new Neon Auth user to create.","type":"string","format":"email","minLength":1,"maxLength":256,"key$":"email"},"name":{"type":"string","minLength":1,"maxLength":255,"description":"Display name for the new user. Optional. Pair with the required email field when creating a new user.","key$":"name"}},"x-ref":"#/components/schemas/CreateBranchNeonAuthNewUserRequest","index$":1}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"POST /projects/auth/user":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["project_id","auth_provider","email"],"x-sensitive":["email","name"],"properties":{"project_id":{"description":"The Neon project ID. Returned as `id` from `GET /projects`.","type":"string","pattern":"^[a-z0-9-]{1,60}$","key$":"project_id"},"auth_provider":{"description":"Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.","type":"string","enum":["mock","stack","better_auth"],"x-ref":"#/components/schemas/NeonAuthSupportedAuthProvider","key$":"auth_provider"},"email":{"description":"Email address of the new user.","type":"string","format":"email","minLength":1,"maxLength":256,"key$":"email"},"name":{"type":"string","minLength":1,"maxLength":255,"description":"Display name for the new user. When omitted, the created user has no display name.","key$":"name"}},"x-ref":"#/components/schemas/NeonAuthCreateNewUserRequest","index$":1}}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const neon_auth_create_new_user_ref01_ent = client.NeonAuthCreateNewUser()
    let neon_auth_create_new_user_ref01_data = setup.data.new.neon_auth_create_new_user['neon_auth_create_new_user_ref01']

    neon_auth_create_new_user_ref01_data = (await neon_auth_create_new_user_ref01_ent.create(neon_auth_create_new_user_ref01_data)).data()
    assert(null != neon_auth_create_new_user_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/neon_auth_create_new_user/NeonAuthCreateNewUserTestData.json')

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
    ['neon_auth_create_new_user01','neon_auth_create_new_user02','neon_auth_create_new_user03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_NEON_AUTH_CREATE_NEW_USER_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_NEON_AUTH_CREATE_NEW_USER_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_NEON_AUTH_CREATE_NEW_USER_ENTID']
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
  
