const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

let ans = "";
for (let i = input; i >= 1; i -= 1) {
  ans += `${"*".repeat(i)}\n`;
}
console.log(ans);
