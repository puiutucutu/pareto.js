import expect from 'expect'
import ObjectUtils from '../src/utils/object'

describe('ObjectUtils', () => {
    describe('equals', () => {
        it('returns true if the object is equal', () => {
            const obj1 = {a:1, b:2}
            const obj2 = obj1
            const obj3 = {a:1, b:2}
            const obj4 = {a:1}

            expect(ObjectUtils.equals(obj1, obj2)).toBe(true)
            expect(ObjectUtils.equals(obj1, obj3)).toBe(true)
            expect(ObjectUtils.equals(obj1, obj4)).toBe(false)
        })
    })

    describe('matches', () => {
        it('returns true if the object matches some properties', () => {
            const obj1 = {a:1, b:2}

            expect(ObjectUtils.matches(obj1, {a: 1, b: 2})).toBe(true)
            expect(ObjectUtils.matches(obj1, {a: 1})).toBe(true)
            expect(ObjectUtils.matches(obj1, {a: 3})).toBe(false)
        })
    })
})
