# Neon Ruby SDK Reference

Complete API reference for the Neon Ruby SDK.


## NeonSDK

### Constructor

```ruby
require_relative 'Neon_sdk'

client = NeonSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NeonSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = NeonSDK.test
```


### Instance Methods

#### `Anonymize(data = nil)`

Create a new `Anonymize` entity instance. Pass `nil` for no initial data.

#### `AnonymizedBranchStatus(data = nil)`

Create a new `AnonymizedBranchStatus` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data = nil)`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `Auth(data = nil)`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `AuthLegacy(data = nil)`

Create a new `AuthLegacy` entity instance. Pass `nil` for no initial data.

#### `AvailablePreloadLibrary(data = nil)`

Create a new `AvailablePreloadLibrary` entity instance. Pass `nil` for no initial data.

#### `BackupSchedule(data = nil)`

Create a new `BackupSchedule` entity instance. Pass `nil` for no initial data.

#### `Branch(data = nil)`

Create a new `Branch` entity instance. Pass `nil` for no initial data.

#### `BranchAiGateway(data = nil)`

Create a new `BranchAiGateway` entity instance. Pass `nil` for no initial data.

#### `BranchOperation(data = nil)`

Create a new `BranchOperation` entity instance. Pass `nil` for no initial data.

#### `BranchSchema(data = nil)`

Create a new `BranchSchema` entity instance. Pass `nil` for no initial data.

#### `BranchSchemaCompare(data = nil)`

Create a new `BranchSchemaCompare` entity instance. Pass `nil` for no initial data.

#### `BranchStorage(data = nil)`

Create a new `BranchStorage` entity instance. Pass `nil` for no initial data.

#### `Bucket(data = nil)`

Create a new `Bucket` entity instance. Pass `nil` for no initial data.

#### `BucketObjectsList(data = nil)`

Create a new `BucketObjectsList` entity instance. Pass `nil` for no initial data.

#### `ConnectionUri(data = nil)`

Create a new `ConnectionUri` entity instance. Pass `nil` for no initial data.

#### `Consumption(data = nil)`

Create a new `Consumption` entity instance. Pass `nil` for no initial data.

#### `CreateCredential(data = nil)`

Create a new `CreateCredential` entity instance. Pass `nil` for no initial data.

#### `Credential(data = nil)`

Create a new `Credential` entity instance. Pass `nil` for no initial data.

#### `CurrentUserInfo(data = nil)`

Create a new `CurrentUserInfo` entity instance. Pass `nil` for no initial data.

#### `CustomDomain(data = nil)`

Create a new `CustomDomain` entity instance. Pass `nil` for no initial data.

#### `DataApi(data = nil)`

Create a new `DataApi` entity instance. Pass `nil` for no initial data.

#### `Database(data = nil)`

Create a new `Database` entity instance. Pass `nil` for no initial data.

#### `EmailProvider(data = nil)`

Create a new `EmailProvider` entity instance. Pass `nil` for no initial data.

#### `EmailServer(data = nil)`

Create a new `EmailServer` entity instance. Pass `nil` for no initial data.

#### `Empty(data = nil)`

Create a new `Empty` entity instance. Pass `nil` for no initial data.

#### `Endpoint(data = nil)`

Create a new `Endpoint` entity instance. Pass `nil` for no initial data.

#### `EndpointOperation(data = nil)`

Create a new `EndpointOperation` entity instance. Pass `nil` for no initial data.

#### `Function(data = nil)`

Create a new `Function` entity instance. Pass `nil` for no initial data.

#### `Jwk(data = nil)`

Create a new `Jwk` entity instance. Pass `nil` for no initial data.

#### `MaskingRule(data = nil)`

Create a new `MaskingRule` entity instance. Pass `nil` for no initial data.

#### `Member(data = nil)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `NeonAuthAllowLocalhost(data = nil)`

Create a new `NeonAuthAllowLocalhost` entity instance. Pass `nil` for no initial data.

#### `NeonAuthConfig(data = nil)`

Create a new `NeonAuthConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthCreateIntegration(data = nil)`

Create a new `NeonAuthCreateIntegration` entity instance. Pass `nil` for no initial data.

#### `NeonAuthCreateNewUser(data = nil)`

Create a new `NeonAuthCreateNewUser` entity instance. Pass `nil` for no initial data.

#### `NeonAuthEmailAndPasswordConfig(data = nil)`

Create a new `NeonAuthEmailAndPasswordConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthEmailServerConfig(data = nil)`

Create a new `NeonAuthEmailServerConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthIntegration(data = nil)`

Create a new `NeonAuthIntegration` entity instance. Pass `nil` for no initial data.

#### `NeonAuthMagicLinkConfig(data = nil)`

Create a new `NeonAuthMagicLinkConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthOauthProvider(data = nil)`

Create a new `NeonAuthOauthProvider` entity instance. Pass `nil` for no initial data.

#### `NeonAuthOrganizationConfig(data = nil)`

Create a new `NeonAuthOrganizationConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthPhoneNumberConfig(data = nil)`

Create a new `NeonAuthPhoneNumberConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthPluginConfig(data = nil)`

Create a new `NeonAuthPluginConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthRedirectUriWhitelistDomain(data = nil)`

Create a new `NeonAuthRedirectUriWhitelistDomain` entity instance. Pass `nil` for no initial data.

#### `NeonAuthTransferAuthProviderProject(data = nil)`

Create a new `NeonAuthTransferAuthProviderProject` entity instance. Pass `nil` for no initial data.

#### `NeonAuthWebhookConfig(data = nil)`

Create a new `NeonAuthWebhookConfig` entity instance. Pass `nil` for no initial data.

#### `NeonFunction(data = nil)`

Create a new `NeonFunction` entity instance. Pass `nil` for no initial data.

#### `NeonFunctionDeployment(data = nil)`

Create a new `NeonFunctionDeployment` entity instance. Pass `nil` for no initial data.

#### `Operation(data = nil)`

Create a new `Operation` entity instance. Pass `nil` for no initial data.

#### `OrgApiKeyCreate(data = nil)`

Create a new `OrgApiKeyCreate` entity instance. Pass `nil` for no initial data.

#### `OrgApiKeyRevoke(data = nil)`

Create a new `OrgApiKeyRevoke` entity instance. Pass `nil` for no initial data.

#### `OrgApiKeysListResponseItem(data = nil)`

Create a new `OrgApiKeysListResponseItem` entity instance. Pass `nil` for no initial data.

#### `Organization(data = nil)`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationInvitation(data = nil)`

Create a new `OrganizationInvitation` entity instance. Pass `nil` for no initial data.

#### `Presign(data = nil)`

Create a new `Presign` entity instance. Pass `nil` for no initial data.

#### `Project(data = nil)`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectBranchLogField(data = nil)`

Create a new `ProjectBranchLogField` entity instance. Pass `nil` for no initial data.

#### `ProjectBranchLogFieldValue(data = nil)`

Create a new `ProjectBranchLogFieldValue` entity instance. Pass `nil` for no initial data.

#### `ProjectBranchLogsQuery(data = nil)`

Create a new `ProjectBranchLogsQuery` entity instance. Pass `nil` for no initial data.

#### `ProjectMember(data = nil)`

Create a new `ProjectMember` entity instance. Pass `nil` for no initial data.

#### `ProjectMemberRole(data = nil)`

Create a new `ProjectMemberRole` entity instance. Pass `nil` for no initial data.

#### `ProjectPermission(data = nil)`

Create a new `ProjectPermission` entity instance. Pass `nil` for no initial data.

#### `ProjectRecover(data = nil)`

Create a new `ProjectRecover` entity instance. Pass `nil` for no initial data.

#### `ProjectTransferRequest(data = nil)`

Create a new `ProjectTransferRequest` entity instance. Pass `nil` for no initial data.

#### `Region(data = nil)`

Create a new `Region` entity instance. Pass `nil` for no initial data.

#### `Role(data = nil)`

Create a new `Role` entity instance. Pass `nil` for no initial data.

