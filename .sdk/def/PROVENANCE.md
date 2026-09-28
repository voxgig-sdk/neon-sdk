# Provenance of neon-openapi.json

- **API:** Neon, serverless Postgres (neon.com).
- **Source:** <https://neon.com/api_spec/release/v2.json>
- **What it is:** Neon's published v2 definition.
- **Retrieved:** 2026-09-28T20:35:54Z
- **SHA-256:** `cc8478b185d61071e00ae8440d4192b17f5f9c9fe37802cb6e49fc7bb91b611d`
- **Definition:** OpenAPI 3.0.3, `info.version` v2, 122 paths, 179 operations, 848 KB.
- **Licence:** Proprietary (info.license).
- **Changes:** none. This is the vendor's definition, byte for byte.

## Why this SDK exists

It is on the admin repository's **vergleich** list: SDKs built with the Voxgig
toolchain to compare it with the generators on voxgig.com/sdk/comparisons, one
API per generator. This one is compared with **Hey API**.

- **Compared with:** neondatabase/neon-pkgs `packages/sdk`, `@neon/sdk` 6.1.2, generated with `@hey-api/openapi-ts` 0.98.2. A hand-written layer over it adds retries, readiness polling and pagination.
