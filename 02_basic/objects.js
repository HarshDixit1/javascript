// Note: singleton created only through constructor but not from literals

// Object.create  -> this method is called constructor method that create singleton

// object can also declare like->
/*
const info={
    name: "harsh",
    age:19,
    emailId: "harsh@gmail.com",
    isLogined: false,
    last_logintime: ["sunday","wednesday"]
}*/

// first note that in Array : only value defined not key
//but in object both key and value defined and note key is an string but most time we not write it as string

// how to access object elements: 2 ways to access 
//1. using dot operator
//2. using square bracket but it good practice to use this one b/c if key value given in string like this["name":"harsh"]then dot operator
// cannot used

// console.log(info.emailId)
// console.log(info["emailId"]);

//ques: used symbol datatype in object 

/*const mysym=Symbol("key")

const user={
    mysym:"mykeys"
}

console.log(user.mysym); // o/p is correct but it is not the correct way b/c datatype is string not symbol
console.log(typeof user.mysym);// string
*/

// correct way is

const mysym1=Symbol("key")

const user={
    [mysym1]:"mykeys",
    name:"dixit",
    age:19,
    hobbie:"travelling"

}
// console.log(user[mysym1]);

//to update

user.hobbie="driving"
// Object.freeze(user) // it stop the updation 
user.hobbie="gaming"
// console.log(user); // o/p { name: 'dixit', age: 19, hobbie: 'driving', [Symbol(key)]: 'mykeys' }

user.greeting=function()
{
    // console.log("Ram Ram bhaiyo!")
}

user.greeting_Two=function()
{
    // console.log(`Ram Ram ${this.name} bhai`)
}
// console.log(user.greeting());// Ram Ram bhaiyo!
// console.log(user.greeting_Two()); //Ram Ram dixit bhai

//**********************************************************************************************************

const India={}

India.Statename="Haryana"

// console.log(India);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullName:{
            firstname:"harsh",
            lastname:"dixit"
        }

    }
}

// console.log(regularUser.fullname.userfullName.firstname);// harsh

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// let obj3={obj1,obj2} o/p { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj3=Object.assign(obj1,obj2)
// console.log(obj3);


// also used spread operator like in array

const obj4={...obj1,...obj2}
// console.log(obj4);



//imp point

// console.log(Object.keys(regularUser));    // [ 'email', 'fullname' ]

//*******************************************DE-STRUCTRING OF OBJECT*****************************************

const course={
    coursename:"js in hindi",
    coursePrice:"free",
    platform:"apna college",
    instructor:"aman"
}

//destructure isliye use hota  that makes it possible to unpack values from arrays, or properties from 
// objects, into distinct variables

// agar hume kuch print karna h hum likhte h course.coursename then o/p come using destructure we can give 
// name to keys value and print the o/p

//below how to de-structure.
const {coursename}=course

console.log(coursename);// js in hindi

//