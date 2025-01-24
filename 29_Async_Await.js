/* 
* Async *
-> Async and Await in JavaScript is used to simplify handling asynchronous operations using promises.
-> Async functions always return promise.if a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.

* Await *
-> await used to wait for a promise to resolve.
-> it can only be used within async block.
-> await makes the code wait until promise returns result.

* throw *
=> throw used to reject the function.

=> Syntax :
        => throw 'error-message'
        => throw new Error('error-message')


****/


/* ===========> Promise <==================

-> A Promise in JavaScript is an object that represents the  completion or failure of an asynchronous operation.

A promise in JavaScript is exactly what it sounds like - 
you use it to make a promise to do something, usually asynchronously. 
When the task completes, you either fulfill your promise or fail to do so.
 Promise is a constructor function, so you need to use the new keyword to create one. 
 It takes a function, as its argument, with two parameters - resolve and reject. 
 These are methods used to determine the outcome of the promise. The syntax looks like this:


* syntax :
const myPromise = new Promise((resolve, reject) => {

});

*/

// * Examples 
async function foo() {
        return  'Hello World'
    }
    
    
    const result =  foo(); 
    console.log(result) // Promise{'Hello World'}
    
    const result_2 = foo();
    result_2
    .then((value)=>console.log(value)) // 'Hellow World'
    