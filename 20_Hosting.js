/*

 Hoisting is a concept or behavior in JavaScript where
 the interpreter appears to move the declaration of a function, variable, or class goes 
 to the top of the scope they were defined in.

=> In the case of "VAR"
    -> Print 'undefined'

=> In the case of "CONST" and "LET"
    -> Error : Cannot access 'variable_name' before initialization
    -> Hosting is happend but javascript put it into"Temporal Dead Zone". 
        which means the area of block where a variable is inaccessible until the 
        moment the computer completely initializes it with value.
    
=>  Function Declaration follow hosting.

=> Function Expression not follow hositng.
    -> it give undefine and undefine is not a function error happend.

*/

console.log(a);
const a = 5;
