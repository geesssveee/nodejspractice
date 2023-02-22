
//console.log('Hello World')
const path = require('path');
const os = require('os')
// const math = require('./math')
// console.log(math.multiply(6,5))

//method 2
const { add, multiply,subtract,divide } = require('./math')
console.log(multiply(2,3))
console.log(add(2,3))
console.log(subtract(2,3))
console.log(divide(2,3))

//method 3

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// console.log(__dirname)
// console.log(__filename) // returns file name
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))
