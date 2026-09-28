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

func TestDataApiEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.DataApi(nil)
		if ent == nil {
			t.Fatal("expected non-nil DataApiEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := data_apiBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "data_api." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NEON_TEST_DATA_API_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		dataApiRef01Ent := client.DataApi(nil)
		dataApiRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "data_api"}), "data_api_ref01"))
		dataApiRef01Data["branch_id"] = setup.idmap["branch01"]
		dataApiRef01Data["database_name"] = setup.idmap["database_name01"]
		dataApiRef01Data["project_id"] = setup.idmap["project01"]

		dataApiRef01DataResult, err := dataApiRef01Ent.Create(dataApiRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		dataApiRef01Data = core.ToMapAny(entityData(dataApiRef01DataResult))
		if dataApiRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if dataApiRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		dataApiRef01DataUp0Up := map[string]any{
			"id": dataApiRef01Data["id"],
			"branch_id": setup.idmap["branch_id"],
			"project_id": setup.idmap["project_id"],
		}

		dataApiRef01MarkdefUp0Name := "auth_provider"
		dataApiRef01MarkdefUp0Value := fmt.Sprintf("Mark01-data_api_ref01_%d", setup.now)
		dataApiRef01DataUp0Up[dataApiRef01MarkdefUp0Name] = dataApiRef01MarkdefUp0Value

		dataApiRef01ResdataUp0Result, err := dataApiRef01Ent.Update(dataApiRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		dataApiRef01ResdataUp0 := core.ToMapAny(entityData(dataApiRef01ResdataUp0Result))
		if dataApiRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if dataApiRef01ResdataUp0["id"] != dataApiRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if dataApiRef01ResdataUp0[dataApiRef01MarkdefUp0Name] != dataApiRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", dataApiRef01MarkdefUp0Name, dataApiRef01ResdataUp0[dataApiRef01MarkdefUp0Name])
		}

		// LOAD
		dataApiRef01MatchDt0 := map[string]any{
			"id": dataApiRef01Data["id"],
		}
		dataApiRef01DataDt0Loaded, err := dataApiRef01Ent.Load(dataApiRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		dataApiRef01DataDt0LoadResult := core.ToMapAny(entityData(dataApiRef01DataDt0Loaded))
		if dataApiRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if dataApiRef01DataDt0LoadResult["id"] != dataApiRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		dataApiRef01MatchRm0 := map[string]any{
			"id": dataApiRef01Data["id"],
		}
		_, err = dataApiRef01Ent.Remove(dataApiRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func data_apiBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "data_api", "DataApiTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read data_api test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse data_api test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"data_api01", "data_api02", "data_api03", "project01", "project02", "project03", "branch01", "branch02", "branch03", "database_name01"},
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
	entidEnvRaw := os.Getenv("NEON_TEST_DATA_API_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NEON_TEST_DATA_API_ENTID": idmap,
		"NEON_TEST_LIVE":      "FALSE",
		"NEON_TEST_EXPLAIN":   "FALSE",
		"NEON_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NEON_TEST_DATA_API_ENTID"])
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
