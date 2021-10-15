const { getEmployeeJSONFile, getSalaryJSONFile } = require('../asyncAwaitNivell1ForTest')

jest.mock('../readJSON')

test('Mocking JSON file', async () => {
    const response = await getEmployeeJSONFile(1)
    expect(response.name).toBe("Oscar Vargas")

    const secondResponse = await getSalaryJSONFile({
        "id": 1,
        "name": "Oscar Vargas"
    })
    expect(secondResponse).toBe(10000)

})