# Neon TypeScript SDK Reference

Complete API reference for the Neon TypeScript SDK.


## NeonSDK

### Constructor

```ts
new NeonSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NeonSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = NeonSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `NeonSDK` instance in test mode.


### Instance Methods

#### `Anonymize(data?: object)`

Create a new `Anonymize` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnonymizeEntity` instance.

#### `AnonymizedBranchStatus(data?: object)`

Create a new `AnonymizedBranchStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnonymizedBranchStatusEntity` instance.

#### `ApiKey(data?: object)`

Create a new `ApiKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiKeyEntity` instance.

#### `Auth(data?: object)`

Create a new `Auth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthEntity` instance.

#### `AuthLegacy(data?: object)`

Create a new `AuthLegacy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthLegacyEntity` instance.

#### `AvailablePreloadLibrary(data?: object)`

Create a new `AvailablePreloadLibrary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AvailablePreloadLibraryEntity` instance.

#### `BackupSchedule(data?: object)`

Create a new `BackupSchedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BackupScheduleEntity` instance.

#### `Branch(data?: object)`

Create a new `Branch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchEntity` instance.

#### `BranchAiGateway(data?: object)`

Create a new `BranchAiGateway` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchAiGatewayEntity` instance.

#### `BranchOperation(data?: object)`

Create a new `BranchOperation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchOperationEntity` instance.

#### `BranchSchema(data?: object)`

Create a new `BranchSchema` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchSchemaEntity` instance.

#### `BranchSchemaCompare(data?: object)`

Create a new `BranchSchemaCompare` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchSchemaCompareEntity` instance.

#### `BranchStorage(data?: object)`

Create a new `BranchStorage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchStorageEntity` instance.

#### `Bucket(data?: object)`

Create a new `Bucket` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BucketEntity` instance.

#### `BucketObjectsList(data?: object)`

Create a new `BucketObjectsList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BucketObjectsListEntity` instance.

#### `ConnectionUri(data?: object)`

Create a new `ConnectionUri` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConnectionUriEntity` instance.

#### `Consumption(data?: object)`

Create a new `Consumption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConsumptionEntity` instance.

#### `CreateCredential(data?: object)`

Create a new `CreateCredential` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateCredentialEntity` instance.

#### `Credential(data?: object)`

Create a new `Credential` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CredentialEntity` instance.

#### `CurrentUserInfo(data?: object)`

Create a new `CurrentUserInfo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CurrentUserInfoEntity` instance.

#### `CustomDomain(data?: object)`

Create a new `CustomDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomDomainEntity` instance.

#### `DataApi(data?: object)`

Create a new `DataApi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataApiEntity` instance.

#### `Database(data?: object)`

Create a new `Database` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseEntity` instance.

#### `EmailProvider(data?: object)`

Create a new `EmailProvider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailProviderEntity` instance.

#### `EmailServer(data?: object)`

Create a new `EmailServer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailServerEntity` instance.

#### `Empty(data?: object)`

Create a new `Empty` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmptyEntity` instance.

#### `Endpoint(data?: object)`

Create a new `Endpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EndpointEntity` instance.

#### `EndpointOperation(data?: object)`

Create a new `EndpointOperation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EndpointOperationEntity` instance.

#### `Function(data?: object)`

Create a new `Function` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FunctionEntity` instance.

#### `Jwk(data?: object)`

Create a new `Jwk` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JwkEntity` instance.

#### `MaskingRule(data?: object)`

Create a new `MaskingRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MaskingRuleEntity` instance.

#### `Member(data?: object)`

Create a new `Member` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemberEntity` instance.

#### `NeonAuthAllowLocalhost(data?: object)`

Create a new `NeonAuthAllowLocalhost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthAllowLocalhostEntity` instance.

#### `NeonAuthConfig(data?: object)`

Create a new `NeonAuthConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthConfigEntity` instance.

#### `NeonAuthCreateIntegration(data?: object)`

Create a new `NeonAuthCreateIntegration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthCreateIntegrationEntity` instance.

#### `NeonAuthCreateNewUser(data?: object)`

Create a new `NeonAuthCreateNewUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthCreateNewUserEntity` instance.

#### `NeonAuthEmailAndPasswordConfig(data?: object)`

Create a new `NeonAuthEmailAndPasswordConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthEmailAndPasswordConfigEntity` instance.

#### `NeonAuthEmailServerConfig(data?: object)`

Create a new `NeonAuthEmailServerConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthEmailServerConfigEntity` instance.

#### `NeonAuthIntegration(data?: object)`

Create a new `NeonAuthIntegration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthIntegrationEntity` instance.

#### `NeonAuthMagicLinkConfig(data?: object)`

Create a new `NeonAuthMagicLinkConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthMagicLinkConfigEntity` instance.

#### `NeonAuthOauthProvider(data?: object)`

Create a new `NeonAuthOauthProvider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthOauthProviderEntity` instance.

#### `NeonAuthOrganizationConfig(data?: object)`

Create a new `NeonAuthOrganizationConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthOrganizationConfigEntity` instance.

#### `NeonAuthPhoneNumberConfig(data?: object)`

Create a new `NeonAuthPhoneNumberConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthPhoneNumberConfigEntity` instance.

#### `NeonAuthPluginConfig(data?: object)`

Create a new `NeonAuthPluginConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthPluginConfigEntity` instance.

#### `NeonAuthRedirectUriWhitelistDomain(data?: object)`

Create a new `NeonAuthRedirectUriWhitelistDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthRedirectUriWhitelistDomainEntity` instance.

#### `NeonAuthTransferAuthProviderProject(data?: object)`

Create a new `NeonAuthTransferAuthProviderProject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthTransferAuthProviderProjectEntity` instance.

#### `NeonAuthWebhookConfig(data?: object)`

Create a new `NeonAuthWebhookConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonAuthWebhookConfigEntity` instance.

#### `NeonFunction(data?: object)`

