const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const lis = input[1].split(" ").map(Number);
const scores = [];
let ans = 0;
for (let i = 0; i < lis.length; i++) {
  if (lis[i] === 1) {
    let x = scores[scores.length - 1] ? scores[scores.length - 1] + 1 : 1;
    scores.push(x);
    ans += x;
  } else {
    scores.push(0);
  }
}
console.log(ans);
