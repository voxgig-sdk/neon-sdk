# Neon TypeScript SDK



The TypeScript SDK for the Neon API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Anonymize()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/neon-sdk/releases](https://github.com/voxgig-sdk/neon-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { NeonSDK } from '@voxgig-sdk/neon-sdk'

const client = new NeonSDK({
  apikey: process.env.NEON_APIKEY,
})
```

### 3. Load an anonymizedbranchstatus

AnonymizedBranchStatus is nested under branch, so provide the `branch_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const anonymizedbranchstatus = await client.AnonymizedBranchStatus().load({
    branch_id: 'example_branch_id',
    project_id: 'example_project_id',
  })
  console.log(anonymizedbranchstatus)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created Anonymize ENTITY (.data() for the record)
const created = await client.Anonymize().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const branchstorage = await client.BranchStorage().load({ id: "example_id", project_id: "example" })
  console.log(branchstorage)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = NeonSDK.test()

const branchstorage = await client.BranchStorage().load({ id: 'test01', project_id: 'example_project_id' })
// branchstorage is the entity, populated with mock response data
// — call branchstorage.data() for the record itself
console.log(branchstorage)
```

You can also use the instance method:

```ts
const client = new NeonSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.BranchStorage()

// First call runs the operation and stores its result
await entity.load({ id: 'example', project_id: 'example_project_id' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new NeonSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### NeonSDK

#### Constructor

```ts
new NeonSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Anonymize(data?)` | `AnonymizeEntity` | Create an Anonymize entity instance. |
| `AnonymizedBranchStatus(data?)` | `AnonymizedBranchStatusEntity` | Create an AnonymizedBranchStatus entity instance. |
| `ApiKey(data?)` | `ApiKeyEntity` | Create an ApiKey entity instance. |
| `Auth(data?)` | `AuthEntity` | Create an Auth entity instance. |
| `AuthLegacy(data?)` | `AuthLegacyEntity` | Create an AuthLegacy entity instance. |
| `AvailablePreloadLibrary(data?)` | `AvailablePreloadLibraryEntity` | Create an AvailablePreloadLibrary entity instance. |
| `BackupSchedule(data?)` | `BackupScheduleEntity` | Create a BackupSchedule entity instance. |
| `Branch(data?)` | `BranchEntity` | Create a Branch entity instance. |
| `BranchAiGateway(data?)` | `BranchAiGatewayEntity` | Create a BranchAiGateway entity instance. |
| `BranchOperation(data?)` | `BranchOperationEntity` | Create a BranchOperation entity instance. |
| `BranchSchema(data?)` | `BranchSchemaEntity` | Create a BranchSchema entity instance. |
| `BranchSchemaCompare(data?)` | `BranchSchemaCompareEntity` | Create a BranchSchemaCompare entity instance. |
| `BranchStorage(data?)` | `BranchStorageEntity` | Create a BranchStorage entity instance. |
| `Bucket(data?)` | `BucketEntity` | Create a Bucket entity instance. |
| `BucketObjectsList(data?)` | `BucketObjectsListEntity` | Create a BucketObjectsList entity instance. |
| `ConnectionUri(data?)` | `ConnectionUriEntity` | Create a ConnectionUri entity instance. |
| `Consumption(data?)` | `ConsumptionEntity` | Create a Consumption entity instance. |
| `CreateCredential(data?)` | `CreateCredentialEntity` | Create a CreateCredential entity instance. |
| `Credential(data?)` | `CredentialEntity` | Create a Credential entity instance. |
| `CurrentUserInfo(data?)` | `CurrentUserInfoEntity` | Create a CurrentUserInfo entity instance. |
| `CustomDomain(data?)` | `CustomDomainEntity` | Create a CustomDomain entity instance. |
| `DataApi(data?)` | `DataApiEntity` | Create a DataApi entity instance. |
| `Database(data?)` | `DatabaseEntity` | Create a Database entity instance. |
| `EmailProvider(data?)` | `EmailProviderEntity` | Create an EmailProvider entity instance. |
| `EmailServer(data?)` | `EmailServerEntity` | Create an EmailServer entity instance. |
| `Empty(data?)` | `EmptyEntity` | Create an Empty entity instance. |
| `Endpoint(data?)` | `EndpointEntity` | Create an Endpoint entity instance. |
| `EndpointOperation(data?)` | `EndpointOperationEntity` | Create an EndpointOperation entity instance. |
| `Function(data?)` | `FunctionEntity` | Create a Function entity instance. |
| `Jwk(data?)` | `JwkEntity` | Create a Jwk entity instance. |
| `MaskingRule(data?)` | `MaskingRuleEntity` | Create a MaskingRule entity instance. |
| `Member(data?)` | `MemberEntity` | Create a Member entity instance. |
| `NeonAuthAllowLocalhost(data?)` | `NeonAuthAllowLocalhostEntity` | Create a NeonAuthAllowLocalhost entity instance. |
| `NeonAuthConfig(data?)` | `NeonAuthConfigEntity` | Create a NeonAuthConfig entity instance. |
| `NeonAuthCreateIntegration(data?)` | `NeonAuthCreateIntegrationEntity` | Create a NeonAuthCreateIntegration entity instance. |
| `NeonAuthCreateNewUser(data?)` | `NeonAuthCreateNewUserEntity` | Create a NeonAuthCreateNewUser entity instance. |
| `NeonAuthEmailAndPasswordConfig(data?)` | `NeonAuthEmailAndPasswordConfigEntity` | Create a NeonAuthEmailAndPasswordConfig entity instance. |
| `NeonAuthEmailServerConfig(data?)` | `NeonAuthEmailServerConfigEntity` | Create a NeonAuthEmailServerConfig entity instance. |
| `NeonAuthIntegration(data?)` | `NeonAuthIntegrationEntity` | Create a NeonAuthIntegration entity instance. |
| `NeonAuthMagicLinkConfig(data?)` | `NeonAuthMagicLinkConfigEntity` | Create a NeonAuthMagicLinkConfig entity instance. |
| `NeonAuthOauthProvider(data?)` | `NeonAuthOauthProviderEntity` | Create a NeonAuthOauthProvider entity instance. |
| `NeonAuthOrganizationConfig(data?)` | `NeonAuthOrganizationConfigEntity` | Create a NeonAuthOrganizationConfig entity instance. |
| `NeonAuthPhoneNumberConfig(data?)` | `NeonAuthPhoneNumberConfigEntity` | Create a NeonAuthPhoneNumberConfig entity instance. |
| `NeonAuthPluginConfig(data?)` | `NeonAuthPluginConfigEntity` | Create a NeonAuthPluginConfig entity instance. |
| `NeonAuthRedirectUriWhitelistDomain(data?)` | `NeonAuthRedirectUriWhitelistDomainEntity` | Create a NeonAuthRedirectUriWhitelistDomain entity instance. |
| `NeonAuthTransferAuthProviderProject(data?)` | `NeonAuthTransferAuthProviderProjectEntity` | Create a NeonAuthTransferAuthProviderProject entity instance. |
| `NeonAuthWebhookConfig(data?)` | `NeonAuthWebhookConfigEntity` | Create a NeonAuthWebhookConfig entity instance. |
| `NeonFunction(data?)` | `NeonFunctionEntity` | Create a NeonFunction entity instance. |
| `NeonFunctionDeployment(data?)` | `NeonFunctionDeploymentEntity` | Create a NeonFunctionDeployment entity instance. |
| `Operation(data?)` | `OperationEntity` | Create an Operation entity instance. |
| `OrgApiKeyCreate(data?)` | `OrgApiKeyCreateEntity` | Create an OrgApiKeyCreate entity instance. |
| `OrgApiKeyRevoke(data?)` | `OrgApiKeyRevokeEntity` | Create an OrgApiKeyRevoke entity instance. |
| `OrgApiKeysListResponseItem(data?)` | `OrgApiKeysListResponseItemEntity` | Create an OrgApiKeysListResponseItem entity instance. |
| `Organization(data?)` | `OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationInvitation(data?)` | `OrganizationInvitationEntity` | Create an OrganizationInvitation entity instance. |
| `Presign(data?)` | `PresignEntity` | Create a Presign entity instance. |
| `Project(data?)` | `ProjectEntity` | Create a Project entity instance. |
| `ProjectBranchLogField(data?)` | `ProjectBranchLogFieldEntity` | Create a ProjectBranchLogField entity instance. |
| `ProjectBranchLogFieldValue(data?)` | `ProjectBranchLogFieldValueEntity` | Create a ProjectBranchLogFieldValue entity instance. |
| `ProjectBranchLogsQuery(data?)` | `ProjectBranchLogsQueryEntity` | Create a ProjectBranchLogsQuery entity instance. |
| `ProjectMember(data?)` | `ProjectMemberEntity` | Create a ProjectMember entity instance. |
| `ProjectMemberRole(data?)` | `ProjectMemberRoleEntity` | Create a ProjectMemberRole entity instance. |
| `ProjectPermission(data?)` | `ProjectPermissionEntity` | Create a ProjectPermission entity instance. |
| `ProjectRecover(data?)` | `ProjectRecoverEntity` | Create a ProjectRecover entity instance. |
| `ProjectTransferRequest(data?)` | `ProjectTransferRequestEntity` | Create a ProjectTransferRequest entity instance. |
| `Region(data?)` | `RegionEntity` | Create a Region entity instance. |
| `Role(data?)` | `RoleEntity` | Create a Role entity instance. |
| `RoleOperation(data?)` | `RoleOperationEntity` | Create a RoleOperation entity instance. |
| `RolePassword(data?)` | `RolePasswordEntity` | Create a RolePassword entity instance. |
| `SendNeonAuthTestEmail(data?)` | `SendNeonAuthTestEmailEntity` | Create a SendNeonAuthTestEmail entity instance. |
| `Snapshot(data?)` | `SnapshotEntity` | Create a Snapshot entity instance. |
| `SpendingLimit(data?)` | `SpendingLimitEntity` | Create a SpendingLimit entity instance. |
| `Trigger(data?)` | `TriggerEntity` | Create a Trigger entity instance. |
| `UpdateNeonAuthUserRole(data?)` | `UpdateNeonAuthUserRoleEntity` | Create an UpdateNeonAuthUserRole entity instance. |
| `VpcEndpoint(data?)` | `VpcEndpointEntity` | Create a VpcEndpoint entity instance. |
| `tester(testopts?, sdkopts?)` | `NeonSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `NeonSDK.test(testopts?, sdkopts?)` | `NeonSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): NeonSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Anonymize

| Field | Description |
| --- | --- |
| `completed_at` | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | Number of columns that had masking rules applied during the attempt. |
| `started_at` | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | Username of the user who triggered the latest anonymization attempt. |

Operations: create.

API path: `/projects/{project_id}/branches/{branch_id}/anonymize`

#### AnonymizedBranchStatus

| Field | Description |
| --- | --- |
| `completed_at` | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | Number of columns that had masking rules applied during the attempt. |
| `started_at` | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | Username of the user who triggered the latest anonymization attempt. |

Operations: load.

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

Operations: create, list, remove.

API path: `/api_keys`

#### Auth

| Field | Description |
| --- | --- |
| `account_id` | The ID of the account associated with this authentication record. |
| `auth_data` |  |
| `auth_method` | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

Operations: create, load, remove.

API path: `/projects/{project_id}/branches/{branch_id}/auth/domains`

#### AuthLegacy

| Field | Description |
| --- | --- |
| `auth_provider` | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | URI to add to the redirect URI allowlist for the auth provider. |

Operations: create, remove.

API path: `/projects/{project_id}/auth/domains`

#### AvailablePreloadLibrary

| Field | Description |
| --- | --- |
| `description` | Human-readable explanation of the library's purpose and behavior. |
| `is_default` | Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints. |
| `is_experimental` | Marks the library as experimental. |
| `library_name` | Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`). |
| `version` | Version of the preload library. |

Operations: list.

API path: `/projects/{project_id}/available_preload_libraries`

#### BackupSchedule

| Field | Description |
| --- | --- |
| `day` | The day of the week or month to take the snapshot (if applicable). |
| `frequency` | How often to take snapshots. |
| `hour` | The hour of the day to take the snapshot (if applicable). |
| `month` | The month of the year to take the snapshot (if applicable). |
| `retention_seconds` | How long to keep a scheduled snapshot (in seconds) before it's automatically deleted. |

Operations: list.

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

Operations: create, list, load, remove, update.

API path: `/projects/{project_id}/branches`

#### BranchAiGateway

| Field | Description |
| --- | --- |
| `base_url` | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | Always `true` in 200 responses. |
| `id` |  |

Operations: load.

API path: `/projects/{project_id}/branches/{branch_id}/ai_gateway`

#### BranchOperation

| Field | Description |
| --- | --- |
| `branch` | Branch returned by the request. |
| `id` |  |
| `operations` |  |

Operations: create.

API path: `/projects/{project_id}/branches/{branch_id}/restore`

#### BranchSchema

| Field | Description |
| --- | --- |
| `id` |  |
| `tables` | Tables present in the branch schema. |

Operations: load.

API path: `/projects/{project_id}/branches/{branch_id}/schema`

#### BranchSchemaCompare

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/projects/{project_id}/branches/{branch_id}/compare_schema`

#### BranchStorage

| Field | Description |
| --- | --- |
| `enabled` | Always `true` in 200 responses. |
| `force_path_style` | Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). |
| `id` |  |
| `region` | The AWS region for this branch's object storage. |
| `s3_endpoint` | The S3-compatible endpoint URL for this branch. |

Operations: load.

API path: `/projects/{project_id}/branches/{branch_id}/storage`

#### Bucket

| Field | Description |
| --- | --- |
| `access_level` | Access level for the bucket. |
| `created_at` | When the bucket was created. |
| `id` |  |
| `name` | The bucket name. |

Operations: create, list, load, remove.

API path: `/projects/{project_id}/branches/{branch_id}/buckets`

#### BucketObjectsList

| Field | Description |
| --- | --- |
| `etag` | The object's entity tag (content hash). |
| `key` | The full object key. |
| `last_modified` | The time the object was last modified. |
| `size` | The object size in bytes. |

Operations: list.

API path: `/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects`

#### ConnectionUri

| Field | Description |
| --- | --- |
| `uri` | The connection URI. |

Operations: load.

API path: `/projects/{project_id}/connection_uri`

#### Consumption

| Field | Description |
| --- | --- |
| `branches` | Per-branch consumption history records returned for the requested time range. |
| `pagination` | Cursor-based pagination. |
| `projects` | Per-project consumption history records included in the response. |

Operations: list.

API path: `/consumption_history/v2/branches`

#### CreateCredential

| Field | Description |
| --- | --- |
| `name` | Free-form customer label for the credential. |
| `principal_type` | Principal type for the credential. |
| `scopes` |  |

Operations: create.

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

Operations: create, list, remove.

API path: `/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/reveal`

#### CurrentUserInfo

| Field | Description |
| --- | --- |
| `email` | Email address associated with this auth account. |
| `image` | URL of the user's profile picture as provided by the identity provider. |
| `login` | Deprecated. |
| `name` | Display name of the account as provided by the identity provider. |
| `provider` | Identity provider id from keycloak |

Operations: list.

API path: `/users/me`

#### CustomDomain

| Field | Description |
| --- | --- |
| `domain` | The custom domain to register (for example `dashboard.acme.com`). |
| `entity_id` | The target entity's identifier within the branch. |
| `entity_type` | The kind of branch entity to point the domain at. |

Operations: create.

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

Operations: create, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/projects/{project_id}/branches/{branch_id}/databases`

#### EmailProvider

| Field | Description |
| --- | --- |

Operations: load.

API path: `/projects/{project_id}/branches/{branch_id}/auth/email_provider`

#### EmailServer

| Field | Description |
| --- | --- |

Operations: load.

API path: `/projects/{project_id}/auth/email_server`

#### Empty

| Field | Description |
| --- | --- |
| `destination_org_id` | The destination organization identifier |
| `project_ids` | The list of projects ids to transfer. |
| `schedule` | List of schedule entries defining the backup frequency. |

Operations: create, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/projects/{project_id}/endpoints`

#### EndpointOperation

| Field | Description |
| --- | --- |
| `endpoint` | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` |  |
| `operations` |  |

Operations: create.

API path: `/projects/{project_id}/endpoints/{endpoint_id}/restart`

#### Function

| Field | Description |
| --- | --- |
| `custom_domains` |  |
| `functions` |  |
| `id` |  |
| `pagination` | To paginate the response, issue an initial request with `limit` value. |

Operations: list, remove.

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

Operations: create, list, remove.

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

Operations: list, update.

API path: `/projects/{project_id}/branches/{branch_id}/masking_rules`

#### Member

| Field | Description |
| --- | --- |
| `id` | The organization member's ID. |
| `joined_at` | Timestamp when the user joined the organization. |
| `org_id` | The Neon organization ID. |
| `role` | Organization member's role. |
| `user_id` | The Neon user ID. |

Operations: load, remove, update.

API path: `/organizations/{org_id}/members/{member_id}`

#### NeonAuthAllowLocalhost

| Field | Description |
| --- | --- |
| `allow_localhost` | Whether to allow localhost connections |

Operations: load, update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/allow_localhost`

#### NeonAuthConfig

| Field | Description |
| --- | --- |
| `name` | The application name used in auth emails and communications. |

Operations: update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/config`

#### NeonAuthCreateIntegration

| Field | Description |
| --- | --- |
| `auth_provider` | Authentication provider integrated with this Neon Auth configuration. |
| `branch_id` | The Neon branch ID. |
| `database_name` | Name of the database to enable Neon Auth on. |
| `project_id` | The Neon project ID. |
| `role_name` | Deprecated. |

Operations: create.

API path: `/projects/{project_id}/branches/{branch_id}/auth`

#### NeonAuthCreateNewUser

| Field | Description |
| --- | --- |
| `auth_provider` | Authentication provider integrated with this Neon Auth configuration. |
| `email` | Email address of the new Neon Auth user to create. |
| `name` | Display name for the new user. |
| `project_id` | The Neon project ID. |

Operations: create.

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

Operations: load, update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/email_and_password`

#### NeonAuthEmailServerConfig

| Field | Description |
| --- | --- |

Operations: update.

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

Operations: list, load.

API path: `/projects/{project_id}/auth/integrations`

#### NeonAuthMagicLinkConfig

| Field | Description |
| --- | --- |
| `disable_sign_up` | Whether to disable sign-up via magic link. |
| `enabled` | Whether the magic link plugin is enabled. |
| `expires_in` | Minutes until the magic link expires. |

Operations: update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins/magic-link`

#### NeonAuthOauthProvider

| Field | Description |
| --- | --- |
| `client_id` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | OAuth client secret for the provider. |
| `id` | The OAuth provider's ID. |
| `microsoft_tenant_id` | Tenant ID for the Microsoft OAuth provider. |
| `type` | OAuth provider key type. |

Operations: create, list, update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/oauth_providers`

#### NeonAuthOrganizationConfig

| Field | Description |
| --- | --- |
| `creator_role` | Role of the organization's creator. |
| `enabled` | Whether the organization plugin is enabled. |
| `membership_limit` | Maximum number of members per organization. |
| `organization_limit` | Maximum organizations a user can belong to (created or joined). |
| `send_invitation_email` | Whether to send invitation emails when inviting members to an organization. |

Operations: update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins/organization`

#### NeonAuthPhoneNumberConfig

| Field | Description |
| --- | --- |
| `enabled` | Whether the phone number plugin is enabled. |
| `otp_expires_in` | Time in seconds before the OTP expires |

Operations: load, update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number`

#### NeonAuthPluginConfig

| Field | Description |
| --- | --- |
| `client_id` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | OAuth client secret for the provider. |
| `id` | The OAuth provider's ID. |
| `type` | OAuth provider key type. |

Operations: list.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins`

#### NeonAuthRedirectUriWhitelistDomain

| Field | Description |
| --- | --- |
| `auth_provider` | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | Allowed redirect URI domain for the auth provider. |

Operations: list.

API path: `/projects/{project_id}/branches/{branch_id}/auth/domains`

#### NeonAuthTransferAuthProviderProject

| Field | Description |
| --- | --- |
| `auth_provider` | Authentication provider integrated with this Neon Auth configuration. |
| `project_id` | The Neon project ID. |
| `url` | URL for completing the process of ownership transfer |

Operations: create.

API path: `/projects/auth/transfer_ownership`

#### NeonAuthWebhookConfig

| Field | Description |
| --- | --- |
| `enabled` | Whether the webhook is active. |
| `enabled_events` | Event types that trigger this webhook. |
| `timeout_seconds` | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | Destination URL that receives webhook event payloads. |

Operations: list, update.

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

Operations: load, update.

API path: `/projects/{project_id}/branches/{branch_id}/functions/{slug}`

#### NeonFunctionDeployment

| Field | Description |
| --- | --- |

Operations: create.

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

Operations: create, list, load.

API path: `/projects/{project_id}/branches/{branch_id}/finalize_restore`

#### OrgApiKeyCreate

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `id` |  |
| `key` |  |
| `name` |  |

Operations: create.

API path: `/organizations/{org_id}/api_keys`

#### OrgApiKeyRevoke

| Field | Description |
| --- | --- |

Operations: remove.

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

Operations: list.

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

Operations: create, list, load, remove.

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

Operations: create, list.

API path: `/organizations/{org_id}/invitations`

#### Presign

| Field | Description |
| --- | --- |
| `content_type` | The `Content-Type` to bind into the signed request. |
| `expires_in_seconds` | How long the presigned URL stays valid, in seconds. |
| `operation` | The transfer direction. |

Operations: create.

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

Operations: create, list, load, patch, remove, update.

API path: `/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}`

#### ProjectBranchLogField

| Field | Description |
| --- | --- |
| `fields` | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

Operations: list.

API path: `/projects/{project_id}/branches/{branch_id}/logs/fields`

#### ProjectBranchLogFieldValue

| Field | Description |
| --- | --- |
| `is_truncated` | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` |  |

