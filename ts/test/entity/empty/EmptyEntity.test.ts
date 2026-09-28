

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


describe('EmptyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.Empty()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'empty.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"destination_org_id":{"a":true,"h":"Destination Org Id","n":"destination_org_id","r":true,"sh":"The destination organization identifier","t":"`$STRING`","key$":"destination_org_id","index$":0},"project_ids":{"a":true,"h":"Project Ids","n":"project_ids","r":true,"sh":"The list of projects ids to transfer.","t":"`$ARRAY`","key$":"project_ids","index$":1},"schedule":{"a":true,"h":"Schedule","n":"schedule","r":true,"sh":"List of schedule entries defining the backup frequency.","t":"`$ARRAY`","key$":"schedule","index$":2}},"name":"empty","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /organizations/{source_org_id}/projects/transfer","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"organization_id","or":"source_org_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/organizations/{source_org_id}/projects/transfer","q":{"exist":["organization_id"]},"r":{"param":{"source_org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"projects"},{"lit":"transfer"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /users/me/projects/transfer","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/users/me/projects/transfer","q":{},"r":{},"s":[{"lit":"users"},{"lit":"me"},{"lit":"projects"},{"lit":"transfer"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /organizations/{org_id}/billing/spending_limit","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/organizations/{org_id}/billing/spending_limit","q":{"exist":["organization_id"]},"r":{"param":{"org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"billing"},{"lit":"spending_limit"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /projects/{project_id}/branches/{branch_id}/backup_schedule","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/projects/{project_id}/branches/{branch_id}/backup_schedule","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"backup_schedule"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.organization"],["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"empty","name__orig":"empty","Name":"Empty","name_":"empty","name-":"empty","NAME":"EMPTY","index$":25}, {"active":true,"entity":"empty","key$":"BasicEmptyFlow","kind":"basic","name":"BasicEmptyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"empty_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"empty_ref01","srcdatavar":"empty_ref01_data","suffix":"_up0","textfield":"destination_org_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-empty_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"empty_ref01","suffix":"_rm0"},"m":{"id":"empty01"},"o":"remove","s":[],"v":[],"index$":2}]}, 'Empty', {"POST /organizations/{source_org_id}/projects/transfer":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["destination_org_id","project_ids"],"properties":{"destination_org_id":{"description":"The destination organization identifier","type":"string","pattern":"^[a-z0-9-]{1,60}$","key$":"destination_org_id"},"project_ids":{"type":"array","minItems":1,"maxItems":400,"items":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"description":"The list of projects ids to transfer. Maximum of 400 project ids","key$":"project_ids"}},"x-ref":"#/components/schemas/TransferProjectsToOrganizationRequest","index$":1}}}},"parameters":[{"name":"source_org_id","in":"path","description":"The Neon organization ID (source org, which currently owns the project)","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]},"POST /users/me/projects/transfer":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["destination_org_id","project_ids"],"properties":{"destination_org_id":{"description":"The destination organization identifier","type":"string","pattern":"^[a-z0-9-]{1,60}$","key$":"destination_org_id"},"project_ids":{"type":"array","minItems":1,"maxItems":400,"items":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"description":"The list of projects ids to transfer. Maximum of 400 project ids","key$":"project_ids"}},"x-ref":"#/components/schemas/TransferProjectsToOrganizationRequest","index$":1}}}},"parameters":[]},"DELETE /organizations/{org_id}/billing/spending_limit":{"protocol":"http","parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]},"PUT /projects/{project_id}/branches/{branch_id}/backup_schedule":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["schedule"],"properties":{"schedule":{"description":"List of schedule entries defining the backup frequency. At least one entry is required.","items":{"properties":{"day":{"description":"The day of the week or month to take the snapshot (if applicable).\n","maximum":31,"minimum":1,"type":"integer","key$":"day"},"frequency":{"description":"How often to take snapshots. Known values: `daily`, `weekly`, `monthly`.\n","example":"daily","type":"string","key$":"frequency"},"hour":{"description":"The hour of the day to take the snapshot (if applicable).\n","maximum":23,"minimum":0,"type":"integer","key$":"hour"},"month":{"description":"The month of the year to take the snapshot (if applicable).\n","maximum":12,"minimum":1,"type":"integer","key$":"month"},"retention_seconds":{"default":3024000,"description":"How long to keep a scheduled snapshot (in seconds) before it's automatically deleted.\nThe default is 3024000 seconds (35 days), which is also the maximum.\nManually created snapshots have no maximum retention: set their `expires_at` instead.\n","maximum":3024000,"minimum":3600,"type":"integer","key$":"retention_seconds"}},"required":["frequency"],"type":"object","x-ref":"#/components/schemas/BackupScheduleItem","index$":0},"key$":"schedule","type":"array"}},"x-ref":"#/components/schemas/BackupSchedule","index$":1}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const empty_ref01_ent = client.Empty()
    let empty_ref01_data = setup.data.new.empty['empty_ref01']
    empty_ref01_data['project_id'] = setup.idmap['project01']

    empty_ref01_data = (await empty_ref01_ent.create(empty_ref01_data)).data()
    assert(null != empty_ref01_data)


    // UPDATE
    const empty_ref01_data_up0: any = {}
    empty_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const empty_ref01_markdef_up0 = { name: 'destination_org_id', value: 'Mark01-empty_ref01_' + setup.now }
    ;(empty_ref01_data_up0 as any)[empty_ref01_markdef_up0.name] = empty_ref01_markdef_up0.value

    const empty_ref01_resdata_up0 = (await empty_ref01_ent.update(empty_ref01_data_up0)).data()
    assert(null != empty_ref01_resdata_up0)

    assert((empty_ref01_resdata_up0 as any)[empty_ref01_markdef_up0.name] === empty_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/empty/EmptyTestData.json')

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
    ['empty01','empty02','empty03','organization01','organization02','organization03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_EMPTY_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_EMPTY_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_EMPTY_ENTID']
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
  
