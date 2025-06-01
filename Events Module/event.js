const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on('ring',() =>{
  console.log("cutiiii!!!");
});
schoolBell.on('broken',() =>{
  console.log("belle is broken");
});
schoolBell.on('ring',() =>{
  console.log("one more class");
});

schoolBell.emit("ring")
schoolBell.emit("broken")