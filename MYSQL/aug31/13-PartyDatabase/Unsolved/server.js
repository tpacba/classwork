var orm = require("./config/orm.js");

// console log the 'party_name' column in the table 'parties'
orm.logPartyInfo("party_name", "parties");

// console log the 'client_name' column in the table 'clients'
orm.logPartyInfo("client_name", "clients");

// console log all the info from 'parties' table where 'party_type' is 'grown-up'
orm.logPartyByType("parties", "party_type", "grown-up");

