package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/neon-sdk/go"
	"github.com/voxgig-sdk/neon-sdk/go/core"

	vs "github.com/voxgig-sdk/neon-sdk/go/utility/struct"
)

func TestTriggerEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Trigger(nil)
		if ent == nil {
			t.Fatal("expected non-nil TriggerEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"trigger": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Trigger(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.Trigger(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := triggerBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "trigger." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set NEON_TEST_TRIGGER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		triggerRef01Ent := client.Trigger(nil)
		triggerRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "trigger"}), "trigger_ref01"))
		triggerRef01Data["branch_id"] = setup.idmap["branch01"]
		triggerRef01Data["project_id"] = setup.idmap["project01"]

		triggerRef01DataResult, err := triggerRef01Ent.Create(triggerRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		triggerRef01Data = core.ToMapAny(entityData(triggerRef01DataResult))
		if triggerRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if triggerRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		triggerRef01Match := map[string]any{
			"branch_id": setup.idmap["branch01"],
			"project_id": setup.idmap["project01"],
		}

		triggerRef01ListResult, err := triggerRef01Ent.List(triggerRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		triggerRef01List, triggerRef01ListOk := triggerRef01ListResult.([]any)
		if !triggerRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", triggerRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(triggerRef01List), map[string]any{"id": triggerRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		triggerRef01DataUp0Up := map[string]any{
			"id": triggerRef01Data["id"],
			"branch_id": setup.idmap["branch_id"],
			"project_id": setup.idmap["project_id"],
		}

		triggerRef01ResdataUp0Result, err := triggerRef01Ent.Update(triggerRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		triggerRef01ResdataUp0 := core.ToMapAny(entityData(triggerRef01ResdataUp0Result))
		if triggerRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if triggerRef01ResdataUp0["id"] != triggerRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		triggerRef01MatchDt0 := map[string]any{
			"id": triggerRef01Data["id"],
		}
		triggerRef01DataDt0Loaded, err := triggerRef01Ent.Load(triggerRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		triggerRef01DataDt0LoadResult := core.ToMapAny(entityData(triggerRef01DataDt0Loaded))
		if triggerRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if triggerRef01DataDt0LoadResult["id"] != triggerRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func triggerBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "trigger", "TriggerTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read trigger test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse trigger test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"trigger01", "trigger02", "trigger03", "project01", "project02", "project03", "branch01", "branch02", "branch03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("NEON_TEST_TRIGGER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NEON_TEST_TRIGGER_ENTID": idmap,
		"NEON_TEST_LIVE":      "FALSE",
		"NEON_TEST_EXPLAIN":   "FALSE",
		"NEON_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NEON_TEST_TRIGGER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add branch_id alias for update test.
	if idmapResolved["branch_id"] == nil {
		idmapResolved["branch_id"] = idmapResolved["branch01"]
	}
	// Add project_id alias for update test.
	if idmapResolved["project_id"] == nil {
		idmapResolved["project_id"] = idmapResolved["project01"]
	}

	if env["NEON_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["NEON_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewNeonSDK(core.ToMapAny(mergedOpts))
	}

	live := env["NEON_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["NEON_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
