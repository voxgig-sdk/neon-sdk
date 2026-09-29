# Neon: the Voxgig SDK and the Hey API SDK compared

Vergleich: Hey API. Compared with neondatabase/neon-pkgs packages/sdk (@neon/sdk 6.1.2, @hey-api/openapi-ts 0.98.2). Spec: neon.com/api_spec/release/v2.json, OAS 3.0.3, 122 paths / 179 ops, Apache-2.0 (inherited from neondatabase/neon-pkgs, over info.license Proprietary). Added 2026-09-28. Rebuilt 2026-09-29 on sdkgen 4.32.1 and apidef 8.22.0.

This repository is on the admin **vergleich** list. It is built only to be compared, and it is not published.

## Scorecard

| | Voxgig | Hey API |
|---|---|---|
| SDK | this repository, commit `32103a7`: eight targets (go, go-cli, go-mcp, ts, py, rb, lua, php) | `@neon/sdk@6.1.2` (TypeScript) |
| Input | `neon-openapi.json`: OAS 3.0.3, `info.version` v2, 122 paths, 179 operations | the vendor's own generation; the note above names the definition version it came from |
| Operations callable | 178 of 179 (1 modelled as `patch` but not generated) | 177 operation methods |
| Entities | 75 | not applicable |
| ts package | 4.01 MB, 544 files | 2.42 MB, 210 files |
| Runtime dependencies | 0 | 0 |
| Generated tests | ts 653 pass / 0 fail / 8 skipped; py 463 pass / 57 skipped; rb 487 runs / 0 fail; lua 461 pass / 0 fail; php 487 tests / 0 fail; go, go-cli, go-mcp build, vet and test | not run: a published package |
| Determinism | a second generation on the same toolchain is byte-identical | not measured |
| Scenario against a mock | 4 of 4 steps right, 0 returned wrong data, 0 request violations (static) | 4 of 4 steps right, 0 request violations (static) |

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

- **Voxgig, static:** 4 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✓ `load`
  - ✓ `create`
  - ✓ `remove`
- **Voxgig, dynamic:** 4 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✓ `load`
  - ✓ `create`
  - ✓ `remove`
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

- **TS-NAMES** (@voxgig/sdkgen). An entity named operation, context or control collided with the SDK types the ts entity file imports (TS2300: Neon, Novu), and an entity named eval produced `const eval` in the README examples (TS1215: Vapi). Fixed in voxgig/sdkgen#210, released in 4.30.3; this SDK is built on 4.32.1.
- **PATCH-OP** (@voxgig/apidef + @voxgig/sdkgen). apidef resolves a PATCH beside a PUT on the same entity as a sixth op, `patch`, and sdkgen generates only load, list, create, update and remove, so those operations are modelled but have no method. Here: PATCH /projects/{project_id}, Neon's real project update; `update` is mapped to PUT /projects/{project_id}/transfer_requests/{request_id}. Open: voxgig/sdkgen#211.
- **UNWRAP** (@voxgig/apidef). The response transform that says where an operation's data sits was inferred wrongly for several resources in the first build. Here: the project list read `body`, where Neon puts it at `body.projects` beside `pagination`, so list yielded 0 entities, and the create returned the `{ project, connection_uris, ... }` wrapper. The list is fixed in apidef 8.19.0 (voxgig/apidef#102), and the create with 13 more writes composed the same way in 8.22.0 (voxgig/apidef#114, issue #112).
- **QUERY-ECHO** (@voxgig/sdkgen, PrepareQuery). Every match field, path parameters included, was also sent as a query parameter, such as `?id=` on a load. Fixed in voxgig/sdkgen#222, released in 4.31.0: query parameters go out under the definition's names, and the rebuild's scenario requests carry no echoed parameter.
- **DOCS-QA** (@voxgig/docgen, the generated Documentation workflow). The generated API pages quote the vendor's own descriptions, and the workflow runs its prose checks over them, so the step fails on the vendor's identifiers and repeated words rather than on anything the generator wrote. Open: voxgig/docgen#33.

## Hey API SDK notes

- Its retries, timeouts, pagination and typed errors are in a hand-written wrapper over the Hey API client, not generated.

## How this was measured

- Operations: the definition's operations are counted over its paths. Voxgig's are the generated model's points, less those under an op no target generates. The compared SDK's are the operation methods in its published package, counted per generator (method declarations, request-builder verbs, or functions per operation).
- Package size and file count: `npm pack --dry-run` for the Voxgig ts target, and the registry's `dist.unpackedSize` and `dist.fileCount` for the compared package.
- Tests: `admin/scripts/cedar-test-all.sh` runs each target's generated suite.
- Features: read from the code of the published package, crediting a feature only for a mechanism, not a word in the API's own models.
- Rebuild: 2026-09-29, on create-sdkgen 0.30.4, sdkgen 4.32.1, apidef 8.22.0, model 12.0.0 and @tabnas/yaml 0.5.14, all as published, with no overlay.
- Tests on the rebuild: all eight targets, the lua suite under Lua 5.4 with busted 2.2.0.
- Scenario on the rebuild: the Voxgig side was re-run on 2026-09-29; the compared SDK's run is from 2026-09-28, and its package is unchanged. The generated create input honours the definition's minimums, which the first run did not.
