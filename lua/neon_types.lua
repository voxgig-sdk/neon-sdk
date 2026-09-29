-- Typed models for the Neon SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Anonymize
---@field branch_id string
---@field created_at string
---@field failed_at? string
---@field last_run? table
---@field project_id string
---@field state string
---@field status_message? string
---@field updated_at string

---@class AnonymizeCreateData
---@field branch_id string
---@field project_id string
---@field created_at string
---@field failed_at? string
---@field last_run? table
---@field state string
---@field status_message? string
---@field updated_at string

---@class AnonymizedBranchStatus
---@field branch_id string
---@field created_at string
---@field failed_at? string
---@field last_run? table
---@field project_id string
---@field state string
---@field status_message? string
---@field updated_at string

---@class AnonymizedBranchStatusLoadMatch
---@field branch_id string
---@field project_id string

---@class ApiKey
---@field created_at string
---@field created_by string
---@field id number
---@field key string
---@field key_name string
---@field last_used_at? string
---@field last_used_from_addr string
---@field name string

---@class ApiKeyListMatch
---@field created_at? string
---@field created_by? string
---@field id? number
---@field key? string
---@field key_name? string
---@field last_used_at? string
---@field last_used_from_addr? string
---@field name? string

---@class ApiKeyCreateData
---@field created_at string
---@field created_by string
---@field id number
---@field key string
---@field key_name string
---@field last_used_at? string
---@field last_used_from_addr string
---@field name string

---@class ApiKeyRemoveMatch
---@field id number

---@class Auth
---@field account_id string
---@field auth_data? string
---@field auth_method string

---@class AuthLoadMatch
---@field account_id? string
---@field auth_data? string
---@field auth_method? string

---@class AuthCreateData
---@field branch_id string
---@field project_id string
---@field account_id string
---@field auth_data? string
---@field auth_method string

---@class AuthRemoveMatch
---@field auth_user_id? string
---@field branch_id string
---@field project_id string
---@field oauth_provider_id? string

---@class AuthLegacy
---@field auth_provider string
---@field domain string

---@class AuthLegacyCreateData
---@field project_id string
---@field auth_provider string
---@field domain string

---@class AuthLegacyRemoveMatch
---@field auth_provider? string
---@field project_id string
---@field auth_user_id? string
---@field oauth_provider_id? string

---@class AvailablePreloadLibrary
---@field description string
---@field is_default boolean
---@field is_experimental boolean
---@field library_name string
---@field version string

---@class AvailablePreloadLibraryListMatch
---@field project_id string

---@class BackupSchedule
---@field day? number
---@field frequency string
---@field hour? number
---@field month? number
---@field retention_seconds? number

---@class BackupScheduleListMatch
---@field branch_id string
---@field project_id string

---@class Branch
---@field active_time_seconds number
---@field annotation table
---@field branch table
---@field compute_time_seconds number
---@field cpu_used_sec number
---@field created_at string
---@field created_by? table
---@field creation_source string
---@field current_state string
---@field data_transfer_bytes number
---@field default boolean
---@field expires_at? string
---@field id string
---@field init_source? string
---@field last_reset_at? string
---@field logical_size? number
---@field name string
---@field parent_id? string
---@field parent_lsn? string
---@field parent_timestamp? string
---@field pending_state? string
---@field primary? boolean
---@field project_id string
---@field protected boolean
---@field recovery table
---@field restore_status? string
---@field restored_as? string
---@field restored_from? string
---@field restricted_actions? table
---@field state_changed_at string
---@field ttl_interval_seconds? number
---@field updated_at string
---@field written_data_bytes number

---@class BranchLoadMatch
---@field id string
---@field project_id string

---@class BranchListMatch
---@field project_id string
---@field cursor? string
---@field include_deleted? boolean
---@field limit? number
---@field search? string
---@field sort_by? string
---@field sort_order? string

---@class BranchCreateData
---@field project_id string
---@field active_time_seconds number
---@field annotation table
---@field branch table
---@field compute_time_seconds number
---@field cpu_used_sec number
---@field created_at string
---@field created_by? table
---@field creation_source string
---@field current_state string
---@field data_transfer_bytes number
---@field default boolean
---@field expires_at? string
---@field id string
---@field init_source? string
---@field last_reset_at? string
---@field logical_size? number
---@field name string
---@field parent_id? string
---@field parent_lsn? string
---@field parent_timestamp? string
---@field pending_state? string
---@field primary? boolean
---@field protected boolean
---@field recovery table
---@field restore_status? string
---@field restored_as? string
---@field restored_from? string
---@field restricted_actions? table
---@field state_changed_at string
---@field ttl_interval_seconds? number
---@field updated_at string
---@field written_data_bytes number

