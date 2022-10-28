const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(BigInt);

console.log((A + B).toString());
