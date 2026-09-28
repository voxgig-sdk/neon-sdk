# Member entity test

require "minitest/autorun"
require "json"
require_relative "../Neon_sdk"
require_relative "runner"

class MemberEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NeonSDK.test(nil, nil)
    ent = testsdk.Member(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = member_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "member." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NEON_TEST_MEMBER_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    member_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.member")))
    member_ref01_data = nil
    if member_ref01_data_raw.length > 0
      member_ref01_data = Helpers.to_map(member_ref01_data_raw[0][1])
    end

    # UPDATE
    member_ref01_ent = client.Member(nil)
    member_ref01_data_up0_up = {
      "id" => member_ref01_data["id"],
      "organization_id" => setup[:idmap]["organization_id"],
    }

    member_ref01_markdef_up0_name = "joined_at"
    member_ref01_markdef_up0_value = "Mark01-member_ref01_#{setup[:now]}"
    member_ref01_data_up0_up[member_ref01_markdef_up0_name] = member_ref01_markdef_up0_value

    member_ref01_resdata_up0_result = member_ref01_ent.update(member_ref01_data_up0_up, nil)
    member_ref01_resdata_up0 = Helpers.to_map(member_ref01_resdata_up0_result.respond_to?(:data_get) ? member_ref01_resdata_up0_result.data_get : member_ref01_resdata_up0_result)
    assert !member_ref01_resdata_up0.nil?
    assert_equal member_ref01_resdata_up0["id"], member_ref01_data_up0_up["id"]
    assert_equal member_ref01_resdata_up0[member_ref01_markdef_up0_name], member_ref01_markdef_up0_value

    # LOAD
    member_ref01_match_dt0 = {
      "id" => member_ref01_data["id"],
    }
    member_ref01_data_dt0_loaded = member_ref01_ent.load(member_ref01_match_dt0, nil)
    member_ref01_data_dt0_load_result = Helpers.to_map(member_ref01_data_dt0_loaded.respond_to?(:data_get) ? member_ref01_data_dt0_loaded.data_get : member_ref01_data_dt0_loaded)
    assert !member_ref01_data_dt0_load_result.nil?
    assert_equal member_ref01_data_dt0_load_result["id"], member_ref01_data["id"]

  end
end

def member_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "member", "MemberTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NeonSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["member01", "member02", "member03", "organization01", "organization02", "organization03"],
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
  entid_env_raw = ENV["NEON_TEST_MEMBER_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NEON_TEST_MEMBER_ENTID" => idmap,
    "NEON_TEST_LIVE" => "FALSE",
    "NEON_TEST_EXPLAIN" => "FALSE",
    "NEON_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["NEON_TEST_MEMBER_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["organization_id"].nil?
    idmap_resolved["organization_id"] = idmap_resolved["organization01"]
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
