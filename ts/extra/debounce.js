"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var debounce = function (fn, wait, immediate) {
    if (wait === void 0) { wait = 100; }
    if (immediate === void 0) { immediate = false; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var obj = _this;
        var timeout;
        var delayed = function () {
            if (!immediate)
                fn.apply(obj, args);
            timeout = null;
        };
        if (timeout)
            clearTimeout(timeout);
        else if (immediate)
            fn.apply(obj, args);
        timeout = setTimeout(delayed, wait);
    };
};
exports.default = debounce;
//# sourceMappingURL=debounce.js.map