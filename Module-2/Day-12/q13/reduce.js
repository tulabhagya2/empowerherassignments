const names=["electronics","clothing","electronics","toys","clothing","toys","toys"];
const result=names.reduce((acc,item)=>{
    acc[item]=(acc[item]||0)+1 ;
    return acc;
},{});
console.log(result)