"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flatten_1 = require("../src/extra/flatten");
it('flattens an array', function () {
    expect(flatten_1.default([])).toEqual([]);
    expect(flatten_1.default([1, 2])).toEqual([1, 2]);
    expect(flatten_1.default([1, [2, 3]])).toEqual([1, 2, 3]);
    expect(flatten_1.default([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
});
//# sourceMappingURL=flatten.spec.js.map