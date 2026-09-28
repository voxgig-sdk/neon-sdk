# Neon Lua SDK Reference

Complete API reference for the Neon Lua SDK.


## NeonSDK

### Constructor

```lua
local sdk = require("neon_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Anonymize(data)`

Create a new `Anonymize` entity instance. Pass `nil` for no initial data.

#### `AnonymizedBranchStatus(data)`

Create a new `AnonymizedBranchStatus` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data)`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `Auth(data)`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `AuthLegacy(data)`

Create a new `AuthLegacy` entity instance. Pass `nil` for no initial data.

#### `AvailablePreloadLibrary(data)`

Create a new `AvailablePreloadLibrary` entity instance. Pass `nil` for no initial data.

#### `BackupSchedule(data)`

Create a new `BackupSchedule` entity instance. Pass `nil` for no initial data.

#### `Branch(data)`

Create a new `Branch` entity instance. Pass `nil` for no initial data.

#### `BranchAiGateway(data)`

Create a new `BranchAiGateway` entity instance. Pass `nil` for no initial data.

#### `BranchOperation(data)`

Create a new `BranchOperation` entity instance. Pass `nil` for no initial data.

#### `BranchSchema(data)`

Create a new `BranchSchema` entity instance. Pass `nil` for no initial data.

#### `BranchSchemaCompare(data)`

Create a new `BranchSchemaCompare` entity instance. Pass `nil` for no initial data.

#### `BranchStorage(data)`

Create a new `BranchStorage` entity instance. Pass `nil` for no initial data.

#### `Bucket(data)`

Create a new `Bucket` entity instance. Pass `nil` for no initial data.

#### `BucketObjectsList(data)`

Create a new `BucketObjectsList` entity instance. Pass `nil` for no initial data.

#### `ConnectionUri(data)`

Create a new `ConnectionUri` entity instance. Pass `nil` for no initial data.

#### `Consumption(data)`

Create a new `Consumption` entity instance. Pass `nil` for no initial data.

#### `CreateCredential(data)`

Create a new `CreateCredential` entity instance. Pass `nil` for no initial data.

#### `Credential(data)`

Create a new `Credential` entity instance. Pass `nil` for no initial data.

#### `CurrentUserInfo(data)`

Create a new `CurrentUserInfo` entity instance. Pass `nil` for no initial data.

#### `CustomDomain(data)`

Create a new `CustomDomain` entity instance. Pass `nil` for no initial data.

#### `DataApi(data)`

Create a new `DataApi` entity instance. Pass `nil` for no initial data.

#### `Database(data)`

Create a new `Database` entity instance. Pass `nil` for no initial data.

#### `EmailProvider(data)`

Create a new `EmailProvider` entity instance. Pass `nil` for no initial data.

#### `EmailServer(data)`

Create a new `EmailServer` entity instance. Pass `nil` for no initial data.

#### `Empty(data)`

Create a new `Empty` entity instance. Pass `nil` for no initial data.

#### `Endpoint(data)`

Create a new `Endpoint` entity instance. Pass `nil` for no initial data.

#### `EndpointOperation(data)`

Create a new `EndpointOperation` entity instance. Pass `nil` for no initial data.

#### `Function(data)`

Create a new `Function` entity instance. Pass `nil` for no initial data.

#### `Jwk(data)`

Create a new `Jwk` entity instance. Pass `nil` for no initial data.

#### `MaskingRule(data)`

Create a new `MaskingRule` entity instance. Pass `nil` for no initial data.

#### `Member(data)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `NeonAuthAllowLocalhost(data)`

Create a new `NeonAuthAllowLocalhost` entity instance. Pass `nil` for no initial data.

#### `NeonAuthConfig(data)`

Create a new `NeonAuthConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthCreateIntegration(data)`

Create a new `NeonAuthCreateIntegration` entity instance. Pass `nil` for no initial data.

#### `NeonAuthCreateNewUser(data)`

Create a new `NeonAuthCreateNewUser` entity instance. Pass `nil` for no initial data.

#### `NeonAuthEmailAndPasswordConfig(data)`

Create a new `NeonAuthEmailAndPasswordConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthEmailServerConfig(data)`

Create a new `NeonAuthEmailServerConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthIntegration(data)`

Create a new `NeonAuthIntegration` entity instance. Pass `nil` for no initial data.

#### `NeonAuthMagicLinkConfig(data)`

Create a new `NeonAuthMagicLinkConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthOauthProvider(data)`

Create a new `NeonAuthOauthProvider` entity instance. Pass `nil` for no initial data.

#### `NeonAuthOrganizationConfig(data)`

Create a new `NeonAuthOrganizationConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthPhoneNumberConfig(data)`

Create a new `NeonAuthPhoneNumberConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthPluginConfig(data)`

Create a new `NeonAuthPluginConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthRedirectUriWhitelistDomain(data)`

Create a new `NeonAuthRedirectUriWhitelistDomain` entity instance. Pass `nil` for no initial data.

#### `NeonAuthTransferAuthProviderProject(data)`

Create a new `NeonAuthTransferAuthProviderProject` entity instance. Pass `nil` for no initial data.

#### `NeonAuthWebhookConfig(data)`

Create a new `NeonAuthWebhookConfig` entity instance. Pass `nil` for no initial data.

#### `NeonFunction(data)`

Create a new `NeonFunction` entity instance. Pass `nil` for no initial data.

#### `NeonFunctionDeployment(data)`

Create a new `NeonFunctionDeployment` entity instance. Pass `nil` for no initial data.

#### `Operation(data)`

Create a new `Operation` entity instance. Pass `nil` for no initial data.

#### `OrgApiKeyCreate(data)`

Create a new `OrgApiKeyCreate` entity instance. Pass `nil` for no initial data.

#### `OrgApiKeyRevoke(data)`

Create a new `OrgApiKeyRevoke` entity instance. Pass `nil` for no initial data.

#### `OrgApiKeysListResponseItem(data)`

Create a new `OrgApiKeysListResponseItem` entity instance. Pass `nil` for no initial data.

#### `Organization(data)`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationInvitation(data)`

Create a new `OrganizationInvitation` entity instance. Pass `nil` for no initial data.

#### `Presign(data)`

Create a new `Presign` entity instance. Pass `nil` for no initial data.

#### `Project(data)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectBranchLogField(data)`

Create a new `ProjectBranchLogField` entity instance. Pass `nil` for no initial data.

#### `ProjectBranchLogFieldValue(data)`

Create a new `ProjectBranchLogFieldValue` entity instance. Pass `nil` for no initial data.

#### `ProjectBranchLogsQuery(data)`

Create a new `ProjectBranchLogsQuery` entity instance. Pass `nil` for no initial data.

#### `ProjectMember(data)`

Create a new `ProjectMember` entity instance. Pass `nil` for no initial data.

