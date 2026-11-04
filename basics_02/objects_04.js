// const appUser = new Object()  //used to declare singleton object

const appUser = {}
appUser.name = "Peter Parker"
appUser.id = "ac123"
appUser.IsLoggedIn = true

// console.log(appUser);

const newUser = {
    email: "user@example.com",
    userFullname: {
        fullname: {
            firstname: "Amrita",
            lastname: "Hazra"
        },
    }
}

// console.log(newUser.userFullname.fullname.firstname);

const obj1 = {a: "1", b: "2"}
const obj2 = {c: "3", d: "4"}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// console.log(appUser);
// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(appUser.hasOwnProperty('IsLogged'));

const course = {
    name: "Javascript Learning",
    price: "999",
    courseInstructor: "Peter Parker"
}

const {courseInstructor: Instructor} = course  //destructioring object
console.log(Instructor);
