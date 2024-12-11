// ES6+
// Ecmascript 6 / Ecmascript 2015

// functions
// variables (let, const)
// classes
// modules
// ... more

// Template literals
// const age = 25;
// console.log("Divyansh Singh is " + age + " years old.");
// const res = "Divyansh Singh is " + age + " years old.";
// console.log("🚀 ~ res:", res);

// const res1 = `Divyansh Singh is ${age} years old.`;
// console.log("🚀 ~ res1:", res1);
// console.log(
//   `Divyansh Singh is ${age > 18 ? "an adult" : "not an adult"}. Bye bye.`
// );

// Arrow Functions
// function name(age) {}
// const name = (age) => {};

// name(25);

// const greet = (name = "User") => {
//   console.log(`Hello ${name}.`);
// };

// greet();

// Destructing
// const arr = ["apple", "mango", "pineapple"];
// const app = arr[0];
// const man = arr[1];

// const [a, b, c, d] = arr;
// console.log("🚀 ~ a:", a);
// console.log("🚀 ~ b:", b);
// console.log("🚀 ~ c:", c);
// console.log("🚀 ~ d:", d);

// const user = {
//   id: 101,
//   name: {
//     first: "Divyansh",
//     last: "Singh",
//   },
//   contact: {
//     email: "divyansh@example.com",
//     phone: "9876543210",
//     address: {
//       city: "Bangalore",
//       state: "Karnataka",
//       postal: {
//         pin: 560034,
//         landmark: "Near Jakasandra Metro",
//       },
//     },
//   },
//   preferences: {
//     theme: "dark",
//     notifications: {
//       email: true,
//       sms: false,
//     },
//   },
// };

// const {
//   id,
//   name: { first, last },
//   contact: {
//     email,
//     address: {
//       city,
//       postal: { pin, landmark },
//     },
//   },
//   preferences: {
//     notifications: { email: emailNotifications, sms: smsNotifications },
//   },
// } = user;

// const {
//   contact: {
//     address: {
//       postal: { pin, landmark },
//     },
//   },
// } = user;

// console.log(landmark);

// user.contact.address.postal.landmark;

// Rest Operator (...)

// const sum = (a, b) => {
//   return a + b;
// };

// const res = sum(2 + 3);
// const op = sum(res, 4);

// const sum = (...numbers) => {
//   console.log(numbers);
//   console.log(numbers.reduce((total, num) => total + num, 0));
// };

// // sum(1, 2, 3, 4);
// sum(1, 2, 3, 4, 5, 6, 7, 8);

// const arr = ["apple", "mango", "pineapple", "tomato", "cucumber"];
// const [apple, mango, ...remaining] = arr;
// console.log("🚀 ~ remaining:", remaining);
// console.log("🚀 ~ mango:", mango);
// console.log("🚀 ~ apple:", apple);

// const person1 = {
//   name: "Divyansh",
//   age: 25,
//   city: "Bangalore",
//   profession: "Developer",
// };

// const { name, age, ...otherDetails } = person;
// console.log("🚀 ~ otherDetails:", otherDetails);
// console.log("🚀 ~ age:", age);
// console.log("🚀 ~ name:", name);

// ================================================================================================================
// Classes

// class Person {
//   constructor(name, age, city, profession) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.profession = profession;
//   }

//   createPersonObject() {
//     return {
//       name: this.name,
//       age: this.age,
//       city: this.city,
//       profession: this.profession,
//     };
//   }

//   introduce() {
//     return `My name is ${this.name} and I'm ${this.age} years old and I'm a ${this.profession} based out of ${this.city}.`;
//   }
// }

// const person1 = new Person("Divyansh", 25, "Bangalore", "SSDE");
// const person2 = new Person("Divyansh2", 25, "Bangalore2", "SSDE");

// console.log("🚀 ~ person1:", person1.createPersonObject());
// console.log("🚀 ~ person2:", person2.createPersonObject());

// console.log("🚀 ~ person1:", person1.introduce());
// console.log("🚀 ~ person2:", person2.introduce());

// A-- > B(son);

// ================================================================================================================
// Inheritance

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(
//       `My name is ${this.name} and I'm ${this.age} years old. Person Class`
//     );
//   }
// }

// class Student extends Person {
//   constructor(name, age, course) {
//     super(name, age);
//     this.course = course;
//   }

//   introduce() {
//     console.log(
//       `My name is ${this.name} and I'm ${this.age} years old. Student Class`
//     );
//   }
// }

// const student1 = new Student("Bob", 21, "CSE");
// student1.introduce();
// const person1 = new Person("Bob", 21);
// person1.introduce();

// ================================================================================================================

// NPM --> Node package manager
