

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


describe('EndpointOperationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.EndpointOperation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'endpoint_operation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"endpoint":{"a":true,"h":"Endpoint","n":"endpoint","r":true,"sh":"Compute endpoint created or retrieved, including its current lifecycle state.","t":"`$OBJECT`","key$":"endpoint","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"operations":{"a":true,"h":"Operations","n":"operations","r":true,"t":"`$ARRAY`","key$":"operations","index$":2}},"id":{"field":"id","name":"id"},"name":"endpoint_operation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/endpoints/{endpoint_id}/restart","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"endpoint_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/endpoints/{endpoint_id}/restart","q":{"$action":"restart","exist":["id","project_id"]},"r":{"param":{"endpoint_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"endpoints"},{"var":"id"},{"lit":"restart"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /projects/{project_id}/endpoints/{endpoint_id}/start","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"endpoint_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/endpoints/{endpoint_id}/start","q":{"$action":"start","exist":["id","project_id"]},"r":{"param":{"endpoint_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"endpoints"},{"var":"id"},{"lit":"start"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /projects/{project_id}/endpoints/{endpoint_id}/suspend","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"endpoint_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/endpoints/{endpoint_id}/suspend","q":{"$action":"suspend","exist":["id","project_id"]},"r":{"param":{"endpoint_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"endpoints"},{"var":"id"},{"lit":"suspend"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"endpoint_operation","name__orig":"endpoint_operation","Name":"EndpointOperation","name_":"endpoint_operation","name-":"endpoint-operation","NAME":"ENDPOINT_OPERATION","index$":27}, {"active":true,"entity":"endpoint_operation","key$":"BasicEndpointOperationFlow","kind":"basic","name":"BasicEndpointOperationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"endpoint_operation_ref01"},"m":{"endpoint_id":"endpoint01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'EndpointOperation', {"POST /projects/{project_id}/endpoints/{endpoint_id}/restart":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"endpoint_id","in":"path","description":"The endpoint ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"POST /projects/{project_id}/endpoints/{endpoint_id}/start":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"endpoint_id","in":"path","description":"The endpoint ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"POST /projects/{project_id}/endpoints/{endpoint_id}/suspend":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"endpoint_id","in":"path","description":"The endpoint ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const endpoint_operation_ref01_ent = client.EndpointOperation()
    let endpoint_operation_ref01_data = setup.data.new.endpoint_operation['endpoint_operation_ref01']
    endpoint_operation_ref01_data['endpoint_id'] = setup.idmap['endpoint01']
    endpoint_operation_ref01_data['project_id'] = setup.idmap['project01']

    endpoint_operation_ref01_data = (await endpoint_operation_ref01_ent.create(endpoint_operation_ref01_data)).data()
    assert(null != endpoint_operation_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/endpoint_operation/EndpointOperationTestData.json')

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
    ['endpoint_operation01','endpoint_operation02','endpoint_operation03','project01','project02','project03','endpoint01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_ENDPOINT_OPERATION_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_ENDPOINT_OPERATION_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_ENDPOINT_OPERATION_ENTID']
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
  
