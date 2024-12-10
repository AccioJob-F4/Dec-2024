// Variables and Data types
/*
--> var --> function-scoped -- re-declared & updated -- issue that happens due to a concept called Hoisting
--> let --> block-scoped -- re-declared & updated
--> const --> block-scoped -- updated


--> Primitive Data Types (string, number, boolean, null, undefined, symbol, bigint)
--> Reference Types (objects and arrays)
*/

// "Divyansh Singh"
// ""
// 76
// -87
// 987.867
// truthy/falsy values
// {
//     key: "property"
// }
// [658, 8769, "sdhjga", true]

// let a = null;
// console.log("🚀 ~ a:", a);
// let b;
// console.log("🚀 ~ b:", b);

// ============================================================================================================================================

// Functions & Scope
// Function Declaration
function myFunction1() {
  // logic
}

// Function Expression
const myFunction2 = function () {
  // logic
};

// Arrow Function
const myFunction3 = () => {
  // logic
};

// Global Scope
// Function Scope
// Block Scope

const a = 110; // Global Scope
let b = 120; // Global Scope
var c = 130; // Global Scope
function add() {
  const d = 10; // Block Scope
  let e = 20; // Block Scope
  var f = 30; // Function Scope

  if (a % 2 === 0) {
    let g = 40; // Block Scope
    const h = 50; // Block Scope
    var i = 60; // Function Scope
  }
  //   console.log(g, h, i);
  console.log(a, b, c);

  return 3 + 5;
}

add();

console.log(a, b, c);
console.log(d, e, f);

// const add = (a, b) => {
//   console.log(a + b);
// };

// add(2, 3);
// add(2, 30);

// ============================================================================================================================================

// Control Structures
// --> Conditionals (if, if-else. ternary, switch cases etc etc)
// --> loops (for, for...in, forEach, map, while, do...while, filter)

// ============================================================================================================================================

// Objects and Arrays
// const person = {
//   name: "Divyansh",
//   age: "25",
// };

// console.log(person.name); // DOT Notation
// console.log(person["age"]); // Brackett Notation

// ============================================================================================================================================

// Closures and Hoisting
// Closures --> function that remembers variables from the outer scope even after the execution of outer function is completed

// const add = (a) => {
//   const b = 10;

//   const subtract = (c) => {
//     return a + b - c;
//   };

//   return subtract;

//   //   const multiply = (d) => {
//   //     return a * b * d;
//   //   };

//   //   return { s: subtract, m: multiply };
// };

// const sub = add(5);
// console.log(sub(6));

// const actions = add(5);
// console.log(actions.s(6));
// console.log(actions.m(6));

// const add = (a) => {
//   const b = 10;

//   const subtract = (c) => {
//     const multiply = (d) => {
//       return a * b * c * d;
//     };

//     return {
//       r: a + b - c,
//       m: multiply,
//     };
//   };

//   return subtract;
// };

// const sub = add(5);
// const actions = sub(6);
// const mul = actions.m(2);

// console.log(actions.r, mul);

// Hoisting --> moves the declarations to the top of the current scope

// console.log(a);
// var a = 5;
// console.log(a);

// sayHello();

// function sayHello() {
//   console.log("Hola");
// }

// sayHello();

// console.log(b);
// const b = 10;
