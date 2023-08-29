/*const score =4000000
console.log(score.toExponential(1));
console.log(score.toFixed(5));
console.log(score.toLocaleString('en-IN')) // output -> 40,00,000 -> 'en-In' used for india

*/
/*Note-> there are various use of .toLocalString()-> like 
The toLocaleString() method returns a Date object as a string, using locale settings. 
and also used to count number of zeors in bignumber*/

/*let num=54.86432
console.log(num.toPrecision(3));//54.9
console.log(num.toPrecision(2));//55
console.log(num.toPrecision(1));// 5e+1 
// Note-> .toPrecision : precise the value acc. to given value in bracket
*/


/*let money=687.87343
console.log(money);
console.log(money.valueOf());// return the same value as the money*/


// we can study properties/methods of Number by .(dot) for example->

// let x=Number.MAX_SAFE_INTEGER
// console.log(x);


//+++++++++++++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*console.log(Math.abs(-5));// used to convert -ve value to +ve
console.log(Math.round(4.5));
console.log(Math.ceil(4.6));//(o/p->5)  take above value
console.log(Math.floor(-4.2)); //(o/p->-5) take low value
console.log(Math.pow(16,2));
console.log(Math.min(3,4,1,6,8));//1
console.log(Math.max(4,6,3,8,9));//9*/

console.log(Math.random());//  it give different value every time but value lies always between 0 to 1.

// but sometimes we want value between 1 t0 10 or 1 to 6 like in a dice for that we multiply by suitable num
console.log((Math.random()*10)+1) // we add 1 because we want min 1 atleast
console.log(Math.floor((Math.random()*10))+1)

let min=10
let max=20

console.log(Math.floor(Math.random()*(max-min))+min);// add min so that atleast 10 (min) value give