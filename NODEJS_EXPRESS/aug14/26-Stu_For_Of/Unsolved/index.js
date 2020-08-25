const songs = document.querySelectorAll("li");

for (const value of songs) {
    value.setAttribute("class", "red")
    console.log(value);
}