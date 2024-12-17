// Design Patterns
/**
 *  - Creational Patterns - Focussed on object creation mechanisms (Singleton Pattern, Factory Pattern)
 *  - Structural Patterns - Concerned with object composition (Adapter Pattern, Observer Pattern)
 *  - Behavioral Patterns - Focus on how objects interact and communicate ()
 */

// Creational Patterns
/**
 *  - Singleton Pattern - This pattern ensures that a class has only one instance
 *  and provides a global point of access to that instance.
 */

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   introduce() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// const p1 = new Person("Raj");
// const p2 = new Person("Raj");
// console.log(p1 === p2);

// class Singleton {
//   constructor(name) {
//     if (!Singleton.instance) {
//       Singleton.instance = this;
//       this.name = name;
//     }

//     return Singleton.instance;
//   }

//   introduce() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// const s1 = new Singleton("Raj");
// const s2 = new Singleton("Arjun");

// console.log(s1 === s2);
// s1.introduce();
// s2.introduce();

// class Notification {
//   constructor() {
//     if(!Notification.instance)
//     {
//         // create one
//     }

//     return Notification.instance;
//   }

//   sendNotificationOnSMS() {
//     // logic
//   }

//   sendNotificationOnMail() {
//     // logic
//   }
// }

// button.addEventListener("click", () => {
//   const notification = new Notification();
//   notification.sendNotificationOnSMS();
// });

// ================================================

/**
 * Factory Pattern - The Factory pattern creates objects without specifying their concrete classes.
 * It is useful when you need to generate objects dynamically based on specific conditions.
 */

// class Car {
//   constructor(name) {
//     this.name = name;
//   }

//   drive() {
//     console.log(`${this.name} is driving.`);
//   }
// }

// class Bike {
//   constructor(name) {
//     this.name = name;
//   }

//   ride() {
//     console.log(`${this.name} is riding,`);
//   }
// }

// class VehicleFactory {
//   createVehicle(type, name) {
//     switch (type) {
//       case "car":
//         return new Car(name);
//       case "bike":
//         return new Bike(name);
//       default:
//         return null;
//     }
//   }
// }

// const factory = new VehicleFactory();

// const myCar = factory.createVehicle("car", "Toyata Hilux");
// const myBike = factory.createVehicle("bike", "Honda Hness CB350");

// myCar.drive();
// myBike.ride();

// ================================================

// Structural Patterns
/**
 * Adapter Pattern - The Adapter pattern allows incompatible interfaces to work together. It acts as a bridge between two different
interfaces
 */

// class OldPaymentGateway {
//   pay(amount) {
//     console.log(`Paid ${amount} using Old Payment Gateway.`);
//   }
// }

// class NewPaymentGateway {
//   processPayment(amount) {
//     console.log(`Paid of ${amount} processed via New Payment Gateway.`);
//   }
// }

// class PaymentAdapter {
//   constructor(newGateway) {
//     this.newGateway = newGateway;
//   }

//   pay(amount) {
//     this.newGateway.processPayment(amount);
//   }
// }

// const oldGateway = new OldPaymentGateway();
// oldGateway.pay(100);

// const newGateway = new NewPaymentGateway();
// const adapter = new PaymentAdapter(newGateway);

// adapter.pay(200);

// ================================================

/**
 * Observer Pattern - The Observer pattern defines a one-to-many dependency between objects so that when one object changes
state, all its dependents are notified.
 * */

// class Subject {
//   constructor() {
//     this.observers = [];
//   }

//   addObserver(observer) {
//     this.observers.push(observer);
//   }

//   notifyObservers(message) {
//     this.observers.forEach((observer) => {
//       return observer.update(message);
//     });
//   }
// }

// class Observer {
//   constructor(name) {
//     this.name = name;
//   }

//   update(message) {
//     console.log(`${this.name} received: ${message}`);
//   }
// }

// const subject = new Subject();

// const observer1 = new Observer("Observer 1");
// const observer2 = new Observer("Observer 2");

// subject.addObserver(observer1);
// subject.addObserver(observer2);

// subject.notifyObservers("New Update Available");
