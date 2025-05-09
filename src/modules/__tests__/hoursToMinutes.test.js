import { describe, it, expect } from 'vitest'
import hoursToMinutes from '@modules/hoursToMinutes'
import movies from '@content/data'

describe('Function "hoursToMinutes"', () => {
    it('should be declared', () => {
        expect(typeof hoursToMinutes).toBe('function')
    })

    it('should return an array', () => {
        expect(hoursToMinutes(movies) instanceof Array).toBe(true)
    })

    it('should return an array, a empty array, but an array', () => {
        expect(hoursToMinutes() instanceof Array).toBe(true)
    })

    it('should return a new array, not update the original one', () => {
        expect(hoursToMinutes(movies)).not.toEqual(movies)
    })

    it('should return an array of movies with duration as a number', () => {
        expect(typeof hoursToMinutes(movies)[0].duration).toBe('number')
    })

    it('should return an array of movies with the correct duration for a 31 minute movie', () => {
        const movieTry = [{ duration: '0h 31min' }]
        expect(hoursToMinutes(movieTry)[0].duration).toBe(31)
    })

    it('should return an array of movies with the correct duration for a 341 minute movie', () => {
        const movieTry = [{ duration: '5h 41min' }]
        expect(hoursToMinutes(movieTry)[0].duration).toBe(341)
    })

    it('should return an array of movies with the correct duration for a 2 hour movie', () => {
        const movieTry = [{ duration: '2h' }]
        expect(hoursToMinutes(movieTry)[0].duration).toBe(120)
    })
})
