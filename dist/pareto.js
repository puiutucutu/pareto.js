/******/ (function(modules) { // webpackBootstrap
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(2);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var head = function head(array) {
	    return (0, _utils2.default)(array) ? [] : array[0];
	};

	var tail = function tail(array) {
	    return (0, _utils2.default)(array) ? [] : array.slice(1, array.length);
	};

	var last = function last(array) {
	    return (0, _utils2.default)(array) ? [] : array[array.length - 1];
	};

	var flatten = function flatten(array) {
	    if ((0, _utils2.default)(array)) {
	        return [];
	    }
	    return array.reduce(function (a, b) {
	        return a.concat(Array.isArray(b) ? flatten(b) : b);
	    }, []);
	};

	var curry = function curry(fn) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    if (args.length === fn.length) {
	        return fn.apply(undefined, args);
	    }
	    return curry.bind.apply(curry, [undefined, fn].concat(args));
	};

	//const compose = f => g => (...x) => f(g.apply(this, x))
	//const compose = (f, g) => (x) => f(g(x))
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

	var Pareto = {
	    head: head,
	    tail: tail,
	    last: last,
	    flatten: flatten,
	    curry: curry,
	    compose: compose
	};

	exports.default = Pareto;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = isEmpty;
	function isEmpty(array) {
	    return !(array && array.length > 0);
	}

/***/ }
/******/ ]);