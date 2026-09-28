

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


describe('SnapshotEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.Snapshot()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'snapshot.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"sh":"Timestamp when the snapshot was created, in RFC 3339 format (UTC).","t":"`$STRING`","key$":"created_at","index$":0},"diff_size":{"a":true,"fo":"int64","h":"Diff Size","n":"diff_size","r":false,"sh":"Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage.","t":"`$INTEGER`","key$":"diff_size","index$":1},"expires_at":{"a":true,"h":"Expires At","n":"expires_at","r":false,"sh":"RFC 3339 timestamp when the snapshot expires and is eligible for deletion.","t":"`$STRING`","key$":"expires_at","index$":2},"full_size":{"a":true,"fo":"int64","h":"Full Size","n":"full_size","r":false,"sh":"Full logical size of the snapshot in bytes at the time it was taken.","t":"`$INTEGER`","key$":"full_size","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The snapshot ID.","t":"`$STRING`","key$":"id","index$":4},"lsn":{"a":true,"h":"Lsn","n":"lsn","r":false,"sh":"WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`).","t":"`$STRING`","key$":"lsn","index$":5},"manual":{"a":true,"h":"Manual","n":"manual","r":false,"sh":"True if the snapshot was created manually rather than by a schedule.","t":"`$BOOLEAN`","key$":"manual","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Human-readable label for the snapshot.","t":"`$STRING`","key$":"name","index$":7},"operations":{"a":true,"h":"Operations","n":"operations","r":true,"t":"`$ARRAY`","key$":"operations","index$":8},"slug":{"a":true,"h":"Slug","n":"slug","r":false,"sh":"Snapshot resource ID, unique within the project.","t":"`$STRING`","key$":"slug","index$":9},"snapshot":{"a":true,"h":"Snapshot","n":"snapshot","r":true,"sh":"Fields to update on the snapshot.","t":"`$OBJECT`","key$":"snapshot","index$":10},"source_branch_id":{"a":true,"h":"Source Branch Id","n":"source_branch_id","r":false,"sh":"Branch from which this snapshot was created.","t":"`$STRING`","key$":"source_branch_id","index$":11},"timestamp":{"a":true,"h":"Timestamp","n":"timestamp","r":false,"sh":"Point in time captured by the snapshot, in RFC 3339 format (UTC).","t":"`$STRING`","key$":"timestamp","index$":12}},"id":{"field":"id","name":"id"},"name":"snapshot","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/snapshot","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"2025-08-05T22:00:00Z","k":"query","n":"expires_at","or":"expires_at","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"lsn","or":"lsn","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"slug","or":"slug","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"2025-08-05T22:00:00Z","k":"query","n":"timestamp","or":"timestamp","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/snapshot","q":{"exist":["branch_id","expires_at","lsn","name","project_id","slug","timestamp"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"snapshot"}],"t":{"req":"`reqdata`","res":"`body.snapshot`"},"index$":0},{"a":true,"co":{"id":"POST /projects/{project_id}/snapshots/{snapshot_id}/restore","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"snapshot_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/projects/{project_id}/snapshots/{snapshot_id}/restore","q":{"$action":"restore","exist":["id","name","project_id"]},"r":{"param":{"snapshot_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"snapshots"},{"var":"id"},{"lit":"restore"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/snapshots","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/projects/{project_id}/snapshots","q":{"exist":["project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"snapshots"}],"t":{"req":"`reqdata`","res":"`body.snapshots`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /projects/{project_id}/snapshots/{snapshot_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"snapshot_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/snapshots/{snapshot_id}","q":{"exist":["id","project_id"]},"r":{"param":{"snapshot_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"snapshots"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /projects/{project_id}/snapshots/{snapshot_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"snapshot_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/projects/{project_id}/snapshots/{snapshot_id}","q":{"exist":["id","project_id"]},"r":{"param":{"snapshot_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"snapshots"},{"var":"id"}],"t":{"req":{"snapshot":"`reqdata`"},"res":"`body.snapshot`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"snapshot","name__orig":"snapshot","Name":"Snapshot","name_":"snapshot","name-":"snapshot","NAME":"SNAPSHOT","index$":70}, {"active":true,"entity":"snapshot","key$":"BasicSnapshotFlow","kind":"basic","name":"BasicSnapshotFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"snapshot_ref01"},"m":{"project_id":"project01","snapshot_id":"snapshot01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"snapshot_ref01"}}],"index$":1},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"snapshot_ref01","srcdatavar":"snapshot_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-snapshot_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"snapshot_ref01","suffix":"_rm0"},"m":{"id":"snapshot01","project_id":"project01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"snapshot_ref01"}}],"index$":4}]}, 'Snapshot', {"POST /projects/{project_id}/branches/{branch_id}/snapshot":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"lsn","in":"query","description":"The target Log Sequence Number (LSN) to take the snapshot from.\nMust fall within the restore window. Cannot be used with `timestamp`\n","required":false,"schema":{"type":"string"},"index$":2},{"name":"timestamp","in":"query","description":"The target timestamp for the snapshot. Must fall within the restore window. RFC 3339 format. Cannot be used with `lsn`.\n","required":false,"schema":{"type":"string","example":"2025-08-05T22:00:00Z"},"index$":3},{"name":"name","in":"query","description":"A name for the snapshot.","required":false,"schema":{"type":"string"},"index$":4},{"name":"slug","in":"query","description":"User-defined snapshot resource ID. Must be unique within the project.\nMust start with a lowercase letter, contain only lowercase letters, numbers, and hyphens,\nand end with a letter or number. If omitted, the control plane generates a value.\n","required":false,"schema":{"type":"string","minLength":1,"maxLength":63,"pattern":"^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$"},"index$":5},{"name":"expires_at","in":"query","description":"The time at which the snapshot will be automatically deleted. RFC 3339 format.\n","required":false,"schema":{"type":"string","example":"2025-08-05T22:00:00Z"},"index$":6}]},"POST /projects/{project_id}/snapshots/{snapshot_id}/restore":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"description":"A name for the newly restored branch. If not provided, the server generates a unique name for the branch automatically.\n","type":"string"},"target_branch_id":{"description":"ID of the branch to restore the snapshot into. Defaults to the snapshot's source branch (`snapshot.source_branch_id`); fails if that cannot be determined.\n","type":"string"},"finalize_restore":{"description":"Set to `true` to finalize the restore operation immediately.\nThis will complete the restore and move any associated computes to the new branch,\nsimilar to the `finalizeRestoreBranch` operation.\nDefaults to `false` to allow previewing the restored snapshot data first.\n","type":"boolean","default":false}}}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"snapshot_id","in":"path","description":"The snapshot ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"name","in":"query","description":"Deprecated. Use the `name` field in the request body instead. Removal scheduled for November 29, 2025.\nA name for the newly restored branch. If omitted, a default name will be generated.\n","required":false,"deprecated":true,"x-sunset":"2025-11-29","schema":{"type":"string"},"index$":2}]},"GET /projects/{project_id}/snapshots":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]},"DELETE /projects/{project_id}/snapshots/{snapshot_id}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"snapshot_id","in":"path","description":"The snapshot ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"PATCH /projects/{project_id}/snapshots/{snapshot_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["snapshot"],"properties":{"snapshot":{"type":"object","description":"Fields to update on the snapshot. Updatable fields include `name` and `expires_at`.","properties":{"name":{"type":"string","description":"Human-readable label for the snapshot."},"expires_at":{"description":"The date and time when the snapshot will expire.\n\nOmit to leave the current expiration unchanged. Send `null` to\nclear the expiration so the snapshot never expires. A future\ntimestamp sets the absolute expiration.\n","type":"string","format":"date-time","nullable":true,"example":"2030-06-09T18:02:16Z"}},"key$":"snapshot"}},"x-ref":"#/components/schemas/SnapshotUpdateRequest","index$":1}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"snapshot_id","in":"path","description":"The snapshot ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const snapshot_ref01_ent = client.Snapshot()
    let snapshot_ref01_data = setup.data.new.snapshot['snapshot_ref01']
    snapshot_ref01_data['project_id'] = setup.idmap['project01']
    snapshot_ref01_data['snapshot_id'] = setup.idmap['snapshot01']

    snapshot_ref01_data = (await snapshot_ref01_ent.create(snapshot_ref01_data)).data()
    assert(null != snapshot_ref01_data.id)


    // LIST
    const snapshot_ref01_match: any = {}
    snapshot_ref01_match['project_id'] = setup.idmap['project01']

    const snapshot_ref01_list = (await snapshot_ref01_ent.list(snapshot_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(snapshot_ref01_list, { id: snapshot_ref01_data.id })))


    // UPDATE
    const snapshot_ref01_data_up0: any = {}
    snapshot_ref01_data_up0.id = snapshot_ref01_data.id
    snapshot_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const snapshot_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-snapshot_ref01_' + setup.now }
    ;(snapshot_ref01_data_up0 as any)[snapshot_ref01_markdef_up0.name] = snapshot_ref01_markdef_up0.value

    const snapshot_ref01_resdata_up0 = (await snapshot_ref01_ent.update(snapshot_ref01_data_up0)).data()
    assert(snapshot_ref01_resdata_up0.id === snapshot_ref01_data_up0.id)

    assert((snapshot_ref01_resdata_up0 as any)[snapshot_ref01_markdef_up0.name] === snapshot_ref01_markdef_up0.value)


    // REMOVE
    const snapshot_ref01_match_rm0: any = { id: snapshot_ref01_data.id }
    await snapshot_ref01_ent.remove(snapshot_ref01_match_rm0)
  

    // LIST
    const snapshot_ref01_match_rt0: any = {}
    snapshot_ref01_match_rt0['project_id'] = setup.idmap['project01']

    const snapshot_ref01_list_rt0 = (await snapshot_ref01_ent.list(snapshot_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(snapshot_ref01_list_rt0, { id: snapshot_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/snapshot/SnapshotTestData.json')

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
    ['snapshot01','snapshot02','snapshot03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_SNAPSHOT_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_SNAPSHOT_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_SNAPSHOT_ENTID']
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
  
