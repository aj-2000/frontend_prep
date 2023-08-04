// this Keyword (Implicit Binding)

// 1. Output Based question

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();
console.log(user.ref); // window object

function makeUser() {
  return {
    name: "John",
    ref() {
      return this; // this.name = "John"
    },
  };
}

// 2. Output Based Question 2

const user1 = {
  name: "John",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(user.logMessage, 1000);

setTimeout(function () {
  user1.logMessage();
}, 1000);

// 3. Output Based Question 3

var length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

object.method(callback); // 4

// 4. Output based Question 4

var length = 4;

function callback() {
  console.log(this.length);
}

const object1 = {
  length: 5,
  method() {
    // arguements = [callback, 2, 3]
    arguments[0]();
  },
};

object1.method(callback, 2, 4); // 3
