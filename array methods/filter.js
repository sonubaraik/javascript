const array=[1,2,3,4,5,6,7]
const even=array.filter((val) => val%2===0)
console.log(even)

const age=[23,90,15,25,36,12,18];
const adults=age.filter(age => age>18)
console.log(adults);

const user=[
    {name: "john",age:24},
    {name: "leo",age:20},
    {name: "pablo",age:40},
    {name: "arian",age:36}
]
const newUser=user.filter(a => a.age>35)
console.log(newUser);