// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month =4
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feburary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;

    default:
        console.log();
        break;
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// falsy values

// false,0,-0,BigInt 0n, "", null, NaN,undefined

//truthy values

// "0" , 'false' " ", {}, [] , function(){}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish Coalescing Operator (??): null undefined

//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
//when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1= 10??15

val1 = null??12 

val1 = 10??undefined

val1 = null??2??5

// console.log(val1); // 10
// console.log(val1);  // 12
// console.log(val1); // 10
// console.log(val1); // 2

// Note -> terinary operator are different  

// Condition ? true:false 

