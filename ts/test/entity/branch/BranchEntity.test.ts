

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


describe('BranchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.Branch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'branch.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"annotation":{"a":true,"h":"Annotation","n":"annotation","r":true,"sh":"Annotation data associated with the annotated object.","t":"`$OBJECT`","key$":"annotation","index$":0},"annotations":{"a":true,"h":"Annotations","n":"annotations","r":true,"sh":"Map of annotations keyed by resource identifier, where each value contains the annotation data for that resource.","t":"`$OBJECT`","key$":"annotations","index$":1},"branch":{"a":true,"h":"Branch","n":"branch","r":true,"sh":"Branch returned by the request.","t":"`$OBJECT`","key$":"branch","index$":2},"branches":{"a":true,"h":"Branches","n":"branches","r":true,"sh":"Branches in the project.","t":"`$ARRAY`","key$":"branches","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"pagination":{"a":true,"h":"Pagination","n":"pagination","r":false,"sh":"To paginate the response, issue an initial request with `limit` value.","t":"`$OBJECT`","key$":"pagination","index$":5}},"id":{"field":"id","name":"id"},"name":"branch","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches","q":{"exist":["project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":false,"k":"query","n":"include_deleted","or":"include_deleted","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"updated_at","k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"desc","k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches","q":{"exist":["cursor","include_deleted","limit","project_id","search","sort_by","sort_order"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /projects/{project_id}/branches/{branch_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/{branch_id}","q":{"exist":["id","project_id"]},"r":{"param":{"branch_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /projects/{project_id}/branches/count","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/projects/{project_id}/branches/count","q":{"$action":"count","exist":["project_id","search"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"lit":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /projects/{project_id}/branches/{branch_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/branches/{branch_id}","q":{"exist":["id","project_id"]},"r":{"param":{"branch_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /projects/{project_id}/branches/{branch_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/projects/{project_id}/branches/{branch_id}","q":{"exist":["id","project_id"]},"r":{"param":{"branch_id":"id"}},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"id"}],"t":{"req":{"branch":"`reqdata`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"branch","name__orig":"branch","Name":"Branch","name_":"branch","name-":"branch","NAME":"BRANCH","index$":7}, {"active":true,"entity":"branch","key$":"BasicBranchFlow","kind":"basic","name":"BasicBranchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"branch_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"branch_ref01"}}],"index$":1},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"branch_ref01","srcdatavar":"branch_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-branch_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"branch_ref01","srcdatavar":"branch_ref01_data","suffix":"_dt0"},"m":{"id":"branch01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-branch_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"branch_ref01","suffix":"_rm0"},"m":{"id":"branch01","project_id":"project01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"branch_ref01"}}],"index$":5}]}, 'Branch', {"POST /projects/{project_id}/branches":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"type":"object","properties":{"endpoints":{"type":"array","items":{"type":"object","required":[],"properties":{},"x-ref":"#/components/schemas/BranchCreateRequestEndpointOptions"},"description":"Compute endpoints to create together with the branch. If omitted, the branch is created without any compute endpoint. Endpoints can be added to the branch separately after creation."},"branch":{"type":"object","description":"Optional configuration for the new branch, for example `name`, `parent_id` (fork from a branch), `parent_lsn` or `parent_timestamp` (point-in-time branching), and `protected`.","properties":{"parent_id":{},"name":{},"parent_lsn":{},"parent_timestamp":{},"protected":{},"archived":{},"init_source":{},"expires_at":{}}}},"x-ref":"#/components/schemas/BranchCreateRequest"},{"type":"object","x-tags":["Branch"],"properties":{"annotation_value":{"type":"object","description":"A free-form map of string key-value pairs for attaching metadata to a resource (for example, a git commit reference). Maximum 50 entries.","x-tags":["Branch"],"maxProperties":50,"additionalProperties":{"type":"string"},"example":{"github-commit-ref":"github-branch-name"},"x-ref":"#/components/schemas/AnnotationValueData"}},"x-ref":"#/components/schemas/AnnotationCreateValueRequest"}],"index$":1},"examples":{"branch_only":{"summary":"Branch only","value":{"branch":{"parent_id":"br-aged-salad-637688","name":"mybranch"}}},"branch_with_endpoint":{"summary":"Branch with endpoint","value":{"endpoints":[{"type":"read_write"}],"branch":{"parent_id":"br-aged-salad-637688","name":"mybranch"}}}}}},"required":false},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]},"GET /projects/{project_id}/branches":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"search","description":"Search by branch `name` or `id`. You can specify partial `name` or `id` values to filter results.","in":"query","schema":{"type":"string"},"index$":1},{"name":"sort_by","description":"Sort the branches by sort_field. If not provided, branches will be sorted by updated_at descending order","in":"query","schema":{"type":"string","default":"updated_at","enum":["name","created_at","updated_at"]},"index$":2},{"name":"cursor","description":"A cursor to use in pagination. A cursor defines your place in the data list. Include `response.pagination.next` in subsequent API calls to fetch next page of the list.","in":"query","schema":{"type":"string"},"x-ref":"#/components/parameters/CursorParam","index$":3},{"name":"sort_order","description":"Defines the sorting order of entities.","in":"query","schema":{"type":"string","default":"desc","enum":["asc","desc"]},"x-ref":"#/components/parameters/SortOrderParam","index$":4},{"name":"limit","description":"The maximum number of records to be returned in the response","in":"query","schema":{"type":"integer","minimum":1,"maximum":10000},"x-ref":"#/components/parameters/LimitParam","index$":5},{"name":"include_deleted","description":"If true, return recoverable deleted branches too (soft-deleted within the recovery window).\nIf false or not provided, return only active (non-deleted) branches.\n\nThis parameter is part of the Branch Recovery feature, which is in preview and not available to all users.\n","in":"query","schema":{"type":"boolean","default":false},"index$":6}]},"GET /projects/{project_id}/branches/{branch_id}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"GET /projects/{project_id}/branches/count":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"search","description":"Count branches matching the `name` in search query","in":"query","schema":{"type":"string"},"index$":1}]},"DELETE /projects/{project_id}/branches/{branch_id}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]},"PATCH /projects/{project_id}/branches/{branch_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["branch"],"properties":{"branch":{"type":"object","description":"Branch attributes to update. Supply only the fields you want to change, for example `name` or `protected`.","properties":{"name":{"type":"string","minLength":1,"maxLength":256,"description":"New display name for the branch."},"protected":{"type":"boolean","description":"Whether the branch is protected. Protected branches (and their computes) cannot be deleted, archived, or reset, and block deletion of the project. Can be gated by `protected_branches_only` in the IP allowlist. Paid plans only.\n"},"expires_at":{"description":"The timestamp when the branch is scheduled to expire and be automatically deleted. Must be set by the client following the [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) format with precision up to seconds (such as 2025-06-09T18:02:16Z). Deletion is performed by a background job and may not occur exactly at the specified time. If this field is set to null, the expiration timestamp is removed.\n\nAccess to this feature is currently limited to participants in the Early Access Program.\n","type":"string","format":"date-time","nullable":true,"example":"2025-06-09T18:02:16Z"}},"key$":"branch"}},"x-ref":"#/components/schemas/BranchUpdateRequest","index$":1},"example":{"branch":{"name":"mybranch"}}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const branch_ref01_ent = client.Branch()
    let branch_ref01_data = setup.data.new.branch['branch_ref01']
    branch_ref01_data['project_id'] = setup.idmap['project01']

    branch_ref01_data = (await branch_ref01_ent.create(branch_ref01_data)).data()
    assert(null != branch_ref01_data.id)


    // LIST
    const branch_ref01_match: any = {}
    branch_ref01_match['project_id'] = setup.idmap['project01']

    const branch_ref01_list = (await branch_ref01_ent.list(branch_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(branch_ref01_list, { id: branch_ref01_data.id })))


    // UPDATE
    const branch_ref01_data_up0: any = {}
    branch_ref01_data_up0.id = branch_ref01_data.id
    branch_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const branch_ref01_resdata_up0 = (await branch_ref01_ent.update(branch_ref01_data_up0)).data()
    assert(branch_ref01_resdata_up0.id === branch_ref01_data_up0.id)


    // LOAD
    const branch_ref01_match_dt0: any = {}
    branch_ref01_match_dt0.id = branch_ref01_data.id
    const branch_ref01_data_dt0 = (await branch_ref01_ent.load(branch_ref01_match_dt0)).data()
    assert(branch_ref01_data_dt0.id === branch_ref01_data.id)


    // REMOVE
    const branch_ref01_match_rm0: any = { id: branch_ref01_data.id }
    await branch_ref01_ent.remove(branch_ref01_match_rm0)
  

    // LIST
    const branch_ref01_match_rt0: any = {}
    branch_ref01_match_rt0['project_id'] = setup.idmap['project01']

    const branch_ref01_list_rt0 = (await branch_ref01_ent.list(branch_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(branch_ref01_list_rt0, { id: branch_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/branch/BranchTestData.json')

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
    ['branch01','branch02','branch03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_BRANCH_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_BRANCH_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_BRANCH_ENTID']
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
  
