'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _object = require('./object');

var _object2 = _interopRequireDefault(_object);

var _function = require('./function');

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