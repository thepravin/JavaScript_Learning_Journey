let name1 = "Pravin";
let sentence = "  Hellow my name is Pravin   ";

//--------------- Property ------------------
// console.log(name1.length);

//------------------- Methods or functions ---------------

/* 
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
*/

// console.log("Befor trim :", sentence);
// console.log("After trim :", sentence.trim()); // returns a copy of the string with beginning and ending whitespace characters removed.
// .trimStart() => remove start space not end
// .trimEnd() => remove end space not start

/* ----------->>>  include() 
=> check present or not and return boolean vlaue
console.log(
  "include() : 'mY :'",
  sentence.includes("mY"),
  " 'my :' ",
  sentence.includes("my")
);

*/

/* ----------->>>  indexOf() 
=> give index of first char
=> if char not present then give "-1"
console.log(sentence.indexOf('m'));
*/

/* ----------->>> replace()
=> replace(kisko_replace_karna_hai , kise_replace_karna_hai);
=> replace only one char or word

console.log(sentence.replace('Hellow','Hi'));
*/

/* ----------->>> replaceAll()
=> replace(kisko_replace_karna_hai , kise_replace_karna_hai);
=> replace all char or word

console.log(sentence.replaceAll('a','A'));
*/

/* ----------->>> conccat()
console.log(sentence.concat("Welcome Home !!! "," Happy Coding"));
*/

/* ----------->>> padStart()
=> generates a new string of a specified length by adding a given padding string to the beginning of the original string.
=> .padStart(how_many_char_string_you_want_at_final , 'string_you_wnat_to_append')


const lastFourDigit = '8283';
console.log(lastFourDigit.padStart(12,'*'));
*/

/* ----------->>> padEnd()
=> generates a new string of a specified length by adding a given padding string to the end of the original string.
=> .padEnd(how_many_char_string_you_want_at_final , 'string_you_wnat_to_append')


const lastFourDigit = '8283';
console.log(lastFourDigit.padEnd(12,'*'));
*/

/* ----------->>> charAt()
    => return char at give position
*/

/* ----------->>> charCodeAT()
    => return char ascii code at give position
*/

/* //* ----------->>> split()
    => return array string in array elemet.
    => wiht only ('') split each char.
    => with space (' ') split each word into array element.
    
    console.log(sentence.split());
    console.log(sentence.split(''));
    console.log(sentence.split(' '));


    function splitify(str) {
    return str.split(/\W/);  // regular expression
  }

splitify("Hello World,I-am code"); // "Hello", "World", "I", "am", "code"


*/


//* --------------- join()-------------------
/* 
        -> The join method is used to join the elements of an array together to create a string. 
        It takes an argument for the delimiter that is used to separate the array elements in the string.

        function sentensify(str) { 

         return str.split('-').join(" ")
 
       }


console.log(sentensify("May-the-force-be-with-you"))
*/