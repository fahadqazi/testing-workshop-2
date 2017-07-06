import makeMeASandwich from '../make-me-a-sandwich'

test('should return null if sandwich dont exist', () => {
    const req = {query: ''}
    const result = makeMeASandwich(req)
    expect(result).toBeNull()
})