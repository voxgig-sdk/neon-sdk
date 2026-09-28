# frozen_string_literal: true

# Typed models for the Neon SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Anonymize entity data model.
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] masked_columns
#   @return [Integer, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] triggered_by
#   @return [String, nil]
#
# @!attribute [rw] triggered_by_username
#   @return [String, nil]
Anonymize = Struct.new(
  :completed_at,
  :masked_columns,
  :started_at,
  :triggered_by,
  :triggered_by_username,
  keyword_init: true
)

# Request payload for Anonymize#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] masked_columns
#   @return [Integer, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] triggered_by
#   @return [String, nil]
#
# @!attribute [rw] triggered_by_username
#   @return [String, nil]
AnonymizeCreateData = Struct.new(
  :branch_id,
  :project_id,
  :completed_at,
  :masked_columns,
  :started_at,
  :triggered_by,
  :triggered_by_username,
  keyword_init: true
)

# AnonymizedBranchStatus entity data model.
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] masked_columns
#   @return [Integer, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] triggered_by
#   @return [String, nil]
#
# @!attribute [rw] triggered_by_username
#   @return [String, nil]
AnonymizedBranchStatus = Struct.new(
  :completed_at,
  :masked_columns,
  :started_at,
  :triggered_by,
  :triggered_by_username,
  keyword_init: true
)

# Request payload for AnonymizedBranchStatus#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
AnonymizedBranchStatusLoadMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# ApiKey entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] key_name
#   @return [String]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] last_used_from_addr
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
ApiKey = Struct.new(
  :created_at,
  :created_by,
  :id,
  :key,
  :key_name,
  :last_used_at,
  :last_used_from_addr,
  :name,
  keyword_init: true
)

# Request payload for ApiKey#list.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] key_name
#   @return [String, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] last_used_from_addr
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
ApiKeyListMatch = Struct.new(
  :created_at,
  :created_by,
  :id,
  :key,
  :key_name,
  :last_used_at,
  :last_used_from_addr,
  :name,
  keyword_init: true
)

# Request payload for ApiKey#create.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] key_name
#   @return [String]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] last_used_from_addr
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
ApiKeyCreateData = Struct.new(
  :created_at,
  :created_by,
  :id,
  :key,
  :key_name,
  :last_used_at,
  :last_used_from_addr,
  :name,
  keyword_init: true
)

# Request payload for ApiKey#remove.
#
# @!attribute [rw] id
#   @return [Integer]
ApiKeyRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Auth entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] auth_data
#   @return [String, nil]
#
# @!attribute [rw] auth_method
#   @return [String]
Auth = Struct.new(
  :account_id,
  :auth_data,
  :auth_method,
  keyword_init: true
)

# Request payload for Auth#load.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] auth_data
#   @return [String, nil]
#
# @!attribute [rw] auth_method
#   @return [String, nil]
AuthLoadMatch = Struct.new(
  :account_id,
  :auth_data,
  :auth_method,
  keyword_init: true
)

# Request payload for Auth#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] auth_data
#   @return [String, nil]
#
# @!attribute [rw] auth_method
#   @return [String]
AuthCreateData = Struct.new(
  :branch_id,
  :project_id,
  :account_id,
  :auth_data,
  :auth_method,
  keyword_init: true
)

# Request payload for Auth#remove.
#
# @!attribute [rw] auth_user_id
#   @return [String, nil]
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] oauth_provider_id
#   @return [String, nil]
AuthRemoveMatch = Struct.new(
  :auth_user_id,
  :branch_id,
  :project_id,
  :oauth_provider_id,
  keyword_init: true
)

# AuthLegacy entity data model.
#
# @!attribute [rw] auth_provider
#   @return [String]
#
# @!attribute [rw] domain
#   @return [String]
AuthLegacy = Struct.new(
  :auth_provider,
  :domain,
  keyword_init: true
)

# Request payload for AuthLegacy#create.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] auth_provider
#   @return [String]
#
# @!attribute [rw] domain
#   @return [String]
AuthLegacyCreateData = Struct.new(
  :project_id,
  :auth_provider,
  :domain,
  keyword_init: true
)

# Request payload for AuthLegacy#remove.
#
# @!attribute [rw] auth_provider
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] auth_user_id
#   @return [String, nil]
#
# @!attribute [rw] oauth_provider_id
#   @return [String, nil]
AuthLegacyRemoveMatch = Struct.new(
  :auth_provider,
  :project_id,
  :auth_user_id,
  :oauth_provider_id,
  keyword_init: true
)

# AvailablePreloadLibrary entity data model.
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] is_default
#   @return [Boolean]
#
# @!attribute [rw] is_experimental
#   @return [Boolean]
#
# @!attribute [rw] library_name
#   @return [String]
#
# @!attribute [rw] version
#   @return [String]
AvailablePreloadLibrary = Struct.new(
  :description,
  :is_default,
  :is_experimental,
  :library_name,
  :version,
  keyword_init: true
)

# Request payload for AvailablePreloadLibrary#list.
#
# @!attribute [rw] project_id
#   @return [String]
AvailablePreloadLibraryListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# BackupSchedule entity data model.
#
# @!attribute [rw] day
#   @return [Integer, nil]
#
# @!attribute [rw] frequency
#   @return [String]
#
# @!attribute [rw] hour
#   @return [Integer, nil]
#
# @!attribute [rw] month
#   @return [Integer, nil]
#
# @!attribute [rw] retention_seconds
#   @return [Integer, nil]
BackupSchedule = Struct.new(
  :day,
  :frequency,
  :hour,
  :month,
  :retention_seconds,
  keyword_init: true
)

# Request payload for BackupSchedule#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
BackupScheduleListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Branch entity data model.
#
# @!attribute [rw] annotation
#   @return [Hash]
#
# @!attribute [rw] annotations
#   @return [Hash]
#
# @!attribute [rw] branch
#   @return [Hash]
#
# @!attribute [rw] branches
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
Branch = Struct.new(
  :annotation,
  :annotations,
  :branch,
  :branches,
  :id,
  :pagination,
  keyword_init: true
)

# Request payload for Branch#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
BranchLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for Branch#list.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] include_deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
BranchListMatch = Struct.new(
  :project_id,
  :cursor,
  :include_deleted,
  :limit,
  :search,
  :sort_by,
  :sort_order,
  keyword_init: true
)

# Request payload for Branch#create.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] annotation
#   @return [Hash]
#
# @!attribute [rw] annotations
#   @return [Hash]
#
# @!attribute [rw] branch
#   @return [Hash]
#
# @!attribute [rw] branches
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
BranchCreateData = Struct.new(
  :project_id,
  :annotation,
  :annotations,
  :branch,
  :branches,
  :id,
  :pagination,
  keyword_init: true
)

# Request payload for Branch#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] annotation
#   @return [Hash, nil]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] branch
#   @return [Hash, nil]
#
# @!attribute [rw] branches
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
BranchUpdateData = Struct.new(
  :id,
  :project_id,
  :annotation,
  :annotations,
  :branch,
  :branches,
  :pagination,
  keyword_init: true
)

# Request payload for Branch#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
BranchRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# BranchAiGateway entity data model.
#
# @!attribute [rw] base_url
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String, nil]
BranchAiGateway = Struct.new(
  :base_url,
  :enabled,
  :id,
  keyword_init: true
)

# Request payload for BranchAiGateway#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
BranchAiGatewayLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# BranchOperation entity data model.
#
# @!attribute [rw] branch
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] operations
#   @return [Array]
BranchOperation = Struct.new(
  :branch,
  :id,
  :operations,
  keyword_init: true
)

# Request payload for BranchOperation#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] branch
#   @return [Hash]
#
# @!attribute [rw] operations
#   @return [Array]
BranchOperationCreateData = Struct.new(
  :id,
  :project_id,
  :branch,
  :operations,
  keyword_init: true
)

# BranchSchema entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] tables
#   @return [Array]
BranchSchema = Struct.new(
  :id,
  :tables,
  keyword_init: true
)

# Request payload for BranchSchema#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] db_name
#   @return [String]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] lsn
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
BranchSchemaLoadMatch = Struct.new(
  :id,
  :project_id,
  :db_name,
  :format,
  :lsn,
  :timestamp,
  keyword_init: true
)

# BranchSchemaCompare entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
BranchSchemaCompare = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for BranchSchemaCompare#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] base_branch_id
#   @return [String, nil]
#
# @!attribute [rw] base_lsn
#   @return [String, nil]
#
# @!attribute [rw] base_timestamp
#   @return [String, nil]
#
# @!attribute [rw] db_name
#   @return [String]
#
# @!attribute [rw] lsn
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
BranchSchemaCompareLoadMatch = Struct.new(
  :id,
  :project_id,
  :base_branch_id,
  :base_lsn,
  :base_timestamp,
  :db_name,
  :lsn,
  :timestamp,
  keyword_init: true
)

# BranchStorage entity data model.
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] force_path_style
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String]
#
# @!attribute [rw] s3_endpoint
#   @return [String]
BranchStorage = Struct.new(
  :enabled,
  :force_path_style,
  :id,
  :region,
  :s3_endpoint,
  keyword_init: true
)

# Request payload for BranchStorage#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
BranchStorageLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Bucket entity data model.
#
# @!attribute [rw] access_level
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
Bucket = Struct.new(
  :access_level,
  :created_at,
  :id,
  :name,
  keyword_init: true
)

# Request payload for Bucket#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] bucket_id
#   @return [String]
#
# @!attribute [rw] object_key
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
BucketLoadMatch = Struct.new(
  :branch_id,
  :bucket_id,
  :object_key,
  :project_id,
  keyword_init: true
)

