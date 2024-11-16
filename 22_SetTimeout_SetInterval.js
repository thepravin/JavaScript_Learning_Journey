/*

setTimeout(callBack_function , time in millisecond)
-> setTimeout return id of that timeout, use of this is to cleartimeout.
-> Run only one time.

*/

// const timer1 = setTimeout('console.log("PRAVIN - 1")', 2000);
// const timer2 = setTimeout('console.log("PRAVIN - 2")', 4000);
// const timer3 = setTimeout('console.log("PRAVIN - 3")', 6000);
// console.log(timer1);
// console.log(timer2);
// console.log(timer3);

// clearTimeout(timer3);
// clearTimeout(timer2);

/*

setTimeout( ()=>{} , time)

setTimeout(
  `function a(){
    console.log("second TimeOut")
}
a();    
`,
  1000
);

console.log(setTimeout(
    `function a(){
      console.log("second TimeOut")
  }
  a();    
  `,
    1000
  )
  )

  */
/*
const calculate = setTimeout(a, 3000, 99, 1, "Sum :");

function a() {
  console.log(arguments);
  console.log(arguments[2], arguments[0] + arguments[1]);
}


*/

//----------------------------------- Note ----------------------

setTimeout(`console.log('Pravin-In-SetTimeout')`);  // without time
console.log('Pravin-In-ConsoleLog');

/*
    => first print consoleLog, then setTimeout.
    => because, normal code of javascript is synchronous(line by line) but
        setTimeout is asynchronous function(means store in memory then run).

*/

//-------------------------- SetInterval()------------------

// -> print in loop after every perticular time.
// -> all same as settimeout.

const timer1 = setInterval('console.log("PRAVIN - 1")', 2000);

clearInterval(timer1);