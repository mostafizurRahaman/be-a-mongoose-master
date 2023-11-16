"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// create an app:
const app = (0, express_1.default)();
// get middleware or parsers :
app.use(express_1.default.json());
app.use(express_1.default.text());
// middleware function:
const checkToken = (req, res, next) => {
    if (!(req.body.token === "my")) {
        return res.status(403).send({
            success: false,
            message: "UnAuthorized User",
        });
    }
    next();
};
// create an main route:
app.get("/", (req, res) => {
    res.send("Yah!!! Your Server is running now...... 🚴‍♀️");
});
// use Router :
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// user the Router :
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.get("/get_users", checkToken, (req, res, next) => {
    console.log(req.body);
    res.status(200).send({
        success: true,
        message: "User found successfully",
        data: req.body,
    });
});
courseRouter
    .route("/")
    .post((req, res, next) => {
    res.status(200).send({
        success: true,
        message: "Course created successfully",
        data: req.body,
    });
})
    .get((req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            message: "Courses found successfully",
            data: somethings,
        });
    }
    catch (error) {
        next(error);
    }
});
// create an post  api:
app.post("/:userId/:email", (req, res) => {
    const { userId, email } = req.params;
    console.log(userId, email);
    const { gender, age } = req.query;
    console.log(gender, age);
    console.log(req.body);
    res.status(200).send({ message: req.body });
});
// global router if router not found : 
app.all("*", (req, res) => {
    res.status(500).send({
        success: false,
        message: "Router not found success"
    });
});
// global error Handler:
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).send({
            success: false,
            message: "Something went wrong..........",
        });
    }
});
exports.default = app;
