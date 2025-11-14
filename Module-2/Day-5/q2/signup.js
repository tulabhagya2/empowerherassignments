let userName = "Bhagya";

function signup(userName) {
    let userNames = ["Bhagya", "Jhansi", "Devi", "Vasundhara"];

    for (let i = 0; i < userNames.length; i++) {
        if (userName === userNames[i]) {
            console.log("User Already Registered, Please Login");
            return;
        }
    }

    // If not found in loop, add the new username
    userNames.push(userName);
    console.log("Signup Successful, Please Login");
}

signup(userName);
