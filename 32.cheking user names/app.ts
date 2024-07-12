let current_users : string [] = ["Haris","Rabia","Imran","Muskan","Aqsa"];
let new_users : string [] = ["Haris","Rabia","shehzad","Shazia","Noor"];

new_users.forEach((newUser) => {
    if (
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ){
        console.log(`${newUser} will need to enter a new username.`);
    }else {

        console.log(`${newUser} is available.`);
    }
 })
