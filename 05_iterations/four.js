// For in
const user = {
    name: "Joel Singh",
    age: 20,
    nationality: "Indian"
}

for (const key in user) {
    // console.log(`The key of the User Object ${key} and the value of the User Object ${user[key]}`);
    
}

const array = ["HTML", "CSS", "Javascript", "ReactJS"];
for (const key in array) {
    // console.log(key)
}

const map = new Map();
map.set("+91", "INDIA")
map.set("+1", "USA")
map.set("+44", "FRANCE")
map.set("+92", "PAKISTAN")

for (const key in map) {
    console.log(key)
}