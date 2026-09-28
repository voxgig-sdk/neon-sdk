<?php
declare(strict_types=1);

// Neon SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class NeonSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new NeonUtility();
        $this->_utility = $utility;

        $config = NeonConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = NeonHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = NeonHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!NeonFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, NeonFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return NeonUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = NeonHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = NeonHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = NeonHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new NeonSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new NeonError($op . "_allow",
                "NeonSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = NeonHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = NeonHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new NeonError("graphql_error",
                "NeonSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_anonymize = null;

    // Canonical facade: $client->Anonymize()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->anonymize()
    // resolves here too.
    public function Anonymize($data = null)
    {
        require_once __DIR__ . '/entity/anonymize_entity.php';
        if ($data === null) {
            if ($this->_anonymize === null) {
                $this->_anonymize = new AnonymizeEntity($this, null);
            }
            return $this->_anonymize;
        }
        return new AnonymizeEntity($this, $data);
    }


    private $_anonymized_branch_status = null;

    // Canonical facade: $client->AnonymizedBranchStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->anonymized_branch_status()
    // resolves here too.
    public function AnonymizedBranchStatus($data = null)
    {
        require_once __DIR__ . '/entity/anonymized_branch_status_entity.php';
        if ($data === null) {
            if ($this->_anonymized_branch_status === null) {
                $this->_anonymized_branch_status = new AnonymizedBranchStatusEntity($this, null);
            }
            return $this->_anonymized_branch_status;
        }
        return new AnonymizedBranchStatusEntity($this, $data);
    }


    private $_api_key = null;

    // Canonical facade: $client->ApiKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_key()
    // resolves here too.
    public function ApiKey($data = null)
    {
        require_once __DIR__ . '/entity/api_key_entity.php';
        if ($data === null) {
            if ($this->_api_key === null) {
                $this->_api_key = new ApiKeyEntity($this, null);
            }
            return $this->_api_key;
        }
        return new ApiKeyEntity($this, $data);
    }


    private $_auth = null;

    // Canonical facade: $client->Auth()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->auth()
    // resolves here too.
    public function Auth($data = null)
    {
        require_once __DIR__ . '/entity/auth_entity.php';
        if ($data === null) {
            if ($this->_auth === null) {
                $this->_auth = new AuthEntity($this, null);
            }
            return $this->_auth;
        }
        return new AuthEntity($this, $data);
    }


    private $_auth_legacy = null;

    // Canonical facade: $client->AuthLegacy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->auth_legacy()
    // resolves here too.
    public function AuthLegacy($data = null)
    {
        require_once __DIR__ . '/entity/auth_legacy_entity.php';
        if ($data === null) {
            if ($this->_auth_legacy === null) {
                $this->_auth_legacy = new AuthLegacyEntity($this, null);
            }
            return $this->_auth_legacy;
        }
        return new AuthLegacyEntity($this, $data);
    }


    private $_available_preload_library = null;

    // Canonical facade: $client->AvailablePreloadLibrary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->available_preload_library()
    // resolves here too.
    public function AvailablePreloadLibrary($data = null)
    {
        require_once __DIR__ . '/entity/available_preload_library_entity.php';
        if ($data === null) {
            if ($this->_available_preload_library === null) {
                $this->_available_preload_library = new AvailablePreloadLibraryEntity($this, null);
            }
            return $this->_available_preload_library;
        }
        return new AvailablePreloadLibraryEntity($this, $data);
    }


    private $_backup_schedule = null;

    // Canonical facade: $client->BackupSchedule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->backup_schedule()
    // resolves here too.
    public function BackupSchedule($data = null)
    {
        require_once __DIR__ . '/entity/backup_schedule_entity.php';
        if ($data === null) {
            if ($this->_backup_schedule === null) {
                $this->_backup_schedule = new BackupScheduleEntity($this, null);
            }
            return $this->_backup_schedule;
        }
        return new BackupScheduleEntity($this, $data);
    }


    private $_branch = null;

    // Canonical facade: $client->Branch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch()
    // resolves here too.
    public function Branch($data = null)
    {
        require_once __DIR__ . '/entity/branch_entity.php';
        if ($data === null) {
            if ($this->_branch === null) {
                $this->_branch = new BranchEntity($this, null);
            }
            return $this->_branch;
        }
        return new BranchEntity($this, $data);
    }


    private $_branch_ai_gateway = null;

    // Canonical facade: $client->BranchAiGateway()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch_ai_gateway()
    // resolves here too.
    public function BranchAiGateway($data = null)
    {
        require_once __DIR__ . '/entity/branch_ai_gateway_entity.php';
        if ($data === null) {
            if ($this->_branch_ai_gateway === null) {
                $this->_branch_ai_gateway = new BranchAiGatewayEntity($this, null);
            }
            return $this->_branch_ai_gateway;
        }
        return new BranchAiGatewayEntity($this, $data);
    }


    private $_branch_operation = null;

    // Canonical facade: $client->BranchOperation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch_operation()
    // resolves here too.
    public function BranchOperation($data = null)
    {
        require_once __DIR__ . '/entity/branch_operation_entity.php';
        if ($data === null) {
            if ($this->_branch_operation === null) {
                $this->_branch_operation = new BranchOperationEntity($this, null);
            }
            return $this->_branch_operation;
        }
        return new BranchOperationEntity($this, $data);
    }


    private $_branch_schema = null;

    // Canonical facade: $client->BranchSchema()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch_schema()
    // resolves here too.
    public function BranchSchema($data = null)
    {
        require_once __DIR__ . '/entity/branch_schema_entity.php';
        if ($data === null) {
            if ($this->_branch_schema === null) {
                $this->_branch_schema = new BranchSchemaEntity($this, null);
            }
            return $this->_branch_schema;
        }
        return new BranchSchemaEntity($this, $data);
    }


    private $_branch_schema_compare = null;

    // Canonical facade: $client->BranchSchemaCompare()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch_schema_compare()
    // resolves here too.
    public function BranchSchemaCompare($data = null)
    {
        require_once __DIR__ . '/entity/branch_schema_compare_entity.php';
        if ($data === null) {
            if ($this->_branch_schema_compare === null) {
                $this->_branch_schema_compare = new BranchSchemaCompareEntity($this, null);
            }
            return $this->_branch_schema_compare;
        }
        return new BranchSchemaCompareEntity($this, $data);
    }


    private $_branch_storage = null;

    // Canonical facade: $client->BranchStorage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->branch_storage()
    // resolves here too.
    public function BranchStorage($data = null)
    {
        require_once __DIR__ . '/entity/branch_storage_entity.php';
        if ($data === null) {
            if ($this->_branch_storage === null) {
                $this->_branch_storage = new BranchStorageEntity($this, null);
            }
            return $this->_branch_storage;
        }
        return new BranchStorageEntity($this, $data);
    }


    private $_bucket = null;

    // Canonical facade: $client->Bucket()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bucket()
    // resolves here too.
    public function Bucket($data = null)
    {
        require_once __DIR__ . '/entity/bucket_entity.php';
        if ($data === null) {
            if ($this->_bucket === null) {
                $this->_bucket = new BucketEntity($this, null);
            }
            return $this->_bucket;
        }
        return new BucketEntity($this, $data);
    }


    private $_bucket_objects_list = null;

    // Canonical facade: $client->BucketObjectsList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bucket_objects_list()
    // resolves here too.
    public function BucketObjectsList($data = null)
    {
        require_once __DIR__ . '/entity/bucket_objects_list_entity.php';
        if ($data === null) {
            if ($this->_bucket_objects_list === null) {
                $this->_bucket_objects_list = new BucketObjectsListEntity($this, null);
            }
            return $this->_bucket_objects_list;
        }
        return new BucketObjectsListEntity($this, $data);
    }


    private $_connection_uri = null;

    // Canonical facade: $client->ConnectionUri()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->connection_uri()
    // resolves here too.
    public function ConnectionUri($data = null)
    {
        require_once __DIR__ . '/entity/connection_uri_entity.php';
        if ($data === null) {
            if ($this->_connection_uri === null) {
                $this->_connection_uri = new ConnectionUriEntity($this, null);
            }
            return $this->_connection_uri;
        }
        return new ConnectionUriEntity($this, $data);
    }


    private $_consumption = null;

    // Canonical facade: $client->Consumption()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->consumption()
    // resolves here too.
    public function Consumption($data = null)
    {
        require_once __DIR__ . '/entity/consumption_entity.php';
        if ($data === null) {
            if ($this->_consumption === null) {
                $this->_consumption = new ConsumptionEntity($this, null);
            }
            return $this->_consumption;
        }
        return new ConsumptionEntity($this, $data);
    }


    private $_create_credential = null;

    // Canonical facade: $client->CreateCredential()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_credential()
    // resolves here too.
    public function CreateCredential($data = null)
    {
        require_once __DIR__ . '/entity/create_credential_entity.php';
        if ($data === null) {
            if ($this->_create_credential === null) {
                $this->_create_credential = new CreateCredentialEntity($this, null);
            }
            return $this->_create_credential;
        }
        return new CreateCredentialEntity($this, $data);
    }


    private $_credential = null;

    // Canonical facade: $client->Credential()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->credential()
    // resolves here too.
    public function Credential($data = null)
    {
        require_once __DIR__ . '/entity/credential_entity.php';
        if ($data === null) {
            if ($this->_credential === null) {
                $this->_credential = new CredentialEntity($this, null);
            }
            return $this->_credential;
        }
        return new CredentialEntity($this, $data);
    }


    private $_current_user_info = null;

    // Canonical facade: $client->CurrentUserInfo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->current_user_info()
    // resolves here too.
    public function CurrentUserInfo($data = null)
    {
        require_once __DIR__ . '/entity/current_user_info_entity.php';
        if ($data === null) {
            if ($this->_current_user_info === null) {
                $this->_current_user_info = new CurrentUserInfoEntity($this, null);
            }
            return $this->_current_user_info;
        }
        return new CurrentUserInfoEntity($this, $data);
    }


    private $_custom_domain = null;

    // Canonical facade: $client->CustomDomain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_domain()
    // resolves here too.
    public function CustomDomain($data = null)
    {
        require_once __DIR__ . '/entity/custom_domain_entity.php';
        if ($data === null) {
            if ($this->_custom_domain === null) {
                $this->_custom_domain = new CustomDomainEntity($this, null);
            }
            return $this->_custom_domain;
        }
        return new CustomDomainEntity($this, $data);
    }


    private $_data_api = null;

    // Canonical facade: $client->DataApi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data_api()
    // resolves here too.
    public function DataApi($data = null)
    {
        require_once __DIR__ . '/entity/data_api_entity.php';
        if ($data === null) {
            if ($this->_data_api === null) {
                $this->_data_api = new DataApiEntity($this, null);
            }
            return $this->_data_api;
        }
        return new DataApiEntity($this, $data);
    }


    private $_database = null;

    // Canonical facade: $client->Database()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->database()
    // resolves here too.
    public function Database($data = null)
    {
        require_once __DIR__ . '/entity/database_entity.php';
        if ($data === null) {
            if ($this->_database === null) {
                $this->_database = new DatabaseEntity($this, null);
            }
            return $this->_database;
        }
        return new DatabaseEntity($this, $data);
    }


    private $_email_provider = null;

    // Canonical facade: $client->EmailProvider()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email_provider()
    // resolves here too.
    public function EmailProvider($data = null)
    {
        require_once __DIR__ . '/entity/email_provider_entity.php';
        if ($data === null) {
            if ($this->_email_provider === null) {
                $this->_email_provider = new EmailProviderEntity($this, null);
            }
            return $this->_email_provider;
        }
        return new EmailProviderEntity($this, $data);
    }


    private $_email_server = null;

    // Canonical facade: $client->EmailServer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email_server()
    // resolves here too.
    public function EmailServer($data = null)
    {
        require_once __DIR__ . '/entity/email_server_entity.php';
        if ($data === null) {
            if ($this->_email_server === null) {
                $this->_email_server = new EmailServerEntity($this, null);
            }
            return $this->_email_server;
        }
        return new EmailServerEntity($this, $data);
    }


    private $_empty = null;

    // Canonical facade: $client->Empty()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->empty()
    // resolves here too.
    public function Empty($data = null)
    {
        require_once __DIR__ . '/entity/empty_entity.php';
        if ($data === null) {
            if ($this->_empty === null) {
                $this->_empty = new EmptyEntity($this, null);
            }
            return $this->_empty;
        }
        return new EmptyEntity($this, $data);
    }


    private $_endpoint = null;

    // Canonical facade: $client->Endpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->endpoint()
    // resolves here too.
    public function Endpoint($data = null)
    {
        require_once __DIR__ . '/entity/endpoint_entity.php';
        if ($data === null) {
            if ($this->_endpoint === null) {
                $this->_endpoint = new EndpointEntity($this, null);
            }
            return $this->_endpoint;
        }
        return new EndpointEntity($this, $data);
    }


    private $_endpoint_operation = null;

    // Canonical facade: $client->EndpointOperation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->endpoint_operation()
    // resolves here too.
    public function EndpointOperation($data = null)
    {
        require_once __DIR__ . '/entity/endpoint_operation_entity.php';
        if ($data === null) {
            if ($this->_endpoint_operation === null) {
                $this->_endpoint_operation = new EndpointOperationEntity($this, null);
            }
            return $this->_endpoint_operation;
        }
        return new EndpointOperationEntity($this, $data);
    }


    private $_function = null;

    // Canonical facade: $client->Function()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->function()
    // resolves here too.
    public function Function($data = null)
    {
        require_once __DIR__ . '/entity/function_entity.php';
        if ($data === null) {
            if ($this->_function === null) {
                $this->_function = new FunctionEntity($this, null);
            }
            return $this->_function;
        }
        return new FunctionEntity($this, $data);
    }


    private $_jwk = null;

    // Canonical facade: $client->Jwk()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->jwk()
    // resolves here too.
    public function Jwk($data = null)
    {
        require_once __DIR__ . '/entity/jwk_entity.php';
        if ($data === null) {
            if ($this->_jwk === null) {
                $this->_jwk = new JwkEntity($this, null);
            }
            return $this->_jwk;
        }
        return new JwkEntity($this, $data);
    }


    private $_masking_rule = null;

    // Canonical facade: $client->MaskingRule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->masking_rule()
    // resolves here too.
    public function MaskingRule($data = null)
    {
        require_once __DIR__ . '/entity/masking_rule_entity.php';
        if ($data === null) {
            if ($this->_masking_rule === null) {
                $this->_masking_rule = new MaskingRuleEntity($this, null);
            }
            return $this->_masking_rule;
        }
        return new MaskingRuleEntity($this, $data);
    }


    private $_member = null;

    // Canonical facade: $client->Member()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->member()
    // resolves here too.
    public function Member($data = null)
    {
        require_once __DIR__ . '/entity/member_entity.php';
        if ($data === null) {
            if ($this->_member === null) {
                $this->_member = new MemberEntity($this, null);
            }
            return $this->_member;
        }
        return new MemberEntity($this, $data);
    }


    private $_neon_auth_allow_localhost = null;

    // Canonical facade: $client->NeonAuthAllowLocalhost()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_allow_localhost()
    // resolves here too.
    public function NeonAuthAllowLocalhost($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_allow_localhost_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_allow_localhost === null) {
                $this->_neon_auth_allow_localhost = new NeonAuthAllowLocalhostEntity($this, null);
            }
            return $this->_neon_auth_allow_localhost;
        }
        return new NeonAuthAllowLocalhostEntity($this, $data);
    }


    private $_neon_auth_config = null;

    // Canonical facade: $client->NeonAuthConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_config()
    // resolves here too.
    public function NeonAuthConfig($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_config_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_config === null) {
                $this->_neon_auth_config = new NeonAuthConfigEntity($this, null);
            }
            return $this->_neon_auth_config;
        }
        return new NeonAuthConfigEntity($this, $data);
    }


    private $_neon_auth_create_integration = null;

    // Canonical facade: $client->NeonAuthCreateIntegration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_create_integration()
    // resolves here too.
    public function NeonAuthCreateIntegration($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_create_integration_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_create_integration === null) {
                $this->_neon_auth_create_integration = new NeonAuthCreateIntegrationEntity($this, null);
            }
            return $this->_neon_auth_create_integration;
        }
        return new NeonAuthCreateIntegrationEntity($this, $data);
    }


    private $_neon_auth_create_new_user = null;

    // Canonical facade: $client->NeonAuthCreateNewUser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_create_new_user()
    // resolves here too.
    public function NeonAuthCreateNewUser($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_create_new_user_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_create_new_user === null) {
                $this->_neon_auth_create_new_user = new NeonAuthCreateNewUserEntity($this, null);
            }
            return $this->_neon_auth_create_new_user;
        }
        return new NeonAuthCreateNewUserEntity($this, $data);
    }


    private $_neon_auth_email_and_password_config = null;

    // Canonical facade: $client->NeonAuthEmailAndPasswordConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_email_and_password_config()
    // resolves here too.
    public function NeonAuthEmailAndPasswordConfig($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_email_and_password_config_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_email_and_password_config === null) {
                $this->_neon_auth_email_and_password_config = new NeonAuthEmailAndPasswordConfigEntity($this, null);
            }
            return $this->_neon_auth_email_and_password_config;
        }
        return new NeonAuthEmailAndPasswordConfigEntity($this, $data);
    }


    private $_neon_auth_email_server_config = null;

    // Canonical facade: $client->NeonAuthEmailServerConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_email_server_config()
    // resolves here too.
    public function NeonAuthEmailServerConfig($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_email_server_config_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_email_server_config === null) {
                $this->_neon_auth_email_server_config = new NeonAuthEmailServerConfigEntity($this, null);
            }
            return $this->_neon_auth_email_server_config;
        }
        return new NeonAuthEmailServerConfigEntity($this, $data);
    }


    private $_neon_auth_integration = null;

    // Canonical facade: $client->NeonAuthIntegration()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_integration()
    // resolves here too.
    public function NeonAuthIntegration($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_integration_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_integration === null) {
                $this->_neon_auth_integration = new NeonAuthIntegrationEntity($this, null);
            }
            return $this->_neon_auth_integration;
        }
        return new NeonAuthIntegrationEntity($this, $data);
    }


    private $_neon_auth_magic_link_config = null;

    // Canonical facade: $client->NeonAuthMagicLinkConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_magic_link_config()
    // resolves here too.
    public function NeonAuthMagicLinkConfig($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_magic_link_config_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_magic_link_config === null) {
                $this->_neon_auth_magic_link_config = new NeonAuthMagicLinkConfigEntity($this, null);
            }
            return $this->_neon_auth_magic_link_config;
        }
        return new NeonAuthMagicLinkConfigEntity($this, $data);
    }


    private $_neon_auth_oauth_provider = null;

    // Canonical facade: $client->NeonAuthOauthProvider()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_oauth_provider()
    // resolves here too.
    public function NeonAuthOauthProvider($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_oauth_provider_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_oauth_provider === null) {
                $this->_neon_auth_oauth_provider = new NeonAuthOauthProviderEntity($this, null);
            }
            return $this->_neon_auth_oauth_provider;
        }
        return new NeonAuthOauthProviderEntity($this, $data);
    }


    private $_neon_auth_organization_config = null;

    // Canonical facade: $client->NeonAuthOrganizationConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_organization_config()
    // resolves here too.
    public function NeonAuthOrganizationConfig($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_organization_config_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_organization_config === null) {
                $this->_neon_auth_organization_config = new NeonAuthOrganizationConfigEntity($this, null);
            }
            return $this->_neon_auth_organization_config;
        }
        return new NeonAuthOrganizationConfigEntity($this, $data);
    }


    private $_neon_auth_phone_number_config = null;

    // Canonical facade: $client->NeonAuthPhoneNumberConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_phone_number_config()
    // resolves here too.
    public function NeonAuthPhoneNumberConfig($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_phone_number_config_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_phone_number_config === null) {
                $this->_neon_auth_phone_number_config = new NeonAuthPhoneNumberConfigEntity($this, null);
            }
            return $this->_neon_auth_phone_number_config;
        }
        return new NeonAuthPhoneNumberConfigEntity($this, $data);
    }


    private $_neon_auth_plugin_config = null;

    // Canonical facade: $client->NeonAuthPluginConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_plugin_config()
    // resolves here too.
    public function NeonAuthPluginConfig($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_plugin_config_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_plugin_config === null) {
                $this->_neon_auth_plugin_config = new NeonAuthPluginConfigEntity($this, null);
            }
            return $this->_neon_auth_plugin_config;
        }
        return new NeonAuthPluginConfigEntity($this, $data);
    }


    private $_neon_auth_redirect_uri_whitelist_domain = null;

    // Canonical facade: $client->NeonAuthRedirectUriWhitelistDomain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_redirect_uri_whitelist_domain()
    // resolves here too.
    public function NeonAuthRedirectUriWhitelistDomain($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_redirect_uri_whitelist_domain_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_redirect_uri_whitelist_domain === null) {
                $this->_neon_auth_redirect_uri_whitelist_domain = new NeonAuthRedirectUriWhitelistDomainEntity($this, null);
            }
            return $this->_neon_auth_redirect_uri_whitelist_domain;
        }
        return new NeonAuthRedirectUriWhitelistDomainEntity($this, $data);
    }


    private $_neon_auth_transfer_auth_provider_project = null;

    // Canonical facade: $client->NeonAuthTransferAuthProviderProject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_transfer_auth_provider_project()
    // resolves here too.
    public function NeonAuthTransferAuthProviderProject($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_transfer_auth_provider_project_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_transfer_auth_provider_project === null) {
                $this->_neon_auth_transfer_auth_provider_project = new NeonAuthTransferAuthProviderProjectEntity($this, null);
            }
            return $this->_neon_auth_transfer_auth_provider_project;
        }
        return new NeonAuthTransferAuthProviderProjectEntity($this, $data);
    }


    private $_neon_auth_webhook_config = null;

    // Canonical facade: $client->NeonAuthWebhookConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_auth_webhook_config()
    // resolves here too.
    public function NeonAuthWebhookConfig($data = null)
    {
        require_once __DIR__ . '/entity/neon_auth_webhook_config_entity.php';
        if ($data === null) {
            if ($this->_neon_auth_webhook_config === null) {
                $this->_neon_auth_webhook_config = new NeonAuthWebhookConfigEntity($this, null);
            }
            return $this->_neon_auth_webhook_config;
        }
        return new NeonAuthWebhookConfigEntity($this, $data);
    }


    private $_neon_function = null;

    // Canonical facade: $client->NeonFunction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_function()
    // resolves here too.
    public function NeonFunction($data = null)
    {
        require_once __DIR__ . '/entity/neon_function_entity.php';
        if ($data === null) {
            if ($this->_neon_function === null) {
                $this->_neon_function = new NeonFunctionEntity($this, null);
            }
            return $this->_neon_function;
        }
        return new NeonFunctionEntity($this, $data);
    }


    private $_neon_function_deployment = null;

    // Canonical facade: $client->NeonFunctionDeployment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->neon_function_deployment()
    // resolves here too.
    public function NeonFunctionDeployment($data = null)
    {
        require_once __DIR__ . '/entity/neon_function_deployment_entity.php';
        if ($data === null) {
            if ($this->_neon_function_deployment === null) {
                $this->_neon_function_deployment = new NeonFunctionDeploymentEntity($this, null);
            }
            return $this->_neon_function_deployment;
        }
        return new NeonFunctionDeploymentEntity($this, $data);
    }


    private $_operation = null;

    // Canonical facade: $client->Operation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->operation()
    // resolves here too.
    public function Operation($data = null)
    {
        require_once __DIR__ . '/entity/operation_entity.php';
        if ($data === null) {
            if ($this->_operation === null) {
                $this->_operation = new OperationEntity($this, null);
            }
            return $this->_operation;
        }
        return new OperationEntity($this, $data);
    }


    private $_org_api_key_create = null;

    // Canonical facade: $client->OrgApiKeyCreate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->org_api_key_create()
    // resolves here too.
    public function OrgApiKeyCreate($data = null)
    {
        require_once __DIR__ . '/entity/org_api_key_create_entity.php';
        if ($data === null) {
            if ($this->_org_api_key_create === null) {
                $this->_org_api_key_create = new OrgApiKeyCreateEntity($this, null);
            }
            return $this->_org_api_key_create;
        }
        return new OrgApiKeyCreateEntity($this, $data);
    }


    private $_org_api_key_revoke = null;

    // Canonical facade: $client->OrgApiKeyRevoke()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->org_api_key_revoke()
    // resolves here too.
    public function OrgApiKeyRevoke($data = null)
    {
        require_once __DIR__ . '/entity/org_api_key_revoke_entity.php';
        if ($data === null) {
            if ($this->_org_api_key_revoke === null) {
                $this->_org_api_key_revoke = new OrgApiKeyRevokeEntity($this, null);
            }
            return $this->_org_api_key_revoke;
        }
        return new OrgApiKeyRevokeEntity($this, $data);
    }


    private $_org_api_keys_list_response_item = null;

    // Canonical facade: $client->OrgApiKeysListResponseItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->org_api_keys_list_response_item()
    // resolves here too.
    public function OrgApiKeysListResponseItem($data = null)
    {
        require_once __DIR__ . '/entity/org_api_keys_list_response_item_entity.php';
        if ($data === null) {
            if ($this->_org_api_keys_list_response_item === null) {
                $this->_org_api_keys_list_response_item = new OrgApiKeysListResponseItemEntity($this, null);
            }
            return $this->_org_api_keys_list_response_item;
        }
        return new OrgApiKeysListResponseItemEntity($this, $data);
    }


    private $_organization = null;

    // Canonical facade: $client->Organization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization()
    // resolves here too.
    public function Organization($data = null)
    {
        require_once __DIR__ . '/entity/organization_entity.php';
        if ($data === null) {
            if ($this->_organization === null) {
                $this->_organization = new OrganizationEntity($this, null);
            }
            return $this->_organization;
        }
        return new OrganizationEntity($this, $data);
    }


    private $_organization_invitation = null;

    // Canonical facade: $client->OrganizationInvitation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_invitation()
    // resolves here too.
    public function OrganizationInvitation($data = null)
    {
        require_once __DIR__ . '/entity/organization_invitation_entity.php';
        if ($data === null) {
            if ($this->_organization_invitation === null) {
                $this->_organization_invitation = new OrganizationInvitationEntity($this, null);
            }
            return $this->_organization_invitation;
        }
        return new OrganizationInvitationEntity($this, $data);
    }


    private $_presign = null;

    // Canonical facade: $client->Presign()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->presign()
    // resolves here too.
    public function Presign($data = null)
    {
        require_once __DIR__ . '/entity/presign_entity.php';
        if ($data === null) {
            if ($this->_presign === null) {
                $this->_presign = new PresignEntity($this, null);
            }
            return $this->_presign;
        }
        return new PresignEntity($this, $data);
    }


    private $_project = null;

    // Canonical facade: $client->Project()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project()
    // resolves here too.
    public function Project($data = null)
    {
        require_once __DIR__ . '/entity/project_entity.php';
        if ($data === null) {
            if ($this->_project === null) {
                $this->_project = new ProjectEntity($this, null);
            }
            return $this->_project;
        }
        return new ProjectEntity($this, $data);
    }


    private $_project_branch_log_field = null;

    // Canonical facade: $client->ProjectBranchLogField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_branch_log_field()
    // resolves here too.
    public function ProjectBranchLogField($data = null)
    {
        require_once __DIR__ . '/entity/project_branch_log_field_entity.php';
        if ($data === null) {
            if ($this->_project_branch_log_field === null) {
                $this->_project_branch_log_field = new ProjectBranchLogFieldEntity($this, null);
            }
            return $this->_project_branch_log_field;
        }
        return new ProjectBranchLogFieldEntity($this, $data);
    }


    private $_project_branch_log_field_value = null;

    // Canonical facade: $client->ProjectBranchLogFieldValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_branch_log_field_value()
    // resolves here too.
    public function ProjectBranchLogFieldValue($data = null)
    {
        require_once __DIR__ . '/entity/project_branch_log_field_value_entity.php';
        if ($data === null) {
            if ($this->_project_branch_log_field_value === null) {
                $this->_project_branch_log_field_value = new ProjectBranchLogFieldValueEntity($this, null);
            }
            return $this->_project_branch_log_field_value;
        }
        return new ProjectBranchLogFieldValueEntity($this, $data);
    }


    private $_project_branch_logs_query = null;

    // Canonical facade: $client->ProjectBranchLogsQuery()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_branch_logs_query()
    // resolves here too.
    public function ProjectBranchLogsQuery($data = null)
    {
        require_once __DIR__ . '/entity/project_branch_logs_query_entity.php';
        if ($data === null) {
            if ($this->_project_branch_logs_query === null) {
                $this->_project_branch_logs_query = new ProjectBranchLogsQueryEntity($this, null);
            }
            return $this->_project_branch_logs_query;
        }
        return new ProjectBranchLogsQueryEntity($this, $data);
    }


    private $_project_member = null;

    // Canonical facade: $client->ProjectMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_member()
    // resolves here too.
    public function ProjectMember($data = null)
    {
        require_once __DIR__ . '/entity/project_member_entity.php';
        if ($data === null) {
            if ($this->_project_member === null) {
                $this->_project_member = new ProjectMemberEntity($this, null);
            }
            return $this->_project_member;
        }
        return new ProjectMemberEntity($this, $data);
    }


    private $_project_member_role = null;

    // Canonical facade: $client->ProjectMemberRole()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_member_role()
    // resolves here too.
    public function ProjectMemberRole($data = null)
    {
        require_once __DIR__ . '/entity/project_member_role_entity.php';
        if ($data === null) {
            if ($this->_project_member_role === null) {
                $this->_project_member_role = new ProjectMemberRoleEntity($this, null);
            }
            return $this->_project_member_role;
        }
        return new ProjectMemberRoleEntity($this, $data);
    }


    private $_project_permission = null;

    // Canonical facade: $client->ProjectPermission()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_permission()
    // resolves here too.
    public function ProjectPermission($data = null)
    {
        require_once __DIR__ . '/entity/project_permission_entity.php';
        if ($data === null) {
            if ($this->_project_permission === null) {
                $this->_project_permission = new ProjectPermissionEntity($this, null);
            }
            return $this->_project_permission;
        }
        return new ProjectPermissionEntity($this, $data);
    }


    private $_project_recover = null;

    // Canonical facade: $client->ProjectRecover()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_recover()
    // resolves here too.
    public function ProjectRecover($data = null)
    {
        require_once __DIR__ . '/entity/project_recover_entity.php';
        if ($data === null) {
            if ($this->_project_recover === null) {
                $this->_project_recover = new ProjectRecoverEntity($this, null);
            }
            return $this->_project_recover;
        }
        return new ProjectRecoverEntity($this, $data);
    }


    private $_project_transfer_request = null;

    // Canonical facade: $client->ProjectTransferRequest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->project_transfer_request()
    // resolves here too.
    public function ProjectTransferRequest($data = null)
    {
        require_once __DIR__ . '/entity/project_transfer_request_entity.php';
        if ($data === null) {
            if ($this->_project_transfer_request === null) {
                $this->_project_transfer_request = new ProjectTransferRequestEntity($this, null);
            }
            return $this->_project_transfer_request;
        }
        return new ProjectTransferRequestEntity($this, $data);
    }


    private $_region = null;

    // Canonical facade: $client->Region()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->region()
    // resolves here too.
    public function Region($data = null)
    {
        require_once __DIR__ . '/entity/region_entity.php';
        if ($data === null) {
            if ($this->_region === null) {
                $this->_region = new RegionEntity($this, null);
            }
            return $this->_region;
        }
        return new RegionEntity($this, $data);
    }


    private $_role = null;

    // Canonical facade: $client->Role()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->role()
    // resolves here too.
    public function Role($data = null)
    {
        require_once __DIR__ . '/entity/role_entity.php';
        if ($data === null) {
            if ($this->_role === null) {
                $this->_role = new RoleEntity($this, null);
            }
            return $this->_role;
        }
        return new RoleEntity($this, $data);
    }


    private $_role_operation = null;

    // Canonical facade: $client->RoleOperation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->role_operation()
    // resolves here too.
    public function RoleOperation($data = null)
    {
        require_once __DIR__ . '/entity/role_operation_entity.php';
        if ($data === null) {
            if ($this->_role_operation === null) {
                $this->_role_operation = new RoleOperationEntity($this, null);
            }
            return $this->_role_operation;
        }
        return new RoleOperationEntity($this, $data);
    }


    private $_role_password = null;

    // Canonical facade: $client->RolePassword()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->role_password()
    // resolves here too.
    public function RolePassword($data = null)
    {
        require_once __DIR__ . '/entity/role_password_entity.php';
        if ($data === null) {
            if ($this->_role_password === null) {
                $this->_role_password = new RolePasswordEntity($this, null);
            }
            return $this->_role_password;
        }
        return new RolePasswordEntity($this, $data);
    }


    private $_send_neon_auth_test_email = null;

    // Canonical facade: $client->SendNeonAuthTestEmail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->send_neon_auth_test_email()
    // resolves here too.
    public function SendNeonAuthTestEmail($data = null)
    {
        require_once __DIR__ . '/entity/send_neon_auth_test_email_entity.php';
        if ($data === null) {
            if ($this->_send_neon_auth_test_email === null) {
                $this->_send_neon_auth_test_email = new SendNeonAuthTestEmailEntity($this, null);
            }
            return $this->_send_neon_auth_test_email;
        }
        return new SendNeonAuthTestEmailEntity($this, $data);
    }


    private $_snapshot = null;

    // Canonical facade: $client->Snapshot()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->snapshot()
    // resolves here too.
    public function Snapshot($data = null)
    {
        require_once __DIR__ . '/entity/snapshot_entity.php';
        if ($data === null) {
            if ($this->_snapshot === null) {
                $this->_snapshot = new SnapshotEntity($this, null);
            }
            return $this->_snapshot;
        }
        return new SnapshotEntity($this, $data);
    }


    private $_spending_limit = null;

    // Canonical facade: $client->SpendingLimit()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->spending_limit()
    // resolves here too.
    public function SpendingLimit($data = null)
    {
        require_once __DIR__ . '/entity/spending_limit_entity.php';
        if ($data === null) {
            if ($this->_spending_limit === null) {
                $this->_spending_limit = new SpendingLimitEntity($this, null);
            }
            return $this->_spending_limit;
        }
        return new SpendingLimitEntity($this, $data);
    }


    private $_trigger = null;

    // Canonical facade: $client->Trigger()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->trigger()
    // resolves here too.
    public function Trigger($data = null)
    {
        require_once __DIR__ . '/entity/trigger_entity.php';
        if ($data === null) {
            if ($this->_trigger === null) {
                $this->_trigger = new TriggerEntity($this, null);
            }
            return $this->_trigger;
        }
        return new TriggerEntity($this, $data);
    }


    private $_update_neon_auth_user_role = null;

    // Canonical facade: $client->UpdateNeonAuthUserRole()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->update_neon_auth_user_role()
    // resolves here too.
    public function UpdateNeonAuthUserRole($data = null)
    {
        require_once __DIR__ . '/entity/update_neon_auth_user_role_entity.php';
        if ($data === null) {
            if ($this->_update_neon_auth_user_role === null) {
                $this->_update_neon_auth_user_role = new UpdateNeonAuthUserRoleEntity($this, null);
            }
            return $this->_update_neon_auth_user_role;
        }
        return new UpdateNeonAuthUserRoleEntity($this, $data);
    }


    private $_vpc_endpoint = null;

    // Canonical facade: $client->VpcEndpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->vpc_endpoint()
    // resolves here too.
    public function VpcEndpoint($data = null)
    {
        require_once __DIR__ . '/entity/vpc_endpoint_entity.php';
        if ($data === null) {
            if ($this->_vpc_endpoint === null) {
                $this->_vpc_endpoint = new VpcEndpointEntity($this, null);
            }
            return $this->_vpc_endpoint;
        }
        return new VpcEndpointEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new NeonSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
