// https://heynode.com/tutorial/readwrite-json-files-nodejs/
// https://stackoverflow.com/questions/18494226/storing-nodejs-fs-readfiles-result-in-a-variable-and-pass-to-global-variable

const fs = require('fs')


const readJSON = (path) => {
    const read = fs.readFileSync(path).toString()
    const jsonObject = JSON.parse(read)

    return jsonObject
}

// console.log(readJSON('testingJSON.json'))

module.exports = readJSON



