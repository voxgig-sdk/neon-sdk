

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


describe('BucketObjectsListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.BucketObjectsList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bucket_objects_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"etag":{"a":true,"h":"Etag","n":"etag","r":true,"sh":"The object's entity tag (content hash).","t":"`$STRING`","key$":"etag","index$":0},"key":{"a":true,"h":"Key","n":"key","r":true,"sh":"The full object key.","t":"`$STRING`","key$":"key","index$":1},"last_modified":{"a":true,"fo":"date-time","h":"Last Modified","n":"last_modified","r":true,"sh":"The time the object was last modified.","t":"`$STRING`","key$":"last_modified","index$":2},"size":{"a":true,"fo":"int64","h":"Size","n":"size","r":true,"sh":"The object size in bytes.","t":"`$INTEGER`","key$":"size","index$":3}},"name":"bucket_objects_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"bucket_name","or":"bucket_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"delimiter","or":"delimiter","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1000,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"prefix","or":"prefix","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects","q":{"exist":["branch_id","bucket_name","cursor","delimiter","limit","prefix","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"buckets"},{"var":"bucket_name"},{"lit":"objects"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch","$.main.kit.entity.bucket"]]},"key$":"bucket_objects_list","name__orig":"bucket_objects_list","Name":"BucketObjectsList","name_":"bucket_objects_list","name-":"bucket-objects-list","NAME":"BUCKET_OBJECTS_LIST","index$":14}, {"active":true,"entity":"bucket_objects_list","key$":"BasicBucketObjectsListFlow","kind":"basic","name":"BasicBucketObjectsListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"branch_id":"branch01","bucket_name":"bucket_name01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"bucket_objects_list_ref01"}}],"index$":0}]}, 'BucketObjectsList', {"GET /projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"bucket_name","in":"path","description":"The bucket name","required":true,"schema":{"type":"string","minLength":1,"maxLength":255},"index$":2},{"name":"prefix","in":"query","description":"Only list objects whose key starts with this prefix.","required":false,"schema":{"type":"string"},"index$":3},{"name":"delimiter","in":"query","description":"Collapse keys sharing a common prefix up to the first occurrence of\nthis delimiter (typically `/`) into the `folders` array.\n","required":false,"schema":{"type":"string"},"index$":4},{"name":"cursor","in":"query","description":"Opaque pagination cursor returned as `next_cursor` by a previous\ncall. Resume listing after the last item of the previous page.\n","required":false,"schema":{"type":"string"},"index$":5},{"name":"limit","in":"query","description":"Maximum number of items (objects + folders) to return.","required":false,"schema":{"type":"integer","format":"int32","minimum":1,"maximum":1000,"default":1000},"index$":6}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bucket_objects_list_ref01_data = Object.values(setup.data.existing.bucket_objects_list)[0] as any

    // LIST
    const bucket_objects_list_ref01_ent = client.BucketObjectsList()
    const bucket_objects_list_ref01_match: any = {}
    bucket_objects_list_ref01_match['branch_id'] = setup.idmap['branch01']
    bucket_objects_list_ref01_match['bucket_name'] = setup.idmap['bucket_name01']
    bucket_objects_list_ref01_match['project_id'] = setup.idmap['project01']

    const bucket_objects_list_ref01_list = (await bucket_objects_list_ref01_ent.list(bucket_objects_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bucket_objects_list/BucketObjectsListTestData.json')

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
    ['bucket_objects_list01','bucket_objects_list02','bucket_objects_list03','project01','project02','project03','branch01','branch02','branch03','bucket01','bucket02','bucket03','bucket_name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_BUCKET_OBJECTS_LIST_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_BUCKET_OBJECTS_LIST_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_BUCKET_OBJECTS_LIST_ENTID']
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
  
