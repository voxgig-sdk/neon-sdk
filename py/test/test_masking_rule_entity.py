# MaskingRule entity test

import json
import os
import time

import pytest

from neon_sdk.utility.voxgig_struct import voxgig_struct as vs
from neon_sdk import NeonSDK
from neon_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestMaskingRuleEntity:

    def test_should_create_instance(self):
        testsdk = NeonSDK.test(None, None)
        ent = testsdk.MaskingRule(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "masking_rule": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = NeonSDK.test(seed, None)
        seen = list(base.MaskingRule(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from neon_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = NeonSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.MaskingRule(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _masking_rule_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list", "update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "masking_rule." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set NEON_TEST_MASKING_RULE_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        masking_rule_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.masking_rule")))
        masking_rule_ref01_data = None
        if len(masking_rule_ref01_data_raw) > 0:
            masking_rule_ref01_data = helpers.to_map(masking_rule_ref01_data_raw[0][1])

        # LIST
        masking_rule_ref01_ent = client.MaskingRule(None)
        masking_rule_ref01_match = {
            "branch_id": setup["idmap"]["branch01"],
            "project_id": setup["idmap"]["project01"],
        }

        masking_rule_ref01_list_result = masking_rule_ref01_ent.list(masking_rule_ref01_match, None)
        assert isinstance(masking_rule_ref01_list_result, list)

        # UPDATE
        masking_rule_ref01_data_up0_up = {
            "project_id": setup["idmap"]["project_id"],
        }

        masking_rule_ref01_markdef_up0_name = "column_name"
        masking_rule_ref01_markdef_up0_value = "Mark01-masking_rule_ref01_" + str(setup["now"])
        masking_rule_ref01_data_up0_up[masking_rule_ref01_markdef_up0_name] = masking_rule_ref01_markdef_up0_value

        masking_rule_ref01_resdata_up0 = helpers.to_map(runner.entity_data(masking_rule_ref01_ent.update(masking_rule_ref01_data_up0_up, None)))
        assert masking_rule_ref01_resdata_up0 is not None
        assert masking_rule_ref01_resdata_up0[masking_rule_ref01_markdef_up0_name] == masking_rule_ref01_markdef_up0_value



def _masking_rule_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/masking_rule/MaskingRuleTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = NeonSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["masking_rule01", "masking_rule02", "masking_rule03", "project01", "project02", "project03", "branch01", "branch02", "branch03"],
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
        "NEON_TEST_MASKING_RULE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "NEON_TEST_MASKING_RULE_ENTID": idmap,
        "NEON_TEST_LIVE": "FALSE",
        "NEON_TEST_EXPLAIN": "FALSE",
        "NEON_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("NEON_TEST_MASKING_RULE_ENTID"))
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
