

function multi(a,b=1){
    return a*b;
}

console.log(multi(5,2)); // 10
console.log(multi(5)); // 5
console.log(multi(5,undefined)); // 5
console.log(multi(5,null)); // 0 , behind null convert into 0
console.log(multi(5,'')); // 0 , behind '' convert into 0