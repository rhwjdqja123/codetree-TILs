const fs = require("fs");
let n =  Number(fs.readFileSync(0).toString().trim());
let b =  Number(fs.readFileSync(0).toString().trim());


let c = n/ (b*b);
console.log(c);
if (c > 25) {
   
  console.log("Obesity");
   
}