/* 
1. Factory Function
A factory function is a regular function that returns an object. It is used to create and customize objects in JavaScript.

Key Points:

Does not use the new keyword.
Returns an object explicitly.
Can include private variables (not accessible outside the function).

*/

function createCar(make, model) {
  return {
    make: make,
    model: model,
    start() {
      console.log(`${make} ${model} is starting...`);
    },
  };
}

const car = createCar("Toyota", "Corolla");
car.start(); // Output: Toyota Corolla is starting...

/* 
  2. Constructor Function
A constructor function is a special type of function used to initialize objects. It works with the new keyword.

Key Points:

Must be called with the new keyword.
Automatically sets this to the new object being created.
Returns the new object implicitly (unless an object is explicitly returned).
  
  */

function Car(make, model) {
    this.make = make;
    this.model = model;
    this.start = function () {
      console.log(`${this.make} ${this.model} is starting...`);
    };
  }
  
  const car2 = new Car("Toyota", "Corolla");
  car2.start(); // Output: Toyota Corolla is starting...

  
/* 
When to Use

Factory Function:

When you need custom logic to create an object.
When you want to have private variables or avoid the complexity of this.
Example: Creating multiple objects with similar structure but different internal logic.


Constructor Function:

When you need a simpler and faster way to create objects.
When you want to follow object-oriented patterns like this and prototypes.
Example: Creating instances of a class-like structure.

*/