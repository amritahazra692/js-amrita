// objects.create  //is constructor method used for singleton

//object literals

const mySym = Symbol("key1")

const user_1 = {
    name: "Amrita",
    "full_name": "Amrita Hazra",
    email: "amrita@google.com",
    [mySym]: "myKey1",
    isLoggedIn: true,
    location: "Kolkata",
    lastLoggedIn: ['Monday', 'Tuesday']
}

// console.log(user_1.email);
// console.log(user_1["email"]);
// console.log(user_1["full_name"]);
// console.log([mySym]);

user_1.email = "amrita@new.com"
// Object.freeze(user_1)
user_1.email = "amrita@new111.com"
// console.log(user_1);

user_1.greeting = function(){
    console.log("Hello World!!!");
    
}

user_1.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`);
    
}

console.log(user_1.greeting());
console.log(user_1.greetingTwo());


