import expect from 'expect'
import ObjectUtils from '../src/utils/object'

describe('ObjectUtils', () => {
    describe('isEqual', () => {
        it('returns true if the object is equal', () => {
            const obj1 = {a:1, b:2}
            const obj2 = obj1
            const obj3 = {a:1, b:2}
            const obj4 = {a:1}

            expect(ObjectUtils.isEqual(obj1, obj2)).toBe(true)
            expect(ObjectUtils.isEqual(obj1, obj3)).toBe(true)
            expect(ObjectUtils.isEqual(obj1, obj4)).toBe(false)
        })
    })
})