# Request payload for Bucket#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
BucketListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for Bucket#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] access_level
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
BucketCreateData = Struct.new(
  :branch_id,
  :project_id,
  :access_level,
  :created_at,
  :id,
  :name,
  keyword_init: true
)

# Request payload for Bucket#remove.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] bucket_id
#   @return [String, nil]
#
# @!attribute [rw] object_key
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
BucketRemoveMatch = Struct.new(
  :branch_id,
  :bucket_id,
  :object_key,
  :project_id,
  :id,
  keyword_init: true
)

# BucketObjectsList entity data model.
#
# @!attribute [rw] etag
#   @return [String]
#
# @!attribute [rw] key
#   @return [String]
#
# @!attribute [rw] last_modified
#   @return [String]
#
# @!attribute [rw] size
#   @return [Integer]
BucketObjectsList = Struct.new(
  :etag,
  :key,
  :last_modified,
  :size,
  keyword_init: true
)

# Request payload for BucketObjectsList#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] bucket_name
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] delimiter
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] prefix
#   @return [String, nil]
BucketObjectsListListMatch = Struct.new(
  :branch_id,
  :bucket_name,
  :project_id,
  :cursor,
  :delimiter,
  :limit,
  :prefix,
  keyword_init: true
)

# ConnectionUri entity data model.
#
# @!attribute [rw] uri
#   @return [String]
ConnectionUri = Struct.new(
  :uri,
  keyword_init: true
)

# Request payload for ConnectionUri#load.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] database_name
#   @return [String]
#
# @!attribute [rw] endpoint_id
#   @return [String, nil]
#
# @!attribute [rw] pooled
#   @return [Boolean, nil]
#
# @!attribute [rw] role_name
#   @return [String]
ConnectionUriLoadMatch = Struct.new(
  :project_id,
  :branch_id,
  :database_name,
  :endpoint_id,
  :pooled,
  :role_name,
  keyword_init: true
)

# Consumption entity data model.
#
# @!attribute [rw] branches
#   @return [Array]
#
# @!attribute [rw] pagination
#   @return [Hash]
#
# @!attribute [rw] projects
#   @return [Array]
Consumption = Struct.new(
  :branches,
  :pagination,
  :projects,
  keyword_init: true
)

# Request payload for Consumption#list.
#
# @!attribute [rw] branch_id
#   @return [Array, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] from
#   @return [String]
#
# @!attribute [rw] granularity
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] metric
#   @return [Array, nil]
#
# @!attribute [rw] org_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [Array, nil]
#
# @!attribute [rw] to
#   @return [String]
#
# @!attribute [rw] include_v1_metric
#   @return [Boolean, nil]
ConsumptionListMatch = Struct.new(
  :branch_id,
  :cursor,
  :from,
  :granularity,
  :limit,
  :metric,
  :org_id,
  :project_id,
  :to,
  :include_v1_metric,
  keyword_init: true
)

# CreateCredential entity data model.
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] principal_type
#   @return [String]
#
# @!attribute [rw] scopes
#   @return [Array]
CreateCredential = Struct.new(
  :name,
  :principal_type,
  :scopes,
  keyword_init: true
)

# Request payload for CreateCredential#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] principal_type
#   @return [String]
#
# @!attribute [rw] scopes
#   @return [Array]
CreateCredentialCreateData = Struct.new(
  :branch_id,
  :project_id,
  :name,
  :principal_type,
  :scopes,
  keyword_init: true
)

# Credential entity data model.
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] function_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] principal_type
#   @return [String]
#
# @!attribute [rw] revoked_at
#   @return [String, nil]
#
# @!attribute [rw] scopes
#   @return [Array]
#
# @!attribute [rw] token_id
#   @return [String]
#
# @!attribute [rw] token_id_short
#   @return [String]
Credential = Struct.new(
  :branch_id,
  :created_at,
  :expires_at,
  :function_id,
  :id,
  :last_used_at,
  :name,
  :principal_type,
  :revoked_at,
  :scopes,
  :token_id,
  :token_id_short,
  keyword_init: true
)

# Request payload for Credential#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
CredentialListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for Credential#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] function_id
#   @return [String, nil]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] principal_type
#   @return [String]
#
# @!attribute [rw] revoked_at
#   @return [String, nil]
#
# @!attribute [rw] scopes
#   @return [Array]
#
# @!attribute [rw] token_id
#   @return [String]
#
# @!attribute [rw] token_id_short
#   @return [String]
CredentialCreateData = Struct.new(
  :branch_id,
  :id,
  :project_id,
  :created_at,
  :expires_at,
  :function_id,
  :last_used_at,
  :name,
  :principal_type,
  :revoked_at,
  :scopes,
  :token_id,
  :token_id_short,
  keyword_init: true
)

# Request payload for Credential#remove.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
CredentialRemoveMatch = Struct.new(
  :branch_id,
  :id,
  :project_id,
  keyword_init: true
)

# CurrentUserInfo entity data model.
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] image
#   @return [String]
#
# @!attribute [rw] login
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String]
CurrentUserInfo = Struct.new(
  :email,
  :image,
  :login,
  :name,
  :provider,
  keyword_init: true
)

# Request payload for CurrentUserInfo#list.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] login
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
CurrentUserInfoListMatch = Struct.new(
  :email,
  :image,
  :login,
  :name,
  :provider,
  keyword_init: true
)

# CustomDomain entity data model.
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] entity_id
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
CustomDomain = Struct.new(
  :domain,
  :entity_id,
  :entity_type,
  keyword_init: true
)

# Request payload for CustomDomain#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] entity_id
#   @return [String]
#
# @!attribute [rw] entity_type
#   @return [String]
CustomDomainCreateData = Struct.new(
  :branch_id,
  :project_id,
  :domain,
  :entity_id,
  :entity_type,
  keyword_init: true
)

# DataApi entity data model.
#
# @!attribute [rw] add_default_grants
#   @return [Boolean, nil]
#
# @!attribute [rw] auth_provider
#   @return [String, nil]
#
# @!attribute [rw] available_schemas
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] jwks_url
#   @return [String, nil]
#
# @!attribute [rw] jwt_audience
#   @return [String, nil]
#
# @!attribute [rw] provider_name
#   @return [String, nil]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
#
# @!attribute [rw] skip_auth_schema
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
DataApi = Struct.new(
  :add_default_grants,
  :auth_provider,
  :available_schemas,
  :id,
  :jwks_url,
  :jwt_audience,
  :provider_name,
  :settings,
  :skip_auth_schema,
  :status,
  :url,
  keyword_init: true
)

