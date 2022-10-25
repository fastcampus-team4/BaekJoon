let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
console.log(input + "??!");

/* 
공백 제거할 것
*/
