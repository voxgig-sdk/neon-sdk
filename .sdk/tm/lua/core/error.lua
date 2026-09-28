-- Neon SDK error

local NeonError = {}
NeonError.__index = NeonError


function NeonError.new(code, msg, ctx)
  local self = setmetatable({}, NeonError)
  self.is_sdk_error = true
  self.sdk = "Neon"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function NeonError:error()
  return self.msg
end


function NeonError:__tostring()
  return self.msg
end


return NeonError
