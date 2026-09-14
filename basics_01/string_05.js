const name = "Amrita";
const age = 25;
const city = "Kolkata";

// console.log(name + " my age is " + age + " and I live in " + city);

console.log(`My name is ${name} my age is ${age} and I live in ${city}`);


const changeName = new String('Amrita-AH-Me')

console.log(changeName[0]);
console.log(changeName.toUpperCase());
console.log(changeName.length);
console.log(changeName.charAt(4));
console.log(changeName.indexOf('i'));


const newString = changeName.substring(2, 4)
console.log(newString);

const anotherString = changeName.slice(-6, 2)
console.log(anotherString);

const stringOne = "     Amrita Hazra    "
console.log(stringOne);
console.log(stringOne.trim());


const url = "https://google%20.com"
console.log(url.replace('%20', ''));

console.log(url.includes('amrita'));

console.log(changeName.split('-'));
