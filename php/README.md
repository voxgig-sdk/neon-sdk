# Neon PHP SDK



The PHP SDK for the Neon API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Anonymize()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/neon-sdk/releases)), or
from a clone as a Composer path repository:

```bash
git clone https://github.com/voxgig-sdk/neon-sdk
composer config repositories.neon-sdk path ./neon-sdk/php
composer require voxgig-sdk/neon-sdk:@dev
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'neon_sdk.php';

$client = new NeonSDK([
    "apikey" => getenv("NEON_APIKEY"),
]);
```

### 3. Load an anonymizedbranchstatus

AnonymizedBranchStatus is nested under branch, so provide the `branch_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the AnonymizedBranchStatus record (throws on error).
    $anonymizedbranchstatus = $client->AnonymizedBranchStatus()->load(["branch_id" => "example_branch_id", "project_id" => "example_project_id"]);
    print_r($anonymizedbranchstatus->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created Anonymize record.
$created = $client->Anonymize()->create(["branch_id" => "example_branch_id", "project_id" => "example_project_id", "created_at" => "example_created_at", "state" => "example_state", "updated_at" => "example_updated_at"]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $branchstorage = $client->BranchStorage()->load(["id" => "example_id", "project_id" => "example"]);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = NeonSDK::test([
    "entity" => ["database" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$database = $client->Database()->list();
print_r(array_map(fn($item) => $item->data_get(), $database));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new NeonSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
NEON_TEST_LIVE=TRUE
NEON_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### NeonSDK

```php
require_once 'neon_sdk.php';
$client = new NeonSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = NeonSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### NeonSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Anonymize` | `($data): AnonymizeEntity` | Create an Anonymize entity instance. |
| `AnonymizedBranchStatus` | `($data): AnonymizedBranchStatusEntity` | Create an AnonymizedBranchStatus entity instance. |
| `ApiKey` | `($data): ApiKeyEntity` | Create an ApiKey entity instance. |
| `Auth` | `($data): AuthEntity` | Create an Auth entity instance. |
| `AuthLegacy` | `($data): AuthLegacyEntity` | Create an AuthLegacy entity instance. |
| `AvailablePreloadLibrary` | `($data): AvailablePreloadLibraryEntity` | Create an AvailablePreloadLibrary entity instance. |
| `BackupSchedule` | `($data): BackupScheduleEntity` | Create a BackupSchedule entity instance. |
| `Branch` | `($data): BranchEntity` | Create a Branch entity instance. |
| `BranchAiGateway` | `($data): BranchAiGatewayEntity` | Create a BranchAiGateway entity instance. |
| `BranchOperation` | `($data): BranchOperationEntity` | Create a BranchOperation entity instance. |
| `BranchSchema` | `($data): BranchSchemaEntity` | Create a BranchSchema entity instance. |
| `BranchSchemaCompare` | `($data): BranchSchemaCompareEntity` | Create a BranchSchemaCompare entity instance. |
| `BranchStorage` | `($data): BranchStorageEntity` | Create a BranchStorage entity instance. |
| `Bucket` | `($data): BucketEntity` | Create a Bucket entity instance. |
| `BucketObjectsList` | `($data): BucketObjectsListEntity` | Create a BucketObjectsList entity instance. |
| `ConnectionUri` | `($data): ConnectionUriEntity` | Create a ConnectionUri entity instance. |
| `Consumption` | `($data): ConsumptionEntity` | Create a Consumption entity instance. |
| `CreateCredential` | `($data): CreateCredentialEntity` | Create a CreateCredential entity instance. |
| `Credential` | `($data): CredentialEntity` | Create a Credential entity instance. |
| `CurrentUserInfo` | `($data): CurrentUserInfoEntity` | Create a CurrentUserInfo entity instance. |
| `CustomDomain` | `($data): CustomDomainEntity` | Create a CustomDomain entity instance. |
| `DataApi` | `($data): DataApiEntity` | Create a DataApi entity instance. |
| `Database` | `($data): DatabaseEntity` | Create a Database entity instance. |
| `EmailProvider` | `($data): EmailProviderEntity` | Create an EmailProvider entity instance. |
| `EmailServer` | `($data): EmailServerEntity` | Create an EmailServer entity instance. |
| `Empty` | `($data): EmptyEntity` | Create an Empty entity instance. |
| `Endpoint` | `($data): EndpointEntity` | Create an Endpoint entity instance. |
| `EndpointOperation` | `($data): EndpointOperationEntity` | Create an EndpointOperation entity instance. |
| `Function` | `($data): FunctionEntity` | Create a Function entity instance. |
| `Jwk` | `($data): JwkEntity` | Create a Jwk entity instance. |
| `MaskingRule` | `($data): MaskingRuleEntity` | Create a MaskingRule entity instance. |
| `Member` | `($data): MemberEntity` | Create a Member entity instance. |
| `NeonAuthAllowLocalhost` | `($data): NeonAuthAllowLocalhostEntity` | Create a NeonAuthAllowLocalhost entity instance. |
| `NeonAuthConfig` | `($data): NeonAuthConfigEntity` | Create a NeonAuthConfig entity instance. |
| `NeonAuthCreateIntegration` | `($data): NeonAuthCreateIntegrationEntity` | Create a NeonAuthCreateIntegration entity instance. |
| `NeonAuthCreateNewUser` | `($data): NeonAuthCreateNewUserEntity` | Create a NeonAuthCreateNewUser entity instance. |
| `NeonAuthEmailAndPasswordConfig` | `($data): NeonAuthEmailAndPasswordConfigEntity` | Create a NeonAuthEmailAndPasswordConfig entity instance. |
| `NeonAuthEmailServerConfig` | `($data): NeonAuthEmailServerConfigEntity` | Create a NeonAuthEmailServerConfig entity instance. |
| `NeonAuthIntegration` | `($data): NeonAuthIntegrationEntity` | Create a NeonAuthIntegration entity instance. |
| `NeonAuthMagicLinkConfig` | `($data): NeonAuthMagicLinkConfigEntity` | Create a NeonAuthMagicLinkConfig entity instance. |
| `NeonAuthOauthProvider` | `($data): NeonAuthOauthProviderEntity` | Create a NeonAuthOauthProvider entity instance. |
| `NeonAuthOrganizationConfig` | `($data): NeonAuthOrganizationConfigEntity` | Create a NeonAuthOrganizationConfig entity instance. |
| `NeonAuthPhoneNumberConfig` | `($data): NeonAuthPhoneNumberConfigEntity` | Create a NeonAuthPhoneNumberConfig entity instance. |
| `NeonAuthPluginConfig` | `($data): NeonAuthPluginConfigEntity` | Create a NeonAuthPluginConfig entity instance. |
| `NeonAuthRedirectUriWhitelistDomain` | `($data): NeonAuthRedirectUriWhitelistDomainEntity` | Create a NeonAuthRedirectUriWhitelistDomain entity instance. |
| `NeonAuthTransferAuthProviderProject` | `($data): NeonAuthTransferAuthProviderProjectEntity` | Create a NeonAuthTransferAuthProviderProject entity instance. |
| `NeonAuthWebhookConfig` | `($data): NeonAuthWebhookConfigEntity` | Create a NeonAuthWebhookConfig entity instance. |
| `NeonFunction` | `($data): NeonFunctionEntity` | Create a NeonFunction entity instance. |
| `NeonFunctionDeployment` | `($data): NeonFunctionDeploymentEntity` | Create a NeonFunctionDeployment entity instance. |
| `Operation` | `($data): OperationEntity` | Create an Operation entity instance. |
| `OrgApiKeyCreate` | `($data): OrgApiKeyCreateEntity` | Create an OrgApiKeyCreate entity instance. |
| `OrgApiKeyRevoke` | `($data): OrgApiKeyRevokeEntity` | Create an OrgApiKeyRevoke entity instance. |
| `OrgApiKeysListResponseItem` | `($data): OrgApiKeysListResponseItemEntity` | Create an OrgApiKeysListResponseItem entity instance. |
| `Organization` | `($data): OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationInvitation` | `($data): OrganizationInvitationEntity` | Create an OrganizationInvitation entity instance. |
| `Presign` | `($data): PresignEntity` | Create a Presign entity instance. |
| `Project` | `($data): ProjectEntity` | Create a Project entity instance. |
| `ProjectBranchLogField` | `($data): ProjectBranchLogFieldEntity` | Create a ProjectBranchLogField entity instance. |
| `ProjectBranchLogFieldValue` | `($data): ProjectBranchLogFieldValueEntity` | Create a ProjectBranchLogFieldValue entity instance. |
| `ProjectBranchLogsQuery` | `($data): ProjectBranchLogsQueryEntity` | Create a ProjectBranchLogsQuery entity instance. |
| `ProjectMember` | `($data): ProjectMemberEntity` | Create a ProjectMember entity instance. |
| `ProjectMemberRole` | `($data): ProjectMemberRoleEntity` | Create a ProjectMemberRole entity instance. |
| `ProjectPermission` | `($data): ProjectPermissionEntity` | Create a ProjectPermission entity instance. |
| `ProjectRecover` | `($data): ProjectRecoverEntity` | Create a ProjectRecover entity instance. |
| `ProjectTransferRequest` | `($data): ProjectTransferRequestEntity` | Create a ProjectTransferRequest entity instance. |
| `Region` | `($data): RegionEntity` | Create a Region entity instance. |
| `Role` | `($data): RoleEntity` | Create a Role entity instance. |
| `RoleOperation` | `($data): RoleOperationEntity` | Create a RoleOperation entity instance. |
| `RolePassword` | `($data): RolePasswordEntity` | Create a RolePassword entity instance. |
| `SendNeonAuthTestEmail` | `($data): SendNeonAuthTestEmailEntity` | Create a SendNeonAuthTestEmail entity instance. |
| `Snapshot` | `($data): SnapshotEntity` | Create a Snapshot entity instance. |
| `SpendingLimit` | `($data): SpendingLimitEntity` | Create a SpendingLimit entity instance. |
| `Trigger` | `($data): TriggerEntity` | Create a Trigger entity instance. |
| `UpdateNeonAuthUserRole` | `($data): UpdateNeonAuthUserRoleEntity` | Create an UpdateNeonAuthUserRole entity instance. |
| `VpcEndpoint` | `($data): VpcEndpointEntity` | Create a VpcEndpoint entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Anonymize

| Field | Description |
| --- | --- |
| `branch_id` | The ID of the anonymized branch. |
| `created_at` | A timestamp indicating when the anonymized branch was created |
| `failed_at` | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | The ID of the project this branch belongs to. |
| `state` | The current state of the anonymized branch. |
| `status_message` | A descriptive message about the current status or any errors |
| `updated_at` | A timestamp indicating when the anonymized branch status was last updated |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/anonymize`

#### AnonymizedBranchStatus

| Field | Description |
| --- | --- |
| `branch_id` | The ID of the anonymized branch. |
| `created_at` | A timestamp indicating when the anonymized branch was created |
| `failed_at` | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | The ID of the project this branch belongs to. |
| `state` | The current state of the anonymized branch. |
| `status_message` | A descriptive message about the current status or any errors |
| `updated_at` | A timestamp indicating when the anonymized branch status was last updated |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/anonymized_status`

#### ApiKey

| Field | Description |
| --- | --- |
| `created_at` | A timestamp indicating when the API key was created |
| `created_by` | ID of the user who created this API key |
| `id` | The API key's unique numeric ID. |
| `key` | The generated 64-bit token required to access the Neon API |
| `key_name` | A user-specified API key name. |
| `last_used_at` | A timestamp indicating when the API was last used |
| `last_used_from_addr` | The IP address from which the API key was last used |
| `name` | The user-specified API key name |

Operations: Create, List, Remove.

API path: `/api_keys`

