function student(name,age){
    this.name=name;
    this.age=age;

    student.prototype.introduce=function(){
    console.log(`Hi my name is ${this.name} and i am ${this.age} years old.`)
  }
}

let s1=new student("john",24)
let s2=new student("Leo",28)
let s3=new student("Pablo",22)

s1.introduce()