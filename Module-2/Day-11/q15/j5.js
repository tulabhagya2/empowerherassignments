let username="Hello";
let course="welcome to the course!";
console.log(`${username} ${course}`);

//shorthand
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet(){
    console.log("Hello");
  }
  
};



//arrow function
const getFullName=(first,last)=>console.log(`${first} ${last}`)
getFullName("Bhagya","Sri");