---@class BranchUpdateData
---@field id string
---@field project_id string
---@field active_time_seconds? number
---@field annotation? table
---@field branch? table
---@field compute_time_seconds? number
---@field cpu_used_sec? number
---@field created_at? string
---@field created_by? table
---@field creation_source? string
---@field current_state? string
---@field data_transfer_bytes? number
---@field default? boolean
---@field expires_at? string
---@field init_source? string
---@field last_reset_at? string
---@field logical_size? number
---@field name? string
---@field parent_id? string
---@field parent_lsn? string
---@field parent_timestamp? string
---@field pending_state? string
---@field primary? boolean
---@field protected? boolean
---@field recovery? table
---@field restore_status? string
---@field restored_as? string
---@field restored_from? string
---@field restricted_actions? table
---@field state_changed_at? string
---@field ttl_interval_seconds? number
---@field updated_at? string
---@field written_data_bytes? number

---@class BranchRemoveMatch
---@field id string
---@field project_id string

---@class BranchAiGateway
---@field base_url string
---@field enabled boolean
---@field id? string

---@class BranchAiGatewayLoadMatch
---@field id string
---@field project_id string

---@class BranchOperation
---@field branch table
---@field id? string
---@field operations table

---@class BranchOperationCreateData
---@field id string
---@field project_id string
---@field branch table
---@field operations table

---@class BranchSchema
---@field id? string
---@field json table
---@field sql? string

---@class BranchSchemaLoadMatch
---@field id string
---@field project_id string
---@field db_name string
---@field format? string
---@field lsn? string
---@field timestamp? string

---@class BranchSchemaCompare
---@field id? string

---@class BranchSchemaCompareLoadMatch
---@field id string
---@field project_id string
---@field base_branch_id? string
---@field base_lsn? string
---@field base_timestamp? string
---@field db_name string
---@field lsn? string
---@field timestamp? string

---@class BranchStorage
---@field enabled boolean
---@field force_path_style boolean
---@field id? string
---@field region string
---@field s3_endpoint string

---@class BranchStorageLoadMatch
---@field id string
---@field project_id string

---@class Bucket
---@field access_level? string
---@field created_at string
---@field id? string
---@field name string

---@class BucketLoadMatch
---@field branch_id string
---@field bucket_id string
---@field object_key string
---@field project_id string

---@class BucketListMatch
---@field branch_id string
---@field project_id string

---@class BucketCreateData
---@field branch_id string
---@field project_id string
---@field access_level? string
---@field created_at string
---@field id? string
---@field name string

---@class BucketRemoveMatch
---@field branch_id string
---@field bucket_id? string
---@field object_key? string
---@field project_id string
---@field id? string

---@class BucketObjectsList
---@field etag string
---@field key string
---@field last_modified string
---@field size number

---@class BucketObjectsListListMatch
---@field branch_id string
---@field bucket_name string
---@field project_id string
---@field cursor? string
---@field delimiter? string
---@field limit? number
---@field prefix? string

---@class ConnectionUri
---@field uri string

---@class ConnectionUriLoadMatch
---@field project_id string
---@field branch_id? string
---@field database_name string
---@field endpoint_id? string
---@field pooled? boolean
---@field role_name string

---@class Consumption
---@field branch_id string
---@field periods table
---@field project_id string

---@class ConsumptionListMatch
---@field branch_id? table
---@field cursor? string
---@field from string
---@field granularity string
---@field limit? number
---@field metric? table
---@field org_id? string
---@field project_id? table
---@field to string
---@field include_v1_metric? boolean

---@class CreateCredential
---@field name? string
---@field principal_type string
---@field scopes table

---@class CreateCredentialCreateData
---@field branch_id string
---@field project_id string
---@field name? string
---@field principal_type string
---@field scopes table

---@class Credential
---@field branch_id? string
---@field created_at string
---@field expires_at? string
---@field function_id? string
---@field id? string
---@field last_used_at? string
---@field name? string
---@field principal_type string
---@field revoked_at? string
---@field scopes table
---@field token_id string
---@field token_id_short string

---@class CredentialListMatch
---@field branch_id string
---@field project_id string

---@class CredentialCreateData
---@field branch_id string
---@field id string
---@field project_id string
---@field created_at string
---@field expires_at? string
---@field function_id? string
---@field last_used_at? string
---@field name? string
---@field principal_type string
---@field revoked_at? string
---@field scopes table
---@field token_id string
---@field token_id_short string

---@class CredentialRemoveMatch
---@field branch_id string
---@field id string
---@field project_id string

---@class CurrentUserInfo
---@field email string
---@field image string
---@field login string
---@field name string
---@field provider string

---@class CurrentUserInfoListMatch
---@field email? string
---@field image? string
---@field login? string
---@field name? string
---@field provider? string

