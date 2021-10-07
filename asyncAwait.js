//----------------------------------------NIVELL 1----------------------------------------
// - Exercici 1
// Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una
// Promise efectuant la cerca en l'objecte pel seu id. Crea una altra arrow function getSalary que
// rebi com a paràmetre un objecte employee i retorni el seu salari.

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
}]

const getEmployee = (id) => {
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

const getSalary = (employeeFound) => {
    return new Promise((resolve, reject) => {
        const salarySearch = salaries.find((obj) => obj.id == employeeFound.id)
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

// getEmployee(1).then((employee) => {
//     console.log(employee)    
// }).catch((e) => {
//     console.log(e)
// })


// getSalary({ id: 1, name: 'Linux Torvals' }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


// - Exercici 2
// Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom 
// de l'empleat i el seu salari, usant les funcions que has definit a l'exercici anterior.

const findEmployeeAndSalary = async (id) => {
    const employee = await getEmployee(id)
    const salary = await getSalary(employee)

    return {
        id: employee.id,
        name: employee.name,
        salary: salary.salary
    }
}

// findEmployeeAndSalary(1).then((employee) => {
//     console.log(employee.id)
//     console.log(employee.name)
//     console.log(employee.salary)
// }).catch((e) => {
//     console.log(e)
// })

//----------------------------------------NIVELL 2----------------------------------------
// - Exercici 1
// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva 
// funció resolve() després de 2 segons de la seva invocació.

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b)
            } else {
                reject("The parameters must be numbers")
            }            
        }, 2000)
    })
}

const sums = async (num1, num2, num3, num4) => {
    const sum1 = await add(num1, num2)
    const sum2 = await add(num3, num4)
    const sum3 = sum1 + sum2
    return sum3
}

// sums(1, 2, 3, 4).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


//----------------------------------------NIVELL 3----------------------------------------
// - Exercici 1
// Captura tots els errors possibles dels nivells 1 i 2.

// getEmployee(20).then((employee) => {
//     console.log(employee)    
// }).catch((e) => {
//     console.log('Error:', e)
// })


// getSalary({ id: 21, name: 'Linux Torvals' }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log('Error:', e)
// })

// findEmployeeAndSalary(22).then((employee) => {
//     console.log(employee.id)
//     console.log(employee.name)
//     console.log(employee.salary)
// }).catch((e) => {
//     console.log('Error:', e)
// })

// sums(1, 2, "Hola", 4).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log('Error', e)
// })


module.exports = {
    employees,
    salaries,
    getEmployee,
    getSalary,
    add,
    sums
}