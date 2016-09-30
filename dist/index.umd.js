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
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isEmpty = exports.matches = exports.equals = exports.pipe = exports.throttle = exports.debounce = exports.memoize = exports.compose = exports.curry = exports.chunk = exports.where = exports.indexOf = exports.remove = exports.flatten = exports.last = exports.tail = exports.head = undefined;
	
	var _array = __webpack_require__(1);
	
	var _function = __webpack_require__(3);
	
	var _object = __webpack_require__(2);
	
	exports.head = _array.head;
	exports.tail = _array.tail;
	exports.last = _array.last;
	exports.flatten = _array.flatten;
	exports.remove = _array.remove;
	exports.indexOf = _array.indexOf;
	exports.where = _array.where;
	exports.chunk = _array.chunk;
	exports.curry = _function.curry;
	exports.compose = _function.compose;
	exports.memoize = _function.memoize;
	exports.debounce = _function.debounce;
	exports.throttle = _function.throttle;
	exports.pipe = _function.pipe;
	exports.equals = _object.equals;
	exports.matches = _object.matches;
	exports.isEmpty = _object.isEmpty;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.chunk = exports.remove = exports.indexOf = exports.flatten = exports.last = exports.tail = exports.head = exports.findIndexByObject = exports.isEqual = exports.where = exports.isEmpty = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _object = __webpack_require__(2);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var isEmpty = exports.isEmpty = function isEmpty(array) {
	  return !(array && array.length > 0);
	};
	
	var where = exports.where = function where(array, properties) {
	  return array.filter(function (entry) {
	    return (0, _object.matches)(entry, properties);
	  });
	};
	
	var isEqual = exports.isEqual = function isEqual(array1, array2) {
	  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
	  if (array1.length !== array2.length) return false;
	
	  return array1.every(function (element, index) {
	    return (0, _object.equals)(element, array2[index]);
	  });
	};
	
	var findIndexByObject = exports.findIndexByObject = function findIndexByObject(array, element) {
	  if (isEmpty(array) || !element) return -1;
	
	  for (var i = 0; i < array.length; i++) {
	    if ((0, _object.equals)(array[i], element)) return i;
	  }
	  return -1;
	};
	
	var head = exports.head = function head(array) {
	  return isEmpty(array) ? undefined : array[0];
	};
	
	var tail = exports.tail = function tail(array) {
	  return isEmpty(array) ? [] : array.slice(1, array.length);
	};
	
	var last = exports.last = function last(array) {
	  return isEmpty(array) ? undefined : array[array.length - 1];
	};
	
	var flatten = exports.flatten = function flatten(array) {
	  if (isEmpty(array)) {
	    return [];
	  }
	  return array.reduce(function (a, b) {
	    return a.concat(Array.isArray(b) ? flatten(b) : b);
	  }, []);
	};
	
	var indexOf = exports.indexOf = function indexOf(array, props) {
	  if (isEmpty(array) || !props) return -1;
	
	  if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) === 'object') {
	    var element = where(array, props);
	    return findIndexByObject(array, element[0]);
	  } else {
	    return array.indexOf(props);
	  }
	};
	
	var remove = exports.remove = function remove(array, props) {
	  if (isEmpty(array)) return [];
	  if (!props) return array;
	
	  var index = indexOf(array, props);
	
	  return index > -1 ? [].concat(_toConsumableArray(array.slice(0, index)), _toConsumableArray(array.slice(index + 1))) : array;
	};
	
	var chunk = exports.chunk = function chunk(array, len) {
	  var chunks = [],
	      n = array.length;
	  var i = 0;
	
	  while (i < n) {
	    chunks.push(array.slice(i, i += len));
	  }
	
	  return chunks;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.matches = exports.equals = exports.checkObjectProperties = undefined;
	
	var _array = __webpack_require__(1);
	
	var checkObjectProperties = exports.checkObjectProperties = function checkObjectProperties(a, b, aProps, bProps) {
	  for (var i = 0; i < aProps.length; i++) {
	    var propName = aProps[i];
	
	    var aProp = a[propName];
	    var bProp = b[propName];
	
	    if (Array.isArray(aProp) && Array.isArray(bProp)) {
	      if (!(0, _array.isEqual)(aProp, bProp)) return false;
	    } else if (aProp !== bProp) {
	      return false;
	    }
	  }
	
	  return true;
	};
	
	var equals = exports.equals = function equals(a, b) {
	  var aProps = Object.getOwnPropertyNames(a);
	  var bProps = Object.getOwnPropertyNames(b);
	
	  if (aProps.length != bProps.length) {
	    return false;
	  }
	
	  return checkObjectProperties(a, b, aProps, bProps);
	};
	
	var matches = exports.matches = function matches(obj, props) {
	  return Object.keys(props).every(function (key) {
	    return obj[key] === props[key];
	  });
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.umd.js.map