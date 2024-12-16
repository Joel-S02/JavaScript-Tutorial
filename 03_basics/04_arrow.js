const student = {
    name: "Joel Singh",
    course: "BCA (Bachelor of Computer Application)",
    university: function(){
        console.log(`${this.name} study in Chandigarh University`);
        console.log(this); // This will print student object because its have an object.
    }
}

// student.university();
// student.name = "Ashish Chauhan";
// student.university();
// console.log(this); // This will be empty object because there is no any globle object for print.

const arrowFunc = () => ("Hello World")

console.log(arrowFunc())