// --------------->> equal to (equality) "==" 
// -> only check value [it does implicit conversion (automatic)].
/*
const user1 = 15;
const user2 = 20;
console.log(user1 == user2); // false;
const num1 = 15;
const num2 = '15';
console.log(num1 == num2); // true
*/

// --------------->> "==="  equal value and equal type (strict equality) 
// -> You have to do explicit (manual) conversion to compare.
/*
const user1 = 12; // number
const user2 = '12' // string
console.log(user1 === user2); // false : first check type then check 
console.log(user1 === +user2); // true : convert str into int
const user3 = 12;
console.log(user1 === user3); // true
*/

// --------------->> Not equl "!="
// -> "true" when two numbers are not equal.
//-> same as equal convert type
/*
const num1 = 24;
const num2 = 25;
console.log(num1 != num2); // true
const num3 = '25';
const num4 = 25;
console.log(num3 != num4); // false : values are same ; automaticaly convert type
*/

// --------------->> "!==" not equal or not equal type (strict)
//-> same as ===