#### `RoleOperation(data = nil)`

Create a new `RoleOperation` entity instance. Pass `nil` for no initial data.

#### `RolePassword(data = nil)`

Create a new `RolePassword` entity instance. Pass `nil` for no initial data.

#### `SendNeonAuthTestEmail(data = nil)`

Create a new `SendNeonAuthTestEmail` entity instance. Pass `nil` for no initial data.

#### `Snapshot(data = nil)`

Create a new `Snapshot` entity instance. Pass `nil` for no initial data.

#### `SpendingLimit(data = nil)`

Create a new `SpendingLimit` entity instance. Pass `nil` for no initial data.

#### `Trigger(data = nil)`

Create a new `Trigger` entity instance. Pass `nil` for no initial data.

#### `UpdateNeonAuthUserRole(data = nil)`

Create a new `UpdateNeonAuthUserRole` entity instance. Pass `nil` for no initial data.

#### `VpcEndpoint(data = nil)`

Create a new `VpcEndpoint` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AnonymizeEntity

```ruby
anonymize = client.Anonymize
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `String` | Yes | The ID of the anonymized branch. |
| `created_at` | `String` | Yes | A timestamp indicating when the anonymized branch was created |
| `failed_at` | `String` | No | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | `Hash` | No | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | `String` | Yes | The ID of the project this branch belongs to. |
| `state` | `String` | Yes | The current state of the anonymized branch. |
| `status_message` | `String` | No | A descriptive message about the current status or any errors |
| `updated_at` | `String` | Yes | A timestamp indicating when the anonymized branch status was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Anonymize.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "created_at" => "example_created_at", # String
  "state" => "example_state", # String
  "updated_at" => "example_updated_at", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnonymizeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AnonymizedBranchStatusEntity

```ruby
anonymized_branch_status = client.AnonymizedBranchStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `String` | Yes | The ID of the anonymized branch. |
| `created_at` | `String` | Yes | A timestamp indicating when the anonymized branch was created |
| `failed_at` | `String` | No | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | `Hash` | No | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | `String` | Yes | The ID of the project this branch belongs to. |
| `state` | `String` | Yes | The current state of the anonymized branch. |
| `status_message` | `String` | No | A descriptive message about the current status or any errors |
| `updated_at` | `String` | Yes | A timestamp indicating when the anonymized branch status was last updated |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AnonymizedBranchStatus.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnonymizedBranchStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiKeyEntity

```ruby
api_key = client.ApiKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | A timestamp indicating when the API key was created |
| `created_by` | `String` | Yes | ID of the user who created this API key |
| `id` | `Integer` | Yes | The API key's unique numeric ID. |
| `key` | `String` | Yes | The generated 64-bit token required to access the Neon API |
| `key_name` | `String` | Yes | A user-specified API key name. |
| `last_used_at` | `String` | No | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `String` | Yes | The IP address from which the API key was last used |
| `name` | `String` | Yes | The user-specified API key name |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ApiKey.create({
  "created_at" => "example_created_at", # String
  "created_by" => "example_created_by", # String
  "id" => 1, # Integer
  "key" => "example_key", # String
  "key_name" => "example_key_name", # String
  "last_used_from_addr" => "example_last_used_from_addr", # String
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ApiKey.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ApiKey.remove({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AuthEntity

```ruby
auth = client.Auth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes | The ID of the account associated with this authentication record. |
| `auth_data` | `String` | No |  |
| `auth_method` | `String` | Yes | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Auth.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "account_id" => "example_account_id", # String
  "auth_method" => "example_auth_method", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Auth.load()
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Auth.remove({ "branch_id" => "branch_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AuthLegacyEntity

```ruby
auth_legacy = client.AuthLegacy
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `String` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `String` | Yes | URI to add to the redirect URI allowlist for the auth provider. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AuthLegacy.create({
  "project_id" => "example_project_id", # String
  "auth_provider" => "example_auth_provider", # String
  "domain" => "example_domain", # String
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AuthLegacy.remove({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuthLegacyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AvailablePreloadLibraryEntity

```ruby
available_preload_library = client.AvailablePreloadLibrary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | Yes | Human-readable explanation of the library's purpose and behavior. |
| `is_default` | `Boolean` | Yes | Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints. |
| `is_experimental` | `Boolean` | Yes | Marks the library as experimental. |
| `library_name` | `String` | Yes | Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`). |
| `version` | `String` | Yes | Version of the preload library. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AvailablePreloadLibrary.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AvailablePreloadLibraryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BackupScheduleEntity

```ruby
backup_schedule = client.BackupSchedule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | `Integer` | No | The day of the week or month to take the snapshot (if applicable). |
| `frequency` | `String` | Yes | How often to take snapshots. |
| `hour` | `Integer` | No | The hour of the day to take the snapshot (if applicable). |
| `month` | `Integer` | No | The month of the year to take the snapshot (if applicable). |
| `retention_seconds` | `Integer` | No | How long to keep a scheduled snapshot (in seconds) before it's automatically deleted. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BackupSchedule.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BackupScheduleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BranchEntity

```ruby
branch = client.Branch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_time_seconds` | `Integer` | Yes | Total time this branch's compute has been active during the current billing period, in seconds (not weighted by compute size). |
| `annotation` | `Hash` | Yes | Annotation data associated with the annotated object. |
| `branch` | `Hash` | Yes | Branch returned by the request. |
| `compute_time_seconds` | `Integer` | Yes | Total Postgres compute time consumed by this branch during the current billing period, in CU-seconds (weighted by compute size). |
| `cpu_used_sec` | `Integer` | Yes | Deprecated. |
| `created_at` | `String` | Yes | A timestamp indicating when the branch was created |
| `created_by` | `Hash` | No | The resolved user model that contains details of the user/org/integration/api_key used for branch creation. |
| `creation_source` | `String` | Yes | The branch creation source |
| `current_state` | `String` | Yes | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `data_transfer_bytes` | `Integer` | Yes | Total data transferred out of the branch, in bytes. |
| `default` | `Boolean` | Yes | Whether the branch is the project's default branch |
| `expires_at` | `String` | No | The timestamp when the branch is scheduled to expire and be automatically deleted. |
| `id` | `String` | Yes | The branch ID. |
| `init_source` | `String` | No | Source of initialization for the branch. |
| `last_reset_at` | `String` | No | A timestamp indicating when the branch was last reset |
| `logical_size` | `Integer` | No | The logical size of the branch, in bytes |
| `name` | `String` | Yes | The branch name |
| `parent_id` | `String` | No | The `branch_id` of the parent branch |
| `parent_lsn` | `String` | No | The Log Sequence Number (LSN) on the parent branch from which this branch was created. |
| `parent_timestamp` | `String` | No | The point in time on the parent branch from which this branch was created. |
| `pending_state` | `String` | No | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `primary` | `Boolean` | No | Deprecated. |
| `project_id` | `String` | Yes | The ID of the project this branch belongs to. |
| `protected` | `Boolean` | Yes | Whether the branch is protected. |
| `recovery` | `Hash` | Yes | Recovery information for a deleted branch. |
| `restore_status` | `String` | No | Could be `restored`, `finalized` or `detaching`. |
| `restored_as` | `String` | No | ID of the target branch which was replaced when this branch was restored |
| `restored_from` | `String` | No | ID of the snapshot that was the restore source for this branch |
| `restricted_actions` | `Array` | No | A list of actions that are currently restricted for this branch and the reason why. |
| `state_changed_at` | `String` | Yes | A UTC timestamp indicating when the `current_state` began |
| `ttl_interval_seconds` | `Integer` | No | The time-to-live (TTL) duration originally configured for the branch, in seconds. |
| `updated_at` | `String` | Yes | A timestamp indicating when the branch was last updated |
| `written_data_bytes` | `Integer` | Yes | Data written by this branch during the current billing period, in bytes. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Branch.create({
  "project_id" => "example_project_id", # String
  "active_time_seconds" => 1, # Integer
  "annotation" => {}, # Hash
  "branch" => {}, # Hash
  "compute_time_seconds" => 1, # Integer
  "cpu_used_sec" => 1, # Integer
  "created_at" => "example_created_at", # String
  "creation_source" => "example_creation_source", # String
  "current_state" => "example_current_state", # String
  "data_transfer_bytes" => 1, # Integer
  "default" => true, # Boolean
  "id" => "example_id", # String
  "name" => "example_name", # String
  "protected" => true, # Boolean
  "recovery" => {}, # Hash
  "state_changed_at" => "example_state_changed_at", # String
  "updated_at" => "example_updated_at", # String
  "written_data_bytes" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Branch.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Branch.load({ "id" => "branch_id", "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Branch.remove({ "id" => "branch_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Branch.update({
  "id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BranchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BranchAiGatewayEntity

```ruby
branch_ai_gateway = client.BranchAiGateway
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_url` | `String` | Yes | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | `Boolean` | Yes | Always `true` in 200 responses. |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BranchAiGateway.load({ "id" => "branch_ai_gateway_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BranchAiGatewayEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BranchOperationEntity

```ruby
branch_operation = client.BranchOperation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `Hash` | Yes | Branch returned by the request. |
| `id` | `String` | No |  |
| `operations` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BranchOperation.create({
  "id" => "example_id", # String
  "project_id" => "example_project_id", # String
  "branch" => {}, # Hash
  "operations" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BranchOperationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BranchSchemaEntity

```ruby
branch_schema = client.BranchSchema
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `json` | `Hash` | Yes | Branch schema represented as a structured JSON object, parallel to the SQL DDL in `sql`. |
| `sql` | `String` | No | Branch schema expressed as SQL DDL statements. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BranchSchema.load({ "id" => "branch_schema_id", "project_id" => "project_id", "db_name" => "db_name" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BranchSchemaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BranchSchemaCompareEntity

```ruby
branch_schema_compare = client.BranchSchemaCompare
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BranchSchemaCompare.load({ "id" => "branch_schema_compare_id", "project_id" => "project_id", "db_name" => "db_name" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BranchSchemaCompareEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BranchStorageEntity

```ruby
branch_storage = client.BranchStorage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `Boolean` | Yes | Always `true` in 200 responses. |
| `force_path_style` | `Boolean` | Yes | Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). |
| `id` | `String` | No |  |
| `region` | `String` | Yes | The AWS region for this branch's object storage. |
| `s3_endpoint` | `String` | Yes | The S3-compatible endpoint URL for this branch. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BranchStorage.load({ "id" => "branch_storage_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BranchStorageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BucketEntity

```ruby
bucket = client.Bucket
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `String` | No | Access level for the bucket. |
| `created_at` | `String` | Yes | When the bucket was created. |
| `id` | `String` | No |  |
| `name` | `String` | Yes | The bucket name. |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `access_level` | - | Yes | - | - |
| `created_at` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Bucket.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "created_at" => "example_created_at", # String
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Bucket.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Bucket.load({ "branch_id" => "branch_id", "bucket_id" => "bucket_id", "object_key" => "object_key", "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Bucket.remove({ "branch_id" => "branch_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BucketEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BucketObjectsListEntity

```ruby
bucket_objects_list = client.BucketObjectsList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `String` | Yes | The object's entity tag (content hash). |
| `key` | `String` | Yes | The full object key. |
| `last_modified` | `String` | Yes | The time the object was last modified. |
| `size` | `Integer` | Yes | The object size in bytes. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BucketObjectsList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BucketObjectsListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConnectionUriEntity

```ruby
connection_uri = client.ConnectionUri
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uri` | `String` | Yes | The connection URI. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ConnectionUri.load({ "project_id" => "project_id", "database_name" => "database_name", "role_name" => "role_name" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConnectionUriEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConsumptionEntity

```ruby
consumption = client.Consumption
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `String` | Yes | The Neon branch ID. |
| `periods` | `Array` | Yes | Consumption history records for the branch, grouped by billing period. |
| `project_id` | `String` | Yes | The ID of the project that owns this branch. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Consumption.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConsumptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CreateCredentialEntity

```ruby
create_credential = client.CreateCredential
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | No | Free-form customer label for the credential. |
| `principal_type` | `String` | Yes | Principal type for the credential. |
| `scopes` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CreateCredential.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "principal_type" => "example_principal_type", # String
  "scopes" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CreateCredentialEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CredentialEntity

```ruby
credential = client.Credential
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `String` | No |  |
| `created_at` | `String` | Yes |  |
| `expires_at` | `String` | No | When the credential expires; absent means never expires. |
| `function_id` | `String` | No |  |
| `id` | `String` | No |  |
| `last_used_at` | `String` | No |  |
| `name` | `String` | No | Customer-supplied label; absent when not provided at issuance. |
| `principal_type` | `String` | Yes |  |
| `revoked_at` | `String` | No |  |
| `scopes` | `Array` | Yes |  |
| `token_id` | `String` | Yes | Opaque credential id (e.g. |
| `token_id_short` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Credential.create({
  "branch_id" => "example_branch_id", # String
  "id" => "example_id", # String
  "project_id" => "example_project_id", # String
  "created_at" => "example_created_at", # String
  "principal_type" => "example_principal_type", # String
  "scopes" => [], # Array
  "token_id" => "example_token_id", # String
  "token_id_short" => "example_token_id_short", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Credential.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Credential.remove({ "branch_id" => "branch_id", "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CredentialEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CurrentUserInfoEntity

```ruby
current_user_info = client.CurrentUserInfo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | Yes | Email address associated with this auth account. |
| `image` | `String` | Yes | URL of the user's profile picture as provided by the identity provider. |
| `login` | `String` | Yes | Deprecated. |
| `name` | `String` | Yes | Display name of the account as provided by the identity provider. |
| `provider` | `String` | Yes | Identity provider id from keycloak |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CurrentUserInfo.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CurrentUserInfoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomDomainEntity

```ruby
custom_domain = client.CustomDomain
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `String` | Yes | The custom domain to register (for example `dashboard.acme.com`). |
| `entity_id` | `String` | Yes | The target entity's identifier within the branch. |
| `entity_type` | `String` | Yes | The kind of branch entity to point the domain at. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CustomDomain.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "domain" => "example_domain", # String
  "entity_id" => "example_entity_id", # String
  "entity_type" => "example_entity_type", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomDomainEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DataApiEntity

```ruby
data_api = client.DataApi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_default_grants` | `Boolean` | No | Grant all permissions to the tables in the public schema to authenticated users |
| `auth_provider` | `String` | No | Authentication provider for the Neon Data API. |
| `available_schemas` | `Array` | No | List of available database schemas (SubZero only) |
| `id` | `String` | No |  |
| `jwks_url` | `String` | No | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `jwt_audience` | `String` | No | Expected `aud` claim in incoming JWTs. |
| `provider_name` | `String` | No | Display name for the authentication provider. |
| `settings` | `Hash` | No | Configuration settings for the Data API (SubZero only) |
| `skip_auth_schema` | `Boolean` | No | Skip creating the auth schema and RLS functions |
| `status` | `String` | Yes | The status of the Neon Data API deployment |
| `url` | `String` | Yes | The URL of the Neon Data API |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DataApi.create({
  "branch_id" => "example_branch_id", # String
  "id" => "example_id", # String
  "project_id" => "example_project_id", # String
  "status" => "example_status", # String
  "url" => "example_url", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DataApi.load({ "id" => "data_api_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DataApi.remove({ "id" => "data_api_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.DataApi.update({
  "id" => "data_api_id",
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DataApiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DatabaseEntity

```ruby
database = client.Database
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `String` | Yes | The ID of the branch this database belongs to. |
| `created_at` | `String` | Yes | A timestamp indicating when the database was created |
| `database` | `Hash` | Yes | Configuration for the new Postgres database. |
| `id` | `Integer` | Yes | The database ID |
| `name` | `String` | Yes | The database name |
| `owner_name` | `String` | Yes | The name of role that owns the database |
| `updated_at` | `String` | Yes | A timestamp indicating when the database was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Database.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "created_at" => "example_created_at", # String
  "database" => {}, # Hash
  "id" => 1, # Integer
  "name" => "example_name", # String
  "owner_name" => "example_owner_name", # String
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Database.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Database.load({ "id" => "database_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Database.remove({ "id" => "database_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Database.update({
  "id" => "database_id",
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DatabaseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EmailProviderEntity

```ruby
email_provider = client.EmailProvider
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.EmailProvider.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EmailProviderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EmailServerEntity

```ruby
email_server = client.EmailServer
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.EmailServer.load({ "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EmailServerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EmptyEntity

```ruby
empty = client.Empty
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_org_id` | `String` | Yes | The destination organization identifier |
| `project_ids` | `Array` | Yes | The list of projects ids to transfer. |
| `schedule` | `Array` | Yes | List of schedule entries defining the backup frequency. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Empty.create({
  "organization_id" => "example_organization_id", # String
  "destination_org_id" => "example_destination_org_id", # String
  "project_ids" => [], # Array
  "schedule" => [], # Array
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Empty.remove({ "organization_id" => "organization_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Empty.update({
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EmptyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EndpointEntity

```ruby
endpoint = client.Endpoint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoscaling_limit_max_cu` | `Float` | Yes | The maximum number of Compute Units |
| `autoscaling_limit_min_cu` | `Float` | Yes | The minimum number of Compute Units |
| `branch_id` | `String` | Yes | The ID of the branch this compute endpoint belongs to. |
| `compute_release_version` | `String` | No | Attached compute's release version number. |
| `created_at` | `String` | Yes | A timestamp indicating when the compute endpoint was created |
| `creation_source` | `String` | Yes | The compute endpoint creation source |
| `current_state` | `String` | Yes | Lifecycle state of the compute endpoint. |
| `disabled` | `Boolean` | Yes | Whether to restrict connections to the compute endpoint. |
| `endpoint` | `Hash` | Yes | Configuration for the compute endpoint to create. |
| `host` | `String` | Yes | The hostname of the compute endpoint. |
| `id` | `String` | Yes | The compute endpoint ID. |
| `last_active` | `String` | No | A timestamp indicating when the compute endpoint was last active |
| `name` | `String` | No | Optional name of the compute endpoint |
| `passwordless_access` | `Boolean` | Yes | Whether to permit passwordless access to the compute endpoint |
| `pending_state` | `String` | No | Target state the compute endpoint is transitioning to. |
| `pooler_enabled` | `Boolean` | Yes | Deprecated. |
| `pooler_mode` | `String` | Yes | Deprecated. |
| `project_id` | `String` | Yes | The ID of the project this compute endpoint belongs to. |
| `provisioner` | `String` | Yes | Compute provisioner. |
| `proxy_host` | `String` | Yes | Deprecated. |
| `region_id` | `String` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `Hash` | Yes | A collection of settings for a compute endpoint |
| `started_at` | `String` | No | A timestamp indicating when the compute endpoint was last started |
| `suspend_timeout_seconds` | `Integer` | Yes | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `suspended_at` | `String` | No | A timestamp indicating when the compute endpoint was last suspended |
| `type` | `String` | Yes | Compute endpoint type. |
| `updated_at` | `String` | Yes | A timestamp indicating when the compute endpoint was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Endpoint.create({
  "project_id" => "example_project_id", # String
  "autoscaling_limit_max_cu" => 1, # Float
  "autoscaling_limit_min_cu" => 1, # Float
  "branch_id" => "example_branch_id", # String
  "created_at" => "example_created_at", # String
  "creation_source" => "example_creation_source", # String
  "current_state" => "example_current_state", # String
  "disabled" => true, # Boolean
  "endpoint" => {}, # Hash
  "host" => "example_host", # String
  "id" => "example_id", # String
  "passwordless_access" => true, # Boolean
  "pooler_enabled" => true, # Boolean
  "pooler_mode" => "example_pooler_mode", # String
  "provisioner" => "example_provisioner", # String
  "proxy_host" => "example_proxy_host", # String
  "region_id" => "example_region_id", # String
  "settings" => {}, # Hash
  "suspend_timeout_seconds" => 1, # Integer
  "type" => "example_type", # String
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Endpoint.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Endpoint.load({ "id" => "endpoint_id", "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Endpoint.remove({ "id" => "endpoint_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Endpoint.update({
  "id" => "endpoint_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EndpointOperationEntity

```ruby
endpoint_operation = client.EndpointOperation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endpoint` | `Hash` | Yes | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` | `String` | No |  |
| `operations` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.EndpointOperation.create({
  "id" => "example_id", # String
  "project_id" => "example_project_id", # String
  "endpoint" => {}, # Hash
  "operations" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EndpointOperationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FunctionEntity

```ruby
function = client.Function
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_deployment` | `Object` | No | The most recent deployment whose build completed successfully. |
| `binding_status` | `String` | No | Whether Neon's internal routing for the domain is published: `pending`, `present`, or `missing`. |
| `cname_target` | `String` | Yes | The hostname the customer must point their custom domain at with a CNAME record. |
| `created_at` | `String` | Yes |  |
| `current_deployment` | `Object` | No | The most recent deployment, regardless of build status. |
| `dns_status` | `String` | No | The DNS + CAA portion of the check: `pending` (no records yet), `ok` (resolves to our edge and the CA is authorized), `misconfigured` (your CNAME does not resolve to our edge), or `caa_blocked` (your CAA records forbid Let's Encrypt). |
| `domain` | `String` | Yes | The registered custom domain (normalized, lowercase). |
| `entity_id` | `String` | Yes | The target entity's identifier within the branch. |
| `entity_type` | `String` | Yes | The kind of branch entity the domain targets. |
| `id` | `String` | Yes | Opaque, stable function identifier. |
| `invocation_url` | `String` | Yes | URL at which the function is invoked. |
| `name` | `String` | Yes | Free-form display name. |
| `slug` | `String` | Yes | Branch-unique, lowercase DNS-label. |
| `status` | `String` | No | The domain's current validity, computed by a background check: `pending` (still converging — point your CNAME at `cname_target` and wait), `active` (live: DNS resolves to the edge, the CA is authorized, and routing is published), or `error… |
| `status_reason` | `String` | No | A short, stable machine-readable reason for a non-active `status` (e.g. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Function.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Function.remove({ "branch_id" => "branch_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FunctionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## JwkEntity

```ruby
jwk = client.Jwk
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `String` | No | The Neon branch ID. |
| `created_at` | `String` | Yes | The date and time when the JWKS was created |
| `id` | `String` | Yes | The JWKS configuration's ID. |
| `jwks_url` | `String` | Yes | URL of the provider's JWKS endpoint used to verify JWTs. |
| `jwt_audience` | `String` | No | Expected `aud` claim in incoming JWTs. |
| `project_id` | `String` | Yes | The Neon project ID. |
| `provider_name` | `String` | Yes | The name of the authentication provider (e.g., Clerk, Stytch, Auth0) |
| `role_names` | `Array` | No | Deprecated. |
| `skip_role_creation` | `Boolean` | No | Deprecated. |
| `updated_at` | `String` | Yes | The date and time when the JWKS was last modified |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Jwk.create({
  "project_id" => "example_project_id", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "jwks_url" => "example_jwks_url", # String
  "provider_name" => "example_provider_name", # String
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Jwk.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Jwk.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `JwkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MaskingRuleEntity

```ruby
masking_rule = client.MaskingRule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column_name` | `String` | Yes | The name of the column to be masked |
| `database_name` | `String` | Yes | The name of the database containing the table to be masked |
| `masking_function` | `String` | No | The PostgreSQL Anonymizer masking function to apply. |
| `masking_rules` | `Array` | Yes | List of masking rules for the branch |
| `masking_value` | `String` | No | A literal value to set on the column when masking. |
| `schema_name` | `String` | Yes | The name of the schema containing the table to be masked |
| `table_name` | `String` | Yes | The name of the table containing the column to be masked |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.MaskingRule.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.MaskingRule.update({
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MaskingRuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MemberEntity

```ruby
member = client.Member
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes | The organization member's ID. |
| `joined_at` | `String` | No | Timestamp when the user joined the organization. |
| `org_id` | `String` | Yes | The Neon organization ID. |
| `role` | `String` | Yes | Organization member's role. |
| `user_id` | `String` | Yes | The Neon user ID. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Member.load({ "id" => "member_id", "organization_id" => "organization_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Member.remove({ "id" => "member_id", "organization_id" => "organization_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Member.update({
  "id" => "member_id",
  "organization_id" => "organization_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthAllowLocalhostEntity

```ruby
neon_auth_allow_localhost = client.NeonAuthAllowLocalhost
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_localhost` | `Boolean` | Yes | Whether to allow localhost connections |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NeonAuthAllowLocalhost.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NeonAuthAllowLocalhost.update({
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthAllowLocalhostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthConfigEntity

```ruby
neon_auth_config = client.NeonAuthConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | Yes | The application name used in auth emails and communications. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NeonAuthConfig.update({
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthCreateIntegrationEntity

```ruby
neon_auth_create_integration = client.NeonAuthCreateIntegration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `String` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `branch_id` | `String` | Yes | The Neon branch ID. |
| `database_name` | `String` | No | Name of the database to enable Neon Auth on. |
| `project_id` | `String` | Yes | The Neon project ID. |
| `role_name` | `String` | No | Deprecated. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.NeonAuthCreateIntegration.create({
  "auth_provider" => "example_auth_provider", # String
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthCreateIntegrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthCreateNewUserEntity

```ruby
neon_auth_create_new_user = client.NeonAuthCreateNewUser
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `String` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `email` | `String` | Yes | Email address of the new Neon Auth user to create. |
| `name` | `String` | No | Display name for the new user. |
| `project_id` | `String` | Yes | The Neon project ID. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.NeonAuthCreateNewUser.create({
  "auth_provider" => "example_auth_provider", # String
  "email" => "example_email", # String
  "project_id" => "example_project_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthCreateNewUserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthEmailAndPasswordConfigEntity

```ruby
neon_auth_email_and_password_config = client.NeonAuthEmailAndPasswordConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_sign_in_after_verification` | `Boolean` | Yes | Whether users are automatically signed in after verifying their email |
| `disable_sign_up` | `Boolean` | Yes | Whether to disable new user sign ups |
| `email_verification_method` | `String` | Yes | Controls how email addresses are verified during sign-up or sign-in. |
| `enabled` | `Boolean` | Yes | Whether email and password authentication is enabled |
| `require_email_verification` | `Boolean` | Yes | Whether email verification is required before users can sign in |
| `send_verification_email_on_sign_in` | `Boolean` | Yes | Whether to send a verification email when users sign in |
| `send_verification_email_on_sign_up` | `Boolean` | Yes | Whether to send a verification email when users sign up |

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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NeonAuthEmailAndPasswordConfig.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NeonAuthEmailAndPasswordConfig.update({
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthEmailAndPasswordConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthEmailServerConfigEntity

```ruby
neon_auth_email_server_config = client.NeonAuthEmailServerConfig
```

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NeonAuthEmailServerConfig.update({
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthEmailServerConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthIntegrationEntity

```ruby
neon_auth_integration = client.NeonAuthIntegration
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `String` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `auth_provider_project_id` | `String` | Yes | Project identifier assigned by the auth provider for this integration. |
| `base_url` | `String` | No | Base URL of the Neon Auth service endpoint for this integration. |
| `branch_id` | `String` | Yes | The Neon branch ID. |
| `created_at` | `String` | Yes | Timestamp when the Neon Auth integration was created, in RFC 3339 format (UTC). |
| `db_name` | `String` | Yes | Name of the database used by the Neon Auth integration. |
| `jwks_url` | `String` | Yes | URL of the provider's JWKS endpoint used to verify JWTs. |
| `name` | `String` | No | Application name shown in auth emails and communications. |
| `owned_by` | `String` | Yes | Owner of the auth provider project. |
| `transfer_status` | `String` | No | Ownership transfer state for the auth provider project. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.NeonAuthIntegration.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NeonAuthIntegration.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthIntegrationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthMagicLinkConfigEntity

```ruby
neon_auth_magic_link_config = client.NeonAuthMagicLinkConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disable_sign_up` | `Boolean` | Yes | Whether to disable sign-up via magic link. |
| `enabled` | `Boolean` | Yes | Whether the magic link plugin is enabled. |
| `expires_in` | `Integer` | Yes | Minutes until the magic link expires. |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `disable_sign_up` | Yes |
| `enabled` | Yes |
| `expires_in` | Yes |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NeonAuthMagicLinkConfig.update({
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthMagicLinkConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthOauthProviderEntity

```ruby
neon_auth_oauth_provider = client.NeonAuthOauthProvider
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `String` | No | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `String` | No | OAuth client secret for the provider. |
| `id` | `String` | Yes | The OAuth provider's ID. |
| `microsoft_tenant_id` | `String` | No | Tenant ID for the Microsoft OAuth provider. |
| `type` | `String` | Yes | OAuth provider key type. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.NeonAuthOauthProvider.create({
  "project_id" => "example_project_id", # String
  "id" => "example_id", # String
  "type" => "example_type", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.NeonAuthOauthProvider.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NeonAuthOauthProvider.update({
  "id" => "id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthOauthProviderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthOrganizationConfigEntity

```ruby
neon_auth_organization_config = client.NeonAuthOrganizationConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator_role` | `String` | Yes | Role of the organization's creator. |
| `enabled` | `Boolean` | Yes | Whether the organization plugin is enabled. |
| `membership_limit` | `Integer` | Yes | Maximum number of members per organization. |
| `organization_limit` | `Integer` | Yes | Maximum organizations a user can belong to (created or joined). |
| `send_invitation_email` | `Boolean` | Yes | Whether to send invitation emails when inviting members to an organization. |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `creator_role` | Yes |
| `enabled` | Yes |
| `membership_limit` | Yes |
| `organization_limit` | Yes |
| `send_invitation_email` | Yes |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NeonAuthOrganizationConfig.update({
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthOrganizationConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthPhoneNumberConfigEntity

```ruby
neon_auth_phone_number_config = client.NeonAuthPhoneNumberConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `Boolean` | Yes | Whether the phone number plugin is enabled. |
| `otp_expires_in` | `Integer` | No | Time in seconds before the OTP expires |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `enabled` | - | Yes |
| `otp_expires_in` | - | - |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NeonAuthPhoneNumberConfig.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NeonAuthPhoneNumberConfig.update({
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthPhoneNumberConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthPluginConfigEntity

```ruby
neon_auth_plugin_config = client.NeonAuthPluginConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `String` | No | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `String` | No | OAuth client secret for the provider. |
| `id` | `String` | Yes | The OAuth provider's ID. |
| `type` | `String` | Yes | OAuth provider key type. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.NeonAuthPluginConfig.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthPluginConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthRedirectUriWhitelistDomainEntity

```ruby
neon_auth_redirect_uri_whitelist_domain = client.NeonAuthRedirectUriWhitelistDomain
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `String` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `String` | Yes | Allowed redirect URI domain for the auth provider. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.NeonAuthRedirectUriWhitelistDomain.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthRedirectUriWhitelistDomainEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthTransferAuthProviderProjectEntity

```ruby
neon_auth_transfer_auth_provider_project = client.NeonAuthTransferAuthProviderProject
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `String` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `project_id` | `String` | Yes | The Neon project ID. |
| `url` | `String` | Yes | URL for completing the process of ownership transfer |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.NeonAuthTransferAuthProviderProject.create({
  "auth_provider" => "example_auth_provider", # String
  "project_id" => "example_project_id", # String
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthTransferAuthProviderProjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonAuthWebhookConfigEntity

```ruby
neon_auth_webhook_config = client.NeonAuthWebhookConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `Boolean` | Yes | Whether the webhook is active. |
| `enabled_events` | `Array` | No | Event types that trigger this webhook. |
| `timeout_seconds` | `Integer` | No | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | `String` | No | Destination URL that receives webhook event payloads. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.NeonAuthWebhookConfig.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NeonAuthWebhookConfig.update({
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonAuthWebhookConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonFunctionEntity

```ruby
neon_function = client.NeonFunction
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_deployment` | `Object` | No | The most recent deployment whose build completed successfully. |
| `created_at` | `String` | Yes |  |
| `current_deployment` | `Object` | No | The most recent deployment, regardless of build status. |
| `id` | `String` | Yes | Opaque, stable function identifier. |
| `invocation_url` | `String` | Yes | URL at which the function is invoked. |
| `name` | `String` | Yes | Free-form display name. |
| `slug` | `String` | Yes | Branch-unique, lowercase DNS-label. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NeonFunction.load({ "id" => "neon_function_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.NeonFunction.update({
  "id" => "neon_function_id",
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonFunctionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NeonFunctionDeploymentEntity

```ruby
neon_function_deployment = client.NeonFunctionDeployment
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.NeonFunctionDeployment.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "slug" => "example_slug", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NeonFunctionDeploymentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OperationEntity

```ruby
operation = client.Operation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | Yes | The action performed by the operation |
| `branch_id` | `String` | No | The ID of the branch this operation ran on. |
| `created_at` | `String` | Yes | A timestamp indicating when the operation was created |
| `endpoint_id` | `String` | No | The ID of the compute endpoint this operation ran on. |
| `error` | `String` | No | Human-readable message describing why the operation failed. |
| `failures_count` | `Integer` | Yes | The number of times the operation failed |
| `id` | `String` | Yes | The operation ID |
| `name` | `String` | No | Name for the replaced branch. |
| `operations` | `Array` | Yes |  |
| `project_id` | `String` | Yes | The ID of the project this operation ran on. |
| `retry_at` | `String` | No | A timestamp indicating when the operation was last retried |
| `status` | `String` | Yes | Current lifecycle state of the operation. |
| `total_duration_ms` | `Integer` | Yes | The total duration of the operation in milliseconds |
| `updated_at` | `String` | Yes | A timestamp indicating when the operation status was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Operation.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "action" => "example_action", # String
  "created_at" => "example_created_at", # String
  "failures_count" => 1, # Integer
  "id" => "example_id", # String
  "operations" => [], # Array
  "status" => "example_status", # String
  "total_duration_ms" => 1, # Integer
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Operation.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Operation.load({ "id" => "operation_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OperationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrgApiKeyCreateEntity

```ruby
org_api_key_create = client.OrgApiKeyCreate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `created_by` | `String` | No |  |
| `id` | `Integer` | No |  |
| `key` | `String` | No |  |
| `name` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrgApiKeyCreate.create({
  "organization_id" => "example_organization_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrgApiKeyCreateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrgApiKeyRevokeEntity

```ruby
org_api_key_revoke = client.OrgApiKeyRevoke
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.OrgApiKeyRevoke.remove({ "key_id" => 1, "organization_id" => "organization_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrgApiKeyRevokeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrgApiKeysListResponseItemEntity

```ruby
org_api_keys_list_response_item = client.OrgApiKeysListResponseItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | A timestamp indicating when the API key was created |
| `created_by` | `Hash` | Yes | The user data of the user that created this API key. |
| `id` | `Integer` | Yes | The API key's unique numeric ID. |
| `last_used_at` | `String` | No | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `String` | Yes | The IP address from which the API key was last used |
| `name` | `String` | Yes | The user-specified API key name |
| `project_id` | `String` | No | If set, the API key can access only this project |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrgApiKeysListResponseItem.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrgApiKeysListResponseItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationEntity

```ruby
organization = client.Organization
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_hipaa_projects` | `Boolean` | No | If true, allow account to mark projects as HIPAA |
| `created_at` | `String` | Yes | A timestamp indicting when the organization was created |
| `handle` | `String` | Yes | URL-safe identifier for the organization, used in API paths. |
| `id` | `String` | Yes | The Neon organization ID. |
| `label` | `String` | Yes | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `managed_by` | `String` | Yes | Organizations created via the Console or the API are managed by `console`. |
| `name` | `String` | Yes | Human-readable display name of the organization. |
| `plan` | `String` | Yes | Billing plan for the organization, for example `free`, `launch`, or `scale`. |
| `require_mfa` | `Boolean` | No | If true, all members must have MFA enabled to access this organization |
| `updated_at` | `String` | Yes | A timestamp indicating when the organization was updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Organization.create({
  "id" => "example_id", # String
  "region_id" => "example_region_id", # String
  "vpc_endpoint_id" => "example_vpc_endpoint_id", # String
  "created_at" => "example_created_at", # String
  "handle" => "example_handle", # String
  "label" => "example_label", # String
  "managed_by" => "example_managed_by", # String
  "name" => "example_name", # String
  "plan" => "example_plan", # String
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Organization.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Organization.load({ "id" => "organization_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Organization.remove({ "id" => "organization_id", "region_id" => "region_id", "vpc_endpoint_id" => "vpc_endpoint_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationInvitationEntity

```ruby
organization_invitation = client.OrganizationInvitation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | Yes | Email of the invited user |
| `id` | `String` | Yes | The invitation ID. |
| `invitations` | `Array` | Yes | List of pending invitations for the organization. |
| `invited_at` | `String` | Yes | Timestamp when the invitation was created |
| `invited_by` | `String` | Yes | UUID for the user_id who extended the invitation |
| `org_id` | `String` | Yes | Organization id as it is stored in Neon |
| `role` | `String` | Yes | Organization member's role. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrganizationInvitation.create({
  "id" => "example_id", # String
  "email" => "example_email", # String
  "invitations" => [], # Array
  "invited_at" => "example_invited_at", # String
  "invited_by" => "example_invited_by", # String
  "org_id" => "example_org_id", # String
  "role" => "example_role", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrganizationInvitation.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationInvitationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PresignEntity

```ruby
presign = client.Presign
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `String` | No | The `Content-Type` to bind into the signed request. |
| `expires_at` | `String` | Yes | When the presigned URL stops being valid. |
| `expires_in_seconds` | `Integer` | No | How long the presigned URL stays valid, in seconds. |
| `headers` | `Hash` | Yes | Headers the caller MUST send verbatim on the request (e.g. |
| `method` | `String` | Yes | The HTTP method to use against `url`: `PUT` for an upload, `GET` for a download. |
| `operation` | `String` | Yes | The transfer direction. |
| `url` | `String` | Yes | The presigned URL. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Presign.create({
  "branch_id" => "example_branch_id", # String
  "bucket_id" => "example_bucket_id", # String
  "object_key" => "example_object_key", # String
  "project_id" => "example_project_id", # String
  "expires_at" => "example_expires_at", # String
  "headers" => {}, # Hash
  "method" => "example_method", # String
  "operation" => "example_operation", # String
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PresignEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectEntity

```ruby
project = client.Project
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_time` | `Integer` | Yes | Control plane observed endpoints of this project being active this amount of wall-clock time. |
| `active_time_seconds` | `Integer` | Yes | Seconds. |
| `branch_logical_size_limit` | `Integer` | Yes | The logical size limit for a branch. |
| `branch_logical_size_limit_bytes` | `Integer` | Yes | The logical size limit for a branch. |
| `compute_last_active_at` | `String` | No | The most recent time when any endpoint of this project was active. |
| `compute_time_seconds` | `Integer` | Yes | Seconds. |
| `consumption_period_end` | `String` | Yes | A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period. |
| `consumption_period_start` | `String` | Yes | A date-time indicating when Neon Cloud started measuring consumption for current consumption period. |
| `cpu_used_sec` | `Integer` | Yes | Deprecated. |
| `created_at` | `String` | Yes | A timestamp indicating when the project was created |
| `creation_source` | `String` | Yes | The project creation source |
| `data_storage_bytes_hour` | `Integer` | Yes | Bytes-Hour. |
| `data_transfer_bytes` | `Integer` | Yes | Bytes. |
| `default_endpoint_settings` | `Hash` | No | A collection of settings for a Neon endpoint |
| `deleted_at` | `String` | No | A timestamp indicating when the project was deleted |
| `effective_project_permission` | `String` | No |  |
| `hipaa_enabled_at` | `String` | No | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | `Integer` | Yes | The number of seconds to retain the shared history for all branches in this project. |
| `id` | `String` | Yes | The Neon project ID. |
| `label` | `String` | Yes | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | `String` | No | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | `String` | No | A timestamp indicating when project maintenance begins. |
| `name` | `String` | Yes | The project name |
| `org_id` | `String` | No | The Neon organization ID. |
| `org_name` | `String` | No | Name of the organization that owns the project. |
| `owner` | `Hash` | Yes | Ownership details for the project, including the owner's name and email. |
| `owner_id` | `String` | Yes | ID of the organization that owns the project. |
| `pg_version` | `Integer` | Yes | The major Postgres version number. |
| `platform_id` | `String` | Yes | The cloud platform identifier. |
| `project` | `Hash` | Yes | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `provisioner` | `String` | Yes | Compute provisioner. |
| `proxy_host` | `String` | Yes | The proxy host for the project. |
| `quota_reset_at` | `String` | No | Deprecated. |
| `recoverable_until` | `String` | No | A timestamp indicating the project will be recoverable until this date and time. |
| `region_id` | `String` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `Hash` | No | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | `Boolean` | Yes | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | `Integer` | No | The current space occupied by the project in Postgres storage, in bytes. |
| `updated_at` | `String` | Yes | A timestamp indicating when the project was last updated |
| `written_data_bytes` | `Integer` | Yes | Bytes. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `active_time` | - | - | - | - | - |
| `active_time_seconds` | - | - | - | - | - |
| `branch_logical_size_limit` | - | - | - | - | - |
| `branch_logical_size_limit_bytes` | - | - | - | - | - |
| `compute_last_active_at` | - | - | - | - | - |
| `compute_time_seconds` | - | - | - | - | - |
| `consumption_period_end` | - | - | - | - | - |
| `consumption_period_start` | - | - | - | - | - |
| `cpu_used_sec` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `creation_source` | - | - | - | - | - |
| `data_storage_bytes_hour` | - | - | - | - | - |
| `data_transfer_bytes` | - | - | - | - | - |
| `default_endpoint_settings` | - | - | - | - | - |
| `deleted_at` | - | - | - | - | - |
| `effective_project_permission` | - | - | - | - | - |
| `hipaa_enabled_at` | - | - | - | - | - |
| `history_retention_seconds` | - | Yes | - | - | - |
| `id` | - | - | - | - | - |
| `label` | - | - | - | - | - |
| `maintenance_scheduled_for` | - | - | - | - | - |
| `maintenance_starts_at` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `org_id` | - | - | - | - | - |
| `org_name` | - | - | - | - | - |
| `owner` | - | - | - | - | - |
| `owner_id` | - | - | - | - | - |
| `pg_version` | - | - | - | - | - |
| `platform_id` | - | - | - | - | - |
| `project` | - | - | - | - | - |
| `provisioner` | - | - | - | - | - |
| `proxy_host` | - | - | - | - | - |
| `quota_reset_at` | - | - | - | - | - |
| `recoverable_until` | - | - | - | - | - |
| `region_id` | - | - | - | - | - |
| `settings` | - | - | - | - | - |
| `store_passwords` | - | - | - | - | - |
| `synthetic_storage_size` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `written_data_bytes` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Project.create({
  "id" => "example_id", # String
  "vpc_endpoint_id" => "example_vpc_endpoint_id", # String
  "active_time" => 1, # Integer
  "active_time_seconds" => 1, # Integer
  "branch_logical_size_limit" => 1, # Integer
  "branch_logical_size_limit_bytes" => 1, # Integer
  "compute_time_seconds" => 1, # Integer
  "consumption_period_end" => "example_consumption_period_end", # String
  "consumption_period_start" => "example_consumption_period_start", # String
  "cpu_used_sec" => 1, # Integer
  "created_at" => "example_created_at", # String
  "creation_source" => "example_creation_source", # String
  "data_storage_bytes_hour" => 1, # Integer
  "data_transfer_bytes" => 1, # Integer
  "history_retention_seconds" => 1, # Integer
  "label" => "example_label", # String
  "name" => "example_name", # String
  "owner" => {}, # Hash
  "owner_id" => "example_owner_id", # String
  "pg_version" => 1, # Integer
  "platform_id" => "example_platform_id", # String
  "project" => {}, # Hash
  "provisioner" => "example_provisioner", # String
  "proxy_host" => "example_proxy_host", # String
  "region_id" => "example_region_id", # String
  "store_passwords" => true, # Boolean
  "updated_at" => "example_updated_at", # String
  "written_data_bytes" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Project.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Project.load({ "id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Project.remove({ "id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Project.update({
  "id" => "project_id",
  "request_id" => "request_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectBranchLogFieldEntity

```ruby
project_branch_log_field = client.ProjectBranchLogField
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `Array` | Yes | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProjectBranchLogField.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectBranchLogFieldEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectBranchLogFieldValueEntity

```ruby
project_branch_log_field_value = client.ProjectBranchLogFieldValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `is_truncated` | `Boolean` | Yes | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` | `Array` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProjectBranchLogFieldValue.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectBranchLogFieldValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectBranchLogsQueryEntity

```ruby
project_branch_logs_query = client.ProjectBranchLogsQuery
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body_contains` | `String` | No | Match records whose rendered `message` contains this case-sensitive substring. |
| `cursor` | `String` | No | Opaque pagination cursor returned as `next_cursor` by a previous call. |
| `end_time` | `String` | No | Exclusive end of the query window. |
| `is_truncated` | `Boolean` | Yes | True when more records matched than were returned. |
| `limit` | `Integer` | No | Maximum number of log records to return per page. |
| `logql` | `String` | No | Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream. |
| `logs` | `Array` | Yes |  |
| `minimum_severity` | `String` | No | An OpenTelemetry severity level. |
| `next_cursor` | `String` | No | Pagination cursor to pass as `cursor` on the next request. |
| `scope_name` | `String` | No | Match the OpenTelemetry instrumentation scope name exactly. |
| `service_name` | `String` | No | Match the OpenTelemetry `service.name` resource attribute exactly. |
| `severity_text` | `String` | No | Match the OpenTelemetry severity text exactly. |
| `since` | `Object` | No | Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted. |
| `sort_order` | `String` | No | Order matching records by timestamp. |
| `source` | `String` | No | The Neon service that emitted the log record. |
| `start_time` | `String` | No | Inclusive beginning of the query window. |
| `trace_id` | `String` | No | Match records associated with this OpenTelemetry trace ID. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectBranchLogsQuery.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "is_truncated" => true, # Boolean
  "logs" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectBranchLogsQueryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectMemberEntity

```ruby
project_member = client.ProjectMember
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `effective_project_permission` | `String` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `String` | No | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `String` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `grant_source` | `String` | No | How a member's project access is granted. |
| `id` | `String` | No |  |
| `member_id` | `String` | Yes | The organization member ID. |
| `name` | `String` | No | The user's display name. |
| `org_default_project_permission` | `String` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `String` | Yes | Organization-level role used by project member role management. |
| `project_role` | `String` | No | Per-project role. |
| `user_id` | `String` | Yes | The user ID for the organization member. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProjectMember.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectMemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectMemberRoleEntity

```ruby
project_member_role = client.ProjectMemberRole
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credential_rotation_recommended` | `Boolean` | No | Hint that database credentials may need rotation after the role change. |
| `effective_project_permission` | `String` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `String` | No | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `String` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `member_id` | `String` | Yes |  |
| `name` | `String` | No | The user's display name. |
| `org_api_key_rotation_recommended` | `Boolean` | No | Hint that project-scoped org API keys created by the target user may need rotation. |
| `org_default_project_permission` | `String` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `String` | Yes | Organization-level role used by project member role management. |
| `project_id` | `String` | Yes |  |
| `project_role` | `String` | No | The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback. |
| `role` | `String` | Yes | Per-project role. |
| `user_id` | `String` | Yes |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectMemberRole.remove({ "member_id" => "member_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ProjectMemberRole.update({
  "member_id" => "member_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectMemberRoleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectPermissionEntity

```ruby
project_permission = client.ProjectPermission
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | Yes | Email address of the user to grant project access to. |
| `granted_at` | `String` | Yes | Timestamp when the permission was granted. |
| `granted_to_email` | `String` | Yes | Email address of the user who has been granted access to the project. |
| `id` | `String` | Yes | The project permission's ID. |
| `revoked_at` | `String` | No | Timestamp when the permission was revoked. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectPermission.create({
  "id" => "example_id", # String
  "email" => "example_email", # String
  "granted_at" => "example_granted_at", # String
  "granted_to_email" => "example_granted_to_email", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProjectPermission.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProjectPermission.remove({ "id" => "id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectPermissionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectRecoverEntity

```ruby
project_recover = client.ProjectRecover
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branches` | `Array` | Yes | Branches in the project. |
| `id` | `String` | No |  |
| `project` | `Hash` | Yes | Full details of the project, including configuration, consumption metrics, and ownership. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectRecover.create({
  "id" => "example_id", # String
  "branches" => [], # Array
  "project" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectRecoverEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProjectTransferRequestEntity

```ruby
project_transfer_request = client.ProjectTransferRequest
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `ttl_seconds` | `Integer` | No | Number of seconds the transfer request stays valid before it expires. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProjectTransferRequest.create({
  "id" => "example_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProjectTransferRequestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RegionEntity

```ruby
region = client.Region
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default` | `Boolean` | Yes | True if this region is selected by default when no region is specified during project creation. |
| `geo_lat` | `String` | Yes | The geographical latitude (approximate) for the region. |
| `geo_long` | `String` | Yes | The geographical longitude (approximate) for the region. |
| `name` | `String` | Yes | A short description of the region. |
| `region_id` | `String` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Region.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RegionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RoleEntity

```ruby
role = client.Role
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication_method` | `String` | No | Authentication method configured for this role: `password`, `oauth`, or `no_login`. |
| `branch_id` | `String` | Yes | The ID of the branch this role belongs to. |
| `created_at` | `String` | Yes | A timestamp indicating when the role was created |
| `id` | `String` | No |  |
| `name` | `String` | Yes | Postgres role name within the branch. |
| `password` | `String` | No | The role password |
| `protected` | `Boolean` | No | Whether or not the role is system-protected |
| `role` | `Hash` | Yes | Properties of the role to create. |
| `updated_at` | `String` | Yes | A timestamp indicating when the role was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Role.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "created_at" => "example_created_at", # String
  "name" => "example_name", # String
  "role" => {}, # Hash
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Role.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Role.load({ "id" => "role_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Role.remove({ "id" => "role_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RoleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RoleOperationEntity

```ruby
role_operation = client.RoleOperation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `operations` | `Array` | Yes |  |
| `role` | `Hash` | Yes | Role details for the requested database role. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RoleOperation.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "role_name" => "example_role_name", # String
  "operations" => [], # Array
  "role" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RoleOperationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RolePasswordEntity

```ruby
role_password = client.RolePassword
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `password` | `String` | Yes | The role password |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RolePassword.load({ "branch_id" => "branch_id", "project_id" => "project_id", "role_name" => "role_name" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RolePasswordEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SendNeonAuthTestEmailEntity

```ruby
send_neon_auth_test_email = client.SendNeonAuthTestEmail
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error_message` | `String` | No | The error message from the email server. |
| `host` | `String` | Yes | Hostname of the email server. |
| `password` | `String` | Yes | Password for authenticating with the SMTP server. |
| `port` | `Integer` | Yes | TCP port of the SMTP server. |
| `recipient_email` | `String` | Yes | The email address to send the test email to. |
| `sender_email` | `String` | Yes | Email address used as the From address on outgoing auth emails. |
| `sender_name` | `String` | Yes | Display name shown as the sender in outgoing emails. |
| `success` | `Boolean` | Yes | Whether the test email was sent successfully. |
| `username` | `String` | Yes | Username for authenticating with the SMTP server. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SendNeonAuthTestEmail.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "host" => "example_host", # String
  "password" => "example_password", # String
  "port" => 1, # Integer
  "recipient_email" => "example_recipient_email", # String
  "sender_email" => "example_sender_email", # String
  "sender_name" => "example_sender_name", # String
  "success" => true, # Boolean
  "username" => "example_username", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SendNeonAuthTestEmailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SnapshotEntity

```ruby
snapshot = client.Snapshot
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | Timestamp when the snapshot was created, in RFC 3339 format (UTC). |
| `diff_size` | `Integer` | No | Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage. |
| `expires_at` | `String` | No | RFC 3339 timestamp when the snapshot expires and is eligible for deletion. |
| `full_size` | `Integer` | No | Full logical size of the snapshot in bytes at the time it was taken. |
| `id` | `String` | Yes | The snapshot ID. |
| `lsn` | `String` | No | WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`). |
| `manual` | `Boolean` | No | True if the snapshot was created manually rather than by a schedule. |
| `name` | `String` | Yes | Human-readable label for the snapshot. |
| `operations` | `Array` | Yes |  |
| `slug` | `String` | No | Snapshot resource ID, unique within the project. |
| `snapshot` | `Hash` | Yes | Fields to update on the snapshot. |
| `source_branch_id` | `String` | No | Branch from which this snapshot was created. |
| `timestamp` | `String` | No | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Snapshot.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "operations" => [], # Array
  "snapshot" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Snapshot.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Snapshot.remove({ "id" => "id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Snapshot.update({
  "id" => "id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SnapshotEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SpendingLimitEntity

```ruby
spending_limit = client.SpendingLimit
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `spending_limit_cents` | `Integer` | Yes | Monthly spending cap in cents. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SpendingLimit.load({ "organization_id" => "organization_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SpendingLimit.update({
  "organization_id" => "organization_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SpendingLimitEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TriggerEntity

```ruby
trigger = client.Trigger
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `triggers` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Trigger.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "triggers" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Trigger.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Trigger.load({ "id" => "trigger_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Trigger.update({
  "id" => "trigger_id",
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UpdateNeonAuthUserRoleEntity

```ruby
update_neon_auth_user_role = client.UpdateNeonAuthUserRole
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes | ID of the updated user |
| `roles` | `Array` | Yes | Roles to assign to the user in the Neon Auth (Better Auth) directory. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.UpdateNeonAuthUserRole.update({
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  "user_id" => "user_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UpdateNeonAuthUserRoleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VpcEndpointEntity

```ruby
vpc_endpoint = client.VpcEndpoint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `example_restricted_projects` | `Array` | Yes | A list of example projects that are restricted to use this VPC endpoint. |
| `id` | `String` | No |  |
| `label` | `String` | Yes | A descriptive label for the VPC endpoint |
| `num_restricted_projects` | `Integer` | Yes | The number of projects that are restricted to use this VPC endpoint. |
| `region_id` | `String` | Yes | The region where the VPC endpoint is located |
| `state` | `String` | Yes | The current state of the VPC endpoint. |
| `vpc_endpoint_id` | `String` | Yes | Cloud provider identifier for the VPC endpoint. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.VpcEndpoint.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.VpcEndpoint.load({ "id" => "vpc_endpoint_id", "organization_id" => "organization_id", "region_id" => "region_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VpcEndpointEntity` instance with the same client and
options.

#### `get_name -> String`

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

```ruby
client = NeonSDK.new({
  "feature" => {
    "debug" => { "active" => true },
    "idempotency" => { "active" => true },
    "metrics" => { "active" => true },
    "paging" => { "active" => true },
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
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

