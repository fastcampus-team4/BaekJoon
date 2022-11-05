const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let ans = 0;

for (s of input[1]) {
  ans += Number(s);
}
console.log(ans);
