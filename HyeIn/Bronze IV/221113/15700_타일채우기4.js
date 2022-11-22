let filePath = process.platform === "linux" ? 0 : "example.txt";
let [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);
let answer = BigInt((n * m) / 2n);
console.log(answer.toString());
