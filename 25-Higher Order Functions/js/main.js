// 25 - Higher Order Function
// A higher-order function is a function that does at least one of the following:
// 1. Takes one or more functions as arguments (parameters);
// 2. Returns a function as its result.

import { posts } from "./posts.js";

// 1. forEach()
// ->it replace the for-loop
// posts.forEach(post=>{
//    console.log(post);
// });
// console.clear();

// 2. filter()
// ->filter posts posted by user id 1
const filterPosts=posts.filter((post)=>{
    return post.userId===5;
});
console.log(filterPosts);


// 3. map
// multiplying the id with 10
// const mappedPosts=filterPosts.map(post =>{
//     return post.id*10;
// })
// console.log(mappedPosts)

// const arr=[10,20,30];
// console.log(arr.map(elem=> elem*10))//o/p:[100, 200, 300]

// 4. reduce
// array.reduce((accumulator, currentValue) => {
//    // logic
// }, initialValue);
// accumulator → stores the result after each iteration
// currentValue → current element in the array
// initialValue → starting value for the accumulator

// const arr=[1,2,3,4];
// const add=arr.reduce((total,num)=>total+num,0);
// console.log(add);