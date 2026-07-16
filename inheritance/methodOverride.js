class Parent{
    property(){
        console.log("Parent property");
    }
    greet(){
        console.log("Hello from parent");
    }
}
class Child extends Parent{
    property(){
        super.property();
        console.log("Child properties");
    }
    greet(){
        console.log("Greet from child");
    }
}
Child= new Child();
Child.greet();
Child.property();