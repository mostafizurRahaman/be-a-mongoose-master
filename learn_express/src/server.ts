import { Server } from "http";
import app from "./app";

const PORT = 5000;

let server: Server;

// create a server wrapper function:
async function bootstrap() {
   app.listen(PORT, () => {
      console.log(`Server is running on Port: ${PORT}`);
   });
}

bootstrap();
