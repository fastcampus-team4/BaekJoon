const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
if (M > 0) {
  let ans = "";
  for (let i = 1; i <= N; i++) {
    ans += `${input[i].split("").reverse().join("")}\n`;
  }
  console.log(ans);
}