#### `ProjectMemberRole(data)`

Create a new `ProjectMemberRole` entity instance. Pass `nil` for no initial data.

#### `ProjectPermission(data)`

Create a new `ProjectPermission` entity instance. Pass `nil` for no initial data.

#### `ProjectRecover(data)`

Create a new `ProjectRecover` entity instance. Pass `nil` for no initial data.

#### `ProjectTransferRequest(data)`

Create a new `ProjectTransferRequest` entity instance. Pass `nil` for no initial data.

#### `Region(data)`

Create a new `Region` entity instance. Pass `nil` for no initial data.

#### `Role(data)`

Create a new `Role` entity instance. Pass `nil` for no initial data.

#### `RoleOperation(data)`

Create a new `RoleOperation` entity instance. Pass `nil` for no initial data.

#### `RolePassword(data)`

Create a new `RolePassword` entity instance. Pass `nil` for no initial data.

#### `SendNeonAuthTestEmail(data)`

Create a new `SendNeonAuthTestEmail` entity instance. Pass `nil` for no initial data.

#### `Snapshot(data)`

Create a new `Snapshot` entity instance. Pass `nil` for no initial data.

#### `SpendingLimit(data)`

Create a new `SpendingLimit` entity instance. Pass `nil` for no initial data.

#### `Trigger(data)`

Create a new `Trigger` entity instance. Pass `nil` for no initial data.

#### `UpdateNeonAuthUserRole(data)`

Create a new `UpdateNeonAuthUserRole` entity instance. Pass `nil` for no initial data.

#### `VpcEndpoint(data)`

Create a new `VpcEndpoint` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AnonymizeEntity

