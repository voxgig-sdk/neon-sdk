

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


describe('VpcEndpointEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.VpcEndpoint()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'vpc_endpoint.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"example_restricted_projects":{"a":true,"h":"Example Restricted Projects","n":"example_restricted_projects","r":true,"sh":"A list of example projects that are restricted to use this VPC endpoint.","t":"`$ARRAY`","key$":"example_restricted_projects","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"label":{"a":true,"h":"Label","n":"label","r":true,"sh":"A descriptive label for the VPC endpoint","t":"`$STRING`","key$":"label","index$":2},"num_restricted_projects":{"a":true,"h":"Num Restricted Projects","n":"num_restricted_projects","r":true,"sh":"The number of projects that are restricted to use this VPC endpoint.","t":"`$INTEGER`","key$":"num_restricted_projects","index$":3},"region_id":{"a":true,"h":"Region Id","n":"region_id","r":true,"sh":"The region where the VPC endpoint is located","t":"`$STRING`","key$":"region_id","index$":4},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"The current state of the VPC endpoint.","t":"`$STRING`","key$":"state","index$":5},"vpc_endpoint_id":{"a":true,"h":"Vpc Endpoint Id","n":"vpc_endpoint_id","r":true,"sh":"Cloud provider identifier for the VPC endpoint.","t":"`$STRING`","key$":"vpc_endpoint_id","index$":6}},"id":{"field":"id","name":"id"},"name":"vpc_endpoint","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"region_id","or":"region_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints","q":{"exist":["organization_id","region_id"]},"r":{"param":{"org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"vpc"},{"lit":"region"},{"var":"region_id"},{"lit":"vpc_endpoints"}],"t":{"req":"`reqdata`","res":"`body.endpoints`"},"index$":0},{"a":true,"co":{"id":"GET /organizations/{org_id}/vpc/vpc_endpoints","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/organizations/{org_id}/vpc/vpc_endpoints","q":{"exist":["organization_id"]},"r":{"param":{"org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"vpc"},{"lit":"vpc_endpoints"}],"t":{"req":"`reqdata`","res":"`body.endpoints`"},"index$":1},{"a":true,"co":{"id":"GET /projects/{project_id}/vpc_endpoints","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/projects/{project_id}/vpc_endpoints","q":{"exist":["project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"vpc_endpoints"}],"t":{"req":"`reqdata`","res":"`body.endpoints`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"vpc_endpoint_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"region_id","or":"region_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}","q":{"exist":["id","organization_id","region_id"]},"r":{"param":{"org_id":"organization_id","vpc_endpoint_id":"id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"vpc"},{"lit":"region"},{"var":"region_id"},{"lit":"vpc_endpoints"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.organization"],["$.main.kit.entity.project"],["$.main.kit.entity.organization","$.main.kit.entity.region"]]},"key$":"vpc_endpoint","name__orig":"vpc_endpoint","Name":"VpcEndpoint","name_":"vpc_endpoint","name-":"vpc-endpoint","NAME":"VPC_ENDPOINT","index$":74}, {"active":true,"entity":"vpc_endpoint","key$":"BasicVpcEndpointFlow","kind":"basic","name":"BasicVpcEndpointFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"vpc_endpoint_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"vpc_endpoint_ref01","srcdatavar":"vpc_endpoint_ref01_data","suffix":"_dt0"},"m":{"id":"vpc_endpoint01","organization_id":"organization01","region_id":"region01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-vpc_endpoint_ref01"}}],"index$":1}]}, 'VpcEndpoint', {"GET /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints":{"protocol":"http","parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"region_id","in":"path","description":"The Neon region ID","required":true,"schema":{"type":"string"},"index$":1}]},"GET /organizations/{org_id}/vpc/vpc_endpoints":{"protocol":"http","parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]},"GET /projects/{project_id}/vpc_endpoints":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]},"GET /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}":{"protocol":"http","parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"region_id","in":"path","description":"The Neon region ID.\nAzure regions are currently not supported.\n","required":true,"schema":{"type":"string"},"index$":1},{"name":"vpc_endpoint_id","in":"path","description":"The VPC endpoint ID","required":true,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let vpc_endpoint_ref01_data = Object.values(setup.data.existing.vpc_endpoint)[0] as any

    // LIST
    const vpc_endpoint_ref01_ent = client.VpcEndpoint()
    const vpc_endpoint_ref01_match: any = {}
    vpc_endpoint_ref01_match['project_id'] = setup.idmap['project01']

    const vpc_endpoint_ref01_list = (await vpc_endpoint_ref01_ent.list(vpc_endpoint_ref01_match)).map((e: any) => e.data())


    // LOAD
    const vpc_endpoint_ref01_match_dt0: any = {}
    vpc_endpoint_ref01_match_dt0.id = vpc_endpoint_ref01_data.id
    const vpc_endpoint_ref01_data_dt0 = (await vpc_endpoint_ref01_ent.load(vpc_endpoint_ref01_match_dt0)).data()
    assert(vpc_endpoint_ref01_data_dt0.id === vpc_endpoint_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/vpc_endpoint/VpcEndpointTestData.json')

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
    ['vpc_endpoint01','vpc_endpoint02','vpc_endpoint03','organization01','organization02','organization03','project01','project02','project03','region01','region02','region03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_VPC_ENDPOINT_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_VPC_ENDPOINT_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_VPC_ENDPOINT_ENTID']
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
  
