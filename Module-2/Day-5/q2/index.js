let userName = "Bhagya";

function signup(userName) {
    let userNames = ["Bhagya", "Jhansi", "Devi", "Vasundhara"];

    for (let i = 0; i < userNames.length; i++) {
        if (userName === userNames[i]) {
            return "User Already Registered, Please Login";
            return;
        }
    }
    userNames.push(userName);
    return "Signup Successful, Please Login";
}

console.log(signup(userName));

//Login
function login(username, password) {
    
    const users = ["bhagya", "sri", "tula", "admin", "user1"];


    if (!users.includes(username)) {
        return "User not found, please sign up";
    }


    if (password === "Emp@123") {
        return "Login successful";
    } else {
        return "Wrong password";
    }
}
console.log(login("bhagya","emp@123"));
