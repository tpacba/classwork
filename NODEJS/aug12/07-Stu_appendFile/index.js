var fs = require("fs");

// first parmeter is path, the file that you want to append to
// second parameter is the string, the message you want to append
fs.appendFile("message.txt", "This is the first message", function(error) {
    if (error) {
        return console.log(error);
    }
    console.log("good boi");
});