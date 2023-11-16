import express, { NextFunction, Request, Response } from "express";

// create an app:
const app = express();

// get middleware or parsers :
app.use(express.json());
app.use(express.text());

// middleware function:
const checkToken = (req: Request, res: Response, next: NextFunction) => {
   if (!(req.body.token === "my")) {
      return res.status(403).send({
         success: false,
         message: "UnAuthorized User",
      });
   }
   next();
};

// create an main route:
app.get("/", (req: Request, res: Response) => {
   res.send("Yah!!! Your Server is running now...... 🚴‍♀️");
});

// use Router :
const userRouter = express.Router();
const courseRouter = express.Router();

// user the Router :
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.get(
   "/get_users",
   checkToken,
   (req: Request, res: Response, next: NextFunction) => {
      console.log(req.body);
      res.status(200).send({
         success: true,
         message: "User found successfully",
         data: req.body,
      });
   }
);

courseRouter
   .route("/")
   .post((req: Request, res: Response, next: NextFunction) => {
      res.status(200).send({
         success: true,
         message: "Course created successfully",
         data: req.body,
      });
   })
   .get((req: Request, res: Response, next: NextFunction) => {
      try {
         res.status(200).json({
            success: true,
            message: "Courses found successfully",
            data: somethings,
         });
      } catch (error) {
         next(error); 
      }
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

// global router if router not found : 
app.all("*", (req: Request, res: Response)=>{
      res.status(500).send({
         success: false, 
         message: "Router not found success"
      })
})

// global error Handler:
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
   console.log(error);
   if (error) {
      res.status(400).send({
         success: false,
         message: "Something went wrong..........",
      });
   }
});

export default app;
