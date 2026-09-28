# Typed models for the Neon SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Anonymize(TypedDict, total=False):
    completed_at: str
    masked_columns: int
    started_at: str
    triggered_by: str
    triggered_by_username: str


class AnonymizeCreateDataRequired(TypedDict):
    branch_id: str
    project_id: str


class AnonymizeCreateData(AnonymizeCreateDataRequired, total=False):
    completed_at: str
    masked_columns: int
    started_at: str
    triggered_by: str
    triggered_by_username: str


class AnonymizedBranchStatus(TypedDict, total=False):
    completed_at: str
    masked_columns: int
    started_at: str
    triggered_by: str
    triggered_by_username: str


class AnonymizedBranchStatusLoadMatch(TypedDict):
    branch_id: str
    project_id: str


class ApiKeyRequired(TypedDict):
    created_at: str
    created_by: str
    id: int
    key: str
    key_name: str
    last_used_from_addr: str
    name: str


class ApiKey(ApiKeyRequired, total=False):
    last_used_at: str


class ApiKeyListMatch(TypedDict, total=False):
    created_at: str
    created_by: str
    id: int
    key: str
    key_name: str
    last_used_at: str
    last_used_from_addr: str
    name: str


class ApiKeyCreateDataRequired(TypedDict):
    created_at: str
    created_by: str
    id: int
    key: str
    key_name: str
    last_used_from_addr: str
    name: str


class ApiKeyCreateData(ApiKeyCreateDataRequired, total=False):
    last_used_at: str


class ApiKeyRemoveMatch(TypedDict):
    id: int


class AuthRequired(TypedDict):
    account_id: str
    auth_method: str


class Auth(AuthRequired, total=False):
    auth_data: str


class AuthLoadMatch(TypedDict, total=False):
    account_id: str
    auth_data: str
    auth_method: str


class AuthCreateDataRequired(TypedDict):
    branch_id: str
    project_id: str
    account_id: str
    auth_method: str


class AuthCreateData(AuthCreateDataRequired, total=False):
    auth_data: str


class AuthRemoveMatchRequired(TypedDict):
    branch_id: str
    project_id: str


class AuthRemoveMatch(AuthRemoveMatchRequired, total=False):
    auth_user_id: str
    oauth_provider_id: str


class AuthLegacy(TypedDict):
    auth_provider: str
    domain: str


class AuthLegacyCreateData(TypedDict):
    project_id: str
    auth_provider: str
    domain: str


class AuthLegacyRemoveMatchRequired(TypedDict):
    project_id: str


class AuthLegacyRemoveMatch(AuthLegacyRemoveMatchRequired, total=False):
    auth_provider: str
    auth_user_id: str
    oauth_provider_id: str


class AvailablePreloadLibrary(TypedDict):
    description: str
    is_default: bool
    is_experimental: bool
    library_name: str
    version: str


class AvailablePreloadLibraryListMatch(TypedDict):
    project_id: str


class BackupScheduleRequired(TypedDict):
    frequency: str


class BackupSchedule(BackupScheduleRequired, total=False):
    day: int
    hour: int
    month: int
    retention_seconds: int


class BackupScheduleListMatch(TypedDict):
    branch_id: str
    project_id: str


class BranchRequired(TypedDict):
    annotation: dict
    annotations: dict
    branch: dict
    branches: list


class Branch(BranchRequired, total=False):
    id: str
    pagination: dict


class BranchLoadMatch(TypedDict):
    id: str
    project_id: str


class BranchListMatchRequired(TypedDict):
    project_id: str


class BranchListMatch(BranchListMatchRequired, total=False):
    cursor: str
    include_deleted: bool
    limit: int
    search: str
    sort_by: str
    sort_order: str


class BranchCreateDataRequired(TypedDict):
    project_id: str
    annotation: dict
    annotations: dict
    branch: dict
    branches: list


class BranchCreateData(BranchCreateDataRequired, total=False):
    id: str
    pagination: dict


class BranchUpdateDataRequired(TypedDict):
    id: str
    project_id: str


class BranchUpdateData(BranchUpdateDataRequired, total=False):
    annotation: dict
    annotations: dict
    branch: dict
    branches: list
    pagination: dict


class BranchRemoveMatch(TypedDict):
    id: str
    project_id: str


class BranchAiGatewayRequired(TypedDict):
    base_url: str
    enabled: bool


class BranchAiGateway(BranchAiGatewayRequired, total=False):
    id: str


class BranchAiGatewayLoadMatch(TypedDict):
    id: str
    project_id: str


class BranchOperationRequired(TypedDict):
    branch: dict
    operations: list


class BranchOperation(BranchOperationRequired, total=False):
    id: str


class BranchOperationCreateData(TypedDict):
    id: str
    project_id: str
    branch: dict
    operations: list


class BranchSchemaRequired(TypedDict):
    tables: list


class BranchSchema(BranchSchemaRequired, total=False):
    id: str


class BranchSchemaLoadMatchRequired(TypedDict):
    id: str
    project_id: str
    db_name: str


class BranchSchemaLoadMatch(BranchSchemaLoadMatchRequired, total=False):
    format: str
    lsn: str
    timestamp: str


class BranchSchemaCompare(TypedDict, total=False):
    id: str


class BranchSchemaCompareLoadMatchRequired(TypedDict):
    id: str
    project_id: str
    db_name: str


