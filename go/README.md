# Neon Golang SDK



The Golang SDK for the Neon API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Anonymize(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/neon-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/neon-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/neon-sdk/go=../neon-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/neon-sdk/go"
)

func main() {
    client := sdk.NewNeonSDK(map[string]any{
        "apikey": os.Getenv("NEON_APIKEY"),
    })

    // Create a anonymize.
    created, err := client.Anonymize(nil).Create(map[string]any{"branch_id": "example_branch_id", "project_id": "example_project_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
branchstorage, err := client.BranchStorage(nil).Load(map[string]any{"id": "example_id", "project_id": "example"}, nil)
if err != nil {
    // handle err
    return
}
_ = branchstorage
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

branchStorage, err := client.BranchStorage(nil).Load(
    map[string]any{"id": "test01", "project_id": "example"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(branchStorage) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewNeonSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewNeonSDK

```go
func NewNeonSDK(options map[string]any) *NeonSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *NeonSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### NeonSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Anonymize` | `(data map[string]any) NeonEntity` | Create an Anonymize entity instance. |
| `AnonymizedBranchStatus` | `(data map[string]any) NeonEntity` | Create an AnonymizedBranchStatus entity instance. |
| `ApiKey` | `(data map[string]any) NeonEntity` | Create an ApiKey entity instance. |
| `Auth` | `(data map[string]any) NeonEntity` | Create an Auth entity instance. |
| `AuthLegacy` | `(data map[string]any) NeonEntity` | Create an AuthLegacy entity instance. |
| `AvailablePreloadLibrary` | `(data map[string]any) NeonEntity` | Create an AvailablePreloadLibrary entity instance. |
| `BackupSchedule` | `(data map[string]any) NeonEntity` | Create a BackupSchedule entity instance. |
| `Branch` | `(data map[string]any) NeonEntity` | Create a Branch entity instance. |
| `BranchAiGateway` | `(data map[string]any) NeonEntity` | Create a BranchAiGateway entity instance. |
| `BranchOperation` | `(data map[string]any) NeonEntity` | Create a BranchOperation entity instance. |
| `BranchSchema` | `(data map[string]any) NeonEntity` | Create a BranchSchema entity instance. |
| `BranchSchemaCompare` | `(data map[string]any) NeonEntity` | Create a BranchSchemaCompare entity instance. |
| `BranchStorage` | `(data map[string]any) NeonEntity` | Create a BranchStorage entity instance. |
| `Bucket` | `(data map[string]any) NeonEntity` | Create a Bucket entity instance. |
| `BucketObjectsList` | `(data map[string]any) NeonEntity` | Create a BucketObjectsList entity instance. |
| `ConnectionUri` | `(data map[string]any) NeonEntity` | Create a ConnectionUri entity instance. |
| `Consumption` | `(data map[string]any) NeonEntity` | Create a Consumption entity instance. |
| `CreateCredential` | `(data map[string]any) NeonEntity` | Create a CreateCredential entity instance. |
| `Credential` | `(data map[string]any) NeonEntity` | Create a Credential entity instance. |
| `CurrentUserInfo` | `(data map[string]any) NeonEntity` | Create a CurrentUserInfo entity instance. |
| `CustomDomain` | `(data map[string]any) NeonEntity` | Create a CustomDomain entity instance. |
| `DataApi` | `(data map[string]any) NeonEntity` | Create a DataApi entity instance. |
| `Database` | `(data map[string]any) NeonEntity` | Create a Database entity instance. |
| `EmailProvider` | `(data map[string]any) NeonEntity` | Create an EmailProvider entity instance. |
| `EmailServer` | `(data map[string]any) NeonEntity` | Create an EmailServer entity instance. |
| `Empty` | `(data map[string]any) NeonEntity` | Create an Empty entity instance. |
| `Endpoint` | `(data map[string]any) NeonEntity` | Create an Endpoint entity instance. |
| `EndpointOperation` | `(data map[string]any) NeonEntity` | Create an EndpointOperation entity instance. |
| `Function` | `(data map[string]any) NeonEntity` | Create a Function entity instance. |
| `Jwk` | `(data map[string]any) NeonEntity` | Create a Jwk entity instance. |
| `MaskingRule` | `(data map[string]any) NeonEntity` | Create a MaskingRule entity instance. |
| `Member` | `(data map[string]any) NeonEntity` | Create a Member entity instance. |
| `NeonAuthAllowLocalhost` | `(data map[string]any) NeonEntity` | Create a NeonAuthAllowLocalhost entity instance. |
| `NeonAuthConfig` | `(data map[string]any) NeonEntity` | Create a NeonAuthConfig entity instance. |
| `NeonAuthCreateIntegration` | `(data map[string]any) NeonEntity` | Create a NeonAuthCreateIntegration entity instance. |
| `NeonAuthCreateNewUser` | `(data map[string]any) NeonEntity` | Create a NeonAuthCreateNewUser entity instance. |
| `NeonAuthEmailAndPasswordConfig` | `(data map[string]any) NeonEntity` | Create a NeonAuthEmailAndPasswordConfig entity instance. |
| `NeonAuthEmailServerConfig` | `(data map[string]any) NeonEntity` | Create a NeonAuthEmailServerConfig entity instance. |
| `NeonAuthIntegration` | `(data map[string]any) NeonEntity` | Create a NeonAuthIntegration entity instance. |
| `NeonAuthMagicLinkConfig` | `(data map[string]any) NeonEntity` | Create a NeonAuthMagicLinkConfig entity instance. |
| `NeonAuthOauthProvider` | `(data map[string]any) NeonEntity` | Create a NeonAuthOauthProvider entity instance. |
| `NeonAuthOrganizationConfig` | `(data map[string]any) NeonEntity` | Create a NeonAuthOrganizationConfig entity instance. |
| `NeonAuthPhoneNumberConfig` | `(data map[string]any) NeonEntity` | Create a NeonAuthPhoneNumberConfig entity instance. |
| `NeonAuthPluginConfig` | `(data map[string]any) NeonEntity` | Create a NeonAuthPluginConfig entity instance. |
| `NeonAuthRedirectUriWhitelistDomain` | `(data map[string]any) NeonEntity` | Create a NeonAuthRedirectUriWhitelistDomain entity instance. |
| `NeonAuthTransferAuthProviderProject` | `(data map[string]any) NeonEntity` | Create a NeonAuthTransferAuthProviderProject entity instance. |
| `NeonAuthWebhookConfig` | `(data map[string]any) NeonEntity` | Create a NeonAuthWebhookConfig entity instance. |
| `NeonFunction` | `(data map[string]any) NeonEntity` | Create a NeonFunction entity instance. |
| `NeonFunctionDeployment` | `(data map[string]any) NeonEntity` | Create a NeonFunctionDeployment entity instance. |
| `Operation` | `(data map[string]any) NeonEntity` | Create an Operation entity instance. |
| `OrgApiKeyCreate` | `(data map[string]any) NeonEntity` | Create an OrgApiKeyCreate entity instance. |
| `OrgApiKeyRevoke` | `(data map[string]any) NeonEntity` | Create an OrgApiKeyRevoke entity instance. |
| `OrgApiKeysListResponseItem` | `(data map[string]any) NeonEntity` | Create an OrgApiKeysListResponseItem entity instance. |
| `Organization` | `(data map[string]any) NeonEntity` | Create an Organization entity instance. |
| `OrganizationInvitation` | `(data map[string]any) NeonEntity` | Create an OrganizationInvitation entity instance. |
| `Presign` | `(data map[string]any) NeonEntity` | Create a Presign entity instance. |
| `Project` | `(data map[string]any) NeonEntity` | Create a Project entity instance. |
| `ProjectBranchLogField` | `(data map[string]any) NeonEntity` | Create a ProjectBranchLogField entity instance. |
| `ProjectBranchLogFieldValue` | `(data map[string]any) NeonEntity` | Create a ProjectBranchLogFieldValue entity instance. |
| `ProjectBranchLogsQuery` | `(data map[string]any) NeonEntity` | Create a ProjectBranchLogsQuery entity instance. |
| `ProjectMember` | `(data map[string]any) NeonEntity` | Create a ProjectMember entity instance. |
| `ProjectMemberRole` | `(data map[string]any) NeonEntity` | Create a ProjectMemberRole entity instance. |
| `ProjectPermission` | `(data map[string]any) NeonEntity` | Create a ProjectPermission entity instance. |
| `ProjectRecover` | `(data map[string]any) NeonEntity` | Create a ProjectRecover entity instance. |
| `ProjectTransferRequest` | `(data map[string]any) NeonEntity` | Create a ProjectTransferRequest entity instance. |
| `Region` | `(data map[string]any) NeonEntity` | Create a Region entity instance. |
| `Role` | `(data map[string]any) NeonEntity` | Create a Role entity instance. |
| `RoleOperation` | `(data map[string]any) NeonEntity` | Create a RoleOperation entity instance. |
| `RolePassword` | `(data map[string]any) NeonEntity` | Create a RolePassword entity instance. |
| `SendNeonAuthTestEmail` | `(data map[string]any) NeonEntity` | Create a SendNeonAuthTestEmail entity instance. |
| `Snapshot` | `(data map[string]any) NeonEntity` | Create a Snapshot entity instance. |
| `SpendingLimit` | `(data map[string]any) NeonEntity` | Create a SpendingLimit entity instance. |
| `Trigger` | `(data map[string]any) NeonEntity` | Create a Trigger entity instance. |
| `UpdateNeonAuthUserRole` | `(data map[string]any) NeonEntity` | Create an UpdateNeonAuthUserRole entity instance. |
| `VpcEndpoint` | `(data map[string]any) NeonEntity` | Create a VpcEndpoint entity instance. |

### Entity interface (NeonEntity)

All entities implement the `NeonEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    anonymize, err := client.Anonymize(nil).Create(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // anonymize is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Anonymize

| Field | Description |
| --- | --- |
| `"completed_at"` | Timestamp indicating when the latest anonymization attempt completed. |
| `"masked_columns"` | Number of columns that had masking rules applied during the attempt. |
| `"started_at"` | Timestamp indicating when the latest anonymization attempt started. |
| `"triggered_by"` | UUID of the user who triggered the latest anonymization attempt. |
| `"triggered_by_username"` | Username of the user who triggered the latest anonymization attempt. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/anonymize`

#### AnonymizedBranchStatus

| Field | Description |
| --- | --- |
| `"completed_at"` | Timestamp indicating when the latest anonymization attempt completed. |
| `"masked_columns"` | Number of columns that had masking rules applied during the attempt. |
| `"started_at"` | Timestamp indicating when the latest anonymization attempt started. |
| `"triggered_by"` | UUID of the user who triggered the latest anonymization attempt. |
| `"triggered_by_username"` | Username of the user who triggered the latest anonymization attempt. |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/anonymized_status`

#### ApiKey

| Field | Description |
| --- | --- |
| `"created_at"` | A timestamp indicating when the API key was created |
| `"created_by"` | ID of the user who created this API key |
| `"id"` | The API key's unique numeric ID. |
| `"key"` | The generated 64-bit token required to access the Neon API |
| `"key_name"` | A user-specified API key name. |
| `"last_used_at"` | A timestamp indicating when the API was last used |
| `"last_used_from_addr"` | The IP address from which the API key was last used |
| `"name"` | The user-specified API key name |

Operations: Create, List, Remove.

API path: `/api_keys`

#### Auth

| Field | Description |
| --- | --- |
| `"account_id"` | The ID of the account associated with this authentication record. |
| `"auth_data"` |  |
| `"auth_method"` | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

Operations: Create, Load, Remove.

API path: `/projects/{project_id}/branches/{branch_id}/auth/domains`

#### AuthLegacy

| Field | Description |
| --- | --- |
| `"auth_provider"` | Authentication provider integrated with this Neon Auth configuration. |
| `"domain"` | URI to add to the redirect URI allowlist for the auth provider. |

Operations: Create, Remove.

API path: `/projects/{project_id}/auth/domains`

#### AvailablePreloadLibrary

| Field | Description |
| --- | --- |
| `"description"` | Human-readable explanation of the library's purpose and behavior. |
| `"is_default"` | Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints. |
| `"is_experimental"` | Marks the library as experimental. |
| `"library_name"` | Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`). |
| `"version"` | Version of the preload library. |

Operations: List.

API path: `/projects/{project_id}/available_preload_libraries`

#### BackupSchedule

| Field | Description |
| --- | --- |
| `"day"` | The day of the week or month to take the snapshot (if applicable). |
| `"frequency"` | How often to take snapshots. |
| `"hour"` | The hour of the day to take the snapshot (if applicable). |
| `"month"` | The month of the year to take the snapshot (if applicable). |
| `"retention_seconds"` | How long to keep a scheduled snapshot (in seconds) before it's automatically deleted. |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/backup_schedule`

#### Branch

| Field | Description |
| --- | --- |
| `"annotation"` | Annotation data associated with the annotated object. |
| `"annotations"` | Map of annotations keyed by resource identifier, where each value contains the annotation data for that resource. |
| `"branch"` | Branch returned by the request. |
| `"branches"` | Branches in the project. |
| `"id"` |  |
| `"pagination"` | To paginate the response, issue an initial request with `limit` value. |

Operations: Create, List, Load, Remove, Update.

API path: `/projects/{project_id}/branches`

#### BranchAiGateway

| Field | Description |
| --- | --- |
| `"base_url"` | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `"enabled"` | Always `true` in 200 responses. |
| `"id"` |  |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/ai_gateway`

#### BranchOperation

| Field | Description |
| --- | --- |
| `"branch"` | Branch returned by the request. |
| `"id"` |  |
| `"operations"` |  |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/restore`

#### BranchSchema

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"tables"` | Tables present in the branch schema. |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/schema`

#### BranchSchemaCompare

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/compare_schema`

#### BranchStorage

| Field | Description |
| --- | --- |
| `"enabled"` | Always `true` in 200 responses. |
| `"force_path_style"` | Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). |
| `"id"` |  |
| `"region"` | The AWS region for this branch's object storage. |
| `"s3_endpoint"` | The S3-compatible endpoint URL for this branch. |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/storage`

#### Bucket

| Field | Description |
| --- | --- |
| `"access_level"` | Access level for the bucket. |
| `"created_at"` | When the bucket was created. |
| `"id"` |  |
| `"name"` | The bucket name. |

Operations: Create, List, Load, Remove.

API path: `/projects/{project_id}/branches/{branch_id}/buckets`

#### BucketObjectsList

| Field | Description |
| --- | --- |
| `"etag"` | The object's entity tag (content hash). |
| `"key"` | The full object key. |
| `"last_modified"` | The time the object was last modified. |
| `"size"` | The object size in bytes. |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects`

#### ConnectionUri

| Field | Description |
| --- | --- |
| `"uri"` | The connection URI. |

Operations: Load.

API path: `/projects/{project_id}/connection_uri`

#### Consumption

| Field | Description |
| --- | --- |
| `"branches"` | Per-branch consumption history records returned for the requested time range. |
| `"pagination"` | Cursor-based pagination. |
| `"projects"` | Per-project consumption history records included in the response. |

Operations: List.

API path: `/consumption_history/v2/branches`

#### CreateCredential

| Field | Description |
| --- | --- |
| `"name"` | Free-form customer label for the credential. |
| `"principal_type"` | Principal type for the credential. |
| `"scopes"` |  |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/credentials`

#### Credential

| Field | Description |
| --- | --- |
| `"branch_id"` |  |
| `"created_at"` |  |
| `"expires_at"` | When the credential expires; absent means never expires. |
| `"function_id"` |  |
| `"id"` |  |
| `"last_used_at"` |  |
| `"name"` | Customer-supplied label; absent when not provided at issuance. |
| `"principal_type"` |  |
| `"revoked_at"` |  |
| `"scopes"` |  |
| `"token_id"` | Opaque credential id (e.g. |
| `"token_id_short"` |  |

Operations: Create, List, Remove.

API path: `/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/reveal`

#### CurrentUserInfo

| Field | Description |
| --- | --- |
| `"email"` | Email address associated with this auth account. |
| `"image"` | URL of the user's profile picture as provided by the identity provider. |
| `"login"` | Deprecated. |
| `"name"` | Display name of the account as provided by the identity provider. |
| `"provider"` | Identity provider id from keycloak |

Operations: List.

API path: `/users/me`

#### CustomDomain

| Field | Description |
| --- | --- |
| `"domain"` | The custom domain to register (for example `dashboard.acme.com`). |
| `"entity_id"` | The target entity's identifier within the branch. |
| `"entity_type"` | The kind of branch entity to point the domain at. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/custom-domains`

#### DataApi

| Field | Description |
| --- | --- |
| `"add_default_grants"` | Grant all permissions to the tables in the public schema to authenticated users |
| `"auth_provider"` | Authentication provider for the Neon Data API. |
| `"available_schemas"` | List of available database schemas (SubZero only) |
| `"id"` |  |
| `"jwks_url"` | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `"jwt_audience"` | Expected `aud` claim in incoming JWTs. |
| `"provider_name"` | Display name for the authentication provider. |
| `"settings"` | Configuration settings for the Data API (SubZero only) |
| `"skip_auth_schema"` | Skip creating the auth schema and RLS functions |
| `"status"` | The status of the Neon Data API deployment |
| `"url"` | The URL of the Neon Data API |

Operations: Create, Load, Remove, Update.

API path: `/projects/{project_id}/branches/{branch_id}/data-api/{database_name}`

#### Database

| Field | Description |
| --- | --- |
| `"branch_id"` | The ID of the branch this database belongs to. |
| `"created_at"` | A timestamp indicating when the database was created |
| `"database"` | Configuration for the new Postgres database. |
| `"id"` | The database ID |
| `"name"` | The database name |
| `"owner_name"` | The name of role that owns the database |
| `"updated_at"` | A timestamp indicating when the database was last updated |

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
| `"destination_org_id"` | The destination organization identifier |
| `"project_ids"` | The list of projects ids to transfer. |
| `"schedule"` | List of schedule entries defining the backup frequency. |

Operations: Create, Remove, Update.

API path: `/organizations/{source_org_id}/projects/transfer`

#### Endpoint

| Field | Description |
| --- | --- |
| `"autoscaling_limit_max_cu"` | The maximum number of Compute Units |
| `"autoscaling_limit_min_cu"` | The minimum number of Compute Units |
| `"branch_id"` | The ID of the branch this compute endpoint belongs to. |
| `"compute_release_version"` | Attached compute's release version number. |
| `"created_at"` | A timestamp indicating when the compute endpoint was created |
| `"creation_source"` | The compute endpoint creation source |
| `"current_state"` | Lifecycle state of the compute endpoint. |
| `"disabled"` | Whether to restrict connections to the compute endpoint. |
| `"endpoint"` | Configuration for the compute endpoint to create. |
| `"host"` | The hostname of the compute endpoint. |
| `"id"` | The compute endpoint ID. |
| `"last_active"` | A timestamp indicating when the compute endpoint was last active |
| `"name"` | Optional name of the compute endpoint |
| `"passwordless_access"` | Whether to permit passwordless access to the compute endpoint |
| `"pending_state"` | Target state the compute endpoint is transitioning to. |
| `"pooler_enabled"` | Deprecated. |
| `"pooler_mode"` | Deprecated. |
| `"project_id"` | The ID of the project this compute endpoint belongs to. |
| `"provisioner"` | Compute provisioner. |
| `"proxy_host"` | Deprecated. |
| `"region_id"` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `"settings"` | A collection of settings for a compute endpoint |
| `"started_at"` | A timestamp indicating when the compute endpoint was last started |
| `"suspend_timeout_seconds"` | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `"suspended_at"` | A timestamp indicating when the compute endpoint was last suspended |
| `"type"` | Compute endpoint type. |
| `"updated_at"` | A timestamp indicating when the compute endpoint was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/projects/{project_id}/endpoints`

#### EndpointOperation

| Field | Description |
| --- | --- |
| `"endpoint"` | Compute endpoint created or retrieved, including its current lifecycle state. |
| `"id"` |  |
| `"operations"` |  |

Operations: Create.

API path: `/projects/{project_id}/endpoints/{endpoint_id}/restart`

#### Function

| Field | Description |
| --- | --- |
| `"custom_domains"` |  |
| `"functions"` |  |
| `"id"` |  |
| `"pagination"` | To paginate the response, issue an initial request with `limit` value. |

Operations: List, Remove.

API path: `/projects/{project_id}/branches/{branch_id}/custom-domains`

#### Jwk

| Field | Description |
| --- | --- |
| `"branch_id"` | The Neon branch ID. |
| `"created_at"` | The date and time when the JWKS was created |
| `"id"` | The JWKS configuration's ID. |
| `"jwks_url"` | URL of the provider's JWKS endpoint used to verify JWTs. |
| `"jwt_audience"` | Expected `aud` claim in incoming JWTs. |
| `"project_id"` | The Neon project ID. |
| `"provider_name"` | The name of the authentication provider (e.g., Clerk, Stytch, Auth0) |
| `"role_names"` | Deprecated. |
| `"skip_role_creation"` | Deprecated. |
| `"updated_at"` | The date and time when the JWKS was last modified |

Operations: Create, List, Remove.

API path: `/projects/{project_id}/jwks`

#### MaskingRule

| Field | Description |
| --- | --- |
| `"column_name"` | The name of the column to be masked |
| `"database_name"` | The name of the database containing the table to be masked |
| `"masking_function"` | The PostgreSQL Anonymizer masking function to apply. |
| `"masking_rules"` | List of masking rules for the branch |
| `"masking_value"` | A literal value to set on the column when masking. |
| `"schema_name"` | The name of the schema containing the table to be masked |
| `"table_name"` | The name of the table containing the column to be masked |

Operations: List, Update.

API path: `/projects/{project_id}/branches/{branch_id}/masking_rules`

#### Member

| Field | Description |
| --- | --- |
| `"id"` | The organization member's ID. |
| `"joined_at"` | Timestamp when the user joined the organization. |
| `"org_id"` | The Neon organization ID. |
| `"role"` | Organization member's role. |
| `"user_id"` | The Neon user ID. |

Operations: Load, Remove, Update.

API path: `/organizations/{org_id}/members/{member_id}`

#### NeonAuthAllowLocalhost

| Field | Description |
| --- | --- |
| `"allow_localhost"` | Whether to allow localhost connections |

Operations: Load, Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/allow_localhost`

#### NeonAuthConfig

| Field | Description |
| --- | --- |
| `"name"` | The application name used in auth emails and communications. |

Operations: Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/config`

#### NeonAuthCreateIntegration

| Field | Description |
| --- | --- |
| `"auth_provider"` | Authentication provider integrated with this Neon Auth configuration. |
| `"branch_id"` | The Neon branch ID. |
| `"database_name"` | Name of the database to enable Neon Auth on. |
| `"project_id"` | The Neon project ID. |
| `"role_name"` | Deprecated. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/auth`

#### NeonAuthCreateNewUser

| Field | Description |
| --- | --- |
| `"auth_provider"` | Authentication provider integrated with this Neon Auth configuration. |
| `"email"` | Email address of the new Neon Auth user to create. |
| `"name"` | Display name for the new user. |
| `"project_id"` | The Neon project ID. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/auth/users`

#### NeonAuthEmailAndPasswordConfig

| Field | Description |
| --- | --- |
| `"auto_sign_in_after_verification"` | Whether users are automatically signed in after verifying their email |
| `"disable_sign_up"` | Whether to disable new user sign ups |
| `"email_verification_method"` | Controls how email addresses are verified during sign-up or sign-in. |
| `"enabled"` | Whether email and password authentication is enabled |
| `"require_email_verification"` | Whether email verification is required before users can sign in |
| `"send_verification_email_on_sign_in"` | Whether to send a verification email when users sign in |
| `"send_verification_email_on_sign_up"` | Whether to send a verification email when users sign up |

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
| `"auth_provider"` | Authentication provider integrated with this Neon Auth configuration. |
| `"auth_provider_project_id"` | Project identifier assigned by the auth provider for this integration. |
| `"base_url"` | Base URL of the Neon Auth service endpoint for this integration. |
| `"branch_id"` | The Neon branch ID. |
| `"created_at"` | Timestamp when the Neon Auth integration was created, in RFC 3339 format (UTC). |
| `"db_name"` | Name of the database used by the Neon Auth integration. |
| `"jwks_url"` | URL of the provider's JWKS endpoint used to verify JWTs. |
| `"name"` | Application name shown in auth emails and communications. |
| `"owned_by"` | Owner of the auth provider project. |
| `"transfer_status"` | Ownership transfer state for the auth provider project. |

Operations: List, Load.

API path: `/projects/{project_id}/auth/integrations`

#### NeonAuthMagicLinkConfig

| Field | Description |
| --- | --- |
| `"disable_sign_up"` | Whether to disable sign-up via magic link. |
| `"enabled"` | Whether the magic link plugin is enabled. |
| `"expires_in"` | Minutes until the magic link expires. |

Operations: Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins/magic-link`

#### NeonAuthOauthProvider

| Field | Description |
| --- | --- |
| `"client_id"` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `"client_secret"` | OAuth client secret for the provider. |
| `"id"` | The OAuth provider's ID. |
| `"microsoft_tenant_id"` | Tenant ID for the Microsoft OAuth provider. |
| `"type"` | OAuth provider key type. |

Operations: Create, List, Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/oauth_providers`

#### NeonAuthOrganizationConfig

| Field | Description |
| --- | --- |
| `"creator_role"` | Role of the organization's creator. |
| `"enabled"` | Whether the organization plugin is enabled. |
| `"membership_limit"` | Maximum number of members per organization. |
| `"organization_limit"` | Maximum organizations a user can belong to (created or joined). |
| `"send_invitation_email"` | Whether to send invitation emails when inviting members to an organization. |

Operations: Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins/organization`

#### NeonAuthPhoneNumberConfig

| Field | Description |
| --- | --- |
| `"enabled"` | Whether the phone number plugin is enabled. |
| `"otp_expires_in"` | Time in seconds before the OTP expires |

Operations: Load, Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number`

#### NeonAuthPluginConfig

| Field | Description |
| --- | --- |
| `"client_id"` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `"client_secret"` | OAuth client secret for the provider. |
| `"id"` | The OAuth provider's ID. |
| `"type"` | OAuth provider key type. |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/auth/plugins`

#### NeonAuthRedirectUriWhitelistDomain

| Field | Description |
| --- | --- |
| `"auth_provider"` | Authentication provider integrated with this Neon Auth configuration. |
| `"domain"` | Allowed redirect URI domain for the auth provider. |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/auth/domains`

#### NeonAuthTransferAuthProviderProject

| Field | Description |
| --- | --- |
| `"auth_provider"` | Authentication provider integrated with this Neon Auth configuration. |
| `"project_id"` | The Neon project ID. |
| `"url"` | URL for completing the process of ownership transfer |

Operations: Create.

API path: `/projects/auth/transfer_ownership`

#### NeonAuthWebhookConfig

| Field | Description |
| --- | --- |
| `"enabled"` | Whether the webhook is active. |
| `"enabled_events"` | Event types that trigger this webhook. |
| `"timeout_seconds"` | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `"webhook_url"` | Destination URL that receives webhook event payloads. |

Operations: List, Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/webhooks`

#### NeonFunction

| Field | Description |
| --- | --- |
| `"active_deployment"` | The most recent deployment whose build completed successfully. |
| `"created_at"` |  |
| `"current_deployment"` | The most recent deployment, regardless of build status. |
| `"id"` | Opaque, stable function identifier. |
| `"invocation_url"` | URL at which the function is invoked. |
| `"name"` | Free-form display name. |
| `"slug"` | Branch-unique, lowercase DNS-label. |

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
| `"action"` | The action performed by the operation |
| `"branch_id"` | The ID of the branch this operation ran on. |
| `"created_at"` | A timestamp indicating when the operation was created |
| `"endpoint_id"` | The ID of the compute endpoint this operation ran on. |
| `"error"` | Human-readable message describing why the operation failed. |
| `"failures_count"` | The number of times the operation failed |
| `"id"` | The operation ID |
| `"name"` | Name for the replaced branch. |
| `"operations"` |  |
| `"pagination"` | Cursor-based pagination. |
| `"project_id"` | The ID of the project this operation ran on. |
| `"retry_at"` | A timestamp indicating when the operation was last retried |
| `"status"` | Current lifecycle state of the operation. |
| `"total_duration_ms"` | The total duration of the operation in milliseconds |
| `"updated_at"` | A timestamp indicating when the operation status was last updated |

Operations: Create, List, Load.

API path: `/projects/{project_id}/branches/{branch_id}/finalize_restore`

#### OrgApiKeyCreate

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"created_by"` |  |
| `"id"` |  |
| `"key"` |  |
| `"name"` |  |

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
| `"created_at"` | A timestamp indicating when the API key was created |
| `"created_by"` | The user data of the user that created this API key. |
| `"id"` | The API key's unique numeric ID. |
| `"last_used_at"` | A timestamp indicating when the API was last used |
| `"last_used_from_addr"` | The IP address from which the API key was last used |
| `"name"` | The user-specified API key name |
| `"project_id"` | If set, the API key can access only this project |

Operations: List.

API path: `/organizations/{org_id}/api_keys`

#### Organization

| Field | Description |
| --- | --- |
| `"allow_hipaa_projects"` | If true, allow account to mark projects as HIPAA |
| `"created_at"` | A timestamp indicting when the organization was created |
| `"handle"` | URL-safe identifier for the organization, used in API paths. |
| `"id"` | The Neon organization ID. |
| `"label"` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `"managed_by"` | Organizations created via the Console or the API are managed by `console`. |
| `"name"` | Human-readable display name of the organization. |
| `"plan"` | Billing plan for the organization, for example `free`, `launch`, or `scale`. |
| `"require_mfa"` | If true, all members must have MFA enabled to access this organization |
| `"updated_at"` | A timestamp indicating when the organization was updated |

Operations: Create, List, Load, Remove.

API path: `/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}`

#### OrganizationInvitation

| Field | Description |
| --- | --- |
| `"email"` | Email of the invited user |
| `"id"` | The invitation ID. |
| `"invitations"` | List of pending invitations for the organization. |
| `"invited_at"` | Timestamp when the invitation was created |
| `"invited_by"` | UUID for the user_id who extended the invitation |
| `"org_id"` | Organization id as it is stored in Neon |
| `"role"` | Organization member's role. |

Operations: Create, List.

API path: `/organizations/{org_id}/invitations`

#### Presign

| Field | Description |
| --- | --- |
| `"content_type"` | The `Content-Type` to bind into the signed request. |
| `"expires_in_seconds"` | How long the presigned URL stays valid, in seconds. |
| `"operation"` | The transfer direction. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/presign`

#### Project

| Field | Description |
| --- | --- |
| `"active_time_seconds"` | Seconds. |
| `"applications"` | Map of project IDs to their installed applications. |
| `"branch_logical_size_limit"` | The logical size limit for a branch. |
| `"branch_logical_size_limit_bytes"` | The logical size limit for a branch. |
| `"compute_last_active_at"` | The most recent time when any endpoint of this project was active. |
| `"compute_time_seconds"` | Seconds. |
| `"consumption_period_end"` | A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period. |
| `"consumption_period_start"` | A date-time indicating when Neon Cloud started measuring consumption for current consumption period. |
| `"cpu_used_sec"` | Deprecated. |
| `"created_at"` | A timestamp indicating when the project was created |
| `"creation_source"` | The project creation source |
| `"data_storage_bytes_hour"` | Bytes-Hour. |
| `"data_transfer_bytes"` | Bytes. |
| `"default_endpoint_settings"` | A collection of settings for a Neon endpoint |
| `"effective_project_permission"` |  |
| `"hipaa_enabled_at"` | A timestamp indicating when HIPAA was enabled for this project |
| `"history_retention_seconds"` | The number of seconds to retain the shared history for all branches in this project. |
| `"id"` | The Neon project ID. |
| `"integrations"` | Map of project IDs to their associated integration details. |
| `"label"` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `"maintenance_scheduled_for"` | A timestamp indicating when project update begins. |
| `"maintenance_starts_at"` | A timestamp indicating when project maintenance begins. |
| `"name"` | The project name |
| `"org_id"` | The Neon organization ID. |
| `"owner"` | Ownership details for the project, including the owner's name and email. |
| `"owner_id"` | ID of the organization that owns the project. |
| `"pagination"` | Cursor-based pagination. |
| `"pg_version"` | The major Postgres version number. |
| `"platform_id"` | The cloud platform identifier. |
| `"project"` | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `"projects"` | List of projects accessible to the caller. |
| `"provisioner"` | Compute provisioner. |
| `"proxy_host"` | The proxy host for the project. |
| `"quota_reset_at"` | Deprecated. |
| `"region_id"` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `"settings"` | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `"store_passwords"` | Whether or not passwords are stored for roles in the Neon project. |
| `"synthetic_storage_size"` | The current space occupied by the project in Postgres storage, in bytes. |
| `"unavailable_project_ids"` | A list of project IDs indicating which projects are known to exist, but whose details could not be fetched within the requested (or implicit) time limit |
| `"updated_at"` | A timestamp indicating when the project was last updated |
| `"written_data_bytes"` | Bytes. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}`

#### ProjectBranchLogField

| Field | Description |
| --- | --- |
| `"fields"` | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/logs/fields`

#### ProjectBranchLogFieldValue

| Field | Description |
| --- | --- |
| `"is_truncated"` | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `"values"` |  |

Operations: List.

API path: `/projects/{project_id}/branches/{branch_id}/logs/fields/{field_name}/values`

#### ProjectBranchLogsQuery

| Field | Description |
| --- | --- |
| `"body_contains"` | Match records whose rendered `message` contains this case-sensitive substring. |
| `"cursor"` | Opaque pagination cursor returned as `next_cursor` by a previous call. |
| `"end_time"` | Exclusive end of the query window. |
| `"is_truncated"` | True when more records matched than were returned. |
| `"limit"` | Maximum number of log records to return per page. |
| `"logql"` | Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream. |
| `"logs"` |  |
| `"minimum_severity"` | An OpenTelemetry severity level. |
| `"next_cursor"` | Pagination cursor to pass as `cursor` on the next request. |
| `"scope_name"` | Match the OpenTelemetry instrumentation scope name exactly. |
| `"service_name"` | Match the OpenTelemetry `service.name` resource attribute exactly. |
| `"severity_text"` | Match the OpenTelemetry severity text exactly. |
| `"since"` | Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted. |
| `"sort_order"` | Order matching records by timestamp. |
| `"source"` | The Neon service that emitted the log record. |
| `"start_time"` | Inclusive beginning of the query window. |
| `"trace_id"` | Match records associated with this OpenTelemetry trace ID. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/logs/query`

#### ProjectMember

| Field | Description |
| --- | --- |
| `"effective_project_permission"` | The caller's effective permission for a project when per-project permissions are enabled. |
| `"email"` | Email address of the user who has been granted access to the project. |
| `"explicit_project_permission"` | The caller's effective permission for a project when per-project permissions are enabled. |
| `"grant_source"` | How a member's project access is granted. |
| `"id"` |  |
| `"member_id"` | The organization member ID. |
| `"name"` | The user's display name. |
| `"org_default_project_permission"` | The caller's effective permission for a project when per-project permissions are enabled. |
| `"org_role"` | Organization-level role used by project member role management. |
| `"project_role"` | Per-project role. |
| `"user_id"` | The user ID for the organization member. |

Operations: List.

API path: `/projects/{project_id}/members`

#### ProjectMemberRole

| Field | Description |
| --- | --- |
| `"credential_rotation_recommended"` | Hint that database credentials may need rotation after the role change. |
| `"effective_project_permission"` | The caller's effective permission for a project when per-project permissions are enabled. |
| `"email"` | Email address of the user who has been granted access to the project. |
| `"explicit_project_permission"` | The caller's effective permission for a project when per-project permissions are enabled. |
| `"member_id"` |  |
| `"name"` | The user's display name. |
| `"org_api_key_rotation_recommended"` | Hint that project-scoped org API keys created by the target user may need rotation. |
| `"org_default_project_permission"` | The caller's effective permission for a project when per-project permissions are enabled. |
| `"org_role"` | Organization-level role used by project member role management. |
| `"project_id"` |  |
| `"project_role"` | The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback. |
| `"role"` | Per-project role. |
| `"user_id"` |  |

Operations: Remove, Update.

API path: `/projects/{project_id}/members/{member_id}/role`

#### ProjectPermission

| Field | Description |
| --- | --- |
| `"email"` | Email address of the user to grant project access to. |
| `"granted_at"` | Timestamp when the permission was granted. |
| `"granted_to_email"` | Email address of the user who has been granted access to the project. |
| `"id"` | The project permission's ID. |
| `"revoked_at"` | Timestamp when the permission was revoked. |

Operations: Create, List, Remove.

API path: `/projects/{project_id}/permissions`

#### ProjectRecover

| Field | Description |
| --- | --- |
| `"branches"` | Branches in the project. |
| `"id"` |  |
| `"project"` | Full details of the project, including configuration, consumption metrics, and ownership. |

Operations: Create.

API path: `/projects/{project_id}/recover`

#### ProjectTransferRequest

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"ttl_seconds"` | Number of seconds the transfer request stays valid before it expires. |

Operations: Create.

API path: `/projects/{project_id}/transfer_requests`

#### Region

| Field | Description |
| --- | --- |
| `"default"` | True if this region is selected by default when no region is specified during project creation. |
| `"geo_lat"` | The geographical latitude (approximate) for the region. |
| `"geo_long"` | The geographical longitude (approximate) for the region. |
| `"name"` | A short description of the region. |
| `"region_id"` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |

Operations: List.

API path: `/regions`

#### Role

| Field | Description |
| --- | --- |
| `"authentication_method"` | Authentication method configured for this role: `password`, `oauth`, or `no_login`. |
| `"branch_id"` | The ID of the branch this role belongs to. |
| `"created_at"` | A timestamp indicating when the role was created |
| `"id"` |  |
| `"name"` | Postgres role name within the branch. |
| `"password"` | The role password |
| `"protected"` | Whether or not the role is system-protected |
| `"role"` | Properties of the role to create. |
| `"updated_at"` | A timestamp indicating when the role was last updated |

Operations: Create, List, Load, Remove.

API path: `/projects/{project_id}/branches/{branch_id}/roles`

#### RoleOperation

| Field | Description |
| --- | --- |
| `"operations"` |  |
| `"role"` | Role details for the requested database role. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password`

#### RolePassword

| Field | Description |
| --- | --- |
| `"password"` | The role password |

Operations: Load.

API path: `/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reveal_password`

#### SendNeonAuthTestEmail

| Field | Description |
| --- | --- |
| `"error_message"` | The error message from the email server. |
| `"host"` | Hostname of the email server. |
| `"password"` | Password for authenticating with the SMTP server. |
| `"port"` | TCP port of the SMTP server. |
| `"recipient_email"` | The email address to send the test email to. |
| `"sender_email"` | Email address used as the From address on outgoing auth emails. |
| `"sender_name"` | Display name shown as the sender in outgoing emails. |
| `"success"` | Whether the test email was sent successfully. |
| `"username"` | Username for authenticating with the SMTP server. |

Operations: Create.

API path: `/projects/{project_id}/branches/{branch_id}/auth/email_provider/test`

#### Snapshot

| Field | Description |
| --- | --- |
| `"created_at"` | Timestamp when the snapshot was created, in RFC 3339 format (UTC). |
| `"diff_size"` | Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage. |
| `"expires_at"` | RFC 3339 timestamp when the snapshot expires and is eligible for deletion. |
| `"full_size"` | Full logical size of the snapshot in bytes at the time it was taken. |
| `"id"` | The snapshot ID. |
| `"lsn"` | WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`). |
| `"manual"` | True if the snapshot was created manually rather than by a schedule. |
| `"name"` | Human-readable label for the snapshot. |
| `"operations"` |  |
| `"slug"` | Snapshot resource ID, unique within the project. |
| `"snapshot"` | Fields to update on the snapshot. |
| `"source_branch_id"` | Branch from which this snapshot was created. |
| `"timestamp"` | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

Operations: Create, List, Remove, Update.

API path: `/projects/{project_id}/branches/{branch_id}/snapshot`

#### SpendingLimit

| Field | Description |
| --- | --- |
| `"spending_limit_cents"` | Monthly spending cap in cents. |

Operations: Load, Update.

API path: `/organizations/{org_id}/billing/spending_limit`

#### Trigger

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"triggers"` |  |

Operations: Create, List, Load, Update.

API path: `/projects/{project_id}/branches/{branch_id}/triggers`

#### UpdateNeonAuthUserRole

| Field | Description |
| --- | --- |
| `"id"` | ID of the updated user |
| `"roles"` | Roles to assign to the user in the Neon Auth (Better Auth) directory. |

Operations: Update.

API path: `/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}/role`

#### VpcEndpoint

| Field | Description |
| --- | --- |
| `"example_restricted_projects"` | A list of example projects that are restricted to use this VPC endpoint. |
| `"id"` |  |
| `"label"` | A descriptive label for the VPC endpoint |
| `"num_restricted_projects"` | The number of projects that are restricted to use this VPC endpoint. |
| `"region_id"` | The region where the VPC endpoint is located |
| `"state"` | The current state of the VPC endpoint. |
| `"vpc_endpoint_id"` | Cloud provider identifier for the VPC endpoint. |

Operations: List, Load.

API path: `/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints`



## Entities


### Anonymize

Create an instance: `anonymize := client.Anonymize(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `string` | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | `int` | Number of columns that had masking rules applied during the attempt. |
| `started_at` | `string` | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | `string` | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | `string` | Username of the user who triggered the latest anonymization attempt. |

#### Example: Create

```go
result, err := client.Anonymize(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AnonymizedBranchStatus

Create an instance: `anonymizedBranchStatus := client.AnonymizedBranchStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `string` | Timestamp indicating when the latest anonymization attempt completed. |
| `masked_columns` | `int` | Number of columns that had masking rules applied during the attempt. |
| `started_at` | `string` | Timestamp indicating when the latest anonymization attempt started. |
| `triggered_by` | `string` | UUID of the user who triggered the latest anonymization attempt. |
| `triggered_by_username` | `string` | Username of the user who triggered the latest anonymization attempt. |

#### Example: Load

```go
anonymizedBranchStatus, err := client.AnonymizedBranchStatus(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(anonymizedBranchStatus) // the loaded record
```


### ApiKey

Create an instance: `apiKey := client.ApiKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

```go
apiKeys, err := client.ApiKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiKeys) // the array of records
```

#### Example: Create

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


### Auth

Create an instance: `auth := client.Auth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` | The ID of the account associated with this authentication record. |
| `auth_data` | `string` |  |
| `auth_method` | `string` | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

#### Example: Load

```go
auth, err := client.Auth(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(auth) // the loaded record
```

#### Example: Create

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


### AuthLegacy

Create an instance: `authLegacy := client.AuthLegacy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | URI to add to the redirect URI allowlist for the auth provider. |

#### Example: Create

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


### AvailablePreloadLibrary

Create an instance: `availablePreloadLibrary := client.AvailablePreloadLibrary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Human-readable explanation of the library's purpose and behavior. |
| `is_default` | `bool` | Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints. |
| `is_experimental` | `bool` | Marks the library as experimental. |
| `library_name` | `string` | Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`). |
| `version` | `string` | Version of the preload library. |

#### Example: List

```go
availablePreloadLibrarys, err := client.AvailablePreloadLibrary(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(availablePreloadLibrarys) // the array of records
```


### BackupSchedule

Create an instance: `backupSchedule := client.BackupSchedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `day` | `int` | The day of the week or month to take the snapshot (if applicable). |
| `frequency` | `string` | How often to take snapshots. |
| `hour` | `int` | The hour of the day to take the snapshot (if applicable). |
| `month` | `int` | The month of the year to take the snapshot (if applicable). |
| `retention_seconds` | `int` | How long to keep a scheduled snapshot (in seconds) before it's automatically deleted. |

#### Example: List

```go
backupSchedules, err := client.BackupSchedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(backupSchedules) // the array of records
```


### Branch

Create an instance: `branch := client.Branch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation` | `map[string]any` | Annotation data associated with the annotated object. |
| `annotations` | `map[string]any` | Map of annotations keyed by resource identifier, where each value contains the annotation data for that resource. |
| `branch` | `map[string]any` | Branch returned by the request. |
| `branches` | `[]any` | Branches in the project. |
| `id` | `string` |  |
| `pagination` | `map[string]any` | To paginate the response, issue an initial request with `limit` value. |

#### Example: Load

```go
branch, err := client.Branch(nil).Load(map[string]any{"id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(branch) // the loaded record
```

#### Example: List

```go
branchs, err := client.Branch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(branchs) // the array of records
```

#### Example: Create

```go
result, err := client.Branch(nil).Create(map[string]any{
    "project_id": "example_project_id",
    "annotation": map[string]any{},
    "annotations": map[string]any{},
    "branch": map[string]any{},
    "branches": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BranchAiGateway

Create an instance: `branchAiGateway := client.BranchAiGateway(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_url` | `string` | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | `bool` | Always `true` in 200 responses. |
| `id` | `string` |  |

#### Example: Load

```go
branchAiGateway, err := client.BranchAiGateway(nil).Load(map[string]any{"id": "branch_ai_gateway_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(branchAiGateway) // the loaded record
```


### BranchOperation

Create an instance: `branchOperation := client.BranchOperation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch` | `map[string]any` | Branch returned by the request. |
| `id` | `string` |  |
| `operations` | `[]any` |  |

#### Example: Create

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


### BranchSchema

Create an instance: `branchSchema := client.BranchSchema(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `tables` | `[]any` | Tables present in the branch schema. |

#### Example: Load

```go
branchSchema, err := client.BranchSchema(nil).Load(map[string]any{"id": "branch_schema_id", "project_id": "project_id", "db_name": "db_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(branchSchema) // the loaded record
```


### BranchSchemaCompare

Create an instance: `branchSchemaCompare := client.BranchSchemaCompare(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
branchSchemaCompare, err := client.BranchSchemaCompare(nil).Load(map[string]any{"id": "branch_schema_compare_id", "project_id": "project_id", "db_name": "db_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(branchSchemaCompare) // the loaded record
```


### BranchStorage

Create an instance: `branchStorage := client.BranchStorage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Always `true` in 200 responses. |
| `force_path_style` | `bool` | Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). |
| `id` | `string` |  |
| `region` | `string` | The AWS region for this branch's object storage. |
| `s3_endpoint` | `string` | The S3-compatible endpoint URL for this branch. |

#### Example: Load

```go
branchStorage, err := client.BranchStorage(nil).Load(map[string]any{"id": "branch_storage_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(branchStorage) // the loaded record
```


### Bucket

Create an instance: `bucket := client.Bucket(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_level` | `string` | Access level for the bucket. |
| `created_at` | `string` | When the bucket was created. |
| `id` | `string` |  |
| `name` | `string` | The bucket name. |

#### Example: Load

```go
bucket, err := client.Bucket(nil).Load(map[string]any{"branch_id": "branch_id", "bucket_id": "bucket_id", "object_key": "object_key", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(bucket) // the loaded record
```

#### Example: List

```go
buckets, err := client.Bucket(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(buckets) // the array of records
```

#### Example: Create

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


### BucketObjectsList

Create an instance: `bucketObjectsList := client.BucketObjectsList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `etag` | `string` | The object's entity tag (content hash). |
| `key` | `string` | The full object key. |
| `last_modified` | `string` | The time the object was last modified. |
| `size` | `int` | The object size in bytes. |

#### Example: List

```go
bucketObjectsLists, err := client.BucketObjectsList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(bucketObjectsLists) // the array of records
```


### ConnectionUri

Create an instance: `connectionUri := client.ConnectionUri(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `uri` | `string` | The connection URI. |

#### Example: Load

```go
connectionUri, err := client.ConnectionUri(nil).Load(map[string]any{"project_id": "project_id", "database_name": "database_name", "role_name": "role_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(connectionUri) // the loaded record
```


### Consumption

Create an instance: `consumption := client.Consumption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branches` | `[]any` | Per-branch consumption history records returned for the requested time range. |
| `pagination` | `map[string]any` | Cursor-based pagination. |
| `projects` | `[]any` | Per-project consumption history records included in the response. |

#### Example: List

```go
consumptions, err := client.Consumption(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(consumptions) // the array of records
```


### CreateCredential

Create an instance: `createCredential := client.CreateCredential(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | Free-form customer label for the credential. |
| `principal_type` | `string` | Principal type for the credential. |
| `scopes` | `[]any` |  |

#### Example: Create

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


### Credential

Create an instance: `credential := client.Credential(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `scopes` | `[]any` |  |
| `token_id` | `string` | Opaque credential id (e.g. |
| `token_id_short` | `string` |  |

#### Example: List

```go
credentials, err := client.Credential(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(credentials) // the array of records
```

#### Example: Create

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


### CurrentUserInfo

Create an instance: `currentUserInfo := client.CurrentUserInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | Email address associated with this auth account. |
| `image` | `string` | URL of the user's profile picture as provided by the identity provider. |
| `login` | `string` | Deprecated. |
| `name` | `string` | Display name of the account as provided by the identity provider. |
| `provider` | `string` | Identity provider id from keycloak |

#### Example: List

```go
currentUserInfos, err := client.CurrentUserInfo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(currentUserInfos) // the array of records
```


### CustomDomain

Create an instance: `customDomain := client.CustomDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `string` | The custom domain to register (for example `dashboard.acme.com`). |
| `entity_id` | `string` | The target entity's identifier within the branch. |
| `entity_type` | `string` | The kind of branch entity to point the domain at. |

#### Example: Create

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


### DataApi

Create an instance: `dataApi := client.DataApi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_default_grants` | `bool` | Grant all permissions to the tables in the public schema to authenticated users |
| `auth_provider` | `string` | Authentication provider for the Neon Data API. |
| `available_schemas` | `[]any` | List of available database schemas (SubZero only) |
| `id` | `string` |  |
| `jwks_url` | `string` | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `jwt_audience` | `string` | Expected `aud` claim in incoming JWTs. |
| `provider_name` | `string` | Display name for the authentication provider. |
| `settings` | `map[string]any` | Configuration settings for the Data API (SubZero only) |
| `skip_auth_schema` | `bool` | Skip creating the auth schema and RLS functions |
| `status` | `string` | The status of the Neon Data API deployment |
| `url` | `string` | The URL of the Neon Data API |

#### Example: Load

```go
dataApi, err := client.DataApi(nil).Load(map[string]any{"id": "data_api_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dataApi) // the loaded record
```

#### Example: Create

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


### Database

Create an instance: `database := client.Database(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_id` | `string` | The ID of the branch this database belongs to. |
| `created_at` | `string` | A timestamp indicating when the database was created |
| `database` | `map[string]any` | Configuration for the new Postgres database. |
| `id` | `int` | The database ID |
| `name` | `string` | The database name |
| `owner_name` | `string` | The name of role that owns the database |
| `updated_at` | `string` | A timestamp indicating when the database was last updated |

#### Example: Load

```go
database, err := client.Database(nil).Load(map[string]any{"id": "database_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(database) // the loaded record
```

#### Example: List

```go
databases, err := client.Database(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(databases) // the array of records
```

#### Example: Create

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


### EmailProvider

Create an instance: `emailProvider := client.EmailProvider(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
emailProvider, err := client.EmailProvider(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(emailProvider) // the loaded record
```


### EmailServer

Create an instance: `emailServer := client.EmailServer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
emailServer, err := client.EmailServer(nil).Load(map[string]any{"project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(emailServer) // the loaded record
```


### Empty

Create an instance: `empty := client.Empty(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination_org_id` | `string` | The destination organization identifier |
| `project_ids` | `[]any` | The list of projects ids to transfer. |
| `schedule` | `[]any` | List of schedule entries defining the backup frequency. |

#### Example: Create

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


### Endpoint

Create an instance: `endpoint := client.Endpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `autoscaling_limit_max_cu` | `float64` | The maximum number of Compute Units |
| `autoscaling_limit_min_cu` | `float64` | The minimum number of Compute Units |
| `branch_id` | `string` | The ID of the branch this compute endpoint belongs to. |
| `compute_release_version` | `string` | Attached compute's release version number. |
| `created_at` | `string` | A timestamp indicating when the compute endpoint was created |
| `creation_source` | `string` | The compute endpoint creation source |
| `current_state` | `string` | Lifecycle state of the compute endpoint. |
| `disabled` | `bool` | Whether to restrict connections to the compute endpoint. |
| `endpoint` | `map[string]any` | Configuration for the compute endpoint to create. |
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
| `settings` | `map[string]any` | A collection of settings for a compute endpoint |
| `started_at` | `string` | A timestamp indicating when the compute endpoint was last started |
| `suspend_timeout_seconds` | `int` | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `suspended_at` | `string` | A timestamp indicating when the compute endpoint was last suspended |
| `type` | `string` | Compute endpoint type. |
| `updated_at` | `string` | A timestamp indicating when the compute endpoint was last updated |

#### Example: Load

```go
endpoint, err := client.Endpoint(nil).Load(map[string]any{"id": "endpoint_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(endpoint) // the loaded record
```

#### Example: List

```go
endpoints, err := client.Endpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(endpoints) // the array of records
```

#### Example: Create

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


### EndpointOperation

Create an instance: `endpointOperation := client.EndpointOperation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `endpoint` | `map[string]any` | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` | `string` |  |
| `operations` | `[]any` |  |

#### Example: Create

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


### Function

Create an instance: `function := client.Function(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_domains` | `[]any` |  |
| `functions` | `[]any` |  |
| `id` | `string` |  |
| `pagination` | `map[string]any` | To paginate the response, issue an initial request with `limit` value. |

#### Example: List

```go
functions, err := client.Function(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(functions) // the array of records
```


### Jwk

Create an instance: `jwk := client.Jwk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `role_names` | `[]any` | Deprecated. |
| `skip_role_creation` | `bool` | Deprecated. |
| `updated_at` | `string` | The date and time when the JWKS was last modified |

#### Example: List

```go
jwks, err := client.Jwk(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(jwks) // the array of records
```

#### Example: Create

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


### MaskingRule

Create an instance: `maskingRule := client.MaskingRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `column_name` | `string` | The name of the column to be masked |
| `database_name` | `string` | The name of the database containing the table to be masked |
| `masking_function` | `string` | The PostgreSQL Anonymizer masking function to apply. |
| `masking_rules` | `[]any` | List of masking rules for the branch |
| `masking_value` | `string` | A literal value to set on the column when masking. |
| `schema_name` | `string` | The name of the schema containing the table to be masked |
| `table_name` | `string` | The name of the table containing the column to be masked |

#### Example: List

```go
maskingRules, err := client.MaskingRule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(maskingRules) // the array of records
```


### Member

Create an instance: `member := client.Member(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The organization member's ID. |
| `joined_at` | `string` | Timestamp when the user joined the organization. |
| `org_id` | `string` | The Neon organization ID. |
| `role` | `string` | Organization member's role. |
| `user_id` | `string` | The Neon user ID. |

#### Example: Load

```go
member, err := client.Member(nil).Load(map[string]any{"id": "member_id", "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(member) // the loaded record
```


### NeonAuthAllowLocalhost

Create an instance: `neonAuthAllowLocalhost := client.NeonAuthAllowLocalhost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_localhost` | `bool` | Whether to allow localhost connections |

#### Example: Load

```go
neonAuthAllowLocalhost, err := client.NeonAuthAllowLocalhost(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(neonAuthAllowLocalhost) // the loaded record
```


### NeonAuthConfig

Create an instance: `neonAuthConfig := client.NeonAuthConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The application name used in auth emails and communications. |


### NeonAuthCreateIntegration

Create an instance: `neonAuthCreateIntegration := client.NeonAuthCreateIntegration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` | Authentication provider integrated with this Neon Auth configuration. |
| `branch_id` | `string` | The Neon branch ID. |
| `database_name` | `string` | Name of the database to enable Neon Auth on. |
| `project_id` | `string` | The Neon project ID. |
| `role_name` | `string` | Deprecated. |

#### Example: Create

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


### NeonAuthCreateNewUser

Create an instance: `neonAuthCreateNewUser := client.NeonAuthCreateNewUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` | Authentication provider integrated with this Neon Auth configuration. |
| `email` | `string` | Email address of the new Neon Auth user to create. |
| `name` | `string` | Display name for the new user. |
| `project_id` | `string` | The Neon project ID. |

#### Example: Create

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


### NeonAuthEmailAndPasswordConfig

Create an instance: `neonAuthEmailAndPasswordConfig := client.NeonAuthEmailAndPasswordConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
neonAuthEmailAndPasswordConfig, err := client.NeonAuthEmailAndPasswordConfig(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(neonAuthEmailAndPasswordConfig) // the loaded record
```


### NeonAuthEmailServerConfig

Create an instance: `neonAuthEmailServerConfig := client.NeonAuthEmailServerConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### NeonAuthIntegration

Create an instance: `neonAuthIntegration := client.NeonAuthIntegration(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
neonAuthIntegration, err := client.NeonAuthIntegration(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(neonAuthIntegration) // the loaded record
```

#### Example: List

```go
neonAuthIntegrations, err := client.NeonAuthIntegration(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(neonAuthIntegrations) // the array of records
```


### NeonAuthMagicLinkConfig

Create an instance: `neonAuthMagicLinkConfig := client.NeonAuthMagicLinkConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disable_sign_up` | `bool` | Whether to disable sign-up via magic link. |
| `enabled` | `bool` | Whether the magic link plugin is enabled. |
| `expires_in` | `int` | Minutes until the magic link expires. |


### NeonAuthOauthProvider

Create an instance: `neonAuthOauthProvider := client.NeonAuthOauthProvider(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_id` | `string` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `string` | OAuth client secret for the provider. |
| `id` | `string` | The OAuth provider's ID. |
| `microsoft_tenant_id` | `string` | Tenant ID for the Microsoft OAuth provider. |
| `type` | `string` | OAuth provider key type. |

#### Example: List

```go
neonAuthOauthProviders, err := client.NeonAuthOauthProvider(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(neonAuthOauthProviders) // the array of records
```

#### Example: Create

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


### NeonAuthOrganizationConfig

Create an instance: `neonAuthOrganizationConfig := client.NeonAuthOrganizationConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `creator_role` | `string` | Role of the organization's creator. |
| `enabled` | `bool` | Whether the organization plugin is enabled. |
| `membership_limit` | `int` | Maximum number of members per organization. |
| `organization_limit` | `int` | Maximum organizations a user can belong to (created or joined). |
| `send_invitation_email` | `bool` | Whether to send invitation emails when inviting members to an organization. |


### NeonAuthPhoneNumberConfig

Create an instance: `neonAuthPhoneNumberConfig := client.NeonAuthPhoneNumberConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Whether the phone number plugin is enabled. |
| `otp_expires_in` | `int` | Time in seconds before the OTP expires |

#### Example: Load

```go
neonAuthPhoneNumberConfig, err := client.NeonAuthPhoneNumberConfig(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(neonAuthPhoneNumberConfig) // the loaded record
```


### NeonAuthPluginConfig

Create an instance: `neonAuthPluginConfig := client.NeonAuthPluginConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_id` | `string` | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `string` | OAuth client secret for the provider. |
| `id` | `string` | The OAuth provider's ID. |
| `type` | `string` | OAuth provider key type. |

#### Example: List

```go
neonAuthPluginConfigs, err := client.NeonAuthPluginConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(neonAuthPluginConfigs) // the array of records
```


### NeonAuthRedirectUriWhitelistDomain

Create an instance: `neonAuthRedirectUriWhitelistDomain := client.NeonAuthRedirectUriWhitelistDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | Allowed redirect URI domain for the auth provider. |

#### Example: List

```go
neonAuthRedirectUriWhitelistDomains, err := client.NeonAuthRedirectUriWhitelistDomain(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(neonAuthRedirectUriWhitelistDomains) // the array of records
```


### NeonAuthTransferAuthProviderProject

Create an instance: `neonAuthTransferAuthProviderProject := client.NeonAuthTransferAuthProviderProject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_provider` | `string` | Authentication provider integrated with this Neon Auth configuration. |
| `project_id` | `string` | The Neon project ID. |
| `url` | `string` | URL for completing the process of ownership transfer |

#### Example: Create

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


### NeonAuthWebhookConfig

Create an instance: `neonAuthWebhookConfig := client.NeonAuthWebhookConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Whether the webhook is active. |
| `enabled_events` | `[]any` | Event types that trigger this webhook. |
| `timeout_seconds` | `int` | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | `string` | Destination URL that receives webhook event payloads. |

#### Example: List

```go
neonAuthWebhookConfigs, err := client.NeonAuthWebhookConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(neonAuthWebhookConfigs) // the array of records
```


### NeonFunction

Create an instance: `neonFunction := client.NeonFunction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
neonFunction, err := client.NeonFunction(nil).Load(map[string]any{"id": "neon_function_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(neonFunction) // the loaded record
```


### NeonFunctionDeployment

Create an instance: `neonFunctionDeployment := client.NeonFunctionDeployment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

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


### Operation

Create an instance: `operation := client.Operation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `operations` | `[]any` |  |
| `pagination` | `map[string]any` | Cursor-based pagination. |
| `project_id` | `string` | The ID of the project this operation ran on. |
| `retry_at` | `string` | A timestamp indicating when the operation was last retried |
| `status` | `string` | Current lifecycle state of the operation. |
| `total_duration_ms` | `int` | The total duration of the operation in milliseconds |
| `updated_at` | `string` | A timestamp indicating when the operation status was last updated |

#### Example: Load

```go
operation, err := client.Operation(nil).Load(map[string]any{"id": "operation_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(operation) // the loaded record
```

#### Example: List

```go
operations, err := client.Operation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(operations) // the array of records
```

#### Example: Create

```go
result, err := client.Operation(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "project_id": "example_project_id",
    "action": "example_action",
    "created_at": "example_created_at",
    "failures_count": 1,
    "id": "example_id",
    "operations": []any{},
    "pagination": map[string]any{},
    "status": "example_status",
    "total_duration_ms": 1,
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrgApiKeyCreate

Create an instance: `orgApiKeyCreate := client.OrgApiKeyCreate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `id` | `int` |  |
| `key` | `string` |  |
| `name` | `string` |  |

#### Example: Create

```go
result, err := client.OrgApiKeyCreate(nil).Create(map[string]any{
    "organization_id": "example_organization_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OrgApiKeyRevoke

Create an instance: `orgApiKeyRevoke := client.OrgApiKeyRevoke(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### OrgApiKeysListResponseItem

Create an instance: `orgApiKeysListResponseItem := client.OrgApiKeysListResponseItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | A timestamp indicating when the API key was created |
| `created_by` | `map[string]any` | The user data of the user that created this API key. |
| `id` | `int` | The API key's unique numeric ID. |
| `last_used_at` | `string` | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `string` | The IP address from which the API key was last used |
| `name` | `string` | The user-specified API key name |
| `project_id` | `string` | If set, the API key can access only this project |

#### Example: List

```go
orgApiKeysListResponseItems, err := client.OrgApiKeysListResponseItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(orgApiKeysListResponseItems) // the array of records
```


### Organization

Create an instance: `organization := client.Organization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

```go
organization, err := client.Organization(nil).Load(map[string]any{"id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organization) // the loaded record
```

#### Example: List

```go
organizations, err := client.Organization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizations) // the array of records
```

#### Example: Create

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


### OrganizationInvitation

Create an instance: `organizationInvitation := client.OrganizationInvitation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | Email of the invited user |
| `id` | `string` | The invitation ID. |
| `invitations` | `[]any` | List of pending invitations for the organization. |
| `invited_at` | `string` | Timestamp when the invitation was created |
| `invited_by` | `string` | UUID for the user_id who extended the invitation |
| `org_id` | `string` | Organization id as it is stored in Neon |
| `role` | `string` | Organization member's role. |

#### Example: List

```go
organizationInvitations, err := client.OrganizationInvitation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationInvitations) // the array of records
```

#### Example: Create

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


### Presign

Create an instance: `presign := client.Presign(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_type` | `string` | The `Content-Type` to bind into the signed request. |
| `expires_in_seconds` | `int` | How long the presigned URL stays valid, in seconds. |
| `operation` | `string` | The transfer direction. |

#### Example: Create

```go
result, err := client.Presign(nil).Create(map[string]any{
    "branch_id": "example_branch_id",
    "bucket_id": "example_bucket_id",
    "object_key": "example_object_key",
    "project_id": "example_project_id",
    "operation": "example_operation",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Project

Create an instance: `project := client.Project(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_time_seconds` | `int` | Seconds. |
| `applications` | `map[string]any` | Map of project IDs to their installed applications. |
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
| `default_endpoint_settings` | `map[string]any` | A collection of settings for a Neon endpoint |
| `effective_project_permission` | `string` |  |
| `hipaa_enabled_at` | `string` | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | `int` | The number of seconds to retain the shared history for all branches in this project. |
| `id` | `string` | The Neon project ID. |
| `integrations` | `map[string]any` | Map of project IDs to their associated integration details. |
| `label` | `string` | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | `string` | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | `string` | A timestamp indicating when project maintenance begins. |
| `name` | `string` | The project name |
| `org_id` | `string` | The Neon organization ID. |
| `owner` | `map[string]any` | Ownership details for the project, including the owner's name and email. |
| `owner_id` | `string` | ID of the organization that owns the project. |
| `pagination` | `map[string]any` | Cursor-based pagination. |
| `pg_version` | `int` | The major Postgres version number. |
| `platform_id` | `string` | The cloud platform identifier. |
| `project` | `map[string]any` | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `projects` | `[]any` | List of projects accessible to the caller. |
| `provisioner` | `string` | Compute provisioner. |
| `proxy_host` | `string` | The proxy host for the project. |
| `quota_reset_at` | `string` | Deprecated. |
| `region_id` | `string` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `map[string]any` | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | `bool` | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | `int` | The current space occupied by the project in Postgres storage, in bytes. |
| `unavailable_project_ids` | `[]any` | A list of project IDs indicating which projects are known to exist, but whose details could not be fetched within the requested (or implicit) time limit |
| `updated_at` | `string` | A timestamp indicating when the project was last updated |
| `written_data_bytes` | `int` | Bytes. |

#### Example: Load

```go
project, err := client.Project(nil).Load(map[string]any{"id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(project) // the loaded record
```

#### Example: List

```go
projects, err := client.Project(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projects) // the array of records
```

#### Example: Create

```go
result, err := client.Project(nil).Create(map[string]any{
    "id": "example_id",
    "vpc_endpoint_id": "example_vpc_endpoint_id",
    "active_time_seconds": 1,
    "applications": map[string]any{},
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
    "integrations": map[string]any{},
    "label": "example_label",
    "name": "example_name",
    "owner": map[string]any{},
    "owner_id": "example_owner_id",
    "pagination": map[string]any{},
    "pg_version": 1,
    "platform_id": "example_platform_id",
    "project": map[string]any{},
    "projects": []any{},
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


### ProjectBranchLogField

Create an instance: `projectBranchLogField := client.ProjectBranchLogField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fields` | `[]any` | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

#### Example: List

```go
projectBranchLogFields, err := client.ProjectBranchLogField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectBranchLogFields) // the array of records
```


### ProjectBranchLogFieldValue

Create an instance: `projectBranchLogFieldValue := client.ProjectBranchLogFieldValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `is_truncated` | `bool` | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` | `[]any` |  |

#### Example: List

```go
projectBranchLogFieldValues, err := client.ProjectBranchLogFieldValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectBranchLogFieldValues) // the array of records
```


### ProjectBranchLogsQuery

Create an instance: `projectBranchLogsQuery := client.ProjectBranchLogsQuery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body_contains` | `string` | Match records whose rendered `message` contains this case-sensitive substring. |
| `cursor` | `string` | Opaque pagination cursor returned as `next_cursor` by a previous call. |
| `end_time` | `string` | Exclusive end of the query window. |
| `is_truncated` | `bool` | True when more records matched than were returned. |
| `limit` | `int` | Maximum number of log records to return per page. |
| `logql` | `string` | Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream. |
| `logs` | `[]any` |  |
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


### ProjectMember

Create an instance: `projectMember := client.ProjectMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
projectMembers, err := client.ProjectMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectMembers) // the array of records
```


### ProjectMemberRole

Create an instance: `projectMemberRole := client.ProjectMemberRole(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

Create an instance: `projectPermission := client.ProjectPermission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | Email address of the user to grant project access to. |
| `granted_at` | `string` | Timestamp when the permission was granted. |
| `granted_to_email` | `string` | Email address of the user who has been granted access to the project. |
| `id` | `string` | The project permission's ID. |
| `revoked_at` | `string` | Timestamp when the permission was revoked. |

#### Example: List

```go
projectPermissions, err := client.ProjectPermission(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(projectPermissions) // the array of records
```

#### Example: Create

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


### ProjectRecover

Create an instance: `projectRecover := client.ProjectRecover(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branches` | `[]any` | Branches in the project. |
| `id` | `string` |  |
| `project` | `map[string]any` | Full details of the project, including configuration, consumption metrics, and ownership. |

#### Example: Create

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


### ProjectTransferRequest

Create an instance: `projectTransferRequest := client.ProjectTransferRequest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `ttl_seconds` | `int` | Number of seconds the transfer request stays valid before it expires. |

#### Example: Create

```go
result, err := client.ProjectTransferRequest(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Region

Create an instance: `region := client.Region(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default` | `bool` | True if this region is selected by default when no region is specified during project creation. |
| `geo_lat` | `string` | The geographical latitude (approximate) for the region. |
| `geo_long` | `string` | The geographical longitude (approximate) for the region. |
| `name` | `string` | A short description of the region. |
| `region_id` | `string` | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |

#### Example: List

```go
regions, err := client.Region(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(regions) // the array of records
```


### Role

Create an instance: `role := client.Role(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `role` | `map[string]any` | Properties of the role to create. |
| `updated_at` | `string` | A timestamp indicating when the role was last updated |

#### Example: Load

```go
role, err := client.Role(nil).Load(map[string]any{"id": "role_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(role) // the loaded record
```

#### Example: List

```go
roles, err := client.Role(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(roles) // the array of records
```

#### Example: Create

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


### RoleOperation

Create an instance: `roleOperation := client.RoleOperation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `operations` | `[]any` |  |
| `role` | `map[string]any` | Role details for the requested database role. |

#### Example: Create

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


### RolePassword

Create an instance: `rolePassword := client.RolePassword(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `password` | `string` | The role password |

#### Example: Load

```go
rolePassword, err := client.RolePassword(nil).Load(map[string]any{"branch_id": "branch_id", "project_id": "project_id", "role_name": "role_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rolePassword) // the loaded record
```


### SendNeonAuthTestEmail

Create an instance: `sendNeonAuthTestEmail := client.SendNeonAuthTestEmail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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


### Snapshot

Create an instance: `snapshot := client.Snapshot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `operations` | `[]any` |  |
| `slug` | `string` | Snapshot resource ID, unique within the project. |
| `snapshot` | `map[string]any` | Fields to update on the snapshot. |
| `source_branch_id` | `string` | Branch from which this snapshot was created. |
| `timestamp` | `string` | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

#### Example: List

```go
snapshots, err := client.Snapshot(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(snapshots) // the array of records
```

#### Example: Create

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


### SpendingLimit

Create an instance: `spendingLimit := client.SpendingLimit(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `spending_limit_cents` | `int` | Monthly spending cap in cents. |

#### Example: Load

```go
spendingLimit, err := client.SpendingLimit(nil).Load(map[string]any{"organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(spendingLimit) // the loaded record
```


### Trigger

Create an instance: `trigger := client.Trigger(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `triggers` | `[]any` |  |

#### Example: Load

```go
trigger, err := client.Trigger(nil).Load(map[string]any{"id": "trigger_id", "branch_id": "branch_id", "project_id": "project_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(trigger) // the loaded record
```

#### Example: List

```go
triggers, err := client.Trigger(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(triggers) // the array of records
```

#### Example: Create

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


### UpdateNeonAuthUserRole

Create an instance: `updateNeonAuthUserRole := client.UpdateNeonAuthUserRole(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | ID of the updated user |
| `roles` | `[]any` | Roles to assign to the user in the Neon Auth (Better Auth) directory. |


### VpcEndpoint

Create an instance: `vpcEndpoint := client.VpcEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `example_restricted_projects` | `[]any` | A list of example projects that are restricted to use this VPC endpoint. |
| `id` | `string` |  |
| `label` | `string` | A descriptive label for the VPC endpoint |
| `num_restricted_projects` | `int` | The number of projects that are restricted to use this VPC endpoint. |
| `region_id` | `string` | The region where the VPC endpoint is located |
| `state` | `string` | The current state of the VPC endpoint. |
| `vpc_endpoint_id` | `string` | Cloud provider identifier for the VPC endpoint. |

#### Example: Load

```go
vpcEndpoint, err := client.VpcEndpoint(nil).Load(map[string]any{"id": "vpc_endpoint_id", "organization_id": "organization_id", "region_id": "region_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(vpcEndpoint) // the loaded record
```

#### Example: List

```go
vpcEndpoints, err := client.VpcEndpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(vpcEndpoints) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/neon-sdk/go/
├── neon.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/neon-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
branchstorage := client.BranchStorage(nil)
branchstorage.Load(map[string]any{"id": "example_id", "project_id": "example"}, nil)

// branchstorage.Data() now returns the branchstorage data from the last load
// branchstorage.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
