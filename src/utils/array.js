import ObjectUtils from './object'

const isEmpty = array => !(array && array.length > 0)

const findByMatchingProperties = (array, properties) => {
    return array.filter((entry) => {
        return Object.keys(properties).every((key) => {
            return entry[key] === properties[key]
        })
    })
}

const findIndexByObject = (array, element) => {
    if (isEmpty(array) || !element) return -1

    for (let i = 0; i < array.length; i++) {
        if (ObjectUtils.isEqual(array[i], element)) return i
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

const last = array => isEmpty(array) ? [] : array[array.length - 1]

const flatten = array => {
    if (isEmpty(array)) {
        return []
    }
    return array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
}

const where = (array, props) => {
    if (isEmpty(array) || !props) return -1

    if (typeof(props) === 'object') {
        const element = findByMatchingProperties(array, props)
        return findIndexByObject(array, element[0])
    }
    else {
        return array.indexOf(props)
    }
}

const remove = (array, props) => {
    if (isEmpty(array)) return []
    if (!props) return array

    const index = where(array, props)

    return (index > -1) ? splice(array, index) : array
}

const ArrayUtils = {
    isEmpty: isEmpty,
    findByMatchingProperties: findByMatchingProperties,
    findIndexByObject: findIndexByObject,
    splice: splice,
    head: head,
    tail: tail,
    last: last,
    flatten: flatten,
    where: where,
    remove: remove,
}

export default ArrayUtils
