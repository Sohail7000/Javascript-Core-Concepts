// function statment and declaration
function a() {
  console.log("a");
}

// function expression
var b = function () {
  console.log("b");
};
// a()
// b()

// Annonymous functin
// function (){
//     console.log("b")
// }

// Named Function Expression
var c = function xyz() {
  console.log(xyz);
};

//In JavaScript, first-class functions are functions that can be treated like other variables. This means that functions can be assigned to variables, passed as arguments, and returned from other functions.

function first_class(param1, callback_function) {
  console.log(param1);
  const b = callback_function();
  console.log("b printed ", b);
}

first_class("param1paased", () => {
  return 1 + 1;
});


// parameters are passed during a function declarations
const parameters = function z(param1, param2){
    return param1 +' '+param2;
}

const values = parameters('arg1',  'arg2');
console.log(values)