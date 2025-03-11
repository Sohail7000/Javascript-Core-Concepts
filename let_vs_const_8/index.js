// let a = 10;
// console.log(a);
// const b=3000;
// var c = 20;

// when trying to access a whose datatype is let or const a it throws reference error because a before it is initilized is in temporal deadzone
// 3 error types , typeError , syntax error , reference error

//  TypeError: Assignment to constant variable.
// const a = 100;
//  a =1;

// Syntax error: Identifier 'a' has already been declared
// let a = 20;
// let a = 10;

// ReferenceError: x is not defined
console.log(x);
let x = 10;

/*

Notes:
so many things here. I would like to sum up in notes,

-> let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
-> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
-> level of strictness ... var<<let<<const.
-> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
    let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
    const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
-> syntax error is similar to compile error. while type and reference error falls under run time error.
-> syntax error ... violation of JS syntax
    type error ...  while trying to re-initialize const variable
    reference error ... while trying to access variable which is not there in global memory.


    Things learned:
1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
2. Temporal Dead Zone exists until variable is declared and assigned a value.
3. window.variable OR this.variable will not give value of variable defined using let or const.
4. We cannot redeclare the same variable with let/const(even with using var the second time).
5. const variable declaration and initialisation must be done on the same line.
6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.

*/

// Good article that talks about hoisting
// https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/

// In other words, when the computer hoists a var variable, it automatically initializes the variable with the value undefined.

// In contrast, JavaScript does not initialize a let (or const) variable with any value whenever it hoists the variable. Instead, the variable remains dead and inaccessible.

// Therefore, a let (or const) variable’s TDZ ends when JavaScript fully initializes it with the value specified during its declaration.

// However, a var variable’s TDZ ends immediately after its hoisting—not when the variable gets fully initialized with the value specified during its declaration.
