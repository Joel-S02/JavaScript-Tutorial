let theDate = new Date()
// console.log(theDate)
// console.log(theDate.toDateString());//Returns a date as a string value.
// console.log(theDate.toISOString());//Returns a date as a string value in ISO(nternational Organization for Standardization)format.
// console.log(theDate.toJSON());// Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
// console.log(theDate.toLocaleDateString());// Converts a date to a string by using the current or specified locale.
// console.log(theDate.toLocaleString());// Converts a date and time to a string by using the current or specified locale.
// console.log(theDate.toLocaleTimeString());//  Converts a time to a string by using the current or specified locale.
// console.log(theDate.toString());// Returns a string representation of a date. The format of the string depends on the locale.
// console.log(theDate.toTimeString());// Returns a time as a string value.
// console.log(theDate.toUTCString());// Returns a date converted to a string using Universal Coordinated Time (UTC).

// let createDate = new Date(2024, 10, 2)
// let createDate = new Date(2024, 10, 2, 4, 2)
// let createDate = new Date("2024-11-02")
let createDate = new Date("11-02-2024")
console.log(createDate.toLocaleString())