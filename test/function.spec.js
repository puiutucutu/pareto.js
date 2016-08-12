import expect from 'expect'

import {
  curry, compose, memoize, debounce, throttle, pipe
} from '../src/utils/function'

describe('function', () => {
  describe('curry', () => {
    it('returns the curried function', () => {
      const add = (a, b) => a + b

      expect(curry(add, 1, 2)).toBe(3)
      expect(curry(add)(1)(2)).toBe(3)
      expect(curry(add)(1, 2)).toBe(3)
      expect(curry(add, 1)(2)).toBe(3)
    })
  })

  describe('compose', () => {
    it('composes functions', () => {
      const toUpperCase = x => x.toUpperCase()
      const exclaim = x => `${x}!`
      const moreExclaim = x => `${x}!!`

      expect(compose(toUpperCase, exclaim)('test')).toBe('TEST!')
      expect(compose(toUpperCase, exclaim, moreExclaim)('test')).toBe('TEST!!!')
    })
  })

  describe('memoize', () => {
    it('memoizes functions', () => {
      let count = 0

      const square = x => {
        count = count + 1
        return x * x
      }

      const memoSquare = memoize(square)

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
    it('debounces a function', (done) => {
      let a = 1
      const fn = () => a = 42

      const debounced = debounce(fn, 100)
      debounced()

      expect(a).toBe(1)

      setTimeout(() => {
        expect(a).toBe(42)
        done()
      }, 300)
    })

    it('invokes immediately', (done) => {
      let a = 1
      const fn = () => a = 42

      const debounced = debounce(fn, 100, true)
      debounced()

      expect(a).toBe(42)

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

      const throttled = throttle(fn, 200)
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

  describe('pipe', () => {
    it('pipes functions', () => {
      const increment = (x) => x + 1
      const decrement = (x) => x - 1
      const double = (x) => x * 2

      const pipe1 = pipe(increment, decrement, increment)
      expect(pipe1(0)).toBe(1)

      const pipe2 = pipe(increment, increment, double)
      expect(pipe2(0)).toBe(4)

      const pipe3 = pipe(decrement, double, decrement)
      expect(pipe3(0)).toBe(-3)
    })
  })
})
