const http = require("http")
const path = require("path")
const fs = require("fs")
const { json } = require("stream/consumers")


const filePath = path.join(__dirname,"./db/todo.json")




const server = http.createServer((req,res)=>{
  //Get all todos


const url = new URL(req.url, `http://${req.headers.host}`);
const pathname = url.pathname
// console.log(url,"url")


   if(pathname==="/todos" && req.method === "GET"){

     const data = fs.readFileSync(filePath,{encoding:"utf-8"})
    res.writeHead(201,{
        "content-type" : "application/json",       
    })
    res.end(data)
   }
 
  //post a todo or create todo

   else if(pathname==="/todos/create-todo" && req.method === "POST"){
    let data = ""

    req.on("data",(chunk)=>{
       data = data + chunk
    })
     
    req.on("end",()=>{
        console.log(data)
        const {title,body} = JSON.parse(data)
           console.log({title,body})  
       const createdAt = new Date().toLocaleString()
       const allTodos = fs.readFileSync(filePath,{encoding : "utf-8"})
       const parseData = JSON.parse(allTodos)
       parseData.push({title,body,createdAt});
       fs.writeFileSync(filePath,JSON.stringify(parseData,null,2),{encoding : "utf-8"})

      res.end(JSON.stringify({title,body,createdAt},null,2));
    })
   }
   //Get a single ToDo
   else if(pathname ==="/todo" && req.method === "GET"){

    const title  = url.searchParams.get("title")
    console.log(title)
     const data = fs.readFileSync(filePath,{encoding:"utf-8"})
     const parseData = JSON.parse(data)

     const todo = parseData.find((todo)=>todo.title ===title)
     
     const stringifyTodo = JSON.stringify(todo)

    res.end(stringifyTodo)
   }

   //Update todo
    else if(pathname==="/todos/update-todo" && req.method === "PATCH"){
        const title  = url.searchParams.get("title")
    let data = ""

    req.on("data",(chunk)=>{
       data = data + chunk
    })
     
    req.on("end",()=>{
       
        const {body} = JSON.parse(data)

           console.log({title,body})  

       const allTodos = fs.readFileSync(filePath,{encoding : "utf-8"})
       const parseData = JSON.parse(allTodos)

      const todoIndex = parseData.findIndex((todo)=>todo.title === title)
      
      parseData[todoIndex].body = body
       
      fs.writeFileSync(filePath,JSON.stringify(parseData,null,2),{encoding : "utf-8"})

      res.end(JSON.stringify({title,body,createdAt:parseData[todoIndex].createdAt },null,2));
    })
   }
   //Delete todo
    else if(pathname==="/todo/delete-todo" && req.method === "DELETE"){
        const title  = url.searchParams.get("title")
     
    const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parseData = JSON.parse(allTodos);

      const filteredTodos = parseData.filter((todo)=>todo.title !== title)
      
      fs.writeFileSync(filePath, JSON.stringify(filteredTodos, null, 2), { encoding: "utf-8" });
     
      res.end(JSON.stringify({ message: `Todo with title "${title}" deleted.` }));
    }


   //else
   else{
     res.end("Route not found")
   }
})
const port = 5000;
server.listen(port,"127.0.0.1",()=>{
   console.log(`server in running to port ${port}`)
})