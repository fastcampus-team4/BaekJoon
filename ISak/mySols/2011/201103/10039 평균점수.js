const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = input.reduce((acc,cur) => acc+Math.max(cur,40), 0)
console.log(sum/5)