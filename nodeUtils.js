const fs = require('fs')
const path = require('path')
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const {
  createReadStream,
  createWriteStream
} = require('fs');
const { Buffer } = require('buffer')

//----------------------------------------NIVELL 1----------------------------------------
// - Exercici 1
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b)
//         }, 1000)
//     })    
// }

// const sum = async (num1, num2) => {
//     const result = await add(num1, num2)
//     return result
// }

// sum(10, 4).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// - Exercici 2
// Crea una funció que, en executar-la, escrigui una frase en un fitxer.

// fs.writeFile('proof.txt', 'IT Academy course', (e) => {
//     if (e) {
//         throw new Error(e)
//     }

//     console.log('File is created successfully')
// })


// - Exercici 3
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

// fs.readFile('./proof.txt', 'utf8', (e, data) => {
//     if (e) {
//         throw new Error(e)
//     }
    
//     console.log(data)
// })

//----------------------------------------NIVELL 2----------------------------------------
// - Exercici 1
// Crea una funció que comprimeixi el fitxer del nivell 1.

// const gzip = createGzip();
// const source = createReadStream('proof.txt');
// const destination = createWriteStream('proof.txt.gz');

// pipeline(source, gzip, destination, (err) => {
//   if (err) {
//     console.error('An error occurred:', err);
//     process.exitCode = 1;
//   }
// });


// Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.

// const { exec } = require('child_process')

// exec('dir', (error, stdout, stderr) => {
//     if (error) {
//         console.log('Error: ', error)
//         return
//     }
//     if (stderr) {
//         console.log('Standar Error: ', stderr)
//         return
//     }

//     console.log(stdout)

// })


//----------------------------------------NIVELL 3----------------------------------------
// - Exercici 1
// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, 
// a partir del fitxer del nivell 1.




// const codedToHex = (info) => {
//     const buf = Buffer.from(info, 'utf8')
//     return buf.toString('hex')
// }
// const codedToBase64 = (info) => {
//     const buf = Buffer.from(info, 'utf8')
//     return buf.toString('base64')
// }

// const twoCodedFiles = () => {   
//     fs.readFile('./proof.txt', 'utf8', (e, data) => {
//         if (e) {
//             throw new Error(e)
//         }
        
//         const hexDecodedContent = codedToHex(data)

//         fs.writeFile('proofHex.txt', hexDecodedContent, (e) => {
//             if (e) {
//                 throw new Error(e)
//             }

//             console.log('File with hexadecimal code is created successfully')
//         })

//         const base64DecodedContent = codedToBase64(data)

//         fs.writeFile('proofBase64.txt', base64DecodedContent, (e) => {
//             if (e) {
//                 throw new Error(e)
//             }

//             console.log('File with base64 code is created successfully')
//         })

//     })    
    
// }

// twoCodedFiles()


// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb 
// l'algorisme aes-192-cbc, i esborri els fitxers inicials.
// https://nodejs.org/api/crypto.html

//Cipher

// const { scrypt, randomFill, createCipheriv } = require('crypto')

// const algorithm = 'aes-192-cbc'
// const password = 'Exercicis del Nivell 3' 

// scrypt(password, 'salt', 24, (e, key) => {
//     if (e) {
//         throw new Error(e)
//     }

//     randomFill(new Uint8Array(16), (e, iv) => {
//         if (e) {
//             throw new Error(e)
//         }

//         const cipher = createCipheriv(algorithm, key, iv)

//         let encrypted = cipher.update('IT Academy course', 'utf8', 'hex')
//         encrypted += cipher.final('hex')
        
//         console.log(encrypted)
//     })
// })


//Decipher
// const { scryptSync, createDecipheriv } = require('crypto')

// const key = scryptSync(password, 'salt', 24)

// const iv = Buffer.alloc(16, 0)

// const decipher = createDecipheriv(algorithm, key, iv)

// const encrypted = '346560e8e3477d911cc0004729e5158ebb92bca60de59b1c53e8abc35b243669'

// let decrypted = decipher.update(encrypted, 'hex', 'utf8')
// decrypted += decipher.final('utf8')
// console.log(decrypted)


// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
// tornant a generar una còpia de l'inicial.




// const {
//     scrypt,
//     randomFill,
//     createCipheriv
//   } = require('crypto');
  
//   const algorithm = 'aes-192-cbc';
//   const password = 'Password used to generate key';
  
//   // First, we'll generate the key. The key length is dependent on the algorithm.
//   // In this case for aes192, it is 24 bytes (192 bits).
//   scrypt(password, 'salt', 24, (err, key) => {
//     if (err) throw err;
//     // Then, we'll generate a random initialization vector
//     randomFill(new Uint8Array(16), (err, iv) => {
//       if (err) throw err;
  
//       const cipher = createCipheriv(algorithm, key, iv);
  
//       let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
//       encrypted += cipher.final('hex');
//       console.log(encrypted);
//     });
//   });

  //924f0e378ff0f1741be29f341db8b4b6930e9a4d140730c5837fa255c600981d


// const {
//   scryptSync,
//   createDecipheriv
// } = require('crypto');

// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';
// // Use the async `crypto.scrypt()` instead.
// const key = scryptSync(password, 'salt', 24);
// // The IV is usually passed along with the ciphertext.
// const iv = Buffer.alloc(16, 0); // Initialization vector.

// const decipher = createDecipheriv(algorithm, key, iv);

// // Encrypted using same algorithm, key and iv.
// const encrypted =
//   '924f0e378ff0f1741be29f341db8b4b6930e9a4d140730c5837fa255c600981d';
// let decrypted = decipher.update(encrypted, 'hex', 'utf8');
// decrypted += decipher.final('utf8');
// console.log(decrypted);
// // Prints: some clear text data








// const {
//     scrypt,
//     randomFill,
//     createCipheriv
// } = require('crypto');

// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';

// // First, we'll generate the key. The key length is dependent on the algorithm.
// // In this case for aes192, it is 24 bytes (192 bits).
// scrypt(password, 'salt', 24, (err, key) => {
// if (err) throw err;
// // Then, we'll generate a random initialization vector
//     randomFill(new Uint8Array(16), (err, iv) => {
//         if (err) throw err;

//         // Once we have the key and iv, we can create and use the cipher...
//         const cipher = createCipheriv(algorithm, key, iv);

//         let encrypted = '';
//         cipher.setEncoding('hex');

//         cipher.on('data', (chunk) => encrypted += chunk);
//         cipher.on('end', () => console.log(encrypted));

//         cipher.write('some clear text data');
//         cipher.end();
//     });
// });





const {
    scryptSync,
    createDecipheriv
  } = require('crypto');
  
  const algorithm = 'aes-192-cbc';
  const password = 'Password used to generate key';
  // Key length is dependent on the algorithm. In this case for aes192, it is
  // 24 bytes (192 bits).
  // Use the async `crypto.scrypt()` instead.
  const key = scryptSync(password, 'salt', 24);
  // The IV is usually passed along with the ciphertext.
  const iv = Buffer.alloc(16, 0); // Initialization vector.
  
  const decipher = createDecipheriv(algorithm, key, iv);
  
  let decrypted = '';
  decipher.on('readable', () => {
    while (null !== (chunk = decipher.read())) {
      decrypted += chunk.toString('utf8');
    }
  });
  decipher.on('end', () => {
    console.log(decrypted);
    // Prints: some clear text data
  });
  
  // Encrypted with same algorithm, key and iv.
  const encrypted =
    'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
  decipher.write(encrypted, 'hex');
  decipher.end()




