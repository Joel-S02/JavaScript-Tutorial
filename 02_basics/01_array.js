// Array
const myArray = [2, 4, 6, 8, 10]
// console.log(myArray[3]);
// console.log(typeof myArray)

myArray.push(12); //Appends new elements to the end of an array, and returns the new length of the array.
myArray.pop(); //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// myArray.unshift(0)
// myArray.unshift(-2)
// myArray.shift("one")
// console.log(myArray);
// console.log(myArray[3]);
let strArr = myArray.join(); //Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(strArr)
// Slice and Splice
let newArray = myArray.slice(2, 4)// Return Sub-Array from Original Array
console.log(newArray)
console.log("A ", myArray);

let newArray2 = myArray.splice(2, 4)// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(newArray2)
console.log("B", myArray)