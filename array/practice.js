// count no of 2 in given array
// const array=[1,2,3,4,2,5,2,6,2,7,2]
// let count=0;
// for(let i=0;i<array.length;i++){
//     if(array[i]===2){
//         count++;
//     }  
// }
// console.log("Total number is",count);

// print largest number

// const array=[10,20,99,30,50,120]
// let largest=[0];
// for(let i=1; i<array.length; i++){
//     if(array[i]>largest){
//         largest=array[i];
//     }
// }
// console.log("Largest number is",largest)

// add number

// const arr = [12, 45, 6, 89, 23, 89, 45, 12];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum=sum+arr[i]
// }
// console.log("Sum is",sum)

// duplicate array
// const arr = [12, 45, 6, 89, 23, 89, 45, 12];
// let uniqueArr=[];
// for(let i=0; i<arr.length; i++){
//     if(!uniqueArr.includes(arr[i])){
//         uniqueArr.push(arr[i]);
//     }
// }
// console.log(uniqueArr);


let a=3
let b=2;
[a,b]=[b,a];
console.log(a)
console.log(b)