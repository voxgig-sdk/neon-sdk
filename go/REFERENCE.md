# Neon Golang SDK Reference

Complete API reference for the Neon Golang SDK.


## NeonSDK

### Constructor

```go
func NewNeonSDK(options map[string]any) *NeonSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *NeonSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *NeonSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Anonymize(data map[string]any) NeonEntity`

Create a new `Anonymize` entity instance. Pass `nil` for no initial data.

#### `AnonymizedBranchStatus(data map[string]any) NeonEntity`

Create a new `AnonymizedBranchStatus` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data map[string]any) NeonEntity`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `Auth(data map[string]any) NeonEntity`

Create a new `Auth` entity instance. Pass `nil` for no initial data.

#### `AuthLegacy(data map[string]any) NeonEntity`

Create a new `AuthLegacy` entity instance. Pass `nil` for no initial data.

#### `AvailablePreloadLibrary(data map[string]any) NeonEntity`

Create a new `AvailablePreloadLibrary` entity instance. Pass `nil` for no initial data.

#### `BackupSchedule(data map[string]any) NeonEntity`

Create a new `BackupSchedule` entity instance. Pass `nil` for no initial data.

#### `Branch(data map[string]any) NeonEntity`

Create a new `Branch` entity instance. Pass `nil` for no initial data.

#### `BranchAiGateway(data map[string]any) NeonEntity`

Create a new `BranchAiGateway` entity instance. Pass `nil` for no initial data.

#### `BranchOperation(data map[string]any) NeonEntity`

Create a new `BranchOperation` entity instance. Pass `nil` for no initial data.

#### `BranchSchema(data map[string]any) NeonEntity`

Create a new `BranchSchema` entity instance. Pass `nil` for no initial data.

#### `BranchSchemaCompare(data map[string]any) NeonEntity`

Create a new `BranchSchemaCompare` entity instance. Pass `nil` for no initial data.

#### `BranchStorage(data map[string]any) NeonEntity`

Create a new `BranchStorage` entity instance. Pass `nil` for no initial data.

#### `Bucket(data map[string]any) NeonEntity`

Create a new `Bucket` entity instance. Pass `nil` for no initial data.

#### `BucketObjectsList(data map[string]any) NeonEntity`

Create a new `BucketObjectsList` entity instance. Pass `nil` for no initial data.

#### `ConnectionUri(data map[string]any) NeonEntity`

Create a new `ConnectionUri` entity instance. Pass `nil` for no initial data.

#### `Consumption(data map[string]any) NeonEntity`

Create a new `Consumption` entity instance. Pass `nil` for no initial data.

#### `CreateCredential(data map[string]any) NeonEntity`

Create a new `CreateCredential` entity instance. Pass `nil` for no initial data.

#### `Credential(data map[string]any) NeonEntity`

Create a new `Credential` entity instance. Pass `nil` for no initial data.

#### `CurrentUserInfo(data map[string]any) NeonEntity`

Create a new `CurrentUserInfo` entity instance. Pass `nil` for no initial data.

#### `CustomDomain(data map[string]any) NeonEntity`

Create a new `CustomDomain` entity instance. Pass `nil` for no initial data.

#### `DataApi(data map[string]any) NeonEntity`

Create a new `DataApi` entity instance. Pass `nil` for no initial data.

#### `Database(data map[string]any) NeonEntity`

Create a new `Database` entity instance. Pass `nil` for no initial data.

#### `EmailProvider(data map[string]any) NeonEntity`

Create a new `EmailProvider` entity instance. Pass `nil` for no initial data.

#### `EmailServer(data map[string]any) NeonEntity`

Create a new `EmailServer` entity instance. Pass `nil` for no initial data.

#### `Empty(data map[string]any) NeonEntity`

Create a new `Empty` entity instance. Pass `nil` for no initial data.

#### `Endpoint(data map[string]any) NeonEntity`

Create a new `Endpoint` entity instance. Pass `nil` for no initial data.

#### `EndpointOperation(data map[string]any) NeonEntity`

Create a new `EndpointOperation` entity instance. Pass `nil` for no initial data.

#### `Function(data map[string]any) NeonEntity`

Create a new `Function` entity instance. Pass `nil` for no initial data.

#### `Jwk(data map[string]any) NeonEntity`

Create a new `Jwk` entity instance. Pass `nil` for no initial data.

#### `MaskingRule(data map[string]any) NeonEntity`

Create a new `MaskingRule` entity instance. Pass `nil` for no initial data.

#### `Member(data map[string]any) NeonEntity`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `NeonAuthAllowLocalhost(data map[string]any) NeonEntity`

Create a new `NeonAuthAllowLocalhost` entity instance. Pass `nil` for no initial data.

#### `NeonAuthConfig(data map[string]any) NeonEntity`

Create a new `NeonAuthConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthCreateIntegration(data map[string]any) NeonEntity`

Create a new `NeonAuthCreateIntegration` entity instance. Pass `nil` for no initial data.

#### `NeonAuthCreateNewUser(data map[string]any) NeonEntity`

Create a new `NeonAuthCreateNewUser` entity instance. Pass `nil` for no initial data.

#### `NeonAuthEmailAndPasswordConfig(data map[string]any) NeonEntity`

Create a new `NeonAuthEmailAndPasswordConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthEmailServerConfig(data map[string]any) NeonEntity`

Create a new `NeonAuthEmailServerConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthIntegration(data map[string]any) NeonEntity`

Create a new `NeonAuthIntegration` entity instance. Pass `nil` for no initial data.

#### `NeonAuthMagicLinkConfig(data map[string]any) NeonEntity`

Create a new `NeonAuthMagicLinkConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthOauthProvider(data map[string]any) NeonEntity`

Create a new `NeonAuthOauthProvider` entity instance. Pass `nil` for no initial data.

#### `NeonAuthOrganizationConfig(data map[string]any) NeonEntity`

Create a new `NeonAuthOrganizationConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthPhoneNumberConfig(data map[string]any) NeonEntity`

Create a new `NeonAuthPhoneNumberConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthPluginConfig(data map[string]any) NeonEntity`

Create a new `NeonAuthPluginConfig` entity instance. Pass `nil` for no initial data.

#### `NeonAuthRedirectUriWhitelistDomain(data map[string]any) NeonEntity`

Create a new `NeonAuthRedirectUriWhitelistDomain` entity instance. Pass `nil` for no initial data.

#### `NeonAuthTransferAuthProviderProject(data map[string]any) NeonEntity`

Create a new `NeonAuthTransferAuthProviderProject` entity instance. Pass `nil` for no initial data.

#### `NeonAuthWebhookConfig(data map[string]any) NeonEntity`

Create a new `NeonAuthWebhookConfig` entity instance. Pass `nil` for no initial data.

#### `NeonFunction(data map[string]any) NeonEntity`

Create a new `NeonFunction` entity instance. Pass `nil` for no initial data.

#### `NeonFunctionDeployment(data map[string]any) NeonEntity`

Create a new `NeonFunctionDeployment` entity instance. Pass `nil` for no initial data.

#### `Operation(data map[string]any) NeonEntity`

Create a new `Operation` entity instance. Pass `nil` for no initial data.

#### `OrgApiKeyCreate(data map[string]any) NeonEntity`

Create a new `OrgApiKeyCreate` entity instance. Pass `nil` for no initial data.

#### `OrgApiKeyRevoke(data map[string]any) NeonEntity`

Create a new `OrgApiKeyRevoke` entity instance. Pass `nil` for no initial data.

#### `OrgApiKeysListResponseItem(data map[string]any) NeonEntity`

Create a new `OrgApiKeysListResponseItem` entity instance. Pass `nil` for no initial data.

#### `Organization(data map[string]any) NeonEntity`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationInvitation(data map[string]any) NeonEntity`

