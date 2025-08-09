// 22. Event Listeners
// -> Event listeners are functions in JavaScript that wait for a specific event 
//    (like a click, key press, mouse movement) and then execute the code you define.

// Syntax for addEventListener:
// element.addEventListener(event, function, useCapture);

// Example:
// const view = document.getElementById("view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// const doSomething = () => {
//     alert("Doing something!");
// };

// // ✅ Adding an event listener
// h2.addEventListener("click", doSomething, false);

// // ❌ Removing an event listener
// h2.removeEventListener("click", doSomething, false);

// // ⚠️ Cannot remove if it's an anonymous function
// h2.addEventListener("click", (event) => {
//     console.log(event.target); 
//     // Change text content after clicking
//     event.target.textContent = "Clicked";
// });

// Example Output:
// <h2>My 2nd View</h2>

// ----------------------------
// # useCapture in addEventListener
// Syntax: addEventListener(event, function, useCapture)

// useCapture → Boolean that decides when the event is handled in the event flow:
// true  → Use capturing phase (event goes from top-level element down to the target).
// false → Use bubbling phase (event goes from the target up to the top-level element).
// Default is false.

// Event flow phases:
// 1. Capturing: Document → Parent → Child (top-down)
// 2. Target: Event reaches the exact clicked element
// 3. Bubbling: Child → Parent → Document (bottom-up)


// 2. readystatechange Event
// -> An event that ensures it’s safe to start working with the DOM when the page loads.
// -> It’s like saying "the page is loaded".
// -> The event fires when the document’s ready state changes.
// -> When the readyState becomes "complete", the DOM is fully loaded and ready for interaction.
// -> At this point, we can safely call initApp() to:
// -> Initialize our app.
// -> Attach event listeners.
// -> Start interacting with the DOM.
// -> Essentially: Your page is now ready.

// Case 1: useCapture is false (Bubbling phase)
// Flow: Event travels upwards — Child → Parent → Document.
// Example sequence when clicking on <h2>:
// <h2> text changes (its click handler runs).
// Event bubbles up to <div> → background color changes to blue.
// Event bubbles up to <section id="view2"> → background color changes to purple.
// Why it bubbles? Because useCapture is false (default behavior).
// Bubbling order: Child → Parent → Ancestors (bottom-up).

// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") {
//         console.log("readyState: complete");
//         initApp();
//     }
// });

// const initApp = () => {
//     const view = document.getElementById("view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     view.addEventListener("click", () => {
//         view.style.backgroundColor = "purple";
//     }, false);

//     div.addEventListener("click", () => {
//         div.style.backgroundColor = "blue";
//     }, false);

//     h2.addEventListener("click", (event) => {
//         event.stopPropagation(); // Stops bubbling up
//         event.target.textContent = "Content Changed";
//     }, false);
// };


// Case 2: useCapture is true (Capturing phase)
// Flow: Event travels downwards — Document → Parent → Child.
// Example sequence when clicking on <h2>:
// <section id="view2"> listener runs first (outermost) → changes background to purple and stops propagation.
// Event doesn’t go deeper because of stopPropagation().
// Capturing order: Document → Ancestors → Target (top-down).
// Useful when you want the outer element to handle the event first.

// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") {
//         console.log("readyState: complete");
//         initApp();
//     }
// });

// const initApp = () => {
//     const view = document.getElementById("view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     view.addEventListener("click", (event) => {
//         event.stopPropagation();
//         view.style.backgroundColor = "purple";
//     }, true); // Capturing

//     div.addEventListener("click", () => {
//         div.style.backgroundColor = "blue";
//     }, true);

//     h2.addEventListener("click", (event) => {
//         event.target.textContent = "Content Changed";
//     }, true);
// };

// eg-3:
// -> event.target always refers to the element that was actually clicked
//    (or the element that triggered the event if it's not a click).
// -> It does NOT necessarily refer to the element that the event listener is attached to.
// -> If you click on a child element, event.target will be that child.
// -> If you want the element that the event listener is attached to, use event.currentTarget.

// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") {
//         console.log("readyState: complete");
//         initApp();
//     }
// });

// const initApp = () => {
//     const view = document.getElementById("view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     view.addEventListener("click", (event) => {
//         event.target.style.backgroundColor = "purple"; // Applies to the clicked element
//     }, false);

//     div.addEventListener("click", (event) => {
//         event.target.style.backgroundColor = "blue"; // Applies to the clicked element
//     }, false);

//     h2.addEventListener("click", (event) => {
//         event.target.textContent = "Content Changed"; // Changes text of clicked <h2>
//     }, false);
// };

// eg-4:
// In this project SASS is used for styling.
// We are styling the view using classes.
// Alternative approach: using `classList.toggle()` makes it easy to add/remove a style.
// `toggle` checks if the class exists:
//   - If not present → adds it.
//   - If present → removes it.
// When we click on certain elements, styles or text will toggle.

// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") {
//         console.log("readyState: complete");
//         initApp();
//     }
// });

// const initApp = () => {
//     const view = document.getElementById("view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     view.addEventListener("click", (event) => {
//         // Adding and removing classes manually:
//         // view.classList.remove("darkblue"); // removes old style <section id="view2" class="view2 darkblue">
//         // view.classList.add("purple"); // applies new style

//         // Toggling classes (alternative):
//         // view.classList.toggle("darkblue");
//         // view.classList.add("purple");
//     }, false);

//     div.addEventListener("click", (event) => {
//         // Toggles between .blue and .black
//         div.classList.toggle("blue");
//         div.classList.toggle("black");
//     }, false);

//     h2.addEventListener("click", (event) => {
//         // Toggles the text content on click
//         const myText = event.target.textContent;
//         myText === "My 2nd View"
//             ? event.target.textContent = "Text Changed"
//             : event.target.textContent = "My 2nd View";
//     }, false);

//     // Adding height to nav bar on hover using toggle
//     const nav = document.querySelector("nav");
//     nav.addEventListener("mouseover", () => {
//         nav.classList.toggle("height100");
//     });

//     // Alternative: Add on mouseover, remove on mouseout
//     /*
//     nav.addEventListener("mouseover", () => {
//         nav.classList.add("height100");
//     });

//     nav.addEventListener("mouseout", () => {
//         nav.classList.remove("height100");
//     });
//     */
// };


// eg-5:
// ->it relodes page by clicking on submit;
// ->prevented default behaviour of the form.

// eg-5:
// - By default, submitting a form reloads the page.
// - We prevent this default behavior using event.preventDefault().
// - This allows us to handle the form submission entirely with JavaScript 
//   (e.g., validate data, send via AJAX) without reloading.

// Wait for the document to fully load before running initApp
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

// Listen to the form submit event using addEventListener
const initApp = () => {
    // Select the view that contains the form
    const view3 = document.querySelector("#view3");

    // Select the form element inside view3
    const myForm = view3.querySelector("#myForm");

    // Handle the form's submit event
    myForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Stop page reload
        console.log("submit event"); // Custom logic can go here
    });
};


// Key takeaways from the code:
// submit event → Triggered when form is submitted.

// event.preventDefault() → Stops the browser from doing its normal form submission (page reload).

// Listening with addEventListener → Keeps JS logic separate from HTML and allows multiple listeners if needed.

// DOMContent ready check (readystatechange) → Ensures elements exist before attaching event listeners.

