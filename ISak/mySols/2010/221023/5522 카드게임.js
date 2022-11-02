// https://www.acmicpc.net/problem/5522
const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);

sum = 0;

for (let i = 0; i < input.length; i++) {
  sum += input[i];
}
console.log(sum);
