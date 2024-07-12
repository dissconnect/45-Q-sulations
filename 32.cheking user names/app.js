var current_users = ["Haris", "Rabia", "Imran", "Muskan", "Aqsa"];
var new_users = ["Haris", "Rabia", "shehzad", "Shazia", "Noor"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
