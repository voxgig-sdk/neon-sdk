

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


describe('OrgApiKeyCreateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.OrgApiKeyCreate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'org_api_key_create.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":0},"created_by":{"a":true,"h":"Created By","n":"created_by","r":false,"t":"`$STRING`","key$":"created_by","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":2},"key":{"a":true,"h":"Key","n":"key","r":false,"t":"`$STRING`","key$":"key","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":4}},"id":{"field":"id","name":"id"},"name":"org_api_key_create","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /organizations/{org_id}/api_keys","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/organizations/{org_id}/api_keys","q":{"exist":["organization_id"]},"r":{"param":{"org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"api_keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.organization"]]},"key$":"org_api_key_create","name__orig":"org_api_key_create","Name":"OrgApiKeyCreate","name_":"org_api_key_create","name-":"org-api-key-create","NAME":"ORG_API_KEY_CREATE","index$":50}, {"active":true,"entity":"org_api_key_create","key$":"BasicOrgApiKeyCreateFlow","kind":"basic","name":"BasicOrgApiKeyCreateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"org_api_key_create_ref01"},"m":{"organization_id":"organization01"},"o":"create","s":[],"v":[],"index$":0}]}, 'OrgApiKeyCreate', {"POST /organizations/{org_id}/api_keys":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"type":"object","required":["key_name"],"properties":{"key_name":{"type":"string","description":"A user-specified API key name. This value is required when creating an API key.","maxLength":64,"key$":"key_name"}},"x-ref":"#/components/schemas/ApiKeyCreateRequest"},{"type":"object","properties":{"project_id":{"description":"If set, the API key can access only this project","type":"string","pattern":"^[a-z0-9-]{1,60}$"}}}],"x-ref":"#/components/schemas/OrgApiKeyCreateRequest","index$":1},"example":{"key_name":"orgkey"}}},"required":true},"parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const org_api_key_create_ref01_ent = client.OrgApiKeyCreate()
    let org_api_key_create_ref01_data = setup.data.new.org_api_key_create['org_api_key_create_ref01']
    org_api_key_create_ref01_data['organization_id'] = setup.idmap['organization01']

    org_api_key_create_ref01_data = (await org_api_key_create_ref01_ent.create(org_api_key_create_ref01_data)).data()
    assert(null != org_api_key_create_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/org_api_key_create/OrgApiKeyCreateTestData.json')

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
    ['org_api_key_create01','org_api_key_create02','org_api_key_create03','organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_ORG_API_KEY_CREATE_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_ORG_API_KEY_CREATE_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_ORG_API_KEY_CREATE_ENTID']
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
  
