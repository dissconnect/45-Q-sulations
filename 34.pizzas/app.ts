let favourite_pizza : string [] = ["pepperoni","chicken","vegetable"]

for (let pizza of favourite_pizza) {
    console.log(pizza)
}

console.log("\n")

for (let pizza of favourite_pizza){
    console.log(`\nI really like ${pizza} pizza!`)
}

for (let pizza of favourite_pizza){
    console.log(`\nI really love ${pizza} pizza!`)
}