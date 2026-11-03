const marvel_heros = ['Ironman', 'Thor', 'Captain America']
const dc_heros = ['Superman', 'Batman', 'Flash']

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);

// const new_heros = [...marvel_heros, ...dc_heros]  //spread operator
// console.log(new_heros);

// const anotherArray = ['1', '2', ['3', '4', '5'], '5', '6', ['7', ['7', '8']]]
// console.log(anotherArray.flat(Infinity));

console.log(Array.isArray("Amrita"));
console.log(Array.from("Amrita"));  //convert string to array
console.log(Array.from({name: "Amrita"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
