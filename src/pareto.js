import ArrayUtils from './utils/array'
import FunctionalUtils from './utils/functional'
import ObjectUtils from './utils/object'

const Pareto = {
    head: ArrayUtils.head,
    tail: ArrayUtils.tail,
    last: ArrayUtils.last,
    flatten: ArrayUtils.flatten,
    remove: ArrayUtils.remove,
    removeAll: ArrayUtils.removeAll,
    indexOf: ArrayUtils.indexOf,
    where: ArrayUtils.where,
    curry: FunctionalUtils.curry,
    compose: FunctionalUtils.compose,
    equals: ObjectUtils.equals,
    matches: ObjectUtils.matches
}

export default Pareto
