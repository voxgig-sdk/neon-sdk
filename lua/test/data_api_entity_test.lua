-- DataApi entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("neon_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("DataApiEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:DataApi(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = data_api_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "data_api." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set NEON_TEST_DATA_API_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local data_api_ref01_ent = client:DataApi(nil)
    local data_api_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.data_api"), "data_api_ref01"))
    data_api_ref01_data["branch_id"] = setup.idmap["branch01"]
    data_api_ref01_data["database_name"] = setup.idmap["database_name01"]
    data_api_ref01_data["project_id"] = setup.idmap["project01"]

    local data_api_ref01_data_result, err = data_api_ref01_ent:create(data_api_ref01_data, nil)
    assert.is_nil(err)
    data_api_ref01_data = helpers.to_map(type(data_api_ref01_data_result) == 'table' and data_api_ref01_data_result.data_get and data_api_ref01_data_result:data_get() or data_api_ref01_data_result)
    assert.is_not_nil(data_api_ref01_data)
    assert.is_not_nil(data_api_ref01_data["id"])

    -- UPDATE
    local data_api_ref01_data_up0_up = {
      id = data_api_ref01_data["id"],
      ["branch_id"] = setup.idmap["branch_id"],
      ["project_id"] = setup.idmap["project_id"],
    }

    local data_api_ref01_markdef_up0_name = "auth_provider"
    local data_api_ref01_markdef_up0_value = "Mark01-data_api_ref01_" .. tostring(setup.now)
    data_api_ref01_data_up0_up[data_api_ref01_markdef_up0_name] = data_api_ref01_markdef_up0_value

    local data_api_ref01_resdata_up0_result, err = data_api_ref01_ent:update(data_api_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local data_api_ref01_resdata_up0 = helpers.to_map(type(data_api_ref01_resdata_up0_result) == 'table' and data_api_ref01_resdata_up0_result.data_get and data_api_ref01_resdata_up0_result:data_get() or data_api_ref01_resdata_up0_result)
    assert.is_not_nil(data_api_ref01_resdata_up0)
    assert.are.equal(data_api_ref01_resdata_up0["id"], data_api_ref01_data_up0_up["id"])
    assert.are.equal(data_api_ref01_resdata_up0[data_api_ref01_markdef_up0_name], data_api_ref01_markdef_up0_value)

    -- LOAD
    local data_api_ref01_match_dt0 = {
      id = data_api_ref01_data["id"],
    }
    local data_api_ref01_data_dt0_loaded, err = data_api_ref01_ent:load(data_api_ref01_match_dt0, nil)
    assert.is_nil(err)
    local data_api_ref01_data_dt0_load_result = helpers.to_map(type(data_api_ref01_data_dt0_loaded) == 'table' and data_api_ref01_data_dt0_loaded.data_get and data_api_ref01_data_dt0_loaded:data_get() or data_api_ref01_data_dt0_loaded)
    assert.is_not_nil(data_api_ref01_data_dt0_load_result)
    assert.are.equal(data_api_ref01_data_dt0_load_result["id"], data_api_ref01_data["id"])

    -- REMOVE
    local data_api_ref01_match_rm0 = {
      id = data_api_ref01_data["id"],
    }
    local _, err = data_api_ref01_ent:remove(data_api_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function data_api_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/data_api/DataApiTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read data_api test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "data_api01", "data_api02", "data_api03", "project01", "project02", "project03", "branch01", "branch02", "branch03", "database_name01" },
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
  local entid_env_raw = os.getenv("NEON_TEST_DATA_API_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["NEON_TEST_DATA_API_ENTID"] = idmap,
    ["NEON_TEST_LIVE"] = "FALSE",
    ["NEON_TEST_EXPLAIN"] = "FALSE",
    ["NEON_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["NEON_TEST_DATA_API_ENTID"])
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
