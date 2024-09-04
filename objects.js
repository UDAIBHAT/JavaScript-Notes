             



            //         _                   _____           _       _      ____  _     _           _       
            //         | |                 / ____|         (_)     | |    / __ \| |   (_)         | |      
            //         | | __ ___   ____ _| (___   ___ _ __ _ _ __ | |_  | |  | | |__  _  ___  ___| |_ ___ 
            //     _   | |/ _` \ \ / / _` |\___ \ / __| '__| | '_ \| __| | |  | | '_ \| |/ _ \/ __| __/ __|
            //    | |__| | (_| |\ V / (_| |____) | (__| |  | | |_) | |_  | |__| | |_) | |  __/ (__| |_\__ \
            //     \____/ \__,_| \_/ \__,_|_____/ \___|_|  |_| .__/ \__|  \____/|_.__/| |\___|\___|\__|___/
            //                                               | |                     _/ |                  
            //                                               |_|                    |__/                   




// Objects are variables too. But objects can contain many values.

// This code assigns many values (Fiat, 500, white) to an object named car:

// Example
// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car);




// Note: It is a common practice to declare objects with the const keyword.



// =>> How to Define a JavaScript Object

//     1)Using an Object Literal

//     2)Using the new Keyword

//     3)Using an Object Constructor



                                                                                      // JavaScript Object Literal 

// An object literal is a list of name:value pairs inside curly braces {}.
// name:value pairs are also called key:value pairs.
// object literals are also called object initializers.

// Example 1

// const details={firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
// console.log(details);

// Example 2

// Create an Object

//const person = {};

// Add Properties

// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person);



                                                                                            // Using the new Keyword

// This example create a new JavaScript object using new Object(), and then adds 4 properties:

// Example
// // Create an Object
// const person = new Object();

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

//console.log(person);


// Note:

// The examples above do exactly the same.
// But, there is no need to use new Object().
// For readability, simplicity and execution speed, use the object literal method.

                                                                                                // Using Constructor


// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.


// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

// In the constructor function, this has no value.
// The value of this will become the new object when a new object is created.

// Now we can use new Person() to create many new Person objects:


// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// const mySister = new Person("Anna", "Rally", 18, "green");

// const mySelf = new Person("Johnny", "Rally", 22, "green");

// console.log(myFather);


//                                                    Property Default Values

// A value given to a property will be a default value for all objects created by the constructor:
``

// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.nationality = "English";  // this value will be deafault 
//   }

  //const myFather = new Person("John", "Doe", 50, "blue");

//   console.log(myFather);
//   console.log(myFather.nationality);

//                                                                                      Adding a Property to an Object

// Adding a property to a created object is easy:

// Example
// myFather.nationality = "English";

// Note:
// The property will be added to myFather. Not to any other Person Objects.



//                                                                          Adding a Property to a Constructor

// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.nationality = "English";
//   }


//   Person.prototype.Gender = "male";

//   const myMother = new Person("jhjh", "Doe", 50, "blue");
  // console.log(myMother);
  

//   Explaination of above Code

// In the code you provided, you are creating a Person constructor function and setting properties both within the constructor and on the prototype.

// Instance Properties: Properties defined within the constructor (this.firstName, this.lastName, this.age, this.eyeColor, this.nationality) are instance properties. Each instance of Person will have its own set of these properties.
// Prototype Properties: Properties defined on the prototype (Person.prototype.Gender) are shared across all instances of Person. This means that every instance of Person can access Gender, but it does not appear directly in the object when you log it—it is accessed through the prototype chain.


//  let’s break it down in a simple way.

// ### What Are Prototype Properties?

// Prototype properties are properties or methods that are defined on an object’s prototype. Every object in JavaScript has a prototype, which is another object from which it inherits properties.

// ### Why Use Prototype Properties?

// - **Efficiency**: All instances of a constructor function share the same prototype properties, saving memory.
// - **Inheritance**: It allows for a form of inheritance, where objects can share functionality.

// ### Simple Example

// 1. **Constructor Function**: Defines the properties for each object created.
// 2. **Prototype Property**: Shared among all instances of the object.

// ### Step-by-Step

// 1. **Create a Constructor Function**:

// ```javascript
// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }
// ```

// 2. **Add a Prototype Property**:

// ```javascript
// Person.prototype.nationality = "English";
// ```

// 3. **Create Instances**:

// ```javascript
// const person1 = new Person("John", "Doe", 30, "blue");
// const person2 = new Person("Jane", "Doe", 25, "green");
// ```

// 4. **Access Properties**:

// ```javascript
// console.log(person1.firstName); // "John" (own property)
// console.log(person2.firstName); // "Jane" (own property)

// console.log(person1.nationality); // "English" (prototype property)
// console.log(person2.nationality); // "English" (prototype property)
// ```

// ### Explanation

// - **Own Properties**: Properties like `firstName`, `lastName`, `age`, and `eyeColor` are unique to each instance.
// - **Prototype Properties**: Properties like `nationality` are shared among all instances via the prototype.

// ### Visualizing the Prototype Chain

// To see the prototype properties in action:

// ```javascript
// console.log(person1.hasOwnProperty('nationality')); // false (not an own property)
// console.log('nationality' in person1); // true (found in prototype chain)
// ```

// ### Summary

// - **Own Properties**: Defined directly on the instance.
// - **Prototype Properties**: Defined on the prototype and shared among all instances.
// - **Prototype Chain**: If a property is not found on the instance, JavaScript looks up the prototype chain to find it.




