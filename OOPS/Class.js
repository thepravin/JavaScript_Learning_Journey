/*
    -> typeof class is "function"
    -> class function(methods) are authomaticaly set as prototype methods
    -> using # make private propertys. (beffor using decalre it outside constructor)
*/

class createUser {
  #age;

  constructor(a, b, c) {
    (this.firstName = a), (this.lastName = b), (this.#age = c);
  }

  getBirthYear() {
    return new Date().getFullYear() - this.#age;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

// console.log(typeof createUser) // function

const user1 = new createUser("Pravin", "Nalawade", 21);
const user2 = new createUser("Ganesh", "Nalawade", 22);

console.log(user1.getBirthYear());
console.log(user2.getFullName());
