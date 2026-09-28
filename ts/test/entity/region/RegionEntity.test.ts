

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


describe('RegionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.Region()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'region.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"default":{"a":true,"h":"Default","n":"default","r":true,"sh":"True if this region is selected by default when no region is specified during project creation.","t":"`$BOOLEAN`","key$":"default","index$":0},"geo_lat":{"a":true,"h":"Geo Lat","n":"geo_lat","r":true,"sh":"The geographical latitude (approximate) for the region.","t":"`$STRING`","key$":"geo_lat","index$":1},"geo_long":{"a":true,"h":"Geo Long","n":"geo_long","r":true,"sh":"The geographical longitude (approximate) for the region.","t":"`$STRING`","key$":"geo_long","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"A short description of the region.","t":"`$STRING`","key$":"name","index$":3},"region_id":{"a":true,"h":"Region Id","n":"region_id","r":true,"sh":"Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`).","t":"`$STRING`","key$":"region_id","index$":4}},"name":"region","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /regions","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"org_id","or":"org_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/regions","q":{"exist":["org_id"]},"r":{},"s":[{"lit":"regions"}],"t":{"req":"`reqdata`","res":"`body.regions`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"region","name__orig":"region","Name":"Region","name_":"region","name-":"region","NAME":"REGION","index$":65}, {"active":true,"entity":"region","key$":"BasicRegionFlow","kind":"basic","name":"BasicRegionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"region_ref01"}}],"index$":0}]}, 'Region', {"GET /regions":{"protocol":"http","parameters":[{"name":"org_id","description":"Organization ID. When provided, returns only regions available to this organization.\nRecommended for accurate region availability.\n","in":"query","required":false,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let region_ref01_data = Object.values(setup.data.existing.region)[0] as any

    // LIST
    const region_ref01_ent = client.Region()
    const region_ref01_match: any = {}

    const region_ref01_list = (await region_ref01_ent.list(region_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/region/RegionTestData.json')

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
    ['region01','region02','region03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_REGION_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_REGION_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_REGION_ENTID']
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
  
