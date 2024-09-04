//                                       For Each loop



// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function name (val){          // this is normal function but in for each we have to use callback func. 
//     console.log(val);                         
// } name() )



// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){          /// this is call back func. with no name and no call
//     console.log(val);
// } )




//  const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( const  aman= () =>  {                              /// this is normal arrow funct.
//     console.log(hiiiii);
// } aman() 
// )


 //const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( (item) => {
//     console.log(item);                                                     // this is the callback arrow func
// } )




// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)   // we can also provide the callback externally 


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);       // it also some other parameters like the whole array & index 
// } )




// ["", "", ""]
// [{}, {}, {}] 



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )


// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item                             // values cant  be stored in a varriable as it returns nothing
// } )

// console.log(values);