# Neon SDK utility: make_context
require_relative '../core/context'
module NeonUtilities
  MakeContext = ->(ctxmap, basectx) {
    NeonContext.new(ctxmap, basectx)
  }
end
