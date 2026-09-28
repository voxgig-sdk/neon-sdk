<?php
declare(strict_types=1);

// Typed models for the Neon SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Anonymize entity data model. */
class Anonymize
{
    public ?string $completed_at = null;
    public ?int $masked_columns = null;
    public ?string $started_at = null;
    public ?string $triggered_by = null;
    public ?string $triggered_by_username = null;
}

/** Request payload for Anonymize#create. */
class AnonymizeCreateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $completed_at = null;
    public ?int $masked_columns = null;
    public ?string $started_at = null;
    public ?string $triggered_by = null;
    public ?string $triggered_by_username = null;
}

/** AnonymizedBranchStatus entity data model. */
class AnonymizedBranchStatus
{
    public ?string $completed_at = null;
    public ?int $masked_columns = null;
    public ?string $started_at = null;
    public ?string $triggered_by = null;
    public ?string $triggered_by_username = null;
}

/** Request payload for AnonymizedBranchStatus#load. */
class AnonymizedBranchStatusLoadMatch
{
    public string $branch_id;
    public string $project_id;
}

/** ApiKey entity data model. */
class ApiKey
{
    public string $created_at;
    public string $created_by;
    public int $id;
    public string $key;
    public string $key_name;
    public ?string $last_used_at = null;
    public string $last_used_from_addr;
    public string $name;
}

/** Request payload for ApiKey#list. */
class ApiKeyListMatch
{
    public ?string $created_at = null;
    public ?string $created_by = null;
    public ?int $id = null;
    public ?string $key = null;
    public ?string $key_name = null;
    public ?string $last_used_at = null;
    public ?string $last_used_from_addr = null;
    public ?string $name = null;
}

/** Request payload for ApiKey#create. */
class ApiKeyCreateData
{
    public string $created_at;
    public string $created_by;
    public int $id;
    public string $key;
    public string $key_name;
    public ?string $last_used_at = null;
    public string $last_used_from_addr;
    public string $name;
}

/** Request payload for ApiKey#remove. */
class ApiKeyRemoveMatch
{
    public int $id;
}

/** Auth entity data model. */
class Auth
{
    public string $account_id;
    public ?string $auth_data = null;
    public string $auth_method;
}

/** Request payload for Auth#load. */
class AuthLoadMatch
{
    public ?string $account_id = null;
    public ?string $auth_data = null;
    public ?string $auth_method = null;
}

/** Request payload for Auth#create. */
class AuthCreateData
{
    public string $branch_id;
    public string $project_id;
    public string $account_id;
    public ?string $auth_data = null;
    public string $auth_method;
}

/** Request payload for Auth#remove. */
class AuthRemoveMatch
{
    public ?string $auth_user_id = null;
    public string $branch_id;
    public string $project_id;
    public ?string $oauth_provider_id = null;
}

/** AuthLegacy entity data model. */
class AuthLegacy
{
    public string $auth_provider;
    public string $domain;
}

/** Request payload for AuthLegacy#create. */
class AuthLegacyCreateData
{
    public string $project_id;
    public string $auth_provider;
    public string $domain;
}

/** Request payload for AuthLegacy#remove. */
class AuthLegacyRemoveMatch
{
    public ?string $auth_provider = null;
    public string $project_id;
    public ?string $auth_user_id = null;
    public ?string $oauth_provider_id = null;
}

/** AvailablePreloadLibrary entity data model. */
class AvailablePreloadLibrary
{
    public string $description;
    public bool $is_default;
    public bool $is_experimental;
    public string $library_name;
    public string $version;
}

/** Request payload for AvailablePreloadLibrary#list. */
class AvailablePreloadLibraryListMatch
{
    public string $project_id;
}

/** BackupSchedule entity data model. */
class BackupSchedule
{
    public ?int $day = null;
    public string $frequency;
    public ?int $hour = null;
    public ?int $month = null;
    public ?int $retention_seconds = null;
}

/** Request payload for BackupSchedule#list. */
class BackupScheduleListMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Branch entity data model. */
class Branch
{
    public array $annotation;
    public array $annotations;
    public array $branch;
    public array $branches;
    public ?string $id = null;
    public ?array $pagination = null;
}

/** Request payload for Branch#load. */
class BranchLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for Branch#list. */
class BranchListMatch
{
    public string $project_id;
    public ?string $cursor = null;
    public ?bool $include_deleted = null;
    public ?int $limit = null;
    public ?string $search = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
}

/** Request payload for Branch#create. */
class BranchCreateData
{
    public string $project_id;
    public array $annotation;
    public array $annotations;
    public array $branch;
    public array $branches;
    public ?string $id = null;
    public ?array $pagination = null;
}

/** Request payload for Branch#update. */
class BranchUpdateData
{
    public string $id;
    public string $project_id;
    public ?array $annotation = null;
    public ?array $annotations = null;
    public ?array $branch = null;
    public ?array $branches = null;
    public ?array $pagination = null;
}

/** Request payload for Branch#remove. */
class BranchRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** BranchAiGateway entity data model. */
class BranchAiGateway
{
    public string $base_url;
    public bool $enabled;
    public ?string $id = null;
}

/** Request payload for BranchAiGateway#load. */
class BranchAiGatewayLoadMatch
{
    public string $id;
    public string $project_id;
}

/** BranchOperation entity data model. */
class BranchOperation
{
    public array $branch;
    public ?string $id = null;
    public array $operations;
}

/** Request payload for BranchOperation#create. */
class BranchOperationCreateData
{
    public string $id;
    public string $project_id;
    public array $branch;
    public array $operations;
}

/** BranchSchema entity data model. */
class BranchSchema
{
    public ?string $id = null;
    public array $tables;
}

/** Request payload for BranchSchema#load. */
class BranchSchemaLoadMatch
{
    public string $id;
    public string $project_id;
    public string $db_name;
    public ?string $format = null;
    public ?string $lsn = null;
    public ?string $timestamp = null;
}

/** BranchSchemaCompare entity data model. */
class BranchSchemaCompare
{
    public ?string $id = null;
}

/** Request payload for BranchSchemaCompare#load. */
class BranchSchemaCompareLoadMatch
{
    public string $id;
    public string $project_id;
    public ?string $base_branch_id = null;
    public ?string $base_lsn = null;
    public ?string $base_timestamp = null;
    public string $db_name;
    public ?string $lsn = null;
    public ?string $timestamp = null;
}

