//                                                 loops Basic Knowldg.

// There  are three parameters in loops pehla hota hai jaha sa start hoga , dusra hoti hai condition then loop ko 
// terminate karna ka liya yak condition , flow jo hai woh iss way mein hota ki sabsa pehla loop yak initilised 
// varrible sa start hota hai then condition check hoti then agr condition sahi  hai toh loop ka code execute hoga 
// then uska badd scope end wali line sa yak line pehla control uss third terminating walay varr. pa jaygaa then waha
// sa increment hoga then loop phir sa execute. 

// For loop mein pehla varr. initilised hoga then condition check hogi then code run hoga then vapis control third walay ka pass jaygaa 
// aur ismein teeno parameters yak he jagha likhay jatay hai 

// While loop mein mein be same for ka jaise hota hai  par waha bas condition brackets mein likhi jati ,varr inti. pehla hota
// hai then bracket mein condition then code likha jata hai then code ka sath he third varr likha jata hai .  

// in do while loop code is executed first then conditon is checked then increment 

///                                                     For loop 


// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(element);
// }



// for (let i = 0; i < 10; i++) {
//     console.log(`Udai is best`);  // In these iterations first we have taken a varrible i and put it to 0 then  we have 
//                                   // made a condition ie i < 10 if this condition gets validated then it will go in the   
//                                   // loop for execution and when the execution is done , before the scope the  end it will
//                                   // jump to the next conditon ie i++ , it will increment varr. i and the loops continue.
//                                   // if the condition isnot true loop will not execute.
// }


//                                           if in loop 



// for (let i = 1; i <= 10; i++) {
//     console.log(`the number is ${i}`);
//     if (i == 5) {
//         console.log(`the no ${i} is detected`);  // parent child concept is supported here 
//     }
    
// }

// console.log(i);  // error due to scope 



//      nested loop

//                                         table till Five 


// for (let i = 0; i < 5; i++) {
//     console.log(`Table of Number :- ${i}`);
//     for (let j = 0; j <= 10 ; j++) {
//        console.log(`${i} * ${j} = ${i*j}`);
        
//     }
    
// }

//                                       Array printing


// let myarray = ["aman","bhat"]
// console.log(`Length of Array is ${myarray.length}`);
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
// }



//                                                    Break Continue 



// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break // at this point the control is pushed back to the main programme ie loop sa bahr a jaygaa
                 //  execution context ko bahar fek deta hai brake
//     }
//    console.log(`Value of i is ${index}`);
    
// }



// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue   // yak condition ko maff kar deta hai yeh , continue pa condition yak bar skip hoti 
//                    // then uskay next value sa start hoti hai
//     }       
//    console.log(`Value of i is ${index}`);
    
// }



// While loop 


// let index = 0 
// while (index < 20) {

//     console.log(`value is ${index}`);
//     index++ // index = index + 1 
// }


// let array = ["aman", "bhat", "papa"]
// let index = 0
// while (index<array.length) {
//     console.log(`the value is ${array[index]}`);
// index++
// }


// DO while loop 

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);



//                                           For-of  { it deals in values }

//for (const iterator of object) {
    // Here iterator is just like the initialized varr. in for loop & object is broad term usually replaced by the name of iterable thing
    // it can be objects arrays or even strings 
    // this loop only needs decleared iterator and nothing else not even size lenght of array if array is in use
//}

//                                                         Eg arrays 

// const arr = [1,2,3,4,5,6,7,8,9,10]

// for (const num of arr) {

//     console.log(`All Array values are ${num}`);
    
// }
 
// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }


//                                                                                Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India") // unique values are there & it remembers the order of insertion 

// console.log(map);



// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// for (const num of map) {
//      console.log(num);     // it will return all values but in array not in open 
// }


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const [key, value] of map) {    // [ key , value ] destructures the array and we can use it seperatly .
//      console.log(key, ':-', value);
// }

         //               objects are not iterable through for of

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const key of myObject) {
//     console.log(key);
    
// }




//                                               For - in  syntax  { it deals in keys }
 

// for (const key in object) 
// {
    
// }




// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const keys in myObject) {
//     console.log(keys);                  // it will give all the keys once the r obtained we can find the values 
// }                                       //  so  objects r iterable ny for in loop  



// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
 

 //                                                                              for in fro arrays



// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const xyz in programming) {
//     console.log(xyz); 
// }


// const rogramming = ["js", "rb", "py", "java", "cpp"]

// for (const key in rogramming) {
//     console.log(rogramming[key]);
// }


//                                                                 for-in for maps 


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);                         // through for in iteration on maps are not possible 
// }


