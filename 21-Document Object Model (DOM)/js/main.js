// // 21. DOM -Document Object Model

// const view1=document.getElementById("view1")
// // console.log(view1);
// const view2=document.querySelector("#view2");
// // console.log(view2);

// // hiding views
// view1.style.display="flex";
// view2.style.display="flex";


// const view=document.getElementsByClassName("view");
// // console.log(view);
// const sameViews=document.querySelectorAll(".view");
// // console.log(sameViews);

// // selecting divs which are inside view1
// const divs=view1.querySelectorAll("div");
// // console.log(divs);

// // getting same divs by tag name
// const sameDivs=view1.getElementsByTagName("div");
// // console.log(sameDivs);

// // select even divs
// const evenDivs=view1.querySelectorAll("div:nth-of-type(2n)");
// // console.log(evenDivs);

// for(let i=0;i<evenDivs.length;i++){
//     evenDivs[i].style.backgroundColor="orange";
//     evenDivs[i].style.width="200px";
//     evenDivs[i].style.height="200px";
// }


// // changing nav text
// // Selecting the <h1> inside <nav>
// const navText = document.querySelector("nav h1");
// // console.log(navText); // Output: <h1>My Page</h1>

// // 👉 Using textContent: Only the text inside the element is changed (structure remains the same)
// navText.textContent = "My Grids";

// // Selecting the entire <nav> element
// const navbar = document.querySelector("nav");

// // 👉 Using innerHTML: The entire HTML inside <nav> is replaced
// navbar.innerHTML = "<h1>My Grid Pattern</h1> <p>This should align right</p>";
// console.log(navbar);


// // navbar.style.justifyContent="flex-end";
// // navbar.style.justifyContent="flex-start";
// // navbar.style.justifyContent="space-evenly";


// navigating through to DOM tree
const evenDivs=view1.querySelectorAll("div:nth-of-type(2n)");
// console.log(evenDivs);

for(let i=0;i<evenDivs.length;i++){
    evenDivs[i].style.backgroundColor="orange";
    evenDivs[i].style.width="200px";
    evenDivs[i].style.height="200px";
}

console.log(evenDivs[0]); //div

// navigating parent of the div element
console.log(evenDivs[0].parentElement); //section#view1.view.view1


// navigate all childrens of parent of divs(section)
console.log(evenDivs[0].parentElement.children)

// child nodes -> they are not just elements but elements and texts
console.log(evenDivs[0].parentElement.childNodes)





