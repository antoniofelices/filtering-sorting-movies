import { describe, it, expect } from 'vitest'
import bestFilmOfYear from '@modules/movies/bestFilmOfYear'
import movies from '@content/data'

describe('Function "bestFilmOfYear"', () => {
    it('should be declared', () => {
        expect(typeof bestFilmOfYear).toBe('function')
    })

    it('should return an array', () => {
        expect(bestFilmOfYear() instanceof Array).toBe(true)
    })

    it('should return an array', () => {
        expect(bestFilmOfYear(movies, 1999) instanceof Array).toBe(true)
    })

    it('should return an array', () => {
        expect(bestFilmOfYear([], 1999) instanceof Array).toBe(true)
    })

    it('should return a new array, not update the original one', () => {
        expect(bestFilmOfYear(movies, 1999)).not.toEqual(movies)
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
        expect(bestFilmOfYear(testArr, 1957)).toEqual([
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
