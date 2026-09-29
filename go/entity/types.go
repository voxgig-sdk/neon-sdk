// Typed models for the Neon SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/neon-sdk/go/core"
)

// Anonymize is the typed data model for the anonymize entity.
type Anonymize struct {
}

// AnonymizeCreateData is the typed request payload for Anonymize.CreateTyped.
type AnonymizeCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	CreatedAt string `json:"created_at"`
	FailedAt *string `json:"failed_at,omitempty"`
	LastRun *map[string]any `json:"last_run,omitempty"`
	State string `json:"state"`
	StatusMessage *string `json:"status_message,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// AnonymizedBranchStatus is the typed data model for the anonymized_branch_status entity.
type AnonymizedBranchStatus struct {
}

// AnonymizedBranchStatusLoadMatch is the typed request payload for AnonymizedBranchStatus.LoadTyped.
type AnonymizedBranchStatusLoadMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// ApiKey is the typed data model for the api_key entity.
type ApiKey struct {
}

// ApiKeyListMatch is the typed request payload for ApiKey.ListTyped.
type ApiKeyListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	Id *int `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	KeyName *string `json:"key_name,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	LastUsedFromAddr *string `json:"last_used_from_addr,omitempty"`
	Name *string `json:"name,omitempty"`
}

// ApiKeyCreateData is the typed request payload for ApiKey.CreateTyped.
type ApiKeyCreateData struct {
	CreatedAt string `json:"created_at"`
	CreatedBy string `json:"created_by"`
	Id int `json:"id"`
	Key string `json:"key"`
	KeyName string `json:"key_name"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	LastUsedFromAddr string `json:"last_used_from_addr"`
	Name string `json:"name"`
}

// ApiKeyRemoveMatch is the typed request payload for ApiKey.RemoveTyped.
type ApiKeyRemoveMatch struct {
	Id int `json:"id"`
}

// Auth is the typed data model for the auth entity.
type Auth struct {
}

// AuthLoadMatch is the typed request payload for Auth.LoadTyped.
type AuthLoadMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	AuthData *string `json:"auth_data,omitempty"`
	AuthMethod *string `json:"auth_method,omitempty"`
}

// AuthCreateData is the typed request payload for Auth.CreateTyped.
type AuthCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	AccountId string `json:"account_id"`
	AuthData *string `json:"auth_data,omitempty"`
	AuthMethod string `json:"auth_method"`
}

// AuthRemoveMatch is the typed request payload for Auth.RemoveTyped.
type AuthRemoveMatch struct {
	AuthUserId *string `json:"auth_user_id,omitempty"`
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	OauthProviderId *string `json:"oauth_provider_id,omitempty"`
}

// AuthLegacy is the typed data model for the auth_legacy entity.
type AuthLegacy struct {
}

// AuthLegacyCreateData is the typed request payload for AuthLegacy.CreateTyped.
type AuthLegacyCreateData struct {
	ProjectId string `json:"project_id"`
	AuthProvider string `json:"auth_provider"`
	Domain string `json:"domain"`
}

// AuthLegacyRemoveMatch is the typed request payload for AuthLegacy.RemoveTyped.
type AuthLegacyRemoveMatch struct {
	AuthProvider *string `json:"auth_provider,omitempty"`
	ProjectId string `json:"project_id"`
	AuthUserId *string `json:"auth_user_id,omitempty"`
	OauthProviderId *string `json:"oauth_provider_id,omitempty"`
}

// AvailablePreloadLibrary is the typed data model for the available_preload_library entity.
type AvailablePreloadLibrary struct {
}

// AvailablePreloadLibraryListMatch is the typed request payload for AvailablePreloadLibrary.ListTyped.
type AvailablePreloadLibraryListMatch struct {
	ProjectId string `json:"project_id"`
}

// BackupSchedule is the typed data model for the backup_schedule entity.
type BackupSchedule struct {
}

// BackupScheduleListMatch is the typed request payload for BackupSchedule.ListTyped.
type BackupScheduleListMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// Branch is the typed data model for the branch entity.
type Branch struct {
}

// BranchLoadMatch is the typed request payload for Branch.LoadTyped.
type BranchLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// BranchListMatch is the typed request payload for Branch.ListTyped.
type BranchListMatch struct {
	ProjectId string `json:"project_id"`
	Cursor *string `json:"cursor,omitempty"`
	IncludeDeleted *bool `json:"include_deleted,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Search *string `json:"search,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
}

