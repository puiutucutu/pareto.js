"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tail_1 = require("../src/extra/tail");
it('gets the array except the first element', function () {
    expect(tail_1.default([1, 2, 3])).toEqual([2, 3]);
    expect(tail_1.default([1])).toEqual([]);
    expect(tail_1.default([])).toEqual([]);
});
//# sourceMappingURL=tail.spec.js.map