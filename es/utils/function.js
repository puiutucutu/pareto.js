"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var curry = function curry(fn) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    if (args.length === fn.length) {
        return fn.apply(undefined, args);
    }
    return curry.bind.apply(curry, [undefined, fn].concat(args));
};

var compose = function compose() {
    for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        fns[_key2] = arguments[_key2];
    }

    return fns.reduce(function (f, g) {
        return function () {
            return f(g.apply(undefined, arguments));
        };
    });
};

var memoize = function memoize(f) {
    return function () {
        for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            params[_key3] = arguments[_key3];
        }

        var args = Array.prototype.slice.call(params);

        f.memoize = f.memoize || {};

        return args in f.memoize ? f.memoize[args] : f.memoize[args] = f.apply(this, args);
    };
};

var debounce = function debounce(fn) {
    var wait = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
    var immediate = arguments[2];
    return function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        var obj = undefined;
        var timeout = void 0;

        var delayed = function delayed() {
            if (!immediate) fn.apply(obj, args);
            timeout = null;
        };

        if (timeout) clearTimeout(timeout);else if (immediate) fn.apply(obj, args);

        timeout = setTimeout(delayed, wait);
    };
};

var throttle = function throttle(fn, limit) {
    var wait = false;

    return function () {
        if (!wait) {
            fn.call();
            wait = true;
            setTimeout(function () {
                return wait = false;
            }, limit);
        }
    };
};

var FunctionUtils = {
    compose: compose,
    curry: curry,
    memoize: memoize,
    debounce: debounce,
    throttle: throttle
};

exports.default = FunctionUtils;
module.exports = exports['default'];