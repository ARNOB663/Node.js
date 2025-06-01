const { error } = require("console")
const fs = require("fs")

const readStream = fs.createReadStream("./text1.txt",{encoding:"utf-8"})
const writeStream = fs.createWriteStream("./hello.txt",{encoding:"utf-8"})

readStream.on("data",(data)=>{
    console.log(data)

    writeStream.write(data,(err)=>{
         if(err){
            throw Error("Error",err)
         }
         else{

         }
    })

})

// readStream.on("error",(err)=>{
//     if(err){
//         throw Error("Error",err)
//     }

// })

writeStream.on(error,(err)=>{
    if(err){
        throw  new Error('Error',err);
    }
})

readStream.on('end',()=>{
    console.log("reading ended")
    writeStream.end()
})

writeStream.on('finish',()=>{
    console.log("write finished")

})