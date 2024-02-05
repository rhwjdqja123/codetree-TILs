const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]) ;


let c = (a**2);
console.log(c);
if (a < 5) {
   
  console.log("tiny");
   
}