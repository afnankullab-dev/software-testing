//Numbers
const sum = (a, b) => a+b;

//Strings
const greeting = (name) => `Hello ${name}`;

//Boolean
// const isEven = (number) => {
//     if(number % 2 === 0){
//         return true;
//     }
//     return false;
// }
//refactored version
const isEven = (number) => number % 2 === 0;


//Array
const animals = ['cat', 'dog', 'cow', 'sheep', 'goat']; 


module.exports = {
    sum,
    greeting,
    isEven,
    animals
}