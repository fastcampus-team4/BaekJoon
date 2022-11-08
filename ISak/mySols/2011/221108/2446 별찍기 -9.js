const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

N = Number(input);
let ans = "";
for (let i = 0; i < N; i++) {
  ans += " ".repeat(i) + "*".repeat(2 * (N - i) - 1) + "\n";
}
for (let i = N - 2; i >= 0; i--) {
  ans += " ".repeat(i) + "*".repeat(2 * (N - i) - 1) + "\n";
}
console.log(ans);
