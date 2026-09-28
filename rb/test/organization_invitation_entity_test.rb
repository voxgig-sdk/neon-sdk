# OrganizationInvitation entity test

require "minitest/autorun"
require "json"
require_relative "../Neon_sdk"
require_relative "runner"

class OrganizationInvitationEntityTest < Minitest::Test
  def test_create_instance
    testsdk = NeonSDK.test(nil, nil)
    ent = testsdk.OrganizationInvitation(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "organization_invitation" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = NeonSDK.test(seed, nil)
    seen = base.OrganizationInvitation(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = NeonConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = NeonSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.OrganizationInvitation(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = organization_invitation_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "organization_invitation." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set NEON_TEST_ORGANIZATION_INVITATION_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    organization_invitation_ref01_ent = client.OrganizationInvitation(nil)
    organization_invitation_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.organization_invitation"), "organization_invitation_ref01"))
    organization_invitation_ref01_data["org_id"] = setup[:idmap]["org01"]

    organization_invitation_ref01_data_result = organization_invitation_ref01_ent.create(organization_invitation_ref01_data, nil)
    organization_invitation_ref01_data = Helpers.to_map(organization_invitation_ref01_data_result.respond_to?(:data_get) ? organization_invitation_ref01_data_result.data_get : organization_invitation_ref01_data_result)
    assert !organization_invitation_ref01_data.nil?
    assert !organization_invitation_ref01_data["id"].nil?

    # LIST
    organization_invitation_ref01_match = {
      "org_id" => setup[:idmap]["org01"],
    }

    organization_invitation_ref01_list_result = organization_invitation_ref01_ent.list(organization_invitation_ref01_match, nil)
    assert organization_invitation_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(organization_invitation_ref01_list_result),
      { "id" => organization_invitation_ref01_data["id"] })
    assert !Vs.isempty(found_item)

  end
end

def organization_invitation_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "organization_invitation", "OrganizationInvitationTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NeonSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["organization_invitation01", "organization_invitation02", "organization_invitation03", "org01"],
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
  entid_env_raw = ENV["NEON_TEST_ORGANIZATION_INVITATION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NEON_TEST_ORGANIZATION_INVITATION_ENTID" => idmap,
    "NEON_TEST_LIVE" => "FALSE",
    "NEON_TEST_EXPLAIN" => "FALSE",
    "NEON_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["NEON_TEST_ORGANIZATION_INVITATION_ENTID"])
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
