<?php
declare(strict_types=1);

// Neon SDK utility: result_headers

class NeonResultHeaders
{
    public static function call(NeonContext $ctx): ?NeonResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
