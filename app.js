const { newDataLogger, errorLogger, objectLogger } = require("./utils/logger");
const util = require("util");
let testObject = {
  name: "testObject",
  value: "This is a test object",
};

// Here I am showcasing the syntax needed to add a timestamp to your function when its running in a functions that is on a continuous timer.
const timeDelay = () => {
  setTimeout(() => {
    let timestamp = new Date().toLocaleString();
    let message = `This is a test message from the timeDelay() function at ${timestamp}`;
    console.log("timeDelay has been called");
    newDataLogger.log(message);
  }, 3000);
};

// I used an asynchronous function here to ahow the utility of this particular function. I like to use it for api calls and routes, or any other fully automated function process.
const errorTest = async () => {
  try {
    console.log("errorTest has been called");
    throw new Error("This is an error message from the errorTest() function");
  } catch (error) {
    errorLogger.log(error);
  }
};

// This function is used to log objects to the objectLog.js file and makes use of the Console, fs, and util modules that are natively available in Node.js
const objectTest = (object) => {
  console.log("objectTest has been called");
  objectLogger.log(
    `let loggedObject = ${util.inspect(object, {
      showHidden: false,
      depth: null,
    })}`
  );
};

timeDelay();
errorTest();
objectTest(testObject);
