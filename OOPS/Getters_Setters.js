const user = {
  firstName: "pravin",
  lastName: "nalawade",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    /*  const [firstName, lastName] = value.split(" ");
     this.firstName = firstName;
    this.lastName = lastName; */

    const splitted = value.split(" ");
    this.firstName = splitted[0];
    this.lastName = splitted[1];
  },
};

// console.log(user.fullName);
// user.fullName = "Ganesh Nalawade";
// console.log(user.fullName);

//*------------------------------ In Class -----------------------

class createUser {
  #age;
  constructor(a, b, c) {
    (this.firstName = a), (this.lastName = b), (this.#age = c);
  }

  get FullName() {
    return `${this.firstName}  ${this.lastName}`;
  }
  set FullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user1 = new createUser("Pravin", "Nalawade", 21);

console.log(user1.FullName);
user1.FullName = "Ganesh Nalawade";
console.log(user1.FullName);
