import expect from 'expect'
import FunctionUtils from '../src/utils/function'

describe('FunctionUtils', () => {
    describe('curry', () => {
        it('returns the curried function', () => {
            const add = (a, b) => a + b

            expect(FunctionUtils.curry(add, 1, 2)).toBe(3)
            expect(FunctionUtils.curry(add)(1)(2)).toBe(3)
            expect(FunctionUtils.curry(add)(1, 2)).toBe(3)
            expect(FunctionUtils.curry(add, 1)(2)).toBe(3)
        })
    })

    describe('compose', () => {
        it('composes functions', () => {
            const toUpperCase = x => x.toUpperCase()
            const exclaim = x => x + '!'
            const moreExclaim = x => x + '!!'

            expect(FunctionUtils.compose(toUpperCase, exclaim)('test')).toBe('TEST!')
            expect(FunctionUtils.compose(toUpperCase, exclaim, moreExclaim)('test')).toBe('TEST!!!')
        })
    })

    describe('memoize', () => {
        it('memoizes functions', () => {
            let count = 0

            const square = x => {
                count = count + 1
                return x * x
            }

            const memoSquare = FunctionUtils.memoize(square)

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

    describe('debounce', () => {
        it('debounces functions', (done) => {
            let a = 1
            const fn = () => a = 42

            const debounced = FunctionUtils.debounce(fn, 100)
            debounced()

            expect(a).toBe(1)

            setTimeout(() => {
                expect(a).toBe(42)
                done()
            }, 300)
        })
    })

    describe('throttle', () => {
        it('throttles functions', (done) => {
            let a = 1
            const fn = () => a++

            const throttled = FunctionUtils.throttle(fn, 200)
            throttled()

            expect(a).toBe(2)

            setTimeout(() => {
                throttled()
                expect(a).toBe(2)
                done()
            }, 100)

            setTimeout(() => {
                throttled()
                expect(a).toBe(3)
                done()
            }, 300)
        })
    })
})
