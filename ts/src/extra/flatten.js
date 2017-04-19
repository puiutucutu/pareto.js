"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(array) {
    return array.reduce(function (a, b) { return a.concat(Array.isArray(b) ? flatten(b) : b); }, []);
}
exports.default = flatten;
//# sourceMappingURL=flatten.js.map