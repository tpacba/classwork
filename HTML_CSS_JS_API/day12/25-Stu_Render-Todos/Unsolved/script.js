var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript", "Brush my teeth"];

document.addEventListener("submit", function(event){
    event.preventDefault();

    // Get the value that was typed by the user in todoInput
    var additem = todoInput.value;

    // Push the same value into the todos array
    todos.push(additem);

    // Run the function displaylist to see all the items in the array todos
    displaylist();
})


function displaylist() {
    // Makes sure that every time the function is called innerHTML gets reseted, so it doesn't keep adding up the lists
    todoList.innerHTML = "";

    // Counts each item from the todos array
    for (var i = 0; i < todos.length; i++) {
        // Gives us the count of how many are in the list at a time
        todoCountSpan.textContent = todos.length;
    
        // Create the list using document.create()
        var listItems = document.createElement("li");

        // Assign the inner text to each item from the todos array
        listItems.textContent = todos[i];

        // Create button along with the list item
        var buttons = document.createElement("button");

        // Give the button some text
        buttons.textContent = "Complete!";

        // Give the button an attribute called data-index, have its value follow the count
        buttons.setAttribute("data-index", i);

        // Append each button into each item
        listItems.appendChild(buttons);

        // Append each list into the container todoList
        todoList.appendChild(listItems);
    }
}

todoList.addEventListener("click", getrid);

function getrid(event) {
    event.preventDefault;

    if(event.target.matches("button")) {
        console.log("You're doing all right!")
        var index = event.target.getAttribute("data-index");
        todos.splice(index, 1);
        displaylist();
    }
}


displaylist();