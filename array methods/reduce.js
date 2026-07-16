const array=[1,2,3,4,5,6,7,8,9,10];
const sum=array.reduce((acc,current)=> acc+current,0)
console.log(sum)

const average=array.reduce((acc,current)=> acc+current/array.length,0)
console.log(average);

const result=array.filter(num => num%2===0).map(num=> num*10).reduce((sum,current)=> sum+current,0);
console.log(result)