/** BranchStorage entity data model. */
class BranchStorage
{
    public bool $enabled;
    public bool $force_path_style;
    public ?string $id = null;
    public string $region;
    public string $s3_endpoint;
}

/** Request payload for BranchStorage#load. */
class BranchStorageLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Bucket entity data model. */
class Bucket
{
    public ?string $access_level = null;
    public string $created_at;
    public ?string $id = null;
    public string $name;
}

/** Request payload for Bucket#load. */
class BucketLoadMatch
{
    public string $branch_id;
    public string $bucket_id;
    public string $object_key;
    public string $project_id;
}

/** Request payload for Bucket#list. */
class BucketListMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Request payload for Bucket#create. */
class BucketCreateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $access_level = null;
    public string $created_at;
    public ?string $id = null;
    public string $name;
}

/** Request payload for Bucket#remove. */
class BucketRemoveMatch
{
    public string $branch_id;
    public ?string $bucket_id = null;
    public ?string $object_key = null;
    public string $project_id;
    public ?string $id = null;
}

/** BucketObjectsList entity data model. */
class BucketObjectsList
{
    public string $etag;
    public string $key;
    public string $last_modified;
    public int $size;
}

/** Request payload for BucketObjectsList#list. */
class BucketObjectsListListMatch
{
    public string $branch_id;
    public string $bucket_name;
    public string $project_id;
    public ?string $cursor = null;
    public ?string $delimiter = null;
    public ?int $limit = null;
    public ?string $prefix = null;
}

/** ConnectionUri entity data model. */
class ConnectionUri
{
    public string $uri;
}

/** Request payload for ConnectionUri#load. */
class ConnectionUriLoadMatch
{
    public string $project_id;
    public ?string $branch_id = null;
    public string $database_name;
    public ?string $endpoint_id = null;
    public ?bool $pooled = null;
    public string $role_name;
}

/** Consumption entity data model. */
class Consumption
{
    public array $branches;
    public array $pagination;
    public array $projects;
}

/** Request payload for Consumption#list. */
class ConsumptionListMatch
{
    public ?array $branch_id = null;
    public ?string $cursor = null;
    public string $from;
    public string $granularity;
    public ?int $limit = null;
    public ?array $metric = null;
    public ?string $org_id = null;
    public ?array $project_id = null;
    public string $to;
    public ?bool $include_v1_metric = null;
}

/** CreateCredential entity data model. */
class CreateCredential
{
    public ?string $name = null;
    public string $principal_type;
    public array $scopes;
}

/** Request payload for CreateCredential#create. */
class CreateCredentialCreateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $name = null;
    public string $principal_type;
    public array $scopes;
}

/** Credential entity data model. */
class Credential
{
    public ?string $branch_id = null;
    public string $created_at;
    public ?string $expires_at = null;
    public ?string $function_id = null;
    public ?string $id = null;
    public ?string $last_used_at = null;
    public ?string $name = null;
    public string $principal_type;
    public ?string $revoked_at = null;
    public array $scopes;
    public string $token_id;
    public string $token_id_short;
}

/** Request payload for Credential#list. */
class CredentialListMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Request payload for Credential#create. */
class CredentialCreateData
{
    public string $branch_id;
    public string $id;
    public string $project_id;
    public string $created_at;
    public ?string $expires_at = null;
    public ?string $function_id = null;
    public ?string $last_used_at = null;
    public ?string $name = null;
    public string $principal_type;
    public ?string $revoked_at = null;
    public array $scopes;
    public string $token_id;
    public string $token_id_short;
}

/** Request payload for Credential#remove. */
class CredentialRemoveMatch
{
    public string $branch_id;
    public string $id;
    public string $project_id;
}

/** CurrentUserInfo entity data model. */
class CurrentUserInfo
{
    public string $email;
    public string $image;
    public string $login;
    public string $name;
    public string $provider;
}

/** Request payload for CurrentUserInfo#list. */
class CurrentUserInfoListMatch
{
    public ?string $email = null;
    public ?string $image = null;
    public ?string $login = null;
    public ?string $name = null;
    public ?string $provider = null;
}

/** CustomDomain entity data model. */
class CustomDomain
{
    public string $domain;
    public string $entity_id;
    public string $entity_type;
}

/** Request payload for CustomDomain#create. */
class CustomDomainCreateData
{
    public string $branch_id;
    public string $project_id;
    public string $domain;
    public string $entity_id;
    public string $entity_type;
}

/** DataApi entity data model. */
class DataApi
{
    public ?bool $add_default_grants = null;
    public ?string $auth_provider = null;
    public ?array $available_schemas = null;
    public ?string $id = null;
    public ?string $jwks_url = null;
    public ?string $jwt_audience = null;
    public ?string $provider_name = null;
    public ?array $settings = null;
    public ?bool $skip_auth_schema = null;
    public string $status;
    public string $url;
}

/** Request payload for DataApi#load. */
class DataApiLoadMatch
{
    public string $branch_id;
    public string $id;
    public string $project_id;
}

/** Request payload for DataApi#create. */
class DataApiCreateData
{
    public string $branch_id;
    public string $id;
    public string $project_id;
    public ?bool $add_default_grants = null;
    public ?string $auth_provider = null;
    public ?array $available_schemas = null;
    public ?string $jwks_url = null;
    public ?string $jwt_audience = null;
    public ?string $provider_name = null;
    public ?array $settings = null;
    public ?bool $skip_auth_schema = null;
    public string $status;
    public string $url;
}

/** Request payload for DataApi#update. */
class DataApiUpdateData
{
    public string $branch_id;
    public string $id;
    public string $project_id;
    public ?bool $add_default_grants = null;
    public ?string $auth_provider = null;
    public ?array $available_schemas = null;
    public ?string $jwks_url = null;
    public ?string $jwt_audience = null;
    public ?string $provider_name = null;
    public ?array $settings = null;
    public ?bool $skip_auth_schema = null;
    public ?string $status = null;
    public ?string $url = null;
}

/** Request payload for DataApi#remove. */
class DataApiRemoveMatch
{
    public string $branch_id;
    public string $id;
    public string $project_id;
}

/** Database entity data model. */
class Database
{
    public string $branch_id;
    public string $created_at;
    public array $database;
    public int $id;
    public string $name;
    public string $owner_name;
    public string $updated_at;
}

