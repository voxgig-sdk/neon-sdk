
import { BaseFeature } from './feature/base/BaseFeature'
import { DebugFeature } from './feature/debug/DebugFeature'
import { IdempotencyFeature } from './feature/idempotency/IdempotencyFeature'
import { MetricsFeature } from './feature/metrics/MetricsFeature'
import { PagingFeature } from './feature/paging/PagingFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   debug: DebugFeature,
 idempotency: IdempotencyFeature,
 metrics: MetricsFeature,
 paging: PagingFeature,
 ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Neon',
        slug: "neon",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     debug:     {
      "options": {
        "active": false,
        "max": 100,
        "redact": [
          "authorization",
          "cookie",
          "set-cookie",
          "api-key",
          "apikey",
          "x-api-key",
          "idempotency-key"
        ]
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "onEntry": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 idempotency:     {
      "options": {
        "active": false,
        "header": "Idempotency-Key",
        "methods": [
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "ops": [
          "create",
          "update",
          "remove"
        ]
      },
      "optspec": {
        "keygen": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 metrics:     {
      "options": {
        "active": false
      },
      "optspec": {
        "now": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 paging:     {
      "options": {
        "active": false,
        "afterVar": "after",
        "cursorParam": "cursor",
        "firstVar": "first",
        "limitParam": "limit",
        "pageParam": "page",
        "startPage": 1
      },
      "optspec": {
        "limit": "`$NUMBER`",
        "ops": "`$LIST`"
      },
      "strict": false,
      "transport": "none"
    },
 ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://console.neon.tech/api/v2",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        anonymize: {
        },
  
        anonymized_branch_status: {
        },
  
        api_key: {
        },
  
        auth: {
        },
  
        auth_legacy: {
        },
  
        available_preload_library: {
        },
  
        backup_schedule: {
        },
  
        branch: {
        },
  
        branch_ai_gateway: {
        },
  
        branch_operation: {
        },
  
        branch_schema: {
        },
  
        branch_schema_compare: {
        },
  
        branch_storage: {
        },
  
        bucket: {
        },
  
        bucket_objects_list: {
        },
  
        connection_uri: {
        },
  
        consumption: {
        },
  
        create_credential: {
        },
  
        credential: {
        },
  
        current_user_info: {
        },
  
        custom_domain: {
        },
  
        data_api: {
        },
  
        database: {
        },
  
        email_provider: {
        },
  
        email_server: {
        },
  
        empty: {
        },
  
        endpoint: {
        },
  
        endpoint_operation: {
        },
  
        function: {
        },
  
        jwk: {
        },
  
        masking_rule: {
        },
  
        member: {
        },
  
        neon_auth_allow_localhost: {
        },
  
        neon_auth_config: {
        },
  
        neon_auth_create_integration: {
        },
  
        neon_auth_create_new_user: {
        },
  
        neon_auth_email_and_password_config: {
        },
  
        neon_auth_email_server_config: {
        },
  
        neon_auth_integration: {
        },
  
        neon_auth_magic_link_config: {
        },
  
        neon_auth_oauth_provider: {
        },
  
        neon_auth_organization_config: {
        },
  
        neon_auth_phone_number_config: {
        },
  
        neon_auth_plugin_config: {
        },
  
        neon_auth_redirect_uri_whitelist_domain: {
        },
  
        neon_auth_transfer_auth_provider_project: {
        },
  
        neon_auth_webhook_config: {
        },
  
        neon_function: {
        },
  
        neon_function_deployment: {
        },
  
        operation: {
        },
  
        org_api_key_create: {
        },
  
        org_api_key_revoke: {
        },
  
        org_api_keys_list_response_item: {
        },
  
        organization: {
        },
  
        organization_invitation: {
        },
  
        presign: {
        },
  
        project: {
        },
  
        project_branch_log_field: {
        },
  
        project_branch_log_field_value: {
        },
  
        project_branch_logs_query: {
        },
  
        project_member: {
        },
  
        project_member_role: {
        },
  
        project_permission: {
        },
  
        project_recover: {
        },
  
        project_transfer_request: {
        },
  
        region: {
        },
  
        role: {
        },
  
        role_operation: {
        },
  
        role_password: {
        },
  
        send_neon_auth_test_email: {
        },
  
        snapshot: {
        },
  
        spending_limit: {
        },
  
        trigger: {
        },
  
        update_neon_auth_user_role: {
        },
  
        vpc_endpoint: {
        },
  
    }
  }


  entity = {
    "anonymize": {
      "fields": [
        {
          "name": "completed_at",
          "title": "Completed At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the latest anonymization attempt completed.",
          "format": "date-time"
        },
        {
          "name": "masked_columns",
          "title": "Masked Columns",
          "type": "`$INTEGER`",
          "short": "Number of columns that had masking rules applied during the attempt."
        },
        {
          "name": "started_at",
          "title": "Started At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the latest anonymization attempt started.",
          "format": "date-time"
        },
        {
          "name": "triggered_by",
          "title": "Triggered By",
          "type": "`$STRING`",
          "short": "UUID of the user who triggered the latest anonymization attempt.",
          "format": "uuid"
        },
        {
          "name": "triggered_by_username",
          "title": "Triggered By Username",
          "type": "`$STRING`",
          "short": "Username of the user who triggered the latest anonymization attempt."
        }
      ],
      "name": "anonymize",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/anonymize",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "anonymize"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "anonymize"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.last_run`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "anonymized_branch_status": {
      "fields": [
        {
          "name": "completed_at",
          "title": "Completed At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the latest anonymization attempt completed.",
          "format": "date-time"
        },
        {
          "name": "masked_columns",
          "title": "Masked Columns",
          "type": "`$INTEGER`",
          "short": "Number of columns that had masking rules applied during the attempt."
        },
        {
          "name": "started_at",
          "title": "Started At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the latest anonymization attempt started.",
          "format": "date-time"
        },
        {
          "name": "triggered_by",
          "title": "Triggered By",
          "type": "`$STRING`",
          "short": "UUID of the user who triggered the latest anonymization attempt.",
          "format": "uuid"
        },
        {
          "name": "triggered_by_username",
          "title": "Triggered By Username",
          "type": "`$STRING`",
          "short": "Username of the user who triggered the latest anonymization attempt."
        }
      ],
      "name": "anonymized_branch_status",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/anonymized_status",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "anonymized_status"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "anonymized_status"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.last_run`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "api_key": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the API key was created",
          "format": "date-time"
        },
        {
          "name": "created_by",
          "title": "Created By",
          "type": "`$STRING`",
          "req": true,
          "short": "ID of the user who created this API key",
          "format": "uuid"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The API key's unique numeric ID.",
          "format": "int64"
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "req": true,
          "short": "The generated 64-bit token required to access the Neon API"
        },
        {
          "name": "key_name",
          "title": "Key Name",
          "type": "`$STRING`",
          "req": true,
          "short": "A user-specified API key name."
        },
        {
          "name": "last_used_at",
          "title": "Last Used At",
          "type": "`$STRING`",
          "short": "A timestamp indicating when the API was last used",
          "format": "date-time"
        },
        {
          "name": "last_used_from_addr",
          "title": "Last Used From Addr",
          "type": "`$STRING`",
          "req": true,
          "short": "The IP address from which the API key was last used"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The user-specified API key name"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "api_key",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/api_keys",
              "segments": [
                {
                  "lit": "api_keys"
                }
              ],
              "parts": [
                "api_keys"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api_keys",
              "segments": [
                {
                  "lit": "api_keys"
                }
              ],
              "parts": [
                "api_keys"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/api_keys/{key_id}",
              "segments": [
                {
                  "lit": "api_keys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api_keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "key_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "key_id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "auth": {
      "fields": [
        {
          "name": "account_id",
          "title": "Account Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The ID of the account associated with this authentication record."
        },
        {
          "name": "auth_data",
          "title": "Auth Data",
          "type": "`$STRING`"
        },
        {
          "name": "auth_method",
          "title": "Auth Method",
          "type": "`$STRING`",
          "req": true,
          "short": "Authentication method used for the request: - `keycloak`: Keycloak identity provider authentication."
        }
      ],
      "name": "auth",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/domains",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "domain",
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/auth",
              "segments": [
                {
                  "lit": "auth"
                }
              ],
              "parts": [
                "auth"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "auth_user_id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "users",
                "{auth_user_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "auth_user_id",
                    "orig": "auth_user_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "auth_user_id",
                  "branch_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "oauth_providers"
                },
                {
                  "var": "oauth_provider_id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "oauth_providers",
                "{oauth_provider_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "oauth_provider_id",
                    "orig": "oauth_provider_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "oauth_provider_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/domains",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "domain",
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "auth_legacy": {
      "fields": [
        {
          "name": "auth_provider",
          "title": "Auth Provider",
          "type": "`$STRING`",
          "req": true,
          "short": "Authentication provider integrated with this Neon Auth configuration."
        },
        {
          "name": "domain",
          "title": "Domain",
          "type": "`$STRING`",
          "req": true,
          "short": "URI to add to the redirect URI allowlist for the auth provider.",
          "format": "uri"
        }
      ],
      "name": "auth_legacy",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/auth/domains",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/auth/integration/{auth_provider}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "integration"
                },
                {
                  "var": "auth_provider"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "integration",
                "{auth_provider}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "auth_provider",
                    "orig": "auth_provider",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "auth_provider",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/auth/users/{auth_user_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "auth_user_id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "users",
                "{auth_user_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "auth_user_id",
                    "orig": "auth_user_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "auth_user_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/auth/oauth_providers/{oauth_provider_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "oauth_providers"
                },
                {
                  "var": "oauth_provider_id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "oauth_providers",
                "{oauth_provider_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "oauth_provider_id",
                    "orig": "oauth_provider_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "oauth_provider_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/auth/domains",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "available_preload_library": {
      "fields": [
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "req": true,
          "short": "Human-readable explanation of the library's purpose and behavior."
        },
        {
          "name": "is_default",
          "title": "Is Default",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether this library is loaded by default in the `shared_preload_libraries` configuration for new compute endpoints."
        },
        {
          "name": "is_experimental",
          "title": "Is Experimental",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Marks the library as experimental."
        },
        {
          "name": "library_name",
          "title": "Library Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Name of the Postgres shared preload library as it appears in the `shared_preload_libraries` parameter (for example, `pg_stat_statements`)."
        },
        {
          "name": "version",
          "title": "Version",
          "type": "`$STRING`",
          "req": true,
          "short": "Version of the preload library."
        }
      ],
      "name": "available_preload_library",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/available_preload_libraries",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "available_preload_libraries"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "available_preload_libraries"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.libraries`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "backup_schedule": {
      "fields": [
        {
          "name": "day",
          "title": "Day",
          "type": "`$INTEGER`",
          "short": "The day of the week or month to take the snapshot (if applicable)."
        },
        {
          "name": "frequency",
          "title": "Frequency",
          "type": "`$STRING`",
          "req": true,
          "short": "How often to take snapshots."
        },
        {
          "name": "hour",
          "title": "Hour",
          "type": "`$INTEGER`",
          "short": "The hour of the day to take the snapshot (if applicable)."
        },
        {
          "name": "month",
          "title": "Month",
          "type": "`$INTEGER`",
          "short": "The month of the year to take the snapshot (if applicable)."
        },
        {
          "name": "retention_seconds",
          "title": "Retention Seconds",
          "type": "`$INTEGER`",
          "short": "How long to keep a scheduled snapshot (in seconds) before it's automatically deleted."
        }
      ],
      "name": "backup_schedule",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/backup_schedule",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "backup_schedule"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "backup_schedule"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.schedule`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "branch": {
      "fields": [
        {
          "name": "annotation",
          "title": "Annotation",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Annotation data associated with the annotated object."
        },
        {
          "name": "annotations",
          "title": "Annotations",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Map of annotations keyed by resource identifier, where each value contains the annotation data for that resource."
        },
        {
          "name": "branch",
          "title": "Branch",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Branch returned by the request."
        },
        {
          "name": "branches",
          "title": "Branches",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Branches in the project."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`",
          "short": "To paginate the response, issue an initial request with `limit` value."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "branch",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "include_deleted",
                    "orig": "include_deleted",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "example": false
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sort_by",
                    "orig": "sort_by",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "updated_at"
                  },
                  {
                    "name": "sort_order",
                    "orig": "sort_order",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "desc"
                  }
                ]
              },
              "select": {
                "exist": [
                  "cursor",
                  "include_deleted",
                  "limit",
                  "project_id",
                  "search",
                  "sort_by",
                  "sort_order"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{id}"
              ],
              "rename": {
                "param": {
                  "branch_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/count",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "lit": "count"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "count"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "count",
                "exist": [
                  "project_id",
                  "search"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{id}"
              ],
              "rename": {
                "param": {
                  "branch_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{id}"
              ],
              "rename": {
                "param": {
                  "branch_id": "id"
                }
              },
              "transform": {
                "req": {
                  "branch": "`reqdata`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "branch_ai_gateway": {
      "fields": [
        {
          "name": "base_url",
          "title": "Base Url",
          "type": "`$STRING`",
          "req": true,
          "short": "The AI-gateway endpoint root for this branch — an OpenAI-compatible base URL.",
          "format": "uri"
        },
        {
          "name": "enabled",
          "title": "Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Always `true` in 200 responses."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "branch_ai_gateway",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/ai_gateway",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "ai_gateway"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{id}",
                "ai_gateway"
              ],
              "rename": {
                "param": {
                  "branch_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "branch_operation": {
      "fields": [
        {
          "name": "branch",
          "title": "Branch",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Branch returned by the request."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "operations",
          "title": "Operations",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "branch_operation",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/restore",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "restore"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{id}",
                "restore"
              ],
              "rename": {
                "param": {
                  "branch_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "restore",
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/set_as_default",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "set_as_default"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{id}",
                "set_as_default"
              ],
              "rename": {
                "param": {
                  "branch_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "set_as_default",
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "branch_schema": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "tables",
          "title": "Tables",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Tables present in the branch schema."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "branch_schema",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/schema",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "schema"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{id}",
                "schema"
              ],
              "rename": {
                "param": {
                  "branch_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.json`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "db_name",
                    "orig": "db_name",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "lsn",
                    "orig": "lsn",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "timestamp",
                    "orig": "timestamp",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2022-11-30T20:09:48Z"
                  }
                ]
              },
              "select": {
                "exist": [
                  "db_name",
                  "format",
                  "id",
                  "lsn",
                  "project_id",
                  "timestamp"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "branch_schema_compare": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "branch_schema_compare",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/compare_schema",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "compare_schema"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{id}",
                "compare_schema"
              ],
              "rename": {
                "param": {
                  "branch_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "base_branch_id",
                    "orig": "base_branch_id",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "base_lsn",
                    "orig": "base_lsn",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "base_timestamp",
                    "orig": "base_timestamp",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2022-11-30T20:09:48Z"
                  },
                  {
                    "name": "db_name",
                    "orig": "db_name",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "lsn",
                    "orig": "lsn",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "timestamp",
                    "orig": "timestamp",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2022-11-30T20:09:48Z"
                  }
                ]
              },
              "select": {
                "$action": "compare_schema",
                "exist": [
                  "base_branch_id",
                  "base_lsn",
                  "base_timestamp",
                  "db_name",
                  "id",
                  "lsn",
                  "project_id",
                  "timestamp"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "branch_storage": {
      "fields": [
        {
          "name": "enabled",
          "title": "Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Always `true` in 200 responses."
        },
        {
          "name": "force_path_style",
          "title": "Force Path Style",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether the S3 client must use path-style addressing (bucket-in-path rather than virtual-hosted subdomain)."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "region",
          "title": "Region",
          "type": "`$STRING`",
          "req": true,
          "short": "The AWS region for this branch's object storage."
        },
        {
          "name": "s3_endpoint",
          "title": "S3 Endpoint",
          "type": "`$STRING`",
          "req": true,
          "short": "The S3-compatible endpoint URL for this branch.",
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "branch_storage",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/storage",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "storage"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{id}",
                "storage"
              ],
              "rename": {
                "param": {
                  "branch_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "bucket": {
      "fields": [
        {
          "name": "access_level",
          "title": "Access Level",
          "type": "`$STRING`",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Access level for the bucket."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "When the bucket was created.",
          "format": "date-time"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The bucket name."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "bucket",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/buckets",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "buckets"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "buckets"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.bucket`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/buckets",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "buckets"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "buckets"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.buckets`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/download",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "buckets"
                },
                {
                  "var": "bucket_id"
                },
                {
                  "lit": "objects"
                },
                {
                  "var": "object_key"
                },
                {
                  "lit": "download"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "buckets",
                "{bucket_id}",
                "objects",
                "{object_key}",
                "download"
              ],
              "rename": {
                "param": {
                  "bucket_name": "bucket_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "bucket_id",
                    "orig": "bucket_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "object_key",
                    "orig": "object_key",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "bucket_id",
                  "object_key",
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "buckets"
                },
                {
                  "var": "bucket_id"
                },
                {
                  "lit": "objects"
                },
                {
                  "var": "object_key"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "buckets",
                "{bucket_id}",
                "objects",
                "{object_key}"
              ],
              "rename": {
                "param": {
                  "bucket_name": "bucket_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "bucket_id",
                    "orig": "bucket_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "object_key",
                    "orig": "object_key",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "bucket_id",
                  "object_key",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects-by-prefix",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "buckets"
                },
                {
                  "var": "bucket_name"
                },
                {
                  "lit": "objects-by-prefix"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "buckets",
                "{bucket_name}",
                "objects-by-prefix"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "bucket_name",
                    "orig": "bucket_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "prefix",
                    "orig": "prefix",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "objects_by_prefix",
                "exist": [
                  "branch_id",
                  "bucket_name",
                  "prefix",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "buckets"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "buckets",
                "{id}"
              ],
              "rename": {
                "param": {
                  "bucket_name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "bucket_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "bucket_objects_list": {
      "fields": [
        {
          "name": "etag",
          "title": "Etag",
          "type": "`$STRING`",
          "req": true,
          "short": "The object's entity tag (content hash)."
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "req": true,
          "short": "The full object key."
        },
        {
          "name": "last_modified",
          "title": "Last Modified",
          "type": "`$STRING`",
          "req": true,
          "short": "The time the object was last modified.",
          "format": "date-time"
        },
        {
          "name": "size",
          "title": "Size",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The object size in bytes.",
          "format": "int64"
        }
      ],
      "name": "bucket_objects_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "buckets"
                },
                {
                  "var": "bucket_name"
                },
                {
                  "lit": "objects"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "buckets",
                "{bucket_name}",
                "objects"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "bucket_name",
                    "orig": "bucket_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "delimiter",
                    "orig": "delimiter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1000
                  },
                  {
                    "name": "prefix",
                    "orig": "prefix",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "bucket_name",
                  "cursor",
                  "delimiter",
                  "limit",
                  "prefix",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch",
            "$.main.kit.entity.bucket"
          ]
        ]
      }
    },
    "connection_uri": {
      "fields": [
        {
          "name": "uri",
          "title": "Uri",
          "type": "`$STRING`",
          "req": true,
          "short": "The connection URI."
        }
      ],
      "name": "connection_uri",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/connection_uri",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "connection_uri"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "connection_uri"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "database_name",
                    "orig": "database_name",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "endpoint_id",
                    "orig": "endpoint_id",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "pooled",
                    "orig": "pooled",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "role_name",
                    "orig": "role_name",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "database_name",
                  "endpoint_id",
                  "pooled",
                  "project_id",
                  "role_name"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "consumption": {
      "fields": [
        {
          "name": "branches",
          "title": "Branches",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Per-branch consumption history records returned for the requested time range."
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Cursor-based pagination."
        },
        {
          "name": "projects",
          "title": "Projects",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Per-project consumption history records included in the response."
        }
      ],
      "name": "consumption",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/consumption_history/v2/branches",
              "segments": [
                {
                  "lit": "consumption_history"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "branches"
                }
              ],
              "parts": [
                "consumption_history",
                "v2",
                "branches"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "from",
                    "orig": "from",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "granularity",
                    "orig": "granularity",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 100
                  },
                  {
                    "name": "metric",
                    "orig": "metric",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "org_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "to",
                    "orig": "to",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "cursor",
                  "from",
                  "granularity",
                  "limit",
                  "metric",
                  "org_id",
                  "project_id",
                  "to"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/consumption_history/projects",
              "segments": [
                {
                  "lit": "consumption_history"
                },
                {
                  "lit": "projects"
                }
              ],
              "parts": [
                "consumption_history",
                "projects"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "from",
                    "orig": "from",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "granularity",
                    "orig": "granularity",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "include_v1_metric",
                    "orig": "include_v1_metric",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "metric",
                    "orig": "metric",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "org_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "to",
                    "orig": "to",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "cursor",
                  "from",
                  "granularity",
                  "include_v1_metric",
                  "limit",
                  "metric",
                  "org_id",
                  "project_id",
                  "to"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/consumption_history/v2/projects",
              "segments": [
                {
                  "lit": "consumption_history"
                },
                {
                  "lit": "v2"
                },
                {
                  "lit": "projects"
                }
              ],
              "parts": [
                "consumption_history",
                "v2",
                "projects"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "from",
                    "orig": "from",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "granularity",
                    "orig": "granularity",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "metric",
                    "orig": "metric",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "org_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "to",
                    "orig": "to",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "cursor",
                  "from",
                  "granularity",
                  "limit",
                  "metric",
                  "org_id",
                  "project_id",
                  "to"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "create_credential": {
      "fields": [
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Free-form customer label for the credential."
        },
        {
          "name": "principal_type",
          "title": "Principal Type",
          "type": "`$STRING`",
          "req": true,
          "short": "Principal type for the credential."
        },
        {
          "name": "scopes",
          "title": "Scopes",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "name": "create_credential",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/credentials",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "credentials"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "credentials"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "credential": {
      "fields": [
        {
          "name": "branch_id",
          "title": "Branch Id",
          "type": "`$STRING`"
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "format": "date-time"
        },
        {
          "name": "expires_at",
          "title": "Expires At",
          "type": "`$STRING`",
          "short": "When the credential expires; absent means never expires.",
          "format": "date-time"
        },
        {
          "name": "function_id",
          "title": "Function Id",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "last_used_at",
          "title": "Last Used At",
          "type": "`$STRING`",
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Customer-supplied label; absent when not provided at issuance."
        },
        {
          "name": "principal_type",
          "title": "Principal Type",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "revoked_at",
          "title": "Revoked At",
          "type": "`$STRING`",
          "format": "date-time"
        },
        {
          "name": "scopes",
          "title": "Scopes",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "token_id",
          "title": "Token Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Opaque credential id (e.g."
        },
        {
          "name": "token_id_short",
          "title": "Token Id Short",
          "type": "`$STRING`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "credential",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/reveal",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "credentials"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "reveal"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "credentials",
                "{id}",
                "reveal"
              ],
              "rename": {
                "param": {
                  "token_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "token_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "reveal",
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/rotate",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "credentials"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "rotate"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "credentials",
                "{id}",
                "rotate"
              ],
              "rename": {
                "param": {
                  "token_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "token_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "rotate",
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/credentials",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "credentials"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "credentials"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.credentials`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "credentials"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "credentials",
                "{id}"
              ],
              "rename": {
                "param": {
                  "token_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "token_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "current_user_info": {
      "fields": [
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true,
          "short": "Email address associated with this auth account.",
          "format": "email"
        },
        {
          "name": "image",
          "title": "Image",
          "type": "`$STRING`",
          "req": true,
          "short": "URL of the user's profile picture as provided by the identity provider."
        },
        {
          "name": "login",
          "title": "Login",
          "type": "`$STRING`",
          "req": true,
          "short": "Deprecated.",
          "deprecated": true
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Display name of the account as provided by the identity provider."
        },
        {
          "name": "provider",
          "title": "Provider",
          "type": "`$STRING`",
          "req": true,
          "short": "Identity provider id from keycloak"
        }
      ],
      "name": "current_user_info",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/users/me",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "lit": "me"
                }
              ],
              "parts": [
                "users",
                "me"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "custom_domain": {
      "fields": [
        {
          "name": "domain",
          "title": "Domain",
          "type": "`$STRING`",
          "req": true,
          "short": "The custom domain to register (for example `dashboard.acme.com`)."
        },
        {
          "name": "entity_id",
          "title": "Entity Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The target entity's identifier within the branch."
        },
        {
          "name": "entity_type",
          "title": "Entity Type",
          "type": "`$STRING`",
          "req": true,
          "short": "The kind of branch entity to point the domain at."
        }
      ],
      "name": "custom_domain",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/custom-domains",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "custom-domains"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "custom-domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "data_api": {
      "fields": [
        {
          "name": "add_default_grants",
          "title": "Add Default Grants",
          "type": "`$BOOLEAN`",
          "short": "Grant all permissions to the tables in the public schema to authenticated users"
        },
        {
          "name": "auth_provider",
          "title": "Auth Provider",
          "type": "`$STRING`",
          "short": "Authentication provider for the Neon Data API."
        },
        {
          "name": "available_schemas",
          "title": "Available Schemas",
          "type": "`$ARRAY`",
          "short": "List of available database schemas (SubZero only)"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "jwks_url",
          "title": "Jwks Url",
          "type": "`$STRING`",
          "short": "URL of the JWKS endpoint used to verify JWTs for this Data API.",
          "format": "uri"
        },
        {
          "name": "jwt_audience",
          "title": "Jwt Audience",
          "type": "`$STRING`",
          "short": "Expected `aud` claim in incoming JWTs."
        },
        {
          "name": "provider_name",
          "title": "Provider Name",
          "type": "`$STRING`",
          "short": "Display name for the authentication provider."
        },
        {
          "name": "settings",
          "title": "Settings",
          "type": "`$OBJECT`",
          "short": "Configuration settings for the Data API (SubZero only)"
        },
        {
          "name": "skip_auth_schema",
          "title": "Skip Auth Schema",
          "type": "`$BOOLEAN`",
          "short": "Skip creating the auth schema and RLS functions"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "The status of the Neon Data API deployment"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "short": "The URL of the Neon Data API",
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "data_api",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "data-api"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "data-api",
                "{id}"
              ],
              "rename": {
                "param": {
                  "database_name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "database_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "data-api"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "data-api",
                "{id}"
              ],
              "rename": {
                "param": {
                  "database_name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "database_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "data-api"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "data-api",
                "{id}"
              ],
              "rename": {
                "param": {
                  "database_name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "database_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "data-api"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "data-api",
                "{id}"
              ],
              "rename": {
                "param": {
                  "database_name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "database_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "database": {
      "fields": [
        {
          "name": "branch_id",
          "title": "Branch Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The ID of the branch this database belongs to."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the database was created",
          "format": "date-time"
        },
        {
          "name": "database",
          "title": "Database",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Configuration for the new Postgres database."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The database ID",
          "format": "int64"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The database name"
        },
        {
          "name": "owner_name",
          "title": "Owner Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of role that owns the database"
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the database was last updated",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "database",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/databases",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "databases"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "databases"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "database": "`reqdata`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/databases",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "databases"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "databases"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.databases`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "databases"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "databases",
                "{id}"
              ],
              "rename": {
                "param": {
                  "database_name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.database`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "database_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "databases"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "databases",
                "{id}"
              ],
              "rename": {
                "param": {
                  "database_name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "database_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "databases"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "databases",
                "{id}"
              ],
              "rename": {
                "param": {
                  "database_name": "id"
                }
              },
              "transform": {
                "req": {
                  "database": "`reqdata`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "database_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "email_provider": {
      "fields": [],
      "name": "email_provider",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/email_provider",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "email_provider"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "email_provider"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "email_server": {
      "fields": [],
      "name": "email_server",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/auth/email_server",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "email_server"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "email_server"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "empty": {
      "fields": [
        {
          "name": "destination_org_id",
          "title": "Destination Org Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The destination organization identifier"
        },
        {
          "name": "project_ids",
          "title": "Project Ids",
          "type": "`$ARRAY`",
          "req": true,
          "short": "The list of projects ids to transfer."
        },
        {
          "name": "schedule",
          "title": "Schedule",
          "type": "`$ARRAY`",
          "req": true,
          "short": "List of schedule entries defining the backup frequency."
        }
      ],
      "name": "empty",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/organizations/{source_org_id}/projects/transfer",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "projects"
                },
                {
                  "lit": "transfer"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "projects",
                "transfer"
              ],
              "rename": {
                "param": {
                  "source_org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "organization_id",
                    "orig": "source_org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "organization_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/users/me/projects/transfer",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "lit": "me"
                },
                {
                  "lit": "projects"
                },
                {
                  "lit": "transfer"
                }
              ],
              "parts": [
                "users",
                "me",
                "projects",
                "transfer"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/organizations/{org_id}/billing/spending_limit",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "spending_limit"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "billing",
                "spending_limit"
              ],
              "rename": {
                "param": {
                  "org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "organization_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/projects/{project_id}/branches/{branch_id}/backup_schedule",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "backup_schedule"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "backup_schedule"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "endpoint": {
      "fields": [
        {
          "name": "autoscaling_limit_max_cu",
          "title": "Autoscaling Limit Max Cu",
          "type": "`$NUMBER`",
          "req": true,
          "short": "The maximum number of Compute Units"
        },
        {
          "name": "autoscaling_limit_min_cu",
          "title": "Autoscaling Limit Min Cu",
          "type": "`$NUMBER`",
          "req": true,
          "short": "The minimum number of Compute Units"
        },
        {
          "name": "branch_id",
          "title": "Branch Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The ID of the branch this compute endpoint belongs to."
        },
        {
          "name": "compute_release_version",
          "title": "Compute Release Version",
          "type": "`$STRING`",
          "short": "Attached compute's release version number."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the compute endpoint was created",
          "format": "date-time"
        },
        {
          "name": "creation_source",
          "title": "Creation Source",
          "type": "`$STRING`",
          "req": true,
          "short": "The compute endpoint creation source"
        },
        {
          "name": "current_state",
          "title": "Current State",
          "type": "`$STRING`",
          "req": true,
          "short": "Lifecycle state of the compute endpoint."
        },
        {
          "name": "disabled",
          "title": "Disabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether to restrict connections to the compute endpoint."
        },
        {
          "name": "endpoint",
          "title": "Endpoint",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Configuration for the compute endpoint to create."
        },
        {
          "name": "host",
          "title": "Host",
          "type": "`$STRING`",
          "req": true,
          "short": "The hostname of the compute endpoint."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The compute endpoint ID."
        },
        {
          "name": "last_active",
          "title": "Last Active",
          "type": "`$STRING`",
          "short": "A timestamp indicating when the compute endpoint was last active",
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Optional name of the compute endpoint"
        },
        {
          "name": "passwordless_access",
          "title": "Passwordless Access",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether to permit passwordless access to the compute endpoint"
        },
        {
          "name": "pending_state",
          "title": "Pending State",
          "type": "`$STRING`",
          "short": "Target state the compute endpoint is transitioning to."
        },
        {
          "name": "pooler_enabled",
          "title": "Pooler Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Deprecated.",
          "deprecated": true
        },
        {
          "name": "pooler_mode",
          "title": "Pooler Mode",
          "type": "`$STRING`",
          "req": true,
          "short": "Deprecated.",
          "deprecated": true
        },
        {
          "name": "project_id",
          "title": "Project Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The ID of the project this compute endpoint belongs to."
        },
        {
          "name": "provisioner",
          "title": "Provisioner",
          "type": "`$STRING`",
          "req": true,
          "short": "Compute provisioner."
        },
        {
          "name": "proxy_host",
          "title": "Proxy Host",
          "type": "`$STRING`",
          "req": true,
          "short": "Deprecated."
        },
        {
          "name": "region_id",
          "title": "Region Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`)."
        },
        {
          "name": "settings",
          "title": "Settings",
          "type": "`$OBJECT`",
          "req": true,
          "short": "A collection of settings for a compute endpoint"
        },
        {
          "name": "started_at",
          "title": "Started At",
          "type": "`$STRING`",
          "short": "A timestamp indicating when the compute endpoint was last started",
          "format": "date-time"
        },
        {
          "name": "suspend_timeout_seconds",
          "title": "Suspend Timeout Seconds",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Scale-to-zero idle timeout, in seconds, before the compute suspends.",
          "format": "int64"
        },
        {
          "name": "suspended_at",
          "title": "Suspended At",
          "type": "`$STRING`",
          "short": "A timestamp indicating when the compute endpoint was last suspended",
          "format": "date-time"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "Compute endpoint type."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the compute endpoint was last updated",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "endpoint",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/endpoints",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "endpoints"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "endpoints"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "endpoint": "`reqdata`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/endpoints",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "endpoints"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "endpoints"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.endpoints`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/endpoints",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "endpoints"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "endpoints"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.endpoints`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/endpoints/{endpoint_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "endpoints",
                "{id}"
              ],
              "rename": {
                "param": {
                  "endpoint_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.endpoint`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "endpoint_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/endpoints/{endpoint_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "endpoints",
                "{id}"
              ],
              "rename": {
                "param": {
                  "endpoint_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "endpoint_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/endpoints/{endpoint_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "endpoints",
                "{id}"
              ],
              "rename": {
                "param": {
                  "endpoint_id": "id"
                }
              },
              "transform": {
                "req": {
                  "endpoint": "`reqdata`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "endpoint_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "endpoint_operation": {
      "fields": [
        {
          "name": "endpoint",
          "title": "Endpoint",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Compute endpoint created or retrieved, including its current lifecycle state."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "operations",
          "title": "Operations",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "endpoint_operation",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/endpoints/{endpoint_id}/restart",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "restart"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "endpoints",
                "{id}",
                "restart"
              ],
              "rename": {
                "param": {
                  "endpoint_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "endpoint_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "restart",
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/endpoints/{endpoint_id}/start",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "start"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "endpoints",
                "{id}",
                "start"
              ],
              "rename": {
                "param": {
                  "endpoint_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "endpoint_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "start",
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/endpoints/{endpoint_id}/suspend",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "endpoints"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "suspend"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "endpoints",
                "{id}",
                "suspend"
              ],
              "rename": {
                "param": {
                  "endpoint_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "endpoint_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "suspend",
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "function": {
      "fields": [
        {
          "name": "custom_domains",
          "title": "Custom Domains",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "functions",
          "title": "Functions",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`",
          "short": "To paginate the response, issue an initial request with `limit` value."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "function",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/custom-domains",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "custom-domains"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "custom-domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "cursor",
                  "limit",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/functions",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "functions"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "functions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "cursor",
                  "limit",
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/custom-domains/{domain}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "custom-domains"
                },
                {
                  "var": "domain"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "custom-domains",
                "{domain}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "domain",
                    "orig": "domain",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "domain",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/functions/{slug}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "functions"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "functions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "slug": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "triggers"
                },
                {
                  "var": "trigger_id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "triggers",
                "{trigger_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "trigger_id",
                    "orig": "trigger_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id",
                  "trigger_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch",
            "$.main.kit.entity.custom_domain"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch",
            "$.main.kit.entity.trigger"
          ]
        ]
      }
    },
    "jwk": {
      "fields": [
        {
          "name": "branch_id",
          "title": "Branch Id",
          "type": "`$STRING`",
          "short": "The Neon branch ID."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date and time when the JWKS was created",
          "format": "date-time"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The JWKS configuration's ID."
        },
        {
          "name": "jwks_url",
          "title": "Jwks Url",
          "type": "`$STRING`",
          "req": true,
          "short": "URL of the provider's JWKS endpoint used to verify JWTs."
        },
        {
          "name": "jwt_audience",
          "title": "Jwt Audience",
          "type": "`$STRING`",
          "short": "Expected `aud` claim in incoming JWTs."
        },
        {
          "name": "project_id",
          "title": "Project Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The Neon project ID."
        },
        {
          "name": "provider_name",
          "title": "Provider Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the authentication provider (e.g., Clerk, Stytch, Auth0)"
        },
        {
          "name": "role_names",
          "title": "Role Names",
          "type": "`$ARRAY`",
          "short": "Deprecated.",
          "deprecated": true
        },
        {
          "name": "skip_role_creation",
          "title": "Skip Role Creation",
          "type": "`$BOOLEAN`",
          "short": "Deprecated."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "The date and time when the JWKS was last modified",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "jwk",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/jwks",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "jwks"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "jwks"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/jwks",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "jwks"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "jwks"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.jwks`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/jwks/{jwks_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "jwks"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "jwks",
                "{id}"
              ],
              "rename": {
                "param": {
                  "jwks_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "jwks_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "masking_rule": {
      "fields": [
        {
          "name": "column_name",
          "title": "Column Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the column to be masked"
        },
        {
          "name": "database_name",
          "title": "Database Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the database containing the table to be masked"
        },
        {
          "name": "masking_function",
          "title": "Masking Function",
          "type": "`$STRING`",
          "short": "The PostgreSQL Anonymizer masking function to apply."
        },
        {
          "name": "masking_rules",
          "title": "Masking Rules",
          "type": "`$ARRAY`",
          "req": true,
          "short": "List of masking rules for the branch"
        },
        {
          "name": "masking_value",
          "title": "Masking Value",
          "type": "`$STRING`",
          "short": "A literal value to set on the column when masking."
        },
        {
          "name": "schema_name",
          "title": "Schema Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the schema containing the table to be masked"
        },
        {
          "name": "table_name",
          "title": "Table Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the table containing the column to be masked"
        }
      ],
      "name": "masking_rule",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/masking_rules",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "masking_rules"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "masking_rules"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.masking_rules`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/masking_rules",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "masking_rules"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "masking_rules"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "member": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The organization member's ID.",
          "format": "uuid"
        },
        {
          "name": "joined_at",
          "title": "Joined At",
          "type": "`$STRING`",
          "short": "Timestamp when the user joined the organization.",
          "format": "date-time"
        },
        {
          "name": "org_id",
          "title": "Org Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The Neon organization ID."
        },
        {
          "name": "role",
          "title": "Role",
          "type": "`$STRING`",
          "req": true,
          "short": "Organization member's role."
        },
        {
          "name": "user_id",
          "title": "User Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The Neon user ID.",
          "format": "uuid"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "member",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{org_id}/members/{member_id}",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "members",
                "{id}"
              ],
              "rename": {
                "param": {
                  "member_id": "id",
                  "org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "member_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "organization_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/organizations/{org_id}/members/{member_id}",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "members",
                "{id}"
              ],
              "rename": {
                "param": {
                  "member_id": "id",
                  "org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "member_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "organization_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/organizations/{org_id}/members/{member_id}",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "members",
                "{id}"
              ],
              "rename": {
                "param": {
                  "member_id": "id",
                  "org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "member_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "organization_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization"
          ]
        ]
      }
    },
    "neon_auth_allow_localhost": {
      "fields": [
        {
          "name": "allow_localhost",
          "title": "Allow Localhost",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether to allow localhost connections"
        }
      ],
      "name": "neon_auth_allow_localhost",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/allow_localhost",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "allow_localhost"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "allow_localhost"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/allow_localhost",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "allow_localhost"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "allow_localhost"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_config": {
      "fields": [
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The application name used in auth emails and communications."
        }
      ],
      "name": "neon_auth_config",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/config",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "config"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "config"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_create_integration": {
      "fields": [
        {
          "name": "auth_provider",
          "title": "Auth Provider",
          "type": "`$STRING`",
          "req": true,
          "short": "Authentication provider integrated with this Neon Auth configuration."
        },
        {
          "name": "branch_id",
          "title": "Branch Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The Neon branch ID."
        },
        {
          "name": "database_name",
          "title": "Database Name",
          "type": "`$STRING`",
          "short": "Name of the database to enable Neon Auth on."
        },
        {
          "name": "project_id",
          "title": "Project Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The Neon project ID."
        },
        {
          "name": "role_name",
          "title": "Role Name",
          "type": "`$STRING`",
          "short": "Deprecated.",
          "deprecated": true
        }
      ],
      "name": "neon_auth_create_integration",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/auth/create",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "create"
                }
              ],
              "parts": [
                "projects",
                "auth",
                "create"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/auth/keys",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "keys"
                }
              ],
              "parts": [
                "projects",
                "auth",
                "keys"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_create_new_user": {
      "fields": [
        {
          "name": "auth_provider",
          "title": "Auth Provider",
          "type": "`$STRING`",
          "req": true,
          "short": "Authentication provider integrated with this Neon Auth configuration."
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true,
          "short": "Email address of the new Neon Auth user to create.",
          "format": "email"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Display name for the new user."
        },
        {
          "name": "project_id",
          "title": "Project Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The Neon project ID."
        }
      ],
      "name": "neon_auth_create_new_user",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/users",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "users"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "users"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/auth/user",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "user"
                }
              ],
              "parts": [
                "projects",
                "auth",
                "user"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_email_and_password_config": {
      "fields": [
        {
          "name": "auto_sign_in_after_verification",
          "title": "Auto Sign In After Verification",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether users are automatically signed in after verifying their email"
        },
        {
          "name": "disable_sign_up",
          "title": "Disable Sign Up",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether to disable new user sign ups"
        },
        {
          "name": "email_verification_method",
          "title": "Email Verification Method",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "Controls how email addresses are verified during sign-up or sign-in."
        },
        {
          "name": "enabled",
          "title": "Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether email and password authentication is enabled"
        },
        {
          "name": "require_email_verification",
          "title": "Require Email Verification",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether email verification is required before users can sign in"
        },
        {
          "name": "send_verification_email_on_sign_in",
          "title": "Send Verification Email On Sign In",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether to send a verification email when users sign in"
        },
        {
          "name": "send_verification_email_on_sign_up",
          "title": "Send Verification Email On Sign Up",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether to send a verification email when users sign up"
        }
      ],
      "name": "neon_auth_email_and_password_config",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/email_and_password",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "email_and_password"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "email_and_password"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/email_and_password",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "email_and_password"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "email_and_password"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_email_server_config": {
      "fields": [],
      "name": "neon_auth_email_server_config",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/email_provider",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "email_provider"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "email_provider"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/auth/email_server",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "email_server"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "email_server"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_integration": {
      "fields": [
        {
          "name": "auth_provider",
          "title": "Auth Provider",
          "type": "`$STRING`",
          "req": true,
          "short": "Authentication provider integrated with this Neon Auth configuration."
        },
        {
          "name": "auth_provider_project_id",
          "title": "Auth Provider Project Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Project identifier assigned by the auth provider for this integration."
        },
        {
          "name": "base_url",
          "title": "Base Url",
          "type": "`$STRING`",
          "short": "Base URL of the Neon Auth service endpoint for this integration."
        },
        {
          "name": "branch_id",
          "title": "Branch Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The Neon branch ID."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "Timestamp when the Neon Auth integration was created, in RFC 3339 format (UTC).",
          "format": "date-time"
        },
        {
          "name": "db_name",
          "title": "Db Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Name of the database used by the Neon Auth integration."
        },
        {
          "name": "jwks_url",
          "title": "Jwks Url",
          "type": "`$STRING`",
          "req": true,
          "short": "URL of the provider's JWKS endpoint used to verify JWTs."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Application name shown in auth emails and communications."
        },
        {
          "name": "owned_by",
          "title": "Owned By",
          "type": "`$STRING`",
          "req": true,
          "short": "Owner of the auth provider project."
        },
        {
          "name": "transfer_status",
          "title": "Transfer Status",
          "type": "`$STRING`",
          "short": "Ownership transfer state for the auth provider project."
        }
      ],
      "name": "neon_auth_integration",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/auth/integrations",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "integrations"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "integrations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_magic_link_config": {
      "fields": [
        {
          "name": "disable_sign_up",
          "title": "Disable Sign Up",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether to disable sign-up via magic link."
        },
        {
          "name": "enabled",
          "title": "Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether the magic link plugin is enabled."
        },
        {
          "name": "expires_in",
          "title": "Expires In",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Minutes until the magic link expires.",
          "format": "int32"
        }
      ],
      "name": "neon_auth_magic_link_config",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/plugins/magic-link",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "plugins"
                },
                {
                  "lit": "magic-link"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "plugins",
                "magic-link"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_oauth_provider": {
      "fields": [
        {
          "name": "client_id",
          "title": "Client Id",
          "type": "`$STRING`",
          "short": "Public identifier for the OAuth application, issued by the provider when the application is registered."
        },
        {
          "name": "client_secret",
          "title": "Client Secret",
          "type": "`$STRING`",
          "short": "OAuth client secret for the provider."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The OAuth provider's ID."
        },
        {
          "name": "microsoft_tenant_id",
          "title": "Microsoft Tenant Id",
          "type": "`$STRING`",
          "short": "Tenant ID for the Microsoft OAuth provider."
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "OAuth provider key type."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "neon_auth_oauth_provider",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "oauth_providers"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "oauth_providers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/auth/oauth_providers",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "oauth_providers"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "oauth_providers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "oauth_providers"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "oauth_providers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.providers`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/auth/oauth_providers",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "oauth_providers"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "oauth_providers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.providers`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "oauth_providers"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "oauth_providers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "oauth_provider_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "oauth_provider_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/auth/oauth_providers/{oauth_provider_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "oauth_providers"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "oauth_providers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "oauth_provider_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "oauth_provider_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_organization_config": {
      "fields": [
        {
          "name": "creator_role",
          "title": "Creator Role",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "Role of the organization's creator."
        },
        {
          "name": "enabled",
          "title": "Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether the organization plugin is enabled."
        },
        {
          "name": "membership_limit",
          "title": "Membership Limit",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Maximum number of members per organization.",
          "format": "int32"
        },
        {
          "name": "organization_limit",
          "title": "Organization Limit",
          "type": "`$INTEGER`",
          "req": true,
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "short": "Maximum organizations a user can belong to (created or joined).",
          "format": "int32"
        },
        {
          "name": "send_invitation_email",
          "title": "Send Invitation Email",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether to send invitation emails when inviting members to an organization."
        }
      ],
      "name": "neon_auth_organization_config",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/plugins/organization",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "plugins"
                },
                {
                  "lit": "organization"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "plugins",
                "organization"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_phone_number_config": {
      "fields": [
        {
          "name": "enabled",
          "title": "Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "short": "Whether the phone number plugin is enabled."
        },
        {
          "name": "otp_expires_in",
          "title": "Otp Expires In",
          "type": "`$INTEGER`",
          "short": "Time in seconds before the OTP expires"
        }
      ],
      "name": "neon_auth_phone_number_config",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "plugins"
                },
                {
                  "lit": "phone-number"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "plugins",
                "phone-number"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "plugins"
                },
                {
                  "lit": "phone-number"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "plugins",
                "phone-number"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_plugin_config": {
      "fields": [
        {
          "name": "client_id",
          "title": "Client Id",
          "type": "`$STRING`",
          "short": "Public identifier for the OAuth application, issued by the provider when the application is registered."
        },
        {
          "name": "client_secret",
          "title": "Client Secret",
          "type": "`$STRING`",
          "short": "OAuth client secret for the provider."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The OAuth provider's ID."
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "req": true,
          "short": "OAuth provider key type."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "neon_auth_plugin_config",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/plugins",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "plugins"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "plugins"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_redirect_uri_whitelist_domain": {
      "fields": [
        {
          "name": "auth_provider",
          "title": "Auth Provider",
          "type": "`$STRING`",
          "req": true,
          "short": "Authentication provider integrated with this Neon Auth configuration."
        },
        {
          "name": "domain",
          "title": "Domain",
          "type": "`$STRING`",
          "req": true,
          "short": "Allowed redirect URI domain for the auth provider."
        }
      ],
      "name": "neon_auth_redirect_uri_whitelist_domain",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/domains",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.domains`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/auth/domains",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "auth",
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.domains`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_auth_transfer_auth_provider_project": {
      "fields": [
        {
          "name": "auth_provider",
          "title": "Auth Provider",
          "type": "`$STRING`",
          "req": true,
          "short": "Authentication provider integrated with this Neon Auth configuration."
        },
        {
          "name": "project_id",
          "title": "Project Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The Neon project ID."
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true,
          "short": "URL for completing the process of ownership transfer"
        }
      ],
      "name": "neon_auth_transfer_auth_provider_project",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/auth/transfer_ownership",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "transfer_ownership"
                }
              ],
              "parts": [
                "projects",
                "auth",
                "transfer_ownership"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "neon_auth_webhook_config": {
      "fields": [
        {
          "name": "enabled",
          "title": "Enabled",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether the webhook is active."
        },
        {
          "name": "enabled_events",
          "title": "Enabled Events",
          "type": "`$ARRAY`",
          "short": "Event types that trigger this webhook."
        },
        {
          "name": "timeout_seconds",
          "title": "Timeout Seconds",
          "type": "`$INTEGER`",
          "short": "Maximum time, in seconds, to wait for a response from the webhook endpoint."
        },
        {
          "name": "webhook_url",
          "title": "Webhook Url",
          "type": "`$STRING`",
          "short": "Destination URL that receives webhook event payloads."
        }
      ],
      "name": "neon_auth_webhook_config",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/webhooks",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "webhooks"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "webhooks"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.enabled_events`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/webhooks",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "webhooks"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "webhooks"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_function": {
      "fields": [
        {
          "name": "active_deployment",
          "title": "Active Deployment",
          "type": "`$ANY`",
          "short": "The most recent deployment whose build completed successfully."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "current_deployment",
          "title": "Current Deployment",
          "type": "`$ANY`",
          "short": "The most recent deployment, regardless of build status."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Opaque, stable function identifier."
        },
        {
          "name": "invocation_url",
          "title": "Invocation Url",
          "type": "`$STRING`",
          "req": true,
          "short": "URL at which the function is invoked."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Free-form display name."
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`",
          "req": true,
          "short": "Branch-unique, lowercase DNS-label."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "neon_function",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/functions/{slug}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "functions"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "functions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "slug": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.function`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/functions/{slug}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "functions"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "functions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "slug": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.function`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "neon_function_deployment": {
      "fields": [],
      "name": "neon_function_deployment",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/functions/{slug}/deployments",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "functions"
                },
                {
                  "var": "slug"
                },
                {
                  "lit": "deployments"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "functions",
                "{slug}",
                "deployments"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.deployment`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "slug",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id",
                  "slug"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch",
            "$.main.kit.entity.function"
          ]
        ]
      }
    },
    "operation": {
      "fields": [
        {
          "name": "action",
          "title": "Action",
          "type": "`$STRING`",
          "req": true,
          "short": "The action performed by the operation"
        },
        {
          "name": "branch_id",
          "title": "Branch Id",
          "type": "`$STRING`",
          "short": "The ID of the branch this operation ran on."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the operation was created",
          "format": "date-time"
        },
        {
          "name": "endpoint_id",
          "title": "Endpoint Id",
          "type": "`$STRING`",
          "short": "The ID of the compute endpoint this operation ran on."
        },
        {
          "name": "error",
          "title": "Error",
          "type": "`$STRING`",
          "short": "Human-readable message describing why the operation failed."
        },
        {
          "name": "failures_count",
          "title": "Failures Count",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The number of times the operation failed",
          "format": "int32"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The operation ID",
          "format": "uuid"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name for the replaced branch."
        },
        {
          "name": "operations",
          "title": "Operations",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Cursor-based pagination."
        },
        {
          "name": "project_id",
          "title": "Project Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The ID of the project this operation ran on."
        },
        {
          "name": "retry_at",
          "title": "Retry At",
          "type": "`$STRING`",
          "short": "A timestamp indicating when the operation was last retried",
          "format": "date-time"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "Current lifecycle state of the operation."
        },
        {
          "name": "total_duration_ms",
          "title": "Total Duration Ms",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The total duration of the operation in milliseconds",
          "format": "int32"
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the operation status was last updated",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "operation",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/finalize_restore",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "finalize_restore"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "finalize_restore"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/operations",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "operations"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "operations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "cursor",
                  "limit",
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/operations/{operation_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "operations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "operations",
                "{id}"
              ],
              "rename": {
                "param": {
                  "operation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.operation`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "operation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "org_api_key_create": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`"
        },
        {
          "name": "created_by",
          "title": "Created By",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`"
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "org_api_key_create",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/organizations/{org_id}/api_keys",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "api_keys"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "api_keys"
              ],
              "rename": {
                "param": {
                  "org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "organization_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization"
          ]
        ]
      }
    },
    "org_api_key_revoke": {
      "fields": [],
      "name": "org_api_key_revoke",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/organizations/{org_id}/api_keys/{key_id}",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "api_keys"
                },
                {
                  "var": "key_id"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "api_keys",
                "{key_id}"
              ],
              "rename": {
                "param": {
                  "org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "key_id",
                    "orig": "key_id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "key_id",
                  "organization_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization",
            "$.main.kit.entity.api_key"
          ]
        ]
      }
    },
    "org_api_keys_list_response_item": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the API key was created",
          "format": "date-time"
        },
        {
          "name": "created_by",
          "title": "Created By",
          "type": "`$OBJECT`",
          "req": true,
          "short": "The user data of the user that created this API key."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The API key's unique numeric ID.",
          "format": "int64"
        },
        {
          "name": "last_used_at",
          "title": "Last Used At",
          "type": "`$STRING`",
          "short": "A timestamp indicating when the API was last used",
          "format": "date-time"
        },
        {
          "name": "last_used_from_addr",
          "title": "Last Used From Addr",
          "type": "`$STRING`",
          "req": true,
          "short": "The IP address from which the API key was last used"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The user-specified API key name"
        },
        {
          "name": "project_id",
          "title": "Project Id",
          "type": "`$STRING`",
          "short": "If set, the API key can access only this project"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "org_api_keys_list_response_item",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{org_id}/api_keys",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "api_keys"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "api_keys"
              ],
              "rename": {
                "param": {
                  "org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "organization_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization"
          ]
        ]
      }
    },
    "organization": {
      "fields": [
        {
          "name": "allow_hipaa_projects",
          "title": "Allow Hipaa Projects",
          "type": "`$BOOLEAN`",
          "short": "If true, allow account to mark projects as HIPAA"
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicting when the organization was created",
          "format": "date-time"
        },
        {
          "name": "handle",
          "title": "Handle",
          "type": "`$STRING`",
          "req": true,
          "short": "URL-safe identifier for the organization, used in API paths."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The Neon organization ID."
        },
        {
          "name": "label",
          "title": "Label",
          "type": "`$STRING`",
          "req": true,
          "short": "Human-readable name for the VPC endpoint assignment, used to identify it within the organization."
        },
        {
          "name": "managed_by",
          "title": "Managed By",
          "type": "`$STRING`",
          "req": true,
          "short": "Organizations created via the Console or the API are managed by `console`."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Human-readable display name of the organization."
        },
        {
          "name": "plan",
          "title": "Plan",
          "type": "`$STRING`",
          "req": true,
          "short": "Billing plan for the organization, for example `free`, `launch`, or `scale`."
        },
        {
          "name": "require_mfa",
          "title": "Require Mfa",
          "type": "`$BOOLEAN`",
          "short": "If true, all members must have MFA enabled to access this organization"
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the organization was updated",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "organization",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "vpc"
                },
                {
                  "lit": "region"
                },
                {
                  "var": "region_id"
                },
                {
                  "lit": "vpc_endpoints"
                },
                {
                  "var": "vpc_endpoint_id"
                }
              ],
              "parts": [
                "organizations",
                "{id}",
                "vpc",
                "region",
                "{region_id}",
                "vpc_endpoints",
                "{vpc_endpoint_id}"
              ],
              "rename": {
                "param": {
                  "org_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "region_id",
                    "orig": "region_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "vpc_endpoint_id",
                    "orig": "vpc_endpoint_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "region_id",
                  "vpc_endpoint_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{org_id}/members",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "members"
                }
              ],
              "parts": [
                "organizations",
                "{id}",
                "members"
              ],
              "rename": {
                "param": {
                  "org_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sort_by",
                    "orig": "sort_by",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "joined_at"
                  },
                  {
                    "name": "sort_order",
                    "orig": "sort_order",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "desc"
                  }
                ]
              },
              "select": {
                "$action": "member",
                "exist": [
                  "cursor",
                  "id",
                  "limit",
                  "sort_by",
                  "sort_order"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/users/me/organizations",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "lit": "me"
                },
                {
                  "lit": "organizations"
                }
              ],
              "parts": [
                "users",
                "me",
                "organizations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.organizations`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{org_id}",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "organizations",
                "{id}"
              ],
              "rename": {
                "param": {
                  "org_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "vpc"
                },
                {
                  "lit": "region"
                },
                {
                  "var": "region_id"
                },
                {
                  "lit": "vpc_endpoints"
                },
                {
                  "var": "vpc_endpoint_id"
                }
              ],
              "parts": [
                "organizations",
                "{id}",
                "vpc",
                "region",
                "{region_id}",
                "vpc_endpoints",
                "{vpc_endpoint_id}"
              ],
              "rename": {
                "param": {
                  "org_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "region_id",
                    "orig": "region_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "vpc_endpoint_id",
                    "orig": "vpc_endpoint_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "region_id",
                  "vpc_endpoint_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.region",
            "$.main.kit.entity.vpc_endpoint"
          ]
        ]
      }
    },
    "organization_invitation": {
      "fields": [
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true,
          "short": "Email of the invited user",
          "format": "email"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The invitation ID.",
          "format": "uuid"
        },
        {
          "name": "invitations",
          "title": "Invitations",
          "type": "`$ARRAY`",
          "req": true,
          "short": "List of pending invitations for the organization."
        },
        {
          "name": "invited_at",
          "title": "Invited At",
          "type": "`$STRING`",
          "req": true,
          "short": "Timestamp when the invitation was created",
          "format": "date-time"
        },
        {
          "name": "invited_by",
          "title": "Invited By",
          "type": "`$STRING`",
          "req": true,
          "short": "UUID for the user_id who extended the invitation",
          "format": "uuid"
        },
        {
          "name": "org_id",
          "title": "Org Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Organization id as it is stored in Neon"
        },
        {
          "name": "role",
          "title": "Role",
          "type": "`$STRING`",
          "req": true,
          "short": "Organization member's role."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "organization_invitation",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/organizations/{org_id}/invitations",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "invitations"
                }
              ],
              "parts": [
                "organizations",
                "{id}",
                "invitations"
              ],
              "rename": {
                "param": {
                  "org_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{org_id}/invitations",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "invitations"
                }
              ],
              "parts": [
                "organizations",
                "{id}",
                "invitations"
              ],
              "rename": {
                "param": {
                  "org_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.invitations`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "presign": {
      "fields": [
        {
          "name": "content_type",
          "title": "Content Type",
          "type": "`$STRING`",
          "short": "The `Content-Type` to bind into the signed request."
        },
        {
          "name": "expires_in_seconds",
          "title": "Expires In Seconds",
          "type": "`$INTEGER`",
          "short": "How long the presigned URL stays valid, in seconds.",
          "format": "int64"
        },
        {
          "name": "operation",
          "title": "Operation",
          "type": "`$STRING`",
          "req": true,
          "short": "The transfer direction."
        }
      ],
      "name": "presign",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/presign",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "buckets"
                },
                {
                  "var": "bucket_id"
                },
                {
                  "lit": "objects"
                },
                {
                  "var": "object_key"
                },
                {
                  "lit": "presign"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "buckets",
                "{bucket_id}",
                "objects",
                "{object_key}",
                "presign"
              ],
              "rename": {
                "param": {
                  "bucket_name": "bucket_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.headers`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "bucket_id",
                    "orig": "bucket_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "object_key",
                    "orig": "object_key",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "bucket_id",
                  "object_key",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch",
            "$.main.kit.entity.bucket"
          ]
        ]
      }
    },
    "project": {
      "fields": [
        {
          "name": "active_time_seconds",
          "title": "Active Time Seconds",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Seconds.",
          "format": "int64"
        },
        {
          "name": "applications",
          "title": "Applications",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Map of project IDs to their installed applications."
        },
        {
          "name": "branch_logical_size_limit",
          "title": "Branch Logical Size Limit",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The logical size limit for a branch.",
          "format": "int64"
        },
        {
          "name": "branch_logical_size_limit_bytes",
          "title": "Branch Logical Size Limit Bytes",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The logical size limit for a branch.",
          "format": "int64"
        },
        {
          "name": "compute_last_active_at",
          "title": "Compute Last Active At",
          "type": "`$STRING`",
          "short": "The most recent time when any endpoint of this project was active.",
          "format": "date-time"
        },
        {
          "name": "compute_time_seconds",
          "title": "Compute Time Seconds",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Seconds.",
          "format": "int64"
        },
        {
          "name": "consumption_period_end",
          "title": "Consumption Period End",
          "type": "`$STRING`",
          "req": true,
          "short": "A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period.",
          "format": "date-time"
        },
        {
          "name": "consumption_period_start",
          "title": "Consumption Period Start",
          "type": "`$STRING`",
          "req": true,
          "short": "A date-time indicating when Neon Cloud started measuring consumption for current consumption period.",
          "format": "date-time"
        },
        {
          "name": "cpu_used_sec",
          "title": "Cpu Used Sec",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Deprecated.",
          "deprecated": true,
          "format": "int64"
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the project was created",
          "format": "date-time"
        },
        {
          "name": "creation_source",
          "title": "Creation Source",
          "type": "`$STRING`",
          "req": true,
          "short": "The project creation source"
        },
        {
          "name": "data_storage_bytes_hour",
          "title": "Data Storage Bytes Hour",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Bytes-Hour.",
          "format": "int64"
        },
        {
          "name": "data_transfer_bytes",
          "title": "Data Transfer Bytes",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Bytes.",
          "format": "int64"
        },
        {
          "name": "default_endpoint_settings",
          "title": "Default Endpoint Settings",
          "type": "`$OBJECT`",
          "short": "A collection of settings for a Neon endpoint"
        },
        {
          "name": "effective_project_permission",
          "title": "Effective Project Permission",
          "type": "`$STRING`"
        },
        {
          "name": "hipaa_enabled_at",
          "title": "Hipaa Enabled At",
          "type": "`$STRING`",
          "short": "A timestamp indicating when HIPAA was enabled for this project",
          "format": "date-time"
        },
        {
          "name": "history_retention_seconds",
          "title": "History Retention Seconds",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The number of seconds to retain the shared history for all branches in this project.",
          "format": "int32"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The Neon project ID."
        },
        {
          "name": "integrations",
          "title": "Integrations",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Map of project IDs to their associated integration details."
        },
        {
          "name": "label",
          "title": "Label",
          "type": "`$STRING`",
          "req": true,
          "short": "Human-readable name for the VPC endpoint assignment, used to identify it within the organization."
        },
        {
          "name": "maintenance_scheduled_for",
          "title": "Maintenance Scheduled For",
          "type": "`$STRING`",
          "short": "A timestamp indicating when project update begins.",
          "format": "date-time"
        },
        {
          "name": "maintenance_starts_at",
          "title": "Maintenance Starts At",
          "type": "`$STRING`",
          "short": "A timestamp indicating when project maintenance begins.",
          "format": "date-time"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The project name"
        },
        {
          "name": "org_id",
          "title": "Org Id",
          "type": "`$STRING`",
          "short": "The Neon organization ID."
        },
        {
          "name": "owner",
          "title": "Owner",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Ownership details for the project, including the owner's name and email."
        },
        {
          "name": "owner_id",
          "title": "Owner Id",
          "type": "`$STRING`",
          "req": true,
          "short": "ID of the organization that owns the project."
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Cursor-based pagination."
        },
        {
          "name": "pg_version",
          "title": "Pg Version",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The major Postgres version number."
        },
        {
          "name": "platform_id",
          "title": "Platform Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The cloud platform identifier."
        },
        {
          "name": "project",
          "title": "Project",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Configuration for the new project, including name, region, and Postgres compute and storage settings."
        },
        {
          "name": "projects",
          "title": "Projects",
          "type": "`$ARRAY`",
          "req": true,
          "short": "List of projects accessible to the caller."
        },
        {
          "name": "provisioner",
          "title": "Provisioner",
          "type": "`$STRING`",
          "req": true,
          "short": "Compute provisioner."
        },
        {
          "name": "proxy_host",
          "title": "Proxy Host",
          "type": "`$STRING`",
          "req": true,
          "short": "The proxy host for the project."
        },
        {
          "name": "quota_reset_at",
          "title": "Quota Reset At",
          "type": "`$STRING`",
          "short": "Deprecated.",
          "deprecated": true,
          "format": "date-time"
        },
        {
          "name": "region_id",
          "title": "Region Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`)."
        },
        {
          "name": "settings",
          "title": "Settings",
          "type": "`$OBJECT`",
          "short": "Project-level settings, for example `quota`, `allowed_ips`, `enable_logical_replication`, and `maintenance_window`."
        },
        {
          "name": "store_passwords",
          "title": "Store Passwords",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether or not passwords are stored for roles in the Neon project."
        },
        {
          "name": "synthetic_storage_size",
          "title": "Synthetic Storage Size",
          "type": "`$INTEGER`",
          "short": "The current space occupied by the project in Postgres storage, in bytes.",
          "format": "int64"
        },
        {
          "name": "unavailable_project_ids",
          "title": "Unavailable Project Ids",
          "type": "`$ARRAY`",
          "short": "A list of project IDs indicating which projects are known to exist, but whose details could not be fetched within the requested (or implicit) time limit"
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the project was last updated",
          "format": "date-time"
        },
        {
          "name": "written_data_bytes",
          "title": "Written Data Bytes",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Bytes.",
          "format": "int64"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "project",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "vpc_endpoints"
                },
                {
                  "var": "vpc_endpoint_id"
                }
              ],
              "parts": [
                "projects",
                "{id}",
                "vpc_endpoints",
                "{vpc_endpoint_id}"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "vpc_endpoint_id",
                    "orig": "vpc_endpoint_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "vpc_endpoint_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branch_anonymized",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "branch_anonymized"
                }
              ],
              "parts": [
                "projects",
                "{id}",
                "branch_anonymized"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "branch_anonymized",
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects",
              "segments": [
                {
                  "lit": "projects"
                }
              ],
              "parts": [
                "projects"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "project": "`reqdata`"
                },
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects",
              "segments": [
                {
                  "lit": "projects"
                }
              ],
              "parts": [
                "projects"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "org_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "recoverable",
                    "orig": "recoverable",
                    "type": "`$BOOLEAN`",
                    "kind": "query",
                    "example": false
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "timeout",
                    "orig": "timeout",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "cursor",
                  "limit",
                  "org_id",
                  "recoverable",
                  "search",
                  "timeout"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/advisors",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "advisors"
                }
              ],
              "parts": [
                "projects",
                "{id}",
                "advisors"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.issues`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "database_name",
                    "orig": "database_name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "min_severity",
                    "orig": "min_severity",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "advisor",
                "exist": [
                  "branch_id",
                  "category",
                  "database_name",
                  "id",
                  "min_severity"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/shared",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "lit": "shared"
                }
              ],
              "parts": [
                "projects",
                "shared"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "search",
                    "orig": "search",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "timeout",
                    "orig": "timeout",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "shared",
                "exist": [
                  "cursor",
                  "limit",
                  "search",
                  "timeout"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{id}"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.project`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "patch": {
          "input": "data",
          "name": "patch",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{id}"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": {
                  "project": "`reqdata`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "vpc_endpoints"
                },
                {
                  "var": "vpc_endpoint_id"
                }
              ],
              "parts": [
                "projects",
                "{id}",
                "vpc_endpoints",
                "{vpc_endpoint_id}"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "vpc_endpoint_id",
                    "orig": "vpc_endpoint_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "vpc_endpoint_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{id}"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.project`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/projects/{project_id}/transfer_requests/{request_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "transfer_requests"
                },
                {
                  "var": "request_id"
                }
              ],
              "parts": [
                "projects",
                "{id}",
                "transfer_requests",
                "{request_id}"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "request_id",
                    "orig": "request_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "request_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.vpc_endpoint"
          ]
        ]
      }
    },
    "project_branch_log_field": {
      "fields": [
        {
          "name": "fields",
          "title": "Fields",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Log field names observed on this branch, each usable as `field_name` on the log field-values endpoint."
        }
      ],
      "name": "project_branch_log_field",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/logs/fields",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "logs"
                },
                {
                  "lit": "fields"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "logs",
                "fields"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.fields`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "project_branch_log_field_value": {
      "fields": [
        {
          "name": "is_truncated",
          "title": "Is Truncated",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "True when more distinct values exist than were returned, because either the requested `limit` or the server's own scan cap was reached."
        },
        {
          "name": "values",
          "title": "Values",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "name": "project_branch_log_field_value",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/logs/fields/{field_name}/values",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "logs"
                },
                {
                  "lit": "fields"
                },
                {
                  "var": "field_name"
                },
                {
                  "lit": "values"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "logs",
                "fields",
                "{field_name}",
                "values"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.values`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "field_name",
                    "orig": "field_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "end_time",
                    "orig": "end_time",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 100
                  },
                  {
                    "name": "since",
                    "orig": "since",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "1h"
                  },
                  {
                    "name": "source",
                    "orig": "source",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "start_time",
                    "orig": "start_time",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "end_time",
                  "field_name",
                  "limit",
                  "project_id",
                  "since",
                  "source",
                  "start_time"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "project_branch_logs_query": {
      "fields": [
        {
          "name": "body_contains",
          "title": "Body Contains",
          "type": "`$STRING`",
          "short": "Match records whose rendered `message` contains this case-sensitive substring."
        },
        {
          "name": "cursor",
          "title": "Cursor",
          "type": "`$STRING`",
          "short": "Opaque pagination cursor returned as `next_cursor` by a previous call."
        },
        {
          "name": "end_time",
          "title": "End Time",
          "type": "`$STRING`",
          "short": "Exclusive end of the query window.",
          "format": "date-time"
        },
        {
          "name": "is_truncated",
          "title": "Is Truncated",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "True when more records matched than were returned."
        },
        {
          "name": "limit",
          "title": "Limit",
          "type": "`$INTEGER`",
          "short": "Maximum number of log records to return per page."
        },
        {
          "name": "logql",
          "title": "Logql",
          "type": "`$STRING`",
          "short": "Escape hatch for selections the structured filters cannot express: a raw LogQL expression, evaluated against this branch's log stream."
        },
        {
          "name": "logs",
          "title": "Logs",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "minimum_severity",
          "title": "Minimum Severity",
          "type": "`$STRING`",
          "short": "An OpenTelemetry severity level."
        },
        {
          "name": "next_cursor",
          "title": "Next Cursor",
          "type": "`$STRING`",
          "short": "Pagination cursor to pass as `cursor` on the next request."
        },
        {
          "name": "scope_name",
          "title": "Scope Name",
          "type": "`$STRING`",
          "short": "Match the OpenTelemetry instrumentation scope name exactly."
        },
        {
          "name": "service_name",
          "title": "Service Name",
          "type": "`$STRING`",
          "short": "Match the OpenTelemetry `service.name` resource attribute exactly."
        },
        {
          "name": "severity_text",
          "title": "Severity Text",
          "type": "`$STRING`",
          "short": "Match the OpenTelemetry severity text exactly."
        },
        {
          "name": "since",
          "title": "Since",
          "type": "`$ANY`",
          "short": "Length of the query window, ending at `end_time` or at the current time when `end_time` is omitted."
        },
        {
          "name": "sort_order",
          "title": "Sort Order",
          "type": "`$STRING`",
          "short": "Order matching records by timestamp."
        },
        {
          "name": "source",
          "title": "Source",
          "type": "`$STRING`",
          "short": "The Neon service that emitted the log record."
        },
        {
          "name": "start_time",
          "title": "Start Time",
          "type": "`$STRING`",
          "short": "Inclusive beginning of the query window.",
          "format": "date-time"
        },
        {
          "name": "trace_id",
          "title": "Trace Id",
          "type": "`$STRING`",
          "short": "Match records associated with this OpenTelemetry trace ID."
        }
      ],
      "name": "project_branch_logs_query",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/logs/query",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "logs"
                },
                {
                  "lit": "query"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "logs",
                "query"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "project_member": {
      "fields": [
        {
          "name": "effective_project_permission",
          "title": "Effective Project Permission",
          "type": "`$STRING`",
          "short": "The caller's effective permission for a project when per-project permissions are enabled."
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "short": "Email address of the user who has been granted access to the project.",
          "format": "email"
        },
        {
          "name": "explicit_project_permission",
          "title": "Explicit Project Permission",
          "type": "`$STRING`",
          "short": "The caller's effective permission for a project when per-project permissions are enabled."
        },
        {
          "name": "grant_source",
          "title": "Grant Source",
          "type": "`$STRING`",
          "short": "How a member's project access is granted."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "member_id",
          "title": "Member Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The organization member ID.",
          "format": "uuid"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The user's display name."
        },
        {
          "name": "org_default_project_permission",
          "title": "Org Default Project Permission",
          "type": "`$STRING`",
          "short": "The caller's effective permission for a project when per-project permissions are enabled."
        },
        {
          "name": "org_role",
          "title": "Org Role",
          "type": "`$STRING`",
          "req": true,
          "short": "Organization-level role used by project member role management."
        },
        {
          "name": "project_role",
          "title": "Project Role",
          "type": "`$STRING`",
          "short": "Per-project role."
        },
        {
          "name": "user_id",
          "title": "User Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The user ID for the organization member.",
          "format": "uuid"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "project_member",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/members",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "members"
                }
              ],
              "parts": [
                "projects",
                "{id}",
                "members"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "cursor",
                    "orig": "cursor",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "cursor",
                  "id",
                  "limit"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "project_member_role": {
      "fields": [
        {
          "name": "credential_rotation_recommended",
          "title": "Credential Rotation Recommended",
          "type": "`$BOOLEAN`",
          "short": "Hint that database credentials may need rotation after the role change."
        },
        {
          "name": "effective_project_permission",
          "title": "Effective Project Permission",
          "type": "`$STRING`",
          "short": "The caller's effective permission for a project when per-project permissions are enabled."
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "short": "Email address of the user who has been granted access to the project.",
          "format": "email"
        },
        {
          "name": "explicit_project_permission",
          "title": "Explicit Project Permission",
          "type": "`$STRING`",
          "short": "The caller's effective permission for a project when per-project permissions are enabled."
        },
        {
          "name": "member_id",
          "title": "Member Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The user's display name."
        },
        {
          "name": "org_api_key_rotation_recommended",
          "title": "Org Api Key Rotation Recommended",
          "type": "`$BOOLEAN`",
          "short": "Hint that project-scoped org API keys created by the target user may need rotation."
        },
        {
          "name": "org_default_project_permission",
          "title": "Org Default Project Permission",
          "type": "`$STRING`",
          "short": "The caller's effective permission for a project when per-project permissions are enabled."
        },
        {
          "name": "org_role",
          "title": "Org Role",
          "type": "`$STRING`",
          "req": true,
          "short": "Organization-level role used by project member role management."
        },
        {
          "name": "project_id",
          "title": "Project Id",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "project_role",
          "title": "Project Role",
          "type": "`$STRING`",
          "short": "The resulting effective project role after applying org-admin default access, explicit grants, and creator fallback."
        },
        {
          "name": "role",
          "title": "Role",
          "type": "`$STRING`",
          "req": true,
          "short": "Per-project role."
        },
        {
          "name": "user_id",
          "title": "User Id",
          "type": "`$STRING`",
          "req": true,
          "format": "uuid"
        }
      ],
      "name": "project_member_role",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/members/{member_id}/role",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "role"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "members",
                "{member_id}",
                "role"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "member_id",
                    "orig": "member_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "confirm_self_lockout",
                    "orig": "confirm_self_lockout",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "confirm_self_lockout",
                  "member_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/projects/{project_id}/members/{member_id}/role",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "role"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "members",
                "{member_id}",
                "role"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "member_id",
                    "orig": "member_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "confirm_self_demotion",
                    "orig": "confirm_self_demotion",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "confirm_self_demotion",
                  "member_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.member"
          ]
        ]
      }
    },
    "project_permission": {
      "fields": [
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true,
          "short": "Email address of the user to grant project access to.",
          "format": "email"
        },
        {
          "name": "granted_at",
          "title": "Granted At",
          "type": "`$STRING`",
          "req": true,
          "short": "Timestamp when the permission was granted.",
          "format": "date-time"
        },
        {
          "name": "granted_to_email",
          "title": "Granted To Email",
          "type": "`$STRING`",
          "req": true,
          "short": "Email address of the user who has been granted access to the project.",
          "format": "email"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The project permission's ID."
        },
        {
          "name": "revoked_at",
          "title": "Revoked At",
          "type": "`$STRING`",
          "short": "Timestamp when the permission was revoked.",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "project_permission",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/permissions",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "permissions"
                }
              ],
              "parts": [
                "projects",
                "{id}",
                "permissions"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/permissions",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "permissions"
                }
              ],
              "parts": [
                "projects",
                "{id}",
                "permissions"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.project_permissions`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/permissions/{permission_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "permissions"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "permissions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "permission_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "permission_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ]
        ]
      }
    },
    "project_recover": {
      "fields": [
        {
          "name": "branches",
          "title": "Branches",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Branches in the project."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "project",
          "title": "Project",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Full details of the project, including configuration, consumption metrics, and ownership."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "project_recover",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/recover",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "recover"
                }
              ],
              "parts": [
                "projects",
                "{id}",
                "recover"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "project_transfer_request": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "ttl_seconds",
          "title": "Ttl Seconds",
          "type": "`$INTEGER`",
          "short": "Number of seconds the transfer request stays valid before it expires.",
          "format": "int64"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "project_transfer_request",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/transfer_requests",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "transfer_requests"
                }
              ],
              "parts": [
                "projects",
                "{id}",
                "transfer_requests"
              ],
              "rename": {
                "param": {
                  "project_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "region": {
      "fields": [
        {
          "name": "default",
          "title": "Default",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "True if this region is selected by default when no region is specified during project creation."
        },
        {
          "name": "geo_lat",
          "title": "Geo Lat",
          "type": "`$STRING`",
          "req": true,
          "short": "The geographical latitude (approximate) for the region."
        },
        {
          "name": "geo_long",
          "title": "Geo Long",
          "type": "`$STRING`",
          "req": true,
          "short": "The geographical longitude (approximate) for the region."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "A short description of the region."
        },
        {
          "name": "region_id",
          "title": "Region Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Cloud region where the resource's Postgres compute and storage reside (for example, `aws-us-east-1`)."
        }
      ],
      "name": "region",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/regions",
              "segments": [
                {
                  "lit": "regions"
                }
              ],
              "parts": [
                "regions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.regions`"
              },
              "args": {
                "query": [
                  {
                    "name": "org_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "org_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "role": {
      "fields": [
        {
          "name": "authentication_method",
          "title": "Authentication Method",
          "type": "`$STRING`",
          "short": "Authentication method configured for this role: `password`, `oauth`, or `no_login`."
        },
        {
          "name": "branch_id",
          "title": "Branch Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The ID of the branch this role belongs to."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the role was created",
          "format": "date-time"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Postgres role name within the branch."
        },
        {
          "name": "password",
          "title": "Password",
          "type": "`$STRING`",
          "short": "The role password"
        },
        {
          "name": "protected",
          "title": "Protected",
          "type": "`$BOOLEAN`",
          "short": "Whether or not the role is system-protected"
        },
        {
          "name": "role",
          "title": "Role",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Properties of the role to create."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "req": true,
          "short": "A timestamp indicating when the role was last updated",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "role",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/roles",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "roles"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "roles"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "role": "`reqdata`"
                },
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/roles",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "roles"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "roles"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.roles`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "roles",
                "{id}"
              ],
              "rename": {
                "param": {
                  "role_name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.role`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "role_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "roles"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "roles",
                "{id}"
              ],
              "rename": {
                "param": {
                  "role_name": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "role_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "role_operation": {
      "fields": [
        {
          "name": "operations",
          "title": "Operations",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "role",
          "title": "Role",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Role details for the requested database role."
        }
      ],
      "name": "role_operation",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "roles"
                },
                {
                  "var": "role_name"
                },
                {
                  "lit": "reset_password"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "roles",
                "{role_name}",
                "reset_password"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "role_name",
                    "orig": "role_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id",
                  "role_name"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch",
            "$.main.kit.entity.role"
          ]
        ]
      }
    },
    "role_password": {
      "fields": [
        {
          "name": "password",
          "title": "Password",
          "type": "`$STRING`",
          "req": true,
          "short": "The role password"
        }
      ],
      "name": "role_password",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reveal_password",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "roles"
                },
                {
                  "var": "role_name"
                },
                {
                  "lit": "reveal_password"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "roles",
                "{role_name}",
                "reveal_password"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "role_name",
                    "orig": "role_name",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id",
                  "role_name"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch",
            "$.main.kit.entity.role"
          ]
        ]
      }
    },
    "send_neon_auth_test_email": {
      "fields": [
        {
          "name": "error_message",
          "title": "Error Message",
          "type": "`$STRING`",
          "short": "The error message from the email server."
        },
        {
          "name": "host",
          "title": "Host",
          "type": "`$STRING`",
          "req": true,
          "short": "Hostname of the email server."
        },
        {
          "name": "password",
          "title": "Password",
          "type": "`$STRING`",
          "req": true,
          "short": "Password for authenticating with the SMTP server."
        },
        {
          "name": "port",
          "title": "Port",
          "type": "`$INTEGER`",
          "req": true,
          "short": "TCP port of the SMTP server."
        },
        {
          "name": "recipient_email",
          "title": "Recipient Email",
          "type": "`$STRING`",
          "req": true,
          "short": "The email address to send the test email to.",
          "format": "email"
        },
        {
          "name": "sender_email",
          "title": "Sender Email",
          "type": "`$STRING`",
          "req": true,
          "short": "Email address used as the From address on outgoing auth emails."
        },
        {
          "name": "sender_name",
          "title": "Sender Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Display name shown as the sender in outgoing emails."
        },
        {
          "name": "success",
          "title": "Success",
          "type": "`$BOOLEAN`",
          "req": true,
          "short": "Whether the test email was sent successfully."
        },
        {
          "name": "username",
          "title": "Username",
          "type": "`$STRING`",
          "req": true,
          "short": "Username for authenticating with the SMTP server."
        }
      ],
      "name": "send_neon_auth_test_email",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/email_provider/test",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "email_provider"
                },
                {
                  "lit": "test"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "email_provider",
                "test"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/send_test_email",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "send_test_email"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "send_test_email"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "snapshot": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "req": true,
          "short": "Timestamp when the snapshot was created, in RFC 3339 format (UTC)."
        },
        {
          "name": "diff_size",
          "title": "Diff Size",
          "type": "`$INTEGER`",
          "short": "Incremental Postgres storage size in bytes since the previous scheduled snapshot, when the snapshot is billed on incremental (diff) usage.",
          "format": "int64"
        },
        {
          "name": "expires_at",
          "title": "Expires At",
          "type": "`$STRING`",
          "short": "RFC 3339 timestamp when the snapshot expires and is eligible for deletion."
        },
        {
          "name": "full_size",
          "title": "Full Size",
          "type": "`$INTEGER`",
          "short": "Full logical size of the snapshot in bytes at the time it was taken.",
          "format": "int64"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The snapshot ID."
        },
        {
          "name": "lsn",
          "title": "Lsn",
          "type": "`$STRING`",
          "short": "WAL position (Log Sequence Number) at which the snapshot was captured, in Postgres LSN format (for example, `0/3000000`)."
        },
        {
          "name": "manual",
          "title": "Manual",
          "type": "`$BOOLEAN`",
          "short": "True if the snapshot was created manually rather than by a schedule."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Human-readable label for the snapshot."
        },
        {
          "name": "operations",
          "title": "Operations",
          "type": "`$ARRAY`",
          "req": true
        },
        {
          "name": "slug",
          "title": "Slug",
          "type": "`$STRING`",
          "short": "Snapshot resource ID, unique within the project."
        },
        {
          "name": "snapshot",
          "title": "Snapshot",
          "type": "`$OBJECT`",
          "req": true,
          "short": "Fields to update on the snapshot."
        },
        {
          "name": "source_branch_id",
          "title": "Source Branch Id",
          "type": "`$STRING`",
          "short": "Branch from which this snapshot was created."
        },
        {
          "name": "timestamp",
          "title": "Timestamp",
          "type": "`$STRING`",
          "short": "Point in time captured by the snapshot, in RFC 3339 format (UTC)."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "snapshot",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/snapshot",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "snapshot"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "snapshot"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.snapshot`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "expires_at",
                    "orig": "expires_at",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2025-08-05T22:00:00Z"
                  },
                  {
                    "name": "lsn",
                    "orig": "lsn",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "slug",
                    "orig": "slug",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "timestamp",
                    "orig": "timestamp",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2025-08-05T22:00:00Z"
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "expires_at",
                  "lsn",
                  "name",
                  "project_id",
                  "slug",
                  "timestamp"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/snapshots/{snapshot_id}/restore",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "snapshots"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "restore"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "snapshots",
                "{id}",
                "restore"
              ],
              "rename": {
                "param": {
                  "snapshot_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "snapshot_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "restore",
                "exist": [
                  "id",
                  "name",
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/snapshots",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "snapshots"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "snapshots"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.snapshots`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/projects/{project_id}/snapshots/{snapshot_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "snapshots"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "snapshots",
                "{id}"
              ],
              "rename": {
                "param": {
                  "snapshot_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "snapshot_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/snapshots/{snapshot_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "snapshots"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "snapshots",
                "{id}"
              ],
              "rename": {
                "param": {
                  "snapshot_id": "id"
                }
              },
              "transform": {
                "req": {
                  "snapshot": "`reqdata`"
                },
                "res": "`body.snapshot`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "snapshot_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "spending_limit": {
      "fields": [
        {
          "name": "spending_limit_cents",
          "title": "Spending Limit Cents",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Monthly spending cap in cents.",
          "format": "int64"
        }
      ],
      "name": "spending_limit",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{org_id}/billing/spending_limit",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "spending_limit"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "billing",
                "spending_limit"
              ],
              "rename": {
                "param": {
                  "org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "organization_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/organizations/{org_id}/billing/spending_limit",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "billing"
                },
                {
                  "lit": "spending_limit"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "billing",
                "spending_limit"
              ],
              "rename": {
                "param": {
                  "org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "organization_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization"
          ]
        ]
      }
    },
    "trigger": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "triggers",
          "title": "Triggers",
          "type": "`$ARRAY`",
          "req": true
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "trigger",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/projects/{project_id}/branches/{branch_id}/triggers",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "triggers"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "triggers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.trigger`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/triggers",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "triggers"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "triggers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.triggers`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "triggers"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "triggers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "trigger_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.trigger`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "trigger_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "triggers"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "triggers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "trigger_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.trigger`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "trigger_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "id",
                  "project_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "update_neon_auth_user_role": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "ID of the updated user"
        },
        {
          "name": "roles",
          "title": "Roles",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Roles to assign to the user in the Neon Auth (Better Auth) directory."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_neon_auth_user_role",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PUT",
              "orig": "/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}/role",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "branches"
                },
                {
                  "var": "branch_id"
                },
                {
                  "lit": "auth"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "user_id"
                },
                {
                  "lit": "role"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "branches",
                "{branch_id}",
                "auth",
                "users",
                "{user_id}",
                "role"
              ],
              "rename": {
                "param": {
                  "auth_user_id": "user_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "branch_id",
                    "orig": "branch_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "user_id",
                    "orig": "auth_user_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "branch_id",
                  "project_id",
                  "user_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.project",
            "$.main.kit.entity.branch"
          ]
        ]
      }
    },
    "vpc_endpoint": {
      "fields": [
        {
          "name": "example_restricted_projects",
          "title": "Example Restricted Projects",
          "type": "`$ARRAY`",
          "req": true,
          "short": "A list of example projects that are restricted to use this VPC endpoint."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "label",
          "title": "Label",
          "type": "`$STRING`",
          "req": true,
          "short": "A descriptive label for the VPC endpoint"
        },
        {
          "name": "num_restricted_projects",
          "title": "Num Restricted Projects",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The number of projects that are restricted to use this VPC endpoint."
        },
        {
          "name": "region_id",
          "title": "Region Id",
          "type": "`$STRING`",
          "req": true,
          "short": "The region where the VPC endpoint is located"
        },
        {
          "name": "state",
          "title": "State",
          "type": "`$STRING`",
          "req": true,
          "short": "The current state of the VPC endpoint."
        },
        {
          "name": "vpc_endpoint_id",
          "title": "Vpc Endpoint Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Cloud provider identifier for the VPC endpoint."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "vpc_endpoint",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "vpc"
                },
                {
                  "lit": "region"
                },
                {
                  "var": "region_id"
                },
                {
                  "lit": "vpc_endpoints"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "vpc",
                "region",
                "{region_id}",
                "vpc_endpoints"
              ],
              "rename": {
                "param": {
                  "org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.endpoints`"
              },
              "args": {
                "params": [
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "region_id",
                    "orig": "region_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "organization_id",
                  "region_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{org_id}/vpc/vpc_endpoints",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "vpc"
                },
                {
                  "lit": "vpc_endpoints"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "vpc",
                "vpc_endpoints"
              ],
              "rename": {
                "param": {
                  "org_id": "organization_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.endpoints`"
              },
              "args": {
                "params": [
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "organization_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/projects/{project_id}/vpc_endpoints",
              "segments": [
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "vpc_endpoints"
                }
              ],
              "parts": [
                "projects",
                "{project_id}",
                "vpc_endpoints"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.endpoints`"
              },
              "args": {
                "params": [
                  {
                    "name": "project_id",
                    "orig": "project_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "project_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}",
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "vpc"
                },
                {
                  "lit": "region"
                },
                {
                  "var": "region_id"
                },
                {
                  "lit": "vpc_endpoints"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "organizations",
                "{organization_id}",
                "vpc",
                "region",
                "{region_id}",
                "vpc_endpoints",
                "{id}"
              ],
              "rename": {
                "param": {
                  "org_id": "organization_id",
                  "vpc_endpoint_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "vpc_endpoint_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "organization_id",
                    "orig": "org_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "region_id",
                    "orig": "region_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "organization_id",
                  "region_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.organization"
          ],
          [
            "$.main.kit.entity.project"
          ],
          [
            "$.main.kit.entity.organization",
            "$.main.kit.entity.region"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

