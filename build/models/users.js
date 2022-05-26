"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const userSchema = new mongoose_2.Schema({
    name: {},
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.default.model("User", userSchema);
