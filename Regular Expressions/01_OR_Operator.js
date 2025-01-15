/*
 * search for multiple patterns using the alternation or OR operator: |
 */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
