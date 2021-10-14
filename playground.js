const { Persona, ClassNonCallable } = require('./classesArrowFunctions')

const Juliana = new Persona('Juliana')
Juliana.decirNombre()


class CochesEjemplo extends ClassNonCallable{

}

const coches = new CochesEjemplo()

coches.createCarsObject('coche1', 'coche2', 'coche3')