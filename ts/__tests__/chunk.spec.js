"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_1 = require("../src/extra/chunk");
it('returns the chunk of an array', function () {
    expect(chunk_1.default([1, 2, 3], 2)[0]).toEqual([1, 2]);
    expect(chunk_1.default([1, 2, 3], 2)[1]).toEqual([3]);
    expect(chunk_1.default([1, 2, 3, 4, 5, 6, 7], 3)[0]).toEqual([1, 2, 3]);
    expect(chunk_1.default([1, 2, 3, 4, 5, 6, 7], 3)[1]).toEqual([4, 5, 6]);
    expect(chunk_1.default([1, 2, 3, 4, 5, 6, 7], 3)[2]).toEqual([7]);
});
//# sourceMappingURL=chunk.spec.js.map