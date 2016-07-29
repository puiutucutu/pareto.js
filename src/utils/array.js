import {
  matches, equals
} from './object'

export const isEmpty = array => !(array && array.length > 0)

export const where = (array, properties) => array.filter((entry) => matches(entry, properties))

export const isEqual = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false
  if (array1.length !== array2.length) return false

  return array1.every((element, index) => equals(element, array2[index]))
}

export const findIndexByObject = (array, element) => {
  if (isEmpty(array) || !element) return -1

  for (let i = 0; i < array.length; i++) {
    if (equals(array[i], element)) return i
  }
  return -1
}

export const head = array => isEmpty(array) ? undefined : array[0]

export const tail = array => isEmpty(array) ? [] : array.slice(1, array.length)

export const last = array => isEmpty(array) ? undefined : array[array.length - 1]

export const flatten = array => {
  if (isEmpty(array)) {
    return []
  }
  return array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
}

export const indexOf = (array, props) => {
  if (isEmpty(array) || !props) return -1

  if (typeof (props) === 'object') {
    const element = where(array, props)
    return findIndexByObject(array, element[0])
  }
  else {
    return array.indexOf(props)
  }
}

export const remove = (array, props) => {
  if (isEmpty(array)) return []
  if (!props) return array

  const index = indexOf(array, props)

  return (index > -1) ? [...array.slice(0, index), ...array.slice(index + 1)] : array
}
