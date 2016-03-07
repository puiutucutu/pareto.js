import expect from 'expect'
import isEmpty from '../../array/utils'

describe('isEmpty', () => {
    it('returns the correct boolean value given the array', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty([])).toBe(true);
        expect(isEmpty(['one'])).toBe(false);
    })
})
