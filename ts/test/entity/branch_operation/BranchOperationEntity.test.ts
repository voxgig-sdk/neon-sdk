

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


describe('BranchOperationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.BranchOperation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'branch_operation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"branch":{"a":true,"h":"Branch","n":"branch","r":true,"sh":"Branch returned by the request.","t":"`$OBJECT`","key$":"branch","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"operations":{"a":true,"h":"Operations","n":"operations","r":true,"t":"`$ARRAY`","key$":"operations","index$":2}},"id":{"field":"id","name":"id"},"name":"branch_operation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/restore","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/restore","q":{"$action":"restore","exist":["id","project_id"]},"r":{"param":{"branch_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"id"},{"lit":"restore"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/set_as_default","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/set_as_default","q":{"$action":"set_as_default","exist":["id","project_id"]},"r":{"param":{"branch_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"id"},{"lit":"set_as_default"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"branch_operation","name__orig":"branch_operation","Name":"BranchOperation","name_":"branch_operation","name-":"branch-operation","NAME":"BRANCH_OPERATION","index$":9}, {"active":true,"entity":"branch_operation","key$":"BasicBranchOperationFlow","kind":"basic","name":"BasicBranchOperationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"branch_operation_ref01"},"m":{"branch_id":"branch01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'BranchOperation', {"POST /projects/{project_id}/branches/{branch_id}/restore":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["source_branch_id"],"properties":{"source_branch_id":{"description":"The `branch_id` of the restore source branch.\nIf `source_timestamp` and `source_lsn` are omitted, the branch will be restored to head.\nIf `source_branch_id` is equal to the branch's id, `source_timestamp` or `source_lsn` is required.\n","type":"string","pattern":"^[a-z0-9-]{1,60}$"},"source_lsn":{"description":"A Postgres LSN (for example, `0/1A2B3C4`) on the source branch to restore from.\nMutually exclusive with `source_timestamp`. Omit both to restore to head.\n","type":"string"},"source_timestamp":{"description":"A point in time on the source branch to restore from, in RFC 3339 format. When omitted alongside `source_lsn`, the branch is restored to the latest available state of the source branch.\n","type":"string","format":"date-time","example":"2024-02-26T12:00:00Z"},"preserve_under_name":{"description":"Name under which to save the current branch state before restoring. Required when the branch has children or when `source_branch_id` equals the branch being restored; in those cases all existing child branches are moved to the newly created branch. If omitted and not required, the previous state is not preserved.\n","type":"string"}},"x-ref":"#/components/schemas/BranchRestoreRequest"}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"POST /projects/{project_id}/branches/{branch_id}/set_as_default":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const branch_operation_ref01_ent = client.BranchOperation()
    let branch_operation_ref01_data = setup.data.new.branch_operation['branch_operation_ref01']
    branch_operation_ref01_data['branch_id'] = setup.idmap['branch01']
    branch_operation_ref01_data['project_id'] = setup.idmap['project01']

    branch_operation_ref01_data = (await branch_operation_ref01_ent.create(branch_operation_ref01_data)).data()
    assert(null != branch_operation_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/branch_operation/BranchOperationTestData.json')

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
    ['branch_operation01','branch_operation02','branch_operation03','project01','project02','project03','branch01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_BRANCH_OPERATION_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_BRANCH_OPERATION_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_BRANCH_OPERATION_ENTID']
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
  
