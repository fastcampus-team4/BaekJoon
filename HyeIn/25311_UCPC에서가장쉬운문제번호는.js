let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = Number(input);

console.log("A");

/* 뭐야 이게 */
