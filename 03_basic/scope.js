// {curly braces} -> known as scope
// Scope determines the accessibility (visibility) of variables.

if(true){

    let a=2
    const b=5
    var c=7
}

// console.log(a); // o/p -> a is not defined
// console.log(b); // o/p -> b is not defined
// console.log(c); // o/p-> 7 (that's why we avoid to use var)

// global scope -> variable declare outside the block scope.And variable of global scope avialable within
// block scope but block variable not accessed outside the block

// ***************************************lecture 2 ***********************************************************

// Note: In nested fuction ,siblings function can accessed parent variables but vice-versa not true

function one()
{
    const name="Harsh dixit"
    const age=2

    function two()
    {
       const website="gradeup.com"
        console.log(name);

    }
    console.log(age);
    two()
}
one()