Operations: list.

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

Operations: create.

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

Operations: list.

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

Operations: remove, update.

API path: `/projects/{project_id}/members/{member_id}/role`

#### ProjectPermission

| Field | Description |
| --- | --- |
| `email` | Email address of the user to grant project access to. |
| `granted_at` | Timestamp when the permission was granted. |
| `granted_to_email` | Email address of the user who has been granted access to the project. |
| `id` | The project permission's ID. |
| `revoked_at` | Timestamp when the permission was revoked. |

Operations: create, list, remove.

API path: `/projects/{project_id}/permissions`

#### ProjectRecover

| Field | Description |
| --- | --- |
| `branches` | Branches in the project. |
| `id` |  |
| `project` | Full details of the project, including configuration, consumption metrics, and ownership. |

Operations: create.

API path: `/projects/{project_id}/recover`

#### ProjectTransferRequest

| Field | Description |
| --- | --- |
| `id` |  |
| `ttl_seconds` | Number of seconds the transfer request stays valid before it expires. |

Operations: create.

API path: `/projects/{project_id}/transfer_requests`

#### Region

| Field | Description |
| --- | --- |
| `default` | True if this region is selected by default when no region is specified during project creation. |
| `geo_lat` | The geographical latitude (approximate) for the region. |
| `geo_long` | The geographical longitude (approximate) for the region. |
| `name` | A short description of the region. |
| `region_id` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |

