import expect from 'expect'
import ArrayUtils from '../../array/utils'

describe('ArrayUtils', () => {
    describe('init', () => {
        it('exposes the public API', () => {
            const arrayUtils = ArrayUtils()
            const methods = Object.keys(arrayUtils)

            expect(methods.length).toBe(1)
            expect(methods).toContain('isEmpty')
        })
    })

    describe('isEmpty', () => {
       it('returns the correct boolean value given the array', () => {
           const arrayUtils = ArrayUtils()

           expect(arrayUtils.isEmpty(null)).toBe(true);
           expect(arrayUtils.isEmpty([])).toBe(true);
           expect(arrayUtils.isEmpty(['one'])).toBe(false);
       })
    })
})