/** Request payload for Database#load. */
class DatabaseLoadMatch
{
    public string $branch_id;
    public string $id;
    public string $project_id;
}

/** Request payload for Database#list. */
class DatabaseListMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Request payload for Database#create. */
class DatabaseCreateData
{
    public string $branch_id;
    public string $project_id;
    public string $created_at;
    public array $database;
    public int $id;
    public string $name;
    public string $owner_name;
    public string $updated_at;
}

/** Request payload for Database#update. */
class DatabaseUpdateData
{
    public string $branch_id;
    public string $id;
    public string $project_id;
    public ?string $created_at = null;
    public ?array $database = null;
    public ?string $name = null;
    public ?string $owner_name = null;
    public ?string $updated_at = null;
}

/** Request payload for Database#remove. */
class DatabaseRemoveMatch
{
    public string $branch_id;
    public string $id;
    public string $project_id;
}

/** EmailProvider entity data model. */
class EmailProvider
{
}

/** Request payload for EmailProvider#load. */
class EmailProviderLoadMatch
{
    public string $branch_id;
    public string $project_id;
}

/** EmailServer entity data model. */
class EmailServer
{
}

/** Request payload for EmailServer#load. */
class EmailServerLoadMatch
{
    public string $project_id;
}

/** Empty entity data model. */
class EmptyType
{
    public string $destination_org_id;
    public array $project_ids;
    public array $schedule;
}

/** Request payload for Empty#create. */
class EmptyCreateData
{
    public string $organization_id;
    public string $destination_org_id;
    public array $project_ids;
    public array $schedule;
}

/** Request payload for Empty#update. */
class EmptyUpdateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $destination_org_id = null;
    public ?array $project_ids = null;
    public ?array $schedule = null;
}

/** Request payload for Empty#remove. */
class EmptyRemoveMatch
{
    public string $organization_id;
}

/** Endpoint entity data model. */
class Endpoint
{
    public float $autoscaling_limit_max_cu;
    public float $autoscaling_limit_min_cu;
    public string $branch_id;
    public ?string $compute_release_version = null;
    public string $created_at;
    public string $creation_source;
    public string $current_state;
    public bool $disabled;
    public array $endpoint;
    public string $host;
    public string $id;
    public ?string $last_active = null;
    public ?string $name = null;
    public bool $passwordless_access;
    public ?string $pending_state = null;
    public bool $pooler_enabled;
    public string $pooler_mode;
    public string $project_id;
    public string $provisioner;
    public string $proxy_host;
    public string $region_id;
    public array $settings;
    public ?string $started_at = null;
    public int $suspend_timeout_seconds;
    public ?string $suspended_at = null;
    public string $type;
    public string $updated_at;
}

/** Request payload for Endpoint#load. */
class EndpointLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for Endpoint#list. */
class EndpointListMatch
{
    public ?string $branch_id = null;
    public string $project_id;
}

/** Request payload for Endpoint#create. */
class EndpointCreateData
{
    public string $project_id;
    public float $autoscaling_limit_max_cu;
    public float $autoscaling_limit_min_cu;
    public string $branch_id;
    public ?string $compute_release_version = null;
    public string $created_at;
    public string $creation_source;
    public string $current_state;
    public bool $disabled;
    public array $endpoint;
    public string $host;
    public string $id;
    public ?string $last_active = null;
    public ?string $name = null;
    public bool $passwordless_access;
    public ?string $pending_state = null;
    public bool $pooler_enabled;
    public string $pooler_mode;
    public string $provisioner;
    public string $proxy_host;
    public string $region_id;
    public array $settings;
    public ?string $started_at = null;
    public int $suspend_timeout_seconds;
    public ?string $suspended_at = null;
    public string $type;
    public string $updated_at;
}

/** Request payload for Endpoint#update. */
class EndpointUpdateData
{
    public string $id;
    public string $project_id;
    public ?float $autoscaling_limit_max_cu = null;
    public ?float $autoscaling_limit_min_cu = null;
    public ?string $branch_id = null;
    public ?string $compute_release_version = null;
    public ?string $created_at = null;
    public ?string $creation_source = null;
    public ?string $current_state = null;
    public ?bool $disabled = null;
    public ?array $endpoint = null;
    public ?string $host = null;
    public ?string $last_active = null;
    public ?string $name = null;
    public ?bool $passwordless_access = null;
    public ?string $pending_state = null;
    public ?bool $pooler_enabled = null;
    public ?string $pooler_mode = null;
    public ?string $provisioner = null;
    public ?string $proxy_host = null;
    public ?string $region_id = null;
    public ?array $settings = null;
    public ?string $started_at = null;
    public ?int $suspend_timeout_seconds = null;
    public ?string $suspended_at = null;
    public ?string $type = null;
    public ?string $updated_at = null;
}

/** Request payload for Endpoint#remove. */
class EndpointRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** EndpointOperation entity data model. */
class EndpointOperation
{
    public array $endpoint;
    public ?string $id = null;
    public array $operations;
}

/** Request payload for EndpointOperation#create. */
class EndpointOperationCreateData
{
    public string $id;
    public string $project_id;
    public array $endpoint;
    public array $operations;
}

/** Function entity data model. */
class FunctionType
{
    public array $custom_domains;
    public array $functions;
    public ?string $id = null;
    public ?array $pagination = null;
}

/** Request payload for Function#list. */
class FunctionListMatch
{
    public string $branch_id;
    public string $project_id;
    public ?string $cursor = null;
    public ?int $limit = null;
}

/** Request payload for Function#remove. */
class FunctionRemoveMatch
{
    public string $branch_id;
    public ?string $domain = null;
    public string $project_id;
    public ?string $id = null;
    public ?string $trigger_id = null;
}

/** Jwk entity data model. */
class Jwk
{
    public ?string $branch_id = null;
    public string $created_at;
    public string $id;
    public string $jwks_url;
    public ?string $jwt_audience = null;
    public string $project_id;
    public string $provider_name;
    public ?array $role_names = null;
    public ?bool $skip_role_creation = null;
    public string $updated_at;
}

/** Request payload for Jwk#list. */
class JwkListMatch
{
    public string $project_id;
}

