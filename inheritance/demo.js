class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    display(){
        console.log("Name :",this.name);
        console.log("Salary :",this.salary);
    }
}
class Developer extends Employee{
    constructor(name,salary,language){
        super(name,salary);
        this.language=language;
    }
    codding(){
        console.log(`${this.name} develops using ${this.language}`);
    }
}
const dev1=new Developer("john",50000,"javascript");
const dev2=new Developer("Pablo",100000,"java");

dev1.display();
dev1.codding();
dev2.display();
dev2.codding();