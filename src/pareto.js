import ArrayUtils from './utils/array'
import FunctionalUtils from './utils/functional'
import ObjectUtils from './utils/object'

const head = ArrayUtils.head
const tail = ArrayUtils.tail
const last = ArrayUtils.last
const flatten = ArrayUtils.flatten
const remove = ArrayUtils.remove
const indexOf = ArrayUtils.indexOf
const where = ArrayUtils.where
const curry = FunctionalUtils.curry
const compose = FunctionalUtils.compose
const debounce = FunctionalUtils.debounce
const memoize = FunctionalUtils.memoize
const throttle = FunctionalUtils.throttle
const equals = ObjectUtils.equals
const matches = ObjectUtils.matches

export {
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
    matches
}
