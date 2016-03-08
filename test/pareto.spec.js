import expect from 'expect'
import _ from '../src/pareto'

describe('Pareto', () => {
    describe('init', () => {
        const methods = Object.keys(_)

        expect(methods.length).toBe(10)
        expect(methods).toContain('head')
        expect(methods).toContain('tail')
        expect(methods).toContain('last')
        expect(methods).toContain('flatten')
        expect(methods).toContain('remove')
        expect(methods).toContain('removeAll')
        expect(methods).toContain('where')
        expect(methods).toContain('curry')
        expect(methods).toContain('compose')
    })
})
