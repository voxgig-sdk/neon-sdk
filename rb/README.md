# Neon Ruby SDK



The Ruby SDK for the Neon API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Anonymize` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/neon-sdk/releases](https://github.com/voxgig-sdk/neon-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "Neon_sdk"

client = NeonSDK.new({
  "apikey" => ENV["NEON_APIKEY"],
})
```

### 3. Load an anonymizedbranchstatus

AnonymizedBranchStatus is nested under branch, so provide the `branch_id`.

```ruby
begin
  # load returns the ENTITY — call data_get for the AnonymizedBranchStatus record (raises on error).
  anonymizedbranchstatus = client.AnonymizedBranchStatus.load({ "branch_id" => "example_branch_id", "project_id" => "example_project_id" })
  puts anonymizedbranchstatus
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# create returns the ENTITY — call data_get for the created Anonymize record.
created = client.Anonymize.create({ "branch_id" => "example_branch_id", "project_id" => "example_project_id" })

```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  branchstorage = client.BranchStorage.load({ "id" => "example_id", "project_id" => "example" })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = NeonSDK.test({
  "entity" => { "branchstorage" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
branchstorage = client.BranchStorage.load({ "id" => "test01", "project_id" => "example" })
puts branchstorage
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = NeonSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
NEON_TEST_LIVE=TRUE
NEON_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### NeonSDK

```ruby
require_relative "Neon_sdk"
client = NeonSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = NeonSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### NeonSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Anonymize` | `(data) -> AnonymizeEntity` | Create an Anonymize entity instance. |
| `AnonymizedBranchStatus` | `(data) -> AnonymizedBranchStatusEntity` | Create an AnonymizedBranchStatus entity instance. |
| `ApiKey` | `(data) -> ApiKeyEntity` | Create an ApiKey entity instance. |
| `Auth` | `(data) -> AuthEntity` | Create an Auth entity instance. |
| `AuthLegacy` | `(data) -> AuthLegacyEntity` | Create an AuthLegacy entity instance. |
| `AvailablePreloadLibrary` | `(data) -> AvailablePreloadLibraryEntity` | Create an AvailablePreloadLibrary entity instance. |
| `BackupSchedule` | `(data) -> BackupScheduleEntity` | Create a BackupSchedule entity instance. |
| `Branch` | `(data) -> BranchEntity` | Create a Branch entity instance. |
| `BranchAiGateway` | `(data) -> BranchAiGatewayEntity` | Create a BranchAiGateway entity instance. |
| `BranchOperation` | `(data) -> BranchOperationEntity` | Create a BranchOperation entity instance. |
| `BranchSchema` | `(data) -> BranchSchemaEntity` | Create a BranchSchema entity instance. |
| `BranchSchemaCompare` | `(data) -> BranchSchemaCompareEntity` | Create a BranchSchemaCompare entity instance. |
| `BranchStorage` | `(data) -> BranchStorageEntity` | Create a BranchStorage entity instance. |
| `Bucket` | `(data) -> BucketEntity` | Create a Bucket entity instance. |
| `BucketObjectsList` | `(data) -> BucketObjectsListEntity` | Create a BucketObjectsList entity instance. |
| `ConnectionUri` | `(data) -> ConnectionUriEntity` | Create a ConnectionUri entity instance. |
| `Consumption` | `(data) -> ConsumptionEntity` | Create a Consumption entity instance. |
| `CreateCredential` | `(data) -> CreateCredentialEntity` | Create a CreateCredential entity instance. |
| `Credential` | `(data) -> CredentialEntity` | Create a Credential entity instance. |
| `CurrentUserInfo` | `(data) -> CurrentUserInfoEntity` | Create a CurrentUserInfo entity instance. |
| `CustomDomain` | `(data) -> CustomDomainEntity` | Create a CustomDomain entity instance. |
| `DataApi` | `(data) -> DataApiEntity` | Create a DataApi entity instance. |
| `Database` | `(data) -> DatabaseEntity` | Create a Database entity instance. |
| `EmailProvider` | `(data) -> EmailProviderEntity` | Create an EmailProvider entity instance. |
| `EmailServer` | `(data) -> EmailServerEntity` | Create an EmailServer entity instance. |
| `Empty` | `(data) -> EmptyEntity` | Create an Empty entity instance. |
| `Endpoint` | `(data) -> EndpointEntity` | Create an Endpoint entity instance. |
| `EndpointOperation` | `(data) -> EndpointOperationEntity` | Create an EndpointOperation entity instance. |
| `Function` | `(data) -> FunctionEntity` | Create a Function entity instance. |
| `Jwk` | `(data) -> JwkEntity` | Create a Jwk entity instance. |
| `MaskingRule` | `(data) -> MaskingRuleEntity` | Create a MaskingRule entity instance. |
| `Member` | `(data) -> MemberEntity` | Create a Member entity instance. |
| `NeonAuthAllowLocalhost` | `(data) -> NeonAuthAllowLocalhostEntity` | Create a NeonAuthAllowLocalhost entity instance. |
| `NeonAuthConfig` | `(data) -> NeonAuthConfigEntity` | Create a NeonAuthConfig entity instance. |
| `NeonAuthCreateIntegration` | `(data) -> NeonAuthCreateIntegrationEntity` | Create a NeonAuthCreateIntegration entity instance. |
| `NeonAuthCreateNewUser` | `(data) -> NeonAuthCreateNewUserEntity` | Create a NeonAuthCreateNewUser entity instance. |
| `NeonAuthEmailAndPasswordConfig` | `(data) -> NeonAuthEmailAndPasswordConfigEntity` | Create a NeonAuthEmailAndPasswordConfig entity instance. |
| `NeonAuthEmailServerConfig` | `(data) -> NeonAuthEmailServerConfigEntity` | Create a NeonAuthEmailServerConfig entity instance. |
| `NeonAuthIntegration` | `(data) -> NeonAuthIntegrationEntity` | Create a NeonAuthIntegration entity instance. |
| `NeonAuthMagicLinkConfig` | `(data) -> NeonAuthMagicLinkConfigEntity` | Create a NeonAuthMagicLinkConfig entity instance. |
| `NeonAuthOauthProvider` | `(data) -> NeonAuthOauthProviderEntity` | Create a NeonAuthOauthProvider entity instance. |
| `NeonAuthOrganizationConfig` | `(data) -> NeonAuthOrganizationConfigEntity` | Create a NeonAuthOrganizationConfig entity instance. |
| `NeonAuthPhoneNumberConfig` | `(data) -> NeonAuthPhoneNumberConfigEntity` | Create a NeonAuthPhoneNumberConfig entity instance. |
| `NeonAuthPluginConfig` | `(data) -> NeonAuthPluginConfigEntity` | Create a NeonAuthPluginConfig entity instance. |
| `NeonAuthRedirectUriWhitelistDomain` | `(data) -> NeonAuthRedirectUriWhitelistDomainEntity` | Create a NeonAuthRedirectUriWhitelistDomain entity instance. |
| `NeonAuthTransferAuthProviderProject` | `(data) -> NeonAuthTransferAuthProviderProjectEntity` | Create a NeonAuthTransferAuthProviderProject entity instance. |
| `NeonAuthWebhookConfig` | `(data) -> NeonAuthWebhookConfigEntity` | Create a NeonAuthWebhookConfig entity instance. |
| `NeonFunction` | `(data) -> NeonFunctionEntity` | Create a NeonFunction entity instance. |
| `NeonFunctionDeployment` | `(data) -> NeonFunctionDeploymentEntity` | Create a NeonFunctionDeployment entity instance. |
| `Operation` | `(data) -> OperationEntity` | Create an Operation entity instance. |
| `OrgApiKeyCreate` | `(data) -> OrgApiKeyCreateEntity` | Create an OrgApiKeyCreate entity instance. |
| `OrgApiKeyRevoke` | `(data) -> OrgApiKeyRevokeEntity` | Create an OrgApiKeyRevoke entity instance. |
| `OrgApiKeysListResponseItem` | `(data) -> OrgApiKeysListResponseItemEntity` | Create an OrgApiKeysListResponseItem entity instance. |
| `Organization` | `(data) -> OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationInvitation` | `(data) -> OrganizationInvitationEntity` | Create an OrganizationInvitation entity instance. |
| `Presign` | `(data) -> PresignEntity` | Create a Presign entity instance. |
| `Project` | `(data) -> ProjectEntity` | Create a Project entity instance. |
| `ProjectBranchLogField` | `(data) -> ProjectBranchLogFieldEntity` | Create a ProjectBranchLogField entity instance. |
| `ProjectBranchLogFieldValue` | `(data) -> ProjectBranchLogFieldValueEntity` | Create a ProjectBranchLogFieldValue entity instance. |
| `ProjectBranchLogsQuery` | `(data) -> ProjectBranchLogsQueryEntity` | Create a ProjectBranchLogsQuery entity instance. |
| `ProjectMember` | `(data) -> ProjectMemberEntity` | Create a ProjectMember entity instance. |
| `ProjectMemberRole` | `(data) -> ProjectMemberRoleEntity` | Create a ProjectMemberRole entity instance. |
| `ProjectPermission` | `(data) -> ProjectPermissionEntity` | Create a ProjectPermission entity instance. |
| `ProjectRecover` | `(data) -> ProjectRecoverEntity` | Create a ProjectRecover entity instance. |
| `ProjectTransferRequest` | `(data) -> ProjectTransferRequestEntity` | Create a ProjectTransferRequest entity instance. |
| `Region` | `(data) -> RegionEntity` | Create a Region entity instance. |
| `Role` | `(data) -> RoleEntity` | Create a Role entity instance. |
| `RoleOperation` | `(data) -> RoleOperationEntity` | Create a RoleOperation entity instance. |
| `RolePassword` | `(data) -> RolePasswordEntity` | Create a RolePassword entity instance. |
| `SendNeonAuthTestEmail` | `(data) -> SendNeonAuthTestEmailEntity` | Create a SendNeonAuthTestEmail entity instance. |
| `Snapshot` | `(data) -> SnapshotEntity` | Create a Snapshot entity instance. |
| `SpendingLimit` | `(data) -> SpendingLimitEntity` | Create a SpendingLimit entity instance. |
| `Trigger` | `(data) -> TriggerEntity` | Create a Trigger entity instance. |
| `UpdateNeonAuthUserRole` | `(data) -> UpdateNeonAuthUserRoleEntity` | Create an UpdateNeonAuthUserRole entity instance. |
| `VpcEndpoint` | `(data) -> VpcEndpointEntity` | Create a VpcEndpoint entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `NeonError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### Anonymize

| Field | Description |
| --- | --- |
| `completed_at` | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | Number of columns that had masking rules applied during the attempt. |
| `started_at` | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | Username of the user who triggered the latest anonymization attempt. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/anonymize`

#### AnonymizedBranchStatus

| Field | Description |
| --- | --- |
| `completed_at` | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | Number of columns that had masking rules applied during the attempt. |
| `started_at` | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | Username of the user who triggered the latest anonymization attempt. |

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
| `annotation` | Annotation data associated with the annotated object. |
| `annotations` | Map of annotations keyed by resource identifier, where each value contains the annotation data for that resource. |
| `branch` | Branch returned by the request. |
| `branches` | Branches in the project. |
| `id` |  |
| `pagination` | To paginate the response, issue an initial request with `limit` value. |

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
| `tables` | Tables present in the branch schema. |

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
| `branches` | Per-branch consumption history records returned for the requested time range. |
| `pagination` | Cursor-based pagination. |
| `projects` | Per-project consumption history records included in the response. |

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
| `custom_domains` |  |
| `functions` |  |
| `id` |  |
| `pagination` | To paginate the response, issue an initial request with `limit` value. |

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
| `pagination` | Cursor-based pagination. |
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
| `expires_in_seconds` | How long the presigned URL stays valid, in seconds. |
| `operation` | The transfer direction. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/presign`

#### Project

| Field | Description |
| --- | --- |
| `active_time_seconds` | Seconds. |
| `applications` | Map of project IDs to their installed applications. |
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
| `effective_project_permission` |  |
| `hipaa_enabled_at` | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | The number of seconds to retain the shared history for all branches in this project. |
| `id` | The Neon project ID. |
| `integrations` | Map of project IDs to their associated integration details. |
| `label` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | A timestamp indicating when project maintenance begins. |
| `name` | The project name |
| `org_id` | The Neon organization ID. |
| `owner` | Ownership details for the project, including the owner's name and email. |
| `owner_id` | ID of the organization that owns the project. |
| `pagination` | Cursor-based pagination. |
| `pg_version` | The major Postgres version number. |
| `platform_id` | The cloud platform identifier. |
| `project` | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `projects` | List of projects accessible to the caller. |
| `provisioner` | Compute provisioner. |
| `proxy_host` | The proxy host for the project. |
| `quota_reset_at` | Deprecated. |
| `region_id` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | The current space occupied by the project in Postgres storage, in bytes. |
| `unavailable_project_ids` | A list of project IDs indicating which projects are known to exist, but whose details could not be fetched within the requested (or implicit) time limit |
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

Create an instance: `anonymize = client.Anonymize`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `String` | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | `Integer` | Number of columns that had masking rules applied during the attempt. |
| `started_at` | `String` | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | `String` | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | `String` | Username of the user who triggered the latest anonymization attempt. |

#### Example: Create

```ruby
anonymize = client.Anonymize.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
})
```


### AnonymizedBranchStatus

Create an instance: `anonymized_branch_status = client.AnonymizedBranchStatus`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `String` | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | `Integer` | Number of columns that had masking rules applied during the attempt. |
| `started_at` | `String` | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | `String` | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | `String` | Username of the user who triggered the latest anonymization attempt. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AnonymizedBranchStatus record (raises on error).
anonymized_branch_status = client.AnonymizedBranchStatus.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```


### ApiKey

Create an instance: `api_key = client.ApiKey`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` | A timestamp indicating when the API key was created |
| `created_by` | `String` | ID of the user who created this API key |
| `id` | `Integer` | The API key's unique numeric ID. |
| `key` | `String` | The generated 64-bit token required to access the Neon API |
| `key_name` | `String` | A user-specified API key name. |
| `last_used_at` | `String` | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `String` | The IP address from which the API key was last used |
| `name` | `String` | The user-specified API key name |

#### Example: List

```ruby
# list returns an Array of ApiKey records (raises on error).
api_keys = client.ApiKey.list
```

#### Example: Create

```ruby
api_key = client.ApiKey.create({
  "created_at" => "example_created_at", # String
  "created_by" => "example_created_by", # String
  "id" => 1, # Integer
  "key" => "example_key", # String
  "key_name" => "example_key_name", # String
  "last_used_from_addr" => "example_last_used_from_addr", # String
  "name" => "example_name", # String
})
```


### Auth

Create an instance: `auth = client.Auth`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `String` | The ID of the account associated with this authentication record. |
| `auth_data` | `String` |  |
| `auth_method` | `String` | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Auth record (raises on error).
auth = client.Auth.load()
```

#### Example: Create

```ruby
auth = client.Auth.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "account_id" => "example_account_id", # String
  "auth_method" => "example_auth_method", # String
})
```


### AuthLegacy

Create an instance: `auth_legacy = client.AuthLegacy`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `String` | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `String` | URI to add to the redirect URI allowlist for the auth provider. |

#### Example: Create

```ruby
auth_legacy = client.AuthLegacy.create({
  "project_id" => "example_project_id", # String
  "auth_provider" => "example_auth_provider", # String
  "domain" => "example_domain", # String
})
```


### AvailablePreloadLibrary

Create an instance: `available_preload_library = client.AvailablePreloadLibrary`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` | Human-readable explanation of the library's purpose and behavior. |
| `is_default` | `Boolean` | Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints. |
| `is_experimental` | `Boolean` | Marks the library as experimental. |
| `library_name` | `String` | Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`). |
| `version` | `String` | Version of the preload library. |

