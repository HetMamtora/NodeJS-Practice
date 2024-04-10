exports.sayHello = 'Hello WOrld';

function sayThanks() {
    console.log("Thank You");
}

module.exports = sayThanks;
console.log(module);

//above code will remove sayHello from reference and add sayThanks into it