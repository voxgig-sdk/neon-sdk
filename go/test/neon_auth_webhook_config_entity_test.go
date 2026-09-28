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

func TestNeonAuthWebhookConfigEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.NeonAuthWebhookConfig(nil)
		if ent == nil {
			t.Fatal("expected non-nil NeonAuthWebhookConfigEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"neon_auth_webhook_config": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.NeonAuthWebhookConfig(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.NeonAuthWebhookConfig(nil).Stream("list", nil, nil) {
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
		setup := neon_auth_webhook_configBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "neon_auth_webhook_config." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set NEON_TEST_NEON_AUTH_WEBHOOK_CONFIG_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		neonAuthWebhookConfigRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.neon_auth_webhook_config")))
		var neonAuthWebhookConfigRef01Data map[string]any
		if len(neonAuthWebhookConfigRef01DataRaw) > 0 {
			neonAuthWebhookConfigRef01Data = core.ToMapAny(neonAuthWebhookConfigRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = neonAuthWebhookConfigRef01Data

		// LIST
		neonAuthWebhookConfigRef01Ent := client.NeonAuthWebhookConfig(nil)
		neonAuthWebhookConfigRef01Match := map[string]any{
			"branch_id": setup.idmap["branch01"],
			"project_id": setup.idmap["project01"],
		}

		neonAuthWebhookConfigRef01ListResult, err := neonAuthWebhookConfigRef01Ent.List(neonAuthWebhookConfigRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, neonAuthWebhookConfigRef01ListOk := neonAuthWebhookConfigRef01ListResult.([]any)
		if !neonAuthWebhookConfigRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", neonAuthWebhookConfigRef01ListResult)
		}

		// UPDATE
		neonAuthWebhookConfigRef01DataUp0Up := map[string]any{
			"project_id": setup.idmap["project_id"],
		}

		neonAuthWebhookConfigRef01MarkdefUp0Name := "webhook_url"
		neonAuthWebhookConfigRef01MarkdefUp0Value := fmt.Sprintf("Mark01-neon_auth_webhook_config_ref01_%d", setup.now)
		neonAuthWebhookConfigRef01DataUp0Up[neonAuthWebhookConfigRef01MarkdefUp0Name] = neonAuthWebhookConfigRef01MarkdefUp0Value

		neonAuthWebhookConfigRef01ResdataUp0Result, err := neonAuthWebhookConfigRef01Ent.Update(neonAuthWebhookConfigRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		neonAuthWebhookConfigRef01ResdataUp0 := core.ToMapAny(entityData(neonAuthWebhookConfigRef01ResdataUp0Result))
		if neonAuthWebhookConfigRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if neonAuthWebhookConfigRef01ResdataUp0[neonAuthWebhookConfigRef01MarkdefUp0Name] != neonAuthWebhookConfigRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", neonAuthWebhookConfigRef01MarkdefUp0Name, neonAuthWebhookConfigRef01ResdataUp0[neonAuthWebhookConfigRef01MarkdefUp0Name])
		}

	})
}

func neon_auth_webhook_configBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "neon_auth_webhook_config", "NeonAuthWebhookConfigTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read neon_auth_webhook_config test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse neon_auth_webhook_config test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"neon_auth_webhook_config01", "neon_auth_webhook_config02", "neon_auth_webhook_config03", "project01", "project02", "project03", "branch01", "branch02", "branch03"},
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
	entidEnvRaw := os.Getenv("NEON_TEST_NEON_AUTH_WEBHOOK_CONFIG_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NEON_TEST_NEON_AUTH_WEBHOOK_CONFIG_ENTID": idmap,
		"NEON_TEST_LIVE":      "FALSE",
		"NEON_TEST_EXPLAIN":   "FALSE",
		"NEON_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["NEON_TEST_NEON_AUTH_WEBHOOK_CONFIG_ENTID"])
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
