'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _function = require('./function');

var _function2 = _interopRequireDefault(_function);

var _array = require('./array');

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
module.exports = exports['default'];