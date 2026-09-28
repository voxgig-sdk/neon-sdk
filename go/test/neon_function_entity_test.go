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

func TestNeonFunctionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.NeonFunction(nil)
		if ent == nil {
			t.Fatal("expected non-nil NeonFunctionEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := neon_functionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "neon_function." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NEON_TEST_NEON_FUNCTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		neonFunctionRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.neon_function")))
		var neonFunctionRef01Data map[string]any
		if len(neonFunctionRef01DataRaw) > 0 {
			neonFunctionRef01Data = core.ToMapAny(neonFunctionRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = neonFunctionRef01Data

		// UPDATE
		neonFunctionRef01Ent := client.NeonFunction(nil)
		neonFunctionRef01DataUp0Up := map[string]any{
			"id": neonFunctionRef01Data["id"],
			"branch_id": setup.idmap["branch_id"],
			"project_id": setup.idmap["project_id"],
		}

		neonFunctionRef01MarkdefUp0Name := "created_at"
		neonFunctionRef01MarkdefUp0Value := fmt.Sprintf("Mark01-neon_function_ref01_%d", setup.now)
		neonFunctionRef01DataUp0Up[neonFunctionRef01MarkdefUp0Name] = neonFunctionRef01MarkdefUp0Value

		neonFunctionRef01ResdataUp0Result, err := neonFunctionRef01Ent.Update(neonFunctionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		neonFunctionRef01ResdataUp0 := core.ToMapAny(entityData(neonFunctionRef01ResdataUp0Result))
		if neonFunctionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if neonFunctionRef01ResdataUp0["id"] != neonFunctionRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if neonFunctionRef01ResdataUp0[neonFunctionRef01MarkdefUp0Name] != neonFunctionRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", neonFunctionRef01MarkdefUp0Name, neonFunctionRef01ResdataUp0[neonFunctionRef01MarkdefUp0Name])
		}

		// LOAD
		neonFunctionRef01MatchDt0 := map[string]any{
			"id": neonFunctionRef01Data["id"],
		}
		neonFunctionRef01DataDt0Loaded, err := neonFunctionRef01Ent.Load(neonFunctionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		neonFunctionRef01DataDt0LoadResult := core.ToMapAny(entityData(neonFunctionRef01DataDt0Loaded))
		if neonFunctionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if neonFunctionRef01DataDt0LoadResult["id"] != neonFunctionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func neon_functionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "neon_function", "NeonFunctionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read neon_function test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse neon_function test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"neon_function01", "neon_function02", "neon_function03", "project01", "project02", "project03", "branch01", "branch02", "branch03"},
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
	entidEnvRaw := os.Getenv("NEON_TEST_NEON_FUNCTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NEON_TEST_NEON_FUNCTION_ENTID": idmap,
		"NEON_TEST_LIVE":      "FALSE",
		"NEON_TEST_EXPLAIN":   "FALSE",
		"NEON_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NEON_TEST_NEON_FUNCTION_ENTID"])
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
