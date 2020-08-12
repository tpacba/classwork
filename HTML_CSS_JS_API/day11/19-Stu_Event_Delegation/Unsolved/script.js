var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var people = [{ name: "Bob" }];
var currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = people.length; // This determines the id accordingly
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

function open(event) {
  event.preventDefault();
  console.log("Don't worry it's gonna work!");
  if(event.target.matches("button")) {
    currentId = parseInt(event.target.parentElement.id);
    console.log(event.target.parentElement);
    console.log(currentId);
    console.log(people[currentId]);
    modalNameEl.textContent = people[currentId].name;
    descriptionEl.value = people[currentId].description;

  
    modalEl.style.display = "block"; // What does block even mean
  }
}

function close() {
  modalEl.style.display = "none"; // Closes the block
}

function handleClick() {
  // Use event delegation to handle when the user clicks "edit"
}

function save() {
  console.log("You're doing great!");
    event.preventDefault();
    people[currentId].description = descriptionEl.value;
    close();
}


closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);

peopleListEl.addEventListener("click", open);
saveBtn.addEventListener("click", save)



