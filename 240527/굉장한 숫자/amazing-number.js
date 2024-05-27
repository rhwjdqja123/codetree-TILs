const fs = require("fs");
let a  = fs.readFileSync(0).toString().trim()

if (a %2 ===0 || (a%2 ===1 && a>=10)){
    console.log("special")
}
else{
    console.log("normal");
}