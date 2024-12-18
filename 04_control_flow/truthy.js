/* Flasy Values
false, 0, -0(most rarely ask), Bigint 0n, "", null, undefined, NaN */

/* Truthy Values
true, "0", 'false' or "false" or `false`, " ", [], {}, function(){}*/

// const userPhoneNumber = '';
// if (userPhoneNumber) {
//     console.log("Got the User Phone Number")
// }else{
//     console.log("Not Got the User Phone Number");
// }

// const emptyArr = [];
// if(emptyArr.length == 0){
//     console.log("Array is Empty..")
// }

// const myObj = {};
// if(Object.keys(myObj).length == 0){
//     console.log("Object is Empty.");
// }


// Nullish Coalescing Operator (??): null undefined

var val;
val = 20 ?? 15; // 20
val = null ?? 20; // 20
val = 10 ?? null; // 10
val = undefined ?? 11; // 11

// console.log(val)

// Terniary Operature
// condition ? true : flase;

const UserName = "Joel";
UserName.length < 5 ? console.log("Yes") : console.log("No");