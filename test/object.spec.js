import expect from 'expect'

import {
    equals, matches, isEmpty
} from '../src/utils/object'

describe('object', () => {
    describe('equals', () => {
        it('returns true if the object is equal', () => {
            const obj1 = {a:1, b:2}
            const obj2 = obj1
            const obj3 = {a:1, b:2}
            const obj4 = {a:1}

            expect(equals(obj1, obj2)).toBe(true)
            expect(equals(obj1, obj3)).toBe(true)
            expect(equals(obj1, obj4)).toBe(false)

        })

        it('return true if the object that contains an array is equal', () => {
            const obj1 = {a:1, c: [1,2,3]}

            expect(equals(obj1, {a:1, c: [1,2,3]})).toBe(true)
            expect(equals(obj1, {a:1, c: []})).toBe(false)
            expect(equals(obj1, {a: 1})).toBe(false)
        })

        it('returns true if array object is equal', () => {
            expect(equals([1,2,3], [2,3,4])).toBe(false)
            expect(equals([1,2], [1,2,3])).toBe(false)
            expect(equals([1,2,3], [1,2,3])).toBe(true)
        })
    })

    describe('matches', () => {
        it('returns true if the object matches some properties', () => {
            const obj1 = {a:1, b:2}

            expect(matches(obj1, {a: 1, b: 2})).toBe(true)
            expect(matches(obj1, {a: 1})).toBe(true)
            expect(matches(obj1, {a: 3})).toBe(false)
        })
    })
})
