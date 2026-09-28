# Neon SDK exists test

import pytest
from neon_sdk import NeonSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = NeonSDK.test(None, None)
        assert testsdk is not None
