const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let [L, A, B, C, D] = input;

let x = A / C;
let y = B / D;
let leftDays = L - Math.max(x, y);

console.log(Math.floor(leftDays));