#### Auth

| Field | Description |
| --- | --- |
| `account_id` | The ID of the account associated with this authentication record. |
| `auth_data` |  |
| `auth_method` | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

Operations: Create, Load, Remove.

API path: `/projects/{project_id}/branches/{branch_id}/auth/domains`

#### AuthLegacy

| Field | Description |
| --- | --- |
| `auth_provider` | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | URI to add to the redirect URI allowlist for the auth provider. |

Operations: Create, Remove.

API path: `/projects/{project_id}/auth/domains`

#### AvailablePreloadLibrary

| Field | Description |
| --- | --- |
| `description` | Human-readable explanation of the library's purpose and behavior. |
| `is_default` | Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints. |
| `is_experimental` | Marks the library as experimental. |
| `library_name` | Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`). |
| `version` | Version of the preload library. |

Operations: List.

API path: `/projects/{project_id}/available_preload_libraries`

#### BackupSchedule

| Field | Description |
| --- | --- |
| `day` | The day of the week or month to take the snapshot (if applicable). |
| `frequency` | How often to take snapshots. |
| `hour` | The hour of the day to take the snapshot (if applicable). |
| `month` | The month of the year to take the snapshot (if applicable). |
| `retention_seconds` | How long to keep a scheduled snapshot (in seconds) before it's automatically deleted. |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/backup_schedule`

#### Branch

| Field | Description |
| --- | --- |
| `active_time_seconds` | Total time this branch's compute has been active during the current billing period, in seconds (not weighted by compute size). |
| `annotation` | Annotation data associated with the annotated object. |
| `branch` | Branch returned by the request. |
| `compute_time_seconds` | Total Postgres compute time consumed by this branch during the current billing period, in CU-seconds (weighted by compute size). |
| `cpu_used_sec` | Deprecated. |
| `created_at` | A timestamp indicating when the branch was created |
| `created_by` | The resolved user model that contains details of the user/org/integration/api_key used for branch creation. |
| `creation_source` | The branch creation source |
| `current_state` | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `data_transfer_bytes` | Total data transferred out of the branch, in bytes. |
| `default` | Whether the branch is the project's default branch |
| `expires_at` | The timestamp when the branch is scheduled to expire and be automatically deleted. |
| `id` | The branch ID. |
| `init_source` | Source of initialization for the branch. |
| `last_reset_at` | A timestamp indicating when the branch was last reset |
| `logical_size` | The logical size of the branch, in bytes |
| `name` | The branch name |
| `parent_id` | The `branch_id` of the parent branch |
| `parent_lsn` | The Log Sequence Number (LSN) on the parent branch from which this branch was created. |
| `parent_timestamp` | The point in time on the parent branch from which this branch was created. |
| `pending_state` | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `primary` | Deprecated. |
| `project_id` | The ID of the project this branch belongs to. |
| `protected` | Whether the branch is protected. |
| `recovery` | Recovery information for a deleted branch. |
| `restore_status` | Could be `restored`, `finalized` or `detaching`. |
| `restored_as` | ID of the target branch which was replaced when this branch was restored |
| `restored_from` | ID of the snapshot that was the restore source for this branch |
| `restricted_actions` | A list of actions that are currently restricted for this branch and the reason why. |
| `state_changed_at` | A UTC timestamp indicating when the `current_state` began |
| `ttl_interval_seconds` | The time-to-live (TTL) duration originally configured for the branch, in seconds. |
| `updated_at` | A timestamp indicating when the branch was last updated |
| `written_data_bytes` | Data written by this branch during the current billing period, in bytes. |

Operations: Create, List, Load, Remove, Update.

API path: `/projects/{project_id}/branches`

#### BranchAiGateway

| Field | Description |
| --- | --- |
| `base_url` | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | Always `true` in 200 responses. |
| `id` |  |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/ai_gateway`

#### BranchOperation

| Field | Description |
| --- | --- |
| `branch` | Branch returned by the request. |
| `id` |  |
| `operations` |  |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/restore`

#### BranchSchema

| Field | Description |
| --- | --- |
| `id` |  |
| `json` | Branch schema represented as a structured JSON object, parallel to the SQL DDL in `sql`. |
| `sql` | Branch schema expressed as SQL DDL statements. |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/schema`

#### BranchSchemaCompare

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/compare_schema`

#### BranchStorage

| Field | Description |
| --- | --- |
| `enabled` | Always `true` in 200 responses. |
| `force_path_style` | Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). |
| `id` |  |
| `region` | The AWS region for this branch's object storage. |
| `s3_endpoint` | The S3-compatible endpoint URL for this branch. |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/storage`

#### Bucket

| Field | Description |
| --- | --- |
| `access_level` | Access level for the bucket. |
| `created_at` | When the bucket was created. |
| `id` |  |
| `name` | The bucket name. |

Operations: Create, List, Load, Remove.

API path: `/projects/{project_id}/branches/{branch_id}/buckets`

#### BucketObjectsList

| Field | Description |
| --- | --- |
| `etag` | The object's entity tag (content hash). |
| `key` | The full object key. |
| `last_modified` | The time the object was last modified. |
| `size` | The object size in bytes. |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects`

#### ConnectionUri

| Field | Description |
| --- | --- |
| `uri` | The connection URI. |

Operations: Load.

API path: `/projects/{project_id}/connection_uri`

#### Consumption

| Field | Description |
| --- | --- |
| `branch_id` | The Neon branch ID. |
| `periods` | Consumption history records for the branch, grouped by billing period. |
| `project_id` | The ID of the project that owns this branch. |

Operations: List.

API path: `/consumption_history/v2/branches`

#### CreateCredential

| Field | Description |
| --- | --- |
| `name` | Free-form customer label for the credential. |
| `principal_type` | Principal type for the credential. |
| `scopes` |  |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/credentials`

#### Credential

| Field | Description |
| --- | --- |
| `branch_id` |  |
| `created_at` |  |
| `expires_at` | When the credential expires; absent means never expires. |
| `function_id` |  |
| `id` |  |
| `last_used_at` |  |
| `name` | Customer-supplied label; absent when not provided at issuance. |
| `principal_type` |  |
| `revoked_at` |  |
| `scopes` |  |
| `token_id` | Opaque credential id (e.g. |
| `token_id_short` |  |

Operations: Create, List, Remove.

API path: `/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/reveal`

#### CurrentUserInfo

| Field | Description |
| --- | --- |
| `email` | Email address associated with this auth account. |
| `image` | URL of the user's profile picture as provided by the identity provider. |
| `login` | Deprecated. |
| `name` | Display name of the account as provided by the identity provider. |
| `provider` | Identity provider id from keycloak |

Operations: List.

API path: `/users/me`

#### CustomDomain

| Field | Description |
| --- | --- |
| `domain` | The custom domain to register (for example `dashboard.acme.com`). |
| `entity_id` | The target entity's identifier within the branch. |
| `entity_type` | The kind of branch entity to point the domain at. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/custom-domains`

#### DataApi

| Field | Description |
| --- | --- |
| `add_default_grants` | Grant all permissions to the tables in the public schema to authenticated users |
| `auth_provider` | Authentication provider for the Neon Data API. |
| `available_schemas` | List of available database schemas (SubZero only) |
| `id` |  |
| `jwks_url` | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `jwt_audience` | Expected `aud` claim in incoming JWTs. |
| `provider_name` | Display name for the authentication provider. |
| `settings` | Configuration settings for the Data API (SubZero only) |
| `skip_auth_schema` | Skip creating the auth schema and RLS functions |
| `status` | The status of the Neon Data API deployment |
| `url` | The URL of the Neon Data API |

Operations: Create, Load, Remove, Update.

API path: `/projects/{project_id}/branches/{branch_id}/data-api/{database_name}`

#### Database

| Field | Description |
| --- | --- |
| `branch_id` | The ID of the branch this database belongs to. |
| `created_at` | A timestamp indicating when the database was created |
| `database` | Configuration for the new Postgres database. |
| `id` | The database ID |
| `name` | The database name |
| `owner_name` | The name of role that owns the database |
| `updated_at` | A timestamp indicating when the database was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/projects/{project_id}/branches/{branch_id}/databases`

#### EmailProvider

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/auth/email_provider`

#### EmailServer

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/projects/{project_id}/auth/email_server`

#### Empty

| Field | Description |
| --- | --- |
| `destination_org_id` | The destination organization identifier |
| `project_ids` | The list of projects ids to transfer. |
| `schedule` | List of schedule entries defining the backup frequency. |

Operations: Create, Remove, Update.

API path: `/organizations/{source_org_id}/projects/transfer`

#### Endpoint

| Field | Description |
| --- | --- |
| `autoscaling_limit_max_cu` | The maximum number of Compute Units |
| `autoscaling_limit_min_cu` | The minimum number of Compute Units |
| `branch_id` | The ID of the branch this compute endpoint belongs to. |
| `compute_release_version` | Attached compute's release version number. |
| `created_at` | A timestamp indicating when the compute endpoint was created |
| `creation_source` | The compute endpoint creation source |
| `current_state` | Lifecycle state of the compute endpoint. |
| `disabled` | Whether to restrict connections to the compute endpoint. |
| `endpoint` | Configuration for the compute endpoint to create. |
| `host` | The hostname of the compute endpoint. |
| `id` | The compute endpoint ID. |
| `last_active` | A timestamp indicating when the compute endpoint was last active |
| `name` | Optional name of the compute endpoint |
| `passwordless_access` | Whether to permit passwordless access to the compute endpoint |
| `pending_state` | Target state the compute endpoint is transitioning to. |
| `pooler_enabled` | Deprecated. |
| `pooler_mode` | Deprecated. |
| `project_id` | The ID of the project this compute endpoint belongs to. |
| `provisioner` | Compute provisioner. |
| `proxy_host` | Deprecated. |
| `region_id` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | A collection of settings for a compute endpoint |
| `started_at` | A timestamp indicating when the compute endpoint was last started |
| `suspend_timeout_seconds` | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `suspended_at` | A timestamp indicating when the compute endpoint was last suspended |
| `type` | Compute endpoint type. |
| `updated_at` | A timestamp indicating when the compute endpoint was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/projects/{project_id}/endpoints`

#### EndpointOperation