---@class CustomDomain
---@field domain string
---@field entity_id string
---@field entity_type string

---@class CustomDomainCreateData
---@field branch_id string
---@field project_id string
---@field domain string
---@field entity_id string
---@field entity_type string

---@class DataApi
---@field add_default_grants? boolean
---@field auth_provider? string
---@field available_schemas? table
---@field id? string
---@field jwks_url? string
---@field jwt_audience? string
---@field provider_name? string
---@field settings? table
---@field skip_auth_schema? boolean
---@field status string
---@field url string

---@class DataApiLoadMatch
---@field branch_id string
---@field id string
---@field project_id string

---@class DataApiCreateData
---@field branch_id string
---@field id string
---@field project_id string
---@field add_default_grants? boolean
---@field auth_provider? string
---@field available_schemas? table
---@field jwks_url? string
---@field jwt_audience? string
---@field provider_name? string
---@field settings? table
---@field skip_auth_schema? boolean
---@field status string
---@field url string

---@class DataApiUpdateData
---@field branch_id string
---@field id string
---@field project_id string
---@field add_default_grants? boolean
---@field auth_provider? string
---@field available_schemas? table
---@field jwks_url? string
---@field jwt_audience? string
---@field provider_name? string
---@field settings? table
---@field skip_auth_schema? boolean
---@field status? string
---@field url? string

---@class DataApiRemoveMatch
---@field branch_id string
---@field id string
---@field project_id string

---@class Database
---@field branch_id string
---@field created_at string
---@field database table
---@field id number
---@field name string
---@field owner_name string
---@field updated_at string

---@class DatabaseLoadMatch
---@field branch_id string
---@field id string
---@field project_id string

---@class DatabaseListMatch
---@field branch_id string
---@field project_id string

---@class DatabaseCreateData
---@field branch_id string
---@field project_id string
---@field created_at string
---@field database table
---@field id number
---@field name string
---@field owner_name string
---@field updated_at string

---@class DatabaseUpdateData
---@field branch_id string
---@field id string
---@field project_id string
---@field created_at? string
---@field database? table
---@field name? string
---@field owner_name? string
---@field updated_at? string

---@class DatabaseRemoveMatch
---@field branch_id string
---@field id string
---@field project_id string

---@class EmailProvider

---@class EmailProviderLoadMatch
---@field branch_id string
---@field project_id string

---@class EmailServer

---@class EmailServerLoadMatch
---@field project_id string

---@class Empty
---@field destination_org_id string
---@field project_ids table
---@field schedule table

---@class EmptyCreateData
---@field organization_id string
---@field destination_org_id string
---@field project_ids table
---@field schedule table

---@class EmptyUpdateData
---@field branch_id string
---@field project_id string
---@field destination_org_id? string
---@field project_ids? table
---@field schedule? table

---@class EmptyRemoveMatch
---@field organization_id string

---@class Endpoint
---@field autoscaling_limit_max_cu number
---@field autoscaling_limit_min_cu number
---@field branch_id string
---@field compute_release_version? string
---@field created_at string
---@field creation_source string
---@field current_state string
---@field disabled boolean
---@field endpoint table
---@field host string
---@field id string
---@field last_active? string
---@field name? string
---@field passwordless_access boolean
---@field pending_state? string
---@field pooler_enabled boolean
---@field pooler_mode string
---@field project_id string
---@field provisioner string
---@field proxy_host string
---@field region_id string
---@field settings table
---@field started_at? string
---@field suspend_timeout_seconds number
---@field suspended_at? string
---@field type string
---@field updated_at string

---@class EndpointLoadMatch
---@field id string
---@field project_id string

---@class EndpointListMatch
---@field branch_id? string
---@field project_id string

---@class EndpointCreateData
---@field project_id string
---@field autoscaling_limit_max_cu number
---@field autoscaling_limit_min_cu number
---@field branch_id string
---@field compute_release_version? string
---@field created_at string
---@field creation_source string
---@field current_state string
---@field disabled boolean
---@field endpoint table
---@field host string
---@field id string
---@field last_active? string
---@field name? string
---@field passwordless_access boolean
---@field pending_state? string
---@field pooler_enabled boolean
---@field pooler_mode string
---@field provisioner string
---@field proxy_host string
---@field region_id string
---@field settings table
---@field started_at? string
---@field suspend_timeout_seconds number
---@field suspended_at? string
---@field type string
---@field updated_at string

