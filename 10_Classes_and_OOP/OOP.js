// const user={
//     username:"Ironmen",
//     email:"example@2112.com",
//     passwd:"123",

//     getUserDetails: function(){
//         console.log(`username: ${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.getUserDetails());

// if we want to make user2 then we have to again write so much code so to avoid this we use constructor

function User(username,loginCount,isLoggedIn){
    this.name=username;
    this.count=loginCount;
    this.Loggin =isLoggedIn;

    // we also declare method here 

    return this;  // return this is optional u can write or not it ur wish
} 

// what is new -> when new is used -> an empty object is created that called instance
const userOne=new User("dixit",12,true)
console.log(userOne);


// Note -> Prototype is very powerfull. b/c it give the acces of new, this keyword and classes etc
// Js behaviour is prototypal behaviour
// NOTE-> function can also used as Object
// Array,string ,almost everything -> is object