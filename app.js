// const logger = require('./logger'); // This will execute the logger.js file

// logger.log('Hello World!'); // Hello World!

// console.log(logger); // { log: [Function: log] }

// const sayHello = (name) => {
//     console.log(`${name} says hello!`);
// }

/* 

// sayHello('Shirhabeel')

// These are the  global objects in Node.js, they belong to window object in browser.
console.log(); // global object

setTimeout(); // global object
clearTimeout(); // global object

setInterval(); // global object
clearInterval(); // global object

// In Node.js, every file is a module, and the variables and functions defined in that file are scoped to that module.

var message = 'Shirhabeel'; // This variable is not added to the global object. but only with in this file

console.log(message); // Shirhabeel
console.log(global.message); // undefined

console.log(module); // module object

*/

// const path = require('path');
// var pathObj = path.parse(__filename);

// console.log(pathObj); // { root: 'C:\\', dir: 'C:\\Users\\Shirhabeel\\Desktop

// OPERATING SYSTEM

// const os = require('os');
// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log(`Total Memory is ${totalMemory} and Available Memory is ${freeMemory}` )

// FILE SYSTEM
// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files)

// fs.readdir('../', (err, files) => {
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });

/////////////// EVENTS /////////////////
// EventEmitter is basically a class in Node.js. It is used to raise and handle custom events.

// Register a listener
// Emit means making a noise and producing something

// const EventEmitter = require("events");
// // const emitter = new EventEmitter();

// const Logger = require('./logger')
// const logger = new Logger();

// // Register a listner
// logger.on("messageLogged", (arg) => {
//   console.log("Listner called", arg);
// });

// // Raise an event
// // emitter.emit("messageLogged", { id: 1, url: "https://" });

// // emitter.emit('messageLogged', {id: 1, url: "https://" });

// logger.log('message')

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World!");
    res.end();
  }

  if(req.url === '/api/courses') {
    res.write(JSON.stringify([1,2,3]));
    res.end();
  }
});

// server.on('connection', (socket) => {
//     console.log('New Connection...')
// })

server.listen(9000);

console.log("Listening on port 3000...");