#### Example: List

```ruby
# list returns an Array of AvailablePreloadLibrary records (raises on error).
available_preload_librarys = client.AvailablePreloadLibrary.list
```


### BackupSchedule

Create an instance: `backup_schedule = client.BackupSchedule`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `day` | `Integer` | The day of the week or month to take the snapshot (if applicable). |
| `frequency` | `String` | How often to take snapshots. |
| `hour` | `Integer` | The hour of the day to take the snapshot (if applicable). |
| `month` | `Integer` | The month of the year to take the snapshot (if applicable). |
| `retention_seconds` | `Integer` | How long to keep a scheduled snapshot (in seconds) before it's automatically deleted. |

#### Example: List

```ruby
# list returns an Array of BackupSchedule records (raises on error).
backup_schedules = client.BackupSchedule.list
```


### Branch

Create an instance: `branch = client.Branch`

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
| `annotation` | `Hash` | Annotation data associated with the annotated object. |
| `annotations` | `Hash` | Map of annotations keyed by resource identifier, where each value contains the annotation data for that resource. |
| `branch` | `Hash` | Branch returned by the request. |
| `branches` | `Array` | Branches in the project. |
| `id` | `String` |  |
| `pagination` | `Hash` | To paginate the response, issue an initial request with `limit` value. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Branch record (raises on error).
branch = client.Branch.load({ "id" => "branch_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of Branch records (raises on error).
branchs = client.Branch.list
```

#### Example: Create

```ruby
branch = client.Branch.create({
  "project_id" => "example_project_id", # String
  "annotation" => {}, # Hash
  "annotations" => {}, # Hash
  "branch" => {}, # Hash
  "branches" => [], # Array
})
```


### BranchAiGateway

Create an instance: `branch_ai_gateway = client.BranchAiGateway`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_url` | `String` | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | `Boolean` | Always `true` in 200 responses. |
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the BranchAiGateway record (raises on error).
branch_ai_gateway = client.BranchAiGateway.load({ "id" => "branch_ai_gateway_id", "project_id" => "project_id" })
```


### BranchOperation

Create an instance: `branch_operation = client.BranchOperation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch` | `Hash` | Branch returned by the request. |
| `id` | `String` |  |
| `operations` | `Array` |  |

#### Example: Create

```ruby
branch_operation = client.BranchOperation.create({
  "id" => "example_id", # String
  "project_id" => "example_project_id", # String
  "branch" => {}, # Hash
  "operations" => [], # Array
})
```


### BranchSchema

Create an instance: `branch_schema = client.BranchSchema`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `tables` | `Array` | Tables present in the branch schema. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the BranchSchema record (raises on error).
branch_schema = client.BranchSchema.load({ "id" => "branch_schema_id", "project_id" => "project_id", "db_name" => "db_name" })
```


### BranchSchemaCompare

Create an instance: `branch_schema_compare = client.BranchSchemaCompare`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the BranchSchemaCompare record (raises on error).
branch_schema_compare = client.BranchSchemaCompare.load({ "id" => "branch_schema_compare_id", "project_id" => "project_id", "db_name" => "db_name" })
```


### BranchStorage

Create an instance: `branch_storage = client.BranchStorage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `Boolean` | Always `true` in 200 responses. |
| `force_path_style` | `Boolean` | Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). |
| `id` | `String` |  |
| `region` | `String` | The AWS region for this branch's object storage. |
| `s3_endpoint` | `String` | The S3-compatible endpoint URL for this branch. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the BranchStorage record (raises on error).
branch_storage = client.BranchStorage.load({ "id" => "branch_storage_id", "project_id" => "project_id" })
```


### Bucket

Create an instance: `bucket = client.Bucket`

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
| `access_level` | `String` | Access level for the bucket. |
| `created_at` | `String` | When the bucket was created. |
| `id` | `String` |  |
| `name` | `String` | The bucket name. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Bucket record (raises on error).
bucket = client.Bucket.load({ "branch_id" => "branch_id", "bucket_id" => "bucket_id", "object_key" => "object_key", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of Bucket records (raises on error).
buckets = client.Bucket.list
```

#### Example: Create

```ruby
bucket = client.Bucket.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "created_at" => "example_created_at", # String
  "name" => "example_name", # String
})
```


### BucketObjectsList

Create an instance: `bucket_objects_list = client.BucketObjectsList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `etag` | `String` | The object's entity tag (content hash). |
| `key` | `String` | The full object key. |
| `last_modified` | `String` | The time the object was last modified. |
| `size` | `Integer` | The object size in bytes. |

#### Example: List

```ruby
# list returns an Array of BucketObjectsList records (raises on error).
bucket_objects_lists = client.BucketObjectsList.list
```


### ConnectionUri

Create an instance: `connection_uri = client.ConnectionUri`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `uri` | `String` | The connection URI. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ConnectionUri record (raises on error).
connection_uri = client.ConnectionUri.load({ "project_id" => "project_id", "database_name" => "database_name", "role_name" => "role_name" })
```


### Consumption

Create an instance: `consumption = client.Consumption`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branches` | `Array` | Per-branch consumption history records returned for the requested time range. |
| `pagination` | `Hash` | Cursor-based pagination. |
| `projects` | `Array` | Per-project consumption history records included in the response. |

#### Example: List

```ruby
# list returns an Array of Consumption records (raises on error).
consumptions = client.Consumption.list
```


### CreateCredential

Create an instance: `create_credential = client.CreateCredential`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `String` | Free-form customer label for the credential. |
| `principal_type` | `String` | Principal type for the credential. |
| `scopes` | `Array` |  |

#### Example: Create

```ruby
create_credential = client.CreateCredential.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "principal_type" => "example_principal_type", # String
  "scopes" => [], # Array
})
```


### Credential

Create an instance: `credential = client.Credential`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_id` | `String` |  |
| `created_at` | `String` |  |
| `expires_at` | `String` | When the credential expires; absent means never expires. |
| `function_id` | `String` |  |
| `id` | `String` |  |
| `last_used_at` | `String` |  |
| `name` | `String` | Customer-supplied label; absent when not provided at issuance. |
| `principal_type` | `String` |  |
| `revoked_at` | `String` |  |
| `scopes` | `Array` |  |
| `token_id` | `String` | Opaque credential id (e.g. |
| `token_id_short` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Credential records (raises on error).
credentials = client.Credential.list
```

#### Example: Create

```ruby
credential = client.Credential.create({
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


### CurrentUserInfo

Create an instance: `current_user_info = client.CurrentUserInfo`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `String` | Email address associated with this auth account. |
| `image` | `String` | URL of the user's profile picture as provided by the identity provider. |
| `login` | `String` | Deprecated. |
| `name` | `String` | Display name of the account as provided by the identity provider. |
| `provider` | `String` | Identity provider id from keycloak |

#### Example: List

```ruby
# list returns an Array of CurrentUserInfo records (raises on error).
current_user_infos = client.CurrentUserInfo.list
```


### CustomDomain

Create an instance: `custom_domain = client.CustomDomain`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `String` | The custom domain to register (for example `dashboard.acme.com`). |
| `entity_id` | `String` | The target entity's identifier within the branch. |
| `entity_type` | `String` | The kind of branch entity to point the domain at. |

#### Example: Create

```ruby
custom_domain = client.CustomDomain.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "domain" => "example_domain", # String
  "entity_id" => "example_entity_id", # String
  "entity_type" => "example_entity_type", # String
})
```


### DataApi

Create an instance: `data_api = client.DataApi`

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
| `add_default_grants` | `Boolean` | Grant all permissions to the tables in the public schema to authenticated users |
| `auth_provider` | `String` | Authentication provider for the Neon Data API. |
| `available_schemas` | `Array` | List of available database schemas (SubZero only) |
| `id` | `String` |  |
| `jwks_url` | `String` | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `jwt_audience` | `String` | Expected `aud` claim in incoming JWTs. |
| `provider_name` | `String` | Display name for the authentication provider. |
| `settings` | `Hash` | Configuration settings for the Data API (SubZero only) |
| `skip_auth_schema` | `Boolean` | Skip creating the auth schema and RLS functions |
| `status` | `String` | The status of the Neon Data API deployment |
| `url` | `String` | The URL of the Neon Data API |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the DataApi record (raises on error).
data_api = client.DataApi.load({ "id" => "data_api_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### Example: Create

```ruby
data_api = client.DataApi.create({
  "branch_id" => "example_branch_id", # String
  "id" => "example_id", # String
  "project_id" => "example_project_id", # String
  "status" => "example_status", # String
  "url" => "example_url", # String
})
```


### Database

Create an instance: `database = client.Database`

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
| `branch_id` | `String` | The ID of the branch this database belongs to. |
| `created_at` | `String` | A timestamp indicating when the database was created |
| `database` | `Hash` | Configuration for the new Postgres database. |
| `id` | `Integer` | The database ID |
| `name` | `String` | The database name |
| `owner_name` | `String` | The name of role that owns the database |
| `updated_at` | `String` | A timestamp indicating when the database was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Database record (raises on error).
database = client.Database.load({ "id" => "database_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of Database records (raises on error).
databases = client.Database.list
```

#### Example: Create

```ruby
database = client.Database.create({
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


### EmailProvider

Create an instance: `email_provider = client.EmailProvider`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the EmailProvider record (raises on error).
email_provider = client.EmailProvider.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```


### EmailServer

Create an instance: `email_server = client.EmailServer`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the EmailServer record (raises on error).
email_server = client.EmailServer.load({ "project_id" => "project_id" })
```


### Empty

Create an instance: `empty = client.Empty`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_org_id` | `String` | The destination organization identifier |
| `project_ids` | `Array` | The list of projects ids to transfer. |
| `schedule` | `Array` | List of schedule entries defining the backup frequency. |

#### Example: Create

```ruby
empty = client.Empty.create({
  "organization_id" => "example_organization_id", # String
  "destination_org_id" => "example_destination_org_id", # String
  "project_ids" => [], # Array
  "schedule" => [], # Array
})
```


### Endpoint

Create an instance: `endpoint = client.Endpoint`

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
| `autoscaling_limit_max_cu` | `Float` | The maximum number of Compute Units |
| `autoscaling_limit_min_cu` | `Float` | The minimum number of Compute Units |
| `branch_id` | `String` | The ID of the branch this compute endpoint belongs to. |
| `compute_release_version` | `String` | Attached compute's release version number. |
| `created_at` | `String` | A timestamp indicating when the compute endpoint was created |
| `creation_source` | `String` | The compute endpoint creation source |
| `current_state` | `String` | Lifecycle state of the compute endpoint. |
| `disabled` | `Boolean` | Whether to restrict connections to the compute endpoint. |
| `endpoint` | `Hash` | Configuration for the compute endpoint to create. |
| `host` | `String` | The hostname of the compute endpoint. |
| `id` | `String` | The compute endpoint ID. |
| `last_active` | `String` | A timestamp indicating when the compute endpoint was last active |
| `name` | `String` | Optional name of the compute endpoint |
| `passwordless_access` | `Boolean` | Whether to permit passwordless access to the compute endpoint |
| `pending_state` | `String` | Target state the compute endpoint is transitioning to. |
| `pooler_enabled` | `Boolean` | Deprecated. |
| `pooler_mode` | `String` | Deprecated. |
| `project_id` | `String` | The ID of the project this compute endpoint belongs to. |
| `provisioner` | `String` | Compute provisioner. |
| `proxy_host` | `String` | Deprecated. |
| `region_id` | `String` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `Hash` | A collection of settings for a compute endpoint |
| `started_at` | `String` | A timestamp indicating when the compute endpoint was last started |
| `suspend_timeout_seconds` | `Integer` | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `suspended_at` | `String` | A timestamp indicating when the compute endpoint was last suspended |
| `type` | `String` | Compute endpoint type. |
| `updated_at` | `String` | A timestamp indicating when the compute endpoint was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Endpoint record (raises on error).
endpoint = client.Endpoint.load({ "id" => "endpoint_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of Endpoint records (raises on error).
endpoints = client.Endpoint.list
```

#### Example: Create

```ruby
endpoint = client.Endpoint.create({
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


### EndpointOperation

Create an instance: `endpoint_operation = client.EndpointOperation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `endpoint` | `Hash` | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` | `String` |  |
| `operations` | `Array` |  |

#### Example: Create

```ruby
endpoint_operation = client.EndpointOperation.create({
  "id" => "example_id", # String
  "project_id" => "example_project_id", # String
  "endpoint" => {}, # Hash
  "operations" => [], # Array
})
```


### Function

Create an instance: `function = client.Function`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_domains` | `Array` |  |
| `functions` | `Array` |  |
| `id` | `String` |  |
| `pagination` | `Hash` | To paginate the response, issue an initial request with `limit` value. |

#### Example: List

```ruby
# list returns an Array of Function records (raises on error).
functions = client.Function.list
```


### Jwk

Create an instance: `jwk = client.Jwk`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_id` | `String` | The Neon branch ID. |
| `created_at` | `String` | The date and time when the JWKS was created |
| `id` | `String` | The JWKS configuration's ID. |
| `jwks_url` | `String` | URL of the provider's JWKS endpoint used to verify JWTs. |
| `jwt_audience` | `String` | Expected `aud` claim in incoming JWTs. |
| `project_id` | `String` | The Neon project ID. |
| `provider_name` | `String` | The name of the authentication provider (e.g., Clerk, Stytch, Auth0) |
| `role_names` | `Array` | Deprecated. |
| `skip_role_creation` | `Boolean` | Deprecated. |
| `updated_at` | `String` | The date and time when the JWKS was last modified |

#### Example: List

```ruby
# list returns an Array of Jwk records (raises on error).
jwks = client.Jwk.list
```

#### Example: Create

```ruby
jwk = client.Jwk.create({
  "project_id" => "example_project_id", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "jwks_url" => "example_jwks_url", # String
  "provider_name" => "example_provider_name", # String
  "updated_at" => "example_updated_at", # String
})
```


### MaskingRule

Create an instance: `masking_rule = client.MaskingRule`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `column_name` | `String` | The name of the column to be masked |
| `database_name` | `String` | The name of the database containing the table to be masked |
| `masking_function` | `String` | The PostgreSQL Anonymizer masking function to apply. |
| `masking_rules` | `Array` | List of masking rules for the branch |
| `masking_value` | `String` | A literal value to set on the column when masking. |
| `schema_name` | `String` | The name of the schema containing the table to be masked |
| `table_name` | `String` | The name of the table containing the column to be masked |

#### Example: List

```ruby
# list returns an Array of MaskingRule records (raises on error).
masking_rules = client.MaskingRule.list
```


### Member

Create an instance: `member = client.Member`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` | The organization member's ID. |
| `joined_at` | `String` | Timestamp when the user joined the organization. |
| `org_id` | `String` | The Neon organization ID. |
| `role` | `String` | Organization member's role. |
| `user_id` | `String` | The Neon user ID. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Member record (raises on error).
member = client.Member.load({ "id" => "member_id", "organization_id" => "organization_id" })
```


### NeonAuthAllowLocalhost

Create an instance: `neon_auth_allow_localhost = client.NeonAuthAllowLocalhost`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_localhost` | `Boolean` | Whether to allow localhost connections |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NeonAuthAllowLocalhost record (raises on error).
neon_auth_allow_localhost = client.NeonAuthAllowLocalhost.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```


### NeonAuthConfig

Create an instance: `neon_auth_config = client.NeonAuthConfig`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `String` | The application name used in auth emails and communications. |


### NeonAuthCreateIntegration

Create an instance: `neon_auth_create_integration = client.NeonAuthCreateIntegration`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `String` | Authentication provider integrated with this Neon Auth configuration. |
| `branch_id` | `String` | The Neon branch ID. |
| `database_name` | `String` | Name of the database to enable Neon Auth on. |
| `project_id` | `String` | The Neon project ID. |
| `role_name` | `String` | Deprecated. |

#### Example: Create

```ruby
neon_auth_create_integration = client.NeonAuthCreateIntegration.create({
  "auth_provider" => "example_auth_provider", # String
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
})
```


### NeonAuthCreateNewUser

Create an instance: `neon_auth_create_new_user = client.NeonAuthCreateNewUser`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `String` | Authentication provider integrated with this Neon Auth configuration. |
| `email` | `String` | Email address of the new Neon Auth user to create. |
| `name` | `String` | Display name for the new user. |
| `project_id` | `String` | The Neon project ID. |

#### Example: Create

```ruby
neon_auth_create_new_user = client.NeonAuthCreateNewUser.create({
  "auth_provider" => "example_auth_provider", # String
  "email" => "example_email", # String
  "project_id" => "example_project_id", # String
})
```


### NeonAuthEmailAndPasswordConfig

Create an instance: `neon_auth_email_and_password_config = client.NeonAuthEmailAndPasswordConfig`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_sign_in_after_verification` | `Boolean` | Whether users are automatically signed in after verifying their email |
| `disable_sign_up` | `Boolean` | Whether to disable new user sign ups |
| `email_verification_method` | `String` | Controls how email addresses are verified during sign-up or sign-in. |
| `enabled` | `Boolean` | Whether email and password authentication is enabled |
| `require_email_verification` | `Boolean` | Whether email verification is required before users can sign in |
| `send_verification_email_on_sign_in` | `Boolean` | Whether to send a verification email when users sign in |
| `send_verification_email_on_sign_up` | `Boolean` | Whether to send a verification email when users sign up |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NeonAuthEmailAndPasswordConfig record (raises on error).
neon_auth_email_and_password_config = client.NeonAuthEmailAndPasswordConfig.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```


### NeonAuthEmailServerConfig

Create an instance: `neon_auth_email_server_config = client.NeonAuthEmailServerConfig`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### NeonAuthIntegration

Create an instance: `neon_auth_integration = client.NeonAuthIntegration`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `String` | Authentication provider integrated with this Neon Auth configuration. |
| `auth_provider_project_id` | `String` | Project identifier assigned by the auth provider for this integration. |
| `base_url` | `String` | Base URL of the Neon Auth service endpoint for this integration. |
| `branch_id` | `String` | The Neon branch ID. |
| `created_at` | `String` | Timestamp when the Neon Auth integration was created, in RFC 3339 format (UTC). |
| `db_name` | `String` | Name of the database used by the Neon Auth integration. |
| `jwks_url` | `String` | URL of the provider's JWKS endpoint used to verify JWTs. |
| `name` | `String` | Application name shown in auth emails and communications. |
| `owned_by` | `String` | Owner of the auth provider project. |
| `transfer_status` | `String` | Ownership transfer state for the auth provider project. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NeonAuthIntegration record (raises on error).
neon_auth_integration = client.NeonAuthIntegration.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of NeonAuthIntegration records (raises on error).
neon_auth_integrations = client.NeonAuthIntegration.list
```


### NeonAuthMagicLinkConfig

Create an instance: `neon_auth_magic_link_config = client.NeonAuthMagicLinkConfig`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disable_sign_up` | `Boolean` | Whether to disable sign-up via magic link. |
| `enabled` | `Boolean` | Whether the magic link plugin is enabled. |
| `expires_in` | `Integer` | Minutes until the magic link expires. |


### NeonAuthOauthProvider

Create an instance: `neon_auth_oauth_provider = client.NeonAuthOauthProvider`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_id` | `String` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `String` | OAuth client secret for the provider. |
| `id` | `String` | The OAuth provider's ID. |
| `microsoft_tenant_id` | `String` | Tenant ID for the Microsoft OAuth provider. |
| `type` | `String` | OAuth provider key type. |

#### Example: List

```ruby
# list returns an Array of NeonAuthOauthProvider records (raises on error).
neon_auth_oauth_providers = client.NeonAuthOauthProvider.list
```

#### Example: Create

```ruby
neon_auth_oauth_provider = client.NeonAuthOauthProvider.create({
  "project_id" => "example_project_id", # String
  "id" => "example_id", # String
  "type" => "example_type", # String
})
```


### NeonAuthOrganizationConfig

Create an instance: `neon_auth_organization_config = client.NeonAuthOrganizationConfig`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `creator_role` | `String` | Role of the organization's creator. |
| `enabled` | `Boolean` | Whether the organization plugin is enabled. |
| `membership_limit` | `Integer` | Maximum number of members per organization. |
| `organization_limit` | `Integer` | Maximum organizations a user can belong to (created or joined). |
| `send_invitation_email` | `Boolean` | Whether to send invitation emails when inviting members to an organization. |


### NeonAuthPhoneNumberConfig

Create an instance: `neon_auth_phone_number_config = client.NeonAuthPhoneNumberConfig`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `Boolean` | Whether the phone number plugin is enabled. |
| `otp_expires_in` | `Integer` | Time in seconds before the OTP expires |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NeonAuthPhoneNumberConfig record (raises on error).
neon_auth_phone_number_config = client.NeonAuthPhoneNumberConfig.load({ "branch_id" => "branch_id", "project_id" => "project_id" })
```


### NeonAuthPluginConfig

Create an instance: `neon_auth_plugin_config = client.NeonAuthPluginConfig`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_id` | `String` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `String` | OAuth client secret for the provider. |
| `id` | `String` | The OAuth provider's ID. |
| `type` | `String` | OAuth provider key type. |

#### Example: List

```ruby
# list returns an Array of NeonAuthPluginConfig records (raises on error).
neon_auth_plugin_configs = client.NeonAuthPluginConfig.list
```


### NeonAuthRedirectUriWhitelistDomain

Create an instance: `neon_auth_redirect_uri_whitelist_domain = client.NeonAuthRedirectUriWhitelistDomain`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `String` | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `String` | Allowed redirect URI domain for the auth provider. |

#### Example: List

```ruby
# list returns an Array of NeonAuthRedirectUriWhitelistDomain records (raises on error).
neon_auth_redirect_uri_whitelist_domains = client.NeonAuthRedirectUriWhitelistDomain.list
```


### NeonAuthTransferAuthProviderProject

Create an instance: `neon_auth_transfer_auth_provider_project = client.NeonAuthTransferAuthProviderProject`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `String` | Authentication provider integrated with this Neon Auth configuration. |
| `project_id` | `String` | The Neon project ID. |
| `url` | `String` | URL for completing the process of ownership transfer |

#### Example: Create

```ruby
neon_auth_transfer_auth_provider_project = client.NeonAuthTransferAuthProviderProject.create({
  "auth_provider" => "example_auth_provider", # String
  "project_id" => "example_project_id", # String
  "url" => "example_url", # String
})
```


### NeonAuthWebhookConfig

Create an instance: `neon_auth_webhook_config = client.NeonAuthWebhookConfig`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `Boolean` | Whether the webhook is active. |
| `enabled_events` | `Array` | Event types that trigger this webhook. |
| `timeout_seconds` | `Integer` | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | `String` | Destination URL that receives webhook event payloads. |

#### Example: List

```ruby
# list returns an Array of NeonAuthWebhookConfig records (raises on error).
neon_auth_webhook_configs = client.NeonAuthWebhookConfig.list
```


### NeonFunction

Create an instance: `neon_function = client.NeonFunction`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_deployment` | `Object` | The most recent deployment whose build completed successfully. |
| `created_at` | `String` |  |
| `current_deployment` | `Object` | The most recent deployment, regardless of build status. |
| `id` | `String` | Opaque, stable function identifier. |
| `invocation_url` | `String` | URL at which the function is invoked. |
| `name` | `String` | Free-form display name. |
| `slug` | `String` | Branch-unique, lowercase DNS-label. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the NeonFunction record (raises on error).
neon_function = client.NeonFunction.load({ "id" => "neon_function_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```


### NeonFunctionDeployment

Create an instance: `neon_function_deployment = client.NeonFunctionDeployment`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
neon_function_deployment = client.NeonFunctionDeployment.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "slug" => "example_slug", # String
})
```


### Operation

Create an instance: `operation = client.Operation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `String` | The action performed by the operation |
| `branch_id` | `String` | The ID of the branch this operation ran on. |
| `created_at` | `String` | A timestamp indicating when the operation was created |
| `endpoint_id` | `String` | The ID of the compute endpoint this operation ran on. |
| `error` | `String` | Human-readable message describing why the operation failed. |
| `failures_count` | `Integer` | The number of times the operation failed |
| `id` | `String` | The operation ID |
| `name` | `String` | Name for the replaced branch. |
| `operations` | `Array` |  |
| `pagination` | `Hash` | Cursor-based pagination. |
| `project_id` | `String` | The ID of the project this operation ran on. |
| `retry_at` | `String` | A timestamp indicating when the operation was last retried |
| `status` | `String` | Current lifecycle state of the operation. |
| `total_duration_ms` | `Integer` | The total duration of the operation in milliseconds |
| `updated_at` | `String` | A timestamp indicating when the operation status was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Operation record (raises on error).
operation = client.Operation.load({ "id" => "operation_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of Operation records (raises on error).
operations = client.Operation.list
```

#### Example: Create

```ruby
operation = client.Operation.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "action" => "example_action", # String
  "created_at" => "example_created_at", # String
  "failures_count" => 1, # Integer
  "id" => "example_id", # String
  "operations" => [], # Array
  "pagination" => {}, # Hash
  "status" => "example_status", # String
  "total_duration_ms" => 1, # Integer
  "updated_at" => "example_updated_at", # String
})
```


### OrgApiKeyCreate

Create an instance: `org_api_key_create = client.OrgApiKeyCreate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `created_by` | `String` |  |
| `id` | `Integer` |  |
| `key` | `String` |  |
| `name` | `String` |  |

#### Example: Create

```ruby
org_api_key_create = client.OrgApiKeyCreate.create({
  "organization_id" => "example_organization_id", # String
})
```


### OrgApiKeyRevoke

Create an instance: `org_api_key_revoke = client.OrgApiKeyRevoke`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### OrgApiKeysListResponseItem

Create an instance: `org_api_keys_list_response_item = client.OrgApiKeysListResponseItem`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` | A timestamp indicating when the API key was created |
| `created_by` | `Hash` | The user data of the user that created this API key. |
| `id` | `Integer` | The API key's unique numeric ID. |
| `last_used_at` | `String` | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `String` | The IP address from which the API key was last used |
| `name` | `String` | The user-specified API key name |
| `project_id` | `String` | If set, the API key can access only this project |

#### Example: List

```ruby
# list returns an Array of OrgApiKeysListResponseItem records (raises on error).
org_api_keys_list_response_items = client.OrgApiKeysListResponseItem.list
```


### Organization

Create an instance: `organization = client.Organization`

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
| `allow_hipaa_projects` | `Boolean` | If true, allow account to mark projects as HIPAA |
| `created_at` | `String` | A timestamp indicting when the organization was created |
| `handle` | `String` | URL-safe identifier for the organization, used in API paths. |
| `id` | `String` | The Neon organization ID. |
| `label` | `String` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `managed_by` | `String` | Organizations created via the Console or the API are managed by `console`. |
| `name` | `String` | Human-readable display name of the organization. |
| `plan` | `String` | Billing plan for the organization, for example `free`, `launch`, or `scale`. |
| `require_mfa` | `Boolean` | If true, all members must have MFA enabled to access this organization |
| `updated_at` | `String` | A timestamp indicating when the organization was updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Organization record (raises on error).
organization = client.Organization.load({ "id" => "organization_id" })
```

#### Example: List

```ruby
# list returns an Array of Organization records (raises on error).
organizations = client.Organization.list
```

#### Example: Create

```ruby
organization = client.Organization.create({
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


### OrganizationInvitation

Create an instance: `organization_invitation = client.OrganizationInvitation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `String` | Email of the invited user |
| `id` | `String` | The invitation ID. |
| `invitations` | `Array` | List of pending invitations for the organization. |
| `invited_at` | `String` | Timestamp when the invitation was created |
| `invited_by` | `String` | UUID for the user_id who extended the invitation |
| `org_id` | `String` | Organization id as it is stored in Neon |
| `role` | `String` | Organization member's role. |

#### Example: List

```ruby
# list returns an Array of OrganizationInvitation records (raises on error).
organization_invitations = client.OrganizationInvitation.list
```

#### Example: Create

```ruby
organization_invitation = client.OrganizationInvitation.create({
  "id" => "example_id", # String
  "email" => "example_email", # String
  "invitations" => [], # Array
  "invited_at" => "example_invited_at", # String
  "invited_by" => "example_invited_by", # String
  "org_id" => "example_org_id", # String
  "role" => "example_role", # String
})
```


### Presign

Create an instance: `presign = client.Presign`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `String` | The `Content-Type` to bind into the signed request. |
| `expires_in_seconds` | `Integer` | How long the presigned URL stays valid, in seconds. |
| `operation` | `String` | The transfer direction. |

#### Example: Create

```ruby
presign = client.Presign.create({
  "branch_id" => "example_branch_id", # String
  "bucket_id" => "example_bucket_id", # String
  "object_key" => "example_object_key", # String
  "project_id" => "example_project_id", # String
  "operation" => "example_operation", # String
})
```


### Project

Create an instance: `project = client.Project`

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
| `active_time_seconds` | `Integer` | Seconds. |
| `applications` | `Hash` | Map of project IDs to their installed applications. |
| `branch_logical_size_limit` | `Integer` | The logical size limit for a branch. |
| `branch_logical_size_limit_bytes` | `Integer` | The logical size limit for a branch. |
| `compute_last_active_at` | `String` | The most recent time when any endpoint of this project was active. |
| `compute_time_seconds` | `Integer` | Seconds. |
| `consumption_period_end` | `String` | A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period. |
| `consumption_period_start` | `String` | A date-time indicating when Neon Cloud started measuring consumption for current consumption period. |
| `cpu_used_sec` | `Integer` | Deprecated. |
| `created_at` | `String` | A timestamp indicating when the project was created |
| `creation_source` | `String` | The project creation source |
| `data_storage_bytes_hour` | `Integer` | Bytes-Hour. |
| `data_transfer_bytes` | `Integer` | Bytes. |
| `default_endpoint_settings` | `Hash` | A collection of settings for a Neon endpoint |
| `effective_project_permission` | `String` |  |
| `hipaa_enabled_at` | `String` | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | `Integer` | The number of seconds to retain the shared history for all branches in this project. |
| `id` | `String` | The Neon project ID. |
| `integrations` | `Hash` | Map of project IDs to their associated integration details. |
| `label` | `String` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | `String` | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | `String` | A timestamp indicating when project maintenance begins. |
| `name` | `String` | The project name |
| `org_id` | `String` | The Neon organization ID. |
| `owner` | `Hash` | Ownership details for the project, including the owner's name and email. |
| `owner_id` | `String` | ID of the organization that owns the project. |
| `pagination` | `Hash` | Cursor-based pagination. |
| `pg_version` | `Integer` | The major Postgres version number. |
| `platform_id` | `String` | The cloud platform identifier. |
| `project` | `Hash` | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `projects` | `Array` | List of projects accessible to the caller. |
| `provisioner` | `String` | Compute provisioner. |
| `proxy_host` | `String` | The proxy host for the project. |
| `quota_reset_at` | `String` | Deprecated. |
| `region_id` | `String` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `Hash` | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | `Boolean` | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | `Integer` | The current space occupied by the project in Postgres storage, in bytes. |
| `unavailable_project_ids` | `Array` | A list of project IDs indicating which projects are known to exist, but whose details could not be fetched within the requested (or implicit) time limit |
| `updated_at` | `String` | A timestamp indicating when the project was last updated |
| `written_data_bytes` | `Integer` | Bytes. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Project record (raises on error).
project = client.Project.load({ "id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of Project records (raises on error).
projects = client.Project.list
```

#### Example: Create

```ruby
project = client.Project.create({
  "id" => "example_id", # String
  "vpc_endpoint_id" => "example_vpc_endpoint_id", # String
  "active_time_seconds" => 1, # Integer
  "applications" => {}, # Hash
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
  "integrations" => {}, # Hash
  "label" => "example_label", # String
  "name" => "example_name", # String
  "owner" => {}, # Hash
  "owner_id" => "example_owner_id", # String
  "pagination" => {}, # Hash
  "pg_version" => 1, # Integer
  "platform_id" => "example_platform_id", # String
  "project" => {}, # Hash
  "projects" => [], # Array
  "provisioner" => "example_provisioner", # String
  "proxy_host" => "example_proxy_host", # String
  "region_id" => "example_region_id", # String
  "store_passwords" => true, # Boolean
  "updated_at" => "example_updated_at", # String
  "written_data_bytes" => 1, # Integer
})
```


### ProjectBranchLogField

Create an instance: `project_branch_log_field = client.ProjectBranchLogField`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `Array` | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

#### Example: List

```ruby
# list returns an Array of ProjectBranchLogField records (raises on error).
project_branch_log_fields = client.ProjectBranchLogField.list
```


### ProjectBranchLogFieldValue

Create an instance: `project_branch_log_field_value = client.ProjectBranchLogFieldValue`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `is_truncated` | `Boolean` | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ProjectBranchLogFieldValue records (raises on error).
project_branch_log_field_values = client.ProjectBranchLogFieldValue.list
```


### ProjectBranchLogsQuery

Create an instance: `project_branch_logs_query = client.ProjectBranchLogsQuery`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body_contains` | `String` | Match records whose rendered `message` contains this case-sensitive substring. |
| `cursor` | `String` | Opaque pagination cursor returned as `next_cursor` by a previous call. |
| `end_time` | `String` | Exclusive end of the query window. |
| `is_truncated` | `Boolean` | True when more records matched than were returned. |
| `limit` | `Integer` | Maximum number of log records to return per page. |
| `logql` | `String` | Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream. |
| `logs` | `Array` |  |
| `minimum_severity` | `String` | An OpenTelemetry severity level. |
| `next_cursor` | `String` | Pagination cursor to pass as `cursor` on the next request. |
| `scope_name` | `String` | Match the OpenTelemetry instrumentation scope name exactly. |
| `service_name` | `String` | Match the OpenTelemetry `service.name` resource attribute exactly. |
| `severity_text` | `String` | Match the OpenTelemetry severity text exactly. |
| `since` | `Object` | Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted. |
| `sort_order` | `String` | Order matching records by timestamp. |
| `source` | `String` | The Neon service that emitted the log record. |
| `start_time` | `String` | Inclusive beginning of the query window. |
| `trace_id` | `String` | Match records associated with this OpenTelemetry trace ID. |

#### Example: Create

```ruby
project_branch_logs_query = client.ProjectBranchLogsQuery.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "is_truncated" => true, # Boolean
  "logs" => [], # Array
})
```


### ProjectMember

Create an instance: `project_member = client.ProjectMember`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `effective_project_permission` | `String` | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `String` | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `String` | The caller's effective permission for a project when per-project permissions are enabled. |
| `grant_source` | `String` | How a member's project access is granted. |
| `id` | `String` |  |
| `member_id` | `String` | The organization member ID. |
| `name` | `String` | The user's display name. |
| `org_default_project_permission` | `String` | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `String` | Organization-level role used by project member role management. |
| `project_role` | `String` | Per-project role. |
| `user_id` | `String` | The user ID for the organization member. |

#### Example: List

```ruby
# list returns an Array of ProjectMember records (raises on error).
project_members = client.ProjectMember.list
```


### ProjectMemberRole

Create an instance: `project_member_role = client.ProjectMemberRole`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credential_rotation_recommended` | `Boolean` | Hint that database credentials may need rotation after the role change. |
| `effective_project_permission` | `String` | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `String` | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `String` | The caller's effective permission for a project when per-project permissions are enabled. |
| `member_id` | `String` |  |
| `name` | `String` | The user's display name. |
| `org_api_key_rotation_recommended` | `Boolean` | Hint that project-scoped org API keys created by the target user may need rotation. |
| `org_default_project_permission` | `String` | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `String` | Organization-level role used by project member role management. |
| `project_id` | `String` |  |
| `project_role` | `String` | The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback. |
| `role` | `String` | Per-project role. |
| `user_id` | `String` |  |


### ProjectPermission

Create an instance: `project_permission = client.ProjectPermission`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `String` | Email address of the user to grant project access to. |
| `granted_at` | `String` | Timestamp when the permission was granted. |
| `granted_to_email` | `String` | Email address of the user who has been granted access to the project. |
| `id` | `String` | The project permission's ID. |
| `revoked_at` | `String` | Timestamp when the permission was revoked. |

#### Example: List

```ruby
# list returns an Array of ProjectPermission records (raises on error).
project_permissions = client.ProjectPermission.list
```

#### Example: Create

```ruby
project_permission = client.ProjectPermission.create({
  "id" => "example_id", # String
  "email" => "example_email", # String
  "granted_at" => "example_granted_at", # String
  "granted_to_email" => "example_granted_to_email", # String
})
```


### ProjectRecover

Create an instance: `project_recover = client.ProjectRecover`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branches` | `Array` | Branches in the project. |
| `id` | `String` |  |
| `project` | `Hash` | Full details of the project, including configuration, consumption metrics, and ownership. |

#### Example: Create

```ruby
project_recover = client.ProjectRecover.create({
  "id" => "example_id", # String
  "branches" => [], # Array
  "project" => {}, # Hash
})
```


### ProjectTransferRequest

Create an instance: `project_transfer_request = client.ProjectTransferRequest`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `ttl_seconds` | `Integer` | Number of seconds the transfer request stays valid before it expires. |

#### Example: Create

```ruby
project_transfer_request = client.ProjectTransferRequest.create({
  "id" => "example_id", # String
})
```


### Region

Create an instance: `region = client.Region`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default` | `Boolean` | True if this region is selected by default when no region is specified during project creation. |
| `geo_lat` | `String` | The geographical latitude (approximate) for the region. |
| `geo_long` | `String` | The geographical longitude (approximate) for the region. |
| `name` | `String` | A short description of the region. |
| `region_id` | `String` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |

#### Example: List

```ruby
# list returns an Array of Region records (raises on error).
regions = client.Region.list
```


### Role

Create an instance: `role = client.Role`

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
| `authentication_method` | `String` | Authentication method configured for this role: `password`, `oauth`, or `no_login`. |
| `branch_id` | `String` | The ID of the branch this role belongs to. |
| `created_at` | `String` | A timestamp indicating when the role was created |
| `id` | `String` |  |
| `name` | `String` | Postgres role name within the branch. |
| `password` | `String` | The role password |
| `protected` | `Boolean` | Whether or not the role is system-protected |
| `role` | `Hash` | Properties of the role to create. |
| `updated_at` | `String` | A timestamp indicating when the role was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Role record (raises on error).
role = client.Role.load({ "id" => "role_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of Role records (raises on error).
roles = client.Role.list
```

#### Example: Create

```ruby
role = client.Role.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "created_at" => "example_created_at", # String
  "name" => "example_name", # String
  "role" => {}, # Hash
  "updated_at" => "example_updated_at", # String
})
```


### RoleOperation

Create an instance: `role_operation = client.RoleOperation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `operations` | `Array` |  |
| `role` | `Hash` | Role details for the requested database role. |

#### Example: Create

```ruby
role_operation = client.RoleOperation.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "role_name" => "example_role_name", # String
  "operations" => [], # Array
  "role" => {}, # Hash
})
```


### RolePassword

Create an instance: `role_password = client.RolePassword`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `password` | `String` | The role password |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the RolePassword record (raises on error).
role_password = client.RolePassword.load({ "branch_id" => "branch_id", "project_id" => "project_id", "role_name" => "role_name" })
```


### SendNeonAuthTestEmail

Create an instance: `send_neon_auth_test_email = client.SendNeonAuthTestEmail`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error_message` | `String` | The error message from the email server. |
| `host` | `String` | Hostname of the email server. |
| `password` | `String` | Password for authenticating with the SMTP server. |
| `port` | `Integer` | TCP port of the SMTP server. |
| `recipient_email` | `String` | The email address to send the test email to. |
| `sender_email` | `String` | Email address used as the From address on outgoing auth emails. |
| `sender_name` | `String` | Display name shown as the sender in outgoing emails. |
| `success` | `Boolean` | Whether the test email was sent successfully. |
| `username` | `String` | Username for authenticating with the SMTP server. |

#### Example: Create

```ruby
send_neon_auth_test_email = client.SendNeonAuthTestEmail.create({
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


### Snapshot

Create an instance: `snapshot = client.Snapshot`

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
| `created_at` | `String` | Timestamp when the snapshot was created, in RFC 3339 format (UTC). |
| `diff_size` | `Integer` | Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage. |
| `expires_at` | `String` | RFC 3339 timestamp when the snapshot expires and is eligible for deletion. |
| `full_size` | `Integer` | Full logical size of the snapshot in bytes at the time it was taken. |
| `id` | `String` | The snapshot ID. |
| `lsn` | `String` | WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`). |
| `manual` | `Boolean` | True if the snapshot was created manually rather than by a schedule. |
| `name` | `String` | Human-readable label for the snapshot. |
| `operations` | `Array` |  |
| `slug` | `String` | Snapshot resource ID, unique within the project. |
| `snapshot` | `Hash` | Fields to update on the snapshot. |
| `source_branch_id` | `String` | Branch from which this snapshot was created. |
| `timestamp` | `String` | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

#### Example: List

```ruby
# list returns an Array of Snapshot records (raises on error).
snapshots = client.Snapshot.list
```

#### Example: Create

```ruby
snapshot = client.Snapshot.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "created_at" => "example_created_at", # String
  "id" => "example_id", # String
  "operations" => [], # Array
  "snapshot" => {}, # Hash
})
```


### SpendingLimit

Create an instance: `spending_limit = client.SpendingLimit`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `spending_limit_cents` | `Integer` | Monthly spending cap in cents. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SpendingLimit record (raises on error).
spending_limit = client.SpendingLimit.load({ "organization_id" => "organization_id" })
```


### Trigger

Create an instance: `trigger = client.Trigger`

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
| `id` | `String` |  |
| `triggers` | `Array` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Trigger record (raises on error).
trigger = client.Trigger.load({ "id" => "trigger_id", "branch_id" => "branch_id", "project_id" => "project_id" })
```

#### Example: List

```ruby
# list returns an Array of Trigger records (raises on error).
triggers = client.Trigger.list
```

#### Example: Create

```ruby
trigger = client.Trigger.create({
  "branch_id" => "example_branch_id", # String
  "project_id" => "example_project_id", # String
  "triggers" => [], # Array
})
```


### UpdateNeonAuthUserRole

Create an instance: `update_neon_auth_user_role = client.UpdateNeonAuthUserRole`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` | ID of the updated user |
| `roles` | `Array` | Roles to assign to the user in the Neon Auth (Better Auth) directory. |


### VpcEndpoint

Create an instance: `vpc_endpoint = client.VpcEndpoint`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `example_restricted_projects` | `Array` | A list of example projects that are restricted to use this VPC endpoint. |
| `id` | `String` |  |
| `label` | `String` | A descriptive label for the VPC endpoint |
| `num_restricted_projects` | `Integer` | The number of projects that are restricted to use this VPC endpoint. |
| `region_id` | `String` | The region where the VPC endpoint is located |
| `state` | `String` | The current state of the VPC endpoint. |
| `vpc_endpoint_id` | `String` | Cloud provider identifier for the VPC endpoint. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the VpcEndpoint record (raises on error).
vpc_endpoint = client.VpcEndpoint.load({ "id" => "vpc_endpoint_id", "organization_id" => "organization_id", "region_id" => "region_id" })
```

#### Example: List

```ruby
# list returns an Array of VpcEndpoint records (raises on error).
vpc_endpoints = client.VpcEndpoint.list
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

Features are the extension mechanism. A feature is a Ruby class
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

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── Neon_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`Neon_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
branchstorage = client.BranchStorage
branchstorage.load({ "id" => "example_id", "project_id" => "example" })

# branchstorage.data_get now returns the branchstorage data from the last load
# branchstorage.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
