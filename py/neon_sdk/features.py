# Neon SDK feature factory

from neon_sdk.feature.base_feature import NeonBaseFeature
from neon_sdk.feature.debug_feature import NeonDebugFeature
from neon_sdk.feature.idempotency_feature import NeonIdempotencyFeature
from neon_sdk.feature.metrics_feature import NeonMetricsFeature
from neon_sdk.feature.paging_feature import NeonPagingFeature
from neon_sdk.feature.ratelimit_feature import NeonRatelimitFeature
from neon_sdk.feature.retry_feature import NeonRetryFeature
from neon_sdk.feature.test_feature import NeonTestFeature
from neon_sdk.feature.timeout_feature import NeonTimeoutFeature


_FEATURES = {
    "base": lambda: NeonBaseFeature(),
    "debug": lambda: NeonDebugFeature(),
    "idempotency": lambda: NeonIdempotencyFeature(),
    "metrics": lambda: NeonMetricsFeature(),
    "paging": lambda: NeonPagingFeature(),
    "ratelimit": lambda: NeonRatelimitFeature(),
    "retry": lambda: NeonRetryFeature(),
    "test": lambda: NeonTestFeature(),
    "timeout": lambda: NeonTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
