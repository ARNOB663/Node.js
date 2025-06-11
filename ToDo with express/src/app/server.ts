import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
import { Collection } from '../../../node_modules/mongodb/src/collection';
import { client } from "../config/mongodb";
let server;
const port = 3000;





const bootstrap =  async () => {
    await client.connect();
    console.log("connected to mongodb")
    server = app.listen(port,()=>{
     
      console.log(`Example server listioning on port ${port}`)
    })

}

bootstrap()