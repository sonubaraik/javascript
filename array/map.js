const array=[1,2,3,4,5,6];
const newArray=array.map((value)=>value*3);
console.log(newArray);

let users = [
    {name: "John",age:55},
    {name: "Alice",age:34},
    {name: "Catty",age:27},
    {name: "Bob",age:30},
]
let name=users.map(user=>user.name);
console.log(name)