| Field | Description |
| --- | --- |
| `endpoint` | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` |  |
| `operations` |  |

Operations: Create.

API path: `/projects/{project_id}/endpoints/{endpoint_id}/restart`

#### Function

| Field | Description |
| --- | --- |
| `active_deployment` | The most recent deployment whose build completed successfully. |
| `binding_status` | Whether Neon's internal routing for the domain is published: `pending`, `present`, or `missing`. |
| `cname_target` | The hostname the customer must point their custom domain at with a CNAME record. |
| `created_at` |  |
| `current_deployment` | The most recent deployment, regardless of build status. |
| `dns_status` | The DNS + CAA portion of the check: `pending` (no records yet), `ok` (resolves to our edge and the CA is authorized), `misconfigured` (your CNAME does not resolve to our edge), or `caa_blocked` (your CAA records forbid Let's Encrypt). |
| `domain` | The registered custom domain (normalized, lowercase). |
| `entity_id` | The target entity's identifier within the branch. |
| `entity_type` | The kind of branch entity the domain targets. |
| `id` | Opaque, stable function identifier. |
| `invocation_url` | URL at which the function is invoked. |
| `name` | Free-form display name. |
| `slug` | Branch-unique, lowercase DNS-label. |
| `status` | The domain's current validity, computed by a background check: `pending` (still converging — point your CNAME at `cname_target` and wait), `active` (live: DNS resolves to the edge, the CA is authorized, and routing is published), or `error… |
| `status_reason` | A short, stable machine-readable reason for a non-active `status` (e.g. |

Operations: List, Remove.

API path: `/projects/{project_id}/branches/{branch_id}/custom-domains`

#### Jwk

| Field | Description |
| --- | --- |
| `branch_id` | The Neon branch ID. |
| `created_at` | The date and time when the JWKS was created |
| `id` | The JWKS configuration's ID. |
| `jwks_url` | URL of the provider's JWKS endpoint used to verify JWTs. |
| `jwt_audience` | Expected `aud` claim in incoming JWTs. |
| `project_id` | The Neon project ID. |
| `provider_name` | The name of the authentication provider (e.g., Clerk, Stytch, Auth0) |
| `role_names` | Deprecated. |
| `skip_role_creation` | Deprecated. |
| `updated_at` | The date and time when the JWKS was last modified |

Operations: Create, List, Remove.

API path: `/projects/{project_id}/jwks`

#### MaskingRule

| Field | Description |
| --- | --- |
| `column_name` | The name of the column to be masked |
| `database_name` | The name of the database containing the table to be masked |
| `masking_function` | The PostgreSQL Anonymizer masking function to apply. |
| `masking_rules` | List of masking rules for the branch |
| `masking_value` | A literal value to set on the column when masking. |
| `schema_name` | The name of the schema containing the table to be masked |
| `table_name` | The name of the table containing the column to be masked |

Operations: List, Update.

API path: `/projects/{project_id}/branches/{branch_id}/masking_rules`

#### Member

| Field | Description |
| --- | --- |
| `id` | The organization member's ID. |
| `joined_at` | Timestamp when the user joined the organization. |
| `org_id` | The Neon organization ID. |
| `role` | Organization member's role. |
| `user_id` | The Neon user ID. |

Operations: Load, Remove, Update.

API path: `/organizations/{org_id}/members/{member_id}`

#### NeonAuthAllowLocalhost

| Field | Description |
| --- | --- |
| `allow_localhost` | Whether to allow localhost connections |

Operations: Load, Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/allow_localhost`

#### NeonAuthConfig

| Field | Description |
| --- | --- |
| `name` | The application name used in auth emails and communications. |

Operations: Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/config`

#### NeonAuthCreateIntegration

| Field | Description |
| --- | --- |
| `auth_provider` | Authentication provider integrated with this Neon Auth configuration. |
| `branch_id` | The Neon branch ID. |
| `database_name` | Name of the database to enable Neon Auth on. |
| `project_id` | The Neon project ID. |
| `role_name` | Deprecated. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/auth`

#### NeonAuthCreateNewUser

| Field | Description |
| --- | --- |
| `auth_provider` | Authentication provider integrated with this Neon Auth configuration. |
| `email` | Email address of the new Neon Auth user to create. |
| `name` | Display name for the new user. |
| `project_id` | The Neon project ID. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/auth/users`

#### NeonAuthEmailAndPasswordConfig

| Field | Description |
| --- | --- |
| `auto_sign_in_after_verification` | Whether users are automatically signed in after verifying their email |
| `disable_sign_up` | Whether to disable new user sign ups |
| `email_verification_method` | Controls how email addresses are verified during sign-up or sign-in. |
| `enabled` | Whether email and password authentication is enabled |
| `require_email_verification` | Whether email verification is required before users can sign in |
| `send_verification_email_on_sign_in` | Whether to send a verification email when users sign in |
| `send_verification_email_on_sign_up` | Whether to send a verification email when users sign up |

Operations: Load, Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/email_and_password`

#### NeonAuthEmailServerConfig

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/email_provider`

#### NeonAuthIntegration

| Field | Description |
| --- | --- |
| `auth_provider` | Authentication provider integrated with this Neon Auth configuration. |
| `auth_provider_project_id` | Project identifier assigned by the auth provider for this integration. |
| `base_url` | Base URL of the Neon Auth service endpoint for this integration. |
| `branch_id` | The Neon branch ID. |
| `created_at` | Timestamp when the Neon Auth integration was created, in RFC 3339 format (UTC). |
| `db_name` | Name of the database used by the Neon Auth integration. |
| `jwks_url` | URL of the provider's JWKS endpoint used to verify JWTs. |
| `name` | Application name shown in auth emails and communications. |
| `owned_by` | Owner of the auth provider project. |
| `transfer_status` | Ownership transfer state for the auth provider project. |

Operations: List, Load.

API path: `/projects/{project_id}/auth/integrations`

#### NeonAuthMagicLinkConfig

| Field | Description |
| --- | --- |
| `disable_sign_up` | Whether to disable sign-up via magic link. |
| `enabled` | Whether the magic link plugin is enabled. |
| `expires_in` | Minutes until the magic link expires. |

Operations: Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins/magic-link`

#### NeonAuthOauthProvider

| Field | Description |
| --- | --- |
| `client_id` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | OAuth client secret for the provider. |
| `id` | The OAuth provider's ID. |
| `microsoft_tenant_id` | Tenant ID for the Microsoft OAuth provider. |
| `type` | OAuth provider key type. |

Operations: Create, List, Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/oauth_providers`

#### NeonAuthOrganizationConfig

| Field | Description |
| --- | --- |
| `creator_role` | Role of the organization's creator. |
| `enabled` | Whether the organization plugin is enabled. |
| `membership_limit` | Maximum number of members per organization. |
| `organization_limit` | Maximum organizations a user can belong to (created or joined). |
| `send_invitation_email` | Whether to send invitation emails when inviting members to an organization. |

Operations: Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins/organization`

#### NeonAuthPhoneNumberConfig

| Field | Description |
| --- | --- |
| `enabled` | Whether the phone number plugin is enabled. |
| `otp_expires_in` | Time in seconds before the OTP expires |

Operations: Load, Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number`

#### NeonAuthPluginConfig

| Field | Description |
| --- | --- |
| `client_id` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | OAuth client secret for the provider. |
| `id` | The OAuth provider's ID. |
| `type` | OAuth provider key type. |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins`

#### NeonAuthRedirectUriWhitelistDomain

| Field | Description |
| --- | --- |
| `auth_provider` | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | Allowed redirect URI domain for the auth provider. |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/auth/domains`

#### NeonAuthTransferAuthProviderProject

| Field | Description |
| --- | --- |
| `auth_provider` | Authentication provider integrated with this Neon Auth configuration. |
| `project_id` | The Neon project ID. |
| `url` | URL for completing the process of ownership transfer |

Operations: Create.

API path: `/projects/auth/transfer_ownership`

#### NeonAuthWebhookConfig

| Field | Description |
| --- | --- |
| `enabled` | Whether the webhook is active. |
| `enabled_events` | Event types that trigger this webhook. |
| `timeout_seconds` | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | Destination URL that receives webhook event payloads. |

Operations: List, Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/webhooks`

#### NeonFunction

| Field | Description |
| --- | --- |
| `active_deployment` | The most recent deployment whose build completed successfully. |
| `created_at` |  |
| `current_deployment` | The most recent deployment, regardless of build status. |
| `id` | Opaque, stable function identifier. |
| `invocation_url` | URL at which the function is invoked. |
| `name` | Free-form display name. |
| `slug` | Branch-unique, lowercase DNS-label. |

Operations: Load, Update.

API path: `/projects/{project_id}/branches/{branch_id}/functions/{slug}`

#### NeonFunctionDeployment

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/functions/{slug}/deployments`

#### Operation

| Field | Description |
| --- | --- |
| `action` | The action performed by the operation |
| `branch_id` | The ID of the branch this operation ran on. |
| `created_at` | A timestamp indicating when the operation was created |
| `endpoint_id` | The ID of the compute endpoint this operation ran on. |
| `error` | Human-readable message describing why the operation failed. |
| `failures_count` | The number of times the operation failed |
| `id` | The operation ID |
| `name` | Name for the replaced branch. |
| `operations` |  |
| `project_id` | The ID of the project this operation ran on. |
| `retry_at` | A timestamp indicating when the operation was last retried |
| `status` | Current lifecycle state of the operation. |
| `total_duration_ms` | The total duration of the operation in milliseconds |
| `updated_at` | A timestamp indicating when the operation status was last updated |

Operations: Create, List, Load.

API path: `/projects/{project_id}/branches/{branch_id}/finalize_restore`

#### OrgApiKeyCreate

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `id` |  |
| `key` |  |
| `name` |  |

Operations: Create.

API path: `/organizations/{org_id}/api_keys`

#### OrgApiKeyRevoke

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/organizations/{org_id}/api_keys/{key_id}`

#### OrgApiKeysListResponseItem

| Field | Description |
| --- | --- |
| `created_at` | A timestamp indicating when the API key was created |
| `created_by` | The user data of the user that created this API key. |
| `id` | The API key's unique numeric ID. |
| `last_used_at` | A timestamp indicating when the API was last used |
| `last_used_from_addr` | The IP address from which the API key was last used |
| `name` | The user-specified API key name |
| `project_id` | If set, the API key can access only this project |

Operations: List.

API path: `/organizations/{org_id}/api_keys`

#### Organization

| Field | Description |
| --- | --- |
| `allow_hipaa_projects` | If true, allow account to mark projects as HIPAA |
| `created_at` | A timestamp indicting when the organization was created |
| `handle` | URL-safe identifier for the organization, used in API paths. |
| `id` | The Neon organization ID. |
| `label` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `managed_by` | Organizations created via the Console or the API are managed by `console`. |
| `name` | Human-readable display name of the organization. |
| `plan` | Billing plan for the organization, for example `free`, `launch`, or `scale`. |
| `require_mfa` | If true, all members must have MFA enabled to access this organization |
| `updated_at` | A timestamp indicating when the organization was updated |

Operations: Create, List, Load, Remove.

API path: `/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}`

#### OrganizationInvitation

| Field | Description |
| --- | --- |
| `email` | Email of the invited user |
| `id` | The invitation ID. |
| `invitations` | List of pending invitations for the organization. |
| `invited_at` | Timestamp when the invitation was created |
| `invited_by` | UUID for the user_id who extended the invitation |
| `org_id` | Organization id as it is stored in Neon |
| `role` | Organization member's role. |

Operations: Create, List.

API path: `/organizations/{org_id}/invitations`

#### Presign

| Field | Description |
| --- | --- |
| `content_type` | The `Content-Type` to bind into the signed request. |
| `expires_at` | When the presigned URL stops being valid. |
| `expires_in_seconds` | How long the presigned URL stays valid, in seconds. |
| `headers` | Headers the caller MUST send verbatim on the request (e.g. |
| `method` | The HTTP method to use against `url`: `PUT` for an upload, `GET` for a download. |
| `operation` | The transfer direction. |
| `url` | The presigned URL. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/presign`

#### Project

| Field | Description |
| --- | --- |
| `active_time` | Control plane observed endpoints of this project being active this amount of wall-clock time. |
| `active_time_seconds` | Seconds. |
| `branch_logical_size_limit` | The logical size limit for a branch. |
| `branch_logical_size_limit_bytes` | The logical size limit for a branch. |
| `compute_last_active_at` | The most recent time when any endpoint of this project was active. |
| `compute_time_seconds` | Seconds. |
| `consumption_period_end` | A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period. |
| `consumption_period_start` | A date-time indicating when Neon Cloud started measuring consumption for current consumption period. |
| `cpu_used_sec` | Deprecated. |
| `created_at` | A timestamp indicating when the project was created |
| `creation_source` | The project creation source |
| `data_storage_bytes_hour` | Bytes-Hour. |
| `data_transfer_bytes` | Bytes. |
| `default_endpoint_settings` | A collection of settings for a Neon endpoint |
| `deleted_at` | A timestamp indicating when the project was deleted |
| `effective_project_permission` |  |
| `hipaa_enabled_at` | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | The number of seconds to retain the shared history for all branches in this project. |
| `id` | The Neon project ID. |
| `label` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | A timestamp indicating when project maintenance begins. |
| `name` | The project name |
| `org_id` | The Neon organization ID. |
| `org_name` | Name of the organization that owns the project. |
| `owner` | Ownership details for the project, including the owner's name and email. |
| `owner_id` | ID of the organization that owns the project. |
| `pg_version` | The major Postgres version number. |
| `platform_id` | The cloud platform identifier. |
| `project` | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `provisioner` | Compute provisioner. |
| `proxy_host` | The proxy host for the project. |
| `quota_reset_at` | Deprecated. |
| `recoverable_until` | A timestamp indicating the project will be recoverable until this date and time. |
| `region_id` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | The current space occupied by the project in Postgres storage, in bytes. |
| `updated_at` | A timestamp indicating when the project was last updated |
| `written_data_bytes` | Bytes. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}`

#### ProjectBranchLogField

| Field | Description |
| --- | --- |
| `fields` | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/logs/fields`

