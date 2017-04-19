"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = require("../src/extra/head");
it('gets the first element of an array', function () {
    expect(head_1.default([1, 2, 3])).toBe(1);
    expect(head_1.default([1])).toBe(1);
    expect(head_1.default([])).toBe(undefined);
});
//# sourceMappingURL=head.spec.js.map