"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
// Connect to MongoDB
const db = "mongodb+srv://SaadAbihassou:<db_password>@expensesdb.r9tvd.mongodb.net/";
mongoose_1.default
    .connect(db)
    .then(() => {
    console.log("Connected to MongoDB...");
})
    .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
});
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
