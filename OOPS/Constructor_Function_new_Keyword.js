/*
    => Polymorphism means the same function with different signatures is called many times.
    => Ek hi function hai lekin uska rup change ho raha hai (useing 'this' keyword)

*/

//* ----> EXAMPLE-1
/*
    -> following methods violate the rules of Encapsulation and abstraction.
    -> less global function decleration.
    -> In following code user can access getBirthYear funciton without creating object
*/

/* function getBirthYear() {
  return new Date().getFullYear() - this.age;
}

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear,
  };
  return user;
}

const user1 = createUser("Pravin", "Nalawade", 21);
const user2 = createUser("Ganesh", "Nalawade", 22);

console.log(user1.getBirthYear());
console.log(user2.getBirthYear());

console.log(getBirthYear());

*/

//*----------------------------------------------------------------------------
/* 
function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear: createUser.commonMethods.getBirthYear,
  };
  return user;
}

createUser.commonMethods = {
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  },
};

const user1 = createUser("Pravin", "Nalawade", 21);
const user2 = createUser("Ganesh", "Nalawade", 22);

console.log(user1.getBirthYear());
console.log(user2.getBirthYear());

// console.log(getBirthYear()); // not define 

*/

//*---------------------------------------------------------------------------------------

// Prototype inhert method

function createUser(firstName, lastName, age) {
  (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
}

createUser.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};

createUser.prototype.getFullName = function(){
  return this.firstName + ' ' + this.lastName
}

const user1 = new createUser("Pravin", "Nalawade", 21);
const user2 = new  createUser("Ganesh", "Nalawade", 22);

console.log(user1.getBirthYear());
console.log(user2.getFullName());
