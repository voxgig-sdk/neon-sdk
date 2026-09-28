"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeonError = void 0;
class NeonError extends Error {
    isNeonError = true;
    sdk = 'Neon';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.NeonError = NeonError;
//# sourceMappingURL=NeonError.js.map