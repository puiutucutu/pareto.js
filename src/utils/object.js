import {
    isEqual
} from './array'

export const checkObjectProperties = (a, b, aProps, bProps) => {
    for (let i = 0; i < aProps.length; i++) {
        const propName = aProps[i]

        const aProp = a[propName]
        const bProp = b[propName]

        if (Array.isArray(aProp) && Array.isArray(bProp)) {
            if (!isEqual(aProp, bProp)) return false
        }
        else if (aProp !== bProp) {
            return false
        }
    }

    return true
}

export const equals = (a, b) => {
    const aProps = Object.getOwnPropertyNames(a)
    const bProps = Object.getOwnPropertyNames(b)

    if (aProps.length != bProps.length) {
        return false
    }

    return checkObjectProperties(a, b, aProps, bProps)
}

export const matches = (obj, props) => Object.keys(props).every((key) => obj[key] === props[key])
