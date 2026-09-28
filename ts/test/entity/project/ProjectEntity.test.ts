

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


describe('ProjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEON_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEON_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeonSDK.test()
    const ent = testsdk.Project()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEON_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active_time_seconds":{"a":true,"fo":"int64","h":"Active Time Seconds","n":"active_time_seconds","r":true,"sh":"Seconds.","t":"`$INTEGER`","key$":"active_time_seconds","index$":0},"applications":{"a":true,"h":"Applications","n":"applications","r":true,"sh":"Map of project IDs to their installed applications.","t":"`$OBJECT`","key$":"applications","index$":1},"branch_logical_size_limit":{"a":true,"fo":"int64","h":"Branch Logical Size Limit","n":"branch_logical_size_limit","r":true,"sh":"The logical size limit for a branch.","t":"`$INTEGER`","key$":"branch_logical_size_limit","index$":2},"branch_logical_size_limit_bytes":{"a":true,"fo":"int64","h":"Branch Logical Size Limit Bytes","n":"branch_logical_size_limit_bytes","r":true,"sh":"The logical size limit for a branch.","t":"`$INTEGER`","key$":"branch_logical_size_limit_bytes","index$":3},"compute_last_active_at":{"a":true,"fo":"date-time","h":"Compute Last Active At","n":"compute_last_active_at","r":false,"sh":"The most recent time when any endpoint of this project was active.","t":"`$STRING`","key$":"compute_last_active_at","index$":4},"compute_time_seconds":{"a":true,"fo":"int64","h":"Compute Time Seconds","n":"compute_time_seconds","r":true,"sh":"Seconds.","t":"`$INTEGER`","key$":"compute_time_seconds","index$":5},"consumption_period_end":{"a":true,"fo":"date-time","h":"Consumption Period End","n":"consumption_period_end","r":true,"sh":"A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period.","t":"`$STRING`","key$":"consumption_period_end","index$":6},"consumption_period_start":{"a":true,"fo":"date-time","h":"Consumption Period Start","n":"consumption_period_start","r":true,"sh":"A date-time indicating when Neon Cloud started measuring consumption for current consumption period.","t":"`$STRING`","key$":"consumption_period_start","index$":7},"cpu_used_sec":{"a":true,"de":true,"fo":"int64","h":"Cpu Used Sec","n":"cpu_used_sec","r":true,"sh":"Deprecated.","t":"`$INTEGER`","key$":"cpu_used_sec","index$":8},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"A timestamp indicating when the project was created","t":"`$STRING`","key$":"created_at","index$":9},"creation_source":{"a":true,"h":"Creation Source","n":"creation_source","r":true,"sh":"The project creation source","t":"`$STRING`","key$":"creation_source","index$":10},"data_storage_bytes_hour":{"a":true,"fo":"int64","h":"Data Storage Bytes Hour","n":"data_storage_bytes_hour","r":true,"sh":"Bytes-Hour.","t":"`$INTEGER`","key$":"data_storage_bytes_hour","index$":11},"data_transfer_bytes":{"a":true,"fo":"int64","h":"Data Transfer Bytes","n":"data_transfer_bytes","r":true,"sh":"Bytes.","t":"`$INTEGER`","key$":"data_transfer_bytes","index$":12},"default_endpoint_settings":{"a":true,"h":"Default Endpoint Settings","n":"default_endpoint_settings","r":false,"sh":"A collection of settings for a Neon endpoint","t":"`$OBJECT`","key$":"default_endpoint_settings","index$":13},"effective_project_permission":{"a":true,"h":"Effective Project Permission","n":"effective_project_permission","r":false,"t":"`$STRING`","key$":"effective_project_permission","index$":14},"hipaa_enabled_at":{"a":true,"fo":"date-time","h":"Hipaa Enabled At","n":"hipaa_enabled_at","r":false,"sh":"A timestamp indicating when HIPAA was enabled for this project","t":"`$STRING`","key$":"hipaa_enabled_at","index$":15},"history_retention_seconds":{"a":true,"fo":"int32","h":"History Retention Seconds","n":"history_retention_seconds","r":true,"sh":"The number of seconds to retain the shared history for all branches in this project.","t":"`$INTEGER`","key$":"history_retention_seconds","index$":16},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The Neon project ID.","t":"`$STRING`","key$":"id","index$":17},"integrations":{"a":true,"h":"Integrations","n":"integrations","r":true,"sh":"Map of project IDs to their associated integration details.","t":"`$OBJECT`","key$":"integrations","index$":18},"label":{"a":true,"h":"Label","n":"label","r":true,"sh":"Human-readable name for the VPC endpoint assignment, used to identify it within the organization.","t":"`$STRING`","key$":"label","index$":19},"maintenance_scheduled_for":{"a":true,"fo":"date-time","h":"Maintenance Scheduled For","n":"maintenance_scheduled_for","r":false,"sh":"A timestamp indicating when project update begins.","t":"`$STRING`","key$":"maintenance_scheduled_for","index$":20},"maintenance_starts_at":{"a":true,"fo":"date-time","h":"Maintenance Starts At","n":"maintenance_starts_at","r":false,"sh":"A timestamp indicating when project maintenance begins.","t":"`$STRING`","key$":"maintenance_starts_at","index$":21},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The project name","t":"`$STRING`","key$":"name","index$":22},"org_id":{"a":true,"h":"Org Id","n":"org_id","r":false,"sh":"The Neon organization ID.","t":"`$STRING`","key$":"org_id","index$":23},"owner":{"a":true,"h":"Owner","n":"owner","r":true,"sh":"Ownership details for the project, including the owner's name and email.","t":"`$OBJECT`","key$":"owner","index$":24},"owner_id":{"a":true,"h":"Owner Id","n":"owner_id","r":true,"sh":"ID of the organization that owns the project.","t":"`$STRING`","key$":"owner_id","index$":25},"pagination":{"a":true,"h":"Pagination","n":"pagination","r":true,"sh":"Cursor-based pagination.","t":"`$OBJECT`","key$":"pagination","index$":26},"pg_version":{"a":true,"h":"Pg Version","n":"pg_version","r":true,"sh":"The major Postgres version number.","t":"`$INTEGER`","key$":"pg_version","index$":27},"platform_id":{"a":true,"h":"Platform Id","n":"platform_id","r":true,"sh":"The cloud platform identifier.","t":"`$STRING`","key$":"platform_id","index$":28},"project":{"a":true,"h":"Project","n":"project","r":true,"sh":"Configuration for the new project, including name, region, and Postgres compute and storage settings.","t":"`$OBJECT`","key$":"project","index$":29},"projects":{"a":true,"h":"Projects","n":"projects","r":true,"sh":"List of projects accessible to the caller.","t":"`$ARRAY`","key$":"projects","index$":30},"provisioner":{"a":true,"h":"Provisioner","n":"provisioner","r":true,"sh":"Compute provisioner.","t":"`$STRING`","key$":"provisioner","index$":31},"proxy_host":{"a":true,"h":"Proxy Host","n":"proxy_host","r":true,"sh":"The proxy host for the project.","t":"`$STRING`","key$":"proxy_host","index$":32},"quota_reset_at":{"a":true,"de":true,"fo":"date-time","h":"Quota Reset At","n":"quota_reset_at","r":false,"sh":"Deprecated.","t":"`$STRING`","key$":"quota_reset_at","index$":33},"region_id":{"a":true,"h":"Region Id","n":"region_id","r":true,"sh":"Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`).","t":"`$STRING`","key$":"region_id","index$":34},"settings":{"a":true,"h":"Settings","n":"settings","r":false,"sh":"Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`.","t":"`$OBJECT`","key$":"settings","index$":35},"store_passwords":{"a":true,"h":"Store Passwords","n":"store_passwords","r":true,"sh":"Whether or not passwords are stored for roles in the Neon project.","t":"`$BOOLEAN`","key$":"store_passwords","index$":36},"synthetic_storage_size":{"a":true,"fo":"int64","h":"Synthetic Storage Size","n":"synthetic_storage_size","r":false,"sh":"The current space occupied by the project in Postgres storage, in bytes.","t":"`$INTEGER`","key$":"synthetic_storage_size","index$":37},"unavailable_project_ids":{"a":true,"h":"Unavailable Project Ids","n":"unavailable_project_ids","r":false,"sh":"A list of project IDs indicating which projects are known to exist, but whose details could not be fetched within the requested (or implicit) time limit","t":"`$ARRAY`","key$":"unavailable_project_ids","index$":38},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"A timestamp indicating when the project was last updated","t":"`$STRING`","key$":"updated_at","index$":39},"written_data_bytes":{"a":true,"fo":"int64","h":"Written Data Bytes","n":"written_data_bytes","r":true,"sh":"Bytes.","t":"`$INTEGER`","key$":"written_data_bytes","index$":40}},"id":{"field":"id","name":"id"},"name":"project","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"project_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"vpc_endpoint_id","or":"vpc_endpoint_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}","q":{"exist":["id","vpc_endpoint_id"]},"r":{"param":{"project_id":"id"}},"s":[{"lit":"projects"},{"var":"id"},{"lit":"vpc_endpoints"},{"var":"vpc_endpoint_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /projects/{project_id}/branch_anonymized","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"project_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/projects/{project_id}/branch_anonymized","q":{"$action":"branch_anonymized","exist":["id"]},"r":{"param":{"project_id":"id"}},"s":[{"lit":"projects"},{"var":"id"},{"lit":"branch_anonymized"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /projects","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/projects","q":{},"r":{},"s":[{"lit":"projects"}],"t":{"req":{"project":"`reqdata`"},"res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /projects","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"org_id","or":"org_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":false,"k":"query","n":"recoverable","or":"recoverable","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"timeout","or":"timeout","r":false,"t":"`$INTEGER`","index$":5}]},"k":"http","m":"GET","o":"/projects","q":{"exist":["cursor","limit","org_id","recoverable","search","timeout"]},"r":{},"s":[{"lit":"projects"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /projects/{project_id}/advisors","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"project_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"branch_id","or":"branch_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"database_name","or":"database_name","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"min_severity","or":"min_severity","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/projects/{project_id}/advisors","q":{"$action":"advisor","exist":["branch_id","category","database_name","id","min_severity"]},"r":{"param":{"project_id":"id"}},"s":[{"lit":"projects"},{"var":"id"},{"lit":"advisors"}],"t":{"req":"`reqdata`","res":"`body.issues`"},"index$":1},{"a":true,"co":{"id":"GET /projects/shared","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"timeout","or":"timeout","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/projects/shared","q":{"$action":"shared","exist":["cursor","limit","search","timeout"]},"r":{},"s":[{"lit":"projects"},{"lit":"shared"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /projects/{project_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"project_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/projects/{project_id}","q":{"exist":["id"]},"r":{"param":{"project_id":"id"}},"s":[{"lit":"projects"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.project`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /projects/{project_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"project_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/projects/{project_id}","q":{"exist":["id"]},"r":{"param":{"project_id":"id"}},"s":[{"lit":"projects"},{"var":"id"}],"t":{"req":{"project":"`reqdata`"},"res":"`body`"},"index$":0}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"project_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"vpc_endpoint_id","or":"vpc_endpoint_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}","q":{"exist":["id","vpc_endpoint_id"]},"r":{"param":{"project_id":"id"}},"s":[{"lit":"projects"},{"var":"id"},{"lit":"vpc_endpoints"},{"var":"vpc_endpoint_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /projects/{project_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"project_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/projects/{project_id}","q":{"exist":["id"]},"r":{"param":{"project_id":"id"}},"s":[{"lit":"projects"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.project`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /projects/{project_id}/transfer_requests/{request_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"project_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"request_id","or":"request_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/projects/{project_id}/transfer_requests/{request_id}","q":{"exist":["id","request_id"]},"r":{"param":{"project_id":"id"}},"s":[{"lit":"projects"},{"var":"id"},{"lit":"transfer_requests"},{"var":"request_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.vpc_endpoint"]]},"key$":"project","name__orig":"project","Name":"Project","name_":"project","name-":"project","NAME":"PROJECT","index$":56}, {"active":true,"entity":"project","key$":"BasicProjectFlow","kind":"basic","name":"BasicProjectFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"project_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"project_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"project_ref01","srcdatavar":"project_ref01_data","suffix":"_up0","textfield":"compute_last_active_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"project_ref01","srcdatavar":"project_ref01_data","suffix":"_dt0"},"m":{"id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-project_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"project_ref01","suffix":"_rm0"},"m":{"id":"project01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"project_ref01"}}],"index$":5}]}, 'Project', {"POST /projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["label"],"properties":{"label":{"type":"string","description":"Human-readable name for the VPC endpoint assignment, used to identify it within the organization.","key$":"label"}},"x-ref":"#/components/schemas/VPCEndpointAssignment","index$":1}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"vpc_endpoint_id","in":"path","description":"The VPC endpoint ID","required":true,"schema":{"type":"string"},"index$":1}]},"POST /projects/{project_id}/branch_anonymized":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"type":"object","x-tags":["Branch"],"properties":{"annotation_value":{"type":"object","description":"A free-form map of string key-value pairs for attaching metadata to a resource (for example, a git commit reference). Maximum 50 entries.","x-tags":["Branch"],"maxProperties":50,"additionalProperties":{"type":"string"},"example":{"github-commit-ref":"github-branch-name"},"x-ref":"#/components/schemas/AnnotationValueData"}},"x-ref":"#/components/schemas/AnnotationCreateValueRequest"},{"type":"object","properties":{"branch_create":{"type":"object","properties":{"endpoints":{},"branch":{}},"x-ref":"#/components/schemas/BranchCreateRequest"},"masking_rules":{"type":"array","items":{"type":"object","required":[],"x-sensitive":[],"properties":{},"example":{},"x-ref":"#/components/schemas/MaskingRule"},"description":"List of masking rules to apply to the branch.\n"},"start_anonymization":{"description":"If true, automatically start anonymization after the branch is created.\nDefaults to false.\n","type":"boolean","default":false}}}],"x-ref":"#/components/schemas/BranchAnonymizedCreateRequest"}}},"required":true},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]},"POST /projects":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["project"],"properties":{"project":{"type":"object","description":"Configuration for the new project, including name, region, and Postgres compute and storage settings.","properties":{"settings":{"type":"object","properties":{"quota":{},"allowed_ips":{},"enable_logical_replication":{},"maintenance_window":{},"block_public_connections":{},"block_vpc_connections":{},"audit_log_level":{},"hipaa":{},"preload_libraries":{}},"description":"Project-level settings applied at creation.","x-ref":"#/components/schemas/ProjectSettingsData"},"name":{"description":"The project name. If not specified, the name will be identical to the generated project ID","type":"string","minLength":1,"maxLength":256},"branch":{"type":"object","description":"Configuration for the initial branch created with the project.","properties":{"name":{},"role_name":{},"database_name":{},"annotations":{}}},"autoscaling_limit_min_cu":{"type":"number","minimum":0.25,"deprecated":true,"description":"Deprecated. Use `default_endpoint_settings.autoscaling_limit_min_cu` instead.\n\nThe minimum number of Compute Units. The minimum value is `0.25`.\nSee [Compute size and Autoscaling configuration](https://neon.com/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n","x-ref":"#/components/schemas/ComputeUnit"},"autoscaling_limit_max_cu":{"type":"number","minimum":0.25,"deprecated":true,"description":"Deprecated. Use `default_endpoint_settings.autoscaling_limit_max_cu` instead.\n\nThe maximum number of Compute Units. See [Compute size and Autoscaling configuration](https://neon.com/docs/manage/endpoints#compute-size-and-autoscaling-configuration)\nfor more information.\n","x-ref":"#/components/schemas/ComputeUnit"},"provisioner":{"type":"string","description":"Compute provisioner. `k8s-neonvm` (default) supports Autoscaling; `k8s-pod` is fixed-size compute. Also `docker` and `serverless-platform`.","example":"k8s-neonvm","x-ref":"#/components/schemas/Provisioner"},"region_id":{"description":"The region identifier. Refer to our [Regions](https://neon.com/docs/introduction/regions) documentation for supported regions. Values are specified in this format: `aws-us-east-1`\n","type":"string"},"default_endpoint_settings":{"type":"object","description":"A collection of settings for a Neon endpoint","properties":{"pg_settings":{},"pgbouncer_settings":{},"autoscaling_limit_min_cu":{},"autoscaling_limit_max_cu":{},"suspend_timeout_seconds":{}},"x-ref":"#/components/schemas/DefaultEndpointSettings"},"pg_version":{"description":"The major Postgres version number. Supported versions are `14`, `15`, `16`, `17`, and `18`. `19` is rolling out and is accepted only in regions where it is enabled; requesting it elsewhere returns an error.","type":"integer","minimum":14,"maximum":19,"default":18,"example":18,"x-ref":"#/components/schemas/PgVersion"},"store_passwords":{"description":"Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.\n","type":"boolean"},"history_retention_seconds":{"description":"History window (point-in-time restore range) for all branches, in seconds. `0` disables it. Default 1 day (Free: 6 hours). Maximum depends on plan: Free 6 hours (21600), Launch 7 days (604800), Scale 30 days (2592000).\n","type":"integer","format":"int32","minimum":0,"maximum":2592000},"org_id":{"description":"ID of the organization that will own the project. If omitted when using an organization API key, it is inferred from the key.\n","type":"string","pattern":"^[a-z0-9-]{1,60}$"}},"key$":"project"}},"x-ref":"#/components/schemas/ProjectCreateRequest","index$":1},"examples":{"required_attributes_only":{"summary":"Required attributes only","value":{"project":{"name":"myproject"}}},"commonly_specified_attributes":{"summary":"Commonly-specified attributes","value":{"project":{"name":"myproject","region_id":"aws-us-east-2","pg_version":15}}},"with_autoscaling":{"summary":"With autoscaling attributes","value":{"project":{"name":"myproject","region_id":"aws-us-east-2","pg_version":15,"autoscaling_limit_min_cu":0.25,"autoscaling_limit_max_cu":1,"provisioner":"k8s-neonvm"}}},"with_branch_attributes":{"summary":"With branch attributes","value":{"project":{"name":"myproject","region_id":"aws-us-east-2","pg_version":15,"branch":{"name":"mybranch","role_name":"sally","database_name":"mydb"}}}}}}}},"parameters":[]},"GET /projects":{"protocol":"http","parameters":[{"name":"cursor","description":"Specify the cursor value from the previous response to retrieve the next batch of projects.","in":"query","schema":{"type":"string"},"index$":0},{"name":"limit","description":"Specify a value from 1 to 400 to limit number of projects in the response.","in":"query","schema":{"type":"integer","minimum":1,"default":10,"maximum":400},"index$":1},{"name":"search","description":"Search by project `name` or `id`. You can specify partial `name` or `id` values to filter results.","in":"query","schema":{"type":"string"},"index$":2},{"name":"org_id","description":"Search for projects by `org_id`.","in":"query","schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":3},{"name":"timeout","in":"query","description":"Specify an explicit timeout in milliseconds to limit response delay.\nAfter timing out, the incomplete list of project data fetched so far will be returned.\nProjects still being fetched when the timeout occurred are listed in the \"unavailable\" attribute of the response.\nIf not specified, an implicit implementation defined timeout is chosen with the same behaviour as above\n","schema":{"type":"integer","minimum":100,"maximum":30000},"x-ref":"#/components/parameters/TimeoutParam","index$":4},{"name":"recoverable","description":"Show only deleted projects within the recovery window.\n","in":"query","x-stability-level":"beta","schema":{"type":"boolean","default":false},"index$":5}]},"GET /projects/{project_id}/advisors":{"protocol":"http","parameters":[{"name":"project_id","description":"Neon project ID","in":"path","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"branch_id","in":"query","required":false,"description":"Branch ID to analyze. If not specified, the project's default branch is used.","schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1},{"name":"database_name","in":"query","required":false,"description":"Database name to analyze. Required if branch has multiple databases.","schema":{"type":"string"},"index$":2},{"name":"category","in":"query","required":false,"description":"Filter issues by category","schema":{"type":"string","description":"Category of an advisor issue","enum":["SECURITY","PERFORMANCE"],"x-ref":"#/components/schemas/AdvisorCategory"},"index$":3},{"name":"min_severity","in":"query","required":false,"description":"Minimum severity level to include. For example, WARN returns WARN and ERROR issues, excluding INFO.","schema":{"type":"string","enum":["INFO","WARN","ERROR"]},"index$":4}]},"GET /projects/shared":{"protocol":"http","parameters":[{"name":"cursor","description":"Specify the cursor value from the previous response to get the next batch of projects.","in":"query","schema":{"type":"string"},"index$":0},{"name":"limit","description":"Specify a value from 1 to 400 to limit number of projects in the response.","in":"query","schema":{"type":"integer","minimum":1,"default":10,"maximum":400},"index$":1},{"name":"search","description":"Search query by name or id.","in":"query","schema":{"type":"string"},"index$":2},{"name":"timeout","in":"query","description":"Specify an explicit timeout in milliseconds to limit response delay.\nAfter timing out, the incomplete list of project data fetched so far will be returned.\nProjects still being fetched when the timeout occurred are listed in the \"unavailable\" attribute of the response.\nIf not specified, an implicit implementation defined timeout is chosen with the same behaviour as above\n","schema":{"type":"integer","minimum":100,"maximum":30000},"x-ref":"#/components/parameters/TimeoutParam","index$":3}]},"GET /projects/{project_id}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]},"PATCH /projects/{project_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["project"],"properties":{"project":{"type":"object","properties":{"settings":{"type":"object","properties":{"quota":{},"allowed_ips":{},"enable_logical_replication":{},"maintenance_window":{},"block_public_connections":{},"block_vpc_connections":{},"audit_log_level":{},"hipaa":{},"preload_libraries":{}},"description":"Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`.","x-ref":"#/components/schemas/ProjectSettingsData"},"name":{"description":"The project name","type":"string","minLength":1,"maxLength":256},"default_endpoint_settings":{"type":"object","description":"A collection of settings for a Neon endpoint","properties":{"pg_settings":{},"pgbouncer_settings":{},"autoscaling_limit_min_cu":{},"autoscaling_limit_max_cu":{},"suspend_timeout_seconds":{}},"x-ref":"#/components/schemas/DefaultEndpointSettings"},"history_retention_seconds":{"description":"History window (point-in-time restore range) for all branches, in seconds. `0` disables it. Default 1 day (Free: 6 hours). Maximum depends on plan: Free 6 hours (21600), Launch 7 days (604800), Scale 30 days (2592000).\n","type":"integer","format":"int32","minimum":0,"maximum":2592000}},"key$":"project"}},"x-ref":"#/components/schemas/ProjectUpdateRequest","index$":1},"example":{"project":{"name":"myproject"}}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]},"DELETE /projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"vpc_endpoint_id","in":"path","description":"The VPC endpoint ID","required":true,"schema":{"type":"string"},"index$":1}]},"DELETE /projects/{project_id}":{"protocol":"http","parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0}]},"PUT /projects/{project_id}/transfer_requests/{request_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"org_id":{"description":"The Neon organization ID to transfer the project to. If not provided, the project will be\ntransferred to the current user or organization account.\n","example":"org-cool-darkness-12345678","type":"string","pattern":"^[a-z0-9-]{1,60}$","key$":"org_id"}},"index$":1}}}},"parameters":[{"name":"project_id","in":"path","description":"The Neon project ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":0},{"name":"request_id","in":"path","description":"The Neon project transfer request ID","required":true,"schema":{"type":"string","pattern":"^[a-z0-9-]{1,60}$"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_ref01_ent = client.Project()
    let project_ref01_data = setup.data.new.project['project_ref01']

    project_ref01_data = (await project_ref01_ent.create(project_ref01_data)).data()
    assert(null != project_ref01_data.id)


    // LIST
    const project_ref01_match: any = {}

    const project_ref01_list = (await project_ref01_ent.list(project_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(project_ref01_list, { id: project_ref01_data.id })))


    // UPDATE
    const project_ref01_data_up0: any = {}
    project_ref01_data_up0.id = project_ref01_data.id

    const project_ref01_markdef_up0 = { name: 'compute_last_active_at', value: 'Mark01-project_ref01_' + setup.now }
    ;(project_ref01_data_up0 as any)[project_ref01_markdef_up0.name] = project_ref01_markdef_up0.value

    const project_ref01_resdata_up0 = (await project_ref01_ent.update(project_ref01_data_up0)).data()
    assert(project_ref01_resdata_up0.id === project_ref01_data_up0.id)

    assert((project_ref01_resdata_up0 as any)[project_ref01_markdef_up0.name] === project_ref01_markdef_up0.value)


    // LOAD
    const project_ref01_match_dt0: any = {}
    project_ref01_match_dt0.id = project_ref01_data.id
    const project_ref01_data_dt0 = (await project_ref01_ent.load(project_ref01_match_dt0)).data()
    assert(project_ref01_data_dt0.id === project_ref01_data.id)


    // REMOVE
    const project_ref01_match_rm0: any = { id: project_ref01_data.id }
    await project_ref01_ent.remove(project_ref01_match_rm0)
  

    // LIST
    const project_ref01_match_rt0: any = {}

    const project_ref01_list_rt0 = (await project_ref01_ent.list(project_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(project_ref01_list_rt0, { id: project_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project/ProjectTestData.json')

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
    ['project01','project02','project03','vpc_endpoint01','vpc_endpoint02','vpc_endpoint03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEON_TEST_PROJECT_ENTID': idmap,
    'NEON_TEST_LIVE': 'FALSE',
    'NEON_TEST_EXPLAIN': 'FALSE',
    'NEON_APIKEY': '',
  })

  idmap = env['NEON_TEST_PROJECT_ENTID']

  const live = 'TRUE' === env.NEON_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEON_TEST_PROJECT_ENTID']
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
  
