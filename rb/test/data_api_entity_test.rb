# DataApi entity test

require "minitest/autorun"
require "json"
require_relative "../Neon_sdk"
require_relative "runner"

class DataApiEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NeonSDK.test(nil, nil)
    ent = testsdk.DataApi(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = data_api_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "data_api." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NEON_TEST_DATA_API_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    data_api_ref01_ent = client.DataApi(nil)
    data_api_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.data_api"), "data_api_ref01"))
    data_api_ref01_data["branch_id"] = setup[:idmap]["branch01"]
    data_api_ref01_data["database_name"] = setup[:idmap]["database_name01"]
    data_api_ref01_data["project_id"] = setup[:idmap]["project01"]

    data_api_ref01_data_result = data_api_ref01_ent.create(data_api_ref01_data, nil)
    data_api_ref01_data = Helpers.to_map(data_api_ref01_data_result.respond_to?(:data_get) ? data_api_ref01_data_result.data_get : data_api_ref01_data_result)
    assert !data_api_ref01_data.nil?
    assert !data_api_ref01_data["id"].nil?

    # UPDATE
    data_api_ref01_data_up0_up = {
      "id" => data_api_ref01_data["id"],
      "branch_id" => setup[:idmap]["branch_id"],
      "project_id" => setup[:idmap]["project_id"],
    }

    data_api_ref01_markdef_up0_name = "auth_provider"
    data_api_ref01_markdef_up0_value = "Mark01-data_api_ref01_#{setup[:now]}"
    data_api_ref01_data_up0_up[data_api_ref01_markdef_up0_name] = data_api_ref01_markdef_up0_value

    data_api_ref01_resdata_up0_result = data_api_ref01_ent.update(data_api_ref01_data_up0_up, nil)
    data_api_ref01_resdata_up0 = Helpers.to_map(data_api_ref01_resdata_up0_result.respond_to?(:data_get) ? data_api_ref01_resdata_up0_result.data_get : data_api_ref01_resdata_up0_result)
    assert !data_api_ref01_resdata_up0.nil?
    assert_equal data_api_ref01_resdata_up0["id"], data_api_ref01_data_up0_up["id"]
    assert_equal data_api_ref01_resdata_up0[data_api_ref01_markdef_up0_name], data_api_ref01_markdef_up0_value

    # LOAD
    data_api_ref01_match_dt0 = {
      "id" => data_api_ref01_data["id"],
    }
    data_api_ref01_data_dt0_loaded = data_api_ref01_ent.load(data_api_ref01_match_dt0, nil)
    data_api_ref01_data_dt0_load_result = Helpers.to_map(data_api_ref01_data_dt0_loaded.respond_to?(:data_get) ? data_api_ref01_data_dt0_loaded.data_get : data_api_ref01_data_dt0_loaded)
    assert !data_api_ref01_data_dt0_load_result.nil?
    assert_equal data_api_ref01_data_dt0_load_result["id"], data_api_ref01_data["id"]

    # REMOVE
    data_api_ref01_match_rm0 = {
      "id" => data_api_ref01_data["id"],
    }
    data_api_ref01_ent.remove(data_api_ref01_match_rm0, nil)

  end
end

def data_api_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "data_api", "DataApiTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NeonSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["data_api01", "data_api02", "data_api03", "project01", "project02", "project03", "branch01", "branch02", "branch03", "database_name01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["NEON_TEST_DATA_API_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NEON_TEST_DATA_API_ENTID" => idmap,
    "NEON_TEST_LIVE" => "FALSE",
    "NEON_TEST_EXPLAIN" => "FALSE",
    "NEON_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["NEON_TEST_DATA_API_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["branch_id"].nil?
    idmap_resolved["branch_id"] = idmap_resolved["branch01"]
  end
  if idmap_resolved["project_id"].nil?
    idmap_resolved["project_id"] = idmap_resolved["project01"]
  end

  if env["NEON_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["NEON_APIKEY"],
      },
      extra || {},
    ])
    client = NeonSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["NEON_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["NEON_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
