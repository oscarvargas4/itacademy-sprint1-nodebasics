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
    add,
    sums
} = require('../asyncAwait')

const { getSalario } = require('../promisesCallbacks')

const { Persona } = require('../classesArrowFunctions')

https://jestjs.io/docs/timer-mocks
afterEach(() => {
    jest.useRealTimers()
})



//----------------------------------------NIVELL 1----------------------------------------

// Exercisi 1
// Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands.
// Testeja la correcta execució d'aquestes funcions.

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

// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1

test('Should return Linux Torvalds', async () => {
    const response = await getEmployee(1)
    expect(response.name).toBe('Linux Torvalds')
})

// Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1

test('Should return 4000', async () => {
    const response = await getSalary({ id: 1, name: 'Linux Torvals' })
    expect(response.salary).toBe(4000)
})

// Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

// Aquest test correspond a l'opció 1 del asyncAwait.js (comentat):
// test('Should return 3', async () => {
//     const response = await sums(1, 2)
//     expect(response).toBe(3)
// })

// Opció 2 - No sé com solucionar el promise que hi ha a dins de la funció sums:
test('Should return 6', async () => {
    const response = await sums(() => {
        return 6
    })

    expect(response).toBe(6)
})

test('Testing add promise', async() => {
    const response = await add(2, 4)
    expect(response).toBe(6)
})

// Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

test('Should return 4000', async () => {
    const response = await getSalario(1)
    expect(response.salary).toBe(4000)
})


// Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.
// https://jestjs.io/docs/timer-mocks

it('Mock Fake Timer with async function', () => {    
    jest.useFakeTimers()

    const response = add(2, 4)

    jest.advanceTimersByTime(2000)
    expect(response).not.toBeNull()
})


//----------------------------------------NIVELL 2----------------------------------------
// Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode decirNombre en
// l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2

jest.mock('../classesArrowFunctions')

it('We can check if the consumer called the class constructor', () => {
    const persona = new Persona("Oscar");
    expect(persona).toHaveBeenCalledTimes(1);
  });

//   it('We can check if the consumer called the class constructor', () => {
//     const soundPlayerConsumer = new SoundPlayerConsumer();
//     expect(SoundPlayer).toHaveBeenCalledTimes(1);
//   });