

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


describe('NeonAuthTransferAuthProviderProjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.NeonAuthTransferAuthProviderProject()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'neon_auth_transfer_auth_provider_project.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"auth_provider":{"a":true,"h":"Auth Provider","n":"auth_provider","r":true,"sh":"Authentication provider integrated with this Neon Auth configuration.","t":"`$STRING`","key$":"auth_provider","index$":0},"project_id":{"a":true,"h":"Project Id","n":"project_id","r":true,"sh":"The Neon project ID.","t":"`$STRING`","key$":"project_id","index$":1},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"URL for completing the process of ownership transfer","t":"`$STRING`","key$":"url","index$":2}},"name":"neon_auth_transfer_auth_provider_project","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/auth/transfer_ownership","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/projects/auth/transfer_ownership","q":{},"r":{},"s":[{"lit":"projects"},{"lit":"auth"},{"lit":"transfer_ownership"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"neon_auth_transfer_auth_provider_project","name__orig":"neon_auth_transfer_auth_provider_project","Name":"NeonAuthTransferAuthProviderProject","name_":"neon_auth_transfer_auth_provider_project","name-":"neon-auth-transfer-auth-provider-project","NAME":"NEON_AUTH_TRANSFER_AUTH_PROVIDER_PROJECT","index$":45}, {"active":true,"entity":"neon_auth_transfer_auth_provider_project","key$":"BasicNeonAuthTransferAuthProviderProjectFlow","kind":"basic","name":"BasicNeonAuthTransferAuthProviderProjectFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"neon_auth_transfer_auth_provider_project_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'NeonAuthTransferAuthProviderProject', {"POST /projects/auth/transfer_ownership":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["project_id","auth_provider"],"properties":{"project_id":{"description":"The Neon project ID. Returned as `id` from `GET /projects`.","type":"string","pattern":"^[a-z0-9-]{1,60}$","key$":"project_id"},"auth_provider":{"description":"Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.","type":"string","enum":["mock","stack","better_auth"],"x-ref":"#/components/schemas/NeonAuthSupportedAuthProvider","key$":"auth_provider"}},"x-ref":"#/components/schemas/NeonAuthTransferAuthProviderProjectRequest","index$":1}}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const neon_auth_transfer_auth_provider_project_ref01_ent = client.NeonAuthTransferAuthProviderProject()
    let neon_auth_transfer_auth_provider_project_ref01_data = setup.data.new.neon_auth_transfer_auth_provider_project['neon_auth_transfer_auth_provider_project_ref01']

    neon_auth_transfer_auth_provider_project_ref01_data = (await neon_auth_transfer_auth_provider_project_ref01_ent.create(neon_auth_transfer_auth_provider_project_ref01_data)).data()
    assert(null != neon_auth_transfer_auth_provider_project_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/neon_auth_transfer_auth_provider_project/NeonAuthTransferAuthProviderProjectTestData.json')

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
    ['neon_auth_transfer_auth_provider_project01','neon_auth_transfer_auth_provider_project02','neon_auth_transfer_auth_provider_project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_NEON_AUTH_TRANSFER_AUTH_PROVIDER_PROJECT_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_NEON_AUTH_TRANSFER_AUTH_PROVIDER_PROJECT_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_NEON_AUTH_TRANSFER_AUTH_PROVIDER_PROJECT_ENTID']
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
  
