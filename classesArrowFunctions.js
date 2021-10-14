//----------------------------------------NIVELL 1----------------------------------------
// - Exercici 1
// Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres.

// (()=> {
//     const a = 10
//     const b = 25
//     console.log(a + b)
// })()

//----------------------------------------NIVELL 2----------------------------------------
// - Exercici 1
// Crear una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que 
// tingui com a valor el paràmetre rebut.

const arrowProof = (proof) => {
    const obj = {
        proof
    }

    return obj
}

// console.log(arrowProof("Hola"))


// - Exercici 2
// Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat. La classe inclourà un mètode 
// decirNombre que imprimeixi per consola el paràmetre 'Nom'. Invocar el mètode decirNombre des de fora de 
// la classe.

class Persona {
    constructor(nom) {   
        this.nom = nom     
    }
    decirNombre() {
        console.log(this.nom)
    }
}

const persona =  new Persona("Oscar")

// persona.decirNombre()


//----------------------------------------NIVELL 3----------------------------------------
// - Exercici 1
// Crear una function creadora d'objectes, abstraient la definició de les classes. 
// Invocar-amb diferents definicions.
//Abstract class

class ClassNonCallable {
    constructor() {
        if (new.target === ClassNonCallable) {
            throw new Error('Abstract class cannot be Instantied')
        }
    }
    
}

class CochesDeOscar extends ClassNonCallable {    
    constructor() {
        super()
    }

    createCarsObject(carOne, carTwo, carThree) {
        const cars = {
            carOne,
            carTwo,
            carThree
        }

        console.log(cars)
    }
}


// const prueba = new ClassNonCallable()
// prueba.createCarsObject('honda', 'renault', 'toyota')

// const coches = new CochesDeOscar()
// coches.createCarsObject("ferrari", "lamborghini", "bugatti")
// coches.createCarsObject("bmw", "audi", "mercedes")

module.exports = {
    Persona
}