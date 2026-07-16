const num=[1,2,3,4,5,6];
const newNum=num.map((value) => value*3)
console.log(newNum);

const user=[
    {name: "john",age:24},
    {name: "leo",age:20},
    {name: "pablo",age:30},
    {name: "arian",age:36}
]

const names=user.map(user => user.name)
const age=user.map(user => user.age)
console.log(names);
console.log(age);