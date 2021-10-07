//----------------------------------------NIVELL 1----------------------------------------
// - Exercici 1
// Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep.
// Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas.

const sumEqualOddNumber = (a, b)  => {
    return new Promise((resolve, reject) => {
        const sum = a + b
        const odd = sum % 2
        if (odd == 0) {
            resolve("Odd Number")
        } else {
            reject("Even Number")
        }
    })
}

// sumEqualOddNumber(2, 2).then((sum) => {
//     console.log(sum)
// }).catch((e) => {
//     console.log(e)
// })

// sumEqualOddNumber(2, 3).then((sum) => {
//     console.log(sum)
// }).catch((e) => {
//     console.log(e)
// })


// - Exercici 2
// Crear una arrow function que, rebent un paràmetre i una function callback, li passi a la funció un 
// missatge o un altre (que s'imprimirà per consola) en funció del paràmetre.

const sumNumbers = (num1, callback) => {
    setTimeout (() => {
        const num2 = num1 + 10
        const sum = num1 + num2
        callback(sum)
    }, 2000)
}

// sumNumbers(1, (sum) => {
//     console.log(sum)
// })


//----------------------------------------NIVELL 2----------------------------------------
// - Exercici 1
// Donats els objectes employees i salaries, creu una arrow function getEmpleado que retorni 
// una Promise efectuant la cerca en l'objecte pel seu id.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const employeeSearch = employees.find((obj) => obj.id == id)
        if (!employeeSearch) {
            reject("Employee not found")
        }

        const employeeFound = {
            id: employeeSearch.id,
            name: employeeSearch.name
        }

        resolve(employeeFound)

    })
}

// getEmpleado(1).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// getEmpleado(10).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


// - Exercici 2
// Creu una altra arrow function getSalario que rebi com a paràmetre 
// un objecte employee i retorni el seu salari.

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salarySearch = salaries.find((obj) => obj.id == id)
        if (!salarySearch) {
            reject("Salary not found")
        }

        
        
        const salaryFound = {
            id: salarySearch.id,
            salary: salarySearch.salary
        }

        resolve(salaryFound)

    })
}

// getSalario(1).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// getSalario(10).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// - Exercici 3
// Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució de les dues promises.
// getEmpleado(1).then((empleado) => {
//     console.log(empleado)
//     return getSalario(1)
// }).then((salario) => {
//     console.log(salario)
// }).catch((e) => {
//     console.log(e)
// })


//----------------------------------------NIVELL 3----------------------------------------
// - Exercici 1
// Fixi un element catch a la invocació de la fase anterior que capturi 
// qualsevol error i l'imprimeixi per consola.
// getEmpleado(1).then((empleado) => {
//     console.log(empleado)
//     return getSalario(10)
// }).then((salario) => {
//     console.log(salario)
// }).catch((e) => {
//     console.log(e)
// })

module.exports = {
    getSalario
}