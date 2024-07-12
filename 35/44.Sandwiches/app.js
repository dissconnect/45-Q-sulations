function makeSandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(function (Element) { return console.log("- " + Element); });
    console.log('\nEnjoy your sendwich !');
}
makeSandwich(['Ham', 'cheeze', 'Lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['peanut butter', 'Jelly']);
