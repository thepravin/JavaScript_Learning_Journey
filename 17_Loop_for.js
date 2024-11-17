/*
for(let i=0;i<10;i++){
    console.log(i);
}
*/

const fruits = ["banana", "apple", "peach", "mango", "grapes"];

/*
for (const fruit of fruits) {
  console.log(fruit);
}
*/

const person = {
  firstName: "pravin",
  lastName: "nalawade",
  age: 21,
  city: "tuljapur",
};
// object is not iterable. so, use 'for..in'
/*
for (const key in person) {
  console.log(key, ":", person[key]);
}
*/

const personKeys = Object.keys(person); // array of keys
const personValues = Object.values(person); // array of values
const personEntries = Object.entries(person);

//--------------------- for each  --------------------------------
/*

-> only return undefined, nothing return anything not matter you use or not
  return keyword.
  
fruits.forEach((fruit) => {
  console.log(fruit);
});

console.log(fruits.forEach((fruit) => {
  console.log(fruit);
  return fruit.toUpperCase();
}))
*/