// JSON -> JavaScript Object Notation
// JSON is used to send and receive data between a web application and a server.
// It is a lightweight, language-independent text format.
// JSON can be used in many programming languages — not just JavaScript.

// Example JavaScript object
const myObj = {
    name: "Ashish",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello");
    }
};

console.log(myObj);              // Output: { name: 'Ashish', hobbies: Array(3), hello: ƒ }
console.log(myObj.name);         // Output: Ashish
myObj.hello();                   // Output: Hello
console.log(typeof myObj);      // Output: object

// Stringify the JavaScript object to JSON
// Note: Functions are not included in JSON strings
const sendJson = JSON.stringify(myObj);
console.log(sendJson);          // Output: {"name":"Ashish","hobbies":["eat","sleep","code"]}

// Type of sendJson
console.log(typeof sendJson);   // Output: string

// After stringify, we cannot access object properties directly
console.log(sendJson.name);     // Output: undefined (because it's a string)

// Parse JSON back to JavaScript object
const receiveJson = JSON.parse(sendJson);
console.log(receiveJson);       // Output: { name: 'Ashish', hobbies: Array(3) }
console.log(typeof receiveJson); // Output: object

// Note: The original `hello` function is lost after stringify and won't exist in parsed object

