import * as logger from "./utils/logger";
const util = require("util");

const testFunction = () => {
  let timestamp = new Date().toLocaleString();
  let message = `This is a test message from the timeDelay() function at ${timestamp}`;
  logger.newDataLogger.log(`${timestamp} - ${message}`);
};

testFunction();

// there are 2 ways to import the generated logging functions.
// One is by importing them directly one at a time as seen in app.js, and the other is seen here by importing all the exports from the logger.js file as an object.
