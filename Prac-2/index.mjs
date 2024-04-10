//ES6 - MODULE IMPORT/EXPORT

import data from './example.mjs';
const {hello,hii} = data; //destructing

hello(); //destructing

console.log(data);
console.log(data.hello());