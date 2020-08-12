var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

// Change the clickdown menu
eventType.addEventListener("change", toggleDisplay);


// To try to log the key pressed down
document.addEventListener("keydown", logKey);

function logKey (some) {
  // Change the text from ID line 25
  document.querySelector("#key").textContent = some.key;
  // Change the text from ID line 28
  document.querySelector("#code").textContent = some.code;
  // Change the text from ID line 31
  document.querySelector("#status").textContent = some.type;

  console.log(some);
}