/** Request payload for Jwk#create. */
class JwkCreateData
{
    public string $project_id;
    public ?string $branch_id = null;
    public string $created_at;
    public string $id;
    public string $jwks_url;
    public ?string $jwt_audience = null;
    public string $provider_name;
    public ?array $role_names = null;
    public ?bool $skip_role_creation = null;
    public string $updated_at;
}

/** Request payload for Jwk#remove. */
class JwkRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** MaskingRule entity data model. */
class MaskingRule
{
    public string $column_name;
    public string $database_name;
    public ?string $masking_function = null;
    public array $masking_rules;
    public ?string $masking_value = null;
    public string $schema_name;
    public string $table_name;
}

/** Request payload for MaskingRule#list. */
class MaskingRuleListMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Request payload for MaskingRule#update. */
class MaskingRuleUpdateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $column_name = null;
    public ?string $database_name = null;
    public ?string $masking_function = null;
    public ?array $masking_rules = null;
    public ?string $masking_value = null;
    public ?string $schema_name = null;
    public ?string $table_name = null;
}

/** Member entity data model. */
class Member
{
    public string $id;
    public ?string $joined_at = null;
    public string $org_id;
    public string $role;
    public string $user_id;
}

/** Request payload for Member#load. */
class MemberLoadMatch
{
    public string $id;
    public string $organization_id;
}

/** Request payload for Member#update. */
class MemberUpdateData
{
    public string $id;
    public string $organization_id;
    public ?string $joined_at = null;
    public ?string $org_id = null;
    public ?string $role = null;
    public ?string $user_id = null;
}

/** Request payload for Member#remove. */
class MemberRemoveMatch
{
    public string $id;
    public string $organization_id;
}

/** NeonAuthAllowLocalhost entity data model. */
class NeonAuthAllowLocalhost
{
    public bool $allow_localhost;
}

/** Request payload for NeonAuthAllowLocalhost#load. */
class NeonAuthAllowLocalhostLoadMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Request payload for NeonAuthAllowLocalhost#update. */
class NeonAuthAllowLocalhostUpdateData
{
    public string $branch_id;
    public string $project_id;
    public ?bool $allow_localhost = null;
}

/** NeonAuthConfig entity data model. */
class NeonAuthConfig
{
    public string $name;
}

/** Request payload for NeonAuthConfig#update. */
class NeonAuthConfigUpdateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $name = null;
}

/** NeonAuthCreateIntegration entity data model. */
class NeonAuthCreateIntegration
{
    public string $auth_provider;
    public string $branch_id;
    public ?string $database_name = null;
    public string $project_id;
    public ?string $role_name = null;
}

/** Request payload for NeonAuthCreateIntegration#create. */
class NeonAuthCreateIntegrationCreateData
{
    public string $auth_provider;
    public string $branch_id;
    public ?string $database_name = null;
    public string $project_id;
    public ?string $role_name = null;
}

/** NeonAuthCreateNewUser entity data model. */
class NeonAuthCreateNewUser
{
    public string $auth_provider;
    public string $email;
    public ?string $name = null;
    public string $project_id;
}

/** Request payload for NeonAuthCreateNewUser#create. */
class NeonAuthCreateNewUserCreateData
{
    public string $auth_provider;
    public string $email;
    public ?string $name = null;
    public string $project_id;
}

/** NeonAuthEmailAndPasswordConfig entity data model. */
class NeonAuthEmailAndPasswordConfig
{
    public bool $auto_sign_in_after_verification;
    public bool $disable_sign_up;
    public string $email_verification_method;
    public bool $enabled;
    public bool $require_email_verification;
    public bool $send_verification_email_on_sign_in;
    public bool $send_verification_email_on_sign_up;
}

/** Request payload for NeonAuthEmailAndPasswordConfig#load. */
class NeonAuthEmailAndPasswordConfigLoadMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Request payload for NeonAuthEmailAndPasswordConfig#update. */
class NeonAuthEmailAndPasswordConfigUpdateData
{
    public string $branch_id;
    public string $project_id;
    public ?bool $auto_sign_in_after_verification = null;
    public ?bool $disable_sign_up = null;
    public ?string $email_verification_method = null;
    public ?bool $enabled = null;
    public ?bool $require_email_verification = null;
    public ?bool $send_verification_email_on_sign_in = null;
    public ?bool $send_verification_email_on_sign_up = null;
}

/** NeonAuthEmailServerConfig entity data model. */
class NeonAuthEmailServerConfig
{
}

/** Request payload for NeonAuthEmailServerConfig#update. */
class NeonAuthEmailServerConfigUpdateData
{
    public ?string $branch_id = null;
    public string $project_id;
}

/** NeonAuthIntegration entity data model. */
class NeonAuthIntegration
{
    public string $auth_provider;
    public string $auth_provider_project_id;
    public ?string $base_url = null;
    public string $branch_id;
    public string $created_at;
    public string $db_name;
    public string $jwks_url;
    public ?string $name = null;
    public string $owned_by;
    public ?string $transfer_status = null;
}

/** Request payload for NeonAuthIntegration#load. */
class NeonAuthIntegrationLoadMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Request payload for NeonAuthIntegration#list. */
class NeonAuthIntegrationListMatch
{
    public string $project_id;
}

/** NeonAuthMagicLinkConfig entity data model. */
class NeonAuthMagicLinkConfig
{
    public bool $disable_sign_up;
    public bool $enabled;
    public int $expires_in;
}

/** Request payload for NeonAuthMagicLinkConfig#update. */
class NeonAuthMagicLinkConfigUpdateData
{
    public string $branch_id;
    public string $project_id;
    public ?bool $disable_sign_up = null;
    public ?bool $enabled = null;
    public ?int $expires_in = null;
}

/** NeonAuthOauthProvider entity data model. */
class NeonAuthOauthProvider
{
    public ?string $client_id = null;
    public ?string $client_secret = null;
    public string $id;
    public ?string $microsoft_tenant_id = null;
    public string $type;
}

/** Request payload for NeonAuthOauthProvider#list. */
class NeonAuthOauthProviderListMatch
{
    public ?string $branch_id = null;
    public string $project_id;
}

/** Request payload for NeonAuthOauthProvider#create. */
class NeonAuthOauthProviderCreateData
{
    public ?string $branch_id = null;
    public string $project_id;
    public ?string $client_id = null;
    public ?string $client_secret = null;
    public string $id;
    public ?string $microsoft_tenant_id = null;
    public string $type;
}

