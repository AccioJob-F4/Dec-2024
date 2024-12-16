// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   setTimeout(() => {
//     if (success) resolve("Operation was a success.");
//     else reject("Operation was rejected.");
//   }, 3000);
// });

// // consuming using .then().catch().finally() syntax
// myPromise
//   .then((result) => {
//     console.log("🚀 ~ .then ~ result:", result);
//     throw new Error("hola");
//   })
//   .catch((error) => {
//     console.log("🚀 ~ error:", error);
//   })
//   .finally(() => {
//     console.log("🚀 ~ Promise settled");
//   });

// ========================================================================

// Callback function

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// ========================================================================

// Callback Hell

// func1((data1) => {
//   func2(data1, (data2) => {
//     func3(data2, (data3) => {});
//   });
// });

// ========================================================================

// Promise.all
/**
 * Promise.all takes an array of promises and it returns a promise.
 *  - This output promise is resolved once ALL the input promises are resolved.
 *  - This output promise is rejected if ANY of the input promises are rejected.
 */

// const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
//   (resp) => {
//     return resp.json();
//   }
// );

// const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1").then(
//   (resp) => {
//     return resp.json();
//   }
// );

// const fetchComment = fetch(
//   "https://jsonplaceholder.typicode.com/comments/1"
// ).then((resp) => {
//   return resp.json();
// });

// console.log("🚀 ~ fetchPost:", fetchPost); // 2 sec
// console.log("🚀 ~ fetchUser:", fetchUser); // 3 sec
// console.log("🚀 ~ fetchComment:", fetchComment); // 4 sec

// Promise.all([fetchPost, fetchUser, fetchComment])
//   .then(([post, user, comment]) => {
//     console.log("🚀 ~ post:", post);
//     console.log("🚀 ~ user:", user);
//     console.log("🚀 ~ comment:", comment);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const startTime = Date.now();
// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1");
//     }, 2000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve("P2");
//       reject("E2");
//     }, 3000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P3");
//     }, 4000);
//   }),
// ])
//   .then(([d1, d2, d3]) => {
//     console.log(d1, d2, d3);
//     //   const endTime = Date.now();
//     //   console.log(endTime - startTime);
//     console.log("Hola");
//   })
//   .catch((error) => {
//     console.log("ERROR: ", error);
//     // const endTime = Date.now();
//     // console.log(endTime - startTime);
//   });

// ========================================================================

// Promise.race
/**
 * Promise.race takes an array of promises and it returns a promise.
 *  - This output promise is resolved if ANY the input promises is resolved.
 *  - This output promise is rejected if ANY of the input promises are rejected.
 */

// const startTime = Date.now();
// Promise.race([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1");
//       //   reject("E2");
//     }, 1000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   resolve("P2");
//       reject("E2");
//     }, 1000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P3");
//     }, 4000);
//   }),
// ])
//   .then((data) => {
//     console.log("🚀 ~ .then ~ data:", data);

//     const endTime = Date.now();
//     console.log("then : ", endTime - startTime);
//   })
//   .catch((error) => {
//     // console.log("ERROR: ", error);
//     const endTime = Date.now();
//     console.log("catch : ", endTime - startTime);
//   });

// ========================================================================

// Async-Await
/**
 * async --> used to declare asynchronous code
 * await --> pauses the execution of a function until a Promise is resolved or rejected
 */

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Resolved");
//     }, 3000);
//   });
// }

// // consumption using .then().catch()
// function fetchData1() {
//   getData()
//     .then((data) => {
//       console.log("🚀 ~ getData ~ data:", data);
//     })
//     .catch((error) => {
//       console.log("🚀 ~ error:", error);
//     });
// }

// // consumption using async/await in traditional way of writing functions
// async function fetchData2() {
//   try {
//     // const data = getData();
//     const data = await getData();
//     console.log("🚀 ~ fetchData2 ~ data:", data);
//   } catch (error) {
//     console.log("🚀 ~ fetchData ~ error:", error);
//   }
// }

// // consumption using async/await in arrow function
// const fetchData3 = async () => {
//   try {
//     // const data = getData();
//     const data = await getData();
//     console.log("🚀 ~ fetchData2 ~ data:", data);
//   } catch (error) {
//     console.log("🚀 ~ fetchData ~ error:", error);
//   }
// };

// fetchData2();
