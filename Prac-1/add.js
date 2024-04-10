const add = (a,b) => {
    return a+b;
}
const sum = add(2,3);
console.log(sum);


//METHOD-2
const add1 = (a,b) => {
    return a+b;
}

//module.exports = add1;

//MULTPLE EXPORTS
const a = "Hello";
const b = "World";

module.exports = add1,{a,b}