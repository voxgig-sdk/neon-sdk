# Neon PHP SDK Reference

Complete API reference for the Neon PHP SDK.


## NeonSDK

### Constructor

```php
require_once __DIR__ . '/neon_sdk.php';

$client = new NeonSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NeonSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = NeonSDK::test();
```


### Instance Methods

#### `Anonymize($data = null)`

Create a new `AnonymizeEntity` instance. Pass `null` for no initial data.

#### `AnonymizedBranchStatus($data = null)`

Create a new `AnonymizedBranchStatusEntity` instance. Pass `null` for no initial data.

#### `ApiKey($data = null)`

Create a new `ApiKeyEntity` instance. Pass `null` for no initial data.

#### `Auth($data = null)`

Create a new `AuthEntity` instance. Pass `null` for no initial data.

#### `AuthLegacy($data = null)`

Create a new `AuthLegacyEntity` instance. Pass `null` for no initial data.

#### `AvailablePreloadLibrary($data = null)`

Create a new `AvailablePreloadLibraryEntity` instance. Pass `null` for no initial data.

#### `BackupSchedule($data = null)`

Create a new `BackupScheduleEntity` instance. Pass `null` for no initial data.

#### `Branch($data = null)`

Create a new `BranchEntity` instance. Pass `null` for no initial data.

#### `BranchAiGateway($data = null)`

Create a new `BranchAiGatewayEntity` instance. Pass `null` for no initial data.

#### `BranchOperation($data = null)`

Create a new `BranchOperationEntity` instance. Pass `null` for no initial data.

#### `BranchSchema($data = null)`

Create a new `BranchSchemaEntity` instance. Pass `null` for no initial data.

#### `BranchSchemaCompare($data = null)`

Create a new `BranchSchemaCompareEntity` instance. Pass `null` for no initial data.

#### `BranchStorage($data = null)`

Create a new `BranchStorageEntity` instance. Pass `null` for no initial data.

#### `Bucket($data = null)`

Create a new `BucketEntity` instance. Pass `null` for no initial data.

#### `BucketObjectsList($data = null)`

Create a new `BucketObjectsListEntity` instance. Pass `null` for no initial data.

#### `ConnectionUri($data = null)`

Create a new `ConnectionUriEntity` instance. Pass `null` for no initial data.

#### `Consumption($data = null)`

Create a new `ConsumptionEntity` instance. Pass `null` for no initial data.

#### `CreateCredential($data = null)`

Create a new `CreateCredentialEntity` instance. Pass `null` for no initial data.

#### `Credential($data = null)`

Create a new `CredentialEntity` instance. Pass `null` for no initial data.

#### `CurrentUserInfo($data = null)`

Create a new `CurrentUserInfoEntity` instance. Pass `null` for no initial data.

#### `CustomDomain($data = null)`

Create a new `CustomDomainEntity` instance. Pass `null` for no initial data.

#### `DataApi($data = null)`

Create a new `DataApiEntity` instance. Pass `null` for no initial data.

#### `Database($data = null)`

Create a new `DatabaseEntity` instance. Pass `null` for no initial data.

#### `EmailProvider($data = null)`

Create a new `EmailProviderEntity` instance. Pass `null` for no initial data.

#### `EmailServer($data = null)`

Create a new `EmailServerEntity` instance. Pass `null` for no initial data.

#### `Empty($data = null)`

Create a new `EmptyEntity` instance. Pass `null` for no initial data.

#### `Endpoint($data = null)`

Create a new `EndpointEntity` instance. Pass `null` for no initial data.

#### `EndpointOperation($data = null)`

Create a new `EndpointOperationEntity` instance. Pass `null` for no initial data.

#### `Function($data = null)`

Create a new `FunctionEntity` instance. Pass `null` for no initial data.

#### `Jwk($data = null)`

Create a new `JwkEntity` instance. Pass `null` for no initial data.

#### `MaskingRule($data = null)`

Create a new `MaskingRuleEntity` instance. Pass `null` for no initial data.

#### `Member($data = null)`

Create a new `MemberEntity` instance. Pass `null` for no initial data.

#### `NeonAuthAllowLocalhost($data = null)`

Create a new `NeonAuthAllowLocalhostEntity` instance. Pass `null` for no initial data.

#### `NeonAuthConfig($data = null)`

Create a new `NeonAuthConfigEntity` instance. Pass `null` for no initial data.

#### `NeonAuthCreateIntegration($data = null)`

Create a new `NeonAuthCreateIntegrationEntity` instance. Pass `null` for no initial data.

#### `NeonAuthCreateNewUser($data = null)`

Create a new `NeonAuthCreateNewUserEntity` instance. Pass `null` for no initial data.

#### `NeonAuthEmailAndPasswordConfig($data = null)`

Create a new `NeonAuthEmailAndPasswordConfigEntity` instance. Pass `null` for no initial data.

#### `NeonAuthEmailServerConfig($data = null)`

Create a new `NeonAuthEmailServerConfigEntity` instance. Pass `null` for no initial data.

#### `NeonAuthIntegration($data = null)`

Create a new `NeonAuthIntegrationEntity` instance. Pass `null` for no initial data.

#### `NeonAuthMagicLinkConfig($data = null)`

Create a new `NeonAuthMagicLinkConfigEntity` instance. Pass `null` for no initial data.

#### `NeonAuthOauthProvider($data = null)`

Create a new `NeonAuthOauthProviderEntity` instance. Pass `null` for no initial data.

#### `NeonAuthOrganizationConfig($data = null)`

Create a new `NeonAuthOrganizationConfigEntity` instance. Pass `null` for no initial data.

#### `NeonAuthPhoneNumberConfig($data = null)`