// BranchCreateData is the typed request payload for Branch.CreateTyped.
type BranchCreateData struct {
	ProjectId string `json:"project_id"`
	ActiveTimeSeconds int `json:"active_time_seconds"`
	Annotation map[string]any `json:"annotation"`
	Branch map[string]any `json:"branch"`
	ComputeTimeSeconds int `json:"compute_time_seconds"`
	CpuUsedSec int `json:"cpu_used_sec"`
	CreatedAt string `json:"created_at"`
	CreatedBy *map[string]any `json:"created_by,omitempty"`
	CreationSource string `json:"creation_source"`
	CurrentState string `json:"current_state"`
	DataTransferBytes int `json:"data_transfer_bytes"`
	Default bool `json:"default"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Id string `json:"id"`
	InitSource *string `json:"init_source,omitempty"`
	LastResetAt *string `json:"last_reset_at,omitempty"`
	LogicalSize *int `json:"logical_size,omitempty"`
	Name string `json:"name"`
	ParentId *string `json:"parent_id,omitempty"`
	ParentLsn *string `json:"parent_lsn,omitempty"`
	ParentTimestamp *string `json:"parent_timestamp,omitempty"`
	PendingState *string `json:"pending_state,omitempty"`
	Primary *bool `json:"primary,omitempty"`
	Protected bool `json:"protected"`
	Recovery map[string]any `json:"recovery"`
	RestoreStatus *string `json:"restore_status,omitempty"`
	RestoredAs *string `json:"restored_as,omitempty"`
	RestoredFrom *string `json:"restored_from,omitempty"`
	RestrictedActions *[]any `json:"restricted_actions,omitempty"`
	StateChangedAt string `json:"state_changed_at"`
	TtlIntervalSeconds *int `json:"ttl_interval_seconds,omitempty"`
	UpdatedAt string `json:"updated_at"`
	WrittenDataBytes int `json:"written_data_bytes"`
}

// BranchUpdateData is the typed request payload for Branch.UpdateTyped.
type BranchUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	ActiveTimeSeconds *int `json:"active_time_seconds,omitempty"`
	Annotation *map[string]any `json:"annotation,omitempty"`
	Branch *map[string]any `json:"branch,omitempty"`
	ComputeTimeSeconds *int `json:"compute_time_seconds,omitempty"`
	CpuUsedSec *int `json:"cpu_used_sec,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *map[string]any `json:"created_by,omitempty"`
	CreationSource *string `json:"creation_source,omitempty"`
	CurrentState *string `json:"current_state,omitempty"`
	DataTransferBytes *int `json:"data_transfer_bytes,omitempty"`
	Default *bool `json:"default,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	InitSource *string `json:"init_source,omitempty"`
	LastResetAt *string `json:"last_reset_at,omitempty"`
	LogicalSize *int `json:"logical_size,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentId *string `json:"parent_id,omitempty"`
	ParentLsn *string `json:"parent_lsn,omitempty"`
	ParentTimestamp *string `json:"parent_timestamp,omitempty"`
	PendingState *string `json:"pending_state,omitempty"`
	Primary *bool `json:"primary,omitempty"`
	Protected *bool `json:"protected,omitempty"`
	Recovery *map[string]any `json:"recovery,omitempty"`
	RestoreStatus *string `json:"restore_status,omitempty"`
	RestoredAs *string `json:"restored_as,omitempty"`
	RestoredFrom *string `json:"restored_from,omitempty"`
	RestrictedActions *[]any `json:"restricted_actions,omitempty"`
	StateChangedAt *string `json:"state_changed_at,omitempty"`
	TtlIntervalSeconds *int `json:"ttl_interval_seconds,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WrittenDataBytes *int `json:"written_data_bytes,omitempty"`
}

// BranchRemoveMatch is the typed request payload for Branch.RemoveTyped.
type BranchRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// BranchAiGateway is the typed data model for the branch_ai_gateway entity.
type BranchAiGateway struct {
}

// BranchAiGatewayLoadMatch is the typed request payload for BranchAiGateway.LoadTyped.
type BranchAiGatewayLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// BranchOperation is the typed data model for the branch_operation entity.
type BranchOperation struct {
}

// BranchOperationCreateData is the typed request payload for BranchOperation.CreateTyped.
type BranchOperationCreateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	Branch map[string]any `json:"branch"`
	Operations []any `json:"operations"`
}

// BranchSchema is the typed data model for the branch_schema entity.
type BranchSchema struct {
}

// BranchSchemaLoadMatch is the typed request payload for BranchSchema.LoadTyped.
type BranchSchemaLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	DbName string `json:"db_name"`
	Format *string `json:"format,omitempty"`
	Lsn *string `json:"lsn,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// BranchSchemaCompare is the typed data model for the branch_schema_compare entity.
type BranchSchemaCompare struct {
}

// BranchSchemaCompareLoadMatch is the typed request payload for BranchSchemaCompare.LoadTyped.
type BranchSchemaCompareLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	BaseBranchId *string `json:"base_branch_id,omitempty"`
	BaseLsn *string `json:"base_lsn,omitempty"`
	BaseTimestamp *string `json:"base_timestamp,omitempty"`
	DbName string `json:"db_name"`
	Lsn *string `json:"lsn,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// BranchStorage is the typed data model for the branch_storage entity.
type BranchStorage struct {
}

// BranchStorageLoadMatch is the typed request payload for BranchStorage.LoadTyped.
type BranchStorageLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// Bucket is the typed data model for the bucket entity.
type Bucket struct {
}

// BucketLoadMatch is the typed request payload for Bucket.LoadTyped.
type BucketLoadMatch struct {
	BranchId string `json:"branch_id"`
	BucketId string `json:"bucket_id"`
	ObjectKey string `json:"object_key"`
	ProjectId string `json:"project_id"`
}

// BucketListMatch is the typed request payload for Bucket.ListTyped.
type BucketListMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// BucketCreateData is the typed request payload for Bucket.CreateTyped.
type BucketCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	AccessLevel *string `json:"access_level,omitempty"`
	CreatedAt string `json:"created_at"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
}

// BucketRemoveMatch is the typed request payload for Bucket.RemoveTyped.
type BucketRemoveMatch struct {
	BranchId string `json:"branch_id"`
	BucketId *string `json:"bucket_id,omitempty"`
	ObjectKey *string `json:"object_key,omitempty"`
	ProjectId string `json:"project_id"`
	Id *string `json:"id,omitempty"`
}

// BucketObjectsList is the typed data model for the bucket_objects_list entity.
type BucketObjectsList struct {
}

