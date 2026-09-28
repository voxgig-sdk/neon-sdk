

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


describe('CustomDomainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.CustomDomain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_domain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"domain":{"a":true,"h":"Domain","n":"domain","r":true,"sh":"The custom domain to register (for example `dashboard.acme.com`).","t":"`$STRING`","key$":"domain","index$":0},"entity_id":{"a":true,"h":"Entity Id","n":"entity_id","r":true,"sh":"The target entity's identifier within the branch.","t":"`$STRING`","key$":"entity_id","index$":1},"entity_type":{"a":true,"h":"Entity Type","n":"entity_type","r":true,"sh":"The kind of branch entity to point the domain at.","t":"`$STRING`","key$":"entity_type","index$":2}},"name":"custom_domain","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/custom-domains","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/custom-domains","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"custom-domains"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"custom_domain","name__orig":"custom_domain","Name":"CustomDomain","name_":"custom_domain","name-":"custom-domain","NAME":"CUSTOM_DOMAIN","index$":20}, {"active":true,"entity":"custom_domain","key$":"BasicCustomDomainFlow","kind":"basic","name":"BasicCustomDomainFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"custom_domain_ref01"},"m":{"branch_id":"branch01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'CustomDomain', {"POST /projects/{project_id}/branches/{branch_id}/custom-domains":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["domain","entity_type","entity_id"],"properties":{"domain":{"type":"string","minLength":3,"maxLength":254,"description":"The custom domain to register (for example `dashboard.acme.com`).\nCase-insensitive; normalized to lowercase (a trailing root dot is\nstripped, so the 254-char bound admits a fully-qualified name whose\nnormalized form is 253 chars). Neon-managed and internal hostnames are\nrejected.\n","key$":"domain"},"entity_type":{"type":"string","minLength":1,"maxLength":32,"example":"function","description":"The kind of branch entity to point the domain at. v1 supports only\n`function`; any other value is rejected with `invalid_entity_type`.\n","key$":"entity_type"},"entity_id":{"type":"string","minLength":1,"maxLength":255,"description":"The target entity's identifier within the branch. For `function` this\nis the function slug (which must already exist on the branch).\n","key$":"entity_id"}},"x-ref":"#/components/schemas/CustomDomainRegisterRequest","index$":1}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_domain_ref01_ent = client.CustomDomain()
    let custom_domain_ref01_data = setup.data.new.custom_domain['custom_domain_ref01']
    custom_domain_ref01_data['branch_id'] = setup.idmap['branch01']
    custom_domain_ref01_data['project_id'] = setup.idmap['project01']

    custom_domain_ref01_data = (await custom_domain_ref01_ent.create(custom_domain_ref01_data)).data()
    assert(null != custom_domain_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_domain/CustomDomainTestData.json')

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
    ['custom_domain01','custom_domain02','custom_domain03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_CUSTOM_DOMAIN_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_CUSTOM_DOMAIN_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_CUSTOM_DOMAIN_ENTID']
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
  
