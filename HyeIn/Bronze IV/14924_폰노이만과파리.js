let filePath = process.platform === "linux" ? 0 : "example.txt";
let [s, t, d] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
console.log((d / (s * 2)) * t);
