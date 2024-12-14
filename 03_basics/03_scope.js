let a = 10; // Globle Variable
const b = 20;
var c = 30;

if (true) {
    let a = 100; // local or block scope variable
    const b = 200;
    c = 300;
    // console.log(a)
}

// console.log(a);
// console.log(b);
// console.log(c);


function exampleOne(){
    const param1 = "This is a console of funtion Example One.";
    function exampleTwo(){
        const param2 = "This is a console of funtion Example Two.";
        console.log(param1);
    }
    // console.log(param2);
    exampleTwo();
}

exampleOne();