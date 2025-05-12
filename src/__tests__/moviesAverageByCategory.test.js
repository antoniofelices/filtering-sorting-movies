import { describe, it, expect } from 'vitest'
import moviesAverageByCategory from '@modules/movies/moviesAverageByCategory'
import movies from '@content/data'

describe('Function "moviesAverageByCategory"', () => {
    it('should be declared', () => {
        expect(typeof moviesAverageByCategory).toBe('function')
    })

    it('should return 0, because do not pass parameters', () => {
        expect(typeof moviesAverageByCategory()).toBe('number')
    })

    it('should return a number', () => {
        expect(typeof moviesAverageByCategory(movies, 'Drama')).toBe('number')
    })

    it('should return 0 average score, because 0/1 = 0', () => {
        expect(
            moviesAverageByCategory(
                [
                    {
                        title: 'The Godfather',
                        year: 1972,
                        director: 'Francis Ford Coppola',
                        duration: '2h 55min',
                        genre: ['Crime', 'Drama'],
                        score: 9.2,
                    },
                    {
                        title: 'The Godfather: Part II',
                        year: 1974,
                        director: 'Francis Ford Coppola',
                        duration: '3h 22min',
                        genre: ['Crime', 'Drama'],
                        score: 9,
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
                'Thriller'
            )
        ).toBe(0)
    })

    it('should return the average score of movies selecting only the genre films. With 2 decimals! ', () => {
        expect(
            moviesAverageByCategory(
                [
                    {
                        title: 'The Godfather',
                        year: 1972,
                        director: 'Francis Ford Coppola',
                        duration: '2h 55min',
                        genre: ['Crime', 'Drama'],
                        score: 9.2,
                    },
                    {
                        title: 'The Godfather: Part II',
                        year: 1974,
                        director: 'Francis Ford Coppola',
                        duration: '3h 22min',
                        genre: ['Crime', 'Drama'],
                        score: 9,
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
                'Crime'
            )
        ).toBe(9.03)
    })
})
