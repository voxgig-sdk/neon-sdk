# neon-cli

boru-driven command-line client **and** interactive REPL for the Neon
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/neon-cli)
make build

# 2. See usage (words, entities, env vars)
./neon-cli --help

# 3. Provide credentials once, via the environment
export NEON_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:

# 5. Override the API base URL for a single call
NEON_BASE=https://api.example.com ./neon-cli --help

# 6. No arguments -> interactive REPL
./neon-cli
neon> /help
neon> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/neon-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export NEON_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/neon-cli --help
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export NEON_APIKEY=sk_live_xxx            # API key
export NEON_BASE=https://api.example.com  # optional: override the API base URL
./neon-cli --help
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `neon>`). Each line is
evaluated as its own boru expression:

```text
$ ./neon-cli
neon> /help
neon> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 75 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `anonymize`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `NEON_APIKEY` | API key sent with every request. |
| `NEON_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/neon-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 75 entities this SDK exposes (any is valid as `<entity>`):

anonymize anonymized_branch_status api_key auth auth_legacy available_preload_library backup_schedule branch branch_ai_gateway branch_operation branch_schema branch_schema_compare branch_storage bucket bucket_objects_list connection_uri consumption create_credential credential current_user_info custom_domain data_api database email_provider email_server empty endpoint endpoint_operation function jwk masking_rule member neon_auth_allow_localhost neon_auth_config neon_auth_create_integration neon_auth_create_new_user neon_auth_email_and_password_config neon_auth_email_server_config neon_auth_integration neon_auth_magic_link_config neon_auth_oauth_provider neon_auth_organization_config neon_auth_phone_number_config neon_auth_plugin_config neon_auth_redirect_uri_whitelist_domain neon_auth_transfer_auth_provider_project neon_auth_webhook_config neon_function neon_function_deployment operation org_api_key_create org_api_key_revoke org_api_keys_list_response_item organization organization_invitation presign project project_branch_log_field project_branch_log_field_value project_branch_logs_query project_member project_member_role project_permission project_recover project_transfer_request region role role_operation role_password send_neon_auth_test_email snapshot spending_limit trigger update_neon_auth_user_role vpc_endpoint

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./neon-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
