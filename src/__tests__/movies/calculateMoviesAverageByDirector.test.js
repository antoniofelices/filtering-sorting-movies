import { describe, it, expect } from 'vitest'
import { calculateMoviesAverageByDirector } from '@core/movies/calculate'
import movies from '@data/moviesData'

describe('Function "calculateMoviesAverageByDirector"', () => {
    it('should be declared', () => {
        expect(typeof calculateMoviesAverageByDirector).toBe('function')
    })

    it('should return a number', () => {
        expect(
            typeof calculateMoviesAverageByDirector(movies, 'Stanley Kubrick')
        ).toBe('number')
    })

    it('should return a number', () => {
        expect(typeof calculateMoviesAverageByDirector()).toBe('number')
    })

    it('should be different from NaN', () => {
        expect(
            calculateMoviesAverageByDirector(movies, 'Stanley Kubrick')
        ).not.toBeNaN()
    })

    it('should return 0 average score, because 0/1 = 0', () => {
        expect(
            calculateMoviesAverageByDirector(
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
            calculateMoviesAverageByDirector(
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
