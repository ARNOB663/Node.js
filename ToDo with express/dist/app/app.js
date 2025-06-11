"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./todos/todos.routes");
const app = (0, express_1.default)();
//middleware does auto parsirng 
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
app.use("/users", userRouter);
app.use("/todos", todos_routes_1.todosRouter);
// data base pass dk7LeQXPtjYWVHuX
app.get('/', (req, res) => {
    res.send("Hello World!!! he he");
});
// app.get('/todos',(req: Request,res : Response)=>{
//    console.log(req.query)
//     const data = fs.readFileSync(filePath,{encoding:"utf-8"});
//    //  console.log(data)
//     res.send(data)
// })
//
//[app] - express.json - [...] - [todosrouter] - [rootrouter] - [...] - [post todo create todo]
exports.default = app;
