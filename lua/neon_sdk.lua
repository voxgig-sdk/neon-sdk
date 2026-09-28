-- Neon SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("neon_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local NeonSDK = {}
NeonSDK.__index = NeonSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

NeonSDK._make_feature = _make_feature


function NeonSDK.new(options)
  local self = setmetatable({}, NeonSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function NeonSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function NeonSDK:get_utility()
  return Utility.copy(self._utility)
end


function NeonSDK:get_root_ctx()
  return self._rootctx
end


function NeonSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function NeonSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function NeonSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function NeonSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "NeonSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function NeonSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function NeonSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "NeonSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Anonymize():list() / client:Anonymize():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Anonymize(data)
  local EntityMod = require("entity.anonymize_entity")
  if data == nil then
    if self._anonymize == nil then
      self._anonymize = EntityMod.new(self, nil)
    end
    return self._anonymize
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AnonymizedBranchStatus():list() / client:AnonymizedBranchStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:AnonymizedBranchStatus(data)
  local EntityMod = require("entity.anonymized_branch_status_entity")
  if data == nil then
    if self._anonymized_branch_status == nil then
      self._anonymized_branch_status = EntityMod.new(self, nil)
    end
    return self._anonymized_branch_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiKey():list() / client:ApiKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:ApiKey(data)
  local EntityMod = require("entity.api_key_entity")
  if data == nil then
    if self._api_key == nil then
      self._api_key = EntityMod.new(self, nil)
    end
    return self._api_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Auth():list() / client:Auth():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Auth(data)
  local EntityMod = require("entity.auth_entity")
  if data == nil then
    if self._auth == nil then
      self._auth = EntityMod.new(self, nil)
    end
    return self._auth
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AuthLegacy():list() / client:AuthLegacy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:AuthLegacy(data)
  local EntityMod = require("entity.auth_legacy_entity")
  if data == nil then
    if self._auth_legacy == nil then
      self._auth_legacy = EntityMod.new(self, nil)
    end
    return self._auth_legacy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AvailablePreloadLibrary():list() / client:AvailablePreloadLibrary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:AvailablePreloadLibrary(data)
  local EntityMod = require("entity.available_preload_library_entity")
  if data == nil then
    if self._available_preload_library == nil then
      self._available_preload_library = EntityMod.new(self, nil)
    end
    return self._available_preload_library
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BackupSchedule():list() / client:BackupSchedule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:BackupSchedule(data)
  local EntityMod = require("entity.backup_schedule_entity")
  if data == nil then
    if self._backup_schedule == nil then
      self._backup_schedule = EntityMod.new(self, nil)
    end
    return self._backup_schedule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Branch():list() / client:Branch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Branch(data)
  local EntityMod = require("entity.branch_entity")
  if data == nil then
    if self._branch == nil then
      self._branch = EntityMod.new(self, nil)
    end
    return self._branch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BranchAiGateway():list() / client:BranchAiGateway():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:BranchAiGateway(data)
  local EntityMod = require("entity.branch_ai_gateway_entity")
  if data == nil then
    if self._branch_ai_gateway == nil then
      self._branch_ai_gateway = EntityMod.new(self, nil)
    end
    return self._branch_ai_gateway
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BranchOperation():list() / client:BranchOperation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:BranchOperation(data)
  local EntityMod = require("entity.branch_operation_entity")
  if data == nil then
    if self._branch_operation == nil then
      self._branch_operation = EntityMod.new(self, nil)
    end
    return self._branch_operation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BranchSchema():list() / client:BranchSchema():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:BranchSchema(data)
  local EntityMod = require("entity.branch_schema_entity")
  if data == nil then
    if self._branch_schema == nil then
      self._branch_schema = EntityMod.new(self, nil)
    end
    return self._branch_schema
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BranchSchemaCompare():list() / client:BranchSchemaCompare():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:BranchSchemaCompare(data)
  local EntityMod = require("entity.branch_schema_compare_entity")
  if data == nil then
    if self._branch_schema_compare == nil then
      self._branch_schema_compare = EntityMod.new(self, nil)
    end
    return self._branch_schema_compare
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BranchStorage():list() / client:BranchStorage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:BranchStorage(data)
  local EntityMod = require("entity.branch_storage_entity")
  if data == nil then
    if self._branch_storage == nil then
      self._branch_storage = EntityMod.new(self, nil)
    end
    return self._branch_storage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Bucket():list() / client:Bucket():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Bucket(data)
  local EntityMod = require("entity.bucket_entity")
  if data == nil then
    if self._bucket == nil then
      self._bucket = EntityMod.new(self, nil)
    end
    return self._bucket
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BucketObjectsList():list() / client:BucketObjectsList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:BucketObjectsList(data)
  local EntityMod = require("entity.bucket_objects_list_entity")
  if data == nil then
    if self._bucket_objects_list == nil then
      self._bucket_objects_list = EntityMod.new(self, nil)
    end
    return self._bucket_objects_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ConnectionUri():list() / client:ConnectionUri():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:ConnectionUri(data)
  local EntityMod = require("entity.connection_uri_entity")
  if data == nil then
    if self._connection_uri == nil then
      self._connection_uri = EntityMod.new(self, nil)
    end
    return self._connection_uri
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Consumption():list() / client:Consumption():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Consumption(data)
  local EntityMod = require("entity.consumption_entity")
  if data == nil then
    if self._consumption == nil then
      self._consumption = EntityMod.new(self, nil)
    end
    return self._consumption
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateCredential():list() / client:CreateCredential():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:CreateCredential(data)
  local EntityMod = require("entity.create_credential_entity")
  if data == nil then
    if self._create_credential == nil then
      self._create_credential = EntityMod.new(self, nil)
    end
    return self._create_credential
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Credential():list() / client:Credential():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Credential(data)
  local EntityMod = require("entity.credential_entity")
  if data == nil then
    if self._credential == nil then
      self._credential = EntityMod.new(self, nil)
    end
    return self._credential
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CurrentUserInfo():list() / client:CurrentUserInfo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:CurrentUserInfo(data)
  local EntityMod = require("entity.current_user_info_entity")
  if data == nil then
    if self._current_user_info == nil then
      self._current_user_info = EntityMod.new(self, nil)
    end
    return self._current_user_info
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomDomain():list() / client:CustomDomain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:CustomDomain(data)
  local EntityMod = require("entity.custom_domain_entity")
  if data == nil then
    if self._custom_domain == nil then
      self._custom_domain = EntityMod.new(self, nil)
    end
    return self._custom_domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DataApi():list() / client:DataApi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:DataApi(data)
  local EntityMod = require("entity.data_api_entity")
  if data == nil then
    if self._data_api == nil then
      self._data_api = EntityMod.new(self, nil)
    end
    return self._data_api
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Database():list() / client:Database():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Database(data)
  local EntityMod = require("entity.database_entity")
  if data == nil then
    if self._database == nil then
      self._database = EntityMod.new(self, nil)
    end
    return self._database
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmailProvider():list() / client:EmailProvider():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:EmailProvider(data)
  local EntityMod = require("entity.email_provider_entity")
  if data == nil then
    if self._email_provider == nil then
      self._email_provider = EntityMod.new(self, nil)
    end
    return self._email_provider
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmailServer():list() / client:EmailServer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:EmailServer(data)
  local EntityMod = require("entity.email_server_entity")
  if data == nil then
    if self._email_server == nil then
      self._email_server = EntityMod.new(self, nil)
    end
    return self._email_server
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Empty():list() / client:Empty():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Empty(data)
  local EntityMod = require("entity.empty_entity")
  if data == nil then
    if self._empty == nil then
      self._empty = EntityMod.new(self, nil)
    end
    return self._empty
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Endpoint():list() / client:Endpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Endpoint(data)
  local EntityMod = require("entity.endpoint_entity")
  if data == nil then
    if self._endpoint == nil then
      self._endpoint = EntityMod.new(self, nil)
    end
    return self._endpoint
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EndpointOperation():list() / client:EndpointOperation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:EndpointOperation(data)
  local EntityMod = require("entity.endpoint_operation_entity")
  if data == nil then
    if self._endpoint_operation == nil then
      self._endpoint_operation = EntityMod.new(self, nil)
    end
    return self._endpoint_operation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Function():list() / client:Function():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Function(data)
  local EntityMod = require("entity.function_entity")
  if data == nil then
    if self._function == nil then
      self._function = EntityMod.new(self, nil)
    end
    return self._function
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Jwk():list() / client:Jwk():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Jwk(data)
  local EntityMod = require("entity.jwk_entity")
  if data == nil then
    if self._jwk == nil then
      self._jwk = EntityMod.new(self, nil)
    end
    return self._jwk
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MaskingRule():list() / client:MaskingRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:MaskingRule(data)
  local EntityMod = require("entity.masking_rule_entity")
  if data == nil then
    if self._masking_rule == nil then
      self._masking_rule = EntityMod.new(self, nil)
    end
    return self._masking_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Member():list() / client:Member():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Member(data)
  local EntityMod = require("entity.member_entity")
  if data == nil then
    if self._member == nil then
      self._member = EntityMod.new(self, nil)
    end
    return self._member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthAllowLocalhost():list() / client:NeonAuthAllowLocalhost():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthAllowLocalhost(data)
  local EntityMod = require("entity.neon_auth_allow_localhost_entity")
  if data == nil then
    if self._neon_auth_allow_localhost == nil then
      self._neon_auth_allow_localhost = EntityMod.new(self, nil)
    end
    return self._neon_auth_allow_localhost
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthConfig():list() / client:NeonAuthConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthConfig(data)
  local EntityMod = require("entity.neon_auth_config_entity")
  if data == nil then
    if self._neon_auth_config == nil then
      self._neon_auth_config = EntityMod.new(self, nil)
    end
    return self._neon_auth_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthCreateIntegration():list() / client:NeonAuthCreateIntegration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthCreateIntegration(data)
  local EntityMod = require("entity.neon_auth_create_integration_entity")
  if data == nil then
    if self._neon_auth_create_integration == nil then
      self._neon_auth_create_integration = EntityMod.new(self, nil)
    end
    return self._neon_auth_create_integration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthCreateNewUser():list() / client:NeonAuthCreateNewUser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthCreateNewUser(data)
  local EntityMod = require("entity.neon_auth_create_new_user_entity")
  if data == nil then
    if self._neon_auth_create_new_user == nil then
      self._neon_auth_create_new_user = EntityMod.new(self, nil)
    end
    return self._neon_auth_create_new_user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthEmailAndPasswordConfig():list() / client:NeonAuthEmailAndPasswordConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthEmailAndPasswordConfig(data)
  local EntityMod = require("entity.neon_auth_email_and_password_config_entity")
  if data == nil then
    if self._neon_auth_email_and_password_config == nil then
      self._neon_auth_email_and_password_config = EntityMod.new(self, nil)
    end
    return self._neon_auth_email_and_password_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthEmailServerConfig():list() / client:NeonAuthEmailServerConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthEmailServerConfig(data)
  local EntityMod = require("entity.neon_auth_email_server_config_entity")
  if data == nil then
    if self._neon_auth_email_server_config == nil then
      self._neon_auth_email_server_config = EntityMod.new(self, nil)
    end
    return self._neon_auth_email_server_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthIntegration():list() / client:NeonAuthIntegration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthIntegration(data)
  local EntityMod = require("entity.neon_auth_integration_entity")
  if data == nil then
    if self._neon_auth_integration == nil then
      self._neon_auth_integration = EntityMod.new(self, nil)
    end
    return self._neon_auth_integration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthMagicLinkConfig():list() / client:NeonAuthMagicLinkConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthMagicLinkConfig(data)
  local EntityMod = require("entity.neon_auth_magic_link_config_entity")
  if data == nil then
    if self._neon_auth_magic_link_config == nil then
      self._neon_auth_magic_link_config = EntityMod.new(self, nil)
    end
    return self._neon_auth_magic_link_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthOauthProvider():list() / client:NeonAuthOauthProvider():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthOauthProvider(data)
  local EntityMod = require("entity.neon_auth_oauth_provider_entity")
  if data == nil then
    if self._neon_auth_oauth_provider == nil then
      self._neon_auth_oauth_provider = EntityMod.new(self, nil)
    end
    return self._neon_auth_oauth_provider
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthOrganizationConfig():list() / client:NeonAuthOrganizationConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthOrganizationConfig(data)
  local EntityMod = require("entity.neon_auth_organization_config_entity")
  if data == nil then
    if self._neon_auth_organization_config == nil then
      self._neon_auth_organization_config = EntityMod.new(self, nil)
    end
    return self._neon_auth_organization_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthPhoneNumberConfig():list() / client:NeonAuthPhoneNumberConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthPhoneNumberConfig(data)
  local EntityMod = require("entity.neon_auth_phone_number_config_entity")
  if data == nil then
    if self._neon_auth_phone_number_config == nil then
      self._neon_auth_phone_number_config = EntityMod.new(self, nil)
    end
    return self._neon_auth_phone_number_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthPluginConfig():list() / client:NeonAuthPluginConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthPluginConfig(data)
  local EntityMod = require("entity.neon_auth_plugin_config_entity")
  if data == nil then
    if self._neon_auth_plugin_config == nil then
      self._neon_auth_plugin_config = EntityMod.new(self, nil)
    end
    return self._neon_auth_plugin_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthRedirectUriWhitelistDomain():list() / client:NeonAuthRedirectUriWhitelistDomain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthRedirectUriWhitelistDomain(data)
  local EntityMod = require("entity.neon_auth_redirect_uri_whitelist_domain_entity")
  if data == nil then
    if self._neon_auth_redirect_uri_whitelist_domain == nil then
      self._neon_auth_redirect_uri_whitelist_domain = EntityMod.new(self, nil)
    end
    return self._neon_auth_redirect_uri_whitelist_domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthTransferAuthProviderProject():list() / client:NeonAuthTransferAuthProviderProject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthTransferAuthProviderProject(data)
  local EntityMod = require("entity.neon_auth_transfer_auth_provider_project_entity")
  if data == nil then
    if self._neon_auth_transfer_auth_provider_project == nil then
      self._neon_auth_transfer_auth_provider_project = EntityMod.new(self, nil)
    end
    return self._neon_auth_transfer_auth_provider_project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonAuthWebhookConfig():list() / client:NeonAuthWebhookConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonAuthWebhookConfig(data)
  local EntityMod = require("entity.neon_auth_webhook_config_entity")
  if data == nil then
    if self._neon_auth_webhook_config == nil then
      self._neon_auth_webhook_config = EntityMod.new(self, nil)
    end
    return self._neon_auth_webhook_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonFunction():list() / client:NeonFunction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonFunction(data)
  local EntityMod = require("entity.neon_function_entity")
  if data == nil then
    if self._neon_function == nil then
      self._neon_function = EntityMod.new(self, nil)
    end
    return self._neon_function
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NeonFunctionDeployment():list() / client:NeonFunctionDeployment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:NeonFunctionDeployment(data)
  local EntityMod = require("entity.neon_function_deployment_entity")
  if data == nil then
    if self._neon_function_deployment == nil then
      self._neon_function_deployment = EntityMod.new(self, nil)
    end
    return self._neon_function_deployment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Operation():list() / client:Operation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Operation(data)
  local EntityMod = require("entity.operation_entity")
  if data == nil then
    if self._operation == nil then
      self._operation = EntityMod.new(self, nil)
    end
    return self._operation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrgApiKeyCreate():list() / client:OrgApiKeyCreate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:OrgApiKeyCreate(data)
  local EntityMod = require("entity.org_api_key_create_entity")
  if data == nil then
    if self._org_api_key_create == nil then
      self._org_api_key_create = EntityMod.new(self, nil)
    end
    return self._org_api_key_create
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrgApiKeyRevoke():list() / client:OrgApiKeyRevoke():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:OrgApiKeyRevoke(data)
  local EntityMod = require("entity.org_api_key_revoke_entity")
  if data == nil then
    if self._org_api_key_revoke == nil then
      self._org_api_key_revoke = EntityMod.new(self, nil)
    end
    return self._org_api_key_revoke
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrgApiKeysListResponseItem():list() / client:OrgApiKeysListResponseItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:OrgApiKeysListResponseItem(data)
  local EntityMod = require("entity.org_api_keys_list_response_item_entity")
  if data == nil then
    if self._org_api_keys_list_response_item == nil then
      self._org_api_keys_list_response_item = EntityMod.new(self, nil)
    end
    return self._org_api_keys_list_response_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Organization():list() / client:Organization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Organization(data)
  local EntityMod = require("entity.organization_entity")
  if data == nil then
    if self._organization == nil then
      self._organization = EntityMod.new(self, nil)
    end
    return self._organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationInvitation():list() / client:OrganizationInvitation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:OrganizationInvitation(data)
  local EntityMod = require("entity.organization_invitation_entity")
  if data == nil then
    if self._organization_invitation == nil then
      self._organization_invitation = EntityMod.new(self, nil)
    end
    return self._organization_invitation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Presign():list() / client:Presign():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Presign(data)
  local EntityMod = require("entity.presign_entity")
  if data == nil then
    if self._presign == nil then
      self._presign = EntityMod.new(self, nil)
    end
    return self._presign
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Project():list() / client:Project():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Project(data)
  local EntityMod = require("entity.project_entity")
  if data == nil then
    if self._project == nil then
      self._project = EntityMod.new(self, nil)
    end
    return self._project
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectBranchLogField():list() / client:ProjectBranchLogField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:ProjectBranchLogField(data)
  local EntityMod = require("entity.project_branch_log_field_entity")
  if data == nil then
    if self._project_branch_log_field == nil then
      self._project_branch_log_field = EntityMod.new(self, nil)
    end
    return self._project_branch_log_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectBranchLogFieldValue():list() / client:ProjectBranchLogFieldValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:ProjectBranchLogFieldValue(data)
  local EntityMod = require("entity.project_branch_log_field_value_entity")
  if data == nil then
    if self._project_branch_log_field_value == nil then
      self._project_branch_log_field_value = EntityMod.new(self, nil)
    end
    return self._project_branch_log_field_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectBranchLogsQuery():list() / client:ProjectBranchLogsQuery():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:ProjectBranchLogsQuery(data)
  local EntityMod = require("entity.project_branch_logs_query_entity")
  if data == nil then
    if self._project_branch_logs_query == nil then
      self._project_branch_logs_query = EntityMod.new(self, nil)
    end
    return self._project_branch_logs_query
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectMember():list() / client:ProjectMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:ProjectMember(data)
  local EntityMod = require("entity.project_member_entity")
  if data == nil then
    if self._project_member == nil then
      self._project_member = EntityMod.new(self, nil)
    end
    return self._project_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectMemberRole():list() / client:ProjectMemberRole():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:ProjectMemberRole(data)
  local EntityMod = require("entity.project_member_role_entity")
  if data == nil then
    if self._project_member_role == nil then
      self._project_member_role = EntityMod.new(self, nil)
    end
    return self._project_member_role
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectPermission():list() / client:ProjectPermission():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:ProjectPermission(data)
  local EntityMod = require("entity.project_permission_entity")
  if data == nil then
    if self._project_permission == nil then
      self._project_permission = EntityMod.new(self, nil)
    end
    return self._project_permission
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectRecover():list() / client:ProjectRecover():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:ProjectRecover(data)
  local EntityMod = require("entity.project_recover_entity")
  if data == nil then
    if self._project_recover == nil then
      self._project_recover = EntityMod.new(self, nil)
    end
    return self._project_recover
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProjectTransferRequest():list() / client:ProjectTransferRequest():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:ProjectTransferRequest(data)
  local EntityMod = require("entity.project_transfer_request_entity")
  if data == nil then
    if self._project_transfer_request == nil then
      self._project_transfer_request = EntityMod.new(self, nil)
    end
    return self._project_transfer_request
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Region():list() / client:Region():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Region(data)
  local EntityMod = require("entity.region_entity")
  if data == nil then
    if self._region == nil then
      self._region = EntityMod.new(self, nil)
    end
    return self._region
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Role():list() / client:Role():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Role(data)
  local EntityMod = require("entity.role_entity")
  if data == nil then
    if self._role == nil then
      self._role = EntityMod.new(self, nil)
    end
    return self._role
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RoleOperation():list() / client:RoleOperation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:RoleOperation(data)
  local EntityMod = require("entity.role_operation_entity")
  if data == nil then
    if self._role_operation == nil then
      self._role_operation = EntityMod.new(self, nil)
    end
    return self._role_operation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RolePassword():list() / client:RolePassword():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:RolePassword(data)
  local EntityMod = require("entity.role_password_entity")
  if data == nil then
    if self._role_password == nil then
      self._role_password = EntityMod.new(self, nil)
    end
    return self._role_password
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SendNeonAuthTestEmail():list() / client:SendNeonAuthTestEmail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:SendNeonAuthTestEmail(data)
  local EntityMod = require("entity.send_neon_auth_test_email_entity")
  if data == nil then
    if self._send_neon_auth_test_email == nil then
      self._send_neon_auth_test_email = EntityMod.new(self, nil)
    end
    return self._send_neon_auth_test_email
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Snapshot():list() / client:Snapshot():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Snapshot(data)
  local EntityMod = require("entity.snapshot_entity")
  if data == nil then
    if self._snapshot == nil then
      self._snapshot = EntityMod.new(self, nil)
    end
    return self._snapshot
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SpendingLimit():list() / client:SpendingLimit():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:SpendingLimit(data)
  local EntityMod = require("entity.spending_limit_entity")
  if data == nil then
    if self._spending_limit == nil then
      self._spending_limit = EntityMod.new(self, nil)
    end
    return self._spending_limit
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Trigger():list() / client:Trigger():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:Trigger(data)
  local EntityMod = require("entity.trigger_entity")
  if data == nil then
    if self._trigger == nil then
      self._trigger = EntityMod.new(self, nil)
    end
    return self._trigger
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UpdateNeonAuthUserRole():list() / client:UpdateNeonAuthUserRole():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:UpdateNeonAuthUserRole(data)
  local EntityMod = require("entity.update_neon_auth_user_role_entity")
  if data == nil then
    if self._update_neon_auth_user_role == nil then
      self._update_neon_auth_user_role = EntityMod.new(self, nil)
    end
    return self._update_neon_auth_user_role
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:VpcEndpoint():list() / client:VpcEndpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function NeonSDK:VpcEndpoint(data)
  local EntityMod = require("entity.vpc_endpoint_entity")
  if data == nil then
    if self._vpc_endpoint == nil then
      self._vpc_endpoint = EntityMod.new(self, nil)
    end
    return self._vpc_endpoint
  end
  return EntityMod.new(self, data)
end




function NeonSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = NeonSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return NeonSDK
