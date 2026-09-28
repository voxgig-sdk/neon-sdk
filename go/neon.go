package voxgigneonsdk

import (
	"github.com/voxgig-sdk/neon-sdk/go/core"
	"github.com/voxgig-sdk/neon-sdk/go/entity"
	"github.com/voxgig-sdk/neon-sdk/go/feature"
	_ "github.com/voxgig-sdk/neon-sdk/go/utility"
)

// Type aliases preserve external API.
type NeonSDK = core.NeonSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type NeonEntity = core.NeonEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type NeonError = core.NeonError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAnonymizeEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewAnonymizeEntity(client, entopts)
	}
	core.NewAnonymizedBranchStatusEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewAnonymizedBranchStatusEntity(client, entopts)
	}
	core.NewApiKeyEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewApiKeyEntity(client, entopts)
	}
	core.NewAuthEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewAuthEntity(client, entopts)
	}
	core.NewAuthLegacyEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewAuthLegacyEntity(client, entopts)
	}
	core.NewAvailablePreloadLibraryEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewAvailablePreloadLibraryEntity(client, entopts)
	}
	core.NewBackupScheduleEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewBackupScheduleEntity(client, entopts)
	}
	core.NewBranchEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewBranchEntity(client, entopts)
	}
	core.NewBranchAiGatewayEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewBranchAiGatewayEntity(client, entopts)
	}
	core.NewBranchOperationEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewBranchOperationEntity(client, entopts)
	}
	core.NewBranchSchemaEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewBranchSchemaEntity(client, entopts)
	}
	core.NewBranchSchemaCompareEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewBranchSchemaCompareEntity(client, entopts)
	}
	core.NewBranchStorageEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewBranchStorageEntity(client, entopts)
	}
	core.NewBucketEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewBucketEntity(client, entopts)
	}
	core.NewBucketObjectsListEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewBucketObjectsListEntity(client, entopts)
	}
	core.NewConnectionUriEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewConnectionUriEntity(client, entopts)
	}
	core.NewConsumptionEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewConsumptionEntity(client, entopts)
	}
	core.NewCreateCredentialEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewCreateCredentialEntity(client, entopts)
	}
	core.NewCredentialEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewCredentialEntity(client, entopts)
	}
	core.NewCurrentUserInfoEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewCurrentUserInfoEntity(client, entopts)
	}
	core.NewCustomDomainEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewCustomDomainEntity(client, entopts)
	}
	core.NewDataApiEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewDataApiEntity(client, entopts)
	}
	core.NewDatabaseEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewDatabaseEntity(client, entopts)
	}
	core.NewEmailProviderEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewEmailProviderEntity(client, entopts)
	}
	core.NewEmailServerEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewEmailServerEntity(client, entopts)
	}
	core.NewEmptyEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewEmptyEntity(client, entopts)
	}
	core.NewEndpointEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewEndpointEntity(client, entopts)
	}
	core.NewEndpointOperationEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewEndpointOperationEntity(client, entopts)
	}
	core.NewFunctionEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewFunctionEntity(client, entopts)
	}
	core.NewJwkEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewJwkEntity(client, entopts)
	}
	core.NewMaskingRuleEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewMaskingRuleEntity(client, entopts)
	}
	core.NewMemberEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewMemberEntity(client, entopts)
	}
	core.NewNeonAuthAllowLocalhostEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthAllowLocalhostEntity(client, entopts)
	}
	core.NewNeonAuthConfigEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthConfigEntity(client, entopts)
	}
	core.NewNeonAuthCreateIntegrationEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthCreateIntegrationEntity(client, entopts)
	}
	core.NewNeonAuthCreateNewUserEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthCreateNewUserEntity(client, entopts)
	}
	core.NewNeonAuthEmailAndPasswordConfigEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthEmailAndPasswordConfigEntity(client, entopts)
	}
	core.NewNeonAuthEmailServerConfigEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthEmailServerConfigEntity(client, entopts)
	}
	core.NewNeonAuthIntegrationEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthIntegrationEntity(client, entopts)
	}
	core.NewNeonAuthMagicLinkConfigEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthMagicLinkConfigEntity(client, entopts)
	}
	core.NewNeonAuthOauthProviderEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthOauthProviderEntity(client, entopts)
	}
	core.NewNeonAuthOrganizationConfigEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthOrganizationConfigEntity(client, entopts)
	}
	core.NewNeonAuthPhoneNumberConfigEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthPhoneNumberConfigEntity(client, entopts)
	}
	core.NewNeonAuthPluginConfigEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthPluginConfigEntity(client, entopts)
	}
	core.NewNeonAuthRedirectUriWhitelistDomainEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthRedirectUriWhitelistDomainEntity(client, entopts)
	}
	core.NewNeonAuthTransferAuthProviderProjectEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthTransferAuthProviderProjectEntity(client, entopts)
	}
	core.NewNeonAuthWebhookConfigEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonAuthWebhookConfigEntity(client, entopts)
	}
	core.NewNeonFunctionEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonFunctionEntity(client, entopts)
	}
	core.NewNeonFunctionDeploymentEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewNeonFunctionDeploymentEntity(client, entopts)
	}
	core.NewOperationEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewOperationEntity(client, entopts)
	}
	core.NewOrgApiKeyCreateEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewOrgApiKeyCreateEntity(client, entopts)
	}
	core.NewOrgApiKeyRevokeEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewOrgApiKeyRevokeEntity(client, entopts)
	}
	core.NewOrgApiKeysListResponseItemEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewOrgApiKeysListResponseItemEntity(client, entopts)
	}
	core.NewOrganizationEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewOrganizationEntity(client, entopts)
	}
	core.NewOrganizationInvitationEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewOrganizationInvitationEntity(client, entopts)
	}
	core.NewPresignEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewPresignEntity(client, entopts)
	}
	core.NewProjectEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewProjectEntity(client, entopts)
	}
	core.NewProjectBranchLogFieldEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewProjectBranchLogFieldEntity(client, entopts)
	}
	core.NewProjectBranchLogFieldValueEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewProjectBranchLogFieldValueEntity(client, entopts)
	}
	core.NewProjectBranchLogsQueryEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewProjectBranchLogsQueryEntity(client, entopts)
	}
	core.NewProjectMemberEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewProjectMemberEntity(client, entopts)
	}
	core.NewProjectMemberRoleEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewProjectMemberRoleEntity(client, entopts)
	}
	core.NewProjectPermissionEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewProjectPermissionEntity(client, entopts)
	}
	core.NewProjectRecoverEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewProjectRecoverEntity(client, entopts)
	}
	core.NewProjectTransferRequestEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewProjectTransferRequestEntity(client, entopts)
	}
	core.NewRegionEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewRegionEntity(client, entopts)
	}
	core.NewRoleEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewRoleEntity(client, entopts)
	}
	core.NewRoleOperationEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewRoleOperationEntity(client, entopts)
	}
	core.NewRolePasswordEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewRolePasswordEntity(client, entopts)
	}
	core.NewSendNeonAuthTestEmailEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewSendNeonAuthTestEmailEntity(client, entopts)
	}
	core.NewSnapshotEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewSnapshotEntity(client, entopts)
	}
	core.NewSpendingLimitEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewSpendingLimitEntity(client, entopts)
	}
	core.NewTriggerEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewTriggerEntity(client, entopts)
	}
	core.NewUpdateNeonAuthUserRoleEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewUpdateNeonAuthUserRoleEntity(client, entopts)
	}
	core.NewVpcEndpointEntityFunc = func(client *core.NeonSDK, entopts map[string]any) core.NeonEntity {
		return entity.NewVpcEndpointEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewNeonSDK = core.NewNeonSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewNeonSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *NeonSDK  { return NewNeonSDK(nil) }
func Test() *NeonSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
