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
    database: "greatBay_DB"
});

// makes sure you're connected to mysql
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    run();
});

// makes sure that everything is asynchronous
async function run() {
    try {
        // saves the response of the user to variable response: "POST AN ITEM" or "BID ON AN ITEM"
    var response = await inquirer.prompt([
        {
            type: "list",
            message: "POST or BID?",
            name: "select",
            choices: [
                "POST AN ITEM",
                "BID ON AN ITEM"
            ]
        }
    ])

    console.log(response.select);

    // if user chose "post an item"
    if (response.select == "POST AN ITEM") {

        // asks the user for values for item name, category, and starting bid, then saves it into variable answers
        var answers = await inquirer.prompt([
            {
                type: "input",
                message: "Name of the item?",
                name: "item_name"
            },
            {
                type: "input",
                message: "Category of the item?",
                name: "category"
            },
            {
                type: "input",
                message: "Starting bid of the item?",
                name: "starting_bid"
            },
            {
                type: "confirm",
                message: "Would you like to do more?",
                name: "again"
            }
        ])

        // runs postItem function with the answers as its parameters
        await postItem(answers.item_name, answers.category, answers.starting_bid);

        // use recursion to run the function again if the user wants to do more
        if (answers.again) {
            run();
        } else {
            connection.end();
            return "thank you"
        }

        // if use chose "bid on an item"
    } else if (response.select == "BID ON AN ITEM") {
        await bidItem();
        connection.end();
    }
    }
    catch(err) {
        throw err
    }
}

function postItem(item_name, category, starting_bid) {
    console.log("Inserting a new product...\n");
    var query = connection.query(
        "INSERT INTO auctions SET ?",
        {
            item_name: item_name,
            category: category,
            starting_bid: starting_bid
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " product inserted!\n");
        }
    )
    console.log(query.sql);
}


function bidItem() {
    // gets the data from the table auctions
    connection.query("SELECT * FROM auctions", function (err, res) {
        if (err) throw err;

        var whichItem = inquirer.prompt([
            {
                type: "list",
                message: "All the items:",
                name: "items",
                choices: function () {
                    var choicesArray = [];
                    for (const value of res) {
                        choicesArray.push(`${value.id}. ${value.item_name}`);
                    }
                    return choicesArray;
                }
            }
        ])

        var id = whichItem.split(".")[0];
        console.log(id);

        // var bid = inquirer.prompt([
        //     {
        //         type: "input",
        //         message: "How much would you like to bid?",
        //         name: "amount"
        //     }
        // ])

        // var query = connection.query(
        //     "UPDATE highest_bid SET ? WHERE ?",
        //     [
        //         {
        //             highest_bid: bid
        //         },
        //         {
        //             id: 
        //         }
        //     ]
        // )
    });
}