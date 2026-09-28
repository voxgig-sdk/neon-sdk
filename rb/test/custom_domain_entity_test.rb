# CustomDomain entity test

require "minitest/autorun"
require "json"
require_relative "../Neon_sdk"
require_relative "runner"

class CustomDomainEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NeonSDK.test(nil, nil)
    ent = testsdk.CustomDomain(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = custom_domain_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "custom_domain." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NEON_TEST_CUSTOM_DOMAIN_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    custom_domain_ref01_ent = client.CustomDomain(nil)
    custom_domain_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.custom_domain"), "custom_domain_ref01"))
    custom_domain_ref01_data["branch_id"] = setup[:idmap]["branch01"]
    custom_domain_ref01_data["project_id"] = setup[:idmap]["project01"]

    custom_domain_ref01_data_result = custom_domain_ref01_ent.create(custom_domain_ref01_data, nil)
    custom_domain_ref01_data = Helpers.to_map(custom_domain_ref01_data_result.respond_to?(:data_get) ? custom_domain_ref01_data_result.data_get : custom_domain_ref01_data_result)
    assert !custom_domain_ref01_data.nil?

  end
end

def custom_domain_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "custom_domain", "CustomDomainTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NeonSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["custom_domain01", "custom_domain02", "custom_domain03", "project01", "project02", "project03", "branch01", "branch02", "branch03"],
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
  entid_env_raw = ENV["NEON_TEST_CUSTOM_DOMAIN_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NEON_TEST_CUSTOM_DOMAIN_ENTID" => idmap,
    "NEON_TEST_LIVE" => "FALSE",
    "NEON_TEST_EXPLAIN" => "FALSE",
    "NEON_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["NEON_TEST_CUSTOM_DOMAIN_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
