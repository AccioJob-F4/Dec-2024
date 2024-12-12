// Synchronous Code
// console.log("Hello 01");
// console.log("Hello 02");
// console.log("Hello 03");

// Asynchronous Code
// console.log("Hello 01");
// setTimeout(() => {
//   console.log("Hello 02");
// }, 1000);
// console.log("Hello 03");

/* Event Loop --> mechanism

Call Stack --> LIFO --> Last In First Out
function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log("Third executed");
}

Task Queue (Callback Queue or Macrotask Queue) --> FIFO
Microtask Queue --> FIFO



console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setTimeout(() => {
  console.log("3");
}, 1000);

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log("4");
  }, 3000);
});

setTimeout(() => {
  console.log("5");
}, 0);

console.log("6");
*/

// Why does a loop blocking the call stack prevent asynchronous callbacks from executing?

// setTimeout(() => {
//   console.log("Timeout callback");
// }, 1000);

// let start = Date.now();

// while (Date.now() - start < 2000) {}

// console.log("Loop ended");

// ========================================================================

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3");
// });

// Promise.resolve().then(() => {
//   console.log("4");
// });

// setTimeout(() => {
//   console.log("5");
// }, 0);

// console.log("6");

// 1 6 3 4 2 5

// ========================================================================

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log("3");
  }, 2000);
});

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log("4");
  }, 1000);
});

setTimeout(() => {
  Promise.resolve().then(() => {
    setTimeout(() => {
      console.log("5");
    }, 500);
  });
}, 1000);

console.log("6");

// 1 6 2 4 5 3
