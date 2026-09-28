

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


describe('CreateCredentialEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.CreateCredential()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_credential.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Free-form customer label for the credential.","t":"`$STRING`","key$":"name","index$":0},"principal_type":{"a":true,"h":"Principal Type","n":"principal_type","r":true,"sh":"Principal type for the credential.","t":"`$STRING`","key$":"principal_type","index$":1},"scopes":{"a":true,"h":"Scopes","n":"scopes","r":true,"t":"`$ARRAY`","key$":"scopes","index$":2}},"name":"create_credential","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/credentials","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/credentials","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"credentials"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"create_credential","name__orig":"create_credential","Name":"CreateCredential","name_":"create_credential","name-":"create-credential","NAME":"CREATE_CREDENTIAL","index$":17}, {"active":true,"entity":"create_credential","key$":"BasicCreateCredentialFlow","kind":"basic","name":"BasicCreateCredentialFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_credential_ref01"},"m":{"branch_id":"branch01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'CreateCredential', {"POST /projects/{project_id}/branches/{branch_id}/credentials":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["scopes","principal_type"],"properties":{"name":{"type":"string","maxLength":256,"description":"Free-form customer label for the credential.","key$":"name"},"scopes":{"type":"array","minItems":1,"maxItems":16,"items":{"type":"string","description":"A single capability you may request when issuing a credential. A\ncredential is granted a set of these; it may only perform actions\nexplicitly listed in its scopes.\n\nThis is the *requestable* set. Responses describing an existing\ncredential use `GrantedCredentialScope`, which is deliberately wider:\na credential may have been granted a scope that this endpoint does not\noffer, and a response must be able to report it.\n","enum":["storage:read","storage:write","ai_gateway:invoke","functions:invoke"],"x-ref":"#/components/schemas/CredentialScope"},"key$":"scopes"},"principal_type":{"type":"string","enum":["user"],"description":"Principal type for the credential. Only `user` is customer-managed\nand accepted here. `function` and `system` credentials are\nplatform-internal (e.g. function-serve auto-mint, presign signer)\nand are never issued through the customer-facing API.\n","key$":"principal_type"}},"x-ref":"#/components/schemas/CreateCredentialRequest","index$":1}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_credential_ref01_ent = client.CreateCredential()
    let create_credential_ref01_data = setup.data.new.create_credential['create_credential_ref01']
    create_credential_ref01_data['branch_id'] = setup.idmap['branch01']
    create_credential_ref01_data['project_id'] = setup.idmap['project01']

    create_credential_ref01_data = (await create_credential_ref01_ent.create(create_credential_ref01_data)).data()
    assert(null != create_credential_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/create_credential/CreateCredentialTestData.json')

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
    ['create_credential01','create_credential02','create_credential03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_CREATE_CREDENTIAL_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_CREATE_CREDENTIAL_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_CREATE_CREDENTIAL_ENTID']
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
  
