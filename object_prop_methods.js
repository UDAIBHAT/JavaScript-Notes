
            //        _                   _____           _       _      ____  _     _           _     _____                           _   _           
            //        | |                 / ____|         (_)     | |    / __ \| |   (_)         | |   |  __ \                         | | (_)          
            //        | | __ ___   ____ _| (___   ___ _ __ _ _ __ | |_  | |  | | |__  _  ___  ___| |_  | |__) | __ ___  _ __   ___ _ __| |_ _  ___  ___ 
            //    _   | |/ _` \ \ / / _` |\___ \ / __| '__| | '_ \| __| | |  | | '_ \| |/ _ \/ __| __| |  ___/ '__/ _ \| '_ \ / _ \ '__| __| |/ _ \/ __|
            //   | |__| | (_| |\ V / (_| |____) | (__| |  | | |_) | |_  | |__| | |_) | |  __/ (__| |_  | |   | | | (_) | |_) |  __/ |  | |_| |  __/\__ \
            //    \____/ \__,_| \_/ \__,_|_____/ \___|_|  |_| .__/ \__|  \____/|_.__/| |\___|\___|\__| |_|   |_|  \___/| .__/ \___|_|   \__|_|\___||___/
            //                                              | |                     _/ |                               | |                              
            //                                              |_|                    |__/                                |_|                              



// An Object is an Unordered Collection of Properties

// Properties are the most important part of JavaScript objects.
// Properties can be changed, added, deleted, and some are read only.



                                                                            //Accessing JavaScript Properties

// const User ={ 
//      name: "Aman",
//      lastname: "bhat", 
//      id: "152",
//      "pamna bhat": "inside" 
//     }

//     console.log(User.id);              // By Default the "id" key is taken as string ,so in details.id their is no need to specify the string 

//     console.log(User["pamna bhat"]);   // in this case it pamna key is typed as full string data type so the .pamna will not work.
//                                        // so in this [] string type is needed to be specfied. 


// Q: Use symbol as object keys and print it or declear symbol in object

// const mySym = Symbol("key1")

// const JSuser = {

//     [mySym]: "udai"
// }
// console.log(JSuser[mySym]);


                                                               //Adding New Properties and Deleting properties

// const aman = {}

// aman.name = "udai" 

// console.log(aman);

// delete aman.name

// console.log(aman);

                                                                   // Nested Objects

//   const myObj = {
//   name:"John",
//   age:30,
//   myCars: {
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"
//   }
// }
// console.log(myObj.myCars.car2);
// console.log(myObj.myCars["car2"]);
// console.log(myObj["myCars"]["car2"]);
// let p1 = "myCars";
// let p2 = "car2";
// console.log(myObj[p1][p2]);



                        
                          



//        _                   _____           _       _      ____  _     _           _     __  __      _   _               _     
//       | |                 / ____|         (_)     | |    / __ \| |   (_)         | |   |  \/  |    | | | |             | |    
//       | | __ ___   ____ _| (___   ___ _ __ _ _ __ | |_  | |  | | |__  _  ___  ___| |_  | \  / | ___| |_| |__   ___   __| |___ 
//   _   | |/ _` \ \ / / _` |\___ \ / __| '__| | '_ \| __| | |  | | '_ \| |/ _ \/ __| __| | |\/| |/ _ \ __| '_ \ / _ \ / _` / __|
//  | |__| | (_| |\ V / (_| |____) | (__| |  | | |_) | |_  | |__| | |_) | |  __/ (__| |_  | |  | |  __/ |_| | | | (_) | (_| \__ \
//   \____/ \__,_| \_/ \__,_|_____/ \___|_|  |_| .__/ \__|  \____/|_.__/| |\___|\___|\__| |_|  |_|\___|\__|_| |_|\___/ \__,_|___/
//                                             | |                     _/ |                                                      
//                                             |_|                    |__/                                                       




// Object methods are actions that can be performed on objects.
// A method is a function definition stored as a property value.





//        _                   _____           _       _     _____  _           _                ____  _     _           _       
//       | |                 / ____|         (_)     | |   |  __ \(_)         | |              / __ \| |   (_)         | |      
//       | | __ ___   ____ _| (___   ___ _ __ _ _ __ | |_  | |  | |_ ___ _ __ | | __ _ _   _  | |  | | |__  _  ___  ___| |_ ___ 
//   _   | |/ _` \ \ / / _` |\___ \ / __| '__| | '_ \| __| | |  | | / __| '_ \| |/ _` | | | | | |  | | '_ \| |/ _ \/ __| __/ __|
//  | |__| | (_| |\ V / (_| |____) | (__| |  | | |_) | |_  | |__| | \__ \ |_) | | (_| | |_| | | |__| | |_) | |  __/ (__| |_\__ \
//   \____/ \__,_| \_/ \__,_|_____/ \___|_|  |_| .__/ \__| |_____/|_|___/ .__/|_|\__,_|\__, |  \____/|_.__/| |\___|\___|\__|___/
//                                             | |                      | |             __/ |             _/ |                  
//                                             |_|                      |_|            |___/             |__/                   





// How to Display JavaScript Objects?

// Displaying a JavaScript object will output [object Object].

// Example
// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// document.getElementById("demo").innerHTML = person;



// Some solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()



//                                                                             Displaying Object Properties

// The properties of an object can be displayed as a string:

// Example
// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Display Properties
// document.getElementById("demo").innerHTML =
// person.name + "," + person.age + "," + person.city;




//                                                                     Displaying Properties in a Loop

// The properties of an object can be collected in a loop:

// Example
// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Build a Text
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
// };

// // Display the Text
// document.getElementById("demo").innerHTML = text;



// Note:
// You must use person[x] in the loop.
// person.x will not work (Because x is the loop variable).




//                                                                     Using Object.values()

// Object.values() creates an array from the property values:

// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Create an Array
// const myArray = Object.values(person);

// // Display the Array
// document.getElementById("demo").innerHTML = myArray;




//                                                         Using Object.entries()

// Object.entries() makes it simple to use objects in loops:

// Example

// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value + "<br>";
// }



//                                                         Using JSON.stringify()

// JavaScript objects can be converted to a string with JSON method JSON.stringify().
// JSON.stringify() is included in JavaScript and supported in all major browsers.


// Note:
// The result will be a string written in JSON notation:
// {"name":"John","age":50,"city":"New York"}


// Example
// // Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Stringify Object
// let myString = JSON.stringify(person);

// // Display String
// document.getElementById("demo").innerHTML = myString;

//                                                              destructure of object

    // const user = {
    //     name: "aman",
    //     age : 18,
    //     add : "jammu",
    //     ph : 600
    // }

    // console.log(user.name);

    // const {name} = user

    // console.log(name);

    // const {name: badshah} = user
    // console.log(badshah);

