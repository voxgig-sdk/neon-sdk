"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "anonymize",
        "accessor": "Anonymize",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/anonymize",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "branch_id": "br-aged-salad-637688",
            "project_id": "simple-truth-637688",
            "state": "anonymizing",
            "status_message": "Anonymizing table mydb.public.users (3/5)",
            "created_at": "2022-11-30T18:25:15Z",
            "updated_at": "2022-11-30T18:30:22Z",
            "last_run": {
                "started_at": "2022-11-30T18:25:15Z",
                "completed_at": "2022-11-30T18:30:22Z",
                "triggered_by": "df6c5f70-6cbf-4c8c-9e7a-74c3ddbd8f9f",
                "masked_columns": 12
            }
        },
        "idField": "id"
    },
    {
        "entity": "anonymized_branch_status",
        "accessor": "AnonymizedBranchStatus",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/anonymized_status",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "branch_id": "br-aged-salad-637688",
            "project_id": "simple-truth-637688",
            "state": "anonymizing",
            "status_message": "Anonymizing table mydb.public.users (3/5)",
            "created_at": "2022-11-30T18:25:15Z",
            "updated_at": "2022-11-30T18:30:22Z",
            "last_run": {
                "started_at": "2022-11-30T18:25:15Z",
                "completed_at": "2022-11-30T18:30:22Z",
                "triggered_by": "df6c5f70-6cbf-4c8c-9e7a-74c3ddbd8f9f",
                "masked_columns": 12
            }
        },
        "idField": "id"
    },
    {
        "entity": "api_key",
        "accessor": "ApiKey",
        "op": "create",
        "method": "POST",
        "path": "/api_keys",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": 165434,
            "key": "9v1faketcjbl4sn1013keyd43n2a8qlfakeog8yvp40hx16keyjo1bpds4y2dfms3",
            "name": "mykey",
            "created_at": "2022-11-15T20:13:35Z",
            "created_by": "629982cc-de05-43db-ae16-28f2399c4910"
        },
        "idField": "id"
    },
    {
        "entity": "api_key",
        "accessor": "ApiKey",
        "op": "list",
        "method": "GET",
        "path": "/api_keys",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": 165432,
                "name": "mykey_1",
                "created_at": "2022-11-15T20:13:35Z",
                "created_by": {
                    "id": "629982cc-de05-43db-ae16-28f2399c4910",
                    "name": "John Smith",
                    "image": "http://link.to.image"
                },
                "last_used_at": "2022-11-15T20:22:51Z",
                "last_used_from_addr": "192.0.2.255"
            },
            {
                "id": 165433,
                "name": "mykey_2",
                "created_at": "2022-11-15T20:12:36Z",
                "created_by": {
                    "id": "629982cc-de05-43db-ae16-28f2399c4910",
                    "name": "John Smith",
                    "image": "http://link.to.image"
                },
                "last_used_at": "2022-11-15T20:15:04Z",
                "last_used_from_addr": "192.0.2.255"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "api_key",
        "accessor": "ApiKey",
        "op": "remove",
        "method": "DELETE",
        "path": "/api_keys/{key_id}",
        "args": [
            {
                "name": "id",
                "wire": "key_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": 165435,
            "name": "mykey",
            "created_at": "2022-11-15T20:13:35Z",
            "created_by": "629982cc-de05-43db-ae16-28f2399c4910",
            "last_used_at": "2022-11-15T20:15:04Z",
            "last_used_from_addr": "192.0.2.255",
            "revoked": true
        },
        "idField": "id"
    },
    {
        "entity": "auth",
        "accessor": "Auth",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/domains",
        "action": "domain",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "auth",
        "accessor": "Auth",
        "op": "load",
        "method": "GET",
        "path": "/auth",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "account_id": "x",
            "auth_method": "keycloak",
            "auth_data": "x"
        },
        "idField": "id"
    },
    {
        "entity": "auth",
        "accessor": "Auth",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}",
        "args": [
            {
                "name": "auth_user_id",
                "wire": "auth_user_id",
                "value": "p1"
            },
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "auth",
        "accessor": "Auth",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "oauth_provider_id",
                "wire": "oauth_provider_id",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "auth",
        "accessor": "Auth",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/auth",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "auth",
        "accessor": "Auth",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/domains",
        "action": "domain",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "auth_legacy",
        "accessor": "AuthLegacy",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/auth/domains",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "auth_legacy",
        "accessor": "AuthLegacy",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/auth/integration/{auth_provider}",
        "args": [
            {
                "name": "auth_provider",
                "wire": "auth_provider",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "auth_legacy",
        "accessor": "AuthLegacy",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/auth/users/{auth_user_id}",
        "args": [
            {
                "name": "auth_user_id",
                "wire": "auth_user_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "auth_legacy",
        "accessor": "AuthLegacy",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/auth/oauth_providers/{oauth_provider_id}",
        "args": [
            {
                "name": "oauth_provider_id",
                "wire": "oauth_provider_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "auth_legacy",
        "accessor": "AuthLegacy",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/auth/domains",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "available_preload_library",
        "accessor": "AvailablePreloadLibrary",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/available_preload_libraries",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "libraries": [
                {
                    "description": "x",
                    "is_default": true,
                    "is_experimental": true,
                    "library_name": "x",
                    "version": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "backup_schedule",
        "accessor": "BackupSchedule",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/backup_schedule",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "schedule": [
                {
                    "day": 1,
                    "frequency": "daily",
                    "hour": 1,
                    "month": 1,
                    "retention_seconds": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "branch": {
                "id": "br-wispy-meadow-118737",
                "project_id": "spring-example-302709",
                "parent_id": "br-aged-salad-637688",
                "parent_lsn": "0/1DE2850",
                "name": "dev2",
                "protected": false,
                "current_state": "ready",
                "state_changed_at": "2022-11-30T20:09:48Z",
                "creation_source": "console",
                "created_at": "2022-11-30T19:09:48Z",
                "updated_at": "2022-12-01T19:53:05Z",
                "default": true,
                "init_source": "parent-data",
                "data_transfer_bytes": 72911987,
                "written_data_bytes": 542998300,
                "compute_time_seconds": 823880990,
                "active_time_seconds": 922200,
                "cpu_used_sec": 461100
            },
            "endpoints": [
                {
                    "autoscaling_limit_max_cu": 1,
                    "autoscaling_limit_min_cu": 1,
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-12-03T15:37:07Z",
                    "creation_source": "console",
                    "current_state": "init",
                    "disabled": false,
                    "host": "ep-silent-smoke-806639.us-east-2.aws.neon.tech",
                    "id": "ep-silent-smoke-806639",
                    "name": "My cool compute",
                    "passwordless_access": true,
                    "pending_state": "active",
                    "pooler_enabled": false,
                    "pooler_mode": "transaction",
                    "project_id": "spring-example-302709",
                    "provisioner": "k8s-neonvm",
                    "proxy_host": "us-east-2.aws.neon.tech",
                    "region_id": "aws-us-east-2",
                    "settings": {
                        "pg_settings": {}
                    },
                    "suspend_timeout_seconds": 0,
                    "type": "read_write",
                    "updated_at": "2022-12-03T15:37:07Z"
                }
            ],
            "operations": [
                {
                    "action": "start_compute",
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-15T20:02:00Z",
                    "endpoint_id": "ep-silent-smoke-806639",
                    "failures_count": 0,
                    "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
                    "project_id": "spring-example-302709",
                    "status": "finished",
                    "total_duration_ms": 200,
                    "updated_at": "2022-11-15T20:02:02Z"
                }
            ],
            "roles": [
                {
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-23T17:42:25Z",
                    "name": "casey",
                    "protected": false,
                    "updated_at": "2022-11-23T17:42:25Z"
                }
            ],
            "databases": [
                {
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-30T18:25:15Z",
                    "id": 834686,
                    "name": "neondb",
                    "owner_name": "casey",
                    "updated_at": "2022-11-30T18:25:15Z"
                }
            ],
            "connection_uris": [
                {
                    "connection_uri": "x",
                    "connection_parameters": {
                        "database": "x",
                        "password": "x",
                        "role": "x",
                        "host": "x",
                        "pooler_host": "x"
                    }
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {
            "cursor": "v1",
            "include_deleted": "v1",
            "limit": "v1",
            "search": "v1",
            "sort_by": "v1",
            "sort_order": "v1"
        },
        "headers": [],
        "query": [
            "search",
            "sort_by",
            "cursor",
            "sort_order",
            "limit",
            "include_deleted"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "branches": [
                {
                    "id": "br-aged-salad-637688",
                    "project_id": "shiny-wind-028834",
                    "name": "main",
                    "current_state": "ready",
                    "state_changed_at": "2022-11-30T20:09:48Z",
                    "logical_size": 28,
                    "created_at": "2022-11-23T17:42:25Z",
                    "updated_at": "2022-11-23T17:42:26Z",
                    "data_transfer_bytes": 1000000,
                    "written_data_bytes": 100800,
                    "compute_time_seconds": 100,
                    "active_time_seconds": 100,
                    "cpu_used_sec": 100,
                    "default": true,
                    "protected": false,
                    "creation_source": "console",
                    "init_source": "parent-data"
                },
                {
                    "id": "br-sweet-breeze-497520",
                    "project_id": "shiny-wind-028834",
                    "parent_id": "br-aged-salad-637688",
                    "parent_lsn": "0/1DE2850",
                    "name": "dev2",
                    "current_state": "ready",
                    "state_changed_at": "2022-11-30T20:09:48Z",
                    "logical_size": 28,
                    "created_at": "2022-11-30T19:09:48Z",
                    "updated_at": "2022-11-30T19:09:49Z",
                    "data_transfer_bytes": 1000000,
                    "written_data_bytes": 100800,
                    "compute_time_seconds": 100,
                    "active_time_seconds": 100,
                    "cpu_used_sec": 100,
                    "default": true,
                    "protected": false,
                    "creation_source": "console",
                    "init_source": "parent-data"
                },
                {
                    "id": "br-raspy-hill-832856",
                    "project_id": "shiny-wind-028834",
                    "parent_id": "br-aged-salad-637688",
                    "parent_lsn": "0/19623D8",
                    "name": "dev1",
                    "current_state": "ready",
                    "state_changed_at": "2022-11-30T20:09:48Z",
                    "logical_size": 21,
                    "created_at": "2022-11-30T17:36:57Z",
                    "updated_at": "2022-11-30T17:36:57Z",
                    "data_transfer_bytes": 1000000,
                    "written_data_bytes": 100800,
                    "compute_time_seconds": 100,
                    "active_time_seconds": 100,
                    "cpu_used_sec": 100,
                    "default": true,
                    "protected": false,
                    "creation_source": "console",
                    "init_source": "parent-data"
                }
            ],
            "annotations": {
                "br-aged-salad-637688": {
                    "object": {
                        "type": "console/branch",
                        "id": "br-aged-salad-637688"
                    },
                    "value": {
                        "vercel-commit-ref": "test"
                    },
                    "created_at": "2022-11-23T17:42:25Z",
                    "updated_at": "2022-11-23T17:42:26Z"
                }
            },
            "pagination": {
                "next": "eyJjcmVhdGV",
                "sort_by": "updated_at",
                "sort_order": "desc"
            }
        },
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}",
        "args": [
            {
                "name": "id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "branch": {
                "id": "br-aged-salad-637688",
                "project_id": "shiny-wind-028834",
                "name": "main",
                "current_state": "ready",
                "state_changed_at": "2022-11-30T20:09:48Z",
                "logical_size": 28,
                "created_at": "2022-11-23T17:42:25Z",
                "updated_at": "2022-11-23T17:42:26Z",
                "data_transfer_bytes": 1000000,
                "written_data_bytes": 100800,
                "compute_time_seconds": 100,
                "active_time_seconds": 100,
                "cpu_used_sec": 100,
                "default": true,
                "protected": false,
                "creation_source": "console",
                "init_source": "parent-data"
            },
            "annotation": {
                "object": {
                    "type": "console/branch",
                    "id": "br-aged-salad-637688"
                },
                "value": {
                    "vercel-commit-ref": "test"
                },
                "created_at": "2022-11-23T17:42:25Z",
                "updated_at": "2022-11-23T17:42:26Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/count",
        "action": "count",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {
            "search": "v1"
        },
        "headers": [],
        "query": [
            "search"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "count": 1
        },
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}",
        "args": [
            {
                "name": "id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "branch": {
                "id": "br-aged-salad-637688",
                "project_id": "shiny-wind-028834",
                "name": "main",
                "current_state": "ready",
                "state_changed_at": "2022-11-30T20:09:48Z",
                "logical_size": 28,
                "created_at": "2022-11-23T17:42:25Z",
                "updated_at": "2022-11-23T17:42:26Z",
                "data_transfer_bytes": 1000000,
                "written_data_bytes": 100800,
                "compute_time_seconds": 100,
                "active_time_seconds": 100,
                "cpu_used_sec": 100,
                "default": true,
                "protected": false,
                "creation_source": "console",
                "init_source": "parent-data"
            },
            "operations": [
                {
                    "id": "b6afbc21-2990-4a76-980b-b57d8c2948f2",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-sweet-breeze-497520",
                    "endpoint_id": "ep-soft-violet-752733",
                    "action": "suspend_compute",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-01T19:53:05Z",
                    "updated_at": "2022-12-01T19:53:05Z",
                    "total_duration_ms": 100
                },
                {
                    "id": "b6afbc21-2990-4a76-980b-b57d8c2948f2",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-sweet-breeze-497520",
                    "action": "delete_timeline",
                    "status": "scheduling",
                    "failures_count": 0,
                    "created_at": "2022-12-01T19:53:05Z",
                    "updated_at": "2022-12-01T19:53:05Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "branch",
        "accessor": "Branch",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}",
        "args": [
            {
                "name": "id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "branch": {
                "id": "br-icy-dream-250089",
                "project_id": "shiny-wind-028834",
                "parent_id": "br-aged-salad-637688",
                "parent_lsn": "0/1E19478",
                "name": "mybranch",
                "current_state": "ready",
                "state_changed_at": "2022-11-30T20:09:48Z",
                "created_at": "2022-11-23T17:42:25Z",
                "updated_at": "2022-11-23T17:42:26Z",
                "data_transfer_bytes": 1000000,
                "written_data_bytes": 100800,
                "compute_time_seconds": 100,
                "active_time_seconds": 100,
                "cpu_used_sec": 100,
                "default": true,
                "protected": false,
                "creation_source": "console",
                "init_source": "parent-data"
            },
            "operations": []
        },
        "idField": "id"
    },
    {
        "entity": "branch_ai_gateway",
        "accessor": "BranchAiGateway",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/ai_gateway",
        "args": [
            {
                "name": "id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true,
            "base_url": "https://br-cool-moon-42-api.ai.c-2.local.neon.build"
        },
        "idField": "id"
    },
    {
        "entity": "branch_operation",
        "accessor": "BranchOperation",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/restore",
        "action": "restore",
        "args": [
            {
                "name": "id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "branch": {
                "id": "br-wispy-meadow-118737",
                "project_id": "spring-example-302709",
                "parent_id": "br-aged-salad-637688",
                "parent_lsn": "0/1DE2850",
                "name": "dev2",
                "protected": false,
                "current_state": "ready",
                "state_changed_at": "2022-11-30T20:09:48Z",
                "creation_source": "console",
                "created_at": "2022-11-30T19:09:48Z",
                "updated_at": "2022-12-01T19:53:05Z",
                "default": true,
                "init_source": "parent-data",
                "data_transfer_bytes": 72911987,
                "written_data_bytes": 542998300,
                "compute_time_seconds": 823880990,
                "active_time_seconds": 922200,
                "cpu_used_sec": 461100
            },
            "operations": [
                {
                    "action": "start_compute",
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-15T20:02:00Z",
                    "endpoint_id": "ep-silent-smoke-806639",
                    "failures_count": 0,
                    "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
                    "project_id": "spring-example-302709",
                    "status": "finished",
                    "total_duration_ms": 200,
                    "updated_at": "2022-11-15T20:02:02Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "branch_operation",
        "accessor": "BranchOperation",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/set_as_default",
        "action": "set_as_default",
        "args": [
            {
                "name": "id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "branch": {
                "cpu_used_sec": 1,
                "active_time_seconds": 1,
                "compute_time_seconds": 1,
                "written_data_bytes": 100,
                "data_transfer_bytes": 100,
                "id": "br-icy-dream-250089",
                "project_id": "shiny-wind-028834",
                "parent_id": "br-aged-salad-637688",
                "parent_lsn": "0/1E19478",
                "name": "mybranch",
                "current_state": "ready",
                "state_changed_at": "2022-11-30T20:09:48Z",
                "created_at": "2022-11-23T17:42:25Z",
                "updated_at": "2022-11-23T17:42:26Z",
                "default": true,
                "protected": false,
                "creation_source": "console",
                "init_source": "parent-data"
            },
            "operations": []
        },
        "idField": "id"
    },
    {
        "entity": "branch_schema",
        "accessor": "BranchSchema",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/schema",
        "args": [
            {
                "name": "id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {
            "db_name": "v1",
            "format": "v1",
            "lsn": "v1",
            "timestamp": "2022-11-30T20:09:48Z"
        },
        "headers": [],
        "query": [
            "db_name",
            "lsn",
            "timestamp",
            "format"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "sql": "x",
            "json": {
                "tables": [
                    {
                        "columns": [
                            {
                                "generated": true,
                                "name": "x",
                                "nullable": true,
                                "type": "x"
                            }
                        ],
                        "constraints": [
                            {
                                "columns": [],
                                "name": "x",
                                "referenced_table": {},
                                "type": "x"
                            }
                        ],
                        "name": "x",
                        "schema": "x"
                    }
                ]
            }
        },
        "idField": "id"
    },
    {
        "entity": "branch_schema_compare",
        "accessor": "BranchSchemaCompare",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/compare_schema",
        "action": "compare_schema",
        "args": [
            {
                "name": "id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {
            "base_branch_id": "v1",
            "base_lsn": "v1",
            "base_timestamp": "2022-11-30T20:09:48Z",
            "db_name": "v1",
            "lsn": "v1",
            "timestamp": "2022-11-30T20:09:48Z"
        },
        "headers": [],
        "query": [
            "base_branch_id",
            "db_name",
            "lsn",
            "timestamp",
            "base_lsn",
            "base_timestamp"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "diff": "x"
        },
        "idField": "id"
    },
    {
        "entity": "branch_storage",
        "accessor": "BranchStorage",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/storage",
        "args": [
            {
                "name": "id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true,
            "s3_endpoint": "https://br-cool-moon-42.storage.c-2.local.neon.build",
            "region": "us-east-2",
            "force_path_style": true
        },
        "idField": "id"
    },
    {
        "entity": "bucket",
        "accessor": "Bucket",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/buckets",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "bucket": {
                "name": "x",
                "access_level": "private",
                "created_at": "2026-01-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "bucket",
        "accessor": "Bucket",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/buckets",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "buckets": [
                {
                    "access_level": "private",
                    "created_at": "2026-01-01T00:00:00Z",
                    "name": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "bucket",
        "accessor": "Bucket",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/download",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "bucket_id",
                "wire": "bucket_name",
                "value": "p2"
            },
            {
                "name": "object_key",
                "wire": "object_key",
                "value": "p3"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p4"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "bucket",
        "accessor": "Bucket",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "bucket_id",
                "wire": "bucket_name",
                "value": "p2"
            },
            {
                "name": "object_key",
                "wire": "object_key",
                "value": "p3"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p4"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "bucket",
        "accessor": "Bucket",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects-by-prefix",
        "action": "objects_by_prefix",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "bucket_name",
                "wire": "bucket_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {
            "prefix": "v1"
        },
        "headers": [],
        "query": [
            "prefix"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "deleted": 1
        },
        "idField": "id"
    },
    {
        "entity": "bucket",
        "accessor": "Bucket",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "bucket_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "bucket_objects_list",
        "accessor": "BucketObjectsList",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "bucket_name",
                "wire": "bucket_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {
            "cursor": "v1",
            "delimiter": "v1",
            "limit": "v1",
            "prefix": "v1"
        },
        "headers": [],
        "query": [
            "prefix",
            "delimiter",
            "cursor",
            "limit"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "folders": [
                "x"
            ],
            "objects": [
                {
                    "etag": "x",
                    "key": "x",
                    "last_modified": "2026-01-01T00:00:00Z",
                    "size": 1
                }
            ],
            "prefix": "x",
            "next_cursor": "x",
            "is_truncated": true
        },
        "idField": "id"
    },
    {
        "entity": "connection_uri",
        "accessor": "ConnectionUri",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/connection_uri",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {
            "branch_id": "v1",
            "database_name": "v1",
            "endpoint_id": "v1",
            "pooled": "v1",
            "role_name": "v1"
        },
        "headers": [],
        "query": [
            "branch_id",
            "endpoint_id",
            "database_name",
            "role_name",
            "pooled"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "uri": "x"
        },
        "idField": "id"
    },
    {
        "entity": "consumption",
        "accessor": "Consumption",
        "op": "list",
        "method": "GET",
        "path": "/consumption_history/v2/branches",
        "args": [],
        "select": {
            "branch_id": "v1",
            "cursor": "v1",
            "from": "v1",
            "granularity": "v1",
            "limit": "v1",
            "metric": "v1",
            "org_id": "v1",
            "project_id": "v1",
            "to": "v1"
        },
        "headers": [],
        "query": [
            "cursor",
            "limit",
            "project_ids",
            "branch_ids",
            "from",
            "to",
            "granularity",
            "org_id",
            "metrics"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "branches": [
                {
                    "branch_id": "br-cool-darkness-12345678",
                    "periods": [
                        {
                            "consumption": [
                                {
                                    "metrics": [
                                        {
                                            "metric_name": "compute_unit_seconds",
                                            "value": 100
                                        },
                                        {
                                            "metric_name": "root_branch_bytes_month",
                                            "value": 1000000
                                        },
                                        {
                                            "metric_name": "child_branch_bytes_month",
                                            "value": 1000000
                                        }
                                    ],
                                    "timeframe_end": "2024-03-23T00:00:00Z",
                                    "timeframe_start": "2024-03-22T00:00:00Z"
                                }
                            ],
                            "period_id": "79ec829f-1828-4006-ac82-9f1828a0067d",
                            "period_plan": "scale",
                            "period_start": "2024-03-01T00:00:00Z"
                        }
                    ],
                    "project_id": "x"
                }
            ],
            "pagination": {
                "cursor": "2022-12-07T00:45:05.262011Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "consumption",
        "accessor": "Consumption",
        "op": "list",
        "method": "GET",
        "path": "/consumption_history/projects",
        "args": [],
        "select": {
            "cursor": "v1",
            "from": "v1",
            "granularity": "v1",
            "include_v1_metric": "v1",
            "limit": "v1",
            "metric": "v1",
            "org_id": "v1",
            "project_id": "v1",
            "to": "v1"
        },
        "headers": [],
        "query": [
            "cursor",
            "limit",
            "project_ids",
            "from",
            "to",
            "granularity",
            "org_id",
            "include_v1_metrics",
            "metrics"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "projects": [
                {
                    "periods": [
                        {
                            "consumption": [
                                {
                                    "active_time_seconds": 27853,
                                    "compute_time_seconds": 18346,
                                    "synthetic_storage_size_bytes": 0,
                                    "timeframe_end": "2024-03-23T00:00:00Z",
                                    "timeframe_start": "2024-03-22T00:00:00Z",
                                    "written_data_bytes": 1073741824
                                },
                                {
                                    "active_time_seconds": 17498,
                                    "compute_time_seconds": 3378,
                                    "synthetic_storage_size_bytes": 0,
                                    "timeframe_end": "2024-03-24T00:00:00Z",
                                    "timeframe_start": "2024-03-23T00:00:00Z",
                                    "written_data_bytes": 5741824
                                }
                            ],
                            "period_id": "79ec829f-1828-4006-ac82-9f1828a0067d",
                            "period_plan": "scale",
                            "period_start": "2024-03-01T00:00:00Z"
                        }
                    ],
                    "project_id": "x"
                }
            ],
            "pagination": {
                "cursor": "2022-12-07T00:45:05.262011Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "consumption",
        "accessor": "Consumption",
        "op": "list",
        "method": "GET",
        "path": "/consumption_history/v2/projects",
        "args": [],
        "select": {
            "cursor": "v1",
            "from": "v1",
            "granularity": "v1",
            "limit": "v1",
            "metric": "v1",
            "org_id": "v1",
            "project_id": "v1",
            "to": "v1"
        },
        "headers": [],
        "query": [
            "cursor",
            "limit",
            "project_ids",
            "from",
            "to",
            "granularity",
            "org_id",
            "metrics"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "projects": [
                {
                    "periods": [
                        {
                            "consumption": [
                                {
                                    "metrics": [
                                        {
                                            "metric_name": "compute_unit_seconds",
                                            "value": 100
                                        },
                                        {
                                            "metric_name": "root_branch_bytes_month",
                                            "value": 1000000
                                        },
                                        {
                                            "metric_name": "child_branch_bytes_month",
                                            "value": 1000000
                                        }
                                    ],
                                    "timeframe_end": "2024-03-23T00:00:00Z",
                                    "timeframe_start": "2024-03-22T00:00:00Z"
                                }
                            ],
                            "period_id": "79ec829f-1828-4006-ac82-9f1828a0067d",
                            "period_plan": "scale",
                            "period_start": "2024-03-01T00:00:00Z"
                        }
                    ],
                    "project_id": "x"
                }
            ],
            "pagination": {
                "cursor": "2022-12-07T00:45:05.262011Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "create_credential",
        "accessor": "CreateCredential",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/credentials",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "token_id": "x",
            "token_id_short": "x",
            "name": "x",
            "api_token": "x",
            "s3_secret_access_key": "x",
            "scopes": [
                "storage:read"
            ],
            "branch_id": "x",
            "created_at": "2026-01-01T00:00:00Z",
            "expires_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "credential",
        "accessor": "Credential",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/reveal",
        "action": "reveal",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "token_id",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "token_id": "x",
            "api_token": "x",
            "s3_secret_access_key": "x"
        },
        "idField": "id"
    },
    {
        "entity": "credential",
        "accessor": "Credential",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}/rotate",
        "action": "rotate",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "token_id",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "token_id": "x",
            "token_id_short": "x",
            "name": "x",
            "api_token": "x",
            "s3_secret_access_key": "x",
            "scopes": [
                "storage:read"
            ],
            "branch_id": "x",
            "principal_type": "user",
            "created_at": "2026-01-01T00:00:00Z",
            "expires_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "credential",
        "accessor": "Credential",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/credentials",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "credentials": [
                {
                    "branch_id": "x",
                    "created_at": "2026-01-01T00:00:00Z",
                    "expires_at": "2026-01-01T00:00:00Z",
                    "function_id": "x",
                    "last_used_at": "2026-01-01T00:00:00Z",
                    "name": "x",
                    "principal_type": "x",
                    "revoked_at": "2026-01-01T00:00:00Z",
                    "scopes": [
                        "storage:read"
                    ],
                    "token_id": "x",
                    "token_id_short": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "credential",
        "accessor": "Credential",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/credentials/{token_id}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "token_id",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "current_user_info",
        "accessor": "CurrentUserInfo",
        "op": "list",
        "method": "GET",
        "path": "/users/me",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "active_seconds_limit": 1,
            "billing_account": {
                "address_city": "x",
                "address_country": "x",
                "address_country_name": "x",
                "address_line1": "x",
                "address_line2": "x",
                "address_postal_code": "x",
                "address_state": "x",
                "email": "x",
                "name": "x",
                "orb_portal_url": "x",
                "payment_method": "UNKNOWN",
                "payment_source": {
                    "card": {
                        "brand": "amex",
                        "exp_month": 1,
                        "exp_year": 1,
                        "last4": "x"
                    },
                    "type": "x"
                },
                "plan_details": {
                    "name": "x",
                    "version": {
                        "major": 1,
                        "minor": 1
                    }
                },
                "quota_reset_at_last": "2026-01-01T00:00:00Z",
                "spending_limit_cents": 1,
                "state": "UNKNOWN",
                "subscription_type": "UNKNOWN",
                "tax_id": "x",
                "tax_id_type": "x"
            },
            "auth_accounts": [
                {
                    "email": "x",
                    "image": "x",
                    "login": "x",
                    "name": "x",
                    "provider": "github"
                }
            ],
            "email": "x",
            "id": "x",
            "image": "x",
            "login": "x",
            "name": "x",
            "last_name": "x",
            "projects_limit": 1,
            "branches_limit": 1,
            "max_autoscaling_limit": 1,
            "compute_seconds_limit": 1,
            "plan": "x"
        },
        "idField": "id"
    },
    {
        "entity": "custom_domain",
        "accessor": "CustomDomain",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/custom-domains",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "domain": "x",
            "entity_type": "x",
            "entity_id": "x",
            "cname_target": "x",
            "status": "x",
            "dns_status": "x",
            "binding_status": "x",
            "status_reason": "x"
        },
        "idField": "id"
    },
    {
        "entity": "data_api",
        "accessor": "DataApi",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "database_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "url": "x"
        },
        "idField": "id"
    },
    {
        "entity": "data_api",
        "accessor": "DataApi",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "database_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "url": "x",
            "status": "x",
            "settings": {
                "db_aggregates_enabled": true,
                "db_anon_role": "x",
                "db_extra_search_path": "x",
                "db_max_rows": 1,
                "db_schemas": [
                    "x"
                ],
                "jwt_role_claim_key": "x",
                "jwt_cache_max_lifetime": 1,
                "openapi_mode": "x",
                "server_cors_allowed_origins": "x",
                "server_timing_enabled": true
            },
            "available_schemas": [
                "x"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "data_api",
        "accessor": "DataApi",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "database_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "data_api",
        "accessor": "DataApi",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/data-api/{database_name}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "database_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/databases",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "database": {
                "id": 876692,
                "branch_id": "br-aged-salad-637688",
                "name": "mydb",
                "owner_name": "casey",
                "created_at": "2022-12-04T00:15:04Z",
                "updated_at": "2022-12-04T00:15:04Z"
            },
            "operations": [
                {
                    "id": "39426015-db00-40fa-85c5-1c7072df46d0",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-aged-salad-637688",
                    "endpoint_id": "ep-little-smoke-851426",
                    "action": "apply_config",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-04T00:15:04Z",
                    "updated_at": "2022-12-04T00:15:04Z",
                    "total_duration_ms": 100
                },
                {
                    "id": "b7483d4e-33da-4d40-b319-ac858d4d3e69",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-aged-salad-637688",
                    "endpoint_id": "ep-little-smoke-851426",
                    "action": "suspend_compute",
                    "status": "scheduling",
                    "failures_count": 0,
                    "created_at": "2022-12-04T00:15:04Z",
                    "updated_at": "2022-12-04T00:15:04Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/databases",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "databases": [
                {
                    "id": 834686,
                    "branch_id": "br-aged-salad-637688",
                    "name": "main",
                    "owner_name": "casey",
                    "created_at": "2022-11-30T18:25:15Z",
                    "updated_at": "2022-11-30T18:25:15Z"
                },
                {
                    "id": 834686,
                    "branch_id": "br-aged-salad-637688",
                    "name": "mydb",
                    "owner_name": "casey",
                    "created_at": "2022-10-30T17:14:13Z",
                    "updated_at": "2022-10-30T17:14:13Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "database_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "database": {
                "id": 834686,
                "branch_id": "br-aged-salad-637688",
                "name": "main",
                "owner_name": "casey",
                "created_at": "2022-11-30T18:25:15Z",
                "updated_at": "2022-11-30T18:25:15Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "database_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "database": {
                "id": 851537,
                "branch_id": "br-raspy-hill-832856",
                "name": "mydb",
                "owner_name": "casey",
                "created_at": "2022-12-01T19:41:46Z",
                "updated_at": "2022-12-01T19:41:46Z"
            },
            "operations": [
                {
                    "id": "9ef1c2ed-dce4-43aa-bae8-78aea636bf8a",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-raspy-hill-832856",
                    "endpoint_id": "ep-steep-bush-777093",
                    "action": "apply_config",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-01T19:51:41Z",
                    "updated_at": "2022-12-01T19:51:41Z",
                    "total_duration_ms": 100
                },
                {
                    "id": "42dafb46-f861-497b-ae89-f2bec54f4966",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-raspy-hill-832856",
                    "endpoint_id": "ep-steep-bush-777093",
                    "action": "suspend_compute",
                    "status": "scheduling",
                    "failures_count": 0,
                    "created_at": "2022-12-01T19:51:41Z",
                    "updated_at": "2022-12-01T19:51:41Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "database",
        "accessor": "Database",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/databases/{database_name}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "database_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "database": {
                "id": 876692,
                "branch_id": "br-aged-salad-637688",
                "name": "mydb",
                "owner_name": "sally",
                "created_at": "2022-12-04T00:15:04Z",
                "updated_at": "2022-12-04T00:15:04Z"
            },
            "operations": [
                {
                    "id": "9ef1c2ed-dce4-43aa-bae8-78aea636bf8a",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-aged-salad-637688",
                    "endpoint_id": "ep-little-smoke-851426",
                    "action": "apply_config",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-04T00:21:01Z",
                    "updated_at": "2022-12-04T00:21:01Z",
                    "total_duration_ms": 100
                },
                {
                    "id": "42dafb46-f861-497b-ae89-f2bec54f4966",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-aged-salad-637688",
                    "endpoint_id": "ep-little-smoke-851426",
                    "action": "suspend_compute",
                    "status": "scheduling",
                    "failures_count": 0,
                    "created_at": "2022-12-04T00:21:01Z",
                    "updated_at": "2022-12-04T00:21:01Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "email_provider",
        "accessor": "EmailProvider",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/email_provider",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "host": "x",
            "password": "x",
            "port": 1,
            "sender_email": "x",
            "sender_name": "x",
            "username": "x"
        },
        "idField": "id"
    },
    {
        "entity": "email_server",
        "accessor": "EmailServer",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/auth/email_server",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "host": "x",
            "password": "x",
            "port": 1,
            "sender_email": "x",
            "sender_name": "x",
            "username": "x"
        },
        "idField": "id"
    },
    {
        "entity": "empty",
        "accessor": "Empty",
        "op": "create",
        "method": "POST",
        "path": "/organizations/{source_org_id}/projects/transfer",
        "args": [
            {
                "name": "organization_id",
                "wire": "source_org_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "empty",
        "accessor": "Empty",
        "op": "create",
        "method": "POST",
        "path": "/users/me/projects/transfer",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "empty",
        "accessor": "Empty",
        "op": "remove",
        "method": "DELETE",
        "path": "/organizations/{org_id}/billing/spending_limit",
        "args": [
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "empty",
        "accessor": "Empty",
        "op": "update",
        "method": "PUT",
        "path": "/projects/{project_id}/branches/{branch_id}/backup_schedule",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "endpoint",
        "accessor": "Endpoint",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/endpoints",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "endpoint": {
                "host": "ep-shrill-thunder-454069.us-east-2.aws.neon.tech",
                "id": "ep-shrill-thunder-454069",
                "project_id": "bitter-meadow-966132",
                "branch_id": "br-proud-paper-090813",
                "autoscaling_limit_min_cu": 1,
                "autoscaling_limit_max_cu": 1,
                "region_id": "aws-us-east-2",
                "type": "read_write",
                "current_state": "init",
                "pending_state": "active",
                "settings": {
                    "pg_settings": {}
                },
                "pooler_enabled": false,
                "pooler_mode": "transaction",
                "disabled": false,
                "passwordless_access": true,
                "created_at": "2022-12-03T15:37:07Z",
                "updated_at": "2022-12-03T15:37:07Z",
                "proxy_host": "us-east-2.aws.neon.tech",
                "creation_source": "console",
                "suspend_timeout_seconds": 10800,
                "provisioner": "k8s-pod"
            },
            "operations": [
                {
                    "id": "874f8bfe-f51d-4c61-85af-a29bea73e0e2",
                    "project_id": "bitter-meadow-966132",
                    "branch_id": "br-proud-paper-090813",
                    "endpoint_id": "ep-shrill-thunder-454069",
                    "action": "start_compute",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-03T15:37:07Z",
                    "updated_at": "2022-12-03T15:37:07Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "endpoint",
        "accessor": "Endpoint",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/endpoints",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "endpoints": [
                {
                    "host": "ep-little-smoke-851426.us-east-2.aws.neon.tech",
                    "id": "ep-little-smoke-851426",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-aged-salad-637688",
                    "autoscaling_limit_min_cu": 1,
                    "autoscaling_limit_max_cu": 1,
                    "region_id": "aws-us-east-2",
                    "type": "read_write",
                    "current_state": "idle",
                    "settings": {
                        "pg_settings": {}
                    },
                    "pooler_enabled": false,
                    "pooler_mode": "transaction",
                    "disabled": false,
                    "passwordless_access": true,
                    "last_active": "2022-11-23T17:00:00Z",
                    "created_at": "2022-11-23T17:42:25Z",
                    "updated_at": "2022-11-30T18:25:21Z",
                    "proxy_host": "us-east-2.aws.neon.tech",
                    "creation_source": "console",
                    "provisioner": "k8s-pod",
                    "suspend_timeout_seconds": 10800
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "endpoint",
        "accessor": "Endpoint",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/endpoints",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "endpoints": [
                {
                    "host": "ep-little-smoke-851426.us-east-2.aws.neon.tech",
                    "creation_source": "console",
                    "suspend_timeout_seconds": 10800,
                    "provisioner": "k8s-pod",
                    "id": "ep-little-smoke-851426",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-aged-salad-637688",
                    "autoscaling_limit_min_cu": 1,
                    "autoscaling_limit_max_cu": 1,
                    "region_id": "aws-us-east-2",
                    "type": "read_write",
                    "current_state": "idle",
                    "settings": {
                        "pg_settings": {}
                    },
                    "pooler_enabled": false,
                    "pooler_mode": "transaction",
                    "disabled": false,
                    "passwordless_access": true,
                    "last_active": "2022-11-23T17:00:00Z",
                    "created_at": "2022-11-23T17:42:25Z",
                    "updated_at": "2022-11-30T18:25:21Z",
                    "proxy_host": "us-east-2.aws.neon.tech"
                },
                {
                    "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
                    "creation_source": "console",
                    "suspend_timeout_seconds": 10800,
                    "provisioner": "k8s-pod",
                    "id": "ep-steep-bush-777093",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-raspy-hill-832856",
                    "autoscaling_limit_min_cu": 1,
                    "autoscaling_limit_max_cu": 1,
                    "region_id": "aws-us-east-2",
                    "type": "read_write",
                    "current_state": "idle",
                    "settings": {
                        "pg_settings": {}
                    },
                    "pooler_enabled": false,
                    "pooler_mode": "transaction",
                    "disabled": false,
                    "passwordless_access": true,
                    "last_active": "2022-11-30T17:00:00Z",
                    "created_at": "2022-11-30T17:36:57Z",
                    "updated_at": "2022-11-30T18:42:58Z",
                    "proxy_host": "us-east-2.aws.neon.tech"
                },
                {
                    "host": "ep-soft-violet-752733.us-east-2.aws.neon.tech",
                    "creation_source": "console",
                    "suspend_timeout_seconds": 10800,
                    "provisioner": "k8s-pod",
                    "id": "ep-soft-violet-752733",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-sweet-breeze-497520",
                    "autoscaling_limit_min_cu": 1,
                    "autoscaling_limit_max_cu": 1,
                    "region_id": "aws-us-east-2",
                    "type": "read_write",
                    "current_state": "idle",
                    "settings": {
                        "pg_settings": {}
                    },
                    "pooler_enabled": false,
                    "pooler_mode": "transaction",
                    "disabled": false,
                    "passwordless_access": true,
                    "last_active": "2022-11-30T19:00:00Z",
                    "created_at": "2022-11-30T19:09:48Z",
                    "updated_at": "2022-11-30T19:14:51Z",
                    "proxy_host": "us-east-2.aws.neon.tech"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "endpoint",
        "accessor": "Endpoint",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/endpoints/{endpoint_id}",
        "args": [
            {
                "name": "id",
                "wire": "endpoint_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "endpoint": {
                "host": "ep-little-smoke-851426.us-east-2.aws.neon.tech",
                "id": "ep-little-smoke-851426",
                "project_id": "shiny-wind-028834",
                "branch_id": "br-aged-salad-637688",
                "autoscaling_limit_min_cu": 1,
                "autoscaling_limit_max_cu": 1,
                "region_id": "aws-us-east-2",
                "type": "read_write",
                "current_state": "idle",
                "settings": {
                    "pg_settings": {}
                },
                "pooler_enabled": false,
                "pooler_mode": "transaction",
                "disabled": false,
                "passwordless_access": true,
                "last_active": "2022-11-23T17:00:00Z",
                "created_at": "2022-11-23T17:42:25Z",
                "updated_at": "2022-11-30T18:25:21Z",
                "proxy_host": "us-east-2.aws.neon.tech",
                "creation_source": "console",
                "provisioner": "k8s-pod",
                "suspend_timeout_seconds": 10800
            }
        },
        "idField": "id"
    },
    {
        "entity": "endpoint",
        "accessor": "Endpoint",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/endpoints/{endpoint_id}",
        "args": [
            {
                "name": "id",
                "wire": "endpoint_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "endpoint": {
                "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
                "id": "ep-steep-bush-777093",
                "project_id": "shiny-wind-028834",
                "branch_id": "br-raspy-hill-832856",
                "autoscaling_limit_min_cu": 1,
                "autoscaling_limit_max_cu": 1,
                "region_id": "aws-us-east-2",
                "type": "read_write",
                "current_state": "idle",
                "settings": {
                    "pg_settings": {}
                },
                "pooler_enabled": false,
                "pooler_mode": "transaction",
                "disabled": false,
                "passwordless_access": true,
                "last_active": "2022-12-03T15:00:00Z",
                "created_at": "2022-12-03T15:37:07Z",
                "updated_at": "2022-12-03T15:49:10Z",
                "proxy_host": "us-east-2.aws.neon.tech",
                "creation_source": "console",
                "provisioner": "k8s-pod",
                "suspend_timeout_seconds": 10800
            },
            "operations": [
                {
                    "id": "fd11748e-3c68-458f-b9e3-66d409e3eef0",
                    "project_id": "bitter-meadow-966132",
                    "branch_id": "br-proud-paper-090813",
                    "endpoint_id": "ep-shrill-thunder-454069",
                    "action": "suspend_compute",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-03T15:51:06Z",
                    "updated_at": "2022-12-03T15:51:06Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "endpoint",
        "accessor": "Endpoint",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/endpoints/{endpoint_id}",
        "args": [
            {
                "name": "id",
                "wire": "endpoint_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "endpoint": {
                "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
                "id": "ep-steep-bush-777093",
                "project_id": "shiny-wind-028834",
                "branch_id": "br-raspy-hill-832856",
                "autoscaling_limit_min_cu": 1,
                "autoscaling_limit_max_cu": 1,
                "region_id": "aws-us-east-2",
                "type": "read_write",
                "current_state": "idle",
                "settings": {
                    "pg_settings": {}
                },
                "pooler_enabled": false,
                "pooler_mode": "transaction",
                "disabled": false,
                "passwordless_access": true,
                "last_active": "2022-12-03T15:00:00Z",
                "created_at": "2022-12-03T15:37:07Z",
                "updated_at": "2022-12-03T15:49:10Z",
                "proxy_host": "us-east-2.aws.neon.tech",
                "creation_source": "console",
                "provisioner": "k8s-pod",
                "suspend_timeout_seconds": 10800
            },
            "operations": [
                {
                    "id": "3fc98ab8-f191-47b8-a427-5eb668ccc5b9",
                    "project_id": "bitter-meadow-966132",
                    "branch_id": "br-proud-paper-090813",
                    "endpoint_id": "ep-shrill-thunder-454069",
                    "action": "apply_config",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-03T15:51:06Z",
                    "updated_at": "2022-12-03T15:51:06Z",
                    "total_duration_ms": 100
                },
                {
                    "id": "9ffda74b-a582-4cff-b0f0-aaa8d14b8e6a",
                    "project_id": "bitter-meadow-966132",
                    "branch_id": "br-proud-paper-090813",
                    "endpoint_id": "ep-shrill-thunder-454069",
                    "action": "suspend_compute",
                    "status": "scheduling",
                    "failures_count": 0,
                    "created_at": "2022-12-03T15:51:06Z",
                    "updated_at": "2022-12-03T15:51:06Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "endpoint_operation",
        "accessor": "EndpointOperation",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/endpoints/{endpoint_id}/restart",
        "action": "restart",
        "args": [
            {
                "name": "id",
                "wire": "endpoint_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "endpoint": {
                "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
                "id": "ep-steep-bush-777093",
                "project_id": "shiny-wind-028834",
                "branch_id": "br-raspy-hill-832856",
                "autoscaling_limit_min_cu": 1,
                "autoscaling_limit_max_cu": 1,
                "region_id": "aws-us-east-2",
                "type": "read_write",
                "current_state": "idle",
                "settings": {
                    "pg_settings": {}
                },
                "pooler_enabled": false,
                "pooler_mode": "transaction",
                "disabled": false,
                "passwordless_access": true,
                "last_active": "2022-12-03T15:00:00Z",
                "created_at": "2022-12-03T15:37:07Z",
                "updated_at": "2022-12-03T15:49:10Z",
                "proxy_host": "us-east-2.aws.neon.tech",
                "creation_source": "console",
                "provisioner": "k8s-pod",
                "suspend_timeout_seconds": 10800
            },
            "operations": [
                {
                    "id": "e061087e-3c99-4856-b9c8-6b7751a253af",
                    "project_id": "bitter-meadow-966132",
                    "branch_id": "br-proud-paper-090813",
                    "endpoint_id": "ep-shrill-thunder-454069",
                    "action": "suspend_compute",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-03T15:51:06Z",
                    "updated_at": "2022-12-03T15:51:06Z",
                    "total_duration_ms": 100
                },
                {
                    "id": "e061087e-3c99-4856-b9c8-6b7751a253af",
                    "project_id": "bitter-meadow-966132",
                    "branch_id": "br-proud-paper-090813",
                    "endpoint_id": "ep-shrill-thunder-454069",
                    "action": "start_compute",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-03T15:51:06Z",
                    "updated_at": "2022-12-03T15:51:06Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "endpoint_operation",
        "accessor": "EndpointOperation",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/endpoints/{endpoint_id}/start",
        "action": "start",
        "args": [
            {
                "name": "id",
                "wire": "endpoint_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "endpoint": {
                "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
                "id": "ep-steep-bush-777093",
                "project_id": "shiny-wind-028834",
                "branch_id": "br-raspy-hill-832856",
                "autoscaling_limit_min_cu": 1,
                "autoscaling_limit_max_cu": 1,
                "region_id": "aws-us-east-2",
                "type": "read_write",
                "current_state": "idle",
                "settings": {
                    "pg_settings": {}
                },
                "pooler_enabled": false,
                "pooler_mode": "transaction",
                "disabled": false,
                "passwordless_access": true,
                "last_active": "2022-12-03T15:00:00Z",
                "created_at": "2022-12-03T15:37:07Z",
                "updated_at": "2022-12-03T15:49:10Z",
                "proxy_host": "us-east-2.aws.neon.tech",
                "creation_source": "console",
                "provisioner": "k8s-pod",
                "suspend_timeout_seconds": 10800
            },
            "operations": [
                {
                    "id": "e061087e-3c99-4856-b9c8-6b7751a253af",
                    "project_id": "bitter-meadow-966132",
                    "branch_id": "br-proud-paper-090813",
                    "endpoint_id": "ep-shrill-thunder-454069",
                    "action": "start_compute",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-03T15:51:06Z",
                    "updated_at": "2022-12-03T15:51:06Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "endpoint_operation",
        "accessor": "EndpointOperation",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/endpoints/{endpoint_id}/suspend",
        "action": "suspend",
        "args": [
            {
                "name": "id",
                "wire": "endpoint_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "endpoint": {
                "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
                "id": "ep-steep-bush-777093",
                "project_id": "shiny-wind-028834",
                "branch_id": "br-raspy-hill-832856",
                "autoscaling_limit_min_cu": 1,
                "autoscaling_limit_max_cu": 1,
                "region_id": "aws-us-east-2",
                "type": "read_write",
                "current_state": "idle",
                "settings": {
                    "pg_settings": {}
                },
                "pooler_enabled": false,
                "pooler_mode": "transaction",
                "disabled": false,
                "passwordless_access": true,
                "last_active": "2022-12-03T15:00:00Z",
                "created_at": "2022-12-03T15:37:07Z",
                "updated_at": "2022-12-03T15:49:10Z",
                "proxy_host": "us-east-2.aws.neon.tech",
                "creation_source": "console",
                "provisioner": "k8s-pod",
                "suspend_timeout_seconds": 10800
            },
            "operations": [
                {
                    "id": "e061087e-3c99-4856-b9c8-6b7751a253af",
                    "project_id": "bitter-meadow-966132",
                    "branch_id": "br-proud-paper-090813",
                    "endpoint_id": "ep-shrill-thunder-454069",
                    "action": "suspend_compute",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-03T15:51:06Z",
                    "updated_at": "2022-12-03T15:51:06Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "function",
        "accessor": "Function",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/custom-domains/{domain}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "domain",
                "wire": "domain",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "function",
        "accessor": "Function",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/functions/{slug}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "slug",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "function",
        "accessor": "Function",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            },
            {
                "name": "trigger_id",
                "wire": "trigger_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "jwk",
        "accessor": "Jwk",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/jwks",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "jwks": {
                "id": "x",
                "project_id": "x",
                "branch_id": "x",
                "jwks_url": "x",
                "provider_name": "x",
                "created_at": "2026-01-01T00:00:00Z",
                "updated_at": "2026-01-01T00:00:00Z",
                "jwt_audience": "x",
                "role_names": [
                    "x"
                ]
            },
            "operations": [
                {
                    "action": "start_compute",
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-15T20:02:00Z",
                    "endpoint_id": "ep-silent-smoke-806639",
                    "failures_count": 0,
                    "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
                    "project_id": "spring-example-302709",
                    "status": "finished",
                    "total_duration_ms": 200,
                    "updated_at": "2022-11-15T20:02:02Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "jwk",
        "accessor": "Jwk",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/jwks",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "jwks": [
                {
                    "branch_id": "x",
                    "created_at": "2026-01-01T00:00:00Z",
                    "id": "x",
                    "jwks_url": "x",
                    "jwt_audience": "x",
                    "project_id": "x",
                    "provider_name": "x",
                    "role_names": [
                        "x"
                    ],
                    "updated_at": "2026-01-01T00:00:00Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "jwk",
        "accessor": "Jwk",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/jwks/{jwks_id}",
        "args": [
            {
                "name": "id",
                "wire": "jwks_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "project_id": "x",
            "branch_id": "x",
            "jwks_url": "x",
            "provider_name": "x",
            "created_at": "2026-01-01T00:00:00Z",
            "updated_at": "2026-01-01T00:00:00Z",
            "jwt_audience": "x",
            "role_names": [
                "x"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "masking_rule",
        "accessor": "MaskingRule",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/masking_rules",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "masking_rules": [
                {
                    "column_name": "email",
                    "database_name": "neondb",
                    "masking_function": "anon.fake_email()",
                    "schema_name": "public",
                    "table_name": "users"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "masking_rule",
        "accessor": "MaskingRule",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/masking_rules",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "masking_rules": [
                {
                    "column_name": "email",
                    "database_name": "neondb",
                    "masking_function": "anon.fake_email()",
                    "schema_name": "public",
                    "table_name": "users"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "member",
        "accessor": "Member",
        "op": "load",
        "method": "GET",
        "path": "/organizations/{org_id}/members/{member_id}",
        "args": [
            {
                "name": "id",
                "wire": "member_id",
                "value": "p1"
            },
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "d57833f2-d308-4ede-9d2e-468d9d013d1b",
            "user_id": "b107d689-6dd2-4c9a-8b9e-0b25e457cf56",
            "org_id": "my-organization-morning-bread-81040908",
            "role": "admin",
            "joined_at": "2024-02-23T17:42:25Z"
        },
        "idField": "id"
    },
    {
        "entity": "member",
        "accessor": "Member",
        "op": "remove",
        "method": "DELETE",
        "path": "/organizations/{org_id}/members/{member_id}",
        "args": [
            {
                "name": "id",
                "wire": "member_id",
                "value": "p1"
            },
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {},
        "idField": "id"
    },
    {
        "entity": "member",
        "accessor": "Member",
        "op": "update",
        "method": "PATCH",
        "path": "/organizations/{org_id}/members/{member_id}",
        "args": [
            {
                "name": "id",
                "wire": "member_id",
                "value": "p1"
            },
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "user_id": "x",
            "org_id": "org-cool-darkness-12345678",
            "role": "admin",
            "joined_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_allow_localhost",
        "accessor": "NeonAuthAllowLocalhost",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/allow_localhost",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "allow_localhost": true
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_allow_localhost",
        "accessor": "NeonAuthAllowLocalhost",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/allow_localhost",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "allow_localhost": true
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_config",
        "accessor": "NeonAuthConfig",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/config",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "name": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_create_integration",
        "accessor": "NeonAuthCreateIntegration",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/auth",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "auth_provider": "mock",
            "auth_provider_project_id": "x",
            "pub_client_key": "x",
            "secret_server_key": "x",
            "jwks_url": "x",
            "schema_name": "x",
            "table_name": "x",
            "base_url": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_create_new_user",
        "accessor": "NeonAuthCreateNewUser",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/users",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_create_new_user",
        "accessor": "NeonAuthCreateNewUser",
        "op": "create",
        "method": "POST",
        "path": "/projects/auth/user",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_email_and_password_config",
        "accessor": "NeonAuthEmailAndPasswordConfig",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/email_and_password",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true,
            "email_verification_method": "link",
            "require_email_verification": true,
            "auto_sign_in_after_verification": true,
            "send_verification_email_on_sign_up": true,
            "send_verification_email_on_sign_in": true,
            "disable_sign_up": true
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_email_and_password_config",
        "accessor": "NeonAuthEmailAndPasswordConfig",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/email_and_password",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true,
            "email_verification_method": "link",
            "require_email_verification": true,
            "auto_sign_in_after_verification": true,
            "send_verification_email_on_sign_up": true,
            "send_verification_email_on_sign_in": true,
            "disable_sign_up": true
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_email_server_config",
        "accessor": "NeonAuthEmailServerConfig",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/email_provider",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "host": "x",
            "password": "x",
            "port": 1,
            "sender_email": "x",
            "sender_name": "x",
            "username": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_email_server_config",
        "accessor": "NeonAuthEmailServerConfig",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/auth/email_server",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "host": "x",
            "password": "x",
            "port": 1,
            "sender_email": "x",
            "sender_name": "x",
            "username": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_integration",
        "accessor": "NeonAuthIntegration",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/auth/integrations",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "data": [
                {
                    "auth_provider": "mock",
                    "auth_provider_project_id": "x",
                    "base_url": "x",
                    "branch_id": "br-cool-darkness-12345678",
                    "created_at": "2025-01-15T10:30:00Z",
                    "db_name": "x",
                    "jwks_url": "x",
                    "name": "x",
                    "owned_by": "user",
                    "transfer_status": "initiated"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_integration",
        "accessor": "NeonAuthIntegration",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/auth",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "auth_provider": "mock",
            "auth_provider_project_id": "x",
            "branch_id": "br-cool-darkness-12345678",
            "db_name": "x",
            "created_at": "2025-01-15T10:30:00Z",
            "owned_by": "user",
            "transfer_status": "initiated",
            "jwks_url": "x",
            "base_url": "x",
            "name": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_magic_link_config",
        "accessor": "NeonAuthMagicLinkConfig",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/plugins/magic-link",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true,
            "expires_in": 1,
            "disable_sign_up": true
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_oauth_provider",
        "accessor": "NeonAuthOauthProvider",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "google",
            "type": "standard",
            "client_id": "x",
            "client_secret": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_oauth_provider",
        "accessor": "NeonAuthOauthProvider",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/auth/oauth_providers",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "google",
            "type": "standard",
            "client_id": "x",
            "client_secret": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_oauth_provider",
        "accessor": "NeonAuthOauthProvider",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "providers": [
                {
                    "client_id": "x",
                    "client_secret": "x",
                    "id": "google",
                    "type": "standard"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_oauth_provider",
        "accessor": "NeonAuthOauthProvider",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/auth/oauth_providers",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "providers": [
                {
                    "client_id": "x",
                    "client_secret": "x",
                    "id": "google",
                    "type": "standard"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_oauth_provider",
        "accessor": "NeonAuthOauthProvider",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/oauth_providers/{oauth_provider_id}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "oauth_provider_id",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "google",
            "type": "standard",
            "client_id": "x",
            "client_secret": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_oauth_provider",
        "accessor": "NeonAuthOauthProvider",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/auth/oauth_providers/{oauth_provider_id}",
        "args": [
            {
                "name": "id",
                "wire": "oauth_provider_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "google",
            "type": "standard",
            "client_id": "x",
            "client_secret": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_organization_config",
        "accessor": "NeonAuthOrganizationConfig",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/plugins/organization",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true,
            "organization_limit": 1,
            "membership_limit": 1,
            "creator_role": "admin",
            "send_invitation_email": true
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_phone_number_config",
        "accessor": "NeonAuthPhoneNumberConfig",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true,
            "otp_expires_in": 1
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_phone_number_config",
        "accessor": "NeonAuthPhoneNumberConfig",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true,
            "otp_expires_in": 1
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_plugin_config",
        "accessor": "NeonAuthPluginConfig",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/plugins",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "organization": {
                "creator_role": "admin",
                "enabled": true,
                "membership_limit": 1,
                "organization_limit": 1,
                "send_invitation_email": true
            },
            "magic_link": {
                "disable_sign_up": true,
                "enabled": true,
                "expires_in": 1
            },
            "phone_number": {
                "enabled": true,
                "otp_expires_in": 1
            },
            "email_provider": {
                "host": "x",
                "password": "x",
                "port": 1,
                "sender_email": "x",
                "sender_name": "x",
                "username": "x"
            },
            "email_and_password": {
                "auto_sign_in_after_verification": true,
                "disable_sign_up": true,
                "email_verification_method": "link",
                "enabled": true,
                "require_email_verification": true,
                "send_verification_email_on_sign_in": true,
                "send_verification_email_on_sign_up": true
            },
            "oauth_providers": [
                {
                    "client_id": "x",
                    "client_secret": "x",
                    "id": "google",
                    "type": "standard"
                }
            ],
            "allow_localhost": true
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_redirect_uri_whitelist_domain",
        "accessor": "NeonAuthRedirectUriWhitelistDomain",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/domains",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "domains": [
                {
                    "auth_provider": "mock",
                    "domain": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_redirect_uri_whitelist_domain",
        "accessor": "NeonAuthRedirectUriWhitelistDomain",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/auth/domains",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "domains": [
                {
                    "auth_provider": "mock",
                    "domain": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_transfer_auth_provider_project",
        "accessor": "NeonAuthTransferAuthProviderProject",
        "op": "create",
        "method": "POST",
        "path": "/projects/auth/transfer_ownership",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "url": "x"
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_webhook_config",
        "accessor": "NeonAuthWebhookConfig",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/webhooks",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true,
            "webhook_url": "x",
            "enabled_events": [
                "user.before_create"
            ],
            "timeout_seconds": 1
        },
        "idField": "id"
    },
    {
        "entity": "neon_auth_webhook_config",
        "accessor": "NeonAuthWebhookConfig",
        "op": "update",
        "method": "PUT",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/webhooks",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "enabled": true,
            "webhook_url": "x",
            "enabled_events": [
                "user.before_create"
            ],
            "timeout_seconds": 1
        },
        "idField": "id"
    },
    {
        "entity": "neon_function",
        "accessor": "NeonFunction",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/functions/{slug}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "slug",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "function": {
                "id": "x",
                "slug": "x",
                "name": "x",
                "invocation_url": "x",
                "current_deployment": {
                    "created_at": "x",
                    "environment": [
                        "x"
                    ],
                    "error": "x",
                    "id": 1,
                    "memory_mib": 1,
                    "runtime": "x",
                    "status": "pending"
                },
                "active_deployment": {
                    "created_at": "x",
                    "environment": [
                        "x"
                    ],
                    "error": "x",
                    "id": 1,
                    "memory_mib": 1,
                    "runtime": "x",
                    "status": "pending"
                },
                "created_at": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "neon_function",
        "accessor": "NeonFunction",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/functions/{slug}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "slug",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "function": {
                "id": "x",
                "slug": "x",
                "name": "x",
                "invocation_url": "x",
                "current_deployment": {
                    "created_at": "x",
                    "environment": [
                        "x"
                    ],
                    "error": "x",
                    "id": 1,
                    "memory_mib": 1,
                    "runtime": "x",
                    "status": "pending"
                },
                "active_deployment": {
                    "created_at": "x",
                    "environment": [
                        "x"
                    ],
                    "error": "x",
                    "id": 1,
                    "memory_mib": 1,
                    "runtime": "x",
                    "status": "pending"
                },
                "created_at": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "neon_function_deployment",
        "accessor": "NeonFunctionDeployment",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/functions/{slug}/deployments",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            },
            {
                "name": "slug",
                "wire": "slug",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "deployment": {
                "id": 1,
                "status": "pending",
                "memory_mib": 1,
                "runtime": "x",
                "created_at": "x",
                "environment": [
                    "x"
                ],
                "error": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "operation",
        "accessor": "Operation",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/finalize_restore",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "operations": [
                {
                    "action": "start_compute",
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-15T20:02:00Z",
                    "endpoint_id": "ep-silent-smoke-806639",
                    "failures_count": 0,
                    "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
                    "project_id": "spring-example-302709",
                    "status": "finished",
                    "total_duration_ms": 200,
                    "updated_at": "2022-11-15T20:02:02Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "operation",
        "accessor": "Operation",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/operations",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {
            "cursor": "v1",
            "limit": "v1"
        },
        "headers": [],
        "query": [
            "cursor",
            "limit"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "operations": [
                {
                    "action": "start_compute",
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-15T20:02:00Z",
                    "endpoint_id": "ep-silent-smoke-806639",
                    "failures_count": 0,
                    "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
                    "project_id": "spring-example-302709",
                    "status": "finished",
                    "total_duration_ms": 200,
                    "updated_at": "2022-11-15T20:02:02Z"
                }
            ],
            "pagination": {
                "cursor": "2022-12-07T00:45:05.262011Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "operation",
        "accessor": "Operation",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/operations/{operation_id}",
        "args": [
            {
                "name": "id",
                "wire": "operation_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "operation": {
                "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
                "project_id": "floral-king-961888",
                "branch_id": "br-bitter-sound-247814",
                "endpoint_id": "ep-dark-snowflake-942567",
                "action": "create_timeline",
                "status": "finished",
                "failures_count": 0,
                "created_at": "2022-10-04T18:20:17Z",
                "updated_at": "2022-10-04T18:20:18Z",
                "total_duration_ms": 100
            }
        },
        "idField": "id"
    },
    {
        "entity": "org_api_key_create",
        "accessor": "OrgApiKeyCreate",
        "op": "create",
        "method": "POST",
        "path": "/organizations/{org_id}/api_keys",
        "args": [
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": 165434,
            "key": "9v1faketcjbl4sn1013keyd43n2a8qlfakeog8yvp40hx16keyjo1bpds4y2dfms3",
            "name": "orgkey",
            "created_at": "2022-11-15T20:13:35Z",
            "created_by": "629982cc-de05-43db-ae16-28f2399c4910"
        },
        "idField": "id"
    },
    {
        "entity": "org_api_key_revoke",
        "accessor": "OrgApiKeyRevoke",
        "op": "remove",
        "method": "DELETE",
        "path": "/organizations/{org_id}/api_keys/{key_id}",
        "args": [
            {
                "name": "key_id",
                "wire": "key_id",
                "value": "p1"
            },
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": 165435,
            "name": "orgkey",
            "created_at": "2022-11-15T20:13:35Z",
            "created_by": "629982cc-de05-43db-ae16-28f2399c4910",
            "last_used_at": "2022-11-15T20:15:04Z",
            "last_used_from_addr": "192.0.2.255",
            "revoked": true
        },
        "idField": "id"
    },
    {
        "entity": "org_api_keys_list_response_item",
        "accessor": "OrgApiKeysListResponseItem",
        "op": "list",
        "method": "GET",
        "path": "/organizations/{org_id}/api_keys",
        "args": [
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": [
            {
                "id": 165432,
                "name": "orgkey_1",
                "created_at": "2022-11-15T20:13:35Z",
                "created_by": {
                    "id": "629982cc-de05-43db-ae16-28f2399c4910",
                    "name": "John Smith",
                    "image": "http://link.to.image"
                },
                "last_used_at": "2022-11-15T20:22:51Z",
                "last_used_from_addr": "192.0.2.255"
            },
            {
                "id": 165433,
                "name": "orgkey_2",
                "created_at": "2022-11-15T20:12:36Z",
                "created_by": {
                    "id": "629982cc-de05-43db-ae16-28f2399c4910",
                    "name": "John Smith",
                    "image": "http://link.to.image"
                },
                "last_used_at": "2022-11-15T20:15:04Z",
                "last_used_from_addr": "192.0.2.255"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "organization",
        "accessor": "Organization",
        "op": "create",
        "method": "POST",
        "path": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}",
        "args": [
            {
                "name": "id",
                "wire": "org_id",
                "value": "p1"
            },
            {
                "name": "region_id",
                "wire": "region_id",
                "value": "p2"
            },
            {
                "name": "vpc_endpoint_id",
                "wire": "vpc_endpoint_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "organization",
        "accessor": "Organization",
        "op": "list",
        "method": "GET",
        "path": "/organizations/{org_id}/members",
        "action": "member",
        "args": [
            {
                "name": "id",
                "wire": "org_id",
                "value": "p1"
            }
        ],
        "select": {
            "cursor": "v1",
            "limit": "v1",
            "sort_by": "v1",
            "sort_order": "v1"
        },
        "headers": [],
        "query": [
            "sort_by",
            "cursor",
            "sort_order",
            "limit"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "members": [
                {
                    "member": {
                        "id": "d57833f2-d308-4ede-9d2e-468d9d013d1b",
                        "user_id": "b107d689-6dd2-4c9a-8b9e-0b25e457cf56",
                        "org_id": "my-organization-morning-bread-81040908",
                        "role": "admin",
                        "joined_at": "2024-02-23T17:42:25Z"
                    },
                    "user": {
                        "email": "user1@email.com"
                    }
                },
                {
                    "member": {
                        "id": "5fee13ac-957b-40cd-8de0-4d494cc28e28",
                        "user_id": "6df052ac-ca9a-4321-8963-b6507b2d7dee",
                        "org_id": "my-organization-morning-bread-81040908",
                        "role": "member",
                        "joined_at": "2024-02-21T16:42:25Z"
                    },
                    "user": {
                        "email": "user2@email.com"
                    }
                }
            ],
            "pagination": {
                "next": "eyJtZW1iZXJfaWQiOiI1ZmVlMTNhYy05NTdiLTQwY2QtOGRlMC00ZDQ5NGNjMjhlMjgiLCJzb3J0X2J5Ijoiam9pbmVkX2F0In0=",
                "sort_by": "joined_at",
                "sort_order": "desc"
            }
        },
        "idField": "id"
    },
    {
        "entity": "organization",
        "accessor": "Organization",
        "op": "list",
        "method": "GET",
        "path": "/users/me/organizations",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "organizations": [
                {
                    "allow_hipaa_projects": true,
                    "created_at": "2026-01-01T00:00:00Z",
                    "handle": "x",
                    "id": "x",
                    "managed_by": "x",
                    "name": "x",
                    "plan": "x",
                    "require_mfa": true,
                    "updated_at": "2026-01-01T00:00:00Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "organization",
        "accessor": "Organization",
        "op": "load",
        "method": "GET",
        "path": "/organizations/{org_id}",
        "args": [
            {
                "name": "id",
                "wire": "org_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "my-organization-morning-bread-81040908",
            "name": "my-organization",
            "handle": "my-organization-my-organization-morning-bread-81040908",
            "plan": "scale",
            "managed_by": "console",
            "created_at": "2024-02-23T17:42:25Z",
            "updated_at": "2024-02-26T20:41:25Z",
            "require_mfa": false
        },
        "idField": "id"
    },
    {
        "entity": "organization",
        "accessor": "Organization",
        "op": "remove",
        "method": "DELETE",
        "path": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}",
        "args": [
            {
                "name": "id",
                "wire": "org_id",
                "value": "p1"
            },
            {
                "name": "region_id",
                "wire": "region_id",
                "value": "p2"
            },
            {
                "name": "vpc_endpoint_id",
                "wire": "vpc_endpoint_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "organization_invitation",
        "accessor": "OrganizationInvitation",
        "op": "create",
        "method": "POST",
        "path": "/organizations/{org_id}/invitations",
        "args": [
            {
                "name": "id",
                "wire": "org_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "invitations": [
                {
                    "email": "x",
                    "id": "x",
                    "invited_at": "2026-01-01T00:00:00Z",
                    "invited_by": "x",
                    "org_id": "x",
                    "role": "admin"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "organization_invitation",
        "accessor": "OrganizationInvitation",
        "op": "list",
        "method": "GET",
        "path": "/organizations/{org_id}/invitations",
        "args": [
            {
                "name": "id",
                "wire": "org_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "invitations": [
                {
                    "id": "db8faf32-b07f-4b0f-94c8-5c288909f5d3",
                    "email": "invited1@email.com",
                    "org_id": "my-organization-morning-bread-81040908",
                    "invited_by": "a1b2c3d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
                    "role": "admin",
                    "invited_at": "2024-02-23T17:42:25Z"
                },
                {
                    "id": "c52f0d22-ebd9-4708-ae44-2872cae49a83",
                    "email": "invited2@email.com",
                    "org_id": "my-organization-morning-bread-81040908",
                    "invited_by": "a1b2c3d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
                    "role": "member",
                    "invited_at": "2024-02-23T12:42:25Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "presign",
        "accessor": "Presign",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/buckets/{bucket_name}/objects/{object_key}/presign",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "bucket_id",
                "wire": "bucket_name",
                "value": "p2"
            },
            {
                "name": "object_key",
                "wire": "object_key",
                "value": "p3"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p4"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "url": "x",
            "method": "x",
            "headers": {},
            "expires_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            },
            {
                "name": "vpc_endpoint_id",
                "wire": "vpc_endpoint_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branch_anonymized",
        "action": "branch_anonymized",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "branch": {
                "id": "br-wispy-meadow-118737",
                "project_id": "spring-example-302709",
                "parent_id": "br-aged-salad-637688",
                "parent_lsn": "0/1DE2850",
                "name": "dev2",
                "protected": false,
                "current_state": "ready",
                "state_changed_at": "2022-11-30T20:09:48Z",
                "creation_source": "console",
                "created_at": "2022-11-30T19:09:48Z",
                "updated_at": "2022-12-01T19:53:05Z",
                "default": true,
                "init_source": "parent-data",
                "data_transfer_bytes": 72911987,
                "written_data_bytes": 542998300,
                "compute_time_seconds": 823880990,
                "active_time_seconds": 922200,
                "cpu_used_sec": 461100
            },
            "endpoints": [
                {
                    "autoscaling_limit_max_cu": 1,
                    "autoscaling_limit_min_cu": 1,
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-12-03T15:37:07Z",
                    "creation_source": "console",
                    "current_state": "init",
                    "disabled": false,
                    "host": "ep-silent-smoke-806639.us-east-2.aws.neon.tech",
                    "id": "ep-silent-smoke-806639",
                    "name": "My cool compute",
                    "passwordless_access": true,
                    "pending_state": "active",
                    "pooler_enabled": false,
                    "pooler_mode": "transaction",
                    "project_id": "spring-example-302709",
                    "provisioner": "k8s-neonvm",
                    "proxy_host": "us-east-2.aws.neon.tech",
                    "region_id": "aws-us-east-2",
                    "settings": {
                        "pg_settings": {}
                    },
                    "suspend_timeout_seconds": 0,
                    "type": "read_write",
                    "updated_at": "2022-12-03T15:37:07Z"
                }
            ],
            "operations": [
                {
                    "action": "start_compute",
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-15T20:02:00Z",
                    "endpoint_id": "ep-silent-smoke-806639",
                    "failures_count": 0,
                    "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
                    "project_id": "spring-example-302709",
                    "status": "finished",
                    "total_duration_ms": 200,
                    "updated_at": "2022-11-15T20:02:02Z"
                }
            ],
            "roles": [
                {
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-23T17:42:25Z",
                    "name": "casey",
                    "protected": false,
                    "updated_at": "2022-11-23T17:42:25Z"
                }
            ],
            "databases": [
                {
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-30T18:25:15Z",
                    "id": 834686,
                    "name": "neondb",
                    "owner_name": "casey",
                    "updated_at": "2022-11-30T18:25:15Z"
                }
            ],
            "connection_uris": [
                {
                    "connection_uri": "x",
                    "connection_parameters": {
                        "database": "x",
                        "password": "x",
                        "role": "x",
                        "host": "x",
                        "pooler_host": "x"
                    }
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "create",
        "method": "POST",
        "path": "/projects",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "project": {
                "id": "spring-example-302709",
                "platform_id": "aws",
                "region_id": "aws-us-east-2",
                "name": "spring-example-302709",
                "provisioner": "k8s-pod",
                "pg_version": 15,
                "proxy_host": "us-east-2.aws.neon.tech",
                "store_passwords": true,
                "creation_source": "console",
                "history_retention_seconds": 604800,
                "created_at": "2022-12-13T01:30:55Z",
                "updated_at": "2022-12-13T01:30:55Z",
                "owner": {
                    "name": "John Smith",
                    "email": "some@email.com",
                    "branches_limit": 10,
                    "subscription_type": "scale"
                },
                "org_id": "org-morning-bread-81040908",
                "owner_id": "629982cc-de05-43db-ae16-28f2399c4910",
                "data_storage_bytes_hour": 2831928,
                "branch_logical_size_limit": 10,
                "branch_logical_size_limit_bytes": 10485760,
                "data_transfer_bytes": 1000,
                "written_data_bytes": 193990002,
                "compute_time_seconds": 2485760,
                "active_time_seconds": 621440,
                "cpu_used_sec": 155350,
                "consumption_period_start": "2022-11-01T00:00:00Z",
                "consumption_period_end": "2022-12-01T00:00:00Z"
            },
            "connection_uris": [
                {
                    "connection_uri": "x",
                    "connection_parameters": {
                        "database": "x",
                        "password": "x",
                        "role": "x",
                        "host": "x",
                        "pooler_host": "x"
                    }
                }
            ],
            "roles": [
                {
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-23T17:42:25Z",
                    "name": "casey",
                    "protected": false,
                    "updated_at": "2022-11-23T17:42:25Z"
                }
            ],
            "databases": [
                {
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-30T18:25:15Z",
                    "id": 834686,
                    "name": "neondb",
                    "owner_name": "casey",
                    "updated_at": "2022-11-30T18:25:15Z"
                }
            ],
            "operations": [
                {
                    "action": "start_compute",
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-15T20:02:00Z",
                    "endpoint_id": "ep-silent-smoke-806639",
                    "failures_count": 0,
                    "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
                    "project_id": "spring-example-302709",
                    "status": "finished",
                    "total_duration_ms": 200,
                    "updated_at": "2022-11-15T20:02:02Z"
                }
            ],
            "branch": {
                "id": "br-wispy-meadow-118737",
                "project_id": "spring-example-302709",
                "parent_id": "br-aged-salad-637688",
                "parent_lsn": "0/1DE2850",
                "name": "dev2",
                "protected": false,
                "current_state": "ready",
                "state_changed_at": "2022-11-30T20:09:48Z",
                "creation_source": "console",
                "created_at": "2022-11-30T19:09:48Z",
                "updated_at": "2022-12-01T19:53:05Z",
                "default": true,
                "init_source": "parent-data",
                "data_transfer_bytes": 72911987,
                "written_data_bytes": 542998300,
                "compute_time_seconds": 823880990,
                "active_time_seconds": 922200,
                "cpu_used_sec": 461100
            },
            "endpoints": [
                {
                    "autoscaling_limit_max_cu": 1,
                    "autoscaling_limit_min_cu": 1,
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-12-03T15:37:07Z",
                    "creation_source": "console",
                    "current_state": "init",
                    "disabled": false,
                    "host": "ep-silent-smoke-806639.us-east-2.aws.neon.tech",
                    "id": "ep-silent-smoke-806639",
                    "name": "My cool compute",
                    "passwordless_access": true,
                    "pending_state": "active",
                    "pooler_enabled": false,
                    "pooler_mode": "transaction",
                    "project_id": "spring-example-302709",
                    "provisioner": "k8s-neonvm",
                    "proxy_host": "us-east-2.aws.neon.tech",
                    "region_id": "aws-us-east-2",
                    "settings": {
                        "pg_settings": {}
                    },
                    "suspend_timeout_seconds": 0,
                    "type": "read_write",
                    "updated_at": "2022-12-03T15:37:07Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "list",
        "method": "GET",
        "path": "/projects",
        "args": [],
        "select": {
            "cursor": "v1",
            "limit": "v1",
            "org_id": "v1",
            "recoverable": "v1",
            "search": "v1",
            "timeout": "v1"
        },
        "headers": [],
        "query": [
            "cursor",
            "limit",
            "search",
            "org_id",
            "timeout",
            "recoverable"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "projects": [
                {
                    "id": "shiny-wind-028834",
                    "platform_id": "aws",
                    "region_id": "aws-us-east-2",
                    "name": "shiny-wind-028834",
                    "provisioner": "k8s-pod",
                    "pg_version": 15,
                    "created_at": "2022-11-23T17:42:25Z",
                    "updated_at": "2022-11-23T17:42:25Z",
                    "proxy_host": "us-east-2.aws.neon.tech",
                    "cpu_used_sec": 0,
                    "branch_logical_size_limit": 0,
                    "owner_id": "1232111",
                    "creation_source": "console",
                    "store_passwords": true,
                    "branch_logical_size_limit_bytes": 10800,
                    "active_time": 100
                },
                {
                    "id": "winter-boat-259881",
                    "platform_id": "aws",
                    "region_id": "aws-us-east-2",
                    "name": "winter-boat-259881",
                    "provisioner": "k8s-pod",
                    "pg_version": 15,
                    "created_at": "2022-11-23T17:52:25Z",
                    "updated_at": "2022-11-23T17:52:25Z",
                    "proxy_host": "us-east-2.aws.neon.tech",
                    "cpu_used_sec": 0,
                    "branch_logical_size_limit": 0,
                    "owner_id": "1232111",
                    "creation_source": "console",
                    "store_passwords": true,
                    "branch_logical_size_limit_bytes": 10800,
                    "active_time": 100,
                    "org_id": "org-morning-bread-81040908"
                }
            ],
            "applications": {
                "winter-boat-259881": [
                    "vercel",
                    "github"
                ]
            },
            "integrations": {
                "winter-boat-259881": [
                    "vercel",
                    "github"
                ]
            }
        },
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/advisors",
        "action": "advisor",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {
            "branch_id": "v1",
            "category": "v1",
            "database_name": "v1",
            "min_severity": "v1"
        },
        "headers": [],
        "query": [
            "branch_id",
            "database_name",
            "category",
            "min_severity"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "issues": [
                {
                    "cache_key": "x",
                    "categories": [
                        "SECURITY"
                    ],
                    "description": "x",
                    "detail": "Table `public.users` is public, but RLS has not been enabled.",
                    "facing": "EXTERNAL",
                    "level": "ERROR",
                    "metadata": {},
                    "name": "rls_disabled_in_public",
                    "remediation": "https://neon.com/docs/data-api/database-advisor",
                    "title": "RLS Disabled in Public"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "list",
        "method": "GET",
        "path": "/projects/shared",
        "action": "shared",
        "args": [],
        "select": {
            "cursor": "v1",
            "limit": "v1",
            "search": "v1",
            "timeout": "v1"
        },
        "headers": [],
        "query": [
            "cursor",
            "limit",
            "search",
            "timeout"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "projects": [
                {
                    "id": "shiny-wind-028834",
                    "platform_id": "aws",
                    "region_id": "aws-us-east-2",
                    "name": "shiny-wind-028834",
                    "provisioner": "k8s-pod",
                    "pg_version": 15,
                    "created_at": "2022-11-23T17:42:25Z",
                    "updated_at": "2022-11-23T17:42:25Z",
                    "proxy_host": "us-east-2.aws.neon.tech",
                    "cpu_used_sec": 0,
                    "branch_logical_size_limit": 0,
                    "owner_id": "1232111",
                    "creation_source": "console",
                    "store_passwords": true,
                    "branch_logical_size_limit_bytes": 10800,
                    "active_time": 100
                },
                {
                    "id": "winter-boat-259881",
                    "platform_id": "aws",
                    "region_id": "aws-us-east-2",
                    "name": "winter-boat-259881",
                    "provisioner": "k8s-pod",
                    "pg_version": 15,
                    "created_at": "2022-11-23T17:52:25Z",
                    "updated_at": "2022-11-23T17:52:25Z",
                    "proxy_host": "us-east-2.aws.neon.tech",
                    "cpu_used_sec": 0,
                    "branch_logical_size_limit": 0,
                    "owner_id": "1232111",
                    "creation_source": "console",
                    "store_passwords": true,
                    "branch_logical_size_limit_bytes": 10800,
                    "active_time": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "project": {
                "id": "shiny-wind-028834",
                "platform_id": "aws",
                "region_id": "aws-us-east-2",
                "name": "shiny-wind-028834",
                "provisioner": "k8s-pod",
                "pg_version": 15,
                "history_retention_seconds": 604800,
                "created_at": "2022-11-23T17:42:25Z",
                "updated_at": "2022-11-23T17:42:25Z",
                "proxy_host": "us-east-2.aws.neon.tech",
                "branch_logical_size_limit": 0,
                "cpu_used_sec": 10,
                "owner_id": "1232111",
                "owner": {
                    "name": "John Smith",
                    "email": "some@email.com",
                    "branches_limit": 10,
                    "subscription_type": "scale"
                },
                "creation_source": "console",
                "store_passwords": true,
                "branch_logical_size_limit_bytes": 10500,
                "data_storage_bytes_hour": 1040,
                "data_transfer_bytes": 1000000,
                "written_data_bytes": 100800,
                "compute_time_seconds": 100,
                "active_time_seconds": 100,
                "consumption_period_start": "2023-02-01T00:00:00Z",
                "consumption_period_end": "2023-03-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            },
            {
                "name": "vpc_endpoint_id",
                "wire": "vpc_endpoint_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "project": {
                "id": "bold-cloud-468218",
                "platform_id": "aws",
                "region_id": "aws-us-east-2",
                "name": "bold-cloud-468218",
                "provisioner": "k8s-pod",
                "pg_version": 15,
                "created_at": "2022-11-30T18:41:29Z",
                "updated_at": "2022-11-30T18:41:29Z",
                "proxy_host": "us-east-2.aws.neon.tech",
                "cpu_used_sec": 23004200,
                "branch_logical_size_limit": 0,
                "owner_id": "1232111",
                "creation_source": "console",
                "store_passwords": true,
                "branch_logical_size_limit_bytes": 10500,
                "data_storage_bytes_hour": 1040,
                "data_transfer_bytes": 1000000,
                "written_data_bytes": 100800,
                "compute_time_seconds": 100,
                "active_time_seconds": 100,
                "history_retention_seconds": 604800,
                "consumption_period_start": "2023-02-01T00:00:00Z",
                "consumption_period_end": "2023-03-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "project",
        "accessor": "Project",
        "op": "update",
        "method": "PUT",
        "path": "/projects/{project_id}/transfer_requests/{request_id}",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            },
            {
                "name": "request_id",
                "wire": "request_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "project_branch_log_field",
        "accessor": "ProjectBranchLogField",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/logs/fields",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "fields": [
                "x"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "project_branch_log_field_value",
        "accessor": "ProjectBranchLogFieldValue",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/logs/fields/{field_name}/values",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "field_name",
                "wire": "field_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {
            "end_time": "v1",
            "limit": "v1",
            "since": "1h",
            "source": "v1",
            "start_time": "v1"
        },
        "headers": [],
        "query": [
            "since",
            "start_time",
            "end_time",
            "source",
            "limit"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "values": [
                "x"
            ],
            "is_truncated": true
        },
        "idField": "id"
    },
    {
        "entity": "project_branch_logs_query",
        "accessor": "ProjectBranchLogsQuery",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/logs/query",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "logs": [
                {
                    "timestamp": "2026-01-01T00:00:00Z",
                    "message": "x",
                    "source": "function",
                    "entity_id": "x",
                    "service_name": "x",
                    "scope_name": "x",
                    "severity_number": 1,
                    "severity_text": "x",
                    "trace_id": "x",
                    "span_id": "x",
                    "attributes": {}
                }
            ],
            "next_cursor": "x",
            "is_truncated": true
        },
        "idField": "id"
    },
    {
        "entity": "project_member",
        "accessor": "ProjectMember",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/members",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {
            "cursor": "v1",
            "limit": "v1"
        },
        "headers": [],
        "query": [
            "cursor",
            "limit"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "project_members": [
                {
                    "effective_project_permission": "VIEWER",
                    "email": "x",
                    "explicit_project_permission": "VIEWER",
                    "grant_source": "explicit",
                    "member_id": "x",
                    "name": "x",
                    "org_default_project_permission": "VIEWER",
                    "org_role": "admin",
                    "project_role": "viewer",
                    "user_id": "x"
                }
            ],
            "pagination": {
                "next": "x",
                "sort_by": "x",
                "sort_order": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "project_member_role",
        "accessor": "ProjectMemberRole",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/members/{member_id}/role",
        "args": [
            {
                "name": "member_id",
                "wire": "member_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {
            "confirm_self_lockout": "v1"
        },
        "headers": [],
        "query": [
            "confirm_self_lockout"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "project_id": "x",
            "member_id": "x",
            "user_id": "x",
            "email": "x",
            "name": "x",
            "org_role": "admin",
            "project_role": "viewer",
            "org_default_project_permission": "VIEWER",
            "explicit_project_permission": "VIEWER",
            "effective_project_permission": "VIEWER",
            "credential_rotation_recommended": true,
            "org_api_key_rotation_recommended": true
        },
        "idField": "id"
    },
    {
        "entity": "project_member_role",
        "accessor": "ProjectMemberRole",
        "op": "update",
        "method": "PUT",
        "path": "/projects/{project_id}/members/{member_id}/role",
        "args": [
            {
                "name": "member_id",
                "wire": "member_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {
            "confirm_self_demotion": "v1"
        },
        "headers": [],
        "query": [
            "confirm_self_demotion"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "project_id": "x",
            "member_id": "x",
            "user_id": "x",
            "email": "x",
            "name": "x",
            "org_role": "admin",
            "project_role": "viewer",
            "org_default_project_permission": "VIEWER",
            "explicit_project_permission": "VIEWER",
            "effective_project_permission": "VIEWER",
            "credential_rotation_recommended": true,
            "org_api_key_rotation_recommended": true
        },
        "idField": "id"
    },
    {
        "entity": "project_permission",
        "accessor": "ProjectPermission",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/permissions",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "granted_to_email": "x",
            "granted_at": "2026-01-01T00:00:00Z",
            "revoked_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "project_permission",
        "accessor": "ProjectPermission",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/permissions",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "project_permissions": [
                {
                    "granted_at": "2026-01-01T00:00:00Z",
                    "granted_to_email": "x",
                    "id": "x",
                    "revoked_at": "2026-01-01T00:00:00Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "project_permission",
        "accessor": "ProjectPermission",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/permissions/{permission_id}",
        "args": [
            {
                "name": "id",
                "wire": "permission_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x",
            "granted_to_email": "x",
            "granted_at": "2026-01-01T00:00:00Z",
            "revoked_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "project_recover",
        "accessor": "ProjectRecover",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/recover",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "project": {
                "id": "spring-example-302709",
                "platform_id": "aws",
                "region_id": "aws-us-east-2",
                "name": "spring-example-302709",
                "provisioner": "k8s-pod",
                "pg_version": 15,
                "proxy_host": "us-east-2.aws.neon.tech",
                "store_passwords": true,
                "creation_source": "console",
                "history_retention_seconds": 604800,
                "created_at": "2022-12-13T01:30:55Z",
                "updated_at": "2022-12-13T01:30:55Z",
                "owner": {
                    "name": "John Smith",
                    "email": "some@email.com",
                    "branches_limit": 10,
                    "subscription_type": "scale"
                },
                "org_id": "org-morning-bread-81040908",
                "owner_id": "629982cc-de05-43db-ae16-28f2399c4910",
                "data_storage_bytes_hour": 2831928,
                "branch_logical_size_limit": 10,
                "branch_logical_size_limit_bytes": 10485760,
                "data_transfer_bytes": 1000,
                "written_data_bytes": 193990002,
                "compute_time_seconds": 2485760,
                "active_time_seconds": 621440,
                "cpu_used_sec": 155350,
                "consumption_period_start": "2022-11-01T00:00:00Z",
                "consumption_period_end": "2022-12-01T00:00:00Z"
            },
            "branches": [
                {
                    "active_time_seconds": 922200,
                    "compute_time_seconds": 823880990,
                    "cpu_used_sec": 461100,
                    "created_at": "2022-11-30T19:09:48Z",
                    "creation_source": "console",
                    "current_state": "ready",
                    "data_transfer_bytes": 72911987,
                    "default": true,
                    "id": "br-wispy-meadow-118737",
                    "init_source": "parent-data",
                    "name": "dev2",
                    "parent_id": "br-aged-salad-637688",
                    "parent_lsn": "0/1DE2850",
                    "project_id": "spring-example-302709",
                    "protected": false,
                    "state_changed_at": "2022-11-30T20:09:48Z",
                    "updated_at": "2022-12-01T19:53:05Z",
                    "written_data_bytes": 542998300
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "project_transfer_request",
        "accessor": "ProjectTransferRequest",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/transfer_requests",
        "args": [
            {
                "name": "id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "id": "x",
            "project_id": "x",
            "created_at": "2026-01-01T00:00:00Z",
            "expires_at": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "region",
        "accessor": "Region",
        "op": "list",
        "method": "GET",
        "path": "/regions",
        "args": [],
        "select": {
            "org_id": "v1"
        },
        "headers": [],
        "query": [
            "org_id"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "regions": [
                {
                    "default": true,
                    "geo_lat": "x",
                    "geo_long": "x",
                    "name": "x",
                    "region_id": "aws-us-east-1"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "role",
        "accessor": "Role",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/roles",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "role": {
                "branch_id": "br-noisy-sunset-458773",
                "name": "sally",
                "password": "Onf1AjayKwe0",
                "protected": false,
                "created_at": "2022-12-03T11:58:29Z",
                "updated_at": "2022-12-03T11:58:29Z"
            },
            "operations": [
                {
                    "id": "2c2be371-d5ac-4db5-8b68-79f05e8bc287",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-noisy-sunset-458773",
                    "endpoint_id": "ep-small-pine-767857",
                    "action": "apply_config",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-03T11:58:29Z",
                    "updated_at": "2022-12-03T11:58:29Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "role",
        "accessor": "Role",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/roles",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "roles": [
                {
                    "branch_id": "br-aged-salad-637688",
                    "name": "casey",
                    "protected": false,
                    "created_at": "2022-11-23T17:42:25Z",
                    "updated_at": "2022-11-23T17:42:25Z"
                },
                {
                    "branch_id": "br-aged-salad-637688",
                    "name": "thomas",
                    "protected": false,
                    "created_at": "2022-10-22T17:38:21Z",
                    "updated_at": "2022-10-22T17:38:21Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "role",
        "accessor": "Role",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "role_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "role": {
                "branch_id": "br-noisy-sunset-458773",
                "name": "casey",
                "protected": false,
                "created_at": "2022-11-23T17:42:25Z",
                "updated_at": "2022-11-23T17:42:25Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "role",
        "accessor": "Role",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "role_name",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "role": {
                "branch_id": "br-raspy-hill-832856",
                "name": "thomas",
                "protected": false,
                "created_at": "2022-12-01T14:36:23Z",
                "updated_at": "2022-12-01T14:36:23Z"
            },
            "operations": [
                {
                    "id": "db646be3-eace-4910-9f60-8150823c5cb8",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-raspy-hill-832856",
                    "endpoint_id": "ep-steep-bush-777093",
                    "action": "apply_config",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-01T19:48:11Z",
                    "updated_at": "2022-12-01T19:48:11Z",
                    "total_duration_ms": 100
                },
                {
                    "id": "ab94cdad-7630-4943-a55e-5a0952d2e598",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-raspy-hill-832856",
                    "endpoint_id": "ep-steep-bush-777093",
                    "action": "suspend_compute",
                    "status": "scheduling",
                    "failures_count": 0,
                    "created_at": "2022-12-01T19:48:11Z",
                    "updated_at": "2022-12-01T19:48:11Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "role_operation",
        "accessor": "RoleOperation",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            },
            {
                "name": "role_name",
                "wire": "role_name",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "role": {
                "branch_id": "br-noisy-sunset-458773",
                "name": "sally",
                "password": "ClfD0aVuK3eK",
                "protected": false,
                "created_at": "2022-12-03T12:39:39Z",
                "updated_at": "2022-12-03T12:58:18Z"
            },
            "operations": [
                {
                    "id": "6bef07a0-ebca-40cd-9100-7324036cfff2",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-noisy-sunset-458773",
                    "endpoint_id": "ep-small-pine-767857",
                    "action": "apply_config",
                    "status": "running",
                    "failures_count": 0,
                    "created_at": "2022-12-03T12:58:18Z",
                    "updated_at": "2022-12-03T12:58:18Z",
                    "total_duration_ms": 100
                },
                {
                    "id": "16b5bfca-4697-4194-a338-d2cdc9aca2af",
                    "project_id": "shiny-wind-028834",
                    "branch_id": "br-noisy-sunset-458773",
                    "endpoint_id": "ep-small-pine-767857",
                    "action": "suspend_compute",
                    "status": "scheduling",
                    "failures_count": 0,
                    "created_at": "2022-12-03T12:58:18Z",
                    "updated_at": "2022-12-03T12:58:18Z",
                    "total_duration_ms": 100
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "role_password",
        "accessor": "RolePassword",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/roles/{role_name}/reveal_password",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            },
            {
                "name": "role_name",
                "wire": "role_name",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "password": "mypass"
        },
        "idField": "id"
    },
    {
        "entity": "snapshot",
        "accessor": "Snapshot",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/snapshot",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {
            "expires_at": "2025-08-05T22:00:00Z",
            "lsn": "v1",
            "name": "v1",
            "slug": "v1",
            "timestamp": "2025-08-05T22:00:00Z"
        },
        "headers": [],
        "query": [
            "lsn",
            "timestamp",
            "name",
            "slug",
            "expires_at"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "snapshot": {
                "id": "x",
                "name": "x",
                "slug": "x",
                "lsn": "x",
                "timestamp": "x",
                "source_branch_id": "x",
                "created_at": "2025-01-15T10:30:00Z",
                "expires_at": "x",
                "manual": true,
                "full_size": 1,
                "diff_size": 1
            },
            "operations": [
                {
                    "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
                    "project_id": "spring-example-302709",
                    "branch_id": "br-wispy-meadow-118737",
                    "endpoint_id": "ep-silent-smoke-806639",
                    "action": "start_compute",
                    "status": "finished",
                    "failures_count": 0,
                    "created_at": "2022-11-15T20:02:00Z",
                    "updated_at": "2022-11-15T20:02:02Z",
                    "total_duration_ms": 200
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "snapshot",
        "accessor": "Snapshot",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/snapshots/{snapshot_id}/restore",
        "action": "restore",
        "args": [
            {
                "name": "id",
                "wire": "snapshot_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {
            "name": "v1"
        },
        "headers": [],
        "query": [
            "name"
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "branch": {
                "id": "br-wispy-meadow-118737",
                "project_id": "spring-example-302709",
                "parent_id": "br-aged-salad-637688",
                "parent_lsn": "0/1DE2850",
                "name": "dev2",
                "protected": false,
                "current_state": "ready",
                "state_changed_at": "2022-11-30T20:09:48Z",
                "creation_source": "console",
                "created_at": "2022-11-30T19:09:48Z",
                "updated_at": "2022-12-01T19:53:05Z",
                "default": true,
                "init_source": "parent-data",
                "data_transfer_bytes": 72911987,
                "written_data_bytes": 542998300,
                "compute_time_seconds": 823880990,
                "active_time_seconds": 922200,
                "cpu_used_sec": 461100
            },
            "endpoints": [
                {
                    "host": "ep-silent-smoke-806639.us-east-2.aws.neon.tech",
                    "id": "ep-silent-smoke-806639",
                    "name": "My cool compute",
                    "project_id": "spring-example-302709",
                    "branch_id": "br-wispy-meadow-118737",
                    "autoscaling_limit_min_cu": 1,
                    "autoscaling_limit_max_cu": 1,
                    "region_id": "aws-us-east-2",
                    "type": "read_write",
                    "current_state": "init",
                    "pending_state": "active",
                    "settings": {
                        "pg_settings": {}
                    },
                    "pooler_enabled": false,
                    "pooler_mode": "transaction",
                    "disabled": false,
                    "passwordless_access": true,
                    "creation_source": "console",
                    "created_at": "2022-12-03T15:37:07Z",
                    "updated_at": "2022-12-03T15:37:07Z",
                    "proxy_host": "us-east-2.aws.neon.tech",
                    "suspend_timeout_seconds": 0,
                    "provisioner": "k8s-neonvm"
                }
            ],
            "operations": [
                {
                    "action": "start_compute",
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-15T20:02:00Z",
                    "endpoint_id": "ep-silent-smoke-806639",
                    "failures_count": 0,
                    "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
                    "project_id": "spring-example-302709",
                    "status": "finished",
                    "total_duration_ms": 200,
                    "updated_at": "2022-11-15T20:02:02Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "snapshot",
        "accessor": "Snapshot",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/snapshots",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "snapshots": [
                {
                    "created_at": "2025-01-15T10:30:00Z",
                    "diff_size": 1,
                    "expires_at": "x",
                    "full_size": 1,
                    "id": "x",
                    "lsn": "x",
                    "manual": true,
                    "name": "x",
                    "slug": "x",
                    "source_branch_id": "x",
                    "timestamp": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "snapshot",
        "accessor": "Snapshot",
        "op": "remove",
        "method": "DELETE",
        "path": "/projects/{project_id}/snapshots/{snapshot_id}",
        "args": [
            {
                "name": "id",
                "wire": "snapshot_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 202,
        "sample": {
            "operations": [
                {
                    "action": "start_compute",
                    "branch_id": "br-wispy-meadow-118737",
                    "created_at": "2022-11-15T20:02:00Z",
                    "endpoint_id": "ep-silent-smoke-806639",
                    "failures_count": 0,
                    "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
                    "project_id": "spring-example-302709",
                    "status": "finished",
                    "total_duration_ms": 200,
                    "updated_at": "2022-11-15T20:02:02Z"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "snapshot",
        "accessor": "Snapshot",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/snapshots/{snapshot_id}",
        "args": [
            {
                "name": "id",
                "wire": "snapshot_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "snapshot": {
                "id": "x",
                "name": "x",
                "slug": "x",
                "lsn": "x",
                "timestamp": "x",
                "source_branch_id": "x",
                "created_at": "2025-01-15T10:30:00Z",
                "expires_at": "x",
                "manual": true,
                "full_size": 1,
                "diff_size": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "spending_limit",
        "accessor": "SpendingLimit",
        "op": "load",
        "method": "GET",
        "path": "/organizations/{org_id}/billing/spending_limit",
        "args": [
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "spending_limit_cents": 1
        },
        "idField": "id"
    },
    {
        "entity": "spending_limit",
        "accessor": "SpendingLimit",
        "op": "update",
        "method": "PUT",
        "path": "/organizations/{org_id}/billing/spending_limit",
        "args": [
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "spending_limit_cents": 1
        },
        "idField": "id"
    },
    {
        "entity": "trigger",
        "accessor": "Trigger",
        "op": "create",
        "method": "POST",
        "path": "/projects/{project_id}/branches/{branch_id}/triggers",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 201,
        "sample": {
            "trigger": {
                "enabled": true,
                "function_path": "x",
                "function_slug": "x",
                "inherited": true,
                "name": "x",
                "next_run_at": "x",
                "schedule": {
                    "cron": "0 9 * * 1-5"
                },
                "trigger_id": "x",
                "type": "schedule",
                "version": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "trigger",
        "accessor": "Trigger",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/triggers",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "triggers": [
                {
                    "enabled": true,
                    "function_path": "x",
                    "function_slug": "x",
                    "inherited": true,
                    "name": "x",
                    "next_run_at": "x",
                    "schedule": {
                        "cron": "0 9 * * 1-5"
                    },
                    "trigger_id": "x",
                    "type": "schedule",
                    "version": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "trigger",
        "accessor": "Trigger",
        "op": "load",
        "method": "GET",
        "path": "/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "trigger_id",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "trigger": {
                "enabled": true,
                "function_path": "x",
                "function_slug": "x",
                "inherited": true,
                "name": "x",
                "next_run_at": "x",
                "schedule": {
                    "cron": "0 9 * * 1-5"
                },
                "trigger_id": "x",
                "type": "schedule",
                "version": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "trigger",
        "accessor": "Trigger",
        "op": "update",
        "method": "PATCH",
        "path": "/projects/{project_id}/branches/{branch_id}/triggers/{trigger_id}",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "id",
                "wire": "trigger_id",
                "value": "p2"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "trigger": {
                "enabled": true,
                "function_path": "x",
                "function_slug": "x",
                "inherited": true,
                "name": "x",
                "next_run_at": "x",
                "schedule": {
                    "cron": "0 9 * * 1-5"
                },
                "trigger_id": "x",
                "type": "schedule",
                "version": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "update_neon_auth_user_role",
        "accessor": "UpdateNeonAuthUserRole",
        "op": "update",
        "method": "PUT",
        "path": "/projects/{project_id}/branches/{branch_id}/auth/users/{auth_user_id}/role",
        "args": [
            {
                "name": "branch_id",
                "wire": "branch_id",
                "value": "p1"
            },
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p2"
            },
            {
                "name": "user_id",
                "wire": "auth_user_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "x"
        },
        "idField": "id"
    },
    {
        "entity": "vpc_endpoint",
        "accessor": "VpcEndpoint",
        "op": "list",
        "method": "GET",
        "path": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints",
        "args": [
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p1"
            },
            {
                "name": "region_id",
                "wire": "region_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "endpoints": [
                {
                    "label": "x",
                    "vpc_endpoint_id": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "vpc_endpoint",
        "accessor": "VpcEndpoint",
        "op": "list",
        "method": "GET",
        "path": "/organizations/{org_id}/vpc/vpc_endpoints",
        "args": [
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "endpoints": [
                {
                    "label": "x",
                    "vpc_endpoint_id": "x",
                    "region_id": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "vpc_endpoint",
        "accessor": "VpcEndpoint",
        "op": "list",
        "method": "GET",
        "path": "/projects/{project_id}/vpc_endpoints",
        "args": [
            {
                "name": "project_id",
                "wire": "project_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "endpoints": [
                {
                    "label": "x",
                    "vpc_endpoint_id": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "vpc_endpoint",
        "accessor": "VpcEndpoint",
        "op": "load",
        "method": "GET",
        "path": "/organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}",
        "args": [
            {
                "name": "id",
                "wire": "vpc_endpoint_id",
                "value": "p1"
            },
            {
                "name": "organization_id",
                "wire": "org_id",
                "value": "p2"
            },
            {
                "name": "region_id",
                "wire": "region_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "vpc_endpoint_id": "x",
            "label": "x",
            "state": "new",
            "num_restricted_projects": 1,
            "example_restricted_projects": [
                "x"
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map