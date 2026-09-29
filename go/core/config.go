package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Neon",
			"slug": "neon",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://console.neon.tech/api/v2",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"anonymize": map[string]any{},
				"anonymized_branch_status": map[string]any{},
				"api_key": map[string]any{},
				"auth": map[string]any{},
				"auth_legacy": map[string]any{},
				"available_preload_library": map[string]any{},
				"backup_schedule": map[string]any{},
				"branch": map[string]any{},
				"branch_ai_gateway": map[string]any{},
				"branch_operation": map[string]any{},
				"branch_schema": map[string]any{},
				"branch_schema_compare": map[string]any{},
				"branch_storage": map[string]any{},
				"bucket": map[string]any{},
				"bucket_objects_list": map[string]any{},
				"connection_uri": map[string]any{},
				"consumption": map[string]any{},
				"create_credential": map[string]any{},
				"credential": map[string]any{},
				"current_user_info": map[string]any{},
				"custom_domain": map[string]any{},
				"data_api": map[string]any{},
				"database": map[string]any{},
				"email_provider": map[string]any{},
				"email_server": map[string]any{},
				"empty": map[string]any{},
				"endpoint": map[string]any{},
				"endpoint_operation": map[string]any{},
				"function": map[string]any{},
				"jwk": map[string]any{},
				"masking_rule": map[string]any{},
				"member": map[string]any{},
				"neon_auth_allow_localhost": map[string]any{},
				"neon_auth_config": map[string]any{},
				"neon_auth_create_integration": map[string]any{},
				"neon_auth_create_new_user": map[string]any{},
				"neon_auth_email_and_password_config": map[string]any{},
				"neon_auth_email_server_config": map[string]any{},
				"neon_auth_integration": map[string]any{},
				"neon_auth_magic_link_config": map[string]any{},
				"neon_auth_oauth_provider": map[string]any{},
				"neon_auth_organization_config": map[string]any{},
				"neon_auth_phone_number_config": map[string]any{},
				"neon_auth_plugin_config": map[string]any{},
				"neon_auth_redirect_uri_whitelist_domain": map[string]any{},
				"neon_auth_transfer_auth_provider_project": map[string]any{},
				"neon_auth_webhook_config": map[string]any{},
				"neon_function": map[string]any{},
				"neon_function_deployment": map[string]any{},
				"operation": map[string]any{},
				"org_api_key_create": map[string]any{},
				"org_api_key_revoke": map[string]any{},
				"org_api_keys_list_response_item": map[string]any{},
				"organization": map[string]any{},
				"organization_invitation": map[string]any{},
				"presign": map[string]any{},
				"project": map[string]any{},
				"project_branch_log_field": map[string]any{},
				"project_branch_log_field_value": map[string]any{},
				"project_branch_logs_query": map[string]any{},
				"project_member": map[string]any{},
				"project_member_role": map[string]any{},
				"project_permission": map[string]any{},
				"project_recover": map[string]any{},
				"project_transfer_request": map[string]any{},
				"region": map[string]any{},
				"role": map[string]any{},
				"role_operation": map[string]any{},
				"role_password": map[string]any{},
				"send_neon_auth_test_email": map[string]any{},
				"snapshot": map[string]any{},
				"spending_limit": map[string]any{},
				"trigger": map[string]any{},
				"update_neon_auth_user_role": map[string]any{},
				"vpc_endpoint": map[string]any{},
			},
		},
		"entity": map[string]any{
			"anonymize": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "branch_id",
						"title": "Branch Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the anonymized branch.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the anonymized branch was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "failed_at",
						"title": "Failed At",
						"type": "`$STRING`",
						"short": "A timestamp indicating when the anonymized branch operation failed (if applicable)",
						"format": "date-time",
					},
					map[string]any{
						"name": "last_run",
						"title": "Last Run",
						"type": "`$OBJECT`",
						"short": "Metadata about the most recent anonymization attempt for the branch.",
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the project this branch belongs to.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
						"short": "The current state of the anonymized branch.",
					},
					map[string]any{
						"name": "status_message",
						"title": "Status Message",
						"type": "`$STRING`",
						"short": "A descriptive message about the current status or any errors",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the anonymized branch status was last updated",
						"format": "date-time",
					},
				},
				"name": "anonymize",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/anonymize",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "anonymize",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"anonymize",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"anonymized_branch_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "branch_id",
						"title": "Branch Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the anonymized branch.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the anonymized branch was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "failed_at",
						"title": "Failed At",
						"type": "`$STRING`",
						"short": "A timestamp indicating when the anonymized branch operation failed (if applicable)",
						"format": "date-time",
					},
					map[string]any{
						"name": "last_run",
						"title": "Last Run",
						"type": "`$OBJECT`",
						"short": "Metadata about the most recent anonymization attempt for the branch.",
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the project this branch belongs to.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
						"short": "The current state of the anonymized branch.",
					},
					map[string]any{
						"name": "status_message",
						"title": "Status Message",
						"type": "`$STRING`",
						"short": "A descriptive message about the current status or any errors",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the anonymized branch status was last updated",
						"format": "date-time",
					},
				},
				"name": "anonymized_branch_status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/anonymized_status",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "anonymized_status",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"anonymized_status",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"api_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the API key was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "created_by",
						"title": "Created By",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the user who created this API key",
						"format": "uuid",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The API key's unique numeric ID.",
						"format": "int64",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
						"short": "The generated 64-bit token required to access the Neon API",
					},
					map[string]any{
						"name": "key_name",
						"title": "Key Name",
						"type": "`$STRING`",
						"req": true,
						"short": "A user-specified API key name.",
					},
					map[string]any{
						"name": "last_used_at",
						"title": "Last Used At",
						"type": "`$STRING`",
						"short": "A timestamp indicating when the API was last used",
						"format": "date-time",
					},
					map[string]any{
						"name": "last_used_from_addr",
						"title": "Last Used From Addr",
						"type": "`$STRING`",
						"req": true,
						"short": "The IP address from which the API key was last used",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The user-specified API key name",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "api_key",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api_keys",
								"segments": []any{
									map[string]any{
										"lit": "api_keys",
									},
								},
								"parts": []any{
									"api_keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api_keys",
								"segments": []any{
									map[string]any{
										"lit": "api_keys",
									},
								},
								"parts": []any{
									"api_keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/api_keys/{key_id}",
								"segments": []any{
									map[string]any{
										"lit": "api_keys",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api_keys",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"key_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "key_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"auth": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the account associated with this authentication record.",
					},
					map[string]any{
						"name": "auth_data",
						"title": "Auth Data",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auth_method",
						"title": "Auth Method",
						"type": "`$STRING`",
						"req": true,
						"short": "Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication.",
					},
				},
				"name": "auth",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/domains",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "domains",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "domain",
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/auth",
								"segments": []any{
									map[string]any{
										"lit": "auth",
									},
								},
								"parts": []any{
									"auth",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "auth_user_id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"users",
									"{auth_user_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "auth_user_id",
											"orig": "auth_user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"auth_user_id",
										"branch_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "oauth_providers",
									},
									map[string]any{
										"var": "oauth_provider_id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"oauth_providers",
									"{oauth_provider_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "oauth_provider_id",
											"orig": "oauth_provider_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"oauth_provider_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/domains",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "domains",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "domain",
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"auth_legacy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_provider",
						"title": "Auth Provider",
						"type": "`$STRING`",
						"req": true,
						"short": "Authentication provider integrated with this Neon Auth configuration.",
					},
					map[string]any{
						"name": "domain",
						"title": "Domain",
						"type": "`$STRING`",
						"req": true,
						"short": "URI to add to the redirect URI allowlist for the auth provider.",
						"format": "uri",
					},
				},
				"name": "auth_legacy",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/auth/domains",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "domains",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/auth/integration/{auth_provider}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "integration",
									},
									map[string]any{
										"var": "auth_provider",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"integration",
									"{auth_provider}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "auth_provider",
											"orig": "auth_provider",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"auth_provider",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/auth/users/{auth_user_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "auth_user_id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"users",
									"{auth_user_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "auth_user_id",
											"orig": "auth_user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"auth_user_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/auth/oauth_providers/{oauth_provider_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "oauth_providers",
									},
									map[string]any{
										"var": "oauth_provider_id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"oauth_providers",
									"{oauth_provider_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "oauth_provider_id",
											"orig": "oauth_provider_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"oauth_provider_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/auth/domains",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "domains",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
						[]any{
							"$.main.kit.entity.project",
						},
						[]any{
							"$.main.kit.entity.project",
						},
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"available_preload_library": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
						"short": "Human-readable explanation of the library's purpose and behavior.",
					},
					map[string]any{
						"name": "is_default",
						"title": "Is Default",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints.",
					},
					map[string]any{
						"name": "is_experimental",
						"title": "Is Experimental",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Marks the library as experimental.",
					},
					map[string]any{
						"name": "library_name",
						"title": "Library Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`).",
					},
					map[string]any{
						"name": "version",
						"title": "Version",
						"type": "`$STRING`",
						"req": true,
						"short": "Version of the preload library.",
					},
				},
				"name": "available_preload_library",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/available_preload_libraries",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "available_preload_libraries",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"available_preload_libraries",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.libraries`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"backup_schedule": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "day",
						"title": "Day",
						"type": "`$INTEGER`",
						"short": "The day of the week or month to take the snapshot (if applicable).",
					},
					map[string]any{
						"name": "frequency",
						"title": "Frequency",
						"type": "`$STRING`",
						"req": true,
						"short": "How often to take snapshots.",
					},
					map[string]any{
						"name": "hour",
						"title": "Hour",
						"type": "`$INTEGER`",
						"short": "The hour of the day to take the snapshot (if applicable).",
					},
					map[string]any{
						"name": "month",
						"title": "Month",
						"type": "`$INTEGER`",
						"short": "The month of the year to take the snapshot (if applicable).",
					},
					map[string]any{
						"name": "retention_seconds",
						"title": "Retention Seconds",
						"type": "`$INTEGER`",
						"short": "How long to keep a scheduled snapshot (in seconds) before it's automatically deleted.",
					},
				},
				"name": "backup_schedule",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/backup_schedule",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "backup_schedule",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"backup_schedule",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.schedule`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"branch": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active_time_seconds",
						"title": "Active Time Seconds",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total time this branch's compute has been active during the current billing period, in seconds (not weighted by compute size).",
						"format": "int64",
					},
					map[string]any{
						"name": "annotation",
						"title": "Annotation",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Annotation data associated with the annotated object.",
					},
					map[string]any{
						"name": "branch",
						"title": "Branch",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Branch returned by the request.",
					},
					map[string]any{
						"name": "compute_time_seconds",
						"title": "Compute Time Seconds",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total Postgres compute time consumed by this branch during the current billing period, in CU-seconds (weighted by compute size).",
						"format": "int64",
					},
					map[string]any{
						"name": "cpu_used_sec",
						"title": "Cpu Used Sec",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Deprecated.",
						"deprecated": true,
						"format": "int64",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the branch was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "created_by",
						"title": "Created By",
						"type": "`$OBJECT`",
						"short": "The resolved user model that contains details of the user/org/integration/api_key used for branch creation.",
					},
					map[string]any{
						"name": "creation_source",
						"title": "Creation Source",
						"type": "`$STRING`",
						"req": true,
						"short": "The branch creation source",
					},
					map[string]any{
						"name": "current_state",
						"title": "Current State",
						"type": "`$STRING`",
						"req": true,
						"short": "The branch’s state, indicating if it is initializing, ready for use, or archived.",
					},
					map[string]any{
						"name": "data_transfer_bytes",
						"title": "Data Transfer Bytes",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total data transferred out of the branch, in bytes.",
						"format": "int64",
					},
					map[string]any{
						"name": "default",
						"title": "Default",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the branch is the project's default branch",
					},
					map[string]any{
						"name": "expires_at",
						"title": "Expires At",
						"type": "`$STRING`",
						"short": "The timestamp when the branch is scheduled to expire and be automatically deleted.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The branch ID.",
					},
					map[string]any{
						"name": "init_source",
						"title": "Init Source",
						"type": "`$STRING`",
						"short": "Source of initialization for the branch.",
					},
					map[string]any{
						"name": "last_reset_at",
						"title": "Last Reset At",
						"type": "`$STRING`",
						"short": "A timestamp indicating when the branch was last reset",
						"format": "date-time",
					},
					map[string]any{
						"name": "logical_size",
						"title": "Logical Size",
						"type": "`$INTEGER`",
						"short": "The logical size of the branch, in bytes",
						"format": "int64",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The branch name",
					},
					map[string]any{
						"name": "parent_id",
						"title": "Parent Id",
						"type": "`$STRING`",
						"short": "The `branch_id` of the parent branch",
					},
					map[string]any{
						"name": "parent_lsn",
						"title": "Parent Lsn",
						"type": "`$STRING`",
						"short": "The Log Sequence Number (LSN) on the parent branch from which this branch was created.",
					},
					map[string]any{
						"name": "parent_timestamp",
						"title": "Parent Timestamp",
						"type": "`$STRING`",
						"short": "The point in time on the parent branch from which this branch was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "pending_state",
						"title": "Pending State",
						"type": "`$STRING`",
						"short": "The branch’s state, indicating if it is initializing, ready for use, or archived.",
					},
					map[string]any{
						"name": "primary",
						"title": "Primary",
						"type": "`$BOOLEAN`",
						"short": "Deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the project this branch belongs to.",
					},
					map[string]any{
						"name": "protected",
						"title": "Protected",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the branch is protected.",
					},
					map[string]any{
						"name": "recovery",
						"title": "Recovery",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Recovery information for a deleted branch.",
					},
					map[string]any{
						"name": "restore_status",
						"title": "Restore Status",
						"type": "`$STRING`",
						"short": "Could be `restored`, `finalized` or `detaching`.",
					},
					map[string]any{
						"name": "restored_as",
						"title": "Restored As",
						"type": "`$STRING`",
						"short": "ID of the target branch which was replaced when this branch was restored",
					},
					map[string]any{
						"name": "restored_from",
						"title": "Restored From",
						"type": "`$STRING`",
						"short": "ID of the snapshot that was the restore source for this branch",
					},
					map[string]any{
						"name": "restricted_actions",
						"title": "Restricted Actions",
						"type": "`$ARRAY`",
						"short": "A list of actions that are currently restricted for this branch and the reason why.",
					},
					map[string]any{
						"name": "state_changed_at",
						"title": "State Changed At",
						"type": "`$STRING`",
						"req": true,
						"short": "A UTC timestamp indicating when the `current_state` began",
						"format": "date-time",
					},
					map[string]any{
						"name": "ttl_interval_seconds",
						"title": "Ttl Interval Seconds",
						"type": "`$INTEGER`",
						"short": "The time-to-live (TTL) duration originally configured for the branch, in seconds.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the branch was last updated",
						"format": "date-time",
					},
					map[string]any{
						"name": "written_data_bytes",
						"title": "Written Data Bytes",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Data written by this branch during the current billing period, in bytes.",
						"format": "int64",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "branch",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.branch`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.branches`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_deleted",
											"orig": "include_deleted",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "updated_at",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"include_deleted",
										"limit",
										"project_id",
										"search",
										"sort_by",
										"sort_order",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"branch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.branch`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/count",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"lit": "count",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"count",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "count",
									"exist": []any{
										"project_id",
										"search",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"branch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.branch`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"branch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"branch": "`reqdata`",
									},
									"res": "`body.branch`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"branch_ai_gateway": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "base_url",
						"title": "Base Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL.",
						"format": "uri",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Always `true` in 200 responses.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "branch_ai_gateway",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/ai_gateway",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "ai_gateway",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{id}",
									"ai_gateway",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"branch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"branch_operation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "branch",
						"title": "Branch",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Branch returned by the request.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "operations",
						"title": "Operations",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "branch_operation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/restore",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "restore",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{id}",
									"restore",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"branch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "restore",
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/set_as_default",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "set_as_default",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{id}",
									"set_as_default",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"branch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "set_as_default",
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"branch_schema": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "json",
						"title": "Json",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Branch schema represented as a structured JSON object, parallel to the SQL DDL in `sql`.",
					},
					map[string]any{
						"name": "sql",
						"title": "Sql",
						"type": "`$STRING`",
						"short": "Branch schema expressed as SQL DDL statements.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "branch_schema",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/schema",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "schema",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{id}",
									"schema",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"branch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "db_name",
											"orig": "db_name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "lsn",
											"orig": "lsn",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2022-11-30T20:09:48Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"db_name",
										"format",
										"id",
										"lsn",
										"project_id",
										"timestamp",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"branch_schema_compare": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "branch_schema_compare",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/compare_schema",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "compare_schema",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{id}",
									"compare_schema",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"branch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "base_branch_id",
											"orig": "base_branch_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "base_lsn",
											"orig": "base_lsn",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "base_timestamp",
											"orig": "base_timestamp",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2022-11-30T20:09:48Z",
										},
										map[string]any{
											"name": "db_name",
											"orig": "db_name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "lsn",
											"orig": "lsn",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2022-11-30T20:09:48Z",
										},
									},
								},
								"select": map[string]any{
									"$action": "compare_schema",
									"exist": []any{
										"base_branch_id",
										"base_lsn",
										"base_timestamp",
										"db_name",
										"id",
										"lsn",
										"project_id",
										"timestamp",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"branch_storage": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Always `true` in 200 responses.",
					},
					map[string]any{
						"name": "force_path_style",
						"title": "Force Path Style",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain).",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$STRING`",
						"req": true,
						"short": "The AWS region for this branch's object storage.",
					},
					map[string]any{
						"name": "s3_endpoint",
						"title": "S3 Endpoint",
						"type": "`$STRING`",
						"req": true,
						"short": "The S3-compatible endpoint URL for this branch.",
						"format": "uri",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "branch_storage",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/storage",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "storage",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{id}",
									"storage",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"branch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"bucket": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "access_level",
						"title": "Access Level",
						"type": "`$STRING`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Access level for the bucket.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the bucket was created.",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The bucket name.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "bucket",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/buckets",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "buckets",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"buckets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.bucket`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/buckets",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "buckets",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"buckets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.buckets`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/download",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "buckets",
									},
									map[string]any{
										"var": "bucket_id",
									},
									map[string]any{
										"lit": "objects",
									},
									map[string]any{
										"var": "object_key",
									},
									map[string]any{
										"lit": "download",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"buckets",
									"{bucket_id}",
									"objects",
									"{object_key}",
									"download",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"bucket_name": "bucket_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "bucket_id",
											"orig": "bucket_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "object_key",
											"orig": "object_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"bucket_id",
										"object_key",
										"project_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "buckets",
									},
									map[string]any{
										"var": "bucket_id",
									},
									map[string]any{
										"lit": "objects",
									},
									map[string]any{
										"var": "object_key",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"buckets",
									"{bucket_id}",
									"objects",
									"{object_key}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"bucket_name": "bucket_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "bucket_id",
											"orig": "bucket_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "object_key",
											"orig": "object_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"bucket_id",
										"object_key",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects-by-prefix",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "buckets",
									},
									map[string]any{
										"var": "bucket_name",
									},
									map[string]any{
										"lit": "objects-by-prefix",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"buckets",
									"{bucket_name}",
									"objects-by-prefix",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "bucket_name",
											"orig": "bucket_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "prefix",
											"orig": "prefix",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "objects_by_prefix",
									"exist": []any{
										"branch_id",
										"bucket_name",
										"prefix",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "buckets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"buckets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"bucket_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "bucket_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"bucket_objects_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "etag",
						"title": "Etag",
						"type": "`$STRING`",
						"req": true,
						"short": "The object's entity tag (content hash).",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"req": true,
						"short": "The full object key.",
					},
					map[string]any{
						"name": "last_modified",
						"title": "Last Modified",
						"type": "`$STRING`",
						"req": true,
						"short": "The time the object was last modified.",
						"format": "date-time",
					},
					map[string]any{
						"name": "size",
						"title": "Size",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The object size in bytes.",
						"format": "int64",
					},
				},
				"name": "bucket_objects_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "buckets",
									},
									map[string]any{
										"var": "bucket_name",
									},
									map[string]any{
										"lit": "objects",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"buckets",
									"{bucket_name}",
									"objects",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "bucket_name",
											"orig": "bucket_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "delimiter",
											"orig": "delimiter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1000,
										},
										map[string]any{
											"name": "prefix",
											"orig": "prefix",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"bucket_name",
										"cursor",
										"delimiter",
										"limit",
										"prefix",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
							"$.main.kit.entity.bucket",
						},
					},
				},
			},
			"connection_uri": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "uri",
						"title": "Uri",
						"type": "`$STRING`",
						"req": true,
						"short": "The connection URI.",
					},
				},
				"name": "connection_uri",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/connection_uri",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "connection_uri",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"connection_uri",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "database_name",
											"orig": "database_name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "endpoint_id",
											"orig": "endpoint_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pooled",
											"orig": "pooled",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "role_name",
											"orig": "role_name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"database_name",
										"endpoint_id",
										"pooled",
										"project_id",
										"role_name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"consumption": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "branch_id",
						"title": "Branch Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Neon branch ID.",
					},
					map[string]any{
						"name": "periods",
						"title": "Periods",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Consumption history records for the branch, grouped by billing period.",
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the project that owns this branch.",
					},
				},
				"name": "consumption",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/consumption_history/v2/branches",
								"segments": []any{
									map[string]any{
										"lit": "consumption_history",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "branches",
									},
								},
								"parts": []any{
									"consumption_history",
									"v2",
									"branches",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.branches`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_ids",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "granularity",
											"orig": "granularity",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "metric",
											"orig": "metrics",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "org_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_ids",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"cursor",
										"from",
										"granularity",
										"limit",
										"metric",
										"org_id",
										"project_id",
										"to",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/consumption_history/projects",
								"segments": []any{
									map[string]any{
										"lit": "consumption_history",
									},
									map[string]any{
										"lit": "projects",
									},
								},
								"parts": []any{
									"consumption_history",
									"projects",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.projects`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "granularity",
											"orig": "granularity",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "include_v1_metric",
											"orig": "include_v1_metrics",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "metric",
											"orig": "metrics",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "org_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_ids",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"from",
										"granularity",
										"include_v1_metric",
										"limit",
										"metric",
										"org_id",
										"project_id",
										"to",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/consumption_history/v2/projects",
								"segments": []any{
									map[string]any{
										"lit": "consumption_history",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "projects",
									},
								},
								"parts": []any{
									"consumption_history",
									"v2",
									"projects",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.projects`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "granularity",
											"orig": "granularity",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "metric",
											"orig": "metrics",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "org_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_ids",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"from",
										"granularity",
										"limit",
										"metric",
										"org_id",
										"project_id",
										"to",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_credential": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Free-form customer label for the credential.",
					},
					map[string]any{
						"name": "principal_type",
						"title": "Principal Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Principal type for the credential.",
					},
					map[string]any{
						"name": "scopes",
						"title": "Scopes",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "create_credential",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/credentials",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "credentials",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"credentials",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"credential": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "branch_id",
						"title": "Branch Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "expires_at",
						"title": "Expires At",
						"type": "`$STRING`",
						"short": "When the credential expires; absent means never expires.",
						"format": "date-time",
					},
					map[string]any{
						"name": "function_id",
						"title": "Function Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_used_at",
						"title": "Last Used At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Customer-supplied label; absent when not provided at issuance.",
					},
					map[string]any{
						"name": "principal_type",
						"title": "Principal Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "revoked_at",
						"title": "Revoked At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "scopes",
						"title": "Scopes",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "token_id",
						"title": "Token Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Opaque credential id (e.g.",
					},
					map[string]any{
						"name": "token_id_short",
						"title": "Token Id Short",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "credential",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/reveal",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "credentials",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reveal",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"credentials",
									"{id}",
									"reveal",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "token_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "reveal",
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/rotate",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "credentials",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "rotate",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"credentials",
									"{id}",
									"rotate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "token_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "rotate",
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/credentials",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "credentials",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"credentials",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.credentials`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "credentials",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"credentials",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "token_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"current_user_info": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "Email address associated with this auth account.",
						"format": "email",
					},
					map[string]any{
						"name": "image",
						"title": "Image",
						"type": "`$STRING`",
						"req": true,
						"short": "URL of the user's profile picture as provided by the identity provider.",
					},
					map[string]any{
						"name": "login",
						"title": "Login",
						"type": "`$STRING`",
						"req": true,
						"short": "Deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Display name of the account as provided by the identity provider.",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$STRING`",
						"req": true,
						"short": "Identity provider id from keycloak",
					},
				},
				"name": "current_user_info",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/me",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "me",
									},
								},
								"parts": []any{
									"users",
									"me",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_domain": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "domain",
						"title": "Domain",
						"type": "`$STRING`",
						"req": true,
						"short": "The custom domain to register (for example `dashboard.acme.com`).",
					},
					map[string]any{
						"name": "entity_id",
						"title": "Entity Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The target entity's identifier within the branch.",
					},
					map[string]any{
						"name": "entity_type",
						"title": "Entity Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The kind of branch entity to point the domain at.",
					},
				},
				"name": "custom_domain",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/custom-domains",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "custom-domains",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"custom-domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"data_api": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "add_default_grants",
						"title": "Add Default Grants",
						"type": "`$BOOLEAN`",
						"short": "Grant all permissions to the tables in the public schema to authenticated users",
					},
					map[string]any{
						"name": "auth_provider",
						"title": "Auth Provider",
						"type": "`$STRING`",
						"short": "Authentication provider for the Neon Data API.",
					},
					map[string]any{
						"name": "available_schemas",
						"title": "Available Schemas",
						"type": "`$ARRAY`",
						"short": "List of available database schemas (SubZero only)",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jwks_url",
						"title": "Jwks Url",
						"type": "`$STRING`",
						"short": "URL of the JWKS endpoint used to verify JWTs for this Data API.",
						"format": "uri",
					},
					map[string]any{
						"name": "jwt_audience",
						"title": "Jwt Audience",
						"type": "`$STRING`",
						"short": "Expected `aud` claim in incoming JWTs.",
					},
					map[string]any{
						"name": "provider_name",
						"title": "Provider Name",
						"type": "`$STRING`",
						"short": "Display name for the authentication provider.",
					},
					map[string]any{
						"name": "settings",
						"title": "Settings",
						"type": "`$OBJECT`",
						"short": "Configuration settings for the Data API (SubZero only)",
					},
					map[string]any{
						"name": "skip_auth_schema",
						"title": "Skip Auth Schema",
						"type": "`$BOOLEAN`",
						"short": "Skip creating the auth schema and RLS functions",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The status of the Neon Data API deployment",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The URL of the Neon Data API",
						"format": "uri",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "data_api",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "data-api",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"data-api",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"database_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "database_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "data-api",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"data-api",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"database_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "database_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "data-api",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"data-api",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"database_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "database_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "data-api",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"data-api",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"database_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "database_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"database": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "branch_id",
						"title": "Branch Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the branch this database belongs to.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the database was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "database",
						"title": "Database",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Configuration for the new Postgres database.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The database ID",
						"format": "int64",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The database name",
					},
					map[string]any{
						"name": "owner_name",
						"title": "Owner Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of role that owns the database",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the database was last updated",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "database",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/databases",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "databases",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"databases",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"database": "`reqdata`",
									},
									"res": "`body.database`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/databases",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "databases",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"databases",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.databases`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "databases",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"databases",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"database_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.database`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "database_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "databases",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"databases",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"database_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.database`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "database_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "databases",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"databases",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"database_name": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"database": "`reqdata`",
									},
									"res": "`body.database`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "database_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"email_provider": map[string]any{
				"fields": []any{},
				"name": "email_provider",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/email_provider",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "email_provider",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"email_provider",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"email_server": map[string]any{
				"fields": []any{},
				"name": "email_server",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/auth/email_server",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "email_server",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"email_server",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"empty": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "destination_org_id",
						"title": "Destination Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The destination organization identifier",
					},
					map[string]any{
						"name": "project_ids",
						"title": "Project Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "The list of projects ids to transfer.",
					},
					map[string]any{
						"name": "schedule",
						"title": "Schedule",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of schedule entries defining the backup frequency.",
					},
				},
				"name": "empty",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/organizations/{source_org_id}/projects/transfer",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"lit": "transfer",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"projects",
									"transfer",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"source_org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "source_org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/users/me/projects/transfer",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "me",
									},
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"lit": "transfer",
									},
								},
								"parts": []any{
									"users",
									"me",
									"projects",
									"transfer",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{org_id}/billing/spending_limit",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "spending_limit",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"billing",
									"spending_limit",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/projects/{project_id}/branches/{branch_id}/backup_schedule",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "backup_schedule",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"backup_schedule",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "autoscaling_limit_max_cu",
						"title": "Autoscaling Limit Max Cu",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The maximum number of Compute Units",
					},
					map[string]any{
						"name": "autoscaling_limit_min_cu",
						"title": "Autoscaling Limit Min Cu",
						"type": "`$NUMBER`",
						"req": true,
						"short": "The minimum number of Compute Units",
					},
					map[string]any{
						"name": "branch_id",
						"title": "Branch Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the branch this compute endpoint belongs to.",
					},
					map[string]any{
						"name": "compute_release_version",
						"title": "Compute Release Version",
						"type": "`$STRING`",
						"short": "Attached compute's release version number.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the compute endpoint was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "creation_source",
						"title": "Creation Source",
						"type": "`$STRING`",
						"req": true,
						"short": "The compute endpoint creation source",
					},
					map[string]any{
						"name": "current_state",
						"title": "Current State",
						"type": "`$STRING`",
						"req": true,
						"short": "Lifecycle state of the compute endpoint.",
					},
					map[string]any{
						"name": "disabled",
						"title": "Disabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether to restrict connections to the compute endpoint.",
					},
					map[string]any{
						"name": "endpoint",
						"title": "Endpoint",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Configuration for the compute endpoint to create.",
					},
					map[string]any{
						"name": "host",
						"title": "Host",
						"type": "`$STRING`",
						"req": true,
						"short": "The hostname of the compute endpoint.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The compute endpoint ID.",
					},
					map[string]any{
						"name": "last_active",
						"title": "Last Active",
						"type": "`$STRING`",
						"short": "A timestamp indicating when the compute endpoint was last active",
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Optional name of the compute endpoint",
					},
					map[string]any{
						"name": "passwordless_access",
						"title": "Passwordless Access",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether to permit passwordless access to the compute endpoint",
					},
					map[string]any{
						"name": "pending_state",
						"title": "Pending State",
						"type": "`$STRING`",
						"short": "Target state the compute endpoint is transitioning to.",
					},
					map[string]any{
						"name": "pooler_enabled",
						"title": "Pooler Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "pooler_mode",
						"title": "Pooler Mode",
						"type": "`$STRING`",
						"req": true,
						"short": "Deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the project this compute endpoint belongs to.",
					},
					map[string]any{
						"name": "provisioner",
						"title": "Provisioner",
						"type": "`$STRING`",
						"req": true,
						"short": "Compute provisioner.",
					},
					map[string]any{
						"name": "proxy_host",
						"title": "Proxy Host",
						"type": "`$STRING`",
						"req": true,
						"short": "Deprecated.",
					},
					map[string]any{
						"name": "region_id",
						"title": "Region Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`).",
					},
					map[string]any{
						"name": "settings",
						"title": "Settings",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A collection of settings for a compute endpoint",
					},
					map[string]any{
						"name": "started_at",
						"title": "Started At",
						"type": "`$STRING`",
						"short": "A timestamp indicating when the compute endpoint was last started",
						"format": "date-time",
					},
					map[string]any{
						"name": "suspend_timeout_seconds",
						"title": "Suspend Timeout Seconds",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Scale-to-zero idle timeout, in seconds, before the compute suspends.",
						"format": "int64",
					},
					map[string]any{
						"name": "suspended_at",
						"title": "Suspended At",
						"type": "`$STRING`",
						"short": "A timestamp indicating when the compute endpoint was last suspended",
						"format": "date-time",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Compute endpoint type.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the compute endpoint was last updated",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "endpoint",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/endpoints",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "endpoints",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"endpoints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"endpoint": "`reqdata`",
									},
									"res": "`body.endpoint`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/endpoints",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "endpoints",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"endpoints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoints`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/endpoints",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "endpoints",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"endpoints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoints`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/endpoints/{endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "endpoints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"endpoints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"endpoint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoint`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/endpoints/{endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "endpoints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"endpoints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"endpoint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoint`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/endpoints/{endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "endpoints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"endpoints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"endpoint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"endpoint": "`reqdata`",
									},
									"res": "`body.endpoint`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"endpoint_operation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "endpoint",
						"title": "Endpoint",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Compute endpoint created or retrieved, including its current lifecycle state.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "operations",
						"title": "Operations",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "endpoint_operation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/endpoints/{endpoint_id}/restart",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "endpoints",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "restart",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"endpoints",
									"{id}",
									"restart",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"endpoint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "restart",
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/endpoints/{endpoint_id}/start",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "endpoints",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "start",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"endpoints",
									"{id}",
									"start",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"endpoint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "start",
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/endpoints/{endpoint_id}/suspend",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "endpoints",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "suspend",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"endpoints",
									"{id}",
									"suspend",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"endpoint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "suspend",
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"function": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active_deployment",
						"title": "Active Deployment",
						"type": "`$ANY`",
						"short": "The most recent deployment whose build completed successfully.",
					},
					map[string]any{
						"name": "binding_status",
						"title": "Binding Status",
						"type": "`$STRING`",
						"short": "Whether Neon's internal routing for the domain is published: `pending`, `present`, or `missing`.",
					},
					map[string]any{
						"name": "cname_target",
						"title": "Cname Target",
						"type": "`$STRING`",
						"req": true,
						"short": "The hostname the customer must point their custom domain at with a CNAME record.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "current_deployment",
						"title": "Current Deployment",
						"type": "`$ANY`",
						"short": "The most recent deployment, regardless of build status.",
					},
					map[string]any{
						"name": "dns_status",
						"title": "Dns Status",
						"type": "`$STRING`",
						"short": "The DNS + CAA portion of the check: `pending` (no records yet), `ok` (resolves to our edge and the CA is authorized), `misconfigured` (your CNAME does not resolve to our edge), or `caa_blocked` (your CAA records forbid Let's Encrypt).",
					},
					map[string]any{
						"name": "domain",
						"title": "Domain",
						"type": "`$STRING`",
						"req": true,
						"short": "The registered custom domain (normalized, lowercase).",
					},
					map[string]any{
						"name": "entity_id",
						"title": "Entity Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The target entity's identifier within the branch.",
					},
					map[string]any{
						"name": "entity_type",
						"title": "Entity Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The kind of branch entity the domain targets.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Opaque, stable function identifier.",
					},
					map[string]any{
						"name": "invocation_url",
						"title": "Invocation Url",
						"type": "`$STRING`",
						"req": true,
						"short": "URL at which the function is invoked.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Free-form display name.",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Branch-unique, lowercase DNS-label.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "The domain's current validity, computed by a background check: `pending` (still converging — point your CNAME at `cname_target` and wait), `active` (live: DNS resolves to the edge, the CA is authorized, and routing is published), or `error…",
					},
					map[string]any{
						"name": "status_reason",
						"title": "Status Reason",
						"type": "`$STRING`",
						"short": "A short, stable machine-readable reason for a non-active `status` (e.g.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "function",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/custom-domains",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "custom-domains",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"custom-domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.custom_domains`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"cursor",
										"limit",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/functions",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "functions",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"functions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.functions`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"cursor",
										"limit",
										"project_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/custom-domains/{domain}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "custom-domains",
									},
									map[string]any{
										"var": "domain",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"custom-domains",
									"{domain}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "domain",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"domain",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/functions/{slug}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "functions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"functions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "triggers",
									},
									map[string]any{
										"var": "trigger_id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"triggers",
									"{trigger_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "trigger_id",
											"orig": "trigger_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
										"trigger_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
							"$.main.kit.entity.custom_domain",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
							"$.main.kit.entity.trigger",
						},
					},
				},
			},
			"jwk": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "branch_id",
						"title": "Branch Id",
						"type": "`$STRING`",
						"short": "The Neon branch ID.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the JWKS was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The JWKS configuration's ID.",
					},
					map[string]any{
						"name": "jwks_url",
						"title": "Jwks Url",
						"type": "`$STRING`",
						"req": true,
						"short": "URL of the provider's JWKS endpoint used to verify JWTs.",
					},
					map[string]any{
						"name": "jwt_audience",
						"title": "Jwt Audience",
						"type": "`$STRING`",
						"short": "Expected `aud` claim in incoming JWTs.",
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Neon project ID.",
					},
					map[string]any{
						"name": "provider_name",
						"title": "Provider Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the authentication provider (e.g., Clerk, Stytch, Auth0)",
					},
					map[string]any{
						"name": "role_names",
						"title": "Role Names",
						"type": "`$ARRAY`",
						"short": "Deprecated.",
						"deprecated": true,
					},
					map[string]any{
						"name": "skip_role_creation",
						"title": "Skip Role Creation",
						"type": "`$BOOLEAN`",
						"short": "Deprecated.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the JWKS was last modified",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "jwk",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/jwks",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "jwks",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"jwks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/jwks",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "jwks",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"jwks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.jwks`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/jwks/{jwks_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "jwks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"jwks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"jwks_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "jwks_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"masking_rule": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "column_name",
						"title": "Column Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the column to be masked",
					},
					map[string]any{
						"name": "database_name",
						"title": "Database Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the database containing the table to be masked",
					},
					map[string]any{
						"name": "masking_function",
						"title": "Masking Function",
						"type": "`$STRING`",
						"short": "The PostgreSQL Anonymizer masking function to apply.",
					},
					map[string]any{
						"name": "masking_rules",
						"title": "Masking Rules",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of masking rules for the branch",
					},
					map[string]any{
						"name": "masking_value",
						"title": "Masking Value",
						"type": "`$STRING`",
						"short": "A literal value to set on the column when masking.",
					},
					map[string]any{
						"name": "schema_name",
						"title": "Schema Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the schema containing the table to be masked",
					},
					map[string]any{
						"name": "table_name",
						"title": "Table Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the table containing the column to be masked",
					},
				},
				"name": "masking_rule",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/masking_rules",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "masking_rules",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"masking_rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.masking_rules`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/masking_rules",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "masking_rules",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"masking_rules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The organization member's ID.",
						"format": "uuid",
					},
					map[string]any{
						"name": "joined_at",
						"title": "Joined At",
						"type": "`$STRING`",
						"short": "Timestamp when the user joined the organization.",
						"format": "date-time",
					},
					map[string]any{
						"name": "org_id",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Neon organization ID.",
					},
					map[string]any{
						"name": "role",
						"title": "Role",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization member's role.",
					},
					map[string]any{
						"name": "user_id",
						"title": "User Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Neon user ID.",
						"format": "uuid",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "member",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{org_id}/members/{member_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member_id": "id",
										"org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{org_id}/members/{member_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member_id": "id",
										"org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/organizations/{org_id}/members/{member_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member_id": "id",
										"org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"neon_auth_allow_localhost": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_localhost",
						"title": "Allow Localhost",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether to allow localhost connections",
					},
				},
				"name": "neon_auth_allow_localhost",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/allow_localhost",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "allow_localhost",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"allow_localhost",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/allow_localhost",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "allow_localhost",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"allow_localhost",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The application name used in auth emails and communications.",
					},
				},
				"name": "neon_auth_config",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/config",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_create_integration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_provider",
						"title": "Auth Provider",
						"type": "`$STRING`",
						"req": true,
						"short": "Authentication provider integrated with this Neon Auth configuration.",
					},
					map[string]any{
						"name": "branch_id",
						"title": "Branch Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Neon branch ID.",
					},
					map[string]any{
						"name": "database_name",
						"title": "Database Name",
						"type": "`$STRING`",
						"short": "Name of the database to enable Neon Auth on.",
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Neon project ID.",
					},
					map[string]any{
						"name": "role_name",
						"title": "Role Name",
						"type": "`$STRING`",
						"short": "Deprecated.",
						"deprecated": true,
					},
				},
				"name": "neon_auth_create_integration",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/auth/create",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "create",
									},
								},
								"parts": []any{
									"projects",
									"auth",
									"create",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/auth/keys",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "keys",
									},
								},
								"parts": []any{
									"projects",
									"auth",
									"keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_create_new_user": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_provider",
						"title": "Auth Provider",
						"type": "`$STRING`",
						"req": true,
						"short": "Authentication provider integrated with this Neon Auth configuration.",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "Email address of the new Neon Auth user to create.",
						"format": "email",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Display name for the new user.",
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Neon project ID.",
					},
				},
				"name": "neon_auth_create_new_user",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/users",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "users",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"users",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/auth/user",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "user",
									},
								},
								"parts": []any{
									"projects",
									"auth",
									"user",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_email_and_password_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auto_sign_in_after_verification",
						"title": "Auto Sign In After Verification",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether users are automatically signed in after verifying their email",
					},
					map[string]any{
						"name": "disable_sign_up",
						"title": "Disable Sign Up",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether to disable new user sign ups",
					},
					map[string]any{
						"name": "email_verification_method",
						"title": "Email Verification Method",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Controls how email addresses are verified during sign-up or sign-in.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether email and password authentication is enabled",
					},
					map[string]any{
						"name": "require_email_verification",
						"title": "Require Email Verification",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether email verification is required before users can sign in",
					},
					map[string]any{
						"name": "send_verification_email_on_sign_in",
						"title": "Send Verification Email On Sign In",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether to send a verification email when users sign in",
					},
					map[string]any{
						"name": "send_verification_email_on_sign_up",
						"title": "Send Verification Email On Sign Up",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether to send a verification email when users sign up",
					},
				},
				"name": "neon_auth_email_and_password_config",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/email_and_password",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "email_and_password",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"email_and_password",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/email_and_password",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "email_and_password",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"email_and_password",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_email_server_config": map[string]any{
				"fields": []any{},
				"name": "neon_auth_email_server_config",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/email_provider",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "email_provider",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"email_provider",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/auth/email_server",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "email_server",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"email_server",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_integration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_provider",
						"title": "Auth Provider",
						"type": "`$STRING`",
						"req": true,
						"short": "Authentication provider integrated with this Neon Auth configuration.",
					},
					map[string]any{
						"name": "auth_provider_project_id",
						"title": "Auth Provider Project Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Project identifier assigned by the auth provider for this integration.",
					},
					map[string]any{
						"name": "base_url",
						"title": "Base Url",
						"type": "`$STRING`",
						"short": "Base URL of the Neon Auth service endpoint for this integration.",
					},
					map[string]any{
						"name": "branch_id",
						"title": "Branch Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Neon branch ID.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Timestamp when the Neon Auth integration was created, in RFC 3339 format (UTC).",
						"format": "date-time",
					},
					map[string]any{
						"name": "db_name",
						"title": "Db Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Name of the database used by the Neon Auth integration.",
					},
					map[string]any{
						"name": "jwks_url",
						"title": "Jwks Url",
						"type": "`$STRING`",
						"req": true,
						"short": "URL of the provider's JWKS endpoint used to verify JWTs.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Application name shown in auth emails and communications.",
					},
					map[string]any{
						"name": "owned_by",
						"title": "Owned By",
						"type": "`$STRING`",
						"req": true,
						"short": "Owner of the auth provider project.",
					},
					map[string]any{
						"name": "transfer_status",
						"title": "Transfer Status",
						"type": "`$STRING`",
						"short": "Ownership transfer state for the auth provider project.",
					},
				},
				"name": "neon_auth_integration",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/auth/integrations",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "integrations",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"integrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_magic_link_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "disable_sign_up",
						"title": "Disable Sign Up",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether to disable sign-up via magic link.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether the magic link plugin is enabled.",
					},
					map[string]any{
						"name": "expires_in",
						"title": "Expires In",
						"type": "`$INTEGER`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"short": "Minutes until the magic link expires.",
						"format": "int32",
					},
				},
				"name": "neon_auth_magic_link_config",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/plugins/magic-link",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "magic-link",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"plugins",
									"magic-link",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_oauth_provider": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "client_id",
						"title": "Client Id",
						"type": "`$STRING`",
						"short": "Public identifier for the OAuth application, issued by the provider when the application is registered.",
					},
					map[string]any{
						"name": "client_secret",
						"title": "Client Secret",
						"type": "`$STRING`",
						"short": "OAuth client secret for the provider.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The OAuth provider's ID.",
					},
					map[string]any{
						"name": "microsoft_tenant_id",
						"title": "Microsoft Tenant Id",
						"type": "`$STRING`",
						"short": "Tenant ID for the Microsoft OAuth provider.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "OAuth provider key type.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "neon_auth_oauth_provider",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "oauth_providers",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"oauth_providers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/auth/oauth_providers",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "oauth_providers",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"oauth_providers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "oauth_providers",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"oauth_providers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.providers`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/auth/oauth_providers",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "oauth_providers",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"oauth_providers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.providers`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "oauth_providers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"oauth_providers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"oauth_provider_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "oauth_provider_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/auth/oauth_providers/{oauth_provider_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "oauth_providers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"oauth_providers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"oauth_provider_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "oauth_provider_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_organization_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "creator_role",
						"title": "Creator Role",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Role of the organization's creator.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether the organization plugin is enabled.",
					},
					map[string]any{
						"name": "membership_limit",
						"title": "Membership Limit",
						"type": "`$INTEGER`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"short": "Maximum number of members per organization.",
						"format": "int32",
					},
					map[string]any{
						"name": "organization_limit",
						"title": "Organization Limit",
						"type": "`$INTEGER`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"short": "Maximum organizations a user can belong to (created or joined).",
						"format": "int32",
					},
					map[string]any{
						"name": "send_invitation_email",
						"title": "Send Invitation Email",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether to send invitation emails when inviting members to an organization.",
					},
				},
				"name": "neon_auth_organization_config",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/plugins/organization",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "organization",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"plugins",
									"organization",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_phone_number_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether the phone number plugin is enabled.",
					},
					map[string]any{
						"name": "otp_expires_in",
						"title": "Otp Expires In",
						"type": "`$INTEGER`",
						"short": "Time in seconds before the OTP expires",
					},
				},
				"name": "neon_auth_phone_number_config",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "phone-number",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"plugins",
									"phone-number",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"lit": "phone-number",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"plugins",
									"phone-number",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_plugin_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "client_id",
						"title": "Client Id",
						"type": "`$STRING`",
						"short": "Public identifier for the OAuth application, issued by the provider when the application is registered.",
					},
					map[string]any{
						"name": "client_secret",
						"title": "Client Secret",
						"type": "`$STRING`",
						"short": "OAuth client secret for the provider.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The OAuth provider's ID.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "OAuth provider key type.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "neon_auth_plugin_config",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/plugins",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "plugins",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"plugins",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_redirect_uri_whitelist_domain": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_provider",
						"title": "Auth Provider",
						"type": "`$STRING`",
						"req": true,
						"short": "Authentication provider integrated with this Neon Auth configuration.",
					},
					map[string]any{
						"name": "domain",
						"title": "Domain",
						"type": "`$STRING`",
						"req": true,
						"short": "Allowed redirect URI domain for the auth provider.",
					},
				},
				"name": "neon_auth_redirect_uri_whitelist_domain",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/domains",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "domains",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.domains`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/auth/domains",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "domains",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"auth",
									"domains",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.domains`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_auth_transfer_auth_provider_project": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auth_provider",
						"title": "Auth Provider",
						"type": "`$STRING`",
						"req": true,
						"short": "Authentication provider integrated with this Neon Auth configuration.",
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Neon project ID.",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "URL for completing the process of ownership transfer",
					},
				},
				"name": "neon_auth_transfer_auth_provider_project",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/auth/transfer_ownership",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "transfer_ownership",
									},
								},
								"parts": []any{
									"projects",
									"auth",
									"transfer_ownership",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"neon_auth_webhook_config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the webhook is active.",
					},
					map[string]any{
						"name": "enabled_events",
						"title": "Enabled Events",
						"type": "`$ARRAY`",
						"short": "Event types that trigger this webhook.",
					},
					map[string]any{
						"name": "timeout_seconds",
						"title": "Timeout Seconds",
						"type": "`$INTEGER`",
						"short": "Maximum time, in seconds, to wait for a response from the webhook endpoint.",
					},
					map[string]any{
						"name": "webhook_url",
						"title": "Webhook Url",
						"type": "`$STRING`",
						"short": "Destination URL that receives webhook event payloads.",
					},
				},
				"name": "neon_auth_webhook_config",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.enabled_events`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/webhooks",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_function": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active_deployment",
						"title": "Active Deployment",
						"type": "`$ANY`",
						"short": "The most recent deployment whose build completed successfully.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "current_deployment",
						"title": "Current Deployment",
						"type": "`$ANY`",
						"short": "The most recent deployment, regardless of build status.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Opaque, stable function identifier.",
					},
					map[string]any{
						"name": "invocation_url",
						"title": "Invocation Url",
						"type": "`$STRING`",
						"req": true,
						"short": "URL at which the function is invoked.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Free-form display name.",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Branch-unique, lowercase DNS-label.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "neon_function",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/functions/{slug}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "functions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"functions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.function`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/functions/{slug}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "functions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"functions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.function`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"neon_function_deployment": map[string]any{
				"fields": []any{},
				"name": "neon_function_deployment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/functions/{slug}/deployments",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "functions",
									},
									map[string]any{
										"var": "slug",
									},
									map[string]any{
										"lit": "deployments",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"functions",
									"{slug}",
									"deployments",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.deployment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
										"slug",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
							"$.main.kit.entity.function",
						},
					},
				},
			},
			"operation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action",
						"title": "Action",
						"type": "`$STRING`",
						"req": true,
						"short": "The action performed by the operation",
					},
					map[string]any{
						"name": "branch_id",
						"title": "Branch Id",
						"type": "`$STRING`",
						"short": "The ID of the branch this operation ran on.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the operation was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "endpoint_id",
						"title": "Endpoint Id",
						"type": "`$STRING`",
						"short": "The ID of the compute endpoint this operation ran on.",
					},
					map[string]any{
						"name": "error",
						"title": "Error",
						"type": "`$STRING`",
						"short": "Human-readable message describing why the operation failed.",
					},
					map[string]any{
						"name": "failures_count",
						"title": "Failures Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The number of times the operation failed",
						"format": "int32",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The operation ID",
						"format": "uuid",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name for the replaced branch.",
					},
					map[string]any{
						"name": "operations",
						"title": "Operations",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the project this operation ran on.",
					},
					map[string]any{
						"name": "retry_at",
						"title": "Retry At",
						"type": "`$STRING`",
						"short": "A timestamp indicating when the operation was last retried",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current lifecycle state of the operation.",
					},
					map[string]any{
						"name": "total_duration_ms",
						"title": "Total Duration Ms",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The total duration of the operation in milliseconds",
						"format": "int32",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the operation status was last updated",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "operation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/finalize_restore",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "finalize_restore",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"finalize_restore",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/operations",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "operations",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"operations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.operations`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"project_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/operations/{operation_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "operations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"operations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"operation_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.operation`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "operation_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"org_api_key_create": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_by",
						"title": "Created By",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "org_api_key_create",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/organizations/{org_id}/api_keys",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "api_keys",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"api_keys",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"org_api_key_revoke": map[string]any{
				"fields": []any{},
				"name": "org_api_key_revoke",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{org_id}/api_keys/{key_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "api_keys",
									},
									map[string]any{
										"var": "key_id",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"api_keys",
									"{key_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "key_id",
											"orig": "key_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key_id",
										"organization_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
							"$.main.kit.entity.api_key",
						},
					},
				},
			},
			"org_api_keys_list_response_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the API key was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "created_by",
						"title": "Created By",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The user data of the user that created this API key.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The API key's unique numeric ID.",
						"format": "int64",
					},
					map[string]any{
						"name": "last_used_at",
						"title": "Last Used At",
						"type": "`$STRING`",
						"short": "A timestamp indicating when the API was last used",
						"format": "date-time",
					},
					map[string]any{
						"name": "last_used_from_addr",
						"title": "Last Used From Addr",
						"type": "`$STRING`",
						"req": true,
						"short": "The IP address from which the API key was last used",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The user-specified API key name",
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"short": "If set, the API key can access only this project",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "org_api_keys_list_response_item",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{org_id}/api_keys",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "api_keys",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"api_keys",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_hipaa_projects",
						"title": "Allow Hipaa Projects",
						"type": "`$BOOLEAN`",
						"short": "If true, allow account to mark projects as HIPAA",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicting when the organization was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "handle",
						"title": "Handle",
						"type": "`$STRING`",
						"req": true,
						"short": "URL-safe identifier for the organization, used in API paths.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Neon organization ID.",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
						"short": "Human-readable name for the VPC endpoint assignment, used to identify it within the organization.",
					},
					map[string]any{
						"name": "managed_by",
						"title": "Managed By",
						"type": "`$STRING`",
						"req": true,
						"short": "Organizations created via the Console or the API are managed by `console`.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Human-readable display name of the organization.",
					},
					map[string]any{
						"name": "plan",
						"title": "Plan",
						"type": "`$STRING`",
						"req": true,
						"short": "Billing plan for the organization, for example `free`, `launch`, or `scale`.",
					},
					map[string]any{
						"name": "require_mfa",
						"title": "Require Mfa",
						"type": "`$BOOLEAN`",
						"short": "If true, all members must have MFA enabled to access this organization",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the organization was updated",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "organization",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "vpc",
									},
									map[string]any{
										"lit": "region",
									},
									map[string]any{
										"var": "region_id",
									},
									map[string]any{
										"lit": "vpc_endpoints",
									},
									map[string]any{
										"var": "vpc_endpoint_id",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
									"vpc",
									"region",
									"{region_id}",
									"vpc_endpoints",
									"{vpc_endpoint_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "region_id",
											"orig": "region_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "vpc_endpoint_id",
											"orig": "vpc_endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"region_id",
										"vpc_endpoint_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{org_id}/members",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.members`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "joined_at",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
									},
								},
								"select": map[string]any{
									"$action": "member",
									"exist": []any{
										"cursor",
										"id",
										"limit",
										"sort_by",
										"sort_order",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/me/organizations",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "me",
									},
									map[string]any{
										"lit": "organizations",
									},
								},
								"parts": []any{
									"users",
									"me",
									"organizations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.organizations`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{org_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "vpc",
									},
									map[string]any{
										"lit": "region",
									},
									map[string]any{
										"var": "region_id",
									},
									map[string]any{
										"lit": "vpc_endpoints",
									},
									map[string]any{
										"var": "vpc_endpoint_id",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
									"vpc",
									"region",
									"{region_id}",
									"vpc_endpoints",
									"{vpc_endpoint_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "region_id",
											"orig": "region_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "vpc_endpoint_id",
											"orig": "vpc_endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"region_id",
										"vpc_endpoint_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.region",
							"$.main.kit.entity.vpc_endpoint",
						},
					},
				},
			},
			"organization_invitation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "Email of the invited user",
						"format": "email",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The invitation ID.",
						"format": "uuid",
					},
					map[string]any{
						"name": "invitations",
						"title": "Invitations",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of pending invitations for the organization.",
					},
					map[string]any{
						"name": "invited_at",
						"title": "Invited At",
						"type": "`$STRING`",
						"req": true,
						"short": "Timestamp when the invitation was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "invited_by",
						"title": "Invited By",
						"type": "`$STRING`",
						"req": true,
						"short": "UUID for the user_id who extended the invitation",
						"format": "uuid",
					},
					map[string]any{
						"name": "org_id",
						"title": "Org Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization id as it is stored in Neon",
					},
					map[string]any{
						"name": "role",
						"title": "Role",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization member's role.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "organization_invitation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/organizations/{org_id}/invitations",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "invitations",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
									"invitations",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{org_id}/invitations",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "invitations",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
									"invitations",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.invitations`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"presign": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "content_type",
						"title": "Content Type",
						"type": "`$STRING`",
						"short": "The `Content-Type` to bind into the signed request.",
					},
					map[string]any{
						"name": "expires_at",
						"title": "Expires At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the presigned URL stops being valid.",
						"format": "date-time",
					},
					map[string]any{
						"name": "expires_in_seconds",
						"title": "Expires In Seconds",
						"type": "`$INTEGER`",
						"short": "How long the presigned URL stays valid, in seconds.",
						"format": "int64",
					},
					map[string]any{
						"name": "headers",
						"title": "Headers",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Headers the caller MUST send verbatim on the request (e.g.",
					},
					map[string]any{
						"name": "method",
						"title": "Method",
						"type": "`$STRING`",
						"req": true,
						"short": "The HTTP method to use against `url`: `PUT` for an upload, `GET` for a download.",
					},
					map[string]any{
						"name": "operation",
						"title": "Operation",
						"type": "`$STRING`",
						"req": true,
						"short": "The transfer direction.",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The presigned URL.",
					},
				},
				"name": "presign",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/presign",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "buckets",
									},
									map[string]any{
										"var": "bucket_id",
									},
									map[string]any{
										"lit": "objects",
									},
									map[string]any{
										"var": "object_key",
									},
									map[string]any{
										"lit": "presign",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"buckets",
									"{bucket_id}",
									"objects",
									"{object_key}",
									"presign",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"bucket_name": "bucket_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "bucket_id",
											"orig": "bucket_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "object_key",
											"orig": "object_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"bucket_id",
										"object_key",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
							"$.main.kit.entity.bucket",
						},
					},
				},
			},
			"project": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active_time",
						"title": "Active Time",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Control plane observed endpoints of this project being active this amount of wall-clock time.",
						"format": "int64",
					},
					map[string]any{
						"name": "active_time_seconds",
						"title": "Active Time Seconds",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Seconds.",
						"format": "int64",
					},
					map[string]any{
						"name": "branch_logical_size_limit",
						"title": "Branch Logical Size Limit",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The logical size limit for a branch.",
						"format": "int64",
					},
					map[string]any{
						"name": "branch_logical_size_limit_bytes",
						"title": "Branch Logical Size Limit Bytes",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The logical size limit for a branch.",
						"format": "int64",
					},
					map[string]any{
						"name": "compute_last_active_at",
						"title": "Compute Last Active At",
						"type": "`$STRING`",
						"short": "The most recent time when any endpoint of this project was active.",
						"format": "date-time",
					},
					map[string]any{
						"name": "compute_time_seconds",
						"title": "Compute Time Seconds",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Seconds.",
						"format": "int64",
					},
					map[string]any{
						"name": "consumption_period_end",
						"title": "Consumption Period End",
						"type": "`$STRING`",
						"req": true,
						"short": "A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period.",
						"format": "date-time",
					},
					map[string]any{
						"name": "consumption_period_start",
						"title": "Consumption Period Start",
						"type": "`$STRING`",
						"req": true,
						"short": "A date-time indicating when Neon Cloud started measuring consumption for current consumption period.",
						"format": "date-time",
					},
					map[string]any{
						"name": "cpu_used_sec",
						"title": "Cpu Used Sec",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Deprecated.",
						"deprecated": true,
						"format": "int64",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the project was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "creation_source",
						"title": "Creation Source",
						"type": "`$STRING`",
						"req": true,
						"short": "The project creation source",
					},
					map[string]any{
						"name": "data_storage_bytes_hour",
						"title": "Data Storage Bytes Hour",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Bytes-Hour.",
						"format": "int64",
					},
					map[string]any{
						"name": "data_transfer_bytes",
						"title": "Data Transfer Bytes",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Bytes.",
						"format": "int64",
					},
					map[string]any{
						"name": "default_endpoint_settings",
						"title": "Default Endpoint Settings",
						"type": "`$OBJECT`",
						"short": "A collection of settings for a Neon endpoint",
					},
					map[string]any{
						"name": "deleted_at",
						"title": "Deleted At",
						"type": "`$STRING`",
						"short": "A timestamp indicating when the project was deleted",
						"format": "date-time",
					},
					map[string]any{
						"name": "effective_project_permission",
						"title": "Effective Project Permission",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hipaa_enabled_at",
						"title": "Hipaa Enabled At",
						"type": "`$STRING`",
						"short": "A timestamp indicating when HIPAA was enabled for this project",
						"format": "date-time",
					},
					map[string]any{
						"name": "history_retention_seconds",
						"title": "History Retention Seconds",
						"type": "`$INTEGER`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"short": "The number of seconds to retain the shared history for all branches in this project.",
						"format": "int32",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Neon project ID.",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
						"short": "Human-readable name for the VPC endpoint assignment, used to identify it within the organization.",
					},
					map[string]any{
						"name": "maintenance_scheduled_for",
						"title": "Maintenance Scheduled For",
						"type": "`$STRING`",
						"short": "A timestamp indicating when project update begins.",
						"format": "date-time",
					},
					map[string]any{
						"name": "maintenance_starts_at",
						"title": "Maintenance Starts At",
						"type": "`$STRING`",
						"short": "A timestamp indicating when project maintenance begins.",
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The project name",
					},
					map[string]any{
						"name": "org_id",
						"title": "Org Id",
						"type": "`$STRING`",
						"short": "The Neon organization ID.",
					},
					map[string]any{
						"name": "org_name",
						"title": "Org Name",
						"type": "`$STRING`",
						"short": "Name of the organization that owns the project.",
					},
					map[string]any{
						"name": "owner",
						"title": "Owner",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Ownership details for the project, including the owner's name and email.",
					},
					map[string]any{
						"name": "owner_id",
						"title": "Owner Id",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the organization that owns the project.",
					},
					map[string]any{
						"name": "pg_version",
						"title": "Pg Version",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The major Postgres version number.",
					},
					map[string]any{
						"name": "platform_id",
						"title": "Platform Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The cloud platform identifier.",
					},
					map[string]any{
						"name": "project",
						"title": "Project",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Configuration for the new project, including name, region, and Postgres compute and storage settings.",
					},
					map[string]any{
						"name": "provisioner",
						"title": "Provisioner",
						"type": "`$STRING`",
						"req": true,
						"short": "Compute provisioner.",
					},
					map[string]any{
						"name": "proxy_host",
						"title": "Proxy Host",
						"type": "`$STRING`",
						"req": true,
						"short": "The proxy host for the project.",
					},
					map[string]any{
						"name": "quota_reset_at",
						"title": "Quota Reset At",
						"type": "`$STRING`",
						"short": "Deprecated.",
						"deprecated": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "recoverable_until",
						"title": "Recoverable Until",
						"type": "`$STRING`",
						"short": "A timestamp indicating the project will be recoverable until this date and time.",
						"format": "date-time",
					},
					map[string]any{
						"name": "region_id",
						"title": "Region Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`).",
					},
					map[string]any{
						"name": "settings",
						"title": "Settings",
						"type": "`$OBJECT`",
						"short": "Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`.",
					},
					map[string]any{
						"name": "store_passwords",
						"title": "Store Passwords",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether or not passwords are stored for roles in the Neon project.",
					},
					map[string]any{
						"name": "synthetic_storage_size",
						"title": "Synthetic Storage Size",
						"type": "`$INTEGER`",
						"short": "The current space occupied by the project in Postgres storage, in bytes.",
						"format": "int64",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the project was last updated",
						"format": "date-time",
					},
					map[string]any{
						"name": "written_data_bytes",
						"title": "Written Data Bytes",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Bytes.",
						"format": "int64",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "project",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "vpc_endpoints",
									},
									map[string]any{
										"var": "vpc_endpoint_id",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
									"vpc_endpoints",
									"{vpc_endpoint_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "vpc_endpoint_id",
											"orig": "vpc_endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"vpc_endpoint_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branch_anonymized",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "branch_anonymized",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
									"branch_anonymized",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "branch_anonymized",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
								},
								"parts": []any{
									"projects",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"project": "`reqdata`",
									},
									"res": "`body.project`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
								},
								"parts": []any{
									"projects",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.projects`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "org_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "recoverable",
											"orig": "recoverable",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeout",
											"orig": "timeout",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"org_id",
										"recoverable",
										"search",
										"timeout",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/advisors",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "advisors",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
									"advisors",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.issues`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "database_name",
											"orig": "database_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_severity",
											"orig": "min_severity",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "advisor",
									"exist": []any{
										"branch_id",
										"category",
										"database_name",
										"id",
										"min_severity",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/shared",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"lit": "shared",
									},
								},
								"parts": []any{
									"projects",
									"shared",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.projects`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timeout",
											"orig": "timeout",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "shared",
									"exist": []any{
										"cursor",
										"limit",
										"search",
										"timeout",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.project`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"project": "`reqdata`",
									},
									"res": "`body.project`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "vpc_endpoints",
									},
									map[string]any{
										"var": "vpc_endpoint_id",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
									"vpc_endpoints",
									"{vpc_endpoint_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "vpc_endpoint_id",
											"orig": "vpc_endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"vpc_endpoint_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.project`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/projects/{project_id}/transfer_requests/{request_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "transfer_requests",
									},
									map[string]any{
										"var": "request_id",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
									"transfer_requests",
									"{request_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "request_id",
											"orig": "request_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"request_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.vpc_endpoint",
						},
					},
				},
			},
			"project_branch_log_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fields",
						"title": "Fields",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint.",
					},
				},
				"name": "project_branch_log_field",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/logs/fields",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "fields",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"logs",
									"fields",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.fields`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"project_branch_log_field_value": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "is_truncated",
						"title": "Is Truncated",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached.",
					},
					map[string]any{
						"name": "values",
						"title": "Values",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "project_branch_log_field_value",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/logs/fields/{field_name}/values",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "fields",
									},
									map[string]any{
										"var": "field_name",
									},
									map[string]any{
										"lit": "values",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"logs",
									"fields",
									"{field_name}",
									"values",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.values`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "field_name",
											"orig": "field_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "end_time",
											"orig": "end_time",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
											"kind": "query",
											"example": "1h",
										},
										map[string]any{
											"name": "source",
											"orig": "source",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_time",
											"orig": "start_time",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"end_time",
										"field_name",
										"limit",
										"project_id",
										"since",
										"source",
										"start_time",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"project_branch_logs_query": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "body_contains",
						"title": "Body Contains",
						"type": "`$STRING`",
						"short": "Match records whose rendered `message` contains this case-sensitive substring.",
					},
					map[string]any{
						"name": "cursor",
						"title": "Cursor",
						"type": "`$STRING`",
						"short": "Opaque pagination cursor returned as `next_cursor` by a previous call.",
					},
					map[string]any{
						"name": "end_time",
						"title": "End Time",
						"type": "`$STRING`",
						"short": "Exclusive end of the query window.",
						"format": "date-time",
					},
					map[string]any{
						"name": "is_truncated",
						"title": "Is Truncated",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "True when more records matched than were returned.",
					},
					map[string]any{
						"name": "limit",
						"title": "Limit",
						"type": "`$INTEGER`",
						"short": "Maximum number of log records to return per page.",
					},
					map[string]any{
						"name": "logql",
						"title": "Logql",
						"type": "`$STRING`",
						"short": "Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream.",
					},
					map[string]any{
						"name": "logs",
						"title": "Logs",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "minimum_severity",
						"title": "Minimum Severity",
						"type": "`$STRING`",
						"short": "An OpenTelemetry severity level.",
					},
					map[string]any{
						"name": "next_cursor",
						"title": "Next Cursor",
						"type": "`$STRING`",
						"short": "Pagination cursor to pass as `cursor` on the next request.",
					},
					map[string]any{
						"name": "scope_name",
						"title": "Scope Name",
						"type": "`$STRING`",
						"short": "Match the OpenTelemetry instrumentation scope name exactly.",
					},
					map[string]any{
						"name": "service_name",
						"title": "Service Name",
						"type": "`$STRING`",
						"short": "Match the OpenTelemetry `service.name` resource attribute exactly.",
					},
					map[string]any{
						"name": "severity_text",
						"title": "Severity Text",
						"type": "`$STRING`",
						"short": "Match the OpenTelemetry severity text exactly.",
					},
					map[string]any{
						"name": "since",
						"title": "Since",
						"type": "`$ANY`",
						"short": "Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted.",
					},
					map[string]any{
						"name": "sort_order",
						"title": "Sort Order",
						"type": "`$STRING`",
						"short": "Order matching records by timestamp.",
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$STRING`",
						"short": "The Neon service that emitted the log record.",
					},
					map[string]any{
						"name": "start_time",
						"title": "Start Time",
						"type": "`$STRING`",
						"short": "Inclusive beginning of the query window.",
						"format": "date-time",
					},
					map[string]any{
						"name": "trace_id",
						"title": "Trace Id",
						"type": "`$STRING`",
						"short": "Match records associated with this OpenTelemetry trace ID.",
					},
				},
				"name": "project_branch_logs_query",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/logs/query",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "query",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"logs",
									"query",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"project_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "effective_project_permission",
						"title": "Effective Project Permission",
						"type": "`$STRING`",
						"short": "The caller's effective permission for a project when per-project permissions are enabled.",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"short": "Email address of the user who has been granted access to the project.",
						"format": "email",
					},
					map[string]any{
						"name": "explicit_project_permission",
						"title": "Explicit Project Permission",
						"type": "`$STRING`",
						"short": "The caller's effective permission for a project when per-project permissions are enabled.",
					},
					map[string]any{
						"name": "grant_source",
						"title": "Grant Source",
						"type": "`$STRING`",
						"short": "How a member's project access is granted.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "member_id",
						"title": "Member Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The organization member ID.",
						"format": "uuid",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The user's display name.",
					},
					map[string]any{
						"name": "org_default_project_permission",
						"title": "Org Default Project Permission",
						"type": "`$STRING`",
						"short": "The caller's effective permission for a project when per-project permissions are enabled.",
					},
					map[string]any{
						"name": "org_role",
						"title": "Org Role",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization-level role used by project member role management.",
					},
					map[string]any{
						"name": "project_role",
						"title": "Project Role",
						"type": "`$STRING`",
						"short": "Per-project role.",
					},
					map[string]any{
						"name": "user_id",
						"title": "User Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The user ID for the organization member.",
						"format": "uuid",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "project_member",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/members",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.project_members`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"id",
										"limit",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"project_member_role": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "credential_rotation_recommended",
						"title": "Credential Rotation Recommended",
						"type": "`$BOOLEAN`",
						"short": "Hint that database credentials may need rotation after the role change.",
					},
					map[string]any{
						"name": "effective_project_permission",
						"title": "Effective Project Permission",
						"type": "`$STRING`",
						"short": "The caller's effective permission for a project when per-project permissions are enabled.",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"short": "Email address of the user who has been granted access to the project.",
						"format": "email",
					},
					map[string]any{
						"name": "explicit_project_permission",
						"title": "Explicit Project Permission",
						"type": "`$STRING`",
						"short": "The caller's effective permission for a project when per-project permissions are enabled.",
					},
					map[string]any{
						"name": "member_id",
						"title": "Member Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The user's display name.",
					},
					map[string]any{
						"name": "org_api_key_rotation_recommended",
						"title": "Org Api Key Rotation Recommended",
						"type": "`$BOOLEAN`",
						"short": "Hint that project-scoped org API keys created by the target user may need rotation.",
					},
					map[string]any{
						"name": "org_default_project_permission",
						"title": "Org Default Project Permission",
						"type": "`$STRING`",
						"short": "The caller's effective permission for a project when per-project permissions are enabled.",
					},
					map[string]any{
						"name": "org_role",
						"title": "Org Role",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization-level role used by project member role management.",
					},
					map[string]any{
						"name": "project_id",
						"title": "Project Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "project_role",
						"title": "Project Role",
						"type": "`$STRING`",
						"short": "The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback.",
					},
					map[string]any{
						"name": "role",
						"title": "Role",
						"type": "`$STRING`",
						"req": true,
						"short": "Per-project role.",
					},
					map[string]any{
						"name": "user_id",
						"title": "User Id",
						"type": "`$STRING`",
						"req": true,
						"format": "uuid",
					},
				},
				"name": "project_member_role",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/members/{member_id}/role",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "role",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"members",
									"{member_id}",
									"role",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "confirm_self_lockout",
											"orig": "confirm_self_lockout",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"confirm_self_lockout",
										"member_id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/projects/{project_id}/members/{member_id}/role",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "role",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"members",
									"{member_id}",
									"role",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "confirm_self_demotion",
											"orig": "confirm_self_demotion",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"confirm_self_demotion",
										"member_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.member",
						},
					},
				},
			},
			"project_permission": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "Email address of the user to grant project access to.",
						"format": "email",
					},
					map[string]any{
						"name": "granted_at",
						"title": "Granted At",
						"type": "`$STRING`",
						"req": true,
						"short": "Timestamp when the permission was granted.",
						"format": "date-time",
					},
					map[string]any{
						"name": "granted_to_email",
						"title": "Granted To Email",
						"type": "`$STRING`",
						"req": true,
						"short": "Email address of the user who has been granted access to the project.",
						"format": "email",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The project permission's ID.",
					},
					map[string]any{
						"name": "revoked_at",
						"title": "Revoked At",
						"type": "`$STRING`",
						"short": "Timestamp when the permission was revoked.",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "project_permission",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/permissions",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "permissions",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
									"permissions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/permissions",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "permissions",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
									"permissions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.project_permissions`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/permissions/{permission_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "permissions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"permissions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"permission_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "permission_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
					},
				},
			},
			"project_recover": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "branches",
						"title": "Branches",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Branches in the project.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "project",
						"title": "Project",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Full details of the project, including configuration, consumption metrics, and ownership.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "project_recover",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/recover",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "recover",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
									"recover",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"project_transfer_request": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ttl_seconds",
						"title": "Ttl Seconds",
						"type": "`$INTEGER`",
						"short": "Number of seconds the transfer request stays valid before it expires.",
						"format": "int64",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "project_transfer_request",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/transfer_requests",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "transfer_requests",
									},
								},
								"parts": []any{
									"projects",
									"{id}",
									"transfer_requests",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"region": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "default",
						"title": "Default",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "True if this region is selected by default when no region is specified during project creation.",
					},
					map[string]any{
						"name": "geo_lat",
						"title": "Geo Lat",
						"type": "`$STRING`",
						"req": true,
						"short": "The geographical latitude (approximate) for the region.",
					},
					map[string]any{
						"name": "geo_long",
						"title": "Geo Long",
						"type": "`$STRING`",
						"req": true,
						"short": "The geographical longitude (approximate) for the region.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "A short description of the region.",
					},
					map[string]any{
						"name": "region_id",
						"title": "Region Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`).",
					},
				},
				"name": "region",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/regions",
								"segments": []any{
									map[string]any{
										"lit": "regions",
									},
								},
								"parts": []any{
									"regions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.regions`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "org_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"org_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"role": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "authentication_method",
						"title": "Authentication Method",
						"type": "`$STRING`",
						"short": "Authentication method configured for this role: `password`, `oauth`, or `no_login`.",
					},
					map[string]any{
						"name": "branch_id",
						"title": "Branch Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the branch this role belongs to.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the role was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Postgres role name within the branch.",
					},
					map[string]any{
						"name": "password",
						"title": "Password",
						"type": "`$STRING`",
						"short": "The role password",
					},
					map[string]any{
						"name": "protected",
						"title": "Protected",
						"type": "`$BOOLEAN`",
						"short": "Whether or not the role is system-protected",
					},
					map[string]any{
						"name": "role",
						"title": "Role",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Properties of the role to create.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "A timestamp indicating when the role was last updated",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "role",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/roles",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "roles",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"roles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"role": "`reqdata`",
									},
									"res": "`body.role`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/roles",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "roles",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"roles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.roles`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"roles",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"role_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.role`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "role_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"roles",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"role_name": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.role`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "role_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"role_operation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "operations",
						"title": "Operations",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "role",
						"title": "Role",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Role details for the requested database role.",
					},
				},
				"name": "role_operation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "role_name",
									},
									map[string]any{
										"lit": "reset_password",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"roles",
									"{role_name}",
									"reset_password",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "role_name",
											"orig": "role_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
										"role_name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
							"$.main.kit.entity.role",
						},
					},
				},
			},
			"role_password": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "password",
						"title": "Password",
						"type": "`$STRING`",
						"req": true,
						"short": "The role password",
					},
				},
				"name": "role_password",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reveal_password",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "role_name",
									},
									map[string]any{
										"lit": "reveal_password",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"roles",
									"{role_name}",
									"reveal_password",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "role_name",
											"orig": "role_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
										"role_name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
							"$.main.kit.entity.role",
						},
					},
				},
			},
			"send_neon_auth_test_email": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "error_message",
						"title": "Error Message",
						"type": "`$STRING`",
						"short": "The error message from the email server.",
					},
					map[string]any{
						"name": "host",
						"title": "Host",
						"type": "`$STRING`",
						"req": true,
						"short": "Hostname of the email server.",
					},
					map[string]any{
						"name": "password",
						"title": "Password",
						"type": "`$STRING`",
						"req": true,
						"short": "Password for authenticating with the SMTP server.",
					},
					map[string]any{
						"name": "port",
						"title": "Port",
						"type": "`$INTEGER`",
						"req": true,
						"short": "TCP port of the SMTP server.",
					},
					map[string]any{
						"name": "recipient_email",
						"title": "Recipient Email",
						"type": "`$STRING`",
						"req": true,
						"short": "The email address to send the test email to.",
						"format": "email",
					},
					map[string]any{
						"name": "sender_email",
						"title": "Sender Email",
						"type": "`$STRING`",
						"req": true,
						"short": "Email address used as the From address on outgoing auth emails.",
					},
					map[string]any{
						"name": "sender_name",
						"title": "Sender Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Display name shown as the sender in outgoing emails.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the test email was sent successfully.",
					},
					map[string]any{
						"name": "username",
						"title": "Username",
						"type": "`$STRING`",
						"req": true,
						"short": "Username for authenticating with the SMTP server.",
					},
				},
				"name": "send_neon_auth_test_email",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/email_provider/test",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "email_provider",
									},
									map[string]any{
										"lit": "test",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"email_provider",
									"test",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/send_test_email",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "send_test_email",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"send_test_email",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"snapshot": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Timestamp when the snapshot was created, in RFC 3339 format (UTC).",
					},
					map[string]any{
						"name": "diff_size",
						"title": "Diff Size",
						"type": "`$INTEGER`",
						"short": "Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage.",
						"format": "int64",
					},
					map[string]any{
						"name": "expires_at",
						"title": "Expires At",
						"type": "`$STRING`",
						"short": "RFC 3339 timestamp when the snapshot expires and is eligible for deletion.",
					},
					map[string]any{
						"name": "full_size",
						"title": "Full Size",
						"type": "`$INTEGER`",
						"short": "Full logical size of the snapshot in bytes at the time it was taken.",
						"format": "int64",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The snapshot ID.",
					},
					map[string]any{
						"name": "lsn",
						"title": "Lsn",
						"type": "`$STRING`",
						"short": "WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`).",
					},
					map[string]any{
						"name": "manual",
						"title": "Manual",
						"type": "`$BOOLEAN`",
						"short": "True if the snapshot was created manually rather than by a schedule.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Human-readable label for the snapshot.",
					},
					map[string]any{
						"name": "operations",
						"title": "Operations",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"short": "Snapshot resource ID, unique within the project.",
					},
					map[string]any{
						"name": "snapshot",
						"title": "Snapshot",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Fields to update on the snapshot.",
					},
					map[string]any{
						"name": "source_branch_id",
						"title": "Source Branch Id",
						"type": "`$STRING`",
						"short": "Branch from which this snapshot was created.",
					},
					map[string]any{
						"name": "timestamp",
						"title": "Timestamp",
						"type": "`$STRING`",
						"short": "Point in time captured by the snapshot, in RFC 3339 format (UTC).",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "snapshot",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/snapshot",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "snapshot",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"snapshot",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.snapshot`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "expires_at",
											"orig": "expires_at",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2025-08-05T22:00:00Z",
										},
										map[string]any{
											"name": "lsn",
											"orig": "lsn",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "slug",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "timestamp",
											"orig": "timestamp",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2025-08-05T22:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"expires_at",
										"lsn",
										"name",
										"project_id",
										"slug",
										"timestamp",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/snapshots/{snapshot_id}/restore",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "snapshots",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "restore",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"snapshots",
									"{id}",
									"restore",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"snapshot_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "snapshot_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "restore",
									"exist": []any{
										"id",
										"name",
										"project_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/snapshots",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "snapshots",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"snapshots",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.snapshots`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/projects/{project_id}/snapshots/{snapshot_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "snapshots",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"snapshots",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"snapshot_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "snapshot_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/snapshots/{snapshot_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "snapshots",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"snapshots",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"snapshot_id": "id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"snapshot": "`reqdata`",
									},
									"res": "`body.snapshot`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "snapshot_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
						},
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"spending_limit": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "spending_limit_cents",
						"title": "Spending Limit Cents",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Monthly spending cap in cents.",
						"format": "int64",
					},
				},
				"name": "spending_limit",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{org_id}/billing/spending_limit",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "spending_limit",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"billing",
									"spending_limit",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/organizations/{org_id}/billing/spending_limit",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "billing",
									},
									map[string]any{
										"lit": "spending_limit",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"billing",
									"spending_limit",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"trigger": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "triggers",
						"title": "Triggers",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "trigger",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/projects/{project_id}/branches/{branch_id}/triggers",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "triggers",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"triggers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.trigger`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/triggers",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "triggers",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"triggers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.triggers`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "triggers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"triggers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"trigger_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.trigger`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "trigger_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "triggers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"triggers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"trigger_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.trigger`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "trigger_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"id",
										"project_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"update_neon_auth_user_role": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "ID of the updated user",
					},
					map[string]any{
						"name": "roles",
						"title": "Roles",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Roles to assign to the user in the Neon Auth (Better Auth) directory.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "update_neon_auth_user_role",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}/role",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "branches",
									},
									map[string]any{
										"var": "branch_id",
									},
									map[string]any{
										"lit": "auth",
									},
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "user_id",
									},
									map[string]any{
										"lit": "role",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"branches",
									"{branch_id}",
									"auth",
									"users",
									"{user_id}",
									"role",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"auth_user_id": "user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "branch_id",
											"orig": "branch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "user_id",
											"orig": "auth_user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"branch_id",
										"project_id",
										"user_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.project",
							"$.main.kit.entity.branch",
						},
					},
				},
			},
			"vpc_endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "example_restricted_projects",
						"title": "Example Restricted Projects",
						"type": "`$ARRAY`",
						"req": true,
						"short": "A list of example projects that are restricted to use this VPC endpoint.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"req": true,
						"short": "A descriptive label for the VPC endpoint",
					},
					map[string]any{
						"name": "num_restricted_projects",
						"title": "Num Restricted Projects",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The number of projects that are restricted to use this VPC endpoint.",
					},
					map[string]any{
						"name": "region_id",
						"title": "Region Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The region where the VPC endpoint is located",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
						"short": "The current state of the VPC endpoint.",
					},
					map[string]any{
						"name": "vpc_endpoint_id",
						"title": "Vpc Endpoint Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Cloud provider identifier for the VPC endpoint.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "vpc_endpoint",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "vpc",
									},
									map[string]any{
										"lit": "region",
									},
									map[string]any{
										"var": "region_id",
									},
									map[string]any{
										"lit": "vpc_endpoints",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"vpc",
									"region",
									"{region_id}",
									"vpc_endpoints",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoints`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "region_id",
											"orig": "region_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
										"region_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{org_id}/vpc/vpc_endpoints",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "vpc",
									},
									map[string]any{
										"lit": "vpc_endpoints",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"vpc",
									"vpc_endpoints",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoints`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/projects/{project_id}/vpc_endpoints",
								"segments": []any{
									map[string]any{
										"lit": "projects",
									},
									map[string]any{
										"var": "project_id",
									},
									map[string]any{
										"lit": "vpc_endpoints",
									},
								},
								"parts": []any{
									"projects",
									"{project_id}",
									"vpc_endpoints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoints`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "project_id",
											"orig": "project_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"project_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "vpc",
									},
									map[string]any{
										"lit": "region",
									},
									map[string]any{
										"var": "region_id",
									},
									map[string]any{
										"lit": "vpc_endpoints",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"vpc",
									"region",
									"{region_id}",
									"vpc_endpoints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"org_id": "organization_id",
										"vpc_endpoint_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "vpc_endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "organization_id",
											"orig": "org_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "region_id",
											"orig": "region_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
										"region_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
						[]any{
							"$.main.kit.entity.project",
						},
						[]any{
							"$.main.kit.entity.organization",
							"$.main.kit.entity.region",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
