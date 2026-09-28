

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


describe('NeonFunctionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.NeonFunction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'neon_function.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active_deployment":{"a":true,"h":"Active Deployment","n":"active_deployment","r":false,"sh":"The most recent deployment whose build completed successfully.","t":"`$ANY`","key$":"active_deployment","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":1},"current_deployment":{"a":true,"h":"Current Deployment","n":"current_deployment","r":false,"sh":"The most recent deployment, regardless of build status.","t":"`$ANY`","key$":"current_deployment","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Opaque, stable function identifier.","t":"`$STRING`","key$":"id","index$":3},"invocation_url":{"a":true,"h":"Invocation Url","n":"invocation_url","r":true,"sh":"URL at which the function is invoked.","t":"`$STRING`","key$":"invocation_url","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Free-form display name.","t":"`$STRING`","key$":"name","index$":5},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"sh":"Branch-unique, lowercase DNS-label.","t":"`$STRING`","key$":"slug","index$":6}},"id":{"field":"id","name":"id"},"name":"neon_function","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/functions/{slug}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/functions/{slug}","q":{"exist":["branch_id","id","project_id"]},"r":{"param":{"slug":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"functions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.function`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /projects/{project_id}/branches/{branch_id}/functions/{slug}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PATCH","o":"/projects/{project_id}/branches/{branch_id}/functions/{slug}","q":{"exist":["branch_id","id","project_id"]},"r":{"param":{"slug":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"functions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.function`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"neon_function","name__orig":"neon_function","Name":"NeonFunction","name_":"neon_function","name-":"neon-function","NAME":"NEON_FUNCTION","index$":47}, {"active":true,"entity":"neon_function","key$":"BasicNeonFunctionFlow","kind":"basic","name":"BasicNeonFunctionFlow","param":{},"step":[{"a":true,"d":{"branch_id":"branch01","project_id":"project01"},"i":{"ref":"neon_function_ref01","srcdatavar":"neon_function_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-neon_function_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"neon_function_ref01","srcdatavar":"neon_function_ref01_data","suffix":"_dt0"},"m":{"branch_id":"branch01","id":"neon_function01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-neon_function_ref01"}}],"index$":1}]}, 'NeonFunction', {"GET /projects/{project_id}/branches/{branch_id}/functions/{slug}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"slug","in":"path","description":"The function slug","required":true,"schema":{"type":"string","pattern":"^[a-z0-9]{1,20}$"},"index$":2}]},"PATCH /projects/{project_id}/branches/{branch_id}/functions/{slug}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name"],"properties":{"name":{"description":"New display name for the function. `null` clears the display\nname; the function's `name` then falls back to its slug. Leading\nand trailing whitespace is trimmed; a whitespace-only name is\nrejected.\n","type":"string","nullable":true,"minLength":1,"maxLength":256,"key$":"name"}},"x-ref":"#/components/schemas/NeonFunctionUpdateRequest","index$":1}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"slug","in":"path","description":"The function slug","required":true,"schema":{"type":"string","pattern":"^[a-z0-9]{1,20}$"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let neon_function_ref01_data = Object.values(setup.data.existing.neon_function)[0] as any

    // UPDATE
    const neon_function_ref01_ent = client.NeonFunction()
    const neon_function_ref01_data_up0: any = {}
    neon_function_ref01_data_up0.id = neon_function_ref01_data.id
    neon_function_ref01_data_up0 ['branch_id'] = setup.idmap['branch_id']
    neon_function_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const neon_function_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-neon_function_ref01_' + setup.now }
    ;(neon_function_ref01_data_up0 as any)[neon_function_ref01_markdef_up0.name] = neon_function_ref01_markdef_up0.value

    const neon_function_ref01_resdata_up0 = (await neon_function_ref01_ent.update(neon_function_ref01_data_up0)).data()
    assert(neon_function_ref01_resdata_up0.id === neon_function_ref01_data_up0.id)

    assert((neon_function_ref01_resdata_up0 as any)[neon_function_ref01_markdef_up0.name] === neon_function_ref01_markdef_up0.value)


    // LOAD
    const neon_function_ref01_match_dt0: any = {}
    neon_function_ref01_match_dt0.id = neon_function_ref01_data.id
    const neon_function_ref01_data_dt0 = (await neon_function_ref01_ent.load(neon_function_ref01_match_dt0)).data()
    assert(neon_function_ref01_data_dt0.id === neon_function_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/neon_function/NeonFunctionTestData.json')

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
    ['neon_function01','neon_function02','neon_function03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_NEON_FUNCTION_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_NEON_FUNCTION_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_NEON_FUNCTION_ENTID']
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
  
