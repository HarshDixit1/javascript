// forof loop

const score =[234,125,154,354,498]
for (const num of score) {
    // console.log(num);
}

// Map ->The Map object holds key-value pairs and remembers the original insertion order of the keys.
//  Any value (both objects and primitive values) may be used as either a key or a value.
// Note->Map only occur once; it is unique in the Map's collection

const map=new Map()
map.set("IN","India")
map.set("USA","united state of america")
map.set("Fr","france")
map.set("IN","India")


// console.log(map); /*  o/p=>     
//  Map(3) {
//     'IN' => 'India',
//     'USA' => 'united state of america',
//     'Fr' => 'france'
//   }*/

  // let apply forof loop on map

for (const [key,value] of map) {
    // console.log(key,"-:",value);
}
/*o/p->IN -: India
USA -: united state of america
Fr -: france*/

const myObject={
  js:"javasript",
  cpp:"c++",
  rb:"ruby",
  swift:"swift by apple"
}

// for in loop
for (const key in myObject) {

  // console.log(`${key} shortcut for ${myObject[key]}`);
  
}

// check for in loop for array

const arr=[2,4,6,8,10]

for(const key in arr)
{
  // console.log(key); // it will give key value yes-> 0,1,2,3,4
  // console.log(arr[key]); // 2,4,6,8,10
}


// for objects -> for in loop 
// for array-> for of loop and others loop also there


