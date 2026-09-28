# Neon SDK utility: make_context

from projectname_sdk.core.context import NeonContext


def make_context_util(ctxmap, basectx):
    return NeonContext(ctxmap, basectx)
