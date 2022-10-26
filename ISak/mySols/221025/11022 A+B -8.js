const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
let ans = "";

for (let i = 1; i <= T; i++) {
  const x = input[i].split(" ").map(Number);

  ans += `Case #${i}: ${x[0]} + ${x[1]} = ${x[0] + x[1]}\n`;
}
console.log(ans);
