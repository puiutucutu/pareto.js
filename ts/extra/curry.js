"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function curry(fn, ...args) {
    if (args.length === fn.length) {
        return fn(...args);
    }
    return curry.bind(this, fn, ...args);
}
exports.default = curry;
//# sourceMappingURL=curry.js.map