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

func TestEmptyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Empty(nil)
		if ent == nil {
			t.Fatal("expected non-nil EmptyEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := emptyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "empty." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NEON_TEST_EMPTY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		emptyRef01Ent := client.Empty(nil)
		emptyRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "empty"}), "empty_ref01"))
		emptyRef01Data["project_id"] = setup.idmap["project01"]

		emptyRef01DataResult, err := emptyRef01Ent.Create(emptyRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		emptyRef01Data = core.ToMapAny(entityData(emptyRef01DataResult))
		if emptyRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		emptyRef01DataUp0Up := map[string]any{
			"project_id": setup.idmap["project_id"],
		}

		emptyRef01MarkdefUp0Name := "destination_org_id"
		emptyRef01MarkdefUp0Value := fmt.Sprintf("Mark01-empty_ref01_%d", setup.now)
		emptyRef01DataUp0Up[emptyRef01MarkdefUp0Name] = emptyRef01MarkdefUp0Value

		emptyRef01ResdataUp0Result, err := emptyRef01Ent.Update(emptyRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		emptyRef01ResdataUp0 := core.ToMapAny(entityData(emptyRef01ResdataUp0Result))
		if emptyRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if emptyRef01ResdataUp0[emptyRef01MarkdefUp0Name] != emptyRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", emptyRef01MarkdefUp0Name, emptyRef01ResdataUp0[emptyRef01MarkdefUp0Name])
		}


	})
}

func emptyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "empty", "EmptyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read empty test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse empty test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"empty01", "empty02", "empty03", "organization01", "organization02", "organization03", "project01", "project02", "project03", "branch01", "branch02", "branch03"},
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
	entidEnvRaw := os.Getenv("NEON_TEST_EMPTY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NEON_TEST_EMPTY_ENTID": idmap,
		"NEON_TEST_LIVE":      "FALSE",
		"NEON_TEST_EXPLAIN":   "FALSE",
		"NEON_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NEON_TEST_EMPTY_ENTID"])
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