Operations: list.

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

Operations: create, list, load, remove.

API path: `/projects/{project_id}/branches/{branch_id}/roles`

#### RoleOperation

| Field | Description |
| --- | --- |
| `operations` |  |
| `role` | Role details for the requested database role. |

Operations: create.

API path: `/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password`

#### RolePassword

| Field | Description |
| --- | --- |
| `password` | The role password |

Operations: load.

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

Operations: create.

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

Operations: create, list, remove, update.

API path: `/projects/{project_id}/branches/{branch_id}/snapshot`

#### SpendingLimit

| Field | Description |
| --- | --- |
| `spending_limit_cents` | Monthly spending cap in cents. |

Operations: load, update.

API path: `/organizations/{org_id}/billing/spending_limit`

#### Trigger

| Field | Description |
| --- | --- |
| `id` |  |
| `triggers` |  |

Operations: create, list, load, update.

API path: `/projects/{project_id}/branches/{branch_id}/triggers`

#### UpdateNeonAuthUserRole

| Field | Description |
| --- | --- |
| `id` | ID of the updated user |
| `roles` | Roles to assign to the user in the Neon Auth (Better Auth) directory. |

Operations: update.

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

Operations: list, load.

API path: `/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints`



## Entities


### Anonymize

Create an instance: `const anonymize = client.Anonymize()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `string` | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | `number` | Number of columns that had masking rules applied during the attempt. |
| `started_at` | `string` | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | `string` | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | `string` | Username of the user who triggered the latest anonymization attempt. |

#### Example: Create

```ts
const anonymize = await client.Anonymize().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
})
```


### AnonymizedBranchStatus

Create an instance: `const anonymized_branch_status = client.AnonymizedBranchStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `string` | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | `number` | Number of columns that had masking rules applied during the attempt. |
| `started_at` | `string` | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | `string` | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | `string` | Username of the user who triggered the latest anonymization attempt. |

