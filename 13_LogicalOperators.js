/*

&&
||
!(not)
*/

const andResult = 0 && 2;
console.log(andResult); // 0
/*
- in and one false result is false
- here 0 is falsy value so, anyhow it was false but 2 is truthy
 (flase && true = false , herer false is 0 which is result)
*/

const orResult = 0 || 2;
console.log(orResult); // 2
/*
- in false one true result is true
- here 0 is falsy value meanse (false)
- 2 is truthy value (true)
- false || true = ture , here true is 2 so, result is 2
*/

/*
const result = '' && 'Hello';
console.log(result); // '' (empty str)
*/

const result = "Hello" && 4 + 8; // 12
const result2 = "Hello" || 4 + 8; // Hello
/*
-> in AND if first funciton give false then it not move forward, just
    return first value. If not then evaluate second function.

->  in OR if first function give true then it not move forwar, just
    return true value. If not then evaluate second function.
*/
