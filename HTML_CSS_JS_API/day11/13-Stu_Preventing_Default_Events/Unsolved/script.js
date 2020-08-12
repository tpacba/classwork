var meal = document.querySelector("#meal-amount");
var tipPercent = document.querySelector("#tip-percent");
var submit = document.querySelector("#submit");
var tipAmount = document.querySelector("#tip-amount");
var total = document.querySelector("#new-total");

function calculateTip(amount, percent) {
    var total = parseFloat(amount) * (parseFloat(percent)/100);
    return total;
}




submit.addEventListener("click", function(event) {
    event.preventDefault();
    
    tipAmount.innerHTML = calculateTip(meal.value, tipPercent.value);
    total.innerHTML = parseFloat(meal.value) + calculateTip(meal.value, tipPercent.value);
})