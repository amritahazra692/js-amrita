let myDate = new Date();
//console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

//let myCreateddate = new Date(2026, 11, 25);
//let myCreateddate = new Date(2026, 11, 25, 10, 45);
//let myCreateddate = new Date("2026-12-25");
let myCreateddate = new Date("12-12-2026")
//console.log(myCreateddate.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp); //shows time in miliseconds

// console.log(Date.now()/1000); //convert miliseconds to seconds
// console.log(Math.floor(Date.now()/1000));

console.log(myCreateddate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long"
})