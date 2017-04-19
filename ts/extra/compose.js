"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compose(...fns) {
    return fns.reduce((f, g) => (...args) => f(g(...args)));
}
exports.default = compose;
//# sourceMappingURL=compose.js.map