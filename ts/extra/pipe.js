"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (initial) { return fns.reduce(function (acc, fn) { return fn(acc); }, initial); };
};
exports.default = pipe;
//# sourceMappingURL=pipe.js.map