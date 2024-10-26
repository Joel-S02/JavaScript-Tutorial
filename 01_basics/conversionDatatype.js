let isNumber = 50
let numberToString = String(isNumber)
console.log(isNumber) //50 in number
console.log(numberToString) //50 in String
console.log(typeof(numberToString)) // String

let numberToBoolean = Boolean(isNumber)
console.log(numberToBoolean); // true with any number expact 0
console.log(typeof(numberToBoolean)); // Boolean

console.log(typeof(isNumber)); // if isNumber is null then its type is object
console.log(isNumber); // null

console.log(typeof(isNumber)); // if isNumber is undefined then its type is also undefined
console.log(isNumber); // undefined