/*
1. Premitive  (7)
2. Non Premitive (1)

Total data Types = 7+1 = 8
*/

// 1. Premitive

//  NaN ==> not a number (typer of NaN is "number")

// ---------------------- Number --------------------------
// console.log("9: ", typeof 9);
// console.log("9.5: ", typeof 9.5);
// console.log("-9: ", typeof -9);

//------------------------- string -------------------------

// console.log("Hellow: ", typeof "Hellow");
// console.log("Empty string: ", typeof "");
// console.log('Hellow "Pravin"');
// console.log("Hellow 'Pravin'");

/*
    ` ` = > backtick => support new line
    ' ' => single cot => not support new line
    
 console.log(`Hi,
 My name is pravin !!!`);

 console.log('Hi,
 I am Pravin ???');  error => SyntaxError: Invalid or unexpected token

*/

//--------------------- Str to int Conversion  -------------------------
/*

console.log(typeof '100')
console.log(typeof +'100') // +ve 
console.log(typeof -'100') // -ve 

// string to number convert but have limitations
console.log(+'100adfdf')
console.log(parseInt('10adfdf'))

// number to string convert
console.log(typeof (''+ 100 + 'pravin') )
console.log(( 100 + ' pravin') )

*/

//--------------------- Boolean  -------------------------

// console.log(typeof true);
// console.log(typeof (+true));
// console.log(+ true);

//------------------------- Undefined  -------------------------
/* ====> create variable not assine value then present
   ====> It have only one value which is "undefined"

   console.log(+undefined); // NaN
*/

//------------------------- NULL -------------------------
/*
    ==> we assing it 
    ==> type of NULL is 'nothing' but there is bug that is why type of null is "Object"
   
    console.log(+ null); // 0
*/
