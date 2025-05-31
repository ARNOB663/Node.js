//const {a,add,b} = require("./file-2.js");
import ADD ,{a,b} from "./file2.mjs"
import React  from "react";
// import ADD  from "./file2.mjs";
//import {a:a3,add: add3,b:b3} from "./file3.mjs"
import {a as a3, add as add3 ,b as b3} from "./file3.mjs"
console.log(a);
console.log(ADD.add(2,3));
console.log(b);
console.log(a3);
console.log(add3(2,3,4));
console.log(b3);

