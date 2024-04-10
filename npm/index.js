// console.log("Hii");
// console.log("Hello World");


//EVENT LOOPS
function fun1(){
    process.nextTick(()=> console.log("Inside Process-1"));
    setTimeout(()=>console.log("Inside Fun-1"),1000);
    process.nextTick(()=> console.log("Inside Process-2"));
    setImmediate(() => console.log("Inside Set-Immediate"))
}
function fun2(){
    console.log("Inside Fun-2");
}
function fun3(){
    console.log("Inside Fun-3");
    fun2();
}

fun1();
//fun2();
//fun3();



//UNDERSTANDING WITH FILES(fs)

//IO modules always work in last
const fs = require('fs');

setTimeout(() => {
    console.log("Inside Set-Timeout")
}, 0);

fs.readFile(__filename,()=> {
    console.log("Inside File");
    process.nextTick(()=> console.log("Inside Read-File PROCESS"));
})

process.nextTick(()=> console.log("Inside Process-3"));
Promise.resolve().then(()=> console.log("Inside Promise"));