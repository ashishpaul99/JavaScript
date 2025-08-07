// Intro to loops
// 1. while loop
// let myNumber=0;
// while(myNumber<50){
   
//     // myNumber++;
//     myNumber+=2;
//     console.log(myNumber);
// }
// dont create an endless loop

// 2. do while loop
// it will excute codo block(do block) atleast one time.

// let myNumber=50;
// do{
//     console.log(myNumber); //o/p:50
// }while(myNumber<50);


// 3. for loop
// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// alter
// let i=0;
// for(;i<=10;){
//     console.log(i);
//     i++;
// }

// eg-1:
// let myName="Ashish";
// for(let i=0;i<myName.length;i++){
//     console.log(myName.charAt(i))

// }

//break keyowrd 
// -> it is used to break the loop
let myName="Ashish";
let counter=0;
let myLetter;
while(true){
    myLetter=myName[counter];
    console.log(myLetter);
    if(myLetter==="i") break;
    counter++;
}
// o/p:
// A
// s
// h
// i

// continue 
// The continue keyword in JavaScript is used inside loops (like for, while, or do...while) to skip the current iteration and jump to the next one.
// for (let i = 0; i < 5; i++) {
//   if (i === 2) continue;
//   console.log(i);
// }

// o/p:
// 0
// 1
// 3
// 4

