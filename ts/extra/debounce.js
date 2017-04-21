"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debounce = (fn, wait = 100, immediate = false) => (...args) => {
    const obj = this;
    let timeout;
    const delayed = () => {
        if (!immediate)
            fn.apply(obj, args);
        timeout = null;
    };
    if (timeout)
        clearTimeout(timeout);
    else if (immediate)
        fn.apply(obj, args);
    timeout = setTimeout(delayed, wait);
};
exports.default = debounce;
//# sourceMappingURL=debounce.js.map