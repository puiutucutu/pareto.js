const isEmpty = array => !(array && array.length > 0)

const splice = (array, index) => {
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

const isEquivalent = (a, b) => {
    const aProps = Object.getOwnPropertyNames(a)
    const bProps = Object.getOwnPropertyNames(b)

    if (aProps.length != bProps.length) {
        return false
    }

    for (let i = 0; i < aProps.length; i++) {
        const propName = aProps[i]

        if (a[propName] !== b[propName]) {
            return false
        }
    }

    return true
}

const findIndexByObject = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        if (isEquivalent(array[i], element)) return i
    }
    return -1
}

const findIndexByElement = (array, props) => {
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
