  let places : string [] = ['central park','Qutab minar','naran','swat','gilgit']
// console.log('original' + places);
// print your array in alphabetical order with out modifying the actual list.
// console.log('copy' + [...places].sort());

// show that your array is still in its original order by printing it.
// console.log('original :' + places);
// print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy' + [...places].sort().reverse());
// show that your array is still in its original order by printing it again.
console.log('copy' + [...places].sort().reverse()); 
// reverse the order of your list.print the array to show that its order has changed.
 console.log('original :' + places.sort());
//  reverse the order of your list again. print the list to show its back to its original order has been change.
console.log('original :' + places.sort().reverse());