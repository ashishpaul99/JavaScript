// 23-Web Storage API
// ->it is not part of the DOM.
// ->it refers to the window API.
// ->it is available to js via global variable: window.
// ->no need to type window - it is implied.


// eg-1:
// ->both are same
// window.alert("Hello")
// alert("Hello");

// eg-2:getting location(local ip address)
// window.alert(window.location);
// alert(window.localion);


// storage
// 1. session storage
// 2. local storage

// Session Storage
// -> Stores data only for the duration of the page session.
// -> Data is available as long as the browser tab is open.
// -> Once the tab or browser is closed, the data is deleted.

// Local Storage
// -> Stores data persistently with no expiration date.
// -> Data remains even after closing the browser or shutting down the system.
// -> Data is tied to the specific domain and can be retrieved whenever you revisit that website.

// Important Note
// Web Storage (sessionStorage / localStorage) can only store strings.
// Objects and arrays must be converted to JSON format before storing.
// This means the data is converted into a string using JSON.stringify() before being stored in Web Storage.
// When retrieving the data, use JSON.parse() to convert it back to its original object or array form.


// To view stored data in sessionStorage:
// Open Developer Tools in your browser (usually F12 or right-click → Inspect).
// Go to the Application tab.
// In the left sidebar, expand Session Storage.
// Select your website's domain.
// You will see the stored keys and values (if stored as JSON, you’ll see it as a string).


// 1. Store Array in sessionStorage
// eg-1:without JSON.stringify:
// const myArray=["eat","sleep","code"];
// // mySessionStorage is name of the session store
// sessionStorage.setItem("mySessionStore",myArray);

// // retirving data from session storage
// const mySessionData=sessionStorage.getItem("mySessionStore");
// console.log(mySessionData); // Output: "eat,sleep,code"  (string, not array)
// console.log(typeof mySessionData);//o/p:string

// eg-2: with JSON.stringify:
// const myArray = ["eat", "sleep", "code"];
// sessionStorage.setItem("myArray", JSON.stringify(myArray));

// const mySessionData=sessionStorage.getItem("myArray");

// console.log(mySessionData);
// //Output: '["eat","sleep","code"]' (JSON string)
// console.log(typeof mySessionData); //o/p:string

// // parsing session data
// const parseSessionData=JSON.parse(mySessionData)
// console.log(parseSessionData);//o/p: ['eat', 'sleep', 'code']
// console.log(typeof parseSessionData)//o/p:object


// 2. Store object in sessionStorage

// Important:
// -> When an object is converted to JSON, it will not keep its methods (functions). 
// -> Only the data properties will be stored.
// -> If you try to store an object directly in Web Storage (sessionStorage / localStorage),
// JavaScript automatically converts it to a string because storage can only store strings.
// -> The default string representation of a plain object is "[object Object]".
// -> That’s why you see "[object Object]" in DevTools when you store an object without conversion.
// -> To store the real object data, convert it to JSON first using JSON.stringify().


// eg-1: ❌ Storing an object directly:
// const myObject = {
//     name: "Ashish",
//     hobbies:["eat","sleep","code"],
//     logName: function() {
//         console.log(this.name);
//     }
// };

// sessionStorage.setItem("mySessionStore", myObject);

// const mySessionData = sessionStorage.getItem("mySessionStore");
// console.log(mySessionData); // Output: [object Object]

// eg-2:✅ How to fix it:
// JSON.stringify(myObject) converts the object into a JSON-formatted string
// which can be stored properly in Web Storage.
// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
// Note:
// -> JSON format can store objects, arrays, strings, numbers, booleans, and null.
// -> Methods (functions) are not stored in JSON format.

// Code
// const myObject = {
//     name: "Ashish",
//     hobbies: ["eat", "sleep", "code"],
//     logName: function () {
//         console.log(this.name);
//     }
// };

// // Convert object to JSON before storing
// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));

// // Retrieve string data
// const mySessionData = sessionStorage.getItem("mySessionStore");
// console.log(mySessionData); 
// // o/p: {"name":"Ashish","hobbies":["eat","sleep","code"]}
// console.log(typeof mySessionData); 
// // o/p: string

// // Parse string data back to object
// const parseSessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(parseSessionData); 
// // o/p: {name: "Ashish", hobbies: Array(3)}
// console.log(typeof parseSessionData); 
// // o/p: object


// 2. Local Storage Examples
// -> Just change sessionStorage to localStorage in your code.
// -> Even after closing and reopening the browser, the data remains in local storage.
// Steps to view in Chrome DevTools:
//    1. Open DevTools (F12 or Ctrl+Shift+I).
//    2. Go to the "Application" tab.
//    3. In the left sidebar, under "Storage", click "Local Storage".
//    4. Select your website’s domain to see stored key-value pairs.

// eg-1:
// const myArray = ["eat", "sleep", "code"];
// localStorage.setItem("myArray", JSON.stringify(myArray));

// const myLocalData=localStorage.getItem("myArray");

// console.log(myLocalData);
// //Output: ["eat","sleep","code"]
// console.log(typeof myLocalData); //o/p:string

// // parsing session data
// const parseLocalData=JSON.parse(myLocalData)
// console.log(parseLocalData);//o/p: ['eat', 'sleep', 'code']
// console.log(typeof parseLocalData)//o/p:object

// ->this storages work while doing small projects.



//eg-2: Remove item from local storage

// const myArray = ["eat", "sleep", "code"];

// // Store array in local storage (must stringify for non-string data)
// localStorage.setItem("myArray", JSON.stringify(myArray));

// // Remove specific item from local storage
// // localStorage.removeItem("myArray");

// // Clear ALL data from local storage (no arguments needed)
// // localStorage.clear();

// // Try to retrieve the removed/cleared data
// const myLocalData = localStorage.getItem("myArray");

// console.log(myLocalData); // null (if removed or cleared)


// eg-3: Accessing items in Local Storage using index

// const myArray = ["eat", "sleep", "code"];

// // Store the array in localStorage
// localStorage.setItem("myArray", JSON.stringify(myArray));

// // Get the key name stored at index 0
// const key = localStorage.key(0);
// console.log(key); // o/p: myArray

// // Retrieve the value using the key
// const myLocalData = localStorage.getItem(key);
// console.log(myLocalData); // o/p: ["eat","sleep","code"]




// eg-4: Finding the number of items in Local Storage

const myArray = ["eat", "sleep", "code"];
const myObj = {
    name: "Ashish",
    hobbies: ["eat", "sleep", "code"],
};

// Store array and object in localStorage
localStorage.setItem("myArray", JSON.stringify(myArray));
localStorage.setItem("myObject", JSON.stringify(myObj));

// Find the number of items in localStorage
const noOfItems = localStorage.length;
console.log(noOfItems); // o/p: 2

// Retrieve and log stored data
const myArrayData = localStorage.getItem("myArray");
console.log(myArrayData); // o/p: ["eat","sleep","code"]

const myObjectData = localStorage.getItem("myObject");
console.log(myObjectData); // o/p: {"name":"Ashish","hobbies":["eat",]()


