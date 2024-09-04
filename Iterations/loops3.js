//                  filter 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )      // filter uses condition to evaluate and also returns the value 
// console.log(newNums);     // implicite

 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4         // explicite 
// } )

// console.log(newNums);



//                                Using for each as filter 


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


// Usage of Filter 

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);



///               map()


// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newNums = myNumers.map( (num) => { return num + 10})   // it return the value and also stors it 

   


//    chaining  of maps filter 



// const newNums = myNumers
//                 .map((num) => num * 10 )   // result of this operation will be passed to next chain
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);




//                   Reduce()    // mostly used for adding values



// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {   ////    generalisede form 
//     console.log(`acc: ${acc} and currval: ${currval}`);              /// here currval means value from array
//     return acc + currval
// }, 0)   ///   zero means the value of accumlator 
 


// const myNums = [1, 2, 3]

// const newNum = myNums.reduce((acc , num ) => acc + num, 0 )

// console.log(newNum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);



const hex = '123456789ABCDEF'
console.log(hex[5]);
