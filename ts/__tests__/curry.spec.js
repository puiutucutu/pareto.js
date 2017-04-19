"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("../src/extra/curry");
it('returns the curried function', function () {
    var add = function (a, b) { return a + b; };
    expect(curry_1.default(add, 1, 2)).toBe(3);
    expect(curry_1.default(add)(1)(2)).toBe(3);
    expect(curry_1.default(add)(1, 2)).toBe(3);
    expect(curry_1.default(add, 1)(2)).toBe(3);
});
//# sourceMappingURL=curry.spec.js.map