#### ProjectBranchLogFieldValue

| Field | Description |
| --- | --- |
| `is_truncated` | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` |  |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/logs/fields/{field_name}/values`

#### ProjectBranchLogsQuery

| Field | Description |
| --- | --- |
| `body_contains` | Match records whose rendered `message` contains this case-sensitive substring. |
| `cursor` | Opaque pagination cursor returned as `next_cursor` by a previous call. |
| `end_time` | Exclusive end of the query window. |
| `is_truncated` | True when more records matched than were returned. |
| `limit` | Maximum number of log records to return per page. |
| `logql` | Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream. |
| `logs` |  |
| `minimum_severity` | An OpenTelemetry severity level. |
| `next_cursor` | Pagination cursor to pass as `cursor` on the next request. |
| `scope_name` | Match the OpenTelemetry instrumentation scope name exactly. |
| `service_name` | Match the OpenTelemetry `service.name` resource attribute exactly. |
| `severity_text` | Match the OpenTelemetry severity text exactly. |
| `since` | Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted. |
| `sort_order` | Order matching records by timestamp. |
| `source` | The Neon service that emitted the log record. |
| `start_time` | Inclusive beginning of the query window. |
| `trace_id` | Match records associated with this OpenTelemetry trace ID. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/logs/query`

#### ProjectMember

| Field | Description |
| --- | --- |
| `effective_project_permission` | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | The caller's effective permission for a project when per-project permissions are enabled. |
| `grant_source` | How a member's project access is granted. |
| `id` |  |
| `member_id` | The organization member ID. |
| `name` | The user's display name. |
| `org_default_project_permission` | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | Organization-level role used by project member role management. |
| `project_role` | Per-project role. |
| `user_id` | The user ID for the organization member. |

Operations: List.

API path: `/projects/{project_id}/members`

#### ProjectMemberRole

| Field | Description |
| --- | --- |
| `credential_rotation_recommended` | Hint that database credentials may need rotation after the role change. |
| `effective_project_permission` | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | The caller's effective permission for a project when per-project permissions are enabled. |
| `member_id` |  |
| `name` | The user's display name. |
| `org_api_key_rotation_recommended` | Hint that project-scoped org API keys created by the target user may need rotation. |
| `org_default_project_permission` | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | Organization-level role used by project member role management. |
| `project_id` |  |
| `project_role` | The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback. |
| `role` | Per-project role. |
| `user_id` |  |

Operations: Remove, Update.

API path: `/projects/{project_id}/members/{member_id}/role`

#### ProjectPermission

| Field | Description |
| --- | --- |
| `email` | Email address of the user to grant project access to. |
| `granted_at` | Timestamp when the permission was granted. |
| `granted_to_email` | Email address of the user who has been granted access to the project. |
| `id` | The project permission's ID. |
| `revoked_at` | Timestamp when the permission was revoked. |

Operations: Create, List, Remove.

API path: `/projects/{project_id}/permissions`

#### ProjectRecover

| Field | Description |
| --- | --- |
| `branches` | Branches in the project. |
| `id` |  |
| `project` | Full details of the project, including configuration, consumption metrics, and ownership. |

Operations: Create.

API path: `/projects/{project_id}/recover`

#### ProjectTransferRequest

| Field | Description |
| --- | --- |
| `id` |  |
| `ttl_seconds` | Number of seconds the transfer request stays valid before it expires. |

Operations: Create.

API path: `/projects/{project_id}/transfer_requests`

#### Region

| Field | Description |
| --- | --- |
| `default` | True if this region is selected by default when no region is specified during project creation. |
| `geo_lat` | The geographical latitude (approximate) for the region. |
| `geo_long` | The geographical longitude (approximate) for the region. |
| `name` | A short description of the region. |
| `region_id` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |

Operations: List.

API path: `/regions`

#### Role

| Field | Description |
| --- | --- |
| `authentication_method` | Authentication method configured for this role: `password`, `oauth`, or `no_login`. |
| `branch_id` | The ID of the branch this role belongs to. |
| `created_at` | A timestamp indicating when the role was created |
| `id` |  |
| `name` | Postgres role name within the branch. |
| `password` | The role password |
| `protected` | Whether or not the role is system-protected |
| `role` | Properties of the role to create. |
| `updated_at` | A timestamp indicating when the role was last updated |

Operations: Create, List, Load, Remove.

API path: `/projects/{project_id}/branches/{branch_id}/roles`

#### RoleOperation

| Field | Description |
| --- | --- |
| `operations` |  |
| `role` | Role details for the requested database role. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password`

#### RolePassword

| Field | Description |
| --- | --- |
| `password` | The role password |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reveal_password`

#### SendNeonAuthTestEmail

| Field | Description |
| --- | --- |
| `error_message` | The error message from the email server. |
| `host` | Hostname of the email server. |
| `password` | Password for authenticating with the SMTP server. |
| `port` | TCP port of the SMTP server. |
| `recipient_email` | The email address to send the test email to. |
| `sender_email` | Email address used as the From address on outgoing auth emails. |
| `sender_name` | Display name shown as the sender in outgoing emails. |
| `success` | Whether the test email was sent successfully. |
| `username` | Username for authenticating with the SMTP server. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/auth/email_provider/test`

#### Snapshot

| Field | Description |
| --- | --- |
| `created_at` | Timestamp when the snapshot was created, in RFC 3339 format (UTC). |
| `diff_size` | Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage. |
| `expires_at` | RFC 3339 timestamp when the snapshot expires and is eligible for deletion. |
| `full_size` | Full logical size of the snapshot in bytes at the time it was taken. |
| `id` | The snapshot ID. |
| `lsn` | WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`). |
| `manual` | True if the snapshot was created manually rather than by a schedule. |
| `name` | Human-readable label for the snapshot. |
| `operations` |  |
| `slug` | Snapshot resource ID, unique within the project. |
| `snapshot` | Fields to update on the snapshot. |
| `source_branch_id` | Branch from which this snapshot was created. |
| `timestamp` | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

Operations: Create, List, Remove, Update.

API path: `/projects/{project_id}/branches/{branch_id}/snapshot`

#### SpendingLimit

| Field | Description |
| --- | --- |
| `spending_limit_cents` | Monthly spending cap in cents. |

Operations: Load, Update.

API path: `/organizations/{org_id}/billing/spending_limit`

#### Trigger

| Field | Description |
| --- | --- |
| `id` |  |
| `triggers` |  |

Operations: Create, List, Load, Update.

API path: `/projects/{project_id}/branches/{branch_id}/triggers`

#### UpdateNeonAuthUserRole

| Field | Description |
| --- | --- |
| `id` | ID of the updated user |
| `roles` | Roles to assign to the user in the Neon Auth (Better Auth) directory. |

Operations: Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}/role`

#### VpcEndpoint

| Field | Description |
| --- | --- |
| `example_restricted_projects` | A list of example projects that are restricted to use this VPC endpoint. |
| `id` |  |
| `label` | A descriptive label for the VPC endpoint |
| `num_restricted_projects` | The number of projects that are restricted to use this VPC endpoint. |
| `region_id` | The region where the VPC endpoint is located |
| `state` | The current state of the VPC endpoint. |
| `vpc_endpoint_id` | Cloud provider identifier for the VPC endpoint. |

Operations: List, Load.

API path: `/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints`



## Entities


### Anonymize

Create an instance: `$anonymize = $client->Anonymize();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_id` | `string` | The ID of the anonymized branch. |
| `created_at` | `string` | A timestamp indicating when the anonymized branch was created |
| `failed_at` | `string` | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | `array` | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | `string` | The ID of the project this branch belongs to. |
| `state` | `string` | The current state of the anonymized branch. |
| `status_message` | `string` | A descriptive message about the current status or any errors |
| `updated_at` | `string` | A timestamp indicating when the anonymized branch status was last updated |

#### Example: Create

```php
$anonymize = $client->Anonymize()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "created_at" => null, // string
    "state" => null, // string
    "updated_at" => null, // string
]);
```


### AnonymizedBranchStatus

Create an instance: `$anonymized_branch_status = $client->AnonymizedBranchStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_id` | `string` | The ID of the anonymized branch. |
| `created_at` | `string` | A timestamp indicating when the anonymized branch was created |
| `failed_at` | `string` | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | `array` | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | `string` | The ID of the project this branch belongs to. |
| `state` | `string` | The current state of the anonymized branch. |
| `status_message` | `string` | A descriptive message about the current status or any errors |
| `updated_at` | `string` | A timestamp indicating when the anonymized branch status was last updated |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AnonymizedBranchStatus record (throws on error).
$anonymized_branch_status = $client->AnonymizedBranchStatus()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```


### ApiKey

Create an instance: `$api_key = $client->ApiKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | A timestamp indicating when the API key was created |
| `created_by` | `string` | ID of the user who created this API key |
| `id` | `int` | The API key's unique numeric ID. |
| `key` | `string` | The generated 64-bit token required to access the Neon API |
| `key_name` | `string` | A user-specified API key name. |
| `last_used_at` | `string` | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `string` | The IP address from which the API key was last used |
| `name` | `string` | The user-specified API key name |

#### Example: List

```php
// list() returns an array of ApiKey records (throws on error).
$api_keys = $client->ApiKey()->list();
```

#### Example: Create

```php
$api_key = $client->ApiKey()->create([
    "created_at" => null, // string
    "created_by" => null, // string
    "id" => null, // int
    "key" => null, // string
    "key_name" => null, // string
    "last_used_from_addr" => null, // string
    "name" => null, // string
]);
```


### Auth

Create an instance: `$auth = $client->Auth();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` | The ID of the account associated with this authentication record. |
| `auth_data` | `string` |  |
| `auth_method` | `string` | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Auth record (throws on error).
$auth = $client->Auth()->load();
```

#### Example: Create

```php
$auth = $client->Auth()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "account_id" => null, // string
    "auth_method" => null, // string
]);
```


### AuthLegacy

Create an instance: `$auth_legacy = $client->AuthLegacy();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | URI to add to the redirect URI allowlist for the auth provider. |

#### Example: Create

```php
$auth_legacy = $client->AuthLegacy()->create([
    "project_id" => null, // string
    "auth_provider" => null, // string
    "domain" => null, // string
]);
```


### AvailablePreloadLibrary

Create an instance: `$available_preload_library = $client->AvailablePreloadLibrary();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Human-readable explanation of the library's purpose and behavior. |
| `is_default` | `bool` | Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints. |
| `is_experimental` | `bool` | Marks the library as experimental. |
| `library_name` | `string` | Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`). |
| `version` | `string` | Version of the preload library. |

#### Example: List

```php
// list() returns an array of AvailablePreloadLibrary records (throws on error).
$available_preload_librarys = $client->AvailablePreloadLibrary()->list();
```


### BackupSchedule