---@class EndpointUpdateData
---@field id string
---@field project_id string
---@field autoscaling_limit_max_cu? number
---@field autoscaling_limit_min_cu? number
---@field branch_id? string
---@field compute_release_version? string
---@field created_at? string
---@field creation_source? string
---@field current_state? string
---@field disabled? boolean
---@field endpoint? table
---@field host? string
---@field last_active? string
---@field name? string
---@field passwordless_access? boolean
---@field pending_state? string
---@field pooler_enabled? boolean
---@field pooler_mode? string
---@field provisioner? string
---@field proxy_host? string
---@field region_id? string
---@field settings? table
---@field started_at? string
---@field suspend_timeout_seconds? number
---@field suspended_at? string
---@field type? string
---@field updated_at? string

---@class EndpointRemoveMatch
---@field id string
---@field project_id string

---@class EndpointOperation
---@field endpoint table
---@field id? string
---@field operations table

---@class EndpointOperationCreateData
---@field id string
---@field project_id string
---@field endpoint table
---@field operations table

---@class Function
---@field active_deployment? any
---@field binding_status? string
---@field cname_target string
---@field created_at string
---@field current_deployment? any
---@field dns_status? string
---@field domain string
---@field entity_id string
---@field entity_type string
---@field id string
---@field invocation_url string
---@field name string
---@field slug string
---@field status? string
---@field status_reason? string

---@class FunctionListMatch
---@field branch_id string
---@field project_id string
---@field cursor? string
---@field limit? number

---@class FunctionRemoveMatch
---@field branch_id string
---@field domain? string
---@field project_id string
---@field id? string
---@field trigger_id? string

---@class Jwk
---@field branch_id? string
---@field created_at string
---@field id string
---@field jwks_url string
---@field jwt_audience? string
---@field project_id string
---@field provider_name string
---@field role_names? table
---@field skip_role_creation? boolean
---@field updated_at string

---@class JwkListMatch
---@field project_id string

---@class JwkCreateData
---@field project_id string
---@field branch_id? string
---@field created_at string
---@field id string
---@field jwks_url string
---@field jwt_audience? string
---@field provider_name string
---@field role_names? table
---@field skip_role_creation? boolean
---@field updated_at string

---@class JwkRemoveMatch
---@field id string
---@field project_id string

---@class MaskingRule
---@field column_name string
---@field database_name string
---@field masking_function? string
---@field masking_rules table
---@field masking_value? string
---@field schema_name string
---@field table_name string

---@class MaskingRuleListMatch
---@field branch_id string
---@field project_id string

---@class MaskingRuleUpdateData
---@field branch_id string
---@field project_id string
---@field column_name? string
---@field database_name? string
---@field masking_function? string
---@field masking_rules? table
---@field masking_value? string
---@field schema_name? string
---@field table_name? string

---@class Member
---@field id string
---@field joined_at? string
---@field org_id string
---@field role string
---@field user_id string

---@class MemberLoadMatch
---@field id string
---@field organization_id string

---@class MemberUpdateData
---@field id string
---@field organization_id string
---@field joined_at? string
---@field org_id? string
---@field role? string
---@field user_id? string

---@class MemberRemoveMatch
---@field id string
---@field organization_id string

---@class NeonAuthAllowLocalhost
---@field allow_localhost boolean

---@class NeonAuthAllowLocalhostLoadMatch
---@field branch_id string
---@field project_id string

---@class NeonAuthAllowLocalhostUpdateData
---@field branch_id string
---@field project_id string
---@field allow_localhost? boolean

---@class NeonAuthConfig
---@field name string

---@class NeonAuthConfigUpdateData
---@field branch_id string
---@field project_id string
---@field name? string

---@class NeonAuthCreateIntegration
---@field auth_provider string
---@field branch_id string
---@field database_name? string
---@field project_id string
---@field role_name? string

---@class NeonAuthCreateIntegrationCreateData
---@field auth_provider string
---@field branch_id string
---@field database_name? string
---@field project_id string
---@field role_name? string

---@class NeonAuthCreateNewUser
---@field auth_provider string
---@field email string
---@field name? string
---@field project_id string

---@class NeonAuthCreateNewUserCreateData
---@field auth_provider string
---@field email string
---@field name? string
---@field project_id string

---@class NeonAuthEmailAndPasswordConfig
---@field auto_sign_in_after_verification boolean
---@field disable_sign_up boolean
---@field email_verification_method string
---@field enabled boolean
---@field require_email_verification boolean
---@field send_verification_email_on_sign_in boolean
---@field send_verification_email_on_sign_up boolean

---@class NeonAuthEmailAndPasswordConfigLoadMatch
---@field branch_id string
---@field project_id string

---@class NeonAuthEmailAndPasswordConfigUpdateData
---@field branch_id string
---@field project_id string
---@field auto_sign_in_after_verification? boolean
---@field disable_sign_up? boolean
---@field email_verification_method? string
---@field enabled? boolean
---@field require_email_verification? boolean
---@field send_verification_email_on_sign_in? boolean
---@field send_verification_email_on_sign_up? boolean

---@class NeonAuthEmailServerConfig

