// Arrays
// storing multiple values in a single variable
// const myArray=[];

// // add elements to an array
// myArray[0]=10;
// myArray[1]=1001;
// myArray[2]=true;
// console.log(myArray)//o/p:(3) [10, 1001, true]


// legth property
// console.log(myArray.length);//o/p:3

//last element in an array
// console.log(myArray[myArray.length-1]);//o/p:true

// // aaccess to any item by index
// console.log(myArray[1]);//o/p:1001
// console.log(myArray[2]);//o/p:true


// eg-1:

// 1. push()
// adds item at the end of array
// const myArray=[];
// myArray[0]=10;
// myArray[1]=1001;
// myArray[2]=true;
// console.log(myArray);//o/po:[10, 1001, true]
// myArray.push("school");
// console.log(myArray)//o/p:(4) [10, 1001, true, 'school']

// 2. pop
// pop item from the end of array
// const myArray=[];
// myArray[0]=10;
// myArray[1]=1001;
// myArray[2]=true;

// myArray.pop();
// console.log(myArray);//o/p:(2) [10, 1001]

// getting last element
// const myArray=[];
// myArray[0]=10;
// myArray[1]=1001;
// myArray[2]=true;
// const lastItem=myArray.pop()
// console.log(lastItem); //o/p:true

// 3.  unshift()
// const myArray=[];
// myArray[0]=10;
// myArray[1]=1001;
// myArray[2]=true;
// myArray.unshift("Ashish");
// console.log(myArray) //o/p: (4) ['Ashish', 10, 1001, true]

// unshift(...) ➜ modifies the array + returns the new length
// const newLength=myArray.unshift(42);
// console.log(myArray); //o/p:[42, 'Ashish', 10, 1001, true]
// console.log(newLength); //o/p:5

// 4.  shift()
// -> remove elements from rear end.
// const myArray=[];
// myArray[0]=10;
// myArray[1]=1001;
// myArray[2]=true;
// myArray.shift();
// console.log(myArray); //o/p:(2) [1001, true]
// console.log(myArray[1]); //o/p:true
// console.log(myArray[2]); //undefined


// 5. Deleting Elements from an Array
// ❌ Using `delete` to remove an element from the middle of an array:
// -> It removes the element but leaves `undefined` at that index.
// -> This creates a "hole" in the array (i.e., a sparse array).
// -> This can cause problems when using array methods like map, filter, forEach, etc.
// ✅ Instead, use `splice()` to remove elements properly.

// const myArray=[];
// myArray[0]=10;
// myArray[1]=1001;
// myArray[2]=true;

// console.log(myArray); //o/p: [10, 1001, true]
// delete myArray[1];

// console.log(myArray); //o/p:[10, empty, true]
// console.log(myArray[1]);//undefined

// 6. splice()
// array.splice(start, deleteCount, item1, item2, ...)
// start       ->Index to start changing the array 
// deleteCount ->Number of elements to remove from start
// item1, item2... ->(Optional) Items to insert at start index

// const myArray=[];
// myArray[0]=10;
// myArray[1]=1001;
// myArray[2]=true;

// console.log(myArray);//o/p:(3) [10, 1001, true]
// // myArray.splice(1,1); //o/p:(2) [10, true]
// myArray.splice(1,2); //o/p:[10]
// console.log(myArray);


// eg-2:replacing the values using splice

// const myArray=[];
// myArray[0]=10;
// myArray[1]=1001;
// myArray[2]=true;
// console.log(myArray); //p/p:(3) [10, 1001, true]

// // replacing values frome position 1 without deleting
// myArray.splice(1,0,"Ashish","Paul");
// console.log(myArray);//o/p: [10, 'Ashish', 'Paul', 1001, true]

// 7. slice()
// const myArray=["A","B","C","D","E","F"];
// console.log(myArray.slice(1,5));//o/p:['B', 'C', 'D', 'E']

// 8. reverse()
// ->this method is used to reverse an array
// const myArray=["A","B","C","D","E","F"];
// console.log(myArray.reverse());//o/p:['F', 'E', 'D', 'C', 'B', 'A']


// 9. join()
// -> It creates a string by joining all elements of the array.
// -> By default, it puts a comma (`,`) between elements.
// -> You can pass a custom separator as an argument.

// const myArray=["A","B","C","D","E","F"];
// console.log(myArray.join())//o/p:A,B,C,D,E,F
// console.log(myArray.join('-'))//o/p:A-B-C-D-E-F

// 10.split() 
// Splits a string into an array of substrings.
// It does not change the original string.
// string.split(separator, limit)

// console.log("Ashish,Paul".split(""));//o/p: ['A', 's', 'h', 'i', 's', 'h', ',', 'P', 'a', 'u', 'l']
// console.log("apple,banana,grape".split()); //o/p:['apple,banana,grape']
// console.log("hello world".split(" ")); //op:(2) ['hello', 'world']
// console.log("abc".split(""))//o/p:['a', 'b', 'c']
// console.log("a-b-c-d".split("-",2))//o/p:(2) ['a', 'b']


// 11. concat()
// const myArrayA=["A","B","C"];
// const myArrayB=["D","E","F"];
// console.log(myArrayA.concat(myArrayB)); //o/p:(6) ['A', 'B', 'C', 'D', 'E', 'F']
// console.log(myArrayB.concat(myArrayA));//o/p:['D', 'E', 'F', 'A', 'B', 'C']


// 12. Spread Operator
// -> The spread operator (`...`) extracts individual elements from each array.
// -> It "spreads" the elements into a new array instead of nesting them.
// -> Without spread, using [myArrayA, myArrayB] creates an array of two arrays (nested arrays).

// const myArrayA = ["A", "B", "C"];
// const myArrayB = ["D", "E", "F"];

// const newArray = [...myArrayA, ...myArrayB];
// console.log(newArray); // Output: ['A', 'B', 'C', 'D', 'E', 'F']

// console.log([myArrayA, myArrayB]); // Output: [ ['A', 'B', 'C'], ['D', 'E', 'F'] ]

// 13. Nested Array

// 1.2D Array
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]); // Output: football
console.log(clothesShelfB[0]); // Output: sweat tops

const equipDept=[equipShelfA,equipShelfB];
const clothesDept=[clothesShelfA,clothesShelfB];
console.log(equipDept); 
console.log(clothesDept);

// Accessing elements in 2-D array
console.log(equipDept[0][1]); //o/p:football
console.log(clothesDept[1][1]);//o/p:sweat pants


// 1.3D Array
// Accessing elements in 3-D array
const sportsStore=[equipDept,clothesDept];
console.log(sportsStore); //o/p:(2) [Array(2), Array(2)]
console.log(sportsStore[0][1][2]);//tennis balls



