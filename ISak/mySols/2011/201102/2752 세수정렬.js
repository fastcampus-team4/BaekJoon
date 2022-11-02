const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
  .join(" ");

console.log(input);
