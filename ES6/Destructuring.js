const colors = ["red", "green", "yellow", "pink", "black"];

const [r, g, y, p, b] = colors; // in array destructuring give any name. sequence matter
// console.log(r);
// console.log(g);
// console.log(p);

const { 3: color4 } = colors; // (index: name(any name) )
// console.log(color4); // pink

//----------------------------------------------------------------

const user = {
  name: "pravin",
  age: 21,
  address: {
    city: "karad",
    state: "maharashtra",
  },
};

const { name, firstName, name: userName, age, address } = user; // same name as keys. sequence not matter
// console.log(name);
// console.log(firstName);
// console.log(userName);
// console.log(age);
// console.log(address); // { city: 'karad', state: 'maharashtra' }

const {
  address: { city, state },
} = user;
// console.log(city);
// console.log(state);

//----------------------------------------------------------

/*
function intro({ age, name }) {
  console.log(age, name);
}
intro(user);
*/

//----------------------------------------------------

