const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input;

let ans = "";
for (let i = 1; i <= n; i++) {
  ans += " ".repeat(n - i) + "*".repeat(i) + "\n";
}
for (let i = n - 1; i >= 1; i--) {
  ans += " ".repeat(n - i) + "*".repeat(i) + "\n";
}
console.log(ans);
