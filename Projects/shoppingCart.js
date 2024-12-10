// function calculateCart(items) {
//     items = [
//        {name: "Shirt", price: 200, quantity: 2},
//        {name: "Pants", price: 300, quantity: 1},
//        {name: "Trousar", price: 400, quantity: 2}
//     ]

//     // Your code should:
//     // 1. Calculate subtotal (price * quantity for each item)
//     for(let item of items){
//         const total = `${item.price}` * `${item.quantity}`
//         console.log(total)
//         if (total >= 500) {
//             let to = total * (10 / 100);
//             console.log(to)
//         }
//     }

//     // 2. Apply 10% discount if subtotal is over $100
//     // 3. Return final total
// }
// calculateCart();

function calculateCart() {
    const items = [
        { name: "Shirt", price: 200, quantity: 2 },
        { name: "Pants", price: 300, quantity: 1 },
        { name: "Trousar", price: 400, quantity: 2 }
    ];

    let subtotal = 0;

    // Calculate subtotal (price * quantity for each item)
    for (let item of items) {
        const total = item.price * item.quantity; // Correct multiplication
        subtotal += total;
        console.log(`Item: ${item.name}, Total: ${total}`);
    }

    console.log(`Subtotal: ${subtotal}`);

    // Apply a 10% discount if subtotal is over $100
    let finalTotal = subtotal;
    if (subtotal > 100) {
        const discount = subtotal * 0.1; // 10% discount
        finalTotal -= discount;
        console.log(`Discount Applied: ${discount}`);
    }

    // Return final total
    console.log(`Final Total: ${finalTotal}`);
}

calculateCart();