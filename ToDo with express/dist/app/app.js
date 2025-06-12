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
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./todos/todos.routes");
const promises_1 = require("inspector/promises");
const console_1 = require("console");
const app = (0, express_1.default)();
//middleware does auto parsirng 
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
app.use("/users", userRouter);
app.use("/todos", todos_routes_1.todosRouter);
// data base pass dk7LeQXPtjYWVHuX
app.get('/', (req, res, next) => {
    promises_1.console.log({
        url: req.url,
        method: req.method,
        header: req.header
    });
    next();
}, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        promises_1.console.log(something);
        res.send("welcome to the todo app");
    }
    catch (_a) {
        promises_1.console.log(console_1.error, console_1.error);
        res.status(400).json({ message: "something went wrong", error: console_1.error });
    }
}));
// app.get('/todos',(req: Request,res : Response)=>{
//    console.log(req.query)
//     const data = fs.readFileSync(filePath,{encoding:"utf-8"});
//    //  console.log(data)
//     res.send(data)
// })
//
//[app] - express.json - [...] - [todosrouter] - [rootrouter] - [...] - [post todo create todo]
exports.default = app;
