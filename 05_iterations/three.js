// for of

const userName = "Joel Singh"
for (const element of userName) {
    // console.log(`The user name is ${element}`)
}

const myArr = ["Mudit" ,"Rohit" ,"Joel", "Manthan"]
myArr.forEach(element => {
    // console.log(`The Array's Values: ${element}`)
});

for (const element of myArr) {
    // console.log(`The Array's Values: ${element}`)
}

const map = new Map();
map.set("+91", "INDIA")
map.set("+1", "USA")
map.set("+44", "FRANCE")
map.set("+92", "PAKISTAN")

// console.log(map);
console.log(typeof map)

for (const [element, value] of map) {
    console.log(element,':- ', value);
}