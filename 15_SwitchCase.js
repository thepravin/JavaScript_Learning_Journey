/* 
    ->> if-else required block({}) to excuite more than one line
        switch case not required it.

    ->> In switch case if one case is execuited then after current case,
         remaning all cases also exicute.
        e.g=> if case 0 execute then remaning cases (after 0) also print.
    
    ->> In switch case order not matter.

    ->> In case ~ we can add conditions also.

    Q. When the switch statement matches the expression with the given labels, how is the comparison done?
    ==> Both the datatype and the result of the expression are compared.
*/

const dayNumber = 2;

switch (dayNumber) {
  case 0:
    console.log("It is SUNDAY");
    console.log("Today is Holiday !!!");
    break; // use to avoid running remaning cases. and break here

  case 1:
    console.log("It is MONDAY");
    break;

  case 2:
    console.log("It is TUESDAY");
    break;

  default:
    console.log("Please Enter valid day Number !!!");
}
console.log("----------------------------------------------");

const age = 18;

switch (true) {
  case age < 18 || age == 18:
    console.log("Not Valid to VOTE");
    break;

  case age > 18:
    console.log("Valid to VOTE");
    break;

  default:
    console.log("Please Enter Valid AGE");
}
console.log("-------------------------------------------------");
