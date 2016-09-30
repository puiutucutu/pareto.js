'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chunk = exports.remove = exports.indexOf = exports.flatten = exports.last = exports.tail = exports.head = exports.findIndexByObject = exports.isEqual = exports.where = exports.isEmpty = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _object = require('./object');

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