Create a new `NeonAuthPhoneNumberConfigEntity` instance. Pass `null` for no initial data.

#### `NeonAuthPluginConfig($data = null)`

Create a new `NeonAuthPluginConfigEntity` instance. Pass `null` for no initial data.

#### `NeonAuthRedirectUriWhitelistDomain($data = null)`

Create a new `NeonAuthRedirectUriWhitelistDomainEntity` instance. Pass `null` for no initial data.

#### `NeonAuthTransferAuthProviderProject($data = null)`

Create a new `NeonAuthTransferAuthProviderProjectEntity` instance. Pass `null` for no initial data.

#### `NeonAuthWebhookConfig($data = null)`

Create a new `NeonAuthWebhookConfigEntity` instance. Pass `null` for no initial data.

#### `NeonFunction($data = null)`

Create a new `NeonFunctionEntity` instance. Pass `null` for no initial data.

#### `NeonFunctionDeployment($data = null)`

Create a new `NeonFunctionDeploymentEntity` instance. Pass `null` for no initial data.

#### `Operation($data = null)`

Create a new `OperationEntity` instance. Pass `null` for no initial data.

#### `OrgApiKeyCreate($data = null)`

Create a new `OrgApiKeyCreateEntity` instance. Pass `null` for no initial data.

#### `OrgApiKeyRevoke($data = null)`

Create a new `OrgApiKeyRevokeEntity` instance. Pass `null` for no initial data.

#### `OrgApiKeysListResponseItem($data = null)`

Create a new `OrgApiKeysListResponseItemEntity` instance. Pass `null` for no initial data.

#### `Organization($data = null)`

Create a new `OrganizationEntity` instance. Pass `null` for no initial data.

#### `OrganizationInvitation($data = null)`

Create a new `OrganizationInvitationEntity` instance. Pass `null` for no initial data.

#### `Presign($data = null)`

Create a new `PresignEntity` instance. Pass `null` for no initial data.

#### `Project($data = null)`

Create a new `ProjectEntity` instance. Pass `null` for no initial data.

#### `ProjectBranchLogField($data = null)`

Create a new `ProjectBranchLogFieldEntity` instance. Pass `null` for no initial data.

#### `ProjectBranchLogFieldValue($data = null)`

Create a new `ProjectBranchLogFieldValueEntity` instance. Pass `null` for no initial data.

#### `ProjectBranchLogsQuery($data = null)`

Create a new `ProjectBranchLogsQueryEntity` instance. Pass `null` for no initial data.

#### `ProjectMember($data = null)`

Create a new `ProjectMemberEntity` instance. Pass `null` for no initial data.

#### `ProjectMemberRole($data = null)`

Create a new `ProjectMemberRoleEntity` instance. Pass `null` for no initial data.

#### `ProjectPermission($data = null)`

Create a new `ProjectPermissionEntity` instance. Pass `null` for no initial data.

#### `ProjectRecover($data = null)`

Create a new `ProjectRecoverEntity` instance. Pass `null` for no initial data.

#### `ProjectTransferRequest($data = null)`

Create a new `ProjectTransferRequestEntity` instance. Pass `null` for no initial data.

#### `Region($data = null)`

Create a new `RegionEntity` instance. Pass `null` for no initial data.

#### `Role($data = null)`

Create a new `RoleEntity` instance. Pass `null` for no initial data.

#### `RoleOperation($data = null)`

Create a new `RoleOperationEntity` instance. Pass `null` for no initial data.

#### `RolePassword($data = null)`

Create a new `RolePasswordEntity` instance. Pass `null` for no initial data.

#### `SendNeonAuthTestEmail($data = null)`

Create a new `SendNeonAuthTestEmailEntity` instance. Pass `null` for no initial data.

#### `Snapshot($data = null)`

Create a new `SnapshotEntity` instance. Pass `null` for no initial data.

#### `SpendingLimit($data = null)`

Create a new `SpendingLimitEntity` instance. Pass `null` for no initial data.

#### `Trigger($data = null)`

Create a new `TriggerEntity` instance. Pass `null` for no initial data.

#### `UpdateNeonAuthUserRole($data = null)`

Create a new `UpdateNeonAuthUserRoleEntity` instance. Pass `null` for no initial data.

#### `VpcEndpoint($data = null)`

Create a new `VpcEndpointEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): NeonUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AnonymizeEntity

```php
$anonymize = $client->Anonymize();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `string` | No | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | `int` | No | Number of columns that had masking rules applied during the attempt. |
| `started_at` | `string` | No | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | `string` | No | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | `string` | No | Username of the user who triggered the latest anonymization attempt. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Anonymize()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnonymizeEntity`

Create a new `AnonymizeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AnonymizedBranchStatusEntity

```php
$anonymized_branch_status = $client->AnonymizedBranchStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `string` | No | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | `int` | No | Number of columns that had masking rules applied during the attempt. |
| `started_at` | `string` | No | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | `string` | No | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | `string` | No | Username of the user who triggered the latest anonymization attempt. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AnonymizedBranchStatus()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnonymizedBranchStatusEntity`

