function makeSandwich (item: string[]) {
    console.log('\nMaking your sandwich with:');

    item.forEach(Element => console.log("- " + Element));
    console.log('\nEnjoy your sendwich !');
}

makeSandwich(['Ham','cheeze','Lettuce']);

makeSandwich(['Turkey','Bacon']);

makeSandwich(['peanut butter','Jelly']);


