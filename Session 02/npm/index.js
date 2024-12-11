// var isEven = require("is-even");
import isEven from "is-even";
import uniqid from "uniqid";

console.log(isEven(0));
//=> true
console.log(isEven(1));
//=> false
console.log(isEven(2));
//=> true
console.log(isEven(3));
//=> false

console.log(uniqid()); // -> 4n5pxq24kpiob12og9
console.log(uniqid(), uniqid()); // -> 4n5pxq24kriob12ogd, 4n5pxq24ksiob12ogl
