

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


describe('RoleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.Role()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'role.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"authentication_method":{"a":true,"h":"Authentication Method","n":"authentication_method","r":false,"sh":"Authentication method configured for this role: `password`, `oauth`, or `no_login`.","t":"`$STRING`","key$":"authentication_method","index$":0},"branch_id":{"a":true,"h":"Branch Id","n":"branch_id","r":true,"sh":"The ID of the branch this role belongs to.","t":"`$STRING`","key$":"branch_id","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"A timestamp indicating when the role was created","t":"`$STRING`","key$":"created_at","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Postgres role name within the branch.","t":"`$STRING`","key$":"name","index$":4},"password":{"a":true,"h":"Password","n":"password","r":false,"sh":"The role password","t":"`$STRING`","key$":"password","index$":5},"protected":{"a":true,"h":"Protected","n":"protected","r":false,"sh":"Whether or not the role is system-protected","t":"`$BOOLEAN`","key$":"protected","index$":6},"role":{"a":true,"h":"Role","n":"role","r":true,"sh":"Properties of the role to create.","t":"`$OBJECT`","key$":"role","index$":7},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"A timestamp indicating when the role was last updated","t":"`$STRING`","key$":"updated_at","index$":8}},"id":{"field":"id","name":"id"},"name":"role","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/roles","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/roles","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"roles"}],"t":{"req":{"role":"`reqdata`"},"res":"`body.role`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/roles","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/roles","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"roles"}],"t":{"req":"`reqdata`","res":"`body.roles`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/roles/{role_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"role_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/roles/{role_name}","q":{"exist":["branch_id","id","project_id"]},"r":{"param":{"role_name":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"roles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.role`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /projects/{project_id}/branches/{branch_id}/roles/{role_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"role_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/branches/{branch_id}/roles/{role_name}","q":{"exist":["branch_id","id","project_id"]},"r":{"param":{"role_name":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"roles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.role`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"role","name__orig":"role","Name":"Role","name_":"role","name-":"role","NAME":"ROLE","index$":66}, {"active":true,"entity":"role","key$":"BasicRoleFlow","kind":"basic","name":"BasicRoleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"role_ref01"},"m":{"branch_id":"branch01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"branch_id":"branch01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"role_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"role_ref01","srcdatavar":"role_ref01_data","suffix":"_dt0"},"m":{"branch_id":"branch01","id":"role01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-role_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"role_ref01","suffix":"_rm0"},"m":{"branch_id":"branch01","id":"role01","project_id":"project01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"branch_id":"branch01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"role_ref01"}}],"index$":4}]}, 'Role', {"POST /projects/{project_id}/branches/{branch_id}/roles":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["role"],"properties":{"role":{"type":"object","description":"Properties of the role to create.","required":["name"],"properties":{"name":{"description":"The role name. Cannot exceed 63 bytes in length.\n","type":"string"},"no_login":{"description":"Whether to create a role that cannot login.\n","type":"boolean"}},"key$":"role"}},"x-ref":"#/components/schemas/RoleCreateRequest","index$":1},"example":{"role":{"name":"sally"}}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"GET /projects/{project_id}/branches/{branch_id}/roles":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"GET /projects/{project_id}/branches/{branch_id}/roles/{role_name}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"role_name","in":"path","description":"The role name","required":true,"schema":{"type":"string"},"index$":2}]},"DELETE /projects/{project_id}/branches/{branch_id}/roles/{role_name}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"role_name","in":"path","description":"The role name","required":true,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const role_ref01_ent = client.Role()
    let role_ref01_data = setup.data.new.role['role_ref01']
    role_ref01_data['branch_id'] = setup.idmap['branch01']
    role_ref01_data['project_id'] = setup.idmap['project01']

    role_ref01_data = (await role_ref01_ent.create(role_ref01_data)).data()
    assert(null != role_ref01_data.id)


    // LIST
    const role_ref01_match: any = {}
    role_ref01_match['branch_id'] = setup.idmap['branch01']
    role_ref01_match['project_id'] = setup.idmap['project01']

    const role_ref01_list = (await role_ref01_ent.list(role_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(role_ref01_list, { id: role_ref01_data.id })))


    // LOAD
    const role_ref01_match_dt0: any = {}
    role_ref01_match_dt0.id = role_ref01_data.id
    const role_ref01_data_dt0 = (await role_ref01_ent.load(role_ref01_match_dt0)).data()
    assert(role_ref01_data_dt0.id === role_ref01_data.id)


    // REMOVE
    const role_ref01_match_rm0: any = { id: role_ref01_data.id }
    await role_ref01_ent.remove(role_ref01_match_rm0)
  

    // LIST
    const role_ref01_match_rt0: any = {}
    role_ref01_match_rt0['branch_id'] = setup.idmap['branch01']
    role_ref01_match_rt0['project_id'] = setup.idmap['project01']

    const role_ref01_list_rt0 = (await role_ref01_ent.list(role_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(role_ref01_list_rt0, { id: role_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/role/RoleTestData.json')

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
    ['role01','role02','role03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_ROLE_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_ROLE_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_ROLE_ENTID']
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
  