// BucketObjectsListListMatch is the typed request payload for BucketObjectsList.ListTyped.
type BucketObjectsListListMatch struct {
	BranchId string `json:"branch_id"`
	BucketName string `json:"bucket_name"`
	ProjectId string `json:"project_id"`
	Cursor *string `json:"cursor,omitempty"`
	Delimiter *string `json:"delimiter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Prefix *string `json:"prefix,omitempty"`
}

// ConnectionUri is the typed data model for the connection_uri entity.
type ConnectionUri struct {
}

// ConnectionUriLoadMatch is the typed request payload for ConnectionUri.LoadTyped.
type ConnectionUriLoadMatch struct {
	ProjectId string `json:"project_id"`
	BranchId *string `json:"branch_id,omitempty"`
	DatabaseName string `json:"database_name"`
	EndpointId *string `json:"endpoint_id,omitempty"`
	Pooled *bool `json:"pooled,omitempty"`
	RoleName string `json:"role_name"`
}

// Consumption is the typed data model for the consumption entity.
type Consumption struct {
}

// ConsumptionListMatch is the typed request payload for Consumption.ListTyped.
type ConsumptionListMatch struct {
	BranchId *[]any `json:"branch_id,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	From string `json:"from"`
	Granularity string `json:"granularity"`
	Limit *int `json:"limit,omitempty"`
	Metric *[]any `json:"metric,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
	ProjectId *[]any `json:"project_id,omitempty"`
	To string `json:"to"`
	IncludeV1Metric *bool `json:"include_v1_metric,omitempty"`
}

// CreateCredential is the typed data model for the create_credential entity.
type CreateCredential struct {
}

// CreateCredentialCreateData is the typed request payload for CreateCredential.CreateTyped.
type CreateCredentialCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	Name *string `json:"name,omitempty"`
	PrincipalType string `json:"principal_type"`
	Scopes []any `json:"scopes"`
}

// Credential is the typed data model for the credential entity.
type Credential struct {
}

// CredentialListMatch is the typed request payload for Credential.ListTyped.
type CredentialListMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// CredentialCreateData is the typed request payload for Credential.CreateTyped.
type CredentialCreateData struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	CreatedAt string `json:"created_at"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	FunctionId *string `json:"function_id,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	Name *string `json:"name,omitempty"`
	PrincipalType string `json:"principal_type"`
	RevokedAt *string `json:"revoked_at,omitempty"`
	Scopes []any `json:"scopes"`
	TokenId string `json:"token_id"`
	TokenIdShort string `json:"token_id_short"`
}

// CredentialRemoveMatch is the typed request payload for Credential.RemoveTyped.
type CredentialRemoveMatch struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// CurrentUserInfo is the typed data model for the current_user_info entity.
type CurrentUserInfo struct {
}

// CurrentUserInfoListMatch is the typed request payload for CurrentUserInfo.ListTyped.
type CurrentUserInfoListMatch struct {
	Email *string `json:"email,omitempty"`
	Image *string `json:"image,omitempty"`
	Login *string `json:"login,omitempty"`
	Name *string `json:"name,omitempty"`
	Provider *string `json:"provider,omitempty"`
}

// CustomDomain is the typed data model for the custom_domain entity.
type CustomDomain struct {
}

// CustomDomainCreateData is the typed request payload for CustomDomain.CreateTyped.
type CustomDomainCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	Domain string `json:"domain"`
	EntityId string `json:"entity_id"`
	EntityType string `json:"entity_type"`
}

// DataApi is the typed data model for the data_api entity.
type DataApi struct {
}

// DataApiLoadMatch is the typed request payload for DataApi.LoadTyped.
type DataApiLoadMatch struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// DataApiCreateData is the typed request payload for DataApi.CreateTyped.
type DataApiCreateData struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	AddDefaultGrants *bool `json:"add_default_grants,omitempty"`
	AuthProvider *string `json:"auth_provider,omitempty"`
	AvailableSchemas *[]any `json:"available_schemas,omitempty"`
	JwksUrl *string `json:"jwks_url,omitempty"`
	JwtAudience *string `json:"jwt_audience,omitempty"`
	ProviderName *string `json:"provider_name,omitempty"`
	Settings *map[string]any `json:"settings,omitempty"`
	SkipAuthSchema *bool `json:"skip_auth_schema,omitempty"`
	Status string `json:"status"`
	Url string `json:"url"`
}

// DataApiUpdateData is the typed request payload for DataApi.UpdateTyped.
type DataApiUpdateData struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	AddDefaultGrants *bool `json:"add_default_grants,omitempty"`
	AuthProvider *string `json:"auth_provider,omitempty"`
	AvailableSchemas *[]any `json:"available_schemas,omitempty"`
	JwksUrl *string `json:"jwks_url,omitempty"`
	JwtAudience *string `json:"jwt_audience,omitempty"`
	ProviderName *string `json:"provider_name,omitempty"`
	Settings *map[string]any `json:"settings,omitempty"`
	SkipAuthSchema *bool `json:"skip_auth_schema,omitempty"`
	Status *string `json:"status,omitempty"`
	Url *string `json:"url,omitempty"`
}

// DataApiRemoveMatch is the typed request payload for DataApi.RemoveTyped.
type DataApiRemoveMatch struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// Database is the typed data model for the database entity.
type Database struct {
}

// DatabaseLoadMatch is the typed request payload for Database.LoadTyped.
type DatabaseLoadMatch struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// DatabaseListMatch is the typed request payload for Database.ListTyped.
type DatabaseListMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// DatabaseCreateData is the typed request payload for Database.CreateTyped.
type DatabaseCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	CreatedAt string `json:"created_at"`
	Database map[string]any `json:"database"`
	Id int `json:"id"`
	Name string `json:"name"`
	OwnerName string `json:"owner_name"`
	UpdatedAt string `json:"updated_at"`
}

// DatabaseUpdateData is the typed request payload for Database.UpdateTyped.
type DatabaseUpdateData struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	Database *map[string]any `json:"database,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerName *string `json:"owner_name,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// DatabaseRemoveMatch is the typed request payload for Database.RemoveTyped.
type DatabaseRemoveMatch struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// EmailProvider is the typed data model for the email_provider entity.
type EmailProvider struct {
}

// EmailProviderLoadMatch is the typed request payload for EmailProvider.LoadTyped.
type EmailProviderLoadMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// EmailServer is the typed data model for the email_server entity.
type EmailServer struct {
}

// EmailServerLoadMatch is the typed request payload for EmailServer.LoadTyped.
type EmailServerLoadMatch struct {
	ProjectId string `json:"project_id"`
}

// Empty is the typed data model for the empty entity.
type Empty struct {
}

// EmptyCreateData is the typed request payload for Empty.CreateTyped.
type EmptyCreateData struct {
	OrganizationId string `json:"organization_id"`
	DestinationOrgId string `json:"destination_org_id"`
	ProjectIds []any `json:"project_ids"`
	Schedule []any `json:"schedule"`
}

// EmptyUpdateData is the typed request payload for Empty.UpdateTyped.
type EmptyUpdateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	DestinationOrgId *string `json:"destination_org_id,omitempty"`
	ProjectIds *[]any `json:"project_ids,omitempty"`
	Schedule *[]any `json:"schedule,omitempty"`
}

// EmptyRemoveMatch is the typed request payload for Empty.RemoveTyped.
type EmptyRemoveMatch struct {
	OrganizationId string `json:"organization_id"`
}

// Endpoint is the typed data model for the endpoint entity.
type Endpoint struct {
}

// EndpointLoadMatch is the typed request payload for Endpoint.LoadTyped.
type EndpointLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// EndpointListMatch is the typed request payload for Endpoint.ListTyped.
type EndpointListMatch struct {
	BranchId *string `json:"branch_id,omitempty"`
	ProjectId string `json:"project_id"`
}

// EndpointCreateData is the typed request payload for Endpoint.CreateTyped.
type EndpointCreateData struct {
	ProjectId string `json:"project_id"`
	AutoscalingLimitMaxCu float64 `json:"autoscaling_limit_max_cu"`
	AutoscalingLimitMinCu float64 `json:"autoscaling_limit_min_cu"`
	BranchId string `json:"branch_id"`
	ComputeReleaseVersion *string `json:"compute_release_version,omitempty"`
	CreatedAt string `json:"created_at"`
	CreationSource string `json:"creation_source"`
	CurrentState string `json:"current_state"`
	Disabled bool `json:"disabled"`
	Endpoint map[string]any `json:"endpoint"`
	Host string `json:"host"`
	Id string `json:"id"`
	LastActive *string `json:"last_active,omitempty"`
	Name *string `json:"name,omitempty"`
	PasswordlessAccess bool `json:"passwordless_access"`
	PendingState *string `json:"pending_state,omitempty"`
	PoolerEnabled bool `json:"pooler_enabled"`
	PoolerMode string `json:"pooler_mode"`
	Provisioner string `json:"provisioner"`
	ProxyHost string `json:"proxy_host"`
	RegionId string `json:"region_id"`
	Settings map[string]any `json:"settings"`
	StartedAt *string `json:"started_at,omitempty"`
	SuspendTimeoutSeconds int `json:"suspend_timeout_seconds"`
	SuspendedAt *string `json:"suspended_at,omitempty"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
}

// EndpointUpdateData is the typed request payload for Endpoint.UpdateTyped.
type EndpointUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	AutoscalingLimitMaxCu *float64 `json:"autoscaling_limit_max_cu,omitempty"`
	AutoscalingLimitMinCu *float64 `json:"autoscaling_limit_min_cu,omitempty"`
	BranchId *string `json:"branch_id,omitempty"`
	ComputeReleaseVersion *string `json:"compute_release_version,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreationSource *string `json:"creation_source,omitempty"`
	CurrentState *string `json:"current_state,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	Endpoint *map[string]any `json:"endpoint,omitempty"`
	Host *string `json:"host,omitempty"`
	LastActive *string `json:"last_active,omitempty"`
	Name *string `json:"name,omitempty"`
	PasswordlessAccess *bool `json:"passwordless_access,omitempty"`
	PendingState *string `json:"pending_state,omitempty"`
	PoolerEnabled *bool `json:"pooler_enabled,omitempty"`
	PoolerMode *string `json:"pooler_mode,omitempty"`
	Provisioner *string `json:"provisioner,omitempty"`
	ProxyHost *string `json:"proxy_host,omitempty"`
	RegionId *string `json:"region_id,omitempty"`
	Settings *map[string]any `json:"settings,omitempty"`
	StartedAt *string `json:"started_at,omitempty"`
	SuspendTimeoutSeconds *int `json:"suspend_timeout_seconds,omitempty"`
	SuspendedAt *string `json:"suspended_at,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// EndpointRemoveMatch is the typed request payload for Endpoint.RemoveTyped.
type EndpointRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// EndpointOperation is the typed data model for the endpoint_operation entity.
type EndpointOperation struct {
}

// EndpointOperationCreateData is the typed request payload for EndpointOperation.CreateTyped.
type EndpointOperationCreateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	Endpoint map[string]any `json:"endpoint"`
	Operations []any `json:"operations"`
}

