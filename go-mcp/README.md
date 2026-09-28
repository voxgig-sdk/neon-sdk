# neon-mcp

[MCP](https://modelcontextprotocol.io) server exposing the Neon SDK as
two agent tools — `neon_list` and `neon_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/neon-mcp)
make build

# 2. Provide credentials via the environment
export NEON_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user neon \
  -- /absolute/path/to/neon-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./neon-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// neon_list: first page of records
{ "entity": "api_key" }
{ "entity": "api_key", "query": { } }

// neon_load: one record by id
{ "entity": "anonymized_branch_status", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/neon-mcp
   ```

2. **Set your API key:**

   ```sh
   export NEON_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user neon \
     -- "$PWD"/dist/*/neon-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `neon_list` and `neon_load` tools now appear
   in new sessions. Ask the agent to *"list api_key using neon"*
   and it calls `neon_list` with `{"entity":"api_key"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export NEON_APIKEY=sk_live_xxx            # API key
export NEON_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./neon-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `neon_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "api_key" }
```

### Call the `neon_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "anonymized_branch_status", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `neon_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `neon_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 75 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `NEON_APIKEY` | API key sent with every request. |
| `NEON_BASE` | Optional override of the API base URL. |

### Entities

The 75 entities valid as the `entity` argument:

anonymize | anonymized_branch_status | api_key | auth | auth_legacy | available_preload_library | backup_schedule | branch | branch_ai_gateway | branch_operation | branch_schema | branch_schema_compare | branch_storage | bucket | bucket_objects_list | connection_uri | consumption | create_credential | credential | current_user_info | custom_domain | data_api | database | email_provider | email_server | empty | endpoint | endpoint_operation | function | jwk | masking_rule | member | neon_auth_allow_localhost | neon_auth_config | neon_auth_create_integration | neon_auth_create_new_user | neon_auth_email_and_password_config | neon_auth_email_server_config | neon_auth_integration | neon_auth_magic_link_config | neon_auth_oauth_provider | neon_auth_organization_config | neon_auth_phone_number_config | neon_auth_plugin_config | neon_auth_redirect_uri_whitelist_domain | neon_auth_transfer_auth_provider_project | neon_auth_webhook_config | neon_function | neon_function_deployment | operation | org_api_key_create | org_api_key_revoke | org_api_keys_list_response_item | organization | organization_invitation | presign | project | project_branch_log_field | project_branch_log_field_value | project_branch_logs_query | project_member | project_member_role | project_permission | project_recover | project_transfer_request | region | role | role_operation | role_password | send_neon_auth_test_email | snapshot | spending_limit | trigger | update_neon_auth_user_role | vpc_endpoint

### Smoke test via HTTP (raw JSON-RPC)

```sh
./neon-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"neon_load","arguments":{"entity":"anonymized_branch_status","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
