// if(!) // if sort is not available in current browser version/system
// {
//     Array.prototype.sort = something;
// }

// console.log([2, 1, 5, 3, 4, 5].sort());

// ================================================================================================

// JS 2019
// Chrome 92 version
// Safari 120 version
// IE 22a version

// ================================================================================================

// prototype (every js object has a prototype)
// feature detection
// implementation of polyfills

// const person = {
//   greet: function () {
//     console.log("Hello!");
//   },
// };

// const student = Object.create(person);

// student.study = function () {
//   console.log("I'm studying");
// };

// student.greet = function () {
//   console.log("Hola chola");
// };

// student.greet();
// student.study();

// const arr = [1, 2, 3, 42];

// console.log(arr.divyansh());

// Array.prototype.divyansh = function () {
//   console.log("Divyansh is officialy part of JS now");
// };

// console.log(arr.divyansh());

// ================================================================================================

// feature detection
// console.log([1, 2, 3, 45, 5].includes(3, -20)); // t
// console.log([1, 2, 3, 45, 5].includes(3)); // t
// console.log([1, 2, 3, 45, 5].includes(3, 2)); // t
// console.log([1, 2, 3, 45, 5].includes(3, -2)); // f
// console.log([1, 2, 3, 45, 5].includes(3, -4)); // t
// console.log([1, 2, 3, 45, 5].includes(3, -20)); // t
// console.log([1, 2, 3, 45, 5].includes(3, 20)); // f
// delete Array.prototype.includes;
// // console.log([1, 2, 3, 45, 5].includes(3, -20));

// if (!Array.prototype.includes) {
//   load("array-includes-polyfill.js");
// }

// if (!Array.prototype.sort) {
//   load("array-sort-polyfill.js");
// }

// console.log([1, 2, 3, 45, 5].includes(3, -20)); // t
// console.log([1, 2, 3, 45, 5].includes(3)); // t
// console.log([1, 2, 3, 45, 5].includes(3, 2)); // t
// console.log([1, 2, 3, 45, 5].includes(3, -2)); // f
// console.log([1, 2, 3, 45, 5].includes(3, -4)); // t
// console.log([1, 2, 3, 45, 5].includes(3, -20)); // t
// console.log([1, 2, 3, 45, 5].includes(3, 20)); // f

// 4 KB

// 2 KB + 1 KB = 3KB + 1KB = 4 KB
// 1 KB & 1KB

// ================================================================================================

// Currying -- uses concept of closures

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));

// // Curried version
// function addC(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(addC(2)(3));

// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// const double = multiply(2);
// const tripple = multiply(3);

// console.log(double(5));
// console.log(tripple(5));
