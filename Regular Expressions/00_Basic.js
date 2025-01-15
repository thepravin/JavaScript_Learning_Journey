
/* 
* Notice, that quote marks are not required within the regular expression.
* Regex is case sencetive.
*
*/

//*************** .test() *********************** */

let testStr = "my name is pravin";
let testRegex = /is/;
console.log(testRegex.test(testStr)); //true


//******************** .match() ********************** */

/* 
   ->  To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

   -> return the array.

*/

let ourStr = "Hello, World !"
let ourRegex = /Hello/;
console.log(ourStr.match(ourRegex));

//******* Note :  */
/* 
Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

*    'string'.match(/regex/);
*     /regex/.test('string');

*/