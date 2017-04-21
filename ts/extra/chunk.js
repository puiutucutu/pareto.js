"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chunks(array, len) {
    var chunks = [], n = array.length;
    var i = 0;
    while (i < n) {
        chunks.push(array.slice(i, i += len));
    }
    return chunks;
}
exports.default = chunks;
//# sourceMappingURL=chunk.js.map