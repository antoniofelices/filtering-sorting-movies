import { describe, it, expect } from 'vitest'
import { orderByYear } from '@modules/movies'
import movies from '@content/data'

describe('Function "orderByYear"', () => {
    it('should be declared', () => {
        expect(typeof orderByYear).toBe('function')
    })

    it('should return an array', () => {
        expect(typeof orderByYear(movies)).toBe('object')
    })

    it('should return an array', () => {
        expect(orderByYear() instanceof Array).toBe(true)
    })

    it('should return a new array', () => {
        const arr = []
        expect(orderByYear(arr)).not.toBe(arr)
    })

    it('should return the element in a single element array', () => {
        expect(orderByYear([{ year: 1982 }])).toEqual([{ year: 1982 }])
    })

    it('should return the new array in ascending order', () => {
        expect(
            orderByYear([{ year: 2002 }, { year: 1982 }, { year: 1995 }])
        ).toEqual([{ year: 1982 }, { year: 1995 }, { year: 2002 }])
    })

    it('should order movies with the same year by their title, alphabetically', () => {
        expect(
            orderByYear([
                { title: 'abc', year: 2002 },
                { title: 'bac', year: 1982 },
                { title: 'aab', year: 1982 },
            ])
        ).toEqual([
            { title: 'aab', year: 1982 },
            { title: 'bac', year: 1982 },
            { title: 'abc', year: 2002 },
        ])
    })
})
