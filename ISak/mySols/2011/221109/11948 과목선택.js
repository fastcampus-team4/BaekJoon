const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let x =
  input.slice(0, 4).reduce((a, b) => a + b, 0) - Math.min(...input.slice(0, 4));
let y = input.slice(4).reduce((a, b) => a + b, 0) - Math.min(...input.slice(4));

console.log(x + y);
