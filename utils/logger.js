const fs = require("fs");
const Console = require("console").Console;

//create a custom logging function that will write to a file whatever is passed to it
const newDataLogger = new Console({
  stdout: fs.createWriteStream("./logs/newData.log", {
    flags: "a",
  }),
});

//custom error logger that will append to a file
const errorLogger = new Console({
  stdout: fs.createWriteStream("./logs/error.log", {
    flags: "a",
  }),
});

//this one writes to a js file specifically for capturing obvects to api return statements.
const objectLogger = new Console({
  stdout: fs.createWriteStream("./logs/objectLog.js", {
    flags: "a",
  }),
});

module.exports = {
  newDataLogger,
  errorLogger,
  objectLogger,
};
