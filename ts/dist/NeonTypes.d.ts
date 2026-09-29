export interface Anonymize {
    branch_id: string;
    created_at: string;
    failed_at?: string;
    last_run?: Record<string, any>;
    project_id: string;
    state: string;
    status_message?: string;
    updated_at: string;
}
export interface AnonymizeCreateData {
    branch_id: string;
    project_id: string;
    created_at: string;
    failed_at?: string;
    last_run?: Record<string, any>;
    state: string;
    status_message?: string;
    updated_at: string;
}
export interface AnonymizedBranchStatus {
    branch_id: string;
    created_at: string;
    failed_at?: string;
    last_run?: Record<string, any>;
    project_id: string;
    state: string;
    status_message?: string;
    updated_at: string;
}
export interface AnonymizedBranchStatusLoadMatch {
    branch_id: string;
    project_id: string;
}
export interface ApiKey {
    created_at: string;
    created_by: string;
    id: number;
    key: string;
    key_name: string;
    last_used_at?: string;
    last_used_from_addr: string;
    name: string;
}
export interface ApiKeyListMatch {
    created_at?: string;
    created_by?: string;
    id?: number;
    key?: string;
    key_name?: string;
    last_used_at?: string;
    last_used_from_addr?: string;
    name?: string;
}
export interface ApiKeyCreateData {
    created_at: string;
    created_by: string;
    id: number;
    key: string;
    key_name: string;
    last_used_at?: string;
    last_used_from_addr: string;
    name: string;
}
export interface ApiKeyRemoveMatch {
    id: number;
}
export interface Auth {
    account_id: string;
    auth_data?: string;
    auth_method: string;
}
export interface AuthLoadMatch {
    account_id?: string;
    auth_data?: string;
    auth_method?: string;
}
export interface AuthCreateData {
    branch_id: string;
    project_id: string;
    account_id: string;
    auth_data?: string;
    auth_method: string;
    $action?: string;
    [action: string]: any;
}
export interface AuthRemoveMatch {
    auth_user_id?: string;
    branch_id: string;
    project_id: string;
    oauth_provider_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface AuthLegacy {
    auth_provider: string;
    domain: string;
}
export interface AuthLegacyCreateData {
    project_id: string;
    auth_provider: string;
    domain: string;
}
export interface AuthLegacyRemoveMatch {
    auth_provider?: string;
    project_id: string;
    auth_user_id?: string;
    oauth_provider_id?: string;
}
export interface AvailablePreloadLibrary {
    description: string;
    is_default: boolean;
    is_experimental: boolean;
    library_name: string;
    version: string;
}
export interface AvailablePreloadLibraryListMatch {
    project_id: string;
}
export interface BackupSchedule {
    day?: number;
    frequency: string;
    hour?: number;
    month?: number;
    retention_seconds?: number;
}
export interface BackupScheduleListMatch {
    branch_id: string;
    project_id: string;
}
export interface Branch {
    active_time_seconds: number;
    annotation: Record<string, any>;
    branch: Record<string, any>;
    compute_time_seconds: number;
    cpu_used_sec: number;
    created_at: string;
    created_by?: Record<string, any>;
    creation_source: string;
    current_state: string;
    data_transfer_bytes: number;
    default: boolean;
    expires_at?: string;
    id: string;
    init_source?: string;
    last_reset_at?: string;
    logical_size?: number;
    name: string;
    parent_id?: string;
    parent_lsn?: string;
    parent_timestamp?: string;
    pending_state?: string;
    primary?: boolean;
    project_id: string;
    protected: boolean;
    recovery: Record<string, any>;
    restore_status?: string;
    restored_as?: string;
    restored_from?: string;
    restricted_actions?: any[];
    state_changed_at: string;
    ttl_interval_seconds?: number;
    updated_at: string;
    written_data_bytes: number;
}
export interface BranchLoadMatch {
    id: string;
    project_id: string;
    $action?: string;
    [action: string]: any;
}
export interface BranchListMatch {
    project_id: string;
    cursor?: string;
    include_deleted?: boolean;
    limit?: number;
    search?: string;
    sort_by?: string;
    sort_order?: string;
}
export interface BranchCreateData {
    project_id: string;
    active_time_seconds: number;
    annotation: Record<string, any>;
    branch: Record<string, any>;
    compute_time_seconds: number;
    cpu_used_sec: number;
    created_at: string;
    created_by?: Record<string, any>;
    creation_source: string;
    current_state: string;
    data_transfer_bytes: number;
    default: boolean;
    expires_at?: string;
    id: string;
    init_source?: string;
    last_reset_at?: string;
    logical_size?: number;
    name: string;
    parent_id?: string;
    parent_lsn?: string;
    parent_timestamp?: string;
    pending_state?: string;
    primary?: boolean;
    protected: boolean;
    recovery: Record<string, any>;
    restore_status?: string;
    restored_as?: string;
    restored_from?: string;
    restricted_actions?: any[];
    state_changed_at: string;
    ttl_interval_seconds?: number;
    updated_at: string;
    written_data_bytes: number;
}
export interface BranchUpdateData {
    id: string;
    project_id: string;
    active_time_seconds?: number;
    annotation?: Record<string, any>;
    branch?: Record<string, any>;
    compute_time_seconds?: number;
    cpu_used_sec?: number;
    created_at?: string;
    created_by?: Record<string, any>;
    creation_source?: string;
    current_state?: string;
    data_transfer_bytes?: number;
    default?: boolean;
    expires_at?: string;
    init_source?: string;
    last_reset_at?: string;
    logical_size?: number;
    name?: string;
    parent_id?: string;
    parent_lsn?: string;
    parent_timestamp?: string;
    pending_state?: string;
    primary?: boolean;
    protected?: boolean;
    recovery?: Record<string, any>;
    restore_status?: string;
    restored_as?: string;
    restored_from?: string;
    restricted_actions?: any[];
    state_changed_at?: string;
    ttl_interval_seconds?: number;
    updated_at?: string;
    written_data_bytes?: number;
}
export interface BranchRemoveMatch {
    id: string;
    project_id: string;
}
export interface BranchAiGateway {
    base_url: string;
    enabled: boolean;
    id?: string;
}
export interface BranchAiGatewayLoadMatch {
    id: string;
    project_id: string;
}
export interface BranchOperation {
    branch: Record<string, any>;
    id?: string;
    operations: any[];
}
export interface BranchOperationCreateData {
    id: string;
    project_id: string;
    branch: Record<string, any>;
    operations: any[];
    $action?: string;
    [action: string]: any;
}
export interface BranchSchema {
    id?: string;
    json: Record<string, any>;
    sql?: string;
}
export interface BranchSchemaLoadMatch {
    id: string;
    project_id: string;
    db_name: string;
    format?: string;
    lsn?: string;
    timestamp?: string;
}
export interface BranchSchemaCompare {
    id?: string;
}
export interface BranchSchemaCompareLoadMatch {
    id: string;
    project_id: string;
    base_branch_id?: string;
    base_lsn?: string;
    base_timestamp?: string;
    db_name: string;
    lsn?: string;
    timestamp?: string;
    $action?: string;
    [action: string]: any;
}
export interface BranchStorage {
    enabled: boolean;
    force_path_style: boolean;
    id?: string;
    region: string;
    s3_endpoint: string;
}
export interface BranchStorageLoadMatch {
    id: string;
    project_id: string;
}
export interface Bucket {
    access_level?: string;
    created_at: string;
    id?: string;
    name: string;
}
export interface BucketLoadMatch {
    branch_id: string;
    bucket_id: string;
    object_key: string;
    project_id: string;
}
export interface BucketListMatch {
    branch_id: string;
    project_id: string;
}
export interface BucketCreateData {
    branch_id: string;
    project_id: string;
    access_level?: string;
    created_at: string;
    id?: string;
    name: string;
}
export interface BucketRemoveMatch {
    branch_id: string;
    bucket_id?: string;
    object_key?: string;
    project_id: string;
    id?: string;
    $action?: string;
    [action: string]: any;
}
export interface BucketObjectsList {
    etag: string;
    key: string;
    last_modified: string;
    size: number;
}
export interface BucketObjectsListListMatch {
    branch_id: string;
    bucket_name: string;
    project_id: string;
    cursor?: string;
    delimiter?: string;
    limit?: number;
    prefix?: string;
}
export interface ConnectionUri {
    uri: string;
}
export interface ConnectionUriLoadMatch {
    project_id: string;
    branch_id?: string;
    database_name: string;
    endpoint_id?: string;
    pooled?: boolean;
    role_name: string;
}
export interface Consumption {
    branch_id: string;
    periods: any[];
    project_id: string;
}
export interface ConsumptionListMatch {
    branch_id?: any[];
    cursor?: string;
    from: string;
    granularity: string;
    limit?: number;
    metric?: any[];
    org_id?: string;
    project_id?: any[];
    to: string;
    include_v1_metric?: boolean;
}
export interface CreateCredential {
    name?: string;
    principal_type: string;
    scopes: any[];
}
export interface CreateCredentialCreateData {
    branch_id: string;
    project_id: string;
    name?: string;
    principal_type: string;
    scopes: any[];
}
export interface Credential {
    branch_id?: string;
    created_at: string;
    expires_at?: string;
    function_id?: string;
    id?: string;
    last_used_at?: string;
    name?: string;
    principal_type: string;
    revoked_at?: string;
    scopes: any[];
    token_id: string;
    token_id_short: string;
}
export interface CredentialListMatch {
    branch_id: string;
    project_id: string;
}
export interface CredentialCreateData {
    branch_id: string;
    id: string;
    project_id: string;
    created_at: string;
    expires_at?: string;
    function_id?: string;
    last_used_at?: string;
    name?: string;
    principal_type: string;
    revoked_at?: string;
    scopes: any[];
    token_id: string;
    token_id_short: string;
    $action?: string;
    [action: string]: any;
}
export interface CredentialRemoveMatch {
    branch_id: string;
    id: string;
    project_id: string;
}
export interface CurrentUserInfo {
    email: string;
    image: string;
    login: string;
    name: string;
    provider: string;
}
export interface CurrentUserInfoListMatch {
    email?: string;
    image?: string;
    login?: string;
    name?: string;
    provider?: string;
}
export interface CustomDomain {
    domain: string;
    entity_id: string;
    entity_type: string;
}
export interface CustomDomainCreateData {
    branch_id: string;
    project_id: string;
    domain: string;
    entity_id: string;
    entity_type: string;
}
export interface DataApi {
    add_default_grants?: boolean;
    auth_provider?: string;
    available_schemas?: any[];
    id?: string;
    jwks_url?: string;
    jwt_audience?: string;
    provider_name?: string;
    settings?: Record<string, any>;
    skip_auth_schema?: boolean;
    status: string;
    url: string;
}
export interface DataApiLoadMatch {
    branch_id: string;
    id: string;
    project_id: string;
}
export interface DataApiCreateData {
    branch_id: string;
    id: string;
    project_id: string;
    add_default_grants?: boolean;
    auth_provider?: string;
    available_schemas?: any[];
    jwks_url?: string;
    jwt_audience?: string;
    provider_name?: string;
    settings?: Record<string, any>;
    skip_auth_schema?: boolean;
    status: string;
    url: string;
}
export interface DataApiUpdateData {
    branch_id: string;
    id: string;
    project_id: string;
    add_default_grants?: boolean;
    auth_provider?: string;
    available_schemas?: any[];
    jwks_url?: string;
    jwt_audience?: string;
    provider_name?: string;
    settings?: Record<string, any>;
    skip_auth_schema?: boolean;
    status?: string;
    url?: string;
}
export interface DataApiRemoveMatch {
    branch_id: string;
    id: string;
    project_id: string;
}
export interface Database {
    branch_id: string;
    created_at: string;
    database: Record<string, any>;
    id: number;
    name: string;
    owner_name: string;
    updated_at: string;
}
export interface DatabaseLoadMatch {
    branch_id: string;
    id: string;
    project_id: string;
}
export interface DatabaseListMatch {
    branch_id: string;
    project_id: string;
}
export interface DatabaseCreateData {
    branch_id: string;
    project_id: string;
    created_at: string;
    database: Record<string, any>;
    id: number;
    name: string;
    owner_name: string;
    updated_at: string;
}
export interface DatabaseUpdateData {
    branch_id: string;
    id: string;
    project_id: string;
    created_at?: string;
    database?: Record<string, any>;
    name?: string;
    owner_name?: string;
    updated_at?: string;
}
export interface DatabaseRemoveMatch {
    branch_id: string;
    id: string;
    project_id: string;
}
export interface EmailProvider {
}
export interface EmailProviderLoadMatch {
    branch_id: string;
    project_id: string;
}
export interface EmailServer {
}
export interface EmailServerLoadMatch {
    project_id: string;
}
export interface Empty {
    destination_org_id: string;
    project_ids: any[];
    schedule: any[];
}
export interface EmptyCreateData {
    organization_id: string;
    destination_org_id: string;
    project_ids: any[];
    schedule: any[];
}
export interface EmptyUpdateData {
    branch_id: string;
    project_id: string;
    destination_org_id?: string;
    project_ids?: any[];
    schedule?: any[];
}
export interface EmptyRemoveMatch {
    organization_id: string;
}
export interface Endpoint {
    autoscaling_limit_max_cu: number;
    autoscaling_limit_min_cu: number;
    branch_id: string;
    compute_release_version?: string;
    created_at: string;
    creation_source: string;
    current_state: string;
    disabled: boolean;
    endpoint: Record<string, any>;
    host: string;
    id: string;
    last_active?: string;
    name?: string;
    passwordless_access: boolean;
    pending_state?: string;
    pooler_enabled: boolean;
    pooler_mode: string;
    project_id: string;
    provisioner: string;
    proxy_host: string;
    region_id: string;
    settings: Record<string, any>;
    started_at?: string;
    suspend_timeout_seconds: number;
    suspended_at?: string;
    type: string;
    updated_at: string;
}
export interface EndpointLoadMatch {
    id: string;
    project_id: string;
}
export interface EndpointListMatch {
    branch_id?: string;
    project_id: string;
}
export interface EndpointCreateData {
    project_id: string;
    autoscaling_limit_max_cu: number;
    autoscaling_limit_min_cu: number;
    branch_id: string;
    compute_release_version?: string;
    created_at: string;
    creation_source: string;
    current_state: string;
    disabled: boolean;
    endpoint: Record<string, any>;
    host: string;
    id: string;
    last_active?: string;
    name?: string;
    passwordless_access: boolean;
    pending_state?: string;
    pooler_enabled: boolean;
    pooler_mode: string;
    provisioner: string;
    proxy_host: string;
    region_id: string;
    settings: Record<string, any>;
    started_at?: string;
    suspend_timeout_seconds: number;
    suspended_at?: string;
    type: string;
    updated_at: string;
}
export interface EndpointUpdateData {
    id: string;
    project_id: string;
    autoscaling_limit_max_cu?: number;
    autoscaling_limit_min_cu?: number;
    branch_id?: string;
    compute_release_version?: string;
    created_at?: string;
    creation_source?: string;
    current_state?: string;
    disabled?: boolean;
    endpoint?: Record<string, any>;
    host?: string;
    last_active?: string;
    name?: string;
    passwordless_access?: boolean;
    pending_state?: string;
    pooler_enabled?: boolean;
    pooler_mode?: string;
    provisioner?: string;
    proxy_host?: string;
    region_id?: string;
    settings?: Record<string, any>;
    started_at?: string;
    suspend_timeout_seconds?: number;
    suspended_at?: string;
    type?: string;
    updated_at?: string;
}
export interface EndpointRemoveMatch {
    id: string;
    project_id: string;
}
export interface EndpointOperation {
    endpoint: Record<string, any>;
    id?: string;
    operations: any[];
}
export interface EndpointOperationCreateData {
    id: string;
    project_id: string;
    endpoint: Record<string, any>;
    operations: any[];
    $action?: string;
    [action: string]: any;
}
export interface FunctionType {
    active_deployment?: any;
    binding_status?: string;
    cname_target: string;
    created_at: string;
    current_deployment?: any;
    dns_status?: string;
    domain: string;
    entity_id: string;
    entity_type: string;
    id: string;
    invocation_url: string;
    name: string;
    slug: string;
    status?: string;
    status_reason?: string;
}
export interface FunctionListMatch {
    branch_id: string;
    project_id: string;
    cursor?: string;
    limit?: number;
}
export interface FunctionRemoveMatch {
    branch_id: string;
    domain?: string;
    project_id: string;
    id?: string;
    trigger_id?: string;
}
export interface Jwk {
    branch_id?: string;
    created_at: string;
    id: string;
    jwks_url: string;
    jwt_audience?: string;
    project_id: string;
    provider_name: string;
    role_names?: any[];
    skip_role_creation?: boolean;
    updated_at: string;
}
export interface JwkListMatch {
    project_id: string;
}
export interface JwkCreateData {
    project_id: string;
    branch_id?: string;
    created_at: string;
    id: string;
    jwks_url: string;
    jwt_audience?: string;
    provider_name: string;
    role_names?: any[];
    skip_role_creation?: boolean;
    updated_at: string;
}
export interface JwkRemoveMatch {
    id: string;
    project_id: string;
}
export interface MaskingRule {
    column_name: string;
    database_name: string;
    masking_function?: string;
    masking_rules: any[];
    masking_value?: string;
    schema_name: string;
    table_name: string;
}
export interface MaskingRuleListMatch {
    branch_id: string;
    project_id: string;
}
export interface MaskingRuleUpdateData {
    branch_id: string;
    project_id: string;
    column_name?: string;
    database_name?: string;
    masking_function?: string;
    masking_rules?: any[];
    masking_value?: string;
    schema_name?: string;
    table_name?: string;
}
export interface Member {
    id: string;
    joined_at?: string;
    org_id: string;
    role: string;
    user_id: string;
}
export interface MemberLoadMatch {
    id: string;
    organization_id: string;
}
export interface MemberUpdateData {
    id: string;
    organization_id: string;
    joined_at?: string;
    org_id?: string;
    role?: string;
    user_id?: string;
}
export interface MemberRemoveMatch {
    id: string;
    organization_id: string;
}
export interface NeonAuthAllowLocalhost {
    allow_localhost: boolean;
}
export interface NeonAuthAllowLocalhostLoadMatch {
    branch_id: string;
    project_id: string;
}
export interface NeonAuthAllowLocalhostUpdateData {
    branch_id: string;
    project_id: string;
    allow_localhost?: boolean;
}
export interface NeonAuthConfig {
    name: string;
}
export interface NeonAuthConfigUpdateData {
    branch_id: string;
    project_id: string;
    name?: string;
}
export interface NeonAuthCreateIntegration {
    auth_provider: string;
    branch_id: string;
    database_name?: string;
    project_id: string;
    role_name?: string;
}
export interface NeonAuthCreateIntegrationCreateData {
    auth_provider: string;
    branch_id: string;
    database_name?: string;
    project_id: string;
    role_name?: string;
}
export interface NeonAuthCreateNewUser {
    auth_provider: string;
    email: string;
    name?: string;
    project_id: string;
}
export interface NeonAuthCreateNewUserCreateData {
    auth_provider: string;
    email: string;
    name?: string;
    project_id: string;
}
export interface NeonAuthEmailAndPasswordConfig {
    auto_sign_in_after_verification: boolean;
    disable_sign_up: boolean;
    email_verification_method: string;
    enabled: boolean;
    require_email_verification: boolean;
    send_verification_email_on_sign_in: boolean;
    send_verification_email_on_sign_up: boolean;
}
export interface NeonAuthEmailAndPasswordConfigLoadMatch {
    branch_id: string;
    project_id: string;
}
export interface NeonAuthEmailAndPasswordConfigUpdateData {
    branch_id: string;
    project_id: string;
    auto_sign_in_after_verification?: boolean;
    disable_sign_up?: boolean;
    email_verification_method?: string;
    enabled?: boolean;
    require_email_verification?: boolean;
    send_verification_email_on_sign_in?: boolean;
    send_verification_email_on_sign_up?: boolean;
}
export interface NeonAuthEmailServerConfig {
}
export interface NeonAuthEmailServerConfigUpdateData {
    branch_id?: string;
    project_id: string;
}
export interface NeonAuthIntegration {
    auth_provider: string;
    auth_provider_project_id: string;
    base_url?: string;
    branch_id: string;
    created_at: string;
    db_name: string;
    jwks_url: string;
    name?: string;
    owned_by: string;
    transfer_status?: string;
}
export interface NeonAuthIntegrationLoadMatch {
    branch_id: string;
    project_id: string;
}
export interface NeonAuthIntegrationListMatch {
    project_id: string;
}
export interface NeonAuthMagicLinkConfig {
    disable_sign_up: boolean;
    enabled: boolean;
    expires_in: number;
}
export interface NeonAuthMagicLinkConfigUpdateData {
    branch_id: string;
    project_id: string;
    disable_sign_up?: boolean;
    enabled?: boolean;
    expires_in?: number;
}
export interface NeonAuthOauthProvider {
    client_id?: string;
    client_secret?: string;
    id: string;
    microsoft_tenant_id?: string;
    type: string;
}
export interface NeonAuthOauthProviderListMatch {
    branch_id?: string;
    project_id: string;
}
export interface NeonAuthOauthProviderCreateData {
    branch_id?: string;
    project_id: string;
    client_id?: string;
    client_secret?: string;
    id: string;
    microsoft_tenant_id?: string;
    type: string;
}
export interface NeonAuthOauthProviderUpdateData {
    branch_id?: string;
    id: string;
    project_id: string;
    client_id?: string;
    client_secret?: string;
    microsoft_tenant_id?: string;
    type?: string;
}
export interface NeonAuthOrganizationConfig {
    creator_role: string;
    enabled: boolean;
    membership_limit: number;
    organization_limit: number;
    send_invitation_email: boolean;
}
export interface NeonAuthOrganizationConfigUpdateData {
    branch_id: string;
    project_id: string;
    creator_role?: string;
    enabled?: boolean;
    membership_limit?: number;
    organization_limit?: number;
    send_invitation_email?: boolean;
}
export interface NeonAuthPhoneNumberConfig {
    enabled: boolean;
    otp_expires_in?: number;
}
export interface NeonAuthPhoneNumberConfigLoadMatch {
    branch_id: string;
    project_id: string;
}
export interface NeonAuthPhoneNumberConfigUpdateData {
    branch_id: string;
    project_id: string;
    enabled?: boolean;
    otp_expires_in?: number;
}
export interface NeonAuthPluginConfig {
    client_id?: string;
    client_secret?: string;
    id: string;
    type: string;
}
export interface NeonAuthPluginConfigListMatch {
    branch_id: string;
    project_id: string;
}
export interface NeonAuthRedirectUriWhitelistDomain {
    auth_provider: string;
    domain: string;
}
export interface NeonAuthRedirectUriWhitelistDomainListMatch {
    branch_id?: string;
    project_id: string;
}
export interface NeonAuthTransferAuthProviderProject {
    auth_provider: string;
    project_id: string;
    url: string;
}
export interface NeonAuthTransferAuthProviderProjectCreateData {
    auth_provider: string;
    project_id: string;
    url: string;
}
export interface NeonAuthWebhookConfig {
    enabled: boolean;
    enabled_events?: any[];
    timeout_seconds?: number;
    webhook_url?: string;
}
export interface NeonAuthWebhookConfigListMatch {
    branch_id: string;
    project_id: string;
}
export interface NeonAuthWebhookConfigUpdateData {
    branch_id: string;
    project_id: string;
    enabled?: boolean;
    enabled_events?: any[];
    timeout_seconds?: number;
    webhook_url?: string;
}
export interface NeonFunction {
    active_deployment?: any;
    created_at: string;
    current_deployment?: any;
    id: string;
    invocation_url: string;
    name: string;
    slug: string;
}
export interface NeonFunctionLoadMatch {
    branch_id: string;
    id: string;
    project_id: string;
}
export interface NeonFunctionUpdateData {
    branch_id: string;
    id: string;
    project_id: string;
    active_deployment?: any;
    created_at?: string;
    current_deployment?: any;
    invocation_url?: string;
    name?: string;
    slug?: string;
}
export interface NeonFunctionDeployment {
}
export interface NeonFunctionDeploymentCreateData {
    branch_id: string;
    project_id: string;
    slug: string;
}
export interface OperationType {
    action: string;
    branch_id?: string;
    created_at: string;
    endpoint_id?: string;
    error?: string;
    failures_count: number;
    id: string;
    name?: string;
    operations: any[];
    project_id: string;
    retry_at?: string;
    status: string;
    total_duration_ms: number;
    updated_at: string;
}
export interface OperationLoadMatch {
    id: string;
    project_id: string;
}
export interface OperationListMatch {
    project_id: string;
    cursor?: string;
    limit?: number;
}
export interface OperationCreateData {
    branch_id: string;
    project_id: string;
    action: string;
    created_at: string;
    endpoint_id?: string;
    error?: string;
    failures_count: number;
    id: string;
    name?: string;
    operations: any[];
    retry_at?: string;
    status: string;
    total_duration_ms: number;
    updated_at: string;
}
export interface OrgApiKeyCreate {
    created_at?: string;
    created_by?: string;
    id?: number;
    key?: string;
    name?: string;
}
export interface OrgApiKeyCreateCreateData {
    organization_id: string;
    created_at?: string;
    created_by?: string;
    id?: number;
    key?: string;
    name?: string;
}
export interface OrgApiKeyRevoke {
}
export interface OrgApiKeyRevokeRemoveMatch {
    key_id: number;
    organization_id: string;
}
export interface OrgApiKeysListResponseItem {
    created_at: string;
    created_by: Record<string, any>;
    id: number;
    last_used_at?: string;
    last_used_from_addr: string;
    name: string;
    project_id?: string;
}
export interface OrgApiKeysListResponseItemListMatch {
    organization_id: string;
}
export interface Organization {
    allow_hipaa_projects?: boolean;
    created_at: string;
    handle: string;
    id: string;
    label: string;
    managed_by: string;
    name: string;
    plan: string;
    require_mfa?: boolean;
    updated_at: string;
}
export interface OrganizationLoadMatch {
    id: string;
}
export interface OrganizationListMatch {
    allow_hipaa_projects?: boolean;
    created_at?: string;
    handle?: string;
    id?: string;
    label?: string;
    managed_by?: string;
    name?: string;
    plan?: string;
    require_mfa?: boolean;
    updated_at?: string;
    $action?: string;
    [action: string]: any;
}
export interface OrganizationCreateData {
    id: string;
    region_id: string;
    vpc_endpoint_id: string;
    allow_hipaa_projects?: boolean;
    created_at: string;
    handle: string;
    label: string;
    managed_by: string;
    name: string;
    plan: string;
    require_mfa?: boolean;
    updated_at: string;
}
export interface OrganizationRemoveMatch {
    id: string;
    region_id: string;
    vpc_endpoint_id: string;
}
export interface OrganizationInvitation {
    email: string;
    id: string;
    invitations: any[];
    invited_at: string;
    invited_by: string;
    org_id: string;
    role: string;
}
export interface OrganizationInvitationListMatch {
    id: string;
}
export interface OrganizationInvitationCreateData {
    id: string;
    email: string;
    invitations: any[];
    invited_at: string;
    invited_by: string;
    org_id: string;
    role: string;
}
export interface Presign {
    content_type?: string;
    expires_at: string;
    expires_in_seconds?: number;
    headers: Record<string, any>;
    method: string;
    operation: string;
    url: string;
}
export interface PresignCreateData {
    branch_id: string;
    bucket_id: string;
    object_key: string;
    project_id: string;
    content_type?: string;
    expires_at: string;
    expires_in_seconds?: number;
    headers: Record<string, any>;
    method: string;
    operation: string;
    url: string;
}
export interface Project {
    active_time: number;
    active_time_seconds: number;
    branch_logical_size_limit: number;
    branch_logical_size_limit_bytes: number;
    compute_last_active_at?: string;
    compute_time_seconds: number;
    consumption_period_end: string;
    consumption_period_start: string;
    cpu_used_sec: number;
    created_at: string;
    creation_source: string;
    data_storage_bytes_hour: number;
    data_transfer_bytes: number;
    default_endpoint_settings?: Record<string, any>;
    deleted_at?: string;
    effective_project_permission?: string;
    hipaa_enabled_at?: string;
    history_retention_seconds: number;
    id: string;
    label: string;
    maintenance_scheduled_for?: string;
    maintenance_starts_at?: string;
    name: string;
    org_id?: string;
    org_name?: string;
    owner: Record<string, any>;
    owner_id: string;
    pg_version: number;
    platform_id: string;
    project: Record<string, any>;
    provisioner: string;
    proxy_host: string;
    quota_reset_at?: string;
    recoverable_until?: string;
    region_id: string;
    settings?: Record<string, any>;
    store_passwords: boolean;
    synthetic_storage_size?: number;
    updated_at: string;
    written_data_bytes: number;
}
export interface ProjectLoadMatch {
    id: string;
}
export interface ProjectListMatch {
    cursor?: string;
    limit?: number;
    org_id?: string;
    recoverable?: boolean;
    search?: string;
    timeout?: number;
    $action?: string;
    [action: string]: any;
}
export interface ProjectCreateData {
    id: string;
    vpc_endpoint_id: string;
    active_time: number;
    active_time_seconds: number;
    branch_logical_size_limit: number;
    branch_logical_size_limit_bytes: number;
    compute_last_active_at?: string;
    compute_time_seconds: number;
    consumption_period_end: string;
    consumption_period_start: string;
    cpu_used_sec: number;
    created_at: string;
    creation_source: string;
    data_storage_bytes_hour: number;
    data_transfer_bytes: number;
    default_endpoint_settings?: Record<string, any>;
    deleted_at?: string;
    effective_project_permission?: string;
    hipaa_enabled_at?: string;
    history_retention_seconds: number;
    label: string;
    maintenance_scheduled_for?: string;
    maintenance_starts_at?: string;
    name: string;
    org_id?: string;
    org_name?: string;
    owner: Record<string, any>;
    owner_id: string;
    pg_version: number;
    platform_id: string;
    project: Record<string, any>;
    provisioner: string;
    proxy_host: string;
    quota_reset_at?: string;
    recoverable_until?: string;
    region_id: string;
    settings?: Record<string, any>;
    store_passwords: boolean;
    synthetic_storage_size?: number;
    updated_at: string;
    written_data_bytes: number;
    $action?: string;
    [action: string]: any;
}
export interface ProjectUpdateData {
    id: string;
    request_id: string;
    active_time?: number;
    active_time_seconds?: number;
    branch_logical_size_limit?: number;
    branch_logical_size_limit_bytes?: number;
    compute_last_active_at?: string;
    compute_time_seconds?: number;
    consumption_period_end?: string;
    consumption_period_start?: string;
    cpu_used_sec?: number;
    created_at?: string;
    creation_source?: string;
    data_storage_bytes_hour?: number;
    data_transfer_bytes?: number;
    default_endpoint_settings?: Record<string, any>;
    deleted_at?: string;
    effective_project_permission?: string;
    hipaa_enabled_at?: string;
    history_retention_seconds?: number;
    label?: string;
    maintenance_scheduled_for?: string;
    maintenance_starts_at?: string;
    name?: string;
    org_id?: string;
    org_name?: string;
    owner?: Record<string, any>;
    owner_id?: string;
    pg_version?: number;
    platform_id?: string;
    project?: Record<string, any>;
    provisioner?: string;
    proxy_host?: string;
    quota_reset_at?: string;
    recoverable_until?: string;
    region_id?: string;
    settings?: Record<string, any>;
    store_passwords?: boolean;
    synthetic_storage_size?: number;
    updated_at?: string;
    written_data_bytes?: number;
}
export interface ProjectRemoveMatch {
    id: string;
    vpc_endpoint_id?: string;
}
export interface ProjectBranchLogField {
    fields: any[];
}
export interface ProjectBranchLogFieldListMatch {
    branch_id: string;
    project_id: string;
}
export interface ProjectBranchLogFieldValue {
    is_truncated: boolean;
    values: any[];
}
export interface ProjectBranchLogFieldValueListMatch {
    branch_id: string;
    field_name: string;
    project_id: string;
    end_time?: string;
    limit?: number;
    since?: string;
    source?: string;
    start_time?: string;
}
export interface ProjectBranchLogsQuery {
    body_contains?: string;
    cursor?: string;
    end_time?: string;
    is_truncated: boolean;
    limit?: number;
    logql?: string;
    logs: any[];
    minimum_severity?: string;
    next_cursor?: string;
    scope_name?: string;
    service_name?: string;
    severity_text?: string;
    since?: any;
    sort_order?: string;
    source?: string;
    start_time?: string;
    trace_id?: string;
}
export interface ProjectBranchLogsQueryCreateData {
    branch_id: string;
    project_id: string;
    body_contains?: string;
    cursor?: string;
    end_time?: string;
    is_truncated: boolean;
    limit?: number;
    logql?: string;
    logs: any[];
    minimum_severity?: string;
    next_cursor?: string;
    scope_name?: string;
    service_name?: string;
    severity_text?: string;
    since?: any;
    sort_order?: string;
    source?: string;
    start_time?: string;
    trace_id?: string;
}
export interface ProjectMember {
    effective_project_permission?: string;
    email?: string;
    explicit_project_permission?: string;
    grant_source?: string;
    id?: string;
    member_id: string;
    name?: string;
    org_default_project_permission?: string;
    org_role: string;
    project_role?: string;
    user_id: string;
}
export interface ProjectMemberListMatch {
    id: string;
    cursor?: string;
    limit?: number;
}
export interface ProjectMemberRole {
    credential_rotation_recommended?: boolean;
    effective_project_permission?: string;
    email?: string;
    explicit_project_permission?: string;
    member_id: string;
    name?: string;
    org_api_key_rotation_recommended?: boolean;
    org_default_project_permission?: string;
    org_role: string;
    project_id: string;
    project_role?: string;
    role: string;
    user_id: string;
}
export interface ProjectMemberRoleUpdateData {
    member_id: string;
    project_id: string;
    confirm_self_demotion?: boolean;
    credential_rotation_recommended?: boolean;
    effective_project_permission?: string;
    email?: string;
    explicit_project_permission?: string;
    name?: string;
    org_api_key_rotation_recommended?: boolean;
    org_default_project_permission?: string;
    org_role?: string;
    project_role?: string;
    role?: string;
    user_id?: string;
}
export interface ProjectMemberRoleRemoveMatch {
    member_id: string;
    project_id: string;
    confirm_self_lockout?: boolean;
}
export interface ProjectPermission {
    email: string;
    granted_at: string;
    granted_to_email: string;
    id: string;
    revoked_at?: string;
}
export interface ProjectPermissionListMatch {
    id: string;
}
export interface ProjectPermissionCreateData {
    id: string;
    email: string;
    granted_at: string;
    granted_to_email: string;
    revoked_at?: string;
}
export interface ProjectPermissionRemoveMatch {
    id: string;
    project_id: string;
}
export interface ProjectRecover {
    branches: any[];
    id?: string;
    project: Record<string, any>;
}
export interface ProjectRecoverCreateData {
    id: string;
    branches: any[];
    project: Record<string, any>;
}
export interface ProjectTransferRequest {
    id?: string;
    ttl_seconds?: number;
}
export interface ProjectTransferRequestCreateData {
    id: string;
    ttl_seconds?: number;
}
export interface Region {
    default: boolean;
    geo_lat: string;
    geo_long: string;
    name: string;
    region_id: string;
}
export interface RegionListMatch {
    org_id?: string;
}
export interface Role {
    authentication_method?: string;
    branch_id: string;
    created_at: string;
    id?: string;
    name: string;
    password?: string;
    protected?: boolean;
    role: Record<string, any>;
    updated_at: string;
}
export interface RoleLoadMatch {
    branch_id: string;
    id: string;
    project_id: string;
}
export interface RoleListMatch {
    branch_id: string;
    project_id: string;
}
export interface RoleCreateData {
    branch_id: string;
    project_id: string;
    authentication_method?: string;
    created_at: string;
    id?: string;
    name: string;
    password?: string;
    protected?: boolean;
    role: Record<string, any>;
    updated_at: string;
}
export interface RoleRemoveMatch {
    branch_id: string;
    id: string;
    project_id: string;
}
export interface RoleOperation {
    operations: any[];
    role: Record<string, any>;
}
export interface RoleOperationCreateData {
    branch_id: string;
    project_id: string;
    role_name: string;
    operations: any[];
    role: Record<string, any>;
}
export interface RolePassword {
    password: string;
}
export interface RolePasswordLoadMatch {
    branch_id: string;
    project_id: string;
    role_name: string;
}
export interface SendNeonAuthTestEmail {
    error_message?: string;
    host: string;
    password: string;
    port: number;
    recipient_email: string;
    sender_email: string;
    sender_name: string;
    success: boolean;
    username: string;
}
export interface SendNeonAuthTestEmailCreateData {
    branch_id: string;
    project_id: string;
    error_message?: string;
    host: string;
    password: string;
    port: number;
    recipient_email: string;
    sender_email: string;
    sender_name: string;
    success: boolean;
    username: string;
}
export interface Snapshot {
    created_at: string;
    diff_size?: number;
    expires_at?: string;
    full_size?: number;
    id: string;
    lsn?: string;
    manual?: boolean;
    name: string;
    operations: any[];
    slug?: string;
    snapshot: Record<string, any>;
    source_branch_id?: string;
    timestamp?: string;
}
export interface SnapshotListMatch {
    project_id: string;
}
export interface SnapshotCreateData {
    branch_id: string;
    project_id: string;
    expires_at?: string;
    lsn?: string;
    name?: string;
    slug?: string;
    timestamp?: string;
    created_at: string;
    diff_size?: number;
    full_size?: number;
    id: string;
    manual?: boolean;
    operations: any[];
    snapshot: Record<string, any>;
    source_branch_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface SnapshotUpdateData {
    id: string;
    project_id: string;
    created_at?: string;
    diff_size?: number;
    expires_at?: string;
    full_size?: number;
    lsn?: string;
    manual?: boolean;
    name?: string;
    operations?: any[];
    slug?: string;
    snapshot?: Record<string, any>;
    source_branch_id?: string;
    timestamp?: string;
}
export interface SnapshotRemoveMatch {
    id: string;
    project_id: string;
}
export interface SpendingLimit {
    spending_limit_cents: number;
}
export interface SpendingLimitLoadMatch {
    organization_id: string;
}
export interface SpendingLimitUpdateData {
    organization_id: string;
    spending_limit_cents?: number;
}
export interface Trigger {
    id?: string;
    triggers: any[];
}
export interface TriggerLoadMatch {
    branch_id: string;
    id: string;
    project_id: string;
}
export interface TriggerListMatch {
    branch_id: string;
    project_id: string;
}
export interface TriggerCreateData {
    branch_id: string;
    project_id: string;
    id?: string;
    triggers: any[];
}
export interface TriggerUpdateData {
    branch_id: string;
    id: string;
    project_id: string;
    triggers?: any[];
}
export interface UpdateNeonAuthUserRole {
    id: string;
    roles: any[];
}
export interface UpdateNeonAuthUserRoleUpdateData {
    branch_id: string;
    project_id: string;
    user_id: string;
    id?: string;
    roles?: any[];
}
export interface VpcEndpoint {
    example_restricted_projects: any[];
    id?: string;
    label: string;
    num_restricted_projects: number;
    region_id: string;
    state: string;
    vpc_endpoint_id: string;
}
export interface VpcEndpointLoadMatch {
    id: string;
    organization_id: string;
    region_id: string;
}
export interface VpcEndpointListMatch {
    project_id: string;
}
