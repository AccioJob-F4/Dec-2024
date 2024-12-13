// Promises
// Pending, Resolved, Rejected

// Creating a Promise
// const promise = new Promise((resolve, reject) => {
//     if(/* operation */)
//     {
//         resolve("Success");
//     }
//     else{
//         reject("Error");
//     }
// });

// const isEven = (number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number % 2 === 0) resolve(`${number} is even`);
//       else reject(`${number} is odd`);
//     }, 3000);
//   });
// };

// Consuming a Promise [ .then().catch().finally() ]
// console.log(isEven(2));
// isEven(1)
//   .then((message1) => {
//     console.log(message1);
//   })
//   .catch((message2) => {
//     console.log(message2);
//   })
//   .finally(() => {
//     console.log("Finished");
//   });

// ===========================================================================================
// API

// fetch

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   }),
// })
//   .then((divyansh) => {
//     return divyansh.json();
//   })
//   .then((minal) => {
//     console.log(minal);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// GET (default), POST, PUT, PATCH, DELETE;

// ===========================================================================================
// Event Loop
// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 10);

// Promise.resolve()
//   .then(() => {
//     console.log("D");
//     setTimeout(() => console.log("E"), 0);
//   })
//   .then(() => {
//     console.log("F");
//     Promise.resolve().then(() => console.log("G"));
//   });

// console.log("H");

//  A H D F G E B C
// ===============================================

// setTimeout(() => console.log("T1"), 0);

// Promise.resolve()
//   .then(() => {
//     console.log("P1");
//     setTimeout(() => console.log("T2"), 0);
//     return Promise.resolve("P2");
//   })
//   .then((msg) => {
//     console.log(msg);
//     return new Promise((resolve) =>
//       setTimeout(() => {
//         resolve("P3");
//       }, 0)
//     );
//   })
//   .then((msg) => console.log(msg));

//   P1 P2 T1 T2 P3
