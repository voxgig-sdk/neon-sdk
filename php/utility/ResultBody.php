<?php
declare(strict_types=1);

// Neon SDK utility: result_body

class NeonResultBody
{
    public static function call(NeonContext $ctx): ?NeonResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
