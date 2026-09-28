

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


describe('AuthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.Auth()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'auth.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_id":{"a":true,"h":"Account Id","n":"account_id","r":true,"sh":"The ID of the account associated with this authentication record.","t":"`$STRING`","key$":"account_id","index$":0},"auth_data":{"a":true,"h":"Auth Data","n":"auth_data","r":false,"t":"`$STRING`","key$":"auth_data","index$":1},"auth_method":{"a":true,"h":"Auth Method","n":"auth_method","r":true,"sh":"Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication.","t":"`$STRING`","key$":"auth_method","index$":2}},"name":"auth","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/auth/domains","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/auth/domains","q":{"$action":"domain","exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"domains"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /auth","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/auth","q":{},"r":{},"s":[{"lit":"auth"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"auth_user_id","or":"auth_user_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}","q":{"exist":["auth_user_id","branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"users"},{"var":"auth_user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"oauth_provider_id","or":"oauth_provider_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}","q":{"exist":["branch_id","oauth_provider_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"oauth_providers"},{"var":"oauth_provider_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /projects/{project_id}/branches/{branch_id}/auth","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/branches/{branch_id}/auth","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"DELETE /projects/{project_id}/branches/{branch_id}/auth/domains","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/branches/{branch_id}/auth/domains","q":{"$action":"domain","exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"auth"},{"lit":"domains"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"],["$.main.kit.entity.project","$.main.kit.entity.branch"],["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"auth","name__orig":"auth","Name":"Auth","name_":"auth","name-":"auth","NAME":"AUTH","index$":3}, {"active":true,"entity":"auth","key$":"BasicAuthFlow","kind":"basic","name":"BasicAuthFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"auth_ref01"},"m":{"branch_id":"branch01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"auth_ref01","srcdatavar":"auth_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-auth_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"auth_ref01","suffix":"_rm0"},"m":{"id":"auth01","project_id":"project01"},"o":"remove","s":[],"v":[],"index$":2}]}, 'Auth', {"POST /projects/{project_id}/branches/{branch_id}/auth/domains":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["domain","auth_provider"],"properties":{"domain":{"type":"string","format":"uri","description":"URI to add to the redirect URI allowlist for the auth provider.","key$":"domain"},"auth_provider":{"description":"Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.","type":"string","enum":["mock","stack","better_auth"],"x-ref":"#/components/schemas/NeonAuthSupportedAuthProvider","key$":"auth_provider"}},"x-ref":"#/components/schemas/NeonAuthAddDomainToRedirectURIWhitelistRequest"}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"GET /auth":{"protocol":"http","parameters":[]},"DELETE /projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"auth_user_id","in":"path","description":"The Neon user ID","required":true,"schema":{"type":"string"},"index$":2}]},"DELETE /projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"oauth_provider_id","in":"path","description":"The OAuth provider ID","required":true,"schema":{"type":"string","enum":["google","github","microsoft","vercel"],"x-ref":"#/components/schemas/NeonAuthOauthProviderId"},"index$":2}]},"DELETE /projects/{project_id}/branches/{branch_id}/auth":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"delete_data":{"type":"boolean","description":"If true, deletes the `neon_auth` schema from the database","default":false}}}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"DELETE /projects/{project_id}/branches/{branch_id}/auth/domains":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["domains","auth_provider"],"properties":{"auth_provider":{"description":"Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.","type":"string","enum":["mock","stack","better_auth"],"x-ref":"#/components/schemas/NeonAuthSupportedAuthProvider"},"domains":{"type":"array","items":{"type":"object","required":["domain"],"properties":{"domain":{"type":"string","format":"uri","description":"URI to remove from the redirect URI whitelist."}},"x-ref":"#/components/schemas/NeonAuthDeleteDomainFromRedirectURIWhitelistItem"},"description":"Domain names to remove from the redirect URI whitelist for the specified auth provider."}},"x-ref":"#/components/schemas/NeonAuthDeleteDomainFromRedirectURIWhitelistRequest"}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const auth_ref01_ent = client.Auth()
    let auth_ref01_data = setup.data.new.auth['auth_ref01']
    auth_ref01_data['branch_id'] = setup.idmap['branch01']
    auth_ref01_data['project_id'] = setup.idmap['project01']

    auth_ref01_data = (await auth_ref01_ent.create(auth_ref01_data)).data()
    assert(null != auth_ref01_data)


    // LOAD
    const auth_ref01_match_dt0: any = {}
    const auth_ref01_data_dt0 = (await auth_ref01_ent.load(auth_ref01_match_dt0)).data()
    assert(null != auth_ref01_data_dt0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/auth/AuthTestData.json')

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
    ['auth01','auth02','auth03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_AUTH_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_AUTH_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_AUTH_ENTID']
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
  
