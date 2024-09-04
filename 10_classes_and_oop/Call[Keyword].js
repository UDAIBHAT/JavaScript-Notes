function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
 
    // SetUsername( username)    // here the function is called is but it is not really called 
 
     SetUsername.call(this, username)  // it  will  accomplish the work the prblm is the exectution context of setUsername vanshises after the work is done ie calling 
                                // resulting in the deletion of varriable decleared inside, here "call" firstly hold the reference execution context 
                                // here this is used to hold those values in his execution context or in simple words this allows the setUsername to make its values avaible to inside function 
        
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


// call passes the cureent execution context to another function