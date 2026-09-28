

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


describe('ProjectBranchLogFieldEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.ProjectBranchLogField()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_branch_log_field.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"fields":{"a":true,"h":"Fields","n":"fields","r":true,"sh":"Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint.","t":"`$ARRAY`","key$":"fields","index$":0}},"name":"project_branch_log_field","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/logs/fields","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/logs/fields","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"logs"},{"lit":"fields"}],"t":{"req":"`reqdata`","res":"`body.fields`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"project_branch_log_field","name__orig":"project_branch_log_field","Name":"ProjectBranchLogField","name_":"project_branch_log_field","name-":"project-branch-log-field","NAME":"PROJECT_BRANCH_LOG_FIELD","index$":57}, {"active":true,"entity":"project_branch_log_field","key$":"BasicProjectBranchLogFieldFlow","kind":"basic","name":"BasicProjectBranchLogFieldFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"branch_id":"branch01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"project_branch_log_field_ref01"}}],"index$":0}]}, 'ProjectBranchLogField', {"GET /projects/{project_id}/branches/{branch_id}/logs/fields":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let project_branch_log_field_ref01_data = Object.values(setup.data.existing.project_branch_log_field)[0] as any

    // LIST
    const project_branch_log_field_ref01_ent = client.ProjectBranchLogField()
    const project_branch_log_field_ref01_match: any = {}
    project_branch_log_field_ref01_match['branch_id'] = setup.idmap['branch01']
    project_branch_log_field_ref01_match['project_id'] = setup.idmap['project01']

    const project_branch_log_field_ref01_list = (await project_branch_log_field_ref01_ent.list(project_branch_log_field_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_branch_log_field/ProjectBranchLogFieldTestData.json')

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
    ['project_branch_log_field01','project_branch_log_field02','project_branch_log_field03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_PROJECT_BRANCH_LOG_FIELD_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_PROJECT_BRANCH_LOG_FIELD_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_PROJECT_BRANCH_LOG_FIELD_ENTID']
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
  
