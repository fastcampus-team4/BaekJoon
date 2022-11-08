let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
let answer = input.charCodeAt() - 44031;

console.log(answer);
