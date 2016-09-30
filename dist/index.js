'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = exports.matches = exports.equals = exports.pipe = exports.throttle = exports.debounce = exports.memoize = exports.compose = exports.curry = exports.chunk = exports.where = exports.indexOf = exports.remove = exports.flatten = exports.last = exports.tail = exports.head = undefined;

var _array = require('./utils/array');

var _function = require('./utils/function');

var _object = require('./utils/object');

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