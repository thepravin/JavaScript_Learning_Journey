/*
    -> in following  examples, newly created array or object both point same memeory of key.
        i.e change in one (value) also happend in other one.
*/

const fruits = ["Mango", "Apple", "Banana"];

/*
const myFruits = fruits;
myFruits.push('Dates');
myFruits.push('Grapes');
console.log(myFruits);
console.log(fruits); // fruits array also contain 'Dates' and 'Grapes'
*/

const user1 = {
  firstName: "Pravin",
  lastName: "Nalawade",
};

/*
const user2 = user1;
user2.firstName = 'Ganesh';
console.log(user2);
console.log(user1); // user1 object also change 'Pravin' to 'Ganesh'
*/

//* ------------------------------ Shallow copy  -------------------

/* 
    -> sperad operator , object.assign() , concat, slice do shallow copy.
    -> A shallow copy creates a new object or array, but only copies the first level of properties or elements. If the original data contains nested objects or arrays, the references to those nested objects are copied, not their actual content.

const info = {
        firstName: "pravin",
        lastName: "nalawade",
        patta: {
            city: "karad",
            pincode: 415124,
        },
        subject: ["math", "physics"],
    };

console.log("info :", info);

const info2 = { ...info };

info2.patta.city = "tuljapur";
info2.subject.push("chemistry");
info2.firstName = "Ganesh";    // changes in first level values not affected (deep copy)
console.log("info2 : ", info2);
console.log("info : ", info);
    
    */


// Method 1 : (not use mostly in current time)
/*
const user2 = {};
Object.assign(user2,user1) ; // (target_obj , source_obj)
user2.firstName = 'Ganesh';
console.log(user1); // firstName remain same
console.log(user2); // firstName is 'Ganesh'

const myFruitsNew = [];
Object.assign(myFruitsNew,fruits)
myFruitsNew.push('pravin');
console.log(fruits); // Not contain 'pravin'
console.log(myFruitsNew); // contain 'pravin'
*/

// Method 2 : (sperad operator (...) )
/*
const user2 = {...user1};
user2.firstName = 'Ganesh';
console.log(user1); // firstName remain same
console.log(user2); // firstName is 'Ganesh'

const myFruitsNew = [...fruits];
myFruitsNew.push('pravin');
console.log(fruits); // Not contain 'pravin'
console.log(myFruitsNew); // contain 'pravin'
*/

// Method 3 :
/*
const myFruits = [].concat(fruits);
myFruits.push('pravin');
console.log(fruits);
console.log(myFruits);
*/
/*
const myFruits = fruits.slice();
myFruits.push('pravin');
console.log(fruits);
console.log(myFruits);
*/

//*----------------------------------- Deep Copy ------------------------*

/*  
    => A deep copy creates a new object or array and recursively copies all levels of data, including nested objects or arrays. This ensures that the copied data is entirely independent of the original.
    => In deep copy use JSON. (read about it.....)
    => syntax -> JSON.parse(JSON.stringify(object_name));
    => create two different copy of every nested obect or array.
        >>> JSON.stringify(object) => convert object into string link fortmat
        >>> JSON.parse(object_string) => convert onbject string into object.

    const info = {
        firstName : 'pravin',
        lastName : 'nalawade',
        patta : {
            city : 'karad',
            pincode : 415124
        },
        subject : ['math','physics']
    }
    
    console.log("info :",info)
    
    const info2 = JSON.parse(JSON.stringify(info));
    
    info2.patta.city = 'tuljapur';
    info2.subject.push('chemistry');
    console.log("info2 : ",info2);
    console.log("info : ",info); 

//*-----------------------------------------------------------------

const original = { name: "Alice", address: { city: "New York" } };
const deepCopy = structuredClone(original);

deepCopy.address.city = "Los Angeles";

console.log(original); // Output: { name: "Alice", address: { city: "New York" } }
console.log(deepCopy); // Output: { name: "Alice", address: { city: "Los Angeles" } }

/* 
The structuredClone method creates a deep copy of the object, so deepCopy is entirely independent of original.

*/
