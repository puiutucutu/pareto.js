const curry = (fn, ...args) => {
    if (args.length === fn.length) {
        return fn(...args)
    }
    return curry.bind(this, fn, ...args)
}

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const memoize = (f) => {
    return function () {
        const args = Array.prototype.slice.call(arguments)

        f.memoize = f.memoize || {}

        return (args in f.memoize) ? f.memoize[args] :
            f.memoize[args] = f.apply(this, args)
    }
}

const debounce = (fn, wait = 100, immediate) => {
    return () => {
        let timeout, obj = this, args = arguments

        const delayed = () => {
            if (!immediate)
                fn.apply(obj, args)
            timeout = null
        }

        if (timeout)
            clearTimeout(timeout)
        else if (immediate)
            fn.apply(obj, args)

        timeout = setTimeout(delayed, wait)
    }
}

const throttle = (fn, limit) => {
    let wait = false

    return () => {
        if (!wait) {
            fn.call()
            wait = true
            setTimeout(() => wait = false, limit)
        }
    }
}


const FunctionUtils = {
    compose,
    curry,
    memoize,
    debounce,
    throttle
}

export default FunctionUtils
