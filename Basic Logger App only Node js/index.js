// console.log(process.argv);
const fs = require("fs")

const path = require("path")

const inputArg = process.argv.slice(2)

const timeStamp = new Date().toISOString();


const text = inputArg.join(" ").concat("\n")

    const message = `${text} ${timeStamp}\n`

console.log(text)
if(!text){
    console.log("XXX Please provide a message to log");
     console.log("Example : node index.js Hello World!!");
     process.exit(1)
}

const filePath = path.join(__dirname,"log.txt");


fs.appendFile(filePath,message,{encoding: "utf-8"},()=>{
    
   console.log("Your Log added successfully")
   
})

// console.log(filePath)
// fs.writeFile("./log.txt",text,(err)=>{
//     if(err){
//         throw Error("error",err)
//     }
//     else{
//         console.log(text,"is written")
//     }

// })