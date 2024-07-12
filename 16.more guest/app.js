var guest_list = ['aqsa', 'qirat', 'hani', 'ayesha'];
var not_present = 'aqsa';
var new_guest = 'muskan';
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n');
}
guest_list.unshift('maliha', 'unzila', 'nida');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respeted sir/madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.we found big table so we decide to invite 3moder guest\n')
}


