/*
 * **Global Scope**:
  • Variables and functions are accessible from any part of the program.
  • Variables and functions are defined outside of any function or block.
  • Variables and functions are retained in memory until the program terminates.

* **Local Scope**:
  • Variables and functions are confined to a specific block of code 
    (e.g., a function or a loop).
  • Variables and functions are not accessible outside of that block.
  • Variables and functions are discarded when the block is exited.

    => variable created using "var" or "function" keyword declearation
         goes into window object.
    => let and const variable goes into script scope.
    => every function have its own local scope which is not accessible outside the function.

    => if any type of variable declear into function not accessiable out side the function.

*/

/*
const userName = 'pravin';
let userAge = 25
var a = 50

function add(){
    const userName = 'Ganesh';
    const x = 5;
    const y = 8;
    console.log(x+y);
    console.log(userName); // ==> prefer nearest or closest variable. if not then see global scope
}

add();
*/

//----------------------------------------------------------------------------------------------------------------------------

/*
   * **Lexical scope** 
    • in following function add2 have access of (itself + global + add1 ) function variable acces
        this chaning of scope is called lexical scope.
    e.g :
const a = 15;
var b = 20;

function add1(){
    const x = 17;
    const y = 5;

    function add2(){
        console.log("x : ",x);
        console.log("y : ",y);
        console.log("a : ",a);
    }

    add2();
}

add1();

* ** Block Scope **
=> let and const is block scope.
=> blcok variables only accessiable within the block.
e.g :
if(){
    const naem = 'pravin';
}

=> access 'var' variable value outside the scope. but if var inside the function then not
   access outside the function scope.

   * ** Module Scope **
   -> es6 function check it ...

*/



// ----------------------- NOTE ===============>
/*
        Variables which are declared without the let,var,const keywords are automatically created in the global scope. 
         but need to call that function.
        eg:
        function add(){
            num = 152;
        }
        add();

        => this is not standerd practice. so, prevent this define ('use strict') start of file [use colen also...]
*/
