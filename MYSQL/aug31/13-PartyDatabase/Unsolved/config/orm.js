var connection = require("./connection.js");

var orm = {
    logPartyInfo: function(column, table) {
        // "SELECT party_name FROM parties"
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [column, table], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },

    logPartyByType: function(table, column, type) {
        // "SELECT * FROM parties WHERE party_type = grown_up"
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [table, column, type], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;