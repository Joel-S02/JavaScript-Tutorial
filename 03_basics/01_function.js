// 1. Write a function called calculateArea that takes length and width as parameters and calculates the area of a rectangle.
function calculateArea(length, width) {
    return length * width;
}
// console.log(calculateArea(4, 10));

// 2. Create a function named celsiusToFahrenheit that converts a temperature from Celsius to Fahrenheit. The formula is: (Celsius × 9/5) + 32.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// console.log(celsiusToFahrenheit(91.5));

// 3. Create a function named findMaxNumber that takes three numbers as parameters and returns the largest number among them.
function findMaxNumber(number1, number2, number3){
    return Math.max(number1, number2, number3);
}
// console.log(findMaxNumber(745, 987, 546));

// 4. Write a function called isPositive that takes a number and returns true if the number is positive, and false if it's negative or zero.
const isPositive = function(number){
    // if (number > 0) {
    //     return true;
    // }else{
    //     return false;
    // }{
    return number > 0;
}
// console.log(isPositive(7.54464));

// 5. Create a function named createFullName that takes firstName and lastName as parameters and returns the full name with a space between them.
const createFullName = (firstName, lastName) => {
    return firstName + " " + lastName;
}

let fullName = createFullName("John", "Doe");
// console.log(fullName);

// 6. Write a function called calculateAge that takes a birth year as a parameter and calculates the age.
function calculateAge(birthYear){
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// console.log(calculateAge(1999))