---@class NeonAuthEmailServerConfigUpdateData
---@field branch_id? string
---@field project_id string

---@class NeonAuthIntegration
---@field auth_provider string
---@field auth_provider_project_id string
---@field base_url? string
---@field branch_id string
---@field created_at string
---@field db_name string
---@field jwks_url string
---@field name? string
---@field owned_by string
---@field transfer_status? string

---@class NeonAuthIntegrationLoadMatch
---@field branch_id string
---@field project_id string

---@class NeonAuthIntegrationListMatch
---@field project_id string

---@class NeonAuthMagicLinkConfig
---@field disable_sign_up boolean
---@field enabled boolean
---@field expires_in number

---@class NeonAuthMagicLinkConfigUpdateData
---@field branch_id string
---@field project_id string
---@field disable_sign_up? boolean
---@field enabled? boolean
---@field expires_in? number

---@class NeonAuthOauthProvider
---@field client_id? string
---@field client_secret? string
---@field id string
---@field microsoft_tenant_id? string
---@field type string

---@class NeonAuthOauthProviderListMatch
---@field branch_id? string
---@field project_id string

---@class NeonAuthOauthProviderCreateData
---@field branch_id? string
---@field project_id string
---@field client_id? string
---@field client_secret? string
---@field id string
---@field microsoft_tenant_id? string
---@field type string

---@class NeonAuthOauthProviderUpdateData
---@field branch_id? string
---@field id string
---@field project_id string
---@field client_id? string
---@field client_secret? string
---@field microsoft_tenant_id? string
---@field type? string

---@class NeonAuthOrganizationConfig
---@field creator_role string
---@field enabled boolean
---@field membership_limit number
---@field organization_limit number
---@field send_invitation_email boolean

---@class NeonAuthOrganizationConfigUpdateData
---@field branch_id string
---@field project_id string
---@field creator_role? string
---@field enabled? boolean
---@field membership_limit? number
---@field organization_limit? number
---@field send_invitation_email? boolean

---@class NeonAuthPhoneNumberConfig
---@field enabled boolean
---@field otp_expires_in? number

---@class NeonAuthPhoneNumberConfigLoadMatch
---@field branch_id string
---@field project_id string

---@class NeonAuthPhoneNumberConfigUpdateData
---@field branch_id string
---@field project_id string
---@field enabled? boolean
---@field otp_expires_in? number

---@class NeonAuthPluginConfig
---@field client_id? string
---@field client_secret? string
---@field id string
---@field type string

---@class NeonAuthPluginConfigListMatch
---@field branch_id string
---@field project_id string

---@class NeonAuthRedirectUriWhitelistDomain
---@field auth_provider string
---@field domain string

---@class NeonAuthRedirectUriWhitelistDomainListMatch
---@field branch_id? string
---@field project_id string

---@class NeonAuthTransferAuthProviderProject
---@field auth_provider string
---@field project_id string
---@field url string

---@class NeonAuthTransferAuthProviderProjectCreateData
---@field auth_provider string
---@field project_id string
---@field url string

---@class NeonAuthWebhookConfig
---@field enabled boolean
---@field enabled_events? table
---@field timeout_seconds? number
---@field webhook_url? string

---@class NeonAuthWebhookConfigListMatch
---@field branch_id string
---@field project_id string

---@class NeonAuthWebhookConfigUpdateData
---@field branch_id string
---@field project_id string
---@field enabled? boolean
---@field enabled_events? table
---@field timeout_seconds? number
---@field webhook_url? string

---@class NeonFunction
---@field active_deployment? any
---@field created_at string
---@field current_deployment? any
---@field id string
---@field invocation_url string
---@field name string
---@field slug string

---@class NeonFunctionLoadMatch
---@field branch_id string
---@field id string
---@field project_id string

---@class NeonFunctionUpdateData
---@field branch_id string
---@field id string
---@field project_id string
---@field active_deployment? any
---@field created_at? string
---@field current_deployment? any
---@field invocation_url? string
---@field name? string
---@field slug? string

---@class NeonFunctionDeployment

---@class NeonFunctionDeploymentCreateData
---@field branch_id string
---@field project_id string
---@field slug string

---@class Operation
---@field action string
---@field branch_id? string
---@field created_at string
---@field endpoint_id? string
---@field error? string
---@field failures_count number
---@field id string
---@field name? string
---@field operations table
---@field project_id string
---@field retry_at? string
---@field status string
---@field total_duration_ms number
---@field updated_at string

---@class OperationLoadMatch
---@field id string
---@field project_id string

---@class OperationListMatch
---@field project_id string
---@field cursor? string
---@field limit? number

