const oscar = require('../user')

jest.mock('../user.js')

test('', () => {
    expect(oscar).toBe("Vanessa")
})