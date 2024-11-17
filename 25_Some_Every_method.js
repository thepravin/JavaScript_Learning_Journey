/*
    -> some return truthy value as per the give condition.
    -> if any one element follows the codition then return true.
    -> check upto first true, when true find terminat and not check remaning elements.

    -> every check , every element follow the condition.
*/


const evenNum = [0,2,4,6,8,3];

const return_val_some = evenNum.some((num)=>{
    // console.log(num)
    return num%2 == 1;
})

console.log(return_val_some) // true (check some (any) elements)


const return_val_every = evenNum.every((num)=>{
    return num%2 != 0;
})

console.log(return_val_every) // false (check every element)