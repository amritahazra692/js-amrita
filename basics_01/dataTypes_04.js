let myName = "Amrita";
let anotherName = myName;
anotherName = "Amrita Hazra";

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "new@gmail.com",
    upi: "new@sbi"
}

let userTwo = userOne;

userTwo.email = "newUser@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

