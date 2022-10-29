const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

let N = Math.ceil(Number(input) / 4);
let ans = "";

for (let i = 0; i < N; i++) {
  ans += "long ";
}
ans += "int";
console.log(ans);
