const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [A, B, C, D] = input.sort((a, b) => b - a);

console.log(Math.abs(A + D - C - B));
