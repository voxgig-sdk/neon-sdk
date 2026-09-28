

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


describe('ConnectionUriEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.ConnectionUri()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'connection_uri.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"uri":{"a":true,"h":"Uri","n":"uri","r":true,"sh":"The connection URI.","t":"`$STRING`","key$":"uri","index$":0}},"name":"connection_uri","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/connection_uri","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"branch_id","or":"branch_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"database_name","or":"database_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"endpoint_id","or":"endpoint_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"pooled","or":"pooled","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"role_name","or":"role_name","r":true,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/projects/{project_id}/connection_uri","q":{"exist":["branch_id","database_name","endpoint_id","pooled","project_id","role_name"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"connection_uri"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"connection_uri","name__orig":"connection_uri","Name":"ConnectionUri","name_":"connection_uri","name-":"connection-uri","NAME":"CONNECTION_URI","index$":15}, {"active":true,"entity":"connection_uri","key$":"BasicConnectionUriFlow","kind":"basic","name":"BasicConnectionUriFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"connection_uri_ref01","srcdatavar":"connection_uri_ref01_data","suffix":"_dt0"},"m":{"id":"connection_uri01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-connection_uri_ref01"}}],"index$":0}]}, 'ConnectionUri', {"GET /projects/{project_id}/connection_uri":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"query","description":"The branch ID. Defaults to your project's default `branch_id` if not specified.","required":false,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"endpoint_id","in":"query","description":"The endpoint ID. Defaults to the read-write `endpoint_id` associated with the `branch_id` if not specified.","required":false,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":2},{"name":"database_name","in":"query","description":"The database name","required":true,"schema":{"type":"string"},"index$":3},{"name":"role_name","in":"query","description":"The role name","required":true,"schema":{"type":"string"},"index$":4},{"name":"pooled","in":"query","description":"Adds the `-pooler` option to the connection URI when set to `true`, creating a pooled connection URI.","required":false,"schema":{"type":"boolean"},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let connection_uri_ref01_data = Object.values(setup.data.existing.connection_uri)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const connection_uri_ref01_ent = client.ConnectionUri()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/connection_uri/ConnectionUriTestData.json')

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
    ['connection_uri01','connection_uri02','connection_uri03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_CONNECTION_URI_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_CONNECTION_URI_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_CONNECTION_URI_ENTID']
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
  
