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

func TestNeonAuthConfigEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.NeonAuthConfig(nil)
		if ent == nil {
			t.Fatal("expected non-nil NeonAuthConfigEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := neon_auth_configBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "neon_auth_config." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NEON_TEST_NEON_AUTH_CONFIG_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		neonAuthConfigRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.neon_auth_config")))
		var neonAuthConfigRef01Data map[string]any
		if len(neonAuthConfigRef01DataRaw) > 0 {
			neonAuthConfigRef01Data = core.ToMapAny(neonAuthConfigRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = neonAuthConfigRef01Data

		// UPDATE
		neonAuthConfigRef01Ent := client.NeonAuthConfig(nil)
		neonAuthConfigRef01DataUp0Up := map[string]any{
			"project_id": setup.idmap["project_id"],
		}

		neonAuthConfigRef01MarkdefUp0Name := "name"
		neonAuthConfigRef01MarkdefUp0Value := fmt.Sprintf("Mark01-neon_auth_config_ref01_%d", setup.now)
		neonAuthConfigRef01DataUp0Up[neonAuthConfigRef01MarkdefUp0Name] = neonAuthConfigRef01MarkdefUp0Value

		neonAuthConfigRef01ResdataUp0Result, err := neonAuthConfigRef01Ent.Update(neonAuthConfigRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		neonAuthConfigRef01ResdataUp0 := core.ToMapAny(entityData(neonAuthConfigRef01ResdataUp0Result))
		if neonAuthConfigRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if neonAuthConfigRef01ResdataUp0[neonAuthConfigRef01MarkdefUp0Name] != neonAuthConfigRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", neonAuthConfigRef01MarkdefUp0Name, neonAuthConfigRef01ResdataUp0[neonAuthConfigRef01MarkdefUp0Name])
		}

	})
}

func neon_auth_configBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "neon_auth_config", "NeonAuthConfigTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read neon_auth_config test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse neon_auth_config test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"neon_auth_config01", "neon_auth_config02", "neon_auth_config03", "project01", "project02", "project03", "branch01", "branch02", "branch03"},
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
	entidEnvRaw := os.Getenv("NEON_TEST_NEON_AUTH_CONFIG_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NEON_TEST_NEON_AUTH_CONFIG_ENTID": idmap,
		"NEON_TEST_LIVE":      "FALSE",
		"NEON_TEST_EXPLAIN":   "FALSE",
		"NEON_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NEON_TEST_NEON_AUTH_CONFIG_ENTID"])
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
