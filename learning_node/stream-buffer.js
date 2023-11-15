const http = require("http");
const fs = require("fs");
// create a server :
const server = http.createServer();

// create an event for request:

server.on("request", (req, res) => {
   if (req.url === "/read-file" && req.method === "GET") {
      // create a file read stream :
      const readStream = fs.createReadStream(__dirname + "/text/text.txt");

      // listen an event  for data:
      readStream.on("data", (chunk) => {
         res.write(chunk);
      });

      readStream.on("pause", () => {
         console.log("------------------");
         console.log("paused");
         console.log("------------------");
      });

      // readStream.on("resume", () => {
      //    console.log("------------------");
      //    console.log("resumed reading");
      //    console.log("------------------");
      // });

      setTimeout(() => {
         readStream.emit("pause");
      }, 1000);

      // setTimeout(() => {
      //    readStream.emit("resume");
      // }, 5000);

      readStream.on("end", () => {
         console.log("successfully reading data");
         res.end();
      });
   }
});

server.listen(5000, () => {
   console.log("server is running on port 5000");
});
