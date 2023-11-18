"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// dotenv setup with process.cwd() :
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
module.exports = {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URI,
};