# Request payload for DataApi#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
DataApiLoadMatch = Struct.new(
  :branch_id,
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for DataApi#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] add_default_grants
#   @return [Boolean, nil]
#
# @!attribute [rw] auth_provider
#   @return [String, nil]
#
# @!attribute [rw] available_schemas
#   @return [Array, nil]
#
# @!attribute [rw] jwks_url
#   @return [String, nil]
#
# @!attribute [rw] jwt_audience
#   @return [String, nil]
#
# @!attribute [rw] provider_name
#   @return [String, nil]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
#
# @!attribute [rw] skip_auth_schema
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
DataApiCreateData = Struct.new(
  :branch_id,
  :id,
  :project_id,
  :add_default_grants,
  :auth_provider,
  :available_schemas,
  :jwks_url,
  :jwt_audience,
  :provider_name,
  :settings,
  :skip_auth_schema,
  :status,
  :url,
  keyword_init: true
)

# Request payload for DataApi#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] add_default_grants
#   @return [Boolean, nil]
#
# @!attribute [rw] auth_provider
#   @return [String, nil]
#
# @!attribute [rw] available_schemas
#   @return [Array, nil]
#
# @!attribute [rw] jwks_url
#   @return [String, nil]
#
# @!attribute [rw] jwt_audience
#   @return [String, nil]
#
# @!attribute [rw] provider_name
#   @return [String, nil]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
#
# @!attribute [rw] skip_auth_schema
#   @return [Boolean, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
DataApiUpdateData = Struct.new(
  :branch_id,
  :id,
  :project_id,
  :add_default_grants,
  :auth_provider,
  :available_schemas,
  :jwks_url,
  :jwt_audience,
  :provider_name,
  :settings,
  :skip_auth_schema,
  :status,
  :url,
  keyword_init: true
)

# Request payload for DataApi#remove.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
DataApiRemoveMatch = Struct.new(
  :branch_id,
  :id,
  :project_id,
  keyword_init: true
)

# Database entity data model.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] database
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owner_name
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
Database = Struct.new(
  :branch_id,
  :created_at,
  :database,
  :id,
  :name,
  :owner_name,
  :updated_at,
  keyword_init: true
)

# Request payload for Database#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
DatabaseLoadMatch = Struct.new(
  :branch_id,
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for Database#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
DatabaseListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for Database#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] database
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owner_name
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
DatabaseCreateData = Struct.new(
  :branch_id,
  :project_id,
  :created_at,
  :database,
  :id,
  :name,
  :owner_name,
  :updated_at,
  keyword_init: true
)

# Request payload for Database#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] database
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owner_name
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
DatabaseUpdateData = Struct.new(
  :branch_id,
  :id,
  :project_id,
  :created_at,
  :database,
  :name,
  :owner_name,
  :updated_at,
  keyword_init: true
)

# Request payload for Database#remove.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
DatabaseRemoveMatch = Struct.new(
  :branch_id,
  :id,
  :project_id,
  keyword_init: true
)

# EmailProvider entity data model.
class EmailProvider
end

# Request payload for EmailProvider#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
EmailProviderLoadMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# EmailServer entity data model.
class EmailServer
end

# Request payload for EmailServer#load.
#
# @!attribute [rw] project_id
#   @return [String]
EmailServerLoadMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Empty entity data model.
#
# @!attribute [rw] destination_org_id
#   @return [String]
#
# @!attribute [rw] project_ids
#   @return [Array]
#
# @!attribute [rw] schedule
#   @return [Array]
Empty = Struct.new(
  :destination_org_id,
  :project_ids,
  :schedule,
  keyword_init: true
)

# Request payload for Empty#create.
#
# @!attribute [rw] organization_id
#   @return [String]
#
# @!attribute [rw] destination_org_id
#   @return [String]
#
# @!attribute [rw] project_ids
#   @return [Array]
#
# @!attribute [rw] schedule
#   @return [Array]
EmptyCreateData = Struct.new(
  :organization_id,
  :destination_org_id,
  :project_ids,
  :schedule,
  keyword_init: true
)

# Request payload for Empty#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] destination_org_id
#   @return [String, nil]
#
# @!attribute [rw] project_ids
#   @return [Array, nil]
#
# @!attribute [rw] schedule
#   @return [Array, nil]
EmptyUpdateData = Struct.new(
  :branch_id,
  :project_id,
  :destination_org_id,
  :project_ids,
  :schedule,
  keyword_init: true
)

# Request payload for Empty#remove.
#
# @!attribute [rw] organization_id
#   @return [String]
EmptyRemoveMatch = Struct.new(
  :organization_id,
  keyword_init: true
)

# Endpoint entity data model.
#
# @!attribute [rw] autoscaling_limit_max_cu
#   @return [Float]
#
# @!attribute [rw] autoscaling_limit_min_cu
#   @return [Float]
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] compute_release_version
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creation_source
#   @return [String]
#
# @!attribute [rw] current_state
#   @return [String]
#
# @!attribute [rw] disabled
#   @return [Boolean]
#
# @!attribute [rw] endpoint
#   @return [Hash]
#
# @!attribute [rw] host
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_active
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] passwordless_access
#   @return [Boolean]
#
# @!attribute [rw] pending_state
#   @return [String, nil]
#
# @!attribute [rw] pooler_enabled
#   @return [Boolean]
#
# @!attribute [rw] pooler_mode
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] provisioner
#   @return [String]
#
# @!attribute [rw] proxy_host
#   @return [String]
#
# @!attribute [rw] region_id
#   @return [String]
#
# @!attribute [rw] settings
#   @return [Hash]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] suspend_timeout_seconds
#   @return [Integer]
#
# @!attribute [rw] suspended_at
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
Endpoint = Struct.new(
  :autoscaling_limit_max_cu,
  :autoscaling_limit_min_cu,
  :branch_id,
  :compute_release_version,
  :created_at,
  :creation_source,
  :current_state,
  :disabled,
  :endpoint,
  :host,
  :id,
  :last_active,
  :name,
  :passwordless_access,
  :pending_state,
  :pooler_enabled,
  :pooler_mode,
  :project_id,
  :provisioner,
  :proxy_host,
  :region_id,
  :settings,
  :started_at,
  :suspend_timeout_seconds,
  :suspended_at,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for Endpoint#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
EndpointLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for Endpoint#list.
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
EndpointListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for Endpoint#create.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] autoscaling_limit_max_cu
#   @return [Float]
#
# @!attribute [rw] autoscaling_limit_min_cu
#   @return [Float]
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] compute_release_version
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creation_source
#   @return [String]
#
# @!attribute [rw] current_state
#   @return [String]
#
# @!attribute [rw] disabled
#   @return [Boolean]
#
# @!attribute [rw] endpoint
#   @return [Hash]
#
# @!attribute [rw] host
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_active
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] passwordless_access
#   @return [Boolean]
#
# @!attribute [rw] pending_state
#   @return [String, nil]
#
# @!attribute [rw] pooler_enabled
#   @return [Boolean]
#
# @!attribute [rw] pooler_mode
#   @return [String]
#
# @!attribute [rw] provisioner
#   @return [String]
#
# @!attribute [rw] proxy_host
#   @return [String]
#
# @!attribute [rw] region_id
#   @return [String]
#
# @!attribute [rw] settings
#   @return [Hash]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] suspend_timeout_seconds
#   @return [Integer]
#
# @!attribute [rw] suspended_at
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
EndpointCreateData = Struct.new(
  :project_id,
  :autoscaling_limit_max_cu,
  :autoscaling_limit_min_cu,
  :branch_id,
  :compute_release_version,
  :created_at,
  :creation_source,
  :current_state,
  :disabled,
  :endpoint,
  :host,
  :id,
  :last_active,
  :name,
  :passwordless_access,
  :pending_state,
  :pooler_enabled,
  :pooler_mode,
  :provisioner,
  :proxy_host,
  :region_id,
  :settings,
  :started_at,
  :suspend_timeout_seconds,
  :suspended_at,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for Endpoint#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] autoscaling_limit_max_cu
#   @return [Float, nil]
#
# @!attribute [rw] autoscaling_limit_min_cu
#   @return [Float, nil]
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] compute_release_version
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] creation_source
#   @return [String, nil]
#
# @!attribute [rw] current_state
#   @return [String, nil]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] endpoint
#   @return [Hash, nil]
#
# @!attribute [rw] host
#   @return [String, nil]
#
# @!attribute [rw] last_active
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] passwordless_access
#   @return [Boolean, nil]
#
# @!attribute [rw] pending_state
#   @return [String, nil]
#
# @!attribute [rw] pooler_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] pooler_mode
#   @return [String, nil]
#
# @!attribute [rw] provisioner
#   @return [String, nil]
#
# @!attribute [rw] proxy_host
#   @return [String, nil]
#
# @!attribute [rw] region_id
#   @return [String, nil]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] suspend_timeout_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] suspended_at
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
EndpointUpdateData = Struct.new(
  :id,
  :project_id,
  :autoscaling_limit_max_cu,
  :autoscaling_limit_min_cu,
  :branch_id,
  :compute_release_version,
  :created_at,
  :creation_source,
  :current_state,
  :disabled,
  :endpoint,
  :host,
  :last_active,
  :name,
  :passwordless_access,
  :pending_state,
  :pooler_enabled,
  :pooler_mode,
  :provisioner,
  :proxy_host,
  :region_id,
  :settings,
  :started_at,
  :suspend_timeout_seconds,
  :suspended_at,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for Endpoint#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
EndpointRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# EndpointOperation entity data model.
#
# @!attribute [rw] endpoint
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] operations
#   @return [Array]
EndpointOperation = Struct.new(
  :endpoint,
  :id,
  :operations,
  keyword_init: true
)

# Request payload for EndpointOperation#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] endpoint
#   @return [Hash]
#
# @!attribute [rw] operations
#   @return [Array]
EndpointOperationCreateData = Struct.new(
  :id,
  :project_id,
  :endpoint,
  :operations,
  keyword_init: true
)

# Function entity data model.
#
# @!attribute [rw] custom_domains
#   @return [Array]
#
# @!attribute [rw] functions
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
Function = Struct.new(
  :custom_domains,
  :functions,
  :id,
  :pagination,
  keyword_init: true
)

# Request payload for Function#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
FunctionListMatch = Struct.new(
  :branch_id,
  :project_id,
  :cursor,
  :limit,
  keyword_init: true
)

# Request payload for Function#remove.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] domain
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] trigger_id
#   @return [String, nil]
FunctionRemoveMatch = Struct.new(
  :branch_id,
  :domain,
  :project_id,
  :id,
  :trigger_id,
  keyword_init: true
)

# Jwk entity data model.
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] jwks_url
#   @return [String]
#
# @!attribute [rw] jwt_audience
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] provider_name
#   @return [String]
#
# @!attribute [rw] role_names
#   @return [Array, nil]
#
# @!attribute [rw] skip_role_creation
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
Jwk = Struct.new(
  :branch_id,
  :created_at,
  :id,
  :jwks_url,
  :jwt_audience,
  :project_id,
  :provider_name,
  :role_names,
  :skip_role_creation,
  :updated_at,
  keyword_init: true
)

# Request payload for Jwk#list.
#
# @!attribute [rw] project_id
#   @return [String]
JwkListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for Jwk#create.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] jwks_url
#   @return [String]
#
# @!attribute [rw] jwt_audience
#   @return [String, nil]
#
# @!attribute [rw] provider_name
#   @return [String]
#
# @!attribute [rw] role_names
#   @return [Array, nil]
#
# @!attribute [rw] skip_role_creation
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
JwkCreateData = Struct.new(
  :project_id,
  :branch_id,
  :created_at,
  :id,
  :jwks_url,
  :jwt_audience,
  :provider_name,
  :role_names,
  :skip_role_creation,
  :updated_at,
  keyword_init: true
)

# Request payload for Jwk#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
JwkRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# MaskingRule entity data model.
#
# @!attribute [rw] column_name
#   @return [String]
#
# @!attribute [rw] database_name
#   @return [String]
#
# @!attribute [rw] masking_function
#   @return [String, nil]
#
# @!attribute [rw] masking_rules
#   @return [Array]
#
# @!attribute [rw] masking_value
#   @return [String, nil]
#
# @!attribute [rw] schema_name
#   @return [String]
#
# @!attribute [rw] table_name
#   @return [String]
MaskingRule = Struct.new(
  :column_name,
  :database_name,
  :masking_function,
  :masking_rules,
  :masking_value,
  :schema_name,
  :table_name,
  keyword_init: true
)

