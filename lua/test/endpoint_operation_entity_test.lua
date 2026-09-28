-- EndpointOperation entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("neon_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("EndpointOperationEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:EndpointOperation(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = endpoint_operation_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "endpoint_operation." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set NEON_TEST_ENDPOINT_OPERATION_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local endpoint_operation_ref01_ent = client:EndpointOperation(nil)
    local endpoint_operation_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.endpoint_operation"), "endpoint_operation_ref01"))
    endpoint_operation_ref01_data["endpoint_id"] = setup.idmap["endpoint01"]
    endpoint_operation_ref01_data["project_id"] = setup.idmap["project01"]

    local endpoint_operation_ref01_data_result, err = endpoint_operation_ref01_ent:create(endpoint_operation_ref01_data, nil)
    assert.is_nil(err)
    endpoint_operation_ref01_data = helpers.to_map(type(endpoint_operation_ref01_data_result) == 'table' and endpoint_operation_ref01_data_result.data_get and endpoint_operation_ref01_data_result:data_get() or endpoint_operation_ref01_data_result)
    assert.is_not_nil(endpoint_operation_ref01_data)
    assert.is_not_nil(endpoint_operation_ref01_data["id"])

  end)
end)

function endpoint_operation_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/endpoint_operation/EndpointOperationTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read endpoint_operation test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "endpoint_operation01", "endpoint_operation02", "endpoint_operation03", "project01", "project02", "project03", "endpoint01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("NEON_TEST_ENDPOINT_OPERATION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["NEON_TEST_ENDPOINT_OPERATION_ENTID"] = idmap,
    ["NEON_TEST_LIVE"] = "FALSE",
    ["NEON_TEST_EXPLAIN"] = "FALSE",
    ["NEON_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["NEON_TEST_ENDPOINT_OPERATION_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["NEON_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["NEON_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["NEON_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["NEON_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
