# Neon: the Voxgig SDK and the Hey API SDK compared

Vergleich: Hey API. Compared with neondatabase/neon-pkgs packages/sdk (@neon/sdk 6.1.2, @hey-api/openapi-ts 0.98.2). Spec: neon.com/api_spec/release/v2.json, OAS 3.0.3, 122 paths / 179 ops, Apache-2.0, inherited from neondatabase/neon-pkgs, which carries it (the definition's own info.license says Proprietary). Added 2026-09-28.

This repository is on the admin **vergleich** list. It is built only to be compared, and it is not published.

## Scorecard

| | Voxgig | Hey API |
|---|---|---|
| SDK | this repository, commit `d16e29e`: eight targets (go, go-cli, go-mcp, ts, py, rb, lua, php) | `@neon/sdk@6.1.2` (TypeScript) |
| Input | `neon-openapi.json`: OAS 3.0.3, `info.version` v2, 122 paths, 179 operations | the vendor's own generation; the note above names the definition version it came from |
| Operations callable | 178 of 179 (1 modelled as `patch` but not generated) | 177 operation methods |
| Entities | 75 | not applicable |
| ts package | 3.95 MB, 544 files | 2.42 MB, 210 files |
| Runtime dependencies | 0 | 0 |
| Generated tests | ts 476 pass / 0 fail; py 463 pass; rb 487 runs / 0 fail; lua 461 pass / 0 fail; php 487 tests, 0 fail; go, go-cli, go-mcp build, vet and test | not run: a published package |
| Determinism | a second generation on the same toolchain is byte-identical | not measured |
| Scenario against a mock | 0 of 4 steps right, 2 returned wrong data, 2 request violations (static) | 4 of 4 steps right, 0 request violations (static) |

## Features

Voxgig's features are opt-in; these builds enable the standard set. The Hey API column is read from the published package, with the evidence below.

| Feature | Voxgig | Hey API |
|---|---|---|
| Retries | yes | yes |
| Timeouts | yes | yes |
| Pagination helper | partial | yes |
| Idempotency keys | yes | no |
| Rate-limit handling | yes | yes |
| Logging / debug | yes | no |
| Built-in offline test mode | yes | no |
| Metrics / telemetry | partial | no |
| Cancellation | yes | yes |
| Hooks / middleware | yes | yes |

**Evidence, Hey API.**

- Retries: Hand-written dist/neon/retry.js withRetries: `retries` default 2; 423/429/503 only, full-jitter backoff 250 ms to 10 s cap; skips network errors and paginated pages. Generated layer: none
- Timeouts: Hand-written dist/neon/deadline.js: requestTimeoutMs client-wide and per call (CallOptions), bounds request+retries, NeonRequestTimeoutError; unset = unbounded. Generated layer: none
- Pagination helper: Hand-written dist/neon/paginate.js PaginatedList: page(cursor), all() and for-await async iterator over cursor pages (e.g. projects.list().all()). Generated client has none
- Idempotency keys: Searched 'idempot' in all dist/**/*.js: no key generated or sent by either layer
- Rate-limit handling: Hand-written dist/neon/retry.js: parseRetryAfterMs honours Retry-After (seconds or HTTP-date) on 429/423/503, gives up past 10 s or the deadline; then NeonRateLimitError
- Logging / debug: No logger, log level, debug flag or env var in dist/neon or dist/client; searched console/logger/debug/process.env
- Built-in offline test mode: No mock or test mode; only a `fetch` option in NeonConfig (dist/neon/config.d.ts, 'for proxies, tests...') as an injection seam
- Metrics / telemetry: No tracing or metrics hooks in dist/**/*.js; 'telemetry' appears only as Neon API log endpoints in README.md
- Cancellation: CallOptions.signal (dist/neon/context.d.ts) → NeonAbortError via hand-written deadline.js; generated client passes signal through RequestInit to fetch (dist/client/client/client.gen.js)
- Hooks / middleware: Generated (hey-api): interceptors.request/response/error.use() in dist/client/client/client.gen.js + utils.gen.js; wrapper exposes that client as neon.client; plus a `fetch` option
- Auth: createNeonClient({ apiKey }) takes a string or a sync/async function (hand-written dist/neon/config.js) and passes it as the hey-api `auth` callback, sent as Authorization: Bearer. The callback ignores the scheme, so the generated setAuthParams (dist/client/client/utils.gen.js) also appends the key as zenith and keycloak_token cookies, which every operation lists as alternative schemes. Also an orgId default option.
- Errors: Yes, in the hand-written wrapper: toNeonError (dist/neon/errors.js) maps 404 to NeonNotFoundError, 401/403 to NeonAuthError, 429 to NeonRateLimitError and anything else to NeonApiError (status, code, requestId), plus network, abort, timeout, operation and client classes. The generated layer has per-status TS types only (e.g. ListProjectsErrors '4XX': GeneralError) and returns the parsed body.

**Evidence, Voxgig.**

- Retries: retry feature: 408, 425, 429 and 5xx, honouring Retry-After.
- Timeouts: timeout feature: 30 s per attempt by default.
- Pagination helper: paging feature: page and cursor state carried between calls (ctrl.paging); no iterator.
- Idempotency keys: idempotency feature: generates an Idempotency-Key for mutating calls, stable across retries.
- Rate-limit handling: ratelimit feature: client-side token bucket; retry honours Retry-After on 429.
- Logging / debug: debug feature: request and response logging with auth headers redacted.
- Built-in offline test mode: test feature: an offline mock transport; every generated suite runs on it.
- Metrics / telemetry: metrics feature: per-operation counts and timings; no OpenTelemetry.
- Cancellation: an AbortSignal per call (callopts.signal).
- Hooks / middleware: extend: custom features hook every pipeline stage.

## Scenario

✓ right, ⚠ returned without error but with the wrong data, ✗ failed.

Each SDK lists one resource, loads and removes the first item it listed, and creates one from the definition's own example or required fields, against a mock built from the same vendor definition. The mock is Prism: static mode answers with the definition's examples, and dynamic mode generates schema-valid data. Each SDK is credited with its better mode. Request violations are Prism's verdicts on what the SDK sent.

- **Voxgig, static:** 0 of 4 steps right, 2 request violations.
  - ⚠ `list`: 0 items where the vendor SDK read 2: the list is `body.projects`, and the model says `body`
  - ✗ `load`: NeonSDK: load: request: 422: Unprocessable Entity
  - ⚠ `create`: returned the `{ project, connection_uris, ... }` wrapper, not the project
  - ✗ `remove`: NeonSDK: remove: request: 422: Unprocessable Entity
- **Voxgig, dynamic:** 0 of 4 steps right, 2 request violations.
  - ⚠ `list`: 0 items where the vendor SDK read 2: the list is `body.projects`, and the model says `body`
  - ✗ `load`: NeonSDK: load: request: 422: Unprocessable Entity
  - ⚠ `create`: returned the `{ project, connection_uris, ... }` wrapper, not the project
  - ✗ `remove`: NeonSDK: remove: request: 422: Unprocessable Entity
- **Hey API, static:** 4 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✓ `load`
  - ✓ `create`
  - ✓ `remove`
- **Hey API, dynamic:** 4 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✓ `load`
  - ✓ `create`
  - ✓ `remove`

## Voxgig toolchain findings

- **TS-NAMES** (@voxgig/sdkgen 4.30.2). An entity named operation, context or control collided with the SDK types the ts entity file imports (TS2300: Neon, Novu). An entity named eval produced `const eval` in the README examples (TS1215: Vapi). Fixed in voxgig/sdkgen#210, released in 4.30.3. All eight SDKs are built on 4.30.3.
- **PATCH-OP** (@voxgig/apidef 8.17.2 + @voxgig/sdkgen 4.30.3). apidef resolves a PATCH beside a PUT on the same entity as a sixth op, `patch`. sdkgen generates only load, list, create, update and remove, so those operations are modelled but have no method. The coverage gate counts entities, so it passes anyway. Here: neon: PATCH /projects/{project_id} (Neon's real project update; `update` was mapped to PUT /projects/{project_id}/transfer_requests/{request_id}). Reported, not changed: a design decision across both tools.
- **UNWRAP** (@voxgig/apidef 8.17.2). The response transform that says where an operation's data sits is inferred wrongly for several resources, in both directions. A schema whose one object-valued property is ordinary data is taken for an envelope (Apicurio's `labels`, SaladCloud's `container`), and a real envelope is missed when it is composed with allOf (Lob) or sits beside another property (Neon's `projects` beside `pagination`). The SDKs' own tests cannot see it, because they mock from the same model; a mock built from the vendor definition does. Here: neon project list: `body`, but the list is `body.projects`; list yields 0 entities. Create returns the `{ project, ... }` wrapper while load unwraps `body.project`. Reported, not changed: heuristic design in apidef.
- **QUERY-ECHO** (@voxgig/sdkgen 4.30.3 (PrepareQuery: ts, js and rb read the field; other targets not checked)). Every match field, path parameters included, is also sent as a query parameter: GET /video/v1/assets/a1?id=a1 (Mux), GET /assistant/asst_1?id=asst_1 (Vapi), DELETE .../containers/web?id=web&organization_name=acme&project_id=demo (SaladCloud). prepareQuery excludes names in point.params, but the generated config carries path parameters in point.args.params (which prepareParams reads), so nothing is excluded. Harmless to a lenient server, rejected by a strict one. Prism logs paths without query strings, so its runs did not show it. Reported, not changed: the same exclusion exists per target.
- **DOCS-QA** (@voxgig/docgen 0.29.2 (the generated Documentation workflow)). The generated API pages quote each vendor's own descriptions, and the Documentation workflow runs its prose checks over them. Vale reads identifiers such as `asset_id` as misspellings (272 errors on Mux, 44 on Neon), and docgen's own rules reject the vendor's repeated words and first-person prose (Apicurio). Vapi and Maxio fail the same step. Every SDK's tests pass on every target; only the documentation check fails. Reported, not changed: whether a vendor's text is prose-checked is docgen's design. Lob and Novu fail earlier, at generation, on the unpatched YAML parser (Y1-Y3). SaladCloud's pages pass the check; only the deploy fails, because GitHub Pages is not enabled for the repository.

## Hey API SDK notes

- Its retries, timeouts, pagination and typed errors are in a hand-written wrapper over the Hey API client, not generated.

## How this was measured

- Operations: the definition's operations are counted over its paths. Voxgig's are the generated model's points, less those under an op no target generates. The compared SDK's are the operation methods in its published package, counted per generator (method declarations, request-builder verbs, or functions per operation).
- Package size and file count: `npm pack --dry-run` for the Voxgig ts target, and the registry's `dist.unpackedSize` and `dist.fileCount` for the compared package.
- Tests: `admin/scripts/cedar-test-all.sh` runs each target's generated suite.
- Features: read from the code of the published package, crediting a feature only for a mechanism, not a word in the API's own models.