// Function is the typed data model for the function entity.
type Function struct {
}

// FunctionListMatch is the typed request payload for Function.ListTyped.
type FunctionListMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// FunctionRemoveMatch is the typed request payload for Function.RemoveTyped.
type FunctionRemoveMatch struct {
	BranchId string `json:"branch_id"`
	Domain *string `json:"domain,omitempty"`
	ProjectId string `json:"project_id"`
	Id *string `json:"id,omitempty"`
	TriggerId *string `json:"trigger_id,omitempty"`
}

// Jwk is the typed data model for the jwk entity.
type Jwk struct {
}

// JwkListMatch is the typed request payload for Jwk.ListTyped.
type JwkListMatch struct {
	ProjectId string `json:"project_id"`
}

// JwkCreateData is the typed request payload for Jwk.CreateTyped.
type JwkCreateData struct {
	ProjectId string `json:"project_id"`
	BranchId *string `json:"branch_id,omitempty"`
	CreatedAt string `json:"created_at"`
	Id string `json:"id"`
	JwksUrl string `json:"jwks_url"`
	JwtAudience *string `json:"jwt_audience,omitempty"`
	ProviderName string `json:"provider_name"`
	RoleNames *[]any `json:"role_names,omitempty"`
	SkipRoleCreation *bool `json:"skip_role_creation,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// JwkRemoveMatch is the typed request payload for Jwk.RemoveTyped.
type JwkRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// MaskingRule is the typed data model for the masking_rule entity.
type MaskingRule struct {
}

// MaskingRuleListMatch is the typed request payload for MaskingRule.ListTyped.
type MaskingRuleListMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// MaskingRuleUpdateData is the typed request payload for MaskingRule.UpdateTyped.
type MaskingRuleUpdateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	ColumnName *string `json:"column_name,omitempty"`
	DatabaseName *string `json:"database_name,omitempty"`
	MaskingFunction *string `json:"masking_function,omitempty"`
	MaskingRules *[]any `json:"masking_rules,omitempty"`
	MaskingValue *string `json:"masking_value,omitempty"`
	SchemaName *string `json:"schema_name,omitempty"`
	TableName *string `json:"table_name,omitempty"`
}

// Member is the typed data model for the member entity.
type Member struct {
}

// MemberLoadMatch is the typed request payload for Member.LoadTyped.
type MemberLoadMatch struct {
	Id string `json:"id"`
	OrganizationId string `json:"organization_id"`
}

// MemberUpdateData is the typed request payload for Member.UpdateTyped.
type MemberUpdateData struct {
	Id string `json:"id"`
	OrganizationId string `json:"organization_id"`
	JoinedAt *string `json:"joined_at,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
	Role *string `json:"role,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// MemberRemoveMatch is the typed request payload for Member.RemoveTyped.
type MemberRemoveMatch struct {
	Id string `json:"id"`
	OrganizationId string `json:"organization_id"`
}

// NeonAuthAllowLocalhost is the typed data model for the neon_auth_allow_localhost entity.
type NeonAuthAllowLocalhost struct {
}

// NeonAuthAllowLocalhostLoadMatch is the typed request payload for NeonAuthAllowLocalhost.LoadTyped.
type NeonAuthAllowLocalhostLoadMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// NeonAuthAllowLocalhostUpdateData is the typed request payload for NeonAuthAllowLocalhost.UpdateTyped.
type NeonAuthAllowLocalhostUpdateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	AllowLocalhost *bool `json:"allow_localhost,omitempty"`
}

// NeonAuthConfig is the typed data model for the neon_auth_config entity.
type NeonAuthConfig struct {
}

// NeonAuthConfigUpdateData is the typed request payload for NeonAuthConfig.UpdateTyped.
type NeonAuthConfigUpdateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	Name *string `json:"name,omitempty"`
}

// NeonAuthCreateIntegration is the typed data model for the neon_auth_create_integration entity.
type NeonAuthCreateIntegration struct {
}

// NeonAuthCreateIntegrationCreateData is the typed request payload for NeonAuthCreateIntegration.CreateTyped.
type NeonAuthCreateIntegrationCreateData struct {
	AuthProvider string `json:"auth_provider"`
	BranchId string `json:"branch_id"`
	DatabaseName *string `json:"database_name,omitempty"`
	ProjectId string `json:"project_id"`
	RoleName *string `json:"role_name,omitempty"`
}

// NeonAuthCreateNewUser is the typed data model for the neon_auth_create_new_user entity.
type NeonAuthCreateNewUser struct {
}

// NeonAuthCreateNewUserCreateData is the typed request payload for NeonAuthCreateNewUser.CreateTyped.
type NeonAuthCreateNewUserCreateData struct {
	AuthProvider string `json:"auth_provider"`
	Email string `json:"email"`
	Name *string `json:"name,omitempty"`
	ProjectId string `json:"project_id"`
}

// NeonAuthEmailAndPasswordConfig is the typed data model for the neon_auth_email_and_password_config entity.
type NeonAuthEmailAndPasswordConfig struct {
}

// NeonAuthEmailAndPasswordConfigLoadMatch is the typed request payload for NeonAuthEmailAndPasswordConfig.LoadTyped.
type NeonAuthEmailAndPasswordConfigLoadMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// NeonAuthEmailAndPasswordConfigUpdateData is the typed request payload for NeonAuthEmailAndPasswordConfig.UpdateTyped.
type NeonAuthEmailAndPasswordConfigUpdateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	AutoSignInAfterVerification *bool `json:"auto_sign_in_after_verification,omitempty"`
	DisableSignUp *bool `json:"disable_sign_up,omitempty"`
	EmailVerificationMethod *string `json:"email_verification_method,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	RequireEmailVerification *bool `json:"require_email_verification,omitempty"`
	SendVerificationEmailOnSignIn *bool `json:"send_verification_email_on_sign_in,omitempty"`
	SendVerificationEmailOnSignUp *bool `json:"send_verification_email_on_sign_up,omitempty"`
}

// NeonAuthEmailServerConfig is the typed data model for the neon_auth_email_server_config entity.
type NeonAuthEmailServerConfig struct {
}

// NeonAuthEmailServerConfigUpdateData is the typed request payload for NeonAuthEmailServerConfig.UpdateTyped.
type NeonAuthEmailServerConfigUpdateData struct {
	BranchId *string `json:"branch_id,omitempty"`
	ProjectId string `json:"project_id"`
}

// NeonAuthIntegration is the typed data model for the neon_auth_integration entity.
type NeonAuthIntegration struct {
}

