

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


describe('NeonAuthPluginConfigEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.NeonAuthPluginConfig()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'neon_auth_plugin_config.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"client_id":{"a":true,"h":"Client Id","n":"client_id","r":false,"sh":"Public identifier for the OAuth application, issued by the provider when the application is registered.","t":"`$STRING`","key$":"client_id","index$":0},"client_secret":{"a":true,"h":"Client Secret","n":"client_secret","r":false,"sh":"OAuth client secret for the provider.","t":"`$STRING`","key$":"client_secret","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The OAuth provider's ID.","t":"`$STRING`","key$":"id","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"OAuth provider key type.","t":"`$STRING`","key$":"type","index$":3}},"id":{"field":"id","name":"id"},"name":"neon_auth_plugin_config","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/auth/plugins","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/auth/plugins","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"plugins"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"neon_auth_plugin_config","name__orig":"neon_auth_plugin_config","Name":"NeonAuthPluginConfig","name_":"neon_auth_plugin_config","name-":"neon-auth-plugin-config","NAME":"NEON_AUTH_PLUGIN_CONFIG","index$":43}, {"active":true,"entity":"neon_auth_plugin_config","key$":"BasicNeonAuthPluginConfigFlow","kind":"basic","name":"BasicNeonAuthPluginConfigFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"branch_id":"branch01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"neon_auth_plugin_config_ref01"}}],"index$":0}]}, 'NeonAuthPluginConfig', {"GET /projects/{project_id}/branches/{branch_id}/auth/plugins":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let neon_auth_plugin_config_ref01_data = Object.values(setup.data.existing.neon_auth_plugin_config)[0] as any

    // LIST
    const neon_auth_plugin_config_ref01_ent = client.NeonAuthPluginConfig()
    const neon_auth_plugin_config_ref01_match: any = {}
    neon_auth_plugin_config_ref01_match['branch_id'] = setup.idmap['branch01']
    neon_auth_plugin_config_ref01_match['project_id'] = setup.idmap['project01']

    const neon_auth_plugin_config_ref01_list = (await neon_auth_plugin_config_ref01_ent.list(neon_auth_plugin_config_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/neon_auth_plugin_config/NeonAuthPluginConfigTestData.json')

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
    ['neon_auth_plugin_config01','neon_auth_plugin_config02','neon_auth_plugin_config03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_NEON_AUTH_PLUGIN_CONFIG_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_NEON_AUTH_PLUGIN_CONFIG_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_NEON_AUTH_PLUGIN_CONFIG_ENTID']
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
  
