const car = {
    make: "MUSTANG",
    modal: 1023,
    year: 1990,
}

// console.log(car);
// car.color = "Black"; // Add a Property
// console.log(car);
// car.year = 1985; // Update a Property
// console.log(car);
// delete car.modal; // Remove a Property
// console.log(car);
// if ("year" in car) {
//     console.log('Car object has the year property');
// }
// console.log(car.hasOwnProperty('modal')); // Check for a Property

/******************** Another Example ********************/

const product = {
    name: "Laptop",
    details: {
        brand: "Dell",
        price: 1200
    }
};

// const keys = Object.keys(product);
// console.log(keys);

// for(let i = 0; i < keys.length; i++){
//     let key = keys[i];
//     console.log(key + ": " + product[key]);
// }

// for (let key in product) {
//     console.log(`${key}: ${product[key]}`);
// }

// console.log(product.details.brand); // Nested Object Access

const user1 = {
    name: "Joel",
    age: 19,
    favoriteAnime: ["Dragon Ball Z", "Naruto", "Black Clover"]
}

const user2 = {
    name2: "Rohit",
    age2: 25,
    favoriteAnime2: ["My Hero Academia", "Attack on Titan", "Dan Da Dan"]
}

const combinedObject = {...user1, ...user2};
const combinedObject2 = Object.assign({}, user1, user2)
console.log(combinedObject);
console.log(combinedObject2);