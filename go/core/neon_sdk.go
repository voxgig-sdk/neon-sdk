package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/neon-sdk/go/utility/struct"
)

type NeonSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewNeonSDK(options map[string]any) *NeonSDK {
	sdk := &NeonSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *NeonSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *NeonSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *NeonSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *NeonSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *NeonSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *NeonSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *NeonSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("NeonSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *NeonSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *NeonSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("NeonSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Anonymize returns a Anonymize entity bound to this client.
// Idiomatic usage: client.Anonymize(nil).List(nil, nil) or
// client.Anonymize(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Anonymize(data map[string]any) NeonEntity {
	return NewAnonymizeEntityFunc(sdk, data)
}


// AnonymizedBranchStatus returns a AnonymizedBranchStatus entity bound to this client.
// Idiomatic usage: client.AnonymizedBranchStatus(nil).List(nil, nil) or
// client.AnonymizedBranchStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) AnonymizedBranchStatus(data map[string]any) NeonEntity {
	return NewAnonymizedBranchStatusEntityFunc(sdk, data)
}


// ApiKey returns a ApiKey entity bound to this client.
// Idiomatic usage: client.ApiKey(nil).List(nil, nil) or
// client.ApiKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) ApiKey(data map[string]any) NeonEntity {
	return NewApiKeyEntityFunc(sdk, data)
}


// Auth returns a Auth entity bound to this client.
// Idiomatic usage: client.Auth(nil).List(nil, nil) or
// client.Auth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Auth(data map[string]any) NeonEntity {
	return NewAuthEntityFunc(sdk, data)
}


// AuthLegacy returns a AuthLegacy entity bound to this client.
// Idiomatic usage: client.AuthLegacy(nil).List(nil, nil) or
// client.AuthLegacy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) AuthLegacy(data map[string]any) NeonEntity {
	return NewAuthLegacyEntityFunc(sdk, data)
}


// AvailablePreloadLibrary returns a AvailablePreloadLibrary entity bound to this client.
// Idiomatic usage: client.AvailablePreloadLibrary(nil).List(nil, nil) or
// client.AvailablePreloadLibrary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) AvailablePreloadLibrary(data map[string]any) NeonEntity {
	return NewAvailablePreloadLibraryEntityFunc(sdk, data)
}


// BackupSchedule returns a BackupSchedule entity bound to this client.
// Idiomatic usage: client.BackupSchedule(nil).List(nil, nil) or
// client.BackupSchedule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) BackupSchedule(data map[string]any) NeonEntity {
	return NewBackupScheduleEntityFunc(sdk, data)
}


// Branch returns a Branch entity bound to this client.
// Idiomatic usage: client.Branch(nil).List(nil, nil) or
// client.Branch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Branch(data map[string]any) NeonEntity {
	return NewBranchEntityFunc(sdk, data)
}


// BranchAiGateway returns a BranchAiGateway entity bound to this client.
// Idiomatic usage: client.BranchAiGateway(nil).List(nil, nil) or
// client.BranchAiGateway(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) BranchAiGateway(data map[string]any) NeonEntity {
	return NewBranchAiGatewayEntityFunc(sdk, data)
}


// BranchOperation returns a BranchOperation entity bound to this client.
// Idiomatic usage: client.BranchOperation(nil).List(nil, nil) or
// client.BranchOperation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) BranchOperation(data map[string]any) NeonEntity {
	return NewBranchOperationEntityFunc(sdk, data)
}


// BranchSchema returns a BranchSchema entity bound to this client.
// Idiomatic usage: client.BranchSchema(nil).List(nil, nil) or
// client.BranchSchema(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) BranchSchema(data map[string]any) NeonEntity {
	return NewBranchSchemaEntityFunc(sdk, data)
}


// BranchSchemaCompare returns a BranchSchemaCompare entity bound to this client.
// Idiomatic usage: client.BranchSchemaCompare(nil).List(nil, nil) or
// client.BranchSchemaCompare(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) BranchSchemaCompare(data map[string]any) NeonEntity {
	return NewBranchSchemaCompareEntityFunc(sdk, data)
}


