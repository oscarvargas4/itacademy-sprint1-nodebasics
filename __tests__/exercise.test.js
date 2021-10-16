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
const { getEmployeeJSONFile, getSalaryJSONFile } = require('../asyncAwaitNivell1ForTest')



// https://jestjs.io/docs/timer-mocks
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

test('Confirms the sums function and the callback', async () => {
    const response = await sums(() => {
        return 6
    })

    expect(response).toBe(6)

    const response2 = await add(2, 4, () => 'Callback for tetsing')
    expect(response2).toBe(6)
})

test('Test for add Promise', () => {
    return add(1, 2, () => 'Callback for tetsing').then(data => {
        expect(data).toBe(3)
    })
})


// Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

test('Should return 4000', async () => {
    const response = await getSalario(1)
    expect(response.salary).toBe(4000)
})


// Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.

test('Fake Timers', () => {
    const callback = jest.fn()

    sums(callback)

    expect(callback).toHaveBeenCalled()

    const cb = () => {
        jest.runAllTimers()
    }    

    jest.useFakeTimers()

    return add(1, 2, cb).then(data => {
        expect(data).toBe(3)
    })
})


//----------------------------------------NIVELL 2----------------------------------------
// Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode decirNombre en
// l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2
// https://www.youtube.com/watch?v=9EV9gtnt-go

jest.mock('../classesArrowFunctions')

test('Constructor and method calling', () => {
    const someone = new Persona("Proof")
    expect(someone).toBeInstanceOf(Persona) // Testing that someone is an instance of "Person" class
    expect(someone.nom).toBe("Proof")
    expect(someone.decirNombre()).toBe("Test")

})

// Verifica mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1.

test('Abstract Function', () => {
    const ClassNonCallable = jest.fn()
    
    class TestCars extends ClassNonCallable {    
        constructor() {
            super()
        }
    }

    const cars = new TestCars()
    
    expect(cars).toBeInstanceOf(TestCars)

    TestCars.prototype.createObject = (carOne, carTwo, carThree) => {
        const obj = {
            carOne,
            carTwo,
            carThree
        }

        return obj
    }

    //https://codewithhugo.com/jest-array-object-match-contain/
    const objMethod = cars.createObject("1", "2", "3")
    expect(objMethod).toEqual(expect.objectContaining({
        carOne: "1",
        carTwo: "2",
        carThree: "3"
    }))

})

// Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON.
// Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
// https://heynode.com/tutorial/readwrite-json-files-nodejs/

// Exercisi refet en "asyncAwaitNivell1ForTest.js"

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
