const num=[3,6,8,2,1,9];
num.sort((a,b)=> b-a);
console.log(num);

const name=["john","leo","pablo","arian"]
console.log(name.sort())

const user=[
    {name: "john",age:24},
    {name: "leo",age:20},
    {name: "pablo",age:30},
    {name: "arian",age:36}
]

user.sort((a,b)=> a.age - b.age);
console.log(user);

user.sort((a,b)=> a.name.localeCompare(b.name))
console.log(user);

const no=[2,4,40,50,90,100]
console.log(no.sort()) // it is default like alphabetical order

const string="pabloscobar";
let array=string.split(' ')
let newString=array[0][0].toUpperCase()+array[0].slice(1);
console.log(newString);


