# Neon SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

NeonUtility.registrar = ->(u) {
  u.clean = NeonUtilities::Clean
  u.done = NeonUtilities::Done
  u.make_error = NeonUtilities::MakeError
  u.feature_add = NeonUtilities::FeatureAdd
  u.feature_hook = NeonUtilities::FeatureHook
  u.feature_init = NeonUtilities::FeatureInit
  u.fetcher = NeonUtilities::Fetcher
  u.make_fetch_def = NeonUtilities::MakeFetchDef
  u.make_context = NeonUtilities::MakeContext
  u.make_options = NeonUtilities::MakeOptions
  u.make_request = NeonUtilities::MakeRequest
  u.make_response = NeonUtilities::MakeResponse
  u.make_result = NeonUtilities::MakeResult
  u.make_point = NeonUtilities::MakePoint
  u.make_spec = NeonUtilities::MakeSpec
  u.make_url = NeonUtilities::MakeUrl
  u.param = NeonUtilities::Param
  u.prepare_auth = NeonUtilities::PrepareAuth
  u.prepare_body = NeonUtilities::PrepareBody
  u.prepare_headers = NeonUtilities::PrepareHeaders
  u.prepare_method = NeonUtilities::PrepareMethod
  u.prepare_params = NeonUtilities::PrepareParams
  u.prepare_path = NeonUtilities::PreparePath
  u.prepare_query = NeonUtilities::PrepareQuery
  u.graphql_body = NeonUtilities::GraphqlBody
  u.graphql_errors = NeonUtilities::GraphqlErrors
  u.result_basic = NeonUtilities::ResultBasic
  u.result_body = NeonUtilities::ResultBody
  u.result_headers = NeonUtilities::ResultHeaders
  u.transform_request = NeonUtilities::TransformRequest
  u.transform_response = NeonUtilities::TransformResponse
}
