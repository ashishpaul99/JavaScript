// 24 - Modules
// -> Modules were introduced in ES6 (2015).
// -> They allow you to export parts of code from one file and import them into another.
// -> In the <script> tag, you should use the type attribute with the value "module".
// -> Using type="module" automatically applies the "defer" behavior 
//    (scripts load in parallel but execute after HTML parsing).
// -> Modules automatically run in strict mode.
// -> Normally, we manually write "use strict" at the top of a JS file,
//    but with modules, strict mode is implied automatically.

// --- defer keyword ---
// -> HTML parsing means the browser is reading the HTML code from top to bottom
//    and converting it into a structured tree called the DOM (Document Object Model).
// -> With defer, the DOM loads first, then the JavaScript is executed.

// => Without defer:
// If the script is in the <head>, HTML parsing stops until the JS file is downloaded and executed.
// This can slow page loading.

// => With defer:
// HTML parsing continues while the JS file downloads in parallel.
// The script runs only after the browser finishes building the DOM.

// => Order is preserved:
// If multiple defer scripts are in the page, they run in the order they appear.

// --- Module Exports ---
// -> Every module can have at most one default export.
// -> Named exports can also be done (inline named export).

// eg-1: Importing default and named exports
// import playGuitar from "./guitar.js";
// import { shredding, plucking } from "./guitar.js";
// console.log(playGuitar());   // Playing guitar!
// console.log(shredding());    // Shredding some licks!
// console.log(plucking());     // Plucking the strings...

// eg-2: Renaming named exports while importing
// import playGuitar from "./guitar.js";
// import { shredding as shred, plucking as fingerpicking } from "./guitar.js";
// console.log(playGuitar());    // Playing guitar!
// console.log(shred());         // Shredding some licks!
// console.log(fingerpicking()); // Plucking the strings...

// eg-3: Importing everything from a module
// -> If a function is exported by default, name it "default" when importing all.
// import * as Guitars from "./guitar.js";
// console.log(Guitars.default());   // Playing guitar!
// console.log(Guitars.shredding()); // Shredding some licks!
// console.log(Guitars.plucking());  // Plucking the strings...

// eg-4: Importing a class from another file
import User from "./user.js";
const me = new User("ashishpaul1199@gmail.com", "Ashish");
console.log(me);            // User {_email: 'ashishpaul1199@gmail.com', _name: 'Ashish'}
console.log(me.greeting()); // Hi, my name is Ashish

// -> Usually, modules in large projects are used with tools like Babel 
//    (which transpiles modern JS into older syntax for compatibility).
// -> Bundlers like Webpack or Parcel are often used alongside Babel 
//    to combine multiple modules/files into a single optimized bundle.

