const { Buffer } = require('buffer')

const codedToHex = (info) => {
    const buf = Buffer.from(info, 'utf8')
    return buf.toString('hex')
}

// console.log(codedToHex('Hola'))

const codedHexToString = (info) => {
    const buf = Buffer.from(info, 'hex')
    return buf.toString('utf8')
}

// console.log(codedHexToString('486f6c61'))


const codedToBase64 = (info) => {
    const buf = Buffer.from(info, 'utf8')
    return buf.toString('base64')
}

console.log(codedToBase64('Hola'))

const codedBase64ToString = (info) => {
    const buf = Buffer.from(info, 'base64')
    return buf.toString('utf8')
}

console.log(codedBase64ToString('SG9sYQ=='))