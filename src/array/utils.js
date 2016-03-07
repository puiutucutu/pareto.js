/*export default function isEmpty(array) {
    return !(array && array.length > 0)
}*/

const isEmpty = array => !(array && array.length > 0)

const ArrayUtils = {
    isEmpty: isEmpty
}

export default ArrayUtils
