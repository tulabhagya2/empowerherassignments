function createCounter(){
    let count=0;
    function increment(){
        count++;
        console.log(count);
    }
    function decrement(){
        count--;
        console.log(count)
    }
   return {increment,decrement} 
}
const c=createCounter();

c.increment();
c.decrement();