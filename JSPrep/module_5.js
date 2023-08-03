// Partial Application

// 1. What is currying and why should we use it?
// Blog

// 2. Infinite Currying

function add(a) {
  return function (b) {
    if (b) return add(b);
    return a;
  };
}

console.log(add(5)(3)(4)(5));

// 3. Currying vs Partial Application

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

// 4. Partial Application in DOM manipulation

function updateElementText(id) {
  return function (content) {
    document.getElementById(id).textContent = content;
  };
}

const updateHeader = updateElementText("header");
updateHeader("Hello, world!");

// 5. Curry Implementation in JavaScript

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return carriedFunc(...args, ...next);
      };
    }
  };
}
