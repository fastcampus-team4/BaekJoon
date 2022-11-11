const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

N = Number(input);
let ans = "";
for (let i = N; i > 0; i--) {
  ans += " ".repeat(N - i) + "*".repeat(i * 2 - 1) + "\n";
}
console.log(ans);