class BranchSchemaCompareLoadMatch(BranchSchemaCompareLoadMatchRequired, total=False):
    base_branch_id: str
    base_lsn: str
    base_timestamp: str
    lsn: str
    timestamp: str


class BranchStorageRequired(TypedDict):
    enabled: bool
    force_path_style: bool
    region: str
    s3_endpoint: str


class BranchStorage(BranchStorageRequired, total=False):
    id: str


class BranchStorageLoadMatch(TypedDict):
    id: str
    project_id: str


class BucketRequired(TypedDict):
    created_at: str
    name: str


class Bucket(BucketRequired, total=False):
    access_level: str
    id: str


class BucketLoadMatch(TypedDict):
    branch_id: str
    bucket_id: str
    object_key: str
    project_id: str


class BucketListMatch(TypedDict):
    branch_id: str
    project_id: str


class BucketCreateDataRequired(TypedDict):
    branch_id: str
    project_id: str
    created_at: str
    name: str


class BucketCreateData(BucketCreateDataRequired, total=False):
    access_level: str
    id: str


class BucketRemoveMatchRequired(TypedDict):
    branch_id: str
    project_id: str


class BucketRemoveMatch(BucketRemoveMatchRequired, total=False):
    bucket_id: str
    object_key: str
    id: str


class BucketObjectsList(TypedDict):
    etag: str
    key: str
    last_modified: str
    size: int


class BucketObjectsListListMatchRequired(TypedDict):
    branch_id: str
    bucket_name: str
    project_id: str


class BucketObjectsListListMatch(BucketObjectsListListMatchRequired, total=False):
    cursor: str
    delimiter: str
    limit: int
    prefix: str


class ConnectionUri(TypedDict):
    uri: str


class ConnectionUriLoadMatchRequired(TypedDict):
    project_id: str
    database_name: str
    role_name: str


class ConnectionUriLoadMatch(ConnectionUriLoadMatchRequired, total=False):
    branch_id: str
    endpoint_id: str
    pooled: bool


class Consumption(TypedDict):
    branches: list
    pagination: dict
    projects: list


class ConsumptionListMatchRequired(TypedDict):
    granularity: str
    to: str


class ConsumptionListMatch(ConsumptionListMatchRequired, total=False):
    branch_id: list
    cursor: str
    limit: int
    metric: list
    org_id: str
    project_id: list
    include_v1_metric: bool


class CreateCredentialRequired(TypedDict):
    principal_type: str
    scopes: list


class CreateCredential(CreateCredentialRequired, total=False):
    name: str


class CreateCredentialCreateDataRequired(TypedDict):
    branch_id: str
    project_id: str
    principal_type: str
    scopes: list


class CreateCredentialCreateData(CreateCredentialCreateDataRequired, total=False):
    name: str


class CredentialRequired(TypedDict):
    created_at: str
    principal_type: str
    scopes: list
    token_id: str
    token_id_short: str


class Credential(CredentialRequired, total=False):
    branch_id: str
    expires_at: str
    function_id: str
    id: str
    last_used_at: str
    name: str
    revoked_at: str


class CredentialListMatch(TypedDict):
    branch_id: str
    project_id: str


class CredentialCreateDataRequired(TypedDict):
    branch_id: str
    id: str
    project_id: str
    created_at: str
    principal_type: str
    scopes: list
    token_id: str
    token_id_short: str


class CredentialCreateData(CredentialCreateDataRequired, total=False):
    expires_at: str
    function_id: str
    last_used_at: str
    name: str
    revoked_at: str


class CredentialRemoveMatch(TypedDict):
    branch_id: str
    id: str
    project_id: str


class CurrentUserInfo(TypedDict):
    email: str
    image: str
    login: str
    name: str
    provider: str


class CurrentUserInfoListMatch(TypedDict, total=False):
    email: str
    image: str
    login: str
    name: str
    provider: str


class CustomDomain(TypedDict):
    domain: str
    entity_id: str
    entity_type: str


class CustomDomainCreateData(TypedDict):
    branch_id: str
    project_id: str
    domain: str
    entity_id: str
    entity_type: str


class DataApiRequired(TypedDict):
    status: str
    url: str


class DataApi(DataApiRequired, total=False):
    add_default_grants: bool
    auth_provider: str
    available_schemas: list
    id: str
    jwks_url: str
    jwt_audience: str
    provider_name: str
    settings: dict
    skip_auth_schema: bool


class DataApiLoadMatch(TypedDict):
    branch_id: str
    id: str
    project_id: str


class DataApiCreateDataRequired(TypedDict):
    branch_id: str
    id: str
    project_id: str
    status: str
    url: str


class DataApiCreateData(DataApiCreateDataRequired, total=False):
    add_default_grants: bool
    auth_provider: str
    available_schemas: list
    jwks_url: str
    jwt_audience: str
    provider_name: str
    settings: dict
    skip_auth_schema: bool


class DataApiUpdateDataRequired(TypedDict):
    branch_id: str
    id: str
    project_id: str


class DataApiUpdateData(DataApiUpdateDataRequired, total=False):
    add_default_grants: bool
    auth_provider: str
    available_schemas: list
    jwks_url: str
    jwt_audience: str
    provider_name: str
    settings: dict
    skip_auth_schema: bool
    status: str
    url: str


