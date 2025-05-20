import { describe, it, expect } from 'vitest'
import { modifyGenreArrayDeepCopy } from '@core/movies'
import movies from '@data/moviesData'

describe('Function "modifyGenreArrayDeepCopy"', () => {
    it('should be declared', () => {
        expect(typeof modifyGenreArrayDeepCopy).toBe('function')
    })

    it('should return an array', () => {
        expect(modifyGenreArrayDeepCopy(movies) instanceof Array).toBe(true)
    })

    it('should return an array, a empty array, but an array', () => {
        expect(modifyGenreArrayDeepCopy() instanceof Array).toBe(true)
    })

    it('should return a new array, not update the original one', () => {
        expect(modifyGenreArrayDeepCopy(movies)).not.toEqual(movies)
    })

    it('should return an array, genre is steel an a array', () => {
        expect(modifyGenreArrayDeepCopy(movies)[0].genre instanceof Array).toBe(
            true
        )
    })

    it('should return an different array for the genre array, not update the original one', () => {
        const genreTry = [{ genre: ['Crime', 'Drama'] }]
        expect(modifyGenreArrayDeepCopy(genreTry)[0].genre).not.toEqual(
            movies[0].genre
        )
    })
})
