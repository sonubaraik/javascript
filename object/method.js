const student ={
    name: "john",
    age:24,
    address:"Jharkhand",
    
    welcome(){
        console.log("Hi my name is ",this.name);
    },

    greet(){
        console.log("Hi my name is ",this.name);
        console.log("I am",this.age,"years old");
        console.log("I live in",this.address);
        
    }
}
student.welcome();
student.greet();