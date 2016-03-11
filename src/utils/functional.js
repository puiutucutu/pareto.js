const curry = (fn, ...args) => {
    if (args.length === fn.length) {
        return fn(...args)
    }
    return curry.bind(this, fn, ...args)
}

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const memoize = (f) => {
    return function() {
        const args = Array.prototype.slice.call(arguments)

        f.memoize = f.memoize || {}

        return (args in f.memoize) ? f.memoize[args] :
            f.memoize[args] = f.apply(this, args)
    }
}

const debounce = (func, threshold, immediate) => {
    return () => {
        let timeout, obj = this, args = arguments

        const delayed = () => {
            if (!immediate)
                func.apply(obj, args)
            timeout = null
        }

        if (timeout)
            clearTimeout(timeout)
        else if (immediate)
            func.apply(obj, args)

        timeout = setTimeout(delayed, threshold || 100)
    }
}

const FunctionalUtils = {
    compose: compose,
    curry: curry,
    memoize: memoize,
    debounce: debounce
}

export default FunctionalUtils
