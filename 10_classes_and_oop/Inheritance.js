class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ // extend is used instead of .prototype here basically it will inherit all the properties of parent call ie user 
    constructor(username, email, password){
        super(username)   // it used instead of call-keyword & it will take username from the extend part
                          //  super keyword will refer to extended class for getting the value of asked varriable or any other thing
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
