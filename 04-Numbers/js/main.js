// 1. Number
// An integer is a whole number
// js considers numbers and floats to be numbers
// const myNumber=42;
// console.log(myNumber);//o/p:42

// const myFloat=42.0;
// console.log(myFloat);//o/p:42

// Converting string to number
// const myString="42";
// const myNumber=42;
// console.log(Number(myString));    //o/p: 42
// console.log(Number(myString)+2);  //o/p:44
// console.log(Number(myString) === myNumber); //o/p:true
// console.log(Number("String"));    //o/p:NaN
// console.log(Number(true));        //o/p:1
// console.log(Number(false));       //o/p:0


// 2. Number Method
// 2.1. Number.isInteger()
// The Number.isInteger() method determines whether the passed value is an integer.
// const myNumber=42;
// const myString="Ashish";
// console.log(Number.isInteger(myNumber)); //o/p:true
// console.log(Number.isInteger(myString)); //o/p:false

// 2.2. Number.parseFloat()
// Number.parseFloat() is a method used to convert a string into a floating-point number (a number with decimal points).
// input start with number
// const myNumber="10Ashish";
// console.log(Number.parseFloat(myNumber)); //o/p:10
// console.log(Number.parseFloat("3.14ABC")); //o/p:3.14
// console.log(Number.parseFloat("12.34.56"))//o/p:12.34

// 2.3. Number.parseInt()
// Number.parseFloat() is a method parses a string argument and returns integer.
// const myNumber=42;
// const myFloat=42.0151;
// const myString="42.123abc";
// console.log(Number.parseInt(myFloat));  //o/p:42 
// console.log(Number.parseInt(myString)); //o/p:42 
// console.log(Number.parseFloat(42))      //o/p:42


// 2.toString()
// The .toString() method converts a value (like a number, object, or boolean) into a string.
// console.log(Number.toString(32))
// const myNumber=99;
// const myString="Ashishpaul"
// const bool=true;
// console.log(typeof myNumber.toString());//0/p:string
// console.log(myString+myNumber.toString());
// console.log(bool.toString()) //o/p:true


// 3.Chaning
// toFixed() formats a number using fixed-point notation — meaning it returns a string with a specified number of digits after the decimal point.
// console.log(Number.parseFloat("40.2468").toFixed(2).toString()); //o/p:40.25


// Nan is an acronym for not a number
// console.log(Number("Ashish")) //o/p:NaN

// Number.isNaN( )
// it determines whether the passed value is NaN and its type is Number
// Number.isNaN(NaN);              // ✅ true
// Number.isNaN(0 / 0);            // ✅ true (0 divided by 0 is NaN)

// Number.isNaN("hello");          // ❌ false (it's a string, not NaN)
// Number.isNaN(undefined);        // ❌ false
// Number.isNaN("NaN");            // ❌ false (it's a string)
// Number.isNaN(false);            // ❌ false
// Number.isNaN(123);              // ❌ false
// Number.isNaN(Number("abc"));    // ✅ true (returns NaN)


// Global isNaN()
// it onlu determines wheather value is not number
// isNaN("hello");         // true ❌
// Number.isNaN("hello");  // false ✅

// 🔍 Why is isNaN("hello") true?
// The global isNaN() function tries to convert the value to a number.

// "hello" cannot be converted to a number, so it's converted to NaN.

// Then, isNaN(NaN) is true.
// isNaN("hello") 
// → isNaN(Number("hello")) 
// → isNaN(NaN) 
// → true

// 🧠 Why is Number.isNaN("hello") false?
// Number.isNaN() does NOT convert the value.
// It only checks if:
// The value is strictly NaN
// And its type is actually number















