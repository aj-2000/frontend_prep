// 1. Accidental Memory Leaks

b = 14; // add "b" property to window object

function abc() {
  c = "ABCDEFGHIJKLMNOPQRSTUVW";
}
abc(); // add "c" property to window object

("use strict");

function abcd() {
  this.d = "ABCDEFGHIJKLMNOPQRSTUVW";
}
new abcd(); // add "d" property to window object even with use strict mode

// 2. Forgotten Timers and Callbacks
// if reference exists some where then complete object will also exist in memory

// 3. Remove listeners if not required

// used for cancel button on dialogs - no need to remove listeners
let node = document.getElementById("node");
node.addEventListener("click", () => {}, {
  once: true,
});

// 4. Out of DOM references

// if we have stored the reference to some deleted dom element then still deleted dom element will
// exist in memory

// 5. use closures with caution

// below example causing a lot of dent
var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;

  var unused = function () {
    if (originalThing != null) console.log("hi");
  };

  theThing = {
    longStr: new Array(100000),
    someMethod: function () {
      console.log("Bye!");
    },
  };
  setInterval(replaceThing, 1000);
};

// 6. Reference Object Cycle

// if any inner property of the object is referenced then whole object will live in memory

// 7. Deattached Window
// onclosing window also make variable pointing to reference of window "null"

// 8. Forget to stop listening or disconnect
// eg. InsersecitonObserver

// 9. Virtualiaztion of DOM
// 1. remove non visible element of list from DOM
// 2. remove non visible data of list from app state
