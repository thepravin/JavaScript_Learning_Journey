// Array Methods

const arr = [2, 4, 6, 8, 10];

// --------- shift() -----------
/*
    -> syntax => arrName.shift();
    -> shift number to left side or front side (remove left first element);
    -> return removed value ( most left side number. )

    console.log(arr.shift()); // 2
    console.log(arr);
*/

// --------------- unShift() -----------
/*
    -> syntax => arrName.unshift(value);
    -> add element at front side
    -> return size of new array

    console.log(arr.unshift(15)); // 6 ~ which is length of new array
    console.log(arr)
*/

//------------- concat() -----------
/*  
    -> syntax => arr1.concat(arr2)
    -> connect tow arrays.    

    const arr2 = [1,3,5,7,9];
    console.log(arr.concat(arr2)); // print concat array (first arr elements then arr2 elements)
    const arr3 = arr2.concat(arr);
    console.log(arr3); // print same concat array (first arr2 elements then arr elements)
*/

// ------------- indexOf() ---------
/*
    -> syntax => arrName.indexOf(value)
    -> give the index of value
    -> if not present then give -1
    -> if two or more same elements present then give first element index.

    console.log(arr.indexOf(4));
*/

// ------------- includes() -------
/*
    -> syntax => arrName.includes(value)
    -> if present give true else false
    
    console.log(arr.includes(4));
*/

// ------------- reverse() -----------
/*
    -> reverse array
    -> change in prsent array not return new array.

    console.log(arr.reverse());
*/

// -------------- sort() -------------
/*
    -> sort asper alphabetical( UTF-16 code differnt for uppercase and lower case) order and in number first all numbers start form 1 then 2 ....
    -> mostly used for sorting string
    -> in case of number use function to give sorting condition.
    
    let sortThis = [12,18,19,11,5,2,28,59];
    console.log(sortThis.sort());
    sortThis = ["pravin","bat","apple"];
    console.log(sortThis.sort());
*/

// --------------- slice() ------------
/*
    -> syntax => arrayName.slice(start_index , end_index)
    -> include start_index value but exclude end_index value
    -> return seperate array.
    -> not change in original array.
    
    console.log(arr.slice(1,4));
*/

// ------------- splice() ------------
/*
    -> syntax => arrayName.splice(start_index  , countOfElements_to_delete , add_new_value ....)
    -> return delete or removed value array.
    -> change in original array.
    -> add multiple elements at perticular index.

    console.log(arr);
    console.log(arr.splice(2,1));
    console.log(arr)


    arr.splice(2,1,'pravin'); // delete 2 index element and add 'pravin'
    console.log(arr);
    
    const demo = [1,2,3,4,5,8,9,6];
    demo.splice(0,0,'pravin','ganesh',7757946945);
    console.log(demo)
*/
