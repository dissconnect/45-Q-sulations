let guest_list : string [] = ['aqsa','qirat','hani','ayesha'];
//  for(let i=0; i<guest_list.length; i++){
    // console.log('Respected sir/madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
// }
   
let not_present : string = 'aqsa';
let new_guest : string = 'muskan';
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
    // console.log('Respected sir/madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
// }
guest_list.unshift('maliha','unzila','nida');
//  for(let i=0; i<guest_list.length; i++){
    //  console.log('Respeted sir/madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
//  }    
 console.log('\nUnfortunately we can not arrange big table , Only two people allow.')
 while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry sir/madam.${remove_guest}you are not invited for dinner.`);
 }   
  for(let i=0; i<guest_list.length; i++){
      console.log('Respeted sir/madam ' + guest_list[i] + ',\nyes you are still invited on tomorrow dinner.\nThank you\n')
  }    
 guest_list.splice(0,2)
 console.log(guest_list);   