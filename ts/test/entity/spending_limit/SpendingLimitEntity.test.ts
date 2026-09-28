

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


describe('SpendingLimitEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.SpendingLimit()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'spending_limit.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"spending_limit_cents":{"a":true,"fo":"int64","h":"Spending Limit Cents","n":"spending_limit_cents","r":true,"sh":"Monthly spending cap in cents.","t":"`$INTEGER`","key$":"spending_limit_cents","index$":0}},"name":"spending_limit","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /organizations/{org_id}/billing/spending_limit","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/organizations/{org_id}/billing/spending_limit","q":{"exist":["organization_id"]},"r":{"param":{"org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"billing"},{"lit":"spending_limit"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /organizations/{org_id}/billing/spending_limit","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"organization_id","or":"org_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/organizations/{org_id}/billing/spending_limit","q":{"exist":["organization_id"]},"r":{"param":{"org_id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"billing"},{"lit":"spending_limit"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.organization"]]},"key$":"spending_limit","name__orig":"spending_limit","Name":"SpendingLimit","name_":"spending_limit","name-":"spending-limit","NAME":"SPENDING_LIMIT","index$":71}, {"active":true,"entity":"spending_limit","key$":"BasicSpendingLimitFlow","kind":"basic","name":"BasicSpendingLimitFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"spending_limit_ref01","srcdatavar":"spending_limit_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-spending_limit_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"spending_limit_ref01","srcdatavar":"spending_limit_ref01_data","suffix":"_dt0"},"m":{"id":"spending_limit01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-spending_limit_ref01"}}],"index$":1}]}, 'SpendingLimit', {"GET /organizations/{org_id}/billing/spending_limit":{"protocol":"http","parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]},"PUT /organizations/{org_id}/billing/spending_limit":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["spending_limit_cents"],"properties":{"spending_limit_cents":{"description":"Monthly spending cap in cents. Must be positive. To remove a\npreviously configured limit, send a DELETE request to the\nspending_limit endpoint — `0` and `null` are rejected here.\nThe cap is alert-only: notifications fire at 80% and 100%, but\ncomputes are not suspended. Setting a cap below the period's\nalready-accrued spend is permitted and will trigger the\nover-limit notification on the next worker run.\n","type":"integer","format":"int64","minimum":1,"key$":"spending_limit_cents"}},"x-ref":"#/components/schemas/SpendingLimitUpdateRequest","index$":1}}}},"parameters":[{"name":"org_id","in":"path","description":"The Neon organization ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let spending_limit_ref01_data = Object.values(setup.data.existing.spending_limit)[0] as any

    // UPDATE
    const spending_limit_ref01_ent = client.SpendingLimit()
    const spending_limit_ref01_data_up0: any = {}

    const spending_limit_ref01_resdata_up0 = (await spending_limit_ref01_ent.update(spending_limit_ref01_data_up0)).data()
    assert(null != spending_limit_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/spending_limit/SpendingLimitTestData.json')

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
    ['spending_limit01','spending_limit02','spending_limit03','organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_SPENDING_LIMIT_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_SPENDING_LIMIT_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_SPENDING_LIMIT_ENTID']
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
  
