# Neon SDK exists test

require "minitest/autorun"
require_relative "../Neon_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = NeonSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
