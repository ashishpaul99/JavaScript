// 14. Scope - var, let, const
// ->var is used until 2015.

// 1. var
// ->redclaring will be confusing when wrokeing with large projects.
// var x=10;
// var x=20; // (redeclaring)
// console.log(x); //o/p:10

// 2. let 
// ->use let whenever we had need to reassign.
// let x=1;
// let x=2;
// console.log(x);
// Cannot redeclare block-scoped variable 'x'.

// let x=1;
// x=2;
// console.log(X)

// 3. const 
// ->Whenever there is no need to reassign variable use const.
// const x=1;
// x=2;
// console.log(x); //main.js:24 Uncaught TypeError: Assignment to constant variable.

//-> var has different scope when compared with let and const.


// 1. global scope
// -> all these are global varibales.
// var x=10;
// let y=20;
// const z=30;

// 2. Local scope
// ->Inside local scope there can be more than one scope.
// 1.Block scope
// eg-1:
// {
//     let y=4;
//     console.log(y);//o/p:4
// }
// console.log(y);//main.js:42 Uncaught ReferenceError: y is not defined

// 3. function scope
// eg-1:
// function myFun(){
//     const z=5;
//     console.log(z);//5

//     // local scope
//     {
//     let y=4;
//     console.log(y);//o/p:4
//     }
// }
// myFun();
// console.log(z);//main.js:49 Uncaught ReferenceError: z is not defined


// eg-2:
// ->here y comes from global scope.

// var x=10;
// let y=20;
// function myFun(){
//     const z=5;
//     console.log(z);//5
//     console.log(y);//20

//     // local scope
//     {
//     let y=4;
//     console.log(y);//o/p:4
//     }
// }
// myFun();

// o/p:
// 5
// 20
// 4

// // eg-3
// // Global Scope
// var x = 1;       // Function-scoped (but declared globally here)
// let y = 2;       // Block-scoped
// const z = 3;     // Block-scoped

// console.log(`global ${x}`); // global 1
// console.log(`global ${y}`); // global 2
// console.log(`global ${z}`); // global 3

// function myFun() {
//     // Function Scope
//     var x = 10;         // Shadows global x (function-scoped)
//     const z = 5;        // Shadows global z (block-scoped but declared in function block)

//     console.log(`function ${x}`); // function 10
//     console.log(`function ${y}`); // function 2 (accesses global y, not re-declared inside function)
//     console.log(`function ${z}`); // function 5

//     {
//         // Block Scope
//         var x = 11;     // Still modifies the function-scoped x (var is NOT block-scoped)
//         const z = 6;    // Block-scoped z (shadows function-scoped z temporarily)

//         console.log(`block ${x}`); // block 11 (modifies function-scoped x)
//         console.log(`block ${y}`); // block 2 (still global y)
//         console.log(`block ${z}`); // block 6 (block-scoped z)
//     }

//     // After block
//     console.log(`function ${x}`); // function 11 (modified by var x inside block)
//     console.log(`function ${y}`); // function 2 (global y still accessible)
//     console.log(`function ${z}`); // function 5 (original function-scoped z, block z is gone)
// }

// myFun();
// Add screeshot at 2:03:39