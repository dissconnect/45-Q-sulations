var magician = ["shehzad", "shehbaz", "arbaz"];
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magician[i] = 'the great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magician.forEach(function (Element) {
        console.log(Element);
    });
}
make_great(magician);
show_magicians(magician);
