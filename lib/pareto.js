'use strict';

exports.__esModule = true;

var _array = require('./utils/array');

var _array2 = _interopRequireDefault(_array);

var _function = require('./utils/function');

var _function2 = _interopRequireDefault(_function);

var _object = require('./utils/object');

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