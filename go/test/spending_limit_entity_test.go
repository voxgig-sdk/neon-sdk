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

func TestSpendingLimitEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SpendingLimit(nil)
		if ent == nil {
			t.Fatal("expected non-nil SpendingLimitEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := spending_limitBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "spending_limit." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NEON_TEST_SPENDING_LIMIT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		spendingLimitRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.spending_limit")))
		var spendingLimitRef01Data map[string]any
		if len(spendingLimitRef01DataRaw) > 0 {
			spendingLimitRef01Data = core.ToMapAny(spendingLimitRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = spendingLimitRef01Data

		// UPDATE
		spendingLimitRef01Ent := client.SpendingLimit(nil)
		spendingLimitRef01DataUp0Up := map[string]any{
		}

		spendingLimitRef01ResdataUp0Result, err := spendingLimitRef01Ent.Update(spendingLimitRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		spendingLimitRef01ResdataUp0 := core.ToMapAny(entityData(spendingLimitRef01ResdataUp0Result))
		if spendingLimitRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

		// LOAD
		spendingLimitRef01MatchDt0 := map[string]any{}
		spendingLimitRef01DataDt0Loaded, err := spendingLimitRef01Ent.Load(spendingLimitRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if spendingLimitRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func spending_limitBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "spending_limit", "SpendingLimitTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read spending_limit test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse spending_limit test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"spending_limit01", "spending_limit02", "spending_limit03", "organization01", "organization02", "organization03"},
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
	entidEnvRaw := os.Getenv("NEON_TEST_SPENDING_LIMIT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NEON_TEST_SPENDING_LIMIT_ENTID": idmap,
		"NEON_TEST_LIVE":      "FALSE",
		"NEON_TEST_EXPLAIN":   "FALSE",
		"NEON_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NEON_TEST_SPENDING_LIMIT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
