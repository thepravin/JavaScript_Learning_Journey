//*=> The arity of a function is the number of arguments it requires.

//* -----------------  Currying ---------------------------

/* 
    - > Currying a function means to convert a function of N arity into N functions of arity 1.
    -> t restructures a function so it takes one argument, then returns another function that
       takes the next argument, and so on.   

   -> This is useful in your program if you can't supply all the arguments to a function at one time.


*/

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function (y) {
    return x + y;
  };
}

const curried2 = (x) => (y) => x + y; // another way of define

const curried1 = curried(1)(2);

// console.log("Curried_1 : ",curried1);
// console.log("Curried_2 : ",curried2(2)(1));



/* 
    ==> You can save each function call into a variable, which will hold the returned function 
       reference that takes the next argument when it's available.
        e.g :)
       const funcForY = curried(1);
       console.log(funcForY(2)); // 3 

*/






//* ------------------------ Partial ----------------------------

/* 
        =>  partial application can be described as applying a few arguments to a function at a time and
         returning another function that is applied to more arguments

         function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13

*/