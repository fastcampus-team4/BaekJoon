const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.shift();
let ans = "";
for (x of input) {
  ans += `${x.toLowerCase()}\n`;
}
console.log(ans);
