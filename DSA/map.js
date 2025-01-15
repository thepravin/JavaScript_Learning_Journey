let map = new Map();

map.set("pravin", 21);
map.set("ganesh", 22);
map.set("omkar", 15);

// console.log(map)
// console.log(map.get('pravin'))
// console.log(map.keys())
// console.log(map.values());
// console.log(map.has('pravin')) // true //* check present or not in map

// map.clear()

// for(x of map){
//     console.log(x) // array of each entry
//     console.log(x[0])//keys
//     console.log(x[1])//values
// }

//*** IMP ==> bihevior is different
// map.forEach((val, key) => {
//   console.log(val); //value
//   console.log(key); //key
// });


// map.delete('pravin'); //* delete one pair
// console.log(map)


let str = 'pravi';
console.log(map.get(str))