# Empty entity test

import json
import os
import time

import pytest

from neon_sdk.utility.voxgig_struct import voxgig_struct as vs
from neon_sdk import NeonSDK
from neon_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestEmptyEntity:

    def test_should_create_instance(self):
        testsdk = NeonSDK.test(None, None)
        ent = testsdk.Empty(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _empty_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "empty." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set NEON_TEST_EMPTY_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        empty_ref01_ent = client.Empty(None)
        empty_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.empty"), "empty_ref01"))
        empty_ref01_data["project_id"] = setup["idmap"]["project01"]

        empty_ref01_data = helpers.to_map(runner.entity_data(empty_ref01_ent.create(empty_ref01_data, None)))
        assert empty_ref01_data is not None

        # UPDATE
        empty_ref01_data_up0_up = {
            "project_id": setup["idmap"]["project_id"],
        }

        empty_ref01_markdef_up0_name = "destination_org_id"
        empty_ref01_markdef_up0_value = "Mark01-empty_ref01_" + str(setup["now"])
        empty_ref01_data_up0_up[empty_ref01_markdef_up0_name] = empty_ref01_markdef_up0_value

        empty_ref01_resdata_up0 = helpers.to_map(runner.entity_data(empty_ref01_ent.update(empty_ref01_data_up0_up, None)))
        assert empty_ref01_resdata_up0 is not None
        assert empty_ref01_resdata_up0[empty_ref01_markdef_up0_name] == empty_ref01_markdef_up0_value




def _empty_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/empty/EmptyTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = NeonSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["empty01", "empty02", "empty03", "organization01", "organization02", "organization03", "project01", "project02", "project03", "branch01", "branch02", "branch03"],
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
        "NEON_TEST_EMPTY_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "NEON_TEST_EMPTY_ENTID": idmap,
        "NEON_TEST_LIVE": "FALSE",
        "NEON_TEST_EXPLAIN": "FALSE",
        "NEON_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("NEON_TEST_EMPTY_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
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
