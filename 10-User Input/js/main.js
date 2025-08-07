// 10. User Input
// ->interact user if the web page.
// 1.alter()
// -> it shows some information to user and ask to click ok.
// alert("Hello World")

// 2. confirm()
// ->reciveing data from user
// let myBoolean=confirm("OK===True\nCancel===false");
// console.log(myBoolean);

// 3. prompt()
// ->asking direct input from user.
// -> if we cancel we get null value. it also translated as false.
// let myName=prompt("Please enter your name");
// console.log(myName);
// i/p:Ashish
// o/p:Ashish

//  nullish coalescing operator.
// It is used to provide a default value when the left-hand side is null or undefined.
// if myName has value return name
// if its null or undefined returns  default value which is provided.
//  console.log(myName?? "you didn't enter your name");

// eg-2
let myName = prompt("Please enter your name");

if (myName) {
  console.log(myName.length);           // Length before trim
  console.log(myName.trim().length);    // Length after trim
  console.log(myName.trim());           // Trimmed name
} else {
  console.log("You didn't enter your name");
}

// o/p:
// 41
// main.js:31 11
// main.js:32 Ashish paul

