// Fetch API requires a discussion of Callbacks, Promises, Thenables, and Async/Await



// 1. Callbacks
// -> Calling multiple functions inside another function

// function firstFunction(parameters, callback) {
//     // do stuff
//     console.log("First function is running with parameters:", parameters);

//     // call the callback function
//     callback();
// }

// firstFunction(para, function(){
//     // do stuff
//     secondFunction(para, function(){
//         thirdFunction(para, function(){
            
//         })
//     })
// });

// o/p:
// First function is running with parameters: Ashish
// Callback function executed!


// callback hell 
// Callback hell is when you have too many nested callbacks, making your code look like a pyramid (↘↘↘) and hard to read, debug, or maintain.
// ->Promises are way to get rid of callback hell.


// 2. Promises
// ->they have three states.
// 3 States: Pending, Fullfilled, Rejected
// ->promises will deliver async code.
// ->js is usaully asynchronous code means doing one thing at a time.

// "I promise I’ll pay you back tomorrow if you give me the money today."
// This means they’re committing to do something in the future (pay you back), but you don’t get the result immediately—you have to wait.

// In JavaScript:
// A Promise is the same idea—it’s an object that represents a value that might be available now, later, or never.
// Pending → Waiting for the task to finish (you haven’t been paid yet).
// Fulfilled → Promise kept (you got your money).
// Rejected  → Promise broken (they didn’t pay you).

// -> promise could be pernding while some other js code goes ahead and executes.

// // creating promise
// const myPromise=new Promise((resolve, reject)=>{
//     const error=false;
//     if(!error){
//         resolve("Yes! resolved the promise");
//     }else{
//         reject("No!, Rejected the promise")
//     }   
// });

// // This logs the state of the promise.
// // It does not directly return the resolved value.
// console.log(myPromise);

// To get the value, we need to chain the promise.
// When promises first came around (ES6, ~2015), chaining was done using "thenables" (.then() methods).
// -> async/await later replaced most thenable usage for cleaner syntax.

// 1. using thenables

// eg-1: promise fullfilled
// const myPromise=new Promise((resolve, reject)=>{
//     const error=false;
//     if(!error){
//         resolve("Yes! resolved the promise");
//     }else{
//         reject("No!, Rejected the promise")
//     }   
// });

// // This logs the state of the promise.
// // console.log(myPromise);

// // result returned by the promise
// // myPromise.then(value=>{
// //     console.log(value); //o/p:Yes! resolved the promise
// // }).then()

// // alter chainig
// myPromise.then(value=>{
//     return value+1;
// }).then(newValue=>{
//     console.log(newValue); //o/p:Yes! resolved the promise1
// })

// Rejecting promise
// eg-2: Catching errors
// -> If an error occurs, control jumps to the catch block at the end.
// -> It skips the rest of the .then() chain after the error.

// const myPromise = new Promise((resolve, reject) => {
//     const error = true;
//     if (!error) {
//         resolve("Yes! Resolved the promise");
//     } else {
//         reject("No! Rejected the promise");
//     }   
// });

// myPromise
//     .then(value => {
//         return value + 1;
//     })
//     .then(newValue => {
//         console.log(newValue); 
//     })
//     .catch(err => {
//         console.log(err); // o/p: No! Rejected the promise
//     });


// eg-3: Simulating data fetching using setTimeout
// -> Another reason promises are used is to fetch data from an API.
// -> Another reason for using the Fetch API is to request data from another server.
// -> We need to wait for the data to come back before we can work with it.
// One way to simulate how Fetch works is to use a timeout in JavaScript,
// which delays the execution of some code.
// ->Javascript will ot wait for anything.

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes! Resolved the promise");
//     } else {
//         reject("No! Rejected the promise");
//     }   
// });


// after three seconds we get return from this promise
// const myNextPromise=new Promise((resolve,reject)=>{
//     setTimeout(function(){
//        resolve("myNextPromise");
//     },3000)
// });

// myNextPromise.then(value=>{
//     console.log(value);
// })

// myPromise.then(value=>{
//     console.log(value);
// })

// o/p: 
// Yes! Resolved the promise
// myNextPromise


