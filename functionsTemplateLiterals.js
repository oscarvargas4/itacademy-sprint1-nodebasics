//----------------------------------------NIVELL 1----------------------------------------

// Crear una funció que imprimeixi en consola el nom d'usuari sent invocada externament i passant
// el nom com a paràmetre.


   

const returnSecondName = nom => {
    console.log("My name is " + nom)
}

returnSecondName("Oscar")

//----------------------------------------NIVELL 2----------------------------------------
// - Exercici 1
// Imprimir el nom i cognoms de l'usuari en variables mitjançant template literals, creant les variables
// i referenciant en la impressió de l'missatge

const nom = 'Oscar'

const cognom = 'Vargas'

console.log(`Jo em dic ${nom} ${cognom}`)

// - Exercici 2
// Invocar la funció mitjançant template literals

const printName = (nom, cognom) => {
    return `Jo em dic ${nom} ${cognom}`
}

console.log(`${printName(`${nom}`, `${cognom}`)}`)


//----------------------------------------NIVELL 3----------------------------------------

// - Exercici 1
// Crea una matriu de deu funcions i empleni-la mitjançant un bucle. Cada funció comptarà del 0-9 imprimint-ho
// per pantalla. Invoqui cada funció de l'array iterativament. Haurà d'imprimir-se per pantalla el compte de 
// 0-9 deu vegades


const fulfill = () => {
    for (let i = 0; i < 10; i++) {
        console.log(i)        
    }
}

const matriu = []

for (let i = 0; i < 10; i++) {
    matriu[i] = fulfill
}

console.log(matriu)

for (let i = 0; i < 10; i++) {
    matriu[i]()
}


// // - Exercici 2
// // Crear una funció anònima autoinvocable (igualada a una variable) que imprimeixi per pantalla
// //  el nom d'usuari rebut com a paràmetre

const autoinvocable = (function(nom) {
    console.log(nom)
})("Oscar")



