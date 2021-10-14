
jest.mock('../testingJSON.json', () => {
    return employes = [
        { id: 1, name: 'Linux Torvalds' }
    ]
})

jest.mock('../testingJSON.json', () => {
    return salaries = [{
        "id": 1,
        "salary": 4000
    }]
})