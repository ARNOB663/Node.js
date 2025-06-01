//Synchronous way file read
//file read /I/O-> intensive task single thread -> must go to thread pool

//Asynchronous
//file read ->single thread ->event loop -> thread pool -> task completetion
const fs =  require('fs')

console.log("Task 1")

const text = "file system 2";

const data = fs.readFileSync("./hellow.txt",{encoding : "utf-8"})

console.log("task 2")

fs.writeFileSync("./test.txt",text)

console.log("Task 3")


console.log(data)
console.log(`file have been writen to ${text}`)
