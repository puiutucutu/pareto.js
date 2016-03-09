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
const FunctionalUtils = {
    compose: compose,
    curry: curry,
    memoize: curry(memoize)
}

export default FunctionalUtils
