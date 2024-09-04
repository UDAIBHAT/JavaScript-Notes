//      "I Promise a Result!"

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is an Object that links Producing code and Consuming code

// SSyntaxx

// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
//  do an Async Task
// DB Calls

//       myResolve(); // when successful
//       myReject();  // when error
//     });

//     // "Consuming Code" (Must wait for a fulfilled Promise)

//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );

// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected

// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

//     myPromise.state            	 myPromise.result

//     "pending"	                 undefined
//     "fulfilled"	                 a result value
//     "rejected"                 	 an error object

//                                                                              Example

// const PromiseOne = new Promise(function (resolve, result) {
//   setTimeout(function () {
//     console.log("Async task is compelete");
//     resolve(); // resolve is related to then function it binds the resolve with function
//   }, 1000); // it is just like telling that the code is resolved
// });

// PromiseOne.then(function () {
//   console.log(`promise consumed `);
// });

//                                                                         2nd type to decleare
 
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

//                                                                         Passing parameter in resolve 


// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     // aman = {username: "Chai", email: "chai@example.com"}
//     // resolve (aman)
//     resolve({ username: "Chai", email: "chai@example.com" }); //  we can also pass argumnets to it , args could
//   }, 1000); //  be anything and values could be hard coded
// });

// promiseThree.then(function (user) {
//   /// the args value is binded to then here as function argument
//   console.log(user);
// });

//                                                             Error Example with passing parameter and catcing error in then


// const PromiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let error = true;
//       if (!error) {
//         resolve({ username: "hitesh", password: "123" });
//       } else {
//         reject("ERROR: Something went wrong");
//       }
//     }, 1000);
//   });
  
//   PromiseFour
//     .then(
//       function (user) {
//         console.log(user);
//         return user.username;
//       },
//       function (error) {
//         console.log(error); //  error handled
//       })


//                                                    Error Example with passing parameter and thenable with in then error handle 


// const PromiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "hitesh", password: "123" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// PromiseFour
//   .then(
//     function (user) {
//       console.log(user);
//       return user.username;
//     }).then((username) => {
//         console.log(username);  
//     },
//     function (error) {
//       console.log(error); //  error handled
//     }) 
//   .finally(() => console.log("The promise is either resolved or rejected")); /// this is used when all the resolve and reject (error) are catched or not and what to do next
//                                                                             // The finally statement defines a code block to run regardless of the result.
  

//                                                      Another wat to catch error beside then 


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).catch(function(error){  //  here error is handled seperatly not in then block 
//         console.log(error);
//      });


//                                                                 another way to catch error and thenable code



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);   // example of thenable code
// }).catch(function(error){  //  here error is handled seperatly not in then block 
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))



//                                                  async await { it doesnot handle error gracefully } to handle error we use it in try catch block


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive  // here is it returns resolve values   and await is used when the code takes time 
//         console.log(response);
//     } catch (error) {
//         console.log(error);  // Here it returns reject values 
//     }
// }
// consumePromiseFive()     

//                                                 handling a made Promise  with async or then 

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')   

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))



// let aman = 1232

// function printstring() {
// let khan = 122 
// console.log(khan);
// if (aman === 1232) {
//     console.log(`innner if statement `);
    
// }

//     console.log(aman);
    
    
// }

// printstring()



// let a = 5 
// {
//    const a = 6
//     console.log(a);
    
// }
// console.log(a);


// let a = 5
// console.log(a);
//  a = 654
// console.log(a);

// {
//      a = 6255
//     console.log(a);
    
// }




