// 5. Math Methods and properties
console.log(Math.PI); //o/p:3.141592653589793

// Math.trunc() method removes all decimals
console.log(Math.trunc(Math.PI)); //o/p:3

// Math.round() method return the value of number runded to nearest integer.
console.log(Math.round(Math.PI)); //o/p:3
console.log(Math.round(4.7986));  //o/p:5

// ceil() -> Rounds a number upwards to the nearest integer.
// Always rounds towards positive infinity.
console.log(Math.ceil(Math.PI)); //o/p: 4
console.log(Math.ceil(5.9898));  //o/p: 6

// floor() -> Definition: Rounds a number downwards to the nearest integer.
// Always rounds towards negative infinity.
console.log(Math.floor(Math.PI)) //o/p:3 

// pow()-> it takes two arguemnt- base number and exponent
console.log(Math.pow(4,2));//o/p:16

// min()-> it returns minumum number from given numbers.
console.log(Math.min(2,0.5,9)); //o/p: 0.5
console.log(Math.min(2,5,1));   //o/p: 1

// max()-> it reurns max number from the given numbers
console.log(Math.max(3,8,1)); //o/p:8
console.log(Math.max(10,3,8));//o/p:10

//random()-> it provides a pseudo random number from 0 to 1
console.log(Math.random());//o/p:0.6390992326693719
console.log(Math.random());//o/p:0.05927249511144006

// genrate radom number from 0 to 10
console.log(Math.floor(Math.random()*10)+1);//o/p:1
console.log(Math.floor(Math.random()*10)+1);//o/p:7

// ✅ Use Math.floor()
// ❌ Avoid Math.ceil()
// 🔍 Why?
// Math.random() generates a random floating-point number in the range [0, 1)
// (includes 0 but excludes 1).

// ❌ Problem with Math.ceil(Math.random() * 10):
// Math.random() can return 0

// 0 * 10 = 0

// Math.ceil(0) = 0

// This results in an invalid number (we want 1 to 10, not 0)








