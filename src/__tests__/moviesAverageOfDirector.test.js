import { describe, it, expect } from 'vitest'
import moviesAverageOfDirector from '@modules/movies/moviesAverageOfDirector'
import movies from '@content/data'

describe('Function "moviesAverageOfDirector"', () => {
    it('should be declared', () => {
        expect(typeof moviesAverageOfDirector).toBe('function')
    })

    it('should return a number', () => {
        expect(typeof moviesAverageOfDirector(movies, 'Stanley Kubrick')).toBe(
            'number'
        )
    })

    it('should return a number', () => {
        expect(typeof moviesAverageOfDirector()).toBe('number')
    })

    it('should be different from NaN', () => {
        expect(moviesAverageOfDirector(movies, 'Stanley Kubrick')).not.toBeNaN()
    })

    it('should return 0 average score, because 0/1 = 0', () => {
        expect(
            moviesAverageOfDirector(
                [
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
                    {
                        title: 'Pulp Fiction',
                        year: 1994,
                        director: 'Quentin Tarantino',
                        duration: '2h 34min',
                        genre: ['Crime', 'Drama'],
                        score: 8.9,
                    },
                ],
                'Lamine Yamal'
            )
        ).toBe(0)
    })

    it(' should return the average score of movies selecting only the director films. With 2 decimals! ', () => {
        expect(
            moviesAverageOfDirector(
                [
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
                    {
                        title: 'Pulp Fiction',
                        year: 1994,
                        director: 'Quentin Tarantino',
                        duration: '2h 34min',
                        genre: ['Crime', 'Drama'],
                        score: 8.9,
                    },
                ],
                'Quentin Tarantino'
            )
        ).toBe(8.65)
    })
})
