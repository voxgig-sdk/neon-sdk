

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


describe('CurrentUserInfoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.CurrentUserInfo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'current_user_info.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"email":{"a":true,"fo":"email","h":"Email","n":"email","r":true,"sh":"Email address associated with this auth account.","t":"`$STRING`","key$":"email","index$":0},"image":{"a":true,"h":"Image","n":"image","r":true,"sh":"URL of the user's profile picture as provided by the identity provider.","t":"`$STRING`","key$":"image","index$":1},"login":{"a":true,"de":true,"h":"Login","n":"login","r":true,"sh":"Deprecated.","t":"`$STRING`","key$":"login","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Display name of the account as provided by the identity provider.","t":"`$STRING`","key$":"name","index$":3},"provider":{"a":true,"h":"Provider","n":"provider","r":true,"sh":"Identity provider id from keycloak","t":"`$STRING`","key$":"provider","index$":4}},"name":"current_user_info","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /users/me","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/users/me","q":{},"r":{},"s":[{"lit":"users"},{"lit":"me"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"current_user_info","name__orig":"current_user_info","Name":"CurrentUserInfo","name_":"current_user_info","name-":"current-user-info","NAME":"CURRENT_USER_INFO","index$":19}, {"active":true,"entity":"current_user_info","key$":"BasicCurrentUserInfoFlow","kind":"basic","name":"BasicCurrentUserInfoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"current_user_info_ref01"}}],"index$":0}]}, 'CurrentUserInfo', {"GET /users/me":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let current_user_info_ref01_data = Object.values(setup.data.existing.current_user_info)[0] as any

    // LIST
    const current_user_info_ref01_ent = client.CurrentUserInfo()
    const current_user_info_ref01_match: any = {}

    const current_user_info_ref01_list = (await current_user_info_ref01_ent.list(current_user_info_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/current_user_info/CurrentUserInfoTestData.json')

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
    ['current_user_info01','current_user_info02','current_user_info03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_CURRENT_USER_INFO_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_CURRENT_USER_INFO_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_CURRENT_USER_INFO_ENTID']
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
  