/** Request payload for NeonAuthOauthProvider#update. */
class NeonAuthOauthProviderUpdateData
{
    public ?string $branch_id = null;
    public string $id;
    public string $project_id;
    public ?string $client_id = null;
    public ?string $client_secret = null;
    public ?string $microsoft_tenant_id = null;
    public ?string $type = null;
}

/** NeonAuthOrganizationConfig entity data model. */
class NeonAuthOrganizationConfig
{
    public string $creator_role;
    public bool $enabled;
    public int $membership_limit;
    public int $organization_limit;
    public bool $send_invitation_email;
}

/** Request payload for NeonAuthOrganizationConfig#update. */
class NeonAuthOrganizationConfigUpdateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $creator_role = null;
    public ?bool $enabled = null;
    public ?int $membership_limit = null;
    public ?int $organization_limit = null;
    public ?bool $send_invitation_email = null;
}

/** NeonAuthPhoneNumberConfig entity data model. */
class NeonAuthPhoneNumberConfig
{
    public bool $enabled;
    public ?int $otp_expires_in = null;
}

/** Request payload for NeonAuthPhoneNumberConfig#load. */
class NeonAuthPhoneNumberConfigLoadMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Request payload for NeonAuthPhoneNumberConfig#update. */
class NeonAuthPhoneNumberConfigUpdateData
{
    public string $branch_id;
    public string $project_id;
    public ?bool $enabled = null;
    public ?int $otp_expires_in = null;
}

/** NeonAuthPluginConfig entity data model. */
class NeonAuthPluginConfig
{
    public ?string $client_id = null;
    public ?string $client_secret = null;
    public string $id;
    public string $type;
}

/** Request payload for NeonAuthPluginConfig#list. */
class NeonAuthPluginConfigListMatch
{
    public string $branch_id;
    public string $project_id;
}

/** NeonAuthRedirectUriWhitelistDomain entity data model. */
class NeonAuthRedirectUriWhitelistDomain
{
    public string $auth_provider;
    public string $domain;
}

/** Request payload for NeonAuthRedirectUriWhitelistDomain#list. */
class NeonAuthRedirectUriWhitelistDomainListMatch
{
    public ?string $branch_id = null;
    public string $project_id;
}

/** NeonAuthTransferAuthProviderProject entity data model. */
class NeonAuthTransferAuthProviderProject
{
    public string $auth_provider;
    public string $project_id;
    public string $url;
}

/** Request payload for NeonAuthTransferAuthProviderProject#create. */
class NeonAuthTransferAuthProviderProjectCreateData
{
    public string $auth_provider;
    public string $project_id;
    public string $url;
}

/** NeonAuthWebhookConfig entity data model. */
class NeonAuthWebhookConfig
{
    public bool $enabled;
    public ?array $enabled_events = null;
    public ?int $timeout_seconds = null;
    public ?string $webhook_url = null;
}

/** Request payload for NeonAuthWebhookConfig#list. */
class NeonAuthWebhookConfigListMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Request payload for NeonAuthWebhookConfig#update. */
class NeonAuthWebhookConfigUpdateData
{
    public string $branch_id;
    public string $project_id;
    public ?bool $enabled = null;
    public ?array $enabled_events = null;
    public ?int $timeout_seconds = null;
    public ?string $webhook_url = null;
}

/** NeonFunction entity data model. */
class NeonFunction
{
    public mixed $active_deployment = null;
    public string $created_at;
    public mixed $current_deployment = null;
    public string $id;
    public string $invocation_url;
    public string $name;
    public string $slug;
}

/** Request payload for NeonFunction#load. */
class NeonFunctionLoadMatch
{
    public string $branch_id;
    public string $id;
    public string $project_id;
}

/** Request payload for NeonFunction#update. */
class NeonFunctionUpdateData
{
    public string $branch_id;
    public string $id;
    public string $project_id;
    public mixed $active_deployment = null;
    public ?string $created_at = null;
    public mixed $current_deployment = null;
    public ?string $invocation_url = null;
    public ?string $name = null;
    public ?string $slug = null;
}

/** NeonFunctionDeployment entity data model. */
class NeonFunctionDeployment
{
}

/** Request payload for NeonFunctionDeployment#create. */
class NeonFunctionDeploymentCreateData
{
    public string $branch_id;
    public string $project_id;
    public string $slug;
}

/** Operation entity data model. */
class Operation
{
    public string $action;
    public ?string $branch_id = null;
    public string $created_at;
    public ?string $endpoint_id = null;
    public ?string $error = null;
    public int $failures_count;
    public string $id;
    public ?string $name = null;
    public array $operations;
    public array $pagination;
    public string $project_id;
    public ?string $retry_at = null;
    public string $status;
    public int $total_duration_ms;
    public string $updated_at;
}

/** Request payload for Operation#load. */
class OperationLoadMatch
{
    public string $id;
    public string $project_id;
}

/** Request payload for Operation#list. */
class OperationListMatch
{
    public string $project_id;
    public ?string $cursor = null;
    public ?int $limit = null;
}

/** Request payload for Operation#create. */
class OperationCreateData
{
    public string $branch_id;
    public string $project_id;
    public string $action;
    public string $created_at;
    public ?string $endpoint_id = null;
    public ?string $error = null;
    public int $failures_count;
    public string $id;
    public ?string $name = null;
    public array $operations;
    public array $pagination;
    public ?string $retry_at = null;
    public string $status;
    public int $total_duration_ms;
    public string $updated_at;
}

/** OrgApiKeyCreate entity data model. */
class OrgApiKeyCreate
{
    public ?string $created_at = null;
    public ?string $created_by = null;
    public ?int $id = null;
    public ?string $key = null;
    public ?string $name = null;
}

/** Request payload for OrgApiKeyCreate#create. */
class OrgApiKeyCreateCreateData
{
    public string $organization_id;
    public ?string $created_at = null;
    public ?string $created_by = null;
    public ?int $id = null;
    public ?string $key = null;
    public ?string $name = null;
}

/** OrgApiKeyRevoke entity data model. */
class OrgApiKeyRevoke
{
}

/** Request payload for OrgApiKeyRevoke#remove. */
class OrgApiKeyRevokeRemoveMatch
{
    public int $key_id;
    public string $organization_id;
}

