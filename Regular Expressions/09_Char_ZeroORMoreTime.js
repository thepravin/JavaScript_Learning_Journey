/* 
There's also an option that matches characters that occur zero or more times.
The character to do this is the asterisk or star: *.

*/

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

/* 
in order, the three match calls would return the values ["goooooooo"], ["g"], and null.
*/