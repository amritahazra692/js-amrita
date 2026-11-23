// function addTwoNumbers(Number1, Number2){
//     // let result = Number1 + Number2;
//     // return result
//     return Number1 + Number2
// }

// const result = addTwoNumbers(25, 90)
// console.log("Result: ", result);

function loginUserMessage(userName){
    if(userName===undefined){
        console.log("Please Enter a Username");
        
        return
    }
    return `${userName} just logged in`
}

//console.log(loginUserMessage("Amrita"));

console.log(loginUserMessage());