---@class OperationCreateData
---@field branch_id string
---@field project_id string
---@field action string
---@field created_at string
---@field endpoint_id? string
---@field error? string
---@field failures_count number
---@field id string
---@field name? string
---@field operations table
---@field retry_at? string
---@field status string
---@field total_duration_ms number
---@field updated_at string

---@class OrgApiKeyCreate
---@field created_at? string
---@field created_by? string
---@field id? number
---@field key? string
---@field name? string

---@class OrgApiKeyCreateCreateData
---@field organization_id string
---@field created_at? string
---@field created_by? string
---@field id? number
---@field key? string
---@field name? string

---@class OrgApiKeyRevoke

---@class OrgApiKeyRevokeRemoveMatch
---@field key_id number
---@field organization_id string

---@class OrgApiKeysListResponseItem
---@field created_at string
---@field created_by table
---@field id number
---@field last_used_at? string
---@field last_used_from_addr string
---@field name string
---@field project_id? string

---@class OrgApiKeysListResponseItemListMatch
---@field organization_id string

---@class Organization
---@field allow_hipaa_projects? boolean
---@field created_at string
---@field handle string
---@field id string
---@field label string
---@field managed_by string
---@field name string
---@field plan string
---@field require_mfa? boolean
---@field updated_at string

---@class OrganizationLoadMatch
---@field id string

---@class OrganizationListMatch
---@field allow_hipaa_projects? boolean
---@field created_at? string
---@field handle? string
---@field id? string
---@field label? string
---@field managed_by? string
---@field name? string
---@field plan? string
---@field require_mfa? boolean
---@field updated_at? string

---@class OrganizationCreateData
---@field id string
---@field region_id string
---@field vpc_endpoint_id string
---@field allow_hipaa_projects? boolean
---@field created_at string
---@field handle string
---@field label string
---@field managed_by string
---@field name string
---@field plan string
---@field require_mfa? boolean
---@field updated_at string

---@class OrganizationRemoveMatch
---@field id string
---@field region_id string
---@field vpc_endpoint_id string

---@class OrganizationInvitation
---@field email string
---@field id string
---@field invitations table
---@field invited_at string
---@field invited_by string
---@field org_id string
---@field role string

---@class OrganizationInvitationListMatch
---@field id string

---@class OrganizationInvitationCreateData
---@field id string
---@field email string
---@field invitations table
---@field invited_at string
---@field invited_by string
---@field org_id string
---@field role string

---@class Presign
---@field content_type? string
---@field expires_at string
---@field expires_in_seconds? number
---@field headers table
---@field method string
---@field operation string
---@field url string

---@class PresignCreateData
---@field branch_id string
---@field bucket_id string
---@field object_key string
---@field project_id string
---@field content_type? string
---@field expires_at string
---@field expires_in_seconds? number
---@field headers table
---@field method string
---@field operation string
---@field url string

---@class Project
---@field active_time number
---@field active_time_seconds number
---@field branch_logical_size_limit number
---@field branch_logical_size_limit_bytes number
---@field compute_last_active_at? string
---@field compute_time_seconds number
---@field consumption_period_end string
---@field consumption_period_start string
---@field cpu_used_sec number
---@field created_at string
---@field creation_source string
---@field data_storage_bytes_hour number
---@field data_transfer_bytes number
---@field default_endpoint_settings? table
---@field deleted_at? string
---@field effective_project_permission? string
---@field hipaa_enabled_at? string
---@field history_retention_seconds number
---@field id string
---@field label string
---@field maintenance_scheduled_for? string
---@field maintenance_starts_at? string
---@field name string
---@field org_id? string
---@field org_name? string
---@field owner table
---@field owner_id string
---@field pg_version number
---@field platform_id string
---@field project table
---@field provisioner string
---@field proxy_host string
---@field quota_reset_at? string
---@field recoverable_until? string
---@field region_id string
---@field settings? table
---@field store_passwords boolean
---@field synthetic_storage_size? number
---@field updated_at string
---@field written_data_bytes number

---@class ProjectLoadMatch
---@field id string

---@class ProjectListMatch
---@field cursor? string
---@field limit? number
---@field org_id? string
---@field recoverable? boolean
---@field search? string
---@field timeout? number

---@class ProjectCreateData
---@field id string
---@field vpc_endpoint_id string
---@field active_time number
---@field active_time_seconds number
---@field branch_logical_size_limit number
---@field branch_logical_size_limit_bytes number
---@field compute_last_active_at? string
---@field compute_time_seconds number
---@field consumption_period_end string
---@field consumption_period_start string
---@field cpu_used_sec number
---@field created_at string
---@field creation_source string
---@field data_storage_bytes_hour number
---@field data_transfer_bytes number
---@field default_endpoint_settings? table
---@field deleted_at? string
---@field effective_project_permission? string
---@field hipaa_enabled_at? string
---@field history_retention_seconds number
---@field label string
---@field maintenance_scheduled_for? string
---@field maintenance_starts_at? string
---@field name string
---@field org_id? string
---@field org_name? string
---@field owner table
---@field owner_id string
---@field pg_version number
---@field platform_id string
---@field project table
---@field provisioner string
---@field proxy_host string
---@field quota_reset_at? string
---@field recoverable_until? string
---@field region_id string
---@field settings? table
---@field store_passwords boolean
---@field synthetic_storage_size? number
---@field updated_at string
---@field written_data_bytes number

