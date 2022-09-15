const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
    it('returns sweets starting Ma and under 10 pounds', () => {
        expect(searchCandies('Ma', 10)).toBe(['Mars', 'Maltesars'])
    })
})