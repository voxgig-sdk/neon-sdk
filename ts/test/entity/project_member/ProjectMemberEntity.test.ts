

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


describe('ProjectMemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.ProjectMember()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_member.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"effective_project_permission":{"a":true,"h":"Effective Project Permission","n":"effective_project_permission","r":false,"sh":"The caller's effective permission for a project when per-project permissions are enabled.","t":"`$STRING`","key$":"effective_project_permission","index$":0},"email":{"a":true,"fo":"email","h":"Email","n":"email","r":false,"sh":"Email address of the user who has been granted access to the project.","t":"`$STRING`","key$":"email","index$":1},"explicit_project_permission":{"a":true,"h":"Explicit Project Permission","n":"explicit_project_permission","r":false,"sh":"The caller's effective permission for a project when per-project permissions are enabled.","t":"`$STRING`","key$":"explicit_project_permission","index$":2},"grant_source":{"a":true,"h":"Grant Source","n":"grant_source","r":false,"sh":"How a member's project access is granted.","t":"`$STRING`","key$":"grant_source","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"member_id":{"a":true,"fo":"uuid","h":"Member Id","n":"member_id","r":true,"sh":"The organization member ID.","t":"`$STRING`","key$":"member_id","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The user's display name.","t":"`$STRING`","key$":"name","index$":6},"org_default_project_permission":{"a":true,"h":"Org Default Project Permission","n":"org_default_project_permission","r":false,"sh":"The caller's effective permission for a project when per-project permissions are enabled.","t":"`$STRING`","key$":"org_default_project_permission","index$":7},"org_role":{"a":true,"h":"Org Role","n":"org_role","r":true,"sh":"Organization-level role used by project member role management.","t":"`$STRING`","key$":"org_role","index$":8},"project_role":{"a":true,"h":"Project Role","n":"project_role","r":false,"sh":"Per-project role.","t":"`$STRING`","key$":"project_role","index$":9},"user_id":{"a":true,"fo":"uuid","h":"User Id","n":"user_id","r":true,"sh":"The user ID for the organization member.","t":"`$STRING`","key$":"user_id","index$":10}},"id":{"field":"id","name":"id"},"name":"project_member","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/members","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"project_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/members","q":{"exist":["cursor","id","limit"]},"r":{"param":{"project_id":"id"}},"s":[{"lit":"projects"},{"var":"id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"project_member","name__orig":"project_member","Name":"ProjectMember","name_":"project_member","name-":"project-member","NAME":"PROJECT_MEMBER","index$":60}, {"active":true,"entity":"project_member","key$":"BasicProjectMemberFlow","kind":"basic","name":"BasicProjectMemberFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"project_member_ref01"}}],"index$":0}]}, 'ProjectMember', {"GET /projects/{project_id}/members":{"protocol":"http","parameters":[{"name":"project_id","in":"path","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"cursor","description":"A cursor to use in pagination. A cursor defines your place in the data list. Include `response.pagination.next` in subsequent API calls to fetch next page of the list.","in":"query","schema":{"type":"string"},"x-ref":"#/components/parameters/CursorParam","index$":1},{"name":"limit","description":"The maximum number of members to return in the response","in":"query","schema":{"type":"integer","minimum":1,"maximum":500},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let project_member_ref01_data = Object.values(setup.data.existing.project_member)[0] as any

    // LIST
    const project_member_ref01_ent = client.ProjectMember()
    const project_member_ref01_match: any = {}
    project_member_ref01_match['project_id'] = setup.idmap['project01']

    const project_member_ref01_list = (await project_member_ref01_ent.list(project_member_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_member/ProjectMemberTestData.json')

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
    ['project_member01','project_member02','project_member03','project01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_PROJECT_MEMBER_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_PROJECT_MEMBER_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_PROJECT_MEMBER_ENTID']
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
  
