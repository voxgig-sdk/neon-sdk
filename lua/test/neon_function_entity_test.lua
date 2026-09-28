-- NeonFunction entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("neon_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("NeonFunctionEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:NeonFunction(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = neon_function_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "neon_function." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set NEON_TEST_NEON_FUNCTION_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local neon_function_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.neon_function")))
    local neon_function_ref01_data = nil
    if #neon_function_ref01_data_raw > 0 then
      neon_function_ref01_data = helpers.to_map(neon_function_ref01_data_raw[1][2])
    end

    -- UPDATE
    local neon_function_ref01_ent = client:NeonFunction(nil)
    local neon_function_ref01_data_up0_up = {
      id = neon_function_ref01_data["id"],
      ["branch_id"] = setup.idmap["branch_id"],
      ["project_id"] = setup.idmap["project_id"],
    }

    local neon_function_ref01_markdef_up0_name = "created_at"
    local neon_function_ref01_markdef_up0_value = "Mark01-neon_function_ref01_" .. tostring(setup.now)
    neon_function_ref01_data_up0_up[neon_function_ref01_markdef_up0_name] = neon_function_ref01_markdef_up0_value

    local neon_function_ref01_resdata_up0_result, err = neon_function_ref01_ent:update(neon_function_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local neon_function_ref01_resdata_up0 = helpers.to_map(type(neon_function_ref01_resdata_up0_result) == 'table' and neon_function_ref01_resdata_up0_result.data_get and neon_function_ref01_resdata_up0_result:data_get() or neon_function_ref01_resdata_up0_result)
    assert.is_not_nil(neon_function_ref01_resdata_up0)
    assert.are.equal(neon_function_ref01_resdata_up0["id"], neon_function_ref01_data_up0_up["id"])
    assert.are.equal(neon_function_ref01_resdata_up0[neon_function_ref01_markdef_up0_name], neon_function_ref01_markdef_up0_value)

    -- LOAD
    local neon_function_ref01_match_dt0 = {
      id = neon_function_ref01_data["id"],
    }
    local neon_function_ref01_data_dt0_loaded, err = neon_function_ref01_ent:load(neon_function_ref01_match_dt0, nil)
    assert.is_nil(err)
    local neon_function_ref01_data_dt0_load_result = helpers.to_map(type(neon_function_ref01_data_dt0_loaded) == 'table' and neon_function_ref01_data_dt0_loaded.data_get and neon_function_ref01_data_dt0_loaded:data_get() or neon_function_ref01_data_dt0_loaded)
    assert.is_not_nil(neon_function_ref01_data_dt0_load_result)
    assert.are.equal(neon_function_ref01_data_dt0_load_result["id"], neon_function_ref01_data["id"])

  end)
end)

function neon_function_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/neon_function/NeonFunctionTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read neon_function test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "neon_function01", "neon_function02", "neon_function03", "project01", "project02", "project03", "branch01", "branch02", "branch03" },
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
  local entid_env_raw = os.getenv("NEON_TEST_NEON_FUNCTION_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["NEON_TEST_NEON_FUNCTION_ENTID"] = idmap,
    ["NEON_TEST_LIVE"] = "FALSE",
    ["NEON_TEST_EXPLAIN"] = "FALSE",
    ["NEON_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["NEON_TEST_NEON_FUNCTION_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["branch_id"] == nil then
    idmap_resolved["branch_id"] = idmap_resolved["branch01"]
  end
  if idmap_resolved["project_id"] == nil then
    idmap_resolved["project_id"] = idmap_resolved["project01"]
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
