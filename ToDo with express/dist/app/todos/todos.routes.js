"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongodb_1 = require("../../config/mongodb");
exports.todosRouter = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
exports.todosRouter.get("/", (req, res) => {
    // const data = fs.readFileSync(filePath,{encoding:"utf-8"});
    //  console.log(data)
    res.send({
        message: "From Todos Router",
        // data
    });
});
exports.todosRouter.post('/create-todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongodb_1.client.db("todosDB");
    const collection = yield db.collection("todos");
    collection.insertOne({
        title: "Mongodb",
        description: "Learning  Mongodb",
        priority: "High",
        isCompleted: false
    });
    const todos = collection.find({});
    res.json(todos);
}));
exports.todosRouter.get("/:title", (req, res) => {
    const { body, title } = req.body;
    console.log(body, title);
    res.send('Hello world');
});
exports.todosRouter.put("/update-todo/:title", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("Hello World");
});
exports.todosRouter.delete("/delete-todo/:title", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("Hello world");
});
