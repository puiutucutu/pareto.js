"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipe = (...fns) => (initial) => fns.reduce((acc, fn) => fn(acc), initial);
exports.default = pipe;
//# sourceMappingURL=pipe.js.map