class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}
let p1= new Person("john",24);
let p2= new Person("Pablo",28);
console.log(p1.name);
p1.introduce();
p2.introduce();