

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


describe('NeonAuthMagicLinkConfigEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.NeonAuthMagicLinkConfig()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'neon_auth_magic_link_config.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"disable_sign_up":{"a":true,"h":"Disable Sign Up","n":"disable_sign_up","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether to disable sign-up via magic link.","t":"`$BOOLEAN`","key$":"disable_sign_up","index$":0},"enabled":{"a":true,"h":"Enabled","n":"enabled","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether the magic link plugin is enabled.","t":"`$BOOLEAN`","key$":"enabled","index$":1},"expires_in":{"a":true,"fo":"int32","h":"Expires In","n":"expires_in","op":{"update":{"req":false,"type":"`$INTEGER`"}},"r":true,"sh":"Minutes until the magic link expires.","t":"`$INTEGER`","key$":"expires_in","index$":2}},"name":"neon_auth_magic_link_config","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /projects/{project_id}/branches/{branch_id}/auth/plugins/magic-link","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/projects/{project_id}/branches/{branch_id}/auth/plugins/magic-link","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"plugins"},{"lit":"magic-link"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"neon_auth_magic_link_config","name__orig":"neon_auth_magic_link_config","Name":"NeonAuthMagicLinkConfig","name_":"neon_auth_magic_link_config","name-":"neon-auth-magic-link-config","NAME":"NEON_AUTH_MAGIC_LINK_CONFIG","index$":39}, {"active":true,"entity":"neon_auth_magic_link_config","key$":"BasicNeonAuthMagicLinkConfigFlow","kind":"basic","name":"BasicNeonAuthMagicLinkConfigFlow","param":{},"step":[{"a":true,"d":{"project_id":"project01"},"i":{"ref":"neon_auth_magic_link_config_ref01","srcdatavar":"neon_auth_magic_link_config_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-neon_auth_magic_link_config_ref01"}}],"v":[],"index$":0}]}, 'NeonAuthMagicLinkConfig', {"PATCH /projects/{project_id}/branches/{branch_id}/auth/plugins/magic-link":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"enabled":{"type":"boolean","description":"Whether to enable the magic link plugin.","key$":"enabled"},"expires_in":{"type":"integer","format":"int32","minimum":5,"maximum":1440,"description":"Minutes until the magic link expires.","key$":"expires_in"},"disable_sign_up":{"type":"boolean","description":"When true, sign-up via magic link is disabled.","key$":"disable_sign_up"}},"x-ref":"#/components/schemas/NeonAuthMagicLinkConfigUpdate","index$":1}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let neon_auth_magic_link_config_ref01_data = Object.values(setup.data.existing.neon_auth_magic_link_config)[0] as any

    // UPDATE
    const neon_auth_magic_link_config_ref01_ent = client.NeonAuthMagicLinkConfig()
    const neon_auth_magic_link_config_ref01_data_up0: any = {}
    neon_auth_magic_link_config_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const neon_auth_magic_link_config_ref01_resdata_up0 = (await neon_auth_magic_link_config_ref01_ent.update(neon_auth_magic_link_config_ref01_data_up0)).data()
    assert(null != neon_auth_magic_link_config_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/neon_auth_magic_link_config/NeonAuthMagicLinkConfigTestData.json')

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
    ['neon_auth_magic_link_config01','neon_auth_magic_link_config02','neon_auth_magic_link_config03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_NEON_AUTH_MAGIC_LINK_CONFIG_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_NEON_AUTH_MAGIC_LINK_CONFIG_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_NEON_AUTH_MAGIC_LINK_CONFIG_ENTID']
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
  
