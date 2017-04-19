"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var memoize = function (f) { return function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    f.memoize = f.memoize || {};
    return (params in f.memoize) ? f.memoize[params] :
        f.memoize[params] = f.apply(_this, params);
}; };
exports.default = memoize;
//# sourceMappingURL=memoize.js.map