var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Create a few array variables that will hold the data

var tables = [{
    customerName: "George Lopez",
    phoneNumber: "123-456-7890",
    customerEmail: "george@lopez.com",
    customerID: "1"
}];

var waitlist = [{
    customerName: "George Lopez",
    phoneNumber: "123-456-7890",
    customerEmail: "george@lopez.com",
    customerID: "1"
}]

// * Create a set of routes for displaying the HTML pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// * Create a set of routes for getting and posting table data
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist)
});

app.post("/api/tables", function(req, res) {
    var newReservation = req.body;

    console.log(tables);

    if (tables.length < 5) {
        tables.push(newReservation);
        res.json(true);
    } else {
        waitlist.push(newReservation);
        res.json(false);
    }

    
})

app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
});

