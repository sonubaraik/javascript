const set = new Set([1,2,3,2,5,4,6,7,8]);
console.log(set);
const set1= new Set();
console.log(set1);
set1.add=("A");
set1.add=("b");
set1.add=("c");
console.log("After add",set1);
set1.delete("c")
console.log("After delete",set1);
console.log("Check:",set1.has("A"));
console.log("Set Size:",set1.size);
set1.forEach(val => console.log(val))
set1.clear;
console.log("After Clear",set1);