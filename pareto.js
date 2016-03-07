import isEmpty from './array/utils'

const head = array => isEmpty(array) ? [] : array[0]

const tail = array => isEmpty(array) ? [] : array.slice(1, array.length)

const last = array => isEmpty(array) ? [] : array[array.length - 1]

const flatten = array => {
    if (isEmpty(array)) {
        return []
    }
    return array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
}

const curry = (fn, ...args) => {
	if (args.length === fn.length) {
		return fn(...args)
	}
	return curry.bind(this, fn, ...args)
}

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const Pareto = {
    head: head,
    tail: tail,
    last: last,
    flatten: flatten,
    curry: curry,
    compose: compose,
}

export default Pareto
