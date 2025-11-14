let num=8;
function prime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        return true
    }
    else{
        return false
    }
}
console.log(prime(num));

//Even odd
let n=6;
function evenOdd(n){
    if(n%2==0){
        return true
    }
    else{
        return false
    }
}
console.log(evenOdd(n));