//*  =====> Convert first char of every letter in upper
const str = "hi i am pravin";
let newStr = str.split(' ') // return array ['hi','i',...]
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

console.log(newStr)