/** OrgApiKeysListResponseItem entity data model. */
class OrgApiKeysListResponseItem
{
    public string $created_at;
    public array $created_by;
    public int $id;
    public ?string $last_used_at = null;
    public string $last_used_from_addr;
    public string $name;
    public ?string $project_id = null;
}

/** Request payload for OrgApiKeysListResponseItem#list. */
class OrgApiKeysListResponseItemListMatch
{
    public string $organization_id;
}

/** Organization entity data model. */
class Organization
{
    public ?bool $allow_hipaa_projects = null;
    public string $created_at;
    public string $handle;
    public string $id;
    public string $label;
    public string $managed_by;
    public string $name;
    public string $plan;
    public ?bool $require_mfa = null;
    public string $updated_at;
}

/** Request payload for Organization#load. */
class OrganizationLoadMatch
{
    public string $id;
}

/** Request payload for Organization#list. */
class OrganizationListMatch
{
    public ?bool $allow_hipaa_projects = null;
    public ?string $created_at = null;
    public ?string $handle = null;
    public ?string $id = null;
    public ?string $label = null;
    public ?string $managed_by = null;
    public ?string $name = null;
    public ?string $plan = null;
    public ?bool $require_mfa = null;
    public ?string $updated_at = null;
}

/** Request payload for Organization#create. */
class OrganizationCreateData
{
    public string $id;
    public string $region_id;
    public string $vpc_endpoint_id;
    public ?bool $allow_hipaa_projects = null;
    public string $created_at;
    public string $handle;
    public string $label;
    public string $managed_by;
    public string $name;
    public string $plan;
    public ?bool $require_mfa = null;
    public string $updated_at;
}

/** Request payload for Organization#remove. */
class OrganizationRemoveMatch
{
    public string $id;
    public string $region_id;
    public string $vpc_endpoint_id;
}

/** OrganizationInvitation entity data model. */
class OrganizationInvitation
{
    public string $email;
    public string $id;
    public array $invitations;
    public string $invited_at;
    public string $invited_by;
    public string $org_id;
    public string $role;
}

/** Request payload for OrganizationInvitation#list. */
class OrganizationInvitationListMatch
{
    public string $id;
}

/** Request payload for OrganizationInvitation#create. */
class OrganizationInvitationCreateData
{
    public string $id;
    public string $email;
    public array $invitations;
    public string $invited_at;
    public string $invited_by;
    public string $org_id;
    public string $role;
}

/** Presign entity data model. */
class Presign
{
    public ?string $content_type = null;
    public ?int $expires_in_seconds = null;
    public string $operation;
}

/** Request payload for Presign#create. */
class PresignCreateData
{
    public string $branch_id;
    public string $bucket_id;
    public string $object_key;
    public string $project_id;
    public ?string $content_type = null;
    public ?int $expires_in_seconds = null;
    public string $operation;
}

/** Project entity data model. */
class Project
{
    public int $active_time_seconds;
    public array $applications;
    public int $branch_logical_size_limit;
    public int $branch_logical_size_limit_bytes;
    public ?string $compute_last_active_at = null;
    public int $compute_time_seconds;
    public string $consumption_period_end;
    public string $consumption_period_start;
    public int $cpu_used_sec;
    public string $created_at;
    public string $creation_source;
    public int $data_storage_bytes_hour;
    public int $data_transfer_bytes;
    public ?array $default_endpoint_settings = null;
    public ?string $effective_project_permission = null;
    public ?string $hipaa_enabled_at = null;
    public int $history_retention_seconds;
    public string $id;
    public array $integrations;
    public string $label;
    public ?string $maintenance_scheduled_for = null;
    public ?string $maintenance_starts_at = null;
    public string $name;
    public ?string $org_id = null;
    public array $owner;
    public string $owner_id;
    public array $pagination;
    public int $pg_version;
    public string $platform_id;
    public array $project;
    public array $projects;
    public string $provisioner;
    public string $proxy_host;
    public ?string $quota_reset_at = null;
    public string $region_id;
    public ?array $settings = null;
    public bool $store_passwords;
    public ?int $synthetic_storage_size = null;
    public ?array $unavailable_project_ids = null;
    public string $updated_at;
    public int $written_data_bytes;
}

/** Request payload for Project#load. */
class ProjectLoadMatch
{
    public string $id;
}

/** Request payload for Project#list. */
class ProjectListMatch
{
    public ?string $cursor = null;
    public ?int $limit = null;
    public ?string $org_id = null;
    public ?bool $recoverable = null;
    public ?string $search = null;
    public ?int $timeout = null;
}

/** Request payload for Project#create. */
class ProjectCreateData
{
    public string $id;
    public string $vpc_endpoint_id;
    public int $active_time_seconds;
    public array $applications;
    public int $branch_logical_size_limit;
    public int $branch_logical_size_limit_bytes;
    public ?string $compute_last_active_at = null;
    public int $compute_time_seconds;
    public string $consumption_period_end;
    public string $consumption_period_start;
    public int $cpu_used_sec;
    public string $created_at;
    public string $creation_source;
    public int $data_storage_bytes_hour;
    public int $data_transfer_bytes;
    public ?array $default_endpoint_settings = null;
    public ?string $effective_project_permission = null;
    public ?string $hipaa_enabled_at = null;
    public int $history_retention_seconds;
    public array $integrations;
    public string $label;
    public ?string $maintenance_scheduled_for = null;
    public ?string $maintenance_starts_at = null;
    public string $name;
    public ?string $org_id = null;
    public array $owner;
    public string $owner_id;
    public array $pagination;
    public int $pg_version;
    public string $platform_id;
    public array $project;
    public array $projects;
    public string $provisioner;
    public string $proxy_host;
    public ?string $quota_reset_at = null;
    public string $region_id;
    public ?array $settings = null;
    public bool $store_passwords;
    public ?int $synthetic_storage_size = null;
    public ?array $unavailable_project_ids = null;
    public string $updated_at;
    public int $written_data_bytes;
}

