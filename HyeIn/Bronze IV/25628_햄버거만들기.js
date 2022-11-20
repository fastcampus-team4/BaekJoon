let filePath = process.platform === "linux" ? 0 : "example.txt";
let [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
console.log(Math.min(parseInt(a / 2), parseInt(b / 1)));
