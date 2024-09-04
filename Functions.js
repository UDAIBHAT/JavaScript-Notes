//       functions


// function nameprint () {

//     console.log('hlooo myself aman');    /// it only print the console statement and doesnot return any value 
// }

// nameprint()         //    Here only nameprint means refernce and this () means calling it 



// function nameprint (num1 = 1 , num2 = 1) {
 
//     let sum = num1 + num2 
//     return sum           /// here return is used to return the values 
//   console.log("heloooooooo");    /// this will not work 
    
// }
    
// let string = nameprint()
// console.log(string);
// nameprint()


// const User = function() {
//     console.log(`mana`);
// }

// User()  /// function can also be stored in varriables



                                                 // rest and spread operator in functions its packs value in array     


// function aman (...num1) {


//     return num1


// }

// console.log( aman(2999,5,6,655,6,5656,56,65,6,5));

// function restspread_op (val1,val2,...num1) {

//     return num1

// }
// console.log(restspread_op(200,300,400,5000));




                      // Object as a input in function 

// const Details = 
// {

// name : "aman" ,
// age : 80,
// sex : "male"

// }

// function User (Anyobject){

// let aman = Anyobject.age
// return aman

// }

// console.log(User(Details));



// const Details = {
// name : "aman" ,
// age : 80,
// sex : "male"
// }



// function Det (Anyobject){

//     console.log(`My name is ${Anyobject.name}.I am ${Anyobject.age}years old and i am ${Anyobject.sex}`);
// }

// Det(Details)




                             // Array as an input in Function 


// const skies =["Aman",12,"Bhat",13]

// function asman (Anyarray){

//     console.log(`the name of world is ${Anyarray[0]}, it's intensity is ${Anyarray[1]}`)
// }

// asman(["udai",15])
// asman(skies)








                             // child function can access parent functions varriable but vice versa is not true 


// function one () {

//     let name = "aman"
//     function two () {
//         const Aim = "godo"
//         console.log(name);

//     }
//    // console.log(Aim);   it will give errro of no value found like that
//     two ()
// }
// one ()


                            // intersting case  

// console.log(addone(5))   // here function declearation is on top it will not produce error

//  function addone(num){
//     return num + 1
// }


// addTwo(5)   // here it will throw errror due the storing of function varriable so keep in mind while using this type of fuction nomencleature

// const addTwo = function(num){
//     return num + 2
// }





                       //  this discussion

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);   // this refers to the current context it also means that that the values r not hard coded
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  /// will print empty object in node but in browser console it will print window object (in browser console window is the global object)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()                                         ///  this trrigers to undefined when used in a fuction. just like in above example that usage is limited to objects only not in pure function 
                                                
// const ch = function () {
//         let username = "hitesh"
//         console.log(this.username);   /// same response from other type of decleratoin (varriable walay) 
//     }

// ch()



// const aman = () => {
//     let username = "hitesh"
//     console.log(this.username);             /// same is the case with arrow functions will only printing this it will show empty obj. 
// }
// aman()


                                               //  Arrow functions  

                     // normal function 

// const aman = function () {
//     return console.log("hloooooooo");
// }
// aman()

                         //  changes to arrow fnc 

// const amann = () => {
//     return console.log( "hiiiiiiiiii");  // here it is called explicit return in this type we use return word to return values explicitly, when using curly braces always yse return keyword if it is in single line
// }
// amann()

                    //  implicite return 

// const amann = () => console.log( "hiiiiasasaaaassiiiiii"); // in this return keyword is not used and also not curly braces and is written in same line, it ia used for single line code

// amann()

  //                        OR 

// const amann = () => (console.log( "hiiiiasasaaaassiiiiii"))   // it can also be written like this 
// amann()

                // object in arrow function in implicite way 


// const khan = () => ({ username: "udai", age: 80, sex: "male" });

// console.log(khan());


             // object in arrow function in explicite way 


// const khan = () => {return { username: "udai", age: 80, sex: "male" }};

// console.log(khan());


                    // add two numbers with default value

// const AddTwoNum = ( num1 = 1 , num2 = 2 ) => ( num1 + num2 )

// console.log(AddTwoNum(2,5));
// console.log(AddTwoNum());
// console.log(AddTwoNum(10,12));


 





///                        iife (Immediatly invoked function expresion) it is used to stop global varr. polution and to immmediatly invoke a function

 
// (function AMAN () {
//     console.log("gigigigiig");          // nameed iife
// })();    // to write more iife we need not end contest by using semi - colon ;

// (() => {
//     console.log("hifeijeo");             // unamed iife
// })();

// ((name) => {
//     console.log(`${name}`);             // unamed iife using parameter 
// })("udai")




// (( num1 = 1 , num2 = 2 ) => ( console.log(num1 + num2) ))()




//   let var concept 



// let a = 10
// console.log(a);
// {
//     console.log(a);
//     let b = 50
// }
// console.log(b);

// let a = 10
// console.log(a);
// {
//     console.log(a);
//     {
//         console.log(a);
//     }
// }

// {
//   let a = 10;
//   console.log(a);
//   {
//     console.log(a);
//     {
//       console.log(a);
//     }
//   }
// }
// console.log(a);

// let a = 10
// {
//    // console.log(a);
//     let a = 500;
//     console.log(a);
// }

// const a = 10
// console.log(a);
// {
//     // console.log(a);
//     const a = 500
//     console.log(a);
// }

// a = 100
// let a
// console.log(a);  // will give refrence error due to early access of a before initialization

// a = 500
// var a
// console.log(a); // will not give such error