// https://www.acmicpc.net/problem/9086
const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);
for (let i = 1; i <= N; i++) {
  let ans = "";
  let text = input[i].trim();
  ans += text[0] + text[text.length - 1];

  console.log(ans);
}
