const http = require("http")

const server = http.createServer((req,res)=>{
   if(req.url==="/todos" && req.method === "GET"){
    // res.writeHead(201,{
    //     "content-type" : "test/plain",
    //     "email" : "test@gmail.com"
    // })
   res.setHeader("content-type","text/plain");
   res.setHeader("email","test@gmail.com")
   

    res.end("Hellow Todos")
   }
   else if(req.url==="/todos/create-todo" && req.method === "POST"){
      res.end("ToDo Created");
   }else{
     res.end("Route not found")
   }
})
const port = 5000;
server.listen(port,"127.0.0.1",()=>{
   console.log(`server in running to port ${port}`)
})