# Request payload for MaskingRule#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
MaskingRuleListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for MaskingRule#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] column_name
#   @return [String, nil]
#
# @!attribute [rw] database_name
#   @return [String, nil]
#
# @!attribute [rw] masking_function
#   @return [String, nil]
#
# @!attribute [rw] masking_rules
#   @return [Array, nil]
#
# @!attribute [rw] masking_value
#   @return [String, nil]
#
# @!attribute [rw] schema_name
#   @return [String, nil]
#
# @!attribute [rw] table_name
#   @return [String, nil]
MaskingRuleUpdateData = Struct.new(
  :branch_id,
  :project_id,
  :column_name,
  :database_name,
  :masking_function,
  :masking_rules,
  :masking_value,
  :schema_name,
  :table_name,
  keyword_init: true
)

# Member entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] joined_at
#   @return [String, nil]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
Member = Struct.new(
  :id,
  :joined_at,
  :org_id,
  :role,
  :user_id,
  keyword_init: true
)

# Request payload for Member#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organization_id
#   @return [String]
MemberLoadMatch = Struct.new(
  :id,
  :organization_id,
  keyword_init: true
)

# Request payload for Member#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organization_id
#   @return [String]
#
# @!attribute [rw] joined_at
#   @return [String, nil]
#
# @!attribute [rw] org_id
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
MemberUpdateData = Struct.new(
  :id,
  :organization_id,
  :joined_at,
  :org_id,
  :role,
  :user_id,
  keyword_init: true
)

# Request payload for Member#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organization_id
#   @return [String]
MemberRemoveMatch = Struct.new(
  :id,
  :organization_id,
  keyword_init: true
)

# NeonAuthAllowLocalhost entity data model.
#
# @!attribute [rw] allow_localhost
#   @return [Boolean]
NeonAuthAllowLocalhost = Struct.new(
  :allow_localhost,
  keyword_init: true
)

# Request payload for NeonAuthAllowLocalhost#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthAllowLocalhostLoadMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for NeonAuthAllowLocalhost#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] allow_localhost
#   @return [Boolean, nil]
NeonAuthAllowLocalhostUpdateData = Struct.new(
  :branch_id,
  :project_id,
  :allow_localhost,
  keyword_init: true
)

# NeonAuthConfig entity data model.
#
# @!attribute [rw] name
#   @return [String]
NeonAuthConfig = Struct.new(
  :name,
  keyword_init: true
)

# Request payload for NeonAuthConfig#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
NeonAuthConfigUpdateData = Struct.new(
  :branch_id,
  :project_id,
  :name,
  keyword_init: true
)

# NeonAuthCreateIntegration entity data model.
#
# @!attribute [rw] auth_provider
#   @return [String]
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] database_name
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] role_name
#   @return [String, nil]
NeonAuthCreateIntegration = Struct.new(
  :auth_provider,
  :branch_id,
  :database_name,
  :project_id,
  :role_name,
  keyword_init: true
)

# Request payload for NeonAuthCreateIntegration#create.
#
# @!attribute [rw] auth_provider
#   @return [String]
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] database_name
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] role_name
#   @return [String, nil]
NeonAuthCreateIntegrationCreateData = Struct.new(
  :auth_provider,
  :branch_id,
  :database_name,
  :project_id,
  :role_name,
  keyword_init: true
)

# NeonAuthCreateNewUser entity data model.
#
# @!attribute [rw] auth_provider
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthCreateNewUser = Struct.new(
  :auth_provider,
  :email,
  :name,
  :project_id,
  keyword_init: true
)

# Request payload for NeonAuthCreateNewUser#create.
#
# @!attribute [rw] auth_provider
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthCreateNewUserCreateData = Struct.new(
  :auth_provider,
  :email,
  :name,
  :project_id,
  keyword_init: true
)

# NeonAuthEmailAndPasswordConfig entity data model.
#
# @!attribute [rw] auto_sign_in_after_verification
#   @return [Boolean]
#
# @!attribute [rw] disable_sign_up
#   @return [Boolean]
#
# @!attribute [rw] email_verification_method
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] require_email_verification
#   @return [Boolean]
#
# @!attribute [rw] send_verification_email_on_sign_in
#   @return [Boolean]
#
# @!attribute [rw] send_verification_email_on_sign_up
#   @return [Boolean]
NeonAuthEmailAndPasswordConfig = Struct.new(
  :auto_sign_in_after_verification,
  :disable_sign_up,
  :email_verification_method,
  :enabled,
  :require_email_verification,
  :send_verification_email_on_sign_in,
  :send_verification_email_on_sign_up,
  keyword_init: true
)

# Request payload for NeonAuthEmailAndPasswordConfig#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthEmailAndPasswordConfigLoadMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for NeonAuthEmailAndPasswordConfig#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] auto_sign_in_after_verification
#   @return [Boolean, nil]
#
# @!attribute [rw] disable_sign_up
#   @return [Boolean, nil]
#
# @!attribute [rw] email_verification_method
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] require_email_verification
#   @return [Boolean, nil]
#
# @!attribute [rw] send_verification_email_on_sign_in
#   @return [Boolean, nil]
#
# @!attribute [rw] send_verification_email_on_sign_up
#   @return [Boolean, nil]
NeonAuthEmailAndPasswordConfigUpdateData = Struct.new(
  :branch_id,
  :project_id,
  :auto_sign_in_after_verification,
  :disable_sign_up,
  :email_verification_method,
  :enabled,
  :require_email_verification,
  :send_verification_email_on_sign_in,
  :send_verification_email_on_sign_up,
  keyword_init: true
)

# NeonAuthEmailServerConfig entity data model.
class NeonAuthEmailServerConfig
end

# Request payload for NeonAuthEmailServerConfig#update.
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthEmailServerConfigUpdateData = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# NeonAuthIntegration entity data model.
#
# @!attribute [rw] auth_provider
#   @return [String]
#
# @!attribute [rw] auth_provider_project_id
#   @return [String]
#
# @!attribute [rw] base_url
#   @return [String, nil]
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] db_name
#   @return [String]
#
# @!attribute [rw] jwks_url
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owned_by
#   @return [String]
#
# @!attribute [rw] transfer_status
#   @return [String, nil]
NeonAuthIntegration = Struct.new(
  :auth_provider,
  :auth_provider_project_id,
  :base_url,
  :branch_id,
  :created_at,
  :db_name,
  :jwks_url,
  :name,
  :owned_by,
  :transfer_status,
  keyword_init: true
)

# Request payload for NeonAuthIntegration#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthIntegrationLoadMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for NeonAuthIntegration#list.
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthIntegrationListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# NeonAuthMagicLinkConfig entity data model.
#
# @!attribute [rw] disable_sign_up
#   @return [Boolean]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] expires_in
#   @return [Integer]
NeonAuthMagicLinkConfig = Struct.new(
  :disable_sign_up,
  :enabled,
  :expires_in,
  keyword_init: true
)

# Request payload for NeonAuthMagicLinkConfig#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] disable_sign_up
#   @return [Boolean, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] expires_in
#   @return [Integer, nil]
NeonAuthMagicLinkConfigUpdateData = Struct.new(
  :branch_id,
  :project_id,
  :disable_sign_up,
  :enabled,
  :expires_in,
  keyword_init: true
)

# NeonAuthOauthProvider entity data model.
#
# @!attribute [rw] client_id
#   @return [String, nil]
#
# @!attribute [rw] client_secret
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] microsoft_tenant_id
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
NeonAuthOauthProvider = Struct.new(
  :client_id,
  :client_secret,
  :id,
  :microsoft_tenant_id,
  :type,
  keyword_init: true
)

# Request payload for NeonAuthOauthProvider#list.
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthOauthProviderListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for NeonAuthOauthProvider#create.
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] client_id
#   @return [String, nil]
#
# @!attribute [rw] client_secret
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] microsoft_tenant_id
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String]
NeonAuthOauthProviderCreateData = Struct.new(
  :branch_id,
  :project_id,
  :client_id,
  :client_secret,
  :id,
  :microsoft_tenant_id,
  :type,
  keyword_init: true
)

# Request payload for NeonAuthOauthProvider#update.
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] client_id
#   @return [String, nil]
#
# @!attribute [rw] client_secret
#   @return [String, nil]
#
# @!attribute [rw] microsoft_tenant_id
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
NeonAuthOauthProviderUpdateData = Struct.new(
  :branch_id,
  :id,
  :project_id,
  :client_id,
  :client_secret,
  :microsoft_tenant_id,
  :type,
  keyword_init: true
)

# NeonAuthOrganizationConfig entity data model.
#
# @!attribute [rw] creator_role
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] membership_limit
#   @return [Integer]
#
# @!attribute [rw] organization_limit
#   @return [Integer]
#
# @!attribute [rw] send_invitation_email
#   @return [Boolean]
NeonAuthOrganizationConfig = Struct.new(
  :creator_role,
  :enabled,
  :membership_limit,
  :organization_limit,
  :send_invitation_email,
  keyword_init: true
)

# Request payload for NeonAuthOrganizationConfig#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] creator_role
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] membership_limit
#   @return [Integer, nil]
#
# @!attribute [rw] organization_limit
#   @return [Integer, nil]
#
# @!attribute [rw] send_invitation_email
#   @return [Boolean, nil]
NeonAuthOrganizationConfigUpdateData = Struct.new(
  :branch_id,
  :project_id,
  :creator_role,
  :enabled,
  :membership_limit,
  :organization_limit,
  :send_invitation_email,
  keyword_init: true
)

