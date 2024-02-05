const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]) / 100;
let b = Number(input[1]);

let c =parseInt( b/ (a**2));
console.log(c);
if (c >= 25) {
   
  console.log("Obesity");
   
}