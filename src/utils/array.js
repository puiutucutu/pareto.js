import ObjectUtils from './object'
import FunctionUtils from './function'

const isEmpty = array => !(array && array.length > 0)

const where = (array, properties) => array.filter((entry) => ObjectUtils.matches(entry, properties))

const isEqual = (array1, array2) => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return false
    if (array1.length !== array2.length) return false

    return array1.every((element, index) => ObjectUtils.equals(element, array2[index]))
}

const findIndexByObject = (array, element) => {
    if (isEmpty(array) || !element) return -1

    for (let i = 0; i < array.length; i++) {
        if (ObjectUtils.equals(array[i], element)) return i
    }
    return -1
}

const head = array => isEmpty(array) ? undefined : array[0]

const tail = array => isEmpty(array) ? [] : array.slice(1, array.length)

const last = array => isEmpty(array) ? undefined : array[array.length - 1]

const flatten = array => {
    if (isEmpty(array)) {
        return []
    }
    return array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
}

const indexOf = (array, props) => {
    if (isEmpty(array) || !props) return -1

    if (typeof (props) === 'object') {
        const element = where(array, props)
        return findIndexByObject(array, element[0])
    }
    else {
        return array.indexOf(props)
    }
}

const remove = (array, props) => {
    if (isEmpty(array)) return []
    if (!props) return array

    const index = indexOf(array, props)

    return (index > -1) ? [...array.slice(0, index), ...array.slice(index + 1)] : array
}

const ArrayUtils = {
    isEmpty: FunctionUtils.curry(isEmpty),
    where: FunctionUtils.curry(where),
    isEqual: FunctionUtils.curry(isEqual),
    findIndexByObject: FunctionUtils.curry(findIndexByObject),
    head: FunctionUtils.curry(head),
    tail: FunctionUtils.curry(tail),
    last: FunctionUtils.curry(last),
    flatten: FunctionUtils.curry(flatten),
    indexOf: FunctionUtils.curry(indexOf),
    remove: FunctionUtils.curry(remove)
}

export default ArrayUtils