---@class ProjectUpdateData
---@field id string
---@field request_id string
---@field active_time? number
---@field active_time_seconds? number
---@field branch_logical_size_limit? number
---@field branch_logical_size_limit_bytes? number
---@field compute_last_active_at? string
---@field compute_time_seconds? number
---@field consumption_period_end? string
---@field consumption_period_start? string
---@field cpu_used_sec? number
---@field created_at? string
---@field creation_source? string
---@field data_storage_bytes_hour? number
---@field data_transfer_bytes? number
---@field default_endpoint_settings? table
---@field deleted_at? string
---@field effective_project_permission? string
---@field hipaa_enabled_at? string
---@field history_retention_seconds? number
---@field label? string
---@field maintenance_scheduled_for? string
---@field maintenance_starts_at? string
---@field name? string
---@field org_id? string
---@field org_name? string
---@field owner? table
---@field owner_id? string
---@field pg_version? number
---@field platform_id? string
---@field project? table
---@field provisioner? string
---@field proxy_host? string
---@field quota_reset_at? string
---@field recoverable_until? string
---@field region_id? string
---@field settings? table
---@field store_passwords? boolean
---@field synthetic_storage_size? number
---@field updated_at? string
---@field written_data_bytes? number

---@class ProjectRemoveMatch
---@field id string
---@field vpc_endpoint_id? string

---@class ProjectBranchLogField
---@field fields table

---@class ProjectBranchLogFieldListMatch
---@field branch_id string
---@field project_id string

---@class ProjectBranchLogFieldValue
---@field is_truncated boolean
---@field values table

---@class ProjectBranchLogFieldValueListMatch
---@field branch_id string
---@field field_name string
---@field project_id string
---@field end_time? string
---@field limit? number
---@field since? string
---@field source? string
---@field start_time? string

---@class ProjectBranchLogsQuery
---@field body_contains? string
---@field cursor? string
---@field end_time? string
---@field is_truncated boolean
---@field limit? number
---@field logql? string
---@field logs table
---@field minimum_severity? string
---@field next_cursor? string
---@field scope_name? string
---@field service_name? string
---@field severity_text? string
---@field since? any
---@field sort_order? string
---@field source? string
---@field start_time? string
---@field trace_id? string

---@class ProjectBranchLogsQueryCreateData
---@field branch_id string
---@field project_id string
---@field body_contains? string
---@field cursor? string
---@field end_time? string
---@field is_truncated boolean
---@field limit? number
---@field logql? string
---@field logs table
---@field minimum_severity? string
---@field next_cursor? string
---@field scope_name? string
---@field service_name? string
---@field severity_text? string
---@field since? any
---@field sort_order? string
---@field source? string
---@field start_time? string
---@field trace_id? string

---@class ProjectMember
---@field effective_project_permission? string
---@field email? string
---@field explicit_project_permission? string
---@field grant_source? string
---@field id? string
---@field member_id string
---@field name? string
---@field org_default_project_permission? string
---@field org_role string
---@field project_role? string
---@field user_id string

---@class ProjectMemberListMatch
---@field id string
---@field cursor? string
---@field limit? number

---@class ProjectMemberRole
---@field credential_rotation_recommended? boolean
---@field effective_project_permission? string
---@field email? string
---@field explicit_project_permission? string
---@field member_id string
---@field name? string
---@field org_api_key_rotation_recommended? boolean
---@field org_default_project_permission? string
---@field org_role string
---@field project_id string
---@field project_role? string
---@field role string
---@field user_id string

---@class ProjectMemberRoleUpdateData
---@field member_id string
---@field project_id string
---@field confirm_self_demotion? boolean
---@field credential_rotation_recommended? boolean
---@field effective_project_permission? string
---@field email? string
---@field explicit_project_permission? string
---@field name? string
---@field org_api_key_rotation_recommended? boolean
---@field org_default_project_permission? string
---@field org_role? string
---@field project_role? string
---@field role? string
---@field user_id? string

---@class ProjectMemberRoleRemoveMatch
---@field member_id string
---@field project_id string
---@field confirm_self_lockout? boolean

---@class ProjectPermission
---@field email string
---@field granted_at string
---@field granted_to_email string
---@field id string
---@field revoked_at? string

