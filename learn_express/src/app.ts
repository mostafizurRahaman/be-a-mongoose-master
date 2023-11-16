import express, { Request, Response } from "express";

// create an app:
const app = express();

// get middleware or parsers :
app.use(express.json());
app.use(express.text());

// create an main route:
app.get("/", (req: Request, res: Response) => {
   res.send("Yah!!! Your Server is running now...... 🚴‍♀️");
});

// create an post  api:
app.post("/:userId/:email", (req: Request, res: Response) => {
   const { userId, email } = req.params;
   console.log(userId, email);
   const { gender, age } = req.query;
   console.log(gender, age);
   console.log(req.body);

   res.status(200).send({ message: req.body });
});
export default app;
