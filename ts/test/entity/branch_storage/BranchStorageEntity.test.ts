

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


describe('BranchStorageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.BranchStorage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'branch_storage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"Always `true` in 200 responses.","t":"`$BOOLEAN`","key$":"enabled","index$":0},"force_path_style":{"a":true,"h":"Force Path Style","n":"force_path_style","r":true,"sh":"Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain).","t":"`$BOOLEAN`","key$":"force_path_style","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"region":{"a":true,"h":"Region","n":"region","r":true,"sh":"The AWS region for this branch's object storage.","t":"`$STRING`","key$":"region","index$":3},"s3_endpoint":{"a":true,"fo":"uri","h":"S3 Endpoint","n":"s3_endpoint","r":true,"sh":"The S3-compatible endpoint URL for this branch.","t":"`$STRING`","key$":"s3_endpoint","index$":4}},"id":{"field":"id","name":"id"},"name":"branch_storage","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/storage","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/storage","q":{"exist":["id","project_id"]},"r":{"param":{"branch_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"id"},{"lit":"storage"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"branch_storage","name__orig":"branch_storage","Name":"BranchStorage","name_":"branch_storage","name-":"branch-storage","NAME":"BRANCH_STORAGE","index$":12}, {"active":true,"entity":"branch_storage","key$":"BasicBranchStorageFlow","kind":"basic","name":"BasicBranchStorageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"branch_storage_ref01","srcdatavar":"branch_storage_ref01_data","suffix":"_dt0"},"m":{"id":"branch_storage01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-branch_storage_ref01"}}],"index$":0}]}, 'BranchStorage', {"GET /projects/{project_id}/branches/{branch_id}/storage":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let branch_storage_ref01_data = Object.values(setup.data.existing.branch_storage)[0] as any

    // LOAD
    const branch_storage_ref01_ent = client.BranchStorage()
    const branch_storage_ref01_match_dt0: any = {}
    branch_storage_ref01_match_dt0.id = branch_storage_ref01_data.id
    const branch_storage_ref01_data_dt0 = (await branch_storage_ref01_ent.load(branch_storage_ref01_match_dt0)).data()
    assert(branch_storage_ref01_data_dt0.id === branch_storage_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/branch_storage/BranchStorageTestData.json')

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
    ['branch_storage01','branch_storage02','branch_storage03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_BRANCH_STORAGE_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_BRANCH_STORAGE_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_BRANCH_STORAGE_ENTID']
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
  
