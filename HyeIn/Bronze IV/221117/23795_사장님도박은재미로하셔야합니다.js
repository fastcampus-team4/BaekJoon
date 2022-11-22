let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input = input.slice(0, -1);
let answer = input.reduce((a, b) => a + b, 0);
console.log(answer);
