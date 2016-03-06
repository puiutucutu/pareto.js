import ArrayUtils from './array/utils'

export default function Pareto() {
    const head = array => ArrayUtils.isEmpty(array) ? [] : array[0]

    const tail = array => ArrayUtils.isEmpty(array) ? [] : array.slice(1, array.length)

    const last = array => ArrayUtils.isEmpty(array) ? [] : array[array.length - 1]

    const flatten = array => array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

    return {
        head: head,
        tail: tail,
        last: last,
        flatten: flatten
    }
}
