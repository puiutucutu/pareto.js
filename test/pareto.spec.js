import expect from 'expect'
import Pareto from '../pareto'

describe('Pareto', () => {
    describe('init', () => {
        it('exposes the public API', () => {
            const pareto = Pareto()
            const methods = Object.keys(pareto)

            expect(methods.length).toBe(4)
            expect(methods).toContain('head')
            expect(methods).toContain('last')
            expect(methods).toContain('tail')
            expect(methods).toContain('flatten')
        })
    })
})
