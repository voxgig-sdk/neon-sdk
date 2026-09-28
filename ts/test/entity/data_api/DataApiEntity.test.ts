

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


describe('DataApiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.DataApi()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'data_api.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"add_default_grants":{"a":true,"h":"Add Default Grants","n":"add_default_grants","r":false,"sh":"Grant all permissions to the tables in the public schema to authenticated users","t":"`$BOOLEAN`","key$":"add_default_grants","index$":0},"auth_provider":{"a":true,"h":"Auth Provider","n":"auth_provider","r":false,"sh":"Authentication provider for the Neon Data API.","t":"`$STRING`","key$":"auth_provider","index$":1},"available_schemas":{"a":true,"h":"Available Schemas","n":"available_schemas","r":false,"sh":"List of available database schemas (SubZero only)","t":"`$ARRAY`","key$":"available_schemas","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"jwks_url":{"a":true,"fo":"uri","h":"Jwks Url","n":"jwks_url","r":false,"sh":"URL of the JWKS endpoint used to verify JWTs for this Data API.","t":"`$STRING`","key$":"jwks_url","index$":4},"jwt_audience":{"a":true,"h":"Jwt Audience","n":"jwt_audience","r":false,"sh":"Expected `aud` claim in incoming JWTs.","t":"`$STRING`","key$":"jwt_audience","index$":5},"provider_name":{"a":true,"h":"Provider Name","n":"provider_name","r":false,"sh":"Display name for the authentication provider.","t":"`$STRING`","key$":"provider_name","index$":6},"settings":{"a":true,"h":"Settings","n":"settings","r":false,"sh":"Configuration settings for the Data API (SubZero only)","t":"`$OBJECT`","key$":"settings","index$":7},"skip_auth_schema":{"a":true,"h":"Skip Auth Schema","n":"skip_auth_schema","r":false,"sh":"Skip creating the auth schema and RLS functions","t":"`$BOOLEAN`","key$":"skip_auth_schema","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The status of the Neon Data API deployment","t":"`$STRING`","key$":"status","index$":9},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"sh":"The URL of the Neon Data API","t":"`$STRING`","key$":"url","index$":10}},"id":{"field":"id","name":"id"},"name":"data_api","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/data-api/{database_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"database_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/data-api/{database_name}","q":{"exist":["branch_id","id","project_id"]},"r":{"param":{"database_name":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"data-api"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}/data-api/{database_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"database_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}/data-api/{database_name}","q":{"exist":["branch_id","id","project_id"]},"r":{"param":{"database_name":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"data-api"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /projects/{project_id}/branches/{branch_id}/data-api/{database_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"database_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/branches/{branch_id}/data-api/{database_name}","q":{"exist":["branch_id","id","project_id"]},"r":{"param":{"database_name":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"data-api"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /projects/{project_id}/branches/{branch_id}/data-api/{database_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"database_name","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PATCH","o":"/projects/{project_id}/branches/{branch_id}/data-api/{database_name}","q":{"exist":["branch_id","id","project_id"]},"r":{"param":{"database_name":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"data-api"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"data_api","name__orig":"data_api","Name":"DataApi","name_":"data_api","name-":"data-api","NAME":"DATA_API","index$":21}, {"active":true,"entity":"data_api","key$":"BasicDataApiFlow","kind":"basic","name":"BasicDataApiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"data_api_ref01"},"m":{"branch_id":"branch01","database_name":"database_name01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"branch_id":"branch01","project_id":"project01"},"i":{"ref":"data_api_ref01","srcdatavar":"data_api_ref01_data","suffix":"_up0","textfield":"auth_provider"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-data_api_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"data_api_ref01","srcdatavar":"data_api_ref01_data","suffix":"_dt0"},"m":{"branch_id":"branch01","id":"data_api01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-data_api_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"data_api_ref01","suffix":"_rm0"},"m":{"branch_id":"branch01","id":"data_api01","project_id":"project01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'DataApi', {"POST /projects/{project_id}/branches/{branch_id}/data-api/{database_name}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"x-tags":["DataAPI"],"description":"Create Neon Data API","type":"object","properties":{"auth_provider":{"type":"string","description":"Authentication provider for the Neon Data API. `neon_auth`: use Neon's built-in managed authentication (no JWKS configuration required). `external`: use an external JWT provider, which requires `jwks_url`. When omitted, no auth provider is configured (existing setup is kept).","enum":["neon_auth","external"],"key$":"auth_provider"},"jwks_url":{"description":"URL of the JWKS endpoint used to verify JWTs for this Data API. Required when configuring JWT-based authentication; omit when using a non-JWT auth provider.","type":"string","format":"uri","key$":"jwks_url"},"provider_name":{"description":"Display name for the authentication provider. Accepted values include \"Clerk\", \"Stytch\", and \"Auth0\", but any non-empty string is valid. Optional field.","type":"string","key$":"provider_name"},"jwt_audience":{"description":"Expected `aud` claim in incoming JWTs. When set, tokens with a different audience are rejected; tokens with no audience are still accepted. Omit to skip audience validation.\n","type":"string","key$":"jwt_audience"},"add_default_grants":{"description":"Grant all permissions to the tables in the public schema to authenticated users","type":"boolean","default":false,"key$":"add_default_grants"},"skip_auth_schema":{"description":"Skip creating the auth schema and RLS functions","type":"boolean","default":false,"key$":"skip_auth_schema"},"settings":{"x-tags":["DataAPI"],"description":"Auth and schema configuration for the Data API.","type":"object","properties":{"db_aggregates_enabled":{"type":"boolean","description":"Enable aggregates feature","default":true},"db_anon_role":{"type":"string","description":"Database role to use for anonymous requests","default":"anonymous"},"db_extra_search_path":{"type":"string","description":"Extra schemas to add to the search path"},"db_max_rows":{"type":"integer","description":"Hard limit on the number of rows returned in a single Data API response. No limit when unset."},"db_schemas":{"type":"array","items":{"type":"string"},"description":"List of schemas to expose via the API. Default: [\"public\"]"},"jwt_role_claim_key":{"type":"string","description":"JWT claim key to use for role extraction","default":".role"},"jwt_cache_max_lifetime":{"type":"integer","description":"Maximum lifetime of the Data API's JWT cache, in seconds."},"openapi_mode":{"type":"string","description":"OpenAPI specification mode (ignore-privileges, disabled)","default":"disabled"},"server_cors_allowed_origins":{"type":"string","description":"CORS allowed origins"},"server_timing_enabled":{"type":"boolean","description":"When enabled, the Data API adds `Server-Timing` headers to each response showing database execution and internal processing time. Default: disabled."}},"x-ref":"#/components/schemas/DataAPISettings","key$":"settings"}},"x-ref":"#/components/schemas/DataAPICreateRequest","index$":1}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"database_name","in":"path","description":"The database name","required":true,"schema":{"type":"string"},"index$":2}]},"GET /projects/{project_id}/branches/{branch_id}/data-api/{database_name}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"database_name","in":"path","description":"The database name","required":true,"schema":{"type":"string"},"index$":2}]},"DELETE /projects/{project_id}/branches/{branch_id}/data-api/{database_name}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"database_name","in":"path","description":"The database name","required":true,"schema":{"type":"string"},"index$":2}]},"PATCH /projects/{project_id}/branches/{branch_id}/data-api/{database_name}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"x-tags":["DataAPI"],"description":"Update Neon Data API","type":"object","properties":{"settings":{"x-tags":["DataAPI"],"description":"Configuration settings for the Neon Data API.","type":"object","properties":{"db_aggregates_enabled":{"type":"boolean","description":"Enable aggregates feature","default":true},"db_anon_role":{"type":"string","description":"Database role to use for anonymous requests","default":"anonymous"},"db_extra_search_path":{"type":"string","description":"Extra schemas to add to the search path"},"db_max_rows":{"type":"integer","description":"Hard limit on the number of rows returned in a single Data API response. No limit when unset."},"db_schemas":{"type":"array","items":{"type":"string"},"description":"List of schemas to expose via the API. Default: [\"public\"]"},"jwt_role_claim_key":{"type":"string","description":"JWT claim key to use for role extraction","default":".role"},"jwt_cache_max_lifetime":{"type":"integer","description":"Maximum lifetime of the Data API's JWT cache, in seconds."},"openapi_mode":{"type":"string","description":"OpenAPI specification mode (ignore-privileges, disabled)","default":"disabled"},"server_cors_allowed_origins":{"type":"string","description":"CORS allowed origins"},"server_timing_enabled":{"type":"boolean","description":"When enabled, the Data API adds `Server-Timing` headers to each response showing database execution and internal processing time. Default: disabled."}},"x-ref":"#/components/schemas/DataAPISettings","key$":"settings"}},"x-ref":"#/components/schemas/DataAPIUpdateRequest","index$":1}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"database_name","in":"path","description":"The database name","required":true,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const data_api_ref01_ent = client.DataApi()
    let data_api_ref01_data = setup.data.new.data_api['data_api_ref01']
    data_api_ref01_data['branch_id'] = setup.idmap['branch01']
    data_api_ref01_data['database_name'] = setup.idmap['database_name01']
    data_api_ref01_data['project_id'] = setup.idmap['project01']

    data_api_ref01_data = (await data_api_ref01_ent.create(data_api_ref01_data)).data()
    assert(null != data_api_ref01_data.id)


    // UPDATE
    const data_api_ref01_data_up0: any = {}
    data_api_ref01_data_up0.id = data_api_ref01_data.id
    data_api_ref01_data_up0 ['branch_id'] = setup.idmap['branch_id']
    data_api_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const data_api_ref01_markdef_up0 = { name: 'auth_provider', value: 'Mark01-data_api_ref01_' + setup.now }
    ;(data_api_ref01_data_up0 as any)[data_api_ref01_markdef_up0.name] = data_api_ref01_markdef_up0.value

    const data_api_ref01_resdata_up0 = (await data_api_ref01_ent.update(data_api_ref01_data_up0)).data()
    assert(data_api_ref01_resdata_up0.id === data_api_ref01_data_up0.id)

    assert((data_api_ref01_resdata_up0 as any)[data_api_ref01_markdef_up0.name] === data_api_ref01_markdef_up0.value)


    // LOAD
    const data_api_ref01_match_dt0: any = {}
    data_api_ref01_match_dt0.id = data_api_ref01_data.id
    const data_api_ref01_data_dt0 = (await data_api_ref01_ent.load(data_api_ref01_match_dt0)).data()
    assert(data_api_ref01_data_dt0.id === data_api_ref01_data.id)


    // REMOVE
    const data_api_ref01_match_rm0: any = { id: data_api_ref01_data.id }
    await data_api_ref01_ent.remove(data_api_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/data_api/DataApiTestData.json')

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
    ['data_api01','data_api02','data_api03','project01','project02','project03','branch01','branch02','branch03','database_name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_DATA_API_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_DATA_API_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_DATA_API_ENTID']
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
  
