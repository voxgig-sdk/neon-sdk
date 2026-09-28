# NeonFunction entity test

require "minitest/autorun"
require "json"
require_relative "../Neon_sdk"
require_relative "runner"

class NeonFunctionEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NeonSDK.test(nil, nil)
    ent = testsdk.NeonFunction(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = neon_function_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "neon_function." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NEON_TEST_NEON_FUNCTION_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    neon_function_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.neon_function")))
    neon_function_ref01_data = nil
    if neon_function_ref01_data_raw.length > 0
      neon_function_ref01_data = Helpers.to_map(neon_function_ref01_data_raw[0][1])
    end

    # UPDATE
    neon_function_ref01_ent = client.NeonFunction(nil)
    neon_function_ref01_data_up0_up = {
      "id" => neon_function_ref01_data["id"],
      "branch_id" => setup[:idmap]["branch_id"],
      "project_id" => setup[:idmap]["project_id"],
    }

    neon_function_ref01_markdef_up0_name = "created_at"
    neon_function_ref01_markdef_up0_value = "Mark01-neon_function_ref01_#{setup[:now]}"
    neon_function_ref01_data_up0_up[neon_function_ref01_markdef_up0_name] = neon_function_ref01_markdef_up0_value

    neon_function_ref01_resdata_up0_result = neon_function_ref01_ent.update(neon_function_ref01_data_up0_up, nil)
    neon_function_ref01_resdata_up0 = Helpers.to_map(neon_function_ref01_resdata_up0_result.respond_to?(:data_get) ? neon_function_ref01_resdata_up0_result.data_get : neon_function_ref01_resdata_up0_result)
    assert !neon_function_ref01_resdata_up0.nil?
    assert_equal neon_function_ref01_resdata_up0["id"], neon_function_ref01_data_up0_up["id"]
    assert_equal neon_function_ref01_resdata_up0[neon_function_ref01_markdef_up0_name], neon_function_ref01_markdef_up0_value

    # LOAD
    neon_function_ref01_match_dt0 = {
      "id" => neon_function_ref01_data["id"],
    }
    neon_function_ref01_data_dt0_loaded = neon_function_ref01_ent.load(neon_function_ref01_match_dt0, nil)
    neon_function_ref01_data_dt0_load_result = Helpers.to_map(neon_function_ref01_data_dt0_loaded.respond_to?(:data_get) ? neon_function_ref01_data_dt0_loaded.data_get : neon_function_ref01_data_dt0_loaded)
    assert !neon_function_ref01_data_dt0_load_result.nil?
    assert_equal neon_function_ref01_data_dt0_load_result["id"], neon_function_ref01_data["id"]

  end
end

def neon_function_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "neon_function", "NeonFunctionTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NeonSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["neon_function01", "neon_function02", "neon_function03", "project01", "project02", "project03", "branch01", "branch02", "branch03"],
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
  entid_env_raw = ENV["NEON_TEST_NEON_FUNCTION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NEON_TEST_NEON_FUNCTION_ENTID" => idmap,
    "NEON_TEST_LIVE" => "FALSE",
    "NEON_TEST_EXPLAIN" => "FALSE",
    "NEON_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["NEON_TEST_NEON_FUNCTION_ENTID"])
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