//                                                            Constructor Function Methods

// A constructor function can also have methods:

//   Example
//{

    // function Person(first, last, age, eyecolor) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.eyeColor = eyecolor;
        // this.fullName = function() {
        //   return this.firstName + " " + this.lastName;
        // };
      //}
      
      //const myMother = new Person("jhjh", "Doe", 50, "blue");
      //console.log(myMother.fullName());

//}

//                                                      Adding a Method to an Object

// Adding a method to a created object is easy:

// Example

// myMother.changeName = function (name) {
//   this.lastName = name;
// }
// myMother.changeName("bhat")
// console.log(myMother.lastName);
// console.log(myMother);


// The method will be added to myMother. Not to any other Person Objects.



//                                Adding a Method to a Constructor

// You cannot add a new method to an object constructor function.
// This code will produce a TypeError:

// function Person(first, last, age, eyecolor)
//  {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eyecolor;
//  }

//  const myMother = new Person("jhjh", "Doe", 50, "blue");
//  console.log(myMother);


// Person.prototype.changeName = function (name) 
//   {
//     this.lastName = name;
//   }
 
//   myMother.changeName("bhat");
//   console.log(myMother);

//   const father = new Person("sanjay","bhat",42,"pink");
//   console.log(father);

//   father.changeName("khan");
//   console.log(father);



//                                                                      EXTRA CLARRIFICATION


// In JavaScript, Objects are King.

// If you Understand Objects, you Understand JavaScript.

// Objects are containers for Properties and Methods.
// Properties are named Values.
// Methods are Functions stored as Properties.
// Properties can be primitive values, functions, or even other objects.

// In JavaScript, almost "everything" is an object.

// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects

// All JavaScript values, except primitives, are objects.





                                                                // __      ________ _______     __  _____ __  __ _____  
                                                                // \ \    / /  ____|  __ \ \   / / |_   _|  \/  |  __ \ 
                                                                //  \ \  / /| |__  | |__) \ \_/ /    | | | \  / | |__) |
                                                                //   \ \/ / |  __| |  _  / \   /     | | | |\/| |  ___/ 
                                                                //    \  /  | |____| | \ \  | |     _| |_| |  | | |     
                                                                //     \/   |______|_|  \_\ |_|    |_____|_|  |_|_|     
                                                                                                                    
                                                                                                                    




// 1) Singleton Object

// A singleton object is like having just one special box that everyone shares. No matter who asks for the box, they all get the same one.

// Key Points:

// One Instance: Only one instance exists.
// Shared: Everyone uses the same instance.
// Global Access: Easily accessible from anywhere in the code.

// 2) Non-Singleton Object

// A non-singleton object is like having many boxes, and each time you want a box, you get a new one.

// Key Points:

// Multiple Instances: Each time you create, you get a new instance.
// Independent: Each instance is separate and has its own state.
// Not Shared: Different parts of the code can have their own instances.


// When to Use Each

// => Singleton: Use when you need one shared instance across your whole app, like for settings or a single connection to a server.
// => Non-Singleton: Use when you need multiple instances, each with its own data, like user objects or separate UI components.



// The code snippet const person = new Object(); creates a single instance of an object, but it does not implement the singleton pattern.

// Understanding the Code

// const person = new Object(); creates a new object instance and assigns it to the variable person.
// This object can be used and modified, but nothing in this code ensures that only one instance of this object will ever be created.

// Singleton Pattern

// To implement a singleton, you need to ensure that only one instance of the object is created and that there is a way to access this single instance globally.



// ===>>> In the context of singleton design patterns, "same instance" means that two variables or references point to exactly the same object in memory. There is only one instance of the object, and any changes made to this object through one reference will be visible through all other references.


// Example: Different Instances

// Let's look at an example with different instances first:


// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// const person1 = new Person("John", "Doe", 30, "blue");
// const person2 = new Person("Jane", "Doe", 25, "green");

// console.log(person1 === person2); // false (different instances)
// person1.age = 31;
// console.log(person2.age); // 25 (changes to person1 do not affect person2)

// In this example:

// person1 and person2 are different instances. They are separate objects in memory.
// Changing person1.age does not affect person2.age because they are different objects.


// Example: Same Instance (Singleton)

// Now, let's look at an example with the same instance:


// const PersonSingleton = (function () {
//     let instance;

//     function createInstance(first, last, age, eye) {
//         return {
//             firstName: first,
//             lastName: last,
//             age: age,
//             eyeColor: eye
//         };
//     }

//     return {
//         getInstance: function (first, last, age, eye) {
//             if (!instance) {
//                 instance = createInstance(first, last, age, eye);
//             }
//             return instance;
//         }
//     };
// })();

// const person1 = PersonSingleton.getInstance("John", "Doe", 30, "blue");
// const person2 = PersonSingleton.getInstance("Jane", "Doe", 25, "green");

// console.log(person1 === person2); // true (same instance)
// person1.age = 31;
// console.log(person2.age); // 31 (changes to person1 affect person2 because they are the same instance)

// In this example:

// person1 and person2 are the same instance. They both point to the same object in memory.
// Changing person1.age affects person2.age because they are references to the same object.

// Key Points:

// Same Instance: Both variables (person1 and person2) refer to the exact same object in memory. Changes to one reference affect the other.
// Different Instances: Each variable (person1 and person2) refers to a separate object in memory. Changes to one reference do not affect the other.
// Using the singleton pattern ensures that there is only one instance of a particular object, and all references to this object point to the same memory location.