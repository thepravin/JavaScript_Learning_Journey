/*
-> every method is function. 
   but every funcntion is not method.

*/

var object = {
    method: function() {
      console.log("Am I still a method?");
    }
  };
  object.method();          // method call
  var func = object.method; 
  func();                   // now it is a function invocation