// Conditionals: Ternary Operator
// ->these are next level if else statements.
// ->it saves you lines of code compared to bulker if else and switch syntax.

// syntax
// condtion ? isTrue | isFalse
// eg-1:
// let soup="Chicked Noddle Soup";
// let response=soup? "Yes, we have soup" : "sorry, no soup today";
// console.log(response);

// eg-2:
// let soup="Chicked Noddle Soup";
// let isCustomerBanned=true;
// let soupAccess= isCustomerBanned? "Sorry, no soup for you"
// : soup? "Yes, we have soup": "Sorry, no soup today";
// console.log(soupAccess); //o/p: Sorry, no soup for you

// eg-3:
// let testScore=90;
// let myGrade=
//  testScore>=90
//  ? "A"
//  :testScore>=80
//  ? "B"
//  :testScore>=70
//  ? "C"
//  :testScore>=60
//  ? "D"
//  :testScore>=50
//  ? "E": "Fail";
// console.log(`my test grade is ${myGrade}`);

// eg-4:
let playerone = "sissors";
let computer = "paper";

let result = playerone === computer
  ? "Tie game!"
  : playerone === "rock" && computer === "paper"
  ? "Computer wins!"
  : playerone === "paper" && computer === "scissors"
  ? "Computer wins!"
  : playerone === "scissors" && computer === "rock"
  ? "Computer wins!"
  : "Player One wins!";

console.log(result); //o/p:Player One wins!
