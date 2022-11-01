let filePath = process.platform === "linux" ? 0 : "example.txt";
let [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log((a + b) * (a - b));
