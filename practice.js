// const fruits=["banana","mango","apple","lichee","orange"]
// console.log(fruits)
// console.log(fruits[1])
// fruits[7]="watermelon";
// console.log(fruits.length)

// const array=[];
// array[0]=10;
// array[1]=20;
// array[2]=30;
// array[3]=40;

// console.log(array)
// delete array[2]
// console.log(array)
// array[3]=50
// console.log(typeof array)
// console.log(Array.isArray(array))

// const array=[1,2,3,4,5];
// for(let val of array){
//     console.log(val);
// }

// for(let i=0; i<array.length;i++){
//     console.log(array[i]);
// }

// let name="Pabloscobar";
// for(let char of name){
//     console.log(char)
// }

// const num=[10,20,30,40,50]
// num.push(60);
// num.push(70);
// console.log(num)
// let data=num.pop();
// let data1=num.pop();
// console.log(data);
// console.log(data1);
// num.unshift(5)
// num.unshift(2)
// console.log(num);
// num.shift()
// console.log(num);

// const num=[];
// num[3]=5;
// console.log(num)
// num.unshift(0)
// console.log(num)

// const number=[10,20,30,40,50];
// console.log(number.slice(1,4));
// console.log(number.slice(1));
// console.log(number.slice(-3));
// console.log(number.slice(-4,-1));
// console.log(number.slice(0,-3));
// console.log(number.slice(0,3));
// console.log(number.slice());
// console.log(number.slice(-1)[0]);
// console.log(number.slice(-3));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let newFruits=fruits.splice(0,2)
console.log(newFruits)