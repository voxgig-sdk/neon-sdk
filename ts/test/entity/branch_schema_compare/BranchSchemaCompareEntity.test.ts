

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


describe('BranchSchemaCompareEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.BranchSchemaCompare()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'branch_schema_compare.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"branch_schema_compare","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/compare_schema","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"base_branch_id","or":"base_branch_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"base_lsn","or":"base_lsn","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"2022-11-30T20:09:48Z","k":"query","n":"base_timestamp","or":"base_timestamp","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"db_name","or":"db_name","r":true,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"lsn","or":"lsn","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"2022-11-30T20:09:48Z","k":"query","n":"timestamp","or":"timestamp","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/compare_schema","q":{"$action":"compare_schema","exist":["base_branch_id","base_lsn","base_timestamp","db_name","id","lsn","project_id","timestamp"]},"r":{"param":{"branch_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"id"},{"lit":"compare_schema"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"branch_schema_compare","name__orig":"branch_schema_compare","Name":"BranchSchemaCompare","name_":"branch_schema_compare","name-":"branch-schema-compare","NAME":"BRANCH_SCHEMA_COMPARE","index$":11}, {"active":true,"entity":"branch_schema_compare","key$":"BasicBranchSchemaCompareFlow","kind":"basic","name":"BasicBranchSchemaCompareFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"branch_schema_compare_ref01","srcdatavar":"branch_schema_compare_ref01_data","suffix":"_dt0"},"m":{"id":"branch_schema_compare01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-branch_schema_compare_ref01"}}],"index$":0}]}, 'BranchSchemaCompare', {"GET /projects/{project_id}/branches/{branch_id}/compare_schema":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"base_branch_id","in":"query","description":"The branch ID to compare the schema with","required":false,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":2},{"name":"db_name","in":"query","description":"Name of the database for which the schema is retrieved","required":true,"schema":{"type":"string"},"index$":3},{"name":"lsn","in":"query","description":"The Log Sequence Number (LSN) for which the schema is retrieved\n","schema":{"type":"string"},"index$":4},{"name":"timestamp","in":"query","description":"The point in time for which the schema is retrieved\n","schema":{"type":"string","format":"date-time","example":"2022-11-30T20:09:48Z"},"index$":5},{"name":"base_lsn","in":"query","description":"The Log Sequence Number (LSN) for the base branch schema\n","schema":{"type":"string"},"index$":6},{"name":"base_timestamp","in":"query","description":"The point in time for the base branch schema\n","schema":{"type":"string","format":"date-time","example":"2022-11-30T20:09:48Z"},"index$":7}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let branch_schema_compare_ref01_data = Object.values(setup.data.existing.branch_schema_compare)[0] as any

    // LOAD
    const branch_schema_compare_ref01_ent = client.BranchSchemaCompare()
    const branch_schema_compare_ref01_match_dt0: any = {}
    branch_schema_compare_ref01_match_dt0.id = branch_schema_compare_ref01_data.id
    const branch_schema_compare_ref01_data_dt0 = (await branch_schema_compare_ref01_ent.load(branch_schema_compare_ref01_match_dt0)).data()
    assert(branch_schema_compare_ref01_data_dt0.id === branch_schema_compare_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/branch_schema_compare/BranchSchemaCompareTestData.json')

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
    ['branch_schema_compare01','branch_schema_compare02','branch_schema_compare03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_BRANCH_SCHEMA_COMPARE_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_BRANCH_SCHEMA_COMPARE_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_BRANCH_SCHEMA_COMPARE_ENTID']
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
  
