import expect from 'expect'
import FunctionalUtils from '../src/utils/functional'

describe('FunctionalUtils', () => {
    describe('curry', () => {
        it('returns the curried function', () => {
            const add = (a, b) => a + b

            expect(FunctionalUtils.curry(add, 1, 2)).toBe(3)
            expect(FunctionalUtils.curry(add)(1)(2)).toBe(3)
            expect(FunctionalUtils.curry(add)(1, 2)).toBe(3)
            expect(FunctionalUtils.curry(add, 1)(2)).toBe(3)
        })
    })

    describe('compose', () => {
        it('composes functions', () => {
            const toUpperCase = x => x.toUpperCase()
            const exclaim = x => x + '!'
            const moreExclaim = x => x + '!!'

            expect(FunctionalUtils.compose(toUpperCase, exclaim)('test')).toBe('TEST!')
            expect(FunctionalUtils.compose(toUpperCase, exclaim, moreExclaim)('test')).toBe('TEST!!!')
        })
    })
})