#### Example: Load

```ts
const anonymized_branch_status = await client.AnonymizedBranchStatus().load({ branch_id: 'branch_id', project_id: 'project_id' })
```


### ApiKey

Create an instance: `const api_key = client.ApiKey()`

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
| `id` | `number` | The API key's unique numeric ID. |
| `key` | `string` | The generated 64-bit token required to access the Neon API |
| `key_name` | `string` | A user-specified API key name. |
| `last_used_at` | `string` | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `string` | The IP address from which the API key was last used |
| `name` | `string` | The user-specified API key name |

#### Example: List

```ts
const api_keys = await client.ApiKey().list()
```

#### Example: Create

```ts
const api_key = await client.ApiKey().create({
  created_at: 'example_created_at',
  created_by: 'example_created_by',
  id: 1,
  key: 'example_key',
  key_name: 'example_key_name',
  last_used_from_addr: 'example_last_used_from_addr',
  name: 'example_name',
})
```


### Auth

Create an instance: `const auth = client.Auth()`

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

```ts
const auth = await client.Auth().load()
```

#### Example: Create

```ts
const auth = await client.Auth().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  account_id: 'example_account_id',
  auth_method: 'example_auth_method',
})
```


### AuthLegacy

Create an instance: `const auth_legacy = client.AuthLegacy()`

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

```ts
const auth_legacy = await client.AuthLegacy().create({
  project_id: 'example_project_id',
  auth_provider: 'example_auth_provider',
  domain: 'example_domain',
})
```


### AvailablePreloadLibrary

Create an instance: `const available_preload_library = client.AvailablePreloadLibrary()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Human-readable explanation of the library's purpose and behavior. |
| `is_default` | `boolean` | Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints. |
| `is_experimental` | `boolean` | Marks the library as experimental. |
| `library_name` | `string` | Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`). |
| `version` | `string` | Version of the preload library. |

#### Example: List

```ts
const available_preload_librarys = await client.AvailablePreloadLibrary().list({ project_id: "example" })
```


### BackupSchedule

Create an instance: `const backup_schedule = client.BackupSchedule()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `day` | `number` | The day of the week or month to take the snapshot (if applicable). |
| `frequency` | `string` | How often to take snapshots. |
| `hour` | `number` | The hour of the day to take the snapshot (if applicable). |
| `month` | `number` | The month of the year to take the snapshot (if applicable). |
| `retention_seconds` | `number` | How long to keep a scheduled snapshot (in seconds) before it's automatically deleted. |

#### Example: List

```ts
const backup_schedules = await client.BackupSchedule().list({ branch_id: "example", project_id: "example" })
```


### Branch

Create an instance: `const branch = client.Branch()`

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
| `annotation` | `Record<string, any>` | Annotation data associated with the annotated object. |
| `annotations` | `Record<string, any>` | Map of annotations keyed by resource identifier, where each value contains the annotation data for that resource. |
| `branch` | `Record<string, any>` | Branch returned by the request. |
| `branches` | `any[]` | Branches in the project. |
| `id` | `string` |  |
| `pagination` | `Record<string, any>` | To paginate the response, issue an initial request with `limit` value. |

#### Example: Load

```ts
const branch = await client.Branch().load({ id: 'branch_id', project_id: 'project_id' })
```

#### Example: List

```ts
const branchs = await client.Branch().list({ project_id: "example" })
```

#### Example: Create

```ts
const branch = await client.Branch().create({
  project_id: 'example_project_id',
  annotation: {},
  annotations: {},
  branch: {},
  branches: [],
})
```


### BranchAiGateway

Create an instance: `const branch_ai_gateway = client.BranchAiGateway()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_url` | `string` | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | `boolean` | Always `true` in 200 responses. |
| `id` | `string` |  |

#### Example: Load

```ts
const branch_ai_gateway = await client.BranchAiGateway().load({ id: 'branch_ai_gateway_id', project_id: 'project_id' })
```


### BranchOperation

Create an instance: `const branch_operation = client.BranchOperation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch` | `Record<string, any>` | Branch returned by the request. |
| `id` | `string` |  |
| `operations` | `any[]` |  |

#### Example: Create

```ts
const branch_operation = await client.BranchOperation().create({
  id: 'example_id',
  project_id: 'example_project_id',
  branch: {},
  operations: [],
})
```


### BranchSchema

Create an instance: `const branch_schema = client.BranchSchema()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `tables` | `any[]` | Tables present in the branch schema. |

#### Example: Load

```ts
const branch_schema = await client.BranchSchema().load({ id: 'branch_schema_id', project_id: 'project_id', db_name: 'db_name' })
```


### BranchSchemaCompare

Create an instance: `const branch_schema_compare = client.BranchSchemaCompare()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const branch_schema_compare = await client.BranchSchemaCompare().load({ id: 'branch_schema_compare_id', project_id: 'project_id', db_name: 'db_name' })
```


### BranchStorage

Create an instance: `const branch_storage = client.BranchStorage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Always `true` in 200 responses. |
| `force_path_style` | `boolean` | Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). |
| `id` | `string` |  |
| `region` | `string` | The AWS region for this branch's object storage. |
| `s3_endpoint` | `string` | The S3-compatible endpoint URL for this branch. |

#### Example: Load

```ts
const branch_storage = await client.BranchStorage().load({ id: 'branch_storage_id', project_id: 'project_id' })
```


### Bucket

Create an instance: `const bucket = client.Bucket()`

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

```ts
const bucket = await client.Bucket().load({ branch_id: 'branch_id', bucket_id: 'bucket_id', object_key: 'object_key', project_id: 'project_id' })
```

#### Example: List

```ts
const buckets = await client.Bucket().list({ branch_id: "example", project_id: "example" })
```

#### Example: Create

```ts
const bucket = await client.Bucket().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  created_at: 'example_created_at',
  name: 'example_name',
})
```


### BucketObjectsList

Create an instance: `const bucket_objects_list = client.BucketObjectsList()`

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
| `size` | `number` | The object size in bytes. |

#### Example: List

```ts
const bucket_objects_lists = await client.BucketObjectsList().list({ branch_id: "example", bucket_name: "example", project_id: "example" })
```


### ConnectionUri

Create an instance: `const connection_uri = client.ConnectionUri()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `uri` | `string` | The connection URI. |

#### Example: Load

```ts
const connection_uri = await client.ConnectionUri().load({ project_id: 'project_id', database_name: 'database_name', role_name: 'role_name' })
```


### Consumption

Create an instance: `const consumption = client.Consumption()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branches` | `any[]` | Per-branch consumption history records returned for the requested time range. |
| `pagination` | `Record<string, any>` | Cursor-based pagination. |
| `projects` | `any[]` | Per-project consumption history records included in the response. |

#### Example: List

```ts
const consumptions = await client.Consumption().list({ from: "example", granularity: "example", to: "example" })
```


### CreateCredential