# NeonAuthPhoneNumberConfig entity data model.
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] otp_expires_in
#   @return [Integer, nil]
NeonAuthPhoneNumberConfig = Struct.new(
  :enabled,
  :otp_expires_in,
  keyword_init: true
)

# Request payload for NeonAuthPhoneNumberConfig#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthPhoneNumberConfigLoadMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for NeonAuthPhoneNumberConfig#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] otp_expires_in
#   @return [Integer, nil]
NeonAuthPhoneNumberConfigUpdateData = Struct.new(
  :branch_id,
  :project_id,
  :enabled,
  :otp_expires_in,
  keyword_init: true
)

# NeonAuthPluginConfig entity data model.
#
# @!attribute [rw] client_id
#   @return [String, nil]
#
# @!attribute [rw] client_secret
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
NeonAuthPluginConfig = Struct.new(
  :client_id,
  :client_secret,
  :id,
  :type,
  keyword_init: true
)

# Request payload for NeonAuthPluginConfig#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthPluginConfigListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# NeonAuthRedirectUriWhitelistDomain entity data model.
#
# @!attribute [rw] auth_provider
#   @return [String]
#
# @!attribute [rw] domain
#   @return [String]
NeonAuthRedirectUriWhitelistDomain = Struct.new(
  :auth_provider,
  :domain,
  keyword_init: true
)

# Request payload for NeonAuthRedirectUriWhitelistDomain#list.
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthRedirectUriWhitelistDomainListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# NeonAuthTransferAuthProviderProject entity data model.
#
# @!attribute [rw] auth_provider
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
NeonAuthTransferAuthProviderProject = Struct.new(
  :auth_provider,
  :project_id,
  :url,
  keyword_init: true
)

# Request payload for NeonAuthTransferAuthProviderProject#create.
#
# @!attribute [rw] auth_provider
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
NeonAuthTransferAuthProviderProjectCreateData = Struct.new(
  :auth_provider,
  :project_id,
  :url,
  keyword_init: true
)

# NeonAuthWebhookConfig entity data model.
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] enabled_events
#   @return [Array, nil]
#
# @!attribute [rw] timeout_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] webhook_url
#   @return [String, nil]
NeonAuthWebhookConfig = Struct.new(
  :enabled,
  :enabled_events,
  :timeout_seconds,
  :webhook_url,
  keyword_init: true
)

# Request payload for NeonAuthWebhookConfig#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
NeonAuthWebhookConfigListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for NeonAuthWebhookConfig#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] enabled_events
#   @return [Array, nil]
#
# @!attribute [rw] timeout_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] webhook_url
#   @return [String, nil]
NeonAuthWebhookConfigUpdateData = Struct.new(
  :branch_id,
  :project_id,
  :enabled,
  :enabled_events,
  :timeout_seconds,
  :webhook_url,
  keyword_init: true
)

# NeonFunction entity data model.
#
# @!attribute [rw] active_deployment
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] current_deployment
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] invocation_url
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
NeonFunction = Struct.new(
  :active_deployment,
  :created_at,
  :current_deployment,
  :id,
  :invocation_url,
  :name,
  :slug,
  keyword_init: true
)

# Request payload for NeonFunction#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
NeonFunctionLoadMatch = Struct.new(
  :branch_id,
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for NeonFunction#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] active_deployment
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] current_deployment
#   @return [Object, nil]
#
# @!attribute [rw] invocation_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
NeonFunctionUpdateData = Struct.new(
  :branch_id,
  :id,
  :project_id,
  :active_deployment,
  :created_at,
  :current_deployment,
  :invocation_url,
  :name,
  :slug,
  keyword_init: true
)

# NeonFunctionDeployment entity data model.
class NeonFunctionDeployment
end

# Request payload for NeonFunctionDeployment#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
NeonFunctionDeploymentCreateData = Struct.new(
  :branch_id,
  :project_id,
  :slug,
  keyword_init: true
)

# Operation entity data model.
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] branch_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] endpoint_id
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] failures_count
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] operations
#   @return [Array]
#
# @!attribute [rw] pagination
#   @return [Hash]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] retry_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] total_duration_ms
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
Operation = Struct.new(
  :action,
  :branch_id,
  :created_at,
  :endpoint_id,
  :error,
  :failures_count,
  :id,
  :name,
  :operations,
  :pagination,
  :project_id,
  :retry_at,
  :status,
  :total_duration_ms,
  :updated_at,
  keyword_init: true
)

# Request payload for Operation#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
OperationLoadMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for Operation#list.
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
OperationListMatch = Struct.new(
  :project_id,
  :cursor,
  :limit,
  keyword_init: true
)

# Request payload for Operation#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] action
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] endpoint_id
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] failures_count
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] operations
#   @return [Array]
#
# @!attribute [rw] pagination
#   @return [Hash]
#
# @!attribute [rw] retry_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] total_duration_ms
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
OperationCreateData = Struct.new(
  :branch_id,
  :project_id,
  :action,
  :created_at,
  :endpoint_id,
  :error,
  :failures_count,
  :id,
  :name,
  :operations,
  :pagination,
  :retry_at,
  :status,
  :total_duration_ms,
  :updated_at,
  keyword_init: true
)

# OrgApiKeyCreate entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
OrgApiKeyCreate = Struct.new(
  :created_at,
  :created_by,
  :id,
  :key,
  :name,
  keyword_init: true
)

# Request payload for OrgApiKeyCreate#create.
#
# @!attribute [rw] organization_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
OrgApiKeyCreateCreateData = Struct.new(
  :organization_id,
  :created_at,
  :created_by,
  :id,
  :key,
  :name,
  keyword_init: true
)

# OrgApiKeyRevoke entity data model.
class OrgApiKeyRevoke
end

# Request payload for OrgApiKeyRevoke#remove.
#
# @!attribute [rw] key_id
#   @return [Integer]
#
# @!attribute [rw] organization_id
#   @return [String]
OrgApiKeyRevokeRemoveMatch = Struct.new(
  :key_id,
  :organization_id,
  keyword_init: true
)

# OrgApiKeysListResponseItem entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] created_by
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] last_used_from_addr
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String, nil]
OrgApiKeysListResponseItem = Struct.new(
  :created_at,
  :created_by,
  :id,
  :last_used_at,
  :last_used_from_addr,
  :name,
  :project_id,
  keyword_init: true
)

# Request payload for OrgApiKeysListResponseItem#list.
#
# @!attribute [rw] organization_id
#   @return [String]
OrgApiKeysListResponseItemListMatch = Struct.new(
  :organization_id,
  keyword_init: true
)

# Organization entity data model.
#
# @!attribute [rw] allow_hipaa_projects
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] handle
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] managed_by
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] plan
#   @return [String]
#
# @!attribute [rw] require_mfa
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
Organization = Struct.new(
  :allow_hipaa_projects,
  :created_at,
  :handle,
  :id,
  :label,
  :managed_by,
  :name,
  :plan,
  :require_mfa,
  :updated_at,
  keyword_init: true
)

# Request payload for Organization#load.
#
# @!attribute [rw] id
#   @return [String]
OrganizationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Organization#list.
#
# @!attribute [rw] allow_hipaa_projects
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] managed_by
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] plan
#   @return [String, nil]
#
# @!attribute [rw] require_mfa
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
OrganizationListMatch = Struct.new(
  :allow_hipaa_projects,
  :created_at,
  :handle,
  :id,
  :label,
  :managed_by,
  :name,
  :plan,
  :require_mfa,
  :updated_at,
  keyword_init: true
)

# Request payload for Organization#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] region_id
#   @return [String]
#
# @!attribute [rw] vpc_endpoint_id
#   @return [String]
#
# @!attribute [rw] allow_hipaa_projects
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] handle
#   @return [String]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] managed_by
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] plan
#   @return [String]
#
# @!attribute [rw] require_mfa
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
OrganizationCreateData = Struct.new(
  :id,
  :region_id,
  :vpc_endpoint_id,
  :allow_hipaa_projects,
  :created_at,
  :handle,
  :label,
  :managed_by,
  :name,
  :plan,
  :require_mfa,
  :updated_at,
  keyword_init: true
)

# Request payload for Organization#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] region_id
#   @return [String]
#
# @!attribute [rw] vpc_endpoint_id
#   @return [String]
OrganizationRemoveMatch = Struct.new(
  :id,
  :region_id,
  :vpc_endpoint_id,
  keyword_init: true
)

# OrganizationInvitation entity data model.
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] invitations
#   @return [Array]
#
# @!attribute [rw] invited_at
#   @return [String]
#
# @!attribute [rw] invited_by
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] role
#   @return [String]
OrganizationInvitation = Struct.new(
  :email,
  :id,
  :invitations,
  :invited_at,
  :invited_by,
  :org_id,
  :role,
  keyword_init: true
)

# Request payload for OrganizationInvitation#list.
#
# @!attribute [rw] id
#   @return [String]
OrganizationInvitationListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for OrganizationInvitation#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] invitations
#   @return [Array]
#
# @!attribute [rw] invited_at
#   @return [String]
#
# @!attribute [rw] invited_by
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] role
#   @return [String]
OrganizationInvitationCreateData = Struct.new(
  :id,
  :email,
  :invitations,
  :invited_at,
  :invited_by,
  :org_id,
  :role,
  keyword_init: true
)

