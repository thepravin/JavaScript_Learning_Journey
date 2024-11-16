Math.sqrt()
Math.SQRT2;
Math.pow(2,3);

// ----------->> nearest minimum
Math.floor(2.5); // 2
Math.floor(-2.5); // -3

// ----------->> nearest largest
Math.ceil(2.5); // 3
Math.ceil(-2.5); // -2

// ----------->> Round off
Math.round(2.6); // 3
Math.round(2.4); // 2
Math.round(2.5); // 3


// ----------->> Random
Math.random(); // give any value bet 0 to 1
Math.random() * 20; // give 0 to 19 bet in decimal
Math.floor(Math.random()*20); // give 0 to 29 in integer
Math.floor(Math.random()*6) + 1 // 1 to 6 integers

//--------------------- Generate Random Whole Numbers within a Range
// Math.floor(Math.random() * (max - min + 1)) + min
/*
// range => 4 to 12
setInterval(()=>{
    console.log(Math.floor(Math.random() * (12 - 4 + 1)) + 4 )
},3000)

*/