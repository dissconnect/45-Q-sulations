function show_megicians(megicians) {
    for (var _i = 0, megicians_1 = megicians; _i < megicians_1.length; _i++) {
        var megician_1 = megicians_1[_i];
        console.log(megician_1.charAt(0).toUpperCase() + megician_1.slice(1));
    }
}
var megician = ["shehzad", "shehbaz", "arbaz"];
show_megicians(megician)
