let myhero=["ironman","wanda_maximoff"]


let heroPower={
    ironman:"armor up",
    wanda_maximoff:"manipulation",

    getironmanPower: function(){
        console.log(`tony power is ${this.ironman}`);
    }
}

Object.prototype.harsh=function(){
    console.log(`harsh is present in all object`);
}

Array.prototype.hiiHarsh=function(){
    console.log(`hello  harsh dixit`);
}

// heroPower.harsh()
// myhero.harsh()

// heroPower.hiiHarsh() // give error watch video to understand timestamp:36min
// myhero.hiiHarsh()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength()
// "hitesh".trueLength()
// "iceTea".trueLength()
