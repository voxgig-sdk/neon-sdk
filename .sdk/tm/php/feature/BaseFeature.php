<?php
declare(strict_types=1);

// Neon SDK base feature

class NeonBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(NeonContext $ctx, array $options): void {}
    public function PostConstruct(NeonContext $ctx): void {}
    public function PostConstructEntity(NeonContext $ctx): void {}
    public function SetData(NeonContext $ctx): void {}
    public function GetData(NeonContext $ctx): void {}
    public function GetMatch(NeonContext $ctx): void {}
    public function SetMatch(NeonContext $ctx): void {}
    public function PrePoint(NeonContext $ctx): void {}
    public function PreSpec(NeonContext $ctx): void {}
    public function PreRequest(NeonContext $ctx): void {}
    public function PreResponse(NeonContext $ctx): void {}
    public function PreResult(NeonContext $ctx): void {}
    public function PreDone(NeonContext $ctx): void {}
    public function PreUnexpected(NeonContext $ctx): void {}
}
