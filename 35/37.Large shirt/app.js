function makeShirt(Size, text) {
    if (Size === void 0) { Size = 'large'; }
    if (text === void 0) { text = 'i love typescript'; }
    console.log("you have order a ".concat(Size, ", shirt that says ").concat(text));
}
// makeShirt();
// makeShirt('medium')
// different message
makeShirt('small', 'i need a big shirt to wear');
