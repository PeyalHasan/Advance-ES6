
// what is forEach?
// forEach is a method that is used to iterate over an array and apply a function to each element of the array.It does not return a new array

const numbers = [1, 2, 3, 4, 5];
const result = numbers.forEach(n => console.log(n));


// console.log(filter);
// what is filter?
// filter is a method that is used to create a new array with all elements that pass the test implemented by the provided function
const filter = numbers.filter(n => n > 2);
const selected = numbers.filter(p => p%2 === 0);
console.log(selected);

const friends = ['John', 'Peter', 'Sandy', 'Tom'];
