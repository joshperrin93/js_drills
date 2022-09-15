const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
    it('returns sweets starting Ma and under 10 pounds', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
    })

    it('returns sweets starting Ma and under 2 pounds', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars'])
    })

    it('returns sweets starting S and under 10 pounds', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
    })

    it('returns sweets starting S and under 4 pounds', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ] )
    })

    it('returns sweets starting Ma and under 10 pounds when lower case string passed', () => {
        expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers'])
    })
})