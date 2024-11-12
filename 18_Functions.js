/*
    -> functions are reusable pice of code.
*/

/*
function myIntro(){
    console.log('Hi,');
    console.log('My name is Pravin');
}

console.log(myIntro); // [function : myIntro]
console.log(myIntro()) // print function and "undefined". undefined is return value of function due we not return anything.
myIntro(); // print all from function.not print undefined due to not store in any variable.
const returnValue = myIntro();
console.log(returnValue); // undefined
*/
//-----------------------------------------------------------------------------------------------

// "name" is parameter
function myIntro(name = "Default Parameter (assing when argument not given)") {
  console.log(`My name is, ${name}`);
}

function myIntro2(name) {
  console.log(`My name is, ${name || "Another way of Default"}`);
}

myIntro("Pravin"); // 'pravin' is argument
myIntro();
myIntro2();

//--------------------------------------------------------------------------------------------------
