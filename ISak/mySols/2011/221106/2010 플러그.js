const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let N = input[0];
let ans = input[1];
for (let i = 1; i < N; i++) {
  ans = ans - 1 + input[i + 1];
}
console.log(ans);
