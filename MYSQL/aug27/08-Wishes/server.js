var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "OneYear_95",
    database: "wishes_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM wishes;", function(err, data) {
        if (err) throw err;
            console.log('The solution is: ', data);
            res.render("index", { wishes: data });
        });
});

app.post("/", function(req, res) {
    connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.mywish], function(err, result) {
        console.log("req.body = " + req.body)
        if (err) throw err;
        res.redirect("/");
    });
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});