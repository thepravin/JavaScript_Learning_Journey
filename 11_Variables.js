/*
1. var
2. const
3. let

==> in variable name can use only "$" and "_"
==> we can use different language names  to give variable name
==> name convention read --> https://www.freecodecamp.org/news/programming-naming-conventions-explained

*/

// ------------------- let -------------
/*
    -> typeof let is 'undefined' = Interaction with undeclared and uninitialized variables
    -> we can change value of variable.
    -> data store in script scope ("temporal dead zone")
*/
// ------------------- const -------------
/*
    -> typeof const  => give error unexpected tocken "must have to decrear at the time of initilazing"
    -> we can not change value of variable.
    -> data store in script scope ("temporal dead zone")
*/
// ------------------- var -------------
/*
    -> typeof var  => give error unexpected tocken "must have to decrear at the time of initilazing"
    -> we can change value of variable.
    -> data store in global scope
*/

// ------------------- var v/s let  -------------

// Note :-> "Undefined is value" BUT "not defined is error"

/*
 
###### VAR ######
    --> var will be accessiable outside the box or scope
     {
        var firstName = 'pravin';
    }
    console.log(firstName)

    ---> we can access var befor initilazition it not give error but it give "undefined"
   consolge.log(name);
   var name = 'pravin';

##### LET #######
    ----> let not accessiable outside the box or scope
        ---> give not defined error
        ---> not access befor initilazition give error

    ==-=-=-=> so unlike var, when you use let, a variable with the same name can only be declared once.
*/
