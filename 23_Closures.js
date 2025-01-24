/* 
In JavaScript, a closure is a feature where an inner function has access to the variables and scope of its outer function, even after the outer function has finished executing.

This allows the inner function to "remember" the context in which it was created.


*/

function counter() {
    let count = 0;
  
    return function () {
      count += 1;
      return count;
    };
  }
  
  const increment = counter();
  console.log(increment()); // Output: 1
  console.log(increment()); // Output: 2
  console.log(increment()); // Output: 3
  