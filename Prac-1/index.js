// function hello(){
//     console.log("Hello World");
// }

// hello();

console.log("LOCAL MODULES : : ");
//METHOD-1
console.log("Method-1");
require("./add");
console.log("Normal");

//METHOD-2
console.log("Method-2");
const add1 = require("./add"); //better practice to write in variable
const sum1 = add1(3,3);
const sum2 = add1(5,5);
console.log(sum1);
console.log(sum2);

console.log("Multiple Exports");
const imp = require("./add");
console.log(imp);

const data = require("./example");
console.log(data);


console.log("")
console.log("Exports VS module Exports");
console.log("MODULE EXPORTS:");
const msg = require("./example1");
msg.sayHello();
msg.sayThanks();
console.log("EXPORTS:");
const msg1 = require("./exports");
msg1.sayHello1();
msg1.sayThanks1();

console.log("")
console.log("BUILT-IN  : : ");

const OS = require('os');
const a = OS.freemem();
const b = OS.totalmem();
const c = OS.userInfo();
console.log(a,b,c);


console.log("");
console.log("Path Module");

const path = require('path');
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.extname(__filename));

console.log(path.join('/hello','/hello','file.txt'));

const pathProps = path.parse('/foo/bar/nodejs');
console.log(pathProps);

console.log("");
console.log("File Structure Module");
console.log("Asynchronous Way")

const fs = require('fs');
fs.readFile('file.txt','utf-8',(err,data) => {
    if(err){
        console.log(err);
        return
    }
    console.log(data);
})

console.log("Synchronous Way")
fs.writeFile('text.txt','Writting in text file',(err) => {
    if(err){
        console.log(err);
        return
    }
    console.log('File written: Success');
})

fs.writeFileSync('text2.txt','Inside text 2 writting', 'utf-8')
console.log('File Written: Success');

fs.stat('file.txt', (err,stats) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(stats);
})

const stats1 = fs.statSync('file.txt');
console.log(stats1);