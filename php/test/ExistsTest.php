<?php
declare(strict_types=1);

// Neon SDK exists test

require_once __DIR__ . '/../neon_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = NeonSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