---@class ProjectPermissionListMatch
---@field id string

---@class ProjectPermissionCreateData
---@field id string
---@field email string
---@field granted_at string
---@field granted_to_email string
---@field revoked_at? string

---@class ProjectPermissionRemoveMatch
---@field id string
---@field project_id string

---@class ProjectRecover
---@field branches table
---@field id? string
---@field project table

---@class ProjectRecoverCreateData
---@field id string
---@field branches table
---@field project table

---@class ProjectTransferRequest
---@field id? string
---@field ttl_seconds? number

---@class ProjectTransferRequestCreateData
---@field id string
---@field ttl_seconds? number

---@class Region
---@field default boolean
---@field geo_lat string
---@field geo_long string
---@field name string
---@field region_id string

---@class RegionListMatch
---@field org_id? string

---@class Role
---@field authentication_method? string
---@field branch_id string
---@field created_at string
---@field id? string
---@field name string
---@field password? string
---@field protected? boolean
---@field role table
---@field updated_at string

---@class RoleLoadMatch
---@field branch_id string
---@field id string
---@field project_id string

---@class RoleListMatch
---@field branch_id string
---@field project_id string

---@class RoleCreateData
---@field branch_id string
---@field project_id string
---@field authentication_method? string
---@field created_at string
---@field id? string
---@field name string
---@field password? string
---@field protected? boolean
---@field role table
---@field updated_at string

---@class RoleRemoveMatch
---@field branch_id string
---@field id string
---@field project_id string

---@class RoleOperation
---@field operations table
---@field role table

---@class RoleOperationCreateData
---@field branch_id string
---@field project_id string
---@field role_name string
---@field operations table
---@field role table

---@class RolePassword
---@field password string

---@class RolePasswordLoadMatch
---@field branch_id string
---@field project_id string
---@field role_name string

---@class SendNeonAuthTestEmail
---@field error_message? string
---@field host string
---@field password string
---@field port number
---@field recipient_email string
---@field sender_email string
---@field sender_name string
---@field success boolean
---@field username string

---@class SendNeonAuthTestEmailCreateData
---@field branch_id string
---@field project_id string
---@field error_message? string
---@field host string
---@field password string
---@field port number
---@field recipient_email string
---@field sender_email string
---@field sender_name string
---@field success boolean
---@field username string

---@class Snapshot
---@field created_at string
---@field diff_size? number
---@field expires_at? string
---@field full_size? number
---@field id string
---@field lsn? string
---@field manual? boolean
---@field name string
---@field operations table
---@field slug? string
---@field snapshot table
---@field source_branch_id? string
---@field timestamp? string

---@class SnapshotListMatch
---@field project_id string

---@class SnapshotCreateData
---@field branch_id string
---@field project_id string
---@field expires_at? string
---@field lsn? string
---@field name? string
---@field slug? string
---@field timestamp? string
---@field created_at string
---@field diff_size? number
---@field full_size? number
---@field id string
---@field manual? boolean
---@field operations table
---@field snapshot table
---@field source_branch_id? string

---@class SnapshotUpdateData
---@field id string
---@field project_id string
---@field created_at? string
---@field diff_size? number
---@field expires_at? string
---@field full_size? number
---@field lsn? string
---@field manual? boolean
---@field name? string
---@field operations? table
---@field slug? string
---@field snapshot? table
---@field source_branch_id? string
---@field timestamp? string

---@class SnapshotRemoveMatch
---@field id string
---@field project_id string

---@class SpendingLimit
---@field spending_limit_cents number

---@class SpendingLimitLoadMatch
---@field organization_id string

---@class SpendingLimitUpdateData
---@field organization_id string
---@field spending_limit_cents? number

---@class Trigger
---@field id? string
---@field triggers table

---@class TriggerLoadMatch
---@field branch_id string
---@field id string
---@field project_id string

---@class TriggerListMatch
---@field branch_id string
---@field project_id string

---@class TriggerCreateData
---@field branch_id string
---@field project_id string
---@field id? string
---@field triggers table

---@class TriggerUpdateData
---@field branch_id string
---@field id string
---@field project_id string
---@field triggers? table

---@class UpdateNeonAuthUserRole
---@field id string
---@field roles table

---@class UpdateNeonAuthUserRoleUpdateData
---@field branch_id string
---@field project_id string
---@field user_id string
---@field id? string
---@field roles? table

---@class VpcEndpoint
---@field example_restricted_projects table
---@field id? string
---@field label string
---@field num_restricted_projects number
---@field region_id string
---@field state string
---@field vpc_endpoint_id string

---@class VpcEndpointLoadMatch
---@field id string
---@field organization_id string
---@field region_id string

---@class VpcEndpointListMatch
---@field project_id string

local M = {}

return M
