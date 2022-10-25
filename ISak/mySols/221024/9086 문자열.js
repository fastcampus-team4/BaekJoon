// https://www.acmicpc.net/problem/9086
const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);

for (i = 1; i <= N; i++) {
  let txt = input[i];
  let result = txt[0] + txt[txt.length - 1];
  console.log(result);
}