// BranchStorage returns a BranchStorage entity bound to this client.
// Idiomatic usage: client.BranchStorage(nil).List(nil, nil) or
// client.BranchStorage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) BranchStorage(data map[string]any) NeonEntity {
	return NewBranchStorageEntityFunc(sdk, data)
}


// Bucket returns a Bucket entity bound to this client.
// Idiomatic usage: client.Bucket(nil).List(nil, nil) or
// client.Bucket(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Bucket(data map[string]any) NeonEntity {
	return NewBucketEntityFunc(sdk, data)
}


// BucketObjectsList returns a BucketObjectsList entity bound to this client.
// Idiomatic usage: client.BucketObjectsList(nil).List(nil, nil) or
// client.BucketObjectsList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) BucketObjectsList(data map[string]any) NeonEntity {
	return NewBucketObjectsListEntityFunc(sdk, data)
}


// ConnectionUri returns a ConnectionUri entity bound to this client.
// Idiomatic usage: client.ConnectionUri(nil).List(nil, nil) or
// client.ConnectionUri(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) ConnectionUri(data map[string]any) NeonEntity {
	return NewConnectionUriEntityFunc(sdk, data)
}


// Consumption returns a Consumption entity bound to this client.
// Idiomatic usage: client.Consumption(nil).List(nil, nil) or
// client.Consumption(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Consumption(data map[string]any) NeonEntity {
	return NewConsumptionEntityFunc(sdk, data)
}


// CreateCredential returns a CreateCredential entity bound to this client.
// Idiomatic usage: client.CreateCredential(nil).List(nil, nil) or
// client.CreateCredential(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) CreateCredential(data map[string]any) NeonEntity {
	return NewCreateCredentialEntityFunc(sdk, data)
}


// Credential returns a Credential entity bound to this client.
// Idiomatic usage: client.Credential(nil).List(nil, nil) or
// client.Credential(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Credential(data map[string]any) NeonEntity {
	return NewCredentialEntityFunc(sdk, data)
}


// CurrentUserInfo returns a CurrentUserInfo entity bound to this client.
// Idiomatic usage: client.CurrentUserInfo(nil).List(nil, nil) or
// client.CurrentUserInfo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) CurrentUserInfo(data map[string]any) NeonEntity {
	return NewCurrentUserInfoEntityFunc(sdk, data)
}


// CustomDomain returns a CustomDomain entity bound to this client.
// Idiomatic usage: client.CustomDomain(nil).List(nil, nil) or
// client.CustomDomain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) CustomDomain(data map[string]any) NeonEntity {
	return NewCustomDomainEntityFunc(sdk, data)
}


// DataApi returns a DataApi entity bound to this client.
// Idiomatic usage: client.DataApi(nil).List(nil, nil) or
// client.DataApi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) DataApi(data map[string]any) NeonEntity {
	return NewDataApiEntityFunc(sdk, data)
}


// Database returns a Database entity bound to this client.
// Idiomatic usage: client.Database(nil).List(nil, nil) or
// client.Database(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Database(data map[string]any) NeonEntity {
	return NewDatabaseEntityFunc(sdk, data)
}


// EmailProvider returns a EmailProvider entity bound to this client.
// Idiomatic usage: client.EmailProvider(nil).List(nil, nil) or
// client.EmailProvider(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) EmailProvider(data map[string]any) NeonEntity {
	return NewEmailProviderEntityFunc(sdk, data)
}


// EmailServer returns a EmailServer entity bound to this client.
// Idiomatic usage: client.EmailServer(nil).List(nil, nil) or
// client.EmailServer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) EmailServer(data map[string]any) NeonEntity {
	return NewEmailServerEntityFunc(sdk, data)
}


// Empty returns a Empty entity bound to this client.
// Idiomatic usage: client.Empty(nil).List(nil, nil) or
// client.Empty(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Empty(data map[string]any) NeonEntity {
	return NewEmptyEntityFunc(sdk, data)
}


// Endpoint returns a Endpoint entity bound to this client.
// Idiomatic usage: client.Endpoint(nil).List(nil, nil) or
// client.Endpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Endpoint(data map[string]any) NeonEntity {
	return NewEndpointEntityFunc(sdk, data)
}


