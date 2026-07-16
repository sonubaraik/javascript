const num=[1,2,3,,4,5,6];
num.forEach(val => console.log(val*2));

const user=[
    {name: "john",age:24},
    {name: "leo",age:20},
    {name: "pablo",age:30},
    {name: "arian",age:36}
]

user.forEach(val =>{
    console.log("Name",val.name);
    console.log("Age",val.age);
})