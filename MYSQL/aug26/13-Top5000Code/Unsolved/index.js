var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "OneYear_95",
  database: "top_songsDB"
});
connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});
function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Find songs by artist",
        "Find all artists who appear more than once",
        "Find data within a specific range",
        "Search for a specific song",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Find songs by artist":
        artistSearch();
        break;
      case "Find all artists who appear more than once":
        multiSearch();
        break;
      case "Find data within a specific range":
        rangeSearch();
        break;
      case "Search for a specific song":
        songSearch();
        break;
      case "exit":
        connection.end();
        break;
      }
    });
}
function artistSearch() {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?"
    })
    .then(function(answer) {


      console.log("Searching for artist...\n");
      connection.query(
          "SELECT * FROM top5000 WHERE ?",
          {
            artist: answer.artist
          },
          function(err, res) {
            if (err) throw err;
            console.log(res);
            connection.end();
          }
          )


          
    });
}
function multiSearch() {
    connection.query(
        "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1",
        function(err, res) {
          if (err) throw err;
          console.log(res);
          connection.end();
        }
        )
}
function rangeSearch() {
  inquirer
    .prompt([
      {
        name: "start",
        type: "input",
        message: "Enter starting position: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "end",
        type: "input",
        message: "Enter ending position: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      //Query goes here
    });
}
function songSearch() {
  inquirer
    .prompt({
      name: "song",
      type: "input",
      message: "What song would you like to look for?"
    })
    .then(function(answer) {
      console.log(answer.song);
      //Query goes here
    });
}