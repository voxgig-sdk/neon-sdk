

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


describe('ApiKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.ApiKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create', 'list', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"A timestamp indicating when the API key was created","t":"`$STRING`","key$":"created_at","index$":0},"created_by":{"a":true,"fo":"uuid","h":"Created By","n":"created_by","r":true,"sh":"ID of the user who created this API key","t":"`$STRING`","key$":"created_by","index$":1},"id":{"a":true,"fo":"int64","h":"Id","n":"id","r":true,"sh":"The API key's unique numeric ID.","t":"`$INTEGER`","key$":"id","index$":2},"key":{"a":true,"h":"Key","n":"key","r":true,"sh":"The generated 64-bit token required to access the Neon API","t":"`$STRING`","key$":"key","index$":3},"key_name":{"a":true,"h":"Key Name","n":"key_name","r":true,"sh":"A user-specified API key name.","t":"`$STRING`","key$":"key_name","index$":4},"last_used_at":{"a":true,"fo":"date-time","h":"Last Used At","n":"last_used_at","r":false,"sh":"A timestamp indicating when the API was last used","t":"`$STRING`","key$":"last_used_at","index$":5},"last_used_from_addr":{"a":true,"h":"Last Used From Addr","n":"last_used_from_addr","r":true,"sh":"The IP address from which the API key was last used","t":"`$STRING`","key$":"last_used_from_addr","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The user-specified API key name","t":"`$STRING`","key$":"name","index$":7}},"id":{"field":"id","name":"id"},"name":"api_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api_keys","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api_keys","q":{},"r":{},"s":[{"lit":"api_keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api_keys","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api_keys","q":{},"r":{},"s":[{"lit":"api_keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api_keys/{key_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api_keys/{key_id}","q":{"exist":["id"]},"r":{"param":{"key_id":"id"}},"s":[{"lit":"api_keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"api_key","name__orig":"api_key","Name":"ApiKey","name_":"api_key","name-":"api-key","NAME":"API_KEY","index$":2}, {"active":true,"entity":"api_key","key$":"BasicApiKeyFlow","kind":"basic","name":"BasicApiKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_key_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_key_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"api_key_ref01","suffix":"_rm0"},"m":{"id":"api_key01"},"o":"remove","s":[],"v":[],"index$":2},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"api_key_ref01"}}],"index$":3}]}, 'ApiKey', {"POST /api_keys":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["key_name"],"properties":{"key_name":{"type":"string","description":"A user-specified API key name. This value is required when creating an API key.","maxLength":64,"key$":"key_name"}},"x-ref":"#/components/schemas/ApiKeyCreateRequest","index$":1},"example":{"key_name":"mykey"}}},"required":true},"parameters":[]},"GET /api_keys":{"protocol":"http","parameters":[]},"DELETE /api_keys/{key_id}":{"protocol":"http","parameters":[{"name":"key_id","in":"path","description":"The API key ID","required":true,"schema":{"type":"integer","format":"int64"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_key_ref01_ent = client.ApiKey()
    let api_key_ref01_data = setup.data.new.api_key['api_key_ref01']

    api_key_ref01_data = (await api_key_ref01_ent.create(api_key_ref01_data)).data()
    assert(null != api_key_ref01_data.id)


    // LIST
    const api_key_ref01_match: any = {}

    const api_key_ref01_list = (await api_key_ref01_ent.list(api_key_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_key_ref01_list, { id: api_key_ref01_data.id })))


    // REMOVE
    const api_key_ref01_match_rm0: any = { id: api_key_ref01_data.id }
    await api_key_ref01_ent.remove(api_key_ref01_match_rm0)
  

    // LIST
    const api_key_ref01_match_rt0: any = {}

    const api_key_ref01_list_rt0 = (await api_key_ref01_ent.list(api_key_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(api_key_ref01_list_rt0, { id: api_key_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_key/ApiKeyTestData.json')

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
    ['api_key01','api_key02','api_key03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_API_KEY_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_API_KEY_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_API_KEY_ENTID']
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
  