Create an instance: `const create_credential = client.CreateCredential()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | Free-form customer label for the credential. |
| `principal_type` | `string` | Principal type for the credential. |
| `scopes` | `any[]` |  |

#### Example: Create

```ts
const create_credential = await client.CreateCredential().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  principal_type: 'example_principal_type',
  scopes: [],
})
```


### Credential

Create an instance: `const credential = client.Credential()`

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
| `scopes` | `any[]` |  |
| `token_id` | `string` | Opaque credential id (e.g. |
| `token_id_short` | `string` |  |

#### Example: List

```ts
const credentials = await client.Credential().list({ branch_id: "example", project_id: "example" })
```

#### Example: Create

```ts
const credential = await client.Credential().create({
  branch_id: 'example_branch_id',
  id: 'example_id',
  project_id: 'example_project_id',
  created_at: 'example_created_at',
  principal_type: 'example_principal_type',
  scopes: [],
  token_id: 'example_token_id',
  token_id_short: 'example_token_id_short',
})
```


### CurrentUserInfo

Create an instance: `const current_user_info = client.CurrentUserInfo()`

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

```ts
const current_user_infos = await client.CurrentUserInfo().list()
```


### CustomDomain

Create an instance: `const custom_domain = client.CustomDomain()`

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

```ts
const custom_domain = await client.CustomDomain().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  domain: 'example_domain',
  entity_id: 'example_entity_id',
  entity_type: 'example_entity_type',
})
```


### DataApi

Create an instance: `const data_api = client.DataApi()`

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
| `add_default_grants` | `boolean` | Grant all permissions to the tables in the public schema to authenticated users |
| `auth_provider` | `string` | Authentication provider for the Neon Data API. |
| `available_schemas` | `any[]` | List of available database schemas (SubZero only) |
| `id` | `string` |  |
| `jwks_url` | `string` | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `jwt_audience` | `string` | Expected `aud` claim in incoming JWTs. |
| `provider_name` | `string` | Display name for the authentication provider. |
| `settings` | `Record<string, any>` | Configuration settings for the Data API (SubZero only) |
| `skip_auth_schema` | `boolean` | Skip creating the auth schema and RLS functions |
| `status` | `string` | The status of the Neon Data API deployment |
| `url` | `string` | The URL of the Neon Data API |

#### Example: Load

```ts
const data_api = await client.DataApi().load({ id: 'data_api_id', branch_id: 'branch_id', project_id: 'project_id' })
```

#### Example: Create

```ts
const data_api = await client.DataApi().create({
  branch_id: 'example_branch_id',
  id: 'example_id',
  project_id: 'example_project_id',
  status: 'example_status',
  url: 'example_url',
})
```


### Database

Create an instance: `const database = client.Database()`

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
| `database` | `Record<string, any>` | Configuration for the new Postgres database. |
| `id` | `number` | The database ID |
| `name` | `string` | The database name |
| `owner_name` | `string` | The name of role that owns the database |
| `updated_at` | `string` | A timestamp indicating when the database was last updated |

#### Example: Load

```ts
const database = await client.Database().load({ id: 'database_id', branch_id: 'branch_id', project_id: 'project_id' })
```

#### Example: List

```ts
const databases = await client.Database().list({ branch_id: "example", project_id: "example" })
```

#### Example: Create

```ts
const database = await client.Database().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  created_at: 'example_created_at',
  database: {},
  id: 1,
  name: 'example_name',
  owner_name: 'example_owner_name',
  updated_at: 'example_updated_at',
})
```


### EmailProvider

Create an instance: `const email_provider = client.EmailProvider()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const email_provider = await client.EmailProvider().load({ branch_id: 'branch_id', project_id: 'project_id' })
```


### EmailServer

Create an instance: `const email_server = client.EmailServer()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const email_server = await client.EmailServer().load({ project_id: 'project_id' })
```


### Empty

Create an instance: `const empty = client.Empty()`

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
| `project_ids` | `any[]` | The list of projects ids to transfer. |
| `schedule` | `any[]` | List of schedule entries defining the backup frequency. |

#### Example: Create

```ts
const empty = await client.Empty().create({
  organization_id: 'example_organization_id',
  destination_org_id: 'example_destination_org_id',
  project_ids: [],
  schedule: [],
})
```


### Endpoint

Create an instance: `const endpoint = client.Endpoint()`

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
| `autoscaling_limit_max_cu` | `number` | The maximum number of Compute Units |
| `autoscaling_limit_min_cu` | `number` | The minimum number of Compute Units |
| `branch_id` | `string` | The ID of the branch this compute endpoint belongs to. |
| `compute_release_version` | `string` | Attached compute's release version number. |
| `created_at` | `string` | A timestamp indicating when the compute endpoint was created |
| `creation_source` | `string` | The compute endpoint creation source |
| `current_state` | `string` | Lifecycle state of the compute endpoint. |
| `disabled` | `boolean` | Whether to restrict connections to the compute endpoint. |
| `endpoint` | `Record<string, any>` | Configuration for the compute endpoint to create. |
| `host` | `string` | The hostname of the compute endpoint. |
| `id` | `string` | The compute endpoint ID. |
| `last_active` | `string` | A timestamp indicating when the compute endpoint was last active |
| `name` | `string` | Optional name of the compute endpoint |
| `passwordless_access` | `boolean` | Whether to permit passwordless access to the compute endpoint |
| `pending_state` | `string` | Target state the compute endpoint is transitioning to. |
| `pooler_enabled` | `boolean` | Deprecated. |
| `pooler_mode` | `string` | Deprecated. |
| `project_id` | `string` | The ID of the project this compute endpoint belongs to. |
| `provisioner` | `string` | Compute provisioner. |
| `proxy_host` | `string` | Deprecated. |
| `region_id` | `string` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `Record<string, any>` | A collection of settings for a compute endpoint |
| `started_at` | `string` | A timestamp indicating when the compute endpoint was last started |
| `suspend_timeout_seconds` | `number` | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `suspended_at` | `string` | A timestamp indicating when the compute endpoint was last suspended |
| `type` | `string` | Compute endpoint type. |
| `updated_at` | `string` | A timestamp indicating when the compute endpoint was last updated |

#### Example: Load

```ts
const endpoint = await client.Endpoint().load({ id: 'endpoint_id', project_id: 'project_id' })
```

#### Example: List

```ts
const endpoints = await client.Endpoint().list({ project_id: "example" })
```

#### Example: Create

```ts
const endpoint = await client.Endpoint().create({
  project_id: 'example_project_id',
  autoscaling_limit_max_cu: 1,
  autoscaling_limit_min_cu: 1,
  branch_id: 'example_branch_id',
  created_at: 'example_created_at',
  creation_source: 'example_creation_source',
  current_state: 'example_current_state',
  disabled: true,
  endpoint: {},
  host: 'example_host',
  id: 'example_id',
  passwordless_access: true,
  pooler_enabled: true,
  pooler_mode: 'example_pooler_mode',
  provisioner: 'example_provisioner',
  proxy_host: 'example_proxy_host',
  region_id: 'example_region_id',
  settings: {},
  suspend_timeout_seconds: 1,
  type: 'example_type',
  updated_at: 'example_updated_at',
})
```


### EndpointOperation

Create an instance: `const endpoint_operation = client.EndpointOperation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `endpoint` | `Record<string, any>` | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` | `string` |  |
| `operations` | `any[]` |  |

#### Example: Create

```ts
const endpoint_operation = await client.EndpointOperation().create({
  id: 'example_id',
  project_id: 'example_project_id',
  endpoint: {},
  operations: [],
})
```


### Function

Create an instance: `const function_ = client.Function()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_domains` | `any[]` |  |
| `functions` | `any[]` |  |
| `id` | `string` |  |
| `pagination` | `Record<string, any>` | To paginate the response, issue an initial request with `limit` value. |

#### Example: List

```ts
const function_s = await client.Function().list({ branch_id: "example", project_id: "example" })
```


### Jwk

Create an instance: `const jwk = client.Jwk()`

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
| `role_names` | `any[]` | Deprecated. |
| `skip_role_creation` | `boolean` | Deprecated. |
| `updated_at` | `string` | The date and time when the JWKS was last modified |

#### Example: List

```ts
const jwks = await client.Jwk().list({ project_id: "example" })
```

#### Example: Create

```ts
const jwk = await client.Jwk().create({
  project_id: 'example_project_id',
  created_at: 'example_created_at',
  id: 'example_id',
  jwks_url: 'example_jwks_url',
  provider_name: 'example_provider_name',
  updated_at: 'example_updated_at',
})
```


### MaskingRule

Create an instance: `const masking_rule = client.MaskingRule()`

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
| `masking_rules` | `any[]` | List of masking rules for the branch |
| `masking_value` | `string` | A literal value to set on the column when masking. |
| `schema_name` | `string` | The name of the schema containing the table to be masked |
| `table_name` | `string` | The name of the table containing the column to be masked |

#### Example: List

```ts
const masking_rules = await client.MaskingRule().list({ branch_id: "example", project_id: "example" })
```


### Member

Create an instance: `const member = client.Member()`

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

```ts
const member = await client.Member().load({ id: 'member_id', organization_id: 'organization_id' })
```


### NeonAuthAllowLocalhost

Create an instance: `const neon_auth_allow_localhost = client.NeonAuthAllowLocalhost()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_localhost` | `boolean` | Whether to allow localhost connections |

#### Example: Load

```ts
const neon_auth_allow_localhost = await client.NeonAuthAllowLocalhost().load({ branch_id: 'branch_id', project_id: 'project_id' })
```


### NeonAuthConfig

Create an instance: `const neon_auth_config = client.NeonAuthConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The application name used in auth emails and communications. |


