/*
* ** Call Back Function **
=> A callback function is a function passed into another function as an argument, which is then invoked inside the outer
   function to complete some kind of routine or action.

* ** Higher order function **
 => A higher-order function in JavaScript is a function that 
  uses another function as an argument.
  eg: map,filter,reduce,sort.

  => function return another function like variable is also higher order funciton.

  => When functions are passed in to or returned from another function, then those functions 
     which were passed in or returned can be called a lambda.

  => Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value,
   are called first class functions.
  
*/

// higher order function
function a(b){
    console.log(b);
    b();
}

// callback function
a(function(){
    console.log('pravin nalawade');
})