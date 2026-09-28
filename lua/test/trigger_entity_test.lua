-- Trigger entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("neon_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("TriggerEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Trigger(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["trigger"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:Trigger(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:Trigger(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = trigger_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "trigger." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set NEON_TEST_TRIGGER_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local trigger_ref01_ent = client:Trigger(nil)
    local trigger_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.trigger"), "trigger_ref01"))
    trigger_ref01_data["branch_id"] = setup.idmap["branch01"]
    trigger_ref01_data["project_id"] = setup.idmap["project01"]

    local trigger_ref01_data_result, err = trigger_ref01_ent:create(trigger_ref01_data, nil)
    assert.is_nil(err)
    trigger_ref01_data = helpers.to_map(type(trigger_ref01_data_result) == 'table' and trigger_ref01_data_result.data_get and trigger_ref01_data_result:data_get() or trigger_ref01_data_result)
    assert.is_not_nil(trigger_ref01_data)
    assert.is_not_nil(trigger_ref01_data["id"])

    -- LIST
    local trigger_ref01_match = {
      ["branch_id"] = setup.idmap["branch01"],
      ["project_id"] = setup.idmap["project01"],
    }

    local trigger_ref01_list_result, err = trigger_ref01_ent:list(trigger_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(trigger_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(trigger_ref01_list_result),
      { id = trigger_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local trigger_ref01_data_up0_up = {
      id = trigger_ref01_data["id"],
      ["branch_id"] = setup.idmap["branch_id"],
      ["project_id"] = setup.idmap["project_id"],
    }

    local trigger_ref01_resdata_up0_result, err = trigger_ref01_ent:update(trigger_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local trigger_ref01_resdata_up0 = helpers.to_map(type(trigger_ref01_resdata_up0_result) == 'table' and trigger_ref01_resdata_up0_result.data_get and trigger_ref01_resdata_up0_result:data_get() or trigger_ref01_resdata_up0_result)
    assert.is_not_nil(trigger_ref01_resdata_up0)
    assert.are.equal(trigger_ref01_resdata_up0["id"], trigger_ref01_data_up0_up["id"])

    -- LOAD
    local trigger_ref01_match_dt0 = {
      id = trigger_ref01_data["id"],
    }
    local trigger_ref01_data_dt0_loaded, err = trigger_ref01_ent:load(trigger_ref01_match_dt0, nil)
    assert.is_nil(err)
    local trigger_ref01_data_dt0_load_result = helpers.to_map(type(trigger_ref01_data_dt0_loaded) == 'table' and trigger_ref01_data_dt0_loaded.data_get and trigger_ref01_data_dt0_loaded:data_get() or trigger_ref01_data_dt0_loaded)
    assert.is_not_nil(trigger_ref01_data_dt0_load_result)
    assert.are.equal(trigger_ref01_data_dt0_load_result["id"], trigger_ref01_data["id"])

  end)
end)

function trigger_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/trigger/TriggerTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read trigger test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "trigger01", "trigger02", "trigger03", "project01", "project02", "project03", "branch01", "branch02", "branch03" },
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
  local entid_env_raw = os.getenv("NEON_TEST_TRIGGER_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["NEON_TEST_TRIGGER_ENTID"] = idmap,
    ["NEON_TEST_LIVE"] = "FALSE",
    ["NEON_TEST_EXPLAIN"] = "FALSE",
    ["NEON_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["NEON_TEST_TRIGGER_ENTID"])
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
