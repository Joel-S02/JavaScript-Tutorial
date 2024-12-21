// For Each
const langArr = ["JS", "Ruby", "Java", "Python", "PHP"];
// langArr.forEach(function (element){ // Using Normal/Regular Function
//     console.log(element)
// });

// langArr.forEach((value) => { // Using Arrow Function
//     console.log(value);
// })

function consoleMe(element){
    // console.log(element)
}
langArr.forEach(consoleMe) // Do not execute function, only give reference of function


const user = [
    {
        name: "Joel",
        age: "19"
    },
    {
        name: "Shlok",
        age: "20"
    },
    {
        name: "Deepak",
        age: "21"
    },
    {
        name: "Ajay",
        age: "21"
    }
]

user.forEach((object) => {
    console.log(`User Name is ${object.name} and their age ${object.age}`)
})