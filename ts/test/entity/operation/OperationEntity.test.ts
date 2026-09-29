

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


describe('OperationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.Operation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'operation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action":{"a":true,"h":"Action","n":"action","r":true,"sh":"The action performed by the operation","t":"`$STRING`","key$":"action","index$":0},"branch_id":{"a":true,"h":"Branch Id","n":"branch_id","r":false,"sh":"The ID of the branch this operation ran on.","t":"`$STRING`","key$":"branch_id","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"A timestamp indicating when the operation was created","t":"`$STRING`","key$":"created_at","index$":2},"endpoint_id":{"a":true,"h":"Endpoint Id","n":"endpoint_id","r":false,"sh":"The ID of the compute endpoint this operation ran on.","t":"`$STRING`","key$":"endpoint_id","index$":3},"error":{"a":true,"h":"Error","n":"error","r":false,"sh":"Human-readable message describing why the operation failed.","t":"`$STRING`","key$":"error","index$":4},"failures_count":{"a":true,"fo":"int32","h":"Failures Count","n":"failures_count","r":true,"sh":"The number of times the operation failed","t":"`$INTEGER`","key$":"failures_count","index$":5},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"The operation ID","t":"`$STRING`","key$":"id","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name for the replaced branch.","t":"`$STRING`","key$":"name","index$":7},"operations":{"a":true,"h":"Operations","n":"operations","r":true,"t":"`$ARRAY`","key$":"operations","index$":8},"project_id":{"a":true,"h":"Project Id","n":"project_id","r":true,"sh":"The ID of the project this operation ran on.","t":"`$STRING`","key$":"project_id","index$":9},"retry_at":{"a":true,"fo":"date-time","h":"Retry At","n":"retry_at","r":false,"sh":"A timestamp indicating when the operation was last retried","t":"`$STRING`","key$":"retry_at","index$":10},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current lifecycle state of the operation.","t":"`$STRING`","key$":"status","index$":11},"total_duration_ms":{"a":true,"fo":"int32","h":"Total Duration Ms","n":"total_duration_ms","r":true,"sh":"The total duration of the operation in milliseconds","t":"`$INTEGER`","key$":"total_duration_ms","index$":12},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"A timestamp indicating when the operation status was last updated","t":"`$STRING`","key$":"updated_at","index$":13}},"id":{"field":"id","name":"id"},"name":"operation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/finalize_restore","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/finalize_restore","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"finalize_restore"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/operations","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/operations","q":{"exist":["cursor","limit","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"operations"}],"t":{"req":"`reqdata`","res":"`body.operations`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/operations/{operation_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"operation_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/operations/{operation_id}","q":{"exist":["id","project_id"]},"r":{"param":{"operation_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"operations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.operation`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"operation","name__orig":"operation","Name":"Operation","name_":"operation","name-":"operation","NAME":"OPERATION","index$":49}, {"active":true,"entity":"operation","key$":"BasicOperationFlow","kind":"basic","name":"BasicOperationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"operation_ref01"},"m":{"branch_id":"branch01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"operation_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"operation_ref01","srcdatavar":"operation_ref01_data","suffix":"_dt0"},"m":{"id":"operation01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-operation_ref01"}}],"index$":2}]}, 'Operation', {"POST /projects/{project_id}/branches/{branch_id}/finalize_restore":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name for the replaced branch. If omitted, a unique name is generated.","key$":"name"}},"index$":1}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"GET /projects/{project_id}/operations":{"protocol":"http","parameters":[{"name":"cursor","description":"Specify the cursor value from the previous response to get the next batch of operations","in":"query","schema":{"type":"string"},"index$":0},{"name":"limit","description":"Specify a value from 1 to 1000 to limit number of operations in the response","in":"query","schema":{"type":"integer","minimum":1,"maximum":1000},"index$":1},{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":2}]},"GET /projects/{project_id}/operations/{operation_id}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"operation_id","in":"path","description":"The operation ID","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const operation_ref01_ent = client.Operation()
    let operation_ref01_data = setup.data.new.operation['operation_ref01']
    operation_ref01_data['branch_id'] = setup.idmap['branch01']
    operation_ref01_data['project_id'] = setup.idmap['project01']

    operation_ref01_data = (await operation_ref01_ent.create(operation_ref01_data)).data()
    assert(null != operation_ref01_data.id)


    // LIST
    const operation_ref01_match: any = {}
    operation_ref01_match['project_id'] = setup.idmap['project01']

    const operation_ref01_list = (await operation_ref01_ent.list(operation_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(operation_ref01_list, { id: operation_ref01_data.id })))


    // LOAD
    const operation_ref01_match_dt0: any = {}
    operation_ref01_match_dt0.id = operation_ref01_data.id
    const operation_ref01_data_dt0 = (await operation_ref01_ent.load(operation_ref01_match_dt0)).data()
    assert(operation_ref01_data_dt0.id === operation_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/operation/OperationTestData.json')

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
    ['operation01','operation02','operation03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_OPERATION_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_OPERATION_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_OPERATION_ENTID']
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
  
