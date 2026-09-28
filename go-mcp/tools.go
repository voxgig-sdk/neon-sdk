package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/neon-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"anonymize | anonymized_branch_status | api_key | auth | auth_legacy | available_preload_library | backup_schedule | branch | branch_ai_gateway | branch_operation | branch_schema | branch_schema_compare | branch_storage | bucket | bucket_objects_list | connection_uri | consumption | create_credential | credential | current_user_info | custom_domain | data_api | database | email_provider | email_server | empty | endpoint | endpoint_operation | function | jwk | masking_rule | member | neon_auth_allow_localhost | neon_auth_config | neon_auth_create_integration | neon_auth_create_new_user | neon_auth_email_and_password_config | neon_auth_email_server_config | neon_auth_integration | neon_auth_magic_link_config | neon_auth_oauth_provider | neon_auth_organization_config | neon_auth_phone_number_config | neon_auth_plugin_config | neon_auth_redirect_uri_whitelist_domain | neon_auth_transfer_auth_provider_project | neon_auth_webhook_config | neon_function | neon_function_deployment | operation | org_api_key_create | org_api_key_revoke | org_api_keys_list_response_item | organization | organization_invitation | presign | project | project_branch_log_field | project_branch_log_field_value | project_branch_logs_query | project_member | project_member_role | project_permission | project_recover | project_transfer_request | region | role | role_operation | role_password | send_neon_auth_test_email | snapshot | spending_limit | trigger | update_neon_auth_user_role | vpc_endpoint"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.NeonSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "neon_list",
		Description: "List records from Neon. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "neon_load",
		Description: "Load a single record from Neon. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.NeonSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.NeonSDK, name string) (sdk.NeonEntity, error) {
	switch strings.ToLower(name) {
	case "anonymize":
		return client.Anonymize(nil), nil
	case "anonymized_branch_status":
		return client.AnonymizedBranchStatus(nil), nil
	case "api_key":
		return client.ApiKey(nil), nil
	case "auth":
		return client.Auth(nil), nil
	case "auth_legacy":
		return client.AuthLegacy(nil), nil
	case "available_preload_library":
		return client.AvailablePreloadLibrary(nil), nil
	case "backup_schedule":
		return client.BackupSchedule(nil), nil
	case "branch":
		return client.Branch(nil), nil
	case "branch_ai_gateway":
		return client.BranchAiGateway(nil), nil
	case "branch_operation":
		return client.BranchOperation(nil), nil
	case "branch_schema":
		return client.BranchSchema(nil), nil
	case "branch_schema_compare":
		return client.BranchSchemaCompare(nil), nil
	case "branch_storage":
		return client.BranchStorage(nil), nil
	case "bucket":
		return client.Bucket(nil), nil
	case "bucket_objects_list":
		return client.BucketObjectsList(nil), nil
	case "connection_uri":
		return client.ConnectionUri(nil), nil
	case "consumption":
		return client.Consumption(nil), nil
	case "create_credential":
		return client.CreateCredential(nil), nil
	case "credential":
		return client.Credential(nil), nil
	case "current_user_info":
		return client.CurrentUserInfo(nil), nil
	case "custom_domain":
		return client.CustomDomain(nil), nil
	case "data_api":
		return client.DataApi(nil), nil
	case "database":
		return client.Database(nil), nil
	case "email_provider":
		return client.EmailProvider(nil), nil
	case "email_server":
		return client.EmailServer(nil), nil
	case "empty":
		return client.Empty(nil), nil
	case "endpoint":
		return client.Endpoint(nil), nil
	case "endpoint_operation":
		return client.EndpointOperation(nil), nil
	case "function":
		return client.Function(nil), nil
	case "jwk":
		return client.Jwk(nil), nil
	case "masking_rule":
		return client.MaskingRule(nil), nil
	case "member":
		return client.Member(nil), nil
	case "neon_auth_allow_localhost":
		return client.NeonAuthAllowLocalhost(nil), nil
	case "neon_auth_config":
		return client.NeonAuthConfig(nil), nil
	case "neon_auth_create_integration":
		return client.NeonAuthCreateIntegration(nil), nil
	case "neon_auth_create_new_user":
		return client.NeonAuthCreateNewUser(nil), nil
	case "neon_auth_email_and_password_config":
		return client.NeonAuthEmailAndPasswordConfig(nil), nil
	case "neon_auth_email_server_config":
		return client.NeonAuthEmailServerConfig(nil), nil
	case "neon_auth_integration":
		return client.NeonAuthIntegration(nil), nil
	case "neon_auth_magic_link_config":
		return client.NeonAuthMagicLinkConfig(nil), nil
	case "neon_auth_oauth_provider":
		return client.NeonAuthOauthProvider(nil), nil
	case "neon_auth_organization_config":
		return client.NeonAuthOrganizationConfig(nil), nil
	case "neon_auth_phone_number_config":
		return client.NeonAuthPhoneNumberConfig(nil), nil
	case "neon_auth_plugin_config":
		return client.NeonAuthPluginConfig(nil), nil
	case "neon_auth_redirect_uri_whitelist_domain":
		return client.NeonAuthRedirectUriWhitelistDomain(nil), nil
	case "neon_auth_transfer_auth_provider_project":
		return client.NeonAuthTransferAuthProviderProject(nil), nil
	case "neon_auth_webhook_config":
		return client.NeonAuthWebhookConfig(nil), nil
	case "neon_function":
		return client.NeonFunction(nil), nil
	case "neon_function_deployment":
		return client.NeonFunctionDeployment(nil), nil
	case "operation":
		return client.Operation(nil), nil
	case "org_api_key_create":
		return client.OrgApiKeyCreate(nil), nil
	case "org_api_key_revoke":
		return client.OrgApiKeyRevoke(nil), nil
	case "org_api_keys_list_response_item":
		return client.OrgApiKeysListResponseItem(nil), nil
	case "organization":
		return client.Organization(nil), nil
	case "organization_invitation":
		return client.OrganizationInvitation(nil), nil
	case "presign":
		return client.Presign(nil), nil
	case "project":
		return client.Project(nil), nil
	case "project_branch_log_field":
		return client.ProjectBranchLogField(nil), nil
	case "project_branch_log_field_value":
		return client.ProjectBranchLogFieldValue(nil), nil
	case "project_branch_logs_query":
		return client.ProjectBranchLogsQuery(nil), nil
	case "project_member":
		return client.ProjectMember(nil), nil
	case "project_member_role":
		return client.ProjectMemberRole(nil), nil
	case "project_permission":
		return client.ProjectPermission(nil), nil
	case "project_recover":
		return client.ProjectRecover(nil), nil
	case "project_transfer_request":
		return client.ProjectTransferRequest(nil), nil
	case "region":
		return client.Region(nil), nil
	case "role":
		return client.Role(nil), nil
	case "role_operation":
		return client.RoleOperation(nil), nil
	case "role_password":
		return client.RolePassword(nil), nil
	case "send_neon_auth_test_email":
		return client.SendNeonAuthTestEmail(nil), nil
	case "snapshot":
		return client.Snapshot(nil), nil
	case "spending_limit":
		return client.SpendingLimit(nil), nil
	case "trigger":
		return client.Trigger(nil), nil
	case "update_neon_auth_user_role":
		return client.UpdateNeonAuthUserRole(nil), nil
	case "vpc_endpoint":
		return client.VpcEndpoint(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
