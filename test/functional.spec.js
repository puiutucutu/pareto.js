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

    describe('memoize', () => {
        it('memoizes functions', () => {
            let count = 0

            const square = x => {
                count = count + 1
                return x * x
            }

            const memoSquare = FunctionalUtils.memoize(square)

            expect(count).toBe(0)

            expect(memoSquare(10)).toBe(100)
            expect(memoSquare(10)).toBe(100)
            expect(memoSquare(10)).toBe(100)

            expect(count).toBe(1)

            expect(memoSquare(25)).toBe(625)
            expect(memoSquare(25)).toBe(625)

            expect(count).toBe(2)
        })
    })
})
