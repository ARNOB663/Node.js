
( (require,__dirname,__filename,module) => {
let a =10
(   
    (name) => {
        let a = 10; //befoure scope 
    console.log(`Learning ${name}`)
})("node")

  console.log(a);
  console.log(module);
  console.log(__dirname);
 })(require,__dirname,__filename,module)

