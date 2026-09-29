# Neon Python SDK Reference

Complete API reference for the Neon Python SDK.


## NeonSDK

### Constructor

```python
from neon_sdk import NeonSDK

client = NeonSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NeonSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = NeonSDK.test()
```


### Instance Methods

#### `Anonymize(data=None)`

Create a new `AnonymizeEntity` instance. Pass `None` for no initial data.

#### `AnonymizedBranchStatus(data=None)`

Create a new `AnonymizedBranchStatusEntity` instance. Pass `None` for no initial data.

#### `ApiKey(data=None)`

Create a new `ApiKeyEntity` instance. Pass `None` for no initial data.

#### `Auth(data=None)`

Create a new `AuthEntity` instance. Pass `None` for no initial data.

#### `AuthLegacy(data=None)`

Create a new `AuthLegacyEntity` instance. Pass `None` for no initial data.

#### `AvailablePreloadLibrary(data=None)`

Create a new `AvailablePreloadLibraryEntity` instance. Pass `None` for no initial data.

#### `BackupSchedule(data=None)`

Create a new `BackupScheduleEntity` instance. Pass `None` for no initial data.

#### `Branch(data=None)`

Create a new `BranchEntity` instance. Pass `None` for no initial data.

#### `BranchAiGateway(data=None)`

Create a new `BranchAiGatewayEntity` instance. Pass `None` for no initial data.

#### `BranchOperation(data=None)`

Create a new `BranchOperationEntity` instance. Pass `None` for no initial data.

#### `BranchSchema(data=None)`

Create a new `BranchSchemaEntity` instance. Pass `None` for no initial data.

#### `BranchSchemaCompare(data=None)`

Create a new `BranchSchemaCompareEntity` instance. Pass `None` for no initial data.

#### `BranchStorage(data=None)`

Create a new `BranchStorageEntity` instance. Pass `None` for no initial data.

#### `Bucket(data=None)`

Create a new `BucketEntity` instance. Pass `None` for no initial data.

#### `BucketObjectsList(data=None)`

Create a new `BucketObjectsListEntity` instance. Pass `None` for no initial data.

#### `ConnectionUri(data=None)`

Create a new `ConnectionUriEntity` instance. Pass `None` for no initial data.

#### `Consumption(data=None)`

Create a new `ConsumptionEntity` instance. Pass `None` for no initial data.

#### `CreateCredential(data=None)`

Create a new `CreateCredentialEntity` instance. Pass `None` for no initial data.

#### `Credential(data=None)`

Create a new `CredentialEntity` instance. Pass `None` for no initial data.

#### `CurrentUserInfo(data=None)`

Create a new `CurrentUserInfoEntity` instance. Pass `None` for no initial data.

#### `CustomDomain(data=None)`

Create a new `CustomDomainEntity` instance. Pass `None` for no initial data.

#### `DataApi(data=None)`

Create a new `DataApiEntity` instance. Pass `None` for no initial data.

#### `Database(data=None)`

Create a new `DatabaseEntity` instance. Pass `None` for no initial data.

#### `EmailProvider(data=None)`

Create a new `EmailProviderEntity` instance. Pass `None` for no initial data.

#### `EmailServer(data=None)`

Create a new `EmailServerEntity` instance. Pass `None` for no initial data.

#### `Empty(data=None)`

Create a new `EmptyEntity` instance. Pass `None` for no initial data.

#### `Endpoint(data=None)`

Create a new `EndpointEntity` instance. Pass `None` for no initial data.

#### `EndpointOperation(data=None)`

Create a new `EndpointOperationEntity` instance. Pass `None` for no initial data.

#### `Function(data=None)`

Create a new `FunctionEntity` instance. Pass `None` for no initial data.

#### `Jwk(data=None)`

Create a new `JwkEntity` instance. Pass `None` for no initial data.

#### `MaskingRule(data=None)`

Create a new `MaskingRuleEntity` instance. Pass `None` for no initial data.

#### `Member(data=None)`

Create a new `MemberEntity` instance. Pass `None` for no initial data.

#### `NeonAuthAllowLocalhost(data=None)`

Create a new `NeonAuthAllowLocalhostEntity` instance. Pass `None` for no initial data.

#### `NeonAuthConfig(data=None)`

Create a new `NeonAuthConfigEntity` instance. Pass `None` for no initial data.

#### `NeonAuthCreateIntegration(data=None)`

Create a new `NeonAuthCreateIntegrationEntity` instance. Pass `None` for no initial data.

#### `NeonAuthCreateNewUser(data=None)`

Create a new `NeonAuthCreateNewUserEntity` instance. Pass `None` for no initial data.

#### `NeonAuthEmailAndPasswordConfig(data=None)`

Create a new `NeonAuthEmailAndPasswordConfigEntity` instance. Pass `None` for no initial data.

#### `NeonAuthEmailServerConfig(data=None)`

Create a new `NeonAuthEmailServerConfigEntity` instance. Pass `None` for no initial data.

#### `NeonAuthIntegration(data=None)`

Create a new `NeonAuthIntegrationEntity` instance. Pass `None` for no initial data.

#### `NeonAuthMagicLinkConfig(data=None)`

Create a new `NeonAuthMagicLinkConfigEntity` instance. Pass `None` for no initial data.

#### `NeonAuthOauthProvider(data=None)`

Create a new `NeonAuthOauthProviderEntity` instance. Pass `None` for no initial data.

#### `NeonAuthOrganizationConfig(data=None)`

Create a new `NeonAuthOrganizationConfigEntity` instance. Pass `None` for no initial data.

#### `NeonAuthPhoneNumberConfig(data=None)`

Create a new `NeonAuthPhoneNumberConfigEntity` instance. Pass `None` for no initial data.

#### `NeonAuthPluginConfig(data=None)`

Create a new `NeonAuthPluginConfigEntity` instance. Pass `None` for no initial data.

#### `NeonAuthRedirectUriWhitelistDomain(data=None)`

Create a new `NeonAuthRedirectUriWhitelistDomainEntity` instance. Pass `None` for no initial data.

#### `NeonAuthTransferAuthProviderProject(data=None)`

Create a new `NeonAuthTransferAuthProviderProjectEntity` instance. Pass `None` for no initial data.

#### `NeonAuthWebhookConfig(data=None)`

Create a new `NeonAuthWebhookConfigEntity` instance. Pass `None` for no initial data.

#### `NeonFunction(data=None)`

Create a new `NeonFunctionEntity` instance. Pass `None` for no initial data.

#### `NeonFunctionDeployment(data=None)`

Create a new `NeonFunctionDeploymentEntity` instance. Pass `None` for no initial data.

#### `Operation(data=None)`

Create a new `OperationEntity` instance. Pass `None` for no initial data.

#### `OrgApiKeyCreate(data=None)`

Create a new `OrgApiKeyCreateEntity` instance. Pass `None` for no initial data.

#### `OrgApiKeyRevoke(data=None)`

Create a new `OrgApiKeyRevokeEntity` instance. Pass `None` for no initial data.

#### `OrgApiKeysListResponseItem(data=None)`

Create a new `OrgApiKeysListResponseItemEntity` instance. Pass `None` for no initial data.

#### `Organization(data=None)`

Create a new `OrganizationEntity` instance. Pass `None` for no initial data.

#### `OrganizationInvitation(data=None)`

Create a new `OrganizationInvitationEntity` instance. Pass `None` for no initial data.

#### `Presign(data=None)`

Create a new `PresignEntity` instance. Pass `None` for no initial data.

#### `Project(data=None)`

Create a new `ProjectEntity` instance. Pass `None` for no initial data.

#### `ProjectBranchLogField(data=None)`

Create a new `ProjectBranchLogFieldEntity` instance. Pass `None` for no initial data.

#### `ProjectBranchLogFieldValue(data=None)`

Create a new `ProjectBranchLogFieldValueEntity` instance. Pass `None` for no initial data.