class DataApiRemoveMatch(TypedDict):
    branch_id: str
    id: str
    project_id: str


class Database(TypedDict):
    branch_id: str
    created_at: str
    database: dict
    id: int
    name: str
    owner_name: str
    updated_at: str


class DatabaseLoadMatch(TypedDict):
    branch_id: str
    id: str
    project_id: str


class DatabaseListMatch(TypedDict):
    branch_id: str
    project_id: str


class DatabaseCreateData(TypedDict):
    branch_id: str
    project_id: str
    created_at: str
    database: dict
    id: int
    name: str
    owner_name: str
    updated_at: str


class DatabaseUpdateDataRequired(TypedDict):
    branch_id: str
    id: str
    project_id: str


class DatabaseUpdateData(DatabaseUpdateDataRequired, total=False):
    created_at: str
    database: dict
    name: str
    owner_name: str
    updated_at: str


class DatabaseRemoveMatch(TypedDict):
    branch_id: str
    id: str
    project_id: str


class EmailProvider(TypedDict):
    pass


class EmailProviderLoadMatch(TypedDict):
    branch_id: str
    project_id: str


class EmailServer(TypedDict):
    pass


class EmailServerLoadMatch(TypedDict):
    project_id: str


class Empty(TypedDict):
    destination_org_id: str
    project_ids: list
    schedule: list


class EmptyCreateData(TypedDict):
    organization_id: str
    destination_org_id: str
    project_ids: list
    schedule: list


class EmptyUpdateDataRequired(TypedDict):
    branch_id: str
    project_id: str


class EmptyUpdateData(EmptyUpdateDataRequired, total=False):
    destination_org_id: str
    project_ids: list
    schedule: list


class EmptyRemoveMatch(TypedDict):
    organization_id: str


class EndpointRequired(TypedDict):
    autoscaling_limit_max_cu: float
    autoscaling_limit_min_cu: float
    branch_id: str
    created_at: str
    creation_source: str
    current_state: str
    disabled: bool
    endpoint: dict
    host: str
    id: str
    passwordless_access: bool
    pooler_enabled: bool
    pooler_mode: str
    project_id: str
    provisioner: str
    proxy_host: str
    region_id: str
    settings: dict
    suspend_timeout_seconds: int
    type: str
    updated_at: str


class Endpoint(EndpointRequired, total=False):
    compute_release_version: str
    last_active: str
    name: str
    pending_state: str
    started_at: str
    suspended_at: str


class EndpointLoadMatch(TypedDict):
    id: str
    project_id: str


class EndpointListMatchRequired(TypedDict):
    project_id: str


class EndpointListMatch(EndpointListMatchRequired, total=False):
    branch_id: str


class EndpointCreateDataRequired(TypedDict):
    project_id: str
    autoscaling_limit_max_cu: float
    autoscaling_limit_min_cu: float
    branch_id: str
    created_at: str
    creation_source: str
    current_state: str
    disabled: bool
    endpoint: dict
    host: str
    id: str
    passwordless_access: bool
    pooler_enabled: bool
    pooler_mode: str
    provisioner: str
    proxy_host: str
    region_id: str
    settings: dict
    suspend_timeout_seconds: int
    type: str
    updated_at: str


class EndpointCreateData(EndpointCreateDataRequired, total=False):
    compute_release_version: str
    last_active: str
    name: str
    pending_state: str
    started_at: str
    suspended_at: str


class EndpointUpdateDataRequired(TypedDict):
    id: str
    project_id: str


class EndpointUpdateData(EndpointUpdateDataRequired, total=False):
    autoscaling_limit_max_cu: float
    autoscaling_limit_min_cu: float
    branch_id: str
    compute_release_version: str
    created_at: str
    creation_source: str
    current_state: str
    disabled: bool
    endpoint: dict
    host: str
    last_active: str
    name: str
    passwordless_access: bool
    pending_state: str
    pooler_enabled: bool
    pooler_mode: str
    provisioner: str
    proxy_host: str
    region_id: str
    settings: dict
    started_at: str
    suspend_timeout_seconds: int
    suspended_at: str
    type: str
    updated_at: str


class EndpointRemoveMatch(TypedDict):
    id: str
    project_id: str


class EndpointOperationRequired(TypedDict):
    endpoint: dict
    operations: list


class EndpointOperation(EndpointOperationRequired, total=False):
    id: str


class EndpointOperationCreateData(TypedDict):
    id: str
    project_id: str
    endpoint: dict
    operations: list


class FunctionRequired(TypedDict):
    custom_domains: list
    functions: list


class Function(FunctionRequired, total=False):
    id: str
    pagination: dict


class FunctionListMatchRequired(TypedDict):
    branch_id: str
    project_id: str


class FunctionListMatch(FunctionListMatchRequired, total=False):
    cursor: str
    limit: int


class FunctionRemoveMatchRequired(TypedDict):
    branch_id: str
    project_id: str


class FunctionRemoveMatch(FunctionRemoveMatchRequired, total=False):
    domain: str
    id: str
    trigger_id: str


class JwkRequired(TypedDict):
    created_at: str
    id: str
    jwks_url: str
    project_id: str
    provider_name: str
    updated_at: str


class Jwk(JwkRequired, total=False):
    branch_id: str
    jwt_audience: str
    role_names: list
    skip_role_creation: bool


class JwkListMatch(TypedDict):
    project_id: str


