/*

-> only work with function create with keyword 'function'

-> Array.from() =>Array.from() is designed to work with array-like objects or iterables,
    not plain JavaScript objects.

*/

/*
function add(){
    console.log(arguments);
    // return a+b;
}
console.log(add(5,7,8,9,6,5));
*/

/*
function infiniteAdd() {
  let sum = 0;
  for (const ele of arguments) {
    sum += ele;
  }
  return sum;
}

console.log(infiniteAdd(1, 2, 3, 4, 5));
*/

/*
function infiniteAdd() {
  //    console.log(Array.from(arguments))
  return Array.from(arguments).reduce((acc, num) => {
    return acc + num;
  });
}
console.log(infiniteAdd(1, 2, 3, 4, 5));
*/

const person = {
  firstName: "pravin",
  lastName: "nalawade",
  age: 21,
};

console.log(Array.from(person)); // []

console.log(Object.keys(person)); // [ 'firstName', 'lastName', 'age' ]

console.log(Object.values(person)); // [ 'pravin', 'nalawade', 21 ]

console.log(Object.entries(person));

console.log(Array.from(Object.entries(person)));
