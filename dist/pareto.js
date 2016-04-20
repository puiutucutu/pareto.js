(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["_"] = factory();
	else
		root["_"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _array = __webpack_require__(2);

	var _array2 = _interopRequireDefault(_array);

	var _function = __webpack_require__(1);

	var _function2 = _interopRequireDefault(_function);

	var _object = __webpack_require__(3);

	var _object2 = _interopRequireDefault(_object);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var head = _array2.default.head;
	var tail = _array2.default.tail;
	var last = _array2.default.last;
	var flatten = _array2.default.flatten;
	var remove = _array2.default.remove;
	var indexOf = _array2.default.indexOf;
	var where = _array2.default.where;
	var curry = _function2.default.curry;
	var compose = _function2.default.compose;
	var debounce = _function2.default.debounce;
	var memoize = _function2.default.memoize;
	var throttle = _function2.default.throttle;
	var equals = _object2.default.equals;
	var matches = _object2.default.matches;
	var isEmpty = _array2.default.isEmpty;

	var Pareto = {
	    head: head,
	    tail: tail,
	    last: last,
	    flatten: flatten,
	    remove: remove,
	    indexOf: indexOf,
	    where: where,
	    curry: curry,
	    compose: compose,
	    memoize: memoize,
	    debounce: debounce,
	    throttle: throttle,
	    equals: equals,
	    matches: matches,
	    isEmpty: isEmpty
	};

	exports.default = Pareto;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _object = __webpack_require__(3);

	var _object2 = _interopRequireDefault(_object);

	var _function = __webpack_require__(1);

	var _function2 = _interopRequireDefault(_function);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var isEmpty = function isEmpty(array) {
	    return !(array && array.length > 0);
	};

	var where = function where(array, properties) {
	    return array.filter(function (entry) {
	        return _object2.default.matches(entry, properties);
	    });
	};

	var isEqual = function isEqual(array1, array2) {
	    if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
	    if (array1.length !== array2.length) return false;

	    return array1.every(function (element, index) {
	        return _object2.default.equals(element, array2[index]);
	    });
	};

	var findIndexByObject = function findIndexByObject(array, element) {
	    if (isEmpty(array) || !element) return -1;

	    for (var i = 0; i < array.length; i++) {
	        if (_object2.default.equals(array[i], element)) return i;
	    }
	    return -1;
	};

	var head = function head(array) {
	    return isEmpty(array) ? undefined : array[0];
	};

	var tail = function tail(array) {
	    return isEmpty(array) ? [] : array.slice(1, array.length);
	};

	var last = function last(array) {
	    return isEmpty(array) ? undefined : array[array.length - 1];
	};

	var flatten = function flatten(array) {
	    if (isEmpty(array)) {
	        return [];
	    }
	    return array.reduce(function (a, b) {
	        return a.concat(Array.isArray(b) ? flatten(b) : b);
	    }, []);
	};

	var indexOf = function indexOf(array, props) {
	    if (isEmpty(array) || !props) return -1;

	    if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) === 'object') {
	        var element = where(array, props);
	        return findIndexByObject(array, element[0]);
	    } else {
	        return array.indexOf(props);
	    }
	};

	var remove = function remove(array, props) {
	    if (isEmpty(array)) return [];
	    if (!props) return array;

	    var index = indexOf(array, props);

	    return index > -1 ? [].concat(_toConsumableArray(array.slice(0, index)), _toConsumableArray(array.slice(index + 1))) : array;
	};

	var ArrayUtils = {
	    isEmpty: _function2.default.curry(isEmpty),
	    where: _function2.default.curry(where),
	    isEqual: _function2.default.curry(isEqual),
	    findIndexByObject: _function2.default.curry(findIndexByObject),
	    head: _function2.default.curry(head),
	    tail: _function2.default.curry(tail),
	    last: _function2.default.curry(last),
	    flatten: _function2.default.curry(flatten),
	    indexOf: _function2.default.curry(indexOf),
	    remove: _function2.default.curry(remove)
	};

	exports.default = ArrayUtils;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _function = __webpack_require__(1);

	var _function2 = _interopRequireDefault(_function);

	var _array = __webpack_require__(2);

	var _array2 = _interopRequireDefault(_array);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var checkObjectProperties = function checkObjectProperties(a, b, aProps, bProps) {
	    for (var i = 0; i < aProps.length; i++) {
	        var propName = aProps[i];

	        var aProp = a[propName];
	        var bProp = b[propName];

	        if (Array.isArray(aProp) && Array.isArray(bProp)) {
	            if (!_array2.default.isEqual(aProp, bProp)) return false;
	        } else if (aProp !== bProp) {
	            return false;
	        }
	    }

	    return true;
	};

	var equals = function equals(a, b) {
	    var aProps = Object.getOwnPropertyNames(a);
	    var bProps = Object.getOwnPropertyNames(b);

	    if (aProps.length != bProps.length) {
	        return false;
	    }

	    return checkObjectProperties(a, b, aProps, bProps);
	};

	var matches = function matches(obj, props) {
	    return Object.keys(props).every(function (key) {
	        return obj[key] === props[key];
	    });
	};

	var ObjectUtils = {
	    equals: _function2.default.curry(equals),
	    matches: _function2.default.curry(matches)
	};

	exports.default = ObjectUtils;

/***/ }
/******/ ])
});
;