//1.template literals+expressions
let a=5;
let b=7;

console.log(`${a}+${b}=${a+b}`)
let str=`hello
welcome to the masai school
empowerher program`;
console.log(str);

let firstName="John";
let lastName="Doe";
console.log(`${firstName} ${lastName}`);

//2.Arrow functions and this
const square=(n)=>{
    return n*n;
}
console.log(square(5));

//why logs undefined
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();
//this code prints undefined because arrow functions donot have their own this ,
//so this does not refer to the object.



//rewriting the above code wih normal function.
const object={
    value:50,
    test:function(){
        console.log(this.value)
    }
};
object.test();


//3.Rest,Spread and copying objects
const product={name:"pen",price:10};
const result={...product};
console.log(result);


const one = { x: 1 };
const two = { y: 2 };
let res={...one,...two};
console.log(res);

//Destructuring & optional chaining
const arr = [10, 20, 30];
const[first,second]=arr;
console.log(first);
console.log(second);

const laptop = { brand: "Dell", ram: "8GB" };
const{brand}=laptop;
console.log(brand);

const info = {};
console.log(info?.name); 

//5.scoping (let/var/const)
for (var i = 0; i < 3; i++) {}
console.log(i);
//it wiill print 3 

for (let j = 0; j < 3; j++) {}
console.log(j);
//it will give the reference error because j is declared as let so it having the function scope it is not possible to access it.

//why is const used for values that should not be reassigned?
// Because const prevents the variable from being reassigned, ensuring the value reference stays the same.


//Ternary Operator
let speed=(kmph>60)?"Fast":"Normal";

let age=20
let r=(age>=18)?"Adult":"Minor";
console.log(r);


let number=10;
let numbercheck=(number>0)?"Positive":(number==0)?"zero":"Negative";
console.log(numbercheck);


//Spreadc,Rect & Arrays
const nums=[1,2,3];
const nums1=[4,5]
const final=[...nums,...nums1];
console.log(final);


let a1=["x","y"];
 let b1=["z"];
 let c1=[...a1,...b1];
 console.log(c1);


 function printNames(...names) {
  return names;
}

console.log(printNames("A", "B", "C")); 


//8.object destructuring
const user = { id: 101, status: "active" };
const{id,status}=user;


const id1 = 101;
const role = "admin";
const users = {
  id1,
  role
};


const id2 = 101;
const name = "Bhagya";

const user1 = {
  id2,       // property shorthand
  name,     // property shorthand

  // method shorthand
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

user1.greet();   


//9 template literals
const today = new Date().toDateString();
console.log(`Today's date is: ${today}`);

const names = "Bhagya";
const score = 85;

console.log(`Hello ${names}, your score is ${score}/100`);

//10.arrow functions
function add(a, b) {
  return a + b;
}
const add = (a, b) => a + b;
let ag=20;
const isAdult = ag => ag >= 18;
console.log(isAdult(ag))
const double = n => n * 2;
//11.spread operator (Arrays and objects)
const array = [10, 20, 30];
const clone = [...array];

console.log(clone);

const arrays = [10, 20, 30];
const newArr = [100, ...arrays];

console.log(newArr); 

const obj1 = { id: 1, name: "Alex" };
const obj2 = { name: "Bhagya", age: 23 };  

const merged = { ...obj1, ...obj2 };

console.log(merged); 
//12.optional chaining
const user2 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(user2?.address?.city); 

console.log(user?.job?.title);  

const usere = {
  name: "Bhagya"
};

// Accessing a deeply nested property safely
console.log(usere?.address?.city);




























