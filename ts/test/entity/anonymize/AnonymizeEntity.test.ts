

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


describe('AnonymizeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.Anonymize()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'anonymize.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"completed_at":{"a":true,"fo":"date-time","h":"Completed At","n":"completed_at","r":false,"sh":"Timestamp indicating when the latest anonymization attempt completed.","t":"`$STRING`","key$":"completed_at","index$":0},"masked_columns":{"a":true,"h":"Masked Columns","n":"masked_columns","r":false,"sh":"Number of columns that had masking rules applied during the attempt.","t":"`$INTEGER`","key$":"masked_columns","index$":1},"started_at":{"a":true,"fo":"date-time","h":"Started At","n":"started_at","r":false,"sh":"Timestamp indicating when the latest anonymization attempt started.","t":"`$STRING`","key$":"started_at","index$":2},"triggered_by":{"a":true,"fo":"uuid","h":"Triggered By","n":"triggered_by","r":false,"sh":"UUID of the user who triggered the latest anonymization attempt.","t":"`$STRING`","key$":"triggered_by","index$":3},"triggered_by_username":{"a":true,"h":"Triggered By Username","n":"triggered_by_username","r":false,"sh":"Username of the user who triggered the latest anonymization attempt.","t":"`$STRING`","key$":"triggered_by_username","index$":4}},"name":"anonymize","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/anonymize","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/anonymize","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"anonymize"}],"t":{"req":"`reqdata`","res":"`body.last_run`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"anonymize","name__orig":"anonymize","Name":"Anonymize","name_":"anonymize","name-":"anonymize","NAME":"ANONYMIZE","index$":0}, {"active":true,"entity":"anonymize","key$":"BasicAnonymizeFlow","kind":"basic","name":"BasicAnonymizeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"anonymize_ref01"},"m":{"branch_id":"branch01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Anonymize', {"POST /projects/{project_id}/branches/{branch_id}/anonymize":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const anonymize_ref01_ent = client.Anonymize()
    let anonymize_ref01_data = setup.data.new.anonymize['anonymize_ref01']
    anonymize_ref01_data['branch_id'] = setup.idmap['branch01']
    anonymize_ref01_data['project_id'] = setup.idmap['project01']

    anonymize_ref01_data = (await anonymize_ref01_ent.create(anonymize_ref01_data)).data()
    assert(null != anonymize_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/anonymize/AnonymizeTestData.json')

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
    ['anonymize01','anonymize02','anonymize03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_ANONYMIZE_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_ANONYMIZE_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_ANONYMIZE_ENTID']
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
  
