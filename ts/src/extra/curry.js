"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function curry(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (args.length === fn.length) {
        return fn.apply(void 0, args);
    }
    return curry.bind.apply(curry, [this, fn].concat(args));
}
exports.default = curry;
//# sourceMappingURL=curry.js.map