let filePath = process.platform === "linux" ? 0 : "example.txt";
let [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

console.log((a + b).toString());
