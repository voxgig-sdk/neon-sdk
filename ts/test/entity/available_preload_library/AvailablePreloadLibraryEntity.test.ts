

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


describe('AvailablePreloadLibraryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.AvailablePreloadLibrary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'available_preload_library.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"Human-readable explanation of the library's purpose and behavior.","t":"`$STRING`","key$":"description","index$":0},"is_default":{"a":true,"h":"Is Default","n":"is_default","r":true,"sh":"Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints.","t":"`$BOOLEAN`","key$":"is_default","index$":1},"is_experimental":{"a":true,"h":"Is Experimental","n":"is_experimental","r":true,"sh":"Marks the library as experimental.","t":"`$BOOLEAN`","key$":"is_experimental","index$":2},"library_name":{"a":true,"h":"Library Name","n":"library_name","r":true,"sh":"Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`).","t":"`$STRING`","key$":"library_name","index$":3},"version":{"a":true,"h":"Version","n":"version","r":true,"sh":"Version of the preload library.","t":"`$STRING`","key$":"version","index$":4}},"name":"available_preload_library","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/available_preload_libraries","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/projects/{project_id}/available_preload_libraries","q":{"exist":["project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"available_preload_libraries"}],"t":{"req":"`reqdata`","res":"`body.libraries`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"available_preload_library","name__orig":"available_preload_library","Name":"AvailablePreloadLibrary","name_":"available_preload_library","name-":"available-preload-library","NAME":"AVAILABLE_PRELOAD_LIBRARY","index$":5}, {"active":true,"entity":"available_preload_library","key$":"BasicAvailablePreloadLibraryFlow","kind":"basic","name":"BasicAvailablePreloadLibraryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"available_preload_library_ref01"}}],"index$":0}]}, 'AvailablePreloadLibrary', {"GET /projects/{project_id}/available_preload_libraries":{"protocol":"http","parameters":[{"name":"project_id","in":"path","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let available_preload_library_ref01_data = Object.values(setup.data.existing.available_preload_library)[0] as any

    // LIST
    const available_preload_library_ref01_ent = client.AvailablePreloadLibrary()
    const available_preload_library_ref01_match: any = {}
    available_preload_library_ref01_match['project_id'] = setup.idmap['project01']

    const available_preload_library_ref01_list = (await available_preload_library_ref01_ent.list(available_preload_library_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/available_preload_library/AvailablePreloadLibraryTestData.json')

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
    ['available_preload_library01','available_preload_library02','available_preload_library03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_AVAILABLE_PRELOAD_LIBRARY_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_AVAILABLE_PRELOAD_LIBRARY_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_AVAILABLE_PRELOAD_LIBRARY_ENTID']
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
  
