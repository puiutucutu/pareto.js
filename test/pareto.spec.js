import expect from 'expect'
import _ from '../src/pareto'

describe('Pareto', () => {
    describe('head', () => {
        it('returns the first element of the array', () => {
            expect(_.head(null)).toEqual([])
            expect(_.head([])).toEqual([])
            expect(_.head([1])).toEqual([1])
            expect(_.head([1,2,3])).toEqual([1])
        })
    })

    describe('tail', () => {
        it('removes the first element and returns the rest of the the array', () => {
            expect(_.tail(null)).toEqual([])
            expect(_.tail([])).toEqual([])
            expect(_.tail([1])).toEqual([])
            expect(_.tail([1,2,3])).toEqual([2,3])
        })
    })

    describe('last', () => {
        it('returns the last element of the array', () => {
            expect(_.last(null)).toEqual([])
            expect(_.last([])).toEqual([])
            expect(_.last([1])).toEqual([1])
            expect(_.last([1,2,3])).toEqual([3])
        })
    })

    describe('flatten', () => {
        it('returns the flatten array', () => {
            expect(_.flatten(null)).toEqual([])
            expect(_.flatten([])).toEqual([])
            expect(_.flatten([1])).toEqual([1])
            expect(_.flatten([1,2,3])).toEqual([1,2,3])
            expect(_.flatten([[1,[2,[[3]]]],4,[5,[[[6]]]]])).toEqual([1,2,3,4,5,6])
        })
    })

    describe('curry', () => {
        it('returns the curried function', () => {
            const add = (a, b) => a + b

            expect(_.curry(add, 1, 2)).toBe(3)
            expect(_.curry(add)(1)(2)).toBe(3)
            expect(_.curry(add)(1, 2)).toBe(3)
            expect(_.curry(add, 1)(2)).toBe(3)
        })
    })

    describe('compose', () => {
        it('composes functions', () => {
            const toUpperCase = x => x.toUpperCase()
            const exclaim = x => x + '!'
            const moreExclaim = x => x + '!!'

            expect(_.compose(toUpperCase, exclaim)('test')).toBe('TEST!')
            expect(_.compose(toUpperCase, exclaim, moreExclaim)('test')).toBe('TEST!!!')
        })
    })
})