class JwkCreateDataRequired(TypedDict):
    project_id: str
    created_at: str
    id: str
    jwks_url: str
    provider_name: str
    updated_at: str


class JwkCreateData(JwkCreateDataRequired, total=False):
    branch_id: str
    jwt_audience: str
    role_names: list
    skip_role_creation: bool


class JwkRemoveMatch(TypedDict):
    id: str
    project_id: str


class MaskingRuleRequired(TypedDict):
    column_name: str
    database_name: str
    masking_rules: list
    schema_name: str
    table_name: str


class MaskingRule(MaskingRuleRequired, total=False):
    masking_function: str
    masking_value: str


class MaskingRuleListMatch(TypedDict):
    branch_id: str
    project_id: str


class MaskingRuleUpdateDataRequired(TypedDict):
    branch_id: str
    project_id: str


class MaskingRuleUpdateData(MaskingRuleUpdateDataRequired, total=False):
    column_name: str
    database_name: str
    masking_function: str
    masking_rules: list
    masking_value: str
    schema_name: str
    table_name: str


class MemberRequired(TypedDict):
    id: str
    org_id: str
    role: str
    user_id: str


class Member(MemberRequired, total=False):
    joined_at: str


class MemberLoadMatch(TypedDict):
    id: str
    organization_id: str


class MemberUpdateDataRequired(TypedDict):
    id: str
    organization_id: str


class MemberUpdateData(MemberUpdateDataRequired, total=False):
    joined_at: str
    org_id: str
    role: str
    user_id: str


class MemberRemoveMatch(TypedDict):
    id: str
    organization_id: str


class NeonAuthAllowLocalhost(TypedDict):
    allow_localhost: bool