### NeonAuthCreateIntegration

Create an instance: `const neon_auth_create_integration = client.NeonAuthCreateIntegration()`

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

```ts
const neon_auth_create_integration = await client.NeonAuthCreateIntegration().create({
  auth_provider: 'example_auth_provider',
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
})
```


### NeonAuthCreateNewUser

Create an instance: `const neon_auth_create_new_user = client.NeonAuthCreateNewUser()`

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

```ts
const neon_auth_create_new_user = await client.NeonAuthCreateNewUser().create({
  auth_provider: 'example_auth_provider',
  email: 'example_email',
  project_id: 'example_project_id',
})
```


### NeonAuthEmailAndPasswordConfig

Create an instance: `const neon_auth_email_and_password_config = client.NeonAuthEmailAndPasswordConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_sign_in_after_verification` | `boolean` | Whether users are automatically signed in after verifying their email |
| `disable_sign_up` | `boolean` | Whether to disable new user sign ups |
| `email_verification_method` | `string` | Controls how email addresses are verified during sign-up or sign-in. |
| `enabled` | `boolean` | Whether email and password authentication is enabled |
| `require_email_verification` | `boolean` | Whether email verification is required before users can sign in |
| `send_verification_email_on_sign_in` | `boolean` | Whether to send a verification email when users sign in |
| `send_verification_email_on_sign_up` | `boolean` | Whether to send a verification email when users sign up |

#### Example: Load

```ts
const neon_auth_email_and_password_config = await client.NeonAuthEmailAndPasswordConfig().load({ branch_id: 'branch_id', project_id: 'project_id' })
```


### NeonAuthEmailServerConfig

Create an instance: `const neon_auth_email_server_config = client.NeonAuthEmailServerConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### NeonAuthIntegration

Create an instance: `const neon_auth_integration = client.NeonAuthIntegration()`

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

```ts
const neon_auth_integration = await client.NeonAuthIntegration().load({ branch_id: 'branch_id', project_id: 'project_id' })
```

#### Example: List

```ts
const neon_auth_integrations = await client.NeonAuthIntegration().list({ project_id: "example" })
```


### NeonAuthMagicLinkConfig

Create an instance: `const neon_auth_magic_link_config = client.NeonAuthMagicLinkConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disable_sign_up` | `boolean` | Whether to disable sign-up via magic link. |
| `enabled` | `boolean` | Whether the magic link plugin is enabled. |
| `expires_in` | `number` | Minutes until the magic link expires. |


### NeonAuthOauthProvider

Create an instance: `const neon_auth_oauth_provider = client.NeonAuthOauthProvider()`

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

```ts
const neon_auth_oauth_providers = await client.NeonAuthOauthProvider().list({ project_id: "example" })
```

#### Example: Create

```ts
const neon_auth_oauth_provider = await client.NeonAuthOauthProvider().create({
  project_id: 'example_project_id',
  id: 'example_id',
  type: 'example_type',
})
```


### NeonAuthOrganizationConfig

Create an instance: `const neon_auth_organization_config = client.NeonAuthOrganizationConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `creator_role` | `string` | Role of the organization's creator. |
| `enabled` | `boolean` | Whether the organization plugin is enabled. |
| `membership_limit` | `number` | Maximum number of members per organization. |
| `organization_limit` | `number` | Maximum organizations a user can belong to (created or joined). |
| `send_invitation_email` | `boolean` | Whether to send invitation emails when inviting members to an organization. |


### NeonAuthPhoneNumberConfig

Create an instance: `const neon_auth_phone_number_config = client.NeonAuthPhoneNumberConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Whether the phone number plugin is enabled. |
| `otp_expires_in` | `number` | Time in seconds before the OTP expires |

#### Example: Load

```ts
const neon_auth_phone_number_config = await client.NeonAuthPhoneNumberConfig().load({ branch_id: 'branch_id', project_id: 'project_id' })
```


### NeonAuthPluginConfig

Create an instance: `const neon_auth_plugin_config = client.NeonAuthPluginConfig()`

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

```ts
const neon_auth_plugin_configs = await client.NeonAuthPluginConfig().list({ branch_id: "example", project_id: "example" })
```


### NeonAuthRedirectUriWhitelistDomain

Create an instance: `const neon_auth_redirect_uri_whitelist_domain = client.NeonAuthRedirectUriWhitelistDomain()`

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

```ts
const neon_auth_redirect_uri_whitelist_domains = await client.NeonAuthRedirectUriWhitelistDomain().list({ project_id: "example" })
```


### NeonAuthTransferAuthProviderProject

Create an instance: `const neon_auth_transfer_auth_provider_project = client.NeonAuthTransferAuthProviderProject()`

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

```ts
const neon_auth_transfer_auth_provider_project = await client.NeonAuthTransferAuthProviderProject().create({
  auth_provider: 'example_auth_provider',
  project_id: 'example_project_id',
  url: 'example_url',
})
```


### NeonAuthWebhookConfig

Create an instance: `const neon_auth_webhook_config = client.NeonAuthWebhookConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Whether the webhook is active. |
| `enabled_events` | `any[]` | Event types that trigger this webhook. |
| `timeout_seconds` | `number` | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | `string` | Destination URL that receives webhook event payloads. |

#### Example: List

```ts
const neon_auth_webhook_configs = await client.NeonAuthWebhookConfig().list({ branch_id: "example", project_id: "example" })
```


### NeonFunction

Create an instance: `const neon_function = client.NeonFunction()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_deployment` | `any` | The most recent deployment whose build completed successfully. |
| `created_at` | `string` |  |
| `current_deployment` | `any` | The most recent deployment, regardless of build status. |
| `id` | `string` | Opaque, stable function identifier. |
| `invocation_url` | `string` | URL at which the function is invoked. |
| `name` | `string` | Free-form display name. |
| `slug` | `string` | Branch-unique, lowercase DNS-label. |

#### Example: Load

```ts
const neon_function = await client.NeonFunction().load({ id: 'neon_function_id', branch_id: 'branch_id', project_id: 'project_id' })
```


### NeonFunctionDeployment

Create an instance: `const neon_function_deployment = client.NeonFunctionDeployment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const neon_function_deployment = await client.NeonFunctionDeployment().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  slug: 'example_slug',
})
```


### Operation

Create an instance: `const operation = client.Operation()`

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
| `failures_count` | `number` | The number of times the operation failed |
| `id` | `string` | The operation ID |
| `name` | `string` | Name for the replaced branch. |
| `operations` | `any[]` |  |
| `pagination` | `Record<string, any>` | Cursor-based pagination. |
| `project_id` | `string` | The ID of the project this operation ran on. |
| `retry_at` | `string` | A timestamp indicating when the operation was last retried |
| `status` | `string` | Current lifecycle state of the operation. |
| `total_duration_ms` | `number` | The total duration of the operation in milliseconds |
| `updated_at` | `string` | A timestamp indicating when the operation status was last updated |

#### Example: Load

```ts
const operation = await client.Operation().load({ id: 'operation_id', project_id: 'project_id' })
```

#### Example: List

```ts
const operations = await client.Operation().list({ project_id: "example" })
```

#### Example: Create

```ts
const operation = await client.Operation().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  action: 'example_action',
  created_at: 'example_created_at',
  failures_count: 1,
  id: 'example_id',
  operations: [],
  pagination: {},
  status: 'example_status',
  total_duration_ms: 1,
  updated_at: 'example_updated_at',
})
```


### OrgApiKeyCreate

Create an instance: `const org_api_key_create = client.OrgApiKeyCreate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `id` | `number` |  |
| `key` | `string` |  |
| `name` | `string` |  |

#### Example: Create

```ts
const org_api_key_create = await client.OrgApiKeyCreate().create({
  organization_id: 'example_organization_id',
})
```


### OrgApiKeyRevoke

Create an instance: `const org_api_key_revoke = client.OrgApiKeyRevoke()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### OrgApiKeysListResponseItem

