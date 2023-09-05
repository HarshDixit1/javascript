// Tead the documentation for better understanding click link given below
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// let arr=[2,3,4,5,6]
// console.log(arr[4]);
// arr.push(8);
// arr.unshift(1)
// arr.shift()
// console.log(arr);

// let myheros=['ironman','captain','hulk','thor','wanda']
// console.log(myheros.includes('wanda'));// true
// console.log(myheros.indexOf('hulk'));

//join method used to convert array into string
// let  newarr= myheros.join()
// console.log(myheros);// array
// console.log(newarr);// string

//slice and splice

// const myn1= myheros.slice(1,3)
/*console.log(myn1);  // [ 'captain', 'hulk' ]
console.log("A",myheros);   // A [ 'ironman', 'captain', 'hulk', 'thor', 'wanda' ]

const myn2=myheros.splice(1,3)
console.log(myn2);  // [ 'captain', 'hulk', 'thor' ]
console.log("B",myheros); // B [ 'ironman', 'wanda' ]
*/

// Note: the difference btw slice and splice is that ki in case of slice :(it doesn't change the original array and in paranthesis 
// element is excluded) but in case of splice:(original array change as it remove the splice part from array)


//*************************************************************part 2********************************************************************* */


let marvel_heros=['ironman','captain','hulk','thor','wanda']
let dc_heros=['flash','batman','superman','Wonder Woman','Aquaman']

// marvel_heros.push(dc_heros) // => in case of push dc_heros array consider as single element

// console.log(marvel_heros);
// const allheros=marvel_heros.concat(dc_heros)
// console.log(allheros);

// spread operator also work same as concat
// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros);


// const arr1=[1,2,3,[4,5,6],7,[8,[9,10],11],12]
// const real_arr1=arr1.flat(Infinity);
// console.log(real_arr1);

// //check is it array or not
// console.log(Array.isArray("harsh")); // flase (not array)
// //to convert above into array
// console.log(Array.from("harsh")) //[ 'h', 'a', 'r', 's', 'h' ]

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]