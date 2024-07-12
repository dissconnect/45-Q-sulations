var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["shehzad", "shehbaz", "arbaz"];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great2(magicianArrey) {
    for (var i = 0; i < magicianArrey.length; i++) {
        magicianArrey[i] = 'the great ' + magicianArrey[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArray = copyArray(magician);
make_great2(copyMagicianArray);
console.log('\nThis is my original arrey:');
show_magicians(magician);
console.log('\nThis is my modified copy of the arrey:');
show_magicians(copyMagicianArray);
