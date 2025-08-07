// 13. Functions
// 1. Methods -> Built in functions
"Ashish".toLowerCase();
Math.random();

// 2. Functions 
//-> A function in javascript is a block of reusable code designed to perform a particular task.
//->define it once and use it multiple times.
// ->function provide reusable code.

// eg-1: function with out parameters
// function sum(){
//     return 2+2;
// }
// console.log(sum());  //o/p: 4

// eg-2:function with parameters
// function sum(a,b){
//     return a+b;
// }

// console.log(sum(10,20));//o/p:30

// eg-2:return the first part of the email
// function getUserNameFromEmail(email){
//     return email.slice(0,email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("ashishpaul1199@gmail.com"))//o/p:ashishpaul1199

// 3. Anonymous function
// -> functions without name are knwon as anonymous.
// const sum= function (a,b){
//   return a+b;
// }
// console.log(sum(10,30));//o/p:40

// 4. Arrow function
// const sum= (a,b)=>{
//   return a+b;
// }
// console.log(sum(10,30));//o/p:40

// eg-1:
const toProperCase = (myName)=>{
    return myName.charAt(0).toUpperCase()+myName.slice(1).toLowerCase();
}
console.log(toProperCase("november")); //o/p:November

