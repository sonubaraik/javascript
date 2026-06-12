const array=[];
array[0]=10;
array[1]=20;
array[2]=30;

console.log(array);
array[2]=50;
array[5]=60;
console.log(array)
delete array[5];
console.log(array)


console.log(typeof array);
console.log(Array.isArray(array));