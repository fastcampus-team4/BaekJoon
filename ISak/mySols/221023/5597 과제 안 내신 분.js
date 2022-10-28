//https://www.acmicpc.net/problem/5597
const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);

for (let i = 1; i <= 30; i++) {
  if (input.indexOf(i) === -1) {
    console.log(i);
  }
}
