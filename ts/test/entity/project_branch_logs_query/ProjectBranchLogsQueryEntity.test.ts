

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


describe('ProjectBranchLogsQueryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.ProjectBranchLogsQuery()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_branch_logs_query.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"body_contains":{"a":true,"h":"Body Contains","n":"body_contains","r":false,"sh":"Match records whose rendered `message` contains this case-sensitive substring.","t":"`$STRING`","key$":"body_contains","index$":0},"cursor":{"a":true,"h":"Cursor","n":"cursor","r":false,"sh":"Opaque pagination cursor returned as `next_cursor` by a previous call.","t":"`$STRING`","key$":"cursor","index$":1},"end_time":{"a":true,"fo":"date-time","h":"End Time","n":"end_time","r":false,"sh":"Exclusive end of the query window.","t":"`$STRING`","key$":"end_time","index$":2},"is_truncated":{"a":true,"h":"Is Truncated","n":"is_truncated","r":true,"sh":"True when more records matched than were returned.","t":"`$BOOLEAN`","key$":"is_truncated","index$":3},"limit":{"a":true,"h":"Limit","n":"limit","r":false,"sh":"Maximum number of log records to return per page.","t":"`$INTEGER`","key$":"limit","index$":4},"logql":{"a":true,"h":"Logql","n":"logql","r":false,"sh":"Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream.","t":"`$STRING`","key$":"logql","index$":5},"logs":{"a":true,"h":"Logs","n":"logs","r":true,"t":"`$ARRAY`","key$":"logs","index$":6},"minimum_severity":{"a":true,"h":"Minimum Severity","n":"minimum_severity","r":false,"sh":"An OpenTelemetry severity level.","t":"`$STRING`","key$":"minimum_severity","index$":7},"next_cursor":{"a":true,"h":"Next Cursor","n":"next_cursor","r":false,"sh":"Pagination cursor to pass as `cursor` on the next request.","t":"`$STRING`","key$":"next_cursor","index$":8},"scope_name":{"a":true,"h":"Scope Name","n":"scope_name","r":false,"sh":"Match the OpenTelemetry instrumentation scope name exactly.","t":"`$STRING`","key$":"scope_name","index$":9},"service_name":{"a":true,"h":"Service Name","n":"service_name","r":false,"sh":"Match the OpenTelemetry `service.name` resource attribute exactly.","t":"`$STRING`","key$":"service_name","index$":10},"severity_text":{"a":true,"h":"Severity Text","n":"severity_text","r":false,"sh":"Match the OpenTelemetry severity text exactly.","t":"`$STRING`","key$":"severity_text","index$":11},"since":{"a":true,"h":"Since","n":"since","r":false,"sh":"Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted.","t":"`$ANY`","key$":"since","index$":12},"sort_order":{"a":true,"h":"Sort Order","n":"sort_order","r":false,"sh":"Order matching records by timestamp.","t":"`$STRING`","key$":"sort_order","index$":13},"source":{"a":true,"h":"Source","n":"source","r":false,"sh":"The Neon service that emitted the log record.","t":"`$STRING`","key$":"source","index$":14},"start_time":{"a":true,"fo":"date-time","h":"Start Time","n":"start_time","r":false,"sh":"Inclusive beginning of the query window.","t":"`$STRING`","key$":"start_time","index$":15},"trace_id":{"a":true,"h":"Trace Id","n":"trace_id","r":false,"sh":"Match records associated with this OpenTelemetry trace ID.","t":"`$STRING`","key$":"trace_id","index$":16}},"name":"project_branch_logs_query","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/branches/{branch_id}/logs/query","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/branches/{branch_id}/logs/query","q":{"exist":["branch_id","project_id"]},"r":{},"s":[{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"branch_id"},{"lit":"logs"},{"lit":"query"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"project_branch_logs_query","name__orig":"project_branch_logs_query","Name":"ProjectBranchLogsQuery","name_":"project_branch_logs_query","name-":"project-branch-logs-query","NAME":"PROJECT_BRANCH_LOGS_QUERY","index$":59}, {"active":true,"entity":"project_branch_logs_query","key$":"BasicProjectBranchLogsQueryFlow","kind":"basic","name":"BasicProjectBranchLogsQueryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"project_branch_logs_query_ref01"},"m":{"branch_id":"branch01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ProjectBranchLogsQuery', {"POST /projects/{project_id}/branches/{branch_id}/logs/query":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","x-sensitive":["body_contains","logql","cursor"],"properties":{"since":{"allOf":[{"type":"string","pattern":"^[0-9]{1,6}(ms|s|m|h|d)$","description":"A length of time as a count and a unit, for example `30m`, `6h`, or\n`7d`. Valid units are `ms`, `s`, `m`, `h`, and `d`.\n","example":"1h","x-ref":"#/components/schemas/ProjectBranchLogDuration"}],"description":"Length of the query window, ending at `end_time` or at the current\ntime when `end_time` is omitted. Mutually exclusive with\n`start_time`. Prefer this over computing absolute bounds when the\ncaller only means \"the last hour\".\n","key$":"since"},"start_time":{"type":"string","format":"date-time","description":"Inclusive beginning of the query window. Mutually exclusive with\n`since`. Defaults to one hour before `end_time`, or one hour before\nthe current time when both bounds are omitted.\n","key$":"start_time"},"end_time":{"type":"string","format":"date-time","description":"Exclusive end of the query window. Defaults to the current time.","key$":"end_time"},"limit":{"type":"integer","minimum":1,"maximum":1000,"default":100,"description":"Maximum number of log records to return per page.","key$":"limit"},"cursor":{"type":"string","description":"Opaque pagination cursor returned as `next_cursor` by a previous\ncall. Resume the query after the last record of the previous page,\nrepeating the time range and every filter unchanged.\n","key$":"cursor"},"sort_order":{"type":"string","default":"desc","enum":["asc","desc"],"description":"Order matching records by timestamp. `desc`, the default, returns\nthe newest records first.\n","key$":"sort_order"},"source":{"type":"string","description":"The Neon service that emitted the log record.","enum":["function","storage","pg_endpoint"],"x-ref":"#/components/schemas/ProjectBranchLogSource","key$":"source"},"service_name":{"type":"string","minLength":1,"description":"Match the OpenTelemetry `service.name` resource attribute exactly.","key$":"service_name"},"scope_name":{"type":"string","minLength":1,"description":"Match the OpenTelemetry instrumentation scope name exactly.","key$":"scope_name"},"minimum_severity":{"type":"string","description":"An OpenTelemetry severity level. A minimum severity includes every\nhigher level in this order: `trace`, `debug`, `info`, `warn`, `error`,\n`fatal`.\n","enum":["trace","debug","info","warn","error","fatal"],"x-ref":"#/components/schemas/ProjectBranchLogSeverity","key$":"minimum_severity"},"severity_text":{"type":"string","minLength":1,"description":"Match the OpenTelemetry severity text exactly.","key$":"severity_text"},"body_contains":{"type":"string","minLength":1,"description":"Match records whose rendered `message` contains this case-sensitive\nsubstring.\n\nRecords with a structured body are matched against their JSON\nrendering, so the substring meets JSON syntax rather than prose: a\nbare key name such as `operation` matches every record carrying that\nkey, and `http_status: 200` matches none, because the rendering\ncontains `\"http_status\":200` with no space.\n","key$":"body_contains"},"trace_id":{"type":"string","pattern":"^[0-9a-f]{32}$","description":"Match records associated with this OpenTelemetry trace ID. W3C Trace\nContext defines a trace ID as 32 lowercase hex digits, and that is\nwhat is stored, so an uppercase value is rejected rather than\nsilently matching nothing.\n","key$":"trace_id"},"logql":{"type":"string","minLength":1,"description":"Escape hatch for selections the structured filters cannot express: a\nraw LogQL expression, evaluated against this branch's log stream.\n\nOnly stream selectors and line filters are accepted — no\naggregations and no parser stages. Supplying this alongside any\nstructured filter is rejected with `conflicting_filters` rather than\nsilently ignoring one of them. `limit`, `sort_order`, and the time\nwindow still apply.\n\nThis field passes the underlying query language through to the\ncaller, so unlike the rest of this contract it may change as that\nbackend changes. Prefer the structured filters where they suffice.\n","example":"{entity_type=\"function\"} |~ \"(?i)timeout\"","key$":"logql"}},"x-ref":"#/components/schemas/ProjectBranchLogsQueryRequest","index$":1}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"path","description":"The Neon branch ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_branch_logs_query_ref01_ent = client.ProjectBranchLogsQuery()
    let project_branch_logs_query_ref01_data = setup.data.new.project_branch_logs_query['project_branch_logs_query_ref01']
    project_branch_logs_query_ref01_data['branch_id'] = setup.idmap['branch01']
    project_branch_logs_query_ref01_data['project_id'] = setup.idmap['project01']

    project_branch_logs_query_ref01_data = (await project_branch_logs_query_ref01_ent.create(project_branch_logs_query_ref01_data)).data()
    assert(null != project_branch_logs_query_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_branch_logs_query/ProjectBranchLogsQueryTestData.json')

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
    ['project_branch_logs_query01','project_branch_logs_query02','project_branch_logs_query03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_PROJECT_BRANCH_LOGS_QUERY_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_PROJECT_BRANCH_LOGS_QUERY_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_PROJECT_BRANCH_LOGS_QUERY_ENTID']
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
  
