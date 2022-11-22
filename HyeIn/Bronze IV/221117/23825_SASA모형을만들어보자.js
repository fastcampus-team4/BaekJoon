let filePath = process.platform === "linux" ? 0 : "example.txt";
let [s, a] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = Math.min(parseInt(s / 2), parseInt(a / 2));
console.log(answer);
