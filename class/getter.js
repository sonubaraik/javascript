class Circle{
    constructor(radius){
        this.radius=radius;
    }

    get area(){
        return Math.PI*this.radius*this.radius;
    }
}
let a1=new Circle(5);
console.log(a1.area);