Create an instance: `$backup_schedule = $client->BackupSchedule();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `day` | `int` | The day of the week or month to take the snapshot (if applicable). |
| `frequency` | `string` | How often to take snapshots. |
| `hour` | `int` | The hour of the day to take the snapshot (if applicable). |
| `month` | `int` | The month of the year to take the snapshot (if applicable). |
| `retention_seconds` | `int` | How long to keep a scheduled snapshot (in seconds) before it's automatically deleted. |

#### Example: List

```php
// list() returns an array of BackupSchedule records (throws on error).
$backup_schedules = $client->BackupSchedule()->list();
```


### Branch

Create an instance: `$branch = $client->Branch();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_time_seconds` | `int` | Total time this branch's compute has been active during the current billing period, in seconds (not weighted by compute size). |
| `annotation` | `array` | Annotation data associated with the annotated object. |
| `branch` | `array` | Branch returned by the request. |
| `compute_time_seconds` | `int` | Total Postgres compute time consumed by this branch during the current billing period, in CU-seconds (weighted by compute size). |
| `cpu_used_sec` | `int` | Deprecated. |
| `created_at` | `string` | A timestamp indicating when the branch was created |
| `created_by` | `array` | The resolved user model that contains details of the user/org/integration/api_key used for branch creation. |
| `creation_source` | `string` | The branch creation source |
| `current_state` | `string` | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `data_transfer_bytes` | `int` | Total data transferred out of the branch, in bytes. |
| `default` | `bool` | Whether the branch is the project's default branch |
| `expires_at` | `string` | The timestamp when the branch is scheduled to expire and be automatically deleted. |
| `id` | `string` | The branch ID. |
| `init_source` | `string` | Source of initialization for the branch. |
| `last_reset_at` | `string` | A timestamp indicating when the branch was last reset |
| `logical_size` | `int` | The logical size of the branch, in bytes |
| `name` | `string` | The branch name |
| `parent_id` | `string` | The `branch_id` of the parent branch |
| `parent_lsn` | `string` | The Log Sequence Number (LSN) on the parent branch from which this branch was created. |
| `parent_timestamp` | `string` | The point in time on the parent branch from which this branch was created. |
| `pending_state` | `string` | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `primary` | `bool` | Deprecated. |
| `project_id` | `string` | The ID of the project this branch belongs to. |
| `protected` | `bool` | Whether the branch is protected. |
| `recovery` | `array` | Recovery information for a deleted branch. |
| `restore_status` | `string` | Could be `restored`, `finalized` or `detaching`. |
| `restored_as` | `string` | ID of the target branch which was replaced when this branch was restored |
| `restored_from` | `string` | ID of the snapshot that was the restore source for this branch |
| `restricted_actions` | `array` | A list of actions that are currently restricted for this branch and the reason why. |
| `state_changed_at` | `string` | A UTC timestamp indicating when the `current_state` began |
| `ttl_interval_seconds` | `int` | The time-to-live (TTL) duration originally configured for the branch, in seconds. |
| `updated_at` | `string` | A timestamp indicating when the branch was last updated |
| `written_data_bytes` | `int` | Data written by this branch during the current billing period, in bytes. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Branch record (throws on error).
$branch = $client->Branch()->load(["id" => "branch_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of Branch records (throws on error).
$branchs = $client->Branch()->list();
```

#### Example: Create

```php
$branch = $client->Branch()->create([
    "project_id" => null, // string
    "active_time_seconds" => null, // int
    "annotation" => null, // array
    "branch" => null, // array
    "compute_time_seconds" => null, // int
    "cpu_used_sec" => null, // int
    "created_at" => null, // string
    "creation_source" => null, // string
    "current_state" => null, // string
    "data_transfer_bytes" => null, // int
    "default" => null, // bool
    "id" => null, // string
    "name" => null, // string
    "protected" => null, // bool
    "recovery" => null, // array
    "state_changed_at" => null, // string
    "updated_at" => null, // string
    "written_data_bytes" => null, // int
]);
```


### BranchAiGateway

Create an instance: `$branch_ai_gateway = $client->BranchAiGateway();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_url` | `string` | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | `bool` | Always `true` in 200 responses. |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the BranchAiGateway record (throws on error).
$branch_ai_gateway = $client->BranchAiGateway()->load(["id" => "branch_ai_gateway_id", "project_id" => "project_id"]);
```


### BranchOperation

Create an instance: `$branch_operation = $client->BranchOperation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch` | `array` | Branch returned by the request. |
| `id` | `string` |  |
| `operations` | `array` |  |

#### Example: Create

```php
$branch_operation = $client->BranchOperation()->create([
    "id" => null, // string
    "project_id" => null, // string
    "branch" => null, // array
    "operations" => null, // array
]);
```


### BranchSchema

Create an instance: `$branch_schema = $client->BranchSchema();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `json` | `array` | Branch schema represented as a structured JSON object, parallel to the SQL DDL in `sql`. |
| `sql` | `string` | Branch schema expressed as SQL DDL statements. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the BranchSchema record (throws on error).
$branch_schema = $client->BranchSchema()->load(["id" => "branch_schema_id", "project_id" => "project_id", "db_name" => "db_name"]);
```


### BranchSchemaCompare

Create an instance: `$branch_schema_compare = $client->BranchSchemaCompare();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the BranchSchemaCompare record (throws on error).
$branch_schema_compare = $client->BranchSchemaCompare()->load(["id" => "branch_schema_compare_id", "project_id" => "project_id", "db_name" => "db_name"]);
```


### BranchStorage

Create an instance: `$branch_storage = $client->BranchStorage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Always `true` in 200 responses. |
| `force_path_style` | `bool` | Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). |
| `id` | `string` |  |
| `region` | `string` | The AWS region for this branch's object storage. |
| `s3_endpoint` | `string` | The S3-compatible endpoint URL for this branch. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the BranchStorage record (throws on error).
$branch_storage = $client->BranchStorage()->load(["id" => "branch_storage_id", "project_id" => "project_id"]);
```


### Bucket

Create an instance: `$bucket = $client->Bucket();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `string` | Access level for the bucket. |
| `created_at` | `string` | When the bucket was created. |
| `id` | `string` |  |
| `name` | `string` | The bucket name. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Bucket record (throws on error).
$bucket = $client->Bucket()->load(["branch_id" => "branch_id", "bucket_id" => "bucket_id", "object_key" => "object_key", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of Bucket records (throws on error).
$buckets = $client->Bucket()->list();
```

#### Example: Create

```php
$bucket = $client->Bucket()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "created_at" => null, // string
    "name" => null, // string
]);
```


### BucketObjectsList

Create an instance: `$bucket_objects_list = $client->BucketObjectsList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `etag` | `string` | The object's entity tag (content hash). |
| `key` | `string` | The full object key. |
| `last_modified` | `string` | The time the object was last modified. |
| `size` | `int` | The object size in bytes. |

#### Example: List

```php
// list() returns an array of BucketObjectsList records (throws on error).
$bucket_objects_lists = $client->BucketObjectsList()->list();
```


### ConnectionUri

Create an instance: `$connection_uri = $client->ConnectionUri();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `uri` | `string` | The connection URI. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ConnectionUri record (throws on error).
$connection_uri = $client->ConnectionUri()->load(["project_id" => "project_id", "database_name" => "database_name", "role_name" => "role_name"]);
```


### Consumption

Create an instance: `$consumption = $client->Consumption();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_id` | `string` | The Neon branch ID. |
| `periods` | `array` | Consumption history records for the branch, grouped by billing period. |
| `project_id` | `string` | The ID of the project that owns this branch. |

#### Example: List

```php
// list() returns an array of Consumption records (throws on error).
$consumptions = $client->Consumption()->list();
```


### CreateCredential

