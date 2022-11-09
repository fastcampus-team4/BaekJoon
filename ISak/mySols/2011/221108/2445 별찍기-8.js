const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

N = Number(input);
let ans = "";
for (let i = 1; i < N; i++) {
  ans += "*".repeat(i) + " ".repeat((N - i) * 2) + "*".repeat(i) + "\n";
}
for (let i = N; i > 0; i--) {
  ans += "*".repeat(i) + " ".repeat((N - i) * 2) + "*".repeat(i) + "\n";
}
console.log(ans);
