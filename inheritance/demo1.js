class Animal{
    constructor(){
        console.log("Animal class constructor");
    }
    eat(){
        console.log("Animal is eating");
    }
}
class Dog extends Animal{
    constructor(){
        super();
        console.log("Dog class construntor");
    }
}

dog = new Dog();
dog.eat();