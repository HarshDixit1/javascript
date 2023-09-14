const user={
    username:"harsh",
    age:19,
    
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website `); 
    }
}
// Note-> this refer to current context
user.welcomeMessage() //harsh,welcome to website
user.username="sam"
user.welcomeMessage() //sam,welcome to website
console.log(this);// {}-> empty b/c we are in node but in browser we see window (b/c in browser global object
// is window)

function chai()
{
    let username="sanskrit"
    console.log(this.username);
}

chai() // o/p -> undefined so,we can say in function this not work ,but work in object as we see above

//++++++++++++++++++++++++++++++++++ARROW FUNCTION++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const addTwo=(num1,num2)=>{

    return num1+num2
}
console.log(addTwo(5,3));
//Note: when curly braces use then return keyword used
// but if we use () then no need to return it is called implicit return for e.g

const subTwo=(num1,num2)=>(num1-num2) // used in react
console.log(subTwo(5,1));