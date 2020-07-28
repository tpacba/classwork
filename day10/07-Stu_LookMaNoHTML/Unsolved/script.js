// Step 1 - create an element in a variable
var heading1 = document.createElement("h1");

//Step 2 - give it content
heading1.textContent = "This is an h1 text hopefully.";

//Step 2a - give it attributes
heading1.setAttribute("style", "text-align: center");

//Step 3 - append that child
document.body.appendChild(heading1);

console.log(heading1);

var listing = document.createElement("li");

listing.textContent = "item 1", ""

