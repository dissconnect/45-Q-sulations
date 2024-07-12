let guest_list : string [] = ['aqsa','qirat','hani','ayesha'];
// for(let i=0; i<guest_list.length; i++){
    // console.log('Respeted sir/madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
   
let not_present : string = 'aqsa';
let new_guest : string = 'muskan';
guest_list[0] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected sir/madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
}
guest_list.unshift('maliha','unzila','nida');




