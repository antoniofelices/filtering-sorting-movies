import { describe, it, expect } from 'vitest'
import { getMoviesFromDirector } from '@modules/movies'
import movies from '@content/data'

describe('Function "getMoviesFromDirector"', () => {
    it('should be declared', () => {
        expect(typeof getMoviesFromDirector).toBe('function')
    })

    it('should return an array', () => {
        expect(getMoviesFromDirector(movies) instanceof Array).toBe(true)
    })

    it('should return a new array, not update the original one', () => {
        expect(getMoviesFromDirector(movies)).not.toEqual(movies)
    })

    it('should return a new array with the movies from director', () => {
        const testArr = [
            {
                title: 'Paths of Glory',
                year: 1957,
                director: 'Stanley Kubrick',
                duration: '1h 28min',
                genre: ['Drama', 'War'],
                score: 8.4,
            },
            {
                title: 'Django Unchained',
                year: 2012,
                director: 'Quentin Tarantino',
                duration: '2h 45min',
                genre: ['Drama', 'Western'],
                score: 8.4,
            },
        ]
        expect(getMoviesFromDirector(testArr, 'Quentin Tarantino')).toEqual([
            {
                title: 'Django Unchained',
                year: 2012,
                director: 'Quentin Tarantino',
                duration: '2h 45min',
                genre: ['Drama', 'Western'],
                score: 8.4,
            },
        ])
    })
})