// NeonAuthIntegrationLoadMatch is the typed request payload for NeonAuthIntegration.LoadTyped.
type NeonAuthIntegrationLoadMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// NeonAuthIntegrationListMatch is the typed request payload for NeonAuthIntegration.ListTyped.
type NeonAuthIntegrationListMatch struct {
	ProjectId string `json:"project_id"`
}

// NeonAuthMagicLinkConfig is the typed data model for the neon_auth_magic_link_config entity.
type NeonAuthMagicLinkConfig struct {
}

// NeonAuthMagicLinkConfigUpdateData is the typed request payload for NeonAuthMagicLinkConfig.UpdateTyped.
type NeonAuthMagicLinkConfigUpdateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	DisableSignUp *bool `json:"disable_sign_up,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	ExpiresIn *int `json:"expires_in,omitempty"`
}

// NeonAuthOauthProvider is the typed data model for the neon_auth_oauth_provider entity.
type NeonAuthOauthProvider struct {
}

// NeonAuthOauthProviderListMatch is the typed request payload for NeonAuthOauthProvider.ListTyped.
type NeonAuthOauthProviderListMatch struct {
	BranchId *string `json:"branch_id,omitempty"`
	ProjectId string `json:"project_id"`
}

// NeonAuthOauthProviderCreateData is the typed request payload for NeonAuthOauthProvider.CreateTyped.
type NeonAuthOauthProviderCreateData struct {
	BranchId *string `json:"branch_id,omitempty"`
	ProjectId string `json:"project_id"`
	ClientId *string `json:"client_id,omitempty"`
	ClientSecret *string `json:"client_secret,omitempty"`
	Id string `json:"id"`
	MicrosoftTenantId *string `json:"microsoft_tenant_id,omitempty"`
	Type string `json:"type"`
}

// NeonAuthOauthProviderUpdateData is the typed request payload for NeonAuthOauthProvider.UpdateTyped.
type NeonAuthOauthProviderUpdateData struct {
	BranchId *string `json:"branch_id,omitempty"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	ClientId *string `json:"client_id,omitempty"`
	ClientSecret *string `json:"client_secret,omitempty"`
	MicrosoftTenantId *string `json:"microsoft_tenant_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// NeonAuthOrganizationConfig is the typed data model for the neon_auth_organization_config entity.
type NeonAuthOrganizationConfig struct {
}

// NeonAuthOrganizationConfigUpdateData is the typed request payload for NeonAuthOrganizationConfig.UpdateTyped.
type NeonAuthOrganizationConfigUpdateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	CreatorRole *string `json:"creator_role,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	MembershipLimit *int `json:"membership_limit,omitempty"`
	OrganizationLimit *int `json:"organization_limit,omitempty"`
	SendInvitationEmail *bool `json:"send_invitation_email,omitempty"`
}

// NeonAuthPhoneNumberConfig is the typed data model for the neon_auth_phone_number_config entity.
type NeonAuthPhoneNumberConfig struct {
}

// NeonAuthPhoneNumberConfigLoadMatch is the typed request payload for NeonAuthPhoneNumberConfig.LoadTyped.
type NeonAuthPhoneNumberConfigLoadMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// NeonAuthPhoneNumberConfigUpdateData is the typed request payload for NeonAuthPhoneNumberConfig.UpdateTyped.
type NeonAuthPhoneNumberConfigUpdateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	Enabled *bool `json:"enabled,omitempty"`
	OtpExpiresIn *int `json:"otp_expires_in,omitempty"`
}

// NeonAuthPluginConfig is the typed data model for the neon_auth_plugin_config entity.
type NeonAuthPluginConfig struct {
}

// NeonAuthPluginConfigListMatch is the typed request payload for NeonAuthPluginConfig.ListTyped.
type NeonAuthPluginConfigListMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// NeonAuthRedirectUriWhitelistDomain is the typed data model for the neon_auth_redirect_uri_whitelist_domain entity.
type NeonAuthRedirectUriWhitelistDomain struct {
}

// NeonAuthRedirectUriWhitelistDomainListMatch is the typed request payload for NeonAuthRedirectUriWhitelistDomain.ListTyped.
type NeonAuthRedirectUriWhitelistDomainListMatch struct {
	BranchId *string `json:"branch_id,omitempty"`
	ProjectId string `json:"project_id"`
}

// NeonAuthTransferAuthProviderProject is the typed data model for the neon_auth_transfer_auth_provider_project entity.
type NeonAuthTransferAuthProviderProject struct {
}

// NeonAuthTransferAuthProviderProjectCreateData is the typed request payload for NeonAuthTransferAuthProviderProject.CreateTyped.
type NeonAuthTransferAuthProviderProjectCreateData struct {
	AuthProvider string `json:"auth_provider"`
	ProjectId string `json:"project_id"`
	Url string `json:"url"`
}

// NeonAuthWebhookConfig is the typed data model for the neon_auth_webhook_config entity.
type NeonAuthWebhookConfig struct {
}

// NeonAuthWebhookConfigListMatch is the typed request payload for NeonAuthWebhookConfig.ListTyped.
type NeonAuthWebhookConfigListMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// NeonAuthWebhookConfigUpdateData is the typed request payload for NeonAuthWebhookConfig.UpdateTyped.
type NeonAuthWebhookConfigUpdateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	Enabled *bool `json:"enabled,omitempty"`
	EnabledEvents *[]any `json:"enabled_events,omitempty"`
	TimeoutSeconds *int `json:"timeout_seconds,omitempty"`
	WebhookUrl *string `json:"webhook_url,omitempty"`
}

// NeonFunction is the typed data model for the neon_function entity.
type NeonFunction struct {
}

// NeonFunctionLoadMatch is the typed request payload for NeonFunction.LoadTyped.
type NeonFunctionLoadMatch struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// NeonFunctionUpdateData is the typed request payload for NeonFunction.UpdateTyped.
type NeonFunctionUpdateData struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	ActiveDeployment *any `json:"active_deployment,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CurrentDeployment *any `json:"current_deployment,omitempty"`
	InvocationUrl *string `json:"invocation_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

// NeonFunctionDeployment is the typed data model for the neon_function_deployment entity.
type NeonFunctionDeployment struct {
}

// NeonFunctionDeploymentCreateData is the typed request payload for NeonFunctionDeployment.CreateTyped.
type NeonFunctionDeploymentCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	Slug string `json:"slug"`
}

// Operation is the typed data model for the operation entity.
type Operation struct {
}

// OperationLoadMatch is the typed request payload for Operation.LoadTyped.
type OperationLoadMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// OperationListMatch is the typed request payload for Operation.ListTyped.
type OperationListMatch struct {
	ProjectId string `json:"project_id"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// OperationCreateData is the typed request payload for Operation.CreateTyped.
type OperationCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	Action string `json:"action"`
	CreatedAt string `json:"created_at"`
	EndpointId *string `json:"endpoint_id,omitempty"`
	Error *string `json:"error,omitempty"`
	FailuresCount int `json:"failures_count"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	Operations []any `json:"operations"`
	RetryAt *string `json:"retry_at,omitempty"`
	Status string `json:"status"`
	TotalDurationMs int `json:"total_duration_ms"`
	UpdatedAt string `json:"updated_at"`
}

