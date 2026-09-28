# Member entity test

import json
import os
import time

import pytest

from neon_sdk.utility.voxgig_struct import voxgig_struct as vs
from neon_sdk import NeonSDK
from neon_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestMemberEntity:

    def test_should_create_instance(self):
        testsdk = NeonSDK.test(None, None)
        ent = testsdk.Member(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _member_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "member." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set NEON_TEST_MEMBER_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        member_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.member")))
        member_ref01_data = None
        if len(member_ref01_data_raw) > 0:
            member_ref01_data = helpers.to_map(member_ref01_data_raw[0][1])

        # UPDATE
        member_ref01_ent = client.Member(None)
        member_ref01_data_up0_up = {
            "id": member_ref01_data["id"],
            "organization_id": setup["idmap"]["organization_id"],
        }

        member_ref01_markdef_up0_name = "joined_at"
        member_ref01_markdef_up0_value = "Mark01-member_ref01_" + str(setup["now"])
        member_ref01_data_up0_up[member_ref01_markdef_up0_name] = member_ref01_markdef_up0_value

        member_ref01_resdata_up0 = helpers.to_map(runner.entity_data(member_ref01_ent.update(member_ref01_data_up0_up, None)))
        assert member_ref01_resdata_up0 is not None
        assert member_ref01_resdata_up0["id"] == member_ref01_data_up0_up["id"]
        assert member_ref01_resdata_up0[member_ref01_markdef_up0_name] == member_ref01_markdef_up0_value

        # LOAD
        member_ref01_match_dt0 = {
            "id": member_ref01_data["id"],
        }
        member_ref01_data_dt0_loaded = member_ref01_ent.load(member_ref01_match_dt0, None)
        member_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(member_ref01_data_dt0_loaded))
        assert member_ref01_data_dt0_load_result is not None
        assert member_ref01_data_dt0_load_result["id"] == member_ref01_data["id"]



def _member_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/member/MemberTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = NeonSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["member01", "member02", "member03", "organization01", "organization02", "organization03"],
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
        "NEON_TEST_MEMBER_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "NEON_TEST_MEMBER_ENTID": idmap,
        "NEON_TEST_LIVE": "FALSE",
        "NEON_TEST_EXPLAIN": "FALSE",
        "NEON_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("NEON_TEST_MEMBER_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("organization_id") is None:
        idmap_resolved["organization_id"] = idmap_resolved.get("organization01")

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