/** Request payload for Project#update. */
class ProjectUpdateData
{
    public string $id;
    public string $request_id;
    public ?int $active_time_seconds = null;
    public ?array $applications = null;
    public ?int $branch_logical_size_limit = null;
    public ?int $branch_logical_size_limit_bytes = null;
    public ?string $compute_last_active_at = null;
    public ?int $compute_time_seconds = null;
    public ?string $consumption_period_end = null;
    public ?string $consumption_period_start = null;
    public ?int $cpu_used_sec = null;
    public ?string $created_at = null;
    public ?string $creation_source = null;
    public ?int $data_storage_bytes_hour = null;
    public ?int $data_transfer_bytes = null;
    public ?array $default_endpoint_settings = null;
    public ?string $effective_project_permission = null;
    public ?string $hipaa_enabled_at = null;
    public ?int $history_retention_seconds = null;
    public ?array $integrations = null;
    public ?string $label = null;
    public ?string $maintenance_scheduled_for = null;
    public ?string $maintenance_starts_at = null;
    public ?string $name = null;
    public ?string $org_id = null;
    public ?array $owner = null;
    public ?string $owner_id = null;
    public ?array $pagination = null;
    public ?int $pg_version = null;
    public ?string $platform_id = null;
    public ?array $project = null;
    public ?array $projects = null;
    public ?string $provisioner = null;
    public ?string $proxy_host = null;
    public ?string $quota_reset_at = null;
    public ?string $region_id = null;
    public ?array $settings = null;
    public ?bool $store_passwords = null;
    public ?int $synthetic_storage_size = null;
    public ?array $unavailable_project_ids = null;
    public ?string $updated_at = null;
    public ?int $written_data_bytes = null;
}

/** Request payload for Project#remove. */
class ProjectRemoveMatch
{
    public string $id;
    public ?string $vpc_endpoint_id = null;
}

/** ProjectBranchLogField entity data model. */
class ProjectBranchLogField
{
    public array $fields;
}

/** Request payload for ProjectBranchLogField#list. */
class ProjectBranchLogFieldListMatch
{
    public string $branch_id;
    public string $project_id;
}

/** ProjectBranchLogFieldValue entity data model. */
class ProjectBranchLogFieldValue
{
    public bool $is_truncated;
    public array $values;
}

/** Request payload for ProjectBranchLogFieldValue#list. */
class ProjectBranchLogFieldValueListMatch
{
    public string $branch_id;
    public string $field_name;
    public string $project_id;
    public ?string $end_time = null;
    public ?int $limit = null;
    public ?string $since = null;
    public ?string $source = null;
    public ?string $start_time = null;
}

/** ProjectBranchLogsQuery entity data model. */
class ProjectBranchLogsQuery
{
    public ?string $body_contains = null;
    public ?string $cursor = null;
    public ?string $end_time = null;
    public bool $is_truncated;
    public ?int $limit = null;
    public ?string $logql = null;
    public array $logs;
    public ?string $minimum_severity = null;
    public ?string $next_cursor = null;
    public ?string $scope_name = null;
    public ?string $service_name = null;
    public ?string $severity_text = null;
    public mixed $since = null;
    public ?string $sort_order = null;
    public ?string $source = null;
    public ?string $start_time = null;
    public ?string $trace_id = null;
}

/** Request payload for ProjectBranchLogsQuery#create. */
class ProjectBranchLogsQueryCreateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $body_contains = null;
    public ?string $cursor = null;
    public ?string $end_time = null;
    public bool $is_truncated;
    public ?int $limit = null;
    public ?string $logql = null;
    public array $logs;
    public ?string $minimum_severity = null;
    public ?string $next_cursor = null;
    public ?string $scope_name = null;
    public ?string $service_name = null;
    public ?string $severity_text = null;
    public mixed $since = null;
    public ?string $sort_order = null;
    public ?string $source = null;
    public ?string $start_time = null;
    public ?string $trace_id = null;
}

/** ProjectMember entity data model. */
class ProjectMember
{
    public ?string $effective_project_permission = null;
    public ?string $email = null;
    public ?string $explicit_project_permission = null;
    public ?string $grant_source = null;
    public ?string $id = null;
    public string $member_id;
    public ?string $name = null;
    public ?string $org_default_project_permission = null;
    public string $org_role;
    public ?string $project_role = null;
    public string $user_id;
}

/** Request payload for ProjectMember#list. */
class ProjectMemberListMatch
{
    public string $id;
    public ?string $cursor = null;
    public ?int $limit = null;
}

/** ProjectMemberRole entity data model. */
class ProjectMemberRole
{
    public ?bool $credential_rotation_recommended = null;
    public ?string $effective_project_permission = null;
    public ?string $email = null;
    public ?string $explicit_project_permission = null;
    public string $member_id;
    public ?string $name = null;
    public ?bool $org_api_key_rotation_recommended = null;
    public ?string $org_default_project_permission = null;
    public string $org_role;
    public string $project_id;
    public ?string $project_role = null;
    public string $role;
    public string $user_id;
}

/** Request payload for ProjectMemberRole#update. */
class ProjectMemberRoleUpdateData
{
    public string $member_id;
    public string $project_id;
    public ?bool $confirm_self_demotion = null;
    public ?bool $credential_rotation_recommended = null;
    public ?string $effective_project_permission = null;
    public ?string $email = null;
    public ?string $explicit_project_permission = null;
    public ?string $name = null;
    public ?bool $org_api_key_rotation_recommended = null;
    public ?string $org_default_project_permission = null;
    public ?string $org_role = null;
    public ?string $project_role = null;
    public ?string $role = null;
    public ?string $user_id = null;
}

/** Request payload for ProjectMemberRole#remove. */
class ProjectMemberRoleRemoveMatch
{
    public string $member_id;
    public string $project_id;
    public ?bool $confirm_self_lockout = null;
}

/** ProjectPermission entity data model. */
class ProjectPermission
{
    public string $email;
    public string $granted_at;
    public string $granted_to_email;
    public string $id;
    public ?string $revoked_at = null;
}

/** Request payload for ProjectPermission#list. */
class ProjectPermissionListMatch
{
    public string $id;
}

/** Request payload for ProjectPermission#create. */
class ProjectPermissionCreateData
{
    public string $id;
    public string $email;
    public string $granted_at;
    public string $granted_to_email;
    public ?string $revoked_at = null;
}

/** Request payload for ProjectPermission#remove. */
class ProjectPermissionRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** ProjectRecover entity data model. */
class ProjectRecover
{
    public array $branches;
    public ?string $id = null;
    public array $project;
}

/** Request payload for ProjectRecover#create. */
class ProjectRecoverCreateData
{
    public string $id;
    public array $branches;
    public array $project;
}