```lua
local anonymize = client:Anonymize(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `string` | No | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | `number` | No | Number of columns that had masking rules applied during the attempt. |
| `started_at` | `string` | No | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | `string` | No | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | `string` | No | Username of the user who triggered the latest anonymization attempt. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Anonymize():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnonymizeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AnonymizedBranchStatusEntity

```lua
local anonymized_branch_status = client:AnonymizedBranchStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `string` | No | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | `number` | No | Number of columns that had masking rules applied during the attempt. |
| `started_at` | `string` | No | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | `string` | No | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | `string` | No | Username of the user who triggered the latest anonymization attempt. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AnonymizedBranchStatus():load({ branch_id = "branch_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnonymizedBranchStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiKeyEntity

```lua
local api_key = client:ApiKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | A timestamp indicating when the API key was created |
| `created_by` | `string` | Yes | ID of the user who created this API key |
| `id` | `number` | Yes | The API key's unique numeric ID. |
| `key` | `string` | Yes | The generated 64-bit token required to access the Neon API |
| `key_name` | `string` | Yes | A user-specified API key name. |
| `last_used_at` | `string` | No | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `string` | Yes | The IP address from which the API key was last used |
| `name` | `string` | Yes | The user-specified API key name |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiKey():create({
  created_at = --[[ string ]],
  created_by = --[[ string ]],
  id = --[[ number ]],
  key = --[[ string ]],
  key_name = --[[ string ]],
  last_used_from_addr = --[[ string ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiKey():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ApiKey():remove({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthEntity

```lua
local auth = client:Auth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes | The ID of the account associated with this authentication record. |
| `auth_data` | `string` | No |  |
| `auth_method` | `string` | Yes | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Auth():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  account_id = --[[ string ]],
  auth_method = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Auth():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Auth():remove({ branch_id = "branch_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuthLegacyEntity

```lua
local auth_legacy = client:AuthLegacy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | Yes | URI to add to the redirect URI allowlist for the auth provider. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AuthLegacy():create({
  project_id = --[[ string ]],
  auth_provider = --[[ string ]],
  domain = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AuthLegacy():remove({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthLegacyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AvailablePreloadLibraryEntity

```lua
local available_preload_library = client:AvailablePreloadLibrary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Human-readable explanation of the library's purpose and behavior. |
| `is_default` | `boolean` | Yes | Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints. |
| `is_experimental` | `boolean` | Yes | Marks the library as experimental. |
| `library_name` | `string` | Yes | Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`). |
| `version` | `string` | Yes | Version of the preload library. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AvailablePreloadLibrary():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AvailablePreloadLibraryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BackupScheduleEntity

```lua
local backup_schedule = client:BackupSchedule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | `number` | No | The day of the week or month to take the snapshot (if applicable). |
| `frequency` | `string` | Yes | How often to take snapshots. |
| `hour` | `number` | No | The hour of the day to take the snapshot (if applicable). |
| `month` | `number` | No | The month of the year to take the snapshot (if applicable). |
| `retention_seconds` | `number` | No | How long to keep a scheduled snapshot (in seconds) before it's automatically deleted. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BackupSchedule():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BackupScheduleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchEntity

```lua
local branch = client:Branch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `table` | Yes | Annotation data associated with the annotated object. |
| `annotations` | `table` | Yes | Map of annotations keyed by resource identifier, where each value contains the annotation data for that resource. |
| `branch` | `table` | Yes | Branch returned by the request. |
| `branches` | `table` | Yes | Branches in the project. |
| `id` | `string` | No |  |
| `pagination` | `table` | No | To paginate the response, issue an initial request with `limit` value. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Branch():create({
  project_id = --[[ string ]],
  annotation = --[[ table ]],
  annotations = --[[ table ]],
  branch = --[[ table ]],
  branches = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Branch():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Branch():load({ id = "branch_id", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Branch():remove({ id = "branch_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Branch():update({
  id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchAiGatewayEntity

```lua
local branch_ai_gateway = client:BranchAiGateway(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_url` | `string` | Yes | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | `boolean` | Yes | Always `true` in 200 responses. |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BranchAiGateway():load({ id = "branch_ai_gateway_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchAiGatewayEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchOperationEntity

```lua
local branch_operation = client:BranchOperation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `table` | Yes | Branch returned by the request. |
| `id` | `string` | No |  |
| `operations` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BranchOperation():create({
  id = --[[ string ]],
  project_id = --[[ string ]],
  branch = --[[ table ]],
  operations = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchOperationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchSchemaEntity

```lua
local branch_schema = client:BranchSchema(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `tables` | `table` | Yes | Tables present in the branch schema. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BranchSchema():load({ id = "branch_schema_id", project_id = "project_id", db_name = "db_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchSchemaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchSchemaCompareEntity

```lua
local branch_schema_compare = client:BranchSchemaCompare(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BranchSchemaCompare():load({ id = "branch_schema_compare_id", project_id = "project_id", db_name = "db_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchSchemaCompareEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BranchStorageEntity

```lua
local branch_storage = client:BranchStorage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Always `true` in 200 responses. |
| `force_path_style` | `boolean` | Yes | Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). |
| `id` | `string` | No |  |
| `region` | `string` | Yes | The AWS region for this branch's object storage. |
| `s3_endpoint` | `string` | Yes | The S3-compatible endpoint URL for this branch. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BranchStorage():load({ id = "branch_storage_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchStorageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BucketEntity

```lua
local bucket = client:Bucket(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `string` | No | Access level for the bucket. |
| `created_at` | `string` | Yes | When the bucket was created. |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The bucket name. |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `access_level` | - | Yes | - | - |
| `created_at` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Bucket():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  created_at = --[[ string ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Bucket():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Bucket():load({ branch_id = "branch_id", bucket_id = "bucket_id", object_key = "object_key", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Bucket():remove({ branch_id = "branch_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BucketEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BucketObjectsListEntity

```lua
local bucket_objects_list = client:BucketObjectsList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `string` | Yes | The object's entity tag (content hash). |
| `key` | `string` | Yes | The full object key. |
| `last_modified` | `string` | Yes | The time the object was last modified. |
| `size` | `number` | Yes | The object size in bytes. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BucketObjectsList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BucketObjectsListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConnectionUriEntity

```lua
local connection_uri = client:ConnectionUri(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uri` | `string` | Yes | The connection URI. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ConnectionUri():load({ project_id = "project_id", database_name = "database_name", role_name = "role_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionUriEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConsumptionEntity

```lua
local consumption = client:Consumption(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branches` | `table` | Yes | Per-branch consumption history records returned for the requested time range. |
| `pagination` | `table` | Yes | Cursor-based pagination. |
| `projects` | `table` | Yes | Per-project consumption history records included in the response. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Consumption():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConsumptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateCredentialEntity

```lua
local create_credential = client:CreateCredential(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Free-form customer label for the credential. |
| `principal_type` | `string` | Yes | Principal type for the credential. |
| `scopes` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreateCredential():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  principal_type = --[[ string ]],
  scopes = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateCredentialEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CredentialEntity

```lua
local credential = client:Credential(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `expires_at` | `string` | No | When the credential expires; absent means never expires. |
| `function_id` | `string` | No |  |
| `id` | `string` | No |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | No | Customer-supplied label; absent when not provided at issuance. |
| `principal_type` | `string` | Yes |  |
| `revoked_at` | `string` | No |  |
| `scopes` | `table` | Yes |  |
| `token_id` | `string` | Yes | Opaque credential id (e.g. |
| `token_id_short` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Credential():create({
  branch_id = --[[ string ]],
  id = --[[ string ]],
  project_id = --[[ string ]],
  created_at = --[[ string ]],
  principal_type = --[[ string ]],
  scopes = --[[ table ]],
  token_id = --[[ string ]],
  token_id_short = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Credential():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Credential():remove({ branch_id = "branch_id", id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CredentialEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CurrentUserInfoEntity

```lua
local current_user_info = client:CurrentUserInfo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | Email address associated with this auth account. |
| `image` | `string` | Yes | URL of the user's profile picture as provided by the identity provider. |
| `login` | `string` | Yes | Deprecated. |
| `name` | `string` | Yes | Display name of the account as provided by the identity provider. |
| `provider` | `string` | Yes | Identity provider id from keycloak |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CurrentUserInfo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CurrentUserInfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomDomainEntity

```lua
local custom_domain = client:CustomDomain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes | The custom domain to register (for example `dashboard.acme.com`). |
| `entity_id` | `string` | Yes | The target entity's identifier within the branch. |
| `entity_type` | `string` | Yes | The kind of branch entity to point the domain at. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomDomain():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  domain = --[[ string ]],
  entity_id = --[[ string ]],
  entity_type = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomDomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataApiEntity

```lua
local data_api = client:DataApi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_default_grants` | `boolean` | No | Grant all permissions to the tables in the public schema to authenticated users |
| `auth_provider` | `string` | No | Authentication provider for the Neon Data API. |
| `available_schemas` | `table` | No | List of available database schemas (SubZero only) |
| `id` | `string` | No |  |
| `jwks_url` | `string` | No | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `jwt_audience` | `string` | No | Expected `aud` claim in incoming JWTs. |
| `provider_name` | `string` | No | Display name for the authentication provider. |
| `settings` | `table` | No | Configuration settings for the Data API (SubZero only) |
| `skip_auth_schema` | `boolean` | No | Skip creating the auth schema and RLS functions |
| `status` | `string` | Yes | The status of the Neon Data API deployment |
| `url` | `string` | Yes | The URL of the Neon Data API |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DataApi():create({
  branch_id = --[[ string ]],
  id = --[[ string ]],
  project_id = --[[ string ]],
  status = --[[ string ]],
  url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DataApi():load({ id = "data_api_id", branch_id = "branch_id", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DataApi():remove({ id = "data_api_id", branch_id = "branch_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DataApi():update({
  id = "data_api_id",
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataApiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DatabaseEntity

```lua
local database = client:Database(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes | The ID of the branch this database belongs to. |
| `created_at` | `string` | Yes | A timestamp indicating when the database was created |
| `database` | `table` | Yes | Configuration for the new Postgres database. |
| `id` | `number` | Yes | The database ID |
| `name` | `string` | Yes | The database name |
| `owner_name` | `string` | Yes | The name of role that owns the database |
| `updated_at` | `string` | Yes | A timestamp indicating when the database was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Database():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  created_at = --[[ string ]],
  database = --[[ table ]],
  id = --[[ number ]],
  name = --[[ string ]],
  owner_name = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Database():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Database():load({ id = "database_id", branch_id = "branch_id", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Database():remove({ id = "database_id", branch_id = "branch_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Database():update({
  id = "database_id",
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DatabaseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailProviderEntity

```lua
local email_provider = client:EmailProvider(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EmailProvider():load({ branch_id = "branch_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailProviderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailServerEntity

```lua
local email_server = client:EmailServer(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EmailServer():load({ project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailServerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmptyEntity

```lua
local empty = client:Empty(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_org_id` | `string` | Yes | The destination organization identifier |
| `project_ids` | `table` | Yes | The list of projects ids to transfer. |
| `schedule` | `table` | Yes | List of schedule entries defining the backup frequency. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Empty():create({
  organization_id = --[[ string ]],
  destination_org_id = --[[ string ]],
  project_ids = --[[ table ]],
  schedule = --[[ table ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Empty():remove({ organization_id = "organization_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Empty():update({
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmptyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EndpointEntity

```lua
local endpoint = client:Endpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoscaling_limit_max_cu` | `number` | Yes | The maximum number of Compute Units |
| `autoscaling_limit_min_cu` | `number` | Yes | The minimum number of Compute Units |
| `branch_id` | `string` | Yes | The ID of the branch this compute endpoint belongs to. |
| `compute_release_version` | `string` | No | Attached compute's release version number. |
| `created_at` | `string` | Yes | A timestamp indicating when the compute endpoint was created |
| `creation_source` | `string` | Yes | The compute endpoint creation source |
| `current_state` | `string` | Yes | Lifecycle state of the compute endpoint. |
| `disabled` | `boolean` | Yes | Whether to restrict connections to the compute endpoint. |
| `endpoint` | `table` | Yes | Configuration for the compute endpoint to create. |
| `host` | `string` | Yes | The hostname of the compute endpoint. |
| `id` | `string` | Yes | The compute endpoint ID. |
| `last_active` | `string` | No | A timestamp indicating when the compute endpoint was last active |
| `name` | `string` | No | Optional name of the compute endpoint |
| `passwordless_access` | `boolean` | Yes | Whether to permit passwordless access to the compute endpoint |
| `pending_state` | `string` | No | Target state the compute endpoint is transitioning to. |
| `pooler_enabled` | `boolean` | Yes | Deprecated. |
| `pooler_mode` | `string` | Yes | Deprecated. |
| `project_id` | `string` | Yes | The ID of the project this compute endpoint belongs to. |
| `provisioner` | `string` | Yes | Compute provisioner. |
| `proxy_host` | `string` | Yes | Deprecated. |
| `region_id` | `string` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `table` | Yes | A collection of settings for a compute endpoint |
| `started_at` | `string` | No | A timestamp indicating when the compute endpoint was last started |
| `suspend_timeout_seconds` | `number` | Yes | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `suspended_at` | `string` | No | A timestamp indicating when the compute endpoint was last suspended |
| `type` | `string` | Yes | Compute endpoint type. |
| `updated_at` | `string` | Yes | A timestamp indicating when the compute endpoint was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Endpoint():create({
  project_id = --[[ string ]],
  autoscaling_limit_max_cu = --[[ number ]],
  autoscaling_limit_min_cu = --[[ number ]],
  branch_id = --[[ string ]],
  created_at = --[[ string ]],
  creation_source = --[[ string ]],
  current_state = --[[ string ]],
  disabled = --[[ boolean ]],
  endpoint = --[[ table ]],
  host = --[[ string ]],
  id = --[[ string ]],
  passwordless_access = --[[ boolean ]],
  pooler_enabled = --[[ boolean ]],
  pooler_mode = --[[ string ]],
  provisioner = --[[ string ]],
  proxy_host = --[[ string ]],
  region_id = --[[ string ]],
  settings = --[[ table ]],
  suspend_timeout_seconds = --[[ number ]],
  type = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Endpoint():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Endpoint():load({ id = "endpoint_id", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Endpoint():remove({ id = "endpoint_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Endpoint():update({
  id = "endpoint_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EndpointOperationEntity

```lua
local endpoint_operation = client:EndpointOperation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endpoint` | `table` | Yes | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` | `string` | No |  |
| `operations` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EndpointOperation():create({
  id = --[[ string ]],
  project_id = --[[ string ]],
  endpoint = --[[ table ]],
  operations = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EndpointOperationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FunctionEntity

```lua
local function_ = client:Function(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_domains` | `table` | Yes |  |
| `functions` | `table` | Yes |  |
| `id` | `string` | No |  |
| `pagination` | `table` | No | To paginate the response, issue an initial request with `limit` value. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Function():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Function():remove({ branch_id = "branch_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FunctionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## JwkEntity

```lua
local jwk = client:Jwk(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | No | The Neon branch ID. |
| `created_at` | `string` | Yes | The date and time when the JWKS was created |
| `id` | `string` | Yes | The JWKS configuration's ID. |
| `jwks_url` | `string` | Yes | URL of the provider's JWKS endpoint used to verify JWTs. |
| `jwt_audience` | `string` | No | Expected `aud` claim in incoming JWTs. |
| `project_id` | `string` | Yes | The Neon project ID. |
| `provider_name` | `string` | Yes | The name of the authentication provider (e.g., Clerk, Stytch, Auth0) |
| `role_names` | `table` | No | Deprecated. |
| `skip_role_creation` | `boolean` | No | Deprecated. |
| `updated_at` | `string` | Yes | The date and time when the JWKS was last modified |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Jwk():create({
  project_id = --[[ string ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  jwks_url = --[[ string ]],
  provider_name = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Jwk():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Jwk():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JwkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MaskingRuleEntity

```lua
local masking_rule = client:MaskingRule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column_name` | `string` | Yes | The name of the column to be masked |
| `database_name` | `string` | Yes | The name of the database containing the table to be masked |
| `masking_function` | `string` | No | The PostgreSQL Anonymizer masking function to apply. |
| `masking_rules` | `table` | Yes | List of masking rules for the branch |
| `masking_value` | `string` | No | A literal value to set on the column when masking. |
| `schema_name` | `string` | Yes | The name of the schema containing the table to be masked |
| `table_name` | `string` | Yes | The name of the table containing the column to be masked |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MaskingRule():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:MaskingRule():update({
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MaskingRuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemberEntity

```lua
local member = client:Member(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | The organization member's ID. |
| `joined_at` | `string` | No | Timestamp when the user joined the organization. |
| `org_id` | `string` | Yes | The Neon organization ID. |
| `role` | `string` | Yes | Organization member's role. |
| `user_id` | `string` | Yes | The Neon user ID. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Member():load({ id = "member_id", organization_id = "organization_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Member():remove({ id = "member_id", organization_id = "organization_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Member():update({
  id = "member_id",
  organization_id = "organization_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthAllowLocalhostEntity

```lua
local neon_auth_allow_localhost = client:NeonAuthAllowLocalhost(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_localhost` | `boolean` | Yes | Whether to allow localhost connections |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NeonAuthAllowLocalhost():load({ branch_id = "branch_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NeonAuthAllowLocalhost():update({
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthAllowLocalhostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthConfigEntity

```lua
local neon_auth_config = client:NeonAuthConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The application name used in auth emails and communications. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NeonAuthConfig():update({
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthCreateIntegrationEntity

```lua
local neon_auth_create_integration = client:NeonAuthCreateIntegration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `branch_id` | `string` | Yes | The Neon branch ID. |
| `database_name` | `string` | No | Name of the database to enable Neon Auth on. |
| `project_id` | `string` | Yes | The Neon project ID. |
| `role_name` | `string` | No | Deprecated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:NeonAuthCreateIntegration():create({
  auth_provider = --[[ string ]],
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthCreateIntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthCreateNewUserEntity

```lua
local neon_auth_create_new_user = client:NeonAuthCreateNewUser(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `email` | `string` | Yes | Email address of the new Neon Auth user to create. |
| `name` | `string` | No | Display name for the new user. |
| `project_id` | `string` | Yes | The Neon project ID. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:NeonAuthCreateNewUser():create({
  auth_provider = --[[ string ]],
  email = --[[ string ]],
  project_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthCreateNewUserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthEmailAndPasswordConfigEntity

```lua
local neon_auth_email_and_password_config = client:NeonAuthEmailAndPasswordConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_sign_in_after_verification` | `boolean` | Yes | Whether users are automatically signed in after verifying their email |
| `disable_sign_up` | `boolean` | Yes | Whether to disable new user sign ups |
| `email_verification_method` | `string` | Yes | Controls how email addresses are verified during sign-up or sign-in. |
| `enabled` | `boolean` | Yes | Whether email and password authentication is enabled |
| `require_email_verification` | `boolean` | Yes | Whether email verification is required before users can sign in |
| `send_verification_email_on_sign_in` | `boolean` | Yes | Whether to send a verification email when users sign in |
| `send_verification_email_on_sign_up` | `boolean` | Yes | Whether to send a verification email when users sign up |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `auto_sign_in_after_verification` | - | Yes |
| `disable_sign_up` | - | Yes |
| `email_verification_method` | - | Yes |
| `enabled` | - | Yes |
| `require_email_verification` | - | Yes |
| `send_verification_email_on_sign_in` | - | Yes |
| `send_verification_email_on_sign_up` | - | Yes |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NeonAuthEmailAndPasswordConfig():load({ branch_id = "branch_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NeonAuthEmailAndPasswordConfig():update({
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthEmailAndPasswordConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthEmailServerConfigEntity

```lua
local neon_auth_email_server_config = client:NeonAuthEmailServerConfig(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NeonAuthEmailServerConfig():update({
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthEmailServerConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthIntegrationEntity

```lua
local neon_auth_integration = client:NeonAuthIntegration(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `auth_provider_project_id` | `string` | Yes | Project identifier assigned by the auth provider for this integration. |
| `base_url` | `string` | No | Base URL of the Neon Auth service endpoint for this integration. |
| `branch_id` | `string` | Yes | The Neon branch ID. |
| `created_at` | `string` | Yes | Timestamp when the Neon Auth integration was created, in RFC 3339 format (UTC). |
| `db_name` | `string` | Yes | Name of the database used by the Neon Auth integration. |
| `jwks_url` | `string` | Yes | URL of the provider's JWKS endpoint used to verify JWTs. |
| `name` | `string` | No | Application name shown in auth emails and communications. |
| `owned_by` | `string` | Yes | Owner of the auth provider project. |
| `transfer_status` | `string` | No | Ownership transfer state for the auth provider project. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NeonAuthIntegration():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NeonAuthIntegration():load({ branch_id = "branch_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthIntegrationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthMagicLinkConfigEntity

```lua
local neon_auth_magic_link_config = client:NeonAuthMagicLinkConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disable_sign_up` | `boolean` | Yes | Whether to disable sign-up via magic link. |
| `enabled` | `boolean` | Yes | Whether the magic link plugin is enabled. |
| `expires_in` | `number` | Yes | Minutes until the magic link expires. |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `disable_sign_up` | Yes |
| `enabled` | Yes |
| `expires_in` | Yes |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NeonAuthMagicLinkConfig():update({
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthMagicLinkConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthOauthProviderEntity

```lua
local neon_auth_oauth_provider = client:NeonAuthOauthProvider(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `string` | No | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `string` | No | OAuth client secret for the provider. |
| `id` | `string` | Yes | The OAuth provider's ID. |
| `microsoft_tenant_id` | `string` | No | Tenant ID for the Microsoft OAuth provider. |
| `type` | `string` | Yes | OAuth provider key type. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:NeonAuthOauthProvider():create({
  project_id = --[[ string ]],
  id = --[[ string ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NeonAuthOauthProvider():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NeonAuthOauthProvider():update({
  id = "id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthOauthProviderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthOrganizationConfigEntity

```lua
local neon_auth_organization_config = client:NeonAuthOrganizationConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator_role` | `string` | Yes | Role of the organization's creator. |
| `enabled` | `boolean` | Yes | Whether the organization plugin is enabled. |
| `membership_limit` | `number` | Yes | Maximum number of members per organization. |
| `organization_limit` | `number` | Yes | Maximum organizations a user can belong to (created or joined). |
| `send_invitation_email` | `boolean` | Yes | Whether to send invitation emails when inviting members to an organization. |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `creator_role` | Yes |
| `enabled` | Yes |
| `membership_limit` | Yes |
| `organization_limit` | Yes |
| `send_invitation_email` | Yes |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NeonAuthOrganizationConfig():update({
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthOrganizationConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthPhoneNumberConfigEntity

```lua
local neon_auth_phone_number_config = client:NeonAuthPhoneNumberConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Whether the phone number plugin is enabled. |
| `otp_expires_in` | `number` | No | Time in seconds before the OTP expires |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `enabled` | - | Yes |
| `otp_expires_in` | - | - |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NeonAuthPhoneNumberConfig():load({ branch_id = "branch_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NeonAuthPhoneNumberConfig():update({
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthPhoneNumberConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthPluginConfigEntity

```lua
local neon_auth_plugin_config = client:NeonAuthPluginConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `string` | No | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `string` | No | OAuth client secret for the provider. |
| `id` | `string` | Yes | The OAuth provider's ID. |
| `type` | `string` | Yes | OAuth provider key type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NeonAuthPluginConfig():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthPluginConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthRedirectUriWhitelistDomainEntity

```lua
local neon_auth_redirect_uri_whitelist_domain = client:NeonAuthRedirectUriWhitelistDomain(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | Yes | Allowed redirect URI domain for the auth provider. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NeonAuthRedirectUriWhitelistDomain():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthRedirectUriWhitelistDomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthTransferAuthProviderProjectEntity

```lua
local neon_auth_transfer_auth_provider_project = client:NeonAuthTransferAuthProviderProject(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `project_id` | `string` | Yes | The Neon project ID. |
| `url` | `string` | Yes | URL for completing the process of ownership transfer |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:NeonAuthTransferAuthProviderProject():create({
  auth_provider = --[[ string ]],
  project_id = --[[ string ]],
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthTransferAuthProviderProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonAuthWebhookConfigEntity

```lua
local neon_auth_webhook_config = client:NeonAuthWebhookConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Whether the webhook is active. |
| `enabled_events` | `table` | No | Event types that trigger this webhook. |
| `timeout_seconds` | `number` | No | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | `string` | No | Destination URL that receives webhook event payloads. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NeonAuthWebhookConfig():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NeonAuthWebhookConfig():update({
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthWebhookConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonFunctionEntity

```lua
local neon_function = client:NeonFunction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_deployment` | `any` | No | The most recent deployment whose build completed successfully. |
| `created_at` | `string` | Yes |  |
| `current_deployment` | `any` | No | The most recent deployment, regardless of build status. |
| `id` | `string` | Yes | Opaque, stable function identifier. |
| `invocation_url` | `string` | Yes | URL at which the function is invoked. |
| `name` | `string` | Yes | Free-form display name. |
| `slug` | `string` | Yes | Branch-unique, lowercase DNS-label. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NeonFunction():load({ id = "neon_function_id", branch_id = "branch_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NeonFunction():update({
  id = "neon_function_id",
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonFunctionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NeonFunctionDeploymentEntity

```lua
local neon_function_deployment = client:NeonFunctionDeployment(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:NeonFunctionDeployment():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  slug = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonFunctionDeploymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OperationEntity

```lua
local operation = client:Operation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The action performed by the operation |
| `branch_id` | `string` | No | The ID of the branch this operation ran on. |
| `created_at` | `string` | Yes | A timestamp indicating when the operation was created |
| `endpoint_id` | `string` | No | The ID of the compute endpoint this operation ran on. |
| `error` | `string` | No | Human-readable message describing why the operation failed. |
| `failures_count` | `number` | Yes | The number of times the operation failed |
| `id` | `string` | Yes | The operation ID |
| `name` | `string` | No | Name for the replaced branch. |
| `operations` | `table` | Yes |  |
| `pagination` | `table` | Yes | Cursor-based pagination. |
| `project_id` | `string` | Yes | The ID of the project this operation ran on. |
| `retry_at` | `string` | No | A timestamp indicating when the operation was last retried |
| `status` | `string` | Yes | Current lifecycle state of the operation. |
| `total_duration_ms` | `number` | Yes | The total duration of the operation in milliseconds |
| `updated_at` | `string` | Yes | A timestamp indicating when the operation status was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Operation():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  action = --[[ string ]],
  created_at = --[[ string ]],
  failures_count = --[[ number ]],
  id = --[[ string ]],
  operations = --[[ table ]],
  pagination = --[[ table ]],
  status = --[[ string ]],
  total_duration_ms = --[[ number ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Operation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Operation():load({ id = "operation_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OperationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrgApiKeyCreateEntity

```lua
local org_api_key_create = client:OrgApiKeyCreate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `id` | `number` | No |  |
| `key` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrgApiKeyCreate():create({
  organization_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgApiKeyCreateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrgApiKeyRevokeEntity

```lua
local org_api_key_revoke = client:OrgApiKeyRevoke(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:OrgApiKeyRevoke():remove({ key_id = 1, organization_id = "organization_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgApiKeyRevokeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrgApiKeysListResponseItemEntity

```lua
local org_api_keys_list_response_item = client:OrgApiKeysListResponseItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | A timestamp indicating when the API key was created |
| `created_by` | `table` | Yes | The user data of the user that created this API key. |
| `id` | `number` | Yes | The API key's unique numeric ID. |
| `last_used_at` | `string` | No | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `string` | Yes | The IP address from which the API key was last used |
| `name` | `string` | Yes | The user-specified API key name |
| `project_id` | `string` | No | If set, the API key can access only this project |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrgApiKeysListResponseItem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgApiKeysListResponseItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationEntity

```lua
local organization = client:Organization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_hipaa_projects` | `boolean` | No | If true, allow account to mark projects as HIPAA |
| `created_at` | `string` | Yes | A timestamp indicting when the organization was created |
| `handle` | `string` | Yes | URL-safe identifier for the organization, used in API paths. |
| `id` | `string` | Yes | The Neon organization ID. |
| `label` | `string` | Yes | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `managed_by` | `string` | Yes | Organizations created via the Console or the API are managed by `console`. |
| `name` | `string` | Yes | Human-readable display name of the organization. |
| `plan` | `string` | Yes | Billing plan for the organization, for example `free`, `launch`, or `scale`. |
| `require_mfa` | `boolean` | No | If true, all members must have MFA enabled to access this organization |
| `updated_at` | `string` | Yes | A timestamp indicating when the organization was updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Organization():create({
  id = --[[ string ]],
  region_id = --[[ string ]],
  vpc_endpoint_id = --[[ string ]],
  created_at = --[[ string ]],
  handle = --[[ string ]],
  label = --[[ string ]],
  managed_by = --[[ string ]],
  name = --[[ string ]],
  plan = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Organization():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Organization():load({ id = "organization_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Organization():remove({ id = "organization_id", region_id = "region_id", vpc_endpoint_id = "vpc_endpoint_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationInvitationEntity

```lua
local organization_invitation = client:OrganizationInvitation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | Email of the invited user |
| `id` | `string` | Yes | The invitation ID. |
| `invitations` | `table` | Yes | List of pending invitations for the organization. |
| `invited_at` | `string` | Yes | Timestamp when the invitation was created |
| `invited_by` | `string` | Yes | UUID for the user_id who extended the invitation |
| `org_id` | `string` | Yes | Organization id as it is stored in Neon |
| `role` | `string` | Yes | Organization member's role. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationInvitation():create({
  id = --[[ string ]],
  email = --[[ string ]],
  invitations = --[[ table ]],
  invited_at = --[[ string ]],
  invited_by = --[[ string ]],
  org_id = --[[ string ]],
  role = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationInvitation():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationInvitationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PresignEntity

```lua
local presign = client:Presign(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | No | The `Content-Type` to bind into the signed request. |
| `expires_in_seconds` | `number` | No | How long the presigned URL stays valid, in seconds. |
| `operation` | `string` | Yes | The transfer direction. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Presign():create({
  branch_id = --[[ string ]],
  bucket_id = --[[ string ]],
  object_key = --[[ string ]],
  project_id = --[[ string ]],
  operation = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PresignEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectEntity

```lua
local project = client:Project(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_time_seconds` | `number` | Yes | Seconds. |
| `applications` | `table` | Yes | Map of project IDs to their installed applications. |
| `branch_logical_size_limit` | `number` | Yes | The logical size limit for a branch. |
| `branch_logical_size_limit_bytes` | `number` | Yes | The logical size limit for a branch. |
| `compute_last_active_at` | `string` | No | The most recent time when any endpoint of this project was active. |
| `compute_time_seconds` | `number` | Yes | Seconds. |
| `consumption_period_end` | `string` | Yes | A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period. |
| `consumption_period_start` | `string` | Yes | A date-time indicating when Neon Cloud started measuring consumption for current consumption period. |
| `cpu_used_sec` | `number` | Yes | Deprecated. |
| `created_at` | `string` | Yes | A timestamp indicating when the project was created |
| `creation_source` | `string` | Yes | The project creation source |
| `data_storage_bytes_hour` | `number` | Yes | Bytes-Hour. |
| `data_transfer_bytes` | `number` | Yes | Bytes. |
| `default_endpoint_settings` | `table` | No | A collection of settings for a Neon endpoint |
| `effective_project_permission` | `string` | No |  |
| `hipaa_enabled_at` | `string` | No | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | `number` | Yes | The number of seconds to retain the shared history for all branches in this project. |
| `id` | `string` | Yes | The Neon project ID. |
| `integrations` | `table` | Yes | Map of project IDs to their associated integration details. |
| `label` | `string` | Yes | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | `string` | No | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | `string` | No | A timestamp indicating when project maintenance begins. |
| `name` | `string` | Yes | The project name |
| `org_id` | `string` | No | The Neon organization ID. |
| `owner` | `table` | Yes | Ownership details for the project, including the owner's name and email. |
| `owner_id` | `string` | Yes | ID of the organization that owns the project. |
| `pagination` | `table` | Yes | Cursor-based pagination. |
| `pg_version` | `number` | Yes | The major Postgres version number. |
| `platform_id` | `string` | Yes | The cloud platform identifier. |
| `project` | `table` | Yes | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `projects` | `table` | Yes | List of projects accessible to the caller. |
| `provisioner` | `string` | Yes | Compute provisioner. |
| `proxy_host` | `string` | Yes | The proxy host for the project. |
| `quota_reset_at` | `string` | No | Deprecated. |
| `region_id` | `string` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `table` | No | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | `boolean` | Yes | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | `number` | No | The current space occupied by the project in Postgres storage, in bytes. |
| `unavailable_project_ids` | `table` | No | A list of project IDs indicating which projects are known to exist, but whose details could not be fetched within the requested (or implicit) time limit |
| `updated_at` | `string` | Yes | A timestamp indicating when the project was last updated |
| `written_data_bytes` | `number` | Yes | Bytes. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Project():create({
  id = --[[ string ]],
  vpc_endpoint_id = --[[ string ]],
  active_time_seconds = --[[ number ]],
  applications = --[[ table ]],
  branch_logical_size_limit = --[[ number ]],
  branch_logical_size_limit_bytes = --[[ number ]],
  compute_time_seconds = --[[ number ]],
  consumption_period_end = --[[ string ]],
  consumption_period_start = --[[ string ]],
  cpu_used_sec = --[[ number ]],
  created_at = --[[ string ]],
  creation_source = --[[ string ]],
  data_storage_bytes_hour = --[[ number ]],
  data_transfer_bytes = --[[ number ]],
  history_retention_seconds = --[[ number ]],
  integrations = --[[ table ]],
  label = --[[ string ]],
  name = --[[ string ]],
  owner = --[[ table ]],
  owner_id = --[[ string ]],
  pagination = --[[ table ]],
  pg_version = --[[ number ]],
  platform_id = --[[ string ]],
  project = --[[ table ]],
  projects = --[[ table ]],
  provisioner = --[[ string ]],
  proxy_host = --[[ string ]],
  region_id = --[[ string ]],
  store_passwords = --[[ boolean ]],
  updated_at = --[[ string ]],
  written_data_bytes = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Project():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Project():load({ id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Project():remove({ id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Project():update({
  id = "project_id",
  request_id = "request_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectBranchLogFieldEntity

```lua
local project_branch_log_field = client:ProjectBranchLogField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `table` | Yes | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectBranchLogField():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectBranchLogFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectBranchLogFieldValueEntity

```lua
local project_branch_log_field_value = client:ProjectBranchLogFieldValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `is_truncated` | `boolean` | Yes | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectBranchLogFieldValue():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectBranchLogFieldValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectBranchLogsQueryEntity

```lua
local project_branch_logs_query = client:ProjectBranchLogsQuery(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body_contains` | `string` | No | Match records whose rendered `message` contains this case-sensitive substring. |
| `cursor` | `string` | No | Opaque pagination cursor returned as `next_cursor` by a previous call. |
| `end_time` | `string` | No | Exclusive end of the query window. |
| `is_truncated` | `boolean` | Yes | True when more records matched than were returned. |
| `limit` | `number` | No | Maximum number of log records to return per page. |
| `logql` | `string` | No | Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream. |
| `logs` | `table` | Yes |  |
| `minimum_severity` | `string` | No | An OpenTelemetry severity level. |
| `next_cursor` | `string` | No | Pagination cursor to pass as `cursor` on the next request. |
| `scope_name` | `string` | No | Match the OpenTelemetry instrumentation scope name exactly. |
| `service_name` | `string` | No | Match the OpenTelemetry `service.name` resource attribute exactly. |
| `severity_text` | `string` | No | Match the OpenTelemetry severity text exactly. |
| `since` | `any` | No | Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted. |
| `sort_order` | `string` | No | Order matching records by timestamp. |
| `source` | `string` | No | The Neon service that emitted the log record. |
| `start_time` | `string` | No | Inclusive beginning of the query window. |
| `trace_id` | `string` | No | Match records associated with this OpenTelemetry trace ID. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectBranchLogsQuery():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  is_truncated = --[[ boolean ]],
  logs = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectBranchLogsQueryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectMemberEntity

```lua
local project_member = client:ProjectMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `effective_project_permission` | `string` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `string` | No | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `string` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `grant_source` | `string` | No | How a member's project access is granted. |
| `id` | `string` | No |  |
| `member_id` | `string` | Yes | The organization member ID. |
| `name` | `string` | No | The user's display name. |
| `org_default_project_permission` | `string` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `string` | Yes | Organization-level role used by project member role management. |
| `project_role` | `string` | No | Per-project role. |
| `user_id` | `string` | Yes | The user ID for the organization member. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectMember():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectMemberRoleEntity

```lua
local project_member_role = client:ProjectMemberRole(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credential_rotation_recommended` | `boolean` | No | Hint that database credentials may need rotation after the role change. |
| `effective_project_permission` | `string` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `string` | No | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `string` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `member_id` | `string` | Yes |  |
| `name` | `string` | No | The user's display name. |
| `org_api_key_rotation_recommended` | `boolean` | No | Hint that project-scoped org API keys created by the target user may need rotation. |
| `org_default_project_permission` | `string` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `string` | Yes | Organization-level role used by project member role management. |
| `project_id` | `string` | Yes |  |
| `project_role` | `string` | No | The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback. |
| `role` | `string` | Yes | Per-project role. |
| `user_id` | `string` | Yes |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectMemberRole():remove({ member_id = "member_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProjectMemberRole():update({
  member_id = "member_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectMemberRoleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectPermissionEntity

```lua
local project_permission = client:ProjectPermission(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | Email address of the user to grant project access to. |
| `granted_at` | `string` | Yes | Timestamp when the permission was granted. |
| `granted_to_email` | `string` | Yes | Email address of the user who has been granted access to the project. |
| `id` | `string` | Yes | The project permission's ID. |
| `revoked_at` | `string` | No | Timestamp when the permission was revoked. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectPermission():create({
  id = --[[ string ]],
  email = --[[ string ]],
  granted_at = --[[ string ]],
  granted_to_email = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProjectPermission():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProjectPermission():remove({ id = "id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectPermissionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectRecoverEntity

```lua
local project_recover = client:ProjectRecover(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branches` | `table` | Yes | Branches in the project. |
| `id` | `string` | No |  |
| `project` | `table` | Yes | Full details of the project, including configuration, consumption metrics, and ownership. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectRecover():create({
  id = --[[ string ]],
  branches = --[[ table ]],
  project = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectRecoverEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProjectTransferRequestEntity

```lua
local project_transfer_request = client:ProjectTransferRequest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `ttl_seconds` | `number` | No | Number of seconds the transfer request stays valid before it expires. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProjectTransferRequest():create({
  id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectTransferRequestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RegionEntity

```lua
local region = client:Region(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default` | `boolean` | Yes | True if this region is selected by default when no region is specified during project creation. |
| `geo_lat` | `string` | Yes | The geographical latitude (approximate) for the region. |
| `geo_long` | `string` | Yes | The geographical longitude (approximate) for the region. |
| `name` | `string` | Yes | A short description of the region. |
| `region_id` | `string` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Region():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RoleEntity

```lua
local role = client:Role(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication_method` | `string` | No | Authentication method configured for this role: `password`, `oauth`, or `no_login`. |
| `branch_id` | `string` | Yes | The ID of the branch this role belongs to. |
| `created_at` | `string` | Yes | A timestamp indicating when the role was created |
| `id` | `string` | No |  |
| `name` | `string` | Yes | Postgres role name within the branch. |
| `password` | `string` | No | The role password |
| `protected` | `boolean` | No | Whether or not the role is system-protected |
| `role` | `table` | Yes | Properties of the role to create. |
| `updated_at` | `string` | Yes | A timestamp indicating when the role was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Role():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  created_at = --[[ string ]],
  name = --[[ string ]],
  role = --[[ table ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Role():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Role():load({ id = "role_id", branch_id = "branch_id", project_id = "project_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Role():remove({ id = "role_id", branch_id = "branch_id", project_id = "project_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RoleOperationEntity

```lua
local role_operation = client:RoleOperation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `operations` | `table` | Yes |  |
| `role` | `table` | Yes | Role details for the requested database role. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RoleOperation():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  role_name = --[[ string ]],
  operations = --[[ table ]],
  role = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoleOperationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RolePasswordEntity

```lua
local role_password = client:RolePassword(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `password` | `string` | Yes | The role password |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RolePassword():load({ branch_id = "branch_id", project_id = "project_id", role_name = "role_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RolePasswordEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SendNeonAuthTestEmailEntity

```lua
local send_neon_auth_test_email = client:SendNeonAuthTestEmail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error_message` | `string` | No | The error message from the email server. |
| `host` | `string` | Yes | Hostname of the email server. |
| `password` | `string` | Yes | Password for authenticating with the SMTP server. |
| `port` | `number` | Yes | TCP port of the SMTP server. |
| `recipient_email` | `string` | Yes | The email address to send the test email to. |
| `sender_email` | `string` | Yes | Email address used as the From address on outgoing auth emails. |
| `sender_name` | `string` | Yes | Display name shown as the sender in outgoing emails. |
| `success` | `boolean` | Yes | Whether the test email was sent successfully. |
| `username` | `string` | Yes | Username for authenticating with the SMTP server. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SendNeonAuthTestEmail():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  host = --[[ string ]],
  password = --[[ string ]],
  port = --[[ number ]],
  recipient_email = --[[ string ]],
  sender_email = --[[ string ]],
  sender_name = --[[ string ]],
  success = --[[ boolean ]],
  username = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SendNeonAuthTestEmailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SnapshotEntity

```lua
local snapshot = client:Snapshot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Timestamp when the snapshot was created, in RFC 3339 format (UTC). |
| `diff_size` | `number` | No | Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage. |
| `expires_at` | `string` | No | RFC 3339 timestamp when the snapshot expires and is eligible for deletion. |
| `full_size` | `number` | No | Full logical size of the snapshot in bytes at the time it was taken. |
| `id` | `string` | Yes | The snapshot ID. |
| `lsn` | `string` | No | WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`). |
| `manual` | `boolean` | No | True if the snapshot was created manually rather than by a schedule. |
| `name` | `string` | Yes | Human-readable label for the snapshot. |
| `operations` | `table` | Yes |  |
| `slug` | `string` | No | Snapshot resource ID, unique within the project. |
| `snapshot` | `table` | Yes | Fields to update on the snapshot. |
| `source_branch_id` | `string` | No | Branch from which this snapshot was created. |
| `timestamp` | `string` | No | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Snapshot():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  operations = --[[ table ]],
  snapshot = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Snapshot():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Snapshot():remove({ id = "id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Snapshot():update({
  id = "id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SnapshotEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SpendingLimitEntity

```lua
local spending_limit = client:SpendingLimit(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `spending_limit_cents` | `number` | Yes | Monthly spending cap in cents. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SpendingLimit():load({ organization_id = "organization_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SpendingLimit():update({
  organization_id = "organization_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SpendingLimitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TriggerEntity

```lua
local trigger = client:Trigger(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `triggers` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Trigger():create({
  branch_id = --[[ string ]],
  project_id = --[[ string ]],
  triggers = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Trigger():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Trigger():load({ id = "trigger_id", branch_id = "branch_id", project_id = "project_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Trigger():update({
  id = "trigger_id",
  branch_id = "branch_id",
  project_id = "project_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpdateNeonAuthUserRoleEntity

```lua
local update_neon_auth_user_role = client:UpdateNeonAuthUserRole(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | ID of the updated user |
| `roles` | `table` | Yes | Roles to assign to the user in the Neon Auth (Better Auth) directory. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UpdateNeonAuthUserRole():update({
  branch_id = "branch_id",
  project_id = "project_id",
  user_id = "user_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateNeonAuthUserRoleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VpcEndpointEntity

```lua
local vpc_endpoint = client:VpcEndpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `example_restricted_projects` | `table` | Yes | A list of example projects that are restricted to use this VPC endpoint. |
| `id` | `string` | No |  |
| `label` | `string` | Yes | A descriptive label for the VPC endpoint |
| `num_restricted_projects` | `number` | Yes | The number of projects that are restricted to use this VPC endpoint. |
| `region_id` | `string` | Yes | The region where the VPC endpoint is located |
| `state` | `string` | Yes | The current state of the VPC endpoint. |
| `vpc_endpoint_id` | `string` | Yes | Cloud provider identifier for the VPC endpoint. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:VpcEndpoint():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:VpcEndpoint():load({ id = "vpc_endpoint_id", organization_id = "organization_id", region_id = "region_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VpcEndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

