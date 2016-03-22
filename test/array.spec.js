import expect from 'expect'
import ArrayUtils from '../src/utils/array'

describe('ArrayUtils', () => {
    describe('isEmpty', () => {
        it('returns the correct boolean value given the array', () => {
            expect(ArrayUtils.isEmpty(null)).toBe(true)
            expect(ArrayUtils.isEmpty([])).toBe(true)
			expect(ArrayUtils.isEmpty({})).toBe(true)
            expect(ArrayUtils.isEmpty(['one'])).toBe(false)
        })
    })

    describe('isEqual', () => {
        it('returns true if arrays are equal', () => {
            expect(ArrayUtils.isEqual([], [])).toBe(true)
            expect(ArrayUtils.isEqual([1,2,3], [1,2,3])).toBe(true)
            expect(ArrayUtils.isEqual([{a: 1}, {b:2}], [{a: 1}, {b:2}])).toBe(true)
            expect(ArrayUtils.isEqual([{a: 1}], [{a: 1}, {b:2}])).toBe(false)
            expect(ArrayUtils.isEqual([1,2], [1,2,3])).toBe(false)
            expect(ArrayUtils.isEqual([1,2], 'lalala')).toBe(false)
        })
    })

    describe('where', () => {
        it('returns the objects that matched the properties', () => {
            const array = [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }]

            expect(ArrayUtils.where(array, { id: 3 })).toEqual([])
            expect(ArrayUtils.where(array, { id: 1 })).toEqual([{ id: 1, name: 'name1' }])
            expect(ArrayUtils.where(array, { id: 1, name: 'name1' })).toEqual([{ id: 1, name: 'name1' }])
        })
    })

    describe('findIndexByObject', () => {
        it('returns the index of the object in an array', () => {
            const array = [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }]

            expect(ArrayUtils.findIndexByObject(null, { id: 3 })).toBe(-1)
            expect(ArrayUtils.findIndexByObject(null, { id: 3 })).toBe(-1)
            expect(ArrayUtils.findIndexByObject([], { id: 3 })).toBe(-1)
            expect(ArrayUtils.findIndexByObject(array, { id: 3 })).toBe(-1)
            expect(ArrayUtils.findIndexByObject(array, { id: 1 })).toBe(-1)
            expect(ArrayUtils.findIndexByObject(array, { id: 1, name: 'name1' })).toBe(0)
        })
    })

    describe('head', () => {
        it('returns the first element of an array', () => {
            expect(ArrayUtils.head([])).toEqual(undefined)
            expect(ArrayUtils.head(null)).toEqual(undefined)
            expect(ArrayUtils.head([1,2,3])).toEqual(1)
        })
    })

    describe('tail', () => {
        it('returns the list without its head', () => {
            expect(ArrayUtils.tail([])).toEqual([])
            expect(ArrayUtils.tail(null)).toEqual([])
            expect(ArrayUtils.tail([1,2,3])).toEqual([2, 3])
        })
    })

    describe('last', () => {
        it('returns the last element of an array', () => {
            expect(ArrayUtils.last([])).toEqual(undefined)
            expect(ArrayUtils.last(null)).toEqual(undefined)
            expect(ArrayUtils.last([1,2,3])).toEqual(3)
        })
    })

    describe('flatten', () => {
        it('returns the flatten array', () => {
            expect(ArrayUtils.flatten([])).toEqual([])
            expect(ArrayUtils.flatten(null)).toEqual([])
            expect(ArrayUtils.flatten([1,2,3])).toEqual([1,2,3])
            expect(ArrayUtils.flatten([1, [2, 3], 4])).toEqual([1,2,3,4])
        })
    })

    describe('remove', () => {
        it('removes the first occurence of the element', () => {
            expect(ArrayUtils.remove([], 1)).toEqual([])
            expect(ArrayUtils.remove([1,2,3], 2)).toEqual([1, 3])
            expect(ArrayUtils.remove([{n:1},{n:2},{n:3}], {n:2})).toEqual([{n:1}, {n:3}])
            expect(ArrayUtils.remove([1,2,2,3], 2)).toEqual([1, 2, 3])
        })
    })

    describe('indexOf', () => {
        it('returns the index of the element in an array', () => {
            const array = [{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }]

            expect(ArrayUtils.indexOf(null, { id: 3 })).toBe(-1)
            expect(ArrayUtils.indexOf(null, { id: 3 })).toBe(-1)
            expect(ArrayUtils.indexOf([], { id: 3 })).toBe(-1)
            expect(ArrayUtils.indexOf(array, { id: 3 })).toBe(-1)
            expect(ArrayUtils.indexOf(array, { id: 1 })).toBe(0)
            expect(ArrayUtils.indexOf(array, { id: 1, name: 'name1' })).toBe(0)
        })
    })
})
