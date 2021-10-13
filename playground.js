
const sums = async (callback) => {
    const result = await callback()
    return result
}

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            setTimeout(() => {
                resolve(a + b)
            }, 2000)
        } else {
            reject("The parameters must be numbers")
        }          
    })
    
}

sums(() => {
    add(2, 4).then((result) => {
        console.log(result)
    }).catch((e) => {
        console.log(e)
    })
})


// sums(() => {
//     add(2, 4).then((result) => {
//         console.log(result)
//     }).catch((e) => {
//         console.log(e)
//     }) 
// })