/* 
The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

*/

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // true
shortHand.test(numbers); // true
longHand.test(varNames); // true
shortHand.test(varNames); // true


//* Q : Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

let quoteSample = "The_five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w+/gi; 
let result = quoteSample.match(alphabetRegexV2).length;

console.log(quoteSample.match(alphabetRegexV2))
console.log(result)