# Presign entity data model.
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] expires_in_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] operation
#   @return [String]
Presign = Struct.new(
  :content_type,
  :expires_in_seconds,
  :operation,
  keyword_init: true
)

# Request payload for Presign#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] bucket_id
#   @return [String]
#
# @!attribute [rw] object_key
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] content_type
#   @return [String, nil]
#
# @!attribute [rw] expires_in_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] operation
#   @return [String]
PresignCreateData = Struct.new(
  :branch_id,
  :bucket_id,
  :object_key,
  :project_id,
  :content_type,
  :expires_in_seconds,
  :operation,
  keyword_init: true
)

# Project entity data model.
#
# @!attribute [rw] active_time_seconds
#   @return [Integer]
#
# @!attribute [rw] applications
#   @return [Hash]
#
# @!attribute [rw] branch_logical_size_limit
#   @return [Integer]
#
# @!attribute [rw] branch_logical_size_limit_bytes
#   @return [Integer]
#
# @!attribute [rw] compute_last_active_at
#   @return [String, nil]
#
# @!attribute [rw] compute_time_seconds
#   @return [Integer]
#
# @!attribute [rw] consumption_period_end
#   @return [String]
#
# @!attribute [rw] consumption_period_start
#   @return [String]
#
# @!attribute [rw] cpu_used_sec
#   @return [Integer]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creation_source
#   @return [String]
#
# @!attribute [rw] data_storage_bytes_hour
#   @return [Integer]
#
# @!attribute [rw] data_transfer_bytes
#   @return [Integer]
#
# @!attribute [rw] default_endpoint_settings
#   @return [Hash, nil]
#
# @!attribute [rw] effective_project_permission
#   @return [String, nil]
#
# @!attribute [rw] hipaa_enabled_at
#   @return [String, nil]
#
# @!attribute [rw] history_retention_seconds
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] integrations
#   @return [Hash]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] maintenance_scheduled_for
#   @return [String, nil]
#
# @!attribute [rw] maintenance_starts_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String, nil]
#
# @!attribute [rw] owner
#   @return [Hash]
#
# @!attribute [rw] owner_id
#   @return [String]
#
# @!attribute [rw] pagination
#   @return [Hash]
#
# @!attribute [rw] pg_version
#   @return [Integer]
#
# @!attribute [rw] platform_id
#   @return [String]
#
# @!attribute [rw] project
#   @return [Hash]
#
# @!attribute [rw] projects
#   @return [Array]
#
# @!attribute [rw] provisioner
#   @return [String]
#
# @!attribute [rw] proxy_host
#   @return [String]
#
# @!attribute [rw] quota_reset_at
#   @return [String, nil]
#
# @!attribute [rw] region_id
#   @return [String]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
#
# @!attribute [rw] store_passwords
#   @return [Boolean]
#
# @!attribute [rw] synthetic_storage_size
#   @return [Integer, nil]
#
# @!attribute [rw] unavailable_project_ids
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] written_data_bytes
#   @return [Integer]
Project = Struct.new(
  :active_time_seconds,
  :applications,
  :branch_logical_size_limit,
  :branch_logical_size_limit_bytes,
  :compute_last_active_at,
  :compute_time_seconds,
  :consumption_period_end,
  :consumption_period_start,
  :cpu_used_sec,
  :created_at,
  :creation_source,
  :data_storage_bytes_hour,
  :data_transfer_bytes,
  :default_endpoint_settings,
  :effective_project_permission,
  :hipaa_enabled_at,
  :history_retention_seconds,
  :id,
  :integrations,
  :label,
  :maintenance_scheduled_for,
  :maintenance_starts_at,
  :name,
  :org_id,
  :owner,
  :owner_id,
  :pagination,
  :pg_version,
  :platform_id,
  :project,
  :projects,
  :provisioner,
  :proxy_host,
  :quota_reset_at,
  :region_id,
  :settings,
  :store_passwords,
  :synthetic_storage_size,
  :unavailable_project_ids,
  :updated_at,
  :written_data_bytes,
  keyword_init: true
)

# Request payload for Project#load.
#
# @!attribute [rw] id
#   @return [String]
ProjectLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Project#list.
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] org_id
#   @return [String, nil]
#
# @!attribute [rw] recoverable
#   @return [Boolean, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
ProjectListMatch = Struct.new(
  :cursor,
  :limit,
  :org_id,
  :recoverable,
  :search,
  :timeout,
  keyword_init: true
)

# Request payload for Project#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] vpc_endpoint_id
#   @return [String]
#
# @!attribute [rw] active_time_seconds
#   @return [Integer]
#
# @!attribute [rw] applications
#   @return [Hash]
#
# @!attribute [rw] branch_logical_size_limit
#   @return [Integer]
#
# @!attribute [rw] branch_logical_size_limit_bytes
#   @return [Integer]
#
# @!attribute [rw] compute_last_active_at
#   @return [String, nil]
#
# @!attribute [rw] compute_time_seconds
#   @return [Integer]
#
# @!attribute [rw] consumption_period_end
#   @return [String]
#
# @!attribute [rw] consumption_period_start
#   @return [String]
#
# @!attribute [rw] cpu_used_sec
#   @return [Integer]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creation_source
#   @return [String]
#
# @!attribute [rw] data_storage_bytes_hour
#   @return [Integer]
#
# @!attribute [rw] data_transfer_bytes
#   @return [Integer]
#
# @!attribute [rw] default_endpoint_settings
#   @return [Hash, nil]
#
# @!attribute [rw] effective_project_permission
#   @return [String, nil]
#
# @!attribute [rw] hipaa_enabled_at
#   @return [String, nil]
#
# @!attribute [rw] history_retention_seconds
#   @return [Integer]
#
# @!attribute [rw] integrations
#   @return [Hash]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] maintenance_scheduled_for
#   @return [String, nil]
#
# @!attribute [rw] maintenance_starts_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String, nil]
#
# @!attribute [rw] owner
#   @return [Hash]
#
# @!attribute [rw] owner_id
#   @return [String]
#
# @!attribute [rw] pagination
#   @return [Hash]
#
# @!attribute [rw] pg_version
#   @return [Integer]
#
# @!attribute [rw] platform_id
#   @return [String]
#
# @!attribute [rw] project
#   @return [Hash]
#
# @!attribute [rw] projects
#   @return [Array]
#
# @!attribute [rw] provisioner
#   @return [String]
#
# @!attribute [rw] proxy_host
#   @return [String]
#
# @!attribute [rw] quota_reset_at
#   @return [String, nil]
#
# @!attribute [rw] region_id
#   @return [String]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
#
# @!attribute [rw] store_passwords
#   @return [Boolean]
#
# @!attribute [rw] synthetic_storage_size
#   @return [Integer, nil]
#
# @!attribute [rw] unavailable_project_ids
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] written_data_bytes
#   @return [Integer]
ProjectCreateData = Struct.new(
  :id,
  :vpc_endpoint_id,
  :active_time_seconds,
  :applications,
  :branch_logical_size_limit,
  :branch_logical_size_limit_bytes,
  :compute_last_active_at,
  :compute_time_seconds,
  :consumption_period_end,
  :consumption_period_start,
  :cpu_used_sec,
  :created_at,
  :creation_source,
  :data_storage_bytes_hour,
  :data_transfer_bytes,
  :default_endpoint_settings,
  :effective_project_permission,
  :hipaa_enabled_at,
  :history_retention_seconds,
  :integrations,
  :label,
  :maintenance_scheduled_for,
  :maintenance_starts_at,
  :name,
  :org_id,
  :owner,
  :owner_id,
  :pagination,
  :pg_version,
  :platform_id,
  :project,
  :projects,
  :provisioner,
  :proxy_host,
  :quota_reset_at,
  :region_id,
  :settings,
  :store_passwords,
  :synthetic_storage_size,
  :unavailable_project_ids,
  :updated_at,
  :written_data_bytes,
  keyword_init: true
)

# Request payload for Project#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] request_id
#   @return [String]
#
# @!attribute [rw] active_time_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] applications
#   @return [Hash, nil]
#
# @!attribute [rw] branch_logical_size_limit
#   @return [Integer, nil]
#
# @!attribute [rw] branch_logical_size_limit_bytes
#   @return [Integer, nil]
#
# @!attribute [rw] compute_last_active_at
#   @return [String, nil]
#
# @!attribute [rw] compute_time_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] consumption_period_end
#   @return [String, nil]
#
# @!attribute [rw] consumption_period_start
#   @return [String, nil]
#
# @!attribute [rw] cpu_used_sec
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] creation_source
#   @return [String, nil]
#
# @!attribute [rw] data_storage_bytes_hour
#   @return [Integer, nil]
#
# @!attribute [rw] data_transfer_bytes
#   @return [Integer, nil]
#
# @!attribute [rw] default_endpoint_settings
#   @return [Hash, nil]
#
# @!attribute [rw] effective_project_permission
#   @return [String, nil]
#
# @!attribute [rw] hipaa_enabled_at
#   @return [String, nil]
#
# @!attribute [rw] history_retention_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] integrations
#   @return [Hash, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] maintenance_scheduled_for
#   @return [String, nil]
#
# @!attribute [rw] maintenance_starts_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] org_id
#   @return [String, nil]
#
# @!attribute [rw] owner
#   @return [Hash, nil]
#
# @!attribute [rw] owner_id
#   @return [String, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] pg_version
#   @return [Integer, nil]
#
# @!attribute [rw] platform_id
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [Hash, nil]
#
# @!attribute [rw] projects
#   @return [Array, nil]
#
# @!attribute [rw] provisioner
#   @return [String, nil]
#
# @!attribute [rw] proxy_host
#   @return [String, nil]
#
# @!attribute [rw] quota_reset_at
#   @return [String, nil]
#
# @!attribute [rw] region_id
#   @return [String, nil]
#
# @!attribute [rw] settings
#   @return [Hash, nil]
#
# @!attribute [rw] store_passwords
#   @return [Boolean, nil]
#
# @!attribute [rw] synthetic_storage_size
#   @return [Integer, nil]
#
# @!attribute [rw] unavailable_project_ids
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] written_data_bytes
#   @return [Integer, nil]
ProjectUpdateData = Struct.new(
  :id,
  :request_id,
  :active_time_seconds,
  :applications,
  :branch_logical_size_limit,
  :branch_logical_size_limit_bytes,
  :compute_last_active_at,
  :compute_time_seconds,
  :consumption_period_end,
  :consumption_period_start,
  :cpu_used_sec,
  :created_at,
  :creation_source,
  :data_storage_bytes_hour,
  :data_transfer_bytes,
  :default_endpoint_settings,
  :effective_project_permission,
  :hipaa_enabled_at,
  :history_retention_seconds,
  :integrations,
  :label,
  :maintenance_scheduled_for,
  :maintenance_starts_at,
  :name,
  :org_id,
  :owner,
  :owner_id,
  :pagination,
  :pg_version,
  :platform_id,
  :project,
  :projects,
  :provisioner,
  :proxy_host,
  :quota_reset_at,
  :region_id,
  :settings,
  :store_passwords,
  :synthetic_storage_size,
  :unavailable_project_ids,
  :updated_at,
  :written_data_bytes,
  keyword_init: true
)

