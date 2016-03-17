import FunctionUtils from './function'
import ArrayUtils from './array'

const checkObjectProperties = (a, b, aProps, bProps) => {
    for (let i = 0; i < aProps.length; i++) {
        const propName = aProps[i]

        const aProp = a[propName]
        const bProp = b[propName]

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

const matches = (obj, props) => Object.keys(props).every((key) => obj[key] === props[key])

const ObjectUtils = {
    equals: FunctionUtils.curry(equals),
    matches: FunctionUtils.curry(matches)
}

export default ObjectUtils