#### `ProjectBranchLogsQuery(data=None)`

Create a new `ProjectBranchLogsQueryEntity` instance. Pass `None` for no initial data.

#### `ProjectMember(data=None)`

Create a new `ProjectMemberEntity` instance. Pass `None` for no initial data.

#### `ProjectMemberRole(data=None)`

Create a new `ProjectMemberRoleEntity` instance. Pass `None` for no initial data.

#### `ProjectPermission(data=None)`

Create a new `ProjectPermissionEntity` instance. Pass `None` for no initial data.

#### `ProjectRecover(data=None)`

Create a new `ProjectRecoverEntity` instance. Pass `None` for no initial data.

#### `ProjectTransferRequest(data=None)`

Create a new `ProjectTransferRequestEntity` instance. Pass `None` for no initial data.

#### `Region(data=None)`

Create a new `RegionEntity` instance. Pass `None` for no initial data.

#### `Role(data=None)`

Create a new `RoleEntity` instance. Pass `None` for no initial data.

#### `RoleOperation(data=None)`

Create a new `RoleOperationEntity` instance. Pass `None` for no initial data.

#### `RolePassword(data=None)`

Create a new `RolePasswordEntity` instance. Pass `None` for no initial data.

#### `SendNeonAuthTestEmail(data=None)`

Create a new `SendNeonAuthTestEmailEntity` instance. Pass `None` for no initial data.

#### `Snapshot(data=None)`

Create a new `SnapshotEntity` instance. Pass `None` for no initial data.

#### `SpendingLimit(data=None)`

Create a new `SpendingLimitEntity` instance. Pass `None` for no initial data.

#### `Trigger(data=None)`

Create a new `TriggerEntity` instance. Pass `None` for no initial data.

#### `UpdateNeonAuthUserRole(data=None)`

Create a new `UpdateNeonAuthUserRoleEntity` instance. Pass `None` for no initial data.

#### `VpcEndpoint(data=None)`

Create a new `VpcEndpointEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AnonymizeEntity

```python
anonymize = client.Anonymize()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `str` | Yes | The ID of the anonymized branch. |
| `created_at` | `str` | Yes | A timestamp indicating when the anonymized branch was created |
| `failed_at` | `str` | No | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | `dict` | No | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | `str` | Yes | The ID of the project this branch belongs to. |
| `state` | `str` | Yes | The current state of the anonymized branch. |
| `status_message` | `str` | No | A descriptive message about the current status or any errors |
| `updated_at` | `str` | Yes | A timestamp indicating when the anonymized branch status was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Anonymize().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "created_at": "example_created_at",  # str
    "state": "example_state",  # str
    "updated_at": "example_updated_at",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnonymizeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AnonymizedBranchStatusEntity

