function student(name,age){
    this.name=name;
    this.age=age;
}

    student.prototype.intro=function(name,age){
        console.log(`Hi my name is ${this.name} and i'm ${this.age} years old`);
    }

let s1=new student("john",24);
let s2=new student("leo",26);
let s3=new student("pablo",28);

s1.intro();