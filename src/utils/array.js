import ObjectUtils from './object'
import FunctionalUtils from './functional'

const isEmpty = array => !(array && array.length > 0)

const where = (array, properties) => {
    return array.filter((entry) => ObjectUtils.matches(entry, properties))
}

const isEqual = (array1, array2) => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return false
    if (array1.length !== array2.length) return false

    return array1.every((element, index) => {
        return ObjectUtils.equals(element, array2[index])
    })
}

const findIndexByObject = (array, element) => {
    if (isEmpty(array) || !element) return -1

    for (let i = 0; i < array.length; i++) {
        if (ObjectUtils.equals(array[i], element)) return i
    }
    return -1
}

const splice = (array, index) => {
    if (isEmpty(array) || !index) return []

    const newArray = array.slice(0)
    newArray.splice(index, 1)
    return newArray
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

    if (typeof(props) === 'object') {
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

    return (index > -1) ? splice(array, index) : array
}

const ArrayUtils = {
    isEmpty: FunctionalUtils.curry(isEmpty),
    where: FunctionalUtils.curry(where),
    isEqual: FunctionalUtils.curry(isEqual),
    findIndexByObject: FunctionalUtils.curry(findIndexByObject),
    splice: FunctionalUtils.curry(splice),
    head: FunctionalUtils.curry(head),
    tail: FunctionalUtils.curry(tail),
    last: FunctionalUtils.curry(last),
    flatten: FunctionalUtils.curry(flatten),
    indexOf: FunctionalUtils.curry(indexOf),
    remove: FunctionalUtils.curry(remove)
}

export default ArrayUtils
