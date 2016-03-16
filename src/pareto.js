import ArrayUtils from './utils/array'
import FunctionUtils from './utils/function'
import ObjectUtils from './utils/object'

const head = ArrayUtils.head
const tail = ArrayUtils.tail
const last = ArrayUtils.last
const flatten = ArrayUtils.flatten
const remove = ArrayUtils.remove
const indexOf = ArrayUtils.indexOf
const where = ArrayUtils.where
const curry = FunctionUtils.curry
const compose = FunctionUtils.compose
const debounce = FunctionUtils.debounce
const memoize = FunctionUtils.memoize
const throttle = FunctionUtils.throttle
const equals = ObjectUtils.equals
const matches = ObjectUtils.matches
const isEmpty = ArrayUtils.isEmpty

const Pareto = {
    head,
    tail,
    last,
    flatten,
    remove,
    indexOf,
    where,
    curry,
    compose,
    memoize,
    debounce,
    throttle,
    equals,
    matches,
	isEmpty
}

export default Pareto
