import expect from 'expect'
import ArrayUtils from '../../src/array/utils'

describe('isEmpty', () => {
    it('returns the correct boolean value given the array', () => {
        expect(ArrayUtils.isEmpty(null)).toBe(true);
        expect(ArrayUtils.isEmpty([])).toBe(true);
        expect(ArrayUtils.isEmpty(['one'])).toBe(false);
    })
})
