

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


describe('OrgApiKeysListResponseItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.OrgApiKeysListResponseItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'org_api_keys_list_response_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"A timestamp indicating when the API key was created","t":"`$STRING`","key$":"created_at","index$":0},"created_by":{"a":true,"h":"Created By","n":"created_by","r":true,"sh":"The user data of the user that created this API key.","t":"`$OBJECT`","key$":"created_by","index$":1},"id":{"a":true,"fo":"int64","h":"Id","n":"id","r":true,"sh":"The API key's unique numeric ID.","t":"`$INTEGER`","key$":"id","index$":2},"last_used_at":{"a":true,"fo":"date-time","h":"Last Used At","n":"last_used_at","r":false,"sh":"A timestamp indicating when the API was last used","t":"`$STRING`","key$":"last_used_at","index$":3},"last_used_from_addr":{"a":true,"h":"Last Used From Addr","n":"last_used_from_addr","r":true,"sh":"The IP address from which the API key was last used","t":"`$STRING`","key$":"last_used_from_addr","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The user-specified API key name","t":"`$STRING`","key$":"name","index$":5},"project_id":{"a":true,"h":"Project Id","n":"project_id","r":false,"sh":"If set, the API key can access only this project","t":"`$STRING`","key$":"project_id","index$":6}},"id":{"field":"id","name":"id"},"name":"org_api_keys_list_response_item","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /organizations/{org_id}/api_keys","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/organizations/{org_id}/api_keys","q":{"exist":["organization_id"]},"r":{"param":{"org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"api_keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.organization"]]},"key$":"org_api_keys_list_response_item","name__orig":"org_api_keys_list_response_item","Name":"OrgApiKeysListResponseItem","name_":"org_api_keys_list_response_item","name-":"org-api-keys-list-response-item","NAME":"ORG_API_KEYS_LIST_RESPONSE_ITEM","index$":52}, {"active":true,"entity":"org_api_keys_list_response_item","key$":"BasicOrgApiKeysListResponseItemFlow","kind":"basic","name":"BasicOrgApiKeysListResponseItemFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"organization_id":"organization01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"org_api_keys_list_response_item_ref01"}}],"index$":0}]}, 'OrgApiKeysListResponseItem', {"GET /organizations/{org_id}/api_keys":{"protocol":"http","parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let org_api_keys_list_response_item_ref01_data = Object.values(setup.data.existing.org_api_keys_list_response_item)[0] as any

    // LIST
    const org_api_keys_list_response_item_ref01_ent = client.OrgApiKeysListResponseItem()
    const org_api_keys_list_response_item_ref01_match: any = {}
    org_api_keys_list_response_item_ref01_match['organization_id'] = setup.idmap['organization01']

    const org_api_keys_list_response_item_ref01_list = (await org_api_keys_list_response_item_ref01_ent.list(org_api_keys_list_response_item_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/org_api_keys_list_response_item/OrgApiKeysListResponseItemTestData.json')

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
    ['org_api_keys_list_response_item01','org_api_keys_list_response_item02','org_api_keys_list_response_item03','organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_ORG_API_KEYS_LIST_RESPONSE_ITEM_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_ORG_API_KEYS_LIST_RESPONSE_ITEM_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_ORG_API_KEYS_LIST_RESPONSE_ITEM_ENTID']
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
  
