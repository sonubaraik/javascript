class Person{
    #name;
    #age;
    constructor(name,age){
        this.#name=name;
        this.#age=age;
    }
    get age(){
        return this.#age;
    }
    set age(value){
        this.#age=value;
    }
    get name(){
        return this.#name;
    }
    set name(value){
        this.#name=value;
    }
}
let p1 = new Person("john",24);
console.log(p1.age);