// OrgApiKeyCreate is the typed data model for the org_api_key_create entity.
type OrgApiKeyCreate struct {
}

// OrgApiKeyCreateCreateData is the typed request payload for OrgApiKeyCreate.CreateTyped.
type OrgApiKeyCreateCreateData struct {
	OrganizationId string `json:"organization_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	Id *int `json:"id,omitempty"`
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
}

// OrgApiKeyRevoke is the typed data model for the org_api_key_revoke entity.
type OrgApiKeyRevoke struct {
}

// OrgApiKeyRevokeRemoveMatch is the typed request payload for OrgApiKeyRevoke.RemoveTyped.
type OrgApiKeyRevokeRemoveMatch struct {
	KeyId int `json:"key_id"`
	OrganizationId string `json:"organization_id"`
}

// OrgApiKeysListResponseItem is the typed data model for the org_api_keys_list_response_item entity.
type OrgApiKeysListResponseItem struct {
}

// OrgApiKeysListResponseItemListMatch is the typed request payload for OrgApiKeysListResponseItem.ListTyped.
type OrgApiKeysListResponseItemListMatch struct {
	OrganizationId string `json:"organization_id"`
}

// Organization is the typed data model for the organization entity.
type Organization struct {
}

// OrganizationLoadMatch is the typed request payload for Organization.LoadTyped.
type OrganizationLoadMatch struct {
	Id string `json:"id"`
}

// OrganizationListMatch is the typed request payload for Organization.ListTyped.
type OrganizationListMatch struct {
	AllowHipaaProjects *bool `json:"allow_hipaa_projects,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Id *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	ManagedBy *string `json:"managed_by,omitempty"`
	Name *string `json:"name,omitempty"`
	Plan *string `json:"plan,omitempty"`
	RequireMfa *bool `json:"require_mfa,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// OrganizationCreateData is the typed request payload for Organization.CreateTyped.
type OrganizationCreateData struct {
	Id string `json:"id"`
	RegionId string `json:"region_id"`
	VpcEndpointId string `json:"vpc_endpoint_id"`
	AllowHipaaProjects *bool `json:"allow_hipaa_projects,omitempty"`
	CreatedAt string `json:"created_at"`
	Handle string `json:"handle"`
	Label string `json:"label"`
	ManagedBy string `json:"managed_by"`
	Name string `json:"name"`
	Plan string `json:"plan"`
	RequireMfa *bool `json:"require_mfa,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// OrganizationRemoveMatch is the typed request payload for Organization.RemoveTyped.
type OrganizationRemoveMatch struct {
	Id string `json:"id"`
	RegionId string `json:"region_id"`
	VpcEndpointId string `json:"vpc_endpoint_id"`
}

// OrganizationInvitation is the typed data model for the organization_invitation entity.
type OrganizationInvitation struct {
}

// OrganizationInvitationListMatch is the typed request payload for OrganizationInvitation.ListTyped.
type OrganizationInvitationListMatch struct {
	Id string `json:"id"`
}

// OrganizationInvitationCreateData is the typed request payload for OrganizationInvitation.CreateTyped.
type OrganizationInvitationCreateData struct {
	Id string `json:"id"`
	Email string `json:"email"`
	Invitations []any `json:"invitations"`
	InvitedAt string `json:"invited_at"`
	InvitedBy string `json:"invited_by"`
	OrgId string `json:"org_id"`
	Role string `json:"role"`
}

// Presign is the typed data model for the presign entity.
type Presign struct {
}

// PresignCreateData is the typed request payload for Presign.CreateTyped.
type PresignCreateData struct {
	BranchId string `json:"branch_id"`
	BucketId string `json:"bucket_id"`
	ObjectKey string `json:"object_key"`
	ProjectId string `json:"project_id"`
	ContentType *string `json:"content_type,omitempty"`
	ExpiresAt string `json:"expires_at"`
	ExpiresInSeconds *int `json:"expires_in_seconds,omitempty"`
	Headers map[string]any `json:"headers"`
	Method string `json:"method"`
	Operation string `json:"operation"`
	Url string `json:"url"`
}

// Project is the typed data model for the project entity.
type Project struct {
}

// ProjectLoadMatch is the typed request payload for Project.LoadTyped.
type ProjectLoadMatch struct {
	Id string `json:"id"`
}

// ProjectListMatch is the typed request payload for Project.ListTyped.
type ProjectListMatch struct {
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
	Recoverable *bool `json:"recoverable,omitempty"`
	Search *string `json:"search,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
}

// ProjectCreateData is the typed request payload for Project.CreateTyped.
type ProjectCreateData struct {
	Id string `json:"id"`
	VpcEndpointId string `json:"vpc_endpoint_id"`
	ActiveTime int `json:"active_time"`
	ActiveTimeSeconds int `json:"active_time_seconds"`
	BranchLogicalSizeLimit int `json:"branch_logical_size_limit"`
	BranchLogicalSizeLimitBytes int `json:"branch_logical_size_limit_bytes"`
	ComputeLastActiveAt *string `json:"compute_last_active_at,omitempty"`
	ComputeTimeSeconds int `json:"compute_time_seconds"`
	ConsumptionPeriodEnd string `json:"consumption_period_end"`
	ConsumptionPeriodStart string `json:"consumption_period_start"`
	CpuUsedSec int `json:"cpu_used_sec"`
	CreatedAt string `json:"created_at"`
	CreationSource string `json:"creation_source"`
	DataStorageBytesHour int `json:"data_storage_bytes_hour"`
	DataTransferBytes int `json:"data_transfer_bytes"`
	DefaultEndpointSettings *map[string]any `json:"default_endpoint_settings,omitempty"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	EffectiveProjectPermission *string `json:"effective_project_permission,omitempty"`
	HipaaEnabledAt *string `json:"hipaa_enabled_at,omitempty"`
	HistoryRetentionSeconds int `json:"history_retention_seconds"`
	Label string `json:"label"`
	MaintenanceScheduledFor *string `json:"maintenance_scheduled_for,omitempty"`
	MaintenanceStartsAt *string `json:"maintenance_starts_at,omitempty"`
	Name string `json:"name"`
	OrgId *string `json:"org_id,omitempty"`
	OrgName *string `json:"org_name,omitempty"`
	Owner map[string]any `json:"owner"`
	OwnerId string `json:"owner_id"`
	PgVersion int `json:"pg_version"`
	PlatformId string `json:"platform_id"`
	Project map[string]any `json:"project"`
	Provisioner string `json:"provisioner"`
	ProxyHost string `json:"proxy_host"`
	QuotaResetAt *string `json:"quota_reset_at,omitempty"`
	RecoverableUntil *string `json:"recoverable_until,omitempty"`
	RegionId string `json:"region_id"`
	Settings *map[string]any `json:"settings,omitempty"`
	StorePasswords bool `json:"store_passwords"`
	SyntheticStorageSize *int `json:"synthetic_storage_size,omitempty"`
	UpdatedAt string `json:"updated_at"`
	WrittenDataBytes int `json:"written_data_bytes"`
}

// ProjectUpdateData is the typed request payload for Project.UpdateTyped.
type ProjectUpdateData struct {
	Id string `json:"id"`
	RequestId string `json:"request_id"`
	ActiveTime *int `json:"active_time,omitempty"`
	ActiveTimeSeconds *int `json:"active_time_seconds,omitempty"`
	BranchLogicalSizeLimit *int `json:"branch_logical_size_limit,omitempty"`
	BranchLogicalSizeLimitBytes *int `json:"branch_logical_size_limit_bytes,omitempty"`
	ComputeLastActiveAt *string `json:"compute_last_active_at,omitempty"`
	ComputeTimeSeconds *int `json:"compute_time_seconds,omitempty"`
	ConsumptionPeriodEnd *string `json:"consumption_period_end,omitempty"`
	ConsumptionPeriodStart *string `json:"consumption_period_start,omitempty"`
	CpuUsedSec *int `json:"cpu_used_sec,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreationSource *string `json:"creation_source,omitempty"`
	DataStorageBytesHour *int `json:"data_storage_bytes_hour,omitempty"`
	DataTransferBytes *int `json:"data_transfer_bytes,omitempty"`
	DefaultEndpointSettings *map[string]any `json:"default_endpoint_settings,omitempty"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	EffectiveProjectPermission *string `json:"effective_project_permission,omitempty"`
	HipaaEnabledAt *string `json:"hipaa_enabled_at,omitempty"`
	HistoryRetentionSeconds *int `json:"history_retention_seconds,omitempty"`
	Label *string `json:"label,omitempty"`
	MaintenanceScheduledFor *string `json:"maintenance_scheduled_for,omitempty"`
	MaintenanceStartsAt *string `json:"maintenance_starts_at,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgId *string `json:"org_id,omitempty"`
	OrgName *string `json:"org_name,omitempty"`
	Owner *map[string]any `json:"owner,omitempty"`
	OwnerId *string `json:"owner_id,omitempty"`
	PgVersion *int `json:"pg_version,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	Project *map[string]any `json:"project,omitempty"`
	Provisioner *string `json:"provisioner,omitempty"`
	ProxyHost *string `json:"proxy_host,omitempty"`
	QuotaResetAt *string `json:"quota_reset_at,omitempty"`
	RecoverableUntil *string `json:"recoverable_until,omitempty"`
	RegionId *string `json:"region_id,omitempty"`
	Settings *map[string]any `json:"settings,omitempty"`
	StorePasswords *bool `json:"store_passwords,omitempty"`
	SyntheticStorageSize *int `json:"synthetic_storage_size,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WrittenDataBytes *int `json:"written_data_bytes,omitempty"`
}

// ProjectRemoveMatch is the typed request payload for Project.RemoveTyped.
type ProjectRemoveMatch struct {
	Id string `json:"id"`
	VpcEndpointId *string `json:"vpc_endpoint_id,omitempty"`
}

// ProjectBranchLogField is the typed data model for the project_branch_log_field entity.
type ProjectBranchLogField struct {
}

// ProjectBranchLogFieldListMatch is the typed request payload for ProjectBranchLogField.ListTyped.
type ProjectBranchLogFieldListMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// ProjectBranchLogFieldValue is the typed data model for the project_branch_log_field_value entity.
type ProjectBranchLogFieldValue struct {
}

// ProjectBranchLogFieldValueListMatch is the typed request payload for ProjectBranchLogFieldValue.ListTyped.
type ProjectBranchLogFieldValueListMatch struct {
	BranchId string `json:"branch_id"`
	FieldName string `json:"field_name"`
	ProjectId string `json:"project_id"`
	EndTime *string `json:"end_time,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Since *string `json:"since,omitempty"`
	Source *string `json:"source,omitempty"`
	StartTime *string `json:"start_time,omitempty"`
}

// ProjectBranchLogsQuery is the typed data model for the project_branch_logs_query entity.
type ProjectBranchLogsQuery struct {
}

// ProjectBranchLogsQueryCreateData is the typed request payload for ProjectBranchLogsQuery.CreateTyped.
type ProjectBranchLogsQueryCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	BodyContains *string `json:"body_contains,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	EndTime *string `json:"end_time,omitempty"`
	IsTruncated bool `json:"is_truncated"`
	Limit *int `json:"limit,omitempty"`
	Logql *string `json:"logql,omitempty"`
	Logs []any `json:"logs"`
	MinimumSeverity *string `json:"minimum_severity,omitempty"`
	NextCursor *string `json:"next_cursor,omitempty"`
	ScopeName *string `json:"scope_name,omitempty"`
	ServiceName *string `json:"service_name,omitempty"`
	SeverityText *string `json:"severity_text,omitempty"`
	Since *any `json:"since,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	Source *string `json:"source,omitempty"`
	StartTime *string `json:"start_time,omitempty"`
	TraceId *string `json:"trace_id,omitempty"`
}

