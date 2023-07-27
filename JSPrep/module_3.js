// FUNCTIONS

// 1. Function Declaration / Frunction Definition / Function Statement

// 2. Function Statemnt: store function inside a variable.

// 3. Anonymous Function: Functions without any name.

// 4. First class funtions: in a language where a function can be treated like a variable i.e. passed to arguement, rename, returned, etc.

// 5. IIFE(Immediately Invoked Function Expression): (function(num){})(2)

// 6. Closures: the ability of a function to access variables that are lexically out of its scope, closures are created when a new function is created

// 7. Hoisting first global scope than local scope, if we have variable in local scope we will not check the global scope

var x = 21;
var func = function () {
  console.log(x); // undefined
  var x = 20;
};

// 8. Params vs Arguments | Rest vs Spread Operator

const fn = (a, x, y, ...numbers) => {}; // parameters + rest operator (rest operator must be last parameter)

const arr = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
fn(1, 2, 3, ...arr); // arguments + spread operator

// 9. Callback functions: Functions that are passed as arguments to other functions

// 10. Standard vs Arrow functions

/**
 * 1. Syntax
 * 2. Implicit 'return' Keyword
 * 3. arguments
 * 4. this keyword
 * const user = {
 *     username: "Roadside Coder",
 *     rc1: () => {
 *         console.log(this.username); // "undefined" - points to window/global object
 *     },
 *     rc2: () {
 *         console.log(this.username); // "Roadside Coder" - points to parent
 *     }
 * }
 */
