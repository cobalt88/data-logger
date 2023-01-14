const fs = require("fs");
const Console = require("console").Console;

// custom logging functions can be called or named whatever you want and can be configured to log data to any file you define.
// I like to use them for logging errors, new data, and objects to a file for later use or analysis as well to keep a running log of what is happening in my application.

//The basic syntax is as follows:

const customLogger = new Console({
  stdout: fs.createWriteStream("./path to log file goes here", {
    flags: "a", // the a flag makes it so anything written to the file will be appended to the end of the file instead of overwriting it. There are other flags in the fs module that do different things.
  }),
});

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

//this one writes to a js file specifically for capturing objects to api return statements.
const objectLogger = new Console({
  stdout: fs.createWriteStream("./logs/objectLog.js", {
    flags: "a",
  }),
});

// export the custom logging functions so they can be used in other files
module.exports = {
  newDataLogger,
  errorLogger,
  objectLogger,
};
