package core

type NeonError struct {
	IsNeonError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewNeonError(code string, msg string, ctx *Context) *NeonError {
	return &NeonError{
		IsNeonError: true,
		Sdk:              "Neon",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *NeonError) Error() string {
	return e.Msg
}
