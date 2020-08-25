const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

let animals = [];

async function combineAnimals() {
  try {
    


    await readFileAsync("cat.json", "utf8").then(function(data) {
      let animalJSON = JSON.parse(data)
      animals.push(animalJSON);
    })

    await readFileAsync("dog.json", "utf8").then(function(data) {
      let animalJSON = JSON.parse(data)
      animals.push(animalJSON);
    })

    await readFileAsync("goldfish.json", "utf8").then(function(data) {
      let animalJSON = JSON.parse(data)
      animals.push(animalJSON);
    })

    await readFileAsync("hamster.json", "utf8").then(function(data) {
      let animalJSON = JSON.parse(data)
      animals.push(animalJSON);
    })

    await writeFileAsync("combined.json", JSON.stringify(animals, null, 2), "utf8")
    .then(function() {
      console.log("Success!")
    })

  } catch(err) {
    console.log(err)
  }
}

combineAnimals();
