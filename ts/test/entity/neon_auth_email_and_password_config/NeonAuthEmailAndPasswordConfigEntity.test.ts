

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


describe('NeonAuthEmailAndPasswordConfigEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.NeonAuthEmailAndPasswordConfig()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'neon_auth_email_and_password_config.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"auto_sign_in_after_verification":{"a":true,"h":"Auto Sign In After Verification","n":"auto_sign_in_after_verification","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether users are automatically signed in after verifying their email","t":"`$BOOLEAN`","key$":"auto_sign_in_after_verification","index$":0},"disable_sign_up":{"a":true,"h":"Disable Sign Up","n":"disable_sign_up","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether to disable new user sign ups","t":"`$BOOLEAN`","key$":"disable_sign_up","index$":1},"email_verification_method":{"a":true,"h":"Email Verification Method","n":"email_verification_method","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Controls how email addresses are verified during sign-up or sign-in.","t":"`$STRING`","key$":"email_verification_method","index$":2},"enabled":{"a":true,"h":"Enabled","n":"enabled","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether email and password authentication is enabled","t":"`$BOOLEAN`","key$":"enabled","index$":3},"require_email_verification":{"a":true,"h":"Require Email Verification","n":"require_email_verification","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether email verification is required before users can sign in","t":"`$BOOLEAN`","key$":"require_email_verification","index$":4},"send_verification_email_on_sign_in":{"a":true,"h":"Send Verification Email On Sign In","n":"send_verification_email_on_sign_in","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether to send a verification email when users sign in","t":"`$BOOLEAN`","key$":"send_verification_email_on_sign_in","index$":5},"send_verification_email_on_sign_up":{"a":true,"h":"Send Verification Email On Sign Up","n":"send_verification_email_on_sign_up","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether to send a verification email when users sign up","t":"`$BOOLEAN`","key$":"send_verification_email_on_sign_up","index$":6}},"name":"neon_auth_email_and_password_config","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/auth/email_and_password","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/auth/email_and_password","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"email_and_password"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /projects/{project_id}/branches/{branch_id}/auth/email_and_password","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/projects/{project_id}/branches/{branch_id}/auth/email_and_password","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"email_and_password"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"neon_auth_email_and_password_config","name__orig":"neon_auth_email_and_password_config","Name":"NeonAuthEmailAndPasswordConfig","name_":"neon_auth_email_and_password_config","name-":"neon-auth-email-and-password-config","NAME":"NEON_AUTH_EMAIL_AND_PASSWORD_CONFIG","index$":36}, {"active":true,"entity":"neon_auth_email_and_password_config","key$":"BasicNeonAuthEmailAndPasswordConfigFlow","kind":"basic","name":"BasicNeonAuthEmailAndPasswordConfigFlow","param":{},"step":[{"a":true,"d":{"project_id":"project01"},"i":{"ref":"neon_auth_email_and_password_config_ref01","srcdatavar":"neon_auth_email_and_password_config_ref01_data","suffix":"_up0","textfield":"email_verification_method"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-neon_auth_email_and_password_config_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"neon_auth_email_and_password_config_ref01","srcdatavar":"neon_auth_email_and_password_config_ref01_data","suffix":"_dt0"},"m":{"id":"neon_auth_email_and_password_config01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-neon_auth_email_and_password_config_ref01"}}],"index$":1}]}, 'NeonAuthEmailAndPasswordConfig', {"GET /projects/{project_id}/branches/{branch_id}/auth/email_and_password":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"PATCH /projects/{project_id}/branches/{branch_id}/auth/email_and_password":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"enabled":{"type":"boolean","description":"Controls whether email and password authentication is enabled for this project. When omitted from an update request, the current value is unchanged.","key$":"enabled"},"email_verification_method":{"type":"string","enum":["link","otp"],"description":"Email verification method. `link`: sends a verification link. `otp`: sends a one-time password.\n","x-ref":"#/components/schemas/NeonAuthEmailVerificationMethod","key$":"email_verification_method"},"require_email_verification":{"type":"boolean","description":"When true, users must verify their email address before they can sign in. Omitting this field from an update request leaves the current value unchanged.","key$":"require_email_verification"},"auto_sign_in_after_verification":{"type":"boolean","description":"Whether users are automatically signed in after verifying their email","key$":"auto_sign_in_after_verification"},"send_verification_email_on_sign_up":{"type":"boolean","description":"Whether to send a verification email when users sign up.","key$":"send_verification_email_on_sign_up"},"send_verification_email_on_sign_in":{"type":"boolean","description":"Whether to send a verification email when a user with an unverified email signs in.","key$":"send_verification_email_on_sign_in"},"disable_sign_up":{"type":"boolean","description":"Whether to disable new user sign ups. When omitted, the current setting is not changed.","key$":"disable_sign_up"}},"x-ref":"#/components/schemas/NeonAuthEmailAndPasswordConfigUpdate","index$":1}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let neon_auth_email_and_password_config_ref01_data = Object.values(setup.data.existing.neon_auth_email_and_password_config)[0] as any

    // UPDATE
    const neon_auth_email_and_password_config_ref01_ent = client.NeonAuthEmailAndPasswordConfig()
    const neon_auth_email_and_password_config_ref01_data_up0: any = {}
    neon_auth_email_and_password_config_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const neon_auth_email_and_password_config_ref01_markdef_up0 = { name: 'email_verification_method', value: 'Mark01-neon_auth_email_and_password_config_ref01_' + setup.now }
    ;(neon_auth_email_and_password_config_ref01_data_up0 as any)[neon_auth_email_and_password_config_ref01_markdef_up0.name] = neon_auth_email_and_password_config_ref01_markdef_up0.value

    const neon_auth_email_and_password_config_ref01_resdata_up0 = (await neon_auth_email_and_password_config_ref01_ent.update(neon_auth_email_and_password_config_ref01_data_up0)).data()
    assert(null != neon_auth_email_and_password_config_ref01_resdata_up0)

    assert((neon_auth_email_and_password_config_ref01_resdata_up0 as any)[neon_auth_email_and_password_config_ref01_markdef_up0.name] === neon_auth_email_and_password_config_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/neon_auth_email_and_password_config/NeonAuthEmailAndPasswordConfigTestData.json')

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
    ['neon_auth_email_and_password_config01','neon_auth_email_and_password_config02','neon_auth_email_and_password_config03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_NEON_AUTH_EMAIL_AND_PASSWORD_CONFIG_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_NEON_AUTH_EMAIL_AND_PASSWORD_CONFIG_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_NEON_AUTH_EMAIL_AND_PASSWORD_CONFIG_ENTID']
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
  
