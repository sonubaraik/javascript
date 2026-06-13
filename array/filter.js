let users = [
    {name: "John",age:55},
    {name: "Alice",age:34},
    {name: "Catty",age:27},
    {name: "Bob",age:30},
]

let newUser=users.filter(users=> users.age>35);
console.log(newUser);