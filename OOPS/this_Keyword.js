/*
    -> this refer to object or function which it call
*/

//*----------  Normal Funciton
//-> 'this' points to window or global

function normalFunction() {
  console.log(this);
}
// normalFunction();

//*------------- 'this' keyword work with an object
//-> 'this' point to that object and data.
const user = {
  firstName: "pravin",
  lastName: "nalawade",
  inObject() {
    console.log(this);
  },
};

// user.inObject();

//*----------------- method inside a method of an object
// -> here 'this' return global or window
const user2 = {
  firstName: "pravin",
  lastName: "nalawade",
  fullName() {
    function getAge() {
      console.log(this);
    }
    getAge(); // we can't access using dot, bcz it not defind in object.

    // console.log(this) ; // point to object
  },
};

// console.log(user2.fullName())

//*----------------------- Event loop
/* 
-> if method inside a method of an object creted using function keyword then 'this' point to global or window
-> but in arrow function it point to that object not every time only sometimes.
-> In forEach loop we have to define which 'this' point that function.

 */

const user3 = {
  firstName: "pravin",
  lastName: "nalawade",
  tags: ["a", "b", "c"],
  printTags() {
    this.tags.forEach(function (tag) {
      console.log(tag, this.firstName);
    }, this);
  },
};

// console.log(user3.printTags())

//*-------------------------------------- constructor function
/* 
    -> constructor function create object and return it automaticaly.
    -> here this point to that function.
*/

function constFunction() {
  this.hello = "Hellow";
  console.log(this);
}

// new constFunction();

//*----------------------------------- in Event Listners

const h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
//   console.log(this); // it return complete element ( <h1>content</h1>)
});
