const lang=["HTML","C++","JAVA","JS","REACT"]

// METHOD 1

lang.forEach( function (val){
    // console.log(val);
})

//method 2 arrow func

lang.forEach( (item)=>{
    // console.log(item);
})

// method 3

function printlang(code) {
    // console.log(code);
}

lang.forEach(printlang)

lang.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);  
})

