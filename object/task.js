function Employee(id,name,department,salary){
    this.id=id;
    this.name=name;
    this.department=department;
    this.salary=salary;

    this.info=function(){
        console.log(`Id: ${id}`)
        console.log(`Name: ${name}`)
        console.log(`Department: ${department}`)
        console.log(`Salary: ${salary}`)
    }
    this.bonous=function(){
        if(department==="IT"){
            salary+=10000;
            console.log(`Congratulation you got 10000 bonus`)
            console.log(`Your total salary is ${salary}`)
        }else{
            console.log(`You are not from IT department`)
        }
    }

    this.increaseSalary=function(){
        salary=salary+0.1*salary;
        console.log(`Your salary has been increased by 10%`)
        console.log(`Your total salary is ${salary}`)
    }

    this.decreaseSalary=function(){
        salary=salary-0.1*salary;
        console.log(`Your salary has been decreased by 10%`)
        console.log(`Your total salary is ${salary}`)
    }


}

let e1= new Employee(123,"john","IT",50000);
let e2= new Employee(889,"Leo","Sales",20000);
let e3= new Employee(224,"Rima","HR",40000);
let e4= new Employee(987,"Pablo","DEO",10000);
e1.info();
e2.bonous();
e3.increaseSalary();
e4.decreaseSalary();