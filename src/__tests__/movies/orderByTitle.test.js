import { describe, it, expect } from 'vitest'
import { orderByTitle } from '@modules/movies'

describe('Function "orderByTitle"', () => {
    it('should be declared', () => {
        expect(typeof orderByTitle).toBe('function')
    })

    it('should return an array', () => {
        expect(typeof orderByTitle([])).toBe('object')
    })

    it('should return an array', () => {
        expect(orderByTitle() instanceof Array).toBe(true)
    })

    it('should not mutate the original array', () => {
        const arr = [{ title: 'xyz' }, { title: 'abc' }]
        orderByTitle(arr)
        expect(arr[0].title).toEqual('xyz')
    })

    it('should only return the title of the movies, each value should be a string', () => {
        expect(typeof orderByTitle([{ title: 'aab' }])[0]).toBe('string')
    })

    it('should return all of items when the array passed has fewer than 20 items', () => {
        const moviesArr = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }]
        expect(orderByTitle(moviesArr)).toHaveLength(3)
    })

    it('should order them alphabetically.', () => {
        const moviesArr = [
            { title: 'aab' },
            { title: 'aaa' },
            { title: 'abc' },
            { title: 'acb' },
            { title: 'abb' },
        ]

        expect(orderByTitle(moviesArr)).toEqual([
            'aaa',
            'aab',
            'abb',
            'abc',
            'acb',
        ])
    })

    it('should return the top 20 after ordering them alphabetically.', () => {
        const moviesArr = [
            { title: 'aab' },
            { title: 'bab' },
            { title: 'acb' },
            { title: 'aaa' },
            { title: 'bbb' },
            { title: 'anc' },
            { title: 'kns' },
            { title: 'zds' },
            { title: 'pow' },
            { title: 'gda' },
            { title: 'res' },
            { title: 'ter' },
            { title: 'bca' },
            { title: 'ccc' },
            { title: 'bbt' },
            { title: 'qas' },
            { title: 'kmn' },
            { title: 'frt' },
            { title: 'afb' },
            { title: 'agb' },
            { title: 'apo' },
            { title: 'poa' },
            { title: 'cdf' },
            { title: 'sea' },
            { title: 'lom' },
            { title: 'acs' },
            { title: 'qas' },
            { title: 'mns' },
            { title: 'bvc' },
            { title: 'gha' },
            { title: 'lkj' },
            { title: 'era' },
            { title: 'ert' },
            { title: 'tex' },
            { title: 'zas' },
            { title: 'pol' },
        ]

        expect(orderByTitle(moviesArr)).toEqual([
            'aaa',
            'aab',
            'acb',
            'acs',
            'afb',
            'agb',
            'anc',
            'apo',
            'bab',
            'bbb',
            'bbt',
            'bca',
            'bvc',
            'ccc',
            'cdf',
            'era',
            'ert',
            'frt',
            'gda',
            'gha',
        ])
    })
})
