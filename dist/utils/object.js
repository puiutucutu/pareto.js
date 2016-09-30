'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matches = exports.equals = exports.checkObjectProperties = undefined;

var _array = require('./array');

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