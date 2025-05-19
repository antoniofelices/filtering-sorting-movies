import { describe, it, expect } from 'vitest'
import { getBestFilmOfYear } from '@core/movies/filter'
import movies from '@data/moviesData'

describe('Function "getBestFilmOfYear"', () => {
    it('should be declared', () => {
        expect(typeof getBestFilmOfYear).toBe('function')
    })

    it('should return an array', () => {
        expect(getBestFilmOfYear() instanceof Array).toBe(true)
    })

    it('should return an array', () => {
        expect(getBestFilmOfYear(movies, 1999) instanceof Array).toBe(true)
    })

    it('should return an array', () => {
        expect(getBestFilmOfYear([], 1999) instanceof Array).toBe(true)
    })

    it('should return a new array, not update the original one', () => {
        expect(getBestFilmOfYear(movies, 1999)).not.toEqual(movies)
    })

    it('should return the best film of a year, searching in an array', () => {
        const testArr = [
            {
                title: 'Film1',
                year: 1957,
                director: 'Stanley Kubrick',
                duration: '1h 28min',
                genre: ['Drama', 'War'],
                score: 6,
            },
            {
                title: 'Film2',
                year: 1957,
                director: 'Stanley Kubrick',
                duration: '1h 28min',
                genre: ['Drama', 'War'],
                score: 8.4,
            },
            {
                title: 'Film3',
                year: 1957,
                director: 'Stanley Kubrick',
                duration: '1h 28min',
                genre: ['Drama', 'War'],
                score: 5,
            },
        ]
        expect(getBestFilmOfYear(testArr, 1957)).toEqual([
            {
                title: 'Film2',
                year: 1957,
                director: 'Stanley Kubrick',
                duration: '1h 28min',
                genre: ['Drama', 'War'],
                score: 8.4,
            },
        ])
    })
})
