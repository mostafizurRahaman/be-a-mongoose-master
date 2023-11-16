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
// create an main route:
app.get("/", (req, res) => {
    res.send("Yah!!! Your Server is running now...... 🚴‍♀️");
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
exports.default = app;