class NeonAuthAllowLocalhostLoadMatch(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthAllowLocalhostUpdateDataRequired(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthAllowLocalhostUpdateData(NeonAuthAllowLocalhostUpdateDataRequired, total=False):
    allow_localhost: bool


class NeonAuthConfig(TypedDict):
    name: str


class NeonAuthConfigUpdateDataRequired(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthConfigUpdateData(NeonAuthConfigUpdateDataRequired, total=False):
    name: str


class NeonAuthCreateIntegrationRequired(TypedDict):
    auth_provider: str
    branch_id: str
    project_id: str


class NeonAuthCreateIntegration(NeonAuthCreateIntegrationRequired, total=False):
    database_name: str
    role_name: str


class NeonAuthCreateIntegrationCreateDataRequired(TypedDict):
    auth_provider: str
    branch_id: str
    project_id: str


class NeonAuthCreateIntegrationCreateData(NeonAuthCreateIntegrationCreateDataRequired, total=False):
    database_name: str
    role_name: str


class NeonAuthCreateNewUserRequired(TypedDict):
    auth_provider: str
    email: str
    project_id: str


class NeonAuthCreateNewUser(NeonAuthCreateNewUserRequired, total=False):
    name: str


class NeonAuthCreateNewUserCreateDataRequired(TypedDict):
    auth_provider: str
    email: str
    project_id: str


class NeonAuthCreateNewUserCreateData(NeonAuthCreateNewUserCreateDataRequired, total=False):
    name: str


class NeonAuthEmailAndPasswordConfig(TypedDict):
    auto_sign_in_after_verification: bool
    disable_sign_up: bool
    email_verification_method: str
    enabled: bool
    require_email_verification: bool
    send_verification_email_on_sign_in: bool
    send_verification_email_on_sign_up: bool


class NeonAuthEmailAndPasswordConfigLoadMatch(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthEmailAndPasswordConfigUpdateDataRequired(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthEmailAndPasswordConfigUpdateData(NeonAuthEmailAndPasswordConfigUpdateDataRequired, total=False):
    auto_sign_in_after_verification: bool
    disable_sign_up: bool
    email_verification_method: str
    enabled: bool
    require_email_verification: bool
    send_verification_email_on_sign_in: bool
    send_verification_email_on_sign_up: bool


class NeonAuthEmailServerConfig(TypedDict):
    pass


class NeonAuthEmailServerConfigUpdateDataRequired(TypedDict):
    project_id: str


class NeonAuthEmailServerConfigUpdateData(NeonAuthEmailServerConfigUpdateDataRequired, total=False):
    branch_id: str


class NeonAuthIntegrationRequired(TypedDict):
    auth_provider: str
    auth_provider_project_id: str
    branch_id: str
    created_at: str
    db_name: str
    jwks_url: str
    owned_by: str


class NeonAuthIntegration(NeonAuthIntegrationRequired, total=False):
    base_url: str
    name: str
    transfer_status: str


class NeonAuthIntegrationLoadMatch(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthIntegrationListMatch(TypedDict):
    project_id: str


class NeonAuthMagicLinkConfig(TypedDict):
    disable_sign_up: bool
    enabled: bool
    expires_in: int


class NeonAuthMagicLinkConfigUpdateDataRequired(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthMagicLinkConfigUpdateData(NeonAuthMagicLinkConfigUpdateDataRequired, total=False):
    disable_sign_up: bool
    enabled: bool
    expires_in: int


class NeonAuthOauthProviderRequired(TypedDict):
    id: str
    type: str


class NeonAuthOauthProvider(NeonAuthOauthProviderRequired, total=False):
    client_id: str
    client_secret: str
    microsoft_tenant_id: str


class NeonAuthOauthProviderListMatchRequired(TypedDict):
    project_id: str


class NeonAuthOauthProviderListMatch(NeonAuthOauthProviderListMatchRequired, total=False):
    branch_id: str


class NeonAuthOauthProviderCreateDataRequired(TypedDict):
    project_id: str
    id: str
    type: str


class NeonAuthOauthProviderCreateData(NeonAuthOauthProviderCreateDataRequired, total=False):
    branch_id: str
    client_id: str
    client_secret: str
    microsoft_tenant_id: str


class NeonAuthOauthProviderUpdateDataRequired(TypedDict):
    id: str
    project_id: str


class NeonAuthOauthProviderUpdateData(NeonAuthOauthProviderUpdateDataRequired, total=False):
    branch_id: str
    client_id: str
    client_secret: str
    microsoft_tenant_id: str
    type: str


class NeonAuthOrganizationConfig(TypedDict):
    creator_role: str
    enabled: bool
    membership_limit: int
    organization_limit: int
    send_invitation_email: bool


class NeonAuthOrganizationConfigUpdateDataRequired(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthOrganizationConfigUpdateData(NeonAuthOrganizationConfigUpdateDataRequired, total=False):
    creator_role: str
    enabled: bool
    membership_limit: int
    organization_limit: int
    send_invitation_email: bool


class NeonAuthPhoneNumberConfigRequired(TypedDict):
    enabled: bool


class NeonAuthPhoneNumberConfig(NeonAuthPhoneNumberConfigRequired, total=False):
    otp_expires_in: int


class NeonAuthPhoneNumberConfigLoadMatch(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthPhoneNumberConfigUpdateDataRequired(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthPhoneNumberConfigUpdateData(NeonAuthPhoneNumberConfigUpdateDataRequired, total=False):
    enabled: bool
    otp_expires_in: int


class NeonAuthPluginConfigRequired(TypedDict):
    id: str
    type: str


class NeonAuthPluginConfig(NeonAuthPluginConfigRequired, total=False):
    client_id: str
    client_secret: str


class NeonAuthPluginConfigListMatch(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthRedirectUriWhitelistDomain(TypedDict):
    auth_provider: str
    domain: str


class NeonAuthRedirectUriWhitelistDomainListMatchRequired(TypedDict):
    project_id: str


class NeonAuthRedirectUriWhitelistDomainListMatch(NeonAuthRedirectUriWhitelistDomainListMatchRequired, total=False):
    branch_id: str


class NeonAuthTransferAuthProviderProject(TypedDict):
    auth_provider: str
    project_id: str
    url: str


class NeonAuthTransferAuthProviderProjectCreateData(TypedDict):
    auth_provider: str
    project_id: str
    url: str


class NeonAuthWebhookConfigRequired(TypedDict):
    enabled: bool


class NeonAuthWebhookConfig(NeonAuthWebhookConfigRequired, total=False):
    enabled_events: list
    timeout_seconds: int
    webhook_url: str


class NeonAuthWebhookConfigListMatch(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthWebhookConfigUpdateDataRequired(TypedDict):
    branch_id: str
    project_id: str


class NeonAuthWebhookConfigUpdateData(NeonAuthWebhookConfigUpdateDataRequired, total=False):
    enabled: bool
    enabled_events: list
    timeout_seconds: int
    webhook_url: str


class NeonFunctionRequired(TypedDict):
    created_at: str
    id: str
    invocation_url: str
    name: str
    slug: str


class NeonFunction(NeonFunctionRequired, total=False):
    active_deployment: Any
    current_deployment: Any


class NeonFunctionLoadMatch(TypedDict):
    branch_id: str
    id: str
    project_id: str


class NeonFunctionUpdateDataRequired(TypedDict):
    branch_id: str
    id: str
    project_id: str


class NeonFunctionUpdateData(NeonFunctionUpdateDataRequired, total=False):
    active_deployment: Any
    created_at: str
    current_deployment: Any
    invocation_url: str
    name: str
    slug: str


class NeonFunctionDeployment(TypedDict):
    pass


class NeonFunctionDeploymentCreateData(TypedDict):
    branch_id: str
    project_id: str
    slug: str


class OperationRequired(TypedDict):
    action: str
    created_at: str
    failures_count: int
    id: str
    operations: list
    pagination: dict
    project_id: str
    status: str
    total_duration_ms: int
    updated_at: str


class Operation(OperationRequired, total=False):
    branch_id: str
    endpoint_id: str
    error: str
    name: str
    retry_at: str


class OperationLoadMatch(TypedDict):
    id: str
    project_id: str


class OperationListMatchRequired(TypedDict):
    project_id: str


class OperationListMatch(OperationListMatchRequired, total=False):
    cursor: str
    limit: int


class OperationCreateDataRequired(TypedDict):
    branch_id: str
    project_id: str
    action: str
    created_at: str
    failures_count: int
    id: str
    operations: list
    pagination: dict
    status: str
    total_duration_ms: int
    updated_at: str


class OperationCreateData(OperationCreateDataRequired, total=False):
    endpoint_id: str
    error: str
    name: str
    retry_at: str


class OrgApiKeyCreate(TypedDict, total=False):
    created_at: str
    created_by: str
    id: int
    key: str
    name: str


class OrgApiKeyCreateCreateDataRequired(TypedDict):
    organization_id: str


class OrgApiKeyCreateCreateData(OrgApiKeyCreateCreateDataRequired, total=False):
    created_at: str
    created_by: str
    id: int
    key: str
    name: str


class OrgApiKeyRevoke(TypedDict):
    pass


class OrgApiKeyRevokeRemoveMatch(TypedDict):
    key_id: int
    organization_id: str


class OrgApiKeysListResponseItemRequired(TypedDict):
    created_at: str
    created_by: dict
    id: int
    last_used_from_addr: str
    name: str


class OrgApiKeysListResponseItem(OrgApiKeysListResponseItemRequired, total=False):
    last_used_at: str
    project_id: str


class OrgApiKeysListResponseItemListMatch(TypedDict):
    organization_id: str


class OrganizationRequired(TypedDict):
    created_at: str
    handle: str
    id: str
    label: str
    managed_by: str
    name: str
    plan: str
    updated_at: str


class Organization(OrganizationRequired, total=False):
    allow_hipaa_projects: bool
    require_mfa: bool


class OrganizationLoadMatch(TypedDict):
    id: str


class OrganizationListMatch(TypedDict, total=False):
    allow_hipaa_projects: bool
    created_at: str
    handle: str
    id: str
    label: str
    managed_by: str
    name: str
    plan: str
    require_mfa: bool
    updated_at: str


class OrganizationCreateDataRequired(TypedDict):
    id: str
    region_id: str
    vpc_endpoint_id: str
    created_at: str
    handle: str
    label: str
    managed_by: str
    name: str
    plan: str
    updated_at: str


class OrganizationCreateData(OrganizationCreateDataRequired, total=False):
    allow_hipaa_projects: bool
    require_mfa: bool


class OrganizationRemoveMatch(TypedDict):
    id: str
    region_id: str
    vpc_endpoint_id: str


class OrganizationInvitation(TypedDict):
    email: str
    id: str
    invitations: list
    invited_at: str
    invited_by: str
    org_id: str
    role: str


class OrganizationInvitationListMatch(TypedDict):
    id: str


class OrganizationInvitationCreateData(TypedDict):
    id: str
    email: str
    invitations: list
    invited_at: str
    invited_by: str
    org_id: str
    role: str


class PresignRequired(TypedDict):
    operation: str


class Presign(PresignRequired, total=False):
    content_type: str
    expires_in_seconds: int


class PresignCreateDataRequired(TypedDict):
    branch_id: str
    bucket_id: str
    object_key: str
    project_id: str
    operation: str


class PresignCreateData(PresignCreateDataRequired, total=False):
    content_type: str
    expires_in_seconds: int


class ProjectRequired(TypedDict):
    active_time_seconds: int
    applications: dict
    branch_logical_size_limit: int
    branch_logical_size_limit_bytes: int
    compute_time_seconds: int
    consumption_period_end: str
    consumption_period_start: str
    cpu_used_sec: int
    created_at: str
    creation_source: str
    data_storage_bytes_hour: int
    data_transfer_bytes: int
    history_retention_seconds: int
    id: str
    integrations: dict
    label: str
    name: str
    owner: dict
    owner_id: str
    pagination: dict
    pg_version: int
    platform_id: str
    project: dict
    projects: list
    provisioner: str
    proxy_host: str
    region_id: str
    store_passwords: bool
    updated_at: str
    written_data_bytes: int


class Project(ProjectRequired, total=False):
    compute_last_active_at: str
    default_endpoint_settings: dict
    effective_project_permission: str
    hipaa_enabled_at: str
    maintenance_scheduled_for: str
    maintenance_starts_at: str
    org_id: str
    quota_reset_at: str
    settings: dict
    synthetic_storage_size: int
    unavailable_project_ids: list


class ProjectLoadMatch(TypedDict):
    id: str


class ProjectListMatch(TypedDict, total=False):
    cursor: str
    limit: int
    org_id: str
    recoverable: bool
    search: str
    timeout: int


class ProjectCreateDataRequired(TypedDict):
    id: str
    vpc_endpoint_id: str
    active_time_seconds: int
    applications: dict
    branch_logical_size_limit: int
    branch_logical_size_limit_bytes: int
    compute_time_seconds: int
    consumption_period_end: str
    consumption_period_start: str
    cpu_used_sec: int
    created_at: str
    creation_source: str
    data_storage_bytes_hour: int
    data_transfer_bytes: int
    history_retention_seconds: int
    integrations: dict
    label: str
    name: str
    owner: dict
    owner_id: str
    pagination: dict
    pg_version: int
    platform_id: str
    project: dict
    projects: list
    provisioner: str
    proxy_host: str
    region_id: str
    store_passwords: bool
    updated_at: str
    written_data_bytes: int


class ProjectCreateData(ProjectCreateDataRequired, total=False):
    compute_last_active_at: str
    default_endpoint_settings: dict
    effective_project_permission: str
    hipaa_enabled_at: str
    maintenance_scheduled_for: str
    maintenance_starts_at: str
    org_id: str
    quota_reset_at: str
    settings: dict
    synthetic_storage_size: int
    unavailable_project_ids: list


class ProjectUpdateDataRequired(TypedDict):
    id: str
    request_id: str


class ProjectUpdateData(ProjectUpdateDataRequired, total=False):
    active_time_seconds: int
    applications: dict
    branch_logical_size_limit: int
    branch_logical_size_limit_bytes: int
    compute_last_active_at: str
    compute_time_seconds: int
    consumption_period_end: str
    consumption_period_start: str
    cpu_used_sec: int
    created_at: str
    creation_source: str
    data_storage_bytes_hour: int
    data_transfer_bytes: int
    default_endpoint_settings: dict
    effective_project_permission: str
    hipaa_enabled_at: str
    history_retention_seconds: int
    integrations: dict
    label: str
    maintenance_scheduled_for: str
    maintenance_starts_at: str
    name: str
    org_id: str
    owner: dict
    owner_id: str
    pagination: dict
    pg_version: int
    platform_id: str
    project: dict
    projects: list
    provisioner: str
    proxy_host: str
    quota_reset_at: str
    region_id: str
    settings: dict
    store_passwords: bool
    synthetic_storage_size: int
    unavailable_project_ids: list
    updated_at: str
    written_data_bytes: int


class ProjectRemoveMatchRequired(TypedDict):
    id: str


class ProjectRemoveMatch(ProjectRemoveMatchRequired, total=False):
    vpc_endpoint_id: str


class ProjectBranchLogField(TypedDict):
    fields: list


class ProjectBranchLogFieldListMatch(TypedDict):
    branch_id: str
    project_id: str


class ProjectBranchLogFieldValue(TypedDict):
    is_truncated: bool
    values: list


class ProjectBranchLogFieldValueListMatchRequired(TypedDict):
    branch_id: str
    field_name: str
    project_id: str


class ProjectBranchLogFieldValueListMatch(ProjectBranchLogFieldValueListMatchRequired, total=False):
    end_time: str
    limit: int
    since: str
    source: str
    start_time: str


class ProjectBranchLogsQueryRequired(TypedDict):
    is_truncated: bool
    logs: list


class ProjectBranchLogsQuery(ProjectBranchLogsQueryRequired, total=False):
    body_contains: str
    cursor: str
    end_time: str
    limit: int
    logql: str
    minimum_severity: str
    next_cursor: str
    scope_name: str
    service_name: str
    severity_text: str
    since: Any
    sort_order: str
    source: str
    start_time: str
    trace_id: str


class ProjectBranchLogsQueryCreateDataRequired(TypedDict):
    branch_id: str
    project_id: str
    is_truncated: bool
    logs: list


class ProjectBranchLogsQueryCreateData(ProjectBranchLogsQueryCreateDataRequired, total=False):
    body_contains: str
    cursor: str
    end_time: str
    limit: int
    logql: str
    minimum_severity: str
    next_cursor: str
    scope_name: str
    service_name: str
    severity_text: str
    since: Any
    sort_order: str
    source: str
    start_time: str
    trace_id: str


class ProjectMemberRequired(TypedDict):
    member_id: str
    org_role: str
    user_id: str


class ProjectMember(ProjectMemberRequired, total=False):
    effective_project_permission: str
    email: str
    explicit_project_permission: str
    grant_source: str
    id: str
    name: str
    org_default_project_permission: str
    project_role: str


class ProjectMemberListMatchRequired(TypedDict):
    id: str


class ProjectMemberListMatch(ProjectMemberListMatchRequired, total=False):
    cursor: str
    limit: int


class ProjectMemberRoleRequired(TypedDict):
    member_id: str
    org_role: str
    project_id: str
    role: str
    user_id: str


class ProjectMemberRole(ProjectMemberRoleRequired, total=False):
    credential_rotation_recommended: bool
    effective_project_permission: str
    email: str
    explicit_project_permission: str
    name: str
    org_api_key_rotation_recommended: bool
    org_default_project_permission: str
    project_role: str


class ProjectMemberRoleUpdateDataRequired(TypedDict):
    member_id: str
    project_id: str


class ProjectMemberRoleUpdateData(ProjectMemberRoleUpdateDataRequired, total=False):
    confirm_self_demotion: bool
    credential_rotation_recommended: bool
    effective_project_permission: str
    email: str
    explicit_project_permission: str
    name: str
    org_api_key_rotation_recommended: bool
    org_default_project_permission: str
    org_role: str
    project_role: str
    role: str
    user_id: str


class ProjectMemberRoleRemoveMatchRequired(TypedDict):
    member_id: str
    project_id: str


class ProjectMemberRoleRemoveMatch(ProjectMemberRoleRemoveMatchRequired, total=False):
    confirm_self_lockout: bool


class ProjectPermissionRequired(TypedDict):
    email: str
    granted_at: str
    granted_to_email: str
    id: str


class ProjectPermission(ProjectPermissionRequired, total=False):
    revoked_at: str


class ProjectPermissionListMatch(TypedDict):
    id: str


class ProjectPermissionCreateDataRequired(TypedDict):
    id: str
    email: str
    granted_at: str
    granted_to_email: str


class ProjectPermissionCreateData(ProjectPermissionCreateDataRequired, total=False):
    revoked_at: str


class ProjectPermissionRemoveMatch(TypedDict):
    id: str
    project_id: str


class ProjectRecoverRequired(TypedDict):
    branches: list
    project: dict


class ProjectRecover(ProjectRecoverRequired, total=False):
    id: str


class ProjectRecoverCreateData(TypedDict):
    id: str
    branches: list
    project: dict


class ProjectTransferRequest(TypedDict, total=False):
    id: str
    ttl_seconds: int


class ProjectTransferRequestCreateDataRequired(TypedDict):
    id: str


class ProjectTransferRequestCreateData(ProjectTransferRequestCreateDataRequired, total=False):
    ttl_seconds: int


class Region(TypedDict):
    default: bool
    geo_lat: str
    geo_long: str
    name: str
    region_id: str


class RegionListMatch(TypedDict, total=False):
    org_id: str


class RoleRequired(TypedDict):
    branch_id: str
    created_at: str
    name: str
    role: dict
    updated_at: str


class Role(RoleRequired, total=False):
    authentication_method: str
    id: str
    password: str
    protected: bool


class RoleLoadMatch(TypedDict):
    branch_id: str
    id: str
    project_id: str


class RoleListMatch(TypedDict):
    branch_id: str
    project_id: str


class RoleCreateDataRequired(TypedDict):
    branch_id: str
    project_id: str
    created_at: str
    name: str
    role: dict
    updated_at: str


class RoleCreateData(RoleCreateDataRequired, total=False):
    authentication_method: str
    id: str
    password: str
    protected: bool


class RoleRemoveMatch(TypedDict):
    branch_id: str
    id: str
    project_id: str


class RoleOperation(TypedDict):
    operations: list
    role: dict


class RoleOperationCreateData(TypedDict):
    branch_id: str
    project_id: str
    role_name: str
    operations: list
    role: dict


class RolePassword(TypedDict):
    password: str


class RolePasswordLoadMatch(TypedDict):
    branch_id: str
    project_id: str
    role_name: str


class SendNeonAuthTestEmailRequired(TypedDict):
    host: str
    password: str
    port: int
    recipient_email: str
    sender_email: str
    sender_name: str
    success: bool
    username: str


class SendNeonAuthTestEmail(SendNeonAuthTestEmailRequired, total=False):
    error_message: str


class SendNeonAuthTestEmailCreateDataRequired(TypedDict):
    branch_id: str
    project_id: str
    host: str
    password: str
    port: int
    recipient_email: str
    sender_email: str
    sender_name: str
    success: bool
    username: str


class SendNeonAuthTestEmailCreateData(SendNeonAuthTestEmailCreateDataRequired, total=False):
    error_message: str


class SnapshotRequired(TypedDict):
    created_at: str
    id: str
    name: str
    operations: list
    snapshot: dict


class Snapshot(SnapshotRequired, total=False):
    diff_size: int
    expires_at: str
    full_size: int
    lsn: str
    manual: bool
    slug: str
    source_branch_id: str
    timestamp: str


class SnapshotListMatch(TypedDict):
    project_id: str


class SnapshotCreateDataRequired(TypedDict):
    branch_id: str
    project_id: str
    created_at: str
    id: str
    operations: list
    snapshot: dict


class SnapshotCreateData(SnapshotCreateDataRequired, total=False):
    expires_at: str
    lsn: str
    name: str
    slug: str
    timestamp: str
    diff_size: int
    full_size: int
    manual: bool
    source_branch_id: str


class SnapshotUpdateDataRequired(TypedDict):
    id: str
    project_id: str


class SnapshotUpdateData(SnapshotUpdateDataRequired, total=False):
    created_at: str
    diff_size: int
    expires_at: str
    full_size: int
    lsn: str
    manual: bool
    name: str
    operations: list
    slug: str
    snapshot: dict
    source_branch_id: str
    timestamp: str


class SnapshotRemoveMatch(TypedDict):
    id: str
    project_id: str


class SpendingLimit(TypedDict):
    spending_limit_cents: int


class SpendingLimitLoadMatch(TypedDict):
    organization_id: str


class SpendingLimitUpdateDataRequired(TypedDict):
    organization_id: str


class SpendingLimitUpdateData(SpendingLimitUpdateDataRequired, total=False):
    spending_limit_cents: int


class TriggerRequired(TypedDict):
    triggers: list


class Trigger(TriggerRequired, total=False):
    id: str


class TriggerLoadMatch(TypedDict):
    branch_id: str
    id: str
    project_id: str


class TriggerListMatch(TypedDict):
    branch_id: str
    project_id: str


class TriggerCreateDataRequired(TypedDict):
    branch_id: str
    project_id: str
    triggers: list


class TriggerCreateData(TriggerCreateDataRequired, total=False):
    id: str


class TriggerUpdateDataRequired(TypedDict):
    branch_id: str
    id: str
    project_id: str


class TriggerUpdateData(TriggerUpdateDataRequired, total=False):
    triggers: list


class UpdateNeonAuthUserRole(TypedDict):
    id: str
    roles: list


class UpdateNeonAuthUserRoleUpdateDataRequired(TypedDict):
    branch_id: str
    project_id: str
    user_id: str


class UpdateNeonAuthUserRoleUpdateData(UpdateNeonAuthUserRoleUpdateDataRequired, total=False):
    id: str
    roles: list


class VpcEndpointRequired(TypedDict):
    example_restricted_projects: list
    label: str
    num_restricted_projects: int
    region_id: str
    state: str
    vpc_endpoint_id: str


class VpcEndpoint(VpcEndpointRequired, total=False):
    id: str


class VpcEndpointLoadMatch(TypedDict):
    id: str
    organization_id: str
    region_id: str


class VpcEndpointListMatch(TypedDict):
    project_id: str
