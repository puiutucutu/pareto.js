"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(array) {
    return array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
}
exports.default = flatten;
//# sourceMappingURL=flatten.js.map