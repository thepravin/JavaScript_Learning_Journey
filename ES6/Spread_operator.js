const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num2 = [11, 12, 1, 3, 2, 2, 22];

// const joinedArray = [...num1, ...num2, ..."pravin"];
const joinedArray = [...num1, ...num2];
// console.log(joinedArray)

//------------------------------------------------------------------

const user = {
  name: "pravin",
  age: 21,
};

const address = {
  city: "karad",
  pin_code: 415124,
};

// console.log({ ...user, ...address , user_id:'1589aSE' });

// ---------------------------------------------------------------

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(...joinedArray));
