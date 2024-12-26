

// What is reduce method?
// reduce is a method that is used to apply a function to each element in the array to reduce the array to a single value
// example

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