// ProjectMember is the typed data model for the project_member entity.
type ProjectMember struct {
}

// ProjectMemberListMatch is the typed request payload for ProjectMember.ListTyped.
type ProjectMemberListMatch struct {
	Id string `json:"id"`
	Cursor *string `json:"cursor,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// ProjectMemberRole is the typed data model for the project_member_role entity.
type ProjectMemberRole struct {
}

// ProjectMemberRoleUpdateData is the typed request payload for ProjectMemberRole.UpdateTyped.
type ProjectMemberRoleUpdateData struct {
	MemberId string `json:"member_id"`
	ProjectId string `json:"project_id"`
	ConfirmSelfDemotion *bool `json:"confirm_self_demotion,omitempty"`
	CredentialRotationRecommended *bool `json:"credential_rotation_recommended,omitempty"`
	EffectiveProjectPermission *string `json:"effective_project_permission,omitempty"`
	Email *string `json:"email,omitempty"`
	ExplicitProjectPermission *string `json:"explicit_project_permission,omitempty"`
	Name *string `json:"name,omitempty"`
	OrgApiKeyRotationRecommended *bool `json:"org_api_key_rotation_recommended,omitempty"`
	OrgDefaultProjectPermission *string `json:"org_default_project_permission,omitempty"`
	OrgRole *string `json:"org_role,omitempty"`
	ProjectRole *string `json:"project_role,omitempty"`
	Role *string `json:"role,omitempty"`
	UserId *string `json:"user_id,omitempty"`
}

// ProjectMemberRoleRemoveMatch is the typed request payload for ProjectMemberRole.RemoveTyped.
type ProjectMemberRoleRemoveMatch struct {
	MemberId string `json:"member_id"`
	ProjectId string `json:"project_id"`
	ConfirmSelfLockout *bool `json:"confirm_self_lockout,omitempty"`
}

// ProjectPermission is the typed data model for the project_permission entity.
type ProjectPermission struct {
}

// ProjectPermissionListMatch is the typed request payload for ProjectPermission.ListTyped.
type ProjectPermissionListMatch struct {
	Id string `json:"id"`
}

// ProjectPermissionCreateData is the typed request payload for ProjectPermission.CreateTyped.
type ProjectPermissionCreateData struct {
	Id string `json:"id"`
	Email string `json:"email"`
	GrantedAt string `json:"granted_at"`
	GrantedToEmail string `json:"granted_to_email"`
	RevokedAt *string `json:"revoked_at,omitempty"`
}

// ProjectPermissionRemoveMatch is the typed request payload for ProjectPermission.RemoveTyped.
type ProjectPermissionRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// ProjectRecover is the typed data model for the project_recover entity.
type ProjectRecover struct {
}

// ProjectRecoverCreateData is the typed request payload for ProjectRecover.CreateTyped.
type ProjectRecoverCreateData struct {
	Id string `json:"id"`
	Branches []any `json:"branches"`
	Project map[string]any `json:"project"`
}

// ProjectTransferRequest is the typed data model for the project_transfer_request entity.
type ProjectTransferRequest struct {
}

// ProjectTransferRequestCreateData is the typed request payload for ProjectTransferRequest.CreateTyped.
type ProjectTransferRequestCreateData struct {
	Id string `json:"id"`
	TtlSeconds *int `json:"ttl_seconds,omitempty"`
}

// Region is the typed data model for the region entity.
type Region struct {
}

// RegionListMatch is the typed request payload for Region.ListTyped.
type RegionListMatch struct {
	OrgId *string `json:"org_id,omitempty"`
}

// Role is the typed data model for the role entity.
type Role struct {
}

// RoleLoadMatch is the typed request payload for Role.LoadTyped.
type RoleLoadMatch struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// RoleListMatch is the typed request payload for Role.ListTyped.
type RoleListMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// RoleCreateData is the typed request payload for Role.CreateTyped.
type RoleCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	AuthenticationMethod *string `json:"authentication_method,omitempty"`
	CreatedAt string `json:"created_at"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Password *string `json:"password,omitempty"`
	Protected *bool `json:"protected,omitempty"`
	Role map[string]any `json:"role"`
	UpdatedAt string `json:"updated_at"`
}

