import expect from 'expect'

import {
  isEmpty, isEqual, head, findIndexByObject, tail, last, flatten, remove, indexOf, where
} from '../src/utils/array'

describe('array', () => {
  describe('isEmpty', () => {
    it('returns the correct boolean value given the array', () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty([])).toBe(true)
      expect(isEmpty({})).toBe(true)
      expect(isEmpty(['one'])).toBe(false)
    })
  })

  describe('isEqual', () => {
    it('returns true if arrays are equal', () => {
      expect(isEqual([], [])).toBe(true)
      expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true)
      expect(isEqual([{ a: 1 }, { b: 2 }], [{ a: 1 }, { b: 2 }])).toBe(true)
      expect(isEqual([{ a: 1 }], [{ a: 1 }, { b: 2 }])).toBe(false)
      expect(isEqual([1, 2], [1, 2, 3])).toBe(false)
      expect(isEqual([1, 2], 'lalala')).toBe(false)
    })
  })

  describe('where', () => {
    it('returns the objects that matched the properties', () => {
      const array = [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }]

      expect(where(array, { id: 3 })).toEqual([])
      expect(where(array, { id: 1 })).toEqual([{ id: 1, name: 'name1' }])
      expect(where(array, { id: 1, name: 'name1' })).toEqual([{ id: 1, name: 'name1' }])
    })
  })

  describe('findIndexByObject', () => {
    it('returns the index of the object in an array', () => {
      const array = [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }]

      expect(findIndexByObject(null, { id: 3 })).toBe(-1)
      expect(findIndexByObject(null, { id: 3 })).toBe(-1)
      expect(findIndexByObject([], { id: 3 })).toBe(-1)
      expect(findIndexByObject(array, { id: 3 })).toBe(-1)
      expect(findIndexByObject(array, { id: 1 })).toBe(-1)
      expect(findIndexByObject(array, { id: 1, name: 'name1' })).toBe(0)
    })
  })

  describe('head', () => {
    it('returns the first element of an array', () => {
      expect(head([])).toEqual(undefined)
      expect(head(null)).toEqual(undefined)
      expect(head([1, 2, 3])).toEqual(1)
    })
  })

  describe('tail', () => {
    it('returns the list without its head', () => {
      expect(tail([])).toEqual([])
      expect(tail(null)).toEqual([])
      expect(tail([1, 2, 3])).toEqual([2, 3])
    })
  })

  describe('last', () => {
    it('returns the last element of an array', () => {
      expect(last([])).toEqual(undefined)
      expect(last(null)).toEqual(undefined)
      expect(last([1, 2, 3])).toEqual(3)
    })
  })

  describe('flatten', () => {
    it('returns the flatten array', () => {
      expect(flatten([])).toEqual([])
      expect(flatten(null)).toEqual([])
      expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
      expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4])
    })
  })

  describe('remove', () => {
    it('removes the first occurence of the element', () => {
      expect(remove([], 1)).toEqual([])
      expect(remove([1, 2, 3], 2)).toEqual([1, 3])
      expect(remove([{ n: 1 }, { n: 2 }, { n: 3 }], { n: 2 })).toEqual([{ n: 1 }, { n: 3 }])
      expect(remove([1, 2, 2, 3], 2)).toEqual([1, 2, 3])
    })
  })

  describe('indexOf', () => {
    it('returns the index of the element in an array', () => {
      const array = [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }]

      expect(indexOf(null, { id: 3 })).toBe(-1)
      expect(indexOf(null, { id: 3 })).toBe(-1)
      expect(indexOf([], { id: 3 })).toBe(-1)
      expect(indexOf(array, { id: 3 })).toBe(-1)
      expect(indexOf(array, { id: 1 })).toBe(0)
      expect(indexOf(array, { id: 1, name: 'name1' })).toBe(0)
    })
  })
})
