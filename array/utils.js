function ArrayUtils() {
    const isEmpty = array => !(array && array.length > 0)

    return {
        isEmpty: isEmpty
    }
}

export default ArrayUtils;
