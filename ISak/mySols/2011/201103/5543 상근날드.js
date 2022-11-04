const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [A, B, C, D, E] = input;

console.log(Math.min(A, B, C) + Math.min(D, E) - 50);
