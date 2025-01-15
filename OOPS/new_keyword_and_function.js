/* 
    In JavaScript, when a function is called with new, it creates an object and assigns it as this within the function.

    If the function does not explicitly return an object, the newly created object is returned by default.


    However, when a constructor function explicitly returns a non-object (e.g., a string, number, or boolean), the return value is ignored, and the newly created object is returned instead.

*/

function abc() {
  console.log("Hii");
}
const value = abc();
console.log(typeof value); // undefined

function abc3() {
  console.log("Hii");
  return "pravin";
}
const value3 = abc3();
console.log(typeof value3); // string

//*--------------------------  using new (constructor function) ---------------------------------

function abc2() {
  console.log("Hii");
}
const value2 = new abc2();
console.log(typeof value2); // object

function abc4() {
  console.log("Hii");
  return "pravin";
}
const value4 = new abc4();
console.log(typeof value4); // object
