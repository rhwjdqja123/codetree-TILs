const fs = require("fs");
let a  = fs.readFileSync(0).toString().trim()

if (a>2 && a<6){
 console.log("Spring");
}
else if (a>5 && a<9) {
    console.log("Synner");
}
else if(a>8&&a<12){
    console.log("Fall");
}
else {
    console.log("Winter");
}