// EndpointOperation returns a EndpointOperation entity bound to this client.
// Idiomatic usage: client.EndpointOperation(nil).List(nil, nil) or
// client.EndpointOperation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) EndpointOperation(data map[string]any) NeonEntity {
	return NewEndpointOperationEntityFunc(sdk, data)
}


// Function returns a Function entity bound to this client.
// Idiomatic usage: client.Function(nil).List(nil, nil) or
// client.Function(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Function(data map[string]any) NeonEntity {
	return NewFunctionEntityFunc(sdk, data)
}


// Jwk returns a Jwk entity bound to this client.
// Idiomatic usage: client.Jwk(nil).List(nil, nil) or
// client.Jwk(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Jwk(data map[string]any) NeonEntity {
	return NewJwkEntityFunc(sdk, data)
}


// MaskingRule returns a MaskingRule entity bound to this client.
// Idiomatic usage: client.MaskingRule(nil).List(nil, nil) or
// client.MaskingRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) MaskingRule(data map[string]any) NeonEntity {
	return NewMaskingRuleEntityFunc(sdk, data)
}


// Member returns a Member entity bound to this client.
// Idiomatic usage: client.Member(nil).List(nil, nil) or
// client.Member(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Member(data map[string]any) NeonEntity {
	return NewMemberEntityFunc(sdk, data)
}


// NeonAuthAllowLocalhost returns a NeonAuthAllowLocalhost entity bound to this client.
// Idiomatic usage: client.NeonAuthAllowLocalhost(nil).List(nil, nil) or
// client.NeonAuthAllowLocalhost(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthAllowLocalhost(data map[string]any) NeonEntity {
	return NewNeonAuthAllowLocalhostEntityFunc(sdk, data)
}


// NeonAuthConfig returns a NeonAuthConfig entity bound to this client.
// Idiomatic usage: client.NeonAuthConfig(nil).List(nil, nil) or
// client.NeonAuthConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthConfig(data map[string]any) NeonEntity {
	return NewNeonAuthConfigEntityFunc(sdk, data)
}


// NeonAuthCreateIntegration returns a NeonAuthCreateIntegration entity bound to this client.
// Idiomatic usage: client.NeonAuthCreateIntegration(nil).List(nil, nil) or
// client.NeonAuthCreateIntegration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthCreateIntegration(data map[string]any) NeonEntity {
	return NewNeonAuthCreateIntegrationEntityFunc(sdk, data)
}


// NeonAuthCreateNewUser returns a NeonAuthCreateNewUser entity bound to this client.
// Idiomatic usage: client.NeonAuthCreateNewUser(nil).List(nil, nil) or
// client.NeonAuthCreateNewUser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthCreateNewUser(data map[string]any) NeonEntity {
	return NewNeonAuthCreateNewUserEntityFunc(sdk, data)
}


// NeonAuthEmailAndPasswordConfig returns a NeonAuthEmailAndPasswordConfig entity bound to this client.
// Idiomatic usage: client.NeonAuthEmailAndPasswordConfig(nil).List(nil, nil) or
// client.NeonAuthEmailAndPasswordConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthEmailAndPasswordConfig(data map[string]any) NeonEntity {
	return NewNeonAuthEmailAndPasswordConfigEntityFunc(sdk, data)
}


// NeonAuthEmailServerConfig returns a NeonAuthEmailServerConfig entity bound to this client.
// Idiomatic usage: client.NeonAuthEmailServerConfig(nil).List(nil, nil) or
// client.NeonAuthEmailServerConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthEmailServerConfig(data map[string]any) NeonEntity {
	return NewNeonAuthEmailServerConfigEntityFunc(sdk, data)
}


// NeonAuthIntegration returns a NeonAuthIntegration entity bound to this client.
// Idiomatic usage: client.NeonAuthIntegration(nil).List(nil, nil) or
// client.NeonAuthIntegration(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthIntegration(data map[string]any) NeonEntity {
	return NewNeonAuthIntegrationEntityFunc(sdk, data)
}


