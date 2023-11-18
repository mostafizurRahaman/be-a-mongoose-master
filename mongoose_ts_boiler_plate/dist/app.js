"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// create application :
const app = (0, express_1.default)();
// parsers :
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// main route:
app.get('/', (req, res) => {
    const a = 20;
    console.log(a);
    console.log(a);
    res.send('Yah!!! our server is running now.......');
});
// export :
exports.default = app;
