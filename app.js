const { newDataLogger, errorLogger, objectLogger } = require("./utils/logger");
const util = require("util");
let testObject = {
  name: "testObject",
  value: "This is a test object",
};

const timeDelay = () => {
  setTimeout(() => {
    let timestamp = new Date().toLocaleString();
    let message = `This is a test message from the timeDelay() function at ${timestamp}`;
    console.log("timeDelay has been called");
    newDataLogger.log(message);
  }, 3000);
};

const errorTest = async () => {
  try {
    console.log("errorTest has been called");
    throw new Error("This is an error message from the errorTest() function");
  } catch (error) {
    errorLogger.log(error);
  }
};

const objectTest = (object) => {
  console.log("objectTest has been called");
  objectLogger.log(
    `let object = ${util.inspect(object, { showHidden: false, depth: null })}`
  );
};

timeDelay();
errorTest();
objectTest(testObject);
