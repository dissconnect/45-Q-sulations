// task 30
let users : string [] = ["rabia","shazia","muskan","haris","imran","hani"]

for(let user of users){
    if(user === "admin"){
console.log("hello admin, would you like to see a status report?")
    }

else{
   console.log(`hello ${users}, thank you for logging in again`)
}
}