Create a new `NeonFunction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonFunctionEntity` instance.

#### `NeonFunctionDeployment(data?: object)`

Create a new `NeonFunctionDeployment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NeonFunctionDeploymentEntity` instance.

#### `Operation(data?: object)`

Create a new `Operation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OperationEntity` instance.

#### `OrgApiKeyCreate(data?: object)`

Create a new `OrgApiKeyCreate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrgApiKeyCreateEntity` instance.

#### `OrgApiKeyRevoke(data?: object)`

Create a new `OrgApiKeyRevoke` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrgApiKeyRevokeEntity` instance.

#### `OrgApiKeysListResponseItem(data?: object)`

Create a new `OrgApiKeysListResponseItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrgApiKeysListResponseItemEntity` instance.

#### `Organization(data?: object)`

Create a new `Organization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationEntity` instance.

#### `OrganizationInvitation(data?: object)`

Create a new `OrganizationInvitation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationInvitationEntity` instance.

#### `Presign(data?: object)`

Create a new `Presign` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PresignEntity` instance.

#### `Project(data?: object)`

Create a new `Project` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntity` instance.

#### `ProjectBranchLogField(data?: object)`

Create a new `ProjectBranchLogField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectBranchLogFieldEntity` instance.

#### `ProjectBranchLogFieldValue(data?: object)`

Create a new `ProjectBranchLogFieldValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectBranchLogFieldValueEntity` instance.

#### `ProjectBranchLogsQuery(data?: object)`

Create a new `ProjectBranchLogsQuery` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectBranchLogsQueryEntity` instance.

#### `ProjectMember(data?: object)`

Create a new `ProjectMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectMemberEntity` instance.

#### `ProjectMemberRole(data?: object)`

Create a new `ProjectMemberRole` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectMemberRoleEntity` instance.

#### `ProjectPermission(data?: object)`

Create a new `ProjectPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectPermissionEntity` instance.

#### `ProjectRecover(data?: object)`

Create a new `ProjectRecover` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectRecoverEntity` instance.

#### `ProjectTransferRequest(data?: object)`

Create a new `ProjectTransferRequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectTransferRequestEntity` instance.

#### `Region(data?: object)`

Create a new `Region` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RegionEntity` instance.

#### `Role(data?: object)`

Create a new `Role` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RoleEntity` instance.

#### `RoleOperation(data?: object)`

Create a new `RoleOperation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RoleOperationEntity` instance.

#### `RolePassword(data?: object)`

Create a new `RolePassword` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RolePasswordEntity` instance.

#### `SendNeonAuthTestEmail(data?: object)`

Create a new `SendNeonAuthTestEmail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SendNeonAuthTestEmailEntity` instance.

#### `Snapshot(data?: object)`

Create a new `Snapshot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SnapshotEntity` instance.

#### `SpendingLimit(data?: object)`

Create a new `SpendingLimit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SpendingLimitEntity` instance.

#### `Trigger(data?: object)`

Create a new `Trigger` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TriggerEntity` instance.

#### `UpdateNeonAuthUserRole(data?: object)`

Create a new `UpdateNeonAuthUserRole` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateNeonAuthUserRoleEntity` instance.

#### `VpcEndpoint(data?: object)`

Create a new `VpcEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VpcEndpointEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `NeonSDK.test()`.

**Returns:** `NeonSDK` instance in test mode.


---

## AnonymizeEntity

