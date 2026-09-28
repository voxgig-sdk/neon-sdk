

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


describe('MemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.Member()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'member.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"sh":"The organization member's ID.","t":"`$STRING`","key$":"id","index$":0},"joined_at":{"a":true,"fo":"date-time","h":"Joined At","n":"joined_at","r":false,"sh":"Timestamp when the user joined the organization.","t":"`$STRING`","key$":"joined_at","index$":1},"org_id":{"a":true,"h":"Org Id","n":"org_id","r":true,"sh":"The Neon organization ID.","t":"`$STRING`","key$":"org_id","index$":2},"role":{"a":true,"h":"Role","n":"role","r":true,"sh":"Organization member's role.","t":"`$STRING`","key$":"role","index$":3},"user_id":{"a":true,"fo":"uuid","h":"User Id","n":"user_id","r":true,"sh":"The Neon user ID.","t":"`$STRING`","key$":"user_id","index$":4}},"id":{"field":"id","name":"id"},"name":"member","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /organizations/{org_id}/members/{member_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"member_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/organizations/{org_id}/members/{member_id}","q":{"exist":["id","organization_id"]},"r":{"param":{"member_id":"id","org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"members"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /organizations/{org_id}/members/{member_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"member_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/organizations/{org_id}/members/{member_id}","q":{"exist":["id","organization_id"]},"r":{"param":{"member_id":"id","org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"members"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /organizations/{org_id}/members/{member_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"member_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/organizations/{org_id}/members/{member_id}","q":{"exist":["id","organization_id"]},"r":{"param":{"member_id":"id","org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"members"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.organization"]]},"key$":"member","name__orig":"member","Name":"Member","name_":"member","name-":"member","NAME":"MEMBER","index$":31}, {"active":true,"entity":"member","key$":"BasicMemberFlow","kind":"basic","name":"BasicMemberFlow","param":{},"step":[{"a":true,"d":{"organization_id":"organization01"},"i":{"ref":"member_ref01","srcdatavar":"member_ref01_data","suffix":"_up0","textfield":"joined_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-member_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"member_ref01","srcdatavar":"member_ref01_data","suffix":"_dt0"},"m":{"id":"member01","organization_id":"organization01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-member_ref01"}}],"index$":1}]}, 'Member', {"GET /organizations/{org_id}/members/{member_id}":{"protocol":"http","parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"member_id","in":"path","description":"The Neon organization member ID","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"DELETE /organizations/{org_id}/members/{member_id}":{"protocol":"http","parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"member_id","in":"path","description":"The Neon organization member ID","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]},"PATCH /organizations/{org_id}/members/{member_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["role"],"properties":{"role":{"description":"Organization member's role. `admin`: full administrative access. `editor` (and its legacy alias `member`): standard access governed by project permissions. `viewer` and `collaborator`: additional scoped project roles. Some values may not be available for all organizations.","type":"string","enum":["admin","member","editor","viewer","collaborator"],"x-ref":"#/components/schemas/MemberRole","key$":"role"}},"x-ref":"#/components/schemas/OrganizationMemberUpdateRequest","index$":1},"example":{"role":"member"}}}},"parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"member_id","in":"path","description":"The Neon organization member ID","required":true,"schema":{"type":"string","format":"uuid"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let member_ref01_data = Object.values(setup.data.existing.member)[0] as any

    // UPDATE
    const member_ref01_ent = client.Member()
    const member_ref01_data_up0: any = {}
    member_ref01_data_up0.id = member_ref01_data.id
    member_ref01_data_up0 ['organization_id'] = setup.idmap['organization_id']

    const member_ref01_markdef_up0 = { name: 'joined_at', value: 'Mark01-member_ref01_' + setup.now }
    ;(member_ref01_data_up0 as any)[member_ref01_markdef_up0.name] = member_ref01_markdef_up0.value

    const member_ref01_resdata_up0 = (await member_ref01_ent.update(member_ref01_data_up0)).data()
    assert(member_ref01_resdata_up0.id === member_ref01_data_up0.id)

    assert((member_ref01_resdata_up0 as any)[member_ref01_markdef_up0.name] === member_ref01_markdef_up0.value)


    // LOAD
    const member_ref01_match_dt0: any = {}
    member_ref01_match_dt0.id = member_ref01_data.id
    const member_ref01_data_dt0 = (await member_ref01_ent.load(member_ref01_match_dt0)).data()
    assert(member_ref01_data_dt0.id === member_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/member/MemberTestData.json')

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
    ['member01','member02','member03','organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_MEMBER_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_MEMBER_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_MEMBER_ENTID']
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
  
