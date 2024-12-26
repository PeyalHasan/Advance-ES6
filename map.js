
const numbers = [1, 2, 3, 4, 5];
// what is map in javascript?
// it is a higher order function that takes a callback function as an argument and returns a new array
// example
const double = numbers.map((n) => n * 2); 
console.log(double); // [2, 4, 6, 8, 10]

const items = [12, 445,64, 34, 23, 67];
const doubled = items.map(num => (num * 2) + 10);

