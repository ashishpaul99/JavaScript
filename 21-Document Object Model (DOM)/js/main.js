// 21. DOM - Document Object Model

// ✅ Selecting elements
// const view1 = document.getElementById("view1");           // By ID
// const view2 = document.querySelector("#view2");           // By CSS selector

// // Show both views as flex containers
// view1.style.display = "flex";
// view2.style.display = "flex";

// // ✅ Selecting multiple elements
// const view = document.getElementsByClassName("view");     // HTMLCollection (live)
// const sameViews = document.querySelectorAll(".view");     // NodeList (static)

// // ✅ Selecting all <div> inside view1
// const divs = view1.querySelectorAll("div");               // NodeList
// const sameDivs = view1.getElementsByTagName("div");       // HTMLCollection

// // ✅ Select only even-numbered divs (2nd, 4th, etc.) in view1
// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
// for (let i = 0; i < evenDivs.length; i++) {
//     evenDivs[i].style.backgroundColor = "orange";
//     evenDivs[i].style.width = "200px";
//     evenDivs[i].style.height = "200px";
// }

// // ✅ Changing nav text
// // Select <h1> inside <nav>
// const navText = document.querySelector("nav h1");
// // textContent → changes only text (no HTML parsing)
// navText.textContent = "My Grids";

// // Select entire <nav> element
// const navbar = document.querySelector("nav");
// // innerHTML → replaces entire HTML content (parses HTML tags)
// navbar.innerHTML = "<h1>My Grid Pattern</h1> <p>This should align right</p>";

// // ✅ Align nav items (uncomment one at a time to see effect)
// navbar.style.display = "flex";              // Make it a flex container
// // navbar.style.justifyContent = "flex-end";    // Align items to right
// // navbar.style.justifyContent = "flex-start";  // Align items to left
// // navbar.style.justifyContent = "space-evenly"; // Equal spacing between items


// eg-2:
// Select all even-numbered divs inside #view1
const evenDivs = document.querySelectorAll("#view1 div:nth-of-type(2n)");
console.log("Even Divs:", evenDivs);

// Loop through and style them
for (let i = 0; i < evenDivs.length; i++) { // use < not <= to avoid "undefined"
    evenDivs[i].style.backgroundColor = "orange";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}

// Example DOM navigation:
console.log("First even div:", evenDivs[0]);

// Parent of first even div
console.log("Parent element:", evenDivs[0].parentElement);

// HTMLCollection of parent's children
console.log("Parent children:", evenDivs[0].parentElement.children);

// NodeList of all child nodes (includes text nodes like spaces/newlines)
console.log("Parent childNodes:", evenDivs[0].parentElement.childNodes);

// Check if parent has child nodes
console.log("Has child nodes?", evenDivs[0].parentElement.hasChildNodes());

// First and last child nodes
console.log("First child node:", evenDivs[0].parentElement.firstChild);
console.log("Last child node:", evenDivs[0].parentElement.lastChild);

// First and last element children
console.log("First element child:", evenDivs[0].parentElement.firstElementChild);
console.log("Last element child:", evenDivs[0].parentElement.lastElementChild);

// Sibling navigation
console.log("Next sibling node:", evenDivs[0].nextSibling);
console.log("Next element sibling:", evenDivs[0].nextElementSibling);
console.log("Previous sibling node:", evenDivs[0].previousSibling);
console.log("Previous element sibling:", evenDivs[0].previousElementSibling);



// Adding and removing elements from page
// eg-3:
const view1 = document.getElementById("view1");
const view2 = document.getElementById("view2");

// Hide view1 and style view2
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

// Remove all existing children from view2
while (view2.lastChild) {
    view2.lastChild.remove();
}

// Function to create a styled div
const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.background = "#000";
    newDiv.style.color = "#fff";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};

// Create 12 divs
for (let i = 1; i <= 12; i++) {
    createDivs(view2, i);
}





