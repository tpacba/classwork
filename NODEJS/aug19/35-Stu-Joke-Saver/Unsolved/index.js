const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

// grab from website
axios.get("https://icanhazdadjoke.com/", config)
  .then(function(res) {
    let joke = JSON.stringify(res.data.joke) + "\n";
    return appendFileAsync("jokes.txt", joke, "utf8") //returns txt file
  })
  .then(function() {
    return readFileAsync("jokes.txt", "utf8") //returns data
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(err) {
    console.log(err)
  })