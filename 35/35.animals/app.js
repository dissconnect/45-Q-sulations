var animals = ["cat", "dog", "elephant"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animals);
    {
        console.log(animal);
    }
    console.log("\n");
    for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
        var animal_1 = animals_2[_a];
        console.log("A ".concat(animal_1, " has a tail"));
    }
}
console.log("\n all of these are great pets! but i love cats more");
