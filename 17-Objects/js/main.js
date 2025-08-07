// 17-Objects 
// ->objects come in key-value pair and those pairs are in curly braces.
// ->key value pairs in curly pairs.
// const myObj={
//     name:"Ashish"
// }
// console.log(myObj.name); // o/p:Ashish



// eg-2:

// const myObj={
//     alive:true,
//     answer:42,
//     hobbies:["Eat","Sleep","Code"],
//     baverage:{
//         morining:"Coffee",
//         afternoon:"Ice Tea"
//     }
// }

// console.log(myObj.hobbies); //o/p:(3) ['Eat', 'Sleep', 'Code']
// console.log(myObj.baverage); //o/p:{morining: 'Coffee', afternoon: 'Ice Tea'}

// console.log(myObj.hobbies[2]) //o/p:Code
// console.log(myObj.baverage.morining) //o/p:Coffee

// ->instead . notation brackets can used to access values in the object
// console.log(myObj["baverage"]); //o/p:{morining: 'Coffee', afternoon: 'Ice Tea'}
// console.log(myObj["baverage"]["morining"]); //o/p:Coffee


// eg-3:
// ->Objects have properties and they also have methods.
// ->methods are functions and which are defined within the object
// const myObj={
//     alive:true,
//     answer:42,
//     hobbies:["Eat","Sleep","Code"],
//     baverage:{
//         morining:"Coffee",
//         afternoon:"Ice Tea"
//     },
//     action:function(){
//         return `Time for ${this.baverage.morining}`;
//     }
// }

// console.log(myObj.action()); //o/p:Time for Coffee

// eg-4:
// Using the generic 'vehicle' object as a prototype to create the 'truck' object.
// Inheritance: The 'truck' object inherits properties and methods ('wheels' and 'engine') from the 'vehicle' object.
// The 'truck' object is created based on the 'vehicle' object using Object.create().

// const vehicle = {
//     wheels: 4,
//     engine: function () {
//         return "Vrooooom!";
//     }
// };

// const truck = Object.create(vehicle);
// truck.doors = 2;

// console.log(truck);           // Output: { doors: 2 }
// console.log(truck.wheels);    // Output: 4 (inherited from vehicle)
// console.log(truck.engine());  // Output: Vrooooom! (inherited method)

// creating car object
// const car=Object.create(vehicle);
// car.doors=4;
// car.engine=function(){
//     return "Whoooosh!"
// }

// console.log(car); //o/p: {doors: 4, engine: ƒ}
// console.log(car.engine()) //o/p:Whoooosh!

// // creating specific object
// const tesla=Object.create(car);
// tesla.engine=function(){
//     return "Shhhh...."
// }
// console.log(tesla.engine()); //o/p:Shhhh....

// Object.create() is used to set up prototypal inheritance.
// Properties like wheels and engine() are not directly on truck, but accessible via its prototype (vehicle).
// You added a new property doors directly on the truck object.

// eg-5:
// const band={
//   vocals:"chris tomlin",
//   guitar:"justin",
//   bass:"Ashish",
//   drums:"john"
// };
// console.log(Object.keys(band));//o/p:['vocals', 'guitar', 'bass', 'drums']
// console.log(Object.values(band));//o/p: ['chris tomlin', 'justin', 'Ashish', 'john']

// for in loop
// for(let job in band){
//     console.log(band[job]);
// }

// o/p:
// chris tomlin
// justin
// Ashish
// john


// for(let job in band){
//     console.log(`on ${job}, it's ${band[job]}`);
// }

// o/p:
// on vocals, it's chris tomlin
// on guitar, it's justin
// on bass, it's Ashish
// on drums, it's john


// eg-7: deleting existing property in object
// const band={
//   vocals:"chris tomlin",
//   guitar:"justin",
//   bass:"Ashish",
//   drums:"john"
// };

// console.log(band); //o/p:{vocals: 'chris tomlin', guitar: 'justin', bass: 'Ashish', drums: 'john'}
// delete band.drums;
// console.log(band) //o/p:{vocals: 'chris tomlin', guitar: 'justin', bass: 'Ashish'}

// // checking wheather drums property is preset or not
// console.log(band.hasOwnProperty("druums")); //o/p:false


// destructuring objects
// eg-1:
const band={
  vocals:"chris tomlin",
  guitar:"justin",
  bass:"Ashish",
  drums:"john"
};

// defining a variable name myVaribale and pullig the value from band object
// const {guitar:myVariable, bass:myBase}=band;
// console.log(myVariable); //o/p: justin
// console.log(myBase) //o/p:Ashish

// eg-2:
const {vocals, guitar,bass,drums}=band;
console.log(vocals); //o/p: chris tomlin
console.log(guitar); //o/p: justin

function sings({vocals}){
    return `${vocals} sings!`
}
console.log(sings(band));//o/p:chris tomlin sings!





