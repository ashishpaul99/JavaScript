// 20. Handling Errors
// myName="Ashish";
// console.log(myName);  //o/p:Ashish 


// 1. Reference error

// eg-1:
// "use strict"
// myName="Ashish";
// console.log(myName);  // main.js:6 Uncaught ReferenceError: myName is not defined

// fixing above error
// "use strict"
// const myName="Ashish";
// console.log(myName); //o/p:Ashish


// 2. Syntax error
// ->we can;t catch and fix this error.
// ->js catches it as we code.
// ->this error stops the code from executing.
// eg-1:
// "use strict"
// Object..create();//Uncaught SyntaxError: Unexpected token '.'


// 3. Type Error
// ->we cannot reassign value to a const variable.
// eg-1: 
// "use strict"
// const name="Ashish";
// name="Paul"; // TypeError: Assignment to constant variable.

// eg-2:
// creating function and making error by purpose.
// "use strict"
// const makeError=()=>{
//     try{
//         // create error in this block
//         const name="Ashish";
//         name="Paul";

//     }catch(err){
//       console.log(err)
//     }
// }

// makeError();

// o/p:TypeError: Assignment to constant variable.
//        at makeError (main.js:42:13)
//        at main.js:49:1


// eg-3:
// ->it looks much more like error.
// "use strict"
// const makeError=()=>{
//     try{
//         // create error in this block
//         const name="Ashish";
//         name="Paul";

//     }catch(err){
//         // console.error(err)
//         //  console.error(err.name); //o/p:TypeError
//         //  console.error(err.message); //o/p:Assignment to constant variable.

//         // for more details use stack
//         // console.error(err.stack)
//     }
// }

// makeError();

// giving warning
// ->it givess warning symbol
// "use strict"
// const makeError=()=>{
//     try{
//         // create error in this block
//         const name="Ashish";
//         name="Paul";

//     }catch(err){
//       console.warn(err)
//     }
// }

// makeError();


// logging properties of table 
// "use strict"
// const makeError=()=>{
//     try{
//         // create error in this block
//         const name="Ashish";
//         name="Paul";

//     }catch(err){
//       console.table(err)
//     }
// }
// makeError();

// make screenshot while making notes


//=> custom error
// const makeError=()=>{
//     try{
//       throw new customError("This is a custom error ")  
//     }catch(err){
//        console.error(err.stack);//o/p:customError:This is a custom error 
//        console.error(err.name);//o/p:customError
//        console.error(err.message); //o/p:main.js:118 This is a custom error 

//     }
// }
// function customError(message){
//     this.message=message;
//     this.name="customError";
//     this.stack=`${this.name}:${this.message}`;
// }
// makeError();


// => Generic built in error constructor
// const makeError=()=>{
//     try{
//         //  genric error constructor
//         throw new Error("This is a custom error ")  

//     }catch(err){
//        console.error(err.stack);//o/p:customError:This is a custom error 
//        console.error(err.name);//o/p:customError
//        console.error(err.message); //o/p:main.js:118 This is a custom error 

//     }
// }

// makeError();

// o/p:
// Error: This is a custom error 
//     at makeError 
//     at main.js:144:1
// Error
// This is a custom error 


// => Finally block
// ->if an error is thrown, the finally block will still execute after the catch block.
// ->if no error is thrown will still execute as well.

// eg-1:
// const makeError=()=>{
//     try{
//         //  genric error constructor
//         throw new Error("This is a custom error ")  
//     }catch(err){
//        console.error(err.stack);//o/p:customError:This is a custom error 
//        console.error(err.name);//o/p:customError
//        console.error(err.message); //o/p:main.js:118 This is a custom error
//     }finally{
//         console.log("....finally");
//     }
// }
// makeError();

// add screenshot to notes


// eg-2:

// ->it there is odd number it goes to catch block 
// ->if there are only even number then it skips catch block and moves to final block.
"use strict"
const makeError=()=>{
    let i=1;
    while(i<=5){
        try{
            if(i%2!==0){
                throw new Error("Odd number!");
            }
            console.log("even number")
        }catch(err){
            console.error(err.stack);
        }finally{
            console.log("....finally");
            i++;
        }
    }
}
makeError();

// take screenshot while taking notes