// eg-4: Pending state
// ->// -> The promise is not yet resolved, but it's still working on it.
// It's like saying, "Go ahead, you guys. I'll catch up; I have some work to do."
// The rest of the code continues to execute in the meantime. 
// greate site to get some example API data form

// const users=fetch("http://jsonplaceholder.typicode.com/users");;

// // it gives the state of the promise -> pending
// console.log(users); //o/p:Promise {<pending>


// The response is a ReadableStream, but we need JSON to work with.
// fetch("http://jsonplaceholder.typicode.com/users").then(response=>{
//     console.log(response);
// })

// calling json method od that redable stream.
// fetch("http://jsonplaceholder.typicode.com/users").then(response=>{
//     return response.json();
// }).then(data=>{
//     console.log(data);
// })
// console.log("End of script")

// eg-5:
// ->state of the promise log first.
// ->user details log next.
// const users=fetch("http://jsonplaceholder.typicode.com/users").then(response=>{
//     return response.json();//it returns promise
// }).then(data=>{
//     console.log(data)
//     data.forEach(user=>{
//         // loggin each user
//         console.log(user)
//     })
// })

// console.log(users);
// o/p:
// Promise {<pending>}
// users details


// Async/Await
// -> Huge chains of .then() calls are not desirable.
// -> In 2017, async and await were introduced with ES2017.
// -> These keywords are a kind of syntactic sugar that hide what's going on under the hood.
// -> Another way to put it: you're telling your code, "Wait for this to happen before I do that."
// -> normal async function
// async function myCoolFunction(){
        
// }
// ->to use await it should be in async function.

// Defination
// async: Marks a function as asynchronous and makes it return a Promise automatically.

// await: Pauses execution inside an async function until the Promise after it resolves or rejects.
// await is used to pause code execution inside an async function until a Promise is settled (fulfilled or rejected) — and then give you the resolved value directly.

// Before 2017, we mostly used callbacks and .then() chains for asynchronous code.
// But long .then() chains become messy:

// fetch(url)
//   .then(res => res.json())
//   .then(data => fetch(anotherUrl))
//   .then(res => res.json())
//   .then(moreData => console.log(moreData))
//   .catch(err => console.error(err));

// With async/await, the same code becomes:
// async function getData() {
//   try {
//     const res1 = await fetch(url);
//     const data1 = await res1.json();

//     const res2 = await fetch(anotherUrl);
//     const data2 = await res2.json();

//     console.log(data2);
//   } catch (err) {
//     console.error(err);
//   }
// }


// eg-1: 
// myUsers={
//     userList:[]
// };


// // alternative: arrow function
// const myCoolFunction=async ()=>{
//     // await tell to wait for the response
//     const response=await fetch("http://jsonplaceholder.typicode.com/users")
//     const json=await response.json()
//     console.log(json);  
//     return json; 
// }

// myCoolFunction();//(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]


// const anotherFunction=async () =>{
//     const data=await myCoolFunction();
//     // logging the data inside the userList
//     myUsers.userList=data;
//     console.log(myUsers.userList)
// }

// anotherFunction();
// console.log(myUsers.userList);

// eg-2: workflow function
//  const getAllUsersEmails=async ()=>{
//     const response=await fetch("http://jsonplaceholder.typicode.com/users")
//     const jsonUserData=await response.json()
//     const userEmailArray=jsonUserData.map(user=>{
//         return user.email;
//     })

//     // console.log(userEmailArray);
//     return userEmailArray;
// }

// // -> The operations happen inside the async function,
// //    and it returns a Promise with the result.
// getAllUsersEmails();

// // -> The console.log is outside the async function, so it's not awaiting the result.
// // -> getAllUsersEmails() returns a Promise, and without awaiting it,
// //  console.log will show Promise {<pending>}.

// console.log(getAllUsersEmails());//Promise {<pending>}

// // eg-3: post to web page
// const getAllUsersEmails = async () => {
//   const response = await fetch("http://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   const userEmailArray = jsonUserData.map(user => user.email);

//   console.log(userEmailArray);
//   postToWebPage(userEmailArray);
// };

// // -> This function receives data as a parameter and is called within our async function.
// // -> It is called after we have awaited the data, so we are not awaiting anything in this function.
// // -> This function does not need to be async or use await.
// const postToWebPage = (data) => {
//   console.log(data);
// };

