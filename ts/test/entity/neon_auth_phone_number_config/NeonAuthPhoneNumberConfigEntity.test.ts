

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


describe('NeonAuthPhoneNumberConfigEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.NeonAuthPhoneNumberConfig()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'neon_auth_phone_number_config.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"enabled":{"a":true,"h":"Enabled","n":"enabled","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether the phone number plugin is enabled.","t":"`$BOOLEAN`","key$":"enabled","index$":0},"otp_expires_in":{"a":true,"h":"Otp Expires In","n":"otp_expires_in","r":false,"sh":"Time in seconds before the OTP expires","t":"`$INTEGER`","key$":"otp_expires_in","index$":1}},"name":"neon_auth_phone_number_config","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"plugins"},{"lit":"phone-number"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"plugins"},{"lit":"phone-number"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"neon_auth_phone_number_config","name__orig":"neon_auth_phone_number_config","Name":"NeonAuthPhoneNumberConfig","name_":"neon_auth_phone_number_config","name-":"neon-auth-phone-number-config","NAME":"NEON_AUTH_PHONE_NUMBER_CONFIG","index$":42}, {"active":true,"entity":"neon_auth_phone_number_config","key$":"BasicNeonAuthPhoneNumberConfigFlow","kind":"basic","name":"BasicNeonAuthPhoneNumberConfigFlow","param":{},"step":[{"a":true,"d":{"project_id":"project01"},"i":{"ref":"neon_auth_phone_number_config_ref01","srcdatavar":"neon_auth_phone_number_config_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-neon_auth_phone_number_config_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"neon_auth_phone_number_config_ref01","srcdatavar":"neon_auth_phone_number_config_ref01_data","suffix":"_dt0"},"m":{"id":"neon_auth_phone_number_config01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-neon_auth_phone_number_config_ref01"}}],"index$":1}]}, 'NeonAuthPhoneNumberConfig', {"GET /projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"PATCH /projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"enabled":{"type":"boolean","description":"Whether the phone number plugin is enabled.","key$":"enabled"},"otp_expires_in":{"type":"integer","description":"Time in seconds before the OTP expires","minimum":60,"maximum":600,"key$":"otp_expires_in"}},"x-ref":"#/components/schemas/NeonAuthPhoneNumberConfigUpdate","index$":1}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let neon_auth_phone_number_config_ref01_data = Object.values(setup.data.existing.neon_auth_phone_number_config)[0] as any

    // UPDATE
    const neon_auth_phone_number_config_ref01_ent = client.NeonAuthPhoneNumberConfig()
    const neon_auth_phone_number_config_ref01_data_up0: any = {}
    neon_auth_phone_number_config_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const neon_auth_phone_number_config_ref01_resdata_up0 = (await neon_auth_phone_number_config_ref01_ent.update(neon_auth_phone_number_config_ref01_data_up0)).data()
    assert(null != neon_auth_phone_number_config_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/neon_auth_phone_number_config/NeonAuthPhoneNumberConfigTestData.json')

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
    ['neon_auth_phone_number_config01','neon_auth_phone_number_config02','neon_auth_phone_number_config03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_NEON_AUTH_PHONE_NUMBER_CONFIG_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_NEON_AUTH_PHONE_NUMBER_CONFIG_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_NEON_AUTH_PHONE_NUMBER_CONFIG_ENTID']
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
  
