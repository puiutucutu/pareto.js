"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var curry = exports.curry = function curry(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args.length === fn.length) {
    return fn.apply(undefined, args);
  }
  return curry.bind.apply(curry, [undefined, fn].concat(args));
};

var compose = exports.compose = function compose() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(undefined, arguments));
    };
  });
};

var memoize = exports.memoize = function memoize(f) {
  return function () {
    for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      params[_key3] = arguments[_key3];
    }

    f.memoize = f.memoize || {};

    return params in f.memoize ? f.memoize[params] : f.memoize[params] = f.apply(undefined, params);
  };
};

var debounce = exports.debounce = function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
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

var throttle = exports.throttle = function throttle(fn, limit) {
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

var pipe = exports.pipe = function pipe() {
  for (var _len5 = arguments.length, fns = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    fns[_key5] = arguments[_key5];
  }

  return function (initial) {
    return fns.reduce(function (acc, fn) {
      return fn(acc);
    }, initial);
  };
};