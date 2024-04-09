// function hello(){
//     console.log("Hello World");
// }

// hello();

console.log("LOCAL MODULES");
//METHOD-1
console.log("Method-1");
require("./add");


//METHOD-2
console.log("Method-2");
const add1 = require("./add"); //better practicet to write in variable
const sum1 = add1(3,3);
const sum2 = add1(5,5);
console.log(sum1);
console.log(sum2);


console.log("")
console.log("BUILT-IN MODULES");