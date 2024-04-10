// console.log("Hii");
// console.log("Hello World");

function fun1(){
    process.nextTick(()=> console.log("Inside Process-1"));
    setTimeout(()=>console.log("Inside Fun-1"),2000);
    fun3();
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