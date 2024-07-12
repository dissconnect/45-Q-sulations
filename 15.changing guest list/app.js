var guest_list = ['aqsa', 'qirat', 'hani', 'ayesha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
var not_present = 'aqsa';
var new_guest = 'muskan';
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
console.log("mr. ".concat(not_present, "will not comming tomorrow dinner"));