/** ProjectTransferRequest entity data model. */
class ProjectTransferRequest
{
    public ?string $id = null;
    public ?int $ttl_seconds = null;
}

/** Request payload for ProjectTransferRequest#create. */
class ProjectTransferRequestCreateData
{
    public string $id;
    public ?int $ttl_seconds = null;
}

/** Region entity data model. */
class Region
{
    public bool $default;
    public string $geo_lat;
    public string $geo_long;
    public string $name;
    public string $region_id;
}

/** Request payload for Region#list. */
class RegionListMatch
{
    public ?string $org_id = null;
}

/** Role entity data model. */
class Role
{
    public ?string $authentication_method = null;
    public string $branch_id;
    public string $created_at;
    public ?string $id = null;
    public string $name;
    public ?string $password = null;
    public ?bool $protected = null;
    public array $role;
    public string $updated_at;
}

/** Request payload for Role#load. */
class RoleLoadMatch
{
    public string $branch_id;
    public string $id;
    public string $project_id;
}

/** Request payload for Role#list. */
class RoleListMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Request payload for Role#create. */
class RoleCreateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $authentication_method = null;
    public string $created_at;
    public ?string $id = null;
    public string $name;
    public ?string $password = null;
    public ?bool $protected = null;
    public array $role;
    public string $updated_at;
}

/** Request payload for Role#remove. */
class RoleRemoveMatch
{
    public string $branch_id;
    public string $id;
    public string $project_id;
}

/** RoleOperation entity data model. */
class RoleOperation
{
    public array $operations;
    public array $role;
}

/** Request payload for RoleOperation#create. */
class RoleOperationCreateData
{
    public string $branch_id;
    public string $project_id;
    public string $role_name;
    public array $operations;
    public array $role;
}

/** RolePassword entity data model. */
class RolePassword
{
    public string $password;
}

/** Request payload for RolePassword#load. */
class RolePasswordLoadMatch
{
    public string $branch_id;
    public string $project_id;
    public string $role_name;
}

/** SendNeonAuthTestEmail entity data model. */
class SendNeonAuthTestEmail
{
    public ?string $error_message = null;
    public string $host;
    public string $password;
    public int $port;
    public string $recipient_email;
    public string $sender_email;
    public string $sender_name;
    public bool $success;
    public string $username;
}

/** Request payload for SendNeonAuthTestEmail#create. */
class SendNeonAuthTestEmailCreateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $error_message = null;
    public string $host;
    public string $password;
    public int $port;
    public string $recipient_email;
    public string $sender_email;
    public string $sender_name;
    public bool $success;
    public string $username;
}

/** Snapshot entity data model. */
class Snapshot
{
    public string $created_at;
    public ?int $diff_size = null;
    public ?string $expires_at = null;
    public ?int $full_size = null;
    public string $id;
    public ?string $lsn = null;
    public ?bool $manual = null;
    public string $name;
    public array $operations;
    public ?string $slug = null;
    public array $snapshot;
    public ?string $source_branch_id = null;
    public ?string $timestamp = null;
}

/** Request payload for Snapshot#list. */
class SnapshotListMatch
{
    public string $project_id;
}

/** Request payload for Snapshot#create. */
class SnapshotCreateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $expires_at = null;
    public ?string $lsn = null;
    public ?string $name = null;
    public ?string $slug = null;
    public ?string $timestamp = null;
    public string $created_at;
    public ?int $diff_size = null;
    public ?int $full_size = null;
    public string $id;
    public ?bool $manual = null;
    public array $operations;
    public array $snapshot;
    public ?string $source_branch_id = null;
}

/** Request payload for Snapshot#update. */
class SnapshotUpdateData
{
    public string $id;
    public string $project_id;
    public ?string $created_at = null;
    public ?int $diff_size = null;
    public ?string $expires_at = null;
    public ?int $full_size = null;
    public ?string $lsn = null;
    public ?bool $manual = null;
    public ?string $name = null;
    public ?array $operations = null;
    public ?string $slug = null;
    public ?array $snapshot = null;
    public ?string $source_branch_id = null;
    public ?string $timestamp = null;
}

/** Request payload for Snapshot#remove. */
class SnapshotRemoveMatch
{
    public string $id;
    public string $project_id;
}

/** SpendingLimit entity data model. */
class SpendingLimit
{
    public int $spending_limit_cents;
}

/** Request payload for SpendingLimit#load. */
class SpendingLimitLoadMatch
{
    public string $organization_id;
}

/** Request payload for SpendingLimit#update. */
class SpendingLimitUpdateData
{
    public string $organization_id;
    public ?int $spending_limit_cents = null;
}

/** Trigger entity data model. */
class Trigger
{
    public ?string $id = null;
    public array $triggers;
}

/** Request payload for Trigger#load. */
class TriggerLoadMatch
{
    public string $branch_id;
    public string $id;
    public string $project_id;
}

/** Request payload for Trigger#list. */
class TriggerListMatch
{
    public string $branch_id;
    public string $project_id;
}

/** Request payload for Trigger#create. */
class TriggerCreateData
{
    public string $branch_id;
    public string $project_id;
    public ?string $id = null;
    public array $triggers;
}

/** Request payload for Trigger#update. */
class TriggerUpdateData
{
    public string $branch_id;
    public string $id;
    public string $project_id;
    public ?array $triggers = null;
}

/** UpdateNeonAuthUserRole entity data model. */
class UpdateNeonAuthUserRole
{
    public string $id;
    public array $roles;
}

/** Request payload for UpdateNeonAuthUserRole#update. */
class UpdateNeonAuthUserRoleUpdateData
{
    public string $branch_id;
    public string $project_id;
    public string $user_id;
    public ?string $id = null;
    public ?array $roles = null;
}

/** VpcEndpoint entity data model. */
class VpcEndpoint
{
    public array $example_restricted_projects;
    public ?string $id = null;
    public string $label;
    public int $num_restricted_projects;
    public string $region_id;
    public string $state;
    public string $vpc_endpoint_id;
}

/** Request payload for VpcEndpoint#load. */
class VpcEndpointLoadMatch
{
    public string $id;
    public string $organization_id;
    public string $region_id;
}

/** Request payload for VpcEndpoint#list. */
class VpcEndpointListMatch
{
    public string $project_id;
}

