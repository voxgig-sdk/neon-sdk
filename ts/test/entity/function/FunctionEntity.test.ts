

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


describe('FunctionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.Function()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'function.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"custom_domains":{"a":true,"h":"Custom Domains","n":"custom_domains","r":true,"t":"`$ARRAY`","key$":"custom_domains","index$":0},"functions":{"a":true,"h":"Functions","n":"functions","r":true,"t":"`$ARRAY`","key$":"functions","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"pagination":{"a":true,"h":"Pagination","n":"pagination","r":false,"sh":"To paginate the response, issue an initial request with `limit` value.","t":"`$OBJECT`","key$":"pagination","index$":3}},"id":{"field":"id","name":"id"},"name":"function","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/custom-domains","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/custom-domains","q":{"exist":["branch_id","cursor","limit","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"custom-domains"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/functions","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/functions","q":{"exist":["branch_id","cursor","limit","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"functions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /projects/{project_id}/branches/{branch_id}/custom-domains/{domain}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"domain","or":"domain","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/branches/{branch_id}/custom-domains/{domain}","q":{"exist":["branch_id","domain","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"custom-domains"},{"var":"domain"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /projects/{project_id}/branches/{branch_id}/functions/{slug}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"slug","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/branches/{branch_id}/functions/{slug}","q":{"exist":["branch_id","id","project_id"]},"r":{"param":{"slug":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"functions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"trigger_id","or":"trigger_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}","q":{"exist":["branch_id","project_id","trigger_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"triggers"},{"var":"trigger_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"],["$.main.kit.entity.project","$.main.kit.entity.branch","$.main.kit.entity.custom_domain"],["$.main.kit.entity.project","$.main.kit.entity.branch","$.main.kit.entity.trigger"]]},"key$":"function","name__orig":"function","Name":"Function","name_":"function","name-":"function","NAME":"FUNCTION","index$":28}, {"active":true,"entity":"function","key$":"BasicFunctionFlow","kind":"basic","name":"BasicFunctionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"branch_id":"branch01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"function_ref01"}}],"index$":0}]}, 'Function', {"GET /projects/{project_id}/branches/{branch_id}/custom-domains":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"cursor","description":"A cursor to use in pagination. A cursor defines your place in the data list. Include `response.pagination.next` in subsequent API calls to fetch next page of the list.","in":"query","schema":{"type":"string"},"x-ref":"#/components/parameters/CursorParam","index$":2},{"name":"limit","description":"Specify a value from 1 to 1000 to limit number of domains in the response","in":"query","schema":{"type":"integer","minimum":1,"maximum":1000},"index$":3}]},"GET /projects/{project_id}/branches/{branch_id}/functions":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"cursor","description":"A cursor to use in pagination. A cursor defines your place in the data list. Include `response.pagination.next` in subsequent API calls to fetch next page of the list.","in":"query","schema":{"type":"string"},"x-ref":"#/components/parameters/CursorParam","index$":2},{"name":"limit","description":"Specify a value from 1 to 1000 to limit number of functions in the response","in":"query","schema":{"type":"integer","minimum":1,"maximum":1000},"index$":3}]},"DELETE /projects/{project_id}/branches/{branch_id}/custom-domains/{domain}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"domain","in":"path","description":"The registered custom domain (case-insensitive).","required":true,"schema":{"type":"string","minLength":3,"maxLength":254,"pattern":"^[A-Za-z0-9.-]+$"},"index$":2}]},"DELETE /projects/{project_id}/branches/{branch_id}/functions/{slug}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"slug","in":"path","description":"The function slug","required":true,"schema":{"type":"string","pattern":"^[a-z0-9]{1,20}$"},"index$":2}]},"DELETE /projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"trigger_id","in":"path","description":"The opaque, project-wide trigger ID","required":true,"schema":{"type":"string","pattern":"^[A-Za-z0-9][A-Za-z0-9_.\\-]{0,127}$","minLength":1,"maxLength":128,"description":"Opaque, server-minted project-wide trigger identifier.","x-ref":"#/components/schemas/TriggerID"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let function_ref01_data = Object.values(setup.data.existing.function)[0] as any

    // LIST
    const function_ref01_ent = client.Function()
    const function_ref01_match: any = {}
    function_ref01_match['branch_id'] = setup.idmap['branch01']
    function_ref01_match['project_id'] = setup.idmap['project01']

    const function_ref01_list = (await function_ref01_ent.list(function_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/function/FunctionTestData.json')

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
    ['function01','function02','function03','project01','project02','project03','branch01','branch02','branch03','custom_domain01','custom_domain02','custom_domain03','trigger01','trigger02','trigger03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_FUNCTION_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_FUNCTION_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_FUNCTION_ENTID']
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
  
