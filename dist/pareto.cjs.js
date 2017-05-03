'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function chunks(array, len) {
    var chunks = [], n = array.length;
    var i = 0;
    while (i < n) {
        chunks.push(array.slice(i, (i += len)));
    }
    return chunks;
}

function compose() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i - 0] = arguments[_i];
    }
    return fns.reduce(function (f, g) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return f(g.apply(void 0, args));
    }; });
}

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

var _this = undefined;
var debounce = function (fn, wait, immediate) {
    if (wait === void 0) { wait = 100; }
    if (immediate === void 0) { immediate = false; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
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

function deepCopy(object) {
    return JSON.parse(JSON.stringify(object));
}

function flatten(array) {
    return array.reduce(function (a, b) { return a.concat(Array.isArray(b) ? flatten(b) : b); }, []);
}

function matches(obj, props) {
    return Object.keys(props).every(function (key) { return obj[key] === props[key]; });
}

function memoize(fn) {
    var memo = {};
    var slice = Array.prototype.slice;
    return function () {
        var args = slice.call(arguments);
        if (args in memo) {
            return memo[args];
        }
        return (memo[args] = fn.apply(this, args));
    };
}

var pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i - 0] = arguments[_i];
    }
    return function (initial) {
        return fns.reduce(function (acc, fn) { return fn(acc); }, initial);
    };
};

function prop(property, object) {
    return object[property];
}

function sort(collection, property) {
    return collection.sort(function (a, b) {
        if (a[property] === b[property])
            return 0;
        if (a[property] > b[property])
            return 1;
        if (a[property] < b[property])
            return -1;
    });
}

function tail(array) {
    return array.slice(1, array.length);
}

exports.chunk = chunks;
exports.compose = compose;
exports.curry = curry;
exports.debounce = debounce;
exports.deepCopy = deepCopy;
exports.flatten = flatten;
exports.matches = matches;
exports.memoize = memoize;
exports.pipe = pipe;
exports.prop = prop;
exports.sort = sort;
exports.tail = tail;
