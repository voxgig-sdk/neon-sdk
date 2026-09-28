<?php
declare(strict_types=1);

// NeonAuthOauthProvider entity test

require_once __DIR__ . '/../neon_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class NeonAuthOauthProviderEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = NeonSDK::test(null, null);
        $ent = $testsdk->NeonAuthOauthProvider(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "neon_auth_oauth_provider" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = NeonSDK::test($seed, null);
        $seen = iterator_to_array($base->NeonAuthOauthProvider(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = NeonConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = NeonSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->NeonAuthOauthProvider(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = neon_auth_oauth_provider_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "neon_auth_oauth_provider." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set NEON_TEST_NEON_AUTH_OAUTH_PROVIDER_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $neon_auth_oauth_provider_ref01_ent = $client->NeonAuthOauthProvider(null);
        $neon_auth_oauth_provider_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.neon_auth_oauth_provider"), "neon_auth_oauth_provider_ref01"));
        $neon_auth_oauth_provider_ref01_data["branch_id"] = $setup["idmap"]["branch01"];
        $neon_auth_oauth_provider_ref01_data["project_id"] = $setup["idmap"]["project01"];

        $neon_auth_oauth_provider_ref01_data_result = $neon_auth_oauth_provider_ref01_ent->create($neon_auth_oauth_provider_ref01_data, null);
        $neon_auth_oauth_provider_ref01_data = Helpers::to_map(is_object($neon_auth_oauth_provider_ref01_data_result) && method_exists($neon_auth_oauth_provider_ref01_data_result, 'data_get') ? $neon_auth_oauth_provider_ref01_data_result->data_get() : $neon_auth_oauth_provider_ref01_data_result);
        $this->assertNotNull($neon_auth_oauth_provider_ref01_data);
        $this->assertNotNull($neon_auth_oauth_provider_ref01_data["id"]);

        // LIST
        $neon_auth_oauth_provider_ref01_match = [
            "project_id" => $setup["idmap"]["project01"],
        ];

        $neon_auth_oauth_provider_ref01_list_result = $neon_auth_oauth_provider_ref01_ent->list($neon_auth_oauth_provider_ref01_match, null);
        $this->assertIsArray($neon_auth_oauth_provider_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($neon_auth_oauth_provider_ref01_list_result),
            ["id" => $neon_auth_oauth_provider_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $neon_auth_oauth_provider_ref01_data_up0_up = [
            "id" => $neon_auth_oauth_provider_ref01_data["id"],
            "project_id" => $setup["idmap"]["project_id"],
        ];

        $neon_auth_oauth_provider_ref01_markdef_up0_name = "client_id";
        $neon_auth_oauth_provider_ref01_markdef_up0_value = "Mark01-neon_auth_oauth_provider_ref01_" . $setup["now"];
        $neon_auth_oauth_provider_ref01_data_up0_up[$neon_auth_oauth_provider_ref01_markdef_up0_name] = $neon_auth_oauth_provider_ref01_markdef_up0_value;

        $neon_auth_oauth_provider_ref01_resdata_up0_result = $neon_auth_oauth_provider_ref01_ent->update($neon_auth_oauth_provider_ref01_data_up0_up, null);
        $neon_auth_oauth_provider_ref01_resdata_up0 = Helpers::to_map(is_object($neon_auth_oauth_provider_ref01_resdata_up0_result) && method_exists($neon_auth_oauth_provider_ref01_resdata_up0_result, 'data_get') ? $neon_auth_oauth_provider_ref01_resdata_up0_result->data_get() : $neon_auth_oauth_provider_ref01_resdata_up0_result);
        $this->assertNotNull($neon_auth_oauth_provider_ref01_resdata_up0);
        $this->assertEquals($neon_auth_oauth_provider_ref01_resdata_up0["id"], $neon_auth_oauth_provider_ref01_data_up0_up["id"]);
        $this->assertEquals($neon_auth_oauth_provider_ref01_resdata_up0[$neon_auth_oauth_provider_ref01_markdef_up0_name], $neon_auth_oauth_provider_ref01_markdef_up0_value);

    }
}

function neon_auth_oauth_provider_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/neon_auth_oauth_provider/NeonAuthOauthProviderTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = NeonSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["neon_auth_oauth_provider01", "neon_auth_oauth_provider02", "neon_auth_oauth_provider03", "project01", "project02", "project03", "branch01", "branch02", "branch03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("NEON_TEST_NEON_AUTH_OAUTH_PROVIDER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "NEON_TEST_NEON_AUTH_OAUTH_PROVIDER_ENTID" => $idmap,
        "NEON_TEST_LIVE" => "FALSE",
        "NEON_TEST_EXPLAIN" => "FALSE",
        "NEON_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["NEON_TEST_NEON_AUTH_OAUTH_PROVIDER_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["project_id"])) {
        $idmap_resolved["project_id"] = $idmap_resolved["project01"];
    }

    if ($env["NEON_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["NEON_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new NeonSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["NEON_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["NEON_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