Create an instance: `const org_api_keys_list_response_item = client.OrgApiKeysListResponseItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | A timestamp indicating when the API key was created |
| `created_by` | `Record<string, any>` | The user data of the user that created this API key. |
| `id` | `number` | The API key's unique numeric ID. |
| `last_used_at` | `string` | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `string` | The IP address from which the API key was last used |
| `name` | `string` | The user-specified API key name |
| `project_id` | `string` | If set, the API key can access only this project |

#### Example: List

```ts
const org_api_keys_list_response_items = await client.OrgApiKeysListResponseItem().list({ organization_id: "example" })
```


### Organization

Create an instance: `const organization = client.Organization()`

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
| `allow_hipaa_projects` | `boolean` | If true, allow account to mark projects as HIPAA |
| `created_at` | `string` | A timestamp indicting when the organization was created |
| `handle` | `string` | URL-safe identifier for the organization, used in API paths. |
| `id` | `string` | The Neon organization ID. |
| `label` | `string` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `managed_by` | `string` | Organizations created via the Console or the API are managed by `console`. |
| `name` | `string` | Human-readable display name of the organization. |
| `plan` | `string` | Billing plan for the organization, for example `free`, `launch`, or `scale`. |
| `require_mfa` | `boolean` | If true, all members must have MFA enabled to access this organization |
| `updated_at` | `string` | A timestamp indicating when the organization was updated |

#### Example: Load

```ts
const organization = await client.Organization().load({ id: 'organization_id' })
```

#### Example: List

```ts
const organizations = await client.Organization().list()
```

#### Example: Create

```ts
const organization = await client.Organization().create({
  id: 'example_id',
  region_id: 'example_region_id',
  vpc_endpoint_id: 'example_vpc_endpoint_id',
  created_at: 'example_created_at',
  handle: 'example_handle',
  label: 'example_label',
  managed_by: 'example_managed_by',
  name: 'example_name',
  plan: 'example_plan',
  updated_at: 'example_updated_at',
})
```


### OrganizationInvitation

Create an instance: `const organization_invitation = client.OrganizationInvitation()`

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
| `invitations` | `any[]` | List of pending invitations for the organization. |
| `invited_at` | `string` | Timestamp when the invitation was created |
| `invited_by` | `string` | UUID for the user_id who extended the invitation |
| `org_id` | `string` | Organization id as it is stored in Neon |
| `role` | `string` | Organization member's role. |

#### Example: List

```ts
const organization_invitations = await client.OrganizationInvitation().list({ id: "example" })
```

#### Example: Create

```ts
const organization_invitation = await client.OrganizationInvitation().create({
  id: 'example_id',
  email: 'example_email',
  invitations: [],
  invited_at: 'example_invited_at',
  invited_by: 'example_invited_by',
  org_id: 'example_org_id',
  role: 'example_role',
})
```


### Presign

Create an instance: `const presign = client.Presign()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` | The `Content-Type` to bind into the signed request. |
| `expires_in_seconds` | `number` | How long the presigned URL stays valid, in seconds. |
| `operation` | `string` | The transfer direction. |

#### Example: Create

```ts
const presign = await client.Presign().create({
  branch_id: 'example_branch_id',
  bucket_id: 'example_bucket_id',
  object_key: 'example_object_key',
  project_id: 'example_project_id',
  operation: 'example_operation',
})
```


### Project

Create an instance: `const project = client.Project()`

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
| `active_time_seconds` | `number` | Seconds. |
| `applications` | `Record<string, any>` | Map of project IDs to their installed applications. |
| `branch_logical_size_limit` | `number` | The logical size limit for a branch. |
| `branch_logical_size_limit_bytes` | `number` | The logical size limit for a branch. |
| `compute_last_active_at` | `string` | The most recent time when any endpoint of this project was active. |
| `compute_time_seconds` | `number` | Seconds. |
| `consumption_period_end` | `string` | A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period. |
| `consumption_period_start` | `string` | A date-time indicating when Neon Cloud started measuring consumption for current consumption period. |
| `cpu_used_sec` | `number` | Deprecated. |
| `created_at` | `string` | A timestamp indicating when the project was created |
| `creation_source` | `string` | The project creation source |
| `data_storage_bytes_hour` | `number` | Bytes-Hour. |
| `data_transfer_bytes` | `number` | Bytes. |
| `default_endpoint_settings` | `Record<string, any>` | A collection of settings for a Neon endpoint |
| `effective_project_permission` | `string` |  |
| `hipaa_enabled_at` | `string` | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | `number` | The number of seconds to retain the shared history for all branches in this project. |
| `id` | `string` | The Neon project ID. |
| `integrations` | `Record<string, any>` | Map of project IDs to their associated integration details. |
| `label` | `string` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | `string` | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | `string` | A timestamp indicating when project maintenance begins. |
| `name` | `string` | The project name |
| `org_id` | `string` | The Neon organization ID. |
| `owner` | `Record<string, any>` | Ownership details for the project, including the owner's name and email. |
| `owner_id` | `string` | ID of the organization that owns the project. |
| `pagination` | `Record<string, any>` | Cursor-based pagination. |
| `pg_version` | `number` | The major Postgres version number. |
| `platform_id` | `string` | The cloud platform identifier. |
| `project` | `Record<string, any>` | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `projects` | `any[]` | List of projects accessible to the caller. |
| `provisioner` | `string` | Compute provisioner. |
| `proxy_host` | `string` | The proxy host for the project. |
| `quota_reset_at` | `string` | Deprecated. |
| `region_id` | `string` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `Record<string, any>` | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | `boolean` | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | `number` | The current space occupied by the project in Postgres storage, in bytes. |
| `unavailable_project_ids` | `any[]` | A list of project IDs indicating which projects are known to exist, but whose details could not be fetched within the requested (or implicit) time limit |
| `updated_at` | `string` | A timestamp indicating when the project was last updated |
| `written_data_bytes` | `number` | Bytes. |

#### Example: Load

```ts
const project = await client.Project().load({ id: 'project_id' })
```

#### Example: List

```ts
const projects = await client.Project().list()
```

#### Example: Create

```ts
const project = await client.Project().create({
  id: 'example_id',
  vpc_endpoint_id: 'example_vpc_endpoint_id',
  active_time_seconds: 1,
  applications: {},
  branch_logical_size_limit: 1,
  branch_logical_size_limit_bytes: 1,
  compute_time_seconds: 1,
  consumption_period_end: 'example_consumption_period_end',
  consumption_period_start: 'example_consumption_period_start',
  cpu_used_sec: 1,
  created_at: 'example_created_at',
  creation_source: 'example_creation_source',
  data_storage_bytes_hour: 1,
  data_transfer_bytes: 1,
  history_retention_seconds: 1,
  integrations: {},
  label: 'example_label',
  name: 'example_name',
  owner: {},
  owner_id: 'example_owner_id',
  pagination: {},
  pg_version: 1,
  platform_id: 'example_platform_id',
  project: {},
  projects: [],
  provisioner: 'example_provisioner',
  proxy_host: 'example_proxy_host',
  region_id: 'example_region_id',
  store_passwords: true,
  updated_at: 'example_updated_at',
  written_data_bytes: 1,
})
```


### ProjectBranchLogField

Create an instance: `const project_branch_log_field = client.ProjectBranchLogField()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `any[]` | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

#### Example: List

```ts
const project_branch_log_fields = await client.ProjectBranchLogField().list({ branch_id: "example", project_id: "example" })
```


### ProjectBranchLogFieldValue

Create an instance: `const project_branch_log_field_value = client.ProjectBranchLogFieldValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `is_truncated` | `boolean` | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` | `any[]` |  |

#### Example: List

```ts
const project_branch_log_field_values = await client.ProjectBranchLogFieldValue().list({ branch_id: "example", field_name: "example", project_id: "example" })
```


### ProjectBranchLogsQuery

Create an instance: `const project_branch_logs_query = client.ProjectBranchLogsQuery()`

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
| `is_truncated` | `boolean` | True when more records matched than were returned. |
| `limit` | `number` | Maximum number of log records to return per page. |
| `logql` | `string` | Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream. |
| `logs` | `any[]` |  |
| `minimum_severity` | `string` | An OpenTelemetry severity level. |
| `next_cursor` | `string` | Pagination cursor to pass as `cursor` on the next request. |
| `scope_name` | `string` | Match the OpenTelemetry instrumentation scope name exactly. |
| `service_name` | `string` | Match the OpenTelemetry `service.name` resource attribute exactly. |
| `severity_text` | `string` | Match the OpenTelemetry severity text exactly. |
| `since` | `any` | Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted. |
| `sort_order` | `string` | Order matching records by timestamp. |
| `source` | `string` | The Neon service that emitted the log record. |
| `start_time` | `string` | Inclusive beginning of the query window. |
| `trace_id` | `string` | Match records associated with this OpenTelemetry trace ID. |

