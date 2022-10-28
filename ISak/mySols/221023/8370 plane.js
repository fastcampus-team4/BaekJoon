// https://www.acmicpc.net/problem/8370
const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

let [n1, k1, n2, k2] = input;

console.log(n1 * k1 + n2 * k2);
