/* 
Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].

*/

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

//* In order, the three match calls would return the values ["cat"], ["bat"], and null.

//*--------------------------------------------------------------------------------------------------------

/* 
    For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
*/
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/gi;
jennyStr.match(myRegex);