// NeonAuthMagicLinkConfig returns a NeonAuthMagicLinkConfig entity bound to this client.
// Idiomatic usage: client.NeonAuthMagicLinkConfig(nil).List(nil, nil) or
// client.NeonAuthMagicLinkConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthMagicLinkConfig(data map[string]any) NeonEntity {
	return NewNeonAuthMagicLinkConfigEntityFunc(sdk, data)
}


// NeonAuthOauthProvider returns a NeonAuthOauthProvider entity bound to this client.
// Idiomatic usage: client.NeonAuthOauthProvider(nil).List(nil, nil) or
// client.NeonAuthOauthProvider(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthOauthProvider(data map[string]any) NeonEntity {
	return NewNeonAuthOauthProviderEntityFunc(sdk, data)
}


// NeonAuthOrganizationConfig returns a NeonAuthOrganizationConfig entity bound to this client.
// Idiomatic usage: client.NeonAuthOrganizationConfig(nil).List(nil, nil) or
// client.NeonAuthOrganizationConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthOrganizationConfig(data map[string]any) NeonEntity {
	return NewNeonAuthOrganizationConfigEntityFunc(sdk, data)
}


// NeonAuthPhoneNumberConfig returns a NeonAuthPhoneNumberConfig entity bound to this client.
// Idiomatic usage: client.NeonAuthPhoneNumberConfig(nil).List(nil, nil) or
// client.NeonAuthPhoneNumberConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthPhoneNumberConfig(data map[string]any) NeonEntity {
	return NewNeonAuthPhoneNumberConfigEntityFunc(sdk, data)
}


// NeonAuthPluginConfig returns a NeonAuthPluginConfig entity bound to this client.
// Idiomatic usage: client.NeonAuthPluginConfig(nil).List(nil, nil) or
// client.NeonAuthPluginConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthPluginConfig(data map[string]any) NeonEntity {
	return NewNeonAuthPluginConfigEntityFunc(sdk, data)
}


// NeonAuthRedirectUriWhitelistDomain returns a NeonAuthRedirectUriWhitelistDomain entity bound to this client.
// Idiomatic usage: client.NeonAuthRedirectUriWhitelistDomain(nil).List(nil, nil) or
// client.NeonAuthRedirectUriWhitelistDomain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthRedirectUriWhitelistDomain(data map[string]any) NeonEntity {
	return NewNeonAuthRedirectUriWhitelistDomainEntityFunc(sdk, data)
}


// NeonAuthTransferAuthProviderProject returns a NeonAuthTransferAuthProviderProject entity bound to this client.
// Idiomatic usage: client.NeonAuthTransferAuthProviderProject(nil).List(nil, nil) or
// client.NeonAuthTransferAuthProviderProject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthTransferAuthProviderProject(data map[string]any) NeonEntity {
	return NewNeonAuthTransferAuthProviderProjectEntityFunc(sdk, data)
}


// NeonAuthWebhookConfig returns a NeonAuthWebhookConfig entity bound to this client.
// Idiomatic usage: client.NeonAuthWebhookConfig(nil).List(nil, nil) or
// client.NeonAuthWebhookConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonAuthWebhookConfig(data map[string]any) NeonEntity {
	return NewNeonAuthWebhookConfigEntityFunc(sdk, data)
}


// NeonFunction returns a NeonFunction entity bound to this client.
// Idiomatic usage: client.NeonFunction(nil).List(nil, nil) or
// client.NeonFunction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonFunction(data map[string]any) NeonEntity {
	return NewNeonFunctionEntityFunc(sdk, data)
}


// NeonFunctionDeployment returns a NeonFunctionDeployment entity bound to this client.
// Idiomatic usage: client.NeonFunctionDeployment(nil).List(nil, nil) or
// client.NeonFunctionDeployment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) NeonFunctionDeployment(data map[string]any) NeonEntity {
	return NewNeonFunctionDeploymentEntityFunc(sdk, data)
}


