/*
    => Mostly used for storing data with same type.
    => In Javascirpt array can contain multiple type data.
    => typeof ARRAy is "OBJECT"
*/

const fruitsCollection = ["Apple", "Banana", "Grapes", "Dates"];
/*
 console.log(typeof fruitsCollection); // object
console.log(fruitsCollection.length);  // 4

fruitsCollection[10] = "Peru";
console.log(fruitsCollection.length); // 11
console.log(fruitsCollection);
*/

//---------------------------------------------------------------------------

const multipleDataTypes = [
  "Pravin",
  21,
  true,
  null,
  undefined,
  { firstName: "Pravin" },
];
/*
console.log(multipleDataTypes);
console.log(multipleDataTypes[2]);
console.log(multipleDataTypes[5]); // print object
console.log(multipleDataTypes[5]?.name); // undefined
console.log(multipleDataTypes[5]?.firstName); // pravin
*/

//---------------------------- PUSH  ---------------------------

// -> syntex => arrayName.push(value); 
// -> It return new size of array

const students = ['pravin','ganesh','amol','pruthviraj','sachit'];

// console.log(students.length); // 5
// console.log(students.push('shivam'));  // 6
// console.log(students.push('krishna',22,null,'',undefined));  // 11


// ------------------ POP ----------------------

// -> syntex => arrayName.pop() -> pop last element
// -> return element

// console.log(students.pop()); // sachit


// --------------- Store key-value pair in ARRay ------

const newArray = [];

newArray.firstName = 'Pravin';
newArray.age = 21;

console.log(newArray)