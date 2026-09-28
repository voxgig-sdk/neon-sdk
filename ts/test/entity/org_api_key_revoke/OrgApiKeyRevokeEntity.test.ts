

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


describe('OrgApiKeyRevokeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.OrgApiKeyRevoke()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'org_api_key_revoke.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"org_api_key_revoke","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /organizations/{org_id}/api_keys/{key_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"key_id","or":"key_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/organizations/{org_id}/api_keys/{key_id}","q":{"exist":["key_id","organization_id"]},"r":{"param":{"org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"api_keys"},{"var":"key_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.organization","$.main.kit.entity.api_key"]]},"key$":"org_api_key_revoke","name__orig":"org_api_key_revoke","Name":"OrgApiKeyRevoke","name_":"org_api_key_revoke","name-":"org-api-key-revoke","NAME":"ORG_API_KEY_REVOKE","index$":51}, {"active":true,"entity":"org_api_key_revoke","key$":"BasicOrgApiKeyRevokeFlow","kind":"basic","name":"BasicOrgApiKeyRevokeFlow","param":{},"step":[]}, 'OrgApiKeyRevoke', {"DELETE /organizations/{org_id}/api_keys/{key_id}":{"protocol":"http","parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"key_id","in":"path","description":"The API key ID","required":true,"schema":{"type":"integer","format":"int64"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let org_api_key_revoke_ref01_data = Object.values(setup.data.existing.org_api_key_revoke)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/org_api_key_revoke/OrgApiKeyRevokeTestData.json')

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
    ['org_api_key_revoke01','org_api_key_revoke02','org_api_key_revoke03','organization01','organization02','organization03','api_key01','api_key02','api_key03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_ORG_API_KEY_REVOKE_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_ORG_API_KEY_REVOKE_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_ORG_API_KEY_REVOKE_ENTID']
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
  
