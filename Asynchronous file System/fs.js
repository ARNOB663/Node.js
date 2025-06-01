const fs = require("fs")

const text = "write some thing"




fs.readFile("hellow.txt",{encoding : "utf-8"},(err,data)=>{
  if(err){
    console.error("Error reading file",err)
    return;
  }
  else{
    fs.writeFile("./test.txt",data, { encoding: "utf-8" }, (err,data) => {
    if (err) {
        console.log("error", err);
        return;
    } else {
        console.log("file written successfully",data);
    }
});
  }
})