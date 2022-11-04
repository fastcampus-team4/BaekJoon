const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
input.pop();

let ans = "";

for (s of input) {
  ans += `${s.split("").reverse().join("")}\n`;
}
console.log(ans);
