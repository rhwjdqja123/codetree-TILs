const fs = require("fs");
let a  = fs.readFileSync(0).toString().trim()

if (a %2 ===1 && a%3 ===1  || (a%2 ===0 && a%5)){
    console.log("true")
}
else{
    console.log("false");
}