Create a new `AnonymizedBranchStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiKeyEntity

```php
$api_key = $client->ApiKey();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiKey()->create([
  "created_at" => null, // string
  "created_by" => null, // string
  "id" => null, // int
  "key" => null, // string
  "key_name" => null, // string
  "last_used_from_addr" => null, // string
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiKey()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ApiKey()->remove(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiKeyEntity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthEntity

```php
$auth = $client->Auth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes | The ID of the account associated with this authentication record. |
| `auth_data` | `string` | No |  |
| `auth_method` | `string` | Yes | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Auth()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "account_id" => null, // string
  "auth_method" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Auth()->load();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Auth()->remove(["branch_id" => "branch_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthEntity`

Create a new `AuthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuthLegacyEntity

```php
$auth_legacy = $client->AuthLegacy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | Yes | URI to add to the redirect URI allowlist for the auth provider. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AuthLegacy()->create([
  "project_id" => null, // string
  "auth_provider" => null, // string
  "domain" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AuthLegacy()->remove(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuthLegacyEntity`

Create a new `AuthLegacyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AvailablePreloadLibraryEntity

```php
$available_preload_library = $client->AvailablePreloadLibrary();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AvailablePreloadLibrary()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AvailablePreloadLibraryEntity`

Create a new `AvailablePreloadLibraryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BackupScheduleEntity

```php
$backup_schedule = $client->BackupSchedule();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BackupSchedule()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BackupScheduleEntity`

Create a new `BackupScheduleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchEntity

```php
$branch = $client->Branch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `array` | Yes | Annotation data associated with the annotated object. |
| `annotations` | `array` | Yes | Map of annotations keyed by resource identifier, where each value contains the annotation data for that resource. |
| `branch` | `array` | Yes | Branch returned by the request. |
| `branches` | `array` | Yes | Branches in the project. |
| `id` | `string` | No |  |
| `pagination` | `array` | No | To paginate the response, issue an initial request with `limit` value. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Branch()->create([
  "project_id" => null, // string
  "annotation" => null, // array
  "annotations" => null, // array
  "branch" => null, // array
  "branches" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Branch()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Branch()->load(["id" => "branch_id", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Branch()->remove(["id" => "branch_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Branch()->update([
  "id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchEntity`

Create a new `BranchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchAiGatewayEntity

```php
$branch_ai_gateway = $client->BranchAiGateway();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_url` | `string` | Yes | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | `bool` | Yes | Always `true` in 200 responses. |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BranchAiGateway()->load(["id" => "branch_ai_gateway_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchAiGatewayEntity`

Create a new `BranchAiGatewayEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchOperationEntity

```php
$branch_operation = $client->BranchOperation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `array` | Yes | Branch returned by the request. |
| `id` | `string` | No |  |
| `operations` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BranchOperation()->create([
  "id" => null, // string
  "project_id" => null, // string
  "branch" => null, // array
  "operations" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchOperationEntity`

Create a new `BranchOperationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchSchemaEntity

```php
$branch_schema = $client->BranchSchema();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `tables` | `array` | Yes | Tables present in the branch schema. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BranchSchema()->load(["id" => "branch_schema_id", "project_id" => "project_id", "db_name" => "db_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchSchemaEntity`

Create a new `BranchSchemaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchSchemaCompareEntity

```php
$branch_schema_compare = $client->BranchSchemaCompare();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BranchSchemaCompare()->load(["id" => "branch_schema_compare_id", "project_id" => "project_id", "db_name" => "db_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchSchemaCompareEntity`

Create a new `BranchSchemaCompareEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BranchStorageEntity

```php
$branch_storage = $client->BranchStorage();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BranchStorage()->load(["id" => "branch_storage_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BranchStorageEntity`

Create a new `BranchStorageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BucketEntity

```php
$bucket = $client->Bucket();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Bucket()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "created_at" => null, // string
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Bucket()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Bucket()->load(["branch_id" => "branch_id", "bucket_id" => "bucket_id", "object_key" => "object_key", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Bucket()->remove(["branch_id" => "branch_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BucketEntity`

Create a new `BucketEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BucketObjectsListEntity

```php
$bucket_objects_list = $client->BucketObjectsList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `string` | Yes | The object's entity tag (content hash). |
| `key` | `string` | Yes | The full object key. |
| `last_modified` | `string` | Yes | The time the object was last modified. |
| `size` | `int` | Yes | The object size in bytes. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BucketObjectsList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BucketObjectsListEntity`

Create a new `BucketObjectsListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConnectionUriEntity

```php
$connection_uri = $client->ConnectionUri();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uri` | `string` | Yes | The connection URI. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ConnectionUri()->load(["project_id" => "project_id", "database_name" => "database_name", "role_name" => "role_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConnectionUriEntity`

Create a new `ConnectionUriEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConsumptionEntity

```php
$consumption = $client->Consumption();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branches` | `array` | Yes | Per-branch consumption history records returned for the requested time range. |
| `pagination` | `array` | Yes | Cursor-based pagination. |
| `projects` | `array` | Yes | Per-project consumption history records included in the response. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Consumption()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConsumptionEntity`

Create a new `ConsumptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateCredentialEntity

```php
$create_credential = $client->CreateCredential();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Free-form customer label for the credential. |
| `principal_type` | `string` | Yes | Principal type for the credential. |
| `scopes` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateCredential()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "principal_type" => null, // string
  "scopes" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateCredentialEntity`

Create a new `CreateCredentialEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CredentialEntity

```php
$credential = $client->Credential();
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
| `scopes` | `array` | Yes |  |
| `token_id` | `string` | Yes | Opaque credential id (e.g. |
| `token_id_short` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Credential()->create([
  "branch_id" => null, // string
  "id" => null, // string
  "project_id" => null, // string
  "created_at" => null, // string
  "principal_type" => null, // string
  "scopes" => null, // array
  "token_id" => null, // string
  "token_id_short" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Credential()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Credential()->remove(["branch_id" => "branch_id", "id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CredentialEntity`

Create a new `CredentialEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CurrentUserInfoEntity

```php
$current_user_info = $client->CurrentUserInfo();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CurrentUserInfo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CurrentUserInfoEntity`

Create a new `CurrentUserInfoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomDomainEntity

```php
$custom_domain = $client->CustomDomain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes | The custom domain to register (for example `dashboard.acme.com`). |
| `entity_id` | `string` | Yes | The target entity's identifier within the branch. |
| `entity_type` | `string` | Yes | The kind of branch entity to point the domain at. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomDomain()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "domain" => null, // string
  "entity_id" => null, // string
  "entity_type" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomDomainEntity`

Create a new `CustomDomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DataApiEntity

```php
$data_api = $client->DataApi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_default_grants` | `bool` | No | Grant all permissions to the tables in the public schema to authenticated users |
| `auth_provider` | `string` | No | Authentication provider for the Neon Data API. |
| `available_schemas` | `array` | No | List of available database schemas (SubZero only) |
| `id` | `string` | No |  |
| `jwks_url` | `string` | No | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `jwt_audience` | `string` | No | Expected `aud` claim in incoming JWTs. |
| `provider_name` | `string` | No | Display name for the authentication provider. |
| `settings` | `array` | No | Configuration settings for the Data API (SubZero only) |
| `skip_auth_schema` | `bool` | No | Skip creating the auth schema and RLS functions |
| `status` | `string` | Yes | The status of the Neon Data API deployment |
| `url` | `string` | Yes | The URL of the Neon Data API |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DataApi()->create([
  "branch_id" => null, // string
  "id" => null, // string
  "project_id" => null, // string
  "status" => null, // string
  "url" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DataApi()->load(["id" => "data_api_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DataApi()->remove(["id" => "data_api_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->DataApi()->update([
  "id" => "data_api_id",
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DataApiEntity`

Create a new `DataApiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DatabaseEntity

```php
$database = $client->Database();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes | The ID of the branch this database belongs to. |
| `created_at` | `string` | Yes | A timestamp indicating when the database was created |
| `database` | `array` | Yes | Configuration for the new Postgres database. |
| `id` | `int` | Yes | The database ID |
| `name` | `string` | Yes | The database name |
| `owner_name` | `string` | Yes | The name of role that owns the database |
| `updated_at` | `string` | Yes | A timestamp indicating when the database was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Database()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "created_at" => null, // string
  "database" => null, // array
  "id" => null, // int
  "name" => null, // string
  "owner_name" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Database()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Database()->load(["id" => "database_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Database()->remove(["id" => "database_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Database()->update([
  "id" => "database_id",
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DatabaseEntity`

Create a new `DatabaseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailProviderEntity

```php
$email_provider = $client->EmailProvider();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EmailProvider()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailProviderEntity`

Create a new `EmailProviderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailServerEntity

```php
$email_server = $client->EmailServer();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EmailServer()->load(["project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailServerEntity`

Create a new `EmailServerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmptyEntity

```php
$empty = $client->Empty();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_org_id` | `string` | Yes | The destination organization identifier |
| `project_ids` | `array` | Yes | The list of projects ids to transfer. |
| `schedule` | `array` | Yes | List of schedule entries defining the backup frequency. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Empty()->create([
  "organization_id" => null, // string
  "destination_org_id" => null, // string
  "project_ids" => null, // array
  "schedule" => null, // array
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Empty()->remove(["organization_id" => "organization_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Empty()->update([
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmptyEntity`

Create a new `EmptyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EndpointEntity

```php
$endpoint = $client->Endpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoscaling_limit_max_cu` | `float` | Yes | The maximum number of Compute Units |
| `autoscaling_limit_min_cu` | `float` | Yes | The minimum number of Compute Units |
| `branch_id` | `string` | Yes | The ID of the branch this compute endpoint belongs to. |
| `compute_release_version` | `string` | No | Attached compute's release version number. |
| `created_at` | `string` | Yes | A timestamp indicating when the compute endpoint was created |
| `creation_source` | `string` | Yes | The compute endpoint creation source |
| `current_state` | `string` | Yes | Lifecycle state of the compute endpoint. |
| `disabled` | `bool` | Yes | Whether to restrict connections to the compute endpoint. |
| `endpoint` | `array` | Yes | Configuration for the compute endpoint to create. |
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
| `settings` | `array` | Yes | A collection of settings for a compute endpoint |
| `started_at` | `string` | No | A timestamp indicating when the compute endpoint was last started |
| `suspend_timeout_seconds` | `int` | Yes | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `suspended_at` | `string` | No | A timestamp indicating when the compute endpoint was last suspended |
| `type` | `string` | Yes | Compute endpoint type. |
| `updated_at` | `string` | Yes | A timestamp indicating when the compute endpoint was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Endpoint()->create([
  "project_id" => null, // string
  "autoscaling_limit_max_cu" => null, // float
  "autoscaling_limit_min_cu" => null, // float
  "branch_id" => null, // string
  "created_at" => null, // string
  "creation_source" => null, // string
  "current_state" => null, // string
  "disabled" => null, // bool
  "endpoint" => null, // array
  "host" => null, // string
  "id" => null, // string
  "passwordless_access" => null, // bool
  "pooler_enabled" => null, // bool
  "pooler_mode" => null, // string
  "provisioner" => null, // string
  "proxy_host" => null, // string
  "region_id" => null, // string
  "settings" => null, // array
  "suspend_timeout_seconds" => null, // int
  "type" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Endpoint()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Endpoint()->load(["id" => "endpoint_id", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Endpoint()->remove(["id" => "endpoint_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Endpoint()->update([
  "id" => "endpoint_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EndpointEntity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EndpointOperationEntity

```php
$endpoint_operation = $client->EndpointOperation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endpoint` | `array` | Yes | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` | `string` | No |  |
| `operations` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EndpointOperation()->create([
  "id" => null, // string
  "project_id" => null, // string
  "endpoint" => null, // array
  "operations" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EndpointOperationEntity`

Create a new `EndpointOperationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FunctionEntity

```php
$function = $client->Function();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_domains` | `array` | Yes |  |
| `functions` | `array` | Yes |  |
| `id` | `string` | No |  |
| `pagination` | `array` | No | To paginate the response, issue an initial request with `limit` value. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Function()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Function()->remove(["branch_id" => "branch_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FunctionEntity`

Create a new `FunctionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## JwkEntity

```php
$jwk = $client->Jwk();
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
| `role_names` | `array` | No | Deprecated. |
| `skip_role_creation` | `bool` | No | Deprecated. |
| `updated_at` | `string` | Yes | The date and time when the JWKS was last modified |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Jwk()->create([
  "project_id" => null, // string
  "created_at" => null, // string
  "id" => null, // string
  "jwks_url" => null, // string
  "provider_name" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Jwk()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Jwk()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): JwkEntity`

Create a new `JwkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MaskingRuleEntity

```php
$masking_rule = $client->MaskingRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column_name` | `string` | Yes | The name of the column to be masked |
| `database_name` | `string` | Yes | The name of the database containing the table to be masked |
| `masking_function` | `string` | No | The PostgreSQL Anonymizer masking function to apply. |
| `masking_rules` | `array` | Yes | List of masking rules for the branch |
| `masking_value` | `string` | No | A literal value to set on the column when masking. |
| `schema_name` | `string` | Yes | The name of the schema containing the table to be masked |
| `table_name` | `string` | Yes | The name of the table containing the column to be masked |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MaskingRule()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->MaskingRule()->update([
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MaskingRuleEntity`

Create a new `MaskingRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemberEntity

```php
$member = $client->Member();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Member()->load(["id" => "member_id", "organization_id" => "organization_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Member()->remove(["id" => "member_id", "organization_id" => "organization_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Member()->update([
  "id" => "member_id",
  "organization_id" => "organization_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemberEntity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthAllowLocalhostEntity

```php
$neon_auth_allow_localhost = $client->NeonAuthAllowLocalhost();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_localhost` | `bool` | Yes | Whether to allow localhost connections |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NeonAuthAllowLocalhost()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NeonAuthAllowLocalhost()->update([
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthAllowLocalhostEntity`

Create a new `NeonAuthAllowLocalhostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthConfigEntity

```php
$neon_auth_config = $client->NeonAuthConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The application name used in auth emails and communications. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NeonAuthConfig()->update([
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthConfigEntity`

Create a new `NeonAuthConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthCreateIntegrationEntity

```php
$neon_auth_create_integration = $client->NeonAuthCreateIntegration();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->NeonAuthCreateIntegration()->create([
  "auth_provider" => null, // string
  "branch_id" => null, // string
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthCreateIntegrationEntity`

Create a new `NeonAuthCreateIntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthCreateNewUserEntity

```php
$neon_auth_create_new_user = $client->NeonAuthCreateNewUser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `email` | `string` | Yes | Email address of the new Neon Auth user to create. |
| `name` | `string` | No | Display name for the new user. |
| `project_id` | `string` | Yes | The Neon project ID. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->NeonAuthCreateNewUser()->create([
  "auth_provider" => null, // string
  "email" => null, // string
  "project_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthCreateNewUserEntity`

Create a new `NeonAuthCreateNewUserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthEmailAndPasswordConfigEntity

```php
$neon_auth_email_and_password_config = $client->NeonAuthEmailAndPasswordConfig();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NeonAuthEmailAndPasswordConfig()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NeonAuthEmailAndPasswordConfig()->update([
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthEmailAndPasswordConfigEntity`

Create a new `NeonAuthEmailAndPasswordConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthEmailServerConfigEntity

```php
$neon_auth_email_server_config = $client->NeonAuthEmailServerConfig();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NeonAuthEmailServerConfig()->update([
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthEmailServerConfigEntity`

Create a new `NeonAuthEmailServerConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthIntegrationEntity

```php
$neon_auth_integration = $client->NeonAuthIntegration();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NeonAuthIntegration()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NeonAuthIntegration()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthIntegrationEntity`

Create a new `NeonAuthIntegrationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthMagicLinkConfigEntity

```php
$neon_auth_magic_link_config = $client->NeonAuthMagicLinkConfig();
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

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NeonAuthMagicLinkConfig()->update([
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthMagicLinkConfigEntity`

Create a new `NeonAuthMagicLinkConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthOauthProviderEntity

```php
$neon_auth_oauth_provider = $client->NeonAuthOauthProvider();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->NeonAuthOauthProvider()->create([
  "project_id" => null, // string
  "id" => null, // string
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NeonAuthOauthProvider()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NeonAuthOauthProvider()->update([
  "id" => "id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthOauthProviderEntity`

Create a new `NeonAuthOauthProviderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthOrganizationConfigEntity

```php
$neon_auth_organization_config = $client->NeonAuthOrganizationConfig();
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

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NeonAuthOrganizationConfig()->update([
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthOrganizationConfigEntity`

Create a new `NeonAuthOrganizationConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthPhoneNumberConfigEntity

```php
$neon_auth_phone_number_config = $client->NeonAuthPhoneNumberConfig();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NeonAuthPhoneNumberConfig()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NeonAuthPhoneNumberConfig()->update([
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthPhoneNumberConfigEntity`

Create a new `NeonAuthPhoneNumberConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthPluginConfigEntity

```php
$neon_auth_plugin_config = $client->NeonAuthPluginConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `string` | No | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `string` | No | OAuth client secret for the provider. |
| `id` | `string` | Yes | The OAuth provider's ID. |
| `type` | `string` | Yes | OAuth provider key type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NeonAuthPluginConfig()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthPluginConfigEntity`

Create a new `NeonAuthPluginConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthRedirectUriWhitelistDomainEntity

```php
$neon_auth_redirect_uri_whitelist_domain = $client->NeonAuthRedirectUriWhitelistDomain();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | Yes | Allowed redirect URI domain for the auth provider. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NeonAuthRedirectUriWhitelistDomain()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthRedirectUriWhitelistDomainEntity`

Create a new `NeonAuthRedirectUriWhitelistDomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthTransferAuthProviderProjectEntity

```php
$neon_auth_transfer_auth_provider_project = $client->NeonAuthTransferAuthProviderProject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `project_id` | `string` | Yes | The Neon project ID. |
| `url` | `string` | Yes | URL for completing the process of ownership transfer |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->NeonAuthTransferAuthProviderProject()->create([
  "auth_provider" => null, // string
  "project_id" => null, // string
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthTransferAuthProviderProjectEntity`

Create a new `NeonAuthTransferAuthProviderProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonAuthWebhookConfigEntity

```php
$neon_auth_webhook_config = $client->NeonAuthWebhookConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Whether the webhook is active. |
| `enabled_events` | `array` | No | Event types that trigger this webhook. |
| `timeout_seconds` | `int` | No | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | `string` | No | Destination URL that receives webhook event payloads. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NeonAuthWebhookConfig()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NeonAuthWebhookConfig()->update([
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonAuthWebhookConfigEntity`

Create a new `NeonAuthWebhookConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonFunctionEntity

```php
$neon_function = $client->NeonFunction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_deployment` | `mixed` | No | The most recent deployment whose build completed successfully. |
| `created_at` | `string` | Yes |  |
| `current_deployment` | `mixed` | No | The most recent deployment, regardless of build status. |
| `id` | `string` | Yes | Opaque, stable function identifier. |
| `invocation_url` | `string` | Yes | URL at which the function is invoked. |
| `name` | `string` | Yes | Free-form display name. |
| `slug` | `string` | Yes | Branch-unique, lowercase DNS-label. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NeonFunction()->load(["id" => "neon_function_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NeonFunction()->update([
  "id" => "neon_function_id",
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonFunctionEntity`

Create a new `NeonFunctionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NeonFunctionDeploymentEntity

```php
$neon_function_deployment = $client->NeonFunctionDeployment();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->NeonFunctionDeployment()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "slug" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NeonFunctionDeploymentEntity`

Create a new `NeonFunctionDeploymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OperationEntity

```php
$operation = $client->Operation();
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
| `operations` | `array` | Yes |  |
| `pagination` | `array` | Yes | Cursor-based pagination. |
| `project_id` | `string` | Yes | The ID of the project this operation ran on. |
| `retry_at` | `string` | No | A timestamp indicating when the operation was last retried |
| `status` | `string` | Yes | Current lifecycle state of the operation. |
| `total_duration_ms` | `int` | Yes | The total duration of the operation in milliseconds |
| `updated_at` | `string` | Yes | A timestamp indicating when the operation status was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Operation()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "action" => null, // string
  "created_at" => null, // string
  "failures_count" => null, // int
  "id" => null, // string
  "operations" => null, // array
  "pagination" => null, // array
  "status" => null, // string
  "total_duration_ms" => null, // int
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Operation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Operation()->load(["id" => "operation_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OperationEntity`

Create a new `OperationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrgApiKeyCreateEntity

```php
$org_api_key_create = $client->OrgApiKeyCreate();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrgApiKeyCreate()->create([
  "organization_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrgApiKeyCreateEntity`

Create a new `OrgApiKeyCreateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrgApiKeyRevokeEntity

```php
$org_api_key_revoke = $client->OrgApiKeyRevoke();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->OrgApiKeyRevoke()->remove(["key_id" => 1, "organization_id" => "organization_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrgApiKeyRevokeEntity`

Create a new `OrgApiKeyRevokeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrgApiKeysListResponseItemEntity

```php
$org_api_keys_list_response_item = $client->OrgApiKeysListResponseItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | A timestamp indicating when the API key was created |
| `created_by` | `array` | Yes | The user data of the user that created this API key. |
| `id` | `int` | Yes | The API key's unique numeric ID. |
| `last_used_at` | `string` | No | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `string` | Yes | The IP address from which the API key was last used |
| `name` | `string` | Yes | The user-specified API key name |
| `project_id` | `string` | No | If set, the API key can access only this project |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrgApiKeysListResponseItem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrgApiKeysListResponseItemEntity`

Create a new `OrgApiKeysListResponseItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationEntity

```php
$organization = $client->Organization();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Organization()->create([
  "id" => null, // string
  "region_id" => null, // string
  "vpc_endpoint_id" => null, // string
  "created_at" => null, // string
  "handle" => null, // string
  "label" => null, // string
  "managed_by" => null, // string
  "name" => null, // string
  "plan" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Organization()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Organization()->load(["id" => "organization_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Organization()->remove(["id" => "organization_id", "region_id" => "region_id", "vpc_endpoint_id" => "vpc_endpoint_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationEntity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationInvitationEntity

```php
$organization_invitation = $client->OrganizationInvitation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | Email of the invited user |
| `id` | `string` | Yes | The invitation ID. |
| `invitations` | `array` | Yes | List of pending invitations for the organization. |
| `invited_at` | `string` | Yes | Timestamp when the invitation was created |
| `invited_by` | `string` | Yes | UUID for the user_id who extended the invitation |
| `org_id` | `string` | Yes | Organization id as it is stored in Neon |
| `role` | `string` | Yes | Organization member's role. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationInvitation()->create([
  "id" => null, // string
  "email" => null, // string
  "invitations" => null, // array
  "invited_at" => null, // string
  "invited_by" => null, // string
  "org_id" => null, // string
  "role" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationInvitation()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationInvitationEntity`

Create a new `OrganizationInvitationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PresignEntity

```php
$presign = $client->Presign();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | No | The `Content-Type` to bind into the signed request. |
| `expires_in_seconds` | `int` | No | How long the presigned URL stays valid, in seconds. |
| `operation` | `string` | Yes | The transfer direction. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Presign()->create([
  "branch_id" => null, // string
  "bucket_id" => null, // string
  "object_key" => null, // string
  "project_id" => null, // string
  "operation" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PresignEntity`

Create a new `PresignEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectEntity

```php
$project = $client->Project();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_time_seconds` | `int` | Yes | Seconds. |
| `applications` | `array` | Yes | Map of project IDs to their installed applications. |
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
| `default_endpoint_settings` | `array` | No | A collection of settings for a Neon endpoint |
| `effective_project_permission` | `string` | No |  |
| `hipaa_enabled_at` | `string` | No | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | `int` | Yes | The number of seconds to retain the shared history for all branches in this project. |
| `id` | `string` | Yes | The Neon project ID. |
| `integrations` | `array` | Yes | Map of project IDs to their associated integration details. |
| `label` | `string` | Yes | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | `string` | No | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | `string` | No | A timestamp indicating when project maintenance begins. |
| `name` | `string` | Yes | The project name |
| `org_id` | `string` | No | The Neon organization ID. |
| `owner` | `array` | Yes | Ownership details for the project, including the owner's name and email. |
| `owner_id` | `string` | Yes | ID of the organization that owns the project. |
| `pagination` | `array` | Yes | Cursor-based pagination. |
| `pg_version` | `int` | Yes | The major Postgres version number. |
| `platform_id` | `string` | Yes | The cloud platform identifier. |
| `project` | `array` | Yes | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `projects` | `array` | Yes | List of projects accessible to the caller. |
| `provisioner` | `string` | Yes | Compute provisioner. |
| `proxy_host` | `string` | Yes | The proxy host for the project. |
| `quota_reset_at` | `string` | No | Deprecated. |
| `region_id` | `string` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `array` | No | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | `bool` | Yes | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | `int` | No | The current space occupied by the project in Postgres storage, in bytes. |
| `unavailable_project_ids` | `array` | No | A list of project IDs indicating which projects are known to exist, but whose details could not be fetched within the requested (or implicit) time limit |
| `updated_at` | `string` | Yes | A timestamp indicating when the project was last updated |
| `written_data_bytes` | `int` | Yes | Bytes. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Project()->create([
  "id" => null, // string
  "vpc_endpoint_id" => null, // string
  "active_time_seconds" => null, // int
  "applications" => null, // array
  "branch_logical_size_limit" => null, // int
  "branch_logical_size_limit_bytes" => null, // int
  "compute_time_seconds" => null, // int
  "consumption_period_end" => null, // string
  "consumption_period_start" => null, // string
  "cpu_used_sec" => null, // int
  "created_at" => null, // string
  "creation_source" => null, // string
  "data_storage_bytes_hour" => null, // int
  "data_transfer_bytes" => null, // int
  "history_retention_seconds" => null, // int
  "integrations" => null, // array
  "label" => null, // string
  "name" => null, // string
  "owner" => null, // array
  "owner_id" => null, // string
  "pagination" => null, // array
  "pg_version" => null, // int
  "platform_id" => null, // string
  "project" => null, // array
  "projects" => null, // array
  "provisioner" => null, // string
  "proxy_host" => null, // string
  "region_id" => null, // string
  "store_passwords" => null, // bool
  "updated_at" => null, // string
  "written_data_bytes" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Project()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->load(["id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Project()->remove(["id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Project()->update([
  "id" => "project_id",
  "request_id" => "request_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectEntity`

Create a new `ProjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectBranchLogFieldEntity

```php
$project_branch_log_field = $client->ProjectBranchLogField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `array` | Yes | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectBranchLogField()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectBranchLogFieldEntity`

Create a new `ProjectBranchLogFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectBranchLogFieldValueEntity

```php
$project_branch_log_field_value = $client->ProjectBranchLogFieldValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `is_truncated` | `bool` | Yes | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectBranchLogFieldValue()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectBranchLogFieldValueEntity`

Create a new `ProjectBranchLogFieldValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectBranchLogsQueryEntity

```php
$project_branch_logs_query = $client->ProjectBranchLogsQuery();
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
| `logs` | `array` | Yes |  |
| `minimum_severity` | `string` | No | An OpenTelemetry severity level. |
| `next_cursor` | `string` | No | Pagination cursor to pass as `cursor` on the next request. |
| `scope_name` | `string` | No | Match the OpenTelemetry instrumentation scope name exactly. |
| `service_name` | `string` | No | Match the OpenTelemetry `service.name` resource attribute exactly. |
| `severity_text` | `string` | No | Match the OpenTelemetry severity text exactly. |
| `since` | `mixed` | No | Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted. |
| `sort_order` | `string` | No | Order matching records by timestamp. |
| `source` | `string` | No | The Neon service that emitted the log record. |
| `start_time` | `string` | No | Inclusive beginning of the query window. |
| `trace_id` | `string` | No | Match records associated with this OpenTelemetry trace ID. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectBranchLogsQuery()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "is_truncated" => null, // bool
  "logs" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectBranchLogsQueryEntity`

Create a new `ProjectBranchLogsQueryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectMemberEntity

```php
$project_member = $client->ProjectMember();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectMember()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectMemberEntity`

Create a new `ProjectMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectMemberRoleEntity

```php
$project_member_role = $client->ProjectMemberRole();
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

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectMemberRole()->remove(["member_id" => "member_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProjectMemberRole()->update([
  "member_id" => "member_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectMemberRoleEntity`

Create a new `ProjectMemberRoleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectPermissionEntity

```php
$project_permission = $client->ProjectPermission();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectPermission()->create([
  "id" => null, // string
  "email" => null, // string
  "granted_at" => null, // string
  "granted_to_email" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProjectPermission()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProjectPermission()->remove(["id" => "id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectPermissionEntity`

Create a new `ProjectPermissionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectRecoverEntity

```php
$project_recover = $client->ProjectRecover();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branches` | `array` | Yes | Branches in the project. |
| `id` | `string` | No |  |
| `project` | `array` | Yes | Full details of the project, including configuration, consumption metrics, and ownership. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectRecover()->create([
  "id" => null, // string
  "branches" => null, // array
  "project" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectRecoverEntity`

Create a new `ProjectRecoverEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProjectTransferRequestEntity

```php
$project_transfer_request = $client->ProjectTransferRequest();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `ttl_seconds` | `int` | No | Number of seconds the transfer request stays valid before it expires. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProjectTransferRequest()->create([
  "id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProjectTransferRequestEntity`

Create a new `ProjectTransferRequestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RegionEntity

```php
$region = $client->Region();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Region()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RegionEntity`

Create a new `RegionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RoleEntity

```php
$role = $client->Role();
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
| `role` | `array` | Yes | Properties of the role to create. |
| `updated_at` | `string` | Yes | A timestamp indicating when the role was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Role()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "created_at" => null, // string
  "name" => null, // string
  "role" => null, // array
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Role()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Role()->load(["id" => "role_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Role()->remove(["id" => "role_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RoleEntity`

Create a new `RoleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RoleOperationEntity

```php
$role_operation = $client->RoleOperation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `operations` | `array` | Yes |  |
| `role` | `array` | Yes | Role details for the requested database role. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RoleOperation()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "role_name" => null, // string
  "operations" => null, // array
  "role" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RoleOperationEntity`

Create a new `RoleOperationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RolePasswordEntity

```php
$role_password = $client->RolePassword();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `password` | `string` | Yes | The role password |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RolePassword()->load(["branch_id" => "branch_id", "project_id" => "project_id", "role_name" => "role_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RolePasswordEntity`

Create a new `RolePasswordEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SendNeonAuthTestEmailEntity

```php
$send_neon_auth_test_email = $client->SendNeonAuthTestEmail();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SendNeonAuthTestEmail()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "host" => null, // string
  "password" => null, // string
  "port" => null, // int
  "recipient_email" => null, // string
  "sender_email" => null, // string
  "sender_name" => null, // string
  "success" => null, // bool
  "username" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SendNeonAuthTestEmailEntity`

Create a new `SendNeonAuthTestEmailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SnapshotEntity

```php
$snapshot = $client->Snapshot();
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
| `operations` | `array` | Yes |  |
| `slug` | `string` | No | Snapshot resource ID, unique within the project. |
| `snapshot` | `array` | Yes | Fields to update on the snapshot. |
| `source_branch_id` | `string` | No | Branch from which this snapshot was created. |
| `timestamp` | `string` | No | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Snapshot()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "created_at" => null, // string
  "id" => null, // string
  "operations" => null, // array
  "snapshot" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Snapshot()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Snapshot()->remove(["id" => "id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Snapshot()->update([
  "id" => "id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SnapshotEntity`

Create a new `SnapshotEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SpendingLimitEntity

```php
$spending_limit = $client->SpendingLimit();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `spending_limit_cents` | `int` | Yes | Monthly spending cap in cents. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SpendingLimit()->load(["organization_id" => "organization_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SpendingLimit()->update([
  "organization_id" => "organization_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SpendingLimitEntity`

Create a new `SpendingLimitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TriggerEntity

```php
$trigger = $client->Trigger();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `triggers` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Trigger()->create([
  "branch_id" => null, // string
  "project_id" => null, // string
  "triggers" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Trigger()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Trigger()->load(["id" => "trigger_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Trigger()->update([
  "id" => "trigger_id",
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TriggerEntity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UpdateNeonAuthUserRoleEntity

```php
$update_neon_auth_user_role = $client->UpdateNeonAuthUserRole();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | ID of the updated user |
| `roles` | `array` | Yes | Roles to assign to the user in the Neon Auth (Better Auth) directory. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UpdateNeonAuthUserRole()->update([
  "branch_id" => "branch_id",
  "project_id" => "project_id",
  "user_id" => "user_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UpdateNeonAuthUserRoleEntity`

Create a new `UpdateNeonAuthUserRoleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VpcEndpointEntity

```php
$vpc_endpoint = $client->VpcEndpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `example_restricted_projects` | `array` | Yes | A list of example projects that are restricted to use this VPC endpoint. |
| `id` | `string` | No |  |
| `label` | `string` | Yes | A descriptive label for the VPC endpoint |
| `num_restricted_projects` | `int` | Yes | The number of projects that are restricted to use this VPC endpoint. |
| `region_id` | `string` | Yes | The region where the VPC endpoint is located |
| `state` | `string` | Yes | The current state of the VPC endpoint. |
| `vpc_endpoint_id` | `string` | Yes | Cloud provider identifier for the VPC endpoint. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->VpcEndpoint()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->VpcEndpoint()->load(["id" => "vpc_endpoint_id", "organization_id" => "organization_id", "region_id" => "region_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VpcEndpointEntity`

Create a new `VpcEndpointEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new NeonSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

