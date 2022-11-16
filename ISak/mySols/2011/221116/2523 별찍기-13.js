const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString();
const N = Number(input);
let ans = "";
for (let i = 1; i <= N; i++) {
  ans += "*".repeat(i) + "\n";
}
for (let i = N - 1; i >= 1; i--) {
  ans += "*".repeat(i) + "\n";
}
console.log(ans);
