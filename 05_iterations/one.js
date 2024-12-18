// For Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element)
}


for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best Number.")
    }
    // console.log(element);
    
}

for (let j = 1; j <= 10; j++) {
    const element = j;
    // console.log(`Outer Loop ${element}`);
    for (let k = 1; k <= 10; k++) {
        // console.log(`${k}*${j} = ${k*j}`);
    }
}

const myArr = ["Hero", "Shaktiman", "Balveer"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)   
}

// Break Keyword
for (let index = 1; index <= 15; index++) {
    const element = index;
    if (element == 10) {
        // console.log("10th Warning Game Over")
        break;
    }
    // console.log(element)
}

// Continue Keyword
for (let index = 1; index <= 15; index++) {
    const element = index;
    if (element == 9) {
        console.log("9th Warning, but you have one last chance.")
        continue;
    }
    console.log(element)
}