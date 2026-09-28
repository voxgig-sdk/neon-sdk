# Neon SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module NeonFeatures
  def self.make_feature(name)
    case name
    when "base"
      NeonBaseFeature.new
    when "debug"
      NeonDebugFeature.new
    when "idempotency"
      NeonIdempotencyFeature.new
    when "metrics"
      NeonMetricsFeature.new
    when "paging"
      NeonPagingFeature.new
    when "ratelimit"
      NeonRatelimitFeature.new
    when "retry"
      NeonRetryFeature.new
    when "test"
      NeonTestFeature.new
    when "timeout"
      NeonTimeoutFeature.new
    else
      NeonBaseFeature.new
    end
  end
end
