// 1. Lexical Scope
// 2. Global Scope
// 3. Local Scope
// 4. Function Scope
// 5. Block Scope

// global scope
function subscribe() {
  var name = "Roadside Coder";
  // inner scope 2
  function displayName() {
    // inner scope
    alert(name);
  }
  displayName();
}

subscribe();

// 6. What is a Closure?

// 7. Closure Scope Chain
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer function scope
      return function (d) {
        // local scope
        return a + b + c + d;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

// 8. Time Optimization

function find(index) {
  let a = [];
  for (let i = 0; i < 10000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}

// Optimized Version using Closure
function find() {
  let a = [];
  for (let i = 0; i < 10000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

// 9. setTimeout Output

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

a(); // 3 3 3

// 10. Block scope and setTimeout

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}
// 0 1 2

// 11. Counters using closure
function counter() {
  var _counter = 0;

  function add() {
    _counter++;
  }

  function retrieve() {
    console.log(_counter);
  }

  return {
    add,
    retrieve,
  };
}

// 12. What is module pattern?

var Module = (function () {
  function privateMethod() {}

  return {
    publicMethod: function () {},
  };
})();

// 13. once polyfill in javascript

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

// 14. memoize polyfill in javascript

function myMemoize(fn, context) {
  const res = {};

  return function (...args) {
    var serializedArgs = JSON.stringify(args);
    if (!res[serializedArgs]) {
      res[serializedArgs] = fn.call(context || this, ...args);
    }
    return res[serializedArgs];
  };
}
