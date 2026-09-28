# DataApi entity test

import json
import os
import time

import pytest

from neon_sdk.utility.voxgig_struct import voxgig_struct as vs
from neon_sdk import NeonSDK
from neon_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestDataApiEntity:

    def test_should_create_instance(self):
        testsdk = NeonSDK.test(None, None)
        ent = testsdk.DataApi(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _data_api_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "data_api." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set NEON_TEST_DATA_API_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        data_api_ref01_ent = client.DataApi(None)
        data_api_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.data_api"), "data_api_ref01"))
        data_api_ref01_data["branch_id"] = setup["idmap"]["branch01"]
        data_api_ref01_data["database_name"] = setup["idmap"]["database_name01"]
        data_api_ref01_data["project_id"] = setup["idmap"]["project01"]

        data_api_ref01_data = helpers.to_map(runner.entity_data(data_api_ref01_ent.create(data_api_ref01_data, None)))
        assert data_api_ref01_data is not None
        assert data_api_ref01_data["id"] is not None

        # UPDATE
        data_api_ref01_data_up0_up = {
            "id": data_api_ref01_data["id"],
            "branch_id": setup["idmap"]["branch_id"],
            "project_id": setup["idmap"]["project_id"],
        }

        data_api_ref01_markdef_up0_name = "auth_provider"
        data_api_ref01_markdef_up0_value = "Mark01-data_api_ref01_" + str(setup["now"])
        data_api_ref01_data_up0_up[data_api_ref01_markdef_up0_name] = data_api_ref01_markdef_up0_value

        data_api_ref01_resdata_up0 = helpers.to_map(runner.entity_data(data_api_ref01_ent.update(data_api_ref01_data_up0_up, None)))
        assert data_api_ref01_resdata_up0 is not None
        assert data_api_ref01_resdata_up0["id"] == data_api_ref01_data_up0_up["id"]
        assert data_api_ref01_resdata_up0[data_api_ref01_markdef_up0_name] == data_api_ref01_markdef_up0_value

        # LOAD
        data_api_ref01_match_dt0 = {
            "id": data_api_ref01_data["id"],
        }
        data_api_ref01_data_dt0_loaded = data_api_ref01_ent.load(data_api_ref01_match_dt0, None)
        data_api_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(data_api_ref01_data_dt0_loaded))
        assert data_api_ref01_data_dt0_load_result is not None
        assert data_api_ref01_data_dt0_load_result["id"] == data_api_ref01_data["id"]

        # REMOVE
        data_api_ref01_match_rm0 = {
            "id": data_api_ref01_data["id"],
        }
        data_api_ref01_ent.remove(data_api_ref01_match_rm0, None)



def _data_api_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/data_api/DataApiTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = NeonSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["data_api01", "data_api02", "data_api03", "project01", "project02", "project03", "branch01", "branch02", "branch03", "database_name01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "NEON_TEST_DATA_API_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "NEON_TEST_DATA_API_ENTID": idmap,
        "NEON_TEST_LIVE": "FALSE",
        "NEON_TEST_EXPLAIN": "FALSE",
        "NEON_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("NEON_TEST_DATA_API_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("branch_id") is None:
        idmap_resolved["branch_id"] = idmap_resolved.get("branch01")
    if idmap_resolved.get("project_id") is None:
        idmap_resolved["project_id"] = idmap_resolved.get("project01")

    if env.get("NEON_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("NEON_APIKEY"),
            },
            extra or {},
        ])
        client = NeonSDK(helpers.to_map(merged_opts))

    _live = env.get("NEON_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("NEON_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
