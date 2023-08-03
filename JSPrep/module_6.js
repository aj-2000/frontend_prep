// Objects In JavaScript

// 1. delete in javascript
// delete only deletes property from object

// 2. Dynamic Properties

const property = "firstName";
const name = "Ajay Sharma";

const user = {
  [property]: name,
};

// 3. Iterate Objects using for in

for (key in user) {
  console.log(key);
}

// 4. Output based question 1

const obj = {
  a: "one",
  a: "two", // one will be replaced by two
};

// 5. Object concept question

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 124; // key -> [object Object]
a[c] = 456;

console.log(a[b]);

// 6. Output based question 2

console.log([..."Lydia"]);

// 7. Output based question 3

const settings = {
  username: "Piyush",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]); // ignores username

// 8. Nested Destructing

let USER = {
  fullName: {
    first: "Piyush",
    last: "Agarwal",
  },
};

const {
  fullName: { first },
} = USER;

// 9. Spread and Rest Operator
// Rest operator should be the last arguement

// 10. Objects in JavaScript

let person = { name: "Lydia" };
const members = [person]; // members[0] = some_memory_address (execute kesa hota h socho)
person.name = null;

// 11. Shallow Copy vs Deep Copy
Object.assign({}, ...[object1, object2, object3]); // only 1 level copy
JSON.stringify(); // complete copy - but costly
