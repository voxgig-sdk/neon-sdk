# Neon API

The Neon API is the management API for Neon. Use it to provision, configure, and manage resources such as projects, branches, databases, roles, functions, and object storage. See the [Neon API reference](https://neon.com/docs/reference/api) for details, and [Manage API keys](https://neon.com/docs/manage/api-keys/) to create and use API keys.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 75 entities and 179 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Anonymize](docs/api/anonymize.html)

Results: Anonymization started successfully.

SDK operations: `create`.

Key fields to recognise:

- `completed_at`: Timestamp indicating when the latest anonymization attempt completed. Populated even if the attempt failed.
- `masked_columns`: Number of columns that had masking rules applied during the attempt.
- `started_at`: Timestamp indicating when the latest anonymization attempt started.
- `triggered_by`: UUID of the user who triggered the latest anonymization attempt.
- `triggered_by_username`: Username of the user who triggered the latest anonymization attempt.

### [AnonymizedBranchStatus](docs/api/anonymized_branch_status.html)

Results: Anonymized branch status retrieved successfully.

SDK operations: `load`.

Key fields to recognise:

- `completed_at`: Timestamp indicating when the latest anonymization attempt completed. Populated even if the attempt failed.
- `masked_columns`: Number of columns that had masking rules applied during the attempt.
- `started_at`: Timestamp indicating when the latest anonymization attempt started.
- `triggered_by`: UUID of the user who triggered the latest anonymization attempt.
- `triggered_by_username`: Username of the user who triggered the latest anonymization attempt.

### [ApiKey](docs/api/api_key.html)

Results: Created an API key; Returned the API keys for the Neon account; Revoked the specified API key.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `created_at`: A timestamp indicating when the API key was created
- `created_by`: ID of the user who created this API key
- `id`: The API key&#39;s unique numeric ID. Distinct from the API key token (`key`).
- `key`: The generated 64-bit token required to access the Neon API
- `key_name`: A user-specified API key name.

### [Auth](docs/api/auth.html)

Results: Added the domain to the redirect_uri whitelist; Returned auth information about the current auth entity; Deleted the auth user; Deleted the OAuth provider from the project; Delete the integration with the authentication provider; Deleted the domain from the redirect_uri whitelist.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `account_id`: The ID of the account associated with this authentication record.
- `auth_method`: Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication. - `session_cookie`: Browser session cookie authentication. - `api_key_user`: API key scoped to a user account. - `api_key_org`: API key scoped to an organization. - `oauth`: OAuth-based authentication.

### [AuthLegacy](docs/api/auth_legacy.html)

Results: Added the domain to the redirect_uri whitelist; Delete the integration with the authentication provider; Deleted the auth user; Deleted the OAuth provider from the project; Deleted the domain from the redirect_uri whitelist.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `auth_provider`: Authentication provider integrated with this Neon Auth configuration.
- `domain`: URI to add to the redirect URI allowlist for the auth provider.

### [AvailablePreloadLibrary](docs/api/available_preload_library.html)

Results: Successfully returned available shared preload libraries.

SDK operations: `list`.

Key fields to recognise:

- `description`: Human-readable explanation of the library&#39;s purpose and behavior.
- `is_default`: Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints.
- `is_experimental`: Marks the library as experimental. Experimental libraries may be unstable, subject to breaking changes, or not recommended for production use.
- `library_name`: Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`).
- `version`: Version of the preload library.

### [BackupSchedule](docs/api/backup_schedule.html)

Results: Schedule of frequencies to create snapshots.

SDK operations: `list`.

Key fields to recognise:

- `day`: The day of the week or month to take the snapshot (if applicable).
- `frequency`: How often to take snapshots. Known values: `daily`, `weekly`, `monthly`.
- `hour`: The hour of the day to take the snapshot (if applicable).
- `month`: The month of the year to take the snapshot (if applicable).
- `retention_seconds`: How long to keep a scheduled snapshot (in seconds) before it&#39;s automatically deleted. The default is 3024000 seconds (35 days), which is also the maximum. Manually created snapshots have no maximum retention: set their `expires_at` instead.

### [Branch](docs/api/branch.html)

Results: Created a branch. An endpoint is only created if it was specified in the request.; Returned a list of branches for the specified project; Returned information about the specified branch; Returned a count of branches for the specified project; Deleted the specified branch; Returned if the branch doesn&#39;t exist or has already been deleted; Updated the specified branch.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `annotation`: Annotation data associated with the annotated object.
- `annotations`: Map of annotations keyed by resource identifier, where each value contains the annotation data for that resource.
- `branch`: Branch returned by the request.
- `branches`: Branches in the project. Each includes `id`, `name`, `current_state`, and `created_at`.
- `id`: The branch ID. This value is generated when a branch is created. A `branch_id` value has a `br` prefix. For example: `br-small-term-683261`.

### [BranchAiGateway](docs/api/branch_ai_gateway.html)

Results: AI Gateway is enabled for this branch.

SDK operations: `load`.

Key fields to recognise:

- `base_url`: The AI-gateway endpoint root for this branch, an OpenAI-compatible base URL. No dialect path is included; clients append the route (for example `/ai-gateway/openai/v1/responses`) themselves.
- `enabled`: Always `true` in 200 responses. Present for forward compatibility, mirroring BranchStorage.enabled.

### [BranchOperation](docs/api/branch_operation.html)

Results: Updated the specified branch.

SDK operations: `create`.

Key fields to recognise:

- `branch`: Branch returned by the request.
- `id`: The branch ID. This value is generated when a branch is created. A `branch_id` value has a `br` prefix. For example: `br-small-term-683261`.

### [BranchSchema](docs/api/branch_schema.html)

Results: Schema definition.

SDK operations: `load`.

Key fields to recognise:

- `tables`: Tables present in the branch schema.

### [BranchSchemaCompare](docs/api/branch_schema_compare.html)

Results: Difference between the schemas.

SDK operations: `load`.

### [BranchStorage](docs/api/branch_storage.html)

Results: Object storage is enabled for this branch.

SDK operations: `load`.

Key fields to recognise:

- `enabled`: Always `true` in 200 responses. Present for forward compatibility: a future version may add intermediate states; callers should treat `true` as &quot;object storage is usable for this branch right now.&quot;
- `force_path_style`: Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain). Always true: the wildcard TLS cert covers one level of subdomain (*.storage.&lt;suffix&gt;), so the branch ID occupies that label and the bucket name must travel in the request path, not as a further subdomain. Callers must set the S3 SDK&#39;s ForcePathStyle (or equivalent) to true.
- `region`: The AWS region for this branch&#39;s object storage. The platform normalizes the us-east-1 convention server-side: a non-empty region string is always returned in 200 responses (for example `&quot;us-east-1&quot;` for the S3 default region).
- `s3_endpoint`: The S3-compatible endpoint URL for this branch.

### [Bucket](docs/api/bucket.html)

Results: Bucket created; The list of buckets; The object&#39;s raw bytes, streamed verbatim. `Content-Length` and `ETag` headers are set from the stored object metadata; `X-Content-Type-Options` and `Content-Disposition` harden the browser against the caller-controlled bytes.; Object deleted; The prefix was soft-deleted. `deleted` is the number of objects tombstoned (may be 0 when nothing live matched on this branch).; Bucket deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `access_level`: Controls anonymous access to objects in the bucket. - `private`: all reads and writes require authenticated requests (default). - `public_read`: anonymous `GetObject`/`HeadObject` requests succeed; listing, writes, and deletes still require authenticated requests.
- `created_at`: When the bucket was created. For a bucket inherited from an ancestor branch this is the ancestor&#39;s creation time (the branch fork never re-creates the bucket).
- `name`: The bucket name (unique within a branch).

### [BucketObjectsList](docs/api/bucket_objects_list.html)

Results: The list of objects and folders.

SDK operations: `list`.

Key fields to recognise:

- `etag`: The object&#39;s entity tag (content hash).
- `key`: The full object key.
- `last_modified`: The time the object was last modified.
- `size`: The object size in bytes.

### [ConnectionUri](docs/api/connection_uri.html)

Results: Returned the connection URI.

SDK operations: `load`.

Key fields to recognise:

- `uri`: The connection URI.

### [Consumption](docs/api/consumption.html)

Results: Branch consumption metrics for the Neon account.; Returned project consumption metrics for the Neon account; Project consumption metrics for the Neon account.

SDK operations: `list`.

Key fields to recognise:

- `branches`: Per-branch consumption history records returned for the requested time range.
- `pagination`: Cursor-based pagination. The `cursor` value reflects the endpoint&#39;s sort field (for example, an ID or timestamp), so pass it back unchanged.
- `projects`: Per-project consumption history records included in the response.

### [CreateCredential](docs/api/create_credential.html)

Results: Credential issued, secrets shown once.

SDK operations: `create`.

Key fields to recognise:

- `name`: Customer-supplied label, echoed back from the request. Absent when not provided.
- `principal_type`: Principal type for the credential.

### [Credential](docs/api/credential.html)

Results: The credential&#39;s live secrets.; Credential rotated, new secrets shown once.; The list of credentials; Credential revoked.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `created_at`: When the credential was originally issued. Rotation replaces the secrets in place and does not reset this.
- `expires_at`: When the credential expires; absent means never expires. Rotation does not extend it.
- `name`: Customer-supplied label carried on the credential. Absent when none was set at issuance.
- `principal_type`: Always `user`: only customer-managed credentials are rotatable through this endpoint.
- `token_id`: Opaque credential id (for example nak_live_&lt;32hex&gt;).

### [CurrentUserInfo](docs/api/current_user_info.html)

Results: Returned information about the current user.

SDK operations: `list`.

Key fields to recognise:

- `email`: Email address of the authenticated user.
- `image`: URL of the user&#39;s profile avatar image.
- `login`: Deprecated. Use the `email` field.
- `name`: First name of the current user.
- `provider`: Identity provider id from keycloak

### [CustomDomain](docs/api/custom_domain.html)

Results: The registered custom domain.

SDK operations: `create`.

Key fields to recognise:

- `domain`: The registered custom domain (normalized, lowercase).
- `entity_id`: The target entity&#39;s identifier within the branch. For `function` this is the function slug.
- `entity_type`: The kind of branch entity the domain targets. Possible values: `function` (v1 supports only `function`). Not an `enum`: new values may ship in later spec versions, treat any undocumented value as unknown.

### [DataApi](docs/api/data_api.html)

Results: Creates a new app; Returns the Neon Data API for the specified branch; Deleted the Neon Data API for the specified branch; Updated the Neon Data API configuration and refreshed the schema cache.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `add_default_grants`: Grant all permissions to the tables in the public schema to authenticated users
- `auth_provider`: Authentication provider for the Neon Data API.
- `available_schemas`: List of available database schemas (SubZero only)
- `jwks_url`: URL of the JWKS endpoint used to verify JWTs for this Data API.
- `jwt_audience`: Expected `aud` claim in incoming JWTs.

### [Database](docs/api/database.html)

Results: Created a database in the specified branch; Returned a list of databases of the specified branch; Returned the database details; Deleted the specified database; Returned if the database doesn&#39;t exist or has already been deleted; Updated the database.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `branch_id`: The ID of the branch this database belongs to.
- `created_at`: A timestamp indicating when the database was created
- `database`: Database object returned by the operation.
- `id`: The database ID
- `name`: The database name

### [EmailProvider](docs/api/email_provider.html)

Results: Returns the email provider configuration for the Neon Auth.

SDK operations: `load`.

### [EmailServer](docs/api/email_server.html)

Results: Returns the email server configuration for the Neon Auth.

SDK operations: `load`.

### [Empty](docs/api/empty.html)

Results: Projects successfully transferred from organization to organization; Projects successfully transferred from personal account to organization; The spending limit has been cleared.; Empty response.

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `destination_org_id`: The destination organization identifier
- `project_ids`: The list of projects ids to transfer.
- `schedule`: List of schedule entries defining the backup frequency.

### [Endpoint](docs/api/endpoint.html)

Results: Created a compute endpoint; Returned a list of endpoints for the specified branch; Returned a list of endpoints for the specified project; Returned information about the specified endpoint; Deleted the specified compute endpoint; Returned if the endpoint doesn&#39;t exist or has already been deleted; Updated the specified compute endpoint.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `autoscaling_limit_max_cu`: The maximum number of Compute Units
- `autoscaling_limit_min_cu`: The minimum number of Compute Units
- `branch_id`: The ID of the branch this compute endpoint belongs to.
- `compute_release_version`: Attached compute&#39;s release version number.
- `created_at`: A timestamp indicating when the compute endpoint was created

### [EndpointOperation](docs/api/endpoint_operation.html)

Results: Restarted endpoint; Started the specified compute endpoint; Suspended the specified endpoint.

SDK operations: `create`.

Key fields to recognise:

- `endpoint`: Compute endpoint created or retrieved, including its current lifecycle state.
- `id`: The compute endpoint ID. Compute endpoint IDs have an `ep-` prefix. For example: `ep-little-smoke-851426`

### [Function](docs/api/function.html)

Results: The list of custom domains; The list of functions; Custom domain deleted; Function deleted; Trigger deleted.

SDK operations: `list`, `remove`.

Key fields to recognise:

- `id`: Opaque, stable function identifier.
- `pagination`: To paginate the response, issue an initial request with `limit` value. Then, add the value returned in the response `.pagination.next` attribute into the request under the `cursor` query parameter to the subsequent request to retrieve next page in pagination. The contents on cursor `next` are opaque, clients are not expected to make any assumptions on the format of the data inside the cursor.

### [Jwk](docs/api/jwk.html)

Results: The JWKS URL was added to the project&#39;s authentication connections; The JWKS URLs available for the project; Deleted a JWKS URL from the project.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `branch_id`: The Neon branch ID. Returned as `id` from `GET /projects/&#123;project_id&#125;/branches`.
- `created_at`: The date and time when the JWKS was created
- `id`: The JWKS configuration&#39;s ID.
- `jwks_url`: URL of the provider&#39;s JWKS endpoint used to verify JWTs.
- `jwt_audience`: Expected JWT `aud` claim value configured for this JWKS.

### [MaskingRule](docs/api/masking_rule.html)

Results: Masking rules retrieved successfully; Masking rules updated successfully.

SDK operations: `list`, `update`.

Key fields to recognise:

- `column_name`: The name of the column to be masked
- `database_name`: The name of the database containing the table to be masked
- `masking_function`: The PostgreSQL Anonymizer masking function to apply. Can be a predefined function (for example, &#39;anon.random_string(10)&#39;, &#39;anon.fake_email()&#39;) or a custom function definition (for example, &#39;anon.hash(column_name)&#39;)
- `masking_rules`: List of masking rules for the branch
- `masking_value`: A literal value to set on the column when masking.

### [Member](docs/api/member.html)

Results: Returned information about the organization member; Removed organization member; The updated organization member.

SDK operations: `load`, `remove`, `update`.

Key fields to recognise:

- `id`: The organization member&#39;s ID.
- `joined_at`: Timestamp when the user joined the organization.
- `org_id`: The Neon organization ID. Returned as `id` from `GET /users/me/organizations`.
- `role`: Organization member&#39;s role. `admin`: full administrative access. `editor` (and its legacy alias `member`): standard access governed by project permissions. `viewer` and `collaborator`: additional scoped project roles. Some values may not be available for all organizations.
- `user_id`: The Neon user ID.

### [NeonAuthAllowLocalhost](docs/api/neon_auth_allow_localhost.html)

Results: The allow localhost configuration; Updated the allow localhost configuration.

SDK operations: `load`, `update`.

Key fields to recognise:

- `allow_localhost`: Whether to allow localhost connections

### [NeonAuthConfig](docs/api/neon_auth_config.html)

Results: The auth configuration has been updated.

SDK operations: `update`.

Key fields to recognise:

- `name`: The application name used in auth emails and communications.

### [NeonAuthCreateIntegration](docs/api/neon_auth_create_integration.html)

Results: Enables Neon Auth integration for the branch; Creates Neon Auth integration; Creates Auth Provider SDK keys.

SDK operations: `create`.

Key fields to recognise:

- `auth_provider`: Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.
- `branch_id`: The Neon branch ID.
- `database_name`: Name of the database to enable Neon Auth on.
- `project_id`: The Neon project ID.
- `role_name`: Deprecated.

### [NeonAuthCreateNewUser](docs/api/neon_auth_create_new_user.html)

Results: Creates new user.

SDK operations: `create`.

Key fields to recognise:

- `auth_provider`: Authentication provider integrated with this Neon Auth configuration.
- `email`: Email address of the new Neon Auth user to create.
- `name`: Display name for the new user.
- `project_id`: The Neon project ID.

### [NeonAuthEmailAndPasswordConfig](docs/api/neon_auth_email_and_password_config.html)

Results: Returns the email and password configuration for Neon Auth; The email and password configuration has been updated.

SDK operations: `load`, `update`.

Key fields to recognise:

- `auto_sign_in_after_verification`: Whether users are automatically signed in after verifying their email
- `disable_sign_up`: Whether to disable new user sign ups
- `email_verification_method`: Controls how email addresses are verified during sign-up or sign-in. - `link`: sends a verification link to the user&#39;s email address - `otp`: sends a one-time password to the user&#39;s email address
- `enabled`: Whether email and password authentication is enabled
- `require_email_verification`: Whether email verification is required before users can sign in

### [NeonAuthEmailServerConfig](docs/api/neon_auth_email_server_config.html)

Results: The email provider configuration has been updated; The OAuth provider has been added to the project.

SDK operations: `update`.

### [NeonAuthIntegration](docs/api/neon_auth_integration.html)

Results: Return management API keys metadata; Fetched the details of the Neon Auth integration for the specified branch.

SDK operations: `list`, `load`.

Key fields to recognise:

- `auth_provider`: Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.
- `auth_provider_project_id`: Project identifier assigned by the auth provider for this integration.
- `base_url`: Base URL of the Neon Auth service endpoint for this integration. Injected into the project environment as `NEON_AUTH_BASE_URL`.
- `branch_id`: The Neon branch ID. Returned as `id` from `GET /projects/&#123;project_id&#125;/branches`.
- `created_at`: Timestamp when the Neon Auth integration was created, in RFC 3339 format (UTC).

### [NeonAuthMagicLinkConfig](docs/api/neon_auth_magic_link_config.html)

Results: The magic link plugin configuration has been updated.

SDK operations: `update`.

Key fields to recognise:

- `disable_sign_up`: Whether to disable sign-up via magic link.
- `enabled`: Whether the magic link plugin is enabled.
- `expires_in`: Minutes until the magic link expires.

### [NeonAuthOauthProvider](docs/api/neon_auth_oauth_provider.html)

Results: The OAuth provider has been added to the project; Returns the OAuth providers for the Neon Auth.

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `client_id`: Public identifier for the OAuth application, issued by the provider when the application is registered.
- `client_secret`: OAuth client secret for the provider.
- `id`: The OAuth provider&#39;s ID.
- `microsoft_tenant_id`: Tenant ID for the Microsoft OAuth provider.
- `type`: OAuth provider key type. `standard` uses your own OAuth credentials. `shared` uses Neon-managed keys intended for development only; they display Neon branding on the OAuth consent screen and must not be used in production.

### [NeonAuthOrganizationConfig](docs/api/neon_auth_organization_config.html)

Results: The organization plugin configuration has been updated.

SDK operations: `update`.

Key fields to recognise:

- `creator_role`: Role of the organization&#39;s creator. `owner`: full control, including deleting the org and transferring ownership. `admin`: manage members and settings only.
- `enabled`: Whether the organization plugin is enabled.
- `membership_limit`: Maximum number of members per organization.
- `organization_limit`: Maximum organizations a user can belong to (created or joined). At the limit, the user cannot create or join more.
- `send_invitation_email`: Whether to send invitation emails when inviting members to an organization.

### [NeonAuthPhoneNumberConfig](docs/api/neon_auth_phone_number_config.html)

Results: Returns the phone number plugin configuration; The phone number plugin configuration has been updated.

SDK operations: `load`, `update`.

Key fields to recognise:

- `enabled`: Whether the phone number plugin is enabled.
- `otp_expires_in`: Time in seconds before the OTP expires

### [NeonAuthPluginConfig](docs/api/neon_auth_plugin_config.html)

Results: Returns all plugin configurations.

SDK operations: `list`.

Key fields to recognise:

- `client_id`: Public identifier for the OAuth application, issued by the provider when the application is registered.
- `client_secret`: OAuth client secret for the provider.
- `id`: The OAuth provider&#39;s ID.
- `type`: OAuth provider key type. `standard` uses your own OAuth credentials. `shared` uses Neon-managed keys intended for development only; they display Neon branding on the OAuth consent screen and must not be used in production.

### [NeonAuthRedirectUriWhitelistDomain](docs/api/neon_auth_redirect_uri_whitelist_domain.html)

Results: Returned the domains in the redirect_uri whitelist.

SDK operations: `list`.

Key fields to recognise:

- `auth_provider`: Authentication provider integrated with this Neon Auth configuration. `better_auth` integrates with Better Auth (the current, recommended provider). `stack` integrates with Stack Auth (deprecated). `mock` is a simulated provider for local development and testing only.
- `domain`: Allowed redirect URI domain for the auth provider.

### [NeonAuthTransferAuthProviderProject](docs/api/neon_auth_transfer_auth_provider_project.html)

Results: Transfer initiated. Follow the URL to complete the process in your auth provider&#39;s UI.

SDK operations: `create`.

Key fields to recognise:

- `auth_provider`: Authentication provider integrated with this Neon Auth configuration.
- `project_id`: The Neon project ID.
- `url`: URL for completing the process of ownership transfer

### [NeonAuthWebhookConfig](docs/api/neon_auth_webhook_config.html)

Results: Returns webhook configuration for Neon Auth; Returns the updated webhook configuration.

SDK operations: `list`, `update`.

Key fields to recognise:

- `enabled`: Whether the webhook is active.
- `enabled_events`: Event types that trigger this webhook. Covers user lifecycle, email/OTP delivery, organization invitations, and phone verification events; see the enum for exact values.
- `timeout_seconds`: Maximum time, in seconds, to wait for a response from the webhook endpoint.
- `webhook_url`: Destination URL that receives webhook event payloads.

### [NeonFunction](docs/api/neon_function.html)

Results: The function details; The updated function.

SDK operations: `load`, `update`.

Key fields to recognise:

- `active_deployment`: The most recent deployment whose build completed successfully. This is the deployment that serves invocations. Omitted until a deployment succeeds.
- `current_deployment`: The most recent deployment, regardless of build status. It may still be building or it may have failed. Omitted until the first deployment is created.
- `id`: Opaque, stable function identifier.
- `invocation_url`: URL at which the function is invoked. The host carries `&lt;branch_id&gt;-&lt;slug&gt;` as its first DNS label under a Neon-managed functions domain, and the URL ends with a trailing slash so paths concatenate onto it. Empty string when the function has no servable invoke host (for example a deployment without an invocation front-door).
- `name`: Free-form display name.

### [NeonFunctionDeployment](docs/api/neon_function_deployment.html)

Results: The created deployment.

SDK operations: `create`.

### [Operation](docs/api/operation.html)

Results: OK; Returned a list of operations; Returned details for the specified operation.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `action`: The action performed by the operation
- `branch_id`: The ID of the branch this operation ran on.
- `created_at`: A timestamp indicating when the operation was created
- `endpoint_id`: The ID of the compute endpoint this operation ran on.
- `error`: Human-readable message describing why the operation failed.

### [OrgApiKeyCreate](docs/api/org_api_key_create.html)

Results: Created an organization API key.

SDK operations: `create`.

Key fields to recognise:

- `created_at`: A timestamp indicating when the API key was created
- `created_by`: ID of the user who created this API key
- `id`: The API key&#39;s unique numeric ID. Distinct from the API key token (`key`).
- `key`: The generated 64-bit token required to access the Neon API
- `name`: The user-specified API key name

### [OrgApiKeyRevoke](docs/api/org_api_key_revoke.html)

Results: Revoked the specified organization API key.

SDK operations: `remove`.

### [OrgApiKeysListResponseItem](docs/api/org_api_keys_list_response_item.html)

Results: Returned the API keys for the specified organization.

SDK operations: `list`.

Key fields to recognise:

- `created_at`: A timestamp indicating when the API key was created
- `created_by`: The user data of the user that created this API key.
- `id`: The API key&#39;s unique numeric ID. Distinct from the API key token (`key`).
- `last_used_at`: A timestamp indicating when the API was last used
- `last_used_from_addr`: The IP address from which the API key was last used

### [Organization](docs/api/organization.html)

Results: Assigned the VPC endpoint to the specified Neon organization; Returned information about organization members; Returned information about the current user organizations; Returned information about the organization; Deleted the VPC endpoint from the specified Neon organization.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `allow_hipaa_projects`: If true, allow account to mark projects as HIPAA
- `created_at`: A timestamp indicting when the organization was created
- `handle`: URL-safe identifier for the organization, used in API paths. Distinct from the display name.
- `id`: The organization member&#39;s ID.
- `label`: Human-readable name for the VPC endpoint assignment, used to identify it within the organization.

### [OrganizationInvitation](docs/api/organization_invitation.html)

Results: The created organization invitation; Returned information about the organization invitations.

SDK operations: `create`, `list`.

Key fields to recognise:

- `email`: Email of the invited user
- `id`: The invitation ID.
- `invitations`: List of pending invitations for the organization.
- `invited_at`: Timestamp when the invitation was created
- `invited_by`: UUID for the user_id who extended the invitation

### [Presign](docs/api/presign.html)

Results: A presigned URL valid until `expires_at`. The caller transfers the object bytes by issuing `method url` with the returned `headers`.

SDK operations: `create`.

Key fields to recognise:

- `content_type`: The `Content-Type` to bind into the signed request.
- `expires_in_seconds`: How long the presigned URL stays valid, in seconds.
- `operation`: The transfer direction.

### [Project](docs/api/project.html)

Results: Configured the specified VPC endpoint as a restriction for the specified project.; Created a branch. An endpoint is only created if it was specified in the request.; Created a project. The project includes a connection URI with a database, password, and role. At least one non-protected role is created with a password. Wait until the operations are finished before attempting to connect to a project database.; Returned a list of projects for the Neon account; Successfully retrieved security advisor issues; Returned a list of shared projects for the Neon account; Returned information about the specified project; Updated the specified project; Removed the VPC endpoint restriction from the specified Neon project; Deleted the specified project; Project transfer request accepted successfully.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `active_time_seconds`: Total time this branch&#39;s compute has been active during the current billing period, in seconds (not weighted by compute size). Distinct from `compute_time_seconds`, which is CU-weighted.
- `applications`: Map of project IDs to their installed applications. Each key is a project ID; each value is an array of application types (for example, `vercel`, `github`).
- `branch_logical_size_limit`: The logical size limit for a branch. The value is in MiB.
- `branch_logical_size_limit_bytes`: The logical size limit for a branch. The value is in B.
- `compute_last_active_at`: The most recent time when any endpoint of this project was active. Omitted when observed no activity for endpoints of this project.

### [ProjectBranchLogField](docs/api/project_branch_log_field.html)

Results: Log fields available for value discovery on this branch.

SDK operations: `list`.

Key fields to recognise:

- `fields`: Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint. Computed per branch rather than fixed by this specification, so clients should not assume a particular set.

### [ProjectBranchLogFieldValue](docs/api/project_branch_log_field_value.html)

Results: Distinct values for the requested log field.

SDK operations: `list`.

Key fields to recognise:

- `is_truncated`: True when more distinct values exist than were returned, because either the requested `limit` or the server&#39;s own scan cap was reached. A caller that filters on a partial list is choosing from an arbitrary subset, so narrow `since` or `source` and ask again when this is `true`.

### [ProjectBranchLogsQuery](docs/api/project_branch_logs_query.html)

Results: Logs matching the supplied filters.

SDK operations: `create`.

Key fields to recognise:

- `body_contains`: Match records whose rendered `message` contains this case-sensitive substring.
- `cursor`: Opaque pagination cursor returned as `next_cursor` by a previous call.
- `end_time`: Exclusive end of the query window.
- `is_truncated`: True when more records matched than were returned.
- `limit`: Maximum number of log records to return per page.

### [ProjectMember](docs/api/project_member.html)

Results: Returned the org members and their project roles.

SDK operations: `list`.

Key fields to recognise:

- `effective_project_permission`: The caller&#39;s effective permission for a project when per-project permissions are enabled. `VIEWER` grants read access, `EDITOR` adds update access, and `ADMIN` grants full management. Omitted for personal projects, flag-off organizations, and non-user subjects.
- `email`: Email address of the user who has been granted access to the project.
- `explicit_project_permission`: The caller&#39;s effective permission for a project when per-project permissions are enabled. `VIEWER` grants read access, `EDITOR` adds update access, and `ADMIN` grants full management. Omitted for personal projects, flag-off organizations, and non-user subjects.
- `grant_source`: How a member&#39;s project access is granted.
- `member_id`: The organization member ID.

### [ProjectMemberRole](docs/api/project_member_role.html)

Results: Role removed, or no-op if no explicit row existed; Role set or updated.

SDK operations: `remove`, `update`.

Key fields to recognise:

- `credential_rotation_recommended`: Hint that database credentials may need rotation after the role change.
- `effective_project_permission`: The caller&#39;s effective permission for a project when per-project permissions are enabled. `VIEWER` grants read access, `EDITOR` adds update access, and `ADMIN` grants full management. Omitted for personal projects, flag-off organizations, and non-user subjects.
- `email`: Email address of the user who has been granted access to the project.
- `explicit_project_permission`: The caller&#39;s effective permission for a project when per-project permissions are enabled. `VIEWER` grants read access, `EDITOR` adds update access, and `ADMIN` grants full management. Omitted for personal projects, flag-off organizations, and non-user subjects.
- `name`: The user&#39;s display name.

### [ProjectPermission](docs/api/project_permission.html)

Results: Granted project access; Returned project access details; Revoked project access.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `email`: Email address of the user to grant project access to.
- `granted_at`: Timestamp when the permission was granted.
- `granted_to_email`: Email address of the user who has been granted access to the project.
- `id`: The project permission&#39;s ID.
- `revoked_at`: Timestamp when the permission was revoked. Null if the permission is still active.

### [ProjectRecover](docs/api/project_recover.html)

Results: Returned the recovered project.

SDK operations: `create`.

Key fields to recognise:

- `branches`: Branches in the project. Each includes `id`, `name`, `current_state`, and `created_at`.
- `id`: The Neon project ID. Use as the `project_id` path parameter in other endpoints.
- `project`: Full details of the project, including configuration, consumption metrics, and ownership.

### [ProjectTransferRequest](docs/api/project_transfer_request.html)

Results: Project transfer request created successfully.

SDK operations: `create`.

Key fields to recognise:

- `id`: The unique identifier for the transfer request
- `ttl_seconds`: Number of seconds the transfer request stays valid before it expires.

### [Region](docs/api/region.html)

Results: The list of active regions.

SDK operations: `list`.

Key fields to recognise:

- `default`: True if this region is selected by default when no region is specified during project creation.
- `geo_lat`: The geographical latitude (approximate) for the region. Empty if unknown.
- `geo_long`: The geographical longitude (approximate) for the region. Empty if unknown.
- `name`: A short description of the region.
- `region_id`: Cloud region where the resource&#39;s Postgres compute and storage reside (for example, `aws-us-east-1`). Valid values are returned by `GET /regions`.

### [Role](docs/api/role.html)

Results: Created a role in the specified branch; Returned a list of roles from the specified branch.; Returned details for the specified role; Deleted the specified role from the branch; Returned if the role doesn&#39;t exist or has already been deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `authentication_method`: Authentication method configured for this role: `password`, `oauth`, or `no_login`.
- `branch_id`: The ID of the branch this role belongs to.
- `created_at`: A timestamp indicating when the role was created
- `id`: The operation ID
- `name`: Postgres role name within the branch.

### [RoleOperation](docs/api/role_operation.html)

Results: Reset the password for the specified role.

SDK operations: `create`.

Key fields to recognise:

- `role`: Role details for the requested database role. The `password` field is included in the response when a role is created or its password is reset, and is not returned in subsequent read requests. Store it securely at that time.

### [RolePassword](docs/api/role_password.html)

Results: Returned password for the specified role.

SDK operations: `load`.

Key fields to recognise:

- `password`: The role password

### [SendNeonAuthTestEmail](docs/api/send_neon_auth_test_email.html)

Results: Response with the result of the test email send.

SDK operations: `create`.

Key fields to recognise:

- `error_message`: The error message from the email server.
- `host`: Hostname of the email server.
- `password`: Password for authenticating with the SMTP server.
- `port`: TCP port of the SMTP server.
- `recipient_email`: The email address to send the test email to.

### [Snapshot](docs/api/snapshot.html)

Results: Successfully created the snapshot; Branch restored from snapshot and its operations.; Projects snapshots; OK; Successfully updated the snapshot.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `created_at`: Timestamp when the snapshot was created, in RFC 3339 format (UTC).
- `diff_size`: Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage. When absent, either the incremental size has not been calculated yet and the snapshot is not being charged, or the snapshot is charged at full logical size (in that case `full_size` is set).
- `expires_at`: RFC 3339 timestamp when the snapshot expires and is eligible for deletion. Null if the snapshot does not have an expiry.
- `full_size`: Full logical size of the snapshot in bytes at the time it was taken. When absent, the logical size has not been calculated yet and the snapshot is not being charged. When present, a value of 0 means the snapshot is not being charged.
- `id`: The snapshot ID.

### [SpendingLimit](docs/api/spending_limit.html)

Results: The organization&#39;s current spending limit.; The updated spending limit value.

SDK operations: `load`, `update`.

Key fields to recognise:

- `spending_limit_cents`: Monthly spending cap in cents. `null` indicates that no limit is currently configured.

### [Trigger](docs/api/trigger.html)

Results: Trigger created; The branch-effective trigger list; The trigger; The updated trigger.

SDK operations: `create`, `list`, `load`, `update`.

### [UpdateNeonAuthUserRole](docs/api/update_neon_auth_user_role.html)

Results: Updated the auth user role.

SDK operations: `update`.

Key fields to recognise:

- `id`: ID of the updated user
- `roles`: Roles to assign to the user in the Neon Auth (Better Auth) directory.

### [VpcEndpoint](docs/api/vpc_endpoint.html)

Results: The list of configured VPC endpoint IDs for the specified organization; The list of configured VPC endpoint IDs for the specified organization across all regions; Returned VPC endpoint restrictions for the specified project; Returned the current status and configuration details of the specified VPC endpoint.

SDK operations: `list`, `load`.

Key fields to recognise:

- `example_restricted_projects`: A list of example projects that are restricted to use this VPC endpoint. There are at most 3 projects in the list, even if more projects are restricted.
- `label`: A descriptive label for the VPC endpoint
- `num_restricted_projects`: The number of projects that are restricted to use this VPC endpoint.
- `region_id`: The region where the VPC endpoint is located
- `state`: The current state of the VPC endpoint. `new` means the endpoint has just been configured and is pending acceptance by Neon. `accepted` means the VPC connection has been accepted by Neon.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Anonymize](docs/api/anonymize.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/anonymize` | Required |
| [AnonymizedBranchStatus](docs/api/anonymized_branch_status.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/anonymized_status` | Required |
| [ApiKey](docs/api/api_key.html) | `create` | `POST /api_keys` | Required |
| [ApiKey](docs/api/api_key.html) | `list` | `GET /api_keys` | Required |
| [ApiKey](docs/api/api_key.html) | `remove` | `DELETE /api_keys/{key_id}` | Required |
| [Auth](docs/api/auth.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/auth/domains` | Required |
| [Auth](docs/api/auth.html) | `load` | `GET /auth` | Required |
| [Auth](docs/api/auth.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}` | Required |
| [Auth](docs/api/auth.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}` | Required |
| [Auth](docs/api/auth.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/auth` | Required |
| [Auth](docs/api/auth.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/auth/domains` | Required |
| [AuthLegacy](docs/api/auth_legacy.html) | `create` | `POST /projects/{project_id}/auth/domains` | Required |
| [AuthLegacy](docs/api/auth_legacy.html) | `remove` | `DELETE /projects/{project_id}/auth/integration/{auth_provider}` | Required |
| [AuthLegacy](docs/api/auth_legacy.html) | `remove` | `DELETE /projects/{project_id}/auth/users/{auth_user_id}` | Required |
| [AuthLegacy](docs/api/auth_legacy.html) | `remove` | `DELETE /projects/{project_id}/auth/oauth_providers/{oauth_provider_id}` | Required |
| [AuthLegacy](docs/api/auth_legacy.html) | `remove` | `DELETE /projects/{project_id}/auth/domains` | Required |
| [AvailablePreloadLibrary](docs/api/available_preload_library.html) | `list` | `GET /projects/{project_id}/available_preload_libraries` | Required |
| [BackupSchedule](docs/api/backup_schedule.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/backup_schedule` | Required |
| [Branch](docs/api/branch.html) | `create` | `POST /projects/{project_id}/branches` | Required |
| [Branch](docs/api/branch.html) | `list` | `GET /projects/{project_id}/branches` | Required |
| [Branch](docs/api/branch.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}` | Required |
| [Branch](docs/api/branch.html) | `load` | `GET /projects/{project_id}/branches/count` | Required |
| [Branch](docs/api/branch.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}` | Required |
| [Branch](docs/api/branch.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}` | Required |
| [BranchAiGateway](docs/api/branch_ai_gateway.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/ai_gateway` | Required |
| [BranchOperation](docs/api/branch_operation.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/restore` | Required |
| [BranchOperation](docs/api/branch_operation.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/set_as_default` | Required |
| [BranchSchema](docs/api/branch_schema.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/schema` | Required |
| [BranchSchemaCompare](docs/api/branch_schema_compare.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/compare_schema` | Required |
| [BranchStorage](docs/api/branch_storage.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/storage` | Required |
| [Bucket](docs/api/bucket.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/buckets` | Required |
| [Bucket](docs/api/bucket.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/buckets` | Required |
| [Bucket](docs/api/bucket.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/download` | Required |
| [Bucket](docs/api/bucket.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}` | Required |
| [Bucket](docs/api/bucket.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects-by-prefix` | Required |
| [Bucket](docs/api/bucket.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}` | Required |
| [BucketObjectsList](docs/api/bucket_objects_list.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects` | Required |
| [ConnectionUri](docs/api/connection_uri.html) | `load` | `GET /projects/{project_id}/connection_uri` | Required |
| [Consumption](docs/api/consumption.html) | `list` | `GET /consumption_history/v2/branches` | Required |
| [Consumption](docs/api/consumption.html) | `list` | `GET /consumption_history/projects` | Required |
| [Consumption](docs/api/consumption.html) | `list` | `GET /consumption_history/v2/projects` | Required |
| [CreateCredential](docs/api/create_credential.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/credentials` | Required |
| [Credential](docs/api/credential.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/credentials/{token_id}/reveal` | Required |
| [Credential](docs/api/credential.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/credentials/{token_id}/rotate` | Required |
| [Credential](docs/api/credential.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/credentials` | Required |
| [Credential](docs/api/credential.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/credentials/{token_id}` | Required |
| [CurrentUserInfo](docs/api/current_user_info.html) | `list` | `GET /users/me` | Required |
| [CustomDomain](docs/api/custom_domain.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/custom-domains` | Required |
| [DataApi](docs/api/data_api.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/data-api/{database_name}` | Required |
| [DataApi](docs/api/data_api.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/data-api/{database_name}` | Required |
| [DataApi](docs/api/data_api.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/data-api/{database_name}` | Required |
| [DataApi](docs/api/data_api.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/data-api/{database_name}` | Required |
| [Database](docs/api/database.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/databases` | Required |
| [Database](docs/api/database.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/databases` | Required |
| [Database](docs/api/database.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/databases/{database_name}` | Required |
| [Database](docs/api/database.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/databases/{database_name}` | Required |
| [Database](docs/api/database.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/databases/{database_name}` | Required |
| [EmailProvider](docs/api/email_provider.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/auth/email_provider` | Required |
| [EmailServer](docs/api/email_server.html) | `load` | `GET /projects/{project_id}/auth/email_server` | Required |
| [Empty](docs/api/empty.html) | `create` | `POST /organizations/{source_org_id}/projects/transfer` | Required |
| [Empty](docs/api/empty.html) | `create` | `POST /users/me/projects/transfer` | Required |
| [Empty](docs/api/empty.html) | `remove` | `DELETE /organizations/{org_id}/billing/spending_limit` | Required |
| [Empty](docs/api/empty.html) | `update` | `PUT /projects/{project_id}/branches/{branch_id}/backup_schedule` | Required |
| [Endpoint](docs/api/endpoint.html) | `create` | `POST /projects/{project_id}/endpoints` | Required |
| [Endpoint](docs/api/endpoint.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/endpoints` | Required |
| [Endpoint](docs/api/endpoint.html) | `list` | `GET /projects/{project_id}/endpoints` | Required |
| [Endpoint](docs/api/endpoint.html) | `load` | `GET /projects/{project_id}/endpoints/{endpoint_id}` | Required |
| [Endpoint](docs/api/endpoint.html) | `remove` | `DELETE /projects/{project_id}/endpoints/{endpoint_id}` | Required |
| [Endpoint](docs/api/endpoint.html) | `update` | `PATCH /projects/{project_id}/endpoints/{endpoint_id}` | Required |
| [EndpointOperation](docs/api/endpoint_operation.html) | `create` | `POST /projects/{project_id}/endpoints/{endpoint_id}/restart` | Required |
| [EndpointOperation](docs/api/endpoint_operation.html) | `create` | `POST /projects/{project_id}/endpoints/{endpoint_id}/start` | Required |
| [EndpointOperation](docs/api/endpoint_operation.html) | `create` | `POST /projects/{project_id}/endpoints/{endpoint_id}/suspend` | Required |
| [Function](docs/api/function.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/custom-domains` | Required |
| [Function](docs/api/function.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/functions` | Required |
| [Function](docs/api/function.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/custom-domains/{domain}` | Required |
| [Function](docs/api/function.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/functions/{slug}` | Required |
| [Function](docs/api/function.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}` | Required |
| [Jwk](docs/api/jwk.html) | `create` | `POST /projects/{project_id}/jwks` | Required |
| [Jwk](docs/api/jwk.html) | `list` | `GET /projects/{project_id}/jwks` | Required |
| [Jwk](docs/api/jwk.html) | `remove` | `DELETE /projects/{project_id}/jwks/{jwks_id}` | Required |
| [MaskingRule](docs/api/masking_rule.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/masking_rules` | Required |
| [MaskingRule](docs/api/masking_rule.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/masking_rules` | Required |
| [Member](docs/api/member.html) | `load` | `GET /organizations/{org_id}/members/{member_id}` | Required |
| [Member](docs/api/member.html) | `remove` | `DELETE /organizations/{org_id}/members/{member_id}` | Required |
| [Member](docs/api/member.html) | `update` | `PATCH /organizations/{org_id}/members/{member_id}` | Required |
| [NeonAuthAllowLocalhost](docs/api/neon_auth_allow_localhost.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/auth/allow_localhost` | Required |
| [NeonAuthAllowLocalhost](docs/api/neon_auth_allow_localhost.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/auth/allow_localhost` | Required |
| [NeonAuthConfig](docs/api/neon_auth_config.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/auth/config` | Required |
| [NeonAuthCreateIntegration](docs/api/neon_auth_create_integration.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/auth` | Required |
| [NeonAuthCreateIntegration](docs/api/neon_auth_create_integration.html) | `create` | `POST /projects/auth/create` | Required |
| [NeonAuthCreateIntegration](docs/api/neon_auth_create_integration.html) | `create` | `POST /projects/auth/keys` | Required |
| [NeonAuthCreateNewUser](docs/api/neon_auth_create_new_user.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/auth/users` | Required |
| [NeonAuthCreateNewUser](docs/api/neon_auth_create_new_user.html) | `create` | `POST /projects/auth/user` | Required |
| [NeonAuthEmailAndPasswordConfig](docs/api/neon_auth_email_and_password_config.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/auth/email_and_password` | Required |
| [NeonAuthEmailAndPasswordConfig](docs/api/neon_auth_email_and_password_config.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/auth/email_and_password` | Required |
| [NeonAuthEmailServerConfig](docs/api/neon_auth_email_server_config.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/auth/email_provider` | Required |
| [NeonAuthEmailServerConfig](docs/api/neon_auth_email_server_config.html) | `update` | `PATCH /projects/{project_id}/auth/email_server` | Required |
| [NeonAuthIntegration](docs/api/neon_auth_integration.html) | `list` | `GET /projects/{project_id}/auth/integrations` | Required |
| [NeonAuthIntegration](docs/api/neon_auth_integration.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/auth` | Required |
| [NeonAuthMagicLinkConfig](docs/api/neon_auth_magic_link_config.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/auth/plugins/magic-link` | Required |
| [NeonAuthOauthProvider](docs/api/neon_auth_oauth_provider.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/auth/oauth_providers` | Required |
| [NeonAuthOauthProvider](docs/api/neon_auth_oauth_provider.html) | `create` | `POST /projects/{project_id}/auth/oauth_providers` | Required |
| [NeonAuthOauthProvider](docs/api/neon_auth_oauth_provider.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/auth/oauth_providers` | Required |
| [NeonAuthOauthProvider](docs/api/neon_auth_oauth_provider.html) | `list` | `GET /projects/{project_id}/auth/oauth_providers` | Required |
| [NeonAuthOauthProvider](docs/api/neon_auth_oauth_provider.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}` | Required |
| [NeonAuthOauthProvider](docs/api/neon_auth_oauth_provider.html) | `update` | `PATCH /projects/{project_id}/auth/oauth_providers/{oauth_provider_id}` | Required |
| [NeonAuthOrganizationConfig](docs/api/neon_auth_organization_config.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/auth/plugins/organization` | Required |
| [NeonAuthPhoneNumberConfig](docs/api/neon_auth_phone_number_config.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number` | Required |
| [NeonAuthPhoneNumberConfig](docs/api/neon_auth_phone_number_config.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number` | Required |
| [NeonAuthPluginConfig](docs/api/neon_auth_plugin_config.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/auth/plugins` | Required |
| [NeonAuthRedirectUriWhitelistDomain](docs/api/neon_auth_redirect_uri_whitelist_domain.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/auth/domains` | Required |
| [NeonAuthRedirectUriWhitelistDomain](docs/api/neon_auth_redirect_uri_whitelist_domain.html) | `list` | `GET /projects/{project_id}/auth/domains` | Required |
| [NeonAuthTransferAuthProviderProject](docs/api/neon_auth_transfer_auth_provider_project.html) | `create` | `POST /projects/auth/transfer_ownership` | Required |
| [NeonAuthWebhookConfig](docs/api/neon_auth_webhook_config.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/auth/webhooks` | Required |
| [NeonAuthWebhookConfig](docs/api/neon_auth_webhook_config.html) | `update` | `PUT /projects/{project_id}/branches/{branch_id}/auth/webhooks` | Required |
| [NeonFunction](docs/api/neon_function.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/functions/{slug}` | Required |
| [NeonFunction](docs/api/neon_function.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/functions/{slug}` | Required |
| [NeonFunctionDeployment](docs/api/neon_function_deployment.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/functions/{slug}/deployments` | Required |
| [Operation](docs/api/operation.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/finalize_restore` | Required |
| [Operation](docs/api/operation.html) | `list` | `GET /projects/{project_id}/operations` | Required |
| [Operation](docs/api/operation.html) | `load` | `GET /projects/{project_id}/operations/{operation_id}` | Required |
| [OrgApiKeyCreate](docs/api/org_api_key_create.html) | `create` | `POST /organizations/{org_id}/api_keys` | Required |
| [OrgApiKeyRevoke](docs/api/org_api_key_revoke.html) | `remove` | `DELETE /organizations/{org_id}/api_keys/{key_id}` | Required |
| [OrgApiKeysListResponseItem](docs/api/org_api_keys_list_response_item.html) | `list` | `GET /organizations/{org_id}/api_keys` | Required |
| [Organization](docs/api/organization.html) | `create` | `POST /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /organizations/{org_id}/members` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /users/me/organizations` | Required |
| [Organization](docs/api/organization.html) | `load` | `GET /organizations/{org_id}` | Required |
| [Organization](docs/api/organization.html) | `remove` | `DELETE /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}` | Required |
| [OrganizationInvitation](docs/api/organization_invitation.html) | `create` | `POST /organizations/{org_id}/invitations` | Required |
| [OrganizationInvitation](docs/api/organization_invitation.html) | `list` | `GET /organizations/{org_id}/invitations` | Required |
| [Presign](docs/api/presign.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/presign` | Required |
| [Project](docs/api/project.html) | `create` | `POST /projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}` | Required |
| [Project](docs/api/project.html) | `create` | `POST /projects/{project_id}/branch_anonymized` | Required |
| [Project](docs/api/project.html) | `create` | `POST /projects` | Required |
| [Project](docs/api/project.html) | `list` | `GET /projects` | Required |
| [Project](docs/api/project.html) | `list` | `GET /projects/{project_id}/advisors` | Required |
| [Project](docs/api/project.html) | `list` | `GET /projects/shared` | Required |
| [Project](docs/api/project.html) | `load` | `GET /projects/{project_id}` | Required |
| [Project](docs/api/project.html) | `patch` | `PATCH /projects/{project_id}` | Required |
| [Project](docs/api/project.html) | `remove` | `DELETE /projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}` | Required |
| [Project](docs/api/project.html) | `remove` | `DELETE /projects/{project_id}` | Required |
| [Project](docs/api/project.html) | `update` | `PUT /projects/{project_id}/transfer_requests/{request_id}` | Required |
| [ProjectBranchLogField](docs/api/project_branch_log_field.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/logs/fields` | Required |
| [ProjectBranchLogFieldValue](docs/api/project_branch_log_field_value.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/logs/fields/{field_name}/values` | Required |
| [ProjectBranchLogsQuery](docs/api/project_branch_logs_query.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/logs/query` | Required |
| [ProjectMember](docs/api/project_member.html) | `list` | `GET /projects/{project_id}/members` | Required |
| [ProjectMemberRole](docs/api/project_member_role.html) | `remove` | `DELETE /projects/{project_id}/members/{member_id}/role` | Required |
| [ProjectMemberRole](docs/api/project_member_role.html) | `update` | `PUT /projects/{project_id}/members/{member_id}/role` | Required |
| [ProjectPermission](docs/api/project_permission.html) | `create` | `POST /projects/{project_id}/permissions` | Required |
| [ProjectPermission](docs/api/project_permission.html) | `list` | `GET /projects/{project_id}/permissions` | Required |
| [ProjectPermission](docs/api/project_permission.html) | `remove` | `DELETE /projects/{project_id}/permissions/{permission_id}` | Required |
| [ProjectRecover](docs/api/project_recover.html) | `create` | `POST /projects/{project_id}/recover` | Required |
| [ProjectTransferRequest](docs/api/project_transfer_request.html) | `create` | `POST /projects/{project_id}/transfer_requests` | Required |
| [Region](docs/api/region.html) | `list` | `GET /regions` | Required |
| [Role](docs/api/role.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/roles` | Required |
| [Role](docs/api/role.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/roles` | Required |
| [Role](docs/api/role.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/roles/{role_name}` | Required |
| [Role](docs/api/role.html) | `remove` | `DELETE /projects/{project_id}/branches/{branch_id}/roles/{role_name}` | Required |
| [RoleOperation](docs/api/role_operation.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password` | Required |
| [RolePassword](docs/api/role_password.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/roles/{role_name}/reveal_password` | Required |
| [SendNeonAuthTestEmail](docs/api/send_neon_auth_test_email.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/auth/email_provider/test` | Required |
| [SendNeonAuthTestEmail](docs/api/send_neon_auth_test_email.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/auth/send_test_email` | Required |
| [Snapshot](docs/api/snapshot.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/snapshot` | Required |
| [Snapshot](docs/api/snapshot.html) | `create` | `POST /projects/{project_id}/snapshots/{snapshot_id}/restore` | Required |
| [Snapshot](docs/api/snapshot.html) | `list` | `GET /projects/{project_id}/snapshots` | Required |
| [Snapshot](docs/api/snapshot.html) | `remove` | `DELETE /projects/{project_id}/snapshots/{snapshot_id}` | Required |
| [Snapshot](docs/api/snapshot.html) | `update` | `PATCH /projects/{project_id}/snapshots/{snapshot_id}` | Required |
| [SpendingLimit](docs/api/spending_limit.html) | `load` | `GET /organizations/{org_id}/billing/spending_limit` | Required |
| [SpendingLimit](docs/api/spending_limit.html) | `update` | `PUT /organizations/{org_id}/billing/spending_limit` | Required |
| [Trigger](docs/api/trigger.html) | `create` | `POST /projects/{project_id}/branches/{branch_id}/triggers` | Required |
| [Trigger](docs/api/trigger.html) | `list` | `GET /projects/{project_id}/branches/{branch_id}/triggers` | Required |
| [Trigger](docs/api/trigger.html) | `load` | `GET /projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}` | Required |
| [Trigger](docs/api/trigger.html) | `update` | `PATCH /projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}` | Required |
| [UpdateNeonAuthUserRole](docs/api/update_neon_auth_user_role.html) | `update` | `PUT /projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}/role` | Required |
| [VpcEndpoint](docs/api/vpc_endpoint.html) | `list` | `GET /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints` | Required |
| [VpcEndpoint](docs/api/vpc_endpoint.html) | `list` | `GET /organizations/{org_id}/vpc/vpc_endpoints` | Required |
| [VpcEndpoint](docs/api/vpc_endpoint.html) | `list` | `GET /projects/{project_id}/vpc_endpoints` | Required |
| [VpcEndpoint](docs/api/vpc_endpoint.html) | `load` | `GET /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}` | Required |

## Connect to the API

- API server: `https://console.neon.tech/api/v2`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

The Neon API requires an API key to authorize your requests, which you can enter below. Refer to our documentation to find out how to generate and use [API keys](https://neon.com/docs/manage/api-keys).

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `neon_list`: List records for an entity. Supported entities: `api_key`, `available_preload_library`, `backup_schedule`, `branch`, `bucket`, `bucket_objects_list`, `consumption`, `credential`, `current_user_info`, `database`, `endpoint`, `function`, `jwk`, `masking_rule`, `neon_auth_integration`, `neon_auth_oauth_provider`, `neon_auth_plugin_config`, `neon_auth_redirect_uri_whitelist_domain`, `neon_auth_webhook_config`, `operation`, `org_api_keys_list_response_item`, `organization`, `organization_invitation`, `project`, `project_branch_log_field`, `project_branch_log_field_value`, `project_member`, `project_permission`, `region`, `role`, `snapshot`, `trigger`, `vpc_endpoint`.
- `neon_load`: Load one record for an entity. Supported entities: `anonymized_branch_status`, `auth`, `branch`, `branch_ai_gateway`, `branch_schema`, `branch_schema_compare`, `branch_storage`, `bucket`, `connection_uri`, `data_api`, `database`, `email_provider`, `email_server`, `endpoint`, `member`, `neon_auth_allow_localhost`, `neon_auth_email_and_password_config`, `neon_auth_integration`, `neon_auth_phone_number_config`, `neon_function`, `operation`, `organization`, `project`, `role`, `role_password`, `spending_limit`, `trigger`, `vpc_endpoint`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

