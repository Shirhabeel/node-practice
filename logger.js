// var x =; // This will throw an error in the console. This is just to show how to debug in node.js. It will show the line number and the file name where the error is.

const EventEmitter = require("events");
// const emitter = new EventEmitter(); ///Don't need this

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log = (message) => {
    // Send an HTTP request
    console.log(message);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "https://" });
  };
}

module.exports = Logger; // Exporting the log function to be used in other files.

// module.exports = log; // Exporting the log function to be used in other files. This is use as log(mesaage) instead of logger.log(message) in other files.

// console.log(__filename); // This will give the file name with the path.

// console.log(__dirname); // This will give the directory name with the path.