// getAllUsersEmails();


// eg-4: second parameter of fetch is a object
// Breakdown of the object:
// 1. method: "GET"
// -> Specifies the HTTP method.
// -> "GET" is the default, so technically   you could omit it here.

// -> Other examples: "POST", "PUT", "DELETE"
// headers: {...}

// -> Lets you send additional information with your request.

// -> Accept: "application/json" tells the server:
// -> “Please send me the response in JSON format, not HTML or plain text.”

// const getDadJoke= async () => {
//   const response = await fetch("https://icanhazdadjoke.com",{
//      method:"GET",
//      headers:{
//         Accept:"application/json"
//      }
//   });
//   const jsonJokeData=await response.json(); 

//   //log the joke
//   console.log(jsonJokeData.json);
// };

// getDadJoke(); //o/p:How do you fix a damaged jack-o-lantern? You use a pumpkin patch.

// Why it’s needed
// -> Some APIs return different content depending on the headers.
// -> Without Accept: "application/json", https://icanhazdadjoke.com would return HTML, which response.json() cannot parse.

// Accept is an HTTP header.
// It tells the server what type of response the client expects.
// Example values:
// "application/json" → client wants JSON
// "text/html" → client wants HTML
// "text/plain" → client wants plain text


// eg-5: Fetching plain text data from an API
// In this example, we use fetch() to get a dad joke as plain text
// by setting the Accept header to "text/plain" and using response.text().
// const getDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com", {
//     method: "GET",
//     headers: {
//       Accept: "text/plain"
//     }
//   });

//   const textJokeDad = await response.text();
//   console.log(textJokeDad);
// };

// getDadJoke();

// HTML response

// eg-6: Post Method
// -> it post something.
// -> we requesting to send new data to the API.
// -> we have to tell what conte type we are sending -> json
// -> specify what we are speding in body parameter.->stringy the jokeObj.
// ->posted info to the endpoint.


// const jokeObj={
//     id: 'As4wsHtzd', 
//     joke: "What's the difference between a hippo and a zippo?…e is really heavy, the other is a little lighter.", 
//     status: 200};

// const postData=async (jokeObj) => {
//     const response=await fetch("https://httpbin.org/post",{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify(jokeObj)
//     }); 

//     const postedData=await response.json();
//     console.log(postedData);
// }

// postData(jokeObj);

// eg-7:Request Joke

// const requestJoke=async (firstname,lastname)=>{
//     const response =await fetch(`https://api.chucknorris.io/jokes/random?firstname=${firstname}&lastname=${lastname}`);
//     const jsonResponse=await response.json();
//     console.log(jsonResponse.value)

// }

// requestJoke("Ashish","Paul")

// eg-8: abstract into function
// pulling data from form.
const getDataFromForm = () => {
    return {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
};

const buildRequestUrl = (requestData) => {
    // Chuck Norris API doesn't support 'categories' the same way as ICNDB
    return `https://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}`;
};

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value; // Chuck Norris API returns joke in 'value'
    postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
    console.log(joke);
};

// Procedural workflow
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished!");
};

processJokeRequest();


// getDataFromForm – Creates an object with firstName, lastName, and categories (not used by Chuck Norris API).

// buildRequestUrl – Builds the Chuck Norris API URL using firstName and lastName.

// requestJoke – Fetches a random joke from the Chuck Norris API and extracts it from jsonResponse.value.

// postJokeToPage – Logs the joke to the console.

// processJokeRequest – Main workflow: gets the data, builds the URL, fetches the joke, and logs "finished!".

// processJokeRequest() – Runs the entire workflow.

// Essentially, it fetches a Chuck Norris joke using the given names and logs it.

// Functions & Data Flow – Break tasks into small functions and pass data between them.

// Template Literals – Dynamically insert variables into strings using `${}`.

// Async/Await & Fetch – Make API calls and handle responses asynchronously.

// API Interaction – Send requests, parse JSON, and extract needed data.

// Separation of Concerns – Keep data creation, URL building, fetching, and display separate.

// Workflow Execution – Use a main function to coordinate steps in order.








