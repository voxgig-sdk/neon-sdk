<?php
declare(strict_types=1);

// Neon SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class NeonMakeContext
{
    public static function call(array $ctxmap, ?NeonContext $basectx): NeonContext
    {
        return new NeonContext($ctxmap, $basectx);
    }
}
