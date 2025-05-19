import { describe, it, expect } from 'vitest'
import { modifyGenreArrayShallowCopy } from '@core/movies/modify'
import movies from '@data/moviesData'

describe('Function "modifyGenreArrayShallowCopy"', () => {
    it('should be declared', () => {
        expect(typeof modifyGenreArrayShallowCopy).toBe('function')
    })

    it('should return an array', () => {
        expect(modifyGenreArrayShallowCopy(movies) instanceof Array).toBe(true)
    })

    it('should return an array, a empty array, but an array', () => {
        expect(modifyGenreArrayShallowCopy() instanceof Array).toBe(true)
    })

    it('should return the same array', () => {
        expect(modifyGenreArrayShallowCopy(movies)).toEqual(movies)
    })

    it('should return an array, genre is steel an a array', () => {
        expect(
            modifyGenreArrayShallowCopy(movies)[0].genre instanceof Array
        ).toBe(true)
    })

    it('should return the same array for the genre array', () => {
        const genreTry = [{ genre: ['Crime', 'Drama'] }]
        expect(modifyGenreArrayShallowCopy(genreTry)[0].genre).toEqual(
            movies[0].genre
        )
    })
})
