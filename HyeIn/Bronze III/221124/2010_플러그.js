// https://www.acmicpc.net/problem/2010
let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let ans = input[1];

for (let i = 2; i < input.length; i++) {
  ans += input[i] - 1;
}
console.log(ans);