# Request payload for Project#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] vpc_endpoint_id
#   @return [String, nil]
ProjectRemoveMatch = Struct.new(
  :id,
  :vpc_endpoint_id,
  keyword_init: true
)

# ProjectBranchLogField entity data model.
#
# @!attribute [rw] fields
#   @return [Array]
ProjectBranchLogField = Struct.new(
  :fields,
  keyword_init: true
)

# Request payload for ProjectBranchLogField#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ProjectBranchLogFieldListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# ProjectBranchLogFieldValue entity data model.
#
# @!attribute [rw] is_truncated
#   @return [Boolean]
#
# @!attribute [rw] values
#   @return [Array]
ProjectBranchLogFieldValue = Struct.new(
  :is_truncated,
  :values,
  keyword_init: true
)

# Request payload for ProjectBranchLogFieldValue#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] field_name
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] end_time
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] since
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] start_time
#   @return [String, nil]
ProjectBranchLogFieldValueListMatch = Struct.new(
  :branch_id,
  :field_name,
  :project_id,
  :end_time,
  :limit,
  :since,
  :source,
  :start_time,
  keyword_init: true
)

# ProjectBranchLogsQuery entity data model.
#
# @!attribute [rw] body_contains
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] end_time
#   @return [String, nil]
#
# @!attribute [rw] is_truncated
#   @return [Boolean]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] logql
#   @return [String, nil]
#
# @!attribute [rw] logs
#   @return [Array]
#
# @!attribute [rw] minimum_severity
#   @return [String, nil]
#
# @!attribute [rw] next_cursor
#   @return [String, nil]
#
# @!attribute [rw] scope_name
#   @return [String, nil]
#
# @!attribute [rw] service_name
#   @return [String, nil]
#
# @!attribute [rw] severity_text
#   @return [String, nil]
#
# @!attribute [rw] since
#   @return [Object, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] start_time
#   @return [String, nil]
#
# @!attribute [rw] trace_id
#   @return [String, nil]
ProjectBranchLogsQuery = Struct.new(
  :body_contains,
  :cursor,
  :end_time,
  :is_truncated,
  :limit,
  :logql,
  :logs,
  :minimum_severity,
  :next_cursor,
  :scope_name,
  :service_name,
  :severity_text,
  :since,
  :sort_order,
  :source,
  :start_time,
  :trace_id,
  keyword_init: true
)

# Request payload for ProjectBranchLogsQuery#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] body_contains
#   @return [String, nil]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] end_time
#   @return [String, nil]
#
# @!attribute [rw] is_truncated
#   @return [Boolean]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] logql
#   @return [String, nil]
#
# @!attribute [rw] logs
#   @return [Array]
#
# @!attribute [rw] minimum_severity
#   @return [String, nil]
#
# @!attribute [rw] next_cursor
#   @return [String, nil]
#
# @!attribute [rw] scope_name
#   @return [String, nil]
#
# @!attribute [rw] service_name
#   @return [String, nil]
#
# @!attribute [rw] severity_text
#   @return [String, nil]
#
# @!attribute [rw] since
#   @return [Object, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] start_time
#   @return [String, nil]
#
# @!attribute [rw] trace_id
#   @return [String, nil]
ProjectBranchLogsQueryCreateData = Struct.new(
  :branch_id,
  :project_id,
  :body_contains,
  :cursor,
  :end_time,
  :is_truncated,
  :limit,
  :logql,
  :logs,
  :minimum_severity,
  :next_cursor,
  :scope_name,
  :service_name,
  :severity_text,
  :since,
  :sort_order,
  :source,
  :start_time,
  :trace_id,
  keyword_init: true
)

# ProjectMember entity data model.
#
# @!attribute [rw] effective_project_permission
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] explicit_project_permission
#   @return [String, nil]
#
# @!attribute [rw] grant_source
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] member_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] org_default_project_permission
#   @return [String, nil]
#
# @!attribute [rw] org_role
#   @return [String]
#
# @!attribute [rw] project_role
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String]
ProjectMember = Struct.new(
  :effective_project_permission,
  :email,
  :explicit_project_permission,
  :grant_source,
  :id,
  :member_id,
  :name,
  :org_default_project_permission,
  :org_role,
  :project_role,
  :user_id,
  keyword_init: true
)

# Request payload for ProjectMember#list.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
ProjectMemberListMatch = Struct.new(
  :id,
  :cursor,
  :limit,
  keyword_init: true
)

# ProjectMemberRole entity data model.
#
# @!attribute [rw] credential_rotation_recommended
#   @return [Boolean, nil]
#
# @!attribute [rw] effective_project_permission
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] explicit_project_permission
#   @return [String, nil]
#
# @!attribute [rw] member_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] org_api_key_rotation_recommended
#   @return [Boolean, nil]
#
# @!attribute [rw] org_default_project_permission
#   @return [String, nil]
#
# @!attribute [rw] org_role
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] project_role
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
ProjectMemberRole = Struct.new(
  :credential_rotation_recommended,
  :effective_project_permission,
  :email,
  :explicit_project_permission,
  :member_id,
  :name,
  :org_api_key_rotation_recommended,
  :org_default_project_permission,
  :org_role,
  :project_id,
  :project_role,
  :role,
  :user_id,
  keyword_init: true
)

# Request payload for ProjectMemberRole#update.
#
# @!attribute [rw] member_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] confirm_self_demotion
#   @return [Boolean, nil]
#
# @!attribute [rw] credential_rotation_recommended
#   @return [Boolean, nil]
#
# @!attribute [rw] effective_project_permission
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] explicit_project_permission
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] org_api_key_rotation_recommended
#   @return [Boolean, nil]
#
# @!attribute [rw] org_default_project_permission
#   @return [String, nil]
#
# @!attribute [rw] org_role
#   @return [String, nil]
#
# @!attribute [rw] project_role
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
ProjectMemberRoleUpdateData = Struct.new(
  :member_id,
  :project_id,
  :confirm_self_demotion,
  :credential_rotation_recommended,
  :effective_project_permission,
  :email,
  :explicit_project_permission,
  :name,
  :org_api_key_rotation_recommended,
  :org_default_project_permission,
  :org_role,
  :project_role,
  :role,
  :user_id,
  keyword_init: true
)

# Request payload for ProjectMemberRole#remove.
#
# @!attribute [rw] member_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] confirm_self_lockout
#   @return [Boolean, nil]
ProjectMemberRoleRemoveMatch = Struct.new(
  :member_id,
  :project_id,
  :confirm_self_lockout,
  keyword_init: true
)

# ProjectPermission entity data model.
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] granted_at
#   @return [String]
#
# @!attribute [rw] granted_to_email
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] revoked_at
#   @return [String, nil]
ProjectPermission = Struct.new(
  :email,
  :granted_at,
  :granted_to_email,
  :id,
  :revoked_at,
  keyword_init: true
)

# Request payload for ProjectPermission#list.
#
# @!attribute [rw] id
#   @return [String]
ProjectPermissionListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ProjectPermission#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] granted_at
#   @return [String]
#
# @!attribute [rw] granted_to_email
#   @return [String]
#
# @!attribute [rw] revoked_at
#   @return [String, nil]
ProjectPermissionCreateData = Struct.new(
  :id,
  :email,
  :granted_at,
  :granted_to_email,
  :revoked_at,
  keyword_init: true
)

# Request payload for ProjectPermission#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
ProjectPermissionRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# ProjectRecover entity data model.
#
# @!attribute [rw] branches
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] project
#   @return [Hash]
ProjectRecover = Struct.new(
  :branches,
  :id,
  :project,
  keyword_init: true
)

# Request payload for ProjectRecover#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] branches
#   @return [Array]
#
# @!attribute [rw] project
#   @return [Hash]
ProjectRecoverCreateData = Struct.new(
  :id,
  :branches,
  :project,
  keyword_init: true
)

