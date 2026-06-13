const array=[1,2,3,4,5,6,7,8,9,10];
const sum=array.reduce((acc,current)=> acc+current,0);
console.log(sum);

const cart = [
    {item:"Laptop",price:50000},
    {item:"Mouse",price:1000},
    {item:"Keyboard",price:2000}
]

const total=cart.reduce((sum,item)=>sum+item.price,0);
console.log("Total price is:",total);