// Operation returns a Operation entity bound to this client.
// Idiomatic usage: client.Operation(nil).List(nil, nil) or
// client.Operation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Operation(data map[string]any) NeonEntity {
	return NewOperationEntityFunc(sdk, data)
}


// OrgApiKeyCreate returns a OrgApiKeyCreate entity bound to this client.
// Idiomatic usage: client.OrgApiKeyCreate(nil).List(nil, nil) or
// client.OrgApiKeyCreate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) OrgApiKeyCreate(data map[string]any) NeonEntity {
	return NewOrgApiKeyCreateEntityFunc(sdk, data)
}


// OrgApiKeyRevoke returns a OrgApiKeyRevoke entity bound to this client.
// Idiomatic usage: client.OrgApiKeyRevoke(nil).List(nil, nil) or
// client.OrgApiKeyRevoke(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) OrgApiKeyRevoke(data map[string]any) NeonEntity {
	return NewOrgApiKeyRevokeEntityFunc(sdk, data)
}


// OrgApiKeysListResponseItem returns a OrgApiKeysListResponseItem entity bound to this client.
// Idiomatic usage: client.OrgApiKeysListResponseItem(nil).List(nil, nil) or
// client.OrgApiKeysListResponseItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) OrgApiKeysListResponseItem(data map[string]any) NeonEntity {
	return NewOrgApiKeysListResponseItemEntityFunc(sdk, data)
}


// Organization returns a Organization entity bound to this client.
// Idiomatic usage: client.Organization(nil).List(nil, nil) or
// client.Organization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Organization(data map[string]any) NeonEntity {
	return NewOrganizationEntityFunc(sdk, data)
}


// OrganizationInvitation returns a OrganizationInvitation entity bound to this client.
// Idiomatic usage: client.OrganizationInvitation(nil).List(nil, nil) or
// client.OrganizationInvitation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) OrganizationInvitation(data map[string]any) NeonEntity {
	return NewOrganizationInvitationEntityFunc(sdk, data)
}


// Presign returns a Presign entity bound to this client.
// Idiomatic usage: client.Presign(nil).List(nil, nil) or
// client.Presign(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Presign(data map[string]any) NeonEntity {
	return NewPresignEntityFunc(sdk, data)
}


// Project returns a Project entity bound to this client.
// Idiomatic usage: client.Project(nil).List(nil, nil) or
// client.Project(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Project(data map[string]any) NeonEntity {
	return NewProjectEntityFunc(sdk, data)
}


// ProjectBranchLogField returns a ProjectBranchLogField entity bound to this client.
// Idiomatic usage: client.ProjectBranchLogField(nil).List(nil, nil) or
// client.ProjectBranchLogField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) ProjectBranchLogField(data map[string]any) NeonEntity {
	return NewProjectBranchLogFieldEntityFunc(sdk, data)
}


// ProjectBranchLogFieldValue returns a ProjectBranchLogFieldValue entity bound to this client.
// Idiomatic usage: client.ProjectBranchLogFieldValue(nil).List(nil, nil) or
// client.ProjectBranchLogFieldValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) ProjectBranchLogFieldValue(data map[string]any) NeonEntity {
	return NewProjectBranchLogFieldValueEntityFunc(sdk, data)
}


// ProjectBranchLogsQuery returns a ProjectBranchLogsQuery entity bound to this client.
// Idiomatic usage: client.ProjectBranchLogsQuery(nil).List(nil, nil) or
// client.ProjectBranchLogsQuery(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) ProjectBranchLogsQuery(data map[string]any) NeonEntity {
	return NewProjectBranchLogsQueryEntityFunc(sdk, data)
}


// ProjectMember returns a ProjectMember entity bound to this client.
// Idiomatic usage: client.ProjectMember(nil).List(nil, nil) or
// client.ProjectMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) ProjectMember(data map[string]any) NeonEntity {
	return NewProjectMemberEntityFunc(sdk, data)
}


// ProjectMemberRole returns a ProjectMemberRole entity bound to this client.
// Idiomatic usage: client.ProjectMemberRole(nil).List(nil, nil) or
// client.ProjectMemberRole(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) ProjectMemberRole(data map[string]any) NeonEntity {
	return NewProjectMemberRoleEntityFunc(sdk, data)
}


