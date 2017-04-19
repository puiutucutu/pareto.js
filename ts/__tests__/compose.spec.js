"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = require("../src/extra/compose");
it('composes functions', function () {
    var toUpperCase = function (x) { return x.toUpperCase(); };
    var exclaim = function (x) { return x + "!"; };
    var moreExclaim = function (x) { return x + "!!"; };
    expect(compose_1.default(toUpperCase, exclaim)('test')).toBe('TEST!');
    expect(compose_1.default(toUpperCase, exclaim, moreExclaim)('test')).toBe('TEST!!!');
});
//# sourceMappingURL=compose.spec.js.map