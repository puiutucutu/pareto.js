import ObjectUtils from './object'

const isEmpty = array => !(array && array.length > 0)

const splice = (array, index) => {
    if (isEmpty(array) || !index) return []

    const newArray = array.slice(0)
    newArray.splice(index, 1)
    return newArray
}

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

const findIndexByElement = (array, props) => {
    if (isEmpty(array) || !props) return -1

    if (typeof(props) === 'object') {
        const element = findByMatchingProperties(array, props)
        return findIndexByObject(array, element[0])
    }
    else {
        return array.indexOf(props)
    }
}

const ArrayUtils = {
    isEmpty: isEmpty,
    splice: splice,
    findByMatchingProperties: findByMatchingProperties,
    findIndexByElement: findIndexByElement,
    findIndexByObject: findIndexByObject
}

export default ArrayUtils
