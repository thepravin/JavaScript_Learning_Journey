const emptyObject = {};

const obj1 = {
  firstName: "Pravin",
  lastName: "Nalawade",
  age: 21,
};

const obj2 = {
  // behind the scene key is also a string
  firstName: "Ganesh",
  "last-Name": "Nalawade",
  age: 22,
  address: {
    city: "Karad",
    pinCode: 415124,
  },
};



/*
console.log(obj1);
console.log(obj2.firstName); // pravin
console.log(obj1["age"]); // 21
console.log(obj2[age]); // ReferenceError: age is not defined
console.log(obj2["last-Name"]); // Nalawade
console.log(obj2.last-Name); // give ERROR
console.log(obj1["first"+"Name"]); // pravin
console.log(obj2.address.city); // Karad
*/

//--------------------------------------------------------------------------------

/*

  => Declearing object using 'CONST'

 obj1 = obj2 // give error

obj1.firstName = 'Ganesh';
console.log(obj1); // print with updated firstname

*/

//---------------------------------------------------------------------------------

/*
  #=>  Object.freeze( ) ANd Object.seal( ) 

  Object.seal()
        - You can modify the values which allready present.
        - You can't add new values.
        - You can't delete present values.

   Object.freeze()
        - You can't add , delete and modify the object.


        eg.
          object.seal(user1);
          object.freeze(user2); 

*/

//-------------------------------------------------------------------------------------

/*
    in => used to check key present in object or not

    -> syntax = 'keyName' in object_name 
*/

console.log('firstName' in obj1 ); // true
console.log('nickName' in obj1); // false