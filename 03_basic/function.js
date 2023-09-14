function addTwoNumber(num1,num2) {
    let result=num1+num2
    return result
}

// const outcome=addTwoNumber(3,"a") //3a
const outcome = addTwoNumber(3,5.67) // 8.67
// console.log("sum :",outcome); 

function loginUserMsg(username,key) {
    if(username===undefined)
    {
        console.log("please enter your username and key! ");
        return
    }
    return `${username} just loggined in ${key}`
}
// console.log(loginUserMsg("dixit","facebook"));
// console.log(loginUserMsg());


// ******************************Functions with objects and array in javascript*****************************

function CalculateCartPrice(...num)  //... called rest operator in function whereas in object it is spread op
{
    return num
}

// console.log(CalculateCartPrice(50,100,150,200,250)); // [ 50, 100, 150, 200, 250 ]

const user={
    name:"harsh",
    dob:"5-oct-2004"

}

// method 1
function handleObject(anyObject){
    console.log(`he also known as ${user.name} and his date of birth is ${user.dob}`);
}

// handleObject()

// method 2 -> output same as method 1

function handleObject(anyObject){
    console.log(`he also known as ${anyObject.name} and his date of birth is ${anyObject.dob}`);
}

// handleObject(user)

const arr=[5,10,15,20,25]

function return2ndValue(getarr)
{
    return getarr[1]
}

// console.log(return2ndValue(arr)); //10
