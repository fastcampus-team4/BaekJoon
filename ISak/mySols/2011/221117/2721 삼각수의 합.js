const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function sol(n) {
  sum = 0;
  for (let k = 1; k <= n; k++) {
    sum += (k * (k + 1) * (k + 2)) / 2;
  }
  return sum;
}
let ans = "";
const T = input[0];

for (let i = 1; i <= T; i++) {
  ans += `${sol(input[i])}\n`;
}
console.log(ans);