```ts
const anonymize = client.Anonymize()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes | The ID of the anonymized branch. |
| `created_at` | `string` | Yes | A timestamp indicating when the anonymized branch was created |
| `failed_at` | `string` | No | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | `Record<string, any>` | No | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | `string` | Yes | The ID of the project this branch belongs to. |
| `state` | `string` | Yes | The current state of the anonymized branch. |
| `status_message` | `string` | No | A descriptive message about the current status or any errors |
| `updated_at` | `string` | Yes | A timestamp indicating when the anonymized branch status was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Anonymize().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  created_at: 'example_created_at',
  state: 'example_state',
  updated_at: 'example_updated_at',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnonymizeEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnonymizedBranchStatusEntity

```ts
const anonymized_branch_status = client.AnonymizedBranchStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes | The ID of the anonymized branch. |
| `created_at` | `string` | Yes | A timestamp indicating when the anonymized branch was created |
| `failed_at` | `string` | No | A timestamp indicating when the anonymized branch operation failed (if applicable) |
| `last_run` | `Record<string, any>` | No | Metadata about the most recent anonymization attempt for the branch. |
| `project_id` | `string` | Yes | The ID of the project this branch belongs to. |
| `state` | `string` | Yes | The current state of the anonymized branch. |
| `status_message` | `string` | No | A descriptive message about the current status or any errors |
| `updated_at` | `string` | Yes | A timestamp indicating when the anonymized branch status was last updated |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AnonymizedBranchStatus().load({ branch_id: 'branch_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnonymizedBranchStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiKeyEntity

```ts
const api_key = client.ApiKey()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiKey().create({
  created_at: 'example_created_at',
  created_by: 'example_created_by',
  id: 1,
  key: 'example_key',
  key_name: 'example_key_name',
  last_used_from_addr: 'example_last_used_from_addr',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiKey().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ApiKey().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthEntity

```ts
const auth = client.Auth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes | The ID of the account associated with this authentication record. |
| `auth_data` | `string` | No |  |
| `auth_method` | `string` | Yes | Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `domain` | `/projects/{project_id}/branches/{branch_id}/auth/domains` | `client.Auth().create({ $action: 'domain', ... })` |
| `domain` | `/projects/{project_id}/branches/{branch_id}/auth/domains` | `client.Auth().remove({ $action: 'domain', ... })` |

An action returns that action's OWN response, which is not necessarily a
Auth record — check the API definition for its shape.

```ts
const result = await client.Auth().create({
  $action: 'domain',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Auth().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  account_id: 'example_account_id',
  auth_method: 'example_auth_method',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Auth().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Auth().remove({ branch_id: 'branch_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthLegacyEntity

```ts
const auth_legacy = client.AuthLegacy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | Yes | URI to add to the redirect URI allowlist for the auth provider. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AuthLegacy().create({
  project_id: 'example_project_id',
  auth_provider: 'example_auth_provider',
  domain: 'example_domain',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AuthLegacy().remove({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthLegacyEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AvailablePreloadLibraryEntity

```ts
const available_preload_library = client.AvailablePreloadLibrary()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AvailablePreloadLibrary().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AvailablePreloadLibraryEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BackupScheduleEntity

```ts
const backup_schedule = client.BackupSchedule()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BackupSchedule().list({ branch_id: "example", project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BackupScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchEntity

```ts
const branch = client.Branch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_time_seconds` | `number` | Yes | Total time this branch's compute has been active during the current billing period, in seconds (not weighted by compute size). |
| `annotation` | `Record<string, any>` | Yes | Annotation data associated with the annotated object. |
| `branch` | `Record<string, any>` | Yes | Branch returned by the request. |
| `compute_time_seconds` | `number` | Yes | Total Postgres compute time consumed by this branch during the current billing period, in CU-seconds (weighted by compute size). |
| `cpu_used_sec` | `number` | Yes | Deprecated. |
| `created_at` | `string` | Yes | A timestamp indicating when the branch was created |
| `created_by` | `Record<string, any>` | No | The resolved user model that contains details of the user/org/integration/api_key used for branch creation. |
| `creation_source` | `string` | Yes | The branch creation source |
| `current_state` | `string` | Yes | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `data_transfer_bytes` | `number` | Yes | Total data transferred out of the branch, in bytes. |
| `default` | `boolean` | Yes | Whether the branch is the project's default branch |
| `expires_at` | `string` | No | The timestamp when the branch is scheduled to expire and be automatically deleted. |
| `id` | `string` | Yes | The branch ID. |
| `init_source` | `string` | No | Source of initialization for the branch. |
| `last_reset_at` | `string` | No | A timestamp indicating when the branch was last reset |
| `logical_size` | `number` | No | The logical size of the branch, in bytes |
| `name` | `string` | Yes | The branch name |
| `parent_id` | `string` | No | The `branch_id` of the parent branch |
| `parent_lsn` | `string` | No | The Log Sequence Number (LSN) on the parent branch from which this branch was created. |
| `parent_timestamp` | `string` | No | The point in time on the parent branch from which this branch was created. |
| `pending_state` | `string` | No | The branch’s state, indicating if it is initializing, ready for use, or archived. |
| `primary` | `boolean` | No | Deprecated. |
| `project_id` | `string` | Yes | The ID of the project this branch belongs to. |
| `protected` | `boolean` | Yes | Whether the branch is protected. |
| `recovery` | `Record<string, any>` | Yes | Recovery information for a deleted branch. |
| `restore_status` | `string` | No | Could be `restored`, `finalized` or `detaching`. |
| `restored_as` | `string` | No | ID of the target branch which was replaced when this branch was restored |
| `restored_from` | `string` | No | ID of the snapshot that was the restore source for this branch |
| `restricted_actions` | `any[]` | No | A list of actions that are currently restricted for this branch and the reason why. |
| `state_changed_at` | `string` | Yes | A UTC timestamp indicating when the `current_state` began |
| `ttl_interval_seconds` | `number` | No | The time-to-live (TTL) duration originally configured for the branch, in seconds. |
| `updated_at` | `string` | Yes | A timestamp indicating when the branch was last updated |
| `written_data_bytes` | `number` | Yes | Data written by this branch during the current billing period, in bytes. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `count` | `/projects/{project_id}/branches/count` | `client.Branch().load({ $action: 'count', ... })` |

An action returns that action's OWN response, which is not necessarily a
Branch record — check the API definition for its shape.

```ts
const result = await client.Branch().load({
  $action: 'count',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Branch().create({
  project_id: 'example_project_id',
  active_time_seconds: 1,
  annotation: {},
  branch: {},
  compute_time_seconds: 1,
  cpu_used_sec: 1,
  created_at: 'example_created_at',
  creation_source: 'example_creation_source',
  current_state: 'example_current_state',
  data_transfer_bytes: 1,
  default: true,
  id: 'example_id',
  name: 'example_name',
  protected: true,
  recovery: {},
  state_changed_at: 'example_state_changed_at',
  updated_at: 'example_updated_at',
  written_data_bytes: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Branch().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Branch().load({ id: 'branch_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Branch().remove({ id: 'branch_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Branch().update({
  id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchAiGatewayEntity

```ts
const branch_ai_gateway = client.BranchAiGateway()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_url` | `string` | Yes | The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL. |
| `enabled` | `boolean` | Yes | Always `true` in 200 responses. |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BranchAiGateway().load({ id: 'branch_ai_gateway_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchAiGatewayEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchOperationEntity

```ts
const branch_operation = client.BranchOperation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch` | `Record<string, any>` | Yes | Branch returned by the request. |
| `id` | `string` | No |  |
| `operations` | `any[]` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore` | `/projects/{project_id}/branches/{branch_id}/restore` | `client.BranchOperation().create({ $action: 'restore', ... })` |
| `set_as_default` | `/projects/{project_id}/branches/{branch_id}/set_as_default` | `client.BranchOperation().create({ $action: 'set_as_default', ... })` |

An action returns that action's OWN response, which is not necessarily a
BranchOperation record — check the API definition for its shape.

```ts
const result = await client.BranchOperation().create({
  $action: 'restore',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BranchOperation().create({
  id: 'example_id',
  project_id: 'example_project_id',
  branch: {},
  operations: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchOperationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchSchemaEntity

```ts
const branch_schema = client.BranchSchema()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `json` | `Record<string, any>` | Yes | Branch schema represented as a structured JSON object, parallel to the SQL DDL in `sql`. |
| `sql` | `string` | No | Branch schema expressed as SQL DDL statements. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BranchSchema().load({ id: 'branch_schema_id', project_id: 'project_id', db_name: 'db_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchSchemaEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchSchemaCompareEntity

```ts
const branch_schema_compare = client.BranchSchemaCompare()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `compare_schema` | `/projects/{project_id}/branches/{branch_id}/compare_schema` | `client.BranchSchemaCompare().load({ $action: 'compare_schema', ... })` |

An action returns that action's OWN response, which is not necessarily a
BranchSchemaCompare record — check the API definition for its shape.

```ts
const result = await client.BranchSchemaCompare().load({
  $action: 'compare_schema',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BranchSchemaCompare().load({ id: 'branch_schema_compare_id', project_id: 'project_id', db_name: 'db_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchSchemaCompareEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchStorageEntity

```ts
const branch_storage = client.BranchStorage()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BranchStorage().load({ id: 'branch_storage_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchStorageEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BucketEntity

```ts
const bucket = client.Bucket()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `objects_by_prefix` | `/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects-by-prefix` | `client.Bucket().remove({ $action: 'objects_by_prefix', ... })` |

An action returns that action's OWN response, which is not necessarily a
Bucket record — check the API definition for its shape.

```ts
const result = await client.Bucket().remove({
  $action: 'objects_by_prefix',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Bucket().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  created_at: 'example_created_at',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Bucket().list({ branch_id: "example", project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Bucket().load({ branch_id: 'branch_id', bucket_id: 'bucket_id', object_key: 'object_key', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Bucket().remove({ branch_id: 'branch_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BucketEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BucketObjectsListEntity

```ts
const bucket_objects_list = client.BucketObjectsList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `etag` | `string` | Yes | The object's entity tag (content hash). |
| `key` | `string` | Yes | The full object key. |
| `last_modified` | `string` | Yes | The time the object was last modified. |
| `size` | `number` | Yes | The object size in bytes. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BucketObjectsList().list({ branch_id: "example", bucket_name: "example", project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BucketObjectsListEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConnectionUriEntity

```ts
const connection_uri = client.ConnectionUri()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uri` | `string` | Yes | The connection URI. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConnectionUri().load({ project_id: 'project_id', database_name: 'database_name', role_name: 'role_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConnectionUriEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConsumptionEntity

```ts
const consumption = client.Consumption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes | The Neon branch ID. |
| `periods` | `any[]` | Yes | Consumption history records for the branch, grouped by billing period. |
| `project_id` | `string` | Yes | The ID of the project that owns this branch. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Consumption().list({ from: "example", granularity: "example", to: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConsumptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateCredentialEntity

```ts
const create_credential = client.CreateCredential()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Free-form customer label for the credential. |
| `principal_type` | `string` | Yes | Principal type for the credential. |
| `scopes` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateCredential().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  principal_type: 'example_principal_type',
  scopes: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateCredentialEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CredentialEntity

```ts
const credential = client.Credential()
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
| `scopes` | `any[]` | Yes |  |
| `token_id` | `string` | Yes | Opaque credential id (e.g. |
| `token_id_short` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `reveal` | `/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/reveal` | `client.Credential().create({ $action: 'reveal', ... })` |
| `rotate` | `/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/rotate` | `client.Credential().create({ $action: 'rotate', ... })` |

An action returns that action's OWN response, which is not necessarily a
Credential record — check the API definition for its shape.

```ts
const result = await client.Credential().create({
  $action: 'reveal',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Credential().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Credential().list({ branch_id: "example", project_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Credential().remove({ branch_id: 'branch_id', id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CredentialEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CurrentUserInfoEntity

```ts
const current_user_info = client.CurrentUserInfo()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CurrentUserInfo().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CurrentUserInfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomDomainEntity

```ts
const custom_domain = client.CustomDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes | The custom domain to register (for example `dashboard.acme.com`). |
| `entity_id` | `string` | Yes | The target entity's identifier within the branch. |
| `entity_type` | `string` | Yes | The kind of branch entity to point the domain at. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomDomain().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  domain: 'example_domain',
  entity_id: 'example_entity_id',
  entity_type: 'example_entity_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataApiEntity

```ts
const data_api = client.DataApi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_default_grants` | `boolean` | No | Grant all permissions to the tables in the public schema to authenticated users |
| `auth_provider` | `string` | No | Authentication provider for the Neon Data API. |
| `available_schemas` | `any[]` | No | List of available database schemas (SubZero only) |
| `id` | `string` | No |  |
| `jwks_url` | `string` | No | URL of the JWKS endpoint used to verify JWTs for this Data API. |
| `jwt_audience` | `string` | No | Expected `aud` claim in incoming JWTs. |
| `provider_name` | `string` | No | Display name for the authentication provider. |
| `settings` | `Record<string, any>` | No | Configuration settings for the Data API (SubZero only) |
| `skip_auth_schema` | `boolean` | No | Skip creating the auth schema and RLS functions |
| `status` | `string` | Yes | The status of the Neon Data API deployment |
| `url` | `string` | Yes | The URL of the Neon Data API |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DataApi().create({
  branch_id: 'example_branch_id',
  id: 'example_id',
  project_id: 'example_project_id',
  status: 'example_status',
  url: 'example_url',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DataApi().load({ id: 'data_api_id', branch_id: 'branch_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DataApi().remove({ id: 'data_api_id', branch_id: 'branch_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DataApi().update({
  id: 'data_api_id',
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataApiEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseEntity

```ts
const database = client.Database()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes | The ID of the branch this database belongs to. |
| `created_at` | `string` | Yes | A timestamp indicating when the database was created |
| `database` | `Record<string, any>` | Yes | Configuration for the new Postgres database. |
| `id` | `number` | Yes | The database ID |
| `name` | `string` | Yes | The database name |
| `owner_name` | `string` | Yes | The name of role that owns the database |
| `updated_at` | `string` | Yes | A timestamp indicating when the database was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Database().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Database().list({ branch_id: "example", project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Database().load({ id: 'database_id', branch_id: 'branch_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Database().remove({ id: 'database_id', branch_id: 'branch_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Database().update({
  id: 'database_id',
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailProviderEntity

```ts
const email_provider = client.EmailProvider()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EmailProvider().load({ branch_id: 'branch_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailServerEntity

```ts
const email_server = client.EmailServer()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EmailServer().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailServerEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmptyEntity

```ts
const empty = client.Empty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination_org_id` | `string` | Yes | The destination organization identifier |
| `project_ids` | `any[]` | Yes | The list of projects ids to transfer. |
| `schedule` | `any[]` | Yes | List of schedule entries defining the backup frequency. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Empty().create({
  organization_id: 'example_organization_id',
  destination_org_id: 'example_destination_org_id',
  project_ids: [],
  schedule: [],
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Empty().remove({ organization_id: 'organization_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Empty().update({
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmptyEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EndpointEntity

```ts
const endpoint = client.Endpoint()
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
| `endpoint` | `Record<string, any>` | Yes | Configuration for the compute endpoint to create. |
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
| `settings` | `Record<string, any>` | Yes | A collection of settings for a compute endpoint |
| `started_at` | `string` | No | A timestamp indicating when the compute endpoint was last started |
| `suspend_timeout_seconds` | `number` | Yes | Scale-to-zero idle timeout, in seconds, before the compute suspends. |
| `suspended_at` | `string` | No | A timestamp indicating when the compute endpoint was last suspended |
| `type` | `string` | Yes | Compute endpoint type. |
| `updated_at` | `string` | Yes | A timestamp indicating when the compute endpoint was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Endpoint().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Endpoint().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Endpoint().load({ id: 'endpoint_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Endpoint().remove({ id: 'endpoint_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Endpoint().update({
  id: 'endpoint_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EndpointOperationEntity

```ts
const endpoint_operation = client.EndpointOperation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endpoint` | `Record<string, any>` | Yes | Compute endpoint created or retrieved, including its current lifecycle state. |
| `id` | `string` | No |  |
| `operations` | `any[]` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restart` | `/projects/{project_id}/endpoints/{endpoint_id}/restart` | `client.EndpointOperation().create({ $action: 'restart', ... })` |
| `start` | `/projects/{project_id}/endpoints/{endpoint_id}/start` | `client.EndpointOperation().create({ $action: 'start', ... })` |
| `suspend` | `/projects/{project_id}/endpoints/{endpoint_id}/suspend` | `client.EndpointOperation().create({ $action: 'suspend', ... })` |

An action returns that action's OWN response, which is not necessarily a
EndpointOperation record — check the API definition for its shape.

```ts
const result = await client.EndpointOperation().create({
  $action: 'restart',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EndpointOperation().create({
  id: 'example_id',
  project_id: 'example_project_id',
  endpoint: {},
  operations: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EndpointOperationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FunctionEntity

```ts
const function_ = client.Function()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Function().list({ branch_id: "example", project_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Function().remove({ branch_id: 'branch_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FunctionEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JwkEntity

```ts
const jwk = client.Jwk()
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
| `role_names` | `any[]` | No | Deprecated. |
| `skip_role_creation` | `boolean` | No | Deprecated. |
| `updated_at` | `string` | Yes | The date and time when the JWKS was last modified |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Jwk().create({
  project_id: 'example_project_id',
  created_at: 'example_created_at',
  id: 'example_id',
  jwks_url: 'example_jwks_url',
  provider_name: 'example_provider_name',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Jwk().list({ project_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Jwk().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JwkEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MaskingRuleEntity

```ts
const masking_rule = client.MaskingRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `column_name` | `string` | Yes | The name of the column to be masked |
| `database_name` | `string` | Yes | The name of the database containing the table to be masked |
| `masking_function` | `string` | No | The PostgreSQL Anonymizer masking function to apply. |
| `masking_rules` | `any[]` | Yes | List of masking rules for the branch |
| `masking_value` | `string` | No | A literal value to set on the column when masking. |
| `schema_name` | `string` | Yes | The name of the schema containing the table to be masked |
| `table_name` | `string` | Yes | The name of the table containing the column to be masked |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MaskingRule().list({ branch_id: "example", project_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.MaskingRule().update({
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MaskingRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemberEntity

```ts
const member = client.Member()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Member().load({ id: 'member_id', organization_id: 'organization_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Member().remove({ id: 'member_id', organization_id: 'organization_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Member().update({
  id: 'member_id',
  organization_id: 'organization_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthAllowLocalhostEntity

```ts
const neon_auth_allow_localhost = client.NeonAuthAllowLocalhost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_localhost` | `boolean` | Yes | Whether to allow localhost connections |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NeonAuthAllowLocalhost().load({ branch_id: 'branch_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NeonAuthAllowLocalhost().update({
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthAllowLocalhostEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthConfigEntity

```ts
const neon_auth_config = client.NeonAuthConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The application name used in auth emails and communications. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NeonAuthConfig().update({
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthCreateIntegrationEntity

```ts
const neon_auth_create_integration = client.NeonAuthCreateIntegration()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NeonAuthCreateIntegration().create({
  auth_provider: 'example_auth_provider',
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthCreateIntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthCreateNewUserEntity

```ts
const neon_auth_create_new_user = client.NeonAuthCreateNewUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `email` | `string` | Yes | Email address of the new Neon Auth user to create. |
| `name` | `string` | No | Display name for the new user. |
| `project_id` | `string` | Yes | The Neon project ID. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NeonAuthCreateNewUser().create({
  auth_provider: 'example_auth_provider',
  email: 'example_email',
  project_id: 'example_project_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthCreateNewUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthEmailAndPasswordConfigEntity

```ts
const neon_auth_email_and_password_config = client.NeonAuthEmailAndPasswordConfig()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NeonAuthEmailAndPasswordConfig().load({ branch_id: 'branch_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NeonAuthEmailAndPasswordConfig().update({
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthEmailAndPasswordConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthEmailServerConfigEntity

```ts
const neon_auth_email_server_config = client.NeonAuthEmailServerConfig()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NeonAuthEmailServerConfig().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthEmailServerConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthIntegrationEntity

```ts
const neon_auth_integration = client.NeonAuthIntegration()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NeonAuthIntegration().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NeonAuthIntegration().load({ branch_id: 'branch_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthIntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthMagicLinkConfigEntity

```ts
const neon_auth_magic_link_config = client.NeonAuthMagicLinkConfig()
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

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NeonAuthMagicLinkConfig().update({
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthMagicLinkConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthOauthProviderEntity

```ts
const neon_auth_oauth_provider = client.NeonAuthOauthProvider()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NeonAuthOauthProvider().create({
  project_id: 'example_project_id',
  id: 'example_id',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NeonAuthOauthProvider().list({ project_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NeonAuthOauthProvider().update({
  id: 'id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthOauthProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthOrganizationConfigEntity

```ts
const neon_auth_organization_config = client.NeonAuthOrganizationConfig()
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

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NeonAuthOrganizationConfig().update({
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthOrganizationConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthPhoneNumberConfigEntity

```ts
const neon_auth_phone_number_config = client.NeonAuthPhoneNumberConfig()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NeonAuthPhoneNumberConfig().load({ branch_id: 'branch_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NeonAuthPhoneNumberConfig().update({
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthPhoneNumberConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthPluginConfigEntity

```ts
const neon_auth_plugin_config = client.NeonAuthPluginConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `string` | No | Public identifier for the OAuth application, issued by the provider when the application is registered. |
| `client_secret` | `string` | No | OAuth client secret for the provider. |
| `id` | `string` | Yes | The OAuth provider's ID. |
| `type` | `string` | Yes | OAuth provider key type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NeonAuthPluginConfig().list({ branch_id: "example", project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthPluginConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthRedirectUriWhitelistDomainEntity

```ts
const neon_auth_redirect_uri_whitelist_domain = client.NeonAuthRedirectUriWhitelistDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `domain` | `string` | Yes | Allowed redirect URI domain for the auth provider. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NeonAuthRedirectUriWhitelistDomain().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthRedirectUriWhitelistDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthTransferAuthProviderProjectEntity

```ts
const neon_auth_transfer_auth_provider_project = client.NeonAuthTransferAuthProviderProject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_provider` | `string` | Yes | Authentication provider integrated with this Neon Auth configuration. |
| `project_id` | `string` | Yes | The Neon project ID. |
| `url` | `string` | Yes | URL for completing the process of ownership transfer |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NeonAuthTransferAuthProviderProject().create({
  auth_provider: 'example_auth_provider',
  project_id: 'example_project_id',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthTransferAuthProviderProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonAuthWebhookConfigEntity

```ts
const neon_auth_webhook_config = client.NeonAuthWebhookConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Whether the webhook is active. |
| `enabled_events` | `any[]` | No | Event types that trigger this webhook. |
| `timeout_seconds` | `number` | No | Maximum time, in seconds, to wait for a response from the webhook endpoint. |
| `webhook_url` | `string` | No | Destination URL that receives webhook event payloads. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NeonAuthWebhookConfig().list({ branch_id: "example", project_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NeonAuthWebhookConfig().update({
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonAuthWebhookConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonFunctionEntity

```ts
const neon_function = client.NeonFunction()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NeonFunction().load({ id: 'neon_function_id', branch_id: 'branch_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NeonFunction().update({
  id: 'neon_function_id',
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonFunctionEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NeonFunctionDeploymentEntity

```ts
const neon_function_deployment = client.NeonFunctionDeployment()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NeonFunctionDeployment().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  slug: 'example_slug',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NeonFunctionDeploymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OperationEntity

```ts
const operation = client.Operation()
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
| `operations` | `any[]` | Yes |  |
| `project_id` | `string` | Yes | The ID of the project this operation ran on. |
| `retry_at` | `string` | No | A timestamp indicating when the operation was last retried |
| `status` | `string` | Yes | Current lifecycle state of the operation. |
| `total_duration_ms` | `number` | Yes | The total duration of the operation in milliseconds |
| `updated_at` | `string` | Yes | A timestamp indicating when the operation status was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Operation().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  action: 'example_action',
  created_at: 'example_created_at',
  failures_count: 1,
  id: 'example_id',
  operations: [],
  status: 'example_status',
  total_duration_ms: 1,
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Operation().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Operation().load({ id: 'operation_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OperationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrgApiKeyCreateEntity

```ts
const org_api_key_create = client.OrgApiKeyCreate()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrgApiKeyCreate().create({
  organization_id: 'example_organization_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrgApiKeyCreateEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrgApiKeyRevokeEntity

```ts
const org_api_key_revoke = client.OrgApiKeyRevoke()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.OrgApiKeyRevoke().remove({ key_id: 1, organization_id: 'organization_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrgApiKeyRevokeEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrgApiKeysListResponseItemEntity

```ts
const org_api_keys_list_response_item = client.OrgApiKeysListResponseItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | A timestamp indicating when the API key was created |
| `created_by` | `Record<string, any>` | Yes | The user data of the user that created this API key. |
| `id` | `number` | Yes | The API key's unique numeric ID. |
| `last_used_at` | `string` | No | A timestamp indicating when the API was last used |
| `last_used_from_addr` | `string` | Yes | The IP address from which the API key was last used |
| `name` | `string` | Yes | The user-specified API key name |
| `project_id` | `string` | No | If set, the API key can access only this project |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrgApiKeysListResponseItem().list({ organization_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrgApiKeysListResponseItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationEntity

```ts
const organization = client.Organization()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `member` | `/organizations/{org_id}/members` | `client.Organization().list({ $action: 'member', ... })` |

An action returns that action's OWN response, which is not necessarily a
Organization record — check the API definition for its shape.

```ts
const result = await client.Organization().list({
  $action: 'member',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Organization().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Organization().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Organization().load({ id: 'organization_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Organization().remove({ id: 'organization_id', region_id: 'region_id', vpc_endpoint_id: 'vpc_endpoint_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationInvitationEntity

```ts
const organization_invitation = client.OrganizationInvitation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | Email of the invited user |
| `id` | `string` | Yes | The invitation ID. |
| `invitations` | `any[]` | Yes | List of pending invitations for the organization. |
| `invited_at` | `string` | Yes | Timestamp when the invitation was created |
| `invited_by` | `string` | Yes | UUID for the user_id who extended the invitation |
| `org_id` | `string` | Yes | Organization id as it is stored in Neon |
| `role` | `string` | Yes | Organization member's role. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationInvitation().create({
  id: 'example_id',
  email: 'example_email',
  invitations: [],
  invited_at: 'example_invited_at',
  invited_by: 'example_invited_by',
  org_id: 'example_org_id',
  role: 'example_role',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationInvitation().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationInvitationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PresignEntity

```ts
const presign = client.Presign()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_type` | `string` | No | The `Content-Type` to bind into the signed request. |
| `expires_at` | `string` | Yes | When the presigned URL stops being valid. |
| `expires_in_seconds` | `number` | No | How long the presigned URL stays valid, in seconds. |
| `headers` | `Record<string, any>` | Yes | Headers the caller MUST send verbatim on the request (e.g. |
| `method` | `string` | Yes | The HTTP method to use against `url`: `PUT` for an upload, `GET` for a download. |
| `operation` | `string` | Yes | The transfer direction. |
| `url` | `string` | Yes | The presigned URL. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Presign().create({
  branch_id: 'example_branch_id',
  bucket_id: 'example_bucket_id',
  object_key: 'example_object_key',
  project_id: 'example_project_id',
  expires_at: 'example_expires_at',
  headers: {},
  method: 'example_method',
  operation: 'example_operation',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PresignEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectEntity

```ts
const project = client.Project()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_time` | `number` | Yes | Control plane observed endpoints of this project being active this amount of wall-clock time. |
| `active_time_seconds` | `number` | Yes | Seconds. |
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
| `default_endpoint_settings` | `Record<string, any>` | No | A collection of settings for a Neon endpoint |
| `deleted_at` | `string` | No | A timestamp indicating when the project was deleted |
| `effective_project_permission` | `string` | No |  |
| `hipaa_enabled_at` | `string` | No | A timestamp indicating when HIPAA was enabled for this project |
| `history_retention_seconds` | `number` | Yes | The number of seconds to retain the shared history for all branches in this project. |
| `id` | `string` | Yes | The Neon project ID. |
| `label` | `string` | Yes | Human-readable name for the VPC endpoint assignment, used to identify it within the organization. |
| `maintenance_scheduled_for` | `string` | No | A timestamp indicating when project update begins. |
| `maintenance_starts_at` | `string` | No | A timestamp indicating when project maintenance begins. |
| `name` | `string` | Yes | The project name |
| `org_id` | `string` | No | The Neon organization ID. |
| `org_name` | `string` | No | Name of the organization that owns the project. |
| `owner` | `Record<string, any>` | Yes | Ownership details for the project, including the owner's name and email. |
| `owner_id` | `string` | Yes | ID of the organization that owns the project. |
| `pg_version` | `number` | Yes | The major Postgres version number. |
| `platform_id` | `string` | Yes | The cloud platform identifier. |
| `project` | `Record<string, any>` | Yes | Configuration for the new project, including name, region, and Postgres compute and storage settings. |
| `provisioner` | `string` | Yes | Compute provisioner. |
| `proxy_host` | `string` | Yes | The proxy host for the project. |
| `quota_reset_at` | `string` | No | Deprecated. |
| `recoverable_until` | `string` | No | A timestamp indicating the project will be recoverable until this date and time. |
| `region_id` | `string` | Yes | Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`). |
| `settings` | `Record<string, any>` | No | Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`. |
| `store_passwords` | `boolean` | Yes | Whether or not passwords are stored for roles in the Neon project. |
| `synthetic_storage_size` | `number` | No | The current space occupied by the project in Postgres storage, in bytes. |
| `updated_at` | `string` | Yes | A timestamp indicating when the project was last updated |
| `written_data_bytes` | `number` | Yes | Bytes. |

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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `branch_anonymized` | `/projects/{project_id}/branch_anonymized` | `client.Project().create({ $action: 'branch_anonymized', ... })` |
| `advisor` | `/projects/{project_id}/advisors` | `client.Project().list({ $action: 'advisor', ... })` |
| `shared` | `/projects/shared` | `client.Project().list({ $action: 'shared', ... })` |

An action returns that action's OWN response, which is not necessarily a
Project record — check the API definition for its shape.

```ts
const result = await client.Project().create({
  $action: 'branch_anonymized',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Project().create({
  id: 'example_id',
  vpc_endpoint_id: 'example_vpc_endpoint_id',
  active_time: 1,
  active_time_seconds: 1,
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
  label: 'example_label',
  name: 'example_name',
  owner: {},
  owner_id: 'example_owner_id',
  pg_version: 1,
  platform_id: 'example_platform_id',
  project: {},
  provisioner: 'example_provisioner',
  proxy_host: 'example_proxy_host',
  region_id: 'example_region_id',
  store_passwords: true,
  updated_at: 'example_updated_at',
  written_data_bytes: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Project().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Project().load({ id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Project().remove({ id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Project().update({
  id: 'project_id',
  request_id: 'request_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectBranchLogFieldEntity

```ts
const project_branch_log_field = client.ProjectBranchLogField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `any[]` | Yes | Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectBranchLogField().list({ branch_id: "example", project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectBranchLogFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectBranchLogFieldValueEntity

```ts
const project_branch_log_field_value = client.ProjectBranchLogFieldValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `is_truncated` | `boolean` | Yes | True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached. |
| `values` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectBranchLogFieldValue().list({ branch_id: "example", field_name: "example", project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectBranchLogFieldValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectBranchLogsQueryEntity

```ts
const project_branch_logs_query = client.ProjectBranchLogsQuery()
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
| `logs` | `any[]` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectBranchLogsQuery().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  is_truncated: true,
  logs: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectBranchLogsQueryEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectMemberEntity

```ts
const project_member = client.ProjectMember()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectMember().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectMemberRoleEntity

```ts
const project_member_role = client.ProjectMemberRole()
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

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectMemberRole().remove({ member_id: 'member_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProjectMemberRole().update({
  member_id: 'member_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectMemberRoleEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectPermissionEntity

```ts
const project_permission = client.ProjectPermission()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectPermission().create({
  id: 'example_id',
  email: 'example_email',
  granted_at: 'example_granted_at',
  granted_to_email: 'example_granted_to_email',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectPermission().list({ id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProjectPermission().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectRecoverEntity

```ts
const project_recover = client.ProjectRecover()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branches` | `any[]` | Yes | Branches in the project. |
| `id` | `string` | No |  |
| `project` | `Record<string, any>` | Yes | Full details of the project, including configuration, consumption metrics, and ownership. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectRecover().create({
  id: 'example_id',
  branches: [],
  project: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectRecoverEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectTransferRequestEntity

```ts
const project_transfer_request = client.ProjectTransferRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `ttl_seconds` | `number` | No | Number of seconds the transfer request stays valid before it expires. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectTransferRequest().create({
  id: 'example_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectTransferRequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RegionEntity

```ts
const region = client.Region()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Region().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RegionEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RoleEntity

```ts
const role = client.Role()
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
| `role` | `Record<string, any>` | Yes | Properties of the role to create. |
| `updated_at` | `string` | Yes | A timestamp indicating when the role was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Role().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  created_at: 'example_created_at',
  name: 'example_name',
  role: {},
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Role().list({ branch_id: "example", project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Role().load({ id: 'role_id', branch_id: 'branch_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Role().remove({ id: 'role_id', branch_id: 'branch_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RoleEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RoleOperationEntity

```ts
const role_operation = client.RoleOperation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `operations` | `any[]` | Yes |  |
| `role` | `Record<string, any>` | Yes | Role details for the requested database role. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RoleOperation().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  role_name: 'example_role_name',
  operations: [],
  role: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RoleOperationEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RolePasswordEntity

```ts
const role_password = client.RolePassword()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `password` | `string` | Yes | The role password |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RolePassword().load({ branch_id: 'branch_id', project_id: 'project_id', role_name: 'role_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RolePasswordEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SendNeonAuthTestEmailEntity

```ts
const send_neon_auth_test_email = client.SendNeonAuthTestEmail()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SendNeonAuthTestEmail().create({
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

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SendNeonAuthTestEmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SnapshotEntity

```ts
const snapshot = client.Snapshot()
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
| `operations` | `any[]` | Yes |  |
| `slug` | `string` | No | Snapshot resource ID, unique within the project. |
| `snapshot` | `Record<string, any>` | Yes | Fields to update on the snapshot. |
| `source_branch_id` | `string` | No | Branch from which this snapshot was created. |
| `timestamp` | `string` | No | Point in time captured by the snapshot, in RFC 3339 format (UTC). |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore` | `/projects/{project_id}/snapshots/{snapshot_id}/restore` | `client.Snapshot().create({ $action: 'restore', ... })` |

An action returns that action's OWN response, which is not necessarily a
Snapshot record — check the API definition for its shape.

```ts
const result = await client.Snapshot().create({
  $action: 'restore',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Snapshot().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  created_at: 'example_created_at',
  id: 'example_id',
  operations: [],
  snapshot: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Snapshot().list({ project_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Snapshot().remove({ id: 'id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Snapshot().update({
  id: 'id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SnapshotEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SpendingLimitEntity

```ts
const spending_limit = client.SpendingLimit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `spending_limit_cents` | `number` | Yes | Monthly spending cap in cents. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SpendingLimit().load({ organization_id: 'organization_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SpendingLimit().update({
  organization_id: 'organization_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SpendingLimitEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TriggerEntity

```ts
const trigger = client.Trigger()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `triggers` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Trigger().create({
  branch_id: 'example_branch_id',
  project_id: 'example_project_id',
  triggers: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Trigger().list({ branch_id: "example", project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Trigger().load({ id: 'trigger_id', branch_id: 'branch_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Trigger().update({
  id: 'trigger_id',
  branch_id: 'branch_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TriggerEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateNeonAuthUserRoleEntity

```ts
const update_neon_auth_user_role = client.UpdateNeonAuthUserRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | ID of the updated user |
| `roles` | `any[]` | Yes | Roles to assign to the user in the Neon Auth (Better Auth) directory. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateNeonAuthUserRole().update({
  branch_id: 'branch_id',
  project_id: 'project_id',
  user_id: 'user_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateNeonAuthUserRoleEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VpcEndpointEntity

```ts
const vpc_endpoint = client.VpcEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `example_restricted_projects` | `any[]` | Yes | A list of example projects that are restricted to use this VPC endpoint. |
| `id` | `string` | No |  |
| `label` | `string` | Yes | A descriptive label for the VPC endpoint |
| `num_restricted_projects` | `number` | Yes | The number of projects that are restricted to use this VPC endpoint. |
| `region_id` | `string` | Yes | The region where the VPC endpoint is located |
| `state` | `string` | Yes | The current state of the VPC endpoint. |
| `vpc_endpoint_id` | `string` | Yes | Cloud provider identifier for the VPC endpoint. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.VpcEndpoint().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.VpcEndpoint().load({ id: 'vpc_endpoint_id', organization_id: 'organization_id', region_id: 'region_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VpcEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `NeonSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new NeonSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

