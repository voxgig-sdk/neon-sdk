

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


describe('ProjectTransferRequestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.ProjectTransferRequest()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_transfer_request.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"ttl_seconds":{"a":true,"fo":"int64","h":"Ttl Seconds","n":"ttl_seconds","r":false,"sh":"Number of seconds the transfer request stays valid before it expires.","t":"`$INTEGER`","key$":"ttl_seconds","index$":1}},"id":{"field":"id","name":"id"},"name":"project_transfer_request","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/transfer_requests","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"project_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/projects/{project_id}/transfer_requests","q":{"exist":["id"]},"r":{"param":{"project_id":"id"}},"s":[{"lit":"projects"},{"var":"id"},{"lit":"transfer_requests"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"project_transfer_request","name__orig":"project_transfer_request","Name":"ProjectTransferRequest","name_":"project_transfer_request","name-":"project-transfer-request","NAME":"PROJECT_TRANSFER_REQUEST","index$":64}, {"active":true,"entity":"project_transfer_request","key$":"BasicProjectTransferRequestFlow","kind":"basic","name":"BasicProjectTransferRequestFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"project_transfer_request_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ProjectTransferRequest', {"POST /projects/{project_id}/transfer_requests":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"ttl_seconds":{"type":"integer","format":"int64","description":"Number of seconds the transfer request stays valid before it expires. Defaults to 86400 (24 hours).\n","default":86400,"key$":"ttl_seconds"}},"index$":1}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_transfer_request_ref01_ent = client.ProjectTransferRequest()
    let project_transfer_request_ref01_data = setup.data.new.project_transfer_request['project_transfer_request_ref01']
    project_transfer_request_ref01_data['project_id'] = setup.idmap['project01']

    project_transfer_request_ref01_data = (await project_transfer_request_ref01_ent.create(project_transfer_request_ref01_data)).data()
    assert(null != project_transfer_request_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_transfer_request/ProjectTransferRequestTestData.json')

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
    ['project_transfer_request01','project_transfer_request02','project_transfer_request03','project01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_PROJECT_TRANSFER_REQUEST_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_PROJECT_TRANSFER_REQUEST_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_PROJECT_TRANSFER_REQUEST_ENTID']
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
  