Create a new `OrganizationInvitation` entity instance. Pass `nil` for no initial data.

#### `Presign(data map[string]any) NeonEntity`

Create a new `Presign` entity instance. Pass `nil` for no initial data.

#### `Project(data map[string]any) NeonEntity`

Create a new `Project` entity instance. Pass `nil` for no initial data.

#### `ProjectBranchLogField(data map[string]any) NeonEntity`

Create a new `ProjectBranchLogField` entity instance. Pass `nil` for no initial data.

#### `ProjectBranchLogFieldValue(data map[string]any) NeonEntity`

Create a new `ProjectBranchLogFieldValue` entity instance. Pass `nil` for no initial data.

#### `ProjectBranchLogsQuery(data map[string]any) NeonEntity`

Create a new `ProjectBranchLogsQuery` entity instance. Pass `nil` for no initial data.

#### `ProjectMember(data map[string]any) NeonEntity`

Create a new `ProjectMember` entity instance. Pass `nil` for no initial data.

#### `ProjectMemberRole(data map[string]any) NeonEntity`

Create a new `ProjectMemberRole` entity instance. Pass `nil` for no initial data.

#### `ProjectPermission(data map[string]any) NeonEntity`

Create a new `ProjectPermission` entity instance. Pass `nil` for no initial data.

#### `ProjectRecover(data map[string]any) NeonEntity`

Create a new `ProjectRecover` entity instance. Pass `nil` for no initial data.

#### `ProjectTransferRequest(data map[string]any) NeonEntity`

Create a new `ProjectTransferRequest` entity instance. Pass `nil` for no initial data.

#### `Region(data map[string]any) NeonEntity`

Create a new `Region` entity instance. Pass `nil` for no initial data.

#### `Role(data map[string]any) NeonEntity`

Create a new `Role` entity instance. Pass `nil` for no initial data.

#### `RoleOperation(data map[string]any) NeonEntity`

Create a new `RoleOperation` entity instance. Pass `nil` for no initial data.

#### `RolePassword(data map[string]any) NeonEntity`

Create a new `RolePassword` entity instance. Pass `nil` for no initial data.

#### `SendNeonAuthTestEmail(data map[string]any) NeonEntity`

Create a new `SendNeonAuthTestEmail` entity instance. Pass `nil` for no initial data.

#### `Snapshot(data map[string]any) NeonEntity`

Create a new `Snapshot` entity instance. Pass `nil` for no initial data.

#### `SpendingLimit(data map[string]any) NeonEntity`

Create a new `SpendingLimit` entity instance. Pass `nil` for no initial data.

#### `Trigger(data map[string]any) NeonEntity`

Create a new `Trigger` entity instance. Pass `nil` for no initial data.

#### `UpdateNeonAuthUserRole(data map[string]any) NeonEntity`

Create a new `UpdateNeonAuthUserRole` entity instance. Pass `nil` for no initial data.

#### `VpcEndpoint(data map[string]any) NeonEntity`

Create a new `VpcEndpoint` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AnonymizeEntity

