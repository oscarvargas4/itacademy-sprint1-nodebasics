const fs = require('fs')
const path = require('path')
const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const {
  createReadStream,
  createWriteStream
} = require('fs');
const { Buffer } = require('buffer')
const crypto = require('crypto')

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

const writeFunction = () => {
  fs.writeFile('proof.txt', 'IT Academy course', (e) => {
    if (e) {
        throw new Error(e)
    }

    console.log('File is created successfully')
  })
}

// writeFunction()

// - Exercici 3
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

const readFunction = () => {
  fs.readFile('./proof.txt', 'utf8', (e, data) => {
    if (e) {
        throw new Error(e)
    }
    
    console.log(data)
  })
}

// readFunction()

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

const zipFunction = () => {
  exec('dir', (error, stdout, stderr) => {
    if (error) {
        console.log('Error: ', error)
        return
    }
    if (stderr) {
        console.log('Standar Error: ', stderr)
        return
    }

    console.log(stdout)

  })
}

// zipFunction()

//----------------------------------------NIVELL 3----------------------------------------
// - Exercici 1
// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, 
// a partir del fitxer del nivell 1.




const codedToHex = (info) => {
    const buf = Buffer.from(info, 'utf8')
    return buf.toString('hex')
}
const codedToBase64 = (info) => {
    const buf = Buffer.from(info, 'utf8')
    return buf.toString('base64')
}

const twoCodedFiles = () => {   
    fs.readFile('./proof.txt', 'utf8', (e, data) => {
        if (e) {
            throw new Error(e)
        }
        
        const hexDecodedContent = codedToHex(data)

        fs.writeFile('proofHex.txt', hexDecodedContent, (e) => {
            if (e) {
                throw new Error(e)
            }

            console.log('File with hexadecimal code is created successfully')
        })

        const base64DecodedContent = codedToBase64(data)

        fs.writeFile('proofBase64.txt', base64DecodedContent, (e) => {
            if (e) {
                throw new Error(e)
            }

            console.log('File with base64 code is created successfully')
        })

    })    
    
}

// twoCodedFiles()


// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb 
// l'algorisme aes-192-cbc, i esborri els fitxers inicials.
// https://nodejs.org/api/crypto.html

const encryptionAES = () => {
  fs.readFile('./proofHex.txt', 'utf8', (e, data) => {
    if (e) {
        throw new Error(e)
    }

    const algorithm = 'aes-192-cbc'
    const password = 'Password used to generate key'

    const key = crypto.scryptSync(password, 'salt', 24)
    const iv = Buffer.alloc(16, 0); 

    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update(data, 'utf8', 'hex')
    encrypted += cipher.final('hex')

    fs.writeFile('proofHexCrypt.txt', encrypted, (e) => {
      if (e) {
        throw new Error(e)
      }

      fs.unlink('./proofHex.txt', (e) => {
        if (e) {
          throw new Error(e)
        }

        console.log('proofHex.txt deleted')
      })
    })

  })

  fs.readFile('./proofBase64.txt', 'utf8', (e, data) => {
    if (e) {
        throw new Error(e)
    }

    const algorithm = 'aes-192-cbc'
    const password = 'Password used to generate key'

    const key = crypto.scryptSync(password, 'salt', 24)
    const iv = Buffer.alloc(16, 0); 

    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update(data, 'utf8', 'hex')
    encrypted += cipher.final('hex')

    fs.writeFile('proofBase64Crypt.txt', encrypted, (e) => {
      if (e) {
        throw new Error(e)
      }

      fs.unlink('./proofBase64.txt', (e) => {
        if (e) {
          throw new Error(e)
        }

        console.log('proofBase64.txt deleted')
      })
    })

  })

  fs.unlink('./proof.txt', (e) => {
    if (e) {
      throw new Error(e)
    }

    console.log('proof.txt deleted')
  })

}

// encryptionAES()







// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
// tornant a generar una còpia de l'inicial.

const codedHexToString = (info) => {
  const buf = Buffer.from(info, 'hex')
  return buf.toString('utf8')
}

const codedBase64ToString = (info) => {
  const buf = Buffer.from(info, 'base64')
  return buf.toString('utf8')
}


const decryptFile = () => {
  fs.readFile('./proofBase64Crypt.txt',  'utf8', (e, data) => {
    if (e) {
      throw new Error(e)
    }
    const algorithm = 'aes-192-cbc';
    const password = 'Password used to generate key';
    
    const key = crypto.scryptSync(password, 'salt', 24)    
    const iv = Buffer.alloc(16, 0);

    const decipher = crypto.createDecipheriv(algorithm, key, iv)

    const encrypted = data
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8')
    
    const incialInfo64 = codedBase64ToString(decrypted)

    fs.writeFile('proofDecryptedBase64.txt', incialInfo64, (e) => {
      if (e) {
        throw new Error(e)
      }

      console.log('proofDecryptedBase64.txt created')
    })

  })


  fs.readFile('./proofHexCrypt.txt',  'utf8', (e, data) => {
    if (e) {
      throw new Error(e)
    }
    const algorithm = 'aes-192-cbc';
    const password = 'Password used to generate key';
    
    const key = crypto.scryptSync(password, 'salt', 24)    
    const iv = Buffer.alloc(16, 0);

    const decipher = crypto.createDecipheriv(algorithm, key, iv)

    const encrypted = data
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8')
    
    const incialInfo64 = codedHexToString(decrypted)

    fs.writeFile('proofDecryptedHex.txt', incialInfo64, (e) => {
      if (e) {
        throw new Error(e)
      }

      console.log('proofDecryptedHex.txt created')
    })

  })

}

// decryptFile()

const deleteAndVerifyRepeatedFiles = () => {

  fs.readFile('./proofDecryptedBase64.txt', 'utf8', (e, dataBase64) => {
    if (e) {
      throw new Error(e)
    }

    fs.readFile('./proofDecryptedHex.txt', 'utf8', (e, dataHex) => {
      if (e) {
        throw new Error(e)        
      }

      if (dataBase64 == dataHex) {
        fs.unlink('./proofDecryptedHex.txt', (e) => {
          if (e) {
            throw new Error(e)
          }
          console.log('The data is the same!')
        })
      } else {
        throw new Error('The data is not the same')
      }
    })
  })

  setTimeout(() => {
    fs.unlink('proofBase64Crypt.txt', (e) => {
      if (e) {
        throw new Error(e)
      }
    })

    fs.unlink('proofHexCrypt.txt', (e) => {
      if (e) {
        throw new Error(e)
      }
    })
  }, 3000)
  

  setTimeout(() => {
    fs.rename('proofDecryptedBase64.txt', 'proofDecryptedFromHexAndBase64', (e) => {
      if (e) {
        throw new Error(e)
      }
    })
  }, 6000)

  
}

deleteAndVerifyRepeatedFiles()