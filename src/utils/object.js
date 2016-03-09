import FunctionalUtils from './functional'

const equals = (a, b) => {
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
