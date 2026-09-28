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

func TestEndpointEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Endpoint(nil)
		if ent == nil {
			t.Fatal("expected non-nil EndpointEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"endpoint": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Endpoint(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Endpoint(nil).Stream("list", nil, nil) {
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
		setup := endpointBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "endpoint." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NEON_TEST_ENDPOINT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		endpointRef01Ent := client.Endpoint(nil)
		endpointRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "endpoint"}), "endpoint_ref01"))
		endpointRef01Data["branch_id"] = setup.idmap["branch01"]
		endpointRef01Data["project_id"] = setup.idmap["project01"]

		endpointRef01DataResult, err := endpointRef01Ent.Create(endpointRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		endpointRef01Data = core.ToMapAny(entityData(endpointRef01DataResult))
		if endpointRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if endpointRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		endpointRef01Match := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		endpointRef01ListResult, err := endpointRef01Ent.List(endpointRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		endpointRef01List, endpointRef01ListOk := endpointRef01ListResult.([]any)
		if !endpointRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", endpointRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(endpointRef01List), map[string]any{"id": endpointRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		endpointRef01DataUp0Up := map[string]any{
			"id": endpointRef01Data["id"],
			"project_id": setup.idmap["project_id"],
		}

		endpointRef01MarkdefUp0Name := "branch_id"
		endpointRef01MarkdefUp0Value := fmt.Sprintf("Mark01-endpoint_ref01_%d", setup.now)
		endpointRef01DataUp0Up[endpointRef01MarkdefUp0Name] = endpointRef01MarkdefUp0Value

		endpointRef01ResdataUp0Result, err := endpointRef01Ent.Update(endpointRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		endpointRef01ResdataUp0 := core.ToMapAny(entityData(endpointRef01ResdataUp0Result))
		if endpointRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if endpointRef01ResdataUp0["id"] != endpointRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if endpointRef01ResdataUp0[endpointRef01MarkdefUp0Name] != endpointRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", endpointRef01MarkdefUp0Name, endpointRef01ResdataUp0[endpointRef01MarkdefUp0Name])
		}

		// LOAD
		endpointRef01MatchDt0 := map[string]any{
			"id": endpointRef01Data["id"],
		}
		endpointRef01DataDt0Loaded, err := endpointRef01Ent.Load(endpointRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		endpointRef01DataDt0LoadResult := core.ToMapAny(entityData(endpointRef01DataDt0Loaded))
		if endpointRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if endpointRef01DataDt0LoadResult["id"] != endpointRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		endpointRef01MatchRm0 := map[string]any{
			"id": endpointRef01Data["id"],
		}
		_, err = endpointRef01Ent.Remove(endpointRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		endpointRef01MatchRt0 := map[string]any{
			"project_id": setup.idmap["project01"],
		}

		endpointRef01ListRt0Result, err := endpointRef01Ent.List(endpointRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		endpointRef01ListRt0, endpointRef01ListRt0Ok := endpointRef01ListRt0Result.([]any)
		if !endpointRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", endpointRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(endpointRef01ListRt0), map[string]any{"id": endpointRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func endpointBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "endpoint", "EndpointTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read endpoint test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse endpoint test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"endpoint01", "endpoint02", "endpoint03", "project01", "project02", "project03", "branch01", "branch02", "branch03"},
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
	entidEnvRaw := os.Getenv("NEON_TEST_ENDPOINT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NEON_TEST_ENDPOINT_ENTID": idmap,
		"NEON_TEST_LIVE":      "FALSE",
		"NEON_TEST_EXPLAIN":   "FALSE",
		"NEON_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NEON_TEST_ENDPOINT_ENTID"])
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