// ProjectPermission returns a ProjectPermission entity bound to this client.
// Idiomatic usage: client.ProjectPermission(nil).List(nil, nil) or
// client.ProjectPermission(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) ProjectPermission(data map[string]any) NeonEntity {
	return NewProjectPermissionEntityFunc(sdk, data)
}


// ProjectRecover returns a ProjectRecover entity bound to this client.
// Idiomatic usage: client.ProjectRecover(nil).List(nil, nil) or
// client.ProjectRecover(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) ProjectRecover(data map[string]any) NeonEntity {
	return NewProjectRecoverEntityFunc(sdk, data)
}


// ProjectTransferRequest returns a ProjectTransferRequest entity bound to this client.
// Idiomatic usage: client.ProjectTransferRequest(nil).List(nil, nil) or
// client.ProjectTransferRequest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) ProjectTransferRequest(data map[string]any) NeonEntity {
	return NewProjectTransferRequestEntityFunc(sdk, data)
}


// Region returns a Region entity bound to this client.
// Idiomatic usage: client.Region(nil).List(nil, nil) or
// client.Region(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Region(data map[string]any) NeonEntity {
	return NewRegionEntityFunc(sdk, data)
}


// Role returns a Role entity bound to this client.
// Idiomatic usage: client.Role(nil).List(nil, nil) or
// client.Role(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Role(data map[string]any) NeonEntity {
	return NewRoleEntityFunc(sdk, data)
}


// RoleOperation returns a RoleOperation entity bound to this client.
// Idiomatic usage: client.RoleOperation(nil).List(nil, nil) or
// client.RoleOperation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) RoleOperation(data map[string]any) NeonEntity {
	return NewRoleOperationEntityFunc(sdk, data)
}


// RolePassword returns a RolePassword entity bound to this client.
// Idiomatic usage: client.RolePassword(nil).List(nil, nil) or
// client.RolePassword(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) RolePassword(data map[string]any) NeonEntity {
	return NewRolePasswordEntityFunc(sdk, data)
}


// SendNeonAuthTestEmail returns a SendNeonAuthTestEmail entity bound to this client.
// Idiomatic usage: client.SendNeonAuthTestEmail(nil).List(nil, nil) or
// client.SendNeonAuthTestEmail(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) SendNeonAuthTestEmail(data map[string]any) NeonEntity {
	return NewSendNeonAuthTestEmailEntityFunc(sdk, data)
}


// Snapshot returns a Snapshot entity bound to this client.
// Idiomatic usage: client.Snapshot(nil).List(nil, nil) or
// client.Snapshot(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Snapshot(data map[string]any) NeonEntity {
	return NewSnapshotEntityFunc(sdk, data)
}


// SpendingLimit returns a SpendingLimit entity bound to this client.
// Idiomatic usage: client.SpendingLimit(nil).List(nil, nil) or
// client.SpendingLimit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) SpendingLimit(data map[string]any) NeonEntity {
	return NewSpendingLimitEntityFunc(sdk, data)
}


// Trigger returns a Trigger entity bound to this client.
// Idiomatic usage: client.Trigger(nil).List(nil, nil) or
// client.Trigger(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) Trigger(data map[string]any) NeonEntity {
	return NewTriggerEntityFunc(sdk, data)
}


// UpdateNeonAuthUserRole returns a UpdateNeonAuthUserRole entity bound to this client.
// Idiomatic usage: client.UpdateNeonAuthUserRole(nil).List(nil, nil) or
// client.UpdateNeonAuthUserRole(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) UpdateNeonAuthUserRole(data map[string]any) NeonEntity {
	return NewUpdateNeonAuthUserRoleEntityFunc(sdk, data)
}


// VpcEndpoint returns a VpcEndpoint entity bound to this client.
// Idiomatic usage: client.VpcEndpoint(nil).List(nil, nil) or
// client.VpcEndpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *NeonSDK) VpcEndpoint(data map[string]any) NeonEntity {
	return NewVpcEndpointEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *NeonSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewNeonSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
