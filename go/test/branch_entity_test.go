package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestBranchEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Branch(nil)
		if ent == nil {
			t.Fatal("expected non-nil BranchEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"branch": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Branch(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Branch(nil).Stream("list", nil, nil) {
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
		setup := branchBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "branch." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NEON_TEST_BRANCH_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		branchRef01Ent := client.Branch(nil)
		branchRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "branch"}), "branch_ref01"))
		branchRef01Data["project_id"] = setup.idmap["project01"]

		branchRef01DataResult, err := branchRef01Ent.Create(branchRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		branchRef01Data = core.ToMapAny(entityData(branchRef01DataResult))
		if branchRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if branchRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		branchRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		branchRef01ListResult, err := branchRef01Ent.List(branchRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		branchRef01List, branchRef01ListOk := branchRef01ListResult.([]any)
		if !branchRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", branchRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(branchRef01List), map[string]any{"id": branchRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		branchRef01DataUp0Up := map[string]any{
			"id": branchRef01Data["id"],
			"project_id": setup.idmap["project_id"],
		}

		branchRef01MarkdefUp0Name := "created_at"
		branchRef01MarkdefUp0Value := fmt.Sprintf("Mark01-branch_ref01_%d", setup.now)
		branchRef01DataUp0Up[branchRef01MarkdefUp0Name] = branchRef01MarkdefUp0Value

		branchRef01ResdataUp0Result, err := branchRef01Ent.Update(branchRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		branchRef01ResdataUp0 := core.ToMapAny(entityData(branchRef01ResdataUp0Result))
		if branchRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if branchRef01ResdataUp0["id"] != branchRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if branchRef01ResdataUp0[branchRef01MarkdefUp0Name] != branchRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", branchRef01MarkdefUp0Name, branchRef01ResdataUp0[branchRef01MarkdefUp0Name])
		}

		// LOAD
		branchRef01MatchDt0 := map[string]any{
			"id": branchRef01Data["id"],
		}
		branchRef01DataDt0Loaded, err := branchRef01Ent.Load(branchRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		branchRef01DataDt0LoadResult := core.ToMapAny(entityData(branchRef01DataDt0Loaded))
		if branchRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if branchRef01DataDt0LoadResult["id"] != branchRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		branchRef01MatchRm0 := map[string]any{
			"id": branchRef01Data["id"],
		}
		_, err = branchRef01Ent.Remove(branchRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		branchRef01MatchRt0 := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		branchRef01ListRt0Result, err := branchRef01Ent.List(branchRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		branchRef01ListRt0, branchRef01ListRt0Ok := branchRef01ListRt0Result.([]any)
		if !branchRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", branchRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(branchRef01ListRt0), map[string]any{"id": branchRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func branchBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "branch", "BranchTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read branch test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse branch test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"branch01", "branch02", "branch03", "project01", "project02", "project03"},
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
	entidEnvRaw := os.Getenv("NEON_TEST_BRANCH_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NEON_TEST_BRANCH_ENTID": idmap,
		"NEON_TEST_LIVE":      "FALSE",
		"NEON_TEST_EXPLAIN":   "FALSE",
		"NEON_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NEON_TEST_BRANCH_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
