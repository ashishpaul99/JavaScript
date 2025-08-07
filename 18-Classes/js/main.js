// JavaScript Classes
// JavaScript classes were introduced in ES6 (ECMAScript 2015), not 2016.
// They provide a cleaner and more familiar syntax for creating objects and handling inheritance.
// ->it is just syntantic sugar.

// classes -> it is blue print for creating object.

// eg-1:
// class Pizza {
//     constructor(pizzaType, pizzaSize){
//         this.type=pizzaType;
//         this.size=pizzaSize;
//         this.crust="original"
//     }
//     bake(){
//        console.log(`Baking a ${this.size}  ${this.type} ${this.crust} crust pizza`);
//     }
// }

// const myPizza=new Pizza("pepperoni","medium");
// myPizza.bake();  //o/p:Baking a medium  pepperoni original crust pizza
// console.log(myPizza.type); //o/p:pepperoni

// // changing the values using dot notation
// myPizza.size="small";
// console.log(myPizza.bake());//o/p:Baking a small  pepperoni original crust pizza


// 2. getter and setter
// Setters and getters are used to set and get object properties indirectly, instead of accessing them directly.
// To control how values are accessed or modified.
// To validate, sanitize, or trigger side effects when properties change.
// To hide internal implementation and expose a clean interface.

// eg-1:
// -> we dont want to access properties directly.
// class Pizza {
//     constructor(pizzaType, pizzaSize) {
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "original";
//     }

//     // Method to bake pizza
//     bake() {
//         console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
//     }

//     // Getter for crust
//     get pizzaCrust() {
//         return this.crust;
//     }

//     // Setter for crust
//     set pizzaCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     }
// }

// const myPizza = new Pizza("pepperoni", "medium");

// // Using setter to change crust
// myPizza.pizzaCrust = "sausage";

// // Using getter to access crust
// console.log(myPizza.pizzaCrust); // ✅ Output: sausage

// // Baking the pizza
// myPizza.bake(); // ✅ Output: Baking a medium pepperoni sausage crust pizza

// eg-2:

// alternative
// class Pizza {
//     constructor(pizzaType, pizzaSize) {
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "original";
//         this.toppings=[];
//     }

//     // Method to bake pizza
//     bake() {
//         console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
//     }

//     // Getter for crust
//     getCrust() {
//         return this.crust;
//     }

//     // Setter for crust
//     setCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     }

//     // Getter for toppings
//     getToppings(){
//        return this.toppings;
//     }

//     setToppings(toppings){
//        this.toppings.push(toppings);
//     }

// }

// const myPizza = new Pizza("pepperoni", "medium");
// myPizza.setCrust("sausage");
// console.log(myPizza.getCrust())   // ✅ Output: sausage

// myPizza.setToppings("onions, cheese, chillies");
// console.log(myPizza.getToppings()) //o/p:['onions, cheese, chillies']


// Parent class and child class
// Calling the constructor of the parent class is done using the `super` keyword.
// `super()` must be called inside the child constructor **before** using `this`.
// ->Parent is blue print.

// eg-3:
// parent class
// class Pizza {
//     constructor(pizzaSize) {
//         this.size = pizzaSize;
//         this.crust = "original";
//     }
//     // Getter for crust
//     getCrust() {
//         return this.crust;
//     }

//     // Setter for crust
//     setCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     }
// }

// // child class
// class SpecialtyPizza extends Pizza{
//      constructor(pizzaSize){
//         super(pizzaSize);
//         this.type="The Works"
//      }

//      slice(){
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
//      }
// }

// const myPizza=new SpecialtyPizza("medium");
// myPizza.slice() //o/p:Our The Works medium pizza has 8 slices



// naming conventions
// To prevent properties from being modified outside of the class, we use the private modifier.
// Private properties cannot be accessed or modified from outside the class, but they can be accessed and modified within the class.
// The instructor used an underscore (_) before property names like _size and _crust to indicate that these properties are intended to be private, even though they are not truly private in JavaScript.

// making properties private
// eg-1:

// class Pizza {
//     constructor(pizzaSize) {
//         this._size = pizzaSize;
//         this._crust = "original";
//     }
//     // Getter for crust
//     getCrust() {
//         return this._crust;
//     }

//     // Setter for crust
//     setCrust(pizzaCrust) {
//         this._crust = pizzaCrust;
//     }
// }





// Factory function
// -> This was a solution to the problem of not being able to create objects that had private fields.
// -> Factory functions allow you to create objects with truly private data using closures.
// -> In this example, 'size' and 'crust' are not accessible outside the returned object,
//    making them effectively private.
// -> Factory functions are one of the best ways to achieve true privacy in JavaScript without using # syntax.

// eg-1:
// function pizzaFactory(pizzaSize) {
//     const crust = "original"; // private variable
//     const size = pizzaSize;   // private variable

//     return {
//         // Public method that has access to private variables through closure
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
//     };
// }

// const myPizza = pizzaFactory("small");

// myPizza.bake();            // ✅ Output: Baking a small original crust pizza
// console.log(myPizza.crust); // ❌ Output: undefined (crust is private)
// console.log(myPizza.size);  // ❌ Output: undefined (size is private)



// 🛠 Modern Way (ES2022+):
// JavaScript now supports true private fields using the # symbol:
// eg-1:
// class Pizza {
//     #crust = "original";
//     constructor(pizzaSize) {
//         this.size = pizzaSize;
//     }

//     getCrust() {
//         return this.#crust;
//     }

//     setCrust(pizzaCrust) {
//         this.#crust = pizzaCrust;
//     }
// }

// In this example:
// #crust is a truly private field
// It cannot be accessed or modified outside the class:
// const myPizza = new Pizza("large");
// console.log(myPizza.#crust); // ❌ SyntaxError


// eg-2:
//class supports public and private fields in javascript
// if their is any field which is not needed intialization then it should be above the constructor.
// private filed indicate with #.
// if size has to private then declare it abovee the constructor.

class Pizza {
    crust = "original";          // ✅ public field
    #sauce = "traditional";      // 🔒 private field
    #size;                       // 🔒 private field                   

    constructor(pizzaSize) {
        this.#size = pizzaSize; // ✅ assign to private field
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo(){
        console.log(`Here your ${this.crust} ${this.#sauce} sauce ${this.#size} Pizza`)
    }
}

const myPizza = new Pizza("small");

console.log(myPizza.sauce);       // ❌ undefined (private)
console.log(myPizza.size);        // ❌ undefined (now removed)
console.log(myPizza.crust);       //  original (public)
console.log(myPizza.getCrust());  // ✅ "original"
myPizza.hereYouGo(); // o/p:Here your original traditional sauce small Pizza

// https://caniuse.com/?search=private%20field%20class


