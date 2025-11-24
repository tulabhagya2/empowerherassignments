
//1
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);
// it will throught the reference error x is not defined.


//2.
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);


//3.
const student = {
  name: "Bhagya"
};

console.log(student?.profile?.details?.age);
