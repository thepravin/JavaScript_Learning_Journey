/*
    -> sperd operator sperad the array ,
     but rest params (not operator) collect and make array

     -> rest param must be last in parameter list [in function (parameters)]

*/

const num1 = [1, 2, 3, 4, 5];

/*
function add(nums) {
  console.log(nums); // 1 , first element only
}
add(1,2,3,4);
*/

/*
function add(...nums) {
  console.log(nums); // [ 1, 2, 3, 4 ]
}
add(1,2,3,4);
*/

/*

function add(...nums) {
    console.log(nums); // [ 1, 2, 3, 4, 5, 2 ]
  }
//   add(...num1); // (1,2,3,4,5)
  add(...num1,2); // (1,2,3,4,5,2)
*/

/*
function add(...nums) {
  console.log(nums); // [ [ 1, 2, 3, 4, 5 ] ,2 ]
}
add(num1, 2);
 */

function add(...nums) {
  return nums.reduce((acc, curr) => {
    return acc + curr;
  });
}
console.log(add(...num1));
