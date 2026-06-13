const name="Hello";
const array= name.split("");

const reverse=array.reduceRight((acc,current)=>acc+current,"");
console.log(reverse)

const nums=[10,5,2];
const result1=nums.reduce((acc,cur)=> acc-cur);
console.log(result1) //3

const result2=nums.reduceRight((acc,cur)=> acc-cur);
console.log(result2) //-13