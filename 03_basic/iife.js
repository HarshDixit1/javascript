// Immediately Invoked Function Expression (IIFE)
// Note-also used to prevent pollution of global scope

//Syntax->
/*

1. 
(function () {
  // …
})();

2.
(() => {
  // …
})();

*/

// named iife
(function chai(){
    console.log("DB CONNECTED");
})(); // apply  semi colon; to stop

( ()=>{
    console.log("DB CONNECTED AGAIN");
})();

( (name)=>{
    console.log(`DB CONNECTED BY ${name}`);
})("harsh");

