import { describe, it, expect } from 'vitest'
import getAllDirectors from '@modules/movies/getAllDirectors'
import movies from '@content/data'

describe('Function "getAllDirectors"', () => {
    it('should be declared', () => {
        expect(typeof getAllDirectors).toBe('function')
    })

    it('should return an array', () => {
        expect(getAllDirectors(movies) instanceof Array).toBe(true)
    })

    it('should return a new array, not update the original one', () => {
        expect(getAllDirectors(movies)).not.toEqual(movies)
    })

    it('should return a new array with the same length as the original one', () => {
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
        expect(getAllDirectors(testArr)).toEqual([
            'Stanley Kubrick',
            'Quentin Tarantino',
        ])
    })
})
