"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var memoize_1 = require("../src/extra/memoize");
it('memoizes functions', function () {
    var count = 0;
    var square = function (x) {
        count = count + 1;
        return x * x;
    };
    var memoSquare = memoize_1.default(square);
    expect(count).toBe(0);
    expect(memoSquare(10)).toBe(100);
    expect(memoSquare(10)).toBe(100);
    expect(memoSquare(10)).toBe(100);
    expect(count).toBe(1);
    expect(memoSquare(25)).toBe(625);
    expect(memoSquare(25)).toBe(625);
    expect(count).toBe(2);
});
//# sourceMappingURL=memoize.spec.js.map