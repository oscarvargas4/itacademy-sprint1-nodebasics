const { test, expect } = require('@jest/globals')
const {
    sum,
    substraction,
    multiply,
    divide
} = require('../app/codeForTest')

const {
    getEmployee,
    getSalary,
    sums
} = require('../asyncAwait')

const { getSalario } = require('../promisesCallbacks')

test('Should pass: 2 + 4 = 6', async () => {
    const response = await sum(2, 4)
    expect(response).toBe(6)
})

test('Should fail: 2 + 4 = 8', async () => {
    const response = await sum(2, 4)
    expect(response).not.toBe(8)
})

test('Should pass: 9 - 4 = 5', async () => {
    const response = await substraction(9, 4)
    expect(response).toBe(5)
})

test('Should fail: 9 - 4 = 10', async () => {
    const response = await substraction(9, 4)
    expect(response).not.toBe(10)
})

test('Should pass: 2 * 4 = 8', async () => {
    const response = await multiply(2, 4)
    expect(response).toBe(8)
})

test('Should fail: 2 * 4 = 10', async () => {
    const response = await multiply(2, 4)
    expect(response).not.toBe(10)
})

test('Should pass: 2 / 4 = 0.5', async () => {
    const response = await divide(2,4)
    expect(response).toBe(0.5)
})

test('Should return Linux Torvalds', async () => {
    const response = await getEmployee(1)
    expect(response.name).toBe('Linux Torvalds')
})

test('Should return 4000', async () => {
    const response = await getSalary({ id: 1, name: 'Linux Torvals' })
    expect(response.salary).toBe(4000)
})

test('Should return 10', async () => {
    const response = await sums(1, 2, 3, 4)
    expect(response).toBe(10)
})

test('Should return 4000', async () => {
    const response = await getSalario(1)
    expect(response.salary).toBe(4000)
})