Create an instance: `$create_credential = $client->CreateCredential();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | Free-form customer label for the credential. |
| `principal_type` | `string` | Principal type for the credential. |
| `scopes` | `array` |  |

#### Example: Create

```php
$create_credential = $client->CreateCredential()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "principal_type" => null, // string
    "scopes" => null, // array
]);
```


### Credential

Create an instance: `$credential = $client->Credential();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_id` | `string` |  |
| `created_at` | `string` |  |
| `expires_at` | `string` | When the credential expires; absent means never expires. |
| `function_id` | `string` |  |
| `id` | `string` |  |
| `last_used_at` | `string` |  |
| `name` | `string` | Customer-supplied label; absent when not provided at issuance. |
| `principal_type` | `string` |  |
| `revoked_at` | `string` |  |
| `scopes` | `array` |  |
| `token_id` | `string` | Opaque credential id (e.g. |
| `token_id_short` | `string` |  |

#### Example: List

```php
// list() returns an array of Credential records (throws on error).
$credentials = $client->Credential()->list();
```

#### Example: Create

```php
$credential = $client->Credential()->create([
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


### CurrentUserInfo

Create an instance: `$current_user_info = $client->CurrentUserInfo();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | Email address associated with this auth account. |
| `image` | `string` | URL of the user's profile picture as provided by the identity provider. |
| `login` | `string` | Deprecated. |
| `name` | `string` | Display name of the account as provided by the identity provider. |
| `provider` | `string` | Identity provider id from keycloak |

#### Example: List

```php
// list() returns an array of CurrentUserInfo records (throws on error).
$current_user_infos = $client->CurrentUserInfo()->list();
```


### CustomDomain

Create an instance: `$custom_domain = $client->CustomDomain();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `string` | The custom domain to register (for example `dashboard.acme.com`). |
| `entity_id` | `string` | The target entity's identifier within the branch. |
| `entity_type` | `string` | The kind of branch entity to point the domain at. |

#### Example: Create

```php
$custom_domain = $client->CustomDomain()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "domain" => null, // string
    "entity_id" => null, // string
    "entity_type" => null, // string
]);
```


### DataApi

Create an instance: `$data_api = $client->DataApi();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_default_grants` | `bool` | Grant all permissions to the tables in the public schema to authenticated users |
| `auth_provider` | `string` | Authentication provider for the Neon Data API. |
| `available_schemas` | `array` | List of available database schemas (SubZero only) |
| `id` | `string` |  |
| `jwks_url` | `string` | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `jwt_audience` | `string` | Expected `aud` claim in incoming JWTs. |
| `provider_name` | `string` | Display name for the authentication provider. |
| `settings` | `array` | Configuration settings for the Data API (SubZero only) |
| `skip_auth_schema` | `bool` | Skip creating the auth schema and RLS functions |
| `status` | `string` | The status of the Neon Data API deployment |
| `url` | `string` | The URL of the Neon Data API |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DataApi record (throws on error).
$data_api = $client->DataApi()->load(["id" => "data_api_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### Example: Create

```php
$data_api = $client->DataApi()->create([
    "branch_id" => null, // string
    "id" => null, // string
    "project_id" => null, // string
    "status" => null, // string
    "url" => null, // string
]);
```


### Database

Create an instance: `$database = $client->Database();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_id` | `string` | The ID of the branch this database belongs to. |
| `created_at` | `string` | A timestamp indicating when the database was created |
| `database` | `array` | Configuration for the new Postgres database. |
| `id` | `int` | The database ID |
| `name` | `string` | The database name |
| `owner_name` | `string` | The name of role that owns the database |
| `updated_at` | `string` | A timestamp indicating when the database was last updated |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Database record (throws on error).
$database = $client->Database()->load(["id" => "database_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of Database records (throws on error).
$databases = $client->Database()->list();
```

#### Example: Create

```php
$database = $client->Database()->create([
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


### EmailProvider

Create an instance: `$email_provider = $client->EmailProvider();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EmailProvider record (throws on error).
$email_provider = $client->EmailProvider()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```


### EmailServer

Create an instance: `$email_server = $client->EmailServer();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EmailServer record (throws on error).
$email_server = $client->EmailServer()->load(["project_id" => "project_id"]);
```


### Empty

Create an instance: `$empty = $client->Empty();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_org_id` | `string` | The destination organization identifier |
| `project_ids` | `array` | The list of projects ids to transfer. |
| `schedule` | `array` | List of schedule entries defining the backup frequency. |

#### Example: Create

```php
$empty = $client->Empty()->create([
    "organization_id" => null, // string
    "destination_org_id" => null, // string
    "project_ids" => null, // array
    "schedule" => null, // array
]);
```


### Endpoint

Create an instance: `$endpoint = $client->Endpoint();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `autoscaling_limit_max_cu` | `float` | The maximum number of Compute Units |
| `autoscaling_limit_min_cu` | `float` | The minimum number of Compute Units |
| `branch_id` | `string` | The ID of the branch this compute endpoint belongs to. |
| `compute_release_version` | `string` | Attached compute's release version number. |
| `created_at` | `string` | A timestamp indicating when the compute endpoint was created |
| `creation_source` | `string` | The compute endpoint creation source |
| `current_state` | `string` | Lifecycle state of the compute endpoint. |
| `disabled` | `bool` | Whether to restrict connections to the compute endpoint. |
| `endpoint` | `array` | Configuration for the compute endpoint to create. |
| `host` | `string` | The hostname of the compute endpoint. |
| `id` | `string` | The compute endpoint ID. |
| `last_active` | `string` | A timestamp indicating when the compute endpoint was last active |
| `name` | `string` | Optional name of the compute endpoint |
| `passwordless_access` | `bool` | Whether to permit passwordless access to the compute endpoint |
| `pending_state` | `string` | Target state the compute endpoint is transitioning to. |
| `pooler_enabled` | `bool` | Deprecated. |
| `pooler_mode` | `string` | Deprecated. |
| `project_id` | `string` | The ID of the project this compute endpoint belongs to. |
| `provisioner` | `string` | Compute provisioner. |
| `proxy_host` | `string` | Deprecated. |
| `region_id` | `string` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `array` | A collection of settings for a compute endpoint |
| `started_at` | `string` | A timestamp indicating when the compute endpoint was last started |
| `suspend_timeout_seconds` | `int` | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `suspended_at` | `string` | A timestamp indicating when the compute endpoint was last suspended |
| `type` | `string` | Compute endpoint type. |
| `updated_at` | `string` | A timestamp indicating when the compute endpoint was last updated |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Endpoint record (throws on error).
$endpoint = $client->Endpoint()->load(["id" => "endpoint_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of Endpoint records (throws on error).
$endpoints = $client->Endpoint()->list();
```

#### Example: Create

```php
$endpoint = $client->Endpoint()->create([
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


### EndpointOperation

Create an instance: `$endpoint_operation = $client->EndpointOperation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `endpoint` | `array` | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` | `string` |  |
| `operations` | `array` |  |

#### Example: Create

```php
$endpoint_operation = $client->EndpointOperation()->create([
    "id" => null, // string
    "project_id" => null, // string
    "endpoint" => null, // array
    "operations" => null, // array
]);
```


### Function

Create an instance: `$function = $client->Function();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_deployment` | `mixed` | The most recent deployment whose build completed successfully. |
| `binding_status` | `string` | Whether Neon's internal routing for the domain is published: `pending`, `present`, or `missing`. |
| `cname_target` | `string` | The hostname the customer must point their custom domain at with a CNAME record. |
| `created_at` | `string` |  |
| `current_deployment` | `mixed` | The most recent deployment, regardless of build status. |
| `dns_status` | `string` | The DNS + CAA portion of the check: `pending` (no records yet), `ok` (resolves to our edge and the CA is authorized), `misconfigured` (your CNAME does not resolve to our edge), or `caa_blocked` (your CAA records forbid Let's Encrypt). |
| `domain` | `string` | The registered custom domain (normalized, lowercase). |
| `entity_id` | `string` | The target entity's identifier within the branch. |
| `entity_type` | `string` | The kind of branch entity the domain targets. |
| `id` | `string` | Opaque, stable function identifier. |
| `invocation_url` | `string` | URL at which the function is invoked. |
| `name` | `string` | Free-form display name. |
| `slug` | `string` | Branch-unique, lowercase DNS-label. |
| `status` | `string` | The domain's current validity, computed by a background check: `pending` (still converging — point your CNAME at `cname_target` and wait), `active` (live: DNS resolves to the edge, the CA is authorized, and routing is published), or `error… |
| `status_reason` | `string` | A short, stable machine-readable reason for a non-active `status` (e.g. |

#### Example: List

```php
// list() returns an array of Function records (throws on error).
$functions = $client->Function()->list();
```


### Jwk

Create an instance: `$jwk = $client->Jwk();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_id` | `string` | The Neon branch ID. |
| `created_at` | `string` | The date and time when the JWKS was created |
| `id` | `string` | The JWKS configuration's ID. |
| `jwks_url` | `string` | URL of the provider's JWKS endpoint used to verify JWTs. |
| `jwt_audience` | `string` | Expected `aud` claim in incoming JWTs. |
| `project_id` | `string` | The Neon project ID. |
| `provider_name` | `string` | The name of the authentication provider (e.g., Clerk, Stytch, Auth0) |
| `role_names` | `array` | Deprecated. |
| `skip_role_creation` | `bool` | Deprecated. |
| `updated_at` | `string` | The date and time when the JWKS was last modified |

#### Example: List

```php
// list() returns an array of Jwk records (throws on error).
$jwks = $client->Jwk()->list();
```

#### Example: Create

```php
$jwk = $client->Jwk()->create([
    "project_id" => null, // string
    "created_at" => null, // string
    "id" => null, // string
    "jwks_url" => null, // string
    "provider_name" => null, // string
    "updated_at" => null, // string
]);
```


### MaskingRule

Create an instance: `$masking_rule = $client->MaskingRule();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `column_name` | `string` | The name of the column to be masked |
| `database_name` | `string` | The name of the database containing the table to be masked |
| `masking_function` | `string` | The PostgreSQL Anonymizer masking function to apply. |
| `masking_rules` | `array` | List of masking rules for the branch |
| `masking_value` | `string` | A literal value to set on the column when masking. |
| `schema_name` | `string` | The name of the schema containing the table to be masked |
| `table_name` | `string` | The name of the table containing the column to be masked |

#### Example: List

```php
// list() returns an array of MaskingRule records (throws on error).
$masking_rules = $client->MaskingRule()->list();
```


### Member

Create an instance: `$member = $client->Member();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The organization member's ID. |
| `joined_at` | `string` | Timestamp when the user joined the organization. |
| `org_id` | `string` | The Neon organization ID. |
| `role` | `string` | Organization member's role. |
| `user_id` | `string` | The Neon user ID. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Member record (throws on error).
$member = $client->Member()->load(["id" => "member_id", "organization_id" => "organization_id"]);
```


### NeonAuthAllowLocalhost

Create an instance: `$neon_auth_allow_localhost = $client->NeonAuthAllowLocalhost();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_localhost` | `bool` | Whether to allow localhost connections |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NeonAuthAllowLocalhost record (throws on error).
$neon_auth_allow_localhost = $client->NeonAuthAllowLocalhost()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```


### NeonAuthConfig

Create an instance: `$neon_auth_config = $client->NeonAuthConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The application name used in auth emails and communications. |


### NeonAuthCreateIntegration

Create an instance: `$neon_auth_create_integration = $client->NeonAuthCreateIntegration();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` | Authentication provider integrated with this Neon Auth configuration. |
| `branch_id` | `string` | The Neon branch ID. |
| `database_name` | `string` | Name of the database to enable Neon Auth on. |
| `project_id` | `string` | The Neon project ID. |
| `role_name` | `string` | Deprecated. |

#### Example: Create

```php
$neon_auth_create_integration = $client->NeonAuthCreateIntegration()->create([
    "auth_provider" => null, // string
    "branch_id" => null, // string
    "project_id" => null, // string
]);
```


### NeonAuthCreateNewUser

Create an instance: `$neon_auth_create_new_user = $client->NeonAuthCreateNewUser();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` | Authentication provider integrated with this Neon Auth configuration. |
| `email` | `string` | Email address of the new Neon Auth user to create. |
| `name` | `string` | Display name for the new user. |
| `project_id` | `string` | The Neon project ID. |

#### Example: Create

```php
$neon_auth_create_new_user = $client->NeonAuthCreateNewUser()->create([
    "auth_provider" => null, // string
    "email" => null, // string
    "project_id" => null, // string
]);
```


### NeonAuthEmailAndPasswordConfig

Create an instance: `$neon_auth_email_and_password_config = $client->NeonAuthEmailAndPasswordConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_sign_in_after_verification` | `bool` | Whether users are automatically signed in after verifying their email |
| `disable_sign_up` | `bool` | Whether to disable new user sign ups |
| `email_verification_method` | `string` | Controls how email addresses are verified during sign-up or sign-in. |
| `enabled` | `bool` | Whether email and password authentication is enabled |
| `require_email_verification` | `bool` | Whether email verification is required before users can sign in |
| `send_verification_email_on_sign_in` | `bool` | Whether to send a verification email when users sign in |
| `send_verification_email_on_sign_up` | `bool` | Whether to send a verification email when users sign up |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NeonAuthEmailAndPasswordConfig record (throws on error).
$neon_auth_email_and_password_config = $client->NeonAuthEmailAndPasswordConfig()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```


### NeonAuthEmailServerConfig

Create an instance: `$neon_auth_email_server_config = $client->NeonAuthEmailServerConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### NeonAuthIntegration

Create an instance: `$neon_auth_integration = $client->NeonAuthIntegration();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` | Authentication provider integrated with this Neon Auth configuration. |
| `auth_provider_project_id` | `string` | Project identifier assigned by the auth provider for this integration. |
| `base_url` | `string` | Base URL of the Neon Auth service endpoint for this integration. |
| `branch_id` | `string` | The Neon branch ID. |
| `created_at` | `string` | Timestamp when the Neon Auth integration was created, in RFC 3339 format (UTC). |
| `db_name` | `string` | Name of the database used by the Neon Auth integration. |
| `jwks_url` | `string` | URL of the provider's JWKS endpoint used to verify JWTs. |
| `name` | `string` | Application name shown in auth emails and communications. |
| `owned_by` | `string` | Owner of the auth provider project. |
| `transfer_status` | `string` | Ownership transfer state for the auth provider project. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NeonAuthIntegration record (throws on error).
$neon_auth_integration = $client->NeonAuthIntegration()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of NeonAuthIntegration records (throws on error).
$neon_auth_integrations = $client->NeonAuthIntegration()->list();
```


### NeonAuthMagicLinkConfig

Create an instance: `$neon_auth_magic_link_config = $client->NeonAuthMagicLinkConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disable_sign_up` | `bool` | Whether to disable sign-up via magic link. |
| `enabled` | `bool` | Whether the magic link plugin is enabled. |
| `expires_in` | `int` | Minutes until the magic link expires. |


### NeonAuthOauthProvider

Create an instance: `$neon_auth_oauth_provider = $client->NeonAuthOauthProvider();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_id` | `string` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `string` | OAuth client secret for the provider. |
| `id` | `string` | The OAuth provider's ID. |
| `microsoft_tenant_id` | `string` | Tenant ID for the Microsoft OAuth provider. |
| `type` | `string` | OAuth provider key type. |

#### Example: List

```php
// list() returns an array of NeonAuthOauthProvider records (throws on error).
$neon_auth_oauth_providers = $client->NeonAuthOauthProvider()->list();
```

#### Example: Create

```php
$neon_auth_oauth_provider = $client->NeonAuthOauthProvider()->create([
    "project_id" => null, // string
    "id" => null, // string
    "type" => null, // string
]);
```


### NeonAuthOrganizationConfig

Create an instance: `$neon_auth_organization_config = $client->NeonAuthOrganizationConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `creator_role` | `string` | Role of the organization's creator. |
| `enabled` | `bool` | Whether the organization plugin is enabled. |
| `membership_limit` | `int` | Maximum number of members per organization. |
| `organization_limit` | `int` | Maximum organizations a user can belong to (created or joined). |
| `send_invitation_email` | `bool` | Whether to send invitation emails when inviting members to an organization. |


### NeonAuthPhoneNumberConfig

Create an instance: `$neon_auth_phone_number_config = $client->NeonAuthPhoneNumberConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Whether the phone number plugin is enabled. |
| `otp_expires_in` | `int` | Time in seconds before the OTP expires |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NeonAuthPhoneNumberConfig record (throws on error).
$neon_auth_phone_number_config = $client->NeonAuthPhoneNumberConfig()->load(["branch_id" => "branch_id", "project_id" => "project_id"]);
```


### NeonAuthPluginConfig

Create an instance: `$neon_auth_plugin_config = $client->NeonAuthPluginConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_id` | `string` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `string` | OAuth client secret for the provider. |
| `id` | `string` | The OAuth provider's ID. |
| `type` | `string` | OAuth provider key type. |

#### Example: List

```php
// list() returns an array of NeonAuthPluginConfig records (throws on error).
$neon_auth_plugin_configs = $client->NeonAuthPluginConfig()->list();
```


### NeonAuthRedirectUriWhitelistDomain

Create an instance: `$neon_auth_redirect_uri_whitelist_domain = $client->NeonAuthRedirectUriWhitelistDomain();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | Allowed redirect URI domain for the auth provider. |

#### Example: List

```php
// list() returns an array of NeonAuthRedirectUriWhitelistDomain records (throws on error).
$neon_auth_redirect_uri_whitelist_domains = $client->NeonAuthRedirectUriWhitelistDomain()->list();
```


### NeonAuthTransferAuthProviderProject

Create an instance: `$neon_auth_transfer_auth_provider_project = $client->NeonAuthTransferAuthProviderProject();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` | Authentication provider integrated with this Neon Auth configuration. |
| `project_id` | `string` | The Neon project ID. |
| `url` | `string` | URL for completing the process of ownership transfer |

#### Example: Create

```php
$neon_auth_transfer_auth_provider_project = $client->NeonAuthTransferAuthProviderProject()->create([
    "auth_provider" => null, // string
    "project_id" => null, // string
    "url" => null, // string
]);
```


### NeonAuthWebhookConfig

Create an instance: `$neon_auth_webhook_config = $client->NeonAuthWebhookConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Whether the webhook is active. |
| `enabled_events` | `array` | Event types that trigger this webhook. |
| `timeout_seconds` | `int` | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | `string` | Destination URL that receives webhook event payloads. |

#### Example: List

```php
// list() returns an array of NeonAuthWebhookConfig records (throws on error).
$neon_auth_webhook_configs = $client->NeonAuthWebhookConfig()->list();
```


### NeonFunction

Create an instance: `$neon_function = $client->NeonFunction();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_deployment` | `mixed` | The most recent deployment whose build completed successfully. |
| `created_at` | `string` |  |
| `current_deployment` | `mixed` | The most recent deployment, regardless of build status. |
| `id` | `string` | Opaque, stable function identifier. |
| `invocation_url` | `string` | URL at which the function is invoked. |
| `name` | `string` | Free-form display name. |
| `slug` | `string` | Branch-unique, lowercase DNS-label. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NeonFunction record (throws on error).
$neon_function = $client->NeonFunction()->load(["id" => "neon_function_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```


### NeonFunctionDeployment

Create an instance: `$neon_function_deployment = $client->NeonFunctionDeployment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$neon_function_deployment = $client->NeonFunctionDeployment()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "slug" => null, // string
]);
```


### Operation

Create an instance: `$operation = $client->Operation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` | The action performed by the operation |
| `branch_id` | `string` | The ID of the branch this operation ran on. |
| `created_at` | `string` | A timestamp indicating when the operation was created |
| `endpoint_id` | `string` | The ID of the compute endpoint this operation ran on. |
| `error` | `string` | Human-readable message describing why the operation failed. |
| `failures_count` | `int` | The number of times the operation failed |
| `id` | `string` | The operation ID |
| `name` | `string` | Name for the replaced branch. |
| `operations` | `array` |  |
| `project_id` | `string` | The ID of the project this operation ran on. |
| `retry_at` | `string` | A timestamp indicating when the operation was last retried |
| `status` | `string` | Current lifecycle state of the operation. |
| `total_duration_ms` | `int` | The total duration of the operation in milliseconds |
| `updated_at` | `string` | A timestamp indicating when the operation status was last updated |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Operation record (throws on error).
$operation = $client->Operation()->load(["id" => "operation_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of Operation records (throws on error).
$operations = $client->Operation()->list();
```

#### Example: Create

```php
$operation = $client->Operation()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "action" => null, // string
    "created_at" => null, // string
    "failures_count" => null, // int
    "id" => null, // string
    "operations" => null, // array
    "status" => null, // string
    "total_duration_ms" => null, // int
    "updated_at" => null, // string
]);
```


### OrgApiKeyCreate

Create an instance: `$org_api_key_create = $client->OrgApiKeyCreate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `id` | `int` |  |
| `key` | `string` |  |
| `name` | `string` |  |

#### Example: Create

```php
$org_api_key_create = $client->OrgApiKeyCreate()->create([
    "organization_id" => null, // string
]);
```


### OrgApiKeyRevoke

Create an instance: `$org_api_key_revoke = $client->OrgApiKeyRevoke();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### OrgApiKeysListResponseItem

Create an instance: `$org_api_keys_list_response_item = $client->OrgApiKeysListResponseItem();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | A timestamp indicating when the API key was created |
| `created_by` | `array` | The user data of the user that created this API key. |
| `id` | `int` | The API key's unique numeric ID. |
| `last_used_at` | `string` | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `string` | The IP address from which the API key was last used |
| `name` | `string` | The user-specified API key name |
| `project_id` | `string` | If set, the API key can access only this project |

#### Example: List

```php
// list() returns an array of OrgApiKeysListResponseItem records (throws on error).
$org_api_keys_list_response_items = $client->OrgApiKeysListResponseItem()->list();
```


### Organization

Create an instance: `$organization = $client->Organization();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_hipaa_projects` | `bool` | If true, allow account to mark projects as HIPAA |
| `created_at` | `string` | A timestamp indicting when the organization was created |
| `handle` | `string` | URL-safe identifier for the organization, used in API paths. |
| `id` | `string` | The Neon organization ID. |
| `label` | `string` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `managed_by` | `string` | Organizations created via the Console or the API are managed by `console`. |
| `name` | `string` | Human-readable display name of the organization. |
| `plan` | `string` | Billing plan for the organization, for example `free`, `launch`, or `scale`. |
| `require_mfa` | `bool` | If true, all members must have MFA enabled to access this organization |
| `updated_at` | `string` | A timestamp indicating when the organization was updated |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Organization record (throws on error).
$organization = $client->Organization()->load(["id" => "organization_id"]);
```

#### Example: List

```php
// list() returns an array of Organization records (throws on error).
$organizations = $client->Organization()->list();
```

#### Example: Create

```php
$organization = $client->Organization()->create([
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


### OrganizationInvitation

Create an instance: `$organization_invitation = $client->OrganizationInvitation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | Email of the invited user |
| `id` | `string` | The invitation ID. |
| `invitations` | `array` | List of pending invitations for the organization. |
| `invited_at` | `string` | Timestamp when the invitation was created |
| `invited_by` | `string` | UUID for the user_id who extended the invitation |
| `org_id` | `string` | Organization id as it is stored in Neon |
| `role` | `string` | Organization member's role. |

#### Example: List

```php
// list() returns an array of OrganizationInvitation records (throws on error).
$organization_invitations = $client->OrganizationInvitation()->list();
```

#### Example: Create

```php
$organization_invitation = $client->OrganizationInvitation()->create([
    "id" => null, // string
    "email" => null, // string
    "invitations" => null, // array
    "invited_at" => null, // string
    "invited_by" => null, // string
    "org_id" => null, // string
    "role" => null, // string
]);
```


### Presign

Create an instance: `$presign = $client->Presign();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` | The `Content-Type` to bind into the signed request. |
| `expires_at` | `string` | When the presigned URL stops being valid. |
| `expires_in_seconds` | `int` | How long the presigned URL stays valid, in seconds. |
| `headers` | `array` | Headers the caller MUST send verbatim on the request (e.g. |
| `method` | `string` | The HTTP method to use against `url`: `PUT` for an upload, `GET` for a download. |
| `operation` | `string` | The transfer direction. |
| `url` | `string` | The presigned URL. |

#### Example: Create

```php
$presign = $client->Presign()->create([
    "branch_id" => null, // string
    "bucket_id" => null, // string
    "object_key" => null, // string
    "project_id" => null, // string
    "expires_at" => null, // string
    "headers" => null, // array
    "method" => null, // string
    "operation" => null, // string
    "url" => null, // string
]);
```


### Project

Create an instance: `$project = $client->Project();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_time` | `int` | Control plane observed endpoints of this project being active this amount of wall-clock time. |
| `active_time_seconds` | `int` | Seconds. |
| `branch_logical_size_limit` | `int` | The logical size limit for a branch. |
| `branch_logical_size_limit_bytes` | `int` | The logical size limit for a branch. |
| `compute_last_active_at` | `string` | The most recent time when any endpoint of this project was active. |
| `compute_time_seconds` | `int` | Seconds. |
| `consumption_period_end` | `string` | A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period. |
| `consumption_period_start` | `string` | A date-time indicating when Neon Cloud started measuring consumption for current consumption period. |
| `cpu_used_sec` | `int` | Deprecated. |
| `created_at` | `string` | A timestamp indicating when the project was created |
| `creation_source` | `string` | The project creation source |
| `data_storage_bytes_hour` | `int` | Bytes-Hour. |
| `data_transfer_bytes` | `int` | Bytes. |
| `default_endpoint_settings` | `array` | A collection of settings for a Neon endpoint |
| `deleted_at` | `string` | A timestamp indicating when the project was deleted |
| `effective_project_permission` | `string` |  |
| `hipaa_enabled_at` | `string` | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | `int` | The number of seconds to retain the shared history for all branches in this project. |
| `id` | `string` | The Neon project ID. |
| `label` | `string` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | `string` | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | `string` | A timestamp indicating when project maintenance begins. |
| `name` | `string` | The project name |
| `org_id` | `string` | The Neon organization ID. |
| `org_name` | `string` | Name of the organization that owns the project. |
| `owner` | `array` | Ownership details for the project, including the owner's name and email. |
| `owner_id` | `string` | ID of the organization that owns the project. |
| `pg_version` | `int` | The major Postgres version number. |
| `platform_id` | `string` | The cloud platform identifier. |
| `project` | `array` | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `provisioner` | `string` | Compute provisioner. |
| `proxy_host` | `string` | The proxy host for the project. |
| `quota_reset_at` | `string` | Deprecated. |
| `recoverable_until` | `string` | A timestamp indicating the project will be recoverable until this date and time. |
| `region_id` | `string` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `array` | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | `bool` | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | `int` | The current space occupied by the project in Postgres storage, in bytes. |
| `updated_at` | `string` | A timestamp indicating when the project was last updated |
| `written_data_bytes` | `int` | Bytes. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Project record (throws on error).
$project = $client->Project()->load(["id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of Project records (throws on error).
$projects = $client->Project()->list();
```

#### Example: Create

```php
$project = $client->Project()->create([
    "id" => null, // string
    "vpc_endpoint_id" => null, // string
    "active_time" => null, // int
    "active_time_seconds" => null, // int
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
    "label" => null, // string
    "name" => null, // string
    "owner" => null, // array
    "owner_id" => null, // string
    "pg_version" => null, // int
    "platform_id" => null, // string
    "project" => null, // array
    "provisioner" => null, // string
    "proxy_host" => null, // string
    "region_id" => null, // string
    "store_passwords" => null, // bool
    "updated_at" => null, // string
    "written_data_bytes" => null, // int
]);
```


### ProjectBranchLogField

Create an instance: `$project_branch_log_field = $client->ProjectBranchLogField();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `array` | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

#### Example: List

```php
// list() returns an array of ProjectBranchLogField records (throws on error).
$project_branch_log_fields = $client->ProjectBranchLogField()->list();
```


### ProjectBranchLogFieldValue

Create an instance: `$project_branch_log_field_value = $client->ProjectBranchLogFieldValue();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `is_truncated` | `bool` | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` | `array` |  |

#### Example: List

```php
// list() returns an array of ProjectBranchLogFieldValue records (throws on error).
$project_branch_log_field_values = $client->ProjectBranchLogFieldValue()->list();
```


### ProjectBranchLogsQuery

Create an instance: `$project_branch_logs_query = $client->ProjectBranchLogsQuery();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body_contains` | `string` | Match records whose rendered `message` contains this case-sensitive substring. |
| `cursor` | `string` | Opaque pagination cursor returned as `next_cursor` by a previous call. |
| `end_time` | `string` | Exclusive end of the query window. |
| `is_truncated` | `bool` | True when more records matched than were returned. |
| `limit` | `int` | Maximum number of log records to return per page. |
| `logql` | `string` | Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream. |
| `logs` | `array` |  |
| `minimum_severity` | `string` | An OpenTelemetry severity level. |
| `next_cursor` | `string` | Pagination cursor to pass as `cursor` on the next request. |
| `scope_name` | `string` | Match the OpenTelemetry instrumentation scope name exactly. |
| `service_name` | `string` | Match the OpenTelemetry `service.name` resource attribute exactly. |
| `severity_text` | `string` | Match the OpenTelemetry severity text exactly. |
| `since` | `mixed` | Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted. |
| `sort_order` | `string` | Order matching records by timestamp. |
| `source` | `string` | The Neon service that emitted the log record. |
| `start_time` | `string` | Inclusive beginning of the query window. |
| `trace_id` | `string` | Match records associated with this OpenTelemetry trace ID. |

#### Example: Create

```php
$project_branch_logs_query = $client->ProjectBranchLogsQuery()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "is_truncated" => null, // bool
    "logs" => null, // array
]);
```


### ProjectMember

Create an instance: `$project_member = $client->ProjectMember();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `effective_project_permission` | `string` | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `string` | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `string` | The caller's effective permission for a project when per-project permissions are enabled. |
| `grant_source` | `string` | How a member's project access is granted. |
| `id` | `string` |  |
| `member_id` | `string` | The organization member ID. |
| `name` | `string` | The user's display name. |
| `org_default_project_permission` | `string` | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `string` | Organization-level role used by project member role management. |
| `project_role` | `string` | Per-project role. |
| `user_id` | `string` | The user ID for the organization member. |

#### Example: List

```php
// list() returns an array of ProjectMember records (throws on error).
$project_members = $client->ProjectMember()->list();
```


### ProjectMemberRole

Create an instance: `$project_member_role = $client->ProjectMemberRole();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credential_rotation_recommended` | `bool` | Hint that database credentials may need rotation after the role change. |
| `effective_project_permission` | `string` | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `string` | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `string` | The caller's effective permission for a project when per-project permissions are enabled. |
| `member_id` | `string` |  |
| `name` | `string` | The user's display name. |
| `org_api_key_rotation_recommended` | `bool` | Hint that project-scoped org API keys created by the target user may need rotation. |
| `org_default_project_permission` | `string` | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `string` | Organization-level role used by project member role management. |
| `project_id` | `string` |  |
| `project_role` | `string` | The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback. |
| `role` | `string` | Per-project role. |
| `user_id` | `string` |  |


### ProjectPermission

Create an instance: `$project_permission = $client->ProjectPermission();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | Email address of the user to grant project access to. |
| `granted_at` | `string` | Timestamp when the permission was granted. |
| `granted_to_email` | `string` | Email address of the user who has been granted access to the project. |
| `id` | `string` | The project permission's ID. |
| `revoked_at` | `string` | Timestamp when the permission was revoked. |

#### Example: List

```php
// list() returns an array of ProjectPermission records (throws on error).
$project_permissions = $client->ProjectPermission()->list();
```

#### Example: Create

```php
$project_permission = $client->ProjectPermission()->create([
    "id" => null, // string
    "email" => null, // string
    "granted_at" => null, // string
    "granted_to_email" => null, // string
]);
```


### ProjectRecover

Create an instance: `$project_recover = $client->ProjectRecover();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branches` | `array` | Branches in the project. |
| `id` | `string` |  |
| `project` | `array` | Full details of the project, including configuration, consumption metrics, and ownership. |

#### Example: Create

```php
$project_recover = $client->ProjectRecover()->create([
    "id" => null, // string
    "branches" => null, // array
    "project" => null, // array
]);
```


### ProjectTransferRequest

Create an instance: `$project_transfer_request = $client->ProjectTransferRequest();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `ttl_seconds` | `int` | Number of seconds the transfer request stays valid before it expires. |

#### Example: Create

```php
$project_transfer_request = $client->ProjectTransferRequest()->create([
    "id" => null, // string
]);
```


### Region

Create an instance: `$region = $client->Region();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default` | `bool` | True if this region is selected by default when no region is specified during project creation. |
| `geo_lat` | `string` | The geographical latitude (approximate) for the region. |
| `geo_long` | `string` | The geographical longitude (approximate) for the region. |
| `name` | `string` | A short description of the region. |
| `region_id` | `string` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |

#### Example: List

```php
// list() returns an array of Region records (throws on error).
$regions = $client->Region()->list();
```


### Role

Create an instance: `$role = $client->Role();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authentication_method` | `string` | Authentication method configured for this role: `password`, `oauth`, or `no_login`. |
| `branch_id` | `string` | The ID of the branch this role belongs to. |
| `created_at` | `string` | A timestamp indicating when the role was created |
| `id` | `string` |  |
| `name` | `string` | Postgres role name within the branch. |
| `password` | `string` | The role password |
| `protected` | `bool` | Whether or not the role is system-protected |
| `role` | `array` | Properties of the role to create. |
| `updated_at` | `string` | A timestamp indicating when the role was last updated |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Role record (throws on error).
$role = $client->Role()->load(["id" => "role_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of Role records (throws on error).
$roles = $client->Role()->list();
```

#### Example: Create

```php
$role = $client->Role()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "created_at" => null, // string
    "name" => null, // string
    "role" => null, // array
    "updated_at" => null, // string
]);
```


### RoleOperation

Create an instance: `$role_operation = $client->RoleOperation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `operations` | `array` |  |
| `role` | `array` | Role details for the requested database role. |

#### Example: Create

```php
$role_operation = $client->RoleOperation()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "role_name" => null, // string
    "operations" => null, // array
    "role" => null, // array
]);
```


### RolePassword

Create an instance: `$role_password = $client->RolePassword();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `password` | `string` | The role password |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RolePassword record (throws on error).
$role_password = $client->RolePassword()->load(["branch_id" => "branch_id", "project_id" => "project_id", "role_name" => "role_name"]);
```


### SendNeonAuthTestEmail

Create an instance: `$send_neon_auth_test_email = $client->SendNeonAuthTestEmail();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error_message` | `string` | The error message from the email server. |
| `host` | `string` | Hostname of the email server. |
| `password` | `string` | Password for authenticating with the SMTP server. |
| `port` | `int` | TCP port of the SMTP server. |
| `recipient_email` | `string` | The email address to send the test email to. |
| `sender_email` | `string` | Email address used as the From address on outgoing auth emails. |
| `sender_name` | `string` | Display name shown as the sender in outgoing emails. |
| `success` | `bool` | Whether the test email was sent successfully. |
| `username` | `string` | Username for authenticating with the SMTP server. |

#### Example: Create

```php
$send_neon_auth_test_email = $client->SendNeonAuthTestEmail()->create([
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


### Snapshot

Create an instance: `$snapshot = $client->Snapshot();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp when the snapshot was created, in RFC 3339 format (UTC). |
| `diff_size` | `int` | Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage. |
| `expires_at` | `string` | RFC 3339 timestamp when the snapshot expires and is eligible for deletion. |
| `full_size` | `int` | Full logical size of the snapshot in bytes at the time it was taken. |
| `id` | `string` | The snapshot ID. |
| `lsn` | `string` | WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`). |
| `manual` | `bool` | True if the snapshot was created manually rather than by a schedule. |
| `name` | `string` | Human-readable label for the snapshot. |
| `operations` | `array` |  |
| `slug` | `string` | Snapshot resource ID, unique within the project. |
| `snapshot` | `array` | Fields to update on the snapshot. |
| `source_branch_id` | `string` | Branch from which this snapshot was created. |
| `timestamp` | `string` | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

#### Example: List

```php
// list() returns an array of Snapshot records (throws on error).
$snapshots = $client->Snapshot()->list();
```

#### Example: Create

```php
$snapshot = $client->Snapshot()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "created_at" => null, // string
    "id" => null, // string
    "operations" => null, // array
    "snapshot" => null, // array
]);
```


### SpendingLimit

Create an instance: `$spending_limit = $client->SpendingLimit();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `spending_limit_cents` | `int` | Monthly spending cap in cents. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SpendingLimit record (throws on error).
$spending_limit = $client->SpendingLimit()->load(["organization_id" => "organization_id"]);
```


### Trigger

Create an instance: `$trigger = $client->Trigger();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `triggers` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Trigger record (throws on error).
$trigger = $client->Trigger()->load(["id" => "trigger_id", "branch_id" => "branch_id", "project_id" => "project_id"]);
```

#### Example: List

```php
// list() returns an array of Trigger records (throws on error).
$triggers = $client->Trigger()->list();
```

#### Example: Create

```php
$trigger = $client->Trigger()->create([
    "branch_id" => null, // string
    "project_id" => null, // string
    "triggers" => null, // array
]);
```


### UpdateNeonAuthUserRole

Create an instance: `$update_neon_auth_user_role = $client->UpdateNeonAuthUserRole();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | ID of the updated user |
| `roles` | `array` | Roles to assign to the user in the Neon Auth (Better Auth) directory. |


### VpcEndpoint

Create an instance: `$vpc_endpoint = $client->VpcEndpoint();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `example_restricted_projects` | `array` | A list of example projects that are restricted to use this VPC endpoint. |
| `id` | `string` |  |
| `label` | `string` | A descriptive label for the VPC endpoint |
| `num_restricted_projects` | `int` | The number of projects that are restricted to use this VPC endpoint. |
| `region_id` | `string` | The region where the VPC endpoint is located |
| `state` | `string` | The current state of the VPC endpoint. |
| `vpc_endpoint_id` | `string` | Cloud provider identifier for the VPC endpoint. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the VpcEndpoint record (throws on error).
$vpc_endpoint = $client->VpcEndpoint()->load(["id" => "vpc_endpoint_id", "organization_id" => "organization_id", "region_id" => "region_id"]);
```

#### Example: List

```php
// list() returns an array of VpcEndpoint records (throws on error).
$vpc_endpoints = $client->VpcEndpoint()->list();
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── neon_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`neon_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$branchstorage = $client->BranchStorage();
$branchstorage->load(["id" => "example_id", "project_id" => "example"]);

// $branchstorage->data_get() now returns the branchstorage data from the last load
// $branchstorage->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