```python
anonymized_branch_status = client.AnonymizedBranchStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `str` | Yes | The ID of the anonymized branch. |
| `created_at` | `str` | Yes | A timestamp indicating when the anonymized branch was created |
| `failed_at` | `str` | No | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | `dict` | No | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | `str` | Yes | The ID of the project this branch belongs to. |
| `state` | `str` | Yes | The current state of the anonymized branch. |
| `status_message` | `str` | No | A descriptive message about the current status or any errors |
| `updated_at` | `str` | Yes | A timestamp indicating when the anonymized branch status was last updated |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AnonymizedBranchStatus().load({"branch_id": "branch_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnonymizedBranchStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiKeyEntity

```python
api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | A timestamp indicating when the API key was created |
| `created_by` | `str` | Yes | ID of the user who created this API key |
| `id` | `int` | Yes | The API key's unique numeric ID. |
| `key` | `str` | Yes | The generated 64-bit token required to access the Neon API |
| `key_name` | `str` | Yes | A user-specified API key name. |
| `last_used_at` | `str` | No | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `str` | Yes | The IP address from which the API key was last used |
| `name` | `str` | Yes | The user-specified API key name |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiKey().create({
    "created_at": "example_created_at",  # str
    "created_by": "example_created_by",  # str
    "id": 1,  # int
    "key": "example_key",  # str
    "key_name": "example_key_name",  # str
    "last_used_from_addr": "example_last_used_from_addr",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiKey().list()
for api_key in results:
    print(api_key)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ApiKey().remove({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthEntity

```python
auth = client.Auth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes | The ID of the account associated with this authentication record. |
| `auth_data` | `str` | No |  |
| `auth_method` | `str` | Yes | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Auth().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "account_id": "example_account_id",  # str
    "auth_method": "example_auth_method",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Auth().load()
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Auth().remove({"branch_id": "branch_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AuthLegacyEntity

```python
auth_legacy = client.AuthLegacy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `str` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `str` | Yes | URI to add to the redirect URI allowlist for the auth provider. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AuthLegacy().create({
    "project_id": "example_project_id",  # str
    "auth_provider": "example_auth_provider",  # str
    "domain": "example_domain",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AuthLegacy().remove({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthLegacyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AvailablePreloadLibraryEntity

```python
available_preload_library = client.AvailablePreloadLibrary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes | Human-readable explanation of the library's purpose and behavior. |
| `is_default` | `bool` | Yes | Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints. |
| `is_experimental` | `bool` | Yes | Marks the library as experimental. |
| `library_name` | `str` | Yes | Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`). |
| `version` | `str` | Yes | Version of the preload library. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AvailablePreloadLibrary().list({"project_id": "example"})
for available_preload_library in results:
    print(available_preload_library)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AvailablePreloadLibraryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BackupScheduleEntity

```python
backup_schedule = client.BackupSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `day` | `int` | No | The day of the week or month to take the snapshot (if applicable). |
| `frequency` | `str` | Yes | How often to take snapshots. |
| `hour` | `int` | No | The hour of the day to take the snapshot (if applicable). |
| `month` | `int` | No | The month of the year to take the snapshot (if applicable). |
| `retention_seconds` | `int` | No | How long to keep a scheduled snapshot (in seconds) before it's automatically deleted. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BackupSchedule().list({"branch_id": "example", "project_id": "example"})
for backup_schedule in results:
    print(backup_schedule)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BackupScheduleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchEntity

```python
branch = client.Branch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_time_seconds` | `int` | Yes | Total time this branch's compute has been active during the current billing period, in seconds (not weighted by compute size). |
| `annotation` | `dict` | Yes | Annotation data associated with the annotated object. |
| `branch` | `dict` | Yes | Branch returned by the request. |
| `compute_time_seconds` | `int` | Yes | Total Postgres compute time consumed by this branch during the current billing period, in CU-seconds (weighted by compute size). |
| `cpu_used_sec` | `int` | Yes | Deprecated. |
| `created_at` | `str` | Yes | A timestamp indicating when the branch was created |
| `created_by` | `dict` | No | The resolved user model that contains details of the user/org/integration/api_key used for branch creation. |
| `creation_source` | `str` | Yes | The branch creation source |
| `current_state` | `str` | Yes | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `data_transfer_bytes` | `int` | Yes | Total data transferred out of the branch, in bytes. |
| `default` | `bool` | Yes | Whether the branch is the project's default branch |
| `expires_at` | `str` | No | The timestamp when the branch is scheduled to expire and be automatically deleted. |
| `id` | `str` | Yes | The branch ID. |
| `init_source` | `str` | No | Source of initialization for the branch. |
| `last_reset_at` | `str` | No | A timestamp indicating when the branch was last reset |
| `logical_size` | `int` | No | The logical size of the branch, in bytes |
| `name` | `str` | Yes | The branch name |
| `parent_id` | `str` | No | The `branch_id` of the parent branch |
| `parent_lsn` | `str` | No | The Log Sequence Number (LSN) on the parent branch from which this branch was created. |
| `parent_timestamp` | `str` | No | The point in time on the parent branch from which this branch was created. |
| `pending_state` | `str` | No | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `primary` | `bool` | No | Deprecated. |
| `project_id` | `str` | Yes | The ID of the project this branch belongs to. |
| `protected` | `bool` | Yes | Whether the branch is protected. |
| `recovery` | `dict` | Yes | Recovery information for a deleted branch. |
| `restore_status` | `str` | No | Could be `restored`, `finalized` or `detaching`. |
| `restored_as` | `str` | No | ID of the target branch which was replaced when this branch was restored |
| `restored_from` | `str` | No | ID of the snapshot that was the restore source for this branch |
| `restricted_actions` | `list` | No | A list of actions that are currently restricted for this branch and the reason why. |
| `state_changed_at` | `str` | Yes | A UTC timestamp indicating when the `current_state` began |
| `ttl_interval_seconds` | `int` | No | The time-to-live (TTL) duration originally configured for the branch, in seconds. |
| `updated_at` | `str` | Yes | A timestamp indicating when the branch was last updated |
| `written_data_bytes` | `int` | Yes | Data written by this branch during the current billing period, in bytes. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Branch().create({
    "project_id": "example_project_id",  # str
    "active_time_seconds": 1,  # int
    "annotation": {},  # dict
    "branch": {},  # dict
    "compute_time_seconds": 1,  # int
    "cpu_used_sec": 1,  # int
    "created_at": "example_created_at",  # str
    "creation_source": "example_creation_source",  # str
    "current_state": "example_current_state",  # str
    "data_transfer_bytes": 1,  # int
    "default": True,  # bool
    "id": "example_id",  # str
    "name": "example_name",  # str
    "protected": True,  # bool
    "recovery": {},  # dict
    "state_changed_at": "example_state_changed_at",  # str
    "updated_at": "example_updated_at",  # str
    "written_data_bytes": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Branch().list({"project_id": "example"})
for branch in results:
    print(branch)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Branch().load({"id": "branch_id", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Branch().remove({"id": "branch_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Branch().update({
    "id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchAiGatewayEntity

```python
branch_ai_gateway = client.BranchAiGateway()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_url` | `str` | Yes | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | `bool` | Yes | Always `true` in 200 responses. |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BranchAiGateway().load({"id": "branch_ai_gateway_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchAiGatewayEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchOperationEntity

```python
branch_operation = client.BranchOperation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `dict` | Yes | Branch returned by the request. |
| `id` | `str` | No |  |
| `operations` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BranchOperation().create({
    "id": "example_id",  # str
    "project_id": "example_project_id",  # str
    "branch": {},  # dict
    "operations": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchOperationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchSchemaEntity

```python
branch_schema = client.BranchSchema()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `json` | `dict` | Yes | Branch schema represented as a structured JSON object, parallel to the SQL DDL in `sql`. |
| `sql` | `str` | No | Branch schema expressed as SQL DDL statements. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BranchSchema().load({"id": "branch_schema_id", "project_id": "project_id", "db_name": "db_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchSchemaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchSchemaCompareEntity

```python
branch_schema_compare = client.BranchSchemaCompare()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BranchSchemaCompare().load({"id": "branch_schema_compare_id", "project_id": "project_id", "db_name": "db_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchSchemaCompareEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BranchStorageEntity

```python
branch_storage = client.BranchStorage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Always `true` in 200 responses. |
| `force_path_style` | `bool` | Yes | Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). |
| `id` | `str` | No |  |
| `region` | `str` | Yes | The AWS region for this branch's object storage. |
| `s3_endpoint` | `str` | Yes | The S3-compatible endpoint URL for this branch. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BranchStorage().load({"id": "branch_storage_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BranchStorageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BucketEntity

```python
bucket = client.Bucket()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_level` | `str` | No | Access level for the bucket. |
| `created_at` | `str` | Yes | When the bucket was created. |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The bucket name. |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `access_level` | - | Yes | - | - |
| `created_at` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Bucket().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "created_at": "example_created_at",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Bucket().list({"branch_id": "example", "project_id": "example"})
for bucket in results:
    print(bucket)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Bucket().load({"branch_id": "branch_id", "bucket_id": "bucket_id", "object_key": "object_key", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Bucket().remove({"branch_id": "branch_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BucketEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BucketObjectsListEntity

```python
bucket_objects_list = client.BucketObjectsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `str` | Yes | The object's entity tag (content hash). |
| `key` | `str` | Yes | The full object key. |
| `last_modified` | `str` | Yes | The time the object was last modified. |
| `size` | `int` | Yes | The object size in bytes. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BucketObjectsList().list({"branch_id": "example", "bucket_name": "example", "project_id": "example"})
for bucket_objects_list in results:
    print(bucket_objects_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BucketObjectsListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConnectionUriEntity

```python
connection_uri = client.ConnectionUri()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uri` | `str` | Yes | The connection URI. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ConnectionUri().load({"project_id": "project_id", "database_name": "database_name", "role_name": "role_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConnectionUriEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConsumptionEntity

```python
consumption = client.Consumption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `str` | Yes | The Neon branch ID. |
| `periods` | `list` | Yes | Consumption history records for the branch, grouped by billing period. |
| `project_id` | `str` | Yes | The ID of the project that owns this branch. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Consumption().list({"from": "example", "granularity": "example", "to": "example"})
for consumption in results:
    print(consumption)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConsumptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateCredentialEntity

```python
create_credential = client.CreateCredential()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `str` | No | Free-form customer label for the credential. |
| `principal_type` | `str` | Yes | Principal type for the credential. |
| `scopes` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateCredential().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "principal_type": "example_principal_type",  # str
    "scopes": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateCredentialEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CredentialEntity

```python
credential = client.Credential()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `expires_at` | `str` | No | When the credential expires; absent means never expires. |
| `function_id` | `str` | No |  |
| `id` | `str` | No |  |
| `last_used_at` | `str` | No |  |
| `name` | `str` | No | Customer-supplied label; absent when not provided at issuance. |
| `principal_type` | `str` | Yes |  |
| `revoked_at` | `str` | No |  |
| `scopes` | `list` | Yes |  |
| `token_id` | `str` | Yes | Opaque credential id (e.g. |
| `token_id_short` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Credential().create({
    "branch_id": "example_branch_id",  # str
    "id": "example_id",  # str
    "project_id": "example_project_id",  # str
    "created_at": "example_created_at",  # str
    "principal_type": "example_principal_type",  # str
    "scopes": [],  # list
    "token_id": "example_token_id",  # str
    "token_id_short": "example_token_id_short",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Credential().list({"branch_id": "example", "project_id": "example"})
for credential in results:
    print(credential)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Credential().remove({"branch_id": "branch_id", "id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CredentialEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CurrentUserInfoEntity

```python
current_user_info = client.CurrentUserInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | Yes | Email address associated with this auth account. |
| `image` | `str` | Yes | URL of the user's profile picture as provided by the identity provider. |
| `login` | `str` | Yes | Deprecated. |
| `name` | `str` | Yes | Display name of the account as provided by the identity provider. |
| `provider` | `str` | Yes | Identity provider id from keycloak |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CurrentUserInfo().list()
for current_user_info in results:
    print(current_user_info)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CurrentUserInfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomDomainEntity

```python
custom_domain = client.CustomDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `str` | Yes | The custom domain to register (for example `dashboard.acme.com`). |
| `entity_id` | `str` | Yes | The target entity's identifier within the branch. |
| `entity_type` | `str` | Yes | The kind of branch entity to point the domain at. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomDomain().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "domain": "example_domain",  # str
    "entity_id": "example_entity_id",  # str
    "entity_type": "example_entity_type",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomDomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataApiEntity

```python
data_api = client.DataApi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_default_grants` | `bool` | No | Grant all permissions to the tables in the public schema to authenticated users |
| `auth_provider` | `str` | No | Authentication provider for the Neon Data API. |
| `available_schemas` | `list` | No | List of available database schemas (SubZero only) |
| `id` | `str` | No |  |
| `jwks_url` | `str` | No | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `jwt_audience` | `str` | No | Expected `aud` claim in incoming JWTs. |
| `provider_name` | `str` | No | Display name for the authentication provider. |
| `settings` | `dict` | No | Configuration settings for the Data API (SubZero only) |
| `skip_auth_schema` | `bool` | No | Skip creating the auth schema and RLS functions |
| `status` | `str` | Yes | The status of the Neon Data API deployment |
| `url` | `str` | Yes | The URL of the Neon Data API |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DataApi().create({
    "branch_id": "example_branch_id",  # str
    "id": "example_id",  # str
    "project_id": "example_project_id",  # str
    "status": "example_status",  # str
    "url": "example_url",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DataApi().load({"id": "data_api_id", "branch_id": "branch_id", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DataApi().remove({"id": "data_api_id", "branch_id": "branch_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DataApi().update({
    "id": "data_api_id",
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataApiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DatabaseEntity

```python
database = client.Database()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `str` | Yes | The ID of the branch this database belongs to. |
| `created_at` | `str` | Yes | A timestamp indicating when the database was created |
| `database` | `dict` | Yes | Configuration for the new Postgres database. |
| `id` | `int` | Yes | The database ID |
| `name` | `str` | Yes | The database name |
| `owner_name` | `str` | Yes | The name of role that owns the database |
| `updated_at` | `str` | Yes | A timestamp indicating when the database was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Database().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "created_at": "example_created_at",  # str
    "database": {},  # dict
    "id": 1,  # int
    "name": "example_name",  # str
    "owner_name": "example_owner_name",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Database().list({"branch_id": "example", "project_id": "example"})
for database in results:
    print(database)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Database().load({"id": "database_id", "branch_id": "branch_id", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Database().remove({"id": "database_id", "branch_id": "branch_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Database().update({
    "id": "database_id",
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DatabaseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailProviderEntity

```python
email_provider = client.EmailProvider()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EmailProvider().load({"branch_id": "branch_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailProviderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailServerEntity

```python
email_server = client.EmailServer()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EmailServer().load({"project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailServerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmptyEntity

```python
empty = client.Empty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_org_id` | `str` | Yes | The destination organization identifier |
| `project_ids` | `list` | Yes | The list of projects ids to transfer. |
| `schedule` | `list` | Yes | List of schedule entries defining the backup frequency. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Empty().create({
    "organization_id": "example_organization_id",  # str
    "destination_org_id": "example_destination_org_id",  # str
    "project_ids": [],  # list
    "schedule": [],  # list
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Empty().remove({"organization_id": "organization_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Empty().update({
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmptyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EndpointEntity

```python
endpoint = client.Endpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `autoscaling_limit_max_cu` | `float` | Yes | The maximum number of Compute Units |
| `autoscaling_limit_min_cu` | `float` | Yes | The minimum number of Compute Units |
| `branch_id` | `str` | Yes | The ID of the branch this compute endpoint belongs to. |
| `compute_release_version` | `str` | No | Attached compute's release version number. |
| `created_at` | `str` | Yes | A timestamp indicating when the compute endpoint was created |
| `creation_source` | `str` | Yes | The compute endpoint creation source |
| `current_state` | `str` | Yes | Lifecycle state of the compute endpoint. |
| `disabled` | `bool` | Yes | Whether to restrict connections to the compute endpoint. |
| `endpoint` | `dict` | Yes | Configuration for the compute endpoint to create. |
| `host` | `str` | Yes | The hostname of the compute endpoint. |
| `id` | `str` | Yes | The compute endpoint ID. |
| `last_active` | `str` | No | A timestamp indicating when the compute endpoint was last active |
| `name` | `str` | No | Optional name of the compute endpoint |
| `passwordless_access` | `bool` | Yes | Whether to permit passwordless access to the compute endpoint |
| `pending_state` | `str` | No | Target state the compute endpoint is transitioning to. |
| `pooler_enabled` | `bool` | Yes | Deprecated. |
| `pooler_mode` | `str` | Yes | Deprecated. |
| `project_id` | `str` | Yes | The ID of the project this compute endpoint belongs to. |
| `provisioner` | `str` | Yes | Compute provisioner. |
| `proxy_host` | `str` | Yes | Deprecated. |
| `region_id` | `str` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `dict` | Yes | A collection of settings for a compute endpoint |
| `started_at` | `str` | No | A timestamp indicating when the compute endpoint was last started |
| `suspend_timeout_seconds` | `int` | Yes | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `suspended_at` | `str` | No | A timestamp indicating when the compute endpoint was last suspended |
| `type` | `str` | Yes | Compute endpoint type. |
| `updated_at` | `str` | Yes | A timestamp indicating when the compute endpoint was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Endpoint().create({
    "project_id": "example_project_id",  # str
    "autoscaling_limit_max_cu": 1,  # float
    "autoscaling_limit_min_cu": 1,  # float
    "branch_id": "example_branch_id",  # str
    "created_at": "example_created_at",  # str
    "creation_source": "example_creation_source",  # str
    "current_state": "example_current_state",  # str
    "disabled": True,  # bool
    "endpoint": {},  # dict
    "host": "example_host",  # str
    "id": "example_id",  # str
    "passwordless_access": True,  # bool
    "pooler_enabled": True,  # bool
    "pooler_mode": "example_pooler_mode",  # str
    "provisioner": "example_provisioner",  # str
    "proxy_host": "example_proxy_host",  # str
    "region_id": "example_region_id",  # str
    "settings": {},  # dict
    "suspend_timeout_seconds": 1,  # int
    "type": "example_type",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Endpoint().list({"project_id": "example"})
for endpoint in results:
    print(endpoint)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Endpoint().load({"id": "endpoint_id", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Endpoint().remove({"id": "endpoint_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Endpoint().update({
    "id": "endpoint_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EndpointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EndpointOperationEntity

```python
endpoint_operation = client.EndpointOperation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endpoint` | `dict` | Yes | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` | `str` | No |  |
| `operations` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EndpointOperation().create({
    "id": "example_id",  # str
    "project_id": "example_project_id",  # str
    "endpoint": {},  # dict
    "operations": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EndpointOperationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FunctionEntity

```python
function = client.Function()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_deployment` | `Any` | No | The most recent deployment whose build completed successfully. |
| `binding_status` | `str` | No | Whether Neon's internal routing for the domain is published: `pending`, `present`, or `missing`. |
| `cname_target` | `str` | Yes | The hostname the customer must point their custom domain at with a CNAME record. |
| `created_at` | `str` | Yes |  |
| `current_deployment` | `Any` | No | The most recent deployment, regardless of build status. |
| `dns_status` | `str` | No | The DNS + CAA portion of the check: `pending` (no records yet), `ok` (resolves to our edge and the CA is authorized), `misconfigured` (your CNAME does not resolve to our edge), or `caa_blocked` (your CAA records forbid Let's Encrypt). |
| `domain` | `str` | Yes | The registered custom domain (normalized, lowercase). |
| `entity_id` | `str` | Yes | The target entity's identifier within the branch. |
| `entity_type` | `str` | Yes | The kind of branch entity the domain targets. |
| `id` | `str` | Yes | Opaque, stable function identifier. |
| `invocation_url` | `str` | Yes | URL at which the function is invoked. |
| `name` | `str` | Yes | Free-form display name. |
| `slug` | `str` | Yes | Branch-unique, lowercase DNS-label. |
| `status` | `str` | No | The domain's current validity, computed by a background check: `pending` (still converging — point your CNAME at `cname_target` and wait), `active` (live: DNS resolves to the edge, the CA is authorized, and routing is published), or `error… |
| `status_reason` | `str` | No | A short, stable machine-readable reason for a non-active `status` (e.g. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Function().list({"branch_id": "example", "project_id": "example"})
for function in results:
    print(function)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Function().remove({"branch_id": "branch_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FunctionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JwkEntity

```python
jwk = client.Jwk()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `str` | No | The Neon branch ID. |
| `created_at` | `str` | Yes | The date and time when the JWKS was created |
| `id` | `str` | Yes | The JWKS configuration's ID. |
| `jwks_url` | `str` | Yes | URL of the provider's JWKS endpoint used to verify JWTs. |
| `jwt_audience` | `str` | No | Expected `aud` claim in incoming JWTs. |
| `project_id` | `str` | Yes | The Neon project ID. |
| `provider_name` | `str` | Yes | The name of the authentication provider (e.g., Clerk, Stytch, Auth0) |
| `role_names` | `list` | No | Deprecated. |
| `skip_role_creation` | `bool` | No | Deprecated. |
| `updated_at` | `str` | Yes | The date and time when the JWKS was last modified |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Jwk().create({
    "project_id": "example_project_id",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "jwks_url": "example_jwks_url",  # str
    "provider_name": "example_provider_name",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Jwk().list({"project_id": "example"})
for jwk in results:
    print(jwk)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Jwk().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JwkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MaskingRuleEntity

```python
masking_rule = client.MaskingRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column_name` | `str` | Yes | The name of the column to be masked |
| `database_name` | `str` | Yes | The name of the database containing the table to be masked |
| `masking_function` | `str` | No | The PostgreSQL Anonymizer masking function to apply. |
| `masking_rules` | `list` | Yes | List of masking rules for the branch |
| `masking_value` | `str` | No | A literal value to set on the column when masking. |
| `schema_name` | `str` | Yes | The name of the schema containing the table to be masked |
| `table_name` | `str` | Yes | The name of the table containing the column to be masked |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MaskingRule().list({"branch_id": "example", "project_id": "example"})
for masking_rule in results:
    print(masking_rule)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.MaskingRule().update({
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MaskingRuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemberEntity

```python
member = client.Member()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | The organization member's ID. |
| `joined_at` | `str` | No | Timestamp when the user joined the organization. |
| `org_id` | `str` | Yes | The Neon organization ID. |
| `role` | `str` | Yes | Organization member's role. |
| `user_id` | `str` | Yes | The Neon user ID. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Member().load({"id": "member_id", "organization_id": "organization_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Member().remove({"id": "member_id", "organization_id": "organization_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Member().update({
    "id": "member_id",
    "organization_id": "organization_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthAllowLocalhostEntity

```python
neon_auth_allow_localhost = client.NeonAuthAllowLocalhost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_localhost` | `bool` | Yes | Whether to allow localhost connections |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NeonAuthAllowLocalhost().load({"branch_id": "branch_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NeonAuthAllowLocalhost().update({
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthAllowLocalhostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthConfigEntity

```python
neon_auth_config = client.NeonAuthConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `str` | Yes | The application name used in auth emails and communications. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NeonAuthConfig().update({
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthCreateIntegrationEntity

```python
neon_auth_create_integration = client.NeonAuthCreateIntegration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `str` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `branch_id` | `str` | Yes | The Neon branch ID. |
| `database_name` | `str` | No | Name of the database to enable Neon Auth on. |
| `project_id` | `str` | Yes | The Neon project ID. |
| `role_name` | `str` | No | Deprecated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.NeonAuthCreateIntegration().create({
    "auth_provider": "example_auth_provider",  # str
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthCreateIntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthCreateNewUserEntity

```python
neon_auth_create_new_user = client.NeonAuthCreateNewUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `str` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `email` | `str` | Yes | Email address of the new Neon Auth user to create. |
| `name` | `str` | No | Display name for the new user. |
| `project_id` | `str` | Yes | The Neon project ID. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.NeonAuthCreateNewUser().create({
    "auth_provider": "example_auth_provider",  # str
    "email": "example_email",  # str
    "project_id": "example_project_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthCreateNewUserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthEmailAndPasswordConfigEntity

```python
neon_auth_email_and_password_config = client.NeonAuthEmailAndPasswordConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_sign_in_after_verification` | `bool` | Yes | Whether users are automatically signed in after verifying their email |
| `disable_sign_up` | `bool` | Yes | Whether to disable new user sign ups |
| `email_verification_method` | `str` | Yes | Controls how email addresses are verified during sign-up or sign-in. |
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NeonAuthEmailAndPasswordConfig().load({"branch_id": "branch_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NeonAuthEmailAndPasswordConfig().update({
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthEmailAndPasswordConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthEmailServerConfigEntity

```python
neon_auth_email_server_config = client.NeonAuthEmailServerConfig()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NeonAuthEmailServerConfig().update({
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthEmailServerConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthIntegrationEntity

```python
neon_auth_integration = client.NeonAuthIntegration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `str` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `auth_provider_project_id` | `str` | Yes | Project identifier assigned by the auth provider for this integration. |
| `base_url` | `str` | No | Base URL of the Neon Auth service endpoint for this integration. |
| `branch_id` | `str` | Yes | The Neon branch ID. |
| `created_at` | `str` | Yes | Timestamp when the Neon Auth integration was created, in RFC 3339 format (UTC). |
| `db_name` | `str` | Yes | Name of the database used by the Neon Auth integration. |
| `jwks_url` | `str` | Yes | URL of the provider's JWKS endpoint used to verify JWTs. |
| `name` | `str` | No | Application name shown in auth emails and communications. |
| `owned_by` | `str` | Yes | Owner of the auth provider project. |
| `transfer_status` | `str` | No | Ownership transfer state for the auth provider project. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NeonAuthIntegration().list({"project_id": "example"})
for neon_auth_integration in results:
    print(neon_auth_integration)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NeonAuthIntegration().load({"branch_id": "branch_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthIntegrationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthMagicLinkConfigEntity

```python
neon_auth_magic_link_config = client.NeonAuthMagicLinkConfig()
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

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NeonAuthMagicLinkConfig().update({
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthMagicLinkConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthOauthProviderEntity

```python
neon_auth_oauth_provider = client.NeonAuthOauthProvider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `str` | No | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `str` | No | OAuth client secret for the provider. |
| `id` | `str` | Yes | The OAuth provider's ID. |
| `microsoft_tenant_id` | `str` | No | Tenant ID for the Microsoft OAuth provider. |
| `type` | `str` | Yes | OAuth provider key type. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.NeonAuthOauthProvider().create({
    "project_id": "example_project_id",  # str
    "id": "example_id",  # str
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NeonAuthOauthProvider().list({"project_id": "example"})
for neon_auth_oauth_provider in results:
    print(neon_auth_oauth_provider)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NeonAuthOauthProvider().update({
    "id": "id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthOauthProviderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthOrganizationConfigEntity

```python
neon_auth_organization_config = client.NeonAuthOrganizationConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator_role` | `str` | Yes | Role of the organization's creator. |
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

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NeonAuthOrganizationConfig().update({
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthOrganizationConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthPhoneNumberConfigEntity

```python
neon_auth_phone_number_config = client.NeonAuthPhoneNumberConfig()
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NeonAuthPhoneNumberConfig().load({"branch_id": "branch_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NeonAuthPhoneNumberConfig().update({
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthPhoneNumberConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthPluginConfigEntity

```python
neon_auth_plugin_config = client.NeonAuthPluginConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `str` | No | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `str` | No | OAuth client secret for the provider. |
| `id` | `str` | Yes | The OAuth provider's ID. |
| `type` | `str` | Yes | OAuth provider key type. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NeonAuthPluginConfig().list({"branch_id": "example", "project_id": "example"})
for neon_auth_plugin_config in results:
    print(neon_auth_plugin_config)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthPluginConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthRedirectUriWhitelistDomainEntity

```python
neon_auth_redirect_uri_whitelist_domain = client.NeonAuthRedirectUriWhitelistDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `str` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `str` | Yes | Allowed redirect URI domain for the auth provider. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NeonAuthRedirectUriWhitelistDomain().list({"project_id": "example"})
for neon_auth_redirect_uri_whitelist_domain in results:
    print(neon_auth_redirect_uri_whitelist_domain)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthRedirectUriWhitelistDomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthTransferAuthProviderProjectEntity

```python
neon_auth_transfer_auth_provider_project = client.NeonAuthTransferAuthProviderProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `str` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `project_id` | `str` | Yes | The Neon project ID. |
| `url` | `str` | Yes | URL for completing the process of ownership transfer |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.NeonAuthTransferAuthProviderProject().create({
    "auth_provider": "example_auth_provider",  # str
    "project_id": "example_project_id",  # str
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthTransferAuthProviderProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonAuthWebhookConfigEntity

```python
neon_auth_webhook_config = client.NeonAuthWebhookConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Whether the webhook is active. |
| `enabled_events` | `list` | No | Event types that trigger this webhook. |
| `timeout_seconds` | `int` | No | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | `str` | No | Destination URL that receives webhook event payloads. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NeonAuthWebhookConfig().list({"branch_id": "example", "project_id": "example"})
for neon_auth_webhook_config in results:
    print(neon_auth_webhook_config)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NeonAuthWebhookConfig().update({
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonAuthWebhookConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonFunctionEntity

```python
neon_function = client.NeonFunction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_deployment` | `Any` | No | The most recent deployment whose build completed successfully. |
| `created_at` | `str` | Yes |  |
| `current_deployment` | `Any` | No | The most recent deployment, regardless of build status. |
| `id` | `str` | Yes | Opaque, stable function identifier. |
| `invocation_url` | `str` | Yes | URL at which the function is invoked. |
| `name` | `str` | Yes | Free-form display name. |
| `slug` | `str` | Yes | Branch-unique, lowercase DNS-label. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NeonFunction().load({"id": "neon_function_id", "branch_id": "branch_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NeonFunction().update({
    "id": "neon_function_id",
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonFunctionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NeonFunctionDeploymentEntity

```python
neon_function_deployment = client.NeonFunctionDeployment()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.NeonFunctionDeployment().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "slug": "example_slug",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NeonFunctionDeploymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OperationEntity

```python
operation = client.Operation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `str` | Yes | The action performed by the operation |
| `branch_id` | `str` | No | The ID of the branch this operation ran on. |
| `created_at` | `str` | Yes | A timestamp indicating when the operation was created |
| `endpoint_id` | `str` | No | The ID of the compute endpoint this operation ran on. |
| `error` | `str` | No | Human-readable message describing why the operation failed. |
| `failures_count` | `int` | Yes | The number of times the operation failed |
| `id` | `str` | Yes | The operation ID |
| `name` | `str` | No | Name for the replaced branch. |
| `operations` | `list` | Yes |  |
| `project_id` | `str` | Yes | The ID of the project this operation ran on. |
| `retry_at` | `str` | No | A timestamp indicating when the operation was last retried |
| `status` | `str` | Yes | Current lifecycle state of the operation. |
| `total_duration_ms` | `int` | Yes | The total duration of the operation in milliseconds |
| `updated_at` | `str` | Yes | A timestamp indicating when the operation status was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Operation().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "action": "example_action",  # str
    "created_at": "example_created_at",  # str
    "failures_count": 1,  # int
    "id": "example_id",  # str
    "operations": [],  # list
    "status": "example_status",  # str
    "total_duration_ms": 1,  # int
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Operation().list({"project_id": "example"})
for operation in results:
    print(operation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Operation().load({"id": "operation_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OperationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrgApiKeyCreateEntity

```python
org_api_key_create = client.OrgApiKeyCreate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `created_by` | `str` | No |  |
| `id` | `int` | No |  |
| `key` | `str` | No |  |
| `name` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrgApiKeyCreate().create({
    "organization_id": "example_organization_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgApiKeyCreateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrgApiKeyRevokeEntity

```python
org_api_key_revoke = client.OrgApiKeyRevoke()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.OrgApiKeyRevoke().remove({"key_id": 1, "organization_id": "organization_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgApiKeyRevokeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrgApiKeysListResponseItemEntity

```python
org_api_keys_list_response_item = client.OrgApiKeysListResponseItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | A timestamp indicating when the API key was created |
| `created_by` | `dict` | Yes | The user data of the user that created this API key. |
| `id` | `int` | Yes | The API key's unique numeric ID. |
| `last_used_at` | `str` | No | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `str` | Yes | The IP address from which the API key was last used |
| `name` | `str` | Yes | The user-specified API key name |
| `project_id` | `str` | No | If set, the API key can access only this project |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrgApiKeysListResponseItem().list({"organization_id": "example"})
for org_api_keys_list_response_item in results:
    print(org_api_keys_list_response_item)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgApiKeysListResponseItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationEntity

```python
organization = client.Organization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_hipaa_projects` | `bool` | No | If true, allow account to mark projects as HIPAA |
| `created_at` | `str` | Yes | A timestamp indicting when the organization was created |
| `handle` | `str` | Yes | URL-safe identifier for the organization, used in API paths. |
| `id` | `str` | Yes | The Neon organization ID. |
| `label` | `str` | Yes | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `managed_by` | `str` | Yes | Organizations created via the Console or the API are managed by `console`. |
| `name` | `str` | Yes | Human-readable display name of the organization. |
| `plan` | `str` | Yes | Billing plan for the organization, for example `free`, `launch`, or `scale`. |
| `require_mfa` | `bool` | No | If true, all members must have MFA enabled to access this organization |
| `updated_at` | `str` | Yes | A timestamp indicating when the organization was updated |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Organization().create({
    "id": "example_id",  # str
    "region_id": "example_region_id",  # str
    "vpc_endpoint_id": "example_vpc_endpoint_id",  # str
    "created_at": "example_created_at",  # str
    "handle": "example_handle",  # str
    "label": "example_label",  # str
    "managed_by": "example_managed_by",  # str
    "name": "example_name",  # str
    "plan": "example_plan",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Organization().list()
for organization in results:
    print(organization)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Organization().load({"id": "organization_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Organization().remove({"id": "organization_id", "region_id": "region_id", "vpc_endpoint_id": "vpc_endpoint_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationInvitationEntity

```python
organization_invitation = client.OrganizationInvitation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | Yes | Email of the invited user |
| `id` | `str` | Yes | The invitation ID. |
| `invitations` | `list` | Yes | List of pending invitations for the organization. |
| `invited_at` | `str` | Yes | Timestamp when the invitation was created |
| `invited_by` | `str` | Yes | UUID for the user_id who extended the invitation |
| `org_id` | `str` | Yes | Organization id as it is stored in Neon |
| `role` | `str` | Yes | Organization member's role. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationInvitation().create({
    "id": "example_id",  # str
    "email": "example_email",  # str
    "invitations": [],  # list
    "invited_at": "example_invited_at",  # str
    "invited_by": "example_invited_by",  # str
    "org_id": "example_org_id",  # str
    "role": "example_role",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationInvitation().list({"id": "example"})
for organization_invitation in results:
    print(organization_invitation)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationInvitationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PresignEntity

```python
presign = client.Presign()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `str` | No | The `Content-Type` to bind into the signed request. |
| `expires_at` | `str` | Yes | When the presigned URL stops being valid. |
| `expires_in_seconds` | `int` | No | How long the presigned URL stays valid, in seconds. |
| `headers` | `dict` | Yes | Headers the caller MUST send verbatim on the request (e.g. |
| `method` | `str` | Yes | The HTTP method to use against `url`: `PUT` for an upload, `GET` for a download. |
| `operation` | `str` | Yes | The transfer direction. |
| `url` | `str` | Yes | The presigned URL. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Presign().create({
    "branch_id": "example_branch_id",  # str
    "bucket_id": "example_bucket_id",  # str
    "object_key": "example_object_key",  # str
    "project_id": "example_project_id",  # str
    "expires_at": "example_expires_at",  # str
    "headers": {},  # dict
    "method": "example_method",  # str
    "operation": "example_operation",  # str
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PresignEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectEntity

```python
project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_time` | `int` | Yes | Control plane observed endpoints of this project being active this amount of wall-clock time. |
| `active_time_seconds` | `int` | Yes | Seconds. |
| `branch_logical_size_limit` | `int` | Yes | The logical size limit for a branch. |
| `branch_logical_size_limit_bytes` | `int` | Yes | The logical size limit for a branch. |
| `compute_last_active_at` | `str` | No | The most recent time when any endpoint of this project was active. |
| `compute_time_seconds` | `int` | Yes | Seconds. |
| `consumption_period_end` | `str` | Yes | A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period. |
| `consumption_period_start` | `str` | Yes | A date-time indicating when Neon Cloud started measuring consumption for current consumption period. |
| `cpu_used_sec` | `int` | Yes | Deprecated. |
| `created_at` | `str` | Yes | A timestamp indicating when the project was created |
| `creation_source` | `str` | Yes | The project creation source |
| `data_storage_bytes_hour` | `int` | Yes | Bytes-Hour. |
| `data_transfer_bytes` | `int` | Yes | Bytes. |
| `default_endpoint_settings` | `dict` | No | A collection of settings for a Neon endpoint |
| `deleted_at` | `str` | No | A timestamp indicating when the project was deleted |
| `effective_project_permission` | `str` | No |  |
| `hipaa_enabled_at` | `str` | No | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | `int` | Yes | The number of seconds to retain the shared history for all branches in this project. |
| `id` | `str` | Yes | The Neon project ID. |
| `label` | `str` | Yes | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | `str` | No | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | `str` | No | A timestamp indicating when project maintenance begins. |
| `name` | `str` | Yes | The project name |
| `org_id` | `str` | No | The Neon organization ID. |
| `org_name` | `str` | No | Name of the organization that owns the project. |
| `owner` | `dict` | Yes | Ownership details for the project, including the owner's name and email. |
| `owner_id` | `str` | Yes | ID of the organization that owns the project. |
| `pg_version` | `int` | Yes | The major Postgres version number. |
| `platform_id` | `str` | Yes | The cloud platform identifier. |
| `project` | `dict` | Yes | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `provisioner` | `str` | Yes | Compute provisioner. |
| `proxy_host` | `str` | Yes | The proxy host for the project. |
| `quota_reset_at` | `str` | No | Deprecated. |
| `recoverable_until` | `str` | No | A timestamp indicating the project will be recoverable until this date and time. |
| `region_id` | `str` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `dict` | No | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | `bool` | Yes | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | `int` | No | The current space occupied by the project in Postgres storage, in bytes. |
| `updated_at` | `str` | Yes | A timestamp indicating when the project was last updated |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Project().create({
    "id": "example_id",  # str
    "vpc_endpoint_id": "example_vpc_endpoint_id",  # str
    "active_time": 1,  # int
    "active_time_seconds": 1,  # int
    "branch_logical_size_limit": 1,  # int
    "branch_logical_size_limit_bytes": 1,  # int
    "compute_time_seconds": 1,  # int
    "consumption_period_end": "example_consumption_period_end",  # str
    "consumption_period_start": "example_consumption_period_start",  # str
    "cpu_used_sec": 1,  # int
    "created_at": "example_created_at",  # str
    "creation_source": "example_creation_source",  # str
    "data_storage_bytes_hour": 1,  # int
    "data_transfer_bytes": 1,  # int
    "history_retention_seconds": 1,  # int
    "label": "example_label",  # str
    "name": "example_name",  # str
    "owner": {},  # dict
    "owner_id": "example_owner_id",  # str
    "pg_version": 1,  # int
    "platform_id": "example_platform_id",  # str
    "project": {},  # dict
    "provisioner": "example_provisioner",  # str
    "proxy_host": "example_proxy_host",  # str
    "region_id": "example_region_id",  # str
    "store_passwords": True,  # bool
    "updated_at": "example_updated_at",  # str
    "written_data_bytes": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Project().list()
for project in results:
    print(project)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Project().load({"id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Project().remove({"id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Project().update({
    "id": "project_id",
    "request_id": "request_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectBranchLogFieldEntity

```python
project_branch_log_field = client.ProjectBranchLogField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `list` | Yes | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectBranchLogField().list({"branch_id": "example", "project_id": "example"})
for project_branch_log_field in results:
    print(project_branch_log_field)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectBranchLogFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectBranchLogFieldValueEntity

```python
project_branch_log_field_value = client.ProjectBranchLogFieldValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `is_truncated` | `bool` | Yes | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectBranchLogFieldValue().list({"branch_id": "example", "field_name": "example", "project_id": "example"})
for project_branch_log_field_value in results:
    print(project_branch_log_field_value)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectBranchLogFieldValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectBranchLogsQueryEntity

```python
project_branch_logs_query = client.ProjectBranchLogsQuery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body_contains` | `str` | No | Match records whose rendered `message` contains this case-sensitive substring. |
| `cursor` | `str` | No | Opaque pagination cursor returned as `next_cursor` by a previous call. |
| `end_time` | `str` | No | Exclusive end of the query window. |
| `is_truncated` | `bool` | Yes | True when more records matched than were returned. |
| `limit` | `int` | No | Maximum number of log records to return per page. |
| `logql` | `str` | No | Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream. |
| `logs` | `list` | Yes |  |
| `minimum_severity` | `str` | No | An OpenTelemetry severity level. |
| `next_cursor` | `str` | No | Pagination cursor to pass as `cursor` on the next request. |
| `scope_name` | `str` | No | Match the OpenTelemetry instrumentation scope name exactly. |
| `service_name` | `str` | No | Match the OpenTelemetry `service.name` resource attribute exactly. |
| `severity_text` | `str` | No | Match the OpenTelemetry severity text exactly. |
| `since` | `Any` | No | Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted. |
| `sort_order` | `str` | No | Order matching records by timestamp. |
| `source` | `str` | No | The Neon service that emitted the log record. |
| `start_time` | `str` | No | Inclusive beginning of the query window. |
| `trace_id` | `str` | No | Match records associated with this OpenTelemetry trace ID. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectBranchLogsQuery().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "is_truncated": True,  # bool
    "logs": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectBranchLogsQueryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectMemberEntity

```python
project_member = client.ProjectMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `effective_project_permission` | `str` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `str` | No | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `str` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `grant_source` | `str` | No | How a member's project access is granted. |
| `id` | `str` | No |  |
| `member_id` | `str` | Yes | The organization member ID. |
| `name` | `str` | No | The user's display name. |
| `org_default_project_permission` | `str` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `str` | Yes | Organization-level role used by project member role management. |
| `project_role` | `str` | No | Per-project role. |
| `user_id` | `str` | Yes | The user ID for the organization member. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectMember().list({"id": "example"})
for project_member in results:
    print(project_member)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectMemberRoleEntity

```python
project_member_role = client.ProjectMemberRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credential_rotation_recommended` | `bool` | No | Hint that database credentials may need rotation after the role change. |
| `effective_project_permission` | `str` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `email` | `str` | No | Email address of the user who has been granted access to the project. |
| `explicit_project_permission` | `str` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `member_id` | `str` | Yes |  |
| `name` | `str` | No | The user's display name. |
| `org_api_key_rotation_recommended` | `bool` | No | Hint that project-scoped org API keys created by the target user may need rotation. |
| `org_default_project_permission` | `str` | No | The caller's effective permission for a project when per-project permissions are enabled. |
| `org_role` | `str` | Yes | Organization-level role used by project member role management. |
| `project_id` | `str` | Yes |  |
| `project_role` | `str` | No | The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback. |
| `role` | `str` | Yes | Per-project role. |
| `user_id` | `str` | Yes |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectMemberRole().remove({"member_id": "member_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProjectMemberRole().update({
    "member_id": "member_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectMemberRoleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectPermissionEntity

```python
project_permission = client.ProjectPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | Yes | Email address of the user to grant project access to. |
| `granted_at` | `str` | Yes | Timestamp when the permission was granted. |
| `granted_to_email` | `str` | Yes | Email address of the user who has been granted access to the project. |
| `id` | `str` | Yes | The project permission's ID. |
| `revoked_at` | `str` | No | Timestamp when the permission was revoked. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectPermission().create({
    "id": "example_id",  # str
    "email": "example_email",  # str
    "granted_at": "example_granted_at",  # str
    "granted_to_email": "example_granted_to_email",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProjectPermission().list({"id": "example"})
for project_permission in results:
    print(project_permission)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProjectPermission().remove({"id": "id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectPermissionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectRecoverEntity

```python
project_recover = client.ProjectRecover()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branches` | `list` | Yes | Branches in the project. |
| `id` | `str` | No |  |
| `project` | `dict` | Yes | Full details of the project, including configuration, consumption metrics, and ownership. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectRecover().create({
    "id": "example_id",  # str
    "branches": [],  # list
    "project": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectRecoverEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProjectTransferRequestEntity

```python
project_transfer_request = client.ProjectTransferRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `ttl_seconds` | `int` | No | Number of seconds the transfer request stays valid before it expires. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProjectTransferRequest().create({
    "id": "example_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProjectTransferRequestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RegionEntity

```python
region = client.Region()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default` | `bool` | Yes | True if this region is selected by default when no region is specified during project creation. |
| `geo_lat` | `str` | Yes | The geographical latitude (approximate) for the region. |
| `geo_long` | `str` | Yes | The geographical longitude (approximate) for the region. |
| `name` | `str` | Yes | A short description of the region. |
| `region_id` | `str` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Region().list()
for region in results:
    print(region)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RoleEntity

```python
role = client.Role()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication_method` | `str` | No | Authentication method configured for this role: `password`, `oauth`, or `no_login`. |
| `branch_id` | `str` | Yes | The ID of the branch this role belongs to. |
| `created_at` | `str` | Yes | A timestamp indicating when the role was created |
| `id` | `str` | No |  |
| `name` | `str` | Yes | Postgres role name within the branch. |
| `password` | `str` | No | The role password |
| `protected` | `bool` | No | Whether or not the role is system-protected |
| `role` | `dict` | Yes | Properties of the role to create. |
| `updated_at` | `str` | Yes | A timestamp indicating when the role was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Role().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "created_at": "example_created_at",  # str
    "name": "example_name",  # str
    "role": {},  # dict
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Role().list({"branch_id": "example", "project_id": "example"})
for role in results:
    print(role)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Role().load({"id": "role_id", "branch_id": "branch_id", "project_id": "project_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Role().remove({"id": "role_id", "branch_id": "branch_id", "project_id": "project_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RoleOperationEntity

```python
role_operation = client.RoleOperation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `operations` | `list` | Yes |  |
| `role` | `dict` | Yes | Role details for the requested database role. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RoleOperation().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "role_name": "example_role_name",  # str
    "operations": [],  # list
    "role": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoleOperationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RolePasswordEntity

```python
role_password = client.RolePassword()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `password` | `str` | Yes | The role password |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RolePassword().load({"branch_id": "branch_id", "project_id": "project_id", "role_name": "role_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RolePasswordEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SendNeonAuthTestEmailEntity

```python
send_neon_auth_test_email = client.SendNeonAuthTestEmail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error_message` | `str` | No | The error message from the email server. |
| `host` | `str` | Yes | Hostname of the email server. |
| `password` | `str` | Yes | Password for authenticating with the SMTP server. |
| `port` | `int` | Yes | TCP port of the SMTP server. |
| `recipient_email` | `str` | Yes | The email address to send the test email to. |
| `sender_email` | `str` | Yes | Email address used as the From address on outgoing auth emails. |
| `sender_name` | `str` | Yes | Display name shown as the sender in outgoing emails. |
| `success` | `bool` | Yes | Whether the test email was sent successfully. |
| `username` | `str` | Yes | Username for authenticating with the SMTP server. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SendNeonAuthTestEmail().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "host": "example_host",  # str
    "password": "example_password",  # str
    "port": 1,  # int
    "recipient_email": "example_recipient_email",  # str
    "sender_email": "example_sender_email",  # str
    "sender_name": "example_sender_name",  # str
    "success": True,  # bool
    "username": "example_username",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SendNeonAuthTestEmailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SnapshotEntity

```python
snapshot = client.Snapshot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | Timestamp when the snapshot was created, in RFC 3339 format (UTC). |
| `diff_size` | `int` | No | Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage. |
| `expires_at` | `str` | No | RFC 3339 timestamp when the snapshot expires and is eligible for deletion. |
| `full_size` | `int` | No | Full logical size of the snapshot in bytes at the time it was taken. |
| `id` | `str` | Yes | The snapshot ID. |
| `lsn` | `str` | No | WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`). |
| `manual` | `bool` | No | True if the snapshot was created manually rather than by a schedule. |
| `name` | `str` | Yes | Human-readable label for the snapshot. |
| `operations` | `list` | Yes |  |
| `slug` | `str` | No | Snapshot resource ID, unique within the project. |
| `snapshot` | `dict` | Yes | Fields to update on the snapshot. |
| `source_branch_id` | `str` | No | Branch from which this snapshot was created. |
| `timestamp` | `str` | No | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Snapshot().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "operations": [],  # list
    "snapshot": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Snapshot().list({"project_id": "example"})
for snapshot in results:
    print(snapshot)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Snapshot().remove({"id": "id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Snapshot().update({
    "id": "id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SnapshotEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SpendingLimitEntity

```python
spending_limit = client.SpendingLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `spending_limit_cents` | `int` | Yes | Monthly spending cap in cents. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SpendingLimit().load({"organization_id": "organization_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SpendingLimit().update({
    "organization_id": "organization_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SpendingLimitEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TriggerEntity

```python
trigger = client.Trigger()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `triggers` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Trigger().create({
    "branch_id": "example_branch_id",  # str
    "project_id": "example_project_id",  # str
    "triggers": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Trigger().list({"branch_id": "example", "project_id": "example"})
for trigger in results:
    print(trigger)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Trigger().load({"id": "trigger_id", "branch_id": "branch_id", "project_id": "project_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Trigger().update({
    "id": "trigger_id",
    "branch_id": "branch_id",
    "project_id": "project_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TriggerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateNeonAuthUserRoleEntity

```python
update_neon_auth_user_role = client.UpdateNeonAuthUserRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | ID of the updated user |
| `roles` | `list` | Yes | Roles to assign to the user in the Neon Auth (Better Auth) directory. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateNeonAuthUserRole().update({
    "branch_id": "branch_id",
    "project_id": "project_id",
    "user_id": "user_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateNeonAuthUserRoleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## VpcEndpointEntity

```python
vpc_endpoint = client.VpcEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `example_restricted_projects` | `list` | Yes | A list of example projects that are restricted to use this VPC endpoint. |
| `id` | `str` | No |  |
| `label` | `str` | Yes | A descriptive label for the VPC endpoint |
| `num_restricted_projects` | `int` | Yes | The number of projects that are restricted to use this VPC endpoint. |
| `region_id` | `str` | Yes | The region where the VPC endpoint is located |
| `state` | `str` | Yes | The current state of the VPC endpoint. |
| `vpc_endpoint_id` | `str` | Yes | Cloud provider identifier for the VPC endpoint. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.VpcEndpoint().list({"project_id": "example"})
for vpc_endpoint in results:
    print(vpc_endpoint)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.VpcEndpoint().load({"id": "vpc_endpoint_id", "organization_id": "organization_id", "region_id": "region_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VpcEndpointEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = NeonSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