// RoleRemoveMatch is the typed request payload for Role.RemoveTyped.
type RoleRemoveMatch struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// RoleOperation is the typed data model for the role_operation entity.
type RoleOperation struct {
}

// RoleOperationCreateData is the typed request payload for RoleOperation.CreateTyped.
type RoleOperationCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	RoleName string `json:"role_name"`
	Operations []any `json:"operations"`
	Role map[string]any `json:"role"`
}

// RolePassword is the typed data model for the role_password entity.
type RolePassword struct {
}

// RolePasswordLoadMatch is the typed request payload for RolePassword.LoadTyped.
type RolePasswordLoadMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	RoleName string `json:"role_name"`
}

// SendNeonAuthTestEmail is the typed data model for the send_neon_auth_test_email entity.
type SendNeonAuthTestEmail struct {
}

// SendNeonAuthTestEmailCreateData is the typed request payload for SendNeonAuthTestEmail.CreateTyped.
type SendNeonAuthTestEmailCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	ErrorMessage *string `json:"error_message,omitempty"`
	Host string `json:"host"`
	Password string `json:"password"`
	Port int `json:"port"`
	RecipientEmail string `json:"recipient_email"`
	SenderEmail string `json:"sender_email"`
	SenderName string `json:"sender_name"`
	Success bool `json:"success"`
	Username string `json:"username"`
}

// Snapshot is the typed data model for the snapshot entity.
type Snapshot struct {
}

// SnapshotListMatch is the typed request payload for Snapshot.ListTyped.
type SnapshotListMatch struct {
	ProjectId string `json:"project_id"`
}

// SnapshotCreateData is the typed request payload for Snapshot.CreateTyped.
type SnapshotCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Lsn *string `json:"lsn,omitempty"`
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	CreatedAt string `json:"created_at"`
	DiffSize *int `json:"diff_size,omitempty"`
	FullSize *int `json:"full_size,omitempty"`
	Id string `json:"id"`
	Manual *bool `json:"manual,omitempty"`
	Operations []any `json:"operations"`
	Snapshot map[string]any `json:"snapshot"`
	SourceBranchId *string `json:"source_branch_id,omitempty"`
}

// SnapshotUpdateData is the typed request payload for Snapshot.UpdateTyped.
type SnapshotUpdateData struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	DiffSize *int `json:"diff_size,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	FullSize *int `json:"full_size,omitempty"`
	Lsn *string `json:"lsn,omitempty"`
	Manual *bool `json:"manual,omitempty"`
	Name *string `json:"name,omitempty"`
	Operations *[]any `json:"operations,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Snapshot *map[string]any `json:"snapshot,omitempty"`
	SourceBranchId *string `json:"source_branch_id,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
}

// SnapshotRemoveMatch is the typed request payload for Snapshot.RemoveTyped.
type SnapshotRemoveMatch struct {
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// SpendingLimit is the typed data model for the spending_limit entity.
type SpendingLimit struct {
}

// SpendingLimitLoadMatch is the typed request payload for SpendingLimit.LoadTyped.
type SpendingLimitLoadMatch struct {
	OrganizationId string `json:"organization_id"`
}

// SpendingLimitUpdateData is the typed request payload for SpendingLimit.UpdateTyped.
type SpendingLimitUpdateData struct {
	OrganizationId string `json:"organization_id"`
	SpendingLimitCents *int `json:"spending_limit_cents,omitempty"`
}

// Trigger is the typed data model for the trigger entity.
type Trigger struct {
}

// TriggerLoadMatch is the typed request payload for Trigger.LoadTyped.
type TriggerLoadMatch struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
}

// TriggerListMatch is the typed request payload for Trigger.ListTyped.
type TriggerListMatch struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
}

// TriggerCreateData is the typed request payload for Trigger.CreateTyped.
type TriggerCreateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	Id *string `json:"id,omitempty"`
	Triggers []any `json:"triggers"`
}

// TriggerUpdateData is the typed request payload for Trigger.UpdateTyped.
type TriggerUpdateData struct {
	BranchId string `json:"branch_id"`
	Id string `json:"id"`
	ProjectId string `json:"project_id"`
	Triggers *[]any `json:"triggers,omitempty"`
}

// UpdateNeonAuthUserRole is the typed data model for the update_neon_auth_user_role entity.
type UpdateNeonAuthUserRole struct {
}

// UpdateNeonAuthUserRoleUpdateData is the typed request payload for UpdateNeonAuthUserRole.UpdateTyped.
type UpdateNeonAuthUserRoleUpdateData struct {
	BranchId string `json:"branch_id"`
	ProjectId string `json:"project_id"`
	UserId string `json:"user_id"`
	Id *string `json:"id,omitempty"`
	Roles *[]any `json:"roles,omitempty"`
}

// VpcEndpoint is the typed data model for the vpc_endpoint entity.
type VpcEndpoint struct {
}

// VpcEndpointLoadMatch is the typed request payload for VpcEndpoint.LoadTyped.
type VpcEndpointLoadMatch struct {
	Id string `json:"id"`
	OrganizationId string `json:"organization_id"`
	RegionId string `json:"region_id"`
}

// VpcEndpointListMatch is the typed request payload for VpcEndpoint.ListTyped.
type VpcEndpointListMatch struct {
	ProjectId string `json:"project_id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
