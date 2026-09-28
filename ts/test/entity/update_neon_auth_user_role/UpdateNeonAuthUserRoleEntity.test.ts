

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


describe('UpdateNeonAuthUserRoleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.UpdateNeonAuthUserRole()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_neon_auth_user_role.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"ID of the updated user","t":"`$STRING`","key$":"id","index$":0},"roles":{"a":true,"h":"Roles","n":"roles","r":true,"sh":"Roles to assign to the user in the Neon Auth (Better Auth) directory.","t":"`$ARRAY`","key$":"roles","index$":1}},"id":{"field":"id","name":"id"},"name":"update_neon_auth_user_role","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}/role","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"user_id","or":"auth_user_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PUT","o":"/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}/role","q":{"exist":["branch_id","project_id","user_id"]},"r":{"param":{"auth_user_id":"user_id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"users"},{"var":"user_id"},{"lit":"role"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"update_neon_auth_user_role","name__orig":"update_neon_auth_user_role","Name":"UpdateNeonAuthUserRole","name_":"update_neon_auth_user_role","name-":"update-neon-auth-user-role","NAME":"UPDATE_NEON_AUTH_USER_ROLE","index$":73}, {"active":true,"entity":"update_neon_auth_user_role","key$":"BasicUpdateNeonAuthUserRoleFlow","kind":"basic","name":"BasicUpdateNeonAuthUserRoleFlow","param":{},"step":[{"a":true,"d":{"branch_id":"branch01","project_id":"project01"},"i":{"ref":"update_neon_auth_user_role_ref01","srcdatavar":"update_neon_auth_user_role_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_neon_auth_user_role_ref01"}}],"v":[],"index$":0}]}, 'UpdateNeonAuthUserRole', {"PUT /projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}/role":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["roles"],"properties":{"roles":{"type":"array","description":"Roles to assign to the user in the Neon Auth (Better Auth) directory. `user` and `admin` are the built-in roles; custom role strings are also supported.","items":{"type":"string"},"minItems":1,"example":["admin"],"key$":"roles"}},"x-ref":"#/components/schemas/UpdateNeonAuthUserRoleRequest","index$":1}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"auth_user_id","in":"path","description":"The Neon user ID","required":true,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_neon_auth_user_role_ref01_data = Object.values(setup.data.existing.update_neon_auth_user_role)[0] as any

    // UPDATE
    const update_neon_auth_user_role_ref01_ent = client.UpdateNeonAuthUserRole()
    const update_neon_auth_user_role_ref01_data_up0: any = {}
    update_neon_auth_user_role_ref01_data_up0.id = update_neon_auth_user_role_ref01_data.id
    update_neon_auth_user_role_ref01_data_up0 ['branch_id'] = setup.idmap['branch_id']
    update_neon_auth_user_role_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const update_neon_auth_user_role_ref01_resdata_up0 = (await update_neon_auth_user_role_ref01_ent.update(update_neon_auth_user_role_ref01_data_up0)).data()
    assert(update_neon_auth_user_role_ref01_resdata_up0.id === update_neon_auth_user_role_ref01_data_up0.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_neon_auth_user_role/UpdateNeonAuthUserRoleTestData.json')

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
    ['update_neon_auth_user_role01','update_neon_auth_user_role02','update_neon_auth_user_role03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_UPDATE_NEON_AUTH_USER_ROLE_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_UPDATE_NEON_AUTH_USER_ROLE_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_UPDATE_NEON_AUTH_USER_ROLE_ENTID']
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
  
