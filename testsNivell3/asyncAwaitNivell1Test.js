// Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON.
// Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
// https://heynode.com/tutorial/readwrite-json-files-nodejs/

const fs = require('fs')


const getEmployeeJSONFile = (id) => fs.readFile("./testingJSON.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed", err)
        return
    }

    try {
        const jsonObject = JSON.parse(jsonString)
        const employees = jsonObject.employees
        
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

        getEmployee(id).then((employee) => {
            console.log(employee)    
        }).catch((e) => {
            console.log(e)
        })
    } catch (e) {
        throw new error(e)
    }
})

getEmployeeJSONFile(1)

const getSalaryJSONFile = (employeeObject) => fs.readFile("./testingJSON.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed", err)
        return
    }

    try {
        const jsonObject = JSON.parse(jsonString)
        const salaries = jsonObject.salaries

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

        getSalary(employeeObject).then((employee) => {
            console.log(employee.salary)    
        }).catch((e) => {
            console.log(e)
        })
    } catch (e) {
        throw new error(e)
    }
})

getSalaryJSONFile({ id: 1, name: 'Linux Torvalds' })





// https://medium.com/@anmol5varma/mocking-functions-and-files-while-testing-javascript-app-using-jest-93542a6f6738
// https://newbedev.com/jest-mock-import-of-json-file