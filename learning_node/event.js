const EventEmitter = require("events");

// create an instance for EventEmitter:

const myEvent = new EventEmitter();

// create an event :
myEvent.on("playing", () => {
   console.log(`Colo Cricket khelte jai`);
});

//create another event :
myEvent.on("writing", () => {
   console.log(`Colo boi likhi`);
});

// create another event :
myEvent.on("reading", (...books) => {
   console.log(`${books.join(",")} ai books gula porte cai`);
});

myEvent.emit("playing");
myEvent.emit("writing");
myEvent.emit(
   "reading",
   "physics",
   "algorithm",
   "biology",
   "database",
   "chemistry",
   "operating system"
);

