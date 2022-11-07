const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [x, y, w, h] = input;

console.log(Math.min(x, w - x, h - y, y));