# ProjectTransferRequest entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ttl_seconds
#   @return [Integer, nil]
ProjectTransferRequest = Struct.new(
  :id,
  :ttl_seconds,
  keyword_init: true
)

# Request payload for ProjectTransferRequest#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] ttl_seconds
#   @return [Integer, nil]
ProjectTransferRequestCreateData = Struct.new(
  :id,
  :ttl_seconds,
  keyword_init: true
)

# Region entity data model.
#
# @!attribute [rw] default
#   @return [Boolean]
#
# @!attribute [rw] geo_lat
#   @return [String]
#
# @!attribute [rw] geo_long
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] region_id
#   @return [String]
Region = Struct.new(
  :default,
  :geo_lat,
  :geo_long,
  :name,
  :region_id,
  keyword_init: true
)

# Request payload for Region#list.
#
# @!attribute [rw] org_id
#   @return [String, nil]
RegionListMatch = Struct.new(
  :org_id,
  keyword_init: true
)

# Role entity data model.
#
# @!attribute [rw] authentication_method
#   @return [String, nil]
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] password
#   @return [String, nil]
#
# @!attribute [rw] protected
#   @return [Boolean, nil]
#
# @!attribute [rw] role
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
Role = Struct.new(
  :authentication_method,
  :branch_id,
  :created_at,
  :id,
  :name,
  :password,
  :protected,
  :role,
  :updated_at,
  keyword_init: true
)

# Request payload for Role#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
RoleLoadMatch = Struct.new(
  :branch_id,
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for Role#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
RoleListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for Role#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] authentication_method
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] password
#   @return [String, nil]
#
# @!attribute [rw] protected
#   @return [Boolean, nil]
#
# @!attribute [rw] role
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
RoleCreateData = Struct.new(
  :branch_id,
  :project_id,
  :authentication_method,
  :created_at,
  :id,
  :name,
  :password,
  :protected,
  :role,
  :updated_at,
  keyword_init: true
)

# Request payload for Role#remove.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
RoleRemoveMatch = Struct.new(
  :branch_id,
  :id,
  :project_id,
  keyword_init: true
)

# RoleOperation entity data model.
#
# @!attribute [rw] operations
#   @return [Array]
#
# @!attribute [rw] role
#   @return [Hash]
RoleOperation = Struct.new(
  :operations,
  :role,
  keyword_init: true
)

# Request payload for RoleOperation#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] role_name
#   @return [String]
#
# @!attribute [rw] operations
#   @return [Array]
#
# @!attribute [rw] role
#   @return [Hash]
RoleOperationCreateData = Struct.new(
  :branch_id,
  :project_id,
  :role_name,
  :operations,
  :role,
  keyword_init: true
)

# RolePassword entity data model.
#
# @!attribute [rw] password
#   @return [String]
RolePassword = Struct.new(
  :password,
  keyword_init: true
)

# Request payload for RolePassword#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] role_name
#   @return [String]
RolePasswordLoadMatch = Struct.new(
  :branch_id,
  :project_id,
  :role_name,
  keyword_init: true
)

# SendNeonAuthTestEmail entity data model.
#
# @!attribute [rw] error_message
#   @return [String, nil]
#
# @!attribute [rw] host
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] port
#   @return [Integer]
#
# @!attribute [rw] recipient_email
#   @return [String]
#
# @!attribute [rw] sender_email
#   @return [String]
#
# @!attribute [rw] sender_name
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] username
#   @return [String]
SendNeonAuthTestEmail = Struct.new(
  :error_message,
  :host,
  :password,
  :port,
  :recipient_email,
  :sender_email,
  :sender_name,
  :success,
  :username,
  keyword_init: true
)

# Request payload for SendNeonAuthTestEmail#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] error_message
#   @return [String, nil]
#
# @!attribute [rw] host
#   @return [String]
#
# @!attribute [rw] password
#   @return [String]
#
# @!attribute [rw] port
#   @return [Integer]
#
# @!attribute [rw] recipient_email
#   @return [String]
#
# @!attribute [rw] sender_email
#   @return [String]
#
# @!attribute [rw] sender_name
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] username
#   @return [String]
SendNeonAuthTestEmailCreateData = Struct.new(
  :branch_id,
  :project_id,
  :error_message,
  :host,
  :password,
  :port,
  :recipient_email,
  :sender_email,
  :sender_name,
  :success,
  :username,
  keyword_init: true
)

# Snapshot entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] diff_size
#   @return [Integer, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] full_size
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] lsn
#   @return [String, nil]
#
# @!attribute [rw] manual
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] operations
#   @return [Array]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] snapshot
#   @return [Hash]
#
# @!attribute [rw] source_branch_id
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
Snapshot = Struct.new(
  :created_at,
  :diff_size,
  :expires_at,
  :full_size,
  :id,
  :lsn,
  :manual,
  :name,
  :operations,
  :slug,
  :snapshot,
  :source_branch_id,
  :timestamp,
  keyword_init: true
)

# Request payload for Snapshot#list.
#
# @!attribute [rw] project_id
#   @return [String]
SnapshotListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

# Request payload for Snapshot#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] lsn
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] diff_size
#   @return [Integer, nil]
#
# @!attribute [rw] full_size
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] manual
#   @return [Boolean, nil]
#
# @!attribute [rw] operations
#   @return [Array]
#
# @!attribute [rw] snapshot
#   @return [Hash]
#
# @!attribute [rw] source_branch_id
#   @return [String, nil]
SnapshotCreateData = Struct.new(
  :branch_id,
  :project_id,
  :expires_at,
  :lsn,
  :name,
  :slug,
  :timestamp,
  :created_at,
  :diff_size,
  :full_size,
  :id,
  :manual,
  :operations,
  :snapshot,
  :source_branch_id,
  keyword_init: true
)

# Request payload for Snapshot#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] diff_size
#   @return [Integer, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] full_size
#   @return [Integer, nil]
#
# @!attribute [rw] lsn
#   @return [String, nil]
#
# @!attribute [rw] manual
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] operations
#   @return [Array, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] snapshot
#   @return [Hash, nil]
#
# @!attribute [rw] source_branch_id
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
SnapshotUpdateData = Struct.new(
  :id,
  :project_id,
  :created_at,
  :diff_size,
  :expires_at,
  :full_size,
  :lsn,
  :manual,
  :name,
  :operations,
  :slug,
  :snapshot,
  :source_branch_id,
  :timestamp,
  keyword_init: true
)

# Request payload for Snapshot#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
SnapshotRemoveMatch = Struct.new(
  :id,
  :project_id,
  keyword_init: true
)

# SpendingLimit entity data model.
#
# @!attribute [rw] spending_limit_cents
#   @return [Integer]
SpendingLimit = Struct.new(
  :spending_limit_cents,
  keyword_init: true
)

# Request payload for SpendingLimit#load.
#
# @!attribute [rw] organization_id
#   @return [String]
SpendingLimitLoadMatch = Struct.new(
  :organization_id,
  keyword_init: true
)

# Request payload for SpendingLimit#update.
#
# @!attribute [rw] organization_id
#   @return [String]
#
# @!attribute [rw] spending_limit_cents
#   @return [Integer, nil]
SpendingLimitUpdateData = Struct.new(
  :organization_id,
  :spending_limit_cents,
  keyword_init: true
)

# Trigger entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] triggers
#   @return [Array]
Trigger = Struct.new(
  :id,
  :triggers,
  keyword_init: true
)

# Request payload for Trigger#load.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
TriggerLoadMatch = Struct.new(
  :branch_id,
  :id,
  :project_id,
  keyword_init: true
)

# Request payload for Trigger#list.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
TriggerListMatch = Struct.new(
  :branch_id,
  :project_id,
  keyword_init: true
)

# Request payload for Trigger#create.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] triggers
#   @return [Array]
TriggerCreateData = Struct.new(
  :branch_id,
  :project_id,
  :id,
  :triggers,
  keyword_init: true
)

# Request payload for Trigger#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] triggers
#   @return [Array, nil]
TriggerUpdateData = Struct.new(
  :branch_id,
  :id,
  :project_id,
  :triggers,
  keyword_init: true
)

# UpdateNeonAuthUserRole entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] roles
#   @return [Array]
UpdateNeonAuthUserRole = Struct.new(
  :id,
  :roles,
  keyword_init: true
)

# Request payload for UpdateNeonAuthUserRole#update.
#
# @!attribute [rw] branch_id
#   @return [String]
#
# @!attribute [rw] project_id
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] roles
#   @return [Array, nil]
UpdateNeonAuthUserRoleUpdateData = Struct.new(
  :branch_id,
  :project_id,
  :user_id,
  :id,
  :roles,
  keyword_init: true
)

# VpcEndpoint entity data model.
#
# @!attribute [rw] example_restricted_projects
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] num_restricted_projects
#   @return [Integer]
#
# @!attribute [rw] region_id
#   @return [String]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] vpc_endpoint_id
#   @return [String]
VpcEndpoint = Struct.new(
  :example_restricted_projects,
  :id,
  :label,
  :num_restricted_projects,
  :region_id,
  :state,
  :vpc_endpoint_id,
  keyword_init: true
)

# Request payload for VpcEndpoint#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organization_id
#   @return [String]
#
# @!attribute [rw] region_id
#   @return [String]
VpcEndpointLoadMatch = Struct.new(
  :id,
  :organization_id,
  :region_id,
  keyword_init: true
)

# Request payload for VpcEndpoint#list.
#
# @!attribute [rw] project_id
#   @return [String]
VpcEndpointListMatch = Struct.new(
  :project_id,
  keyword_init: true
)