```go
anonymize := client.Anonymize(nil)
fmt.Println(anonymize.GetName()) // "anonymize"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes | The ID of the anonymized branch. |
| `created_at` | `string` | Yes | A timestamp indicating when the anonymized branch was created |
| `failed_at` | `string` | No | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | `map[string]any` | No | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | `string` | Yes | The ID of the project this branch belongs to. |
| `state` | `string` | Yes | The current state of the anonymized branch. |
| `status_message` | `string` | No | A descriptive message about the current status or any errors |
| `updated_at` | `string` | Yes | A timestamp indicating when the anonymized branch status was last updated |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Anonymize(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "created_at": "example_created_at",
    "state": "example_state",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnonymizeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AnonymizedBranchStatusEntity

```go
anonymizedBranchStatus := client.AnonymizedBranchStatus(nil)
fmt.Println(anonymizedBranchStatus.GetName()) // "anonymized_branch_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes | The ID of the anonymized branch. |
| `created_at` | `string` | Yes | A timestamp indicating when the anonymized branch was created |
| `failed_at` | `string` | No | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | `map[string]any` | No | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | `string` | Yes | The ID of the project this branch belongs to. |
| `state` | `string` | Yes | The current state of the anonymized branch. |
| `status_message` | `string` | No | A descriptive message about the current status or any errors |
| `updated_at` | `string` | Yes | A timestamp indicating when the anonymized branch status was last updated |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AnonymizedBranchStatus(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnonymizedBranchStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiKeyEntity

```go
apiKey := client.ApiKey(nil)
fmt.Println(apiKey.GetName()) // "api_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | A timestamp indicating when the API key was created |
| `created_by` | `string` | Yes | ID of the user who created this API key |
| `id` | `int` | Yes | The API key's unique numeric ID. |
| `key` | `string` | Yes | The generated 64-bit token required to access the Neon API |
| `key_name` | `string` | Yes | A user-specified API key name. |
| `last_used_at` | `string` | No | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `string` | Yes | The IP address from which the API key was last used |
| `name` | `string` | Yes | The user-specified API key name |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ApiKey(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "created_by": "example_created_by",
    "id": 1,
    "key": "example_key",
    "key_name": "example_key_name",
    "last_used_from_addr": "example_last_used_from_addr",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ApiKey(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthEntity

```go
auth := client.Auth(nil)
fmt.Println(auth.GetName()) // "auth"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes | The ID of the account associated with this authentication record. |
| `auth_data` | `string` | No |  |
| `auth_method` | `string` | Yes | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Auth(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Auth(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "account_id": "example_account_id",
    "auth_method": "example_auth_method",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Auth(nil).Remove(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AuthLegacyEntity

```go
authLegacy := client.AuthLegacy(nil)
fmt.Println(authLegacy.GetName()) // "auth_legacy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | Yes | URI to add to the redirect URI allowlist for the auth provider. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AuthLegacy(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "auth_provider": "example_auth_provider",
    "domain": "example_domain",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AuthLegacy(nil).Remove(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AuthLegacyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AvailablePreloadLibraryEntity

```go
availablePreloadLibrary := client.AvailablePreloadLibrary(nil)
fmt.Println(availablePreloadLibrary.GetName()) // "available_preload_library"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Human-readable explanation of the library's purpose and behavior. |
| `is_default` | `bool` | Yes | Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints. |
| `is_experimental` | `bool` | Yes | Marks the library as experimental. |
| `library_name` | `string` | Yes | Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`). |
| `version` | `string` | Yes | Version of the preload library. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AvailablePreloadLibrary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AvailablePreloadLibraryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BackupScheduleEntity

```go
backupSchedule := client.BackupSchedule(nil)
fmt.Println(backupSchedule.GetName()) // "backup_schedule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | `int` | No | The day of the week or month to take the snapshot (if applicable). |
| `frequency` | `string` | Yes | How often to take snapshots. |
| `hour` | `int` | No | The hour of the day to take the snapshot (if applicable). |
| `month` | `int` | No | The month of the year to take the snapshot (if applicable). |
| `retention_seconds` | `int` | No | How long to keep a scheduled snapshot (in seconds) before it's automatically deleted. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BackupSchedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BackupScheduleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchEntity

```go
branch := client.Branch(nil)
fmt.Println(branch.GetName()) // "branch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_time_seconds` | `int` | Yes | Total time this branch's compute has been active during the current billing period, in seconds (not weighted by compute size). |
| `annotation` | `map[string]any` | Yes | Annotation data associated with the annotated object. |
| `branch` | `map[string]any` | Yes | Branch returned by the request. |
| `compute_time_seconds` | `int` | Yes | Total Postgres compute time consumed by this branch during the current billing period, in CU-seconds (weighted by compute size). |
| `cpu_used_sec` | `int` | Yes | Deprecated. |
| `created_at` | `string` | Yes | A timestamp indicating when the branch was created |
| `created_by` | `map[string]any` | No | The resolved user model that contains details of the user/org/integration/api_key used for branch creation. |
| `creation_source` | `string` | Yes | The branch creation source |
| `current_state` | `string` | Yes | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `data_transfer_bytes` | `int` | Yes | Total data transferred out of the branch, in bytes. |
| `default` | `bool` | Yes | Whether the branch is the project's default branch |
| `expires_at` | `string` | No | The timestamp when the branch is scheduled to expire and be automatically deleted. |
| `id` | `string` | Yes | The branch ID. |
| `init_source` | `string` | No | Source of initialization for the branch. |
| `last_reset_at` | `string` | No | A timestamp indicating when the branch was last reset |
| `logical_size` | `int` | No | The logical size of the branch, in bytes |
| `name` | `string` | Yes | The branch name |
| `parent_id` | `string` | No | The `branch_id` of the parent branch |
| `parent_lsn` | `string` | No | The Log Sequence Number (LSN) on the parent branch from which this branch was created. |
| `parent_timestamp` | `string` | No | The point in time on the parent branch from which this branch was created. |
| `pending_state` | `string` | No | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `primary` | `bool` | No | Deprecated. |
| `project_id` | `string` | Yes | The ID of the project this branch belongs to. |
| `protected` | `bool` | Yes | Whether the branch is protected. |
| `recovery` | `map[string]any` | Yes | Recovery information for a deleted branch. |
| `restore_status` | `string` | No | Could be `restored`, `finalized` or `detaching`. |
| `restored_as` | `string` | No | ID of the target branch which was replaced when this branch was restored |
| `restored_from` | `string` | No | ID of the snapshot that was the restore source for this branch |
| `restricted_actions` | `[]any` | No | A list of actions that are currently restricted for this branch and the reason why. |
| `state_changed_at` | `string` | Yes | A UTC timestamp indicating when the `current_state` began |
| `ttl_interval_seconds` | `int` | No | The time-to-live (TTL) duration originally configured for the branch, in seconds. |
| `updated_at` | `string` | Yes | A timestamp indicating when the branch was last updated |
| `written_data_bytes` | `int` | Yes | Data written by this branch during the current billing period, in bytes. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Branch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Branch(nil).Load(map[string]any{"id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Branch(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "active_time_seconds": 1,
    "annotation": map[string]any{},
    "branch": map[string]any{},
    "compute_time_seconds": 1,
    "cpu_used_sec": 1,
    "created_at": "example_created_at",
    "creation_source": "example_creation_source",
    "current_state": "example_current_state",
    "data_transfer_bytes": 1,
    "default": true,
    "id": "example_id",
    "name": "example_name",
    "protected": true,
    "recovery": map[string]any{},
    "state_changed_at": "example_state_changed_at",
    "updated_at": "example_updated_at",
    "written_data_bytes": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Branch(nil).Update(map[string]any{
    "id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Branch(nil).Remove(map[string]any{"id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchAiGatewayEntity

```go
branchAiGateway := client.BranchAiGateway(nil)
fmt.Println(branchAiGateway.GetName()) // "branch_ai_gateway"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_url` | `string` | Yes | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | `bool` | Yes | Always `true` in 200 responses. |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BranchAiGateway(nil).Load(map[string]any{"id": "branch_ai_gateway_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchAiGatewayEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchOperationEntity

```go
branchOperation := client.BranchOperation(nil)
fmt.Println(branchOperation.GetName()) // "branch_operation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `map[string]any` | Yes | Branch returned by the request. |
| `id` | `string` | No |  |
| `operations` | `[]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BranchOperation(nil).Create(map[string]any{
    "id": "example_id",
    "project_id": "example_project_id",
    "branch": map[string]any{},
    "operations": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchOperationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchSchemaEntity

```go
branchSchema := client.BranchSchema(nil)
fmt.Println(branchSchema.GetName()) // "branch_schema"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `json` | `map[string]any` | Yes | Branch schema represented as a structured JSON object, parallel to the SQL DDL in `sql`. |
| `sql` | `string` | No | Branch schema expressed as SQL DDL statements. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BranchSchema(nil).Load(map[string]any{"id": "branch_schema_id", "project_id": "project_id", "db_name": "db_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchSchemaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchSchemaCompareEntity

```go
branchSchemaCompare := client.BranchSchemaCompare(nil)
fmt.Println(branchSchemaCompare.GetName()) // "branch_schema_compare"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BranchSchemaCompare(nil).Load(map[string]any{"id": "branch_schema_compare_id", "project_id": "project_id", "db_name": "db_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchSchemaCompareEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BranchStorageEntity

```go
branchStorage := client.BranchStorage(nil)
fmt.Println(branchStorage.GetName()) // "branch_storage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Always `true` in 200 responses. |
| `force_path_style` | `bool` | Yes | Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). |
| `id` | `string` | No |  |
| `region` | `string` | Yes | The AWS region for this branch's object storage. |
| `s3_endpoint` | `string` | Yes | The S3-compatible endpoint URL for this branch. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BranchStorage(nil).Load(map[string]any{"id": "branch_storage_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BranchStorageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BucketEntity

```go
bucket := client.Bucket(nil)
fmt.Println(bucket.GetName()) // "bucket"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Bucket(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Bucket(nil).Load(map[string]any{"branch_id": "branch_id", "bucket_id": "bucket_id", "object_key": "object_key", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Bucket(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "created_at": "example_created_at",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Bucket(nil).Remove(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BucketEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BucketObjectsListEntity

```go
bucketObjectsList := client.BucketObjectsList(nil)
fmt.Println(bucketObjectsList.GetName()) // "bucket_objects_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `string` | Yes | The object's entity tag (content hash). |
| `key` | `string` | Yes | The full object key. |
| `last_modified` | `string` | Yes | The time the object was last modified. |
| `size` | `int` | Yes | The object size in bytes. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BucketObjectsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BucketObjectsListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConnectionUriEntity

```go
connectionUri := client.ConnectionUri(nil)
fmt.Println(connectionUri.GetName()) // "connection_uri"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uri` | `string` | Yes | The connection URI. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ConnectionUri(nil).Load(map[string]any{"project_id": "project_id", "database_name": "database_name", "role_name": "role_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConnectionUriEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConsumptionEntity

```go
consumption := client.Consumption(nil)
fmt.Println(consumption.GetName()) // "consumption"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes | The Neon branch ID. |
| `periods` | `[]any` | Yes | Consumption history records for the branch, grouped by billing period. |
| `project_id` | `string` | Yes | The ID of the project that owns this branch. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Consumption(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConsumptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateCredentialEntity

```go
createCredential := client.CreateCredential(nil)
fmt.Println(createCredential.GetName()) // "create_credential"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Free-form customer label for the credential. |
| `principal_type` | `string` | Yes | Principal type for the credential. |
| `scopes` | `[]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CreateCredential(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "principal_type": "example_principal_type",
    "scopes": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateCredentialEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CredentialEntity

```go
credential := client.Credential(nil)
fmt.Println(credential.GetName()) // "credential"
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
| `scopes` | `[]any` | Yes |  |
| `token_id` | `string` | Yes | Opaque credential id (e.g. |
| `token_id_short` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Credential(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Credential(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "id": "example_id",
    "project_id": "example_project_id",
    "created_at": "example_created_at",
    "principal_type": "example_principal_type",
    "scopes": []any{},
    "token_id": "example_token_id",
    "token_id_short": "example_token_id_short",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Credential(nil).Remove(map[string]any{"branch_id": "branch_id", "id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CredentialEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CurrentUserInfoEntity

```go
currentUserInfo := client.CurrentUserInfo(nil)
fmt.Println(currentUserInfo.GetName()) // "current_user_info"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CurrentUserInfo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CurrentUserInfoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomDomainEntity

```go
customDomain := client.CustomDomain(nil)
fmt.Println(customDomain.GetName()) // "custom_domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes | The custom domain to register (for example `dashboard.acme.com`). |
| `entity_id` | `string` | Yes | The target entity's identifier within the branch. |
| `entity_type` | `string` | Yes | The kind of branch entity to point the domain at. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomDomain(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "domain": "example_domain",
    "entity_id": "example_entity_id",
    "entity_type": "example_entity_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomDomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataApiEntity

```go
dataApi := client.DataApi(nil)
fmt.Println(dataApi.GetName()) // "data_api"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_default_grants` | `bool` | No | Grant all permissions to the tables in the public schema to authenticated users |
| `auth_provider` | `string` | No | Authentication provider for the Neon Data API. |
| `available_schemas` | `[]any` | No | List of available database schemas (SubZero only) |
| `id` | `string` | No |  |
| `jwks_url` | `string` | No | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `jwt_audience` | `string` | No | Expected `aud` claim in incoming JWTs. |
| `provider_name` | `string` | No | Display name for the authentication provider. |
| `settings` | `map[string]any` | No | Configuration settings for the Data API (SubZero only) |
| `skip_auth_schema` | `bool` | No | Skip creating the auth schema and RLS functions |
| `status` | `string` | Yes | The status of the Neon Data API deployment |
| `url` | `string` | Yes | The URL of the Neon Data API |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DataApi(nil).Load(map[string]any{"id": "data_api_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DataApi(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "id": "example_id",
    "project_id": "example_project_id",
    "status": "example_status",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DataApi(nil).Update(map[string]any{
    "id": "data_api_id",
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DataApi(nil).Remove(map[string]any{"id": "data_api_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataApiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DatabaseEntity

```go
database := client.Database(nil)
fmt.Println(database.GetName()) // "database"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes | The ID of the branch this database belongs to. |
| `created_at` | `string` | Yes | A timestamp indicating when the database was created |
| `database` | `map[string]any` | Yes | Configuration for the new Postgres database. |
| `id` | `int` | Yes | The database ID |
| `name` | `string` | Yes | The database name |
| `owner_name` | `string` | Yes | The name of role that owns the database |
| `updated_at` | `string` | Yes | A timestamp indicating when the database was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Database(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Database(nil).Load(map[string]any{"id": "database_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Database(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "created_at": "example_created_at",
    "database": map[string]any{},
    "id": 1,
    "name": "example_name",
    "owner_name": "example_owner_name",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Database(nil).Update(map[string]any{
    "id": "database_id",
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Database(nil).Remove(map[string]any{"id": "database_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DatabaseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailProviderEntity

```go
emailProvider := client.EmailProvider(nil)
fmt.Println(emailProvider.GetName()) // "email_provider"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EmailProvider(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailProviderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailServerEntity

```go
emailServer := client.EmailServer(nil)
fmt.Println(emailServer.GetName()) // "email_server"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EmailServer(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailServerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmptyEntity

```go
empty := client.Empty(nil)
fmt.Println(empty.GetName()) // "empty"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_org_id` | `string` | Yes | The destination organization identifier |
| `project_ids` | `[]any` | Yes | The list of projects ids to transfer. |
| `schedule` | `[]any` | Yes | List of schedule entries defining the backup frequency. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Empty(nil).Create(map[string]any{
    "organization_id": "example_organization_id",
    "destination_org_id": "example_destination_org_id",
    "project_ids": []any{},
    "schedule": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Empty(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Empty(nil).Remove(map[string]any{"organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmptyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EndpointEntity

```go
endpoint := client.Endpoint(nil)
fmt.Println(endpoint.GetName()) // "endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoscaling_limit_max_cu` | `float64` | Yes | The maximum number of Compute Units |
| `autoscaling_limit_min_cu` | `float64` | Yes | The minimum number of Compute Units |
| `branch_id` | `string` | Yes | The ID of the branch this compute endpoint belongs to. |
| `compute_release_version` | `string` | No | Attached compute's release version number. |
| `created_at` | `string` | Yes | A timestamp indicating when the compute endpoint was created |
| `creation_source` | `string` | Yes | The compute endpoint creation source |
| `current_state` | `string` | Yes | Lifecycle state of the compute endpoint. |
| `disabled` | `bool` | Yes | Whether to restrict connections to the compute endpoint. |
| `endpoint` | `map[string]any` | Yes | Configuration for the compute endpoint to create. |
| `host` | `string` | Yes | The hostname of the compute endpoint. |
| `id` | `string` | Yes | The compute endpoint ID. |
| `last_active` | `string` | No | A timestamp indicating when the compute endpoint was last active |
| `name` | `string` | No | Optional name of the compute endpoint |
| `passwordless_access` | `bool` | Yes | Whether to permit passwordless access to the compute endpoint |
| `pending_state` | `string` | No | Target state the compute endpoint is transitioning to. |
| `pooler_enabled` | `bool` | Yes | Deprecated. |
| `pooler_mode` | `string` | Yes | Deprecated. |
| `project_id` | `string` | Yes | The ID of the project this compute endpoint belongs to. |
| `provisioner` | `string` | Yes | Compute provisioner. |
| `proxy_host` | `string` | Yes | Deprecated. |
| `region_id` | `string` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `map[string]any` | Yes | A collection of settings for a compute endpoint |
| `started_at` | `string` | No | A timestamp indicating when the compute endpoint was last started |
| `suspend_timeout_seconds` | `int` | Yes | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `suspended_at` | `string` | No | A timestamp indicating when the compute endpoint was last suspended |
| `type` | `string` | Yes | Compute endpoint type. |
| `updated_at` | `string` | Yes | A timestamp indicating when the compute endpoint was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Endpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Endpoint(nil).Load(map[string]any{"id": "endpoint_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Endpoint(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "autoscaling_limit_max_cu": 1,
    "autoscaling_limit_min_cu": 1,
    "branch_id": "example_branch_id",
    "created_at": "example_created_at",
    "creation_source": "example_creation_source",
    "current_state": "example_current_state",
    "disabled": true,
    "endpoint": map[string]any{},
    "host": "example_host",
    "id": "example_id",
    "passwordless_access": true,
    "pooler_enabled": true,
    "pooler_mode": "example_pooler_mode",
    "provisioner": "example_provisioner",
    "proxy_host": "example_proxy_host",
    "region_id": "example_region_id",
    "settings": map[string]any{},
    "suspend_timeout_seconds": 1,
    "type": "example_type",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Endpoint(nil).Update(map[string]any{
    "id": "endpoint_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Endpoint(nil).Remove(map[string]any{"id": "endpoint_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EndpointOperationEntity

```go
endpointOperation := client.EndpointOperation(nil)
fmt.Println(endpointOperation.GetName()) // "endpoint_operation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endpoint` | `map[string]any` | Yes | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` | `string` | No |  |
| `operations` | `[]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EndpointOperation(nil).Create(map[string]any{
    "id": "example_id",
    "project_id": "example_project_id",
    "endpoint": map[string]any{},
    "operations": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EndpointOperationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FunctionEntity

```go
function := client.Function(nil)
fmt.Println(function.GetName()) // "function"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_deployment` | `any` | No | The most recent deployment whose build completed successfully. |
| `binding_status` | `string` | No | Whether Neon's internal routing for the domain is published: `pending`, `present`, or `missing`. |
| `cname_target` | `string` | Yes | The hostname the customer must point their custom domain at with a CNAME record. |
| `created_at` | `string` | Yes |  |
| `current_deployment` | `any` | No | The most recent deployment, regardless of build status. |
| `dns_status` | `string` | No | The DNS + CAA portion of the check: `pending` (no records yet), `ok` (resolves to our edge and the CA is authorized), `misconfigured` (your CNAME does not resolve to our edge), or `caa_blocked` (your CAA records forbid Let's Encrypt). |
| `domain` | `string` | Yes | The registered custom domain (normalized, lowercase). |
| `entity_id` | `string` | Yes | The target entity's identifier within the branch. |
| `entity_type` | `string` | Yes | The kind of branch entity the domain targets. |
| `id` | `string` | Yes | Opaque, stable function identifier. |
| `invocation_url` | `string` | Yes | URL at which the function is invoked. |
| `name` | `string` | Yes | Free-form display name. |
| `slug` | `string` | Yes | Branch-unique, lowercase DNS-label. |
| `status` | `string` | No | The domain's current validity, computed by a background check: `pending` (still converging — point your CNAME at `cname_target` and wait), `active` (live: DNS resolves to the edge, the CA is authorized, and routing is published), or `error… |
| `status_reason` | `string` | No | A short, stable machine-readable reason for a non-active `status` (e.g. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Function(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Function(nil).Remove(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FunctionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## JwkEntity

```go
jwk := client.Jwk(nil)
fmt.Println(jwk.GetName()) // "jwk"
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
| `role_names` | `[]any` | No | Deprecated. |
| `skip_role_creation` | `bool` | No | Deprecated. |
| `updated_at` | `string` | Yes | The date and time when the JWKS was last modified |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Jwk(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Jwk(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "created_at": "example_created_at",
    "id": "example_id",
    "jwks_url": "example_jwks_url",
    "provider_name": "example_provider_name",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Jwk(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `JwkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MaskingRuleEntity

```go
maskingRule := client.MaskingRule(nil)
fmt.Println(maskingRule.GetName()) // "masking_rule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column_name` | `string` | Yes | The name of the column to be masked |
| `database_name` | `string` | Yes | The name of the database containing the table to be masked |
| `masking_function` | `string` | No | The PostgreSQL Anonymizer masking function to apply. |
| `masking_rules` | `[]any` | Yes | List of masking rules for the branch |
| `masking_value` | `string` | No | A literal value to set on the column when masking. |
| `schema_name` | `string` | Yes | The name of the schema containing the table to be masked |
| `table_name` | `string` | Yes | The name of the table containing the column to be masked |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MaskingRule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.MaskingRule(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MaskingRuleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemberEntity

```go
member := client.Member(nil)
fmt.Println(member.GetName()) // "member"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Member(nil).Load(map[string]any{"id": "member_id", "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Member(nil).Update(map[string]any{
    "id": "member_id",
    "organization_id": "organization_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Member(nil).Remove(map[string]any{"id": "member_id", "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthAllowLocalhostEntity

```go
neonAuthAllowLocalhost := client.NeonAuthAllowLocalhost(nil)
fmt.Println(neonAuthAllowLocalhost.GetName()) // "neon_auth_allow_localhost"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_localhost` | `bool` | Yes | Whether to allow localhost connections |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NeonAuthAllowLocalhost(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NeonAuthAllowLocalhost(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthAllowLocalhostEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthConfigEntity

```go
neonAuthConfig := client.NeonAuthConfig(nil)
fmt.Println(neonAuthConfig.GetName()) // "neon_auth_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The application name used in auth emails and communications. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NeonAuthConfig(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthCreateIntegrationEntity

```go
neonAuthCreateIntegration := client.NeonAuthCreateIntegration(nil)
fmt.Println(neonAuthCreateIntegration.GetName()) // "neon_auth_create_integration"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.NeonAuthCreateIntegration(nil).Create(map[string]any{
    "auth_provider": "example_auth_provider",
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthCreateIntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthCreateNewUserEntity

```go
neonAuthCreateNewUser := client.NeonAuthCreateNewUser(nil)
fmt.Println(neonAuthCreateNewUser.GetName()) // "neon_auth_create_new_user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `email` | `string` | Yes | Email address of the new Neon Auth user to create. |
| `name` | `string` | No | Display name for the new user. |
| `project_id` | `string` | Yes | The Neon project ID. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.NeonAuthCreateNewUser(nil).Create(map[string]any{
    "auth_provider": "example_auth_provider",
    "email": "example_email",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthCreateNewUserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthEmailAndPasswordConfigEntity

```go
neonAuthEmailAndPasswordConfig := client.NeonAuthEmailAndPasswordConfig(nil)
fmt.Println(neonAuthEmailAndPasswordConfig.GetName()) // "neon_auth_email_and_password_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_sign_in_after_verification` | `bool` | Yes | Whether users are automatically signed in after verifying their email |
| `disable_sign_up` | `bool` | Yes | Whether to disable new user sign ups |
| `email_verification_method` | `string` | Yes | Controls how email addresses are verified during sign-up or sign-in. |
| `enabled` | `bool` | Yes | Whether email and password authentication is enabled |
| `require_email_verification` | `bool` | Yes | Whether email verification is required before users can sign in |
| `send_verification_email_on_sign_in` | `bool` | Yes | Whether to send a verification email when users sign in |
| `send_verification_email_on_sign_up` | `bool` | Yes | Whether to send a verification email when users sign up |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NeonAuthEmailAndPasswordConfig(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NeonAuthEmailAndPasswordConfig(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthEmailAndPasswordConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthEmailServerConfigEntity

```go
neonAuthEmailServerConfig := client.NeonAuthEmailServerConfig(nil)
fmt.Println(neonAuthEmailServerConfig.GetName()) // "neon_auth_email_server_config"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NeonAuthEmailServerConfig(nil).Update(map[string]any{
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthEmailServerConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthIntegrationEntity

```go
neonAuthIntegration := client.NeonAuthIntegration(nil)
fmt.Println(neonAuthIntegration.GetName()) // "neon_auth_integration"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NeonAuthIntegration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NeonAuthIntegration(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthIntegrationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthMagicLinkConfigEntity

```go
neonAuthMagicLinkConfig := client.NeonAuthMagicLinkConfig(nil)
fmt.Println(neonAuthMagicLinkConfig.GetName()) // "neon_auth_magic_link_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disable_sign_up` | `bool` | Yes | Whether to disable sign-up via magic link. |
| `enabled` | `bool` | Yes | Whether the magic link plugin is enabled. |
| `expires_in` | `int` | Yes | Minutes until the magic link expires. |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `disable_sign_up` | Yes |
| `enabled` | Yes |
| `expires_in` | Yes |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NeonAuthMagicLinkConfig(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthMagicLinkConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthOauthProviderEntity

```go
neonAuthOauthProvider := client.NeonAuthOauthProvider(nil)
fmt.Println(neonAuthOauthProvider.GetName()) // "neon_auth_oauth_provider"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NeonAuthOauthProvider(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.NeonAuthOauthProvider(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "id": "example_id",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NeonAuthOauthProvider(nil).Update(map[string]any{
    "id": "id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthOauthProviderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthOrganizationConfigEntity

```go
neonAuthOrganizationConfig := client.NeonAuthOrganizationConfig(nil)
fmt.Println(neonAuthOrganizationConfig.GetName()) // "neon_auth_organization_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator_role` | `string` | Yes | Role of the organization's creator. |
| `enabled` | `bool` | Yes | Whether the organization plugin is enabled. |
| `membership_limit` | `int` | Yes | Maximum number of members per organization. |
| `organization_limit` | `int` | Yes | Maximum organizations a user can belong to (created or joined). |
| `send_invitation_email` | `bool` | Yes | Whether to send invitation emails when inviting members to an organization. |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `creator_role` | Yes |
| `enabled` | Yes |
| `membership_limit` | Yes |
| `organization_limit` | Yes |
| `send_invitation_email` | Yes |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NeonAuthOrganizationConfig(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthOrganizationConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthPhoneNumberConfigEntity

```go
neonAuthPhoneNumberConfig := client.NeonAuthPhoneNumberConfig(nil)
fmt.Println(neonAuthPhoneNumberConfig.GetName()) // "neon_auth_phone_number_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Whether the phone number plugin is enabled. |
| `otp_expires_in` | `int` | No | Time in seconds before the OTP expires |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `enabled` | - | Yes |
| `otp_expires_in` | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NeonAuthPhoneNumberConfig(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NeonAuthPhoneNumberConfig(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthPhoneNumberConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthPluginConfigEntity

```go
neonAuthPluginConfig := client.NeonAuthPluginConfig(nil)
fmt.Println(neonAuthPluginConfig.GetName()) // "neon_auth_plugin_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `string` | No | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `string` | No | OAuth client secret for the provider. |
| `id` | `string` | Yes | The OAuth provider's ID. |
| `type` | `string` | Yes | OAuth provider key type. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NeonAuthPluginConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthPluginConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthRedirectUriWhitelistDomainEntity

```go
neonAuthRedirectUriWhitelistDomain := client.NeonAuthRedirectUriWhitelistDomain(nil)
fmt.Println(neonAuthRedirectUriWhitelistDomain.GetName()) // "neon_auth_redirect_uri_whitelist_domain"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | Yes | Allowed redirect URI domain for the auth provider. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NeonAuthRedirectUriWhitelistDomain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthRedirectUriWhitelistDomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthTransferAuthProviderProjectEntity

```go
neonAuthTransferAuthProviderProject := client.NeonAuthTransferAuthProviderProject(nil)
fmt.Println(neonAuthTransferAuthProviderProject.GetName()) // "neon_auth_transfer_auth_provider_project"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `project_id` | `string` | Yes | The Neon project ID. |
| `url` | `string` | Yes | URL for completing the process of ownership transfer |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.NeonAuthTransferAuthProviderProject(nil).Create(map[string]any{
    "auth_provider": "example_auth_provider",
    "project_id": "example_project_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthTransferAuthProviderProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonAuthWebhookConfigEntity

```go
neonAuthWebhookConfig := client.NeonAuthWebhookConfig(nil)
fmt.Println(neonAuthWebhookConfig.GetName()) // "neon_auth_webhook_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Whether the webhook is active. |
| `enabled_events` | `[]any` | No | Event types that trigger this webhook. |
| `timeout_seconds` | `int` | No | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | `string` | No | Destination URL that receives webhook event payloads. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NeonAuthWebhookConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NeonAuthWebhookConfig(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonAuthWebhookConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonFunctionEntity

```go
neonFunction := client.NeonFunction(nil)
fmt.Println(neonFunction.GetName()) // "neon_function"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NeonFunction(nil).Load(map[string]any{"id": "neon_function_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NeonFunction(nil).Update(map[string]any{
    "id": "neon_function_id",
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonFunctionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NeonFunctionDeploymentEntity

```go
neonFunctionDeployment := client.NeonFunctionDeployment(nil)
fmt.Println(neonFunctionDeployment.GetName()) // "neon_function_deployment"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.NeonFunctionDeployment(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "slug": "example_slug",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NeonFunctionDeploymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OperationEntity

```go
operation := client.Operation(nil)
fmt.Println(operation.GetName()) // "operation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | Yes | The action performed by the operation |
| `branch_id` | `string` | No | The ID of the branch this operation ran on. |
| `created_at` | `string` | Yes | A timestamp indicating when the operation was created |
| `endpoint_id` | `string` | No | The ID of the compute endpoint this operation ran on. |
| `error` | `string` | No | Human-readable message describing why the operation failed. |
| `failures_count` | `int` | Yes | The number of times the operation failed |
| `id` | `string` | Yes | The operation ID |
| `name` | `string` | No | Name for the replaced branch. |
| `operations` | `[]any` | Yes |  |
| `project_id` | `string` | Yes | The ID of the project this operation ran on. |
| `retry_at` | `string` | No | A timestamp indicating when the operation was last retried |
| `status` | `string` | Yes | Current lifecycle state of the operation. |
| `total_duration_ms` | `int` | Yes | The total duration of the operation in milliseconds |
| `updated_at` | `string` | Yes | A timestamp indicating when the operation status was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Operation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Operation(nil).Load(map[string]any{"id": "operation_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Operation(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "action": "example_action",
    "created_at": "example_created_at",
    "failures_count": 1,
    "id": "example_id",
    "operations": []any{},
    "status": "example_status",
    "total_duration_ms": 1,
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OperationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrgApiKeyCreateEntity

```go
orgApiKeyCreate := client.OrgApiKeyCreate(nil)
fmt.Println(orgApiKeyCreate.GetName()) // "org_api_key_create"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `id` | `int` | No |  |
| `key` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrgApiKeyCreate(nil).Create(map[string]any{
    "organization_id": "example_organization_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrgApiKeyCreateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrgApiKeyRevokeEntity

```go
orgApiKeyRevoke := client.OrgApiKeyRevoke(nil)
fmt.Println(orgApiKeyRevoke.GetName()) // "org_api_key_revoke"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.OrgApiKeyRevoke(nil).Remove(map[string]any{"key_id": 1, "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrgApiKeyRevokeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrgApiKeysListResponseItemEntity

```go
orgApiKeysListResponseItem := client.OrgApiKeysListResponseItem(nil)
fmt.Println(orgApiKeysListResponseItem.GetName()) // "org_api_keys_list_response_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | A timestamp indicating when the API key was created |
| `created_by` | `map[string]any` | Yes | The user data of the user that created this API key. |
| `id` | `int` | Yes | The API key's unique numeric ID. |
| `last_used_at` | `string` | No | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `string` | Yes | The IP address from which the API key was last used |
| `name` | `string` | Yes | The user-specified API key name |
| `project_id` | `string` | No | If set, the API key can access only this project |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrgApiKeysListResponseItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrgApiKeysListResponseItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationEntity

```go
organization := client.Organization(nil)
fmt.Println(organization.GetName()) // "organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_hipaa_projects` | `bool` | No | If true, allow account to mark projects as HIPAA |
| `created_at` | `string` | Yes | A timestamp indicting when the organization was created |
| `handle` | `string` | Yes | URL-safe identifier for the organization, used in API paths. |
| `id` | `string` | Yes | The Neon organization ID. |
| `label` | `string` | Yes | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `managed_by` | `string` | Yes | Organizations created via the Console or the API are managed by `console`. |
| `name` | `string` | Yes | Human-readable display name of the organization. |
| `plan` | `string` | Yes | Billing plan for the organization, for example `free`, `launch`, or `scale`. |
| `require_mfa` | `bool` | No | If true, all members must have MFA enabled to access this organization |
| `updated_at` | `string` | Yes | A timestamp indicating when the organization was updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Organization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Organization(nil).Load(map[string]any{"id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Organization(nil).Create(map[string]any{
    "id": "example_id",
    "region_id": "example_region_id",
    "vpc_endpoint_id": "example_vpc_endpoint_id",
    "created_at": "example_created_at",
    "handle": "example_handle",
    "label": "example_label",
    "managed_by": "example_managed_by",
    "name": "example_name",
    "plan": "example_plan",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Organization(nil).Remove(map[string]any{"id": "organization_id", "region_id": "region_id", "vpc_endpoint_id": "vpc_endpoint_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationInvitationEntity

```go
organizationInvitation := client.OrganizationInvitation(nil)
fmt.Println(organizationInvitation.GetName()) // "organization_invitation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | Email of the invited user |
| `id` | `string` | Yes | The invitation ID. |
| `invitations` | `[]any` | Yes | List of pending invitations for the organization. |
| `invited_at` | `string` | Yes | Timestamp when the invitation was created |
| `invited_by` | `string` | Yes | UUID for the user_id who extended the invitation |
| `org_id` | `string` | Yes | Organization id as it is stored in Neon |
| `role` | `string` | Yes | Organization member's role. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationInvitation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationInvitation(nil).Create(map[string]any{
    "id": "example_id",
    "email": "example_email",
    "invitations": []any{},
    "invited_at": "example_invited_at",
    "invited_by": "example_invited_by",
    "org_id": "example_org_id",
    "role": "example_role",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationInvitationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PresignEntity

```go
presign := client.Presign(nil)
fmt.Println(presign.GetName()) // "presign"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | No | The `Content-Type` to bind into the signed request. |
| `expires_at` | `string` | Yes | When the presigned URL stops being valid. |
| `expires_in_seconds` | `int` | No | How long the presigned URL stays valid, in seconds. |
| `headers` | `map[string]any` | Yes | Headers the caller MUST send verbatim on the request (e.g. |
| `method` | `string` | Yes | The HTTP method to use against `url`: `PUT` for an upload, `GET` for a download. |
| `operation` | `string` | Yes | The transfer direction. |
| `url` | `string` | Yes | The presigned URL. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Presign(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "bucket_id": "example_bucket_id",
    "object_key": "example_object_key",
    "project_id": "example_project_id",
    "expires_at": "example_expires_at",
    "headers": map[string]any{},
    "method": "example_method",
    "operation": "example_operation",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PresignEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectEntity

```go
project := client.Project(nil)
fmt.Println(project.GetName()) // "project"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_time` | `int` | Yes | Control plane observed endpoints of this project being active this amount of wall-clock time. |
| `active_time_seconds` | `int` | Yes | Seconds. |
| `branch_logical_size_limit` | `int` | Yes | The logical size limit for a branch. |
| `branch_logical_size_limit_bytes` | `int` | Yes | The logical size limit for a branch. |
| `compute_last_active_at` | `string` | No | The most recent time when any endpoint of this project was active. |
| `compute_time_seconds` | `int` | Yes | Seconds. |
| `consumption_period_end` | `string` | Yes | A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period. |
| `consumption_period_start` | `string` | Yes | A date-time indicating when Neon Cloud started measuring consumption for current consumption period. |
| `cpu_used_sec` | `int` | Yes | Deprecated. |
| `created_at` | `string` | Yes | A timestamp indicating when the project was created |
| `creation_source` | `string` | Yes | The project creation source |
| `data_storage_bytes_hour` | `int` | Yes | Bytes-Hour. |
| `data_transfer_bytes` | `int` | Yes | Bytes. |
| `default_endpoint_settings` | `map[string]any` | No | A collection of settings for a Neon endpoint |
| `deleted_at` | `string` | No | A timestamp indicating when the project was deleted |
| `effective_project_permission` | `string` | No |  |
| `hipaa_enabled_at` | `string` | No | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | `int` | Yes | The number of seconds to retain the shared history for all branches in this project. |
| `id` | `string` | Yes | The Neon project ID. |
| `label` | `string` | Yes | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | `string` | No | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | `string` | No | A timestamp indicating when project maintenance begins. |
| `name` | `string` | Yes | The project name |
| `org_id` | `string` | No | The Neon organization ID. |
| `org_name` | `string` | No | Name of the organization that owns the project. |
| `owner` | `map[string]any` | Yes | Ownership details for the project, including the owner's name and email. |
| `owner_id` | `string` | Yes | ID of the organization that owns the project. |
| `pg_version` | `int` | Yes | The major Postgres version number. |
| `platform_id` | `string` | Yes | The cloud platform identifier. |
| `project` | `map[string]any` | Yes | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `provisioner` | `string` | Yes | Compute provisioner. |
| `proxy_host` | `string` | Yes | The proxy host for the project. |
| `quota_reset_at` | `string` | No | Deprecated. |
| `recoverable_until` | `string` | No | A timestamp indicating the project will be recoverable until this date and time. |
| `region_id` | `string` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `map[string]any` | No | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | `bool` | Yes | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | `int` | No | The current space occupied by the project in Postgres storage, in bytes. |
| `updated_at` | `string` | Yes | A timestamp indicating when the project was last updated |
| `written_data_bytes` | `int` | Yes | Bytes. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Project(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Project(nil).Load(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Project(nil).Create(map[string]any{
    "id": "example_id",
    "vpc_endpoint_id": "example_vpc_endpoint_id",
    "active_time": 1,
    "active_time_seconds": 1,
    "branch_logical_size_limit": 1,
    "branch_logical_size_limit_bytes": 1,
    "compute_time_seconds": 1,
    "consumption_period_end": "example_consumption_period_end",
    "consumption_period_start": "example_consumption_period_start",
    "cpu_used_sec": 1,
    "created_at": "example_created_at",
    "creation_source": "example_creation_source",
    "data_storage_bytes_hour": 1,
    "data_transfer_bytes": 1,
    "history_retention_seconds": 1,
    "label": "example_label",
    "name": "example_name",
    "owner": map[string]any{},
    "owner_id": "example_owner_id",
    "pg_version": 1,
    "platform_id": "example_platform_id",
    "project": map[string]any{},
    "provisioner": "example_provisioner",
    "proxy_host": "example_proxy_host",
    "region_id": "example_region_id",
    "store_passwords": true,
    "updated_at": "example_updated_at",
    "written_data_bytes": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Project(nil).Update(map[string]any{
    "id": "project_id",
    "request_id": "request_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Project(nil).Remove(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectBranchLogFieldEntity

```go
projectBranchLogField := client.ProjectBranchLogField(nil)
fmt.Println(projectBranchLogField.GetName()) // "project_branch_log_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `[]any` | Yes | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectBranchLogField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectBranchLogFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectBranchLogFieldValueEntity

```go
projectBranchLogFieldValue := client.ProjectBranchLogFieldValue(nil)
fmt.Println(projectBranchLogFieldValue.GetName()) // "project_branch_log_field_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `is_truncated` | `bool` | Yes | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectBranchLogFieldValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectBranchLogFieldValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectBranchLogsQueryEntity

```go
projectBranchLogsQuery := client.ProjectBranchLogsQuery(nil)
fmt.Println(projectBranchLogsQuery.GetName()) // "project_branch_logs_query"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body_contains` | `string` | No | Match records whose rendered `message` contains this case-sensitive substring. |
| `cursor` | `string` | No | Opaque pagination cursor returned as `next_cursor` by a previous call. |
| `end_time` | `string` | No | Exclusive end of the query window. |
| `is_truncated` | `bool` | Yes | True when more records matched than were returned. |
| `limit` | `int` | No | Maximum number of log records to return per page. |
| `logql` | `string` | No | Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream. |
| `logs` | `[]any` | Yes |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectBranchLogsQuery(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "is_truncated": true,
    "logs": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectBranchLogsQueryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectMemberEntity

```go
projectMember := client.ProjectMember(nil)
fmt.Println(projectMember.GetName()) // "project_member"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectMemberRoleEntity

```go
projectMemberRole := client.ProjectMemberRole(nil)
fmt.Println(projectMemberRole.GetName()) // "project_member_role"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credential_rotation_recommended` | `bool` | No | Hint that database credentials may need rotation after the role change. |
| `effective_project_permission` | `string` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `string` | No | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `string` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `member_id` | `string` | Yes |  |
| `name` | `string` | No | The user's display name. |
| `org_api_key_rotation_recommended` | `bool` | No | Hint that project-scoped org API keys created by the target user may need rotation. |
| `org_default_project_permission` | `string` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `string` | Yes | Organization-level role used by project member role management. |
| `project_id` | `string` | Yes |  |
| `project_role` | `string` | No | The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback. |
| `role` | `string` | Yes | Per-project role. |
| `user_id` | `string` | Yes |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProjectMemberRole(nil).Update(map[string]any{
    "member_id": "member_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectMemberRole(nil).Remove(map[string]any{"member_id": "member_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectMemberRoleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectPermissionEntity

```go
projectPermission := client.ProjectPermission(nil)
fmt.Println(projectPermission.GetName()) // "project_permission"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProjectPermission(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectPermission(nil).Create(map[string]any{
    "id": "example_id",
    "email": "example_email",
    "granted_at": "example_granted_at",
    "granted_to_email": "example_granted_to_email",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProjectPermission(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectPermissionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectRecoverEntity

```go
projectRecover := client.ProjectRecover(nil)
fmt.Println(projectRecover.GetName()) // "project_recover"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branches` | `[]any` | Yes | Branches in the project. |
| `id` | `string` | No |  |
| `project` | `map[string]any` | Yes | Full details of the project, including configuration, consumption metrics, and ownership. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectRecover(nil).Create(map[string]any{
    "id": "example_id",
    "branches": []any{},
    "project": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectRecoverEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProjectTransferRequestEntity

```go
projectTransferRequest := client.ProjectTransferRequest(nil)
fmt.Println(projectTransferRequest.GetName()) // "project_transfer_request"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `ttl_seconds` | `int` | No | Number of seconds the transfer request stays valid before it expires. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProjectTransferRequest(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProjectTransferRequestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RegionEntity

```go
region := client.Region(nil)
fmt.Println(region.GetName()) // "region"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default` | `bool` | Yes | True if this region is selected by default when no region is specified during project creation. |
| `geo_lat` | `string` | Yes | The geographical latitude (approximate) for the region. |
| `geo_long` | `string` | Yes | The geographical longitude (approximate) for the region. |
| `name` | `string` | Yes | A short description of the region. |
| `region_id` | `string` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Region(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RegionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RoleEntity

```go
role := client.Role(nil)
fmt.Println(role.GetName()) // "role"
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
| `protected` | `bool` | No | Whether or not the role is system-protected |
| `role` | `map[string]any` | Yes | Properties of the role to create. |
| `updated_at` | `string` | Yes | A timestamp indicating when the role was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Role(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Role(nil).Load(map[string]any{"id": "role_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Role(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "created_at": "example_created_at",
    "name": "example_name",
    "role": map[string]any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Role(nil).Remove(map[string]any{"id": "role_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RoleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RoleOperationEntity

```go
roleOperation := client.RoleOperation(nil)
fmt.Println(roleOperation.GetName()) // "role_operation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `operations` | `[]any` | Yes |  |
| `role` | `map[string]any` | Yes | Role details for the requested database role. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.RoleOperation(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "role_name": "example_role_name",
    "operations": []any{},
    "role": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RoleOperationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RolePasswordEntity

```go
rolePassword := client.RolePassword(nil)
fmt.Println(rolePassword.GetName()) // "role_password"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `password` | `string` | Yes | The role password |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RolePassword(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id", "role_name": "role_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RolePasswordEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SendNeonAuthTestEmailEntity

```go
sendNeonAuthTestEmail := client.SendNeonAuthTestEmail(nil)
fmt.Println(sendNeonAuthTestEmail.GetName()) // "send_neon_auth_test_email"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error_message` | `string` | No | The error message from the email server. |
| `host` | `string` | Yes | Hostname of the email server. |
| `password` | `string` | Yes | Password for authenticating with the SMTP server. |
| `port` | `int` | Yes | TCP port of the SMTP server. |
| `recipient_email` | `string` | Yes | The email address to send the test email to. |
| `sender_email` | `string` | Yes | Email address used as the From address on outgoing auth emails. |
| `sender_name` | `string` | Yes | Display name shown as the sender in outgoing emails. |
| `success` | `bool` | Yes | Whether the test email was sent successfully. |
| `username` | `string` | Yes | Username for authenticating with the SMTP server. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SendNeonAuthTestEmail(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "host": "example_host",
    "password": "example_password",
    "port": 1,
    "recipient_email": "example_recipient_email",
    "sender_email": "example_sender_email",
    "sender_name": "example_sender_name",
    "success": true,
    "username": "example_username",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SendNeonAuthTestEmailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SnapshotEntity

```go
snapshot := client.Snapshot(nil)
fmt.Println(snapshot.GetName()) // "snapshot"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Timestamp when the snapshot was created, in RFC 3339 format (UTC). |
| `diff_size` | `int` | No | Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage. |
| `expires_at` | `string` | No | RFC 3339 timestamp when the snapshot expires and is eligible for deletion. |
| `full_size` | `int` | No | Full logical size of the snapshot in bytes at the time it was taken. |
| `id` | `string` | Yes | The snapshot ID. |
| `lsn` | `string` | No | WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`). |
| `manual` | `bool` | No | True if the snapshot was created manually rather than by a schedule. |
| `name` | `string` | Yes | Human-readable label for the snapshot. |
| `operations` | `[]any` | Yes |  |
| `slug` | `string` | No | Snapshot resource ID, unique within the project. |
| `snapshot` | `map[string]any` | Yes | Fields to update on the snapshot. |
| `source_branch_id` | `string` | No | Branch from which this snapshot was created. |
| `timestamp` | `string` | No | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Snapshot(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Snapshot(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "created_at": "example_created_at",
    "id": "example_id",
    "operations": []any{},
    "snapshot": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Snapshot(nil).Update(map[string]any{
    "id": "id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Snapshot(nil).Remove(map[string]any{"id": "id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SnapshotEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SpendingLimitEntity

```go
spendingLimit := client.SpendingLimit(nil)
fmt.Println(spendingLimit.GetName()) // "spending_limit"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `spending_limit_cents` | `int` | Yes | Monthly spending cap in cents. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SpendingLimit(nil).Load(map[string]any{"organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SpendingLimit(nil).Update(map[string]any{
    "organization_id": "organization_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SpendingLimitEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TriggerEntity

```go
trigger := client.Trigger(nil)
fmt.Println(trigger.GetName()) // "trigger"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `triggers` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Trigger(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Trigger(nil).Load(map[string]any{"id": "trigger_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Trigger(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "triggers": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Trigger(nil).Update(map[string]any{
    "id": "trigger_id",
    "branch_id": "branch_id",
    "project_id": "project_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UpdateNeonAuthUserRoleEntity

```go
updateNeonAuthUserRole := client.UpdateNeonAuthUserRole(nil)
fmt.Println(updateNeonAuthUserRole.GetName()) // "update_neon_auth_user_role"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | ID of the updated user |
| `roles` | `[]any` | Yes | Roles to assign to the user in the Neon Auth (Better Auth) directory. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UpdateNeonAuthUserRole(nil).Update(map[string]any{
    "branch_id": "branch_id",
    "project_id": "project_id",
    "user_id": "user_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpdateNeonAuthUserRoleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## VpcEndpointEntity

```go
vpcEndpoint := client.VpcEndpoint(nil)
fmt.Println(vpcEndpoint.GetName()) // "vpc_endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `example_restricted_projects` | `[]any` | Yes | A list of example projects that are restricted to use this VPC endpoint. |
| `id` | `string` | No |  |
| `label` | `string` | Yes | A descriptive label for the VPC endpoint |
| `num_restricted_projects` | `int` | Yes | The number of projects that are restricted to use this VPC endpoint. |
| `region_id` | `string` | Yes | The region where the VPC endpoint is located |
| `state` | `string` | Yes | The current state of the VPC endpoint. |
| `vpc_endpoint_id` | `string` | Yes | Cloud provider identifier for the VPC endpoint. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.VpcEndpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.VpcEndpoint(nil).Load(map[string]any{"id": "vpc_endpoint_id", "organization_id": "organization_id", "region_id": "region_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `VpcEndpointEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewNeonSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

