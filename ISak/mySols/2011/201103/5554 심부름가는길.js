const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let time = input.reduce((a, c) => a + c, 0);

const sec = time % 60;
const min = parseInt(time / 60, 10);

console.log(`${min}\n${sec}`);
