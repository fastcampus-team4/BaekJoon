const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
input.shift();
let ans = "";

for (let i = 0; i < input.length; i++) {
  ans += `${i + 1}. ${input[i]}\n`;
}
console.log(ans);
