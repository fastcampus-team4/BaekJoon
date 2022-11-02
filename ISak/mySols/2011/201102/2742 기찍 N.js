const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString();
input = Number(input);
let ans = "";
for (let i = input; i > 0; i--) {
  ans += `${i}\n`;
}
console.log(ans);
