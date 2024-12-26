/**
 * 
 */

//Destructuring Object
const {age, z, ...others} = {age: 30, name: 'John', z: 3, a: 4, b: 5};
// console.log(age); // 30
// console.log(z); // 3
// console.log(others); // {name: 'John', a: 4, b: 5}
//is it will convert to object?
//yes
//Destructor Array
const [x, y, ...rest] = [1, 2, 3, 4, 5];
// console.log(x); // 1

//if i use a loop for in at object, what will happen?
//is it store object on a array?
const data = [{id:1, name: 'Abdul', address: 'Kochu khet'}];
console.log(data[0].address)