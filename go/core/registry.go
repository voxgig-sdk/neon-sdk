package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAnonymizeEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewAnonymizedBranchStatusEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewApiKeyEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewAuthEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewAuthLegacyEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewAvailablePreloadLibraryEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewBackupScheduleEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewBranchEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewBranchAiGatewayEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewBranchOperationEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewBranchSchemaEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewBranchSchemaCompareEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewBranchStorageEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewBucketEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewBucketObjectsListEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewConnectionUriEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewConsumptionEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewCreateCredentialEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewCredentialEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewCurrentUserInfoEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewCustomDomainEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewDataApiEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewDatabaseEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewEmailProviderEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewEmailServerEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewEmptyEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewEndpointEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewEndpointOperationEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewFunctionEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewJwkEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewMaskingRuleEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewMemberEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthAllowLocalhostEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthConfigEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthCreateIntegrationEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthCreateNewUserEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthEmailAndPasswordConfigEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthEmailServerConfigEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthIntegrationEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthMagicLinkConfigEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthOauthProviderEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthOrganizationConfigEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthPhoneNumberConfigEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthPluginConfigEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthRedirectUriWhitelistDomainEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthTransferAuthProviderProjectEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonAuthWebhookConfigEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonFunctionEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewNeonFunctionDeploymentEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewOperationEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewOrgApiKeyCreateEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewOrgApiKeyRevokeEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewOrgApiKeysListResponseItemEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewOrganizationEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewOrganizationInvitationEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewPresignEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewProjectEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewProjectBranchLogFieldEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewProjectBranchLogFieldValueEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewProjectBranchLogsQueryEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewProjectMemberEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewProjectMemberRoleEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewProjectPermissionEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewProjectRecoverEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewProjectTransferRequestEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewRegionEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewRoleEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewRoleOperationEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewRolePasswordEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewSendNeonAuthTestEmailEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewSnapshotEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewSpendingLimitEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewTriggerEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewUpdateNeonAuthUserRoleEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

var NewVpcEndpointEntityFunc func(client *NeonSDK, entopts map[string]any) NeonEntity

