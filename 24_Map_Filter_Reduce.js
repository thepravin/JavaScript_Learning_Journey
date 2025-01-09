//------------------ Map ----------------------
//-> Map method is used on arrays to transform each element in the array and return a new array with the results.
//  -> map return array
// -> non distructive method.

const months = ["January", "February", "March", "April", "May"];
/*
console.log(
  months.map((month,index) => {
    console.log(index,":",month);
    return month.toUpperCase();
  })
);
*/

//------------------------------------ filter ------------------------
//  -> filter return array (return only that value which is true)
// -> non distructive method.

/*

console.log(
  months.filter((month) => {
    return month.length <= 5; // [ 'March', 'April', 'May' ]
  })
);

console.log(
  months.map((month, index) => {    
    return month.length <= 5; // [ false, false, true, true, true ]
  })
);

*/
/*
console.log(
  months.filter((month) => {
    return month.toUpperCase().includes("M"); // [ 'March', 'May' ]
  })
);
*/

// ------------------------------ Reduce ----------------------
/* 
    -> REDUCE , reduce the all values of array into one value.
    -> syntas => 
      arrayName.reduce(
    (accumulator , current , index, array )=>{
      },anyvalue )

* accumulator *
The value resulting from the previous call to callbackFn. 
On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

=> accumulator, which gets assigned the return value of the callback function from the previous iteration.

* currentValue *
The value of the current element. 
On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

* currentIndex *
The index position of currentValue in the array. 
On the first call, its value is 0 if initialValue is specified, otherwise 1.

* array *
The array reduce() was called upon.


*/

const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((accu, current, i) => {
  console.log("idx - ",i, ":", "curr - ", current);
  console.log("acc  - ", accu, );
  return accu + current;
},10);

console.log("Sum : ", sum);
