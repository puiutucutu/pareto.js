import ArrayUtils from './array/utils'

const head = array => ArrayUtils.isEmpty(array) ? [] : array[0]

const tail = array => ArrayUtils.isEmpty(array) ? [] : array.slice(1, array.length)

const last = array => ArrayUtils.isEmpty(array) ? [] : array[array.length - 1]

const flatten = array => {
    if (ArrayUtils.isEmpty(array)) {
        return []
    }
    return array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
}

const remove = (array, props) => {
    if (ArrayUtils.isEmpty(array)) return []
    if (!props) return array

    const index = ArrayUtils.findIndexByElement(array, props)

    return (index > -1) ? ArrayUtils.splice(array, index) : array
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
    remove: remove,
    curry: curry,
    compose: compose,
}

export default Pareto
