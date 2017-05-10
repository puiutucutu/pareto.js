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

function flatMap(array, fn) {
    return array.reduce(function (acc, current) { return acc.concat(fn(current)); }, []);
}

function flatten(array) {
    return array.reduce(function (a, b) { return a.concat(Array.isArray(b) ? flatten(b) : b); }, []);
}

function get(object, path, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    if (path) {
        var pathSplitted = path.split(".");
        var property = pathSplitted[0];
        var findProperty = object[property];
        if (findProperty && path.indexOf(".") === -1) {
            return findProperty;
        }
        var newPath = pathSplitted.slice(1, pathSplitted.length).join(".");
        return get(findProperty, newPath, defaultValue);
    }
    return defaultValue;
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

export { chunks as chunk, compose, curry, debounce, deepCopy, flatMap, flatten, get, matches, memoize, pipe, prop, sort, tail };
//# sourceMappingURL=pareto.es.js.map
