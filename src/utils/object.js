import FunctionalUtils from './functional'
import ArrayUtils from './array'

const checkObjectProperties = (a, b, aProps, bProps) => {
    for (let i = 0; i < aProps.length; i++) {
        const propName = aProps[i]

        let aProp = a[propName]
        let bProp = b[propName]

        if (Array.isArray(aProp) && Array.isArray(bProp)) {
            if (!ArrayUtils.isEqual(aProp, bProp)) return false
        }
        else if (aProp !== bProp) {
            return false
        }
    }

    return true
}

const equals = (a, b) => {
    const aProps = Object.getOwnPropertyNames(a)
    const bProps = Object.getOwnPropertyNames(b)

    if (aProps.length != bProps.length) {
        return false
    }

    return checkObjectProperties(a, b, aProps, bProps)
}

const matches = (obj, props) => {
    return Object.keys(props).every((key) => {
        return obj[key] === props[key]
    })
}

const ObjectUtils = {
    equals: FunctionalUtils.curry(equals),
    matches: FunctionalUtils.curry(matches)
}

export default ObjectUtils
