//+++++++++++++++++++++++++++++++++++++++++++++DATE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*let myDate =new Date()
console.log(myDate);// 2023-08-29T06:06:37.978Z
console.log(myDate.toLocaleDateString());// 8/29/2023
console.log(myDate.toLocaleString());// 8/29/2023, 6:08:42 AM
console.log(myDate.toDateString());//Tue Aug 29 2023
console.log(myDate.toString());// Tue Aug 29 2023 06:06:37 GMT+0000 (Coordinated Universal Time)
*/

// Note-> Date is typeof object
// let mycreated=new Date("12-01-2023")//dd-mm-yy
// console.log(mycreated.toLocaleString());

//Note-> by using dot we can access many different types of method/function,
// note-> months started from 0(zero)
// console.log(mycreated.getMonth());

// let newDate =new Date()
// console.log(newDate.getDay());

const d = new Date();
let day = d.getDay();
console.log(day);

//+++++++++++++++++++++++++++++++++++++++++++++TIME+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++