
//spread operator
let arr1=[1,2,3];
let arr2=[4,5];
console.log(...arr1,...arr2);
//rest operator
function sum(...nums){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }
    return sum
}
console.log(sum(1,2,3,4,5));
// destructuring
const user={
    name:"Alice",
    age:22,
    address:{
        city:"Bangalore",
        pin:560001
    }
};
const{name,address:{city,pin}}=user;
console.log(name);
console.log(city);
console.log(pin);