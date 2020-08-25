var inquirer = require("inquirer");
var fs = require("fs");

inquirer
.prompt([
{
    type: "input",
    name: "name",
    message: "What is your name?"
}, {
    type: "checkbox",
    name: "language",
    message: "What languages do you know?",
    choices: ["HTML","CSS","JS"]
}, {
    type: "list",
    name: "prefer",
    message: "What is your preferred method of communciation?",
    choices: ["email","phone", "text"]
}
]).then(function(response) {
    var file = response.name.split(" ").join("") + ".json";
    fs.writeFile(file, JSON.stringify(response, null, "\t"), function(error) {
        if (error) {
            return console.log("you suck")
        }
        console.log("you're ok")
    })
})