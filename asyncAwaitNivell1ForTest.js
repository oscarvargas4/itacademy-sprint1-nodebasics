// Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON.
// Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
// https://heynode.com/tutorial/readwrite-json-files-nodejs/

const readJSON = require('./readJSON')


const getEmployeeJSONFile = (id) => {
    return new Promise((resolve, reject) => {
        const jsonObject = readJSON('./testingJSON.json')
        const employees = jsonObject.employees
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

// getEmployeeJSONFile(1).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })



const getSalaryJSONFile = (employeeObject) => {
    return new Promise((resolve, reject) => {
        const jsonObject = readJSON('./testingJSON.json')
        const salaries = jsonObject.salaries
        const salarySearch = salaries.find((obj) => obj.id == employeeObject.id)
        if (!salarySearch) {
            reject("Salary not found")
        }

        const salaryFound = {
            id: salarySearch.id,
            salary: salarySearch.salary
        }

        resolve(salaryFound.salary)

    })        
}

// getSalaryJSONFile({ id: 1, name: 'Linux Torvals' }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


module.exports = {
    getEmployeeJSONFile,
    getSalaryJSONFile
}





// https://medium.com/@anmol5varma/mocking-functions-and-files-while-testing-javascript-app-using-jest-93542a6f6738
// https://newbedev.com/jest-mock-import-of-json-file