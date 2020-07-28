var add = document.querySelector("#increment");
var minus = document.querySelector("#decrement");
var show = document.querySelector("#count");
var sum = 0;

add.addEventListener("click", function() {
    sum++;
    show.innerHTML = sum;
})

minus.addEventListener("click", function() {
    if (sum == 0) {
        sum = 0;
        return;
    }
    sum--;
    show.innerHTML = sum;
})

