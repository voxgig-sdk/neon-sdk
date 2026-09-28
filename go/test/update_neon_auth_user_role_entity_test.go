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

func TestUpdateNeonAuthUserRoleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.UpdateNeonAuthUserRole(nil)
		if ent == nil {
			t.Fatal("expected non-nil UpdateNeonAuthUserRoleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := update_neon_auth_user_roleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "update_neon_auth_user_role." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NEON_TEST_UPDATE_NEON_AUTH_USER_ROLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		updateNeonAuthUserRoleRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.update_neon_auth_user_role")))
		var updateNeonAuthUserRoleRef01Data map[string]any
		if len(updateNeonAuthUserRoleRef01DataRaw) > 0 {
			updateNeonAuthUserRoleRef01Data = core.ToMapAny(updateNeonAuthUserRoleRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = updateNeonAuthUserRoleRef01Data

		// UPDATE
		updateNeonAuthUserRoleRef01Ent := client.UpdateNeonAuthUserRole(nil)
		updateNeonAuthUserRoleRef01DataUp0Up := map[string]any{
			"id": updateNeonAuthUserRoleRef01Data["id"],
			"branch_id": setup.idmap["branch_id"],
			"project_id": setup.idmap["project_id"],
		}

		updateNeonAuthUserRoleRef01ResdataUp0Result, err := updateNeonAuthUserRoleRef01Ent.Update(updateNeonAuthUserRoleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		updateNeonAuthUserRoleRef01ResdataUp0 := core.ToMapAny(entityData(updateNeonAuthUserRoleRef01ResdataUp0Result))
		if updateNeonAuthUserRoleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if updateNeonAuthUserRoleRef01ResdataUp0["id"] != updateNeonAuthUserRoleRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

	})
}

func update_neon_auth_user_roleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "update_neon_auth_user_role", "UpdateNeonAuthUserRoleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read update_neon_auth_user_role test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse update_neon_auth_user_role test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"update_neon_auth_user_role01", "update_neon_auth_user_role02", "update_neon_auth_user_role03", "project01", "project02", "project03", "branch01", "branch02", "branch03"},
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
	entidEnvRaw := os.Getenv("NEON_TEST_UPDATE_NEON_AUTH_USER_ROLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NEON_TEST_UPDATE_NEON_AUTH_USER_ROLE_ENTID": idmap,
		"NEON_TEST_LIVE":      "FALSE",
		"NEON_TEST_EXPLAIN":   "FALSE",
		"NEON_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NEON_TEST_UPDATE_NEON_AUTH_USER_ROLE_ENTID"])
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
