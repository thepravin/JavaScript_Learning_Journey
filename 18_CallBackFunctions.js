/*
* ** Call Back Function **
=> A callback function is a function passed into another function as an argument, which is then invoked inside the outer
   function to complete some kind of routine or action.

* ** Higher order function **
 => A higher-order function in JavaScript is a function that 
  uses another function as an argument.
  eg: map,filter.

  => function return another function is also higher order funciton.
  
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