#### Example: Create

```ts
const project_branch_logs_query = await client.ProjectBranchLogsQuery().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  is_truncated: true,
  logs: [],
})
```


### ProjectMember

Create an instance: `const project_member = client.ProjectMember()`

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

```ts
const project_members = await client.ProjectMember().list({ id: "example" })
```


### ProjectMemberRole

Create an instance: `const project_member_role = client.ProjectMemberRole()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credential_rotation_recommended` | `boolean` | Hint that database credentials may need rotation after the role change. |
| `effective_project_permission` | `string` | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `string` | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `string` | The caller's effective permission for a project when per-project permissions are enabled. |
| `member_id` | `string` |  |
| `name` | `string` | The user's display name. |
| `org_api_key_rotation_recommended` | `boolean` | Hint that project-scoped org API keys created by the target user may need rotation. |
| `org_default_project_permission` | `string` | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `string` | Organization-level role used by project member role management. |
| `project_id` | `string` |  |
| `project_role` | `string` | The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback. |
| `role` | `string` | Per-project role. |
| `user_id` | `string` |  |


### ProjectPermission

Create an instance: `const project_permission = client.ProjectPermission()`

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

```ts
const project_permissions = await client.ProjectPermission().list({ id: "example" })
```

#### Example: Create

```ts
const project_permission = await client.ProjectPermission().create({
  id: 'example_id',
  email: 'example_email',
  granted_at: 'example_granted_at',
  granted_to_email: 'example_granted_to_email',
})
```


### ProjectRecover

Create an instance: `const project_recover = client.ProjectRecover()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branches` | `any[]` | Branches in the project. |
| `id` | `string` |  |
| `project` | `Record<string, any>` | Full details of the project, including configuration, consumption metrics, and ownership. |

#### Example: Create

```ts
const project_recover = await client.ProjectRecover().create({
  id: 'example_id',
  branches: [],
  project: {},
})
```


### ProjectTransferRequest

Create an instance: `const project_transfer_request = client.ProjectTransferRequest()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `ttl_seconds` | `number` | Number of seconds the transfer request stays valid before it expires. |

#### Example: Create

```ts
const project_transfer_request = await client.ProjectTransferRequest().create({
  id: 'example_id',
})
```


### Region

Create an instance: `const region = client.Region()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default` | `boolean` | True if this region is selected by default when no region is specified during project creation. |
| `geo_lat` | `string` | The geographical latitude (approximate) for the region. |
| `geo_long` | `string` | The geographical longitude (approximate) for the region. |
| `name` | `string` | A short description of the region. |
| `region_id` | `string` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |

#### Example: List

```ts
const regions = await client.Region().list()
```


### Role

Create an instance: `const role = client.Role()`

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
| `protected` | `boolean` | Whether or not the role is system-protected |
| `role` | `Record<string, any>` | Properties of the role to create. |
| `updated_at` | `string` | A timestamp indicating when the role was last updated |

#### Example: Load

```ts
const role = await client.Role().load({ id: 'role_id', branch_id: 'branch_id', project_id: 'project_id' })
```

#### Example: List

```ts
const roles = await client.Role().list({ branch_id: "example", project_id: "example" })
```

#### Example: Create

```ts
const role = await client.Role().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  created_at: 'example_created_at',
  name: 'example_name',
  role: {},
  updated_at: 'example_updated_at',
})
```


### RoleOperation

Create an instance: `const role_operation = client.RoleOperation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `operations` | `any[]` |  |
| `role` | `Record<string, any>` | Role details for the requested database role. |

#### Example: Create

```ts
const role_operation = await client.RoleOperation().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  role_name: 'example_role_name',
  operations: [],
  role: {},
})
```


### RolePassword

Create an instance: `const role_password = client.RolePassword()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `password` | `string` | The role password |

#### Example: Load

```ts
const role_password = await client.RolePassword().load({ branch_id: 'branch_id', project_id: 'project_id', role_name: 'role_name' })
```


### SendNeonAuthTestEmail

Create an instance: `const send_neon_auth_test_email = client.SendNeonAuthTestEmail()`

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
| `port` | `number` | TCP port of the SMTP server. |
| `recipient_email` | `string` | The email address to send the test email to. |
| `sender_email` | `string` | Email address used as the From address on outgoing auth emails. |
| `sender_name` | `string` | Display name shown as the sender in outgoing emails. |
| `success` | `boolean` | Whether the test email was sent successfully. |
| `username` | `string` | Username for authenticating with the SMTP server. |

#### Example: Create

```ts
const send_neon_auth_test_email = await client.SendNeonAuthTestEmail().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  host: 'example_host',
  password: 'example_password',
  port: 1,
  recipient_email: 'example_recipient_email',
  sender_email: 'example_sender_email',
  sender_name: 'example_sender_name',
  success: true,
  username: 'example_username',
})
```


### Snapshot

Create an instance: `const snapshot = client.Snapshot()`

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
| `diff_size` | `number` | Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage. |
| `expires_at` | `string` | RFC 3339 timestamp when the snapshot expires and is eligible for deletion. |
| `full_size` | `number` | Full logical size of the snapshot in bytes at the time it was taken. |
| `id` | `string` | The snapshot ID. |
| `lsn` | `string` | WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`). |
| `manual` | `boolean` | True if the snapshot was created manually rather than by a schedule. |
| `name` | `string` | Human-readable label for the snapshot. |
| `operations` | `any[]` |  |
| `slug` | `string` | Snapshot resource ID, unique within the project. |
| `snapshot` | `Record<string, any>` | Fields to update on the snapshot. |
| `source_branch_id` | `string` | Branch from which this snapshot was created. |
| `timestamp` | `string` | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

#### Example: List

```ts
const snapshots = await client.Snapshot().list({ project_id: "example" })
```

#### Example: Create

```ts
const snapshot = await client.Snapshot().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  created_at: 'example_created_at',
  id: 'example_id',
  operations: [],
  snapshot: {},
})
```


### SpendingLimit

Create an instance: `const spending_limit = client.SpendingLimit()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `spending_limit_cents` | `number` | Monthly spending cap in cents. |

#### Example: Load

```ts
const spending_limit = await client.SpendingLimit().load({ organization_id: 'organization_id' })
```


### Trigger

Create an instance: `const trigger = client.Trigger()`

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
| `triggers` | `any[]` |  |

#### Example: Load

```ts
const trigger = await client.Trigger().load({ id: 'trigger_id', branch_id: 'branch_id', project_id: 'project_id' })
```

#### Example: List

```ts
const triggers = await client.Trigger().list({ branch_id: "example", project_id: "example" })
```

#### Example: Create

```ts
const trigger = await client.Trigger().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  triggers: [],
})
```


### UpdateNeonAuthUserRole

Create an instance: `const update_neon_auth_user_role = client.UpdateNeonAuthUserRole()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | ID of the updated user |
| `roles` | `any[]` | Roles to assign to the user in the Neon Auth (Better Auth) directory. |


### VpcEndpoint

Create an instance: `const vpc_endpoint = client.VpcEndpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `example_restricted_projects` | `any[]` | A list of example projects that are restricted to use this VPC endpoint. |
| `id` | `string` |  |
| `label` | `string` | A descriptive label for the VPC endpoint |
| `num_restricted_projects` | `number` | The number of projects that are restricted to use this VPC endpoint. |
| `region_id` | `string` | The region where the VPC endpoint is located |
| `state` | `string` | The current state of the VPC endpoint. |
| `vpc_endpoint_id` | `string` | Cloud provider identifier for the VPC endpoint. |

#### Example: Load

```ts
const vpc_endpoint = await client.VpcEndpoint().load({ id: 'vpc_endpoint_id', organization_id: 'organization_id', region_id: 'region_id' })
```

#### Example: List

```ts
const vpc_endpoints = await client.VpcEndpoint().list({ project_id: "example" })
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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

### Module structure

```
neon/
├── src/
│   ├── NeonSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { NeonSDK } from '@voxgig-sdk/neon-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const branchstorage = client.BranchStorage()
await branchstorage.load({ id: "example_id", project_id: "example" })

// branchstorage.data() now returns the branchstorage data from the last `load`
// branchstorage.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
