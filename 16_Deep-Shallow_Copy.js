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

// ------------------------------ Shallow copy  ----------------------------------------------------------

/* 
    -> sperad operator , object.assign() , concat, slice do shallow copy.
    -> in one object ther is another more objects or arrays then sperad 
        operator creat only new copy of one object which is mejor not nested
        object or array. They share same memory and if chage does in one place then
        it happen to another place also.

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

const info2 = {...info};

info2.patta.city = 'tuljapur';
info2.subject.push('chemistry');
console.log("info2 : ",info2);
console.log("info : ",info);

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

//----------------------------------- Deep Copy --------------------------------------------------

/*
    => In deep copy use JSON. (read about it.....)
    => syntax -> JSON.parse(JSON.stringify(object_name));
    => create two different copy of every nested obect or array.

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
*/
