// Strings
// const myVariable="Ashish";

// length property
// console.log(myVariable.length);  //o/p:6
// console.log("I am building startup".length) //o/p:21

// string methods
// 1. charAt()
// postion starts from 0
// const myVariable="Ashish";
// console.log(myVariable.charAt(2))

//2. indexOf() - it provides the index of first occurrence.
// const myVariable="Ashish";
// console.log(myVariable.indexOf("Ash")) //o/p:0
// console.log(myVariable.indexOf("shi")) //o/p:1
// console.log(myVariable.indexOf("ish")) //o/p:3

// 3. lastIndexOf()
// ->it provides the index of last occurrence.
// const myVariable="Ashish";
// console.log(myVariable.lastIndexOf("Ash")) //0/p:0
// console.log(myVariable.lastIndexOf("h")) //o/p:5

// 3. slice()
//slice method will not return the character at ending position
// const myVariable="Ashish";
// console.log(myVariable.slice(2,5))//o/p:his

// 4. Lower and Upper method
// const myVariable="Ashish";
// console.log(myVariable.toLowerCase());//o/p:ashish
// console.log(myVariable.toUpperCase());//o/p:ASHISH

// 3. include()
// it returns bolean data
// if given string is presnt the variable then it returns true. if not it gives false.
// const myVariable="Ashish";
// console.log(myVariable.includes("ish"))//o/p:true
// console.log(myVariable.includes("hsA"))//o/p:false

// 3. split()
// -> It splits the string at the provided character.
// ->it returns array
const myVariable="Ashish";
console.log(myVariable.split("i")); //o/p: ['Ash', 'sh']
console.log(myVariable.split("")) //o/p: ['A', 's', 'h', 'i', 's', 'h']
console.log("Ashish is good CEO".split(","